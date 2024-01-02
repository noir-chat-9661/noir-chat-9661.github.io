(function () {
  const version = "3.5.4";
  const id = "layer" + layercount;
  if (this.addonApp) {
    document.title += `+Addon ver.${version}`;
  } else if (this.addonVersion !== version) {
    document.getElementById("addonwindow").style.display = "";
    document
      .getElementById(id)
      .getElementsByClassName("sourcespace")[0].innerHTML = `${
      this.addonVersion ? "更新" : "起動"
    }しました。`;
    this.addonVersion = version;
  } else {
    document.getElementById("addonwindow").style.display = "";
    return (document
      .getElementById(id)
      .getElementsByClassName("sourcespace")[0].innerHTML =
      "すでに起動済です。");
  }
  document.getElementById("kariquiz").style.top = "44px";
  document.getElementById("kariquiz").style.height = "calc(100% - 44px)";
  _0x688a()[2518] =
    "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t <div class='uegamen'> \t \t<div class='hanyoudiv' style='background-color:#FAFAFA;'>\t \t \t<div class='petstatus_imgdiv'>\t\t\t\t<div class='objimgbasediv'>\t\t\t\t\t<img src='' id='petstatus_buguimg' class='objectimg' />\t\t\t\t\t<img src='' id='petstatus_objimg' class='objectimg' />\t\t\t\t</div>\t\t\t</div> \t\t\t<div style='text-align:center'> \t\t\t\t<span id='petstatus_name'></span>　 \t\t\t\t<small>lv</small><span id='petstatus_lv'></span> \t\t\t</div> \t\t\t<div style='margin-left:8%'>\t \t\t\tHP　<span id='petstatus_hp'></span><br/> \t\t\t\t<span style='display:none'>SP　<span id='petstatus_sp'></span><br/></span> \t\t\t\tPOW　<span id='petstatus_pow'></span><br/> \t\t\t\tDEF　<span id='petstatus_def'></span><br/> \t\t\t\tTEC　<span id='petstatus_tec'></span><br/> \t\t\t</div> \t\t\t<div style='font-size:10px;color:#AAAAAA;margin:20px 10px 0px 0px;text-align:right;'>※表記がおかしい場合、装備品を変更してください</div> \t\t</div> \t </div> \t <div class='sitagamen'> \t \t\t<div style='text-align:center'> \t \t\t\tステータスを割り振ります<br /> \t \t\t\tボーナスポイント　<span id='petstatus_bonuspoint'></span> \t \t\t</div> \t \t\t<div style='margin-left:15%'>\t \t\t\tPOW　<span id='petstatus_userpow'></span>+<span id='petstatus_bonuspow' style='display:none'></span><input type='text' size='3' maxlength='3' value='0' id='pointinputpow' onchange='PointInputPow(this)' /><nobr><button onclick='PointAddPow(1)'>+1</button><button onclick='PointAddPow(10)'>+10</button><button onclick='PointAddPow(nokoripoint)'>MAX</button><button onclick='PointSubPow()'>R</button></nobr><br/> \t\t\t\tDEF　<span id='petstatus_userdef'></span>+<span id='petstatus_bonusdef' style='display:none'></span><input type='text' size='3' maxlength='3' value='0' id='pointinputdef' onchange='PointInputDef(this)' /><nobr><button onclick='PointAddDef(1)'>+1</button><button onclick='PointAddDef(10)'>+10</button><button onclick='PointAddDef(nokoripoint)'>MAX</button><button onclick='PointSubDef()'>R</button></nobr><br/> \t\t\t\tTEC　<span id='petstatus_usertec'></span>+<span id='petstatus_bonustec' style='display:none'></span><input type='text' size='3' maxlength='3' value='0' id='pointinputtec' onchange='PointInputTec(this)' /><nobr><button onclick='PointAddTec(1)'>+1</button><button onclick='PointAddTec(10)'>+10</button><button onclick='PointAddTec(nokoripoint)'>MAX</button><button onclick='PointSubTec()'>R</button></nobr><br/> \t\t\t\t<button onclick='SendUserPoint()'>保存！</button> \t\t\t\t<br><span style='color:#FF0000'>やりなおしの種 <span id='petstatus_yarinaosi'></span>個</span> \t\t\t\t<button onclick='PetStatusReset()'>ステータス再振り</button> \t\t\t</div> \t\t\t<button onclick='MyHouseEntry()' class='exitbtn'>戻る</button> \t </div>";
  _0x688a()[2136] =
    "<img src='picts/scene_myroom.png' class='scenehaikeiimg' /> \t\t<div class='uegamen'>\t \t \t<div style='position:absolute;top:10%;bottom:3%;left:5%;right:5%;background-color:#FFFFFF;overflow:hidden;'>\t\t \t \t<div class='myroom_supportdiv'>\t\t \t \t\t<div style='font-size:11px'>SUPPORT CHARACTOR</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(1)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(2)'>×</div>\t\t \t \t\t<div class='supportdeletebtn' onclick='SupportPetDelete(3)'>×</div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<div id='supportpetdiv1' class='supportpetdiv'>取得中</div>\t\t \t \t\t<div id='supportpetdiv2' class='supportpetdiv'></div>\t\t \t \t\t<div id='supportpetdiv3' class='supportpetdiv'></div>\t\t \t \t\t<div style='clear:both'></div>\t\t \t \t\t<button onclick='SupportPetChange(1)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(2)' class='supportchengebtn'>変更</button>\t\t \t \t\t<button onclick='SupportPetChange(3)' class='supportchengebtn'>変更</button>\t\t \t \t</div>\t\t \t \t<div style='clear:both'>[<small>友P</small> <b class='astyle' id='tomop' onclick='SupportLogMore()'>?</b>/<small>1000</small>]</div>\t \t \t\t<div id='supportscorespace'>取得中...</div>\t \t \t</div>\t \t \t<div class='scenetitle'>自分の家</div>\t \t</div> \t\t<div class='sitagamen' style='background-color:transparent'> \t\t\t<button onclick='PetStatusEntry()' class='halfbtn'>ステータス (extend)</button> \t\t\t<button onclick='ItemWindow()' class='halfbtn'>アイテムBOX</button> \t\t\t<button onclick='SceneCharactorChange()' class='halfbtn'>キャラクター変更</button> \t\t\t<button onclick='PetNameDiv()' class='halfbtn'>キャラの名前変更</button> \t\t\t<button onclick='UserWindow(";
  
  this.PointAddPow = (point) => {
    if (point > nokoripoint)
      return alert("これ以上振ることはできません。"), 0x0;
    nokoripoint -= point;
    bonus_pow += point;
    document.getElementById("petstatus_bonuspow").textContent = bonus_pow;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputpow").value = bonus_pow;
  };
  this.PointAddDef = (point) => {
    if (point > nokoripoint)
      return alert("これ以上振ることはできません。"), 0x0;
    nokoripoint -= point;
    bonus_def += point;
    document.getElementById("petstatus_bonusdef").textContent = bonus_def;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputdef").value = bonus_def;
  };
  this.PointAddTec = (point) => {
    if (point > nokoripoint)
      return alert("これ以上振ることはできません。"), 0x0;
    nokoripoint -= point;
    bonus_tec += point;
    document.getElementById("petstatus_bonustec").textContent = bonus_tec;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputtec").value = bonus_tec;
  };
  this.PointInputPow = (element) => {
    if (!Number.isSafeInteger(element.value)) return element.value = bonus_pow;
    const v = Number(element.value);
    if (v < 0) return element.value = 0, PointInputPow(element);
    const dx = v - bonus_pow;
    if (dx > nokoripoint) {
      element.value = bonus_pow + nokoripoint;
      PointInputPow(element);
    }
    bonus_pow = v;
    nokoripoint -= dx;
    document.getElementById("petstatus_bonuspow").textContent = bonus_tec;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
  };
  this.PointInputDef = (element) => {
    if (!Number.isSafeInteger(element.value)) return element.value = bonus_def;
    const v = Number(element.value);
    if (v < 0) return element.value = 0, PointInputDef(element);
    const dx = v - bonus_def;
    if (dx > nokoripoint) {
      element.value = bonus_def + nokoripoint;
      PointInputDef(element);
    }
    bonus_def = v;
    nokoripoint -= dx;
    document.getElementById("petstatus_bonusdef").textContent = bonus_tec;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
  };
  this.PointInputTec = (element) => {
    if (!Number.isSafeInteger(element.value)) return element.value = bonus_tec;
    const v = Number(element.value);
    if (v < 0) return element.value = 0, PointInputTec(element);
    const dx = v - bonus_tec;
    if (dx > nokoripoint) {
      element.value = bonus_tec + nokoripoint;
      PointInputTec(element);
    }
    bonus_tec = v;
    nokoripoint -= dx;
    document.getElementById("petstatus_bonustec").textContent = bonus_tec;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
  };
  this.PointSubPow = () => {
    nokoripoint += bonus_pow;
    bonus_pow = 0;
    document.getElementById("petstatus_bonuspow").textContent = bonus_pow;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputpow").value = 0;
  };
  this.PointSubDef = () => {
    nokoripoint += bonus_def;
    bonus_def = 0;
    document.getElementById("petstatus_bonusdef").textContent = bonus_def;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputdef").value = 0;
  };
  this.PointSubTec = () => {
    nokoripoint += bonus_tec;
    bonus_def = 0;
    document.getElementById("petstatus_bonustec").textContent = bonus_tec;
    document.getElementById("petstatus_bonuspoint").textContent = nokoripoint;
    document.getElementById("pointinputtec").value = 0;
  };
  this.WeaponKazi = (element) => {
    $("#itemwindow").remove();
    const e = $(element).closest(".weaponul");
    const itemid = Number(e.find(".data_itemid").text());
    $("#kazi_itemid").text(itemid);
    $("#kazi_name").html(e.find(".weaponul_name:first").clone());
    $("#kazi_source").text("取得中...");
    $.ajax({
      type: "POST",
      url: "item_KaziSelect.php",
      data: { marumie: myid, seskey, itemid },
      success: function (d) {
        if (d.error != 0x1) return alert("サーバエラ-7214"), 0x0;
        $("#kazi_source").html(d.source);
        const s = document.getElementsByClassName("kazidiv1")[0];
        const t = s.innerHTML;
        globalThis["smith"] = {
          start: {
            pow: Number(t.split("+")[1].split("　")[0]),
            def: Number(t.split("+")[3].split("　")[0]),
            tec: Number(t.split("+")[5].split("　")[0]),
          },
          default: {
            pow: Number(t.split("+")[0].split("　")[1]),
            def: Number(t.split("+")[2].split("　")[1]),
            tec: Number(t.split("+")[4].split("　")[1]),
          },
          kaji: {
            pow: 0,
            def: 0,
            tec: 0,
            get sum() {
              return this.pow + this.def + this.tec;
            },
          },
          get kaji_amari() {
            return (
              99 -
              (this.start.pow +
                this.start.def +
                this.start.tec +
                this.kaji.pow +
                this.kaji.def +
                this.kaji.tec)
            );
          },
          m: "",
        };
        s.getElementsByTagName(
          "div"
        )[0].innerHTML = `<nobr>pow ${smith.default.pow}+${smith.start.pow} <button onclick="KaziAdd('r', 'pow')">R</button><button onclick="KaziAdd(-10, 'pow')">-10</button><button onclick="KaziAdd(-1, 'pow')">-1</button> <span class="kazi_addpow">0</span> <button onclick="KaziAdd(1, 'pow')">+1</button><button onclick="KaziAdd(10, 'pow')">+10</button><button onclick="KaziAdd('m', 'pow')">MAX</button></nobr>`;
        s.getElementsByTagName(
          "div"
        )[1].innerHTML = `<nobr>def ${smith.default.def}+${smith.start.def} <button onclick="KaziAdd('r', 'def')">R</button><button onclick="KaziAdd(-10, 'def')">-10</button><button onclick="KaziAdd(-1, 'def')">-1</button> <span class="kazi_adddef">0</span> <button onclick="KaziAdd(1, 'def')">+1</button><button onclick="KaziAdd(10, 'def')">+10</button><button onclick="KaziAdd('m', 'def')">MAX</button></nobr>`;
        s.getElementsByTagName(
          "div"
        )[2].innerHTML = `<nobr>tec ${smith.default.tec}+${smith.start.tec} <button onclick="KaziAdd('r', 'tec')">R</button><button onclick="KaziAdd(-10, 'tec')">-10</button><button onclick="KaziAdd(-1, 'tec')">-1</button> <span class="kazi_addtec">0</span> <button onclick="KaziAdd(1, 'tec')">+1</button><button onclick="KaziAdd(10, 'tec')">+10</button><button onclick="KaziAdd('m', 'tec')">MAX</button></nobr>`;
      },
      error: function () {
        alert("なにかしらの不具合7214");
      },
    });
  };
  const sizai = {
    モンスターコイン: 0,
    下級マテリアル: 0.1,
    中級マテリアル: 0.2,
    上級マテリアル: 0.3,
    妖気マテリアル: 0.4,
    伝説マテリアル: 0.5,
    黄金マテリアル: 0.6,
    木の剣: 2,
    木の杖: 2.1,
    木の斧: 2.2,
    革の手甲: 2.3,
    土の護石: 3,
    鉄の剣: 3.1,
    鉄の杖: 3.2,
    鉄の斧: 3.3,
    鉄の手甲: 3.4,
    鋼の剣: 4,
    鋼の杖: 4.1,
    鋼の斧: 4.2,
    鋼の手甲: 4.3,
    アルミの剣: 5,
    アルミの杖: 5.1,
    アルミの斧: 5.2,
    アルミの手甲: 5.3,
    銀の剣: 6,
    銀の杖: 6.1,
    銀の斧: 6.2,
    銀の手甲: 6.3,
    金の剣: 7,
    金の杖: 7.1,
    金の斧: 7.2,
    金の手甲: 7.3,
    プラチナの剣: 8,
    プラチナの杖: 8.1,
    プラチナの斧: 8.2,
    プラチナの手甲: 8.3,
    ダイヤモンドの剣: 9,
    ダイヤモンドの杖: 9.1,
    ダイヤモンドの斧: 9.2,
    ダイヤモンドの手甲: 9.3,
    御神木の剣: 10,
    最強の剣: 10.1,
    伝説の剣: 10.2,
    伝説の杖: 10.3,
    伝説の斧: 10.4,
    伝説の手甲: 10.5,
  };
  this.LoadPorch = () => {
    if (porchupdate == ![]) return 0;
    porchupdate = ![];
    globalThis.SortType = 1;
    $("#porchbox").html("<p>取得中…</p>");
    $.ajax({
      type: "post",
      url: "item_LoadPorch.php",
      data: { marumie: myid, seskey, dsflg },
      success: (result) => {
        porchupdate = 1;
        if (result.error != 1) return alert("サーバーエラ-7202"), 0;
        $("#porchbox").html(
          `並び替え <button onclick='SortPorch(0)'>入手順</button> <button onclick='SortPorch(1)'>資材順</button><br /><b>カバン内アイテム数：<span id="nowitemcount"></span><br />獲得可能資材：<span id="getablesizai"></span>個</b><br />${result.source}`
        );
        $("#kabanbtn_count").text(result.porchcount);
        const array = [
          ...document
            .getElementById("porchbox")
            .getElementsByClassName("porchul"),
        ].map((n) => {
          const basedata = {
            name: n.getElementsByClassName("porchul_name")[0].innerHTML,
            id: Number(
              n.innerHTML.split("PorchSuteru(")[1].split(", this)")[0]
            ),
            op: [...n.getElementsByClassName("porchul_optiondiv")].map(
              (n) =>
                n.innerHTML.split("<small class")[0] ||
                '<span class="kuro">---</span>'
            ),
          };
          n.innerHTML = `<span class="porchul_name itemmei">${
            basedata.name
          }</span> <span class="porchul_optionspan optionmei">${basedata.op.join(
            " "
          )}</span> <button onclick="DumpPorch(${
            basedata.id
          }, this)">×</button>`;
        });
        SortPorch(1);
      },
      error: () => {
        porchupdate = 1;
        alert("なにかしらの不具合7202");
      },
    });
  };
  this.DumpPorch = async (id, dom) => {
    PorchSuteru(id, dom);
    for (; wait_PorchSuteru; ) {
      await new Promise((r) => setTimeout(r, 200));
    }
    SortPorch(SortType);
  };
  this.SortPorch = (type) => {
    SortType = type;
    const array = [
      ...document.getElementById("porchbox").getElementsByClassName("porchul"),
    ];
    const array2 = array
      .map((n) => {
        return {
          name: n.getElementsByClassName("porchul_name")[0].innerHTML,
          id: Number(n.innerHTML.split("DumpPorch(")[1].split(", this)")[0]),
          dom: n.innerHTML,
        };
      })
      .map((n) => {
        n.sizai = n.name.startsWith("モンスターコイン") ? 0 : sizai[n.name];
        return n;
      });
    array2
      .sort((a, b) => a[type ? "sizai" : "id"] - b[type ? "sizai" : "id"])
      .map((n, m) => (array[m].innerHTML = n.dom));
    document.getElementById("getablesizai").innerHTML = array2
      .map((n) => Math.floor(n.sizai))
      .reduce((a, b) => a + b, 0);
    document.getElementById("nowitemcount").innerHTML = array2.length;
  };
  this.ScenePorchResult = async () => {
    globalThis.PorchSortMode = 1;
    porchmax = 0;
    $(".scene")["hide"]();
    $("#scene").html(
      "<img\x20class=\x27scenehaikeiimg\x27\x20src=\x27picts/heiyanokaidou.png\x27\x20/>\x20\x09\x20<div\x20class=\x27porchresultdiv\x27>\x09\x20\x09\x20<div\x20style=\x27text-align:center;\x27>\x09\x20\x09\x20\x09<div\x20style=\x27font-size:14px;\x27>お持ち帰りするアイテムを選択できます</div>\x09\x20\x09\x20\x09<span\x20id=\x27porchresult_many\x27>0</span>／<span\x20id=\x27porchresult_max\x27>30</span>\x09\x20\x09\x20</div>\x20\x09\x09\x20<div\x20id=\x27porchresultlist\x27></div>\x20\x09\x09\x20<div\x20id=\x27porchresult_bot\x27></div>\x20\x09\x20</div>"
    );
    document.getElementById("scene").style.display = "block";
    for (; !porchmax; ) {
      await new Promise((r) => setTimeout(r, 50));
    }
    const array = [
      ...document
        .getElementById("porchresultlist")
        .getElementsByClassName("porchul2"),
    ];
    const array2 = array
      .map((n) => ({
        name: n
          .getElementsByClassName("porchul2_name")[0]
          .innerHTML.split(/\s<small\sclass\=\"kuro\">\d+<\/small>/)
          .join(""),
        id: Number(
          n.innerHTML.split("PorchResultSuteru(")[1].split(", this)")[0]
        ),
        dom: n.innerHTML
          .split("PorchResultSuteru(")
          .join("PorchResultDump(")
          .split("PorchResultSutenai(")
          .join("PorchResultDumpCancel("),
      }))
      .map((n) => {
        n.sizai = sizai[n.name];
        return n;
      })
      .sort((a, b) => a.sizai - b.sizai);
    array2.map((n, m) => (array[m].innerHTML = n.dom));
    const parentElement = document.getElementsByClassName("porchresultdiv")[0];
    const addElement = document.createElement("div");
    addElement.style.textAlign = "center";
    addElement.innerHTML = `<button onclick="SortPorchResult(0)">入手順</button> <button onclick="SortPorchResult(1)">資材順</button><br />獲得可能資材：<span id="getablesizai2"></span>個`;
    parentElement.insertBefore(
      addElement,
      document.getElementById("porchresultlist")
    );
    document.getElementById("getablesizai2").innerHTML = array2
      .filter((n) => !suterumono.includes(n.id))
      .map((n) => Math.floor(n.sizai))
      .reduce((a, b) => a + b, 0);
  };
  this.SortPorchResult = (type) => {
    PorchSortMode = type;
    const array = [
      ...document
        .getElementById("porchresultlist")
        .getElementsByClassName("porchul2"),
    ];
    const array2 = array
      .map((n) => ({
        name: n
          .getElementsByClassName("porchul2_name")[0]
          .innerHTML.split(/\s<small\sclass\=\"kuro\">\d+<\/small>/)
          .join(""),
        id: Number(
          n.innerHTML.split("PorchResultDump(")[1].split(", this)")[0]
        ),
        dom: n.innerHTML,
      }))
      .map((n) => {
        n.sizai = sizai[n.name];
        return n;
      })
      .sort((a, b) => a[type ? "sizai" : "id"] - b[type ? "sizai" : "id"]);
    array2.map((n, m) => (array[m].innerHTML = n.dom));
    document.getElementById("getablesizai2").innerHTML = array2
      .filter((n) => !suterumono.includes(n.id))
      .map((n) => Math.floor(n.sizai))
      .reduce((a, b) => a + b, 0);
  };
  this.PorchResultDump = (id, dom) => {
    PorchResultSuteru(id, dom);
    SortPorchResult(PorchSortMode);
  };
  this.PorchResultDumpCancel = (id, dom) => {
    PorchResultSutenai(id, dom);
    SortPorchResult(PorchSortMode);
  };
  this.KaziAddZero = () => ["pow", "def", "tec"].map((n) => KaziAdd("r", n));
  this.KaziAdd = (count, type) => {
    const cn = `.kazi_add${type}:eq(0)`;
    const t = "これ以上の強化は行えません";
    if (count === "m") {
      if (smith.m === type) {
        smith.kaji[type] += smith.kaji_amari;
        $(cn).text(smith.kaji[type]);
        $(".kazi_addsum").text(smith.kaji.sum);
        $(".kazi_paygold").text(smith.kaji.sum * 50000);
        $(".kazi_paysizai").text(smith.kaji.sum * 300);
      } else {
        smith.m = type;
        $.ajax({
          type: "POST",
          url: "item_GoldsUpdate.php",
          data: { marumie: SID, seskey: SKEY },
          success: (r) => {
            if (r.error != 1) {
              return alert("サーバエラ-5001");
            }
            now_gold = r.gold;
            now_sizai = r.sizai;
            $("#kazi_gold").text(r.gold);
            $("#kazi_sizai").text(r.sizai);
            const able1 = Math.floor(
              (now_gold - smith.kaji.sum * 50000) / 50000
            );
            const able2 = Math.floor((now_sizai - smith.kaji.sum * 300) / 300);
            const able3 = able1 > able2 ? able2 : able1;
            const able = able3 > smith.kaji_amari ? smith.kaji_amari : able3;
            if (smith.kaji_amari == 0) return alert(t);
            if (able <= 0) {
              smith.kaji[type] += smith.kaji_amari;
            } else {
              smith.kaji[type] = able;
            }
            $(cn).text(smith.kaji[type]);
            $(".kazi_addsum").text(smith.kaji.sum);
            $(".kazi_paygold").text(smith.kaji.sum * 50000);
            $(".kazi_paysizai").text(smith.kaji.sum * 300);
          },
          error: (e) => {
            alert("なにかしらの不具合5001");
          },
        });
      }
      return;
    }
    smith.m = "";
    if (count === "r") {
      smith.kaji[type] = 0;
    } else if (count === -10) {
      smith.kaji[type] = smith.kaji[type] < 10 ? 0 : smith.kaji[type] - 10;
    } else if (count === -1) {
      smith.kaji[type] = smith.kaji[type] ? smith.kaji[type] - 1 : 0;
    } else if (count === 1) {
      if (smith.kaji_amari === 0) return alert(t);
      smith.kaji[type] += 1;
    } else if (count === 10) {
      if (smith.kaji_amari === 0) return alert(t);
      smith.kaji[type] =
        smith.kaji_amari < 10
          ? smith.kaji[type] + smith.kaji_amari
          : smith.kaji[type] + 10;
    }
    $(cn).text(smith.kaji[type]);
    $(".kazi_addsum").text(smith.kaji.sum);
    $(".kazi_paygold").text(smith.kaji.sum * 50000);
    $(".kazi_paysizai").text(smith.kaji.sum * 300);
    return;
  };
  this.Ougi = (ougiid) => {
    if (ougibtnSP[ougiid] == 0) return RadioLog("未設定です");
    if (wait_Ougi) return;
    wait_Ougi = 1;
    RadioLog(`奥義発動[${Math.floor(Math.random() * 0x3e7)}]`);
    $(`#ougibtn${ougiid}`).addClass("tusinchu");
    $.ajax({
      type: "post",
      url: "kari_Ougi.php",
      data: { marumie: SID, seskey: SKEY, ougiid },
      success: (result) => {
        $(`#ougibtn${ougiid}`).removeClass("tusinchu");
        wait_Ougi = 0;
        if (result.error == 101) {
          if (
            cnf_ougi == 0 ||
            (cnf_ougi == 1 && [1, 2, 5, 6, 7].includes(now_field))
          )
            RadioLog("奥義予約");
          return;
        }
        if (result.error == 99) return RadioLog("SPが足りません");
        if (result.error != 1) return alert("サーバーエラ-8218");
        if (result.quizn) {
          quizid = Number(result.quizn);
          $("#kariquiz").html(result.quizsss);
          $("#kariquiz").show();
        }
        if (Number(result.porchcount) > 0)
          $("#kabanbtn_count").text(result.porchcount);
      },
      error: () => {
        wait_Ougi = 0;
        alert("なにかしらの不具合5885");
      },
    });
  };
  this.Toiawase = () => {
    $("#toiawaseform").remove();
    Layer(
      "<div style='text-align:center;padding-top:20px;'><div id='toiawasedescription' style='color:red;font-weight:bold;'>※送信前に必ず内容を確認すること</div><textarea style='width:80%;height:150px;' id='toiawasetext'></textarea><br /><button id='sendtoiawasebtn' onclick='SendToiawase()'>送信</button><br /></div>",
      null,
      "toiawaseform",
      null
    );
  };
  this.SendToiawase = () => {
    const naiyou = document.getElementById("toiawasetext").value;
    if (!naiyou) return alert("内容を入力してください。");
    const formData = new FormData();
    formData.append("naiyou", naiyou);
    formData.append("spam", Math.floor(Math.random() * 9999) + 1);
    formData.append("user", myid);
    formData.append("key", seskey);
    fetch("./contact/toiawasend.php", {
      method: "post",
      body: formData,
    });
    document.getElementById("toiawasetext").readOnly = true;
    const sendbutton = document.getElementById("sendtoiawasebtn");
    sendbutton.innerHTML = "OK";
    sendbutton.onclick = () =>
      myremove(sendbutton.parentNode.parentNode.parentNode);
    const description = document.getElementById("toiawasedescription");
    description.style.color = "black";
    description.innerHTML = "送信完了";
  };
  this.TabMenuSettei = async () => {
    $("#layer_settei").remove();
    $("#layerroot").append(
      "<div class='layer' style='background-color:#EEEEEE;text-align:center;' id='layer_settei'> 	<button class='widebtn' onclick='Toiawase()'>お問い合わせ</button><br />	<br />	<div style='text-align:center'>画面サイズ<br />		<a href='javascript:void(0);' class='astyle' onclick='GamenSize(1)'>縦長</a>　		<a href='javascript:void(0);' class='astyle' onclick='GamenSize(2)'>横長</a>　		<a href='javascript:void(0);' class='astyle' onclick='GamenSize(3)'>PC</a>	</div> 	<div style='margin-top:20px;'> 		奥義予約 <label><input type='radio' name='radio_cnfougi' value='0' onclick='SetteiOugiYoyaku(0)'/>有効</label> 		<label><input type='radio' name='radio_cnfougi' value='1' onclick='SetteiOugiYoyaku(1)'/>対戦のみ</label> 		<label><input type='radio' name='radio_cnfougi' value='2' onclick='SetteiOugiYoyaku(2)'/>無効</label> 	</div> 	<div style='margin-top:10px;'> 		行動切替 <label><input type='radio' name='radio_cnfact' value='0' onclick='SetteiActRendou(0)' />有効</label> 		<label><input type='radio' name='radio_cnfact' value='1' onclick='SetteiActRendou(1)' />対戦のみ</label> 		<label><input type='radio' name='radio_cnfact' value='2' onclick='SetteiActRendou(2)'/>無効</label>\x20\x09</div>\x20\x09<div\x20style=\x27margin-top:20px;\x27>\x20\x09\x09<label><input\x20id=\x27checkbox_masume\x27\x20type=\x27checkbox\x27\x20 onclick='CheckboxMasume()'>座標表示</label> 	</div> 	<div id='effmodediv' style='margin-top:10px;'> 		エフェクト<label><input type='radio' class='effmode_radio' name='radioeffect' value='0' onclick='CheckboxEffect()' />通常</label> 		<label><input type='radio' class='effmode_radio' name='radioeffect' value='1' onclick='CheckboxEffect()' />簡易</label> 		<label><input type='radio' class='effmode_radio' name='radioeffect' value='2' onclick='CheckboxEffect()' />無し</label> 	</div>	<div style='margin-top:10px'>	<label><input id='checkbox_bgm' type='checkbox' \x20onclick=\x27CheckboxBGM()\x27>BGM</label>\x20\x09<label><input\x20id=\x27checkbox_oto\x27\x20type=\x27checkbox\x27\x20 onclick='CheckboxOTO()'>効果音</label>	<br>	<small>※モバイル端末ではうまく再生されないかも。</small></div> 	<div id='ecomodediv' style='margin-top:10px;'> 		エコモード<label><input type='radio' class='ecomode_radio' name='radioecomode' value='0' onclick='CheckboxEco()' />OFF</label> 		<label><input type='radio' class='ecomode_radio' name='radioecomode' value='1' onclick='CheckboxEco()' />ON</label>\x20\x09\x09<label><input\x20type=\x27radio\x27\x20class=\x27ecomode_radio\x27\x20name=\x27radioecomode\x27\x20value=\x272\x27\x20onclick=\x27CheckboxEco()\x27\x20/>最大</label> 	</div> 	<br><br>	<div style='margin-top:10px;'></div> 	<a href='javascript:void(0);' class='astyle' onclick='LogClear()' >ログ消去(3DS用)</a>　 	<span id='3dsmodecheck' onclick='DSKaizyo();layerclose(this);'></span> 	<BR><BR> 	<button class='layerclosebtn' onclick='myremove(this.parentNode)'>×</button> </div>"
    );
    document.getElementsByName("radio_cnfougi")[cnf_ougi].checked = true;
    document.getElementsByName("radio_cnfact")[cnf_act].checked = true;
    document.getElementsByClassName("effmode_radio")[effectflg].checked = true;
    document.getElementsByClassName("ecomode_radio")[ecoflg].checked = true;
    document.getElementById("checkbox_masume").checked = !!masumeflg;
    document.getElementById("checkbox_bgm").checked = !!bgmflg;
    document.getElementById("checkbox_oto").checked = !!otoflg;
    document.getElementById("3dsmodecheck").innerHTML = dsflgspecial
      ? "3DSモード解除"
      : "3DSモード起動";
  };
}.call());
