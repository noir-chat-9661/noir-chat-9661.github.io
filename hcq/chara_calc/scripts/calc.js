"use strict";
const hosei = {
  advantage: -1,
  disadvantage: -1,
};

function calc(s, b, o = true, cc = false) {
  if (settings.autobackup){
    try {
      cookieManager.set(
        "backups",
        {
          waza: BigInt(waza.map((n) => n.level).join("")).toString(16),
          chara: charainfo,
          settings
        },
        { Expires: "Fri, 31 Dec 9999 23:59:59 GMT" }
      );
    } catch {}
  }
  if (cc) return;
  if (pointcalc() > 204) return b ? alert("まずいですよ！！！") : false;
  const charatype = charainfo.type - 1;
  let status =
    charatype !== -1
      ? { ...chara_status1[charatype], SP: 1000 }
      : {
          HP: 0,
          pow: 0,
          def: 0,
          tec: 0,
          ms: 0,
          as: 9,
          SP: 1000,
        };
  if (charatype !== -1) {
    status.HP += chara_status2[charatype].HP * 200;
    status.pow += chara_status2[charatype].pow * 200;
    status.def += chara_status2[charatype].def * 200;
    status.tec += chara_status2[charatype].tec * 200;
  }
  const { amari, hiden: h } = charainfo;
  for (let i = 0; i < 7; i++) {
    const l = pointcalc(i);
    let p = 0;
    if (
      pointcalc() < 204 &&
      charatype !== -1 &&
      i == (amari ? amari - 1 : charatype)
    )
      p = 204 - pointcalc();
    status.HP += Math.floor(chara_status3[i].HP * (l + p));
    status.pow += Math.floor(chara_status3[i].pow * (l + p));
    status.def += Math.floor(chara_status3[i].def * (l + p));
    status.tec += Math.floor(chara_status3[i].tec * (l + p));
  }
  if (charatype === 0 && h === 3) {
    status.as += 5;
  } else if (charatype === 3 && h === 1) {
    status.ms += 3;
  } else if (charatype === 5 && h === 1) {
    status.as += 3;
  } else if (charatype === 6 && h === 1) {
    status.SP += 400;
  }
  const {
    bugu: { type: bugutype, op: buguop, status: bugustatus, kaji },
    stone,
  } = charainfo;

  switch (charatype) {
    case 0:
      hosei.advantage = 0;
      hosei.disadvantage = 2;
      break;
    case 1:
      hosei.advantage = 1;
      hosei.disadvantage = 0;
      break;
    case 2:
      hosei.advantage = 2;
      hosei.disadvantage = 3;
      break;
    case 3:
      hosei.advantage = 3;
      hosei.disadvantage = 2;
      break;
    case 4:
      hosei.advantage = 4;
      hosei.disadvantage = 3;
      break;
    case 5:
      hosei.advantage = 0;
      hosei.disadvantage = 1;
      break;
    case 6:
      hosei.advantage = 5;
      hosei.disadvantage = 0;
      break;
  }

  switch (bugutype) {
    case 15:
      status.SP += 1000;
      status.def += 100;
      break;
    case 16:
      status.pow += 100;
      if (hosei.disadvantage == 0) {
        hosei.advantage = -1;
        hosei.disadvantage = -1;
      } else {
        hosei.advantage = 0;
      }
      break;
    case 17:
      status.tec += 100;
      status.SP += 300;
      if (hosei.disadvantage == 1) {
        hosei.advantage = -1;
        hosei.disadvantage = -1;
      } else {
        hosei.advantage = 1;
      }
      break;
    case 18:
      status.def += 100;
      status.SP += 500;
      hosei.advantage = 5;
      break;
    case 19:
      status.ms += 10;
      break;
    case 20:
      status.tec -= 200;
      break;
    case 21:
      status.ms += 3;
      status.as += 6;
      if (hosei.disadvantage == 3) {
        hosei.advantage = -1;
        hosei.disadvantage = -1;
      } else {
        hosei.advantage = 3;
      }
      break;
    case 22:
      status.tec += 100;
      status.SP -= 200;
      if (hosei.disadvantage == 2) {
        hosei.advantage = -1;
        hosei.disadvantage = -1;
      } else {
        hosei.advantage = 2;
      }
      break;
    case 23:
      status.tec += 100;
      status.SP += 500;
      hosei.advantage = 4;
      break;
  }

  for (let i = 0; i < 6; i++) {
    [...document.getElementsByClassName(`type${i}`)].map(
      (n) => (n.style.color = "#000000")
    );
    [...document.getElementsByClassName(`type${i}`)].map(
      (n) => (n.style["font-weight"] = "")
    );
  }

  if (hosei.advantage !== -1) {
    [...document.getElementsByClassName(`type${hosei.advantage}`)].map(
      (n) => (n.style.color = "#ff0000")
    );
    [...document.getElementsByClassName(`type${hosei.advantage}`)].map(
      (n) => (n.style["font-weight"] = "bold")
    );
  }
  if (hosei.disadvantage !== -1) {
    [...document.getElementsByClassName(`type${hosei.disadvantage}`)].map(
      (n) => (n.style.color = "#0000ff")
    );
    [...document.getElementsByClassName(`type${hosei.disadvantage}`)].map(
      (n) => (n.style["font-weight"] = "bold")
    );
  }

  const hoseitext = ["物理", "魔法", "回復", "妨害", "補助", "召喚"];
  document.getElementById("hoseitext").innerHTML = `得意：${
    hosei.advantage !== -1 ? hoseitext[hosei.advantage] : "なし"
  } 苦手：${
    hosei.disadvantage !== -1 ? hoseitext[hosei.disadvantage] : "なし"
  }`;

  for (let i = 0; i < 3; i++) {
    const n = buguop[i];
    switch (n) {
      case 1:
        status.pow += 200;
        break;
      case 2:
        status.def += 200;
        break;
      case 3:
        status.tec += 200;
        break;
      case 4:
        status.SP += 1000;
        break;
      case 5:
      case 6:
        status.HP += 45;
        break;
      case 8:
        status.as += 9;
        break;
      case 12:
        status.ms += 9;
        break;
    }
  }
  for (let i = 0; i < 3; i++) {
    const n = stone[i];
    switch (n) {
      case 1:
        status.pow += 100;
        break;
      case 2:
        status.def += 100;
        break;
      case 3:
        status.tec += 100;
        break;
      case 4:
        status.SP += 500;
        break;
      case 5:
      case 6:
        status.HP += 24;
        break;
      case 8:
        status.as += 4;
        break;
    }
  }
  const {
    status: { pow, def, tec },
  } = charainfo;
  status.pow += pow;
  status.def += def;
  status.tec += tec;

  status.pow = Math.floor(status.pow * ((bugustatus.pow + kaji.pow) / 100 + 1));
  status.def = Math.floor(status.def * ((bugustatus.def + kaji.def) / 100 + 1));
  status.tec = Math.floor(status.tec * ((bugustatus.tec + kaji.tec) / 100 + 1));

  status.HP += Math.floor(status.def / 10);

  if (status.pow < 1) status.pow = 1;
  if (status.def < 1) status.def = 1;
  if (status.tec < 1) status.tec = 1;

  let text = "";

  const { name, star } = charainfo;

  if (settings.charaoutput) {
    text += name ? `${name} ${star ? `(⭐︎${star})` : ""}\n` : "";
    text += charatype !== -1 ? `キャラ：${job_name[charatype]}\n` : "";
    text += hiden[charatype + 1][h] ? `秘伝：${hiden[charatype + 1][h]}\n` : "";
    text += bugutype
      ? `武具：${bugu[bugutype].name} pow${bugustatus.pow}+${kaji.pow}(${
          bugustatus.pow + kaji.pow
        }) def${bugustatus.def}+${kaji.def}(${bugustatus.def + kaji.def}) tec${
          bugustatus.tec
        }+${kaji.tec}(${bugustatus.tec + kaji.tec})\n${
          buguop[0] || buguop[1] || buguop[2]
            ? `OP：${buguop.map((n) => op_name.bugu[n]).join(" ")}\n`
            : ""
        }`
      : "";
    text +=
      stone[0] || stone[1] || stone[2]
        ? `護石：${stone.map((n) => op_name.stone[n]).join(" ")}\n`
        : "";
    text += charainfo.status.sum
      ? `ボーナスポイント：POW+${pow} DEF+${def} TEC+${tec}\n`
      : "";
  }

  const p = Math.floor(status.pow * (star / 10 + 1));
  const d = Math.floor(status.def * (star / 10 + 1));
  const t = Math.floor(status.tec * (star / 10 + 1));
  if (settings.statusoutput)
    text += `〜最終ステータス(Lv.200)〜\nHP ${status.HP || 1} SP ${
      status.SP / 5 + 200
    } (${status.SP * 0.15 + 150})/${status.SP} POW ${star ? `${p} (` : ""}${
      status.pow
    }${star ? ")" : ""} DEF ${star ? `${d} (` : ""}${status.def}${
      star ? ")" : ""
    } TEC ${star ? `${t} (` : ""}${status.tec}${star ? ")" : ""} 攻速 ${
      status.as
    } 移動 ${status.ms}\n\n〜√後〜\nPOW→${
      star ? `${root(p)} 余り：${p - root(p) ** 2} (究極強化なし→` : ""
    }${root(status.pow)} 余り：${status.pow - root(status.pow) ** 2}${
      star ? ")" : ""
    }\nDEF→${
      star ? `${root(d)} 余り：${d - root(d) ** 2} (究極強化なし→` : ""
    }${root(status.def)} 余り：${status.def - root(status.def) ** 2}${
      star ? ")" : ""
    }\nTEC→${
      star ? `${root(t)} 余り：${t - root(t) ** 2} (究極強化なし→` : ""
    }${root(status.tec)} 余り：${status.tec - root(status.tec) ** 2}${
      star ? ")" : ""
    }\n\n`;

  let text2 = "";
  text2 = `職lv: 戦${pointcalc(0)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 0
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(0)})`
      : ""
  } 魔${pointcalc(1)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 1
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(1)})`
      : ""
  } 僧${pointcalc(2)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 2
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(2)})`
      : ""
  } 忍${pointcalc(3)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 3
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(3)})`
      : ""
  } メ${pointcalc(4)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 4
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(4)})`
      : ""
  } 騎${pointcalc(5)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 5
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(5)})`
      : ""
  } 召${pointcalc(6)}${
    204 - pointcalc() && (amari ? amari - 1 : charatype) === 6
      ? `+${204 - pointcalc()}(${204 - pointcalc() + pointcalc(6)})`
      : ""
  }  計${
    204 - pointcalc() && charatype !== -1 ? `204(${pointcalc()})` : pointcalc()
  }\n`;
  text2 += "技lv:";
  text += text2;
  const mpow =
    (bugutype == 16 ? 0.2 : 0) +
    (buguop[0] == 10 ? 0.5 : 0) +
    (buguop[1] == 10 ? 0.5 : 0) +
    (buguop[2] == 10 ? 0.5 : 0) +
    (stone[0] == 10 ? 0.2 : 0) +
    (stone[1] == 10 ? 0.2 : 0) +
    (stone[2] == 10 ? 0.2 : 0);
  const mdef = [
    buguop[0] == 6 ? 0.3 : 0,
    buguop[1] == 6 ? 0.3 : 0,
    buguop[2] == 6 ? 0.3 : 0,
    stone[0] == 6 ? 0.16 : 0,
    stone[1] == 6 ? 0.16 : 0,
    stone[2] == 6 ? 0.16 : 0,
  ];
  const bpow =
    (bugutype == 15 ? 0.2 : 0) +
    (buguop[0] == 9 ? 0.5 : 0) +
    (buguop[1] == 9 ? 0.5 : 0) +
    (buguop[2] == 9 ? 0.5 : 0) +
    (stone[0] == 9 ? 0.2 : 0) +
    (stone[1] == 9 ? 0.2 : 0) +
    (stone[2] == 9 ? 0.2 : 0);
  const bdef = [
    buguop[0] == 5 ? 0.3 : 0,
    buguop[1] == 5 ? 0.3 : 0,
    buguop[2] == 5 ? 0.3 : 0,
    stone[0] == 5 ? 0.16 : 0,
    stone[1] == 5 ? 0.16 : 0,
    stone[2] == 5 ? 0.16 : 0,
  ];
  document.getElementById(
    "mstext"
  ).innerHTML = `〜最終ステータス(Lv.200)〜<br />HP ${status.HP || 1} SP ${
    status.SP / 5 + 200
  } (${status.SP * 0.15 + 150})/${status.SP}<br />POW ${star ? `${p} (` : ""}${
    status.pow
  }${star ? ")" : ""} DEF ${star ? `${d} (` : ""}${status.def}${
    star ? ")" : ""
  } TEC ${star ? `${t} (` : ""}${status.tec}${star ? ")" : ""}<br />攻速 ${
    status.as
  } 移動 ${status.ms}<br /><br />〜√後〜<br />POW→${
    star ? `${root(p)} 余り：${p - root(p) ** 2} (究極強化なし→` : ""
  }${root(status.pow)} 余り：${status.pow - root(status.pow) ** 2}${
    star ? ")" : ""
  }<br />DEF→${
    star ? `${root(d)} 余り：${d - root(d) ** 2} (究極強化なし→` : ""
  }${root(status.def)} 余り：${status.def - root(status.def) ** 2}${
    star ? ")" : ""
  }<br />TEC→${
    star ? `${root(t)} 余り：${t - root(t) ** 2} (究極強化なし→` : ""
  }${root(status.tec)} 余り：${status.tec - root(status.tec) ** 2}${
    star ? ")" : ""
  }<br /><br />`;
  document.getElementById("mpow1").innerHTML = star
    ? `${resultformat(
        p *
          (1 + mpow + (charatype == 1 && h == 1 ? 0.1 : 0)) *
          (bugutype == 20 ? 1.2 : 1)
      )} (${resultformat(
        status.pow *
          (1 + mpow + (charatype == 1 && h == 1 ? 0.1 : 0)) *
          (bugutype == 20 ? 1.2 : 1)
      )})`
    : resultformat(
        status.pow *
          (1 + mpow + (charatype == 1 && h == 1 ? 0.1 : 0)) *
          (bugutype == 20 ? 1.2 : 1)
      );
  document.getElementById("mdef1").innerHTML = star
    ? `${resultformat(mdef.reduce((a, b) => a / (1 - b), d))} (${resultformat(
        mdef.reduce((a, b) => a / (1 - b), status.def) /
          (charatype === 0 && h === 1 ? 0.75 : 1)
      )})`
    : resultformat(mdef.reduce((a, b) => a / (1 - b), status.def));
  document.getElementById("bpow1").innerHTML = star
    ? `${resultformat(
        p * (1 + bpow) * (bugutype == 20 ? 1.2 : 1)
      )} (${resultformat(
        status.pow * (1 + bpow) * (bugutype == 20 ? 1.2 : 1)
      )})`
    : resultformat(status.pow * (1 + bpow) * (bugutype == 20 ? 1.2 : 1));
  document.getElementById("bdef1").innerHTML = star
    ? `${resultformat(bdef.reduce((a, b) => a / (1 - b), d))} (${resultformat(
        bdef.reduce((a, b) => a / (1 - b), status.def) /
          (charatype === 0 && h === 1 ? 0.75 : 1)
      )})`
    : resultformat(bdef.reduce((a, b) => a / (1 - b), status.def));
  document.getElementById("mpow2").innerHTML = resultformat(
    root(status.pow) *
      (1 + mpow / 2 + (charatype == 1 && h == 1 ? 0.1 : 0)) *
      (bugutype == 20 ? 1.2 : 1)
  );
  document.getElementById("mdef2").innerHTML = resultformat(
    mdef.reduce((a, b) => a / (1 - b / 2), root(status.def)) /
      (charatype === 0 && h === 1 ? 0.75 : 1)
  );
  document.getElementById("bpow2").innerHTML = resultformat(
    root(status.pow) * (1 + bpow / 2) * (bugutype == 20 ? 1.2 : 1)
  );
  document.getElementById("bdef2").innerHTML = resultformat(
    bdef.reduce((a, b) => a / (1 - b / 2), root(status.def)) /
      (charatype === 0 && h === 1 ? 0.75 : 1)
  );
  if (settings.autooutput || b) {
    for (let i = 0; i < 57; i++) {
      if (waza[i].level) {
        text += ` ${s ? waza[i].short_name : waza[i].name}${waza[i].level}`;
        text2 += ` ${waza[i].short_name}${waza[i].level}`;
      }
    }
    if (!o) return [name, text2];
    document.getElementById("result_area").value = text;
    document.getElementById("result").style.display = "";
    if (settings.autocopy) copy(true);
  }
}

function resultformat(v) {
  return Math.round(v * 100) / 100;
}

function root(v) {
  return Math.floor(Math.sqrt(v));
}

function senddata() {
  const d = calc(true, true, false);
  const name = d[0];
  const text = d[1].split("\n").join(" ");
  open(`./send/?text=${text}&name=${name}`);
}
