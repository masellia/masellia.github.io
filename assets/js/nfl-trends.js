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
      return { decimals: 0, suffix: " yd", axisSuffix: "" };
    }
    if (rawValue.includes("%")) {
      return { decimals: 1, suffix: "%", axisSuffix: "%" };
    }
    if (rawValue.includes("pp")) {
      return { decimals: 1, suffix: " pp", axisSuffix: "" };
    }
    if (rawValue.includes("sec/play")) {
      return { decimals: 1, suffix: " sec/play", axisSuffix: "" };
    }
    if (metricId.includes("epa")) {
      return { decimals: 3, suffix: "", axisSuffix: "" };
    }
    if (metricId === "turnover_margin") {
      return { decimals: 0, suffix: "", axisSuffix: "" };
    }
    return { decimals: 1, suffix: "", axisSuffix: "" };
  };

  const numericValue = (metricId, rawValue) => {
    const text = String(rawValue);
    const source = metricId === "penalties_yards" && text.includes("/")
      ? text.split("/")[1]
      : text;
    return Number.parseFloat(String(source).replace("−", "-").trim());
  };

  const formatNumber = (value, decimals) => {
    const rounded = value.toFixed(decimals);
    return decimals === 0 ? rounded : rounded.replace(/\.0+$/, "");
  };

  const compactValue = (data, point) => {
    if (data.metricId === "penalties_yards") return formatNumber(point.value, 0);
    if (point.display.includes(" pp") || point.display.includes(" sec/play")) {
      return formatNumber(point.value, data.meta.decimals);
    }
    return point.display;
  };

  const parseSeries = (series, metricId) => series
    .map((point) => {
      const value = numericValue(metricId, point.value);
      const penaltyDecimals = Number.isInteger(value) ? 0 : 1;
      const display = metricId === "penalties_yards"
        ? `${formatNumber(value, penaltyDecimals)} yd`
        : point.value;
      return { ...point, value, display };
    })
    .filter((point) => Number.isFinite(point.value));

  const parseButtonData = (button) => {
    let series = [];
    let medianSeries = [];
    let topTierSeries = [];
    try {
      series = JSON.parse(button.dataset.series || "[]");
      medianSeries = JSON.parse(button.dataset.medianSeries || "[]");
      topTierSeries = JSON.parse(button.dataset.topTierSeries || "[]");
    } catch (_error) {
      return null;
    }

    const firstRawValue = series[0]?.value || "";
    const meta = metricMeta(button.dataset.metricId, firstRawValue);
    const points = parseSeries(series, button.dataset.metricId);
    const medianPoints = parseSeries(medianSeries, button.dataset.metricId);
    const topTierPoints = parseSeries(topTierSeries, button.dataset.metricId);

    if (!points.length) return null;

    return {
      metricId: button.dataset.metricId,
      label: button.dataset.metricLabel,
      meta,
      points,
      medianPoints,
      topTierPoints,
      topTierDirection: button.dataset.topTierDirection || null,
    };
  };

  const chartGeometry = (points, referencePoints, width, height, padding) => {
    const allPoints = [...points, ...referencePoints];
    const values = allPoints.map((point) => point.value);
    let minimum = Math.min(...values);
    let maximum = Math.max(...values);
    const span = maximum - minimum;
    const buffer = span === 0 ? Math.max(Math.abs(maximum) * 0.12, 1) : span * 0.14;
    minimum -= buffer;
    maximum += buffer;

    const firstWeek = Math.min(...allPoints.map((point) => point.week));
    const lastWeek = Math.max(...allPoints.map((point) => point.week));
    const x = (week) => firstWeek === lastWeek
      ? width / 2
      : padding.left + ((week - firstWeek) / (lastWeek - firstWeek)) * (width - padding.left - padding.right);
    const y = (value) => padding.top + ((maximum - value) / (maximum - minimum)) * (height - padding.top - padding.bottom);

    return { minimum, maximum, x, y };
  };

  const renderMedianSeries = (svg, data, geometry, pointRadius) => {
    if (data.medianPoints.length > 1) {
      svg.append(svgElement("polyline", {
        class: "nfl-trend-median-line",
        points: data.medianPoints.map((point) => `${geometry.x(point.week)},${geometry.y(point.value)}`).join(" "),
      }));
    }

    data.medianPoints.forEach((point) => {
      const circle = svgElement("circle", {
        class: "nfl-trend-median-point",
        cx: geometry.x(point.week),
        cy: geometry.y(point.value),
        r: pointRadius,
      });
      const title = svgElement("title");
      title.textContent = `${point.label} NFL median: ${point.display}`;
      circle.append(title);
      svg.append(circle);
    });
  };

  const renderTopTierZone = (svg, data, geometry, width, height, padding) => {
    if (!data.topTierDirection || !data.topTierPoints.length) return [];

    const coordinates = data.topTierPoints.length === 1
      ? [
        { x: padding.left, y: geometry.y(data.topTierPoints[0].value) },
        { x: width - padding.right, y: geometry.y(data.topTierPoints[0].value) },
      ]
      : data.topTierPoints.map((point) => ({
        x: geometry.x(point.week),
        y: geometry.y(point.value),
      }));
    const edgeY = data.topTierDirection === "higher" ? padding.top : height - padding.bottom;
    const polygonPoints = [
      `${coordinates[0].x},${edgeY}`,
      `${coordinates.at(-1).x},${edgeY}`,
      ...[...coordinates].reverse().map((point) => `${point.x},${point.y}`),
    ];
    svg.append(svgElement("polygon", {
      class: "nfl-trend-top-tier-zone",
      points: polygonPoints.join(" "),
    }));
    return coordinates;
  };

  const renderTopTierBoundary = (svg, coordinates) => {
    if (!coordinates.length) return;
    const boundary = svgElement("polyline", {
      class: "nfl-trend-top-tier-line",
      points: coordinates.map((point) => `${point.x},${point.y}`).join(" "),
    });
    const title = svgElement("title");
    title.textContent = "NFL top 25% threshold";
    boundary.append(title);
    svg.append(boundary);
  };

  const renderSparkline = (button, data) => {
    const width = 180;
    const height = 78;
    const geometry = chartGeometry(data.points, data.medianPoints, width, height, {
      top: 20,
      right: 9,
      bottom: 20,
      left: 9,
    });
    const svg = svgElement("svg", {
      class: "nfl-trend-sparkline",
      viewBox: `0 0 ${width} ${height}`,
      "aria-hidden": "true",
      focusable: "false",
    });

    svg.append(svgElement("line", {
      class: "nfl-trend-spark-axis",
      x1: 5,
      x2: width - 5,
      y1: height - 17,
      y2: height - 17,
    }));

    if (data.points.length > 1) {
      svg.append(svgElement("polyline", {
        class: "nfl-trend-line",
        points: data.points.map((point) => `${geometry.x(point.week)},${geometry.y(point.value)}`).join(" "),
      }));
    }

    renderMedianSeries(svg, data, geometry, 2.4);

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

      const valueLabel = svgElement("text", {
        class: "nfl-trend-spark-value",
        x: geometry.x(point.week),
        y: Math.max(geometry.y(point.value) - 7, 9),
        "text-anchor": "middle",
      });
      valueLabel.textContent = compactValue(data, point);
      svg.append(valueLabel);

      const weekLabel = svgElement("text", {
        class: "nfl-trend-spark-week",
        x: geometry.x(point.week),
        y: height - 5,
        "text-anchor": "middle",
      });
      weekLabel.textContent = point.label.replace("Week ", "W");
      svg.append(weekLabel);
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
    const geometry = chartGeometry(
      data.points,
      [...data.medianPoints, ...data.topTierPoints],
      width,
      height,
      padding,
    );
    const svg = svgElement("svg", {
      class: "nfl-trend-expanded",
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-label": data.topTierDirection
        ? `${data.label} Packers, weekly NFL median, and top-quartile trend`
        : `${data.label} Packers and weekly NFL median trend`,
    });
    const topTierCoordinates = renderTopTierZone(svg, data, geometry, width, height, padding);

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

    if (data.points.length > 1) {
      svg.append(svgElement("polyline", {
        class: "nfl-trend-line",
        points: data.points.map((point) => `${geometry.x(point.week)},${geometry.y(point.value)}`).join(" "),
      }));
    }

    renderMedianSeries(svg, data, geometry, 3.4);
    renderTopTierBoundary(svg, topTierCoordinates);

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
      summary.textContent = `Packers game values through ${data.points.at(-1).label} · `;
      const medianKey = document.createElement("span");
      medianKey.className = "nfl-trend-median-key";
      medianKey.textContent = "blue dashed line: weekly NFL median";
      summary.append(medianKey);
      if (data.topTierDirection) {
        summary.append(document.createTextNode(" · "));
        const topTierKey = document.createElement("span");
        topTierKey.className = "nfl-trend-top-tier-key";
        topTierKey.textContent = "shaded area: NFL top 25%";
        summary.append(topTierKey);
      }
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
