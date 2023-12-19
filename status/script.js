function check() {
  fetch("https://eita.f5.si")
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
  fetch("http://hcqboard.f5.si")
    .then((n) => {
      document.getElementById("status3").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status3").innerHTML = "🔴 使用不可")
    );
  fetch("https://hcqwiki.com")
    .then((n) => {
      document.getElementById("status4").innerHTML = `${
        n.status == 200 ? "🟢 使用可能" : "🔴 使用不可"
      }`;
    })
    .catch(
      () => (document.getElementById("status4").innerHTML = "🔴 使用不可")
    );
}
