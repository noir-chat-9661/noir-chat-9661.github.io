"use strict";

function calc2() {
	document.getElementById("table").style.display = "none";
	document.getElementById("table2").style.display = "";
	const mode = [...document.getElementsByName("area")].find(
        (n) => n.checked
      )?.value;
      if (!mode)
        return (document.getElementById("e_message").innerHTML =
          '<span style="color:red">冒険エリアを選択してください。</span>');
      document.getElementById("e_message").innerHTML = "";
      const charalist = [
		...document.getElementById("table2").getElementsByTagName("tr"),
	];
	charalist.shift();
	charalist.shift();
	tablecopy2();
	const list = charalist
		.map((n) => ({
			type: Number(n.getElementsByClassName("chara_type")[0].value),
			powtec: Number(n.getElementsByClassName("powtec")[0].value),
			bugu: Number(n.getElementsByClassName("bugu")[0].value),
			op: [...n.getElementsByClassName("op")].map((m) => Number(m.value)),
		}))
		.filter((n) => n.type !== 3);

	const en = { hp: 12944, def: 788, tec: 5834 };

	let summoner = list.filter((n) => n.type === 0);
	const cheer = list.filter((n) => n.type === 1);
	const ninja = list.filter((n) => n.type === 2);
	let boost = 1;
	let damage = 0;

	if (!summoner.length)
		return (document.getElementById("result").innerHTML =
			"ダメージが入っていない(忍者の割りのダメージは考慮していない)ため、敵は倒せません。");

	for (let i = 0; i < cheer.length; i++) {
		const n = cheer[i];
		let tec = n.powtec * 0.275;
		if (n.bugu === 2) tec *= 1.3;
		tec = Math.round(tec);
		summoner = summoner.map((m) => {
			m.powtec += tec;
			return m;
		});
	}

	for (let i = 0; i < ninja.length; i++) {
		const n = ninja[i];
		boost += Math.round((n.powtec / en.tec) * 100) / 100;
	}

	for (let i = 0; i < summoner.length; i++) {
		const n = summoner[i];
		const k = Math.round(Math.round(n.powtec * 120) / (en.def * 2));
		let attackboost = n.bugu === 0 ? Math.round(k * 0.12) : 0;
		for (let l = 0; l < 6; l++) {
			attackboost += Math.round(k * makou[n.op[l]]);
		}
		damage += Math.round(
			boost *
				(n.bugu === 1
					? Math.round((k + attackboost) * 1.2)
					: Math.round(k + attackboost))
		);
	}
	if (damage === 0)
		return (document.getElementById("result").innerHTML =
			"ダメージが入っていない(忍者の割りのダメージは考慮していない)ため、敵は倒せません。");
	return (document.getElementById("result").innerHTML = `敵のHP：${
				en.hp
	}<br />ダメージ：${damage}<br />必要なターン数：${
		Math.ceil(en.hp / damage) || 1
	}ターン<br /><br />※敵のHPは満員時のものです。<br />※ダメージでは魔のエクスプや割りのダメージは考慮していません。`);
}

function setCharatype2(youso) {
	const node = youso.parentNode.parentNode;
	if (youso.value == 0) {
		node.getElementsByClassName("powtec")[0].disabled = false;
		node.getElementsByClassName("bugu")[0].disabled = false;
		for (let i = 0; i < 6; i++) {
			node.getElementsByClassName("op")[i].disabled = false;
		}
	} else if (youso.value == 1) {
		node.getElementsByClassName("powtec")[0].disabled = false;
		node.getElementsByClassName("bugu")[0].disabled = false;
		for (let i = 0; i < 6; i++) {
			node.getElementsByClassName("op")[i].disabled = true;
		}
	} else if (youso.value == 2) {
		node.getElementsByClassName("powtec")[0].disabled = false;
		node.getElementsByClassName("bugu")[0].disabled = true;
		for (let i = 0; i < 6; i++) {
			node.getElementsByClassName("op")[i].disabled = true;
		}
	} else {
		node.getElementsByClassName("powtec")[0].disabled = true;
		node.getElementsByClassName("bugu")[0].disabled = true;
		for (let i = 0; i < 6; i++) {
			node.getElementsByClassName("op")[i].disabled = true;
		}
	}
	calc2();
}

function tablecopy2() {
	const charalist = [
		...document.getElementById("table").getElementsByTagName("tr"),
	];
	charalist.shift();
	charalist.shift();
	const charalist2 = [
		...document.getElementById("table2").getElementsByTagName("tr"),
	];
	charalist2.shift();
	charalist2.shift();
	const list = charalist2.map((n) => ({
		type: Number(n.getElementsByClassName("chara_type")[0].value),
		powtec: Number(n.getElementsByClassName("powtec")[0].value),
		bugu: Number(n.getElementsByClassName("bugu")[0].value),
		op: [...n.getElementsByClassName("op")].map((m) => Number(m.value)),
	}));
	list.forEach((n, m) => {
		const a = charalist[m];
		a.getElementsByClassName("chara_type")[0].value = n.type;
		a.getElementsByClassName("powtec")[0].disabled = n.type === 3;
		a.getElementsByClassName("powtec")[0].value = n.powtec || "";
		a.getElementsByClassName("bugu")[0].disabled = n.type == 3;
		a.getElementsByClassName("bugu")[0].value = n.bugu;
		n.op.forEach((q, r) => {
			a.getElementsByClassName("op")[r].disabled = n.type != 0;
			a.getElementsByClassName("op")[r].value = q;
		});
	});
}
