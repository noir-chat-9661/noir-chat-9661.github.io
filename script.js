function loaded() {
  const d = new Date();
  document.getElementById("age").innerHTML =
    d.getFullYear() -
    2006 -
    (Date.now() >= new Date(`${d.getFullYear()}/05/22 0:00`) ? 0 : 1);
}

function changegaming(tf){
  document.getElementsByTagName("html")[0].className = tf ? "gamingmode" : ""
}

function showForm(){
  document.getElementById("fb").style.display = "none"
  document.getElementById("form").innerHTML = '<button id="cb" class="rb" onclick="closeForm()">×</button><br /><p class="rb rbt">お問い合わせ内容に加えて、返信先のユーザーNo.も記入してください。</p><br /><iframe src="/form/"></iframe>'
}

function closeForm(){
  document.getElementById("fb").style.display = ""
  document.getElementById("form").innerHTML = ""
}
