"use strict";
const makou = [0.02, 0.04, 0.06, 0.2, 0.5, 0];
const enemy = [
	{ hp: 3428, def: 264, tec: 340 },
	{ hp: 10265, def: 316, tec: 556 },
	{ hp: 19835, def: 536, tec: 767 },
];
function calc() {
	document.getElementById("table").style.display = "";
	document.getElementById("table2").style.display = "none";
	const mode = [...document.getElementsByName("area")].find(
		(n) => n.checked
	)?.value;
	if (!mode)
		return (document.getElementById("e_message").innerHTML =
			'<span style="color:red">冒険エリアを選択してください。</span>');
	document.getElementById("e_message").innerHTML = "";
	document.getElementById("table").style.backgroundColor = [
		"#bbddff",
		"#eeffbb",
		"#bbffcc",
	][mode];
	const charalist = [
		...document.getElementById("table").getElementsByTagName("tr"),
	];
	charalist.shift();
	charalist.shift();

	tablecopy();

	const list = charalist
		.map((n) => ({
			type: Number(n.getElementsByClassName("chara_type")[0].value),
			powtec: Number(n.getElementsByClassName("powtec")[0].value),
			bugu: Number(n.getElementsByClassName("bugu")[0].value),
			op: [...n.getElementsByClassName("op")].map((m) => Number(m.value)),
		}))
		.filter((n) => n.type !== 3);

	const en = enemy[mode];

	let wizard = list.filter((n) => n.type === 0);
	const cheer = list.filter((n) => n.type === 1);
	const ninja = list.filter((n) => n.type === 2);
	let boost = 1;
	let damage = 0;

	if (!wizard.length)
		return (document.getElementById("result").innerHTML =
			"ダメージが入っていない(忍者の割りのダメージは考慮していない)ため、敵は倒せません。");

	for (let i = 0; i < cheer.length; i++) {
		const n = cheer[i];
		let tec = n.powtec * 0.275;
		if (n.bugu === 2) tec = tec * 1.3;
		tec = Math.round(tec);
		wizard = wizard.map((m) => {
			m.powtec += tec;
			return m;
		});
	}

	for (let i = 0; i < ninja.length; i++) {
		const n = ninja[i];
		boost += Math.round((n.powtec / en.tec) * 100) / 100;
	}

	for (let i = 0; i < wizard.length; i++) {
		const n = wizard[i];
		const k = Math.round(Math.round(n.powtec * 40) / (en.def * 2));
		let magicboost =
			n.bugu === 0
				? Math.round(k * 0.2) + Math.round(k * 0.1)
				: Math.round(k * 0.1);
		for (let l = 0; l < 6; l++) {
			magicboost += Math.round(k * makou[n.op[l]]);
		}
		damage += Math.round(
			boost *
				(n.bugu === 1
					? Math.round((k + magicboost) * 1.2)
					: Math.round(k + magicboost))
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

function setCharatype(youso) {
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
	calc();
}

function tablecopy() {
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
	const list = charalist.map((n) => ({
		type: Number(n.getElementsByClassName("chara_type")[0].value),
		powtec: Number(n.getElementsByClassName("powtec")[0].value),
		bugu: Number(n.getElementsByClassName("bugu")[0].value),
		op: [...n.getElementsByClassName("op")].map((m) => Number(m.value)),
	}));
	list.forEach((n, m) => {
		const a = charalist2[m];
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
