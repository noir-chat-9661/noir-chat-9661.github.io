"use strict";
const charainfo = {
  name: "",
  level: 200,
  star: 0,
  type: 0,
  hiden: 0,
  amari: 0,
  status: {
    pow: 0,
    def: 0,
    tec: 0,
    get sum() {
      return this.pow + this.def + this.tec;
    },
    get amari() {
      const r = charainfo.level * 3 - this.sum;
      return r < 0 ? 0 : r;
    },
  },
  bugu: {
    type: 0,
    get name() {
      return bugu[this.type].name;
    },
    get makeable() {
      return bugu[this.type].makeable;
    },
    status: {
      pow: 0,
      def: 0,
      tec: 0,
    },
    kaji: {
      pow: 0,
      def: 0,
      tec: 0,
      get sum() {
        return this.pow + this.def + this.tec;
      },
      get amari() {
        const r = 99 - this.sum;
        return r < 0 ? 0 : r;
      },
    },
    op: [0, 0, 0],
  },
  stone: [0, 0, 0],
};

const settings = {
  autooutput: false,
  autocopy: false,
  shortoutput: false,
  charaoutput: true,
  statusoutput: true,
  autobackup: false,
};

function optionchange(y) {
  const { id, value } = y;
  switch (id) {
    case "chara_name":
      charainfo.name = value;
      break;
    case "level":
      if (value === "" || isNaN(value)) y.value = "200";
      if (Number.isInteger(value)) y.value = parseInt(value);
      if (Number(y.value) < 1) y.value = "1";
      if (Number(y.value) > 200) y.value = "200";
      charainfo.level = Number(y.value);
      break;
    case "star":
      if (value === "" || isNaN(value)) y.value = "0";
      if (Number(y.value) < 0) y.value = "0";
      if (Number(y.value) > 6) y.value = "6";
      if (Number.isInteger(value)) y.value = parseInt(value);
      charainfo.star = Number(y.value);
      break;
    case "amari_point":
      charainfo.amari = Number(value);
      break;
    case "pow_reset":
      charainfo.status.pow = 0;
      break;
    case "pow_-100":
      charainfo.status.pow =
        charainfo.status.pow >= 100 ? charainfo.status.pow - 100 : 0;
      break;
    case "pow_-10":
      charainfo.status.pow =
        charainfo.status.pow >= 10 ? charainfo.status.pow - 10 : 0;
      break;
    case "pow_-1":
      charainfo.status.pow =
        charainfo.status.pow >= 1 ? charainfo.status.pow - 1 : 0;
      break;
    case "pow_input":
      if (value === "" || isNaN(value)) y.value = "0";
      if (Number.isInteger(value)) y.value = parseInt(value);
      if (
        charainfo.status.def + charainfo.status.tec + Number(y.value) >
        charainfo.level * 3
      ) {
        y.value =
          charainfo.level * 3 - (charainfo.status.def + charainfo.status.tec);
      }
      if (y.value < 0) y.value = 0;
      charainfo.status.pow = Number(y.value);
      break;
    case "pow_+1":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.pow += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.pow = charainfo.status.pow + 1;
      }
      break;
    case "pow_+10":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.pow += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.pow = charainfo.status.pow + 10;
      }
      break;
    case "pow_+100":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.pow += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.pow = charainfo.status.pow + 100;
      }
      break;
    case "pow_max":
      charainfo.status.pow += charainfo.status.amari;
      if (charainfo.status.sum - charainfo.level * 3 < charainfo.status.pow)
        charainfo.status.pow -= charainfo.status.sum - charainfo.level * 3;
      break;
    case "def_reset":
      charainfo.status.def = 0;
      break;
    case "def_-100":
      charainfo.status.def =
        charainfo.status.def >= 100 ? charainfo.status.def - 100 : 0;
      break;
    case "def_-10":
      charainfo.status.def =
        charainfo.status.def >= 10 ? charainfo.status.def - 10 : 0;
      break;
    case "def_-1":
      charainfo.status.def =
        charainfo.status.def >= 1 ? charainfo.status.def - 1 : 0;
      break;
    case "def_input":
      if (value === "" || isNaN(value)) y.value = "0";
      if (Number.isInteger(value)) y.value = parseInt(value);
      if (
        charainfo.status.pow + charainfo.status.tec + Number(y.value) >
        charainfo.level * 3
      ) {
        y.value =
          charainfo.level * 3 - (charainfo.status.pow + charainfo.status.tec);
      }
      if (y.value < 0) y.value = 0;
      charainfo.status.def = Number(y.value);
      break;
    case "def_+1":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.def += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.def = charainfo.status.def + 1;
      }
      break;
    case "def_+10":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.def += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.def = charainfo.status.def + 10;
      }
      break;
    case "def_+100":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.def += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.def = charainfo.status.def + 100;
      }
      break;
    case "def_max":
      charainfo.status.def += charainfo.status.amari;
      if (charainfo.status.sum - charainfo.level * 3 < charainfo.status.def)
        charainfo.status.def -= charainfo.status.sum - charainfo.level * 3;
      break;
    case "tec_reset":
      charainfo.status.tec = 0;
      break;
    case "tec_-100":
      charainfo.status.tec =
        charainfo.status.tec >= 100 ? charainfo.status.tec - 100 : 0;
      break;
    case "tec_-10":
      charainfo.status.tec =
        charainfo.status.tec >= 10 ? charainfo.status.tec - 10 : 0;
      break;
    case "tec_-1":
      charainfo.status.tec =
        charainfo.status.tec >= 1 ? charainfo.status.tec - 1 : 0;
      break;
    case "tec_input":
      if (value === "" || isNaN(value)) y.value = "0";
      if (Number.isInteger(value)) y.value = parseInt(value);
      if (
        charainfo.status.pow + charainfo.status.def + Number(y.value) >
        charainfo.level * 3
      ) {
        y.value =
          charainfo.level * 3 - (charainfo.status.pow + charainfo.status.def);
      }
      if (y.value < 0) y.value = 0;
      charainfo.status.tec = Number(y.value);
      break;
    case "tec_+1":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.tec += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.tec = charainfo.status.tec + 1;
      }
      break;
    case "tec_+10":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.tec += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.tec = charainfo.status.tec + 10;
      }
      break;
    case "tec_+100":
      if (charainfo.status.sum + Number(y.innerHTML) > charainfo.level * 3) {
        charainfo.status.tec += charainfo.status.amari;
      } else {
        if (charainfo.status.amari === 0) break;
        charainfo.status.tec = charainfo.status.tec + 100;
      }
      break;
    case "tec_max":
      charainfo.status.tec += charainfo.status.amari;
      if (charainfo.status.sum - charainfo.level * 3 < charainfo.status.tec)
        charainfo.status.tec -= charainfo.status.sum - charainfo.level * 3;
      break;
    case "chara_type":
      charainfo.type = Number(value);
      document.getElementById("hiden").style.display =
        value === "0" ? "none" : "";
      document.getElementById("chara_hiden").innerHTML = hiden[charainfo.type]
        .map((n, m) => `<option value="${m}">${n}</option>`)
        .join("");
      if (value !== "0") {
        const p = default_waza[Number(value) - 1];
        if (waza[p].level === 0) {
          waza[p].level = 1;
          const d = document.getElementById(`waza${p}`);
          d.getElementsByClassName("waza_lv")[0].innerHTML = lv_moji[1];
          d.getElementsByClassName("point")[0].innerHTML =
            points[waza[p].point][1];
        }
        for (let i = 0; i < 7; i++) {
          document.getElementsByClassName("waza_sum")[i].innerHTML =
            pointcalc(i);
        }
      } else {
        charainfo.hiden = 0;
      }
      document.getElementById("total_sum").innerHTML = pointcalc();
      document.getElementById("total_sum").style.color =
        pointcalc() > charainfo.level + 4 ? "#ff0000" : "#000000";
      break;
    case "chara_hiden":
      charainfo.hiden = Number(value);
      break;
    case "bugu":
      charainfo.bugu.type = Number(value);
      charainfo.bugu.status = {
        pow: bugu[value].pow,
        def: bugu[value].def,
        tec: bugu[value].tec,
      };
      charainfo.bugu.kaji.pow = 0;
      charainfo.bugu.kaji.def = 0;
      charainfo.bugu.kaji.tec = 0;
      document.getElementById("bugu_pow").value = bugu[value].pow;
      document.getElementById("bugu_def").value = bugu[value].def;
      document.getElementById("bugu_tec").value = bugu[value].tec;
      document.getElementById("kaji_pow").value = 0;
      document.getElementById("kaji_def").value = 0;
      document.getElementById("kaji_tec").value = 0;
      document.getElementById("bugu_info").style.display =
        value === "0" ? "none" : "";
      document.getElementById("bugu_pow").readOnly = bugu[value].makeable
        ? false
        : true;
      document.getElementById("bugu_def").readOnly = bugu[value].makeable
        ? false
        : true;
      document.getElementById("bugu_tec").readOnly = bugu[value].makeable
        ? false
        : true;
      break;
    case "bugu_pow":
      if (isNaN(value) || value === "") y.value = bugu[charainfo.bugu.type].pow;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (bugu[charainfo.bugu.type].pow + 10 < Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].pow + 10;
      } else if (bugu[charainfo.bugu.type].pow - 10 > Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].pow - 10;
      }
      charainfo.bugu.status.pow = Number(y.value);
      break;
    case "kaji_pow":
      if (isNaN(value)) y.value = 0;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (
        charainfo.bugu.kaji.def + charainfo.bugu.kaji.tec + Number(y.value) >
        99
      )
        y.value = 99 - (charainfo.bugu.kaji.def + charainfo.bugu.kaji.tec);
      charainfo.bugu.kaji.pow = Number(y.value);
      break;
    case "bugu_def":
      if (isNaN(value) || value === "") y.value = bugu[charainfo.bugu.type].def;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (bugu[charainfo.bugu.type].def + 10 < Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].def + 10;
      } else if (bugu[charainfo.bugu.type].def - 10 > Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].def - 10;
      }
      charainfo.bugu.status.def = Number(y.value);
      break;
    case "kaji_def":
      if (isNaN(value)) y.value = 0;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (
        charainfo.bugu.kaji.pow + charainfo.bugu.kaji.tec + Number(y.value) >
        99
      )
        y.value = 99 - (charainfo.bugu.kaji.pow + charainfo.bugu.kaji.tec);
      charainfo.bugu.kaji.def = Number(y.value);
      break;
    case "bugu_tec":
      if (isNaN(value) || value === "") y.value = bugu[charainfo.bugu.type].tec;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (bugu[charainfo.bugu.type].tec + 10 < Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].tec + 10;
      } else if (bugu[charainfo.bugu.type].tec - 10 > Number(y.value)) {
        y.value = bugu[charainfo.bugu.type].tec - 10;
      }
      charainfo.bugu.status.tec = Number(y.value);
      break;
    case "kaji_tec":
      if (isNaN(value)) y.value = 0;
      if (Number.isInteger(y.value)) y.value = parseInt(y.value);
      if (
        charainfo.bugu.kaji.pow + charainfo.bugu.kaji.def + Number(y.value) >
        99
      )
        y.value = 99 - (charainfo.bugu.kaji.pow + charainfo.bugu.kaji.def);
      charainfo.bugu.kaji.tec = Number(y.value);
      break;
    case "bugu_op1":
      charainfo.bugu.op[0] = Number(value);
      break;
    case "bugu_op2":
      charainfo.bugu.op[1] = Number(value);
      break;
    case "bugu_op3":
      charainfo.bugu.op[2] = Number(value);
      break;
    case "stone1":
      charainfo.stone[0] = Number(value);
      break;
    case "stone2":
      charainfo.stone[1] = Number(value);
      break;
    case "stone3":
      charainfo.stone[2] = Number(value);
      break;
  }
  document.getElementById("pow_input").value = charainfo.status.pow;
  document.getElementById("def_input").value = charainfo.status.def;
  document.getElementById("tec_input").value = charainfo.status.tec;
  document.getElementById("sum_pow").innerHTML =
    charainfo.bugu.status.pow + charainfo.bugu.kaji.pow;
  document.getElementById("sum_def").innerHTML =
    charainfo.bugu.status.def + charainfo.bugu.kaji.def;
  document.getElementById("sum_tec").innerHTML =
    charainfo.bugu.status.tec + charainfo.bugu.kaji.tec;
  const a =
    charainfo.level * 3 -
    (charainfo.status.pow + charainfo.status.def + charainfo.status.tec);
  document.getElementById("bonus_nokori").innerHTML = a;
  document.getElementById("bonus_nokori").style.color =
    a < 0 ? "#ff0000" : "#000000";
  const s = pointcalc();
  document.getElementById("total_sum").innerHTML = s;
  document.getElementById("total_sum").style.color =
    s > charainfo.level + 4 ? "#ff0000" : "#000000";
  calc(settings.shortoutput, false);
}

function boxshow(y) {
  const { name } = y;
  const d = document.getElementById(name);
  d.style.display = d.style.display ? "" : "none";
}

function setting(y) {
  const { id, checked } = y;
  settings[id] = checked;
  if (id === "autobackup" && !checked)
    cookieManager.set("backups", "", { "Max-Age": 0 });
  calc(false, false, false, true);
}

let jid = null;
function wazalist(y) {
  const { id, checked } = y;
  for (let i = 0; i < 7; i++) {
    document.getElementById(`jobid${i}`).style.display = "none";
  }
  if (jid === id) {
    document.getElementById(id).checked = false;
    return (jid = null);
  }
  jid = id;
  document.getElementById(`jobid${id}`).style.display = "";
  document.getElementsByClassName("wazazone")[0].style["background-color"] =
    y.parentNode.style["background-color"];
}

function waza_level(y) {
  const { name } = y;
  const p = y.parentNode;
  const n = p.id.slice(4);
  const { place, point, jobid } = waza[n];
  const { type } = charainfo;
  switch (name) {
    case "reset":
      waza[n].level =
        place === default_waza[jobid] && jobid === type - 1 ? 1 : 0;
      break;
    case "-1":
      if (waza[n].level > 0) waza[n].level--;
      break;
    case "+1":
      if (waza[n].level < 5) waza[n].level++;
      break;
    case "max":
      waza[n].level = 5;
      break;
  }
  if (jobid === type - 1) {
    const i = default_waza[jobid];
    if (place === i && waza[i].level === 0) {
      alert("キャラの初期技はレベル0にできません。");
      waza[i].level = 1;
    }
  }
  const { level } = waza[n];
  p.getElementsByClassName("waza_lv")[0].innerHTML = lv_moji[level];
  p.getElementsByClassName("point")[0].innerHTML = points[point][level];
  document.getElementsByClassName("waza_sum")[jobid].innerHTML =
    pointcalc(jobid);
  const s = pointcalc();
  document.getElementById("total_sum").innerHTML = s;
  document.getElementById("total_sum").style.color =
    s > charainfo.level + 4 ? "#ff0000" : "#000000";
  calc(settings.shortoutput, false);
}

function reset(id) {
  if (id === undefined) {
    const q = confirm("全てリセットしますか？");
    if (!q) return;
    waza.forEach((n) => {
      waza[n.place].level = 0;
      const d = document.getElementById(`waza${n.place}`);
      d.getElementsByClassName("waza_lv")[0].innerHTML = "-";
      d.getElementsByClassName("point")[0].innerHTML = 0;
    });
    charainfo.name = "";
    charainfo.type = 0;
    charainfo.level = 200;
    charainfo.star = 0;
    charainfo.hiden = 0;
    charainfo.amari = 0;
    charainfo.status.pow = 0;
    charainfo.status.def = 0;
    charainfo.status.tec = 0;
    charainfo.bugu.type = 0;
    charainfo.bugu.status.pow = 0;
    charainfo.bugu.status.def = 0;
    charainfo.bugu.status.tec = 0;
    charainfo.bugu.kaji.pow = 0;
    charainfo.bugu.kaji.def = 0;
    charainfo.bugu.kaji.tec = 0;
    charainfo.bugu.op = [0, 0, 0];
    charainfo.stone = [0, 0, 0];
    document.getElementById("chara_name").value = "";
    document.getElementById("amari_point").value = "0";
    document.getElementById("star").value = 0;
    document.getElementById("bonus_nokori").innerHTML = 600;
    document.getElementById("pow_input").value = 0;
    document.getElementById("def_input").value = 0;
    document.getElementById("tec_input").value = 0;
    document.getElementById("chara_type").value = "0";
    document.getElementById("hiden").style.display = "none";
    document.getElementById("chara_hiden").innerHTML = "";
    document.getElementById("bugu").value = "0";
    document.getElementById("bugu_info").style.display = "none";
    document.getElementById("bugu_pow").value = 0;
    document.getElementById("kaji_pow").value = 0;
    document.getElementById("bugu_def").value = 0;
    document.getElementById("kaji_def").value = 0;
    document.getElementById("bugu_tec").value = 0;
    document.getElementById("kaji_tec").value = 0;
    document.getElementById("bugu_op1").value = "0";
    document.getElementById("bugu_op2").value = "0";
    document.getElementById("bugu_op3").value = "0";
    document.getElementById("stone1").value = "0";
    document.getElementById("stone2").value = "0";
    document.getElementById("stone3").value = "0";
    document.getElementById("mstext").innerHTML =
      "〜最終ステータス(Lv.–)〜<br />HP – SP – (–)/–<br />POW – DEF – TEC –<br />攻速 – 移動 –<br /><br />〜√後〜<br />POW→– 余り：–<br />DEF→– 余り：–<br />TEC→– 余り：–<br /><br /></div>";
    document.getElementById("mpow1").innerHTML = "–";
    document.getElementById("mdef1").innerHTML = "–";
    document.getElementById("bpow1").innerHTML = "–";
    document.getElementById("bdef1").innerHTML = "–";
    document.getElementById("mpow2").innerHTML = "–";
    document.getElementById("mdef2").innerHTML = "–";
    document.getElementById("bpow2").innerHTML = "–";
    document.getElementById("bdef2").innerHTML = "–";
    document.getElementById("hoseitext").innerHTML =
      '<span id="hoseitext">得意：– 苦手：–</span>';
    cookieManager.set("backups", "", { "Max-Age": 0 });
  } else {
    const w = waza.filter((n) => n.jobid === id);
    w.forEach((n) => {
      waza[n.place].level = 0;
      const d = document.getElementById(`waza${n.place}`);
      d.getElementsByClassName("waza_lv")[0].innerHTML = "-";
      d.getElementsByClassName("point")[0].innerHTML = 0;
    });
    const { type } = charainfo;
    if (type - 1 === id) {
      const i = default_waza[id];
      waza[i].level = 1;
      document.getElementsByClassName("waza_lv")[i].innerHTML = "Ⅰ";
      document.getElementsByClassName("point")[i].innerHTML =
        points[waza[i].point][1];
    }
  }
  for (let i = 0; i < 7; i++) {
    document.getElementsByClassName("waza_sum")[i].innerHTML = pointcalc(i);
  }
  const s = pointcalc();
  document.getElementById("total_sum").innerHTML = s;
  document.getElementById("total_sum").style.color =
    s > charainfo.level + 4 ? "#ff0000" : "#000000";
}

function pointcalc(id) {
  const { type } = charainfo;
  if (id !== undefined) {
    const p = waza
      .filter((w) => w.jobid === id)
      .map((w) => points[w.point][w.level])
      .reduce((a, b) => a + b);
    return id === type - 1 && p < 5 ? 5 : p;
  } else {
    let r = 0;
    for (let i = 0; i < 7; i++) {
      r += pointcalc(i);
    }
    return r;
  }
}

function copy(d = false) {
  document.getElementById("result_area").select();
  document.execCommand("copy");
  getSelection().empty();
  if (!d) return;
  document.getElementById("copy_check").innerHTML = "コピー完了！";
  setTimeout(
    () => (document.getElementById("copy_check").innerHTML = ""),
    3000
  );
}

function savecookie() {
  const { waza: w, chara: c0, v } = cookieManager.parse();
  if (c0) {
    const c = JSON.parse(decodeURIComponent(c0));
    const check = confirm(
      `既に名前：${
        c.name || "未設定"
      }のレシピデータがcookieに保存されています。上書きしますか。`
    );
    if (!check) return;
  }
  try {
    cookieManager.set(
      "waza",
      BigInt(waza.map((n) => n.level).join("")).toString(16),
      {
        Expires: "Fri, 31 Dec 9999 23:59:59 GMT",
      }
    );
    cookieManager.set("chara", charainfo, {
      Expires: "Fri, 31 Dec 9999 23:59:59 GMT",
    });
    if (!v)
      cookieManager.set("v", "1", {
        Expires: "Fri, 31 Dec 9999 23:59:59 GMT",
      });
  } catch (e) {}
}

function loadcookie() {
  const { waza: w, chara: c0, v } = cookieManager.parse();
  if (!c0) return alert("cookieにデータが登録されていません。");
  if (!v) return alert("古いバージョンのデータのため復元ができません。");
  const c = JSON.parse(decodeURIComponent(c0));
  const check = confirm(
    `名前：${c.name || "未設定"}のレシピデータを読み込みますか。`
  );
  if (!check) return;
  if (!w) return;
  "0"
    .repeat(waza.length - BigInt("0x" + w).toString().length)
    .concat(BigInt("0x" + w).toString())
    .split("")
    .forEach((n, m) => {
      waza[m].level = Number(n);
      document.getElementsByClassName("waza_lv")[m].innerHTML = lv_moji[n];
      document.getElementsByClassName("point")[m].innerHTML =
        points[waza[m].point][n];
    });
  charainfo.name = c.name;
  charainfo.level = c.level;
  charainfo.star = c.star;
  charainfo.type = c.type;
  charainfo.hiden = c.hiden;
  charainfo.amari = c.amari;
  charainfo.status.pow = c.status.pow;
  charainfo.status.def = c.status.def;
  charainfo.status.tec = c.status.tec;
  charainfo.bugu.type = c.bugu.type;
  charainfo.bugu.status.pow = c.bugu.status.pow;
  charainfo.bugu.status.def = c.bugu.status.def;
  charainfo.bugu.status.tec = c.bugu.status.tec;
  charainfo.bugu.kaji.pow = c.bugu.kaji.pow;
  charainfo.bugu.kaji.def = c.bugu.kaji.def;
  charainfo.bugu.kaji.tec = c.bugu.kaji.tec;
  charainfo.bugu.op = c.bugu.op;
  charainfo.stone = c.stone;
  document.getElementById("chara_name").value = c.name;
  document.getElementById("amari_point").value = c.amari;
  document.getElementById("level").value = c.level;
  document.getElementById("star").value = c.star;
  document.getElementById("pow_input").value = c.status.pow;
  document.getElementById("def_input").value = c.status.def;
  document.getElementById("tec_input").value = c.status.tec;
  document.getElementById("chara_type").value = c.type;
  document.getElementById("hiden").style.display = c.type ? "" : "none";
  document.getElementById("chara_hiden").innerHTML = hiden[charainfo.type]
    .map((n, m) => `<option value="${m}">${n}</option>`)
    .join("");
  document.getElementById("chara_hiden").value = c.hiden;
  document.getElementById("bugu").value = c.bugu.type;
  document.getElementById("bugu_info").style.display = c.bugu.type
    ? ""
    : "none";
  document.getElementById("bugu_pow").value = c.bugu.status.pow;
  document.getElementById("kaji_pow").value = c.bugu.kaji.pow;
  document.getElementById("bugu_def").value = c.bugu.status.def;
  document.getElementById("kaji_def").value = c.bugu.kaji.def;
  document.getElementById("bugu_tec").value = c.bugu.status.tec;
  document.getElementById("kaji_tec").value = c.bugu.kaji.tec;
  document.getElementById("bugu_op1").value = c.bugu.op[0];
  document.getElementById("bugu_op2").value = c.bugu.op[1];
  document.getElementById("bugu_op3").value = c.bugu.op[2];
  document.getElementById("stone1").value = c.stone[0];
  document.getElementById("stone2").value = c.stone[1];
  document.getElementById("stone3").value = c.stone[2];

  document.getElementById("sum_pow").innerHTML =
    charainfo.bugu.status.pow + charainfo.bugu.kaji.pow;
  document.getElementById("sum_def").innerHTML =
    charainfo.bugu.status.def + charainfo.bugu.kaji.def;
  document.getElementById("sum_tec").innerHTML =
    charainfo.bugu.status.tec + charainfo.bugu.kaji.tec;
  document.getElementById("bonus_nokori").innerHTML = charainfo.status.amari;

  for (let i = 0; i < 7; i++) {
    document.getElementsByClassName("waza_sum")[i].innerHTML = pointcalc(i);
  }
  const s = pointcalc();
  document.getElementById("total_sum").innerHTML = s;
  document.getElementById("total_sum").style.color =
    s > charainfo.level + 4 ? "#ff0000" : "#000000";

  calc(settings.shortoutput, false);
}

function jsonMenu() {
  document.getElementById("jsonmenu").style.display = document.getElementById(
    "jsonmenu"
  ).style.display
    ? ""
    : "none";
}

const j_weapon = [
  "-1",
  "12",
  "13",
  "14",
  "15",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
];
const j_optionA = [
  "-1",
  "4",
  "9",
  "14",
  "19",
  "24",
  "29",
  "34",
  "39",
  "44",
  "49",
  "54",
  "59",
];
const j_optionB = [
  "-1",
  "3",
  "7",
  "11",
  "15",
  "19",
  "23",
  "27",
  "31",
  "35",
  "39",
];
function jsonInOut(mode) {
  document.getElementById("jsonarea").style.display = "";
  if (mode === "in") {
    document.getElementById("jsonout").style.display = "none";
    document.getElementById("jsonin").style.display = "";
    document.getElementById("jsontext").readOnly = false;
    document.getElementById("jsontext").value = "";
    document.getElementById("errmsg").style.display = "none";
    document.getElementById("errmsg2").style.display = "none";
  } else if (mode === "out") {
    document.getElementById("jsonin").style.display = "none";
    document.getElementById("jsonout").style.display = "";
    document.getElementById("jsontext").readOnly = true;
    const plane = {};
    plane.jobPoint = [[], [], [], [], [], [], []];
    waza.forEach((n) => plane.jobPoint[n.jobid].push(n.level.toString()));
    plane.charaData = {
      outputCharacterData: settings.charaoutput,
      characterName: charainfo.name,
      characterType: (charainfo.type - 1).toString(),
      hiden: charainfo.hiden.toString(),
      remain: (charainfo.amari - 1).toString(),
      weapon: j_weapon[charainfo.bugu.type],
      weaponDummy1: "-1",
      weaponOption0: j_optionA[charainfo.bugu.op[0]],
      weaponOption1: j_optionA[charainfo.bugu.op[1]],
      weaponOption2: j_optionA[charainfo.bugu.op[2]],
      weaponOptionDummy1: "-1",
      weaponPow: charainfo.bugu.status.pow.toString(),
      weaponPowPlus: charainfo.bugu.kaji.pow.toString(),
      weaponDef: charainfo.bugu.status.def.toString(),
      weaponDefPlus: charainfo.bugu.kaji.def.toString(),
      weaponTec: charainfo.bugu.status.tec.toString(),
      weaponTecPlus: charainfo.bugu.kaji.tec.toString(),
      weaponOption3: j_optionB[charainfo.stone[0]],
      weaponOption4: j_optionB[charainfo.stone[1]],
      weaponOption5: j_optionB[charainfo.stone[2]],
      weaponOptionDummy2: "-1",
      stars: charainfo.star.toString(),
      charalevel: charainfo.level.toString(),
      bonusPow: charainfo.status.pow.toString(),
      bonusDef: charainfo.status.def.toString(),
      bonusTec: charainfo.status.tec.toString(),
    };
    document.getElementById("jsontext").value = JSON.stringify(plane);
  }
}

function jsonLoad() {
  document.getElementById("errmsg").style.display = "none";
  document.getElementById("errmsg2").style.display = "none";
  if (!isJSON(document.getElementById("jsontext").value))
    return (document.getElementById("errmsg").style.display = "");
  const json = JSON.parse(document.getElementById("jsontext").value);
  if (!typeof json === "object")
    return (document.getElementById("errmsg").style.display = "");
  const a = Number(j_weapon.findIndex((n) => n === json.charaData.weapon));
  if (a === -1) return (document.getElementById("errmsg2").style.display = "");
  const b = Number(
    j_optionA.findIndex((n) => n === json.charaData.weaponOption0)
  );
  if (b === -1) return (document.getElementById("errmsg2").style.display = "");
  const c = Number(
    j_optionA.findIndex((n) => n === json.charaData.weaponOption1)
  );
  if (c === -1) return (document.getElementById("errmsg2").style.display = "");
  const d = Number(
    j_optionA.findIndex((n) => n === json.charaData.weaponOption2)
  );
  if (d === -1) return (document.getElementById("errmsg2").style.display = "");
  const e = Number(
    j_optionB.findIndex((n) => n === json.charaData.weaponOption3)
  );
  if (e === -1) return (document.getElementById("errmsg2").style.display = "");
  const f = Number(
    j_optionB.findIndex((n) => n === json.charaData.weaponOption4)
  );
  if (f === -1) return (document.getElementById("errmsg2").style.display = "");
  const g = Number(
    j_optionB.findIndex((n) => n === json.charaData.weaponOption5)
  );
  if (g === -1) return (document.getElementById("errmsg2").style.display = "");
  if (
    !confirm(
      `名前：${
        json.charaData.characterName || "未設定"
      }のレシピデータを読み込みますか。`
    )
  )
    return;
  json.jobPoint
    .flat()
    .map(Number)
    .forEach((n, m) => {
      waza[m].level = n;
      document.getElementsByClassName("waza_lv")[m].innerHTML = lv_moji[n];
      document.getElementsByClassName("point")[m].innerHTML =
        points[waza[m].point][n];
    });
  charainfo.name = document.getElementById("chara_name").value =
    json.charaData.characterName;
  charainfo.level = document.getElementById("level").value = Number(
    json.charaData.charalevel
  );
  charainfo.star = document.getElementById("star").value = Number(
    json.charaData.stars
  );
  charainfo.type = document.getElementById("chara_type").value =
    Number(json.charaData.characterType) + 1;
  document.getElementById("chara_hiden").innerHTML = hiden[charainfo.type]
    .map((n, m) => `<option value="${m}">${n}</option>`)
    .join("");
  charainfo.hiden = document.getElementById("chara_hiden").value = Number(
    json.charaData.hiden
  );
  charainfo.amari = document.getElementById("amari_point").value =
    Number(json.charaData.remain) + 1;
  charainfo.status.pow = document.getElementById("pow_input").value = Number(
    json.charaData.bonusPow
  );
  charainfo.status.def = document.getElementById("def_input").value = Number(
    json.charaData.bonusDef
  );
  charainfo.status.tec = document.getElementById("tec_input").value = Number(
    json.charaData.bonusTec
  );
  charainfo.bugu.type = document.getElementById("bugu").value = a;
  charainfo.bugu.status.pow = document.getElementById("bugu_pow").value =
    Number(json.charaData.weaponPow);
  charainfo.bugu.status.def = document.getElementById("bugu_def").value =
    Number(json.charaData.weaponDef);
  charainfo.bugu.status.tec = document.getElementById("bugu_tec").value =
    Number(json.charaData.weaponTec);
  charainfo.bugu.kaji.pow = document.getElementById("kaji_pow").value = Number(
    json.charaData.weaponPowPlus
  );
  charainfo.bugu.kaji.def = document.getElementById("kaji_def").value = Number(
    json.charaData.weaponDefPlus
  );
  charainfo.bugu.kaji.tec = document.getElementById("kaji_tec").value = Number(
    json.charaData.weaponTecPlus
  );
  charainfo.bugu.op = [b, c, d].map(Number);
  charainfo.stone = [e, f, g].map(Number);
  document.getElementById("hiden").style.display = charainfo.hiden
    ? ""
    : "none";
  document.getElementById("bugu_info").style.display = a ? "" : "none";
  document.getElementById("bugu_op1").value = b;
  document.getElementById("bugu_op2").value = c;
  document.getElementById("bugu_op3").value = d;
  document.getElementById("stone1").value = e;
  document.getElementById("stone2").value = f;
  document.getElementById("stone3").value = g;

  for (let i = 0; i < 7; i++) {
    document.getElementsByClassName("waza_sum")[i].innerHTML = pointcalc(i);
  }
  const s = pointcalc();
  document.getElementById("total_sum").innerHTML = s;
  document.getElementById("total_sum").style.color =
    s > charainfo.level + 4 ? "#ff0000" : "#000000";

  document.getElementById("sum_pow").innerHTML =
    charainfo.bugu.status.pow + charainfo.bugu.kaji.pow;
  document.getElementById("sum_def").innerHTML =
    charainfo.bugu.status.def + charainfo.bugu.kaji.def;
  document.getElementById("sum_tec").innerHTML =
    charainfo.bugu.status.tec + charainfo.bugu.kaji.tec;
  document.getElementById("bonus_nokori").innerHTML = charainfo.status.amari;

  calc(settings.shortoutput, false);
  document.getElementById("jsonarea").style.display = "none";
}

async function share() {
  const plane = {};
  plane.jobPoint = [[], [], [], [], [], [], []];
  waza.forEach((n) => plane.jobPoint[n.jobid].push(n.level.toString()));
  plane.charaData = {
    outputCharacterData: settings.charaoutput,
    characterName: charainfo.name,
    characterType: (charainfo.type - 1).toString(),
    hiden: charainfo.hiden.toString(),
    remain: (charainfo.amari - 1).toString(),
    weapon: j_weapon[charainfo.bugu.type],
    weaponDummy1: "-1",
    weaponOption0: j_optionA[charainfo.bugu.op[0]],
    weaponOption1: j_optionA[charainfo.bugu.op[1]],
    weaponOption2: j_optionA[charainfo.bugu.op[2]],
    weaponOptionDummy1: "-1",
    weaponPow: charainfo.bugu.status.pow.toString(),
    weaponPowPlus: charainfo.bugu.kaji.pow.toString(),
    weaponDef: charainfo.bugu.status.def.toString(),
    weaponDefPlus: charainfo.bugu.kaji.def.toString(),
    weaponTec: charainfo.bugu.status.tec.toString(),
    weaponTecPlus: charainfo.bugu.kaji.tec.toString(),
    weaponOption3: j_optionB[charainfo.stone[0]],
    weaponOption4: j_optionB[charainfo.stone[1]],
    weaponOption5: j_optionB[charainfo.stone[2]],
    weaponOptionDummy2: "-1",
    stars: charainfo.star.toString(),
    charalevel: charainfo.level.toString(),
    bonusPow: charainfo.status.pow.toString(),
    bonusDef: charainfo.status.def.toString(),
    bonusTec: charainfo.status.tec.toString(),
  };
  const json = JSON.stringify(plane);
  const { id } = await fetch(
    "https://hcqshare.f5.si",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    }
  ).then((n) => n.json());
  const url = `https://hcqshare.f5.si/${id}`;
  document.getElementById("sharespace").style.display = "";
  document.getElementById("shareurl").innerHTML = url;
  document.getElementById("shareqr").innerHTML = "";
  new QRCode("shareqr", {
    text: url,
    width: 128,
    height: 128,
    correctLevel: 0,
  });
}

function jsonCopy() {
  try {
    navigator.clipboard.writeText(document.getElementById("jsontext").value);
    document.getElementById("copyok").style.display = "";
    setTimeout(
      () => (document.getElementById("copyok").style.display = "none"),
      3000
    );
  } catch {}
}
