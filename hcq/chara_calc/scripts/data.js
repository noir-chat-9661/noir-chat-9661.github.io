const bugu = [
  { name: "", pow: 0, def: 0, tec: 0, makeable: 0 },
  { name: "アルミの剣", pow: 39, def: 6, tec: 0, makeable: 0 },
  { name: "アルミの斧", pow: 48, def: 0, tec: -25, makeable: 0 },
  { name: "アルミの杖", pow: 6, def: 0, tec: 39, makeable: 0 },
  { name: "アルミの手甲", pow: 0, def: 39, tec: 6, makeable: 0 },
  { name: "ダイヤモンドの剣", pow: 55, def: 15, tec: 0, makeable: 0 },
  { name: "ダイヤモンドの斧", pow: 60, def: 0, tec: -15, makeable: 0 },
  { name: "ダイヤモンドの杖", pow: 15, def: 0, tec: 55, makeable: 0 },
  { name: "ダイヤモンドの手甲", pow: 0, def: 55, tec: 15, makeable: 0 },
  { name: "伝説の剣", pow: 60, def: 20, tec: 0, makeable: 0 },
  { name: "伝説の斧", pow: 65, def: 0, tec: -10, makeable: 0 },
  { name: "伝説の杖", pow: 20, def: 0, tec: 60, makeable: 0 },
  { name: "伝説の手甲", pow: 0, def: 60, tec: 20, makeable: 0 },
  { name: "御神木の剣", pow: 20, def: 20, tec: 20, makeable: 0 },
  { name: "最強の剣", pow: 30, def: 30, tec: 30, makeable: 0 },
  { name: "冒険家セット", pow: 25, def: 0, tec: -30, makeable: 1 },
  { name: "勇者の剣", pow: 25, def: 20, tec: -5, makeable: 1 },
  { name: "魔法の本", pow: 40, def: -18, tec: 10, makeable: 1 },
  { name: "ペットフード", pow: 0, def: 25, tec: 10, makeable: 1 },
  { name: "エアエンジン", pow: 30, def: -5, tec: 10, makeable: 1 },
  { name: "古代神の魔石", pow: 50, def: 15, tec: 0, makeable: 1 },
  { name: "家宝の手裏剣", pow: 10, def: -20, tec: 45, makeable: 1 },
  { name: "天照の後光", pow: 0, def: 5, tec: 30, makeable: 1 },
  { name: "フローラルオーブ", pow: 0, def: 0, tec: 35, makeable: 1 },
];

const hiden = [
  [],
  ["", "武神", "勇者の証", "剛腕ハンター"],
  ["", "魔力強化", "チアリーダー", "マジックバリア"],
  ["", "大僧正", "怒りの鉄拳", "開祖", "異端"],
  ["", "忍び足", "縮地", "常備薬"],
  ["", "ドーピング", "勝利の女神", "スーパーナース"],
  ["", "百戦錬磨", "軍人", "ペネトレイト"],
  ["", "高等召喚士", "安全祈願", "一匹狼"],
];

const type = ["物理", "魔法", "回復", "妨害", "補助", "召喚"];
const tokui = {};

function wazainfo(id) {
  const wazadata = waza[id];
  const { name, level, type, description } = wazadata;
  let text = `<span id="infoclose"><span onclick="this.parentNode.parentNode.parentNode.style.display = 'none'">×</span></span><span style="font-size:1.2em">${name}</span><br />`;
  if (Number(id) > 45) {
    const { lvhosei } = description;
    text += `SP:${description.SP}<br />タイプ:召喚<br />${
      level
        ? `レベル補正:${lvhosei[level - 1]}`
        : `レベル補正:${lvhosei[0]}〜${lvhosei[4]}`
    }<br />`;
    const b = hosei.advantage == type ? 1.2 : 1
    const d = description.description;
    const slevel = 200 + charainfo.star * 10 + lvhosei[level ? level - 1 : 4];
    text += `ステータス(Lv.${slevel})<br />HP ${Math.floor(
      description.HP * slevel
    )}<br />POW ${Math.floor(description.pow * slevel * b)} (√後：${Math.floor(Math.floor(description.pow * slevel * b) ** 0.5)})<br />DEF ${Math.floor(
      description.def * slevel * b
    )} (√後：${Math.floor(Math.floor(description.def * slevel * b) ** 0.5)})<br />TEC ${Math.floor(description.tec * slevel * b)} (√後：${Math.floor(Math.floor(description.tec * slevel * b) ** 0.5)})<br /><br />${d.join(
      "<br />"
    )}`;
  } else {
    const t = [...description[level]];
    t[2] = `[得意] ${t[2]}`;
    t[3] = `[苦手] ${t[3]}`;
    text += t
      .map((n) =>
        Array.isArray(n)
          ? n[
              hosei.advantage === type ? 2 : hosei.disadvantage === type ? 0 : 1
            ]
          : n
      )
      .join("<br />");
  }
  document.getElementById("info_description").innerHTML = text;
  document.getElementById("wazainfo").style.display = "";
}

let waza = []

const points = [
  [0, 1, 3, 6, 10, 15],
  [0, 2, 6, 12, 20, 30],
  [0, 3, 9, 18, 30, 45],
];
const lv_moji = ["-", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
const default_waza = [2, 10, 18, 25, 29, 43, 46];
const job_name = [
  "溌剌ボーイ",
  "天才少女",
  "働くおじさん",
  "凄腕スタント",
  "戦うナースさん",
  "真面目な騎士",
  "不思議ちゃん",
];
const job_name_short = [
  "戦士",
  "魔法使い",
  " 僧",
  "忍者",
  "メイド",
  "パラディン",
  "サモナー",
];
const op_name = {
  bugu: [
    "ーーー",
    "[攻撃５]",
    "[防御５]",
    "[技術５]",
    "[最大ＳＰ５]",
    "[物理抵抗５]",
    "[魔法抵抗５]",
    "[薬学５]",
    "[攻撃速度５]",
    "[物理攻撃５]",
    "[魔法攻撃５]",
    "[ＴＰ獲得５]",
    "[移動５]",
  ],
  stone: [
    "ーーー",
    "[攻撃４]",
    "[防御４]",
    "[技術４]",
    "[最大ＳＰ４]",
    "[物理抵抗４]",
    "[魔法抵抗４]",
    "[薬学４]",
    "[攻撃速度４]",
    "[物理攻撃４]",
    "[魔法攻撃４]",
  ],
};

/*初期ステータス*/
const chara_status1 = [
  { HP: 120, pow: 10, def: 10, tec: 10, as: 10, ms: 6 },
  { HP: 100, pow: 10, def: 10, tec: 10, as: 9, ms: 5 },
  { HP: 110, pow: 10, def: 10, tec: 10, as: 12, ms: 4 },
  { HP: 110, pow: 10, def: 10, tec: 10, as: 11, ms: 6 },
  { HP: 110, pow: 10, def: 10, tec: 10, as: 10, ms: 5 },
  { HP: 120, pow: 10, def: 10, tec: 10, as: 11, ms: 4 },
  { HP: 110, pow: 10, def: 10, tec: 10, as: 10, ms: 5 },
];

/*レベル×キャラタイプ*/
const chara_status2 = [
  { HP: 1.1, pow: 0.4, def: 0.3, tec: 0.1 },
  { HP: 0.9, pow: 0.5, def: 0.2, tec: 0.4 },
  { HP: 1.0, pow: 0.3, def: 0.4, tec: 0.3 },
  { HP: 1.0, pow: 0.3, def: 0.25, tec: 0.45 },
  { HP: 1.0, pow: 0.35, def: 0.3, tec: 0.3 },
  { HP: 1.1, pow: 0.3, def: 0.3, tec: 0.24 },
  { HP: 1.0, pow: 0.25, def: 0.45, tec: 0.3 },
];

/*職業Lv.×職業*/
const chara_status3 = [
  { HP: 0.1, pow: 0.5, def: 0.3, tec: 0 },
  { HP: -0.1, pow: 0.6, def: 0.1, tec: 0.3 },
  { HP: 0, pow: 0.2, def: 0.4, tec: 0.4 },
  { HP: 0, pow: 0.3, def: 0.1, tec: 0.6 },
  { HP: 0, pow: 0.3, def: 0.3, tec: 0.4 },
  { HP: 0, pow: 0.3, def: 0.4, tec: 0.3 },
  { HP: 0, pow: 0.1, def: 0.55, tec: 0.35 },
];