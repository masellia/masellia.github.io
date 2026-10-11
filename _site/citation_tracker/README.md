# Local citation tracker

This directory is excluded through `.git/info/exclude`. Its scripts, caches, and workbook stay on this computer and are not deployed with the website.

## Output

`citation_tracker.xlsx` contains separate annual citation tables for INSPIRE and Google Scholar. Every table uses the first arXiv submission year for the cited paper, sorts papers newest-first by arXiv year and month, and begins with `OVERALL TOTAL` and `CITATIONS / MONTH` summary rows.

Historical monthly rates divide annual citations by 12. The current year uses the current calendar month, so a workbook generated in September divides the current-year count by 9.

Each source sheet includes two charts to the right of the table: annual citations by year and cumulative dated citations by year. Google Scholar's summary and charts use the aggregate annual graph from the public profile; per-paper values remain unresolved until their individual detail pages can be retrieved.

The year assignment is:

```text
assigned year = max(cited paper arXiv year, citing paper/source citation year)
```

This moves an a posteriori citation from a year before the cited paper existed into the cited paper's arXiv year. Citations without a recoverable arXiv-based year remain in `Unresolved year`, so source grand totals are preserved.

## Updating

Run both sources and rebuild the workbook:

```bash
python3 citation_tracker/update_citations.py
```

Rebuild from cached data without network requests:

```bash
python3 citation_tracker/update_citations.py --source workbook
```

Refresh only INSPIRE:

```bash
python3 citation_tracker/update_citations.py --source inspire --refresh
```

Resume Google Scholar using cached detail pages:

```bash
python3 citation_tracker/update_citations.py --source scholar --scholar-max-details 5
```

This requests at most five uncached paper histories, waiting ten seconds between successful requests. Missing papers are attempted before cached pages older than 30 days. Successful pages remain cached across runs.

Refresh the two Scholar profile pages while keeping article-detail caches:

```bash
python3 citation_tracker/update_citations.py --source scholar --scholar-refresh-profile --scholar-max-details 5
```

Refresh Scholar profile matching without making article-detail requests:

```bash
python3 citation_tracker/update_citations.py --source scholar --scholar-no-details
```

Google Scholar has no public API and may return HTTP 429. The collector stops making new requests when that happens, preserves all cached pages, assigns unfetched counts to `Unresolved year`, and can resume later. Wait before trying another batch after a rate-limit response; do not repeatedly retry.

## Workbook sheets

- `INSPIRE`: annual counts and totals for papers matched to arXiv.
- `Google Scholar`: the equivalent source-specific table.
- `Metadata`: profile URLs, collection timestamps, and counting rules.

Raw and unresolved records remain in the local JSON caches for audit and regeneration but are omitted from the Excel workbook.

All citations, including self-citations, are counted. INSPIRE and Scholar totals are intentionally kept separate because their citation sets overlap.
