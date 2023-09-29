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

function copybml(num) {
  const a = [
    "javascript:fetch(%22kari_MovepointChange.php%22,%7B%20%09%09%09method:%20%22post%22,%20%09%09%09headers:%20%7B%20%22Content-Type%22:%20%22application/x-www-form-urlencoded%22%20%7D,%20body:%20%60marumie=$%7BSID%7D&seskey=$%7BSKEY%7D&px=30&py=50%60%7D)",
    "javascript:fetch(%22kari_MovepointChange.php%22,%7B%20%09%09%09method:%20%22post%22,%20%09%09%09headers:%20%7B%20%22Content-Type%22:%20%22application/x-www-form-urlencoded%22%20%7D,%20body:%20%60marumie=$%7BSID%7D&seskey=$%7BSKEY%7D&px=50&py=50%60%7D)",
    "javascript:fetch(%22kari_MovepointChange.php%22,%7B%20%09%09%09method:%20%22post%22,%20%09%09%09headers:%20%7B%20%22Content-Type%22:%20%22application/x-www-form-urlencoded%22%20%7D,%20body:%20%60marumie=$%7BSID%7D&seskey=$%7BSKEY%7D&px=60&py=50%60%7D)",
    "javascript:fetch(%22kari_MovepointChange.php%22,%7B%20%09%09%09method:%20%22post%22,%20%09%09%09headers:%20%7B%20%22Content-Type%22:%20%22application/x-www-form-urlencoded%22%20%7D,%20body:%20%60marumie=$%7BSID%7D&seskey=$%7BSKEY%7D&px=prompt('移動先のx座標を入力',%2050)&py=prompt('移動先のy座標を入力',%2050)%60%7D)",
    "javascript:fetch(%22shokuan_JobChange.php%22,%20%7Bmethod:%20%22post%22,headers:%20%7B%22Content-Type%22:%22application/x-www-form-urlencoded%22%20%7D,body:%60marumie=$%7BSID%7D&seskey=$%7BSKEY%7D&jobid=0%60%7D).then(()=%3Ealert(%22変更完了%22))"
  ];
  navigator.clipboard.writeText(a[num]);
  document.getElementById("copyok2").style.display = "";
  setTimeout(
    () => (document.getElementById("copyok2").style.display = "none"),
    3000
  );
}

document.addEventListener("DOMContentLoaded", async (e) => {
  if (location.href.startsWith("http://eita.f5.si")) return location.replace("https://eita.f5.si/hcq/");
  if (!navigator.userAgent.includes("windows")) return;
  document.getElementById("app").style.display = "";
  const f = await fetch(
    "https://api.github.com/repos/Eita-hj/himaque_addon/releases/latest"
  ).then((n) => n.json());
  document.getElementById("appdl").href = f.assets.find((n) =>
    n.name.includes(".exe")
  ).browser_download_url;
});
