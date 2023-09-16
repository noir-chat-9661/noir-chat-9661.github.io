let attacktype = null;
function AttackTypeChange() {
  attacktype = Number(
    [...document.getElementsByName("type")].find((n) => n.checked).value
  );
  document.getElementById("statusarea1").style.display = "";
  document.getElementById("statusarea2").style.display = "";
  document.getElementById("attacktype1").innerHTML = attacktype ? "TEC" : "POW";
  document.getElementById("attacktype2").innerHTML = attacktype
    ? "毒ダメージ"
    : "威力";
  document.getElementById("attacktype3").style.display = attacktype
    ? "none"
    : "";
  document.getElementById("attacktype4").innerHTML = attacktype ? "TEC" : "DEF";
  document.getElementById("attacktype5").style.display = attacktype
    ? "none"
    : "";
}

function calc() {
  let damage = 0;
  if (attacktype === 0) {
    const battlemode = document.getElementById("battle").checked;
    const basedamage =
      Math.round(
        ((Number(document.getElementById("pdt1").value) || 1) *
          Math.round(
            (Number(document.getElementById("iryoku").value) || 1) *
              (Number(document.getElementById("hosei").value) || 1)
          )) /
          (Number(document.getElementById("pdt2").value) || 1) /
          2
      ) || 1;
    const op = [0, 0.02, 0.04, 0.06, 0.2, 0.5];
    const op2 = [0, 0.02, 0.04, 0.08, 0.16, 0.3];
    const nc = {
      0: 0,
      N1: 0.38,
      N2: 0.41,
      N3: 0.44,
      N4: 0.47,
      N5: 0.5,
      C1: 0.42,
      C2: 0.44,
      C3: 0.46,
      C4: 0.48,
      C5: 0.5,
    };
    let adddamage = 0;
    [...document.getElementsByName("op1")].forEach(
      (n) =>
        (adddamage += battlemode
          ? Math.round(basedamage * op[n.value] / 2)
          : Math.round(basedamage * op[n.value]))
    );
    if (document.getElementById("weapon").value == 0)
      adddamage += battlemode
        ? Math.round(basedamage * 0.1)
        : Math.round(basedamage * 0.2);
    if (document.getElementById("hiden1").checked)
      adddamage += Math.round(basedamage * 0.1);
    adddamage += Math.round(
      basedamage * nc[document.getElementById("nc").value]
    );
    damage =
      document.getElementById("weapon").value == 1
        ? Math.round((basedamage + adddamage) * 1.2)
        : basedamage + adddamage;
    if (battlemode)
      [...document.getElementsByName("op2")].forEach(
        (n) =>
          (adddamage += Math.round(
            damage * (1 - (battlemode ? op2[n.value] / 2 : op2[n.value]))
          ))
      );
    adddamage = 0;
    if (document.getElementById("dbb").checked) {
      const data = [
        ...document.getElementById("dr_table1").getElementsByTagName("tr"),
      ].map((n) => Number(n.getElementsByTagName("input")[0].value) || 1);
      data.forEach((n) => (adddamage += Math.round(damage * n / 100)));
    }
    damage = Math.round(damage * (document.getElementById("hiden2").checked ? 1.2 : 1) + adddamage);
    if (document.getElementById("drb").checked) {
      const data = [
        ...document.getElementById("dr_table2").getElementsByTagName("tr"),
      ].map((n) => Number(n.getElementsByTagName("input")[0].value) || 1);
      data.forEach((n) => (damage = Math.round(damage * (1 - n / 100))));
    }
    if (document.getElementById("bushin").checked) {
      damage = Math.round(damage * 0.75);
      if (damage < 3) damage = 0;
    }
  } else if (attacktype === 1) {
    const basedamage =
      Math.round(
        ((Number(document.getElementById("pdt1").value) || 1) *
          Math.round(
            (Number(document.getElementById("iryoku").value) || 1) *
              (Number(document.getElementById("hosei").value) || 1)
          )) /
          (Number(document.getElementById("pdt2").value) || 1) /
          2
      ) || 1;
    damage = basedamage;
    if (document.getElementById("drb").checked) {
      const data = [
        ...document.getElementById("dr_table2").getElementsByTagName("tr"),
      ].map((n) => Number(n.getElementsByTagName("input")[0].value) || 1);
      data.forEach((n) => (damage = Math.round(damage * (1 - n / 100))));
    }
  }
  document.getElementById("result").innerHTML = `ダメージ：${damage}`;
}

function tabledel1(node) {
  if (
    document.getElementById("dr_table1").getElementsByTagName("tr").length === 1
  )
    return;
  const r = node.parentNode.parentNode;
  r.parentNode.removeChild(r);
}

function tableadd1() {
  const data = [
    ...document.getElementById("dr_table1").getElementsByTagName("tr"),
  ].map((n) => n.getElementsByTagName("input")[0].value);
  document.getElementById("dr_table1").innerHTML =
    document.getElementById("dr_table1").innerHTML +
    `<tr><td style="border-color:#dd5522"><input type="text" maxlength="3" size="3" />%</td><td style="border-color:#dd5522"><button onclick="tabledel1(this)">× 削除</button></td></tr>`;
  data.map((v, k) => {
    document
      .getElementById("dr_table1")
      .getElementsByTagName("tr")
      [k].getElementsByTagName("input")[0].value = v;
  });
}

function tabledel2(node) {
  if (
    document.getElementById("dr_table2").getElementsByTagName("tr").length === 1
  )
    return;
  const r = node.parentNode.parentNode;
  r.parentNode.removeChild(r);
}

function tableadd2() {
  const data = [
    ...document.getElementById("dr_table2").getElementsByTagName("tr"),
  ].map((n) => n.getElementsByTagName("input")[0].value);
  document.getElementById("dr_table2").innerHTML =
    document.getElementById("dr_table2").innerHTML +
    `<tr><td style="border-color:#22dd55"><input type="text" maxlength="3" size="3" />%</td><td style="border-color:#22dd55"><button onclick="tabledel2(this)">× 削除</button></td></tr>`;
  data.map((v, k) => {
    document
      .getElementById("dr_table2")
      .getElementsByTagName("tr")
      [k].getElementsByTagName("input")[0].value = v;
  });
}
