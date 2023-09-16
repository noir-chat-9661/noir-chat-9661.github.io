function getUpdateInfo() {
  fetch("./data.json")
    .then((r) => r.json())
    .then((j) => {
      document.getElementById("content").innerHTML = j.updates
        .map((n, i) =>
          `<label style="font-size:1.2em"><input type="checkbox" style="display:none" name="${i + 1}" onchange="menuChange(${j.updates.length}, this);" /><span name="check" style="font-size:0.8em">▶︎</span> ver.${i + 1}.x</label><span name="content" style="display:none">` + n
            .reverse()
            .map(
              (m) => `<p>ver.${m.version}<br />${m.content.join("<br />")}</p>`
            )
            .join("") + "</span>"
        )
        .reverse()
        .join('<br />');
      document.getElementsByName(j.updates.length)[0].checked = true
      document.getElementsByName('content')[0].style.display = "";
      document.getElementsByName("check")[0].innerHTML = "▼"
    
    });
}

function menuChange(datalength, y){
  document.getElementsByName('content')[datalength - Number(y.name)].style.display = y.checked ? "" : "none";
  document.getElementsByName("check")[datalength - Number(y.name)].innerHTML = y.checked ? "▼" : "▶︎"
}