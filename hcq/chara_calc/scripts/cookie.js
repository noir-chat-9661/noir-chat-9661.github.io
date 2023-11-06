"use strict";
const cookieManager = {
  set: function (name, data, option) {
    if (typeof name !== "string")
      throw new TypeError(`${name} is not as string.`);
    const d =
      typeof data === "string"
        ? encodeURIComponent(data)
        : encodeURIComponent(JSON.stringify(data));
    const o = option
      ? `${option.Expires ? `; expires=${option.Expires}` : ""}${
          option["Max-Age"] ? `; Max-Age=${option["Max-Age"]}` : ""
        }${option.Domain ? `; Domain=${option.Domain}` : ""}${
          option.Path ? `; Path=${option.Path}` : ""
        }${option.Secure ? "; Secure" : ""}${
          option.HttpOnly ? "; HttpOnly" : ""
        }${option.SameSite ? `; SameSite=${data.SameSite}` : ""}`
      : "";
    document.cookie = `${name}=${d}${o}`;
  },
  parse: function () {
    const r = {}, r2 = {}
    document.cookie.split("; ").map(n => {r[n.split("=")[0]] = n.slice(n.split("=")[0].length + 1)})
    for (const a in r) {
      r2[a] = isJSON(a[r]) ? toJSON(r[a]) : r[a]
    }
    return r2
  },
};

function isJSON(json) {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}

function toJSON(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return json;
  }
}
