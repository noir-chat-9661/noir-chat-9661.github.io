function copy() {
  const text =
    "javascript:(()=>{if (document.getElementById('addonwindow')?.innerHTML) return;if(this.LoadedAddonPage)return $().append(2);layercount++;$(\"#layerroot\").append(`<div class='layer' id='layer${layercount}'><h2 class='sourcespace'>読み込み中</h2><button class='layerclosebtn' id='addonwindow' style='display:none' onclick='myremove(this.parentNode)'>×</button></div>`);fetch(\"https://eita.f5.si/hcq/addon/code.js\",{cache:'no-store'}).then(n=>n.text()).then(n=>eval(n))})()";
  navigator.clipboard.writeText(text);
  document.getElementById("copyok").style.display = "";
  setTimeout(
    () => (document.getElementById("copyok").style.display = "none"),
    3000
  );
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const f = await fetch("https://api.github.com/repos/Eita-hj/himaque_addon/releases/latest").then(n => n.json())
  document.getElementById("appdl").href = f.find(n => n.name.includes(".exe")).assets.browser_download_url
});
