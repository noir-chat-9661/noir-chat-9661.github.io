function check() {
  if (location.href.startsWith("http://")) return location.href = location.href.replace("http", "https");
  fetch("https://pjeita.top")
    .then((n) => {
      document.getElementById("status1").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status1").innerHTML = "🔴 使用不可")
    );
  fetch("https://hcqshare.f5.si")
    .then((n) => {
      document.getElementById("status2").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status2").innerHTML = "🔴 使用不可")
    );
  fetch("https://dashboard.eita.f5.si")
    .then((n) => {
      document.getElementById("status3").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status3").innerHTML = "🔴 使用不可")
    );
  fetch("https://wiki.pjeita.top")
    .then((n) => {
      document.getElementById("status4").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status4").innerHTML = "🔴 使用不可")
    );
}
