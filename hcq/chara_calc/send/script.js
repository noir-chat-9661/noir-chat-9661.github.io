"use strict";
let text = "", id = "";
function start() {
	const t = new URL(location.href).searchParams.get("text")
	if (!t) document.getElementsByTagName("html")[0].innerHTML = "計算機から開いてください。"
  if (t.length > 150){
    document.getElementsByName("type")[0].disabled = true
    document.getElementsByName("type")[1].checked = true
    document.getElementById("text").innerHTML = "レシピの文字数が150文字を超えているため、ヒマクエ垢への送信は使用できません。"
  }  
	const n = new URL(location.href).searchParams.get("name") || "未設定"
	name = n
	text = t
	const { id: i } = cookieManager.parse()
	if (i) return id = i
	id = `${Date.now().toString(36)}_${Math.floor(Math.random() * 100000000).toString(36)}`
	cookieManager.set("id", id, {
		Expires: "Fri, 31 Dec 9999 23:59:59 GMT",
	})
}

function send() {
	const type = ([...document.getElementsByName("type")]).find(n => n.checked)?.value
	if (!type) return alert("送信方法を選択してください。")
	const target = document.getElementById("user").value
	if (!target) return alert("ユーザーIDまたはユーザータグを入力してください。")
	if (type == 0) {
		if (Number(target) < 5) return alert("運営垢には送信できません。")
		if (!Number.isSafeInteger(Number(target))) return alert("無効なIDです。")
	}
	const code = Math.floor(Math.random() * 100000000).toString(36)
	document.getElementById("code").innerHTML = `認証コードは<b>${code}</b>です。${type == 0 ? "ヒマクエ" : "Discord"}側でこのコードを入力してください。`
	const data = {
		text,
		type,
		target,
		id,
		code,
		name
	}
	const url = `https://himaquest-discord-bot.glitch.me/?${new URLSearchParams(data).toString()}`
	fetch(url, {
		method: "post",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})
}