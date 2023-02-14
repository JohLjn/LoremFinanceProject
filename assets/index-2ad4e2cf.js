var $p = Object.defineProperty,
  Mp = Object.defineProperties;
var kp = Object.getOwnPropertyDescriptors;
var Oa = Object.getOwnPropertySymbols;
var Fp = Object.prototype.hasOwnProperty,
  Vp = Object.prototype.propertyIsEnumerable;
var Sa = (t, e, n) =>
    e in t
      ? $p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  Pt = (t, e) => {
    for (var n in e || (e = {})) Fp.call(e, n) && Sa(t, n, e[n]);
    if (Oa) for (var n of Oa(e)) Vp.call(e, n) && Sa(t, n, e[n]);
    return t;
  },
  Zr = (t, e) => Mp(t, kp(e));
var Ca = (t, e, n) =>
  new Promise((r, s) => {
    var i = (c) => {
        try {
          l(n.next(c));
        } catch (d) {
          s(d);
        }
      },
      a = (c) => {
        try {
          l(n.throw(c));
        } catch (d) {
          s(d);
        }
      },
      l = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(i, a));
    l((n = n.apply(t, e)).next());
  });
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Gi(t, e) {
  const n = Object.create(null),
    r = t.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Xi(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        s = xt(r) ? Up(r) : Xi(r);
      if (s) for (const i in s) e[i] = s[i];
    }
    return e;
  } else {
    if (xt(t)) return t;
    if (At(t)) return t;
  }
}
const jp = /;(?![^(]*\))/g,
  Hp = /:([^]+)/,
  Bp = new RegExp("\\/\\*.*?\\*\\/", "gs");
function Up(t) {
  const e = {};
  return (
    t
      .replace(Bp, "")
      .split(jp)
      .forEach((n) => {
        if (n) {
          const r = n.split(Hp);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function Ji(t) {
  let e = "";
  if (xt(t)) e = t;
  else if (tt(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ji(t[n]);
      r && (e += r + " ");
    }
  else if (At(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const Kp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Wp = Gi(Kp);
function Bl(t) {
  return !!t || t === "";
}
const Vt = (t) =>
    xt(t)
      ? t
      : t == null
      ? ""
      : tt(t) || (At(t) && (t.toString === zl || !it(t.toString)))
      ? JSON.stringify(t, Ul, 2)
      : String(t),
  Ul = (t, e) =>
    e && e.__v_isRef
      ? Ul(t, e.value)
      : Bn(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : Kl(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : At(e) && !tt(e) && !ql(e)
      ? String(e)
      : e,
  yt = {},
  Hn = [],
  me = () => {},
  zp = () => !1,
  qp = /^on[^a-z]/,
  Ss = (t) => qp.test(t),
  Qi = (t) => t.startsWith("onUpdate:"),
  Mt = Object.assign,
  Zi = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Yp = Object.prototype.hasOwnProperty,
  dt = (t, e) => Yp.call(t, e),
  tt = Array.isArray,
  Bn = (t) => Cs(t) === "[object Map]",
  Kl = (t) => Cs(t) === "[object Set]",
  it = (t) => typeof t == "function",
  xt = (t) => typeof t == "string",
  to = (t) => typeof t == "symbol",
  At = (t) => t !== null && typeof t == "object",
  Wl = (t) => At(t) && it(t.then) && it(t.catch),
  zl = Object.prototype.toString,
  Cs = (t) => zl.call(t),
  Gp = (t) => Cs(t).slice(8, -1),
  ql = (t) => Cs(t) === "[object Object]",
  eo = (t) =>
    xt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  as = Gi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ns = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Xp = /-(\w)/g,
  Se = Ns((t) => t.replace(Xp, (e, n) => (n ? n.toUpperCase() : ""))),
  Jp = /\B([A-Z])/g,
  sr = Ns((t) => t.replace(Jp, "-$1").toLowerCase()),
  xs = Ns((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  li = Ns((t) => (t ? `on${xs(t)}` : "")),
  Cr = (t, e) => !Object.is(t, e),
  ls = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  vs = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Ai = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Na;
const Qp = () =>
  Na ||
  (Na =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let ue;
class Yl {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ue),
      !e && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = ue;
      try {
        return (ue = this), e();
      } finally {
        ue = n;
      }
    }
  }
  on() {
    ue = this;
  }
  off() {
    ue = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Zp(t) {
  return new Yl(t);
}
function tm(t, e = ue) {
  e && e.active && e.effects.push(t);
}
function em() {
  return ue;
}
const no = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  Gl = (t) => (t.w & Xe) > 0,
  Xl = (t) => (t.n & Xe) > 0,
  nm = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= Xe;
  },
  rm = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        const s = e[r];
        Gl(s) && !Xl(s) ? s.delete(t) : (e[n++] = s),
          (s.w &= ~Xe),
          (s.n &= ~Xe);
      }
      e.length = n;
    }
  },
  wi = new WeakMap();
let br = 0,
  Xe = 1;
const Ti = 30;
let fe;
const gn = Symbol(""),
  Oi = Symbol("");
class ro {
  constructor(e, n = null, r) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      tm(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let e = fe,
      n = Ye;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = fe),
        (fe = this),
        (Ye = !0),
        (Xe = 1 << ++br),
        br <= Ti ? nm(this) : xa(this),
        this.fn()
      );
    } finally {
      br <= Ti && rm(this),
        (Xe = 1 << --br),
        (fe = this.parent),
        (Ye = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    fe === this
      ? (this.deferStop = !0)
      : this.active &&
        (xa(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function xa(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let Ye = !0;
const Jl = [];
function ir() {
  Jl.push(Ye), (Ye = !1);
}
function or() {
  const t = Jl.pop();
  Ye = t === void 0 ? !0 : t;
}
function zt(t, e, n) {
  if (Ye && fe) {
    let r = wi.get(t);
    r || wi.set(t, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = no())), Ql(s);
  }
}
function Ql(t, e) {
  let n = !1;
  br <= Ti ? Xl(t) || ((t.n |= Xe), (n = !Gl(t))) : (n = !t.has(fe)),
    n && (t.add(fe), fe.deps.push(t));
}
function Me(t, e, n, r, s, i) {
  const a = wi.get(t);
  if (!a) return;
  let l = [];
  if (e === "clear") l = [...a.values()];
  else if (n === "length" && tt(t)) {
    const c = Number(r);
    a.forEach((d, f) => {
      (f === "length" || f >= c) && l.push(d);
    });
  } else
    switch ((n !== void 0 && l.push(a.get(n)), e)) {
      case "add":
        tt(t)
          ? eo(n) && l.push(a.get("length"))
          : (l.push(a.get(gn)), Bn(t) && l.push(a.get(Oi)));
        break;
      case "delete":
        tt(t) || (l.push(a.get(gn)), Bn(t) && l.push(a.get(Oi)));
        break;
      case "set":
        Bn(t) && l.push(a.get(gn));
        break;
    }
  if (l.length === 1) l[0] && Si(l[0]);
  else {
    const c = [];
    for (const d of l) d && c.push(...d);
    Si(no(c));
  }
}
function Si(t, e) {
  const n = tt(t) ? t : [...t];
  for (const r of n) r.computed && Ra(r);
  for (const r of n) r.computed || Ra(r);
}
function Ra(t, e) {
  (t !== fe || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const sm = Gi("__proto__,__v_isRef,__isVue"),
  Zl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(to)
  ),
  im = so(),
  om = so(!1, !0),
  am = so(!0),
  La = lm();
function lm() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const r = pt(this);
        for (let i = 0, a = this.length; i < a; i++) zt(r, "get", i + "");
        const s = r[e](...n);
        return s === -1 || s === !1 ? r[e](...n.map(pt)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        ir();
        const r = pt(this)[e].apply(this, n);
        return or(), r;
      };
    }),
    t
  );
}
function cm(t) {
  const e = pt(this);
  return zt(e, "has", t), e.hasOwnProperty(t);
}
function so(t = !1, e = !1) {
  return function (r, s, i) {
    if (s === "__v_isReactive") return !t;
    if (s === "__v_isReadonly") return t;
    if (s === "__v_isShallow") return e;
    if (s === "__v_raw" && i === (t ? (e ? Om : sc) : e ? rc : nc).get(r))
      return r;
    const a = tt(r);
    if (!t) {
      if (a && dt(La, s)) return Reflect.get(La, s, i);
      if (s === "hasOwnProperty") return cm;
    }
    const l = Reflect.get(r, s, i);
    return (to(s) ? Zl.has(s) : sm(s)) || (t || zt(r, "get", s), e)
      ? l
      : $t(l)
      ? a && eo(s)
        ? l
        : l.value
      : At(l)
      ? t
        ? ic(l)
        : ar(l)
      : l;
  };
}
const um = tc(),
  fm = tc(!0);
function tc(t = !1) {
  return function (n, r, s, i) {
    let a = n[r];
    if (Yn(a) && $t(a) && !$t(s)) return !1;
    if (
      !t &&
      (!Es(s) && !Yn(s) && ((a = pt(a)), (s = pt(s))),
      !tt(n) && $t(a) && !$t(s))
    )
      return (a.value = s), !0;
    const l = tt(n) && eo(r) ? Number(r) < n.length : dt(n, r),
      c = Reflect.set(n, r, s, i);
    return (
      n === pt(i) && (l ? Cr(s, a) && Me(n, "set", r, s) : Me(n, "add", r, s)),
      c
    );
  };
}
function dm(t, e) {
  const n = dt(t, e);
  t[e];
  const r = Reflect.deleteProperty(t, e);
  return r && n && Me(t, "delete", e, void 0), r;
}
function hm(t, e) {
  const n = Reflect.has(t, e);
  return (!to(e) || !Zl.has(e)) && zt(t, "has", e), n;
}
function pm(t) {
  return zt(t, "iterate", tt(t) ? "length" : gn), Reflect.ownKeys(t);
}
const ec = { get: im, set: um, deleteProperty: dm, has: hm, ownKeys: pm },
  mm = {
    get: am,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  _m = Mt({}, ec, { get: om, set: fm }),
  io = (t) => t,
  Rs = (t) => Reflect.getPrototypeOf(t);
function ts(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const s = pt(t),
    i = pt(e);
  n || (e !== i && zt(s, "get", e), zt(s, "get", i));
  const { has: a } = Rs(s),
    l = r ? io : n ? lo : Nr;
  if (a.call(s, e)) return l(t.get(e));
  if (a.call(s, i)) return l(t.get(i));
  t !== s && t.get(e);
}
function es(t, e = !1) {
  const n = this.__v_raw,
    r = pt(n),
    s = pt(t);
  return (
    e || (t !== s && zt(r, "has", t), zt(r, "has", s)),
    t === s ? n.has(t) : n.has(t) || n.has(s)
  );
}
function ns(t, e = !1) {
  return (
    (t = t.__v_raw), !e && zt(pt(t), "iterate", gn), Reflect.get(t, "size", t)
  );
}
function Da(t) {
  t = pt(t);
  const e = pt(this);
  return Rs(e).has.call(e, t) || (e.add(t), Me(e, "add", t, t)), this;
}
function Pa(t, e) {
  e = pt(e);
  const n = pt(this),
    { has: r, get: s } = Rs(n);
  let i = r.call(n, t);
  i || ((t = pt(t)), (i = r.call(n, t)));
  const a = s.call(n, t);
  return (
    n.set(t, e), i ? Cr(e, a) && Me(n, "set", t, e) : Me(n, "add", t, e), this
  );
}
function Ia(t) {
  const e = pt(this),
    { has: n, get: r } = Rs(e);
  let s = n.call(e, t);
  s || ((t = pt(t)), (s = n.call(e, t))), r && r.call(e, t);
  const i = e.delete(t);
  return s && Me(e, "delete", t, void 0), i;
}
function $a() {
  const t = pt(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Me(t, "clear", void 0, void 0), n;
}
function rs(t, e) {
  return function (r, s) {
    const i = this,
      a = i.__v_raw,
      l = pt(a),
      c = e ? io : t ? lo : Nr;
    return (
      !t && zt(l, "iterate", gn), a.forEach((d, f) => r.call(s, c(d), c(f), i))
    );
  };
}
function ss(t, e, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = pt(s),
      a = Bn(i),
      l = t === "entries" || (t === Symbol.iterator && a),
      c = t === "keys" && a,
      d = s[t](...r),
      f = n ? io : e ? lo : Nr;
    return (
      !e && zt(i, "iterate", c ? Oi : gn),
      {
        next() {
          const { value: p, done: g } = d.next();
          return g
            ? { value: p, done: g }
            : { value: l ? [f(p[0]), f(p[1])] : f(p), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ue(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function gm() {
  const t = {
      get(i) {
        return ts(this, i);
      },
      get size() {
        return ns(this);
      },
      has: es,
      add: Da,
      set: Pa,
      delete: Ia,
      clear: $a,
      forEach: rs(!1, !1),
    },
    e = {
      get(i) {
        return ts(this, i, !1, !0);
      },
      get size() {
        return ns(this);
      },
      has: es,
      add: Da,
      set: Pa,
      delete: Ia,
      clear: $a,
      forEach: rs(!1, !0),
    },
    n = {
      get(i) {
        return ts(this, i, !0);
      },
      get size() {
        return ns(this, !0);
      },
      has(i) {
        return es.call(this, i, !0);
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: rs(!0, !1),
    },
    r = {
      get(i) {
        return ts(this, i, !0, !0);
      },
      get size() {
        return ns(this, !0);
      },
      has(i) {
        return es.call(this, i, !0);
      },
      add: Ue("add"),
      set: Ue("set"),
      delete: Ue("delete"),
      clear: Ue("clear"),
      forEach: rs(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (t[i] = ss(i, !1, !1)),
        (n[i] = ss(i, !0, !1)),
        (e[i] = ss(i, !1, !0)),
        (r[i] = ss(i, !0, !0));
    }),
    [t, n, e, r]
  );
}
const [vm, Em, bm, ym] = gm();
function oo(t, e) {
  const n = e ? (t ? ym : bm) : t ? Em : vm;
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !t
      : s === "__v_isReadonly"
      ? t
      : s === "__v_raw"
      ? r
      : Reflect.get(dt(n, s) && s in r ? n : r, s, i);
}
const Am = { get: oo(!1, !1) },
  wm = { get: oo(!1, !0) },
  Tm = { get: oo(!0, !1) },
  nc = new WeakMap(),
  rc = new WeakMap(),
  sc = new WeakMap(),
  Om = new WeakMap();
function Sm(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Cm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Sm(Gp(t));
}
function ar(t) {
  return Yn(t) ? t : ao(t, !1, ec, Am, nc);
}
function Nm(t) {
  return ao(t, !1, _m, wm, rc);
}
function ic(t) {
  return ao(t, !0, mm, Tm, sc);
}
function ao(t, e, n, r, s) {
  if (!At(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = s.get(t);
  if (i) return i;
  const a = Cm(t);
  if (a === 0) return t;
  const l = new Proxy(t, a === 2 ? r : n);
  return s.set(t, l), l;
}
function Un(t) {
  return Yn(t) ? Un(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Yn(t) {
  return !!(t && t.__v_isReadonly);
}
function Es(t) {
  return !!(t && t.__v_isShallow);
}
function oc(t) {
  return Un(t) || Yn(t);
}
function pt(t) {
  const e = t && t.__v_raw;
  return e ? pt(e) : t;
}
function ac(t) {
  return vs(t, "__v_skip", !0), t;
}
const Nr = (t) => (At(t) ? ar(t) : t),
  lo = (t) => (At(t) ? ic(t) : t);
function lc(t) {
  Ye && fe && ((t = pt(t)), Ql(t.dep || (t.dep = no())));
}
function cc(t, e) {
  t = pt(t);
  const n = t.dep;
  n && Si(n);
}
function $t(t) {
  return !!(t && t.__v_isRef === !0);
}
function xm(t) {
  return uc(t, !1);
}
function Rm(t) {
  return uc(t, !0);
}
function uc(t, e) {
  return $t(t) ? t : new Lm(t, e);
}
class Lm {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : pt(e)),
      (this._value = n ? e : Nr(e));
  }
  get value() {
    return lc(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Es(e) || Yn(e);
    (e = n ? e : pt(e)),
      Cr(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : Nr(e)), cc(this));
  }
}
function Kn(t) {
  return $t(t) ? t.value : t;
}
const Dm = {
  get: (t, e, n) => Kn(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const s = t[e];
    return $t(s) && !$t(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function fc(t) {
  return Un(t) ? t : new Proxy(t, Dm);
}
var dc;
class Pm {
  constructor(e, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[dc] = !1),
      (this._dirty = !0),
      (this.effect = new ro(e, () => {
        this._dirty || ((this._dirty = !0), cc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const e = pt(this);
    return (
      lc(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
dc = "__v_isReadonly";
function Im(t, e, n = !1) {
  let r, s;
  const i = it(t);
  return (
    i ? ((r = t), (s = me)) : ((r = t.get), (s = t.set)),
    new Pm(r, s, i || !s, n)
  );
}
function Ge(t, e, n, r) {
  let s;
  try {
    s = r ? t(...r) : t();
  } catch (i) {
    Ls(i, e, n);
  }
  return s;
}
function se(t, e, n, r) {
  if (it(t)) {
    const i = Ge(t, e, n, r);
    return (
      i &&
        Wl(i) &&
        i.catch((a) => {
          Ls(a, e, n);
        }),
      i
    );
  }
  const s = [];
  for (let i = 0; i < t.length; i++) s.push(se(t[i], e, n, r));
  return s;
}
function Ls(t, e, n, r = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const a = e.proxy,
      l = n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](t, a, l) === !1) return;
      }
      i = i.parent;
    }
    const c = e.appContext.config.errorHandler;
    if (c) {
      Ge(c, null, 10, [t, a, l]);
      return;
    }
  }
  $m(t, n, s, r);
}
function $m(t, e, n, r = !0) {
  console.error(t);
}
let xr = !1,
  Ci = !1;
const It = [];
let we = 0;
const Wn = [];
let De = null,
  hn = 0;
const hc = Promise.resolve();
let co = null;
function pc(t) {
  const e = co || hc;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Mm(t) {
  let e = we + 1,
    n = It.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1;
    Rr(It[r]) < t ? (e = r + 1) : (n = r);
  }
  return e;
}
function uo(t) {
  (!It.length || !It.includes(t, xr && t.allowRecurse ? we + 1 : we)) &&
    (t.id == null ? It.push(t) : It.splice(Mm(t.id), 0, t), mc());
}
function mc() {
  !xr && !Ci && ((Ci = !0), (co = hc.then(gc)));
}
function km(t) {
  const e = It.indexOf(t);
  e > we && It.splice(e, 1);
}
function Fm(t) {
  tt(t)
    ? Wn.push(...t)
    : (!De || !De.includes(t, t.allowRecurse ? hn + 1 : hn)) && Wn.push(t),
    mc();
}
function Ma(t, e = xr ? we + 1 : 0) {
  for (; e < It.length; e++) {
    const n = It[e];
    n && n.pre && (It.splice(e, 1), e--, n());
  }
}
function _c(t) {
  if (Wn.length) {
    const e = [...new Set(Wn)];
    if (((Wn.length = 0), De)) {
      De.push(...e);
      return;
    }
    for (De = e, De.sort((n, r) => Rr(n) - Rr(r)), hn = 0; hn < De.length; hn++)
      De[hn]();
    (De = null), (hn = 0);
  }
}
const Rr = (t) => (t.id == null ? 1 / 0 : t.id),
  Vm = (t, e) => {
    const n = Rr(t) - Rr(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function gc(t) {
  (Ci = !1), (xr = !0), It.sort(Vm);
  const e = me;
  try {
    for (we = 0; we < It.length; we++) {
      const n = It[we];
      n && n.active !== !1 && Ge(n, null, 14);
    }
  } finally {
    (we = 0),
      (It.length = 0),
      _c(),
      (xr = !1),
      (co = null),
      (It.length || Wn.length) && gc();
  }
}
function jm(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || yt;
  let s = n;
  const i = e.startsWith("update:"),
    a = i && e.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`,
      { number: p, trim: g } = r[f] || yt;
    g && (s = n.map((E) => (xt(E) ? E.trim() : E))), p && (s = n.map(Ai));
  }
  let l,
    c = r[(l = li(e))] || r[(l = li(Se(e)))];
  !c && i && (c = r[(l = li(sr(e)))]), c && se(c, t, 6, s);
  const d = r[l + "Once"];
  if (d) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[l]) return;
    (t.emitted[l] = !0), se(d, t, 6, s);
  }
}
function vc(t, e, n = !1) {
  const r = e.emitsCache,
    s = r.get(t);
  if (s !== void 0) return s;
  const i = t.emits;
  let a = {},
    l = !1;
  if (!it(t)) {
    const c = (d) => {
      const f = vc(d, e, !0);
      f && ((l = !0), Mt(a, f));
    };
    !n && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c);
  }
  return !i && !l
    ? (At(t) && r.set(t, null), null)
    : (tt(i) ? i.forEach((c) => (a[c] = null)) : Mt(a, i),
      At(t) && r.set(t, a),
      a);
}
function Ds(t, e) {
  return !t || !Ss(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      dt(t, e[0].toLowerCase() + e.slice(1)) || dt(t, sr(e)) || dt(t, e));
}
let Zt = null,
  Ps = null;
function bs(t) {
  const e = Zt;
  return (Zt = t), (Ps = (t && t.type.__scopeId) || null), e;
}
function $r(t) {
  Ps = t;
}
function Mr() {
  Ps = null;
}
function zn(t, e = Zt, n) {
  if (!e || t._n) return t;
  const r = (...s) => {
    r._d && za(-1);
    const i = bs(e);
    let a;
    try {
      a = t(...s);
    } finally {
      bs(i), r._d && za(1);
    }
    return a;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function ci(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: i,
    propsOptions: [a],
    slots: l,
    attrs: c,
    emit: d,
    render: f,
    renderCache: p,
    data: g,
    setupState: E,
    ctx: b,
    inheritAttrs: y,
  } = t;
  let D, x;
  const F = bs(t);
  try {
    if (n.shapeFlag & 4) {
      const H = s || r;
      (D = ye(f.call(H, H, p, i, E, g, b))), (x = c);
    } else {
      const H = e;
      (D = ye(
        H.length > 1 ? H(i, { attrs: c, slots: l, emit: d }) : H(i, null)
      )),
        (x = e.props ? c : Hm(c));
    }
  } catch (H) {
    (Ar.length = 0), Ls(H, t, 1), (D = Ot(Ie));
  }
  let M = D;
  if (x && y !== !1) {
    const H = Object.keys(x),
      { shapeFlag: q } = M;
    H.length && q & 7 && (a && H.some(Qi) && (x = Bm(x, a)), (M = Je(M, x)));
  }
  return (
    n.dirs && ((M = Je(M)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (M.transition = n.transition),
    (D = M),
    bs(F),
    D
  );
}
const Hm = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Ss(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Bm = (t, e) => {
    const n = {};
    for (const r in t) (!Qi(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function Um(t, e, n) {
  const { props: r, children: s, component: i } = t,
    { props: a, children: l, patchFlag: c } = e,
    d = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? ka(r, a, d) : !!a;
    if (c & 8) {
      const f = e.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const g = f[p];
        if (a[g] !== r[g] && !Ds(d, g)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === a
      ? !1
      : r
      ? a
        ? ka(r, a, d)
        : !0
      : !!a;
  return !1;
}
function ka(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (e[i] !== t[i] && !Ds(n, i)) return !0;
  }
  return !1;
}
function Km({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const Wm = (t) => t.__isSuspense;
function zm(t, e) {
  e && e.pendingBranch
    ? tt(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Fm(t);
}
function cs(t, e) {
  if (St) {
    let n = St.provides;
    const r = St.parent && St.parent.provides;
    r === n && (n = St.provides = Object.create(r)), (n[t] = e);
  }
}
function Pe(t, e, n = !1) {
  const r = St || Zt;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && t in s) return s[t];
    if (arguments.length > 1) return n && it(e) ? e.call(r.proxy) : e;
  }
}
const is = {};
function qn(t, e, n) {
  return Ec(t, e, n);
}
function Ec(
  t,
  e,
  { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: a } = yt
) {
  const l = em() === (St == null ? void 0 : St.scope) ? St : null;
  let c,
    d = !1,
    f = !1;
  if (
    ($t(t)
      ? ((c = () => t.value), (d = Es(t)))
      : Un(t)
      ? ((c = () => t), (r = !0))
      : tt(t)
      ? ((f = !0),
        (d = t.some((M) => Un(M) || Es(M))),
        (c = () =>
          t.map((M) => {
            if ($t(M)) return M.value;
            if (Un(M)) return _n(M);
            if (it(M)) return Ge(M, l, 2);
          })))
      : it(t)
      ? e
        ? (c = () => Ge(t, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return p && p(), se(t, l, 3, [g]);
          })
      : (c = me),
    e && r)
  ) {
    const M = c;
    c = () => _n(M());
  }
  let p,
    g = (M) => {
      p = x.onStop = () => {
        Ge(M, l, 4);
      };
    },
    E;
  if (Dr)
    if (
      ((g = me),
      e ? n && se(e, l, 3, [c(), f ? [] : void 0, g]) : c(),
      s === "sync")
    ) {
      const M = U_();
      E = M.__watcherHandles || (M.__watcherHandles = []);
    } else return me;
  let b = f ? new Array(t.length).fill(is) : is;
  const y = () => {
    if (x.active)
      if (e) {
        const M = x.run();
        (r || d || (f ? M.some((H, q) => Cr(H, b[q])) : Cr(M, b))) &&
          (p && p(),
          se(e, l, 3, [M, b === is ? void 0 : f && b[0] === is ? [] : b, g]),
          (b = M));
      } else x.run();
  };
  y.allowRecurse = !!e;
  let D;
  s === "sync"
    ? (D = y)
    : s === "post"
    ? (D = () => Kt(y, l && l.suspense))
    : ((y.pre = !0), l && (y.id = l.uid), (D = () => uo(y)));
  const x = new ro(c, D);
  e
    ? n
      ? y()
      : (b = x.run())
    : s === "post"
    ? Kt(x.run.bind(x), l && l.suspense)
    : x.run();
  const F = () => {
    x.stop(), l && l.scope && Zi(l.scope.effects, x);
  };
  return E && E.push(F), F;
}
function qm(t, e, n) {
  const r = this.proxy,
    s = xt(t) ? (t.includes(".") ? bc(r, t) : () => r[t]) : t.bind(r, r);
  let i;
  it(e) ? (i = e) : ((i = e.handler), (n = e));
  const a = St;
  Gn(this);
  const l = Ec(s, i.bind(r), n);
  return a ? Gn(a) : En(), l;
}
function bc(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function _n(t, e) {
  if (!At(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), $t(t))) _n(t.value, e);
  else if (tt(t)) for (let n = 0; n < t.length; n++) _n(t[n], e);
  else if (Kl(t) || Bn(t))
    t.forEach((n) => {
      _n(n, e);
    });
  else if (ql(t)) for (const n in t) _n(t[n], e);
  return t;
}
function Ym() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Oc(() => {
      t.isMounted = !0;
    }),
    Sc(() => {
      t.isUnmounting = !0;
    }),
    t
  );
}
const re = [Function, Array],
  Gm = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: re,
      onEnter: re,
      onAfterEnter: re,
      onEnterCancelled: re,
      onBeforeLeave: re,
      onLeave: re,
      onAfterLeave: re,
      onLeaveCancelled: re,
      onBeforeAppear: re,
      onAppear: re,
      onAfterAppear: re,
      onAppearCancelled: re,
    },
    setup(t, { slots: e }) {
      const n = $_(),
        r = Ym();
      let s;
      return () => {
        const i = e.default && Ac(e.default(), !0);
        if (!i || !i.length) return;
        let a = i[0];
        if (i.length > 1) {
          for (const y of i)
            if (y.type !== Ie) {
              a = y;
              break;
            }
        }
        const l = pt(t),
          { mode: c } = l;
        if (r.isLeaving) return ui(a);
        const d = Fa(a);
        if (!d) return ui(a);
        const f = Ni(d, l, r, n);
        xi(d, f);
        const p = n.subTree,
          g = p && Fa(p);
        let E = !1;
        const { getTransitionKey: b } = d.type;
        if (b) {
          const y = b();
          s === void 0 ? (s = y) : y !== s && ((s = y), (E = !0));
        }
        if (g && g.type !== Ie && (!pn(d, g) || E)) {
          const y = Ni(g, l, r, n);
          if ((xi(g, y), c === "out-in"))
            return (
              (r.isLeaving = !0),
              (y.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              ui(a)
            );
          c === "in-out" &&
            d.type !== Ie &&
            (y.delayLeave = (D, x, F) => {
              const M = yc(r, g);
              (M[String(g.key)] = g),
                (D._leaveCb = () => {
                  x(), (D._leaveCb = void 0), delete f.delayedLeave;
                }),
                (f.delayedLeave = F);
            });
        }
        return a;
      };
    },
  },
  Xm = Gm;
function yc(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || ((r = Object.create(null)), n.set(e.type, r)), r;
}
function Ni(t, e, n, r) {
  const {
      appear: s,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: d,
      onEnterCancelled: f,
      onBeforeLeave: p,
      onLeave: g,
      onAfterLeave: E,
      onLeaveCancelled: b,
      onBeforeAppear: y,
      onAppear: D,
      onAfterAppear: x,
      onAppearCancelled: F,
    } = e,
    M = String(t.key),
    H = yc(n, t),
    q = (Y, J) => {
      Y && se(Y, r, 9, J);
    },
    Z = (Y, J) => {
      const G = J[1];
      q(Y, J),
        tt(Y) ? Y.every((et) => et.length <= 1) && G() : Y.length <= 1 && G();
    },
    rt = {
      mode: i,
      persisted: a,
      beforeEnter(Y) {
        let J = l;
        if (!n.isMounted)
          if (s) J = y || l;
          else return;
        Y._leaveCb && Y._leaveCb(!0);
        const G = H[M];
        G && pn(t, G) && G.el._leaveCb && G.el._leaveCb(), q(J, [Y]);
      },
      enter(Y) {
        let J = c,
          G = d,
          et = f;
        if (!n.isMounted)
          if (s) (J = D || c), (G = x || d), (et = F || f);
          else return;
        let mt = !1;
        const _t = (Y._enterCb = (Nt) => {
          mt ||
            ((mt = !0),
            Nt ? q(et, [Y]) : q(G, [Y]),
            rt.delayedLeave && rt.delayedLeave(),
            (Y._enterCb = void 0));
        });
        J ? Z(J, [Y, _t]) : _t();
      },
      leave(Y, J) {
        const G = String(t.key);
        if ((Y._enterCb && Y._enterCb(!0), n.isUnmounting)) return J();
        q(p, [Y]);
        let et = !1;
        const mt = (Y._leaveCb = (_t) => {
          et ||
            ((et = !0),
            J(),
            _t ? q(b, [Y]) : q(E, [Y]),
            (Y._leaveCb = void 0),
            H[G] === t && delete H[G]);
        });
        (H[G] = t), g ? Z(g, [Y, mt]) : mt();
      },
      clone(Y) {
        return Ni(Y, e, n, r);
      },
    };
  return rt;
}
function ui(t) {
  if (Is(t)) return (t = Je(t)), (t.children = null), t;
}
function Fa(t) {
  return Is(t) ? (t.children ? t.children[0] : void 0) : t;
}
function xi(t, e) {
  t.shapeFlag & 6 && t.component
    ? xi(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
function Ac(t, e = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === Wt
      ? (a.patchFlag & 128 && s++, (r = r.concat(Ac(a.children, e, l))))
      : (e || a.type !== Ie) && r.push(l != null ? Je(a, { key: l }) : a);
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function wc(t) {
  return it(t) ? { setup: t, name: t.name } : t;
}
const us = (t) => !!t.type.__asyncLoader,
  Is = (t) => t.type.__isKeepAlive;
function Jm(t, e) {
  Tc(t, "a", e);
}
function Qm(t, e) {
  Tc(t, "da", e);
}
function Tc(t, e, n = St) {
  const r =
    t.__wdc ||
    (t.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
  if (($s(e, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Is(s.parent.vnode) && Zm(r, e, n, s), (s = s.parent);
  }
}
function Zm(t, e, n, r) {
  const s = $s(e, t, r, !0);
  Cc(() => {
    Zi(r[e], s);
  }, n);
}
function $s(t, e, n = St, r = !1) {
  if (n) {
    const s = n[t] || (n[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...a) => {
          if (n.isUnmounted) return;
          ir(), Gn(n);
          const l = se(e, n, t, a);
          return En(), or(), l;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Fe =
    (t) =>
    (e, n = St) =>
      (!Dr || t === "sp") && $s(t, (...r) => e(...r), n),
  t_ = Fe("bm"),
  Oc = Fe("m"),
  e_ = Fe("bu"),
  n_ = Fe("u"),
  Sc = Fe("bum"),
  Cc = Fe("um"),
  r_ = Fe("sp"),
  s_ = Fe("rtg"),
  i_ = Fe("rtc");
function o_(t, e = St) {
  $s("ec", t, e);
}
function be(t, e) {
  const n = Zt;
  if (n === null) return t;
  const r = Vs(n) || n.proxy,
    s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [a, l, c, d = yt] = e[i];
    a &&
      (it(a) && (a = { mounted: a, updated: a }),
      a.deep && _n(l),
      s.push({
        dir: a,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: c,
        modifiers: d,
      }));
  }
  return t;
}
function un(t, e, n, r) {
  const s = t.dirs,
    i = e && e.dirs;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    i && (l.oldValue = i[a].value);
    let c = l.dir[r];
    c && (ir(), se(c, n, 8, [t.el, l, t, e]), or());
  }
}
const Nc = "components";
function vn(t, e) {
  return l_(Nc, t, !0, e) || t;
}
const a_ = Symbol();
function l_(t, e, n = !0, r = !1) {
  const s = Zt || St;
  if (s) {
    const i = s.type;
    if (t === Nc) {
      const l = j_(i, !1);
      if (l && (l === e || l === Se(e) || l === xs(Se(e)))) return i;
    }
    const a = Va(s[t] || i[t], e) || Va(s.appContext[t], e);
    return !a && r ? i : a;
  }
}
function Va(t, e) {
  return t && (t[e] || t[Se(e)] || t[xs(Se(e))]);
}
function c_(t, e, n, r) {
  let s;
  const i = n && n[r];
  if (tt(t) || xt(t)) {
    s = new Array(t.length);
    for (let a = 0, l = t.length; a < l; a++)
      s[a] = e(t[a], a, void 0, i && i[a]);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let a = 0; a < t; a++) s[a] = e(a + 1, a, void 0, i && i[a]);
  } else if (At(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (a, l) => e(a, l, void 0, i && i[l]));
    else {
      const a = Object.keys(t);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        s[l] = e(t[d], d, l, i && i[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Ri = (t) => (t ? (Vc(t) ? Vs(t) || t.proxy : Ri(t.parent)) : null),
  yr = Mt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ri(t.parent),
    $root: (t) => Ri(t.root),
    $emit: (t) => t.emit,
    $options: (t) => fo(t),
    $forceUpdate: (t) => t.f || (t.f = () => uo(t.update)),
    $nextTick: (t) => t.n || (t.n = pc.bind(t.proxy)),
    $watch: (t) => qm.bind(t),
  }),
  fi = (t, e) => t !== yt && !t.__isScriptSetup && dt(t, e),
  u_ = {
    get({ _: t }, e) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: a,
        type: l,
        appContext: c,
      } = t;
      let d;
      if (e[0] !== "$") {
        const E = a[e];
        if (E !== void 0)
          switch (E) {
            case 1:
              return r[e];
            case 2:
              return s[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (fi(r, e)) return (a[e] = 1), r[e];
          if (s !== yt && dt(s, e)) return (a[e] = 2), s[e];
          if ((d = t.propsOptions[0]) && dt(d, e)) return (a[e] = 3), i[e];
          if (n !== yt && dt(n, e)) return (a[e] = 4), n[e];
          Li && (a[e] = 0);
        }
      }
      const f = yr[e];
      let p, g;
      if (f) return e === "$attrs" && zt(t, "get", e), f(t);
      if ((p = l.__cssModules) && (p = p[e])) return p;
      if (n !== yt && dt(n, e)) return (a[e] = 4), n[e];
      if (((g = c.config.globalProperties), dt(g, e))) return g[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: s, ctx: i } = t;
      return fi(s, e)
        ? ((s[e] = n), !0)
        : r !== yt && dt(r, e)
        ? ((r[e] = n), !0)
        : dt(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((i[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      a
    ) {
      let l;
      return (
        !!n[a] ||
        (t !== yt && dt(t, a)) ||
        fi(e, a) ||
        ((l = i[0]) && dt(l, a)) ||
        dt(r, a) ||
        dt(yr, a) ||
        dt(s.config.globalProperties, a)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : dt(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
let Li = !0;
function f_(t) {
  const e = fo(t),
    n = t.proxy,
    r = t.ctx;
  (Li = !1), e.beforeCreate && ja(e.beforeCreate, t, "bc");
  const {
    data: s,
    computed: i,
    methods: a,
    watch: l,
    provide: c,
    inject: d,
    created: f,
    beforeMount: p,
    mounted: g,
    beforeUpdate: E,
    updated: b,
    activated: y,
    deactivated: D,
    beforeDestroy: x,
    beforeUnmount: F,
    destroyed: M,
    unmounted: H,
    render: q,
    renderTracked: Z,
    renderTriggered: rt,
    errorCaptured: Y,
    serverPrefetch: J,
    expose: G,
    inheritAttrs: et,
    components: mt,
    directives: _t,
    filters: Nt,
  } = e;
  if ((d && d_(d, r, null, t.appContext.config.unwrapInjectedRef), a))
    for (const nt in a) {
      const ut = a[nt];
      it(ut) && (r[nt] = ut.bind(n));
    }
  if (s) {
    const nt = s.call(n, n);
    At(nt) && (t.data = ar(nt));
  }
  if (((Li = !0), i))
    for (const nt in i) {
      const ut = i[nt],
        Tt = it(ut) ? ut.bind(n, n) : it(ut.get) ? ut.get.bind(n, n) : me,
        Bt = !it(ut) && it(ut.set) ? ut.set.bind(n) : me,
        Lt = Qt({ get: Tt, set: Bt });
      Object.defineProperty(r, nt, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (wt) => (Lt.value = wt),
      });
    }
  if (l) for (const nt in l) xc(l[nt], r, n, nt);
  if (c) {
    const nt = it(c) ? c.call(n) : c;
    Reflect.ownKeys(nt).forEach((ut) => {
      cs(ut, nt[ut]);
    });
  }
  f && ja(f, t, "c");
  function ct(nt, ut) {
    tt(ut) ? ut.forEach((Tt) => nt(Tt.bind(n))) : ut && nt(ut.bind(n));
  }
  if (
    (ct(t_, p),
    ct(Oc, g),
    ct(e_, E),
    ct(n_, b),
    ct(Jm, y),
    ct(Qm, D),
    ct(o_, Y),
    ct(i_, Z),
    ct(s_, rt),
    ct(Sc, F),
    ct(Cc, H),
    ct(r_, J),
    tt(G))
  )
    if (G.length) {
      const nt = t.exposed || (t.exposed = {});
      G.forEach((ut) => {
        Object.defineProperty(nt, ut, {
          get: () => n[ut],
          set: (Tt) => (n[ut] = Tt),
        });
      });
    } else t.exposed || (t.exposed = {});
  q && t.render === me && (t.render = q),
    et != null && (t.inheritAttrs = et),
    mt && (t.components = mt),
    _t && (t.directives = _t);
}
function d_(t, e, n = me, r = !1) {
  tt(t) && (t = Di(t));
  for (const s in t) {
    const i = t[s];
    let a;
    At(i)
      ? "default" in i
        ? (a = Pe(i.from || s, i.default, !0))
        : (a = Pe(i.from || s))
      : (a = Pe(i)),
      $t(a) && r
        ? Object.defineProperty(e, s, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (l) => (a.value = l),
          })
        : (e[s] = a);
  }
}
function ja(t, e, n) {
  se(tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function xc(t, e, n, r) {
  const s = r.includes(".") ? bc(n, r) : () => n[r];
  if (xt(t)) {
    const i = e[t];
    it(i) && qn(s, i);
  } else if (it(t)) qn(s, t.bind(n));
  else if (At(t))
    if (tt(t)) t.forEach((i) => xc(i, e, n, r));
    else {
      const i = it(t.handler) ? t.handler.bind(n) : e[t.handler];
      it(i) && qn(s, i, t);
    }
}
function fo(t) {
  const e = t.type,
    { mixins: n, extends: r } = e,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: a },
    } = t.appContext,
    l = i.get(e);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = e)
      : ((c = {}), s.length && s.forEach((d) => ys(c, d, a, !0)), ys(c, e, a)),
    At(e) && i.set(e, c),
    c
  );
}
function ys(t, e, n, r = !1) {
  const { mixins: s, extends: i } = e;
  i && ys(t, i, n, !0), s && s.forEach((a) => ys(t, a, n, !0));
  for (const a in e)
    if (!(r && a === "expose")) {
      const l = h_[a] || (n && n[a]);
      t[a] = l ? l(t[a], e[a]) : e[a];
    }
  return t;
}
const h_ = {
  data: Ha,
  props: dn,
  emits: dn,
  methods: dn,
  computed: dn,
  beforeCreate: Ft,
  created: Ft,
  beforeMount: Ft,
  mounted: Ft,
  beforeUpdate: Ft,
  updated: Ft,
  beforeDestroy: Ft,
  beforeUnmount: Ft,
  destroyed: Ft,
  unmounted: Ft,
  activated: Ft,
  deactivated: Ft,
  errorCaptured: Ft,
  serverPrefetch: Ft,
  components: dn,
  directives: dn,
  watch: m_,
  provide: Ha,
  inject: p_,
};
function Ha(t, e) {
  return e
    ? t
      ? function () {
          return Mt(
            it(t) ? t.call(this, this) : t,
            it(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function p_(t, e) {
  return dn(Di(t), Di(e));
}
function Di(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ft(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function dn(t, e) {
  return t ? Mt(Mt(Object.create(null), t), e) : e;
}
function m_(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Mt(Object.create(null), t);
  for (const r in e) n[r] = Ft(t[r], e[r]);
  return n;
}
function __(t, e, n, r = !1) {
  const s = {},
    i = {};
  vs(i, ks, 1), (t.propsDefaults = Object.create(null)), Rc(t, e, s, i);
  for (const a in t.propsOptions[0]) a in s || (s[a] = void 0);
  n ? (t.props = r ? s : Nm(s)) : t.type.props ? (t.props = s) : (t.props = i),
    (t.attrs = i);
}
function g_(t, e, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: a },
    } = t,
    l = pt(s),
    [c] = t.propsOptions;
  let d = !1;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = t.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let g = f[p];
        if (Ds(t.emitsOptions, g)) continue;
        const E = e[g];
        if (c)
          if (dt(i, g)) E !== i[g] && ((i[g] = E), (d = !0));
          else {
            const b = Se(g);
            s[b] = Pi(c, l, b, E, t, !1);
          }
        else E !== i[g] && ((i[g] = E), (d = !0));
      }
    }
  } else {
    Rc(t, e, s, i) && (d = !0);
    let f;
    for (const p in l)
      (!e || (!dt(e, p) && ((f = sr(p)) === p || !dt(e, f)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (s[p] = Pi(c, l, p, void 0, t, !0))
          : delete s[p]);
    if (i !== l)
      for (const p in i) (!e || !dt(e, p)) && (delete i[p], (d = !0));
  }
  d && Me(t, "set", "$attrs");
}
function Rc(t, e, n, r) {
  const [s, i] = t.propsOptions;
  let a = !1,
    l;
  if (e)
    for (let c in e) {
      if (as(c)) continue;
      const d = e[c];
      let f;
      s && dt(s, (f = Se(c)))
        ? !i || !i.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : Ds(t.emitsOptions, c) ||
          ((!(c in r) || d !== r[c]) && ((r[c] = d), (a = !0)));
    }
  if (i) {
    const c = pt(n),
      d = l || yt;
    for (let f = 0; f < i.length; f++) {
      const p = i[f];
      n[p] = Pi(s, c, p, d[p], t, !dt(d, p));
    }
  }
  return a;
}
function Pi(t, e, n, r, s, i) {
  const a = t[n];
  if (a != null) {
    const l = dt(a, "default");
    if (l && r === void 0) {
      const c = a.default;
      if (a.type !== Function && it(c)) {
        const { propsDefaults: d } = s;
        n in d ? (r = d[n]) : (Gn(s), (r = d[n] = c.call(null, e)), En());
      } else r = c;
    }
    a[0] &&
      (i && !l ? (r = !1) : a[1] && (r === "" || r === sr(n)) && (r = !0));
  }
  return r;
}
function Lc(t, e, n = !1) {
  const r = e.propsCache,
    s = r.get(t);
  if (s) return s;
  const i = t.props,
    a = {},
    l = [];
  let c = !1;
  if (!it(t)) {
    const f = (p) => {
      c = !0;
      const [g, E] = Lc(p, e, !0);
      Mt(a, g), E && l.push(...E);
    };
    !n && e.mixins.length && e.mixins.forEach(f),
      t.extends && f(t.extends),
      t.mixins && t.mixins.forEach(f);
  }
  if (!i && !c) return At(t) && r.set(t, Hn), Hn;
  if (tt(i))
    for (let f = 0; f < i.length; f++) {
      const p = Se(i[f]);
      Ba(p) && (a[p] = yt);
    }
  else if (i)
    for (const f in i) {
      const p = Se(f);
      if (Ba(p)) {
        const g = i[f],
          E = (a[p] = tt(g) || it(g) ? { type: g } : Object.assign({}, g));
        if (E) {
          const b = Wa(Boolean, E.type),
            y = Wa(String, E.type);
          (E[0] = b > -1),
            (E[1] = y < 0 || b < y),
            (b > -1 || dt(E, "default")) && l.push(p);
        }
      }
    }
  const d = [a, l];
  return At(t) && r.set(t, d), d;
}
function Ba(t) {
  return t[0] !== "$";
}
function Ua(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Ka(t, e) {
  return Ua(t) === Ua(e);
}
function Wa(t, e) {
  return tt(e) ? e.findIndex((n) => Ka(n, t)) : it(e) && Ka(e, t) ? 0 : -1;
}
const Dc = (t) => t[0] === "_" || t === "$stable",
  ho = (t) => (tt(t) ? t.map(ye) : [ye(t)]),
  v_ = (t, e, n) => {
    if (e._n) return e;
    const r = zn((...s) => ho(e(...s)), n);
    return (r._c = !1), r;
  },
  Pc = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
      if (Dc(s)) continue;
      const i = t[s];
      if (it(i)) e[s] = v_(s, i, r);
      else if (i != null) {
        const a = ho(i);
        e[s] = () => a;
      }
    }
  },
  Ic = (t, e) => {
    const n = ho(e);
    t.slots.default = () => n;
  },
  E_ = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = pt(e)), vs(e, "_", n)) : Pc(e, (t.slots = {}));
    } else (t.slots = {}), e && Ic(t, e);
    vs(t.slots, ks, 1);
  },
  b_ = (t, e, n) => {
    const { vnode: r, slots: s } = t;
    let i = !0,
      a = yt;
    if (r.shapeFlag & 32) {
      const l = e._;
      l
        ? n && l === 1
          ? (i = !1)
          : (Mt(s, e), !n && l === 1 && delete s._)
        : ((i = !e.$stable), Pc(e, s)),
        (a = e);
    } else e && (Ic(t, e), (a = { default: 1 }));
    if (i) for (const l in s) !Dc(l) && !(l in a) && delete s[l];
  };
function $c() {
  return {
    app: null,
    config: {
      isNativeTag: zp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let y_ = 0;
function A_(t, e) {
  return function (r, s = null) {
    it(r) || (r = Object.assign({}, r)), s != null && !At(s) && (s = null);
    const i = $c(),
      a = new Set();
    let l = !1;
    const c = (i.app = {
      _uid: y_++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: K_,
      get config() {
        return i.config;
      },
      set config(d) {},
      use(d, ...f) {
        return (
          a.has(d) ||
            (d && it(d.install)
              ? (a.add(d), d.install(c, ...f))
              : it(d) && (a.add(d), d(c, ...f))),
          c
        );
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), c;
      },
      component(d, f) {
        return f ? ((i.components[d] = f), c) : i.components[d];
      },
      directive(d, f) {
        return f ? ((i.directives[d] = f), c) : i.directives[d];
      },
      mount(d, f, p) {
        if (!l) {
          const g = Ot(r, s);
          return (
            (g.appContext = i),
            f && e ? e(g, d) : t(g, d, p),
            (l = !0),
            (c._container = d),
            (d.__vue_app__ = c),
            Vs(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        l && (t(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, f) {
        return (i.provides[d] = f), c;
      },
    });
    return c;
  };
}
function Ii(t, e, n, r, s = !1) {
  if (tt(t)) {
    t.forEach((g, E) => Ii(g, e && (tt(e) ? e[E] : e), n, r, s));
    return;
  }
  if (us(r) && !s) return;
  const i = r.shapeFlag & 4 ? Vs(r.component) || r.component.proxy : r.el,
    a = s ? null : i,
    { i: l, r: c } = t,
    d = e && e.r,
    f = l.refs === yt ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (d != null &&
      d !== c &&
      (xt(d)
        ? ((f[d] = null), dt(p, d) && (p[d] = null))
        : $t(d) && (d.value = null)),
    it(c))
  )
    Ge(c, l, 12, [a, f]);
  else {
    const g = xt(c),
      E = $t(c);
    if (g || E) {
      const b = () => {
        if (t.f) {
          const y = g ? (dt(p, c) ? p[c] : f[c]) : c.value;
          s
            ? tt(y) && Zi(y, i)
            : tt(y)
            ? y.includes(i) || y.push(i)
            : g
            ? ((f[c] = [i]), dt(p, c) && (p[c] = f[c]))
            : ((c.value = [i]), t.k && (f[t.k] = c.value));
        } else
          g
            ? ((f[c] = a), dt(p, c) && (p[c] = a))
            : E && ((c.value = a), t.k && (f[t.k] = a));
      };
      a ? ((b.id = -1), Kt(b, n)) : b();
    }
  }
}
const Kt = zm;
function w_(t) {
  return T_(t);
}
function T_(t, e) {
  const n = Qp();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: a,
      createText: l,
      createComment: c,
      setText: d,
      setElementText: f,
      parentNode: p,
      nextSibling: g,
      setScopeId: E = me,
      insertStaticContent: b,
    } = t,
    y = (
      h,
      v,
      w,
      T = null,
      N = null,
      P = null,
      B = !1,
      I = null,
      L = !!v.dynamicChildren
    ) => {
      if (h === v) return;
      h && !pn(h, v) && ((T = j(h)), wt(h, N, P, !0), (h = null)),
        v.patchFlag === -2 && ((L = !1), (v.dynamicChildren = null));
      const { type: R, ref: X, shapeFlag: W } = v;
      switch (R) {
        case Ms:
          D(h, v, w, T);
          break;
        case Ie:
          x(h, v, w, T);
          break;
        case fs:
          h == null && F(v, w, T, B);
          break;
        case Wt:
          mt(h, v, w, T, N, P, B, I, L);
          break;
        default:
          W & 1
            ? q(h, v, w, T, N, P, B, I, L)
            : W & 6
            ? _t(h, v, w, T, N, P, B, I, L)
            : (W & 64 || W & 128) && R.process(h, v, w, T, N, P, B, I, L, at);
      }
      X != null && N && Ii(X, h && h.ref, P, v || h, !v);
    },
    D = (h, v, w, T) => {
      if (h == null) r((v.el = l(v.children)), w, T);
      else {
        const N = (v.el = h.el);
        v.children !== h.children && d(N, v.children);
      }
    },
    x = (h, v, w, T) => {
      h == null ? r((v.el = c(v.children || "")), w, T) : (v.el = h.el);
    },
    F = (h, v, w, T) => {
      [h.el, h.anchor] = b(h.children, v, w, T, h.el, h.anchor);
    },
    M = ({ el: h, anchor: v }, w, T) => {
      let N;
      for (; h && h !== v; ) (N = g(h)), r(h, w, T), (h = N);
      r(v, w, T);
    },
    H = ({ el: h, anchor: v }) => {
      let w;
      for (; h && h !== v; ) (w = g(h)), s(h), (h = w);
      s(v);
    },
    q = (h, v, w, T, N, P, B, I, L) => {
      (B = B || v.type === "svg"),
        h == null ? Z(v, w, T, N, P, B, I, L) : J(h, v, N, P, B, I, L);
    },
    Z = (h, v, w, T, N, P, B, I) => {
      let L, R;
      const { type: X, props: W, shapeFlag: z, transition: Q, dirs: st } = h;
      if (
        ((L = h.el = a(h.type, P, W && W.is, W)),
        z & 8
          ? f(L, h.children)
          : z & 16 &&
            Y(h.children, L, null, T, N, P && X !== "foreignObject", B, I),
        st && un(h, null, T, "created"),
        rt(L, h, h.scopeId, B, T),
        W)
      ) {
        for (const ft in W)
          ft !== "value" &&
            !as(ft) &&
            i(L, ft, null, W[ft], P, h.children, T, N, U);
        "value" in W && i(L, "value", null, W.value),
          (R = W.onVnodeBeforeMount) && Ee(R, T, h);
      }
      st && un(h, null, T, "beforeMount");
      const gt = (!N || (N && !N.pendingBranch)) && Q && !Q.persisted;
      gt && Q.beforeEnter(L),
        r(L, v, w),
        ((R = W && W.onVnodeMounted) || gt || st) &&
          Kt(() => {
            R && Ee(R, T, h), gt && Q.enter(L), st && un(h, null, T, "mounted");
          }, N);
    },
    rt = (h, v, w, T, N) => {
      if ((w && E(h, w), T)) for (let P = 0; P < T.length; P++) E(h, T[P]);
      if (N) {
        let P = N.subTree;
        if (v === P) {
          const B = N.vnode;
          rt(h, B, B.scopeId, B.slotScopeIds, N.parent);
        }
      }
    },
    Y = (h, v, w, T, N, P, B, I, L = 0) => {
      for (let R = L; R < h.length; R++) {
        const X = (h[R] = I ? ze(h[R]) : ye(h[R]));
        y(null, X, v, w, T, N, P, B, I);
      }
    },
    J = (h, v, w, T, N, P, B) => {
      const I = (v.el = h.el);
      let { patchFlag: L, dynamicChildren: R, dirs: X } = v;
      L |= h.patchFlag & 16;
      const W = h.props || yt,
        z = v.props || yt;
      let Q;
      w && fn(w, !1),
        (Q = z.onVnodeBeforeUpdate) && Ee(Q, w, v, h),
        X && un(v, h, w, "beforeUpdate"),
        w && fn(w, !0);
      const st = N && v.type !== "foreignObject";
      if (
        (R
          ? G(h.dynamicChildren, R, I, w, T, st, P)
          : B || ut(h, v, I, null, w, T, st, P, !1),
        L > 0)
      ) {
        if (L & 16) et(I, v, W, z, w, T, N);
        else if (
          (L & 2 && W.class !== z.class && i(I, "class", null, z.class, N),
          L & 4 && i(I, "style", W.style, z.style, N),
          L & 8)
        ) {
          const gt = v.dynamicProps;
          for (let ft = 0; ft < gt.length; ft++) {
            const bt = gt[ft],
              Xt = W[bt],
              tn = z[bt];
            (tn !== Xt || bt === "value") &&
              i(I, bt, Xt, tn, N, h.children, w, T, U);
          }
        }
        L & 1 && h.children !== v.children && f(I, v.children);
      } else !B && R == null && et(I, v, W, z, w, T, N);
      ((Q = z.onVnodeUpdated) || X) &&
        Kt(() => {
          Q && Ee(Q, w, v, h), X && un(v, h, w, "updated");
        }, T);
    },
    G = (h, v, w, T, N, P, B) => {
      for (let I = 0; I < v.length; I++) {
        const L = h[I],
          R = v[I],
          X =
            L.el && (L.type === Wt || !pn(L, R) || L.shapeFlag & 70)
              ? p(L.el)
              : w;
        y(L, R, X, null, T, N, P, B, !0);
      }
    },
    et = (h, v, w, T, N, P, B) => {
      if (w !== T) {
        if (w !== yt)
          for (const I in w)
            !as(I) && !(I in T) && i(h, I, w[I], null, B, v.children, N, P, U);
        for (const I in T) {
          if (as(I)) continue;
          const L = T[I],
            R = w[I];
          L !== R && I !== "value" && i(h, I, R, L, B, v.children, N, P, U);
        }
        "value" in T && i(h, "value", w.value, T.value);
      }
    },
    mt = (h, v, w, T, N, P, B, I, L) => {
      const R = (v.el = h ? h.el : l("")),
        X = (v.anchor = h ? h.anchor : l(""));
      let { patchFlag: W, dynamicChildren: z, slotScopeIds: Q } = v;
      Q && (I = I ? I.concat(Q) : Q),
        h == null
          ? (r(R, w, T), r(X, w, T), Y(v.children, w, X, N, P, B, I, L))
          : W > 0 && W & 64 && z && h.dynamicChildren
          ? (G(h.dynamicChildren, z, w, N, P, B, I),
            (v.key != null || (N && v === N.subTree)) && Mc(h, v, !0))
          : ut(h, v, w, X, N, P, B, I, L);
    },
    _t = (h, v, w, T, N, P, B, I, L) => {
      (v.slotScopeIds = I),
        h == null
          ? v.shapeFlag & 512
            ? N.ctx.activate(v, w, T, B, L)
            : Nt(v, w, T, N, P, B, L)
          : kt(h, v, L);
    },
    Nt = (h, v, w, T, N, P, B) => {
      const I = (h.component = I_(h, T, N));
      if ((Is(h) && (I.ctx.renderer = at), M_(I), I.asyncDep)) {
        if ((N && N.registerDep(I, ct), !h.el)) {
          const L = (I.subTree = Ot(Ie));
          x(null, L, v, w);
        }
        return;
      }
      ct(I, h, v, w, N, P, B);
    },
    kt = (h, v, w) => {
      const T = (v.component = h.component);
      if (Um(h, v, w))
        if (T.asyncDep && !T.asyncResolved) {
          nt(T, v, w);
          return;
        } else (T.next = v), km(T.update), T.update();
      else (v.el = h.el), (T.vnode = v);
    },
    ct = (h, v, w, T, N, P, B) => {
      const I = () => {
          if (h.isMounted) {
            let { next: X, bu: W, u: z, parent: Q, vnode: st } = h,
              gt = X,
              ft;
            fn(h, !1),
              X ? ((X.el = st.el), nt(h, X, B)) : (X = st),
              W && ls(W),
              (ft = X.props && X.props.onVnodeBeforeUpdate) && Ee(ft, Q, X, st),
              fn(h, !0);
            const bt = ci(h),
              Xt = h.subTree;
            (h.subTree = bt),
              y(Xt, bt, p(Xt.el), j(Xt), h, N, P),
              (X.el = bt.el),
              gt === null && Km(h, bt.el),
              z && Kt(z, N),
              (ft = X.props && X.props.onVnodeUpdated) &&
                Kt(() => Ee(ft, Q, X, st), N);
          } else {
            let X;
            const { el: W, props: z } = v,
              { bm: Q, m: st, parent: gt } = h,
              ft = us(v);
            if (
              (fn(h, !1),
              Q && ls(Q),
              !ft && (X = z && z.onVnodeBeforeMount) && Ee(X, gt, v),
              fn(h, !0),
              W && A)
            ) {
              const bt = () => {
                (h.subTree = ci(h)), A(W, h.subTree, h, N, null);
              };
              ft
                ? v.type.__asyncLoader().then(() => !h.isUnmounted && bt())
                : bt();
            } else {
              const bt = (h.subTree = ci(h));
              y(null, bt, w, T, h, N, P), (v.el = bt.el);
            }
            if ((st && Kt(st, N), !ft && (X = z && z.onVnodeMounted))) {
              const bt = v;
              Kt(() => Ee(X, gt, bt), N);
            }
            (v.shapeFlag & 256 ||
              (gt && us(gt.vnode) && gt.vnode.shapeFlag & 256)) &&
              h.a &&
              Kt(h.a, N),
              (h.isMounted = !0),
              (v = w = T = null);
          }
        },
        L = (h.effect = new ro(I, () => uo(R), h.scope)),
        R = (h.update = () => L.run());
      (R.id = h.uid), fn(h, !0), R();
    },
    nt = (h, v, w) => {
      v.component = h;
      const T = h.vnode.props;
      (h.vnode = v),
        (h.next = null),
        g_(h, v.props, T, w),
        b_(h, v.children, w),
        ir(),
        Ma(),
        or();
    },
    ut = (h, v, w, T, N, P, B, I, L = !1) => {
      const R = h && h.children,
        X = h ? h.shapeFlag : 0,
        W = v.children,
        { patchFlag: z, shapeFlag: Q } = v;
      if (z > 0) {
        if (z & 128) {
          Bt(R, W, w, T, N, P, B, I, L);
          return;
        } else if (z & 256) {
          Tt(R, W, w, T, N, P, B, I, L);
          return;
        }
      }
      Q & 8
        ? (X & 16 && U(R, N, P), W !== R && f(w, W))
        : X & 16
        ? Q & 16
          ? Bt(R, W, w, T, N, P, B, I, L)
          : U(R, N, P, !0)
        : (X & 8 && f(w, ""), Q & 16 && Y(W, w, T, N, P, B, I, L));
    },
    Tt = (h, v, w, T, N, P, B, I, L) => {
      (h = h || Hn), (v = v || Hn);
      const R = h.length,
        X = v.length,
        W = Math.min(R, X);
      let z;
      for (z = 0; z < W; z++) {
        const Q = (v[z] = L ? ze(v[z]) : ye(v[z]));
        y(h[z], Q, w, null, N, P, B, I, L);
      }
      R > X ? U(h, N, P, !0, !1, W) : Y(v, w, T, N, P, B, I, L, W);
    },
    Bt = (h, v, w, T, N, P, B, I, L) => {
      let R = 0;
      const X = v.length;
      let W = h.length - 1,
        z = X - 1;
      for (; R <= W && R <= z; ) {
        const Q = h[R],
          st = (v[R] = L ? ze(v[R]) : ye(v[R]));
        if (pn(Q, st)) y(Q, st, w, null, N, P, B, I, L);
        else break;
        R++;
      }
      for (; R <= W && R <= z; ) {
        const Q = h[W],
          st = (v[z] = L ? ze(v[z]) : ye(v[z]));
        if (pn(Q, st)) y(Q, st, w, null, N, P, B, I, L);
        else break;
        W--, z--;
      }
      if (R > W) {
        if (R <= z) {
          const Q = z + 1,
            st = Q < X ? v[Q].el : T;
          for (; R <= z; )
            y(null, (v[R] = L ? ze(v[R]) : ye(v[R])), w, st, N, P, B, I, L),
              R++;
        }
      } else if (R > z) for (; R <= W; ) wt(h[R], N, P, !0), R++;
      else {
        const Q = R,
          st = R,
          gt = new Map();
        for (R = st; R <= z; R++) {
          const Dt = (v[R] = L ? ze(v[R]) : ye(v[R]));
          Dt.key != null && gt.set(Dt.key, R);
        }
        let ft,
          bt = 0;
        const Xt = z - st + 1;
        let tn = !1,
          jr = 0;
        const en = new Array(Xt);
        for (R = 0; R < Xt; R++) en[R] = 0;
        for (R = Q; R <= W; R++) {
          const Dt = h[R];
          if (bt >= Xt) {
            wt(Dt, N, P, !0);
            continue;
          }
          let ne;
          if (Dt.key != null) ne = gt.get(Dt.key);
          else
            for (ft = st; ft <= z; ft++)
              if (en[ft - st] === 0 && pn(Dt, v[ft])) {
                ne = ft;
                break;
              }
          ne === void 0
            ? wt(Dt, N, P, !0)
            : ((en[ne - st] = R + 1),
              ne >= jr ? (jr = ne) : (tn = !0),
              y(Dt, v[ne], w, null, N, P, B, I, L),
              bt++);
        }
        const Hr = tn ? O_(en) : Hn;
        for (ft = Hr.length - 1, R = Xt - 1; R >= 0; R--) {
          const Dt = st + R,
            ne = v[Dt],
            je = Dt + 1 < X ? v[Dt + 1].el : T;
          en[R] === 0
            ? y(null, ne, w, je, N, P, B, I, L)
            : tn && (ft < 0 || R !== Hr[ft] ? Lt(ne, w, je, 2) : ft--);
        }
      }
    },
    Lt = (h, v, w, T, N = null) => {
      const { el: P, type: B, transition: I, children: L, shapeFlag: R } = h;
      if (R & 6) {
        Lt(h.component.subTree, v, w, T);
        return;
      }
      if (R & 128) {
        h.suspense.move(v, w, T);
        return;
      }
      if (R & 64) {
        B.move(h, v, w, at);
        return;
      }
      if (B === Wt) {
        r(P, v, w);
        for (let W = 0; W < L.length; W++) Lt(L[W], v, w, T);
        r(h.anchor, v, w);
        return;
      }
      if (B === fs) {
        M(h, v, w);
        return;
      }
      if (T !== 2 && R & 1 && I)
        if (T === 0) I.beforeEnter(P), r(P, v, w), Kt(() => I.enter(P), N);
        else {
          const { leave: W, delayLeave: z, afterLeave: Q } = I,
            st = () => r(P, v, w),
            gt = () => {
              W(P, () => {
                st(), Q && Q();
              });
            };
          z ? z(P, st, gt) : gt();
        }
      else r(P, v, w);
    },
    wt = (h, v, w, T = !1, N = !1) => {
      const {
        type: P,
        props: B,
        ref: I,
        children: L,
        dynamicChildren: R,
        shapeFlag: X,
        patchFlag: W,
        dirs: z,
      } = h;
      if ((I != null && Ii(I, null, w, h, !0), X & 256)) {
        v.ctx.deactivate(h);
        return;
      }
      const Q = X & 1 && z,
        st = !us(h);
      let gt;
      if ((st && (gt = B && B.onVnodeBeforeUnmount) && Ee(gt, v, h), X & 6))
        S(h.component, w, T);
      else {
        if (X & 128) {
          h.suspense.unmount(w, T);
          return;
        }
        Q && un(h, null, v, "beforeUnmount"),
          X & 64
            ? h.type.remove(h, v, w, N, at, T)
            : R && (P !== Wt || (W > 0 && W & 64))
            ? U(R, v, w, !1, !0)
            : ((P === Wt && W & 384) || (!N && X & 16)) && U(L, v, w),
          T && Yt(h);
      }
      ((st && (gt = B && B.onVnodeUnmounted)) || Q) &&
        Kt(() => {
          gt && Ee(gt, v, h), Q && un(h, null, v, "unmounted");
        }, w);
    },
    Yt = (h) => {
      const { type: v, el: w, anchor: T, transition: N } = h;
      if (v === Wt) {
        Gt(w, T);
        return;
      }
      if (v === fs) {
        H(h);
        return;
      }
      const P = () => {
        s(w), N && !N.persisted && N.afterLeave && N.afterLeave();
      };
      if (h.shapeFlag & 1 && N && !N.persisted) {
        const { leave: B, delayLeave: I } = N,
          L = () => B(w, P);
        I ? I(h.el, P, L) : L();
      } else P();
    },
    Gt = (h, v) => {
      let w;
      for (; h !== v; ) (w = g(h)), s(h), (h = w);
      s(v);
    },
    S = (h, v, w) => {
      const { bum: T, scope: N, update: P, subTree: B, um: I } = h;
      T && ls(T),
        N.stop(),
        P && ((P.active = !1), wt(B, h, v, w)),
        I && Kt(I, v),
        Kt(() => {
          h.isUnmounted = !0;
        }, v),
        v &&
          v.pendingBranch &&
          !v.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === v.pendingId &&
          (v.deps--, v.deps === 0 && v.resolve());
    },
    U = (h, v, w, T = !1, N = !1, P = 0) => {
      for (let B = P; B < h.length; B++) wt(h[B], v, w, T, N);
    },
    j = (h) =>
      h.shapeFlag & 6
        ? j(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : g(h.anchor || h.el),
    K = (h, v, w) => {
      h == null
        ? v._vnode && wt(v._vnode, null, null, !0)
        : y(v._vnode || null, h, v, null, null, null, w),
        Ma(),
        _c(),
        (v._vnode = h);
    },
    at = {
      p: y,
      um: wt,
      m: Lt,
      r: Yt,
      mt: Nt,
      mc: Y,
      pc: ut,
      pbc: G,
      n: j,
      o: t,
    };
  let Et, A;
  return (
    e && ([Et, A] = e(at)), { render: K, hydrate: Et, createApp: A_(K, Et) }
  );
}
function fn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Mc(t, e, n = !1) {
  const r = t.children,
    s = e.children;
  if (tt(r) && tt(s))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let l = s[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[i] = ze(s[i])), (l.el = a.el)),
        n || Mc(a, l)),
        l.type === Ms && (l.el = a.el);
    }
}
function O_(t) {
  const e = t.slice(),
    n = [0];
  let r, s, i, a, l;
  const c = t.length;
  for (r = 0; r < c; r++) {
    const d = t[r];
    if (d !== 0) {
      if (((s = n[n.length - 1]), t[s] < d)) {
        (e[r] = s), n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        (l = (i + a) >> 1), t[n[l]] < d ? (i = l + 1) : (a = l);
      d < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) (n[i] = a), (a = e[a]);
  return n;
}
const S_ = (t) => t.__isTeleport,
  Wt = Symbol(void 0),
  Ms = Symbol(void 0),
  Ie = Symbol(void 0),
  fs = Symbol(void 0),
  Ar = [];
let pe = null;
function de(t = !1) {
  Ar.push((pe = t ? null : []));
}
function C_() {
  Ar.pop(), (pe = Ar[Ar.length - 1] || null);
}
let Lr = 1;
function za(t) {
  Lr += t;
}
function N_(t) {
  return (
    (t.dynamicChildren = Lr > 0 ? pe || Hn : null),
    C_(),
    Lr > 0 && pe && pe.push(t),
    t
  );
}
function he(t, e, n, r, s, i) {
  return N_(k(t, e, n, r, s, i, !0));
}
function $i(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function pn(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ks = "__vInternal",
  kc = ({ key: t }) => (t != null ? t : null),
  ds = ({ ref: t, ref_key: e, ref_for: n }) =>
    t != null
      ? xt(t) || $t(t) || it(t)
        ? { i: Zt, r: t, k: e, f: !!n }
        : t
      : null;
function k(
  t,
  e = null,
  n = null,
  r = 0,
  s = null,
  i = t === Wt ? 0 : 1,
  a = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && kc(e),
    ref: e && ds(e),
    scopeId: Ps,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Zt,
  };
  return (
    l
      ? (po(c, n), i & 128 && t.normalize(c))
      : n && (c.shapeFlag |= xt(n) ? 8 : 16),
    Lr > 0 &&
      !a &&
      pe &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      pe.push(c),
    c
  );
}
const Ot = x_;
function x_(t, e = null, n = null, r = 0, s = null, i = !1) {
  if (((!t || t === a_) && (t = Ie), $i(t))) {
    const l = Je(t, e, !0);
    return (
      n && po(l, n),
      Lr > 0 &&
        !i &&
        pe &&
        (l.shapeFlag & 6 ? (pe[pe.indexOf(t)] = l) : pe.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((H_(t) && (t = t.__vccOpts), e)) {
    e = R_(e);
    let { class: l, style: c } = e;
    l && !xt(l) && (e.class = Ji(l)),
      At(c) && (oc(c) && !tt(c) && (c = Mt({}, c)), (e.style = Xi(c)));
  }
  const a = xt(t) ? 1 : Wm(t) ? 128 : S_(t) ? 64 : At(t) ? 4 : it(t) ? 2 : 0;
  return k(t, e, n, r, s, a, i, !0);
}
function R_(t) {
  return t ? (oc(t) || ks in t ? Mt({}, t) : t) : null;
}
function Je(t, e, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: a } = t,
    l = e ? L_(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && kc(l),
    ref:
      e && e.ref
        ? n && s
          ? tt(s)
            ? s.concat(ds(e))
            : [s, ds(e)]
          : ds(e)
        : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Wt ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Je(t.ssContent),
    ssFallback: t.ssFallback && Je(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function Fc(t = " ", e = 0) {
  return Ot(Ms, null, t, e);
}
function Fs(t, e) {
  const n = Ot(fs, null, t);
  return (n.staticCount = e), n;
}
function ye(t) {
  return t == null || typeof t == "boolean"
    ? Ot(Ie)
    : tt(t)
    ? Ot(Wt, null, t.slice())
    : typeof t == "object"
    ? ze(t)
    : Ot(Ms, null, String(t));
}
function ze(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Je(t);
}
function po(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (tt(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), po(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !(ks in e)
        ? (e._ctx = Zt)
        : s === 3 &&
          Zt &&
          (Zt.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    it(e)
      ? ((e = { default: e, _ctx: Zt }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [Fc(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function L_(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = Ji([e.class, r.class]));
      else if (s === "style") e.style = Xi([e.style, r.style]);
      else if (Ss(s)) {
        const i = e[s],
          a = r[s];
        a &&
          i !== a &&
          !(tt(i) && i.includes(a)) &&
          (e[s] = i ? [].concat(i, a) : a);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
function Ee(t, e, n, r = null) {
  se(t, e, 7, [n, r]);
}
const D_ = $c();
let P_ = 0;
function I_(t, e, n) {
  const r = t.type,
    s = (e ? e.appContext : t.appContext) || D_,
    i = {
      uid: P_++,
      vnode: t,
      type: r,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Yl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Lc(r, s),
      emitsOptions: vc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: yt,
      inheritAttrs: r.inheritAttrs,
      ctx: yt,
      data: yt,
      props: yt,
      attrs: yt,
      slots: yt,
      refs: yt,
      setupState: yt,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = jm.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let St = null;
const $_ = () => St || Zt,
  Gn = (t) => {
    (St = t), t.scope.on();
  },
  En = () => {
    St && St.scope.off(), (St = null);
  };
function Vc(t) {
  return t.vnode.shapeFlag & 4;
}
let Dr = !1;
function M_(t, e = !1) {
  Dr = e;
  const { props: n, children: r } = t.vnode,
    s = Vc(t);
  __(t, n, s, e), E_(t, r);
  const i = s ? k_(t, e) : void 0;
  return (Dr = !1), i;
}
function k_(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = ac(new Proxy(t.ctx, u_)));
  const { setup: r } = n;
  if (r) {
    const s = (t.setupContext = r.length > 1 ? V_(t) : null);
    Gn(t), ir();
    const i = Ge(r, t, 0, [t.props, s]);
    if ((or(), En(), Wl(i))) {
      if ((i.then(En, En), e))
        return i
          .then((a) => {
            qa(t, a, e);
          })
          .catch((a) => {
            Ls(a, t, 0);
          });
      t.asyncDep = i;
    } else qa(t, i, e);
  } else jc(t, e);
}
function qa(t, e, n) {
  it(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : At(e) && (t.setupState = fc(e)),
    jc(t, n);
}
let Ya;
function jc(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Ya && !r.render) {
      const s = r.template || fo(t).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: a } = t.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          d = Mt(Mt({ isCustomElement: i, delimiters: l }, a), c);
        r.render = Ya(s, d);
      }
    }
    t.render = r.render || me;
  }
  Gn(t), ir(), f_(t), or(), En();
}
function F_(t) {
  return new Proxy(t.attrs, {
    get(e, n) {
      return zt(t, "get", "$attrs"), e[n];
    },
  });
}
function V_(t) {
  const e = (r) => {
    t.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = F_(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Vs(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(fc(ac(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in yr) return yr[n](t);
        },
        has(e, n) {
          return n in e || n in yr;
        },
      }))
    );
}
function j_(t, e = !0) {
  return it(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function H_(t) {
  return it(t) && "__vccOpts" in t;
}
const Qt = (t, e) => Im(t, e, Dr);
function Hc(t, e, n) {
  const r = arguments.length;
  return r === 2
    ? At(e) && !tt(e)
      ? $i(e)
        ? Ot(t, null, [e])
        : Ot(t, e)
      : Ot(t, null, e)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && $i(n) && (n = [n]),
      Ot(t, e, n));
}
const B_ = Symbol(""),
  U_ = () => Pe(B_),
  K_ = "3.2.47",
  W_ = "http://www.w3.org/2000/svg",
  mn = typeof document != "undefined" ? document : null,
  Ga = mn && mn.createElement("template"),
  z_ = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const s = e
        ? mn.createElementNS(W_, t)
        : mn.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (t) => mn.createTextNode(t),
    createComment: (t) => mn.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => mn.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, s, i) {
      const a = n ? n.previousSibling : e.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        Ga.innerHTML = r ? `<svg>${t}</svg>` : t;
        const l = Ga.content;
        if (r) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        e.insertBefore(l, n);
      }
      return [
        a ? a.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  };
function q_(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
function Y_(t, e, n) {
  const r = t.style,
    s = xt(n);
  if (n && !s) {
    if (e && !xt(e)) for (const i in e) n[i] == null && Mi(r, i, "");
    for (const i in n) Mi(r, i, n[i]);
  } else {
    const i = r.display;
    s ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"),
      "_vod" in t && (r.display = i);
  }
}
const Xa = /\s*!important$/;
function Mi(t, e, n) {
  if (tt(n)) n.forEach((r) => Mi(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = G_(t, e);
    Xa.test(n)
      ? t.setProperty(sr(r), n.replace(Xa, ""), "important")
      : (t[r] = n);
  }
}
const Ja = ["Webkit", "Moz", "ms"],
  di = {};
function G_(t, e) {
  const n = di[e];
  if (n) return n;
  let r = Se(e);
  if (r !== "filter" && r in t) return (di[e] = r);
  r = xs(r);
  for (let s = 0; s < Ja.length; s++) {
    const i = Ja[s] + r;
    if (i in t) return (di[e] = i);
  }
  return e;
}
const Qa = "http://www.w3.org/1999/xlink";
function X_(t, e, n, r, s) {
  if (r && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(Qa, e.slice(6, e.length))
      : t.setAttributeNS(Qa, e, n);
  else {
    const i = Wp(e);
    n == null || (i && !Bl(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, i ? "" : n);
  }
}
function J_(t, e, n, r, s, i, a) {
  if (e === "innerHTML" || e === "textContent") {
    r && a(r, s, i), (t[e] = n == null ? "" : n);
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const c = n == null ? "" : n;
    (t.value !== c || t.tagName === "OPTION") && (t.value = c),
      n == null && t.removeAttribute(e);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean"
      ? (n = Bl(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    t[e] = n;
  } catch (c) {}
  l && t.removeAttribute(e);
}
function Fn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Q_(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Z_(t, e, n, r, s = null) {
  const i = t._vei || (t._vei = {}),
    a = i[e];
  if (r && a) a.value = r;
  else {
    const [l, c] = tg(e);
    if (r) {
      const d = (i[e] = rg(r, s));
      Fn(t, l, d, c);
    } else a && (Q_(t, l, a, c), (i[e] = void 0));
  }
}
const Za = /(?:Once|Passive|Capture)$/;
function tg(t) {
  let e;
  if (Za.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(Za)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : sr(t.slice(2)), e];
}
let hi = 0;
const eg = Promise.resolve(),
  ng = () => hi || (eg.then(() => (hi = 0)), (hi = Date.now()));
function rg(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    se(sg(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = ng()), n;
}
function sg(t, e) {
  if (tt(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return e;
}
const tl = /^on[a-z]/,
  ig = (t, e, n, r, s = !1, i, a, l, c) => {
    e === "class"
      ? q_(t, r, s)
      : e === "style"
      ? Y_(t, n, r)
      : Ss(e)
      ? Qi(e) || Z_(t, e, n, r, a)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : og(t, e, r, s)
        )
      ? J_(t, e, r, i, a, l, c)
      : (e === "true-value"
          ? (t._trueValue = r)
          : e === "false-value" && (t._falseValue = r),
        X_(t, e, r, s));
  };
function og(t, e, n, r) {
  return r
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && tl.test(e) && it(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (tl.test(e) && xt(n))
    ? !1
    : e in t;
}
const ag = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Xm.props;
const el = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return tt(e) ? (n) => ls(e, n) : e;
};
function lg(t) {
  t.target.composing = !0;
}
function nl(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const Ae = {
    created(t, { modifiers: { lazy: e, trim: n, number: r } }, s) {
      t._assign = el(s);
      const i = r || (s.props && s.props.type === "number");
      Fn(t, e ? "change" : "input", (a) => {
        if (a.target.composing) return;
        let l = t.value;
        n && (l = l.trim()), i && (l = Ai(l)), t._assign(l);
      }),
        n &&
          Fn(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (Fn(t, "compositionstart", lg),
          Fn(t, "compositionend", nl),
          Fn(t, "change", nl));
    },
    mounted(t, { value: e }) {
      t.value = e == null ? "" : e;
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: r, number: s } },
      i
    ) {
      if (
        ((t._assign = el(i)),
        t.composing ||
          (document.activeElement === t &&
            t.type !== "range" &&
            (n ||
              (r && t.value.trim() === e) ||
              ((s || t.type === "number") && Ai(t.value) === e))))
      )
        return;
      const a = e == null ? "" : e;
      t.value !== a && (t.value = a);
    },
  },
  cg = Mt({ patchProp: ig }, z_);
let rl;
function ug() {
  return rl || (rl = w_(cg));
}
const fg = (...t) => {
  const e = ug().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const s = dg(r);
      if (!s) return;
      const i = e._component;
      !it(i) && !i.render && !i.template && (i.template = s.innerHTML),
        (s.innerHTML = "");
      const a = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        a
      );
    }),
    e
  );
};
function dg(t) {
  return xt(t) ? document.querySelector(t) : t;
}
const Bc = "/assets/LoremFn-76798e62.png";
const wn = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e) n[r] = s;
    return n;
  },
  hg = {
    data() {
      return { error: !0 };
    },
    props: { propsValue: { type: String, default: "Default value" } },
  },
  mo = (t) => ($r("data-v-cc174d01"), (t = t()), Mr(), t),
  pg = { id: "header-container" },
  mg = mo(() => k("img", { class: "logo-image", alt: "", src: Bc }, null, -1)),
  _g = mo(() => k("li", null, "Om oss", -1)),
  gg = mo(() => k("li", null, "Jobba hos oss", -1));
function vg(t, e, n, r, s, i) {
  const a = vn("RouterLink");
  return (
    de(),
    he("div", pg, [
      Ot(a, { to: "/" }, { default: zn(() => [mg]), _: 1 }),
      k("ul", null, [
        k("li", null, Vt(this.propsValue), 1),
        Ot(a, { to: "/About/Lorem" }, { default: zn(() => [_g]), _: 1 }),
        gg,
        Ot(
          a,
          { to: "/CalculatorMain" },
          {
            default: zn(() => [
              k(
                "li",
                {
                  onClick:
                    e[0] || (e[0] = (l) => t.$store.commit("changeMainText")),
                },
                "Kalkylator"
              ),
            ]),
            _: 1,
          }
        ),
      ]),
    ])
  );
}
const Eg = wn(hg, [
  ["render", vg],
  ["__scopeId", "data-v-cc174d01"],
]);
const bg = { props: { propsValue: { type: Number, default: 0 } } },
  lr = (t) => ($r("data-v-f1222754"), (t = t()), Mr(), t),
  yg = { id: "footer-container" },
  Ag = { id: "footer-display" },
  wg = lr(() => k("img", { class: "logo-image", alt: "", src: Bc }, null, -1)),
  Tg = { id: "footer-boxes" },
  Og = { class: "footer-box" },
  Sg = lr(() => k("h4", null, "Company", -1)),
  Cg = lr(() => k("a", { href: "" }, "Om oss", -1)),
  Ng = lr(() => k("a", { href: "" }, "Samarbete", -1)),
  xg = lr(() => k("a", { href: "" }, "Våran historia", -1)),
  Rg = lr(() => k("a", { href: "" }, "Jobba hos oss", -1)),
  Lg = { href: "" },
  Dg = Fs(
    '<div class="footer-box" data-v-f1222754><h4 data-v-f1222754>Connect</h4><a href="" data-v-f1222754>Instagram</a><a href="" data-v-f1222754>Facebook</a><a href="" data-v-f1222754>Twitter</a><a href="" data-v-f1222754>LinkedIn</a><a href="" data-v-f1222754>Media Indquiries</a></div><div class="footer-box" data-v-f1222754><h4 data-v-f1222754>Partnership</h4><a href="" data-v-f1222754>Avanza</a><a href="" data-v-f1222754>Nordnet</a><a href="" data-v-f1222754>Lysa</a><a href="" data-v-f1222754>Fundler</a></div><div class="footer-box" data-v-f1222754><h4 data-v-f1222754>Lorem Ipsum Finance</h4><a href="" data-v-f1222754>Terms of Use</a><a href="" data-v-f1222754>Privacy Policy</a></div>',
    3
  );
function Pg(t, e, n, r, s, i) {
  return (
    de(),
    he("div", yg, [
      k("div", Ag, [
        wg,
        k("div", Tg, [
          k("div", Og, [
            Sg,
            Cg,
            Ng,
            xg,
            Rg,
            k("a", Lg, "Sedan " + Vt(this.propsValue), 1),
          ]),
          Dg,
        ]),
      ]),
    ])
  );
}
const Ig = wn(bg, [
  ["render", Pg],
  ["__scopeId", "data-v-f1222754"],
]);
const $g = { components: { HeaderMain: Eg, FooterMain: Ig } };
function Mg(t, e, n, r, s, i) {
  const a = vn("HeaderMain"),
    l = vn("RouterView"),
    c = vn("FooterMain");
  return (
    de(),
    he(
      Wt,
      null,
      [
        Ot(a, { "props-value": "Lösningar" }),
        k("main", null, [Ot(l)]),
        Ot(c, { "props-value": 1996 }),
      ],
      64
    )
  );
}
const kg = wn($g, [["render", Mg]]);
function Fg() {
  return Uc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Uc() {
  return typeof navigator != "undefined" && typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : {};
}
const Vg = typeof Proxy == "function",
  jg = "devtools-plugin:setup",
  Hg = "plugin:settings:set";
let $n, ki;
function Bg() {
  var t;
  return (
    $n !== void 0 ||
      (typeof window != "undefined" && window.performance
        ? (($n = !0), (ki = window.performance))
        : typeof global != "undefined" &&
          !((t = global.perf_hooks) === null || t === void 0) &&
          t.performance
        ? (($n = !0), (ki = global.perf_hooks.performance))
        : ($n = !1)),
    $n
  );
}
function Ug() {
  return Bg() ? ki.now() : Date.now();
}
class Kg {
  constructor(e, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = e),
      (this.hook = n);
    const r = {};
    if (e.settings)
      for (const a in e.settings) {
        const l = e.settings[a];
        r[a] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${e.id}`;
    let i = Object.assign({}, r);
    try {
      const a = localStorage.getItem(s),
        l = JSON.parse(a);
      Object.assign(i, l);
    } catch (a) {}
    (this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(a) {
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch (l) {}
        i = a;
      },
      now() {
        return Ug();
      },
    }),
      n &&
        n.on(Hg, (a, l) => {
          a === this.plugin.id && this.fallbacks.setSettings(l);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (a, l) =>
            this.target
              ? this.target.on[l]
              : (...c) => {
                  this.onQueue.push({ method: l, args: c });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (a, l) =>
            this.target
              ? this.target[l]
              : l === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(l)
              ? (...c) => (
                  this.targetQueue.push({
                    method: l,
                    args: c,
                    resolve: () => {},
                  }),
                  this.fallbacks[l](...c)
                )
              : (...c) =>
                  new Promise((d) => {
                    this.targetQueue.push({ method: l, args: c, resolve: d });
                  }),
        }
      ));
  }
  setRealTarget(e) {
    return Ca(this, null, function* () {
      this.target = e;
      for (const n of this.onQueue) this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Wg(t, e) {
  const n = t,
    r = Uc(),
    s = Fg(),
    i = Vg && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i)) s.emit(jg, t, e);
  else {
    const a = i ? new Kg(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: e,
      proxy: a,
    }),
      a && e(a.proxiedTarget);
  }
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Vn = typeof window != "undefined";
function zg(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const vt = Object.assign;
function pi(t, e) {
  const n = {};
  for (const r in e) {
    const s = e[r];
    n[r] = _e(s) ? s.map(t) : t(s);
  }
  return n;
}
const wr = () => {},
  _e = Array.isArray,
  qg = /\/$/,
  Yg = (t) => t.replace(qg, "");
function mi(t, e, n = "/") {
  let r,
    s = {},
    i = "",
    a = "";
  const l = e.indexOf("#");
  let c = e.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((r = e.slice(0, c)),
      (i = e.slice(c + 1, l > -1 ? l : e.length)),
      (s = t(i))),
    l > -1 && ((r = r || e.slice(0, l)), (a = e.slice(l, e.length))),
    (r = Qg(r != null ? r : e, n)),
    { fullPath: r + (i && "?") + i + a, path: r, query: s, hash: a }
  );
}
function Gg(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function sl(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function Xg(t, e, n) {
  const r = e.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Xn(e.matched[r], n.matched[s]) &&
    Kc(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function Xn(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Kc(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!Jg(t[n], e[n])) return !1;
  return !0;
}
function Jg(t, e) {
  return _e(t) ? il(t, e) : _e(e) ? il(e, t) : t === e;
}
function il(t, e) {
  return _e(e)
    ? t.length === e.length && t.every((n, r) => n === e[r])
    : t.length === 1 && t[0] === e;
}
function Qg(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    r = t.split("/");
  let s = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== "."))
      if (a === "..") s > 1 && s--;
      else break;
  return (
    n.slice(0, s).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  );
}
var Pr;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(Pr || (Pr = {}));
var Tr;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(Tr || (Tr = {}));
function Zg(t) {
  if (!t)
    if (Vn) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Yg(t);
}
const tv = /^[^#]+#/;
function ev(t, e) {
  return t.replace(tv, "#") + e;
}
function nv(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0),
  };
}
const js = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function rv(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    e = nv(s, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function ol(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Fi = new Map();
function sv(t, e) {
  Fi.set(t, e);
}
function iv(t) {
  const e = Fi.get(t);
  return Fi.delete(t), e;
}
let ov = () => location.protocol + "//" + location.host;
function Wc(t, e) {
  const { pathname: n, search: r, hash: s } = e,
    i = t.indexOf("#");
  if (i > -1) {
    let l = s.includes(t.slice(i)) ? t.slice(i).length : 1,
      c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), sl(c, "");
  }
  return sl(n, t) + r + s;
}
function av(t, e, n, r) {
  let s = [],
    i = [],
    a = null;
  const l = ({ state: g }) => {
    const E = Wc(t, location),
      b = n.value,
      y = e.value;
    let D = 0;
    if (g) {
      if (((n.value = E), (e.value = g), a && a === b)) {
        a = null;
        return;
      }
      D = y ? g.position - y.position : 0;
    } else r(E);
    s.forEach((x) => {
      x(n.value, b, {
        delta: D,
        type: Pr.pop,
        direction: D ? (D > 0 ? Tr.forward : Tr.back) : Tr.unknown,
      });
    });
  };
  function c() {
    a = n.value;
  }
  function d(g) {
    s.push(g);
    const E = () => {
      const b = s.indexOf(g);
      b > -1 && s.splice(b, 1);
    };
    return i.push(E), E;
  }
  function f() {
    const { history: g } = window;
    g.state && g.replaceState(vt({}, g.state, { scroll: js() }), "");
  }
  function p() {
    for (const g of i) g();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", f),
    { pauseListeners: c, listen: d, destroy: p }
  );
}
function al(t, e, n, r = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? js() : null,
  };
}
function lv(t) {
  const { history: e, location: n } = window,
    r = { value: Wc(t, n) },
    s = { value: e.state };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, d, f) {
    const p = t.indexOf("#"),
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(p)) + c
          : ov() + t + c;
    try {
      e[f ? "replaceState" : "pushState"](d, "", g), (s.value = d);
    } catch (E) {
      console.error(E), n[f ? "replace" : "assign"](g);
    }
  }
  function a(c, d) {
    const f = vt({}, e.state, al(s.value.back, c, s.value.forward, !0), d, {
      position: s.value.position,
    });
    i(c, f, !0), (r.value = c);
  }
  function l(c, d) {
    const f = vt({}, s.value, e.state, { forward: c, scroll: js() });
    i(f.current, f, !0);
    const p = vt({}, al(r.value, c, null), { position: f.position + 1 }, d);
    i(c, p, !1), (r.value = c);
  }
  return { location: r, state: s, push: l, replace: a };
}
function cv(t) {
  t = Zg(t);
  const e = lv(t),
    n = av(t, e.state, e.location, e.replace);
  function r(i, a = !0) {
    a || n.pauseListeners(), history.go(i);
  }
  const s = vt(
    { location: "", base: t, go: r, createHref: ev.bind(null, t) },
    e,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    s
  );
}
function uv(t) {
  return (
    (t = location.host ? t || location.pathname + location.search : ""),
    t.includes("#") || (t += "#"),
    cv(t)
  );
}
function fv(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function zc(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const Ke = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  qc = Symbol("");
var ll;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(ll || (ll = {}));
function Jn(t, e) {
  return vt(new Error(), { type: t, [qc]: !0 }, e);
}
function Le(t, e) {
  return t instanceof Error && qc in t && (e == null || !!(t.type & e));
}
const cl = "[^/]+?",
  dv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  hv = /[.+*?^${}()[\]/\\]/g;
function pv(t, e) {
  const n = vt({}, dv, e),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const d of t) {
    const f = d.length ? [] : [90];
    n.strict && !d.length && (s += "/");
    for (let p = 0; p < d.length; p++) {
      const g = d[p];
      let E = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        p || (s += "/"), (s += g.value.replace(hv, "\\$&")), (E += 40);
      else if (g.type === 1) {
        const { value: b, repeatable: y, optional: D, regexp: x } = g;
        i.push({ name: b, repeatable: y, optional: D });
        const F = x || cl;
        if (F !== cl) {
          E += 10;
          try {
            new RegExp(`(${F})`);
          } catch (H) {
            throw new Error(
              `Invalid custom RegExp for param "${b}" (${F}): ` + H.message
            );
          }
        }
        let M = y ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`;
        p || (M = D && d.length < 2 ? `(?:/${M})` : "/" + M),
          D && (M += "?"),
          (s += M),
          (E += 20),
          D && (E += -8),
          y && (E += -20),
          F === ".*" && (E += -50);
      }
      f.push(E);
    }
    r.push(f);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)");
  const a = new RegExp(s, n.sensitive ? "" : "i");
  function l(d) {
    const f = d.match(a),
      p = {};
    if (!f) return null;
    for (let g = 1; g < f.length; g++) {
      const E = f[g] || "",
        b = i[g - 1];
      p[b.name] = E && b.repeatable ? E.split("/") : E;
    }
    return p;
  }
  function c(d) {
    let f = "",
      p = !1;
    for (const g of t) {
      (!p || !f.endsWith("/")) && (f += "/"), (p = !1);
      for (const E of g)
        if (E.type === 0) f += E.value;
        else if (E.type === 1) {
          const { value: b, repeatable: y, optional: D } = E,
            x = b in d ? d[b] : "";
          if (_e(x) && !y)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            );
          const F = _e(x) ? x.join("/") : x;
          if (!F)
            if (D)
              g.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${b}"`);
          f += F;
        }
    }
    return f || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: c };
}
function mv(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const r = e[n] - t[n];
    if (r) return r;
    n++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 40 + 40
      ? -1
      : 1
    : t.length > e.length
    ? e.length === 1 && e[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function _v(t, e) {
  let n = 0;
  const r = t.score,
    s = e.score;
  for (; n < r.length && n < s.length; ) {
    const i = mv(r[n], s[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ul(r)) return 1;
    if (ul(s)) return -1;
  }
  return s.length - r.length;
}
function ul(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const gv = { type: 0, value: "" },
  vv = /[a-zA-Z0-9_]/;
function Ev(t) {
  if (!t) return [[]];
  if (t === "/") return [[gv]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(E) {
    throw new Error(`ERR (${n})/"${d}": ${E}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let i;
  function a() {
    i && s.push(i), (i = []);
  }
  let l = 0,
    c,
    d = "",
    f = "";
  function p() {
    d &&
      (n === 0
        ? i.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (c === "*" || c === "+") &&
            e(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: d,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : e("Invalid state to consume buffer"),
      (d = ""));
  }
  function g() {
    d += c;
  }
  for (; l < t.length; ) {
    if (((c = t[l++]), c === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (d && p(), a()) : c === ":" ? (p(), (n = 1)) : g();
        break;
      case 4:
        g(), (n = r);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : vv.test(c)
          ? g()
          : (p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + c)
            : (n = 3)
          : (f += c);
        break;
      case 3:
        p(), (n = 0), c !== "*" && c !== "?" && c !== "+" && l--, (f = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${d}"`), p(), a(), s;
}
function bv(t, e, n) {
  const r = pv(Ev(t.path), n),
    s = vt(r, { record: t, parent: e, children: [], alias: [] });
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
}
function yv(t, e) {
  const n = [],
    r = new Map();
  e = hl({ strict: !1, end: !0, sensitive: !1 }, e);
  function s(f) {
    return r.get(f);
  }
  function i(f, p, g) {
    const E = !g,
      b = Av(f);
    b.aliasOf = g && g.record;
    const y = hl(e, f),
      D = [b];
    if ("alias" in f) {
      const M = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const H of M)
        D.push(
          vt({}, b, {
            components: g ? g.record.components : b.components,
            path: H,
            aliasOf: g ? g.record : b,
          })
        );
    }
    let x, F;
    for (const M of D) {
      const { path: H } = M;
      if (p && H[0] !== "/") {
        const q = p.record.path,
          Z = q[q.length - 1] === "/" ? "" : "/";
        M.path = p.record.path + (H && Z + H);
      }
      if (
        ((x = bv(M, p, y)),
        g
          ? g.alias.push(x)
          : ((F = F || x),
            F !== x && F.alias.push(x),
            E && f.name && !dl(x) && a(f.name)),
        b.children)
      ) {
        const q = b.children;
        for (let Z = 0; Z < q.length; Z++) i(q[Z], x, g && g.children[Z]);
      }
      (g = g || x),
        ((x.record.components && Object.keys(x.record.components).length) ||
          x.record.name ||
          x.record.redirect) &&
          c(x);
    }
    return F
      ? () => {
          a(F);
        }
      : wr;
  }
  function a(f) {
    if (zc(f)) {
      const p = r.get(f);
      p &&
        (r.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(a),
        p.alias.forEach(a));
    } else {
      const p = n.indexOf(f);
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(a),
        f.alias.forEach(a));
    }
  }
  function l() {
    return n;
  }
  function c(f) {
    let p = 0;
    for (
      ;
      p < n.length &&
      _v(f, n[p]) >= 0 &&
      (f.record.path !== n[p].record.path || !Yc(f, n[p]));

    )
      p++;
    n.splice(p, 0, f), f.record.name && !dl(f) && r.set(f.record.name, f);
  }
  function d(f, p) {
    let g,
      E = {},
      b,
      y;
    if ("name" in f && f.name) {
      if (((g = r.get(f.name)), !g)) throw Jn(1, { location: f });
      (y = g.record.name),
        (E = vt(
          fl(
            p.params,
            g.keys.filter((F) => !F.optional).map((F) => F.name)
          ),
          f.params &&
            fl(
              f.params,
              g.keys.map((F) => F.name)
            )
        )),
        (b = g.stringify(E));
    } else if ("path" in f)
      (b = f.path),
        (g = n.find((F) => F.re.test(b))),
        g && ((E = g.parse(b)), (y = g.record.name));
    else {
      if (((g = p.name ? r.get(p.name) : n.find((F) => F.re.test(p.path))), !g))
        throw Jn(1, { location: f, currentLocation: p });
      (y = g.record.name),
        (E = vt({}, p.params, f.params)),
        (b = g.stringify(E));
    }
    const D = [];
    let x = g;
    for (; x; ) D.unshift(x.record), (x = x.parent);
    return { name: y, path: b, params: E, matched: D, meta: Tv(D) };
  }
  return (
    t.forEach((f) => i(f)),
    {
      addRoute: i,
      resolve: d,
      removeRoute: a,
      getRoutes: l,
      getRecordMatcher: s,
    }
  );
}
function fl(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n;
}
function Av(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: wv(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
}
function wv(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const r in t.components) e[r] = typeof n == "boolean" ? n : n[r];
  return e;
}
function dl(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Tv(t) {
  return t.reduce((e, n) => vt(e, n.meta), {});
}
function hl(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n;
}
function Yc(t, e) {
  return e.children.some((n) => n === t || Yc(t, n));
}
const Gc = /#/g,
  Ov = /&/g,
  Sv = /\//g,
  Cv = /=/g,
  Nv = /\?/g,
  Xc = /\+/g,
  xv = /%5B/g,
  Rv = /%5D/g,
  Jc = /%5E/g,
  Lv = /%60/g,
  Qc = /%7B/g,
  Dv = /%7C/g,
  Zc = /%7D/g,
  Pv = /%20/g;
function _o(t) {
  return encodeURI("" + t)
    .replace(Dv, "|")
    .replace(xv, "[")
    .replace(Rv, "]");
}
function Iv(t) {
  return _o(t).replace(Qc, "{").replace(Zc, "}").replace(Jc, "^");
}
function Vi(t) {
  return _o(t)
    .replace(Xc, "%2B")
    .replace(Pv, "+")
    .replace(Gc, "%23")
    .replace(Ov, "%26")
    .replace(Lv, "`")
    .replace(Qc, "{")
    .replace(Zc, "}")
    .replace(Jc, "^");
}
function $v(t) {
  return Vi(t).replace(Cv, "%3D");
}
function Mv(t) {
  return _o(t).replace(Gc, "%23").replace(Nv, "%3F");
}
function kv(t) {
  return t == null ? "" : Mv(t).replace(Sv, "%2F");
}
function As(t) {
  try {
    return decodeURIComponent("" + t);
  } catch (e) {}
  return "" + t;
}
function Fv(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(Xc, " "),
      a = i.indexOf("="),
      l = As(a < 0 ? i : i.slice(0, a)),
      c = a < 0 ? null : As(i.slice(a + 1));
    if (l in e) {
      let d = e[l];
      _e(d) || (d = e[l] = [d]), d.push(c);
    } else e[l] = c;
  }
  return e;
}
function pl(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (((n = $v(n)), r == null)) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (_e(r) ? r.map((i) => i && Vi(i)) : [r && Vi(r)]).forEach((i) => {
      i !== void 0 &&
        ((e += (e.length ? "&" : "") + n), i != null && (e += "=" + i));
    });
  }
  return e;
}
function Vv(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 &&
      (e[n] = _e(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return e;
}
const jv = Symbol(""),
  ml = Symbol(""),
  go = Symbol(""),
  tu = Symbol(""),
  ji = Symbol("");
function vr() {
  let t = [];
  function e(r) {
    return (
      t.push(r),
      () => {
        const s = t.indexOf(r);
        s > -1 && t.splice(s, 1);
      }
    );
  }
  function n() {
    t = [];
  }
  return { add: e, list: () => t, reset: n };
}
function qe(t, e, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (p) => {
          p === !1
            ? l(Jn(4, { from: n, to: e }))
            : p instanceof Error
            ? l(p)
            : fv(p)
            ? l(Jn(2, { from: e, to: p }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof p == "function" &&
                i.push(p),
              a());
        },
        d = t.call(r && r.instances[s], e, n, c);
      let f = Promise.resolve(d);
      t.length < 3 && (f = f.then(c)), f.catch((p) => l(p));
    });
}
function _i(t, e, n, r) {
  const s = [];
  for (const i of t)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(e !== "beforeRouteEnter" && !i.instances[a]))
        if (Hv(l)) {
          const d = (l.__vccOpts || l)[e];
          d && s.push(qe(d, n, r, i, a));
        } else {
          let c = l();
          s.push(() =>
            c.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${a}" at "${i.path}"`)
                );
              const f = zg(d) ? d.default : d;
              i.components[a] = f;
              const g = (f.__vccOpts || f)[e];
              return g && qe(g, n, r, i, a)();
            })
          );
        }
    }
  return s;
}
function Hv(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function _l(t) {
  const e = Pe(go),
    n = Pe(tu),
    r = Qt(() => e.resolve(Kn(t.to))),
    s = Qt(() => {
      const { matched: c } = r.value,
        { length: d } = c,
        f = c[d - 1],
        p = n.matched;
      if (!f || !p.length) return -1;
      const g = p.findIndex(Xn.bind(null, f));
      if (g > -1) return g;
      const E = gl(c[d - 2]);
      return d > 1 && gl(f) === E && p[p.length - 1].path !== E
        ? p.findIndex(Xn.bind(null, c[d - 2]))
        : g;
    }),
    i = Qt(() => s.value > -1 && Wv(n.params, r.value.params)),
    a = Qt(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Kc(n.params, r.value.params)
    );
  function l(c = {}) {
    return Kv(c)
      ? e[Kn(t.replace) ? "replace" : "push"](Kn(t.to)).catch(wr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Qt(() => r.value.href),
    isActive: i,
    isExactActive: a,
    navigate: l,
  };
}
const Bv = wc({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: _l,
    setup(t, { slots: e }) {
      const n = ar(_l(t)),
        { options: r } = Pe(go),
        s = Qt(() => ({
          [vl(t.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [vl(
            t.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = e.default && e.default(n);
        return t.custom
          ? i
          : Hc(
              "a",
              {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i
            );
      };
    },
  }),
  Uv = Bv;
function Kv(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function Wv(t, e) {
  for (const n in e) {
    const r = e[n],
      s = t[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!_e(s) || s.length !== r.length || r.some((i, a) => i !== s[a]))
      return !1;
  }
  return !0;
}
function gl(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const vl = (t, e, n) => (t != null ? t : e != null ? e : n),
  zv = wc({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const r = Pe(ji),
        s = Qt(() => t.route || r.value),
        i = Pe(ml, 0),
        a = Qt(() => {
          let d = Kn(i);
          const { matched: f } = s.value;
          let p;
          for (; (p = f[d]) && !p.components; ) d++;
          return d;
        }),
        l = Qt(() => s.value.matched[a.value]);
      cs(
        ml,
        Qt(() => a.value + 1)
      ),
        cs(jv, l),
        cs(ji, s);
      const c = xm();
      return (
        qn(
          () => [c.value, l.value, t.name],
          ([d, f, p], [g, E, b]) => {
            f &&
              ((f.instances[p] = d),
              E &&
                E !== f &&
                d &&
                d === g &&
                (f.leaveGuards.size || (f.leaveGuards = E.leaveGuards),
                f.updateGuards.size || (f.updateGuards = E.updateGuards))),
              d &&
                f &&
                (!E || !Xn(f, E) || !g) &&
                (f.enterCallbacks[p] || []).forEach((y) => y(d));
          },
          { flush: "post" }
        ),
        () => {
          const d = s.value,
            f = t.name,
            p = l.value,
            g = p && p.components[f];
          if (!g) return El(n.default, { Component: g, route: d });
          const E = p.props[f],
            b = E
              ? E === !0
                ? d.params
                : typeof E == "function"
                ? E(d)
                : E
              : null,
            D = Hc(
              g,
              vt({}, b, e, {
                onVnodeUnmounted: (x) => {
                  x.component.isUnmounted && (p.instances[f] = null);
                },
                ref: c,
              })
            );
          return El(n.default, { Component: D, route: d }) || D;
        }
      );
    },
  });
function El(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const qv = zv;
function Yv(t) {
  const e = yv(t.routes, t),
    n = t.parseQuery || Fv,
    r = t.stringifyQuery || pl,
    s = t.history,
    i = vr(),
    a = vr(),
    l = vr(),
    c = Rm(Ke);
  let d = Ke;
  Vn &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = pi.bind(null, (S) => "" + S),
    p = pi.bind(null, kv),
    g = pi.bind(null, As);
  function E(S, U) {
    let j, K;
    return (
      zc(S) ? ((j = e.getRecordMatcher(S)), (K = U)) : (K = S), e.addRoute(K, j)
    );
  }
  function b(S) {
    const U = e.getRecordMatcher(S);
    U && e.removeRoute(U);
  }
  function y() {
    return e.getRoutes().map((S) => S.record);
  }
  function D(S) {
    return !!e.getRecordMatcher(S);
  }
  function x(S, U) {
    if (((U = vt({}, U || c.value)), typeof S == "string")) {
      const h = mi(n, S, U.path),
        v = e.resolve({ path: h.path }, U),
        w = s.createHref(h.fullPath);
      return vt(h, v, {
        params: g(v.params),
        hash: As(h.hash),
        redirectedFrom: void 0,
        href: w,
      });
    }
    let j;
    if ("path" in S) j = vt({}, S, { path: mi(n, S.path, U.path).path });
    else {
      const h = vt({}, S.params);
      for (const v in h) h[v] == null && delete h[v];
      (j = vt({}, S, { params: p(S.params) })), (U.params = p(U.params));
    }
    const K = e.resolve(j, U),
      at = S.hash || "";
    K.params = f(g(K.params));
    const Et = Gg(r, vt({}, S, { hash: Iv(at), path: K.path })),
      A = s.createHref(Et);
    return vt(
      { fullPath: Et, hash: at, query: r === pl ? Vv(S.query) : S.query || {} },
      K,
      { redirectedFrom: void 0, href: A }
    );
  }
  function F(S) {
    return typeof S == "string" ? mi(n, S, c.value.path) : vt({}, S);
  }
  function M(S, U) {
    if (d !== S) return Jn(8, { from: U, to: S });
  }
  function H(S) {
    return rt(S);
  }
  function q(S) {
    return H(vt(F(S), { replace: !0 }));
  }
  function Z(S) {
    const U = S.matched[S.matched.length - 1];
    if (U && U.redirect) {
      const { redirect: j } = U;
      let K = typeof j == "function" ? j(S) : j;
      return (
        typeof K == "string" &&
          ((K = K.includes("?") || K.includes("#") ? (K = F(K)) : { path: K }),
          (K.params = {})),
        vt(
          { query: S.query, hash: S.hash, params: "path" in K ? {} : S.params },
          K
        )
      );
    }
  }
  function rt(S, U) {
    const j = (d = x(S)),
      K = c.value,
      at = S.state,
      Et = S.force,
      A = S.replace === !0,
      h = Z(j);
    if (h)
      return rt(
        vt(F(h), {
          state: typeof h == "object" ? vt({}, at, h.state) : at,
          force: Et,
          replace: A,
        }),
        U || j
      );
    const v = j;
    v.redirectedFrom = U;
    let w;
    return (
      !Et &&
        Xg(r, K, j) &&
        ((w = Jn(16, { to: v, from: K })), Bt(K, K, !0, !1)),
      (w ? Promise.resolve(w) : J(v, K))
        .catch((T) => (Le(T) ? (Le(T, 2) ? T : Tt(T)) : nt(T, v, K)))
        .then((T) => {
          if (T) {
            if (Le(T, 2))
              return rt(
                vt({ replace: A }, F(T.to), {
                  state: typeof T.to == "object" ? vt({}, at, T.to.state) : at,
                  force: Et,
                }),
                U || v
              );
          } else T = et(v, K, !0, A, at);
          return G(v, K, T), T;
        })
    );
  }
  function Y(S, U) {
    const j = M(S, U);
    return j ? Promise.reject(j) : Promise.resolve();
  }
  function J(S, U) {
    let j;
    const [K, at, Et] = Gv(S, U);
    j = _i(K.reverse(), "beforeRouteLeave", S, U);
    for (const h of K)
      h.leaveGuards.forEach((v) => {
        j.push(qe(v, S, U));
      });
    const A = Y.bind(null, S, U);
    return (
      j.push(A),
      Mn(j)
        .then(() => {
          j = [];
          for (const h of i.list()) j.push(qe(h, S, U));
          return j.push(A), Mn(j);
        })
        .then(() => {
          j = _i(at, "beforeRouteUpdate", S, U);
          for (const h of at)
            h.updateGuards.forEach((v) => {
              j.push(qe(v, S, U));
            });
          return j.push(A), Mn(j);
        })
        .then(() => {
          j = [];
          for (const h of S.matched)
            if (h.beforeEnter && !U.matched.includes(h))
              if (_e(h.beforeEnter))
                for (const v of h.beforeEnter) j.push(qe(v, S, U));
              else j.push(qe(h.beforeEnter, S, U));
          return j.push(A), Mn(j);
        })
        .then(
          () => (
            S.matched.forEach((h) => (h.enterCallbacks = {})),
            (j = _i(Et, "beforeRouteEnter", S, U)),
            j.push(A),
            Mn(j)
          )
        )
        .then(() => {
          j = [];
          for (const h of a.list()) j.push(qe(h, S, U));
          return j.push(A), Mn(j);
        })
        .catch((h) => (Le(h, 8) ? h : Promise.reject(h)))
    );
  }
  function G(S, U, j) {
    for (const K of l.list()) K(S, U, j);
  }
  function et(S, U, j, K, at) {
    const Et = M(S, U);
    if (Et) return Et;
    const A = U === Ke,
      h = Vn ? history.state : {};
    j &&
      (K || A
        ? s.replace(S.fullPath, vt({ scroll: A && h && h.scroll }, at))
        : s.push(S.fullPath, at)),
      (c.value = S),
      Bt(S, U, j, A),
      Tt();
  }
  let mt;
  function _t() {
    mt ||
      (mt = s.listen((S, U, j) => {
        if (!Gt.listening) return;
        const K = x(S),
          at = Z(K);
        if (at) {
          rt(vt(at, { replace: !0 }), K).catch(wr);
          return;
        }
        d = K;
        const Et = c.value;
        Vn && sv(ol(Et.fullPath, j.delta), js()),
          J(K, Et)
            .catch((A) =>
              Le(A, 12)
                ? A
                : Le(A, 2)
                ? (rt(A.to, K)
                    .then((h) => {
                      Le(h, 20) &&
                        !j.delta &&
                        j.type === Pr.pop &&
                        s.go(-1, !1);
                    })
                    .catch(wr),
                  Promise.reject())
                : (j.delta && s.go(-j.delta, !1), nt(A, K, Et))
            )
            .then((A) => {
              (A = A || et(K, Et, !1)),
                A &&
                  (j.delta && !Le(A, 8)
                    ? s.go(-j.delta, !1)
                    : j.type === Pr.pop && Le(A, 20) && s.go(-1, !1)),
                G(K, Et, A);
            })
            .catch(wr);
      }));
  }
  let Nt = vr(),
    kt = vr(),
    ct;
  function nt(S, U, j) {
    Tt(S);
    const K = kt.list();
    return (
      K.length ? K.forEach((at) => at(S, U, j)) : console.error(S),
      Promise.reject(S)
    );
  }
  function ut() {
    return ct && c.value !== Ke
      ? Promise.resolve()
      : new Promise((S, U) => {
          Nt.add([S, U]);
        });
  }
  function Tt(S) {
    return (
      ct ||
        ((ct = !S),
        _t(),
        Nt.list().forEach(([U, j]) => (S ? j(S) : U())),
        Nt.reset()),
      S
    );
  }
  function Bt(S, U, j, K) {
    const { scrollBehavior: at } = t;
    if (!Vn || !at) return Promise.resolve();
    const Et =
      (!j && iv(ol(S.fullPath, 0))) ||
      ((K || !j) && history.state && history.state.scroll) ||
      null;
    return pc()
      .then(() => at(S, U, Et))
      .then((A) => A && rv(A))
      .catch((A) => nt(A, S, U));
  }
  const Lt = (S) => s.go(S);
  let wt;
  const Yt = new Set(),
    Gt = {
      currentRoute: c,
      listening: !0,
      addRoute: E,
      removeRoute: b,
      hasRoute: D,
      getRoutes: y,
      resolve: x,
      options: t,
      push: H,
      replace: q,
      go: Lt,
      back: () => Lt(-1),
      forward: () => Lt(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: l.add,
      onError: kt.add,
      isReady: ut,
      install(S) {
        const U = this;
        S.component("RouterLink", Uv),
          S.component("RouterView", qv),
          (S.config.globalProperties.$router = U),
          Object.defineProperty(S.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Kn(c),
          }),
          Vn &&
            !wt &&
            c.value === Ke &&
            ((wt = !0), H(s.location).catch((at) => {}));
        const j = {};
        for (const at in Ke) j[at] = Qt(() => c.value[at]);
        S.provide(go, U), S.provide(tu, ar(j)), S.provide(ji, c);
        const K = S.unmount;
        Yt.add(S),
          (S.unmount = function () {
            Yt.delete(S),
              Yt.size < 1 &&
                ((d = Ke),
                mt && mt(),
                (mt = null),
                (c.value = Ke),
                (wt = !1),
                (ct = !1)),
              K();
          });
      },
    };
  return Gt;
}
function Mn(t) {
  return t.reduce((e, n) => e.then(() => n()), Promise.resolve());
}
function Gv(t, e) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(e.matched.length, t.matched.length);
  for (let a = 0; a < i; a++) {
    const l = e.matched[a];
    l && (t.matched.find((d) => Xn(d, l)) ? r.push(l) : n.push(l));
    const c = t.matched[a];
    c && (e.matched.find((d) => Xn(d, c)) || s.push(c));
  }
  return [n, r, s];
}
const Xv = {
    data() {
      return { increaseInterestedrate: 7 };
    },
    methods: {
      changeRate() {
        this.$emit("increase-rate", this.increaseInterestedrate / 100);
      },
    },
  },
  Jv = { id: "increased-rate-container" };
function Qv(t, e, n, r, s, i) {
  return (
    de(),
    he("div", Jv, [
      k(
        "h3",
        null,
        "Med en årsavkastning på " + Vt(s.increaseInterestedrate) + "%",
        1
      ),
      be(
        k(
          "input",
          {
            "onUpdate:modelValue":
              e[0] || (e[0] = (a) => (s.increaseInterestedrate = a)),
            onInput:
              e[1] || (e[1] = (...a) => i.changeRate && i.changeRate(...a)),
            min: "0",
            max: "20",
            type: "range",
          },
          null,
          544
        ),
        [[Ae, s.increaseInterestedrate]]
      ),
    ])
  );
}
const Zv = wn(Xv, [
  ["render", Qv],
  ["__scopeId", "data-v-e138e60c"],
]);
const tE = {
    components: { ChildComponent: Zv },
    data() {
      return {
        startValue: 2e4,
        timeSaving: 10,
        monthlySaving: 1e3,
        futureValue: new Intl.NumberFormat("sv-SE").format(213278),
        newFutureValue: new Intl.NumberFormat("sv-SE").format(213278),
        convertedValue: "",
        interestRate: 0.07,
        valueFromParent: 0,
      };
    },
    computed: {
      currencyValue: {
        get() {
          return `${this.startValue} kr`;
        },
        set(t) {
          if (t.endsWith(" kr")) {
            const e = t.substring(0, t.length - 3);
            if (!isNaN(e)) {
              this.startValue = Number(e);
              return;
            }
          }
          this.$refs.currency.startValue = this.currencyValue;
        },
      },
      yearsValue: {
        get() {
          return `${this.timeSaving} år`;
        },
        set(t) {
          if (t.endsWith(" år")) {
            const e = t.substring(0, t.length - 3);
            if (!isNaN(e)) {
              this.timeSaving = Number(e);
              return;
            }
          }
          this.$refs.currency.timeSaving = this.currencyValue;
        },
      },
      currencyValueMonthly: {
        get() {
          return `${this.monthlySaving} kr`;
        },
        set(t) {
          if (t.endsWith(" kr")) {
            const e = t.substring(0, t.length - 3);
            if (!isNaN(e)) {
              this.monthlySaving = Number(e);
              return;
            }
          }
          this.$refs.currencyMonthly.monthlySaving = this.currencyValue;
        },
      },
    },
    methods: {
      calculator() {
        (this.futureValue =
          this.startValue *
          Math.pow(1 + this.interestRate / 12, this.timeSaving * 12)),
          (this.futureValue = new Intl.NumberFormat("sv-SE").format(
            Math.trunc(
              this.futureValue +
                (this.monthlySaving *
                  (Math.pow(1 + this.interestRate / 12, this.timeSaving * 12) -
                    1)) /
                  (this.interestRate / 12)
            )
          ));
      },
      increaseRate(t) {
        (this.newFutureValue =
          this.startValue * Math.pow(1 + t / 12, this.timeSaving * 12)),
          (this.newfutureValue = new Intl.NumberFormat("sv-SE").format(
            Math.trunc(
              this.newfutureValue +
                (this.monthlySaving *
                  (Math.pow(1 + t / 12, this.timeSaving * 12) - 1)) /
                  (t / 12)
            )
          ));
      },
    },
  },
  Tn = (t) => ($r("data-v-1a98c49c"), (t = t()), Mr(), t),
  eE = { id: "container" },
  nE = { id: "calculate-container" },
  rE = Tn(() =>
    k("h1", { id: "header-title" }, "Ränta-på-ränta kalkylator", -1)
  ),
  sE = Tn(() =>
    k("p", null, "Uträkningen är beräknad på en årsavkastning om cirka 7%.", -1)
  ),
  iE = { id: "input-container" },
  oE = Tn(() => k("label", null, "Startvärde", -1)),
  aE = { id: "input-container-evaluate" },
  lE = Tn(() => k("label", null, "Tid", -1)),
  cE = { id: "input-container-evaluate" },
  uE = Tn(() => k("label", null, "Månadssparande", -1)),
  fE = { id: "input-container-evaluate" },
  dE = { id: "result-container" },
  hE = { id: "sum-value" },
  pE = Tn(() => k("h3", null, "Så hade du istället fått:", -1)),
  mE = Tn(() =>
    k(
      "p",
      { style: { "font-style": "italic" } },
      " (Krånglar lite med custom events när det gäller decimalerna) ",
      -1
    )
  );
function _E(t, e, n, r, s, i) {
  const a = vn("ChildComponent");
  return (
    de(),
    he("div", eE, [
      k("div", nE, [
        rE,
        sE,
        k("div", iE, [
          oE,
          k("div", aE, [
            be(
              k(
                "input",
                {
                  ref: "currency",
                  "onUpdate:modelValue":
                    e[0] || (e[0] = (l) => (i.currencyValue = l)),
                  onInput:
                    e[1] ||
                    (e[1] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, i.currencyValue]]
            ),
            be(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    e[2] || (e[2] = (l) => (s.startValue = l)),
                  type: "range",
                  min: "0",
                  max: "1000000",
                  onInput:
                    e[3] ||
                    (e[3] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, s.startValue]]
            ),
          ]),
          lE,
          k("div", cE, [
            be(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    e[4] || (e[4] = (l) => (i.yearsValue = l)),
                  onInput:
                    e[5] ||
                    (e[5] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, i.yearsValue]]
            ),
            be(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    e[6] || (e[6] = (l) => (s.timeSaving = l)),
                  type: "range",
                  min: "0",
                  max: "100",
                  onInput:
                    e[7] ||
                    (e[7] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, s.timeSaving]]
            ),
          ]),
          uE,
          k("div", fE, [
            be(
              k(
                "input",
                {
                  ref: "currencyMonthly",
                  "onUpdate:modelValue":
                    e[8] || (e[8] = (l) => (i.currencyValueMonthly = l)),
                  onInput:
                    e[9] ||
                    (e[9] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, i.currencyValueMonthly]]
            ),
            be(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    e[10] || (e[10] = (l) => (s.monthlySaving = l)),
                  type: "range",
                  min: "0",
                  max: "50000",
                  onInput:
                    e[11] ||
                    (e[11] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[Ae, s.monthlySaving]]
            ),
          ]),
        ]),
        k("div", dE, [
          k(
            "h3",
            null,
            " Resultatet hade genererat dig följande efter " +
              Vt(s.timeSaving) +
              " år av sparande: ",
            1
          ),
          k("h3", hE, Vt(s.futureValue) + " kr", 1),
          Ot(a, { onIncreaseRate: i.increaseRate }, null, 8, [
            "onIncreaseRate",
          ]),
          pE,
          k("h2", null, Vt(s.newFutureValue) + " kr", 1),
          mE,
        ]),
      ]),
    ])
  );
}
const gE = wn(tE, [
  ["render", _E],
  ["__scopeId", "data-v-1a98c49c"],
]);
function eu(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: nu } = Object.prototype,
  { getPrototypeOf: vo } = Object,
  Eo = ((t) => (e) => {
    const n = nu.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (t) => ((t = t.toLowerCase()), (e) => Eo(e) === t),
  Hs = (t) => (e) => typeof e === t,
  { isArray: cr } = Array,
  Ir = Hs("undefined");
function vE(t) {
  return (
    t !== null &&
    !Ir(t) &&
    t.constructor !== null &&
    !Ir(t.constructor) &&
    Qe(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const ru = Ve("ArrayBuffer");
function EE(t) {
  let e;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && ru(t.buffer)),
    e
  );
}
const bE = Hs("string"),
  Qe = Hs("function"),
  su = Hs("number"),
  bo = (t) => t !== null && typeof t == "object",
  yE = (t) => t === !0 || t === !1,
  hs = (t) => {
    if (Eo(t) !== "object") return !1;
    const e = vo(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  AE = Ve("Date"),
  wE = Ve("File"),
  TE = Ve("Blob"),
  OE = Ve("FileList"),
  SE = (t) => bo(t) && Qe(t.pipe),
  CE = (t) => {
    const e = "[object FormData]";
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        nu.call(t) === e ||
        (Qe(t.toString) && t.toString() === e))
    );
  },
  NE = Ve("URLSearchParams"),
  xE = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kr(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t == "undefined") return;
  let r, s;
  if ((typeof t != "object" && (t = [t]), cr(t)))
    for (r = 0, s = t.length; r < s; r++) e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) (l = i[r]), e.call(null, t[l], l, t);
  }
}
function iu(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), e === s.toLowerCase())) return s;
  return null;
}
const ou = (() =>
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : global)(),
  au = (t) => !Ir(t) && t !== ou;
function Hi() {
  const { caseless: t } = (au(this) && this) || {},
    e = {},
    n = (r, s) => {
      const i = (t && iu(e, s)) || s;
      hs(e[i]) && hs(r)
        ? (e[i] = Hi(e[i], r))
        : hs(r)
        ? (e[i] = Hi({}, r))
        : cr(r)
        ? (e[i] = r.slice())
        : (e[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && kr(arguments[r], n);
  return e;
}
const RE = (t, e, n, { allOwnKeys: r } = {}) => (
    kr(
      e,
      (s, i) => {
        n && Qe(s) ? (t[i] = eu(s, n)) : (t[i] = s);
      },
      { allOwnKeys: r }
    ),
    t
  ),
  LE = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  DE = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  PE = (t, e, n, r) => {
    let s, i, a;
    const l = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (s = Object.getOwnPropertyNames(t), i = s.length; i-- > 0; )
        (a = s[i]), (!r || r(a, t, e)) && !l[a] && ((e[a] = t[a]), (l[a] = !0));
      t = n !== !1 && vo(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  IE = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  $E = (t) => {
    if (!t) return null;
    if (cr(t)) return t;
    let e = t.length;
    if (!su(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  ME = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array != "undefined" && vo(Uint8Array)),
  kE = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      e.call(t, i[0], i[1]);
    }
  },
  FE = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  VE = Ve("HTMLFormElement"),
  jE = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  bl = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  HE = Ve("RegExp"),
  lu = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    kr(n, (s, i) => {
      e(s, i, t) !== !1 && (r[i] = s);
    }),
      Object.defineProperties(t, r);
  },
  BE = (t) => {
    lu(t, (e, n) => {
      if (Qe(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (Qe(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  UE = (t, e) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return cr(t) ? r(t) : r(String(t).split(e)), n;
  },
  KE = () => {},
  WE = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  gi = "abcdefghijklmnopqrstuvwxyz",
  yl = "0123456789",
  cu = { DIGIT: yl, ALPHA: gi, ALPHA_DIGIT: gi + gi.toUpperCase() + yl },
  zE = (t = 16, e = cu.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function qE(t) {
  return !!(
    t &&
    Qe(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const YE = (t) => {
    const e = new Array(10),
      n = (r, s) => {
        if (bo(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[s] = r;
            const i = cr(r) ? [] : {};
            return (
              kr(r, (a, l) => {
                const c = n(a, s + 1);
                !Ir(c) && (i[l] = c);
              }),
              (e[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  C = {
    isArray: cr,
    isArrayBuffer: ru,
    isBuffer: vE,
    isFormData: CE,
    isArrayBufferView: EE,
    isString: bE,
    isNumber: su,
    isBoolean: yE,
    isObject: bo,
    isPlainObject: hs,
    isUndefined: Ir,
    isDate: AE,
    isFile: wE,
    isBlob: TE,
    isRegExp: HE,
    isFunction: Qe,
    isStream: SE,
    isURLSearchParams: NE,
    isTypedArray: ME,
    isFileList: OE,
    forEach: kr,
    merge: Hi,
    extend: RE,
    trim: xE,
    stripBOM: LE,
    inherits: DE,
    toFlatObject: PE,
    kindOf: Eo,
    kindOfTest: Ve,
    endsWith: IE,
    toArray: $E,
    forEachEntry: kE,
    matchAll: FE,
    isHTMLForm: VE,
    hasOwnProperty: bl,
    hasOwnProp: bl,
    reduceDescriptors: lu,
    freezeMethods: BE,
    toObjectSet: UE,
    toCamelCase: jE,
    noop: KE,
    toFiniteNumber: WE,
    findKey: iu,
    global: ou,
    isContextDefined: au,
    ALPHABET: cu,
    generateString: zE,
    isSpecCompliantForm: qE,
    toJSONObject: YE,
  };
function ht(t, e, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
C.inherits(ht, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const uu = ht.prototype,
  fu = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  fu[t] = { value: t };
});
Object.defineProperties(ht, fu);
Object.defineProperty(uu, "isAxiosError", { value: !0 });
ht.from = (t, e, n, r, s, i) => {
  const a = Object.create(uu);
  return (
    C.toFlatObject(
      t,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    ht.call(a, t.message, e, n, r, s),
    (a.cause = t),
    (a.name = t.name),
    i && Object.assign(a, i),
    a
  );
};
const GE = null;
function Bi(t) {
  return C.isPlainObject(t) || C.isArray(t);
}
function du(t) {
  return C.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Al(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (s, i) {
          return (s = du(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : e;
}
function XE(t) {
  return C.isArray(t) && !t.some(Bi);
}
const JE = C.toFlatObject(C, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Bs(t, e, n) {
  if (!C.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, D) {
        return !C.isUndefined(D[y]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || f,
    i = n.dots,
    a = n.indexes,
    c =
      (n.Blob || (typeof Blob != "undefined" && Blob)) &&
      C.isSpecCompliantForm(e);
  if (!C.isFunction(s)) throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if (C.isDate(b)) return b.toISOString();
    if (!c && C.isBlob(b))
      throw new ht("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(b) || C.isTypedArray(b)
      ? c && typeof Blob == "function"
        ? new Blob([b])
        : Buffer.from(b)
      : b;
  }
  function f(b, y, D) {
    let x = b;
    if (b && !D && typeof b == "object") {
      if (C.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (b = JSON.stringify(b));
      else if (
        (C.isArray(b) && XE(b)) ||
        ((C.isFileList(b) || C.endsWith(y, "[]")) && (x = C.toArray(b)))
      )
        return (
          (y = du(y)),
          x.forEach(function (M, H) {
            !(C.isUndefined(M) || M === null) &&
              e.append(
                a === !0 ? Al([y], H, i) : a === null ? y : y + "[]",
                d(M)
              );
          }),
          !1
        );
    }
    return Bi(b) ? !0 : (e.append(Al(D, y, i), d(b)), !1);
  }
  const p = [],
    g = Object.assign(JE, {
      defaultVisitor: f,
      convertValue: d,
      isVisitable: Bi,
    });
  function E(b, y) {
    if (!C.isUndefined(b)) {
      if (p.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(b),
        C.forEach(b, function (x, F) {
          (!(C.isUndefined(x) || x === null) &&
            s.call(e, x, C.isString(F) ? F.trim() : F, y, g)) === !0 &&
            E(x, y ? y.concat(F) : [F]);
        }),
        p.pop();
    }
  }
  if (!C.isObject(t)) throw new TypeError("data must be an object");
  return E(t), e;
}
function wl(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function yo(t, e) {
  (this._pairs = []), t && Bs(t, this, e);
}
const hu = yo.prototype;
hu.append = function (e, n) {
  this._pairs.push([e, n]);
};
hu.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, wl);
      }
    : wl;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function QE(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function pu(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || QE,
    s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(e, n))
      : (i = C.isURLSearchParams(e) ? e.toString() : new yo(e, n).toString(r)),
    i)
  ) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return t;
}
class ZE {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    C.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const Tl = ZE,
  mu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  tb = typeof URLSearchParams != "undefined" ? URLSearchParams : yo,
  eb = FormData,
  nb = (() => {
    let t;
    return typeof navigator != "undefined" &&
      ((t = navigator.product) === "ReactNative" ||
        t === "NativeScript" ||
        t === "NS")
      ? !1
      : typeof window != "undefined" && typeof document != "undefined";
  })(),
  rb = (() =>
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Te = {
    isBrowser: !0,
    classes: { URLSearchParams: tb, FormData: eb, Blob },
    isStandardBrowserEnv: nb,
    isStandardBrowserWebWorkerEnv: rb,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function sb(t, e) {
  return Bs(
    t,
    new Te.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Te.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function ib(t) {
  return C.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === "[]" ? "" : e[1] || e[0]
  );
}
function ob(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (e[i] = t[i]);
  return e;
}
function _u(t) {
  function e(n, r, s, i) {
    let a = n[i++];
    const l = Number.isFinite(+a),
      c = i >= n.length;
    return (
      (a = !a && C.isArray(s) ? s.length : a),
      c
        ? (C.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !l)
        : ((!s[a] || !C.isObject(s[a])) && (s[a] = []),
          e(n, r, s[a], i) && C.isArray(s[a]) && (s[a] = ob(s[a])),
          !l)
    );
  }
  if (C.isFormData(t) && C.isFunction(t.entries)) {
    const n = {};
    return (
      C.forEachEntry(t, (r, s) => {
        e(ib(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
const ab = { "Content-Type": void 0 };
function lb(t, e, n) {
  if (C.isString(t))
    try {
      return (e || JSON.parse)(t), C.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
const Us = {
  transitional: mu,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = C.isObject(e);
      if ((i && C.isHTMLForm(e) && (e = new FormData(e)), C.isFormData(e)))
        return s && s ? JSON.stringify(_u(e)) : e;
      if (
        C.isArrayBuffer(e) ||
        C.isBuffer(e) ||
        C.isStream(e) ||
        C.isFile(e) ||
        C.isBlob(e)
      )
        return e;
      if (C.isArrayBufferView(e)) return e.buffer;
      if (C.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return sb(e, this.formSerializer).toString();
        if ((l = C.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Bs(
            l ? { "files[]": e } : e,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), lb(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || Us.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (e && C.isString(e) && ((r && !this.responseType) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(e);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? ht.from(l, ht.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Te.classes.FormData, Blob: Te.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
C.forEach(["delete", "get", "head"], function (e) {
  Us.headers[e] = {};
});
C.forEach(["post", "put", "patch"], function (e) {
  Us.headers[e] = C.merge(ab);
});
const Ao = Us,
  cb = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ub = (t) => {
    const e = {};
    let n, r, s;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (a) {
            (s = a.indexOf(":")),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (e[n] && cb[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  Ol = Symbol("internals");
function Er(t) {
  return t && String(t).trim().toLowerCase();
}
function ps(t) {
  return t === !1 || t == null ? t : C.isArray(t) ? t.map(ps) : String(t);
}
function fb(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
function db(t) {
  return /^[-_a-zA-Z]+$/.test(t.trim());
}
function vi(t, e, n, r) {
  if (C.isFunction(r)) return r.call(this, e, n);
  if (C.isString(e)) {
    if (C.isString(r)) return e.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(e);
  }
}
function hb(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function pb(t, e) {
  const n = C.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (s, i, a) {
        return this[r].call(this, e, s, i, a);
      },
      configurable: !0,
    });
  });
}
class Ks {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function i(l, c, d) {
      const f = Er(c);
      if (!f) throw new Error("header name must be a non-empty string");
      const p = C.findKey(s, f);
      (!p || s[p] === void 0 || d === !0 || (d === void 0 && s[p] !== !1)) &&
        (s[p || c] = ps(l));
    }
    const a = (l, c) => C.forEach(l, (d, f) => i(d, f, c));
    return (
      C.isPlainObject(e) || e instanceof this.constructor
        ? a(e, n)
        : C.isString(e) && (e = e.trim()) && !db(e)
        ? a(ub(e), n)
        : e != null && i(n, e, r),
      this
    );
  }
  get(e, n) {
    if (((e = Er(e)), e)) {
      const r = C.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return fb(s);
        if (C.isFunction(n)) return n.call(this, s, r);
        if (C.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = Er(e)), e)) {
      const r = C.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || vi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function i(a) {
      if (((a = Er(a)), a)) {
        const l = C.findKey(r, a);
        l && (!n || vi(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return C.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || vi(this, this[i], i, e)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (s, i) => {
        const a = C.findKey(r, i);
        if (a) {
          (n[a] = ps(s)), delete n[i];
          return;
        }
        const l = e ? hb(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = ps(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = e && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Ol] = this[Ol] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(a) {
      const l = Er(a);
      r[l] || (pb(s, a), (r[l] = !0));
    }
    return C.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
Ks.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.freezeMethods(Ks.prototype);
C.freezeMethods(Ks);
const $e = Ks;
function Ei(t, e) {
  const n = this || Ao,
    r = e || n,
    s = $e.from(r.headers);
  let i = r.data;
  return (
    C.forEach(t, function (l) {
      i = l.call(n, i, s.normalize(), e ? e.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function gu(t) {
  return !!(t && t.__CANCEL__);
}
function Fr(t, e, n) {
  ht.call(this, t == null ? "canceled" : t, ht.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
C.inherits(Fr, ht, { __CANCEL__: !0 });
function mb(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new ht(
          "Request failed with status code " + n.status,
          [ht.ERR_BAD_REQUEST, ht.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const _b = Te.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, s, i, a, l) {
          const c = [];
          c.push(n + "=" + encodeURIComponent(r)),
            C.isNumber(s) && c.push("expires=" + new Date(s).toGMTString()),
            C.isString(i) && c.push("path=" + i),
            C.isString(a) && c.push("domain=" + a),
            l === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function gb(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function vb(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function vu(t, e) {
  return t && !gb(e) ? vb(t, e) : e;
}
const Eb = Te.isStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(i) {
        let a = i;
        return (
          e && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (a) {
          const l = C.isString(a) ? s(a) : a;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function bb(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function yb(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let s = 0,
    i = 0,
    a;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (c) {
      const d = Date.now(),
        f = r[i];
      a || (a = d), (n[s] = c), (r[s] = d);
      let p = i,
        g = 0;
      for (; p !== s; ) (g += n[p++]), (p = p % t);
      if (((s = (s + 1) % t), s === i && (i = (i + 1) % t), d - a < e)) return;
      const E = f && d - f;
      return E ? Math.round((g * 1e3) / E) : void 0;
    }
  );
}
function Sl(t, e) {
  let n = 0;
  const r = yb(50, 250);
  return (s) => {
    const i = s.loaded,
      a = s.lengthComputable ? s.total : void 0,
      l = i - n,
      c = r(l),
      d = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && d ? (a - i) / c : void 0,
      event: s,
    };
    (f[e ? "download" : "upload"] = !0), t(f);
  };
}
const Ab = typeof XMLHttpRequest != "undefined",
  wb =
    Ab &&
    function (t) {
      return new Promise(function (n, r) {
        let s = t.data;
        const i = $e.from(t.headers).normalize(),
          a = t.responseType;
        let l;
        function c() {
          t.cancelToken && t.cancelToken.unsubscribe(l),
            t.signal && t.signal.removeEventListener("abort", l);
        }
        C.isFormData(s) &&
          (Te.isStandardBrowserEnv || Te.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let d = new XMLHttpRequest();
        if (t.auth) {
          const E = t.auth.username || "",
            b = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(E + ":" + b));
        }
        const f = vu(t.baseURL, t.url);
        d.open(t.method.toUpperCase(), pu(f, t.params, t.paramsSerializer), !0),
          (d.timeout = t.timeout);
        function p() {
          if (!d) return;
          const E = $e.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            y = {
              data:
                !a || a === "text" || a === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: E,
              config: t,
              request: d,
            };
          mb(
            function (x) {
              n(x), c();
            },
            function (x) {
              r(x), c();
            },
            y
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = p)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (d.onabort = function () {
            d &&
              (r(new ht("Request aborted", ht.ECONNABORTED, t, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new ht("Network Error", ht.ERR_NETWORK, t, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let b = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = t.transitional || mu;
            t.timeoutErrorMessage && (b = t.timeoutErrorMessage),
              r(
                new ht(
                  b,
                  y.clarifyTimeoutError ? ht.ETIMEDOUT : ht.ECONNABORTED,
                  t,
                  d
                )
              ),
              (d = null);
          }),
          Te.isStandardBrowserEnv)
        ) {
          const E =
            (t.withCredentials || Eb(f)) &&
            t.xsrfCookieName &&
            _b.read(t.xsrfCookieName);
          E && i.set(t.xsrfHeaderName, E);
        }
        s === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            C.forEach(i.toJSON(), function (b, y) {
              d.setRequestHeader(y, b);
            }),
          C.isUndefined(t.withCredentials) ||
            (d.withCredentials = !!t.withCredentials),
          a && a !== "json" && (d.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            d.addEventListener("progress", Sl(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", Sl(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((l = (E) => {
              d &&
                (r(!E || E.type ? new Fr(null, t, d) : E),
                d.abort(),
                (d = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(l),
            t.signal &&
              (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
        const g = bb(f);
        if (g && Te.protocols.indexOf(g) === -1) {
          r(new ht("Unsupported protocol " + g + ":", ht.ERR_BAD_REQUEST, t));
          return;
        }
        d.send(s || null);
      });
    },
  ms = { http: GE, xhr: wb };
C.forEach(ms, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (n) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Tb = {
  getAdapter: (t) => {
    t = C.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (
      let s = 0;
      s < e && ((n = t[s]), !(r = C.isString(n) ? ms[n.toLowerCase()] : n));
      s++
    );
    if (!r)
      throw r === !1
        ? new ht(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            C.hasOwnProp(ms, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!C.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: ms,
};
function bi(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Fr(null, t);
}
function Cl(t) {
  return (
    bi(t),
    (t.headers = $e.from(t.headers)),
    (t.data = Ei.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Tb.getAdapter(t.adapter || Ao.adapter)(t).then(
      function (r) {
        return (
          bi(t),
          (r.data = Ei.call(t, t.transformResponse, r)),
          (r.headers = $e.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          gu(r) ||
            (bi(t),
            r &&
              r.response &&
              ((r.response.data = Ei.call(t, t.transformResponse, r.response)),
              (r.response.headers = $e.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Nl = (t) => (t instanceof $e ? t.toJSON() : t);
function Qn(t, e) {
  e = e || {};
  const n = {};
  function r(d, f, p) {
    return C.isPlainObject(d) && C.isPlainObject(f)
      ? C.merge.call({ caseless: p }, d, f)
      : C.isPlainObject(f)
      ? C.merge({}, f)
      : C.isArray(f)
      ? f.slice()
      : f;
  }
  function s(d, f, p) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(d)) return r(void 0, d, p);
    } else return r(d, f, p);
  }
  function i(d, f) {
    if (!C.isUndefined(f)) return r(void 0, f);
  }
  function a(d, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(d)) return r(void 0, d);
    } else return r(void 0, f);
  }
  function l(d, f, p) {
    if (p in e) return r(d, f);
    if (p in t) return r(void 0, d);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (d, f) => s(Nl(d), Nl(f), !0),
  };
  return (
    C.forEach(Object.keys(t).concat(Object.keys(e)), function (f) {
      const p = c[f] || s,
        g = p(t[f], e[f], f);
      (C.isUndefined(g) && p !== l) || (n[f] = g);
    }),
    n
  );
}
const Eu = "1.3.2",
  wo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    wo[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const xl = {};
wo.transitional = function (e, n, r) {
  function s(i, a) {
    return (
      "[Axios v" +
      Eu +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, l) => {
    if (e === !1)
      throw new ht(
        s(a, " has been removed" + (n ? " in " + n : "")),
        ht.ERR_DEPRECATED
      );
    return (
      n &&
        !xl[a] &&
        ((xl[a] = !0),
        console.warn(
          s(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(i, a, l) : !0
    );
  };
};
function Ob(t, e, n) {
  if (typeof t != "object")
    throw new ht("options must be an object", ht.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      a = e[i];
    if (a) {
      const l = t[i],
        c = l === void 0 || a(l, i, t);
      if (c !== !0)
        throw new ht("option " + i + " must be " + c, ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ht("Unknown option " + i, ht.ERR_BAD_OPTION);
  }
}
const Ui = { assertOptions: Ob, validators: wo },
  We = Ui.validators;
class ws {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Tl(), response: new Tl() });
  }
  request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = Qn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Ui.assertOptions(
        r,
        {
          silentJSONParsing: We.transitional(We.boolean),
          forcedJSONParsing: We.transitional(We.boolean),
          clarifyTimeoutError: We.transitional(We.boolean),
        },
        !1
      ),
      s !== void 0 &&
        Ui.assertOptions(
          s,
          { encode: We.function, serialize: We.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a;
    (a = i && C.merge(i.common, i[n.method])),
      a &&
        C.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (b) => {
            delete i[b];
          }
        ),
      (n.headers = $e.concat(a, i));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((c = c && y.synchronous), l.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function (y) {
      d.push(y.fulfilled, y.rejected);
    });
    let f,
      p = 0,
      g;
    if (!c) {
      const b = [Cl.bind(this), void 0];
      for (
        b.unshift.apply(b, l),
          b.push.apply(b, d),
          g = b.length,
          f = Promise.resolve(n);
        p < g;

      )
        f = f.then(b[p++], b[p++]);
      return f;
    }
    g = l.length;
    let E = n;
    for (p = 0; p < g; ) {
      const b = l[p++],
        y = l[p++];
      try {
        E = b(E);
      } catch (D) {
        y.call(this, D);
        break;
      }
    }
    try {
      f = Cl.call(this, E);
    } catch (b) {
      return Promise.reject(b);
    }
    for (p = 0, g = d.length; p < g; ) f = f.then(d[p++], d[p++]);
    return f;
  }
  getUri(e) {
    e = Qn(this.defaults, e);
    const n = vu(e.baseURL, e.url);
    return pu(n, e.params, e.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (e) {
  ws.prototype[e] = function (n, r) {
    return this.request(
      Qn(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        Qn(l || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (ws.prototype[e] = n()), (ws.prototype[e + "Form"] = n(!0));
});
const _s = ws;
class To {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const a = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(s);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      e(function (i, a, l) {
        r.reason || ((r.reason = new Fr(i, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new To(function (s) {
        e = s;
      }),
      cancel: e,
    };
  }
}
const Sb = To;
function Cb(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function Nb(t) {
  return C.isObject(t) && t.isAxiosError === !0;
}
const Ki = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ki).forEach(([t, e]) => {
  Ki[e] = t;
});
const xb = Ki;
function bu(t) {
  const e = new _s(t),
    n = eu(_s.prototype.request, e);
  return (
    C.extend(n, _s.prototype, e, { allOwnKeys: !0 }),
    C.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return bu(Qn(t, s));
    }),
    n
  );
}
const Rt = bu(Ao);
Rt.Axios = _s;
Rt.CanceledError = Fr;
Rt.CancelToken = Sb;
Rt.isCancel = gu;
Rt.VERSION = Eu;
Rt.toFormData = Bs;
Rt.AxiosError = ht;
Rt.Cancel = Rt.CanceledError;
Rt.all = function (e) {
  return Promise.all(e);
};
Rt.spread = Cb;
Rt.isAxiosError = Nb;
Rt.mergeConfig = Qn;
Rt.AxiosHeaders = $e;
Rt.formToJSON = (t) => _u(C.isHTMLForm(t) ? new FormData(t) : t);
Rt.HttpStatusCode = xb;
Rt.default = Rt;
const Rl = Rt,
  Rb = "/assets/blocks-bg-89b2de70.png";
const Lb = {
    created() {
      Rl.get(
        "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo"
      ).then((t) => {
        this.lastUpdate = t.data["Meta Data"]["5. Last Refreshed"];
        const e = t.data["Time Series FX (Daily)"],
          n = Object.keys(e)[0];
        this.dailyValue = e[n]["4. close"];
      }),
        Rl.get(
          "https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=demo"
        ).then((t) => {
          this.fetchValues = [
            {
              date: "2020-06-31",
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              id: "f5954868-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2023-01-31"]["4. close"],
            },
            {
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              date: "2021-01-29",
              id: "f595231a-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2021-01-29"]["4. close"],
            },
            {
              date: "2021-06-30",
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              id: "f59526da-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2021-06-30"]["4. close"],
            },
            {
              date: "2022-01-31",
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              id: "f5952d2e-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2022-01-31"]["4. close"],
            },
            {
              date: "2022-06-30",
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              id: "f59538be-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2022-06-30"]["4. close"],
            },
            {
              date: "2023-01-31",
              from: t.data["Meta Data"]["2. From Symbol"],
              to: t.data["Meta Data"]["3. To Symbol"],
              id: "f5954868-a624-11ed-afa1-0242ac120002",
              value:
                t.data["Time Series FX (Monthly)"]["2023-01-31"]["4. close"],
            },
          ];
        });
    },
    data() {
      return {
        dailyValue: "",
        lastUpdate: "",
        fetchValues: [],
        fromValue: "",
        toValue: "",
        name: "",
        lastname: "",
        messageField: "Ange meddelande",
        emailAdded: !1,
        email: "",
      };
    },
    watch: {
      email(t) {
        t.includes("@") &&
          !this.emailAdded &&
          ((this.email = t + "gmail.com"), (this.emailAdded = !0));
      },
    },
  },
  Ne = (t) => ($r("data-v-aa765386"), (t = t()), Mr(), t),
  Db = { id: "background-container" },
  Pb = { id: "background-container-text" },
  Ib = { id: "btn-container" },
  $b = Ne(() => k("button", { id: "read-more-btn" }, "Läs mer", -1)),
  Mb = Ne(() => k("img", { id: "bg-image", alt: "", src: Rb }, null, -1)),
  kb = { id: "main-container" },
  Fb = { id: "main-position" },
  Vb = Ne(() => k("h3", null, "Nuvarande valuta (USD till SEK)", -1)),
  jb = Ne(() => k("h4", null, "Senast uppdaterad", -1)),
  Hb = { style: { "text-decoration": "underline" } },
  Bb = { id: "daily-value-container" },
  Ub = Ne(() => k("h3", null, "Idag står dagens valuta på:", -1)),
  Kb = { style: { "font-size": "3rem", "text-decoration": "underline" } },
  Wb = { id: "current-currency-container" },
  zb = { id: "form-container" },
  qb = { id: "form-total" },
  Yb = Ne(() => k("h2", null, "Kom i kontakt med oss!", -1)),
  Gb = { id: "form-position" },
  Xb = { class: "form-box" },
  Jb = Ne(() => k("label", { for: "name" }, "Förnamn: *", -1)),
  Qb = Ne(() => k("label", { for: "lastname" }, "Efternamn: *", -1)),
  Zb = Ne(() => k("label", { for: "email" }, "Email: *", -1)),
  ty = Fs(
    '<div class="form-box" data-v-aa765386><label for="city" data-v-aa765386>Stad:</label><input name="city" class="form-input" data-v-aa765386><label for="phone" data-v-aa765386>Telefon:</label><input name="phone" class="form-input" data-v-aa765386><label for="company" data-v-aa765386>Företag:</label><input name="company" class="form-input" data-v-aa765386></div>',
    1
  ),
  ey = Fs(
    '<div id="checkbox-container" data-v-aa765386><h3 data-v-aa765386>Intresse:</h3><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="stocks" checked data-v-aa765386><label for="stocks" data-v-aa765386>Aktier</label></div><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="funds" data-v-aa765386><label for="funds" data-v-aa765386>Fonder</label></div><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="indexfunds" data-v-aa765386><label for="indexfunds" data-v-aa765386>Indexfonder</label></div><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="metals" data-v-aa765386><label for="metals" data-v-aa765386>Ädelmetaller</label></div><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="crypto" data-v-aa765386><label for="crypto" data-v-aa765386>Kryptovalutor</label></div><div class="checkbox-alt" data-v-aa765386><input type="checkbox" name="properties" data-v-aa765386><label for="properties" data-v-aa765386>Fastigheter</label></div></div>',
    1
  ),
  ny = { id: "form-message-container" },
  ry = Ne(() => k("label", { for: "message" }, "Meddelande:", -1)),
  sy = ["placeholder"],
  iy = { key: 0 },
  oy = { key: 1 };
function ay(t, e, n, r, s, i) {
  const a = vn("RouterLink");
  return (
    de(),
    he(
      Wt,
      null,
      [
        k("div", Db, [
          k("div", Pb, [
            k("h1", null, Vt(this.$store.state.welcomeText), 1),
            k("h2", null, Vt(this.$store.state.welcomeTextLower), 1),
            k("div", Ib, [
              Ot(a, { to: "/About/Lorem" }, { default: zn(() => [$b]), _: 1 }),
              Ot(
                a,
                { to: "/CalculatorMain" },
                {
                  default: zn(() => [
                    k(
                      "button",
                      {
                        onClick:
                          e[0] ||
                          (e[0] = (l) => t.$store.commit("changeMainText")),
                        id: "calculate-btn",
                      },
                      " Börja räkna "
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ]),
          Mb,
        ]),
        k("div", kb, [
          k("div", Fb, [
            Vb,
            jb,
            k("p", Hb, Vt(s.lastUpdate), 1),
            k("div", Bb, [Ub, k("h2", Kb, Vt(s.dailyValue) + " SEK ", 1)]),
          ]),
          k("div", Wb, [
            (de(!0),
            he(
              Wt,
              null,
              c_(
                s.fetchValues,
                (l) => (
                  de(),
                  he("div", { key: l.id, id: "currency-box" }, [
                    k("h3", null, Vt(l.date), 1),
                    k(
                      "p",
                      null,
                      "En " + Vt(l.from) + " detta datum motsvarande följande:",
                      1
                    ),
                    k("h4", null, Vt(l.value) + " " + Vt(l.to), 1),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
        k("div", zb, [
          k("div", qb, [
            Yb,
            k("div", Gb, [
              k("div", Xb, [
                Jb,
                be(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        e[1] || (e[1] = (l) => (s.name = l)),
                      name: "name",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[Ae, s.name]]
                ),
                Qb,
                be(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        e[2] || (e[2] = (l) => (s.lastname = l)),
                      name: "lastname",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[Ae, s.lastname]]
                ),
                Zb,
                be(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        e[3] || (e[3] = (l) => (s.email = l)),
                      name: "email",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[Ae, s.email]]
                ),
              ]),
              ty,
            ]),
            ey,
            k("div", ny, [
              ry,
              k(
                "input",
                { placeholder: s.messageField, class: "form-input" },
                null,
                8,
                sy
              ),
              s.name.length > 0 &&
              s.lastname.length > 0 &&
              s.email.includes("@")
                ? (de(), he("button", iy, " Skicka "))
                : (de(), he("p", oy, "Fyll i alla obligatoriska fält")),
            ]),
          ]),
        ]),
      ],
      64
    )
  );
}
const ly = wn(Lb, [
  ["render", ay],
  ["__scopeId", "data-v-aa765386"],
]);
var cy =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function uy(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      if (this instanceof r) {
        var s = [null];
        s.push.apply(s, arguments);
        var i = Function.bind.apply(e, s);
        return new i();
      }
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }
      );
    }),
    n
  );
}
var Ll = {},
  fy = {
    get exports() {
      return Ll;
    },
    set exports(t) {
      Ll = t;
    },
  },
  jt = "top",
  te = "bottom",
  ee = "right",
  Ht = "left",
  Ws = "auto",
  ur = [jt, te, ee, Ht],
  yn = "start",
  Zn = "end",
  yu = "clippingParents",
  Oo = "viewport",
  jn = "popper",
  Au = "reference",
  Wi = ur.reduce(function (t, e) {
    return t.concat([e + "-" + yn, e + "-" + Zn]);
  }, []),
  So = [].concat(ur, [Ws]).reduce(function (t, e) {
    return t.concat([e, e + "-" + yn, e + "-" + Zn]);
  }, []),
  wu = "beforeRead",
  Tu = "read",
  Ou = "afterRead",
  Su = "beforeMain",
  Cu = "main",
  Nu = "afterMain",
  xu = "beforeWrite",
  Ru = "write",
  Lu = "afterWrite",
  Du = [wu, Tu, Ou, Su, Cu, Nu, xu, Ru, Lu];
function Ce(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function oe(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return t;
}
function An(t) {
  var e = oe(t).Element;
  return t instanceof e || t instanceof Element;
}
function ie(t) {
  var e = oe(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Co(t) {
  if (typeof ShadowRoot == "undefined") return !1;
  var e = oe(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function dy(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function (n) {
    var r = e.styles[n] || {},
      s = e.attributes[n] || {},
      i = e.elements[n];
    !ie(i) ||
      !Ce(i) ||
      (Object.assign(i.style, r),
      Object.keys(s).forEach(function (a) {
        var l = s[a];
        l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
      }));
  });
}
function hy(t) {
  var e = t.state,
    n = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, n.popper),
    (e.styles = n),
    e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
    function () {
      Object.keys(e.elements).forEach(function (r) {
        var s = e.elements[r],
          i = e.attributes[r] || {},
          a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]),
          l = a.reduce(function (c, d) {
            return (c[d] = ""), c;
          }, {});
        !ie(s) ||
          !Ce(s) ||
          (Object.assign(s.style, l),
          Object.keys(i).forEach(function (c) {
            s.removeAttribute(c);
          }));
      });
    }
  );
}
const No = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dy,
  effect: hy,
  requires: ["computeStyles"],
};
function Oe(t) {
  return t.split("-")[0];
}
var bn = Math.max,
  Ts = Math.min,
  tr = Math.round;
function zi() {
  var t = navigator.userAgentData;
  return t != null && t.brands
    ? t.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Pu() {
  return !/^((?!chrome|android).)*safari/i.test(zi());
}
function er(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(),
    s = 1,
    i = 1;
  e &&
    ie(t) &&
    ((s = (t.offsetWidth > 0 && tr(r.width) / t.offsetWidth) || 1),
    (i = (t.offsetHeight > 0 && tr(r.height) / t.offsetHeight) || 1));
  var a = An(t) ? oe(t) : window,
    l = a.visualViewport,
    c = !Pu() && n,
    d = (r.left + (c && l ? l.offsetLeft : 0)) / s,
    f = (r.top + (c && l ? l.offsetTop : 0)) / i,
    p = r.width / s,
    g = r.height / i;
  return {
    width: p,
    height: g,
    top: f,
    right: d + p,
    bottom: f + g,
    left: d,
    x: d,
    y: f,
  };
}
function xo(t) {
  var e = er(t),
    n = t.offsetWidth,
    r = t.offsetHeight;
  return (
    Math.abs(e.width - n) <= 1 && (n = e.width),
    Math.abs(e.height - r) <= 1 && (r = e.height),
    { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
  );
}
function Iu(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && Co(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ke(t) {
  return oe(t).getComputedStyle(t);
}
function py(t) {
  return ["table", "td", "th"].indexOf(Ce(t)) >= 0;
}
function Ze(t) {
  return ((An(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function zs(t) {
  return Ce(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (Co(t) ? t.host : null) || Ze(t);
}
function Dl(t) {
  return !ie(t) || ke(t).position === "fixed" ? null : t.offsetParent;
}
function my(t) {
  var e = /firefox/i.test(zi()),
    n = /Trident/i.test(zi());
  if (n && ie(t)) {
    var r = ke(t);
    if (r.position === "fixed") return null;
  }
  var s = zs(t);
  for (Co(s) && (s = s.host); ie(s) && ["html", "body"].indexOf(Ce(s)) < 0; ) {
    var i = ke(s);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (e && i.willChange === "filter") ||
      (e && i.filter && i.filter !== "none")
    )
      return s;
    s = s.parentNode;
  }
  return null;
}
function Vr(t) {
  for (var e = oe(t), n = Dl(t); n && py(n) && ke(n).position === "static"; )
    n = Dl(n);
  return n &&
    (Ce(n) === "html" || (Ce(n) === "body" && ke(n).position === "static"))
    ? e
    : n || my(t) || e;
}
function Ro(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Or(t, e, n) {
  return bn(t, Ts(e, n));
}
function _y(t, e, n) {
  var r = Or(t, e, n);
  return r > n ? n : r;
}
function $u() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Mu(t) {
  return Object.assign({}, $u(), t);
}
function ku(t, e) {
  return e.reduce(function (n, r) {
    return (n[r] = t), n;
  }, {});
}
var gy = function (e, n) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, n.rects, { placement: n.placement }))
        : e),
    Mu(typeof e != "number" ? e : ku(e, ur))
  );
};
function vy(t) {
  var e,
    n = t.state,
    r = t.name,
    s = t.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = Oe(n.placement),
    c = Ro(l),
    d = [Ht, ee].indexOf(l) >= 0,
    f = d ? "height" : "width";
  if (!(!i || !a)) {
    var p = gy(s.padding, n),
      g = xo(i),
      E = c === "y" ? jt : Ht,
      b = c === "y" ? te : ee,
      y =
        n.rects.reference[f] + n.rects.reference[c] - a[c] - n.rects.popper[f],
      D = a[c] - n.rects.reference[c],
      x = Vr(i),
      F = x ? (c === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      M = y / 2 - D / 2,
      H = p[E],
      q = F - g[f] - p[b],
      Z = F / 2 - g[f] / 2 + M,
      rt = Or(H, Z, q),
      Y = c;
    n.modifiersData[r] = ((e = {}), (e[Y] = rt), (e.centerOffset = rt - Z), e);
  }
}
function Ey(t) {
  var e = t.state,
    n = t.options,
    r = n.element,
    s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null &&
    ((typeof s == "string" && ((s = e.elements.popper.querySelector(s)), !s)) ||
      (Iu(e.elements.popper, s) && (e.elements.arrow = s)));
}
const Fu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vy,
  effect: Ey,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function nr(t) {
  return t.split("-")[1];
}
var by = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yy(t) {
  var e = t.x,
    n = t.y,
    r = window,
    s = r.devicePixelRatio || 1;
  return { x: tr(e * s) / s || 0, y: tr(n * s) / s || 0 };
}
function Pl(t) {
  var e,
    n = t.popper,
    r = t.popperRect,
    s = t.placement,
    i = t.variation,
    a = t.offsets,
    l = t.position,
    c = t.gpuAcceleration,
    d = t.adaptive,
    f = t.roundOffsets,
    p = t.isFixed,
    g = a.x,
    E = g === void 0 ? 0 : g,
    b = a.y,
    y = b === void 0 ? 0 : b,
    D = typeof f == "function" ? f({ x: E, y }) : { x: E, y };
  (E = D.x), (y = D.y);
  var x = a.hasOwnProperty("x"),
    F = a.hasOwnProperty("y"),
    M = Ht,
    H = jt,
    q = window;
  if (d) {
    var Z = Vr(n),
      rt = "clientHeight",
      Y = "clientWidth";
    if (
      (Z === oe(n) &&
        ((Z = Ze(n)),
        ke(Z).position !== "static" &&
          l === "absolute" &&
          ((rt = "scrollHeight"), (Y = "scrollWidth"))),
      (Z = Z),
      s === jt || ((s === Ht || s === ee) && i === Zn))
    ) {
      H = te;
      var J =
        p && Z === q && q.visualViewport ? q.visualViewport.height : Z[rt];
      (y -= J - r.height), (y *= c ? 1 : -1);
    }
    if (s === Ht || ((s === jt || s === te) && i === Zn)) {
      M = ee;
      var G = p && Z === q && q.visualViewport ? q.visualViewport.width : Z[Y];
      (E -= G - r.width), (E *= c ? 1 : -1);
    }
  }
  var et = Object.assign({ position: l }, d && by),
    mt = f === !0 ? yy({ x: E, y }) : { x: E, y };
  if (((E = mt.x), (y = mt.y), c)) {
    var _t;
    return Object.assign(
      {},
      et,
      ((_t = {}),
      (_t[H] = F ? "0" : ""),
      (_t[M] = x ? "0" : ""),
      (_t.transform =
        (q.devicePixelRatio || 1) <= 1
          ? "translate(" + E + "px, " + y + "px)"
          : "translate3d(" + E + "px, " + y + "px, 0)"),
      _t)
    );
  }
  return Object.assign(
    {},
    et,
    ((e = {}),
    (e[H] = F ? y + "px" : ""),
    (e[M] = x ? E + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function Ay(t) {
  var e = t.state,
    n = t.options,
    r = n.gpuAcceleration,
    s = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    l = n.roundOffsets,
    c = l === void 0 ? !0 : l,
    d = {
      placement: Oe(e.placement),
      variation: nr(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: s,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      Pl(
        Object.assign({}, d, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: a,
          roundOffsets: c,
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        Pl(
          Object.assign({}, d, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    }));
}
const Lo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ay,
  data: {},
};
var os = { passive: !0 };
function wy(t) {
  var e = t.state,
    n = t.instance,
    r = t.options,
    s = r.scroll,
    i = s === void 0 ? !0 : s,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    c = oe(e.elements.popper),
    d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    i &&
      d.forEach(function (f) {
        f.addEventListener("scroll", n.update, os);
      }),
    l && c.addEventListener("resize", n.update, os),
    function () {
      i &&
        d.forEach(function (f) {
          f.removeEventListener("scroll", n.update, os);
        }),
        l && c.removeEventListener("resize", n.update, os);
    }
  );
}
const Do = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: wy,
  data: {},
};
var Ty = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gs(t) {
  return t.replace(/left|right|bottom|top/g, function (e) {
    return Ty[e];
  });
}
var Oy = { start: "end", end: "start" };
function Il(t) {
  return t.replace(/start|end/g, function (e) {
    return Oy[e];
  });
}
function Po(t) {
  var e = oe(t),
    n = e.pageXOffset,
    r = e.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Io(t) {
  return er(Ze(t)).left + Po(t).scrollLeft;
}
function Sy(t, e) {
  var n = oe(t),
    r = Ze(t),
    s = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    c = 0;
  if (s) {
    (i = s.width), (a = s.height);
    var d = Pu();
    (d || (!d && e === "fixed")) && ((l = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: i, height: a, x: l + Io(t), y: c };
}
function Cy(t) {
  var e,
    n = Ze(t),
    r = Po(t),
    s = (e = t.ownerDocument) == null ? void 0 : e.body,
    i = bn(
      n.scrollWidth,
      n.clientWidth,
      s ? s.scrollWidth : 0,
      s ? s.clientWidth : 0
    ),
    a = bn(
      n.scrollHeight,
      n.clientHeight,
      s ? s.scrollHeight : 0,
      s ? s.clientHeight : 0
    ),
    l = -r.scrollLeft + Io(t),
    c = -r.scrollTop;
  return (
    ke(s || n).direction === "rtl" &&
      (l += bn(n.clientWidth, s ? s.clientWidth : 0) - i),
    { width: i, height: a, x: l, y: c }
  );
}
function $o(t) {
  var e = ke(t),
    n = e.overflow,
    r = e.overflowX,
    s = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Vu(t) {
  return ["html", "body", "#document"].indexOf(Ce(t)) >= 0
    ? t.ownerDocument.body
    : ie(t) && $o(t)
    ? t
    : Vu(zs(t));
}
function Sr(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = Vu(t),
    s = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    i = oe(r),
    a = s ? [i].concat(i.visualViewport || [], $o(r) ? r : []) : r,
    l = e.concat(a);
  return s ? l : l.concat(Sr(zs(a)));
}
function qi(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function Ny(t, e) {
  var n = er(t, !1, e === "fixed");
  return (
    (n.top = n.top + t.clientTop),
    (n.left = n.left + t.clientLeft),
    (n.bottom = n.top + t.clientHeight),
    (n.right = n.left + t.clientWidth),
    (n.width = t.clientWidth),
    (n.height = t.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function $l(t, e, n) {
  return e === Oo ? qi(Sy(t, n)) : An(e) ? Ny(e, n) : qi(Cy(Ze(t)));
}
function xy(t) {
  var e = Sr(zs(t)),
    n = ["absolute", "fixed"].indexOf(ke(t).position) >= 0,
    r = n && ie(t) ? Vr(t) : t;
  return An(r)
    ? e.filter(function (s) {
        return An(s) && Iu(s, r) && Ce(s) !== "body";
      })
    : [];
}
function Ry(t, e, n, r) {
  var s = e === "clippingParents" ? xy(t) : [].concat(e),
    i = [].concat(s, [n]),
    a = i[0],
    l = i.reduce(function (c, d) {
      var f = $l(t, d, r);
      return (
        (c.top = bn(f.top, c.top)),
        (c.right = Ts(f.right, c.right)),
        (c.bottom = Ts(f.bottom, c.bottom)),
        (c.left = bn(f.left, c.left)),
        c
      );
    }, $l(t, a, r));
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function ju(t) {
  var e = t.reference,
    n = t.element,
    r = t.placement,
    s = r ? Oe(r) : null,
    i = r ? nr(r) : null,
    a = e.x + e.width / 2 - n.width / 2,
    l = e.y + e.height / 2 - n.height / 2,
    c;
  switch (s) {
    case jt:
      c = { x: a, y: e.y - n.height };
      break;
    case te:
      c = { x: a, y: e.y + e.height };
      break;
    case ee:
      c = { x: e.x + e.width, y: l };
      break;
    case Ht:
      c = { x: e.x - n.width, y: l };
      break;
    default:
      c = { x: e.x, y: e.y };
  }
  var d = s ? Ro(s) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (i) {
      case yn:
        c[d] = c[d] - (e[f] / 2 - n[f] / 2);
        break;
      case Zn:
        c[d] = c[d] + (e[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function rr(t, e) {
  e === void 0 && (e = {});
  var n = e,
    r = n.placement,
    s = r === void 0 ? t.placement : r,
    i = n.strategy,
    a = i === void 0 ? t.strategy : i,
    l = n.boundary,
    c = l === void 0 ? yu : l,
    d = n.rootBoundary,
    f = d === void 0 ? Oo : d,
    p = n.elementContext,
    g = p === void 0 ? jn : p,
    E = n.altBoundary,
    b = E === void 0 ? !1 : E,
    y = n.padding,
    D = y === void 0 ? 0 : y,
    x = Mu(typeof D != "number" ? D : ku(D, ur)),
    F = g === jn ? Au : jn,
    M = t.rects.popper,
    H = t.elements[b ? F : g],
    q = Ry(An(H) ? H : H.contextElement || Ze(t.elements.popper), c, f, a),
    Z = er(t.elements.reference),
    rt = ju({ reference: Z, element: M, strategy: "absolute", placement: s }),
    Y = qi(Object.assign({}, M, rt)),
    J = g === jn ? Y : Z,
    G = {
      top: q.top - J.top + x.top,
      bottom: J.bottom - q.bottom + x.bottom,
      left: q.left - J.left + x.left,
      right: J.right - q.right + x.right,
    },
    et = t.modifiersData.offset;
  if (g === jn && et) {
    var mt = et[s];
    Object.keys(G).forEach(function (_t) {
      var Nt = [ee, te].indexOf(_t) >= 0 ? 1 : -1,
        kt = [jt, te].indexOf(_t) >= 0 ? "y" : "x";
      G[_t] += mt[kt] * Nt;
    });
  }
  return G;
}
function Ly(t, e) {
  e === void 0 && (e = {});
  var n = e,
    r = n.placement,
    s = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    l = n.flipVariations,
    c = n.allowedAutoPlacements,
    d = c === void 0 ? So : c,
    f = nr(r),
    p = f
      ? l
        ? Wi
        : Wi.filter(function (b) {
            return nr(b) === f;
          })
      : ur,
    g = p.filter(function (b) {
      return d.indexOf(b) >= 0;
    });
  g.length === 0 && (g = p);
  var E = g.reduce(function (b, y) {
    return (
      (b[y] = rr(t, { placement: y, boundary: s, rootBoundary: i, padding: a })[
        Oe(y)
      ]),
      b
    );
  }, {});
  return Object.keys(E).sort(function (b, y) {
    return E[b] - E[y];
  });
}
function Dy(t) {
  if (Oe(t) === Ws) return [];
  var e = gs(t);
  return [Il(t), e, Il(e)];
}
function Py(t) {
  var e = t.state,
    n = t.options,
    r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (
      var s = n.mainAxis,
        i = s === void 0 ? !0 : s,
        a = n.altAxis,
        l = a === void 0 ? !0 : a,
        c = n.fallbackPlacements,
        d = n.padding,
        f = n.boundary,
        p = n.rootBoundary,
        g = n.altBoundary,
        E = n.flipVariations,
        b = E === void 0 ? !0 : E,
        y = n.allowedAutoPlacements,
        D = e.options.placement,
        x = Oe(D),
        F = x === D,
        M = c || (F || !b ? [gs(D)] : Dy(D)),
        H = [D].concat(M).reduce(function (Gt, S) {
          return Gt.concat(
            Oe(S) === Ws
              ? Ly(e, {
                  placement: S,
                  boundary: f,
                  rootBoundary: p,
                  padding: d,
                  flipVariations: b,
                  allowedAutoPlacements: y,
                })
              : S
          );
        }, []),
        q = e.rects.reference,
        Z = e.rects.popper,
        rt = new Map(),
        Y = !0,
        J = H[0],
        G = 0;
      G < H.length;
      G++
    ) {
      var et = H[G],
        mt = Oe(et),
        _t = nr(et) === yn,
        Nt = [jt, te].indexOf(mt) >= 0,
        kt = Nt ? "width" : "height",
        ct = rr(e, {
          placement: et,
          boundary: f,
          rootBoundary: p,
          altBoundary: g,
          padding: d,
        }),
        nt = Nt ? (_t ? ee : Ht) : _t ? te : jt;
      q[kt] > Z[kt] && (nt = gs(nt));
      var ut = gs(nt),
        Tt = [];
      if (
        (i && Tt.push(ct[mt] <= 0),
        l && Tt.push(ct[nt] <= 0, ct[ut] <= 0),
        Tt.every(function (Gt) {
          return Gt;
        }))
      ) {
        (J = et), (Y = !1);
        break;
      }
      rt.set(et, Tt);
    }
    if (Y)
      for (
        var Bt = b ? 3 : 1,
          Lt = function (S) {
            var U = H.find(function (j) {
              var K = rt.get(j);
              if (K)
                return K.slice(0, S).every(function (at) {
                  return at;
                });
            });
            if (U) return (J = U), "break";
          },
          wt = Bt;
        wt > 0;
        wt--
      ) {
        var Yt = Lt(wt);
        if (Yt === "break") break;
      }
    e.placement !== J &&
      ((e.modifiersData[r]._skip = !0), (e.placement = J), (e.reset = !0));
  }
}
const Hu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Py,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Ml(t, e, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x,
    }
  );
}
function kl(t) {
  return [jt, ee, te, Ht].some(function (e) {
    return t[e] >= 0;
  });
}
function Iy(t) {
  var e = t.state,
    n = t.name,
    r = e.rects.reference,
    s = e.rects.popper,
    i = e.modifiersData.preventOverflow,
    a = rr(e, { elementContext: "reference" }),
    l = rr(e, { altBoundary: !0 }),
    c = Ml(a, r),
    d = Ml(l, s, i),
    f = kl(c),
    p = kl(d);
  (e.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: f,
    hasPopperEscaped: p,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": f,
      "data-popper-escaped": p,
    }));
}
const Bu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Iy,
};
function $y(t, e, n) {
  var r = Oe(t),
    s = [Ht, jt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n,
    a = i[0],
    l = i[1];
  return (
    (a = a || 0),
    (l = (l || 0) * s),
    [Ht, ee].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function My(t) {
  var e = t.state,
    n = t.options,
    r = t.name,
    s = n.offset,
    i = s === void 0 ? [0, 0] : s,
    a = So.reduce(function (f, p) {
      return (f[p] = $y(p, e.rects, i)), f;
    }, {}),
    l = a[e.placement],
    c = l.x,
    d = l.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += c),
    (e.modifiersData.popperOffsets.y += d)),
    (e.modifiersData[r] = a);
}
const Uu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: My,
};
function ky(t) {
  var e = t.state,
    n = t.name;
  e.modifiersData[n] = ju({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const Mo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ky,
  data: {},
};
function Fy(t) {
  return t === "x" ? "y" : "x";
}
function Vy(t) {
  var e = t.state,
    n = t.options,
    r = t.name,
    s = n.mainAxis,
    i = s === void 0 ? !0 : s,
    a = n.altAxis,
    l = a === void 0 ? !1 : a,
    c = n.boundary,
    d = n.rootBoundary,
    f = n.altBoundary,
    p = n.padding,
    g = n.tether,
    E = g === void 0 ? !0 : g,
    b = n.tetherOffset,
    y = b === void 0 ? 0 : b,
    D = rr(e, { boundary: c, rootBoundary: d, padding: p, altBoundary: f }),
    x = Oe(e.placement),
    F = nr(e.placement),
    M = !F,
    H = Ro(x),
    q = Fy(H),
    Z = e.modifiersData.popperOffsets,
    rt = e.rects.reference,
    Y = e.rects.popper,
    J =
      typeof y == "function"
        ? y(Object.assign({}, e.rects, { placement: e.placement }))
        : y,
    G =
      typeof J == "number"
        ? { mainAxis: J, altAxis: J }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, J),
    et = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    mt = { x: 0, y: 0 };
  if (Z) {
    if (i) {
      var _t,
        Nt = H === "y" ? jt : Ht,
        kt = H === "y" ? te : ee,
        ct = H === "y" ? "height" : "width",
        nt = Z[H],
        ut = nt + D[Nt],
        Tt = nt - D[kt],
        Bt = E ? -Y[ct] / 2 : 0,
        Lt = F === yn ? rt[ct] : Y[ct],
        wt = F === yn ? -Y[ct] : -rt[ct],
        Yt = e.elements.arrow,
        Gt = E && Yt ? xo(Yt) : { width: 0, height: 0 },
        S = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : $u(),
        U = S[Nt],
        j = S[kt],
        K = Or(0, rt[ct], Gt[ct]),
        at = M ? rt[ct] / 2 - Bt - K - U - G.mainAxis : Lt - K - U - G.mainAxis,
        Et = M
          ? -rt[ct] / 2 + Bt + K + j + G.mainAxis
          : wt + K + j + G.mainAxis,
        A = e.elements.arrow && Vr(e.elements.arrow),
        h = A ? (H === "y" ? A.clientTop || 0 : A.clientLeft || 0) : 0,
        v = (_t = et == null ? void 0 : et[H]) != null ? _t : 0,
        w = nt + at - v - h,
        T = nt + Et - v,
        N = Or(E ? Ts(ut, w) : ut, nt, E ? bn(Tt, T) : Tt);
      (Z[H] = N), (mt[H] = N - nt);
    }
    if (l) {
      var P,
        B = H === "x" ? jt : Ht,
        I = H === "x" ? te : ee,
        L = Z[q],
        R = q === "y" ? "height" : "width",
        X = L + D[B],
        W = L - D[I],
        z = [jt, Ht].indexOf(x) !== -1,
        Q = (P = et == null ? void 0 : et[q]) != null ? P : 0,
        st = z ? X : L - rt[R] - Y[R] - Q + G.altAxis,
        gt = z ? L + rt[R] + Y[R] - Q - G.altAxis : W,
        ft = E && z ? _y(st, L, gt) : Or(E ? st : X, L, E ? gt : W);
      (Z[q] = ft), (mt[q] = ft - L);
    }
    e.modifiersData[r] = mt;
  }
}
const Ku = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vy,
  requiresIfExists: ["offset"],
};
function jy(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Hy(t) {
  return t === oe(t) || !ie(t) ? Po(t) : jy(t);
}
function By(t) {
  var e = t.getBoundingClientRect(),
    n = tr(e.width) / t.offsetWidth || 1,
    r = tr(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Uy(t, e, n) {
  n === void 0 && (n = !1);
  var r = ie(e),
    s = ie(e) && By(e),
    i = Ze(e),
    a = er(t, s, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Ce(e) !== "body" || $o(i)) && (l = Hy(e)),
      ie(e)
        ? ((c = er(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop))
        : i && (c.x = Io(i))),
    {
      x: a.left + l.scrollLeft - c.x,
      y: a.top + l.scrollTop - c.y,
      width: a.width,
      height: a.height,
    }
  );
}
function Ky(t) {
  var e = new Map(),
    n = new Set(),
    r = [];
  t.forEach(function (i) {
    e.set(i.name, i);
  });
  function s(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var c = e.get(l);
        c && s(c);
      }
    }),
      r.push(i);
  }
  return (
    t.forEach(function (i) {
      n.has(i.name) || s(i);
    }),
    r
  );
}
function Wy(t) {
  var e = Ky(t);
  return Du.reduce(function (n, r) {
    return n.concat(
      e.filter(function (s) {
        return s.phase === r;
      })
    );
  }, []);
}
function zy(t) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (n) {
          Promise.resolve().then(function () {
            (e = void 0), n(t());
          });
        })),
      e
    );
  };
}
function qy(t) {
  var e = t.reduce(function (n, r) {
    var s = n[r.name];
    return (
      (n[r.name] = s
        ? Object.assign({}, s, r, {
            options: Object.assign({}, s.options, r.options),
            data: Object.assign({}, s.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(e).map(function (n) {
    return e[n];
  });
}
var Fl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vl() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function qs(t) {
  t === void 0 && (t = {});
  var e = t,
    n = e.defaultModifiers,
    r = n === void 0 ? [] : n,
    s = e.defaultOptions,
    i = s === void 0 ? Fl : s;
  return function (l, c, d) {
    d === void 0 && (d = i);
    var f = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Fl, i),
        modifiersData: {},
        elements: { reference: l, popper: c },
        attributes: {},
        styles: {},
      },
      p = [],
      g = !1,
      E = {
        state: f,
        setOptions: function (x) {
          var F = typeof x == "function" ? x(f.options) : x;
          y(),
            (f.options = Object.assign({}, i, f.options, F)),
            (f.scrollParents = {
              reference: An(l)
                ? Sr(l)
                : l.contextElement
                ? Sr(l.contextElement)
                : [],
              popper: Sr(c),
            });
          var M = Wy(qy([].concat(r, f.options.modifiers)));
          return (
            (f.orderedModifiers = M.filter(function (H) {
              return H.enabled;
            })),
            b(),
            E.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var x = f.elements,
              F = x.reference,
              M = x.popper;
            if (Vl(F, M)) {
              (f.rects = {
                reference: Uy(F, Vr(M), f.options.strategy === "fixed"),
                popper: xo(M),
              }),
                (f.reset = !1),
                (f.placement = f.options.placement),
                f.orderedModifiers.forEach(function (G) {
                  return (f.modifiersData[G.name] = Object.assign({}, G.data));
                });
              for (var H = 0; H < f.orderedModifiers.length; H++) {
                if (f.reset === !0) {
                  (f.reset = !1), (H = -1);
                  continue;
                }
                var q = f.orderedModifiers[H],
                  Z = q.fn,
                  rt = q.options,
                  Y = rt === void 0 ? {} : rt,
                  J = q.name;
                typeof Z == "function" &&
                  (f = Z({ state: f, options: Y, name: J, instance: E }) || f);
              }
            }
          }
        },
        update: zy(function () {
          return new Promise(function (D) {
            E.forceUpdate(), D(f);
          });
        }),
        destroy: function () {
          y(), (g = !0);
        },
      };
    if (!Vl(l, c)) return E;
    E.setOptions(d).then(function (D) {
      !g && d.onFirstUpdate && d.onFirstUpdate(D);
    });
    function b() {
      f.orderedModifiers.forEach(function (D) {
        var x = D.name,
          F = D.options,
          M = F === void 0 ? {} : F,
          H = D.effect;
        if (typeof H == "function") {
          var q = H({ state: f, name: x, instance: E, options: M }),
            Z = function () {};
          p.push(q || Z);
        }
      });
    }
    function y() {
      p.forEach(function (D) {
        return D();
      }),
        (p = []);
    }
    return E;
  };
}
var Yy = qs(),
  Gy = [Do, Mo, Lo, No],
  Xy = qs({ defaultModifiers: Gy }),
  Jy = [Do, Mo, Lo, No, Uu, Hu, Ku, Fu, Bu],
  Qy = qs({ defaultModifiers: Jy });
const Zy = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterMain: Nu,
        afterRead: Ou,
        afterWrite: Lu,
        applyStyles: No,
        arrow: Fu,
        auto: Ws,
        basePlacements: ur,
        beforeMain: Su,
        beforeRead: wu,
        beforeWrite: xu,
        bottom: te,
        clippingParents: yu,
        computeStyles: Lo,
        createPopper: Qy,
        createPopperBase: Yy,
        createPopperLite: Xy,
        detectOverflow: rr,
        end: Zn,
        eventListeners: Do,
        flip: Hu,
        hide: Bu,
        left: Ht,
        main: Cu,
        modifierPhases: Du,
        offset: Uu,
        placements: So,
        popper: jn,
        popperGenerator: qs,
        popperOffsets: Mo,
        preventOverflow: Ku,
        read: Tu,
        reference: Au,
        right: ee,
        start: yn,
        top: jt,
        variationPlacements: Wi,
        viewport: Oo,
        write: Ru,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tA = uy(Zy);
/*!
 * Bootstrap v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (t, e) {
  (function (n, r) {
    t.exports = r(tA);
  })(cy, function (n) {
    function r(m) {
      if (m && m.__esModule) return m;
      const o = Object.create(null, {
        [Symbol.toStringTag]: { value: "Module" },
      });
      if (m) {
        for (const u in m)
          if (u !== "default") {
            const _ = Object.getOwnPropertyDescriptor(m, u);
            Object.defineProperty(
              o,
              u,
              _.get ? _ : { enumerable: !0, get: () => m[u] }
            );
          }
      }
      return (o.default = m), Object.freeze(o);
    }
    const s = r(n),
      i = 1e6,
      a = 1e3,
      l = "transitionend",
      c = (m) =>
        m == null
          ? `${m}`
          : Object.prototype.toString
              .call(m)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase(),
      d = (m) => {
        do m += Math.floor(Math.random() * i);
        while (document.getElementById(m));
        return m;
      },
      f = (m) => {
        let o = m.getAttribute("data-bs-target");
        if (!o || o === "#") {
          let u = m.getAttribute("href");
          if (!u || (!u.includes("#") && !u.startsWith("."))) return null;
          u.includes("#") && !u.startsWith("#") && (u = `#${u.split("#")[1]}`),
            (o = u && u !== "#" ? u.trim() : null);
        }
        return o;
      },
      p = (m) => {
        const o = f(m);
        return o && document.querySelector(o) ? o : null;
      },
      g = (m) => {
        const o = f(m);
        return o ? document.querySelector(o) : null;
      },
      E = (m) => {
        if (!m) return 0;
        let { transitionDuration: o, transitionDelay: u } =
          window.getComputedStyle(m);
        const _ = Number.parseFloat(o),
          O = Number.parseFloat(u);
        return !_ && !O
          ? 0
          : ((o = o.split(",")[0]),
            (u = u.split(",")[0]),
            (Number.parseFloat(o) + Number.parseFloat(u)) * a);
      },
      b = (m) => {
        m.dispatchEvent(new Event(l));
      },
      y = (m) =>
        !m || typeof m != "object"
          ? !1
          : (typeof m.jquery != "undefined" && (m = m[0]),
            typeof m.nodeType != "undefined"),
      D = (m) =>
        y(m)
          ? m.jquery
            ? m[0]
            : m
          : typeof m == "string" && m.length > 0
          ? document.querySelector(m)
          : null,
      x = (m) => {
        if (!y(m) || m.getClientRects().length === 0) return !1;
        const o =
            getComputedStyle(m).getPropertyValue("visibility") === "visible",
          u = m.closest("details:not([open])");
        if (!u) return o;
        if (u !== m) {
          const _ = m.closest("summary");
          if ((_ && _.parentNode !== u) || _ === null) return !1;
        }
        return o;
      },
      F = (m) =>
        !m ||
        m.nodeType !== Node.ELEMENT_NODE ||
        m.classList.contains("disabled")
          ? !0
          : typeof m.disabled != "undefined"
          ? m.disabled
          : m.hasAttribute("disabled") &&
            m.getAttribute("disabled") !== "false",
      M = (m) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof m.getRootNode == "function") {
          const o = m.getRootNode();
          return o instanceof ShadowRoot ? o : null;
        }
        return m instanceof ShadowRoot
          ? m
          : m.parentNode
          ? M(m.parentNode)
          : null;
      },
      H = () => {},
      q = (m) => {
        m.offsetHeight;
      },
      Z = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      rt = [],
      Y = (m) => {
        document.readyState === "loading"
          ? (rt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const o of rt) o();
              }),
            rt.push(m))
          : m();
      },
      J = () => document.documentElement.dir === "rtl",
      G = (m) => {
        Y(() => {
          const o = Z();
          if (o) {
            const u = m.NAME,
              _ = o.fn[u];
            (o.fn[u] = m.jQueryInterface),
              (o.fn[u].Constructor = m),
              (o.fn[u].noConflict = () => ((o.fn[u] = _), m.jQueryInterface));
          }
        });
      },
      et = (m) => {
        typeof m == "function" && m();
      },
      mt = (m, o, u = !0) => {
        if (!u) {
          et(m);
          return;
        }
        const _ = 5,
          O = E(o) + _;
        let V = !1;
        const $ = ({ target: lt }) => {
          lt === o && ((V = !0), o.removeEventListener(l, $), et(m));
        };
        o.addEventListener(l, $),
          setTimeout(() => {
            V || b(o);
          }, O);
      },
      _t = (m, o, u, _) => {
        const O = m.length;
        let V = m.indexOf(o);
        return V === -1
          ? !u && _
            ? m[O - 1]
            : m[0]
          : ((V += u ? 1 : -1),
            _ && (V = (V + O) % O),
            m[Math.max(0, Math.min(V, O - 1))]);
      },
      Nt = /[^.]*(?=\..*)\.|.*/,
      kt = /\..*/,
      ct = /::\d+$/,
      nt = {};
    let ut = 1;
    const Tt = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Bt = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function Lt(m, o) {
      return (o && `${o}::${ut++}`) || m.uidEvent || ut++;
    }
    function wt(m) {
      const o = Lt(m);
      return (m.uidEvent = o), (nt[o] = nt[o] || {}), nt[o];
    }
    function Yt(m, o) {
      return function u(_) {
        return (
          h(_, { delegateTarget: m }),
          u.oneOff && A.off(m, _.type, o),
          o.apply(m, [_])
        );
      };
    }
    function Gt(m, o, u) {
      return function _(O) {
        const V = m.querySelectorAll(o);
        for (let { target: $ } = O; $ && $ !== this; $ = $.parentNode)
          for (const lt of V)
            if (lt === $)
              return (
                h(O, { delegateTarget: $ }),
                _.oneOff && A.off(m, O.type, o, u),
                u.apply($, [O])
              );
      };
    }
    function S(m, o, u = null) {
      return Object.values(m).find(
        (_) => _.callable === o && _.delegationSelector === u
      );
    }
    function U(m, o, u) {
      const _ = typeof o == "string",
        O = _ ? u : o || u;
      let V = Et(m);
      return Bt.has(V) || (V = m), [_, O, V];
    }
    function j(m, o, u, _, O) {
      if (typeof o != "string" || !m) return;
      let [V, $, lt] = U(o, u, _);
      o in Tt &&
        ($ = ((Ip) =>
          function (In) {
            if (
              !In.relatedTarget ||
              (In.relatedTarget !== In.delegateTarget &&
                !In.delegateTarget.contains(In.relatedTarget))
            )
              return Ip.call(this, In);
          })($));
      const Ut = wt(m),
        Jt = Ut[lt] || (Ut[lt] = {}),
        Ct = S(Jt, $, V ? u : null);
      if (Ct) {
        Ct.oneOff = Ct.oneOff && O;
        return;
      }
      const ce = Lt($, o.replace(Nt, "")),
        ve = V ? Gt(m, u, $) : Yt(m, $);
      (ve.delegationSelector = V ? u : null),
        (ve.callable = $),
        (ve.oneOff = O),
        (ve.uidEvent = ce),
        (Jt[ce] = ve),
        m.addEventListener(lt, ve, V);
    }
    function K(m, o, u, _, O) {
      const V = S(o[u], _, O);
      V && (m.removeEventListener(u, V, Boolean(O)), delete o[u][V.uidEvent]);
    }
    function at(m, o, u, _) {
      const O = o[u] || {};
      for (const V of Object.keys(O))
        if (V.includes(_)) {
          const $ = O[V];
          K(m, o, u, $.callable, $.delegationSelector);
        }
    }
    function Et(m) {
      return (m = m.replace(kt, "")), Tt[m] || m;
    }
    const A = {
      on(m, o, u, _) {
        j(m, o, u, _, !1);
      },
      one(m, o, u, _) {
        j(m, o, u, _, !0);
      },
      off(m, o, u, _) {
        if (typeof o != "string" || !m) return;
        const [O, V, $] = U(o, u, _),
          lt = $ !== o,
          Ut = wt(m),
          Jt = Ut[$] || {},
          Ct = o.startsWith(".");
        if (typeof V != "undefined") {
          if (!Object.keys(Jt).length) return;
          K(m, Ut, $, V, O ? u : null);
          return;
        }
        if (Ct) for (const ce of Object.keys(Ut)) at(m, Ut, ce, o.slice(1));
        for (const ce of Object.keys(Jt)) {
          const ve = ce.replace(ct, "");
          if (!lt || o.includes(ve)) {
            const gr = Jt[ce];
            K(m, Ut, $, gr.callable, gr.delegationSelector);
          }
        }
      },
      trigger(m, o, u) {
        if (typeof o != "string" || !m) return null;
        const _ = Z(),
          O = Et(o),
          V = o !== O;
        let $ = null,
          lt = !0,
          Ut = !0,
          Jt = !1;
        V &&
          _ &&
          (($ = _.Event(o, u)),
          _(m).trigger($),
          (lt = !$.isPropagationStopped()),
          (Ut = !$.isImmediatePropagationStopped()),
          (Jt = $.isDefaultPrevented()));
        let Ct = new Event(o, { bubbles: lt, cancelable: !0 });
        return (
          (Ct = h(Ct, u)),
          Jt && Ct.preventDefault(),
          Ut && m.dispatchEvent(Ct),
          Ct.defaultPrevented && $ && $.preventDefault(),
          Ct
        );
      },
    };
    function h(m, o) {
      for (const [u, _] of Object.entries(o || {}))
        try {
          m[u] = _;
        } catch (O) {
          Object.defineProperty(m, u, {
            configurable: !0,
            get() {
              return _;
            },
          });
        }
      return m;
    }
    const v = new Map(),
      w = {
        set(m, o, u) {
          v.has(m) || v.set(m, new Map());
          const _ = v.get(m);
          if (!_.has(o) && _.size !== 0) {
            console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(_.keys())[0]
              }.`
            );
            return;
          }
          _.set(o, u);
        },
        get(m, o) {
          return (v.has(m) && v.get(m).get(o)) || null;
        },
        remove(m, o) {
          if (!v.has(m)) return;
          const u = v.get(m);
          u.delete(o), u.size === 0 && v.delete(m);
        },
      };
    function T(m) {
      if (m === "true") return !0;
      if (m === "false") return !1;
      if (m === Number(m).toString()) return Number(m);
      if (m === "" || m === "null") return null;
      if (typeof m != "string") return m;
      try {
        return JSON.parse(decodeURIComponent(m));
      } catch (o) {
        return m;
      }
    }
    function N(m) {
      return m.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`);
    }
    const P = {
      setDataAttribute(m, o, u) {
        m.setAttribute(`data-bs-${N(o)}`, u);
      },
      removeDataAttribute(m, o) {
        m.removeAttribute(`data-bs-${N(o)}`);
      },
      getDataAttributes(m) {
        if (!m) return {};
        const o = {},
          u = Object.keys(m.dataset).filter(
            (_) => _.startsWith("bs") && !_.startsWith("bsConfig")
          );
        for (const _ of u) {
          let O = _.replace(/^bs/, "");
          (O = O.charAt(0).toLowerCase() + O.slice(1, O.length)),
            (o[O] = T(m.dataset[_]));
        }
        return o;
      },
      getDataAttribute(m, o) {
        return T(m.getAttribute(`data-bs-${N(o)}`));
      },
    };
    class B {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(o) {
        return (
          (o = this._mergeConfigObj(o)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      _configAfterMerge(o) {
        return o;
      }
      _mergeConfigObj(o, u) {
        const _ = y(u) ? P.getDataAttribute(u, "config") : {};
        return Pt(
          Pt(
            Pt(Pt({}, this.constructor.Default), typeof _ == "object" ? _ : {}),
            y(u) ? P.getDataAttributes(u) : {}
          ),
          typeof o == "object" ? o : {}
        );
      }
      _typeCheckConfig(o, u = this.constructor.DefaultType) {
        for (const _ of Object.keys(u)) {
          const O = u[_],
            V = o[_],
            $ = y(V) ? "element" : c(V);
          if (!new RegExp(O).test($))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${_}" provided type "${$}" but expected type "${O}".`
            );
        }
      }
    }
    const I = "5.2.3";
    class L extends B {
      constructor(o, u) {
        super(),
          (o = D(o)),
          o &&
            ((this._element = o),
            (this._config = this._getConfig(u)),
            w.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        w.remove(this._element, this.constructor.DATA_KEY),
          A.off(this._element, this.constructor.EVENT_KEY);
        for (const o of Object.getOwnPropertyNames(this)) this[o] = null;
      }
      _queueCallback(o, u, _ = !0) {
        mt(o, u, _);
      }
      _getConfig(o) {
        return (
          (o = this._mergeConfigObj(o, this._element)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      static getInstance(o) {
        return w.get(D(o), this.DATA_KEY);
      }
      static getOrCreateInstance(o, u = {}) {
        return (
          this.getInstance(o) || new this(o, typeof u == "object" ? u : null)
        );
      }
      static get VERSION() {
        return I;
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(o) {
        return `${o}${this.EVENT_KEY}`;
      }
    }
    const R = (m, o = "hide") => {
        const u = `click.dismiss${m.EVENT_KEY}`,
          _ = m.NAME;
        A.on(document, u, `[data-bs-dismiss="${_}"]`, function (O) {
          if (
            (["A", "AREA"].includes(this.tagName) && O.preventDefault(),
            F(this))
          )
            return;
          const V = g(this) || this.closest(`.${_}`);
          m.getOrCreateInstance(V)[o]();
        });
      },
      X = "alert",
      z = ".bs.alert",
      Q = `close${z}`,
      st = `closed${z}`,
      gt = "fade",
      ft = "show";
    class bt extends L {
      static get NAME() {
        return X;
      }
      close() {
        if (A.trigger(this._element, Q).defaultPrevented) return;
        this._element.classList.remove(ft);
        const u = this._element.classList.contains(gt);
        this._queueCallback(() => this._destroyElement(), this._element, u);
      }
      _destroyElement() {
        this._element.remove(), A.trigger(this._element, st), this.dispose();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = bt.getOrCreateInstance(this);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    R(bt, "close"), G(bt);
    const Xt = "button",
      jr = ".bs.button",
      en = ".data-api",
      Hr = "active",
      Dt = '[data-bs-toggle="button"]',
      ne = `click${jr}${en}`;
    class je extends L {
      static get NAME() {
        return Xt;
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle(Hr)
        );
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = je.getOrCreateInstance(this);
          o === "toggle" && u[o]();
        });
      }
    }
    A.on(document, ne, Dt, (m) => {
      m.preventDefault();
      const o = m.target.closest(Dt);
      je.getOrCreateInstance(o).toggle();
    }),
      G(je);
    const ot = {
        find(m, o = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(o, m));
        },
        findOne(m, o = document.documentElement) {
          return Element.prototype.querySelector.call(o, m);
        },
        children(m, o) {
          return [].concat(...m.children).filter((u) => u.matches(o));
        },
        parents(m, o) {
          const u = [];
          let _ = m.parentNode.closest(o);
          for (; _; ) u.push(_), (_ = _.parentNode.closest(o));
          return u;
        },
        prev(m, o) {
          let u = m.previousElementSibling;
          for (; u; ) {
            if (u.matches(o)) return [u];
            u = u.previousElementSibling;
          }
          return [];
        },
        next(m, o) {
          let u = m.nextElementSibling;
          for (; u; ) {
            if (u.matches(o)) return [u];
            u = u.nextElementSibling;
          }
          return [];
        },
        focusableChildren(m) {
          const o = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((u) => `${u}:not([tabindex^="-"])`)
            .join(",");
          return this.find(o, m).filter((u) => !F(u) && x(u));
        },
      },
      tf = "swipe",
      Sn = ".bs.swipe",
      ef = `touchstart${Sn}`,
      nf = `touchmove${Sn}`,
      rf = `touchend${Sn}`,
      sf = `pointerdown${Sn}`,
      of = `pointerup${Sn}`,
      af = "touch",
      lf = "pen",
      cf = "pointer-event",
      uf = 40,
      ff = { endCallback: null, leftCallback: null, rightCallback: null },
      df = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class Br extends B {
      constructor(o, u) {
        super(),
          (this._element = o),
          !(!o || !Br.isSupported()) &&
            ((this._config = this._getConfig(u)),
            (this._deltaX = 0),
            (this._supportPointerEvents = Boolean(window.PointerEvent)),
            this._initEvents());
      }
      static get Default() {
        return ff;
      }
      static get DefaultType() {
        return df;
      }
      static get NAME() {
        return tf;
      }
      dispose() {
        A.off(this._element, Sn);
      }
      _start(o) {
        if (!this._supportPointerEvents) {
          this._deltaX = o.touches[0].clientX;
          return;
        }
        this._eventIsPointerPenTouch(o) && (this._deltaX = o.clientX);
      }
      _end(o) {
        this._eventIsPointerPenTouch(o) &&
          (this._deltaX = o.clientX - this._deltaX),
          this._handleSwipe(),
          et(this._config.endCallback);
      }
      _move(o) {
        this._deltaX =
          o.touches && o.touches.length > 1
            ? 0
            : o.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const o = Math.abs(this._deltaX);
        if (o <= uf) return;
        const u = o / this._deltaX;
        (this._deltaX = 0),
          u &&
            et(u > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (A.on(this._element, sf, (o) => this._start(o)),
            A.on(this._element, of, (o) => this._end(o)),
            this._element.classList.add(cf))
          : (A.on(this._element, ef, (o) => this._start(o)),
            A.on(this._element, nf, (o) => this._move(o)),
            A.on(this._element, rf, (o) => this._end(o)));
      }
      _eventIsPointerPenTouch(o) {
        return (
          this._supportPointerEvents &&
          (o.pointerType === lf || o.pointerType === af)
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const hf = "carousel",
      He = ".bs.carousel",
      jo = ".data-api",
      pf = "ArrowLeft",
      mf = "ArrowRight",
      _f = 500,
      dr = "next",
      Cn = "prev",
      Nn = "left",
      Ur = "right",
      gf = `slide${He}`,
      Gs = `slid${He}`,
      vf = `keydown${He}`,
      Ef = `mouseenter${He}`,
      bf = `mouseleave${He}`,
      yf = `dragstart${He}`,
      Af = `load${He}${jo}`,
      wf = `click${He}${jo}`,
      Ho = "carousel",
      Kr = "active",
      Tf = "slide",
      Of = "carousel-item-end",
      Sf = "carousel-item-start",
      Cf = "carousel-item-next",
      Nf = "carousel-item-prev",
      Bo = ".active",
      Uo = ".carousel-item",
      xf = Bo + Uo,
      Rf = ".carousel-item img",
      Lf = ".carousel-indicators",
      Df = "[data-bs-slide], [data-bs-slide-to]",
      Pf = '[data-bs-ride="carousel"]',
      If = { [pf]: Ur, [mf]: Nn },
      $f = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      Mf = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class xn extends L {
      constructor(o, u) {
        super(o, u),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = ot.findOne(Lf, this._element)),
          this._addEventListeners(),
          this._config.ride === Ho && this.cycle();
      }
      static get Default() {
        return $f;
      }
      static get DefaultType() {
        return Mf;
      }
      static get NAME() {
        return hf;
      }
      next() {
        this._slide(dr);
      }
      nextWhenVisible() {
        !document.hidden && x(this._element) && this.next();
      }
      prev() {
        this._slide(Cn);
      }
      pause() {
        this._isSliding && b(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        if (this._config.ride) {
          if (this._isSliding) {
            A.one(this._element, Gs, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(o) {
        const u = this._getItems();
        if (o > u.length - 1 || o < 0) return;
        if (this._isSliding) {
          A.one(this._element, Gs, () => this.to(o));
          return;
        }
        const _ = this._getItemIndex(this._getActive());
        if (_ === o) return;
        const O = o > _ ? dr : Cn;
        this._slide(O, u[o]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(o) {
        return (o.defaultInterval = o.interval), o;
      }
      _addEventListeners() {
        this._config.keyboard &&
          A.on(this._element, vf, (o) => this._keydown(o)),
          this._config.pause === "hover" &&
            (A.on(this._element, Ef, () => this.pause()),
            A.on(this._element, bf, () => this._maybeEnableCycle())),
          this._config.touch &&
            Br.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const _ of ot.find(Rf, this._element))
          A.on(_, yf, (O) => O.preventDefault());
        const u = {
          leftCallback: () => this._slide(this._directionToOrder(Nn)),
          rightCallback: () => this._slide(this._directionToOrder(Ur)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                _f + this._config.interval
              )));
          },
        };
        this._swipeHelper = new Br(this._element, u);
      }
      _keydown(o) {
        if (/input|textarea/i.test(o.target.tagName)) return;
        const u = If[o.key];
        u && (o.preventDefault(), this._slide(this._directionToOrder(u)));
      }
      _getItemIndex(o) {
        return this._getItems().indexOf(o);
      }
      _setActiveIndicatorElement(o) {
        if (!this._indicatorsElement) return;
        const u = ot.findOne(Bo, this._indicatorsElement);
        u.classList.remove(Kr), u.removeAttribute("aria-current");
        const _ = ot.findOne(
          `[data-bs-slide-to="${o}"]`,
          this._indicatorsElement
        );
        _ && (_.classList.add(Kr), _.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const o = this._activeElement || this._getActive();
        if (!o) return;
        const u = Number.parseInt(o.getAttribute("data-bs-interval"), 10);
        this._config.interval = u || this._config.defaultInterval;
      }
      _slide(o, u = null) {
        if (this._isSliding) return;
        const _ = this._getActive(),
          O = o === dr,
          V = u || _t(this._getItems(), _, O, this._config.wrap);
        if (V === _) return;
        const $ = this._getItemIndex(V),
          lt = (gr) =>
            A.trigger(this._element, gr, {
              relatedTarget: V,
              direction: this._orderToDirection(o),
              from: this._getItemIndex(_),
              to: $,
            });
        if (lt(gf).defaultPrevented || !_ || !V) return;
        const Jt = Boolean(this._interval);
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement($),
          (this._activeElement = V);
        const Ct = O ? Sf : Of,
          ce = O ? Cf : Nf;
        V.classList.add(ce), q(V), _.classList.add(Ct), V.classList.add(Ct);
        const ve = () => {
          V.classList.remove(Ct, ce),
            V.classList.add(Kr),
            _.classList.remove(Kr, ce, Ct),
            (this._isSliding = !1),
            lt(Gs);
        };
        this._queueCallback(ve, _, this._isAnimated()), Jt && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(Tf);
      }
      _getActive() {
        return ot.findOne(xf, this._element);
      }
      _getItems() {
        return ot.find(Uo, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(o) {
        return J() ? (o === Nn ? Cn : dr) : o === Nn ? dr : Cn;
      }
      _orderToDirection(o) {
        return J() ? (o === Cn ? Nn : Ur) : o === Cn ? Ur : Nn;
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = xn.getOrCreateInstance(this, o);
          if (typeof o == "number") {
            u.to(o);
            return;
          }
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    A.on(document, wf, Df, function (m) {
      const o = g(this);
      if (!o || !o.classList.contains(Ho)) return;
      m.preventDefault();
      const u = xn.getOrCreateInstance(o),
        _ = this.getAttribute("data-bs-slide-to");
      if (_) {
        u.to(_), u._maybeEnableCycle();
        return;
      }
      if (P.getDataAttribute(this, "slide") === "next") {
        u.next(), u._maybeEnableCycle();
        return;
      }
      u.prev(), u._maybeEnableCycle();
    }),
      A.on(window, Af, () => {
        const m = ot.find(Pf);
        for (const o of m) xn.getOrCreateInstance(o);
      }),
      G(xn);
    const kf = "collapse",
      hr = ".bs.collapse",
      Ff = ".data-api",
      Vf = `show${hr}`,
      jf = `shown${hr}`,
      Hf = `hide${hr}`,
      Bf = `hidden${hr}`,
      Uf = `click${hr}${Ff}`,
      Xs = "show",
      Rn = "collapse",
      Wr = "collapsing",
      Kf = "collapsed",
      Wf = `:scope .${Rn} .${Rn}`,
      zf = "collapse-horizontal",
      qf = "width",
      Yf = "height",
      Gf = ".collapse.show, .collapse.collapsing",
      Js = '[data-bs-toggle="collapse"]',
      Xf = { parent: null, toggle: !0 },
      Jf = { parent: "(null|element)", toggle: "boolean" };
    class Ln extends L {
      constructor(o, u) {
        super(o, u), (this._isTransitioning = !1), (this._triggerArray = []);
        const _ = ot.find(Js);
        for (const O of _) {
          const V = p(O),
            $ = ot.find(V).filter((lt) => lt === this._element);
          V !== null && $.length && this._triggerArray.push(O);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Xf;
      }
      static get DefaultType() {
        return Jf;
      }
      static get NAME() {
        return kf;
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let o = [];
        if (
          (this._config.parent &&
            (o = this._getFirstLevelChildren(Gf)
              .filter((lt) => lt !== this._element)
              .map((lt) => Ln.getOrCreateInstance(lt, { toggle: !1 }))),
          (o.length && o[0]._isTransitioning) ||
            A.trigger(this._element, Vf).defaultPrevented)
        )
          return;
        for (const lt of o) lt.hide();
        const _ = this._getDimension();
        this._element.classList.remove(Rn),
          this._element.classList.add(Wr),
          (this._element.style[_] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const O = () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Wr),
              this._element.classList.add(Rn, Xs),
              (this._element.style[_] = ""),
              A.trigger(this._element, jf);
          },
          $ = `scroll${_[0].toUpperCase() + _.slice(1)}`;
        this._queueCallback(O, this._element, !0),
          (this._element.style[_] = `${this._element[$]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          A.trigger(this._element, Hf).defaultPrevented
        )
          return;
        const u = this._getDimension();
        (this._element.style[u] = `${
          this._element.getBoundingClientRect()[u]
        }px`),
          q(this._element),
          this._element.classList.add(Wr),
          this._element.classList.remove(Rn, Xs);
        for (const O of this._triggerArray) {
          const V = g(O);
          V && !this._isShown(V) && this._addAriaAndCollapsedClass([O], !1);
        }
        this._isTransitioning = !0;
        const _ = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Wr),
            this._element.classList.add(Rn),
            A.trigger(this._element, Bf);
        };
        (this._element.style[u] = ""),
          this._queueCallback(_, this._element, !0);
      }
      _isShown(o = this._element) {
        return o.classList.contains(Xs);
      }
      _configAfterMerge(o) {
        return (o.toggle = Boolean(o.toggle)), (o.parent = D(o.parent)), o;
      }
      _getDimension() {
        return this._element.classList.contains(zf) ? qf : Yf;
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const o = this._getFirstLevelChildren(Js);
        for (const u of o) {
          const _ = g(u);
          _ && this._addAriaAndCollapsedClass([u], this._isShown(_));
        }
      }
      _getFirstLevelChildren(o) {
        const u = ot.find(Wf, this._config.parent);
        return ot.find(o, this._config.parent).filter((_) => !u.includes(_));
      }
      _addAriaAndCollapsedClass(o, u) {
        if (o.length)
          for (const _ of o)
            _.classList.toggle(Kf, !u), _.setAttribute("aria-expanded", u);
      }
      static jQueryInterface(o) {
        const u = {};
        return (
          typeof o == "string" && /show|hide/.test(o) && (u.toggle = !1),
          this.each(function () {
            const _ = Ln.getOrCreateInstance(this, u);
            if (typeof o == "string") {
              if (typeof _[o] == "undefined")
                throw new TypeError(`No method named "${o}"`);
              _[o]();
            }
          })
        );
      }
    }
    A.on(document, Uf, Js, function (m) {
      (m.target.tagName === "A" ||
        (m.delegateTarget && m.delegateTarget.tagName === "A")) &&
        m.preventDefault();
      const o = p(this),
        u = ot.find(o);
      for (const _ of u) Ln.getOrCreateInstance(_, { toggle: !1 }).toggle();
    }),
      G(Ln);
    const Ko = "dropdown",
      nn = ".bs.dropdown",
      Qs = ".data-api",
      Qf = "Escape",
      Wo = "Tab",
      Zf = "ArrowUp",
      zo = "ArrowDown",
      td = 2,
      ed = `hide${nn}`,
      nd = `hidden${nn}`,
      rd = `show${nn}`,
      sd = `shown${nn}`,
      qo = `click${nn}${Qs}`,
      Yo = `keydown${nn}${Qs}`,
      id = `keyup${nn}${Qs}`,
      Dn = "show",
      od = "dropup",
      ad = "dropend",
      ld = "dropstart",
      cd = "dropup-center",
      ud = "dropdown-center",
      rn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      fd = `${rn}.${Dn}`,
      zr = ".dropdown-menu",
      dd = ".navbar",
      hd = ".navbar-nav",
      pd = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      md = J() ? "top-end" : "top-start",
      _d = J() ? "top-start" : "top-end",
      gd = J() ? "bottom-end" : "bottom-start",
      vd = J() ? "bottom-start" : "bottom-end",
      Ed = J() ? "left-start" : "right-start",
      bd = J() ? "right-start" : "left-start",
      yd = "top",
      Ad = "bottom",
      wd = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      Td = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class ae extends L {
      constructor(o, u) {
        super(o, u),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            ot.next(this._element, zr)[0] ||
            ot.prev(this._element, zr)[0] ||
            ot.findOne(zr, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return wd;
      }
      static get DefaultType() {
        return Td;
      }
      static get NAME() {
        return Ko;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (F(this._element) || this._isShown()) return;
        const o = { relatedTarget: this._element };
        if (!A.trigger(this._element, rd, o).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(hd))
          )
            for (const _ of [].concat(...document.body.children))
              A.on(_, "mouseover", H);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Dn),
            this._element.classList.add(Dn),
            A.trigger(this._element, sd, o);
        }
      }
      hide() {
        if (F(this._element) || !this._isShown()) return;
        const o = { relatedTarget: this._element };
        this._completeHide(o);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(o) {
        if (!A.trigger(this._element, ed, o).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const _ of [].concat(...document.body.children))
              A.off(_, "mouseover", H);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Dn),
            this._element.classList.remove(Dn),
            this._element.setAttribute("aria-expanded", "false"),
            P.removeDataAttribute(this._menu, "popper"),
            A.trigger(this._element, nd, o);
        }
      }
      _getConfig(o) {
        if (
          ((o = super._getConfig(o)),
          typeof o.reference == "object" &&
            !y(o.reference) &&
            typeof o.reference.getBoundingClientRect != "function")
        )
          throw new TypeError(
            `${Ko.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return o;
      }
      _createPopper() {
        if (typeof s == "undefined")
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let o = this._element;
        this._config.reference === "parent"
          ? (o = this._parent)
          : y(this._config.reference)
          ? (o = D(this._config.reference))
          : typeof this._config.reference == "object" &&
            (o = this._config.reference);
        const u = this._getPopperConfig();
        this._popper = s.createPopper(o, this._menu, u);
      }
      _isShown() {
        return this._menu.classList.contains(Dn);
      }
      _getPlacement() {
        const o = this._parent;
        if (o.classList.contains(ad)) return Ed;
        if (o.classList.contains(ld)) return bd;
        if (o.classList.contains(cd)) return yd;
        if (o.classList.contains(ud)) return Ad;
        const u =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return o.classList.contains(od) ? (u ? _d : md) : u ? vd : gd;
      }
      _detectNavbar() {
        return this._element.closest(dd) !== null;
      }
      _getOffset() {
        const { offset: o } = this._config;
        return typeof o == "string"
          ? o.split(",").map((u) => Number.parseInt(u, 10))
          : typeof o == "function"
          ? (u) => o(u, this._element)
          : o;
      }
      _getPopperConfig() {
        const o = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (P.setDataAttribute(this._menu, "popper", "static"),
            (o.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          Pt(
            Pt({}, o),
            typeof this._config.popperConfig == "function"
              ? this._config.popperConfig(o)
              : this._config.popperConfig
          )
        );
      }
      _selectMenuItem({ key: o, target: u }) {
        const _ = ot.find(pd, this._menu).filter((O) => x(O));
        _.length && _t(_, u, o === zo, !_.includes(u)).focus();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = ae.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof u[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
      static clearMenus(o) {
        if (o.button === td || (o.type === "keyup" && o.key !== Wo)) return;
        const u = ot.find(fd);
        for (const _ of u) {
          const O = ae.getInstance(_);
          if (!O || O._config.autoClose === !1) continue;
          const V = o.composedPath(),
            $ = V.includes(O._menu);
          if (
            V.includes(O._element) ||
            (O._config.autoClose === "inside" && !$) ||
            (O._config.autoClose === "outside" && $) ||
            (O._menu.contains(o.target) &&
              ((o.type === "keyup" && o.key === Wo) ||
                /input|select|option|textarea|form/i.test(o.target.tagName)))
          )
            continue;
          const lt = { relatedTarget: O._element };
          o.type === "click" && (lt.clickEvent = o), O._completeHide(lt);
        }
      }
      static dataApiKeydownHandler(o) {
        const u = /input|textarea/i.test(o.target.tagName),
          _ = o.key === Qf,
          O = [Zf, zo].includes(o.key);
        if ((!O && !_) || (u && !_)) return;
        o.preventDefault();
        const V = this.matches(rn)
            ? this
            : ot.prev(this, rn)[0] ||
              ot.next(this, rn)[0] ||
              ot.findOne(rn, o.delegateTarget.parentNode),
          $ = ae.getOrCreateInstance(V);
        if (O) {
          o.stopPropagation(), $.show(), $._selectMenuItem(o);
          return;
        }
        $._isShown() && (o.stopPropagation(), $.hide(), V.focus());
      }
    }
    A.on(document, Yo, rn, ae.dataApiKeydownHandler),
      A.on(document, Yo, zr, ae.dataApiKeydownHandler),
      A.on(document, qo, ae.clearMenus),
      A.on(document, id, ae.clearMenus),
      A.on(document, qo, rn, function (m) {
        m.preventDefault(), ae.getOrCreateInstance(this).toggle();
      }),
      G(ae);
    const Go = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Xo = ".sticky-top",
      qr = "padding-right",
      Jo = "margin-right";
    class Zs {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const o = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - o);
      }
      hide() {
        const o = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, qr, (u) => u + o),
          this._setElementAttributes(Go, qr, (u) => u + o),
          this._setElementAttributes(Xo, Jo, (u) => u - o);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, qr),
          this._resetElementAttributes(Go, qr),
          this._resetElementAttributes(Xo, Jo);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(o, u, _) {
        const O = this.getWidth(),
          V = ($) => {
            if ($ !== this._element && window.innerWidth > $.clientWidth + O)
              return;
            this._saveInitialAttribute($, u);
            const lt = window.getComputedStyle($).getPropertyValue(u);
            $.style.setProperty(u, `${_(Number.parseFloat(lt))}px`);
          };
        this._applyManipulationCallback(o, V);
      }
      _saveInitialAttribute(o, u) {
        const _ = o.style.getPropertyValue(u);
        _ && P.setDataAttribute(o, u, _);
      }
      _resetElementAttributes(o, u) {
        const _ = (O) => {
          const V = P.getDataAttribute(O, u);
          if (V === null) {
            O.style.removeProperty(u);
            return;
          }
          P.removeDataAttribute(O, u), O.style.setProperty(u, V);
        };
        this._applyManipulationCallback(o, _);
      }
      _applyManipulationCallback(o, u) {
        if (y(o)) {
          u(o);
          return;
        }
        for (const _ of ot.find(o, this._element)) u(_);
      }
    }
    const Qo = "backdrop",
      Od = "fade",
      Zo = "show",
      ta = `mousedown.bs.${Qo}`,
      Sd = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      Cd = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class ea extends B {
      constructor(o) {
        super(),
          (this._config = this._getConfig(o)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return Sd;
      }
      static get DefaultType() {
        return Cd;
      }
      static get NAME() {
        return Qo;
      }
      show(o) {
        if (!this._config.isVisible) {
          et(o);
          return;
        }
        this._append();
        const u = this._getElement();
        this._config.isAnimated && q(u),
          u.classList.add(Zo),
          this._emulateAnimation(() => {
            et(o);
          });
      }
      hide(o) {
        if (!this._config.isVisible) {
          et(o);
          return;
        }
        this._getElement().classList.remove(Zo),
          this._emulateAnimation(() => {
            this.dispose(), et(o);
          });
      }
      dispose() {
        this._isAppended &&
          (A.off(this._element, ta),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const o = document.createElement("div");
          (o.className = this._config.className),
            this._config.isAnimated && o.classList.add(Od),
            (this._element = o);
        }
        return this._element;
      }
      _configAfterMerge(o) {
        return (o.rootElement = D(o.rootElement)), o;
      }
      _append() {
        if (this._isAppended) return;
        const o = this._getElement();
        this._config.rootElement.append(o),
          A.on(o, ta, () => {
            et(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(o) {
        mt(o, this._getElement(), this._config.isAnimated);
      }
    }
    const Nd = "focustrap",
      Yr = ".bs.focustrap",
      xd = `focusin${Yr}`,
      Rd = `keydown.tab${Yr}`,
      Ld = "Tab",
      Dd = "forward",
      na = "backward",
      Pd = { autofocus: !0, trapElement: null },
      Id = { autofocus: "boolean", trapElement: "element" };
    class ra extends B {
      constructor(o) {
        super(),
          (this._config = this._getConfig(o)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return Pd;
      }
      static get DefaultType() {
        return Id;
      }
      static get NAME() {
        return Nd;
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          A.off(document, Yr),
          A.on(document, xd, (o) => this._handleFocusin(o)),
          A.on(document, Rd, (o) => this._handleKeydown(o)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), A.off(document, Yr));
      }
      _handleFocusin(o) {
        const { trapElement: u } = this._config;
        if (o.target === document || o.target === u || u.contains(o.target))
          return;
        const _ = ot.focusableChildren(u);
        _.length === 0
          ? u.focus()
          : this._lastTabNavDirection === na
          ? _[_.length - 1].focus()
          : _[0].focus();
      }
      _handleKeydown(o) {
        o.key === Ld && (this._lastTabNavDirection = o.shiftKey ? na : Dd);
      }
    }
    const $d = "modal",
      le = ".bs.modal",
      Md = ".data-api",
      kd = "Escape",
      Fd = `hide${le}`,
      Vd = `hidePrevented${le}`,
      sa = `hidden${le}`,
      ia = `show${le}`,
      jd = `shown${le}`,
      Hd = `resize${le}`,
      Bd = `click.dismiss${le}`,
      Ud = `mousedown.dismiss${le}`,
      Kd = `keydown.dismiss${le}`,
      Wd = `click${le}${Md}`,
      oa = "modal-open",
      zd = "fade",
      aa = "show",
      ti = "modal-static",
      qd = ".modal.show",
      Yd = ".modal-dialog",
      Gd = ".modal-body",
      Xd = '[data-bs-toggle="modal"]',
      Jd = { backdrop: !0, focus: !0, keyboard: !0 },
      Qd = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class sn extends L {
      constructor(o, u) {
        super(o, u),
          (this._dialog = ot.findOne(Yd, this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Zs()),
          this._addEventListeners();
      }
      static get Default() {
        return Jd;
      }
      static get DefaultType() {
        return Qd;
      }
      static get NAME() {
        return $d;
      }
      toggle(o) {
        return this._isShown ? this.hide() : this.show(o);
      }
      show(o) {
        this._isShown ||
          this._isTransitioning ||
          A.trigger(this._element, ia, { relatedTarget: o }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(oa),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(o)));
      }
      hide() {
        !this._isShown ||
          this._isTransitioning ||
          A.trigger(this._element, Fd).defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(aa),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          ));
      }
      dispose() {
        for (const o of [window, this._dialog]) A.off(o, le);
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new ea({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new ra({ trapElement: this._element });
      }
      _showElement(o) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const u = ot.findOne(Gd, this._dialog);
        u && (u.scrollTop = 0),
          q(this._element),
          this._element.classList.add(aa);
        const _ = () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            A.trigger(this._element, jd, { relatedTarget: o });
        };
        this._queueCallback(_, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        A.on(this._element, Kd, (o) => {
          if (o.key === kd) {
            if (this._config.keyboard) {
              o.preventDefault(), this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }),
          A.on(window, Hd, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          A.on(this._element, Ud, (o) => {
            A.one(this._element, Bd, (u) => {
              if (!(this._element !== o.target || this._element !== u.target)) {
                if (this._config.backdrop === "static") {
                  this._triggerBackdropTransition();
                  return;
                }
                this._config.backdrop && this.hide();
              }
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(oa),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              A.trigger(this._element, sa);
          });
      }
      _isAnimated() {
        return this._element.classList.contains(zd);
      }
      _triggerBackdropTransition() {
        if (A.trigger(this._element, Vd).defaultPrevented) return;
        const u =
            this._element.scrollHeight > document.documentElement.clientHeight,
          _ = this._element.style.overflowY;
        _ === "hidden" ||
          this._element.classList.contains(ti) ||
          (u || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(ti),
          this._queueCallback(() => {
            this._element.classList.remove(ti),
              this._queueCallback(() => {
                this._element.style.overflowY = _;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const o =
            this._element.scrollHeight > document.documentElement.clientHeight,
          u = this._scrollBar.getWidth(),
          _ = u > 0;
        if (_ && !o) {
          const O = J() ? "paddingLeft" : "paddingRight";
          this._element.style[O] = `${u}px`;
        }
        if (!_ && o) {
          const O = J() ? "paddingRight" : "paddingLeft";
          this._element.style[O] = `${u}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(o, u) {
        return this.each(function () {
          const _ = sn.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof _[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            _[o](u);
          }
        });
      }
    }
    A.on(document, Wd, Xd, function (m) {
      const o = g(this);
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
        A.one(o, ia, (O) => {
          O.defaultPrevented ||
            A.one(o, sa, () => {
              x(this) && this.focus();
            });
        });
      const u = ot.findOne(qd);
      u && sn.getInstance(u).hide(), sn.getOrCreateInstance(o).toggle(this);
    }),
      R(sn),
      G(sn);
    const Zd = "offcanvas",
      xe = ".bs.offcanvas",
      la = ".data-api",
      th = `load${xe}${la}`,
      eh = "Escape",
      ca = "show",
      ua = "showing",
      fa = "hiding",
      nh = "offcanvas-backdrop",
      da = ".offcanvas.show",
      rh = `show${xe}`,
      sh = `shown${xe}`,
      ih = `hide${xe}`,
      ha = `hidePrevented${xe}`,
      pa = `hidden${xe}`,
      oh = `resize${xe}`,
      ah = `click${xe}${la}`,
      lh = `keydown.dismiss${xe}`,
      ch = '[data-bs-toggle="offcanvas"]',
      uh = { backdrop: !0, keyboard: !0, scroll: !1 },
      fh = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Re extends L {
      constructor(o, u) {
        super(o, u),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return uh;
      }
      static get DefaultType() {
        return fh;
      }
      static get NAME() {
        return Zd;
      }
      toggle(o) {
        return this._isShown ? this.hide() : this.show(o);
      }
      show(o) {
        if (
          this._isShown ||
          A.trigger(this._element, rh, { relatedTarget: o }).defaultPrevented
        )
          return;
        (this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new Zs().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(ua);
        const _ = () => {
          (!this._config.scroll || this._config.backdrop) &&
            this._focustrap.activate(),
            this._element.classList.add(ca),
            this._element.classList.remove(ua),
            A.trigger(this._element, sh, { relatedTarget: o });
        };
        this._queueCallback(_, this._element, !0);
      }
      hide() {
        if (!this._isShown || A.trigger(this._element, ih).defaultPrevented)
          return;
        this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(fa),
          this._backdrop.hide();
        const u = () => {
          this._element.classList.remove(ca, fa),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._config.scroll || new Zs().reset(),
            A.trigger(this._element, pa);
        };
        this._queueCallback(u, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const o = () => {
            if (this._config.backdrop === "static") {
              A.trigger(this._element, ha);
              return;
            }
            this.hide();
          },
          u = Boolean(this._config.backdrop);
        return new ea({
          className: nh,
          isVisible: u,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: u ? o : null,
        });
      }
      _initializeFocusTrap() {
        return new ra({ trapElement: this._element });
      }
      _addEventListeners() {
        A.on(this._element, lh, (o) => {
          if (o.key === eh) {
            if (!this._config.keyboard) {
              A.trigger(this._element, ha);
              return;
            }
            this.hide();
          }
        });
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Re.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    A.on(document, ah, ch, function (m) {
      const o = g(this);
      if ((["A", "AREA"].includes(this.tagName) && m.preventDefault(), F(this)))
        return;
      A.one(o, pa, () => {
        x(this) && this.focus();
      });
      const u = ot.findOne(da);
      u && u !== o && Re.getInstance(u).hide(),
        Re.getOrCreateInstance(o).toggle(this);
    }),
      A.on(window, th, () => {
        for (const m of ot.find(da)) Re.getOrCreateInstance(m).show();
      }),
      A.on(window, oh, () => {
        for (const m of ot.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(m).position !== "fixed" &&
            Re.getOrCreateInstance(m).hide();
      }),
      R(Re),
      G(Re);
    const dh = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      hh = /^aria-[\w-]*$/i,
      ph = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      mh =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      _h = (m, o) => {
        const u = m.nodeName.toLowerCase();
        return o.includes(u)
          ? dh.has(u)
            ? Boolean(ph.test(m.nodeValue) || mh.test(m.nodeValue))
            : !0
          : o.filter((_) => _ instanceof RegExp).some((_) => _.test(u));
      },
      ma = {
        "*": ["class", "dir", "id", "lang", "role", hh],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      };
    function gh(m, o, u) {
      if (!m.length) return m;
      if (u && typeof u == "function") return u(m);
      const O = new window.DOMParser().parseFromString(m, "text/html"),
        V = [].concat(...O.body.querySelectorAll("*"));
      for (const $ of V) {
        const lt = $.nodeName.toLowerCase();
        if (!Object.keys(o).includes(lt)) {
          $.remove();
          continue;
        }
        const Ut = [].concat(...$.attributes),
          Jt = [].concat(o["*"] || [], o[lt] || []);
        for (const Ct of Ut) _h(Ct, Jt) || $.removeAttribute(Ct.nodeName);
      }
      return O.body.innerHTML;
    }
    const vh = "TemplateFactory",
      Eh = {
        allowList: ma,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      bh = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      yh = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class Ah extends B {
      constructor(o) {
        super(), (this._config = this._getConfig(o));
      }
      static get Default() {
        return Eh;
      }
      static get DefaultType() {
        return bh;
      }
      static get NAME() {
        return vh;
      }
      getContent() {
        return Object.values(this._config.content)
          .map((o) => this._resolvePossibleFunction(o))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(o) {
        return (
          this._checkContent(o),
          (this._config.content = Pt(Pt({}, this._config.content), o)),
          this
        );
      }
      toHtml() {
        const o = document.createElement("div");
        o.innerHTML = this._maybeSanitize(this._config.template);
        for (const [O, V] of Object.entries(this._config.content))
          this._setContent(o, V, O);
        const u = o.children[0],
          _ = this._resolvePossibleFunction(this._config.extraClass);
        return _ && u.classList.add(..._.split(" ")), u;
      }
      _typeCheckConfig(o) {
        super._typeCheckConfig(o), this._checkContent(o.content);
      }
      _checkContent(o) {
        for (const [u, _] of Object.entries(o))
          super._typeCheckConfig({ selector: u, entry: _ }, yh);
      }
      _setContent(o, u, _) {
        const O = ot.findOne(_, o);
        if (O) {
          if (((u = this._resolvePossibleFunction(u)), !u)) {
            O.remove();
            return;
          }
          if (y(u)) {
            this._putElementInTemplate(D(u), O);
            return;
          }
          if (this._config.html) {
            O.innerHTML = this._maybeSanitize(u);
            return;
          }
          O.textContent = u;
        }
      }
      _maybeSanitize(o) {
        return this._config.sanitize
          ? gh(o, this._config.allowList, this._config.sanitizeFn)
          : o;
      }
      _resolvePossibleFunction(o) {
        return typeof o == "function" ? o(this) : o;
      }
      _putElementInTemplate(o, u) {
        if (this._config.html) {
          (u.innerHTML = ""), u.append(o);
          return;
        }
        u.textContent = o.textContent;
      }
    }
    const wh = "tooltip",
      Th = new Set(["sanitize", "allowList", "sanitizeFn"]),
      ei = "fade",
      Oh = "modal",
      Gr = "show",
      Sh = ".tooltip-inner",
      _a = `.${Oh}`,
      ga = "hide.bs.modal",
      pr = "hover",
      ni = "focus",
      Ch = "click",
      Nh = "manual",
      xh = "hide",
      Rh = "hidden",
      Lh = "show",
      Dh = "shown",
      Ph = "inserted",
      Ih = "click",
      $h = "focusin",
      Mh = "focusout",
      kh = "mouseenter",
      Fh = "mouseleave",
      Vh = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: J() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: J() ? "right" : "left",
      },
      jh = {
        allowList: ma,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      Hh = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class on extends L {
      constructor(o, u) {
        if (typeof s == "undefined")
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(o, u),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return jh;
      }
      static get DefaultType() {
        return Hh;
      }
      static get NAME() {
        return wh;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        if (this._isEnabled) {
          if (
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown())
          ) {
            this._leave();
            return;
          }
          this._enter();
        }
      }
      dispose() {
        clearTimeout(this._timeout),
          A.off(this._element.closest(_a), ga, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const o = A.trigger(this._element, this.constructor.eventName(Lh)),
          _ = (
            M(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (o.defaultPrevented || !_) return;
        this._disposePopper();
        const O = this._getTipElement();
        this._element.setAttribute("aria-describedby", O.getAttribute("id"));
        const { container: V } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (V.append(O),
            A.trigger(this._element, this.constructor.eventName(Ph))),
          (this._popper = this._createPopper(O)),
          O.classList.add(Gr),
          "ontouchstart" in document.documentElement)
        )
          for (const lt of [].concat(...document.body.children))
            A.on(lt, "mouseover", H);
        const $ = () => {
          A.trigger(this._element, this.constructor.eventName(Dh)),
            this._isHovered === !1 && this._leave(),
            (this._isHovered = !1);
        };
        this._queueCallback($, this.tip, this._isAnimated());
      }
      hide() {
        if (
          !this._isShown() ||
          A.trigger(this._element, this.constructor.eventName(xh))
            .defaultPrevented
        )
          return;
        if (
          (this._getTipElement().classList.remove(Gr),
          "ontouchstart" in document.documentElement)
        )
          for (const O of [].concat(...document.body.children))
            A.off(O, "mouseover", H);
        (this._activeTrigger[Ch] = !1),
          (this._activeTrigger[ni] = !1),
          (this._activeTrigger[pr] = !1),
          (this._isHovered = null);
        const _ = () => {
          this._isWithActiveTrigger() ||
            (this._isHovered || this._disposePopper(),
            this._element.removeAttribute("aria-describedby"),
            A.trigger(this._element, this.constructor.eventName(Rh)));
        };
        this._queueCallback(_, this.tip, this._isAnimated());
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return Boolean(this._getTitle());
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(o) {
        const u = this._getTemplateFactory(o).toHtml();
        if (!u) return null;
        u.classList.remove(ei, Gr),
          u.classList.add(`bs-${this.constructor.NAME}-auto`);
        const _ = d(this.constructor.NAME).toString();
        return (
          u.setAttribute("id", _), this._isAnimated() && u.classList.add(ei), u
        );
      }
      setContent(o) {
        (this._newContent = o),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(o) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(o)
            : (this._templateFactory = new Ah(
                Zr(Pt({}, this._config), {
                  content: o,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })
              )),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { [Sh]: this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(o) {
        return this.constructor.getOrCreateInstance(
          o.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(ei))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Gr);
      }
      _createPopper(o) {
        const u =
            typeof this._config.placement == "function"
              ? this._config.placement.call(this, o, this._element)
              : this._config.placement,
          _ = Vh[u.toUpperCase()];
        return s.createPopper(this._element, o, this._getPopperConfig(_));
      }
      _getOffset() {
        const { offset: o } = this._config;
        return typeof o == "string"
          ? o.split(",").map((u) => Number.parseInt(u, 10))
          : typeof o == "function"
          ? (u) => o(u, this._element)
          : o;
      }
      _resolvePossibleFunction(o) {
        return typeof o == "function" ? o.call(this._element) : o;
      }
      _getPopperConfig(o) {
        const u = {
          placement: o,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (_) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  _.state.placement
                );
              },
            },
          ],
        };
        return Pt(
          Pt({}, u),
          typeof this._config.popperConfig == "function"
            ? this._config.popperConfig(u)
            : this._config.popperConfig
        );
      }
      _setListeners() {
        const o = this._config.trigger.split(" ");
        for (const u of o)
          if (u === "click")
            A.on(
              this._element,
              this.constructor.eventName(Ih),
              this._config.selector,
              (_) => {
                this._initializeOnDelegatedTarget(_).toggle();
              }
            );
          else if (u !== Nh) {
            const _ =
                u === pr
                  ? this.constructor.eventName(kh)
                  : this.constructor.eventName($h),
              O =
                u === pr
                  ? this.constructor.eventName(Fh)
                  : this.constructor.eventName(Mh);
            A.on(this._element, _, this._config.selector, (V) => {
              const $ = this._initializeOnDelegatedTarget(V);
              ($._activeTrigger[V.type === "focusin" ? ni : pr] = !0),
                $._enter();
            }),
              A.on(this._element, O, this._config.selector, (V) => {
                const $ = this._initializeOnDelegatedTarget(V);
                ($._activeTrigger[V.type === "focusout" ? ni : pr] =
                  $._element.contains(V.relatedTarget)),
                  $._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          A.on(this._element.closest(_a), ga, this._hideModalHandler);
      }
      _fixTitle() {
        const o = this._element.getAttribute("title");
        o &&
          (!this._element.getAttribute("aria-label") &&
            !this._element.textContent.trim() &&
            this._element.setAttribute("aria-label", o),
          this._element.setAttribute("data-bs-original-title", o),
          this._element.removeAttribute("title"));
      }
      _enter() {
        if (this._isShown() || this._isHovered) {
          this._isHovered = !0;
          return;
        }
        (this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show);
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(o, u) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(o, u));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(o) {
        const u = P.getDataAttributes(this._element);
        for (const _ of Object.keys(u)) Th.has(_) && delete u[_];
        return (
          (o = Pt(Pt({}, u), typeof o == "object" && o ? o : {})),
          (o = this._mergeConfigObj(o)),
          (o = this._configAfterMerge(o)),
          this._typeCheckConfig(o),
          o
        );
      }
      _configAfterMerge(o) {
        return (
          (o.container = o.container === !1 ? document.body : D(o.container)),
          typeof o.delay == "number" &&
            (o.delay = { show: o.delay, hide: o.delay }),
          typeof o.title == "number" && (o.title = o.title.toString()),
          typeof o.content == "number" && (o.content = o.content.toString()),
          o
        );
      }
      _getDelegateConfig() {
        const o = {};
        for (const u in this._config)
          this.constructor.Default[u] !== this._config[u] &&
            (o[u] = this._config[u]);
        return (o.selector = !1), (o.trigger = "manual"), o;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = on.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof u[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    G(on);
    const Bh = "popover",
      Uh = ".popover-header",
      Kh = ".popover-body",
      Wh = Zr(Pt({}, on.Default), {
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      }),
      zh = Zr(Pt({}, on.DefaultType), {
        content: "(null|string|element|function)",
      });
    class Xr extends on {
      static get Default() {
        return Wh;
      }
      static get DefaultType() {
        return zh;
      }
      static get NAME() {
        return Bh;
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return { [Uh]: this._getTitle(), [Kh]: this._getContent() };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = Xr.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof u[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    G(Xr);
    const qh = "scrollspy",
      ri = ".bs.scrollspy",
      Yh = ".data-api",
      Gh = `activate${ri}`,
      va = `click${ri}`,
      Xh = `load${ri}${Yh}`,
      Jh = "dropdown-item",
      Pn = "active",
      Qh = '[data-bs-spy="scroll"]',
      si = "[href]",
      Zh = ".nav, .list-group",
      Ea = ".nav-link",
      tp = `${Ea}, .nav-item > ${Ea}, .list-group-item`,
      ep = ".dropdown",
      np = ".dropdown-toggle",
      rp = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      sp = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class mr extends L {
      constructor(o, u) {
        super(o, u),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return rp;
      }
      static get DefaultType() {
        return sp;
      }
      static get NAME() {
        return qh;
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const o of this._observableSections.values())
          this._observer.observe(o);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(o) {
        return (
          (o.target = D(o.target) || document.body),
          (o.rootMargin = o.offset ? `${o.offset}px 0px -30%` : o.rootMargin),
          typeof o.threshold == "string" &&
            (o.threshold = o.threshold
              .split(",")
              .map((u) => Number.parseFloat(u))),
          o
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (A.off(this._config.target, va),
          A.on(this._config.target, va, si, (o) => {
            const u = this._observableSections.get(o.target.hash);
            if (u) {
              o.preventDefault();
              const _ = this._rootElement || window,
                O = u.offsetTop - this._element.offsetTop;
              if (_.scrollTo) {
                _.scrollTo({ top: O, behavior: "smooth" });
                return;
              }
              _.scrollTop = O;
            }
          }));
      }
      _getNewObserver() {
        const o = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((u) => this._observerCallback(u), o);
      }
      _observerCallback(o) {
        const u = ($) => this._targetLinks.get(`#${$.target.id}`),
          _ = ($) => {
            (this._previousScrollData.visibleEntryTop = $.target.offsetTop),
              this._process(u($));
          },
          O = (this._rootElement || document.documentElement).scrollTop,
          V = O >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = O;
        for (const $ of o) {
          if (!$.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(u($));
            continue;
          }
          const lt =
            $.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (V && lt) {
            if ((_($), !O)) return;
            continue;
          }
          !V && !lt && _($);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const o = ot.find(si, this._config.target);
        for (const u of o) {
          if (!u.hash || F(u)) continue;
          const _ = ot.findOne(u.hash, this._element);
          x(_) &&
            (this._targetLinks.set(u.hash, u),
            this._observableSections.set(u.hash, _));
        }
      }
      _process(o) {
        this._activeTarget !== o &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = o),
          o.classList.add(Pn),
          this._activateParents(o),
          A.trigger(this._element, Gh, { relatedTarget: o }));
      }
      _activateParents(o) {
        if (o.classList.contains(Jh)) {
          ot.findOne(np, o.closest(ep)).classList.add(Pn);
          return;
        }
        for (const u of ot.parents(o, Zh))
          for (const _ of ot.prev(u, tp)) _.classList.add(Pn);
      }
      _clearActiveClass(o) {
        o.classList.remove(Pn);
        const u = ot.find(`${si}.${Pn}`, o);
        for (const _ of u) _.classList.remove(Pn);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = mr.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    A.on(window, Xh, () => {
      for (const m of ot.find(Qh)) mr.getOrCreateInstance(m);
    }),
      G(mr);
    const ip = "tab",
      an = ".bs.tab",
      op = `hide${an}`,
      ap = `hidden${an}`,
      lp = `show${an}`,
      cp = `shown${an}`,
      up = `click${an}`,
      fp = `keydown${an}`,
      dp = `load${an}`,
      hp = "ArrowLeft",
      ba = "ArrowRight",
      pp = "ArrowUp",
      ya = "ArrowDown",
      ln = "active",
      Aa = "fade",
      ii = "show",
      mp = "dropdown",
      _p = ".dropdown-toggle",
      gp = ".dropdown-menu",
      oi = ":not(.dropdown-toggle)",
      vp = '.list-group, .nav, [role="tablist"]',
      Ep = ".nav-item, .list-group-item",
      bp = `.nav-link${oi}, .list-group-item${oi}, [role="tab"]${oi}`,
      wa =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      ai = `${bp}, ${wa}`,
      yp = `.${ln}[data-bs-toggle="tab"], .${ln}[data-bs-toggle="pill"], .${ln}[data-bs-toggle="list"]`;
    class cn extends L {
      constructor(o) {
        super(o),
          (this._parent = this._element.closest(vp)),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            A.on(this._element, fp, (u) => this._keydown(u)));
      }
      static get NAME() {
        return ip;
      }
      show() {
        const o = this._element;
        if (this._elemIsActive(o)) return;
        const u = this._getActiveElem(),
          _ = u ? A.trigger(u, op, { relatedTarget: o }) : null;
        A.trigger(o, lp, { relatedTarget: u }).defaultPrevented ||
          (_ && _.defaultPrevented) ||
          (this._deactivate(u, o), this._activate(o, u));
      }
      _activate(o, u) {
        if (!o) return;
        o.classList.add(ln), this._activate(g(o));
        const _ = () => {
          if (o.getAttribute("role") !== "tab") {
            o.classList.add(ii);
            return;
          }
          o.removeAttribute("tabindex"),
            o.setAttribute("aria-selected", !0),
            this._toggleDropDown(o, !0),
            A.trigger(o, cp, { relatedTarget: u });
        };
        this._queueCallback(_, o, o.classList.contains(Aa));
      }
      _deactivate(o, u) {
        if (!o) return;
        o.classList.remove(ln), o.blur(), this._deactivate(g(o));
        const _ = () => {
          if (o.getAttribute("role") !== "tab") {
            o.classList.remove(ii);
            return;
          }
          o.setAttribute("aria-selected", !1),
            o.setAttribute("tabindex", "-1"),
            this._toggleDropDown(o, !1),
            A.trigger(o, ap, { relatedTarget: u });
        };
        this._queueCallback(_, o, o.classList.contains(Aa));
      }
      _keydown(o) {
        if (![hp, ba, pp, ya].includes(o.key)) return;
        o.stopPropagation(), o.preventDefault();
        const u = [ba, ya].includes(o.key),
          _ = _t(
            this._getChildren().filter((O) => !F(O)),
            o.target,
            u,
            !0
          );
        _ && (_.focus({ preventScroll: !0 }), cn.getOrCreateInstance(_).show());
      }
      _getChildren() {
        return ot.find(ai, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((o) => this._elemIsActive(o)) || null;
      }
      _setInitialAttributes(o, u) {
        this._setAttributeIfNotExists(o, "role", "tablist");
        for (const _ of u) this._setInitialAttributesOnChild(_);
      }
      _setInitialAttributesOnChild(o) {
        o = this._getInnerElement(o);
        const u = this._elemIsActive(o),
          _ = this._getOuterElement(o);
        o.setAttribute("aria-selected", u),
          _ !== o && this._setAttributeIfNotExists(_, "role", "presentation"),
          u || o.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(o, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(o);
      }
      _setInitialAttributesOnTargetPanel(o) {
        const u = g(o);
        u &&
          (this._setAttributeIfNotExists(u, "role", "tabpanel"),
          o.id &&
            this._setAttributeIfNotExists(u, "aria-labelledby", `#${o.id}`));
      }
      _toggleDropDown(o, u) {
        const _ = this._getOuterElement(o);
        if (!_.classList.contains(mp)) return;
        const O = (V, $) => {
          const lt = ot.findOne(V, _);
          lt && lt.classList.toggle($, u);
        };
        O(_p, ln), O(gp, ii), _.setAttribute("aria-expanded", u);
      }
      _setAttributeIfNotExists(o, u, _) {
        o.hasAttribute(u) || o.setAttribute(u, _);
      }
      _elemIsActive(o) {
        return o.classList.contains(ln);
      }
      _getInnerElement(o) {
        return o.matches(ai) ? o : ot.findOne(ai, o);
      }
      _getOuterElement(o) {
        return o.closest(Ep) || o;
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = cn.getOrCreateInstance(this);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
    }
    A.on(document, up, wa, function (m) {
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
        !F(this) && cn.getOrCreateInstance(this).show();
    }),
      A.on(window, dp, () => {
        for (const m of ot.find(yp)) cn.getOrCreateInstance(m);
      }),
      G(cn);
    const Ap = "toast",
      Be = ".bs.toast",
      wp = `mouseover${Be}`,
      Tp = `mouseout${Be}`,
      Op = `focusin${Be}`,
      Sp = `focusout${Be}`,
      Cp = `hide${Be}`,
      Np = `hidden${Be}`,
      xp = `show${Be}`,
      Rp = `shown${Be}`,
      Lp = "fade",
      Ta = "hide",
      Jr = "show",
      Qr = "showing",
      Dp = { animation: "boolean", autohide: "boolean", delay: "number" },
      Pp = { animation: !0, autohide: !0, delay: 5e3 };
    class _r extends L {
      constructor(o, u) {
        super(o, u),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return Pp;
      }
      static get DefaultType() {
        return Dp;
      }
      static get NAME() {
        return Ap;
      }
      show() {
        if (A.trigger(this._element, xp).defaultPrevented) return;
        this._clearTimeout(),
          this._config.animation && this._element.classList.add(Lp);
        const u = () => {
          this._element.classList.remove(Qr),
            A.trigger(this._element, Rp),
            this._maybeScheduleHide();
        };
        this._element.classList.remove(Ta),
          q(this._element),
          this._element.classList.add(Jr, Qr),
          this._queueCallback(u, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || A.trigger(this._element, Cp).defaultPrevented)
          return;
        const u = () => {
          this._element.classList.add(Ta),
            this._element.classList.remove(Qr, Jr),
            A.trigger(this._element, Np);
        };
        this._element.classList.add(Qr),
          this._queueCallback(u, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(Jr),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Jr);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(o, u) {
        switch (o.type) {
          case "mouseover":
          case "mouseout": {
            this._hasMouseInteraction = u;
            break;
          }
          case "focusin":
          case "focusout": {
            this._hasKeyboardInteraction = u;
            break;
          }
        }
        if (u) {
          this._clearTimeout();
          return;
        }
        const _ = o.relatedTarget;
        this._element === _ ||
          this._element.contains(_) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        A.on(this._element, wp, (o) => this._onInteraction(o, !0)),
          A.on(this._element, Tp, (o) => this._onInteraction(o, !1)),
          A.on(this._element, Op, (o) => this._onInteraction(o, !0)),
          A.on(this._element, Sp, (o) => this._onInteraction(o, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = _r.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof u[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    return (
      R(_r),
      G(_r),
      {
        Alert: bt,
        Button: je,
        Carousel: xn,
        Collapse: Ln,
        Dropdown: ae,
        Modal: sn,
        Offcanvas: Re,
        Popover: Xr,
        ScrollSpy: mr,
        Tab: cn,
        Toast: _r,
        Tooltip: on,
      }
    );
  });
})(fy);
const eA = "/assets/savings-pig-744c88c9.png";
const nA = {
    data() {
      return {};
    },
  },
  rA = (t) => ($r("data-v-87fa167d"), (t = t()), Mr(), t),
  sA = { class: "container main-cont" },
  iA = { class: "row row-cols-2" },
  oA = { class: "col" },
  aA = { id: "second-art" },
  lA = rA(() =>
    k(
      "div",
      { class: "col" },
      [k("img", { class: "logo-image", alt: "", src: eA })],
      -1
    )
  ),
  cA = Fs(
    '<div class="container px-4" data-v-87fa167d><div class="row gx-5" data-v-87fa167d><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>Front-end Utvecklare</h4><p data-v-87fa167d> Vi söker nu en tekniskt kunnig frontend utvecklare som har en solid grund inom HTML, Javascript, React, Vue och React Native. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>Full-stack Utvecklare</h4><p data-v-87fa167d> Vi söker en motiverad och duktig utvecklare som brinner för att leverera hög kvalité både på framsidan och baksidan av digitala tjänster. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>HR Ansvarig</h4><p data-v-87fa167d> Har du erfarenhet av och stort intresse för strategiskt HR-arbete? Den här tjänsten passar dig med goda ledaregenskaper. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div></div></div>',
    1
  );
function uA(t, e, n, r, s, i) {
  const a = vn("ChildComponent");
  return (
    de(),
    he(
      Wt,
      null,
      [
        k("div", sA, [
          k("div", iA, [
            k("div", oA, [
              k("h1", null, [
                Fc(
                  " Vi bevittnar utvecklingen av en helt ny generation av finansiella tillgångar. För finansiella teknologer representerar denna utveckling av den finansiella marknadsinfrastrukturen en karriärmöjlighet som bara inträffar en gång. "
                ),
                k(
                  "article",
                  aA,
                  " På " +
                    Vt(t.$route.params.OneParameter) +
                    " Ipsum griper vi denna möjlighet. Vi är en sammanhållen men decentraliserad grupp högt erfarna ingenjörer och affärsmän baserade i New York, Sverige och runt om i världen. Vi bygger på bästa praxis från både traditionella marknader och kryptoekosystemet, samt inkorporerar bästa-av-båda-världars expertis i en utökbar digital tillgångshandelplattform som gör det möjligt för institutionella marknadsdeltagare att smidigt interagera med varandra via en enda tillgångspunkt. ",
                  1
                ),
              ]),
            ]),
            lA,
          ]),
        ]),
        cA,
        Ot(a),
      ],
      64
    )
  );
}
const fA = wn(nA, [
    ["render", uA],
    ["__scopeId", "data-v-87fa167d"],
  ]),
  dA = Yv({
    history: uv(),
    routes: [
      { component: gE, path: "/CalculatorMain" },
      { component: ly, path: "/" },
      { component: fA, path: "/About/:OneParameter" },
    ],
  });
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var hA = "store";
function fr(t, e) {
  Object.keys(t).forEach(function (n) {
    return e(t[n], n);
  });
}
function pA(t) {
  return t !== null && typeof t == "object";
}
function mA(t) {
  return t && typeof t.then == "function";
}
function _A(t, e) {
  return function () {
    return t(e);
  };
}
function Wu(t, e, n) {
  return (
    e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
    function () {
      var r = e.indexOf(t);
      r > -1 && e.splice(r, 1);
    }
  );
}
function zu(t, e) {
  (t._actions = Object.create(null)),
    (t._mutations = Object.create(null)),
    (t._wrappedGetters = Object.create(null)),
    (t._modulesNamespaceMap = Object.create(null));
  var n = t.state;
  Ys(t, n, [], t._modules.root, !0), ko(t, n, e);
}
function ko(t, e, n) {
  var r = t._state,
    s = t._scope;
  (t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
  var i = t._wrappedGetters,
    a = {},
    l = {},
    c = Zp(!0);
  c.run(function () {
    fr(i, function (d, f) {
      (a[f] = _A(d, t)),
        (l[f] = Qt(function () {
          return a[f]();
        })),
        Object.defineProperty(t.getters, f, {
          get: function () {
            return l[f].value;
          },
          enumerable: !0,
        });
    });
  }),
    (t._state = ar({ data: e })),
    (t._scope = c),
    t.strict && yA(t),
    r &&
      n &&
      t._withCommit(function () {
        r.data = null;
      }),
    s && s.stop();
}
function Ys(t, e, n, r, s) {
  var i = !n.length,
    a = t._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = r)),
    !i && !s)
  ) {
    var l = Fo(e, n.slice(0, -1)),
      c = n[n.length - 1];
    t._withCommit(function () {
      l[c] = r.state;
    });
  }
  var d = (r.context = gA(t, a, n));
  r.forEachMutation(function (f, p) {
    var g = a + p;
    vA(t, g, f, d);
  }),
    r.forEachAction(function (f, p) {
      var g = f.root ? p : a + p,
        E = f.handler || f;
      EA(t, g, E, d);
    }),
    r.forEachGetter(function (f, p) {
      var g = a + p;
      bA(t, g, f, d);
    }),
    r.forEachChild(function (f, p) {
      Ys(t, e, n.concat(p), f, s);
    });
}
function gA(t, e, n) {
  var r = e === "",
    s = {
      dispatch: r
        ? t.dispatch
        : function (i, a, l) {
            var c = Os(i, a, l),
              d = c.payload,
              f = c.options,
              p = c.type;
            return (!f || !f.root) && (p = e + p), t.dispatch(p, d);
          },
      commit: r
        ? t.commit
        : function (i, a, l) {
            var c = Os(i, a, l),
              d = c.payload,
              f = c.options,
              p = c.type;
            (!f || !f.root) && (p = e + p), t.commit(p, d, f);
          },
    };
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return t.getters;
            }
          : function () {
              return qu(t, e);
            },
      },
      state: {
        get: function () {
          return Fo(t.state, n);
        },
      },
    }),
    s
  );
}
function qu(t, e) {
  if (!t._makeLocalGettersCache[e]) {
    var n = {},
      r = e.length;
    Object.keys(t.getters).forEach(function (s) {
      if (s.slice(0, r) === e) {
        var i = s.slice(r);
        Object.defineProperty(n, i, {
          get: function () {
            return t.getters[s];
          },
          enumerable: !0,
        });
      }
    }),
      (t._makeLocalGettersCache[e] = n);
  }
  return t._makeLocalGettersCache[e];
}
function vA(t, e, n, r) {
  var s = t._mutations[e] || (t._mutations[e] = []);
  s.push(function (a) {
    n.call(t, r.state, a);
  });
}
function EA(t, e, n, r) {
  var s = t._actions[e] || (t._actions[e] = []);
  s.push(function (a) {
    var l = n.call(
      t,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: t.getters,
        rootState: t.state,
      },
      a
    );
    return (
      mA(l) || (l = Promise.resolve(l)),
      t._devtoolHook
        ? l.catch(function (c) {
            throw (t._devtoolHook.emit("vuex:error", c), c);
          })
        : l
    );
  });
}
function bA(t, e, n, r) {
  t._wrappedGetters[e] ||
    (t._wrappedGetters[e] = function (i) {
      return n(r.state, r.getters, i.state, i.getters);
    });
}
function yA(t) {
  qn(
    function () {
      return t._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" }
  );
}
function Fo(t, e) {
  return e.reduce(function (n, r) {
    return n[r];
  }, t);
}
function Os(t, e, n) {
  return (
    pA(t) && t.type && ((n = e), (e = t), (t = t.type)),
    { type: t, payload: e, options: n }
  );
}
var AA = "vuex bindings",
  jl = "vuex:mutations",
  yi = "vuex:actions",
  kn = "vuex",
  wA = 0;
function TA(t, e) {
  Wg(
    {
      id: "org.vuejs.vuex",
      app: t,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [AA],
    },
    function (n) {
      n.addTimelineLayer({ id: jl, label: "Vuex Mutations", color: Hl }),
        n.addTimelineLayer({ id: yi, label: "Vuex Actions", color: Hl }),
        n.addInspector({
          id: kn,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === t && r.inspectorId === kn)
            if (r.filter) {
              var s = [];
              Ju(s, e._modules.root, r.filter, ""), (r.rootNodes = s);
            } else r.rootNodes = [Xu(e._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === t && r.inspectorId === kn) {
            var s = r.nodeId;
            qu(e, s),
              (r.state = CA(
                xA(e._modules, s),
                s === "root" ? e.getters : e._makeLocalGettersCache,
                s
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === t && r.inspectorId === kn) {
            var s = r.nodeId,
              i = r.path;
            s !== "root" && (i = s.split("/").filter(Boolean).concat(i)),
              e._withCommit(function () {
                r.set(e._state.data, i, r.state.value);
              });
          }
        }),
        e.subscribe(function (r, s) {
          var i = {};
          r.payload && (i.payload = r.payload),
            (i.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(kn),
            n.sendInspectorState(kn),
            n.addTimelineEvent({
              layerId: jl,
              event: { time: Date.now(), title: r.type, data: i },
            });
        }),
        e.subscribeAction({
          before: function (r, s) {
            var i = {};
            r.payload && (i.payload = r.payload),
              (r._id = wA++),
              (r._time = Date.now()),
              (i.state = s),
              n.addTimelineEvent({
                layerId: yi,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: "start",
                  data: i,
                },
              });
          },
          after: function (r, s) {
            var i = {},
              a = Date.now() - r._time;
            (i.duration = {
              _custom: {
                type: "duration",
                display: a + "ms",
                tooltip: "Action duration",
                value: a,
              },
            }),
              r.payload && (i.payload = r.payload),
              (i.state = s),
              n.addTimelineEvent({
                layerId: yi,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: "end",
                  data: i,
                },
              });
          },
        });
    }
  );
}
var Hl = 8702998,
  OA = 6710886,
  SA = 16777215,
  Yu = { label: "namespaced", textColor: SA, backgroundColor: OA };
function Gu(t) {
  return t && t !== "root" ? t.split("/").slice(-2, -1)[0] : "Root";
}
function Xu(t, e) {
  return {
    id: e || "root",
    label: Gu(e),
    tags: t.namespaced ? [Yu] : [],
    children: Object.keys(t._children).map(function (n) {
      return Xu(t._children[n], e + n + "/");
    }),
  };
}
function Ju(t, e, n, r) {
  r.includes(n) &&
    t.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: e.namespaced ? [Yu] : [],
    }),
    Object.keys(e._children).forEach(function (s) {
      Ju(t, e._children[s], n, r + s + "/");
    });
}
function CA(t, e, n) {
  e = n === "root" ? e : e[n];
  var r = Object.keys(e),
    s = {
      state: Object.keys(t.state).map(function (a) {
        return { key: a, editable: !0, value: t.state[a] };
      }),
    };
  if (r.length) {
    var i = NA(e);
    s.getters = Object.keys(i).map(function (a) {
      return {
        key: a.endsWith("/") ? Gu(a) : a,
        editable: !1,
        value: Yi(function () {
          return i[a];
        }),
      };
    });
  }
  return s;
}
function NA(t) {
  var e = {};
  return (
    Object.keys(t).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var s = e,
          i = r.pop();
        r.forEach(function (a) {
          s[a] ||
            (s[a] = {
              _custom: {
                value: {},
                display: a,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (s = s[a]._custom.value);
        }),
          (s[i] = Yi(function () {
            return t[n];
          }));
      } else
        e[n] = Yi(function () {
          return t[n];
        });
    }),
    e
  );
}
function xA(t, e) {
  var n = e.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, s, i) {
      var a = r[s];
      if (!a)
        throw new Error('Missing module "' + s + '" for path "' + e + '".');
      return i === n.length - 1 ? a : a._children;
    },
    e === "root" ? t : t.root._children
  );
}
function Yi(t) {
  try {
    return t();
  } catch (e) {
    return e;
  }
}
var ge = function (e, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = e);
    var r = e.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  Qu = { namespaced: { configurable: !0 } };
Qu.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
ge.prototype.addChild = function (e, n) {
  this._children[e] = n;
};
ge.prototype.removeChild = function (e) {
  delete this._children[e];
};
ge.prototype.getChild = function (e) {
  return this._children[e];
};
ge.prototype.hasChild = function (e) {
  return e in this._children;
};
ge.prototype.update = function (e) {
  (this._rawModule.namespaced = e.namespaced),
    e.actions && (this._rawModule.actions = e.actions),
    e.mutations && (this._rawModule.mutations = e.mutations),
    e.getters && (this._rawModule.getters = e.getters);
};
ge.prototype.forEachChild = function (e) {
  fr(this._children, e);
};
ge.prototype.forEachGetter = function (e) {
  this._rawModule.getters && fr(this._rawModule.getters, e);
};
ge.prototype.forEachAction = function (e) {
  this._rawModule.actions && fr(this._rawModule.actions, e);
};
ge.prototype.forEachMutation = function (e) {
  this._rawModule.mutations && fr(this._rawModule.mutations, e);
};
Object.defineProperties(ge.prototype, Qu);
var On = function (e) {
  this.register([], e, !1);
};
On.prototype.get = function (e) {
  return e.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
On.prototype.getNamespace = function (e) {
  var n = this.root;
  return e.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + "/" : "");
  }, "");
};
On.prototype.update = function (e) {
  Zu([], this.root, e);
};
On.prototype.register = function (e, n, r) {
  var s = this;
  r === void 0 && (r = !0);
  var i = new ge(n, r);
  if (e.length === 0) this.root = i;
  else {
    var a = this.get(e.slice(0, -1));
    a.addChild(e[e.length - 1], i);
  }
  n.modules &&
    fr(n.modules, function (l, c) {
      s.register(e.concat(c), l, r);
    });
};
On.prototype.unregister = function (e) {
  var n = this.get(e.slice(0, -1)),
    r = e[e.length - 1],
    s = n.getChild(r);
  s && s.runtime && n.removeChild(r);
};
On.prototype.isRegistered = function (e) {
  var n = this.get(e.slice(0, -1)),
    r = e[e.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Zu(t, e, n) {
  if ((e.update(n), n.modules))
    for (var r in n.modules) {
      if (!e.getChild(r)) return;
      Zu(t.concat(r), e.getChild(r), n.modules[r]);
    }
}
function RA(t) {
  return new qt(t);
}
var qt = function (e) {
    var n = this;
    e === void 0 && (e = {});
    var r = e.plugins;
    r === void 0 && (r = []);
    var s = e.strict;
    s === void 0 && (s = !1);
    var i = e.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new On(e)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = i);
    var a = this,
      l = this,
      c = l.dispatch,
      d = l.commit;
    (this.dispatch = function (g, E) {
      return c.call(a, g, E);
    }),
      (this.commit = function (g, E, b) {
        return d.call(a, g, E, b);
      }),
      (this.strict = s);
    var f = this._modules.root.state;
    Ys(this, f, [], this._modules.root),
      ko(this, f),
      r.forEach(function (p) {
        return p(n);
      });
  },
  Vo = { state: { configurable: !0 } };
qt.prototype.install = function (e, n) {
  e.provide(n || hA, this), (e.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && TA(e, this);
};
Vo.state.get = function () {
  return this._state.data;
};
Vo.state.set = function (t) {};
qt.prototype.commit = function (e, n, r) {
  var s = this,
    i = Os(e, n, r),
    a = i.type,
    l = i.payload,
    c = { type: a, payload: l },
    d = this._mutations[a];
  d &&
    (this._withCommit(function () {
      d.forEach(function (p) {
        p(l);
      });
    }),
    this._subscribers.slice().forEach(function (f) {
      return f(c, s.state);
    }));
};
qt.prototype.dispatch = function (e, n) {
  var r = this,
    s = Os(e, n),
    i = s.type,
    a = s.payload,
    l = { type: i, payload: a },
    c = this._actions[i];
  if (c) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (f) {
          return f.before;
        })
        .forEach(function (f) {
          return f.before(l, r.state);
        });
    } catch (f) {}
    var d =
      c.length > 1
        ? Promise.all(
            c.map(function (f) {
              return f(a);
            })
          )
        : c[0](a);
    return new Promise(function (f, p) {
      d.then(
        function (g) {
          try {
            r._actionSubscribers
              .filter(function (E) {
                return E.after;
              })
              .forEach(function (E) {
                return E.after(l, r.state);
              });
          } catch (E) {}
          f(g);
        },
        function (g) {
          try {
            r._actionSubscribers
              .filter(function (E) {
                return E.error;
              })
              .forEach(function (E) {
                return E.error(l, r.state, g);
              });
          } catch (E) {}
          p(g);
        }
      );
    });
  }
};
qt.prototype.subscribe = function (e, n) {
  return Wu(e, this._subscribers, n);
};
qt.prototype.subscribeAction = function (e, n) {
  var r = typeof e == "function" ? { before: e } : e;
  return Wu(r, this._actionSubscribers, n);
};
qt.prototype.watch = function (e, n, r) {
  var s = this;
  return qn(
    function () {
      return e(s.state, s.getters);
    },
    n,
    Object.assign({}, r)
  );
};
qt.prototype.replaceState = function (e) {
  var n = this;
  this._withCommit(function () {
    n._state.data = e;
  });
};
qt.prototype.registerModule = function (e, n, r) {
  r === void 0 && (r = {}),
    typeof e == "string" && (e = [e]),
    this._modules.register(e, n),
    Ys(this, this.state, e, this._modules.get(e), r.preserveState),
    ko(this, this.state);
};
qt.prototype.unregisterModule = function (e) {
  var n = this;
  typeof e == "string" && (e = [e]),
    this._modules.unregister(e),
    this._withCommit(function () {
      var r = Fo(n.state, e.slice(0, -1));
      delete r[e[e.length - 1]];
    }),
    zu(this);
};
qt.prototype.hasModule = function (e) {
  return typeof e == "string" && (e = [e]), this._modules.isRegistered(e);
};
qt.prototype.hotUpdate = function (e) {
  this._modules.update(e), zu(this, !0);
};
qt.prototype._withCommit = function (e) {
  var n = this._committing;
  (this._committing = !0), e(), (this._committing = n);
};
Object.defineProperties(qt.prototype, Vo);
const LA = {
    changeMainText(t) {
      (t.welcomeText =
        "Nu har du testat våran kalkylator. Varför inte slänga iväg ett email till oss nedanför?"),
        (t.welcomeTextLower = "");
    },
  },
  DA = {
    welcomeText:
      "Investera har aldrig varit enklare. Gör ditt framtida jag en tjänst och börja idag.",
    welcomeTextLower:
      "Ränta på ränta-effekten betyder att sparande kan öka i värde både av ränta på kapitalet och av ränta på tidigare utbetald ränta. Du får alltså ränta på den ränta som ditt sparande har genererat. Läs mer om hur ränta på ränta funkar, lär dig hur du räknar ut effekten och få koll på hur olika sparformer kan påverkas.",
  },
  PA = RA({ mutations: LA, state: DA, strict: !0 });
fg(kg).use(dA).use(PA).mount("#app");
