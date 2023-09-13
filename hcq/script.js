function loaded() {
  const d = new Date();
  document.getElementById("age").innerHTML =
    d.getFullYear() -
    2006 -
    (Date.now() >= new Date(`${d.getFullYear()}/05/22 0:00`) ? 0 : 1);
}
