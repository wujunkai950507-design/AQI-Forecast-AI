alert("main.js 已載入");
// 讓按鈕 onclick="predictAQI()" 找得到
window.predictAQI = function () {
  const t = Number(document.getElementById("temp").value);
  const h = Number(document.getElementById("humidity").value);
  const pm = Number(document.getElementById("pm25").value);
  const co2 = Number(document.getElementById("co2").value);

  // AI 模擬預測（加權模型）
  const aqi = Math.max(0, Math.round(
    pm * 1.2 +
    co2 * 0.02 +
    t * 0.8 -
    h * 0.3
  ));

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
};
