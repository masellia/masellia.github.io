document.addEventListener("DOMContentLoaded", () => {
  const trendButtons = document.querySelectorAll(".nfl-trend");
  if (!trendButtons.length) return;

  const svgNamespace = "http://www.w3.org/2000/svg";

  const svgElement = (name, attributes = {}) => {
    const element = document.createElementNS(svgNamespace, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  const metricMeta = (metricId, rawValue) => {
    if (metricId === "penalties_yards") {
      return { decimals: 0, averageDecimals: 0, suffix: " yd", axisSuffix: "" };
    }
    if (rawValue.includes("%")) {
      return { decimals: 1, averageDecimals: 1, suffix: "%", axisSuffix: "%" };
    }
    if (rawValue.includes("pp")) {
      return { decimals: 1, averageDecimals: 1, suffix: " pp", axisSuffix: "" };
    }
    if (rawValue.includes("sec/play")) {
      return { decimals: 1, averageDecimals: 1, suffix: " sec/play", axisSuffix: "" };
    }
    if (metricId.includes("epa")) {
      return { decimals: 3, averageDecimals: 3, suffix: "", axisSuffix: "" };
    }
    if (metricId === "turnover_margin") {
      return { decimals: 0, averageDecimals: 1, suffix: "", axisSuffix: "" };
    }
    return { decimals: 1, averageDecimals: 1, suffix: "", axisSuffix: "" };
  };

  const numericValue = (metricId, rawValue) => {
    const source = metricId === "penalties_yards" ? rawValue.split("/")[1] : rawValue;
    return Number.parseFloat(String(source).replace("−", "-").trim());
  };

  const formatNumber = (value, decimals) => {
    const rounded = value.toFixed(decimals);
    return decimals === 0 ? rounded : rounded.replace(/\.0+$/, "");
  };

  const parseButtonData = (button) => {
    let series = [];
    try {
      series = JSON.parse(button.dataset.series || "[]");
    } catch (_error) {
      return null;
    }

    const firstRawValue = series[0]?.value || "";
    const meta = metricMeta(button.dataset.metricId, firstRawValue);
    const points = series
      .map((point) => {
        const value = numericValue(button.dataset.metricId, point.value);
        const display = button.dataset.metricId === "penalties_yards"
          ? `${formatNumber(value, 0)} yd`
          : point.value;
        return { ...point, value, display };
      })
      .filter((point) => Number.isFinite(point.value));

    if (!points.length) return null;

    return {
      metricId: button.dataset.metricId,
      label: button.dataset.metricLabel,
      meta,
      points,
      average: points.reduce((sum, point) => sum + point.value, 0) / points.length,
    };
  };

  const chartGeometry = (points, average, width, height, padding) => {
    const values = points.map((point) => point.value);
    let minimum = Math.min(...values, average);
    let maximum = Math.max(...values, average);
    const span = maximum - minimum;
    const buffer = span === 0 ? Math.max(Math.abs(maximum) * 0.12, 1) : span * 0.14;
    minimum -= buffer;
    maximum += buffer;

    const firstWeek = points[0].week;
    const lastWeek = points[points.length - 1].week;
    const x = (week) => points.length === 1
      ? width / 2
      : padding.left + ((week - firstWeek) / (lastWeek - firstWeek)) * (width - padding.left - padding.right);
    const y = (value) => padding.top + ((maximum - value) / (maximum - minimum)) * (height - padding.top - padding.bottom);

    return { minimum, maximum, x, y };
  };

  const renderSparkline = (button, data) => {
    const width = 170;
    const height = 54;
    const geometry = chartGeometry(data.points, data.average, width, height, {
      top: 7,
      right: 7,
      bottom: 7,
      left: 7,
    });
    const svg = svgElement("svg", {
      class: "nfl-trend-sparkline",
      viewBox: `0 0 ${width} ${height}`,
      "aria-hidden": "true",
      focusable: "false",
    });

    svg.append(svgElement("line", {
      class: "nfl-trend-average",
      x1: 4,
      x2: width - 4,
      y1: geometry.y(data.average),
      y2: geometry.y(data.average),
    }));

    if (data.points.length > 1) {
      svg.append(svgElement("polyline", {
        class: "nfl-trend-line",
        points: data.points.map((point) => `${geometry.x(point.week)},${geometry.y(point.value)}`).join(" "),
      }));
    }

    data.points.forEach((point) => {
      const circle = svgElement("circle", {
        class: "nfl-trend-point",
        cx: geometry.x(point.week),
        cy: geometry.y(point.value),
        r: 3.3,
      });
      const title = svgElement("title");
      title.textContent = `${point.label}: ${point.display}`;
      circle.append(title);
      svg.append(circle);
    });

    button.replaceChildren(svg);
    button.classList.add("is-ready");
  };

  const dialog = document.createElement("dialog");
  dialog.className = "nfl-trend-dialog";
  dialog.setAttribute("aria-labelledby", "nfl-trend-dialog-title");

  const closeButton = document.createElement("button");
  closeButton.className = "nfl-trend-dialog-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close trend chart");
  closeButton.textContent = "\u00d7";

  const heading = document.createElement("h3");
  heading.id = "nfl-trend-dialog-title";
  const summary = document.createElement("p");
  summary.className = "nfl-trend-dialog-summary";
  const chart = document.createElement("div");
  chart.className = "nfl-trend-dialog-chart";
  dialog.append(closeButton, heading, summary, chart);
  document.body.append(dialog);

  let trigger = null;

  const renderExpandedChart = (data) => {
    const width = 760;
    const height = 390;
    const padding = { top: 38, right: 35, bottom: 58, left: 78 };
    const geometry = chartGeometry(data.points, data.average, width, height, padding);
    const svg = svgElement("svg", {
      class: "nfl-trend-expanded",
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-label": `${data.label} Packers trend`,
    });

    const tickCount = 5;
    for (let index = 0; index < tickCount; index += 1) {
      const ratio = index / (tickCount - 1);
      const value = geometry.maximum - ratio * (geometry.maximum - geometry.minimum);
      const y = geometry.y(value);
      svg.append(svgElement("line", {
        class: "nfl-trend-gridline",
        x1: padding.left,
        x2: width - padding.right,
        y1: y,
        y2: y,
      }));
      const label = svgElement("text", {
        class: "nfl-trend-axis-label",
        x: padding.left - 12,
        y: y + 4,
        "text-anchor": "end",
      });
      label.textContent = `${formatNumber(value, data.meta.decimals)}${data.meta.axisSuffix}`;
      svg.append(label);
    }

    data.points.forEach((point) => {
      const x = geometry.x(point.week);
      const label = svgElement("text", {
        class: "nfl-trend-axis-label",
        x,
        y: height - 24,
        "text-anchor": "middle",
      });
      label.textContent = point.label.replace("Week ", "W");
      svg.append(label);
    });

    svg.append(svgElement("line", {
      class: "nfl-trend-average",
      x1: padding.left,
      x2: width - padding.right,
      y1: geometry.y(data.average),
      y2: geometry.y(data.average),
    }));

    if (data.points.length > 1) {
      svg.append(svgElement("polyline", {
        class: "nfl-trend-line",
        points: data.points.map((point) => `${geometry.x(point.week)},${geometry.y(point.value)}`).join(" "),
      }));
    }

    data.points.forEach((point) => {
      const x = geometry.x(point.week);
      const y = geometry.y(point.value);
      svg.append(svgElement("circle", {
        class: "nfl-trend-point",
        cx: x,
        cy: y,
        r: 5,
      }));
      const valueLabel = svgElement("text", {
        class: "nfl-trend-value-label",
        x,
        y: Math.max(y - 12, 18),
        "text-anchor": "middle",
      });
      valueLabel.textContent = point.display;
      svg.append(valueLabel);
    });

    chart.replaceChildren(svg);
  };

  trendButtons.forEach((button) => {
    const data = parseButtonData(button);
    if (!data) return;
    renderSparkline(button, data);
    button.addEventListener("click", () => {
      trigger = button;
      heading.textContent = data.label;
      const average = `${formatNumber(data.average, data.meta.averageDecimals)}${data.meta.suffix}`;
      summary.textContent = `Packers game values through ${data.points.at(-1).label} · dashed line: weekly average ${average}`;
      renderExpandedChart(data);
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => trigger?.focus());
});
