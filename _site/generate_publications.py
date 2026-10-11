#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path
from collections import OrderedDict
import yaml

INPUT = Path("_data/publications.bib")
OUTPUT = Path("_data/publications.yml")

ARXIV_ID_RE = re.compile(
    r"^(?P<year>\d{2})(?P<month>0[1-9]|1[0-2])\.(?P<number>\d+)(?:v\d+)?$"
)

if not INPUT.exists() and Path("/mnt/data/publications.bib").exists():
    INPUT = Path("/mnt/data/publications.bib")
    OUTPUT = Path("/mnt/data/publications.yml")

LATEX_REPLACEMENTS = {
    r"{\~a}": "ã", r"{\~A}": "Ã",
    r"{\~o}": "õ", r"{\~O}": "Õ",
    r"{\`a}": "à", r"{\'a}": "á", r"{\"a}": "ä",
    r"{\`e}": "è", r"{\'e}": "é", r"{\"e}": "ë",
    r"{\`i}": "ì", r"{\'i}": "í", r"{\"i}": "ï",
    r"{\`o}": "ò", r"{\'o}": "ó", r"{\"o}": "ö",
    r"{\`u}": "ù", r"{\'u}": "ú", r"{\"u}": "ü",
    r"{\c c}": "ç", r"{\c{c}}": "ç",
    r"{\ss}": "ß",
    r"\&": "&",
}


def clean_latex(text: str) -> str:
    if text is None:
        return ""
    text = text.strip()
    for old, new in LATEX_REPLACEMENTS.items():
        text = text.replace(old, new)
    if text.startswith("{") and text.endswith("}"):
        text = text[1:-1].strip()
    text = text.replace("{", "").replace("}", "")
    text = re.sub(r"\\([A-Za-z]+)", r"\1", text)
    text = re.sub(r"\\(.)", r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def split_entries(bib: str):
    entries = []
    i = 0
    n = len(bib)
    while i < n:
        at = bib.find("@", i)
        if at == -1:
            break
        brace = bib.find("{", at)
        if brace == -1:
            break

        depth = 0
        in_quote = False
        escape = False
        j = brace

        while j < n:
            ch = bib[j]
            if ch == '"' and not escape:
                in_quote = not in_quote
            if not in_quote:
                if ch == "{":
                    depth += 1
                elif ch == "}":
                    depth -= 1
                    if depth == 0:
                        entries.append(bib[at:j + 1].strip())
                        i = j + 1
                        break
            escape = ch == "\\" and not escape
            if ch != "\\":
                escape = False
            j += 1
        else:
            break
    return entries


def parse_entry(entry: str):
    m = re.match(r"@([A-Za-z]+)\s*\{\s*([^,]+),", entry, re.S)
    if not m:
        return None

    kind, key = m.group(1), m.group(2).strip()
    body = entry[m.end():]
    if body.endswith("}"):
        body = body[:-1]

    fields = OrderedDict()
    pos = 0
    length = len(body)

    while pos < length:
        while pos < length and body[pos] in " \n\r\t,":
            pos += 1

        fm = re.match(r"([A-Za-z][A-Za-z0-9_\-]*)\s*=", body[pos:])
        if not fm:
            break

        name = fm.group(1)
        pos += fm.end()

        while pos < length and body[pos].isspace():
            pos += 1

        if pos >= length:
            break

        if body[pos] == '"':
            pos += 1
            start = pos
            depth = 0
            escape = False

            while pos < length:
                ch = body[pos]
                if ch == "{" and not escape:
                    depth += 1
                elif ch == "}" and not escape and depth > 0:
                    depth -= 1
                elif ch == '"' and not escape and depth == 0:
                    value = body[start:pos]
                    pos += 1
                    break

                escape = ch == "\\" and not escape
                if ch != "\\":
                    escape = False
                pos += 1
            else:
                value = body[start:pos]

        elif body[pos] == "{":
            depth = 1
            pos += 1
            start = pos

            while pos < length:
                ch = body[pos]
                if ch == "{":
                    depth += 1
                elif ch == "}":
                    depth -= 1
                    if depth == 0:
                        value = body[start:pos]
                        pos += 1
                        break
                pos += 1
            else:
                value = body[start:pos]

        else:
            start = pos
            while pos < length and body[pos] != ",":
                pos += 1
            value = body[start:pos].strip()

        fields[name.lower()] = value.strip()

    return kind, key, fields, entry


def format_single_author(author: str) -> str:
    author = author.strip()
    if "," in author:
        last, first = [x.strip() for x in author.split(",", 1)]
        first_initials = " ".join([f"{name[0]}." for name in first.split() if name])
        return f"{first_initials} {last}".strip()
    return author


def format_authors(raw: str) -> str:
    raw = clean_latex(raw)
    if not raw:
        return ""

    parts = [p.strip() for p in raw.split(" and ")]

    if any(p.lower() == "others" for p in parts):
        first_author = format_single_author(parts[0])
        return f"{first_author} et al."

    formatted = [format_single_author(p) for p in parts]

    if len(formatted) > 8:
        return f"{formatted[0]} et al."

    return ", ".join(formatted)


def format_journal(fields) -> str:
    journal = clean_latex(fields.get("journal", ""))
    booktitle = clean_latex(fields.get("booktitle", ""))
    volume = clean_latex(fields.get("volume", ""))
    number = clean_latex(fields.get("number", ""))
    pages = clean_latex(fields.get("pages", ""))
    year = clean_latex(fields.get("year", ""))
    doi = clean_latex(fields.get("doi", ""))

    venue = journal or booktitle

    if not venue and doi.startswith("10.21468/SciPostPhysCommRep"):
        venue = "SciPost Physics Community Reports"

    if not venue:
        return ""

    text = venue

    if volume:
        text += f" {volume}"

    if number:
        text += f"({number})"

    if pages:
        text += f", pp. {pages}"

    if year:
        text += f" ({year})"

    return text
    
def make_bibtex(entry: str) -> str:
    return entry.strip() + "\n"


def parse_arxiv_id(arxiv: str):
    match = ARXIV_ID_RE.fullmatch(arxiv.strip())
    if not match:
        return None

    return (
        2000 + int(match.group("year")),
        int(match.group("month")),
        int(match.group("number")),
    )


def main() -> int:
    bib = INPUT.read_text(encoding="utf-8")
    entries = split_entries(bib)

    records = []

    for idx, entry in enumerate(entries):
        parsed = parse_entry(entry)
        if not parsed:
            continue

        kind, key, fields, raw = parsed

        publication_year = clean_latex(fields.get("year", "Unknown")) or "Unknown"
        title = clean_latex(fields.get("title", "Untitled"))
        authors = format_authors(fields.get("author", ""))
        journal = format_journal(fields)
        arxiv = clean_latex(fields.get("eprint", ""))
        doi = clean_latex(fields.get("doi", ""))
        arxiv_id = parse_arxiv_id(arxiv)
        year = str(arxiv_id[0]) if arxiv_id else publication_year
        
        rec = OrderedDict()
        rec["title"] = title

        if authors:
            rec["authors"] = authors
        if journal:
            rec["journal"] = journal
        if arxiv:
            rec["arxiv"] = arxiv
        if doi:
            rec["doi"] = doi

        rec["bibtex"] = make_bibtex(raw)
        records.append((year, idx, arxiv_id, rec))

    def year_key(y):
        try:
            return int(y)
        except Exception:
            return -9999

    grouped = OrderedDict()

    def record_sort_key(record):
        year, idx, arxiv_id, _ = record
        if arxiv_id:
            _, month, number = arxiv_id
            return (-year_key(year), 0, -month, -number, idx)
        return (-year_key(year), 1, 0, 0, idx)

    for year, _, _, rec in sorted(records, key=record_sort_key):
        grouped.setdefault(str(year), []).append(rec)

    data = []
    for year, papers in grouped.items():
        data.append(
            OrderedDict([
                ("year", int(year) if year.isdigit() else year),
                ("papers", papers),
            ])
        )

    class LiteralStr(str):
        pass

    def literal_str_representer(dumper, value):
        return dumper.represent_scalar("tag:yaml.org,2002:str", value, style="|")

    class Dumper(yaml.SafeDumper):
        pass

    def dict_representer(dumper, data):
        return dumper.represent_dict(data.items())

    Dumper.add_representer(OrderedDict, dict_representer)
    Dumper.add_representer(LiteralStr, literal_str_representer)

    for block in data:
        for paper in block["papers"]:
            paper["bibtex"] = LiteralStr(paper["bibtex"])

    out = yaml.dump(data, Dumper=Dumper, sort_keys=False, allow_unicode=True, width=1000)
    OUTPUT.write_text(out, encoding="utf-8")

    print(
        f"Parsed {len(entries)} BibTeX entries; "
        f"wrote {sum(len(b['papers']) for b in data)} papers to {OUTPUT}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
