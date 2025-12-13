console.log("main.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnPredict");
  if (!btn) {
    console.error("找不到按鈕 #btnPredict（請檢查 index.html 的 id）");
    return;
  }
  btn.addEventListener("click", predictAQI);
  console.log("button wired ✅");
});

function predictAQI() {
  const tEl = document.getElementById("temp");
  const hEl = document.getElementById("humidity");
  const pmEl = document.getElementById("pm25");
  const co2El = document.getElementById("co2");
  const box = document.getElementById("result");

  if (!tEl || !hEl || !pmEl || !co2El || !box) {
    console.error("有欄位 id 不存在：temp/humidity/pm25/co2/result（請檢查 index.html）");
    return;
  }

  const t = Number(tEl.value);
  const h = Number(hEl.value);
  const pm = Number(pmEl.value);
  const co2 = Number(co2El.value);

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

  box.className = `result ${cls}`;
  box.innerHTML = `<strong>AI 預測 AQI：${aqi}</strong><br/>空氣品質等級：${level}`;
  box.classList.remove("hidden");

  console.log("predict ok ✅", { aqi, level });
}
