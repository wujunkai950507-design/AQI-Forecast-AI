function predictAQI() {
  const t = Number(temp.value);
  const h = Number(humidity.value);
  const pm = Number(pm25.value);
  const co2 = Number(co2.value);

  // AI 模擬預測（加權模型）
  const aqi = Math.round(
    pm * 1.2 +
    co2 * 0.02 +
    t * 0.8 -
    h * 0.3
  );

  let level = "良好";
  let cls = "good";

  if (aqi > 100) { level = "不良"; cls = "bad"; }
  else if (aqi > 50) { level = "普通"; cls = "normal"; }

  const box = document.getElementById("result");
  box.className = `result ${cls}`;
  box.innerHTML = `
    <strong>AI 預測 AQI：${aqi}</strong><br/>
    空氣品質等級：${level}
  `;
  box.classList.remove("hidden");
}
