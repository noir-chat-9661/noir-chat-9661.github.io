async function getUpdate(){
  const characalc = await fetch("./chara_calc/update/data.json").then(n => n.json()).then(n => n.updates.at(-1).at(-1))
  const areacalc = await fetch("./area_calc/data.json").then(n => n.json())
  const damagecalc = await fetch("./damage_calc/update.json").then(n => n.json())
  document.getElementById("update").innerHTML = `<h3>キャラレベル計算機</h3>ver.${characalc.version}<p>更新内容</p>${characalc.content.join("<br />")}<br /><br /><h3>冒険エリア効率計算機</h3>ver.${areacalc.version}<p>更新内容</p>${areacalc.content.join("<br />")}<br /><br /><h3>ダメージ計算機</h3>ver.${damagecalc.version}<p>更新内容</p>${damagecalc.content.join("<br />")}`
}