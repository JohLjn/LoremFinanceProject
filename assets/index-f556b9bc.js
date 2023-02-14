var $p = Object.defineProperty,
  Mp = Object.defineProperties;
var kp = Object.getOwnPropertyDescriptors;
var Oa = Object.getOwnPropertySymbols;
var Fp = Object.prototype.hasOwnProperty,
  Vp = Object.prototype.propertyIsEnumerable;
var Sa = (e, t, n) =>
    t in e
      ? $p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Pe = (e, t) => {
    for (var n in t || (t = {})) Fp.call(t, n) && Sa(e, n, t[n]);
    if (Oa) for (var n of Oa(t)) Vp.call(t, n) && Sa(e, n, t[n]);
    return e;
  },
  Zr = (e, t) => Mp(e, kp(t));
var Ca = (e, t, n) =>
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
    l((n = n.apply(e, t)).next());
  });
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
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
function Gi(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let s = 0; s < r.length; s++) n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Xi(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = xe(r) ? Up(r) : Xi(r);
      if (s) for (const i in s) t[i] = s[i];
    }
    return t;
  } else {
    if (xe(e)) return e;
    if (Ae(e)) return e;
  }
}
const jp = /;(?![^(]*\))/g,
  Hp = /:([^]+)/,
  Bp = new RegExp("\\/\\*.*?\\*\\/", "gs");
function Up(e) {
  const t = {};
  return (
    e
      .replace(Bp, "")
      .split(jp)
      .forEach((n) => {
        if (n) {
          const r = n.split(Hp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Ji(e) {
  let t = "";
  if (xe(e)) t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ji(e[n]);
      r && (t += r + " ");
    }
  else if (Ae(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Kp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Wp = Gi(Kp);
function Bl(e) {
  return !!e || e === "";
}
const Ve = (e) =>
    xe(e)
      ? e
      : e == null
      ? ""
      : ee(e) || (Ae(e) && (e.toString === zl || !ie(e.toString)))
      ? JSON.stringify(e, Ul, 2)
      : String(e),
  Ul = (e, t) =>
    t && t.__v_isRef
      ? Ul(e, t.value)
      : Bn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : Kl(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Ae(t) && !ee(t) && !ql(t)
      ? String(t)
      : t,
  ye = {},
  Hn = [],
  mt = () => {},
  zp = () => !1,
  qp = /^on[^a-z]/,
  Ss = (e) => qp.test(e),
  Qi = (e) => e.startsWith("onUpdate:"),
  Me = Object.assign,
  Zi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Yp = Object.prototype.hasOwnProperty,
  de = (e, t) => Yp.call(e, t),
  ee = Array.isArray,
  Bn = (e) => Cs(e) === "[object Map]",
  Kl = (e) => Cs(e) === "[object Set]",
  ie = (e) => typeof e == "function",
  xe = (e) => typeof e == "string",
  eo = (e) => typeof e == "symbol",
  Ae = (e) => e !== null && typeof e == "object",
  Wl = (e) => Ae(e) && ie(e.then) && ie(e.catch),
  zl = Object.prototype.toString,
  Cs = (e) => zl.call(e),
  Gp = (e) => Cs(e).slice(8, -1),
  ql = (e) => Cs(e) === "[object Object]",
  to = (e) =>
    xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  as = Gi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ns = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Xp = /-(\w)/g,
  St = Ns((e) => e.replace(Xp, (t, n) => (n ? n.toUpperCase() : ""))),
  Jp = /\B([A-Z])/g,
  sr = Ns((e) => e.replace(Jp, "-$1").toLowerCase()),
  xs = Ns((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  li = Ns((e) => (e ? `on${xs(e)}` : "")),
  Cr = (e, t) => !Object.is(e, t),
  ls = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  vs = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ai = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
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
let ut;
class Yl {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ut),
      !t && ut && (this.index = (ut.scopes || (ut.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ut;
      try {
        return (ut = this), t();
      } finally {
        ut = n;
      }
    }
  }
  on() {
    ut = this;
  }
  off() {
    ut = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Zp(e) {
  return new Yl(e);
}
function em(e, t = ut) {
  t && t.active && t.effects.push(e);
}
function tm() {
  return ut;
}
const no = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Gl = (e) => (e.w & Xt) > 0,
  Xl = (e) => (e.n & Xt) > 0,
  nm = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Xt;
  },
  rm = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        Gl(s) && !Xl(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~Xt),
          (s.n &= ~Xt);
      }
      t.length = n;
    }
  },
  wi = new WeakMap();
let br = 0,
  Xt = 1;
const Ti = 30;
let ft;
const gn = Symbol(""),
  Oi = Symbol("");
class ro {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      em(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = ft,
      n = Yt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = ft),
        (ft = this),
        (Yt = !0),
        (Xt = 1 << ++br),
        br <= Ti ? nm(this) : xa(this),
        this.fn()
      );
    } finally {
      br <= Ti && rm(this),
        (Xt = 1 << --br),
        (ft = this.parent),
        (Yt = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    ft === this
      ? (this.deferStop = !0)
      : this.active &&
        (xa(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function xa(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Yt = !0;
const Jl = [];
function ir() {
  Jl.push(Yt), (Yt = !1);
}
function or() {
  const e = Jl.pop();
  Yt = e === void 0 ? !0 : e;
}
function ze(e, t, n) {
  if (Yt && ft) {
    let r = wi.get(e);
    r || wi.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = no())), Ql(s);
  }
}
function Ql(e, t) {
  let n = !1;
  br <= Ti ? Xl(e) || ((e.n |= Xt), (n = !Gl(e))) : (n = !e.has(ft)),
    n && (e.add(ft), ft.deps.push(e));
}
function Mt(e, t, n, r, s, i) {
  const a = wi.get(e);
  if (!a) return;
  let l = [];
  if (t === "clear") l = [...a.values()];
  else if (n === "length" && ee(e)) {
    const c = Number(r);
    a.forEach((d, f) => {
      (f === "length" || f >= c) && l.push(d);
    });
  } else
    switch ((n !== void 0 && l.push(a.get(n)), t)) {
      case "add":
        ee(e)
          ? to(n) && l.push(a.get("length"))
          : (l.push(a.get(gn)), Bn(e) && l.push(a.get(Oi)));
        break;
      case "delete":
        ee(e) || (l.push(a.get(gn)), Bn(e) && l.push(a.get(Oi)));
        break;
      case "set":
        Bn(e) && l.push(a.get(gn));
        break;
    }
  if (l.length === 1) l[0] && Si(l[0]);
  else {
    const c = [];
    for (const d of l) d && c.push(...d);
    Si(no(c));
  }
}
function Si(e, t) {
  const n = ee(e) ? e : [...e];
  for (const r of n) r.computed && Ra(r);
  for (const r of n) r.computed || Ra(r);
}
function Ra(e, t) {
  (e !== ft || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const sm = Gi("__proto__,__v_isRef,__isVue"),
  Zl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(eo)
  ),
  im = so(),
  om = so(!1, !0),
  am = so(!0),
  La = lm();
function lm() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = pe(this);
        for (let i = 0, a = this.length; i < a; i++) ze(r, "get", i + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(pe)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ir();
        const r = pe(this)[t].apply(this, n);
        return or(), r;
      };
    }),
    e
  );
}
function cm(e) {
  const t = pe(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
}
function so(e = !1, t = !1) {
  return function (r, s, i) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && i === (e ? (t ? Om : sc) : t ? rc : nc).get(r))
      return r;
    const a = ee(r);
    if (!e) {
      if (a && de(La, s)) return Reflect.get(La, s, i);
      if (s === "hasOwnProperty") return cm;
    }
    const l = Reflect.get(r, s, i);
    return (eo(s) ? Zl.has(s) : sm(s)) || (e || ze(r, "get", s), t)
      ? l
      : $e(l)
      ? a && to(s)
        ? l
        : l.value
      : Ae(l)
      ? e
        ? ic(l)
        : ar(l)
      : l;
  };
}
const um = ec(),
  fm = ec(!0);
function ec(e = !1) {
  return function (n, r, s, i) {
    let a = n[r];
    if (Yn(a) && $e(a) && !$e(s)) return !1;
    if (
      !e &&
      (!Es(s) && !Yn(s) && ((a = pe(a)), (s = pe(s))),
      !ee(n) && $e(a) && !$e(s))
    )
      return (a.value = s), !0;
    const l = ee(n) && to(r) ? Number(r) < n.length : de(n, r),
      c = Reflect.set(n, r, s, i);
    return (
      n === pe(i) && (l ? Cr(s, a) && Mt(n, "set", r, s) : Mt(n, "add", r, s)),
      c
    );
  };
}
function dm(e, t) {
  const n = de(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Mt(e, "delete", t, void 0), r;
}
function hm(e, t) {
  const n = Reflect.has(e, t);
  return (!eo(t) || !Zl.has(t)) && ze(e, "has", t), n;
}
function pm(e) {
  return ze(e, "iterate", ee(e) ? "length" : gn), Reflect.ownKeys(e);
}
const tc = { get: im, set: um, deleteProperty: dm, has: hm, ownKeys: pm },
  mm = {
    get: am,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  _m = Me({}, tc, { get: om, set: fm }),
  io = (e) => e,
  Rs = (e) => Reflect.getPrototypeOf(e);
function es(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = pe(e),
    i = pe(t);
  n || (t !== i && ze(s, "get", t), ze(s, "get", i));
  const { has: a } = Rs(s),
    l = r ? io : n ? lo : Nr;
  if (a.call(s, t)) return l(e.get(t));
  if (a.call(s, i)) return l(e.get(i));
  e !== s && e.get(t);
}
function ts(e, t = !1) {
  const n = this.__v_raw,
    r = pe(n),
    s = pe(e);
  return (
    t || (e !== s && ze(r, "has", e), ze(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function ns(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ze(pe(e), "iterate", gn), Reflect.get(e, "size", e)
  );
}
function Da(e) {
  e = pe(e);
  const t = pe(this);
  return Rs(t).has.call(t, e) || (t.add(e), Mt(t, "add", e, e)), this;
}
function Pa(e, t) {
  t = pe(t);
  const n = pe(this),
    { has: r, get: s } = Rs(n);
  let i = r.call(n, e);
  i || ((e = pe(e)), (i = r.call(n, e)));
  const a = s.call(n, e);
  return (
    n.set(e, t), i ? Cr(t, a) && Mt(n, "set", e, t) : Mt(n, "add", e, t), this
  );
}
function Ia(e) {
  const t = pe(this),
    { has: n, get: r } = Rs(t);
  let s = n.call(t, e);
  s || ((e = pe(e)), (s = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return s && Mt(t, "delete", e, void 0), i;
}
function $a() {
  const e = pe(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Mt(e, "clear", void 0, void 0), n;
}
function rs(e, t) {
  return function (r, s) {
    const i = this,
      a = i.__v_raw,
      l = pe(a),
      c = t ? io : e ? lo : Nr;
    return (
      !e && ze(l, "iterate", gn), a.forEach((d, f) => r.call(s, c(d), c(f), i))
    );
  };
}
function ss(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = pe(s),
      a = Bn(i),
      l = e === "entries" || (e === Symbol.iterator && a),
      c = e === "keys" && a,
      d = s[e](...r),
      f = n ? io : t ? lo : Nr;
    return (
      !t && ze(i, "iterate", c ? Oi : gn),
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
function Ut(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function gm() {
  const e = {
      get(i) {
        return es(this, i);
      },
      get size() {
        return ns(this);
      },
      has: ts,
      add: Da,
      set: Pa,
      delete: Ia,
      clear: $a,
      forEach: rs(!1, !1),
    },
    t = {
      get(i) {
        return es(this, i, !1, !0);
      },
      get size() {
        return ns(this);
      },
      has: ts,
      add: Da,
      set: Pa,
      delete: Ia,
      clear: $a,
      forEach: rs(!1, !0),
    },
    n = {
      get(i) {
        return es(this, i, !0);
      },
      get size() {
        return ns(this, !0);
      },
      has(i) {
        return ts.call(this, i, !0);
      },
      add: Ut("add"),
      set: Ut("set"),
      delete: Ut("delete"),
      clear: Ut("clear"),
      forEach: rs(!0, !1),
    },
    r = {
      get(i) {
        return es(this, i, !0, !0);
      },
      get size() {
        return ns(this, !0);
      },
      has(i) {
        return ts.call(this, i, !0);
      },
      add: Ut("add"),
      set: Ut("set"),
      delete: Ut("delete"),
      clear: Ut("clear"),
      forEach: rs(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = ss(i, !1, !1)),
        (n[i] = ss(i, !0, !1)),
        (t[i] = ss(i, !1, !0)),
        (r[i] = ss(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [vm, Em, bm, ym] = gm();
function oo(e, t) {
  const n = t ? (e ? ym : bm) : e ? Em : vm;
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(de(n, s) && s in r ? n : r, s, i);
}
const Am = { get: oo(!1, !1) },
  wm = { get: oo(!1, !0) },
  Tm = { get: oo(!0, !1) },
  nc = new WeakMap(),
  rc = new WeakMap(),
  sc = new WeakMap(),
  Om = new WeakMap();
function Sm(e) {
  switch (e) {
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
function Cm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sm(Gp(e));
}
function ar(e) {
  return Yn(e) ? e : ao(e, !1, tc, Am, nc);
}
function Nm(e) {
  return ao(e, !1, _m, wm, rc);
}
function ic(e) {
  return ao(e, !0, mm, Tm, sc);
}
function ao(e, t, n, r, s) {
  if (!Ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = s.get(e);
  if (i) return i;
  const a = Cm(e);
  if (a === 0) return e;
  const l = new Proxy(e, a === 2 ? r : n);
  return s.set(e, l), l;
}
function Un(e) {
  return Yn(e) ? Un(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Yn(e) {
  return !!(e && e.__v_isReadonly);
}
function Es(e) {
  return !!(e && e.__v_isShallow);
}
function oc(e) {
  return Un(e) || Yn(e);
}
function pe(e) {
  const t = e && e.__v_raw;
  return t ? pe(t) : e;
}
function ac(e) {
  return vs(e, "__v_skip", !0), e;
}
const Nr = (e) => (Ae(e) ? ar(e) : e),
  lo = (e) => (Ae(e) ? ic(e) : e);
function lc(e) {
  Yt && ft && ((e = pe(e)), Ql(e.dep || (e.dep = no())));
}
function cc(e, t) {
  e = pe(e);
  const n = e.dep;
  n && Si(n);
}
function $e(e) {
  return !!(e && e.__v_isRef === !0);
}
function xm(e) {
  return uc(e, !1);
}
function Rm(e) {
  return uc(e, !0);
}
function uc(e, t) {
  return $e(e) ? e : new Lm(e, t);
}
class Lm {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : pe(t)),
      (this._value = n ? t : Nr(t));
  }
  get value() {
    return lc(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Es(t) || Yn(t);
    (t = n ? t : pe(t)),
      Cr(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Nr(t)), cc(this));
  }
}
function Kn(e) {
  return $e(e) ? e.value : e;
}
const Dm = {
  get: (e, t, n) => Kn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return $e(s) && !$e(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function fc(e) {
  return Un(e) ? e : new Proxy(e, Dm);
}
var dc;
class Pm {
  constructor(t, n, r, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[dc] = !1),
      (this._dirty = !0),
      (this.effect = new ro(t, () => {
        this._dirty || ((this._dirty = !0), cc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = pe(this);
    return (
      lc(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
dc = "__v_isReadonly";
function Im(e, t, n = !1) {
  let r, s;
  const i = ie(e);
  return (
    i ? ((r = e), (s = mt)) : ((r = e.get), (s = e.set)),
    new Pm(r, s, i || !s, n)
  );
}
function Gt(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (i) {
    Ls(i, t, n);
  }
  return s;
}
function st(e, t, n, r) {
  if (ie(e)) {
    const i = Gt(e, t, n, r);
    return (
      i &&
        Wl(i) &&
        i.catch((a) => {
          Ls(a, t, n);
        }),
      i
    );
  }
  const s = [];
  for (let i = 0; i < e.length; i++) s.push(st(e[i], t, n, r));
  return s;
}
function Ls(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const a = t.proxy,
      l = n;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](e, a, l) === !1) return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Gt(c, null, 10, [e, a, l]);
      return;
    }
  }
  $m(e, n, s, r);
}
function $m(e, t, n, r = !0) {
  console.error(e);
}
let xr = !1,
  Ci = !1;
const Ie = [];
let wt = 0;
const Wn = [];
let Dt = null,
  hn = 0;
const hc = Promise.resolve();
let co = null;
function pc(e) {
  const t = co || hc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mm(e) {
  let t = wt + 1,
    n = Ie.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    Rr(Ie[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function uo(e) {
  (!Ie.length || !Ie.includes(e, xr && e.allowRecurse ? wt + 1 : wt)) &&
    (e.id == null ? Ie.push(e) : Ie.splice(Mm(e.id), 0, e), mc());
}
function mc() {
  !xr && !Ci && ((Ci = !0), (co = hc.then(gc)));
}
function km(e) {
  const t = Ie.indexOf(e);
  t > wt && Ie.splice(t, 1);
}
function Fm(e) {
  ee(e)
    ? Wn.push(...e)
    : (!Dt || !Dt.includes(e, e.allowRecurse ? hn + 1 : hn)) && Wn.push(e),
    mc();
}
function Ma(e, t = xr ? wt + 1 : 0) {
  for (; t < Ie.length; t++) {
    const n = Ie[t];
    n && n.pre && (Ie.splice(t, 1), t--, n());
  }
}
function _c(e) {
  if (Wn.length) {
    const t = [...new Set(Wn)];
    if (((Wn.length = 0), Dt)) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, Dt.sort((n, r) => Rr(n) - Rr(r)), hn = 0; hn < Dt.length; hn++)
      Dt[hn]();
    (Dt = null), (hn = 0);
  }
}
const Rr = (e) => (e.id == null ? 1 / 0 : e.id),
  Vm = (e, t) => {
    const n = Rr(e) - Rr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function gc(e) {
  (Ci = !1), (xr = !0), Ie.sort(Vm);
  const t = mt;
  try {
    for (wt = 0; wt < Ie.length; wt++) {
      const n = Ie[wt];
      n && n.active !== !1 && Gt(n, null, 14);
    }
  } finally {
    (wt = 0),
      (Ie.length = 0),
      _c(),
      (xr = !1),
      (co = null),
      (Ie.length || Wn.length) && gc();
  }
}
function jm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ye;
  let s = n;
  const i = t.startsWith("update:"),
    a = i && t.slice(7);
  if (a && a in r) {
    const f = `${a === "modelValue" ? "model" : a}Modifiers`,
      { number: p, trim: g } = r[f] || ye;
    g && (s = n.map((E) => (xe(E) ? E.trim() : E))), p && (s = n.map(Ai));
  }
  let l,
    c = r[(l = li(t))] || r[(l = li(St(t)))];
  !c && i && (c = r[(l = li(sr(t)))]), c && st(c, e, 6, s);
  const d = r[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), st(d, e, 6, s);
  }
}
function vc(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const i = e.emits;
  let a = {},
    l = !1;
  if (!ie(e)) {
    const c = (d) => {
      const f = vc(d, t, !0);
      f && ((l = !0), Me(a, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !i && !l
    ? (Ae(e) && r.set(e, null), null)
    : (ee(i) ? i.forEach((c) => (a[c] = null)) : Me(a, i),
      Ae(e) && r.set(e, a),
      a);
}
function Ds(e, t) {
  return !e || !Ss(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      de(e, t[0].toLowerCase() + t.slice(1)) || de(e, sr(t)) || de(e, t));
}
let Ze = null,
  Ps = null;
function bs(e) {
  const t = Ze;
  return (Ze = e), (Ps = (e && e.type.__scopeId) || null), t;
}
function $r(e) {
  Ps = e;
}
function Mr() {
  Ps = null;
}
function zn(e, t = Ze, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && za(-1);
    const i = bs(t);
    let a;
    try {
      a = e(...s);
    } finally {
      bs(i), r._d && za(1);
    }
    return a;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function ci(e) {
  const {
    type: t,
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
  } = e;
  let D, x;
  const F = bs(e);
  try {
    if (n.shapeFlag & 4) {
      const H = s || r;
      (D = yt(f.call(H, H, p, i, E, g, b))), (x = c);
    } else {
      const H = t;
      (D = yt(
        H.length > 1 ? H(i, { attrs: c, slots: l, emit: d }) : H(i, null)
      )),
        (x = t.props ? c : Hm(c));
    }
  } catch (H) {
    (Ar.length = 0), Ls(H, e, 1), (D = Oe(It));
  }
  let M = D;
  if (x && y !== !1) {
    const H = Object.keys(x),
      { shapeFlag: q } = M;
    H.length && q & 7 && (a && H.some(Qi) && (x = Bm(x, a)), (M = Jt(M, x)));
  }
  return (
    n.dirs && ((M = Jt(M)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (M.transition = n.transition),
    (D = M),
    bs(F),
    D
  );
}
const Hm = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Bm = (e, t) => {
    const n = {};
    for (const r in e) (!Qi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Um(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: a, children: l, patchFlag: c } = t,
    d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? ka(r, a, d) : !!a;
    if (c & 8) {
      const f = t.dynamicProps;
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
function ka(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Ds(n, i)) return !0;
  }
  return !1;
}
function Km({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Wm = (e) => e.__isSuspense;
function zm(e, t) {
  t && t.pendingBranch
    ? ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Fm(e);
}
function cs(e, t) {
  if (Se) {
    let n = Se.provides;
    const r = Se.parent && Se.parent.provides;
    r === n && (n = Se.provides = Object.create(r)), (n[e] = t);
  }
}
function Pt(e, t, n = !1) {
  const r = Se || Ze;
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ie(t) ? t.call(r.proxy) : t;
  }
}
const is = {};
function qn(e, t, n) {
  return Ec(e, t, n);
}
function Ec(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: a } = ye
) {
  const l = tm() === (Se == null ? void 0 : Se.scope) ? Se : null;
  let c,
    d = !1,
    f = !1;
  if (
    ($e(e)
      ? ((c = () => e.value), (d = Es(e)))
      : Un(e)
      ? ((c = () => e), (r = !0))
      : ee(e)
      ? ((f = !0),
        (d = e.some((M) => Un(M) || Es(M))),
        (c = () =>
          e.map((M) => {
            if ($e(M)) return M.value;
            if (Un(M)) return _n(M);
            if (ie(M)) return Gt(M, l, 2);
          })))
      : ie(e)
      ? t
        ? (c = () => Gt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return p && p(), st(e, l, 3, [g]);
          })
      : (c = mt),
    t && r)
  ) {
    const M = c;
    c = () => _n(M());
  }
  let p,
    g = (M) => {
      p = x.onStop = () => {
        Gt(M, l, 4);
      };
    },
    E;
  if (Dr)
    if (
      ((g = mt),
      t ? n && st(t, l, 3, [c(), f ? [] : void 0, g]) : c(),
      s === "sync")
    ) {
      const M = U_();
      E = M.__watcherHandles || (M.__watcherHandles = []);
    } else return mt;
  let b = f ? new Array(e.length).fill(is) : is;
  const y = () => {
    if (x.active)
      if (t) {
        const M = x.run();
        (r || d || (f ? M.some((H, q) => Cr(H, b[q])) : Cr(M, b))) &&
          (p && p(),
          st(t, l, 3, [M, b === is ? void 0 : f && b[0] === is ? [] : b, g]),
          (b = M));
      } else x.run();
  };
  y.allowRecurse = !!t;
  let D;
  s === "sync"
    ? (D = y)
    : s === "post"
    ? (D = () => Ke(y, l && l.suspense))
    : ((y.pre = !0), l && (y.id = l.uid), (D = () => uo(y)));
  const x = new ro(c, D);
  t
    ? n
      ? y()
      : (b = x.run())
    : s === "post"
    ? Ke(x.run.bind(x), l && l.suspense)
    : x.run();
  const F = () => {
    x.stop(), l && l.scope && Zi(l.scope.effects, x);
  };
  return E && E.push(F), F;
}
function qm(e, t, n) {
  const r = this.proxy,
    s = xe(e) ? (e.includes(".") ? bc(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  ie(t) ? (i = t) : ((i = t.handler), (n = t));
  const a = Se;
  Gn(this);
  const l = Ec(s, i.bind(r), n);
  return a ? Gn(a) : En(), l;
}
function bc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function _n(e, t) {
  if (!Ae(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), $e(e))) _n(e.value, t);
  else if (ee(e)) for (let n = 0; n < e.length; n++) _n(e[n], t);
  else if (Kl(e) || Bn(e))
    e.forEach((n) => {
      _n(n, t);
    });
  else if (ql(e)) for (const n in e) _n(e[n], t);
  return e;
}
function Ym() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Oc(() => {
      e.isMounted = !0;
    }),
    Sc(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const rt = [Function, Array],
  Gm = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: rt,
      onEnter: rt,
      onAfterEnter: rt,
      onEnterCancelled: rt,
      onBeforeLeave: rt,
      onLeave: rt,
      onAfterLeave: rt,
      onLeaveCancelled: rt,
      onBeforeAppear: rt,
      onAppear: rt,
      onAfterAppear: rt,
      onAppearCancelled: rt,
    },
    setup(e, { slots: t }) {
      const n = $_(),
        r = Ym();
      let s;
      return () => {
        const i = t.default && Ac(t.default(), !0);
        if (!i || !i.length) return;
        let a = i[0];
        if (i.length > 1) {
          for (const y of i)
            if (y.type !== It) {
              a = y;
              break;
            }
        }
        const l = pe(e),
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
        if (g && g.type !== It && (!pn(d, g) || E)) {
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
            d.type !== It &&
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
function yc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Ni(e, t, n, r) {
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
    } = t,
    M = String(e.key),
    H = yc(n, e),
    q = (Y, J) => {
      Y && st(Y, r, 9, J);
    },
    Z = (Y, J) => {
      const G = J[1];
      q(Y, J),
        ee(Y) ? Y.every((te) => te.length <= 1) && G() : Y.length <= 1 && G();
    },
    re = {
      mode: i,
      persisted: a,
      beforeEnter(Y) {
        let J = l;
        if (!n.isMounted)
          if (s) J = y || l;
          else return;
        Y._leaveCb && Y._leaveCb(!0);
        const G = H[M];
        G && pn(e, G) && G.el._leaveCb && G.el._leaveCb(), q(J, [Y]);
      },
      enter(Y) {
        let J = c,
          G = d,
          te = f;
        if (!n.isMounted)
          if (s) (J = D || c), (G = x || d), (te = F || f);
          else return;
        let me = !1;
        const _e = (Y._enterCb = (Ne) => {
          me ||
            ((me = !0),
            Ne ? q(te, [Y]) : q(G, [Y]),
            re.delayedLeave && re.delayedLeave(),
            (Y._enterCb = void 0));
        });
        J ? Z(J, [Y, _e]) : _e();
      },
      leave(Y, J) {
        const G = String(e.key);
        if ((Y._enterCb && Y._enterCb(!0), n.isUnmounting)) return J();
        q(p, [Y]);
        let te = !1;
        const me = (Y._leaveCb = (_e) => {
          te ||
            ((te = !0),
            J(),
            _e ? q(b, [Y]) : q(E, [Y]),
            (Y._leaveCb = void 0),
            H[G] === e && delete H[G]);
        });
        (H[G] = e), g ? Z(g, [Y, me]) : me();
      },
      clone(Y) {
        return Ni(Y, t, n, r);
      },
    };
  return re;
}
function ui(e) {
  if (Is(e)) return (e = Jt(e)), (e.children = null), e;
}
function Fa(e) {
  return Is(e) ? (e.children ? e.children[0] : void 0) : e;
}
function xi(e, t) {
  e.shapeFlag & 6 && e.component
    ? xi(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Ac(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const l = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === We
      ? (a.patchFlag & 128 && s++, (r = r.concat(Ac(a.children, t, l))))
      : (t || a.type !== It) && r.push(l != null ? Jt(a, { key: l }) : a);
  }
  if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function wc(e) {
  return ie(e) ? { setup: e, name: e.name } : e;
}
const us = (e) => !!e.type.__asyncLoader,
  Is = (e) => e.type.__isKeepAlive;
function Jm(e, t) {
  Tc(e, "a", t);
}
function Qm(e, t) {
  Tc(e, "da", t);
}
function Tc(e, t, n = Se) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if (($s(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Is(s.parent.vnode) && Zm(r, t, n, s), (s = s.parent);
  }
}
function Zm(e, t, n, r) {
  const s = $s(t, e, r, !0);
  Cc(() => {
    Zi(r[t], s);
  }, n);
}
function $s(e, t, n = Se, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...a) => {
          if (n.isUnmounted) return;
          ir(), Gn(n);
          const l = st(t, n, e, a);
          return En(), or(), l;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Ft =
    (e) =>
    (t, n = Se) =>
      (!Dr || e === "sp") && $s(e, (...r) => t(...r), n),
  e_ = Ft("bm"),
  Oc = Ft("m"),
  t_ = Ft("bu"),
  n_ = Ft("u"),
  Sc = Ft("bum"),
  Cc = Ft("um"),
  r_ = Ft("sp"),
  s_ = Ft("rtg"),
  i_ = Ft("rtc");
function o_(e, t = Se) {
  $s("ec", e, t);
}
function bt(e, t) {
  const n = Ze;
  if (n === null) return e;
  const r = Vs(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, l, c, d = ye] = t[i];
    a &&
      (ie(a) && (a = { mounted: a, updated: a }),
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
  return e;
}
function un(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    i && (l.oldValue = i[a].value);
    let c = l.dir[r];
    c && (ir(), st(c, n, 8, [e.el, l, e, t]), or());
  }
}
const Nc = "components";
function vn(e, t) {
  return l_(Nc, e, !0, t) || e;
}
const a_ = Symbol();
function l_(e, t, n = !0, r = !1) {
  const s = Ze || Se;
  if (s) {
    const i = s.type;
    if (e === Nc) {
      const l = j_(i, !1);
      if (l && (l === t || l === St(t) || l === xs(St(t)))) return i;
    }
    const a = Va(s[e] || i[e], t) || Va(s.appContext[e], t);
    return !a && r ? i : a;
  }
}
function Va(e, t) {
  return e && (e[t] || e[St(t)] || e[xs(St(t))]);
}
function c_(e, t, n, r) {
  let s;
  const i = n && n[r];
  if (ee(e) || xe(e)) {
    s = new Array(e.length);
    for (let a = 0, l = e.length; a < l; a++)
      s[a] = t(e[a], a, void 0, i && i[a]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, i && i[a]);
  } else if (Ae(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (a, l) => t(a, l, void 0, i && i[l]));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        s[l] = t(e[d], d, l, i && i[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Ri = (e) => (e ? (Vc(e) ? Vs(e) || e.proxy : Ri(e.parent)) : null),
  yr = Me(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ri(e.parent),
    $root: (e) => Ri(e.root),
    $emit: (e) => e.emit,
    $options: (e) => fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => uo(e.update)),
    $nextTick: (e) => e.n || (e.n = pc.bind(e.proxy)),
    $watch: (e) => qm.bind(e),
  }),
  fi = (e, t) => e !== ye && !e.__isScriptSetup && de(e, t),
  u_ = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: a,
        type: l,
        appContext: c,
      } = e;
      let d;
      if (t[0] !== "$") {
        const E = a[t];
        if (E !== void 0)
          switch (E) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (fi(r, t)) return (a[t] = 1), r[t];
          if (s !== ye && de(s, t)) return (a[t] = 2), s[t];
          if ((d = e.propsOptions[0]) && de(d, t)) return (a[t] = 3), i[t];
          if (n !== ye && de(n, t)) return (a[t] = 4), n[t];
          Li && (a[t] = 0);
        }
      }
      const f = yr[t];
      let p, g;
      if (f) return t === "$attrs" && ze(e, "get", t), f(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== ye && de(n, t)) return (a[t] = 4), n[t];
      if (((g = c.config.globalProperties), de(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return fi(s, t)
        ? ((s[t] = n), !0)
        : r !== ye && de(r, t)
        ? ((r[t] = n), !0)
        : de(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
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
        (e !== ye && de(e, a)) ||
        fi(t, a) ||
        ((l = i[0]) && de(l, a)) ||
        de(r, a) ||
        de(yr, a) ||
        de(s.config.globalProperties, a)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : de(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Li = !0;
function f_(e) {
  const t = fo(e),
    n = e.proxy,
    r = e.ctx;
  (Li = !1), t.beforeCreate && ja(t.beforeCreate, e, "bc");
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
    renderTriggered: re,
    errorCaptured: Y,
    serverPrefetch: J,
    expose: G,
    inheritAttrs: te,
    components: me,
    directives: _e,
    filters: Ne,
  } = t;
  if ((d && d_(d, r, null, e.appContext.config.unwrapInjectedRef), a))
    for (const ne in a) {
      const ue = a[ne];
      ie(ue) && (r[ne] = ue.bind(n));
    }
  if (s) {
    const ne = s.call(n, n);
    Ae(ne) && (e.data = ar(ne));
  }
  if (((Li = !0), i))
    for (const ne in i) {
      const ue = i[ne],
        Te = ie(ue) ? ue.bind(n, n) : ie(ue.get) ? ue.get.bind(n, n) : mt,
        Be = !ie(ue) && ie(ue.set) ? ue.set.bind(n) : mt,
        Le = Qe({ get: Te, set: Be });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (we) => (Le.value = we),
      });
    }
  if (l) for (const ne in l) xc(l[ne], r, n, ne);
  if (c) {
    const ne = ie(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((ue) => {
      cs(ue, ne[ue]);
    });
  }
  f && ja(f, e, "c");
  function ce(ne, ue) {
    ee(ue) ? ue.forEach((Te) => ne(Te.bind(n))) : ue && ne(ue.bind(n));
  }
  if (
    (ce(e_, p),
    ce(Oc, g),
    ce(t_, E),
    ce(n_, b),
    ce(Jm, y),
    ce(Qm, D),
    ce(o_, Y),
    ce(i_, Z),
    ce(s_, re),
    ce(Sc, F),
    ce(Cc, H),
    ce(r_, J),
    ee(G))
  )
    if (G.length) {
      const ne = e.exposed || (e.exposed = {});
      G.forEach((ue) => {
        Object.defineProperty(ne, ue, {
          get: () => n[ue],
          set: (Te) => (n[ue] = Te),
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === mt && (e.render = q),
    te != null && (e.inheritAttrs = te),
    me && (e.components = me),
    _e && (e.directives = _e);
}
function d_(e, t, n = mt, r = !1) {
  ee(e) && (e = Di(e));
  for (const s in e) {
    const i = e[s];
    let a;
    Ae(i)
      ? "default" in i
        ? (a = Pt(i.from || s, i.default, !0))
        : (a = Pt(i.from || s))
      : (a = Pt(i)),
      $e(a) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (l) => (a.value = l),
          })
        : (t[s] = a);
  }
}
function ja(e, t, n) {
  st(ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function xc(e, t, n, r) {
  const s = r.includes(".") ? bc(n, r) : () => n[r];
  if (xe(e)) {
    const i = t[e];
    ie(i) && qn(s, i);
  } else if (ie(e)) qn(s, e.bind(n));
  else if (Ae(e))
    if (ee(e)) e.forEach((i) => xc(i, t, n, r));
    else {
      const i = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      ie(i) && qn(s, i, e);
    }
}
function fo(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    l = i.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !r
      ? (c = t)
      : ((c = {}), s.length && s.forEach((d) => ys(c, d, a, !0)), ys(c, t, a)),
    Ae(t) && i.set(t, c),
    c
  );
}
function ys(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && ys(e, i, n, !0), s && s.forEach((a) => ys(e, a, n, !0));
  for (const a in t)
    if (!(r && a === "expose")) {
      const l = h_[a] || (n && n[a]);
      e[a] = l ? l(e[a], t[a]) : t[a];
    }
  return e;
}
const h_ = {
  data: Ha,
  props: dn,
  emits: dn,
  methods: dn,
  computed: dn,
  beforeCreate: Fe,
  created: Fe,
  beforeMount: Fe,
  mounted: Fe,
  beforeUpdate: Fe,
  updated: Fe,
  beforeDestroy: Fe,
  beforeUnmount: Fe,
  destroyed: Fe,
  unmounted: Fe,
  activated: Fe,
  deactivated: Fe,
  errorCaptured: Fe,
  serverPrefetch: Fe,
  components: dn,
  directives: dn,
  watch: m_,
  provide: Ha,
  inject: p_,
};
function Ha(e, t) {
  return t
    ? e
      ? function () {
          return Me(
            ie(e) ? e.call(this, this) : e,
            ie(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function p_(e, t) {
  return dn(Di(e), Di(t));
}
function Di(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function dn(e, t) {
  return e ? Me(Me(Object.create(null), e), t) : t;
}
function m_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Me(Object.create(null), e);
  for (const r in t) n[r] = Fe(e[r], t[r]);
  return n;
}
function __(e, t, n, r = !1) {
  const s = {},
    i = {};
  vs(i, ks, 1), (e.propsDefaults = Object.create(null)), Rc(e, t, s, i);
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0);
  n ? (e.props = r ? s : Nm(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i);
}
function g_(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: a },
    } = e,
    l = pe(s),
    [c] = e.propsOptions;
  let d = !1;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let g = f[p];
        if (Ds(e.emitsOptions, g)) continue;
        const E = t[g];
        if (c)
          if (de(i, g)) E !== i[g] && ((i[g] = E), (d = !0));
          else {
            const b = St(g);
            s[b] = Pi(c, l, b, E, e, !1);
          }
        else E !== i[g] && ((i[g] = E), (d = !0));
      }
    }
  } else {
    Rc(e, t, s, i) && (d = !0);
    let f;
    for (const p in l)
      (!t || (!de(t, p) && ((f = sr(p)) === p || !de(t, f)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (s[p] = Pi(c, l, p, void 0, e, !0))
          : delete s[p]);
    if (i !== l)
      for (const p in i) (!t || !de(t, p)) && (delete i[p], (d = !0));
  }
  d && Mt(e, "set", "$attrs");
}
function Rc(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let a = !1,
    l;
  if (t)
    for (let c in t) {
      if (as(c)) continue;
      const d = t[c];
      let f;
      s && de(s, (f = St(c)))
        ? !i || !i.includes(f)
          ? (n[f] = d)
          : ((l || (l = {}))[f] = d)
        : Ds(e.emitsOptions, c) ||
          ((!(c in r) || d !== r[c]) && ((r[c] = d), (a = !0)));
    }
  if (i) {
    const c = pe(n),
      d = l || ye;
    for (let f = 0; f < i.length; f++) {
      const p = i[f];
      n[p] = Pi(s, c, p, d[p], e, !de(d, p));
    }
  }
  return a;
}
function Pi(e, t, n, r, s, i) {
  const a = e[n];
  if (a != null) {
    const l = de(a, "default");
    if (l && r === void 0) {
      const c = a.default;
      if (a.type !== Function && ie(c)) {
        const { propsDefaults: d } = s;
        n in d ? (r = d[n]) : (Gn(s), (r = d[n] = c.call(null, t)), En());
      } else r = c;
    }
    a[0] &&
      (i && !l ? (r = !1) : a[1] && (r === "" || r === sr(n)) && (r = !0));
  }
  return r;
}
function Lc(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const i = e.props,
    a = {},
    l = [];
  let c = !1;
  if (!ie(e)) {
    const f = (p) => {
      c = !0;
      const [g, E] = Lc(p, t, !0);
      Me(a, g), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c) return Ae(e) && r.set(e, Hn), Hn;
  if (ee(i))
    for (let f = 0; f < i.length; f++) {
      const p = St(i[f]);
      Ba(p) && (a[p] = ye);
    }
  else if (i)
    for (const f in i) {
      const p = St(f);
      if (Ba(p)) {
        const g = i[f],
          E = (a[p] = ee(g) || ie(g) ? { type: g } : Object.assign({}, g));
        if (E) {
          const b = Wa(Boolean, E.type),
            y = Wa(String, E.type);
          (E[0] = b > -1),
            (E[1] = y < 0 || b < y),
            (b > -1 || de(E, "default")) && l.push(p);
        }
      }
    }
  const d = [a, l];
  return Ae(e) && r.set(e, d), d;
}
function Ba(e) {
  return e[0] !== "$";
}
function Ua(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ka(e, t) {
  return Ua(e) === Ua(t);
}
function Wa(e, t) {
  return ee(t) ? t.findIndex((n) => Ka(n, e)) : ie(t) && Ka(t, e) ? 0 : -1;
}
const Dc = (e) => e[0] === "_" || e === "$stable",
  ho = (e) => (ee(e) ? e.map(yt) : [yt(e)]),
  v_ = (e, t, n) => {
    if (t._n) return t;
    const r = zn((...s) => ho(t(...s)), n);
    return (r._c = !1), r;
  },
  Pc = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Dc(s)) continue;
      const i = e[s];
      if (ie(i)) t[s] = v_(s, i, r);
      else if (i != null) {
        const a = ho(i);
        t[s] = () => a;
      }
    }
  },
  Ic = (e, t) => {
    const n = ho(t);
    e.slots.default = () => n;
  },
  E_ = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = pe(t)), vs(t, "_", n)) : Pc(t, (e.slots = {}));
    } else (e.slots = {}), t && Ic(e, t);
    vs(e.slots, ks, 1);
  },
  b_ = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0,
      a = ye;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (Me(s, t), !n && l === 1 && delete s._)
        : ((i = !t.$stable), Pc(t, s)),
        (a = t);
    } else t && (Ic(e, t), (a = { default: 1 }));
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
function A_(e, t) {
  return function (r, s = null) {
    ie(r) || (r = Object.assign({}, r)), s != null && !Ae(s) && (s = null);
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
            (d && ie(d.install)
              ? (a.add(d), d.install(c, ...f))
              : ie(d) && (a.add(d), d(c, ...f))),
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
          const g = Oe(r, s);
          return (
            (g.appContext = i),
            f && t ? t(g, d) : e(g, d, p),
            (l = !0),
            (c._container = d),
            (d.__vue_app__ = c),
            Vs(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, f) {
        return (i.provides[d] = f), c;
      },
    });
    return c;
  };
}
function Ii(e, t, n, r, s = !1) {
  if (ee(e)) {
    e.forEach((g, E) => Ii(g, t && (ee(t) ? t[E] : t), n, r, s));
    return;
  }
  if (us(r) && !s) return;
  const i = r.shapeFlag & 4 ? Vs(r.component) || r.component.proxy : r.el,
    a = s ? null : i,
    { i: l, r: c } = e,
    d = t && t.r,
    f = l.refs === ye ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (d != null &&
      d !== c &&
      (xe(d)
        ? ((f[d] = null), de(p, d) && (p[d] = null))
        : $e(d) && (d.value = null)),
    ie(c))
  )
    Gt(c, l, 12, [a, f]);
  else {
    const g = xe(c),
      E = $e(c);
    if (g || E) {
      const b = () => {
        if (e.f) {
          const y = g ? (de(p, c) ? p[c] : f[c]) : c.value;
          s
            ? ee(y) && Zi(y, i)
            : ee(y)
            ? y.includes(i) || y.push(i)
            : g
            ? ((f[c] = [i]), de(p, c) && (p[c] = f[c]))
            : ((c.value = [i]), e.k && (f[e.k] = c.value));
        } else
          g
            ? ((f[c] = a), de(p, c) && (p[c] = a))
            : E && ((c.value = a), e.k && (f[e.k] = a));
      };
      a ? ((b.id = -1), Ke(b, n)) : b();
    }
  }
}
const Ke = zm;
function w_(e) {
  return T_(e);
}
function T_(e, t) {
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
      setScopeId: E = mt,
      insertStaticContent: b,
    } = e,
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
      h && !pn(h, v) && ((T = j(h)), we(h, N, P, !0), (h = null)),
        v.patchFlag === -2 && ((L = !1), (v.dynamicChildren = null));
      const { type: R, ref: X, shapeFlag: W } = v;
      switch (R) {
        case Ms:
          D(h, v, w, T);
          break;
        case It:
          x(h, v, w, T);
          break;
        case fs:
          h == null && F(v, w, T, B);
          break;
        case We:
          me(h, v, w, T, N, P, B, I, L);
          break;
        default:
          W & 1
            ? q(h, v, w, T, N, P, B, I, L)
            : W & 6
            ? _e(h, v, w, T, N, P, B, I, L)
            : (W & 64 || W & 128) && R.process(h, v, w, T, N, P, B, I, L, ae);
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
      const { type: X, props: W, shapeFlag: z, transition: Q, dirs: se } = h;
      if (
        ((L = h.el = a(h.type, P, W && W.is, W)),
        z & 8
          ? f(L, h.children)
          : z & 16 &&
            Y(h.children, L, null, T, N, P && X !== "foreignObject", B, I),
        se && un(h, null, T, "created"),
        re(L, h, h.scopeId, B, T),
        W)
      ) {
        for (const fe in W)
          fe !== "value" &&
            !as(fe) &&
            i(L, fe, null, W[fe], P, h.children, T, N, U);
        "value" in W && i(L, "value", null, W.value),
          (R = W.onVnodeBeforeMount) && Et(R, T, h);
      }
      se && un(h, null, T, "beforeMount");
      const ge = (!N || (N && !N.pendingBranch)) && Q && !Q.persisted;
      ge && Q.beforeEnter(L),
        r(L, v, w),
        ((R = W && W.onVnodeMounted) || ge || se) &&
          Ke(() => {
            R && Et(R, T, h), ge && Q.enter(L), se && un(h, null, T, "mounted");
          }, N);
    },
    re = (h, v, w, T, N) => {
      if ((w && E(h, w), T)) for (let P = 0; P < T.length; P++) E(h, T[P]);
      if (N) {
        let P = N.subTree;
        if (v === P) {
          const B = N.vnode;
          re(h, B, B.scopeId, B.slotScopeIds, N.parent);
        }
      }
    },
    Y = (h, v, w, T, N, P, B, I, L = 0) => {
      for (let R = L; R < h.length; R++) {
        const X = (h[R] = I ? zt(h[R]) : yt(h[R]));
        y(null, X, v, w, T, N, P, B, I);
      }
    },
    J = (h, v, w, T, N, P, B) => {
      const I = (v.el = h.el);
      let { patchFlag: L, dynamicChildren: R, dirs: X } = v;
      L |= h.patchFlag & 16;
      const W = h.props || ye,
        z = v.props || ye;
      let Q;
      w && fn(w, !1),
        (Q = z.onVnodeBeforeUpdate) && Et(Q, w, v, h),
        X && un(v, h, w, "beforeUpdate"),
        w && fn(w, !0);
      const se = N && v.type !== "foreignObject";
      if (
        (R
          ? G(h.dynamicChildren, R, I, w, T, se, P)
          : B || ue(h, v, I, null, w, T, se, P, !1),
        L > 0)
      ) {
        if (L & 16) te(I, v, W, z, w, T, N);
        else if (
          (L & 2 && W.class !== z.class && i(I, "class", null, z.class, N),
          L & 4 && i(I, "style", W.style, z.style, N),
          L & 8)
        ) {
          const ge = v.dynamicProps;
          for (let fe = 0; fe < ge.length; fe++) {
            const be = ge[fe],
              Xe = W[be],
              en = z[be];
            (en !== Xe || be === "value") &&
              i(I, be, Xe, en, N, h.children, w, T, U);
          }
        }
        L & 1 && h.children !== v.children && f(I, v.children);
      } else !B && R == null && te(I, v, W, z, w, T, N);
      ((Q = z.onVnodeUpdated) || X) &&
        Ke(() => {
          Q && Et(Q, w, v, h), X && un(v, h, w, "updated");
        }, T);
    },
    G = (h, v, w, T, N, P, B) => {
      for (let I = 0; I < v.length; I++) {
        const L = h[I],
          R = v[I],
          X =
            L.el && (L.type === We || !pn(L, R) || L.shapeFlag & 70)
              ? p(L.el)
              : w;
        y(L, R, X, null, T, N, P, B, !0);
      }
    },
    te = (h, v, w, T, N, P, B) => {
      if (w !== T) {
        if (w !== ye)
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
    me = (h, v, w, T, N, P, B, I, L) => {
      const R = (v.el = h ? h.el : l("")),
        X = (v.anchor = h ? h.anchor : l(""));
      let { patchFlag: W, dynamicChildren: z, slotScopeIds: Q } = v;
      Q && (I = I ? I.concat(Q) : Q),
        h == null
          ? (r(R, w, T), r(X, w, T), Y(v.children, w, X, N, P, B, I, L))
          : W > 0 && W & 64 && z && h.dynamicChildren
          ? (G(h.dynamicChildren, z, w, N, P, B, I),
            (v.key != null || (N && v === N.subTree)) && Mc(h, v, !0))
          : ue(h, v, w, X, N, P, B, I, L);
    },
    _e = (h, v, w, T, N, P, B, I, L) => {
      (v.slotScopeIds = I),
        h == null
          ? v.shapeFlag & 512
            ? N.ctx.activate(v, w, T, B, L)
            : Ne(v, w, T, N, P, B, L)
          : ke(h, v, L);
    },
    Ne = (h, v, w, T, N, P, B) => {
      const I = (h.component = I_(h, T, N));
      if ((Is(h) && (I.ctx.renderer = ae), M_(I), I.asyncDep)) {
        if ((N && N.registerDep(I, ce), !h.el)) {
          const L = (I.subTree = Oe(It));
          x(null, L, v, w);
        }
        return;
      }
      ce(I, h, v, w, N, P, B);
    },
    ke = (h, v, w) => {
      const T = (v.component = h.component);
      if (Um(h, v, w))
        if (T.asyncDep && !T.asyncResolved) {
          ne(T, v, w);
          return;
        } else (T.next = v), km(T.update), T.update();
      else (v.el = h.el), (T.vnode = v);
    },
    ce = (h, v, w, T, N, P, B) => {
      const I = () => {
          if (h.isMounted) {
            let { next: X, bu: W, u: z, parent: Q, vnode: se } = h,
              ge = X,
              fe;
            fn(h, !1),
              X ? ((X.el = se.el), ne(h, X, B)) : (X = se),
              W && ls(W),
              (fe = X.props && X.props.onVnodeBeforeUpdate) && Et(fe, Q, X, se),
              fn(h, !0);
            const be = ci(h),
              Xe = h.subTree;
            (h.subTree = be),
              y(Xe, be, p(Xe.el), j(Xe), h, N, P),
              (X.el = be.el),
              ge === null && Km(h, be.el),
              z && Ke(z, N),
              (fe = X.props && X.props.onVnodeUpdated) &&
                Ke(() => Et(fe, Q, X, se), N);
          } else {
            let X;
            const { el: W, props: z } = v,
              { bm: Q, m: se, parent: ge } = h,
              fe = us(v);
            if (
              (fn(h, !1),
              Q && ls(Q),
              !fe && (X = z && z.onVnodeBeforeMount) && Et(X, ge, v),
              fn(h, !0),
              W && A)
            ) {
              const be = () => {
                (h.subTree = ci(h)), A(W, h.subTree, h, N, null);
              };
              fe
                ? v.type.__asyncLoader().then(() => !h.isUnmounted && be())
                : be();
            } else {
              const be = (h.subTree = ci(h));
              y(null, be, w, T, h, N, P), (v.el = be.el);
            }
            if ((se && Ke(se, N), !fe && (X = z && z.onVnodeMounted))) {
              const be = v;
              Ke(() => Et(X, ge, be), N);
            }
            (v.shapeFlag & 256 ||
              (ge && us(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
              h.a &&
              Ke(h.a, N),
              (h.isMounted = !0),
              (v = w = T = null);
          }
        },
        L = (h.effect = new ro(I, () => uo(R), h.scope)),
        R = (h.update = () => L.run());
      (R.id = h.uid), fn(h, !0), R();
    },
    ne = (h, v, w) => {
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
    ue = (h, v, w, T, N, P, B, I, L = !1) => {
      const R = h && h.children,
        X = h ? h.shapeFlag : 0,
        W = v.children,
        { patchFlag: z, shapeFlag: Q } = v;
      if (z > 0) {
        if (z & 128) {
          Be(R, W, w, T, N, P, B, I, L);
          return;
        } else if (z & 256) {
          Te(R, W, w, T, N, P, B, I, L);
          return;
        }
      }
      Q & 8
        ? (X & 16 && U(R, N, P), W !== R && f(w, W))
        : X & 16
        ? Q & 16
          ? Be(R, W, w, T, N, P, B, I, L)
          : U(R, N, P, !0)
        : (X & 8 && f(w, ""), Q & 16 && Y(W, w, T, N, P, B, I, L));
    },
    Te = (h, v, w, T, N, P, B, I, L) => {
      (h = h || Hn), (v = v || Hn);
      const R = h.length,
        X = v.length,
        W = Math.min(R, X);
      let z;
      for (z = 0; z < W; z++) {
        const Q = (v[z] = L ? zt(v[z]) : yt(v[z]));
        y(h[z], Q, w, null, N, P, B, I, L);
      }
      R > X ? U(h, N, P, !0, !1, W) : Y(v, w, T, N, P, B, I, L, W);
    },
    Be = (h, v, w, T, N, P, B, I, L) => {
      let R = 0;
      const X = v.length;
      let W = h.length - 1,
        z = X - 1;
      for (; R <= W && R <= z; ) {
        const Q = h[R],
          se = (v[R] = L ? zt(v[R]) : yt(v[R]));
        if (pn(Q, se)) y(Q, se, w, null, N, P, B, I, L);
        else break;
        R++;
      }
      for (; R <= W && R <= z; ) {
        const Q = h[W],
          se = (v[z] = L ? zt(v[z]) : yt(v[z]));
        if (pn(Q, se)) y(Q, se, w, null, N, P, B, I, L);
        else break;
        W--, z--;
      }
      if (R > W) {
        if (R <= z) {
          const Q = z + 1,
            se = Q < X ? v[Q].el : T;
          for (; R <= z; )
            y(null, (v[R] = L ? zt(v[R]) : yt(v[R])), w, se, N, P, B, I, L),
              R++;
        }
      } else if (R > z) for (; R <= W; ) we(h[R], N, P, !0), R++;
      else {
        const Q = R,
          se = R,
          ge = new Map();
        for (R = se; R <= z; R++) {
          const De = (v[R] = L ? zt(v[R]) : yt(v[R]));
          De.key != null && ge.set(De.key, R);
        }
        let fe,
          be = 0;
        const Xe = z - se + 1;
        let en = !1,
          jr = 0;
        const tn = new Array(Xe);
        for (R = 0; R < Xe; R++) tn[R] = 0;
        for (R = Q; R <= W; R++) {
          const De = h[R];
          if (be >= Xe) {
            we(De, N, P, !0);
            continue;
          }
          let nt;
          if (De.key != null) nt = ge.get(De.key);
          else
            for (fe = se; fe <= z; fe++)
              if (tn[fe - se] === 0 && pn(De, v[fe])) {
                nt = fe;
                break;
              }
          nt === void 0
            ? we(De, N, P, !0)
            : ((tn[nt - se] = R + 1),
              nt >= jr ? (jr = nt) : (en = !0),
              y(De, v[nt], w, null, N, P, B, I, L),
              be++);
        }
        const Hr = en ? O_(tn) : Hn;
        for (fe = Hr.length - 1, R = Xe - 1; R >= 0; R--) {
          const De = se + R,
            nt = v[De],
            jt = De + 1 < X ? v[De + 1].el : T;
          tn[R] === 0
            ? y(null, nt, w, jt, N, P, B, I, L)
            : en && (fe < 0 || R !== Hr[fe] ? Le(nt, w, jt, 2) : fe--);
        }
      }
    },
    Le = (h, v, w, T, N = null) => {
      const { el: P, type: B, transition: I, children: L, shapeFlag: R } = h;
      if (R & 6) {
        Le(h.component.subTree, v, w, T);
        return;
      }
      if (R & 128) {
        h.suspense.move(v, w, T);
        return;
      }
      if (R & 64) {
        B.move(h, v, w, ae);
        return;
      }
      if (B === We) {
        r(P, v, w);
        for (let W = 0; W < L.length; W++) Le(L[W], v, w, T);
        r(h.anchor, v, w);
        return;
      }
      if (B === fs) {
        M(h, v, w);
        return;
      }
      if (T !== 2 && R & 1 && I)
        if (T === 0) I.beforeEnter(P), r(P, v, w), Ke(() => I.enter(P), N);
        else {
          const { leave: W, delayLeave: z, afterLeave: Q } = I,
            se = () => r(P, v, w),
            ge = () => {
              W(P, () => {
                se(), Q && Q();
              });
            };
          z ? z(P, se, ge) : ge();
        }
      else r(P, v, w);
    },
    we = (h, v, w, T = !1, N = !1) => {
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
        se = !us(h);
      let ge;
      if ((se && (ge = B && B.onVnodeBeforeUnmount) && Et(ge, v, h), X & 6))
        S(h.component, w, T);
      else {
        if (X & 128) {
          h.suspense.unmount(w, T);
          return;
        }
        Q && un(h, null, v, "beforeUnmount"),
          X & 64
            ? h.type.remove(h, v, w, N, ae, T)
            : R && (P !== We || (W > 0 && W & 64))
            ? U(R, v, w, !1, !0)
            : ((P === We && W & 384) || (!N && X & 16)) && U(L, v, w),
          T && Ye(h);
      }
      ((se && (ge = B && B.onVnodeUnmounted)) || Q) &&
        Ke(() => {
          ge && Et(ge, v, h), Q && un(h, null, v, "unmounted");
        }, w);
    },
    Ye = (h) => {
      const { type: v, el: w, anchor: T, transition: N } = h;
      if (v === We) {
        Ge(w, T);
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
    Ge = (h, v) => {
      let w;
      for (; h !== v; ) (w = g(h)), s(h), (h = w);
      s(v);
    },
    S = (h, v, w) => {
      const { bum: T, scope: N, update: P, subTree: B, um: I } = h;
      T && ls(T),
        N.stop(),
        P && ((P.active = !1), we(B, h, v, w)),
        I && Ke(I, v),
        Ke(() => {
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
      for (let B = P; B < h.length; B++) we(h[B], v, w, T, N);
    },
    j = (h) =>
      h.shapeFlag & 6
        ? j(h.component.subTree)
        : h.shapeFlag & 128
        ? h.suspense.next()
        : g(h.anchor || h.el),
    K = (h, v, w) => {
      h == null
        ? v._vnode && we(v._vnode, null, null, !0)
        : y(v._vnode || null, h, v, null, null, null, w),
        Ma(),
        _c(),
        (v._vnode = h);
    },
    ae = {
      p: y,
      um: we,
      m: Le,
      r: Ye,
      mt: Ne,
      mc: Y,
      pc: ue,
      pbc: G,
      n: j,
      o: e,
    };
  let Ee, A;
  return (
    t && ([Ee, A] = t(ae)), { render: K, hydrate: Ee, createApp: A_(K, Ee) }
  );
}
function fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Mc(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (ee(r) && ee(s))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let l = s[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[i] = zt(s[i])), (l.el = a.el)),
        n || Mc(a, l)),
        l.type === Ms && (l.el = a.el);
    }
}
function O_(e) {
  const t = e.slice(),
    n = [0];
  let r, s, i, a, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const d = e[r];
    if (d !== 0) {
      if (((s = n[n.length - 1]), e[s] < d)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        (l = (i + a) >> 1), e[n[l]] < d ? (i = l + 1) : (a = l);
      d < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; ) (n[i] = a), (a = t[a]);
  return n;
}
const S_ = (e) => e.__isTeleport,
  We = Symbol(void 0),
  Ms = Symbol(void 0),
  It = Symbol(void 0),
  fs = Symbol(void 0),
  Ar = [];
let pt = null;
function dt(e = !1) {
  Ar.push((pt = e ? null : []));
}
function C_() {
  Ar.pop(), (pt = Ar[Ar.length - 1] || null);
}
let Lr = 1;
function za(e) {
  Lr += e;
}
function N_(e) {
  return (
    (e.dynamicChildren = Lr > 0 ? pt || Hn : null),
    C_(),
    Lr > 0 && pt && pt.push(e),
    e
  );
}
function ht(e, t, n, r, s, i) {
  return N_(k(e, t, n, r, s, i, !0));
}
function $i(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ks = "__vInternal",
  kc = ({ key: e }) => (e != null ? e : null),
  ds = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? xe(e) || $e(e) || ie(e)
        ? { i: Ze, r: e, k: t, f: !!n }
        : e
      : null;
function k(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === We ? 0 : 1,
  a = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kc(t),
    ref: t && ds(t),
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
    ctx: Ze,
  };
  return (
    l
      ? (po(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= xe(n) ? 8 : 16),
    Lr > 0 &&
      !a &&
      pt &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      pt.push(c),
    c
  );
}
const Oe = x_;
function x_(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === a_) && (e = It), $i(e))) {
    const l = Jt(e, t, !0);
    return (
      n && po(l, n),
      Lr > 0 &&
        !i &&
        pt &&
        (l.shapeFlag & 6 ? (pt[pt.indexOf(e)] = l) : pt.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((H_(e) && (e = e.__vccOpts), t)) {
    t = R_(t);
    let { class: l, style: c } = t;
    l && !xe(l) && (t.class = Ji(l)),
      Ae(c) && (oc(c) && !ee(c) && (c = Me({}, c)), (t.style = Xi(c)));
  }
  const a = xe(e) ? 1 : Wm(e) ? 128 : S_(e) ? 64 : Ae(e) ? 4 : ie(e) ? 2 : 0;
  return k(e, t, n, r, s, a, i, !0);
}
function R_(e) {
  return e ? (oc(e) || ks in e ? Me({}, e) : e) : null;
}
function Jt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: a } = e,
    l = t ? L_(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && kc(l),
    ref:
      t && t.ref
        ? n && s
          ? ee(s)
            ? s.concat(ds(t))
            : [s, ds(t)]
          : ds(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== We ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Fc(e = " ", t = 0) {
  return Oe(Ms, null, e, t);
}
function Fs(e, t) {
  const n = Oe(fs, null, e);
  return (n.staticCount = t), n;
}
function yt(e) {
  return e == null || typeof e == "boolean"
    ? Oe(It)
    : ee(e)
    ? Oe(We, null, e.slice())
    : typeof e == "object"
    ? zt(e)
    : Oe(Ms, null, String(e));
}
function zt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Jt(e);
}
function po(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ee(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), po(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(ks in t)
        ? (t._ctx = Ze)
        : s === 3 &&
          Ze &&
          (Ze.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ie(t)
      ? ((t = { default: t, _ctx: Ze }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Fc(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function L_(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Ji([t.class, r.class]));
      else if (s === "style") t.style = Xi([t.style, r.style]);
      else if (Ss(s)) {
        const i = t[s],
          a = r[s];
        a &&
          i !== a &&
          !(ee(i) && i.includes(a)) &&
          (t[s] = i ? [].concat(i, a) : a);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function Et(e, t, n, r = null) {
  st(e, t, 7, [n, r]);
}
const D_ = $c();
let P_ = 0;
function I_(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || D_,
    i = {
      uid: P_++,
      vnode: e,
      type: r,
      parent: t,
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
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Lc(r, s),
      emitsOptions: vc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ye,
      inheritAttrs: r.inheritAttrs,
      ctx: ye,
      data: ye,
      props: ye,
      attrs: ye,
      slots: ye,
      refs: ye,
      setupState: ye,
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
    (i.root = t ? t.root : i),
    (i.emit = jm.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Se = null;
const $_ = () => Se || Ze,
  Gn = (e) => {
    (Se = e), e.scope.on();
  },
  En = () => {
    Se && Se.scope.off(), (Se = null);
  };
function Vc(e) {
  return e.vnode.shapeFlag & 4;
}
let Dr = !1;
function M_(e, t = !1) {
  Dr = t;
  const { props: n, children: r } = e.vnode,
    s = Vc(e);
  __(e, n, s, t), E_(e, r);
  const i = s ? k_(e, t) : void 0;
  return (Dr = !1), i;
}
function k_(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ac(new Proxy(e.ctx, u_)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? V_(e) : null);
    Gn(e), ir();
    const i = Gt(r, e, 0, [e.props, s]);
    if ((or(), En(), Wl(i))) {
      if ((i.then(En, En), t))
        return i
          .then((a) => {
            qa(e, a, t);
          })
          .catch((a) => {
            Ls(a, e, 0);
          });
      e.asyncDep = i;
    } else qa(e, i, t);
  } else jc(e, t);
}
function qa(e, t, n) {
  ie(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ae(t) && (e.setupState = fc(t)),
    jc(e, n);
}
let Ya;
function jc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ya && !r.render) {
      const s = r.template || fo(e).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: a } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = r,
          d = Me(Me({ isCustomElement: i, delimiters: l }, a), c);
        r.render = Ya(s, d);
      }
    }
    e.render = r.render || mt;
  }
  Gn(e), ir(), f_(e), or(), En();
}
function F_(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ze(e, "get", "$attrs"), t[n];
    },
  });
}
function V_(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = F_(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Vs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(fc(ac(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in yr) return yr[n](e);
        },
        has(t, n) {
          return n in t || n in yr;
        },
      }))
    );
}
function j_(e, t = !0) {
  return ie(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function H_(e) {
  return ie(e) && "__vccOpts" in e;
}
const Qe = (e, t) => Im(e, t, Dr);
function Hc(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Ae(t) && !ee(t)
      ? $i(t)
        ? Oe(e, null, [t])
        : Oe(e, t)
      : Oe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && $i(n) && (n = [n]),
      Oe(e, t, n));
}
const B_ = Symbol(""),
  U_ = () => Pt(B_),
  K_ = "3.2.47",
  W_ = "http://www.w3.org/2000/svg",
  mn = typeof document != "undefined" ? document : null,
  Ga = mn && mn.createElement("template"),
  z_ = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? mn.createElementNS(W_, e)
        : mn.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => mn.createTextNode(e),
    createComment: (e) => mn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => mn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, i) {
      const a = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        Ga.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Ga.content;
        if (r) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function q_(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Y_(e, t, n) {
  const r = e.style,
    s = xe(n);
  if (n && !s) {
    if (t && !xe(t)) for (const i in t) n[i] == null && Mi(r, i, "");
    for (const i in n) Mi(r, i, n[i]);
  } else {
    const i = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (r.display = i);
  }
}
const Xa = /\s*!important$/;
function Mi(e, t, n) {
  if (ee(n)) n.forEach((r) => Mi(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = G_(e, t);
    Xa.test(n)
      ? e.setProperty(sr(r), n.replace(Xa, ""), "important")
      : (e[r] = n);
  }
}
const Ja = ["Webkit", "Moz", "ms"],
  di = {};
function G_(e, t) {
  const n = di[t];
  if (n) return n;
  let r = St(t);
  if (r !== "filter" && r in e) return (di[t] = r);
  r = xs(r);
  for (let s = 0; s < Ja.length; s++) {
    const i = Ja[s] + r;
    if (i in e) return (di[t] = i);
  }
  return t;
}
const Qa = "http://www.w3.org/1999/xlink";
function X_(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Qa, t.slice(6, t.length))
      : e.setAttributeNS(Qa, t, n);
  else {
    const i = Wp(t);
    n == null || (i && !Bl(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : n);
  }
}
function J_(e, t, n, r, s, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    r && a(r, s, i), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = Bl(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch (c) {}
  l && e.removeAttribute(t);
}
function Fn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Q_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Z_(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}),
    a = i[t];
  if (r && a) a.value = r;
  else {
    const [l, c] = eg(t);
    if (r) {
      const d = (i[t] = rg(r, s));
      Fn(e, l, d, c);
    } else a && (Q_(e, l, a, c), (i[t] = void 0));
  }
}
const Za = /(?:Once|Passive|Capture)$/;
function eg(e) {
  let t;
  if (Za.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Za)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : sr(e.slice(2)), t];
}
let hi = 0;
const tg = Promise.resolve(),
  ng = () => hi || (tg.then(() => (hi = 0)), (hi = Date.now()));
function rg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    st(sg(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = ng()), n;
}
function sg(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const el = /^on[a-z]/,
  ig = (e, t, n, r, s = !1, i, a, l, c) => {
    t === "class"
      ? q_(e, r, s)
      : t === "style"
      ? Y_(e, n, r)
      : Ss(t)
      ? Qi(t) || Z_(e, t, n, r, a)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : og(e, t, r, s)
        )
      ? J_(e, t, r, i, a, l, c)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        X_(e, t, r, s));
  };
function og(e, t, n, r) {
  return r
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && el.test(t) && ie(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (el.test(t) && xe(n))
    ? !1
    : t in e;
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
const tl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (n) => ls(t, n) : t;
};
function lg(e) {
  e.target.composing = !0;
}
function nl(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const At = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = tl(s);
      const i = r || (s.props && s.props.type === "number");
      Fn(e, t ? "change" : "input", (a) => {
        if (a.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), i && (l = Ai(l)), e._assign(l);
      }),
        n &&
          Fn(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Fn(e, "compositionstart", lg),
          Fn(e, "compositionend", nl),
          Fn(e, "change", nl));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      i
    ) {
      if (
        ((e._assign = tl(i)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (r && e.value.trim() === t) ||
              ((s || e.type === "number") && Ai(e.value) === t))))
      )
        return;
      const a = t == null ? "" : t;
      e.value !== a && (e.value = a);
    },
  },
  cg = Me({ patchProp: ig }, z_);
let rl;
function ug() {
  return rl || (rl = w_(cg));
}
const fg = (...e) => {
  const t = ug().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = dg(r);
      if (!s) return;
      const i = t._component;
      !ie(i) && !i.render && !i.template && (i.template = s.innerHTML),
        (s.innerHTML = "");
      const a = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        a
      );
    }),
    t
  );
};
function dg(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const Bc = "./assets/LoremFn-76798e62.png";
const wn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  hg = {
    data() {
      return { error: !0 };
    },
    props: { propsValue: { type: String, default: "Default value" } },
  },
  mo = (e) => ($r("data-v-cc174d01"), (e = e()), Mr(), e),
  pg = { id: "header-container" },
  mg = mo(() => k("img", { class: "logo-image", alt: "", src: Bc }, null, -1)),
  _g = mo(() => k("li", null, "Om oss", -1)),
  gg = mo(() => k("li", null, "Jobba hos oss", -1));
function vg(e, t, n, r, s, i) {
  const a = vn("RouterLink");
  return (
    dt(),
    ht("div", pg, [
      Oe(a, { to: "/" }, { default: zn(() => [mg]), _: 1 }),
      k("ul", null, [
        k("li", null, Ve(this.propsValue), 1),
        Oe(a, { to: "/About/Lorem" }, { default: zn(() => [_g]), _: 1 }),
        gg,
        Oe(
          a,
          { to: "/CalculatorMain" },
          {
            default: zn(() => [
              k(
                "li",
                {
                  onClick:
                    t[0] || (t[0] = (l) => e.$store.commit("changeMainText")),
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
  lr = (e) => ($r("data-v-f1222754"), (e = e()), Mr(), e),
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
function Pg(e, t, n, r, s, i) {
  return (
    dt(),
    ht("div", yg, [
      k("div", Ag, [
        wg,
        k("div", Tg, [
          k("div", Og, [
            Sg,
            Cg,
            Ng,
            xg,
            Rg,
            k("a", Lg, "Sedan " + Ve(this.propsValue), 1),
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
function Mg(e, t, n, r, s, i) {
  const a = vn("HeaderMain"),
    l = vn("RouterView"),
    c = vn("FooterMain");
  return (
    dt(),
    ht(
      We,
      null,
      [
        Oe(a, { "props-value": "Lösningar" }),
        k("main", null, [Oe(l)]),
        Oe(c, { "props-value": 1996 }),
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
  var e;
  return (
    $n !== void 0 ||
      (typeof window != "undefined" && window.performance
        ? (($n = !0), (ki = window.performance))
        : typeof global != "undefined" &&
          !((e = global.perf_hooks) === null || e === void 0) &&
          e.performance
        ? (($n = !0), (ki = global.perf_hooks.performance))
        : ($n = !1)),
    $n
  );
}
function Ug() {
  return Bg() ? ki.now() : Date.now();
}
class Kg {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const a in t.settings) {
        const l = t.settings[a];
        r[a] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
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
  setRealTarget(t) {
    return Ca(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue) this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Wg(e, t) {
  const n = e,
    r = Uc(),
    s = Fg(),
    i = Vg && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i)) s.emit(jg, e, t);
  else {
    const a = i ? new Kg(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a,
    }),
      a && t(a.proxiedTarget);
  }
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Vn = typeof window != "undefined";
function zg(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ve = Object.assign;
function pi(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = _t(s) ? s.map(e) : e(s);
  }
  return n;
}
const wr = () => {},
  _t = Array.isArray,
  qg = /\/$/,
  Yg = (e) => e.replace(qg, "");
function mi(e, t, n = "/") {
  let r,
    s = {},
    i = "",
    a = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((r = t.slice(0, c)),
      (i = t.slice(c + 1, l > -1 ? l : t.length)),
      (s = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (a = t.slice(l, t.length))),
    (r = Qg(r != null ? r : t, n)),
    { fullPath: r + (i && "?") + i + a, path: r, query: s, hash: a }
  );
}
function Gg(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function sl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Xg(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Xn(t.matched[r], n.matched[s]) &&
    Kc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Xn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Kc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Jg(e[n], t[n])) return !1;
  return !0;
}
function Jg(e, t) {
  return _t(e) ? il(e, t) : _t(t) ? il(t, e) : e === t;
}
function il(e, t) {
  return _t(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Qg(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/");
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
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Pr || (Pr = {}));
var Tr;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Tr || (Tr = {}));
function Zg(e) {
  if (!e)
    if (Vn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Yg(e);
}
const ev = /^[^#]+#/;
function tv(e, t) {
  return e.replace(ev, "#") + t;
}
function nv(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const js = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function rv(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = nv(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function ol(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Fi = new Map();
function sv(e, t) {
  Fi.set(e, t);
}
function iv(e) {
  const t = Fi.get(e);
  return Fi.delete(e), t;
}
let ov = () => location.protocol + "//" + location.host;
function Wc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), sl(c, "");
  }
  return sl(n, e) + r + s;
}
function av(e, t, n, r) {
  let s = [],
    i = [],
    a = null;
  const l = ({ state: g }) => {
    const E = Wc(e, location),
      b = n.value,
      y = t.value;
    let D = 0;
    if (g) {
      if (((n.value = E), (t.value = g), a && a === b)) {
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
    g.state && g.replaceState(ve({}, g.state, { scroll: js() }), "");
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
function al(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? js() : null,
  };
}
function lv(e) {
  const { history: t, location: n } = window,
    r = { value: Wc(e, n) },
    s = { value: t.state };
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, d, f) {
    const p = e.indexOf("#"),
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + c
          : ov() + e + c;
    try {
      t[f ? "replaceState" : "pushState"](d, "", g), (s.value = d);
    } catch (E) {
      console.error(E), n[f ? "replace" : "assign"](g);
    }
  }
  function a(c, d) {
    const f = ve({}, t.state, al(s.value.back, c, s.value.forward, !0), d, {
      position: s.value.position,
    });
    i(c, f, !0), (r.value = c);
  }
  function l(c, d) {
    const f = ve({}, s.value, t.state, { forward: c, scroll: js() });
    i(f.current, f, !0);
    const p = ve({}, al(r.value, c, null), { position: f.position + 1 }, d);
    i(c, p, !1), (r.value = c);
  }
  return { location: r, state: s, push: l, replace: a };
}
function cv(e) {
  e = Zg(e);
  const t = lv(e),
    n = av(e, t.state, t.location, t.replace);
  function r(i, a = !0) {
    a || n.pauseListeners(), history.go(i);
  }
  const s = ve(
    { location: "", base: e, go: r, createHref: tv.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  );
}
function uv(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    cv(e)
  );
}
function fv(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function zc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Kt = {
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
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(ll || (ll = {}));
function Jn(e, t) {
  return ve(new Error(), { type: e, [qc]: !0 }, t);
}
function Lt(e, t) {
  return e instanceof Error && qc in e && (t == null || !!(e.type & t));
}
const cl = "[^/]+?",
  dv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  hv = /[.+*?^${}()[\]/\\]/g;
function pv(e, t) {
  const n = ve({}, dv, t),
    r = [];
  let s = n.start ? "^" : "";
  const i = [];
  for (const d of e) {
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
    for (const g of e) {
      (!p || !f.endsWith("/")) && (f += "/"), (p = !1);
      for (const E of g)
        if (E.type === 0) f += E.value;
        else if (E.type === 1) {
          const { value: b, repeatable: y, optional: D } = E,
            x = b in d ? d[b] : "";
          if (_t(x) && !y)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            );
          const F = _t(x) ? x.join("/") : x;
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
function mv(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function _v(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
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
function ul(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const gv = { type: 0, value: "" },
  vv = /[a-zA-Z0-9_]/;
function Ev(e) {
  if (!e) return [[]];
  if (e === "/") return [[gv]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(E) {
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
            t(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: d,
            regexp: f,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (d = ""));
  }
  function g() {
    d += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && n !== 2)) {
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
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), p(), a(), s;
}
function bv(e, t, n) {
  const r = pv(Ev(e.path), n),
    s = ve(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function yv(e, t) {
  const n = [],
    r = new Map();
  t = hl({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(f) {
    return r.get(f);
  }
  function i(f, p, g) {
    const E = !g,
      b = Av(f);
    b.aliasOf = g && g.record;
    const y = hl(t, f),
      D = [b];
    if ("alias" in f) {
      const M = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const H of M)
        D.push(
          ve({}, b, {
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
        (E = ve(
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
        (E = ve({}, p.params, f.params)),
        (b = g.stringify(E));
    }
    const D = [];
    let x = g;
    for (; x; ) D.unshift(x.record), (x = x.parent);
    return { name: y, path: b, params: E, matched: D, meta: Tv(D) };
  }
  return (
    e.forEach((f) => i(f)),
    {
      addRoute: i,
      resolve: d,
      removeRoute: a,
      getRoutes: l,
      getRecordMatcher: s,
    }
  );
}
function fl(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Av(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: wv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function wv(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function dl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Tv(e) {
  return e.reduce((t, n) => ve(t, n.meta), {});
}
function hl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Yc(e, t) {
  return t.children.some((n) => n === e || Yc(e, n));
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
function _o(e) {
  return encodeURI("" + e)
    .replace(Dv, "|")
    .replace(xv, "[")
    .replace(Rv, "]");
}
function Iv(e) {
  return _o(e).replace(Qc, "{").replace(Zc, "}").replace(Jc, "^");
}
function Vi(e) {
  return _o(e)
    .replace(Xc, "%2B")
    .replace(Pv, "+")
    .replace(Gc, "%23")
    .replace(Ov, "%26")
    .replace(Lv, "`")
    .replace(Qc, "{")
    .replace(Zc, "}")
    .replace(Jc, "^");
}
function $v(e) {
  return Vi(e).replace(Cv, "%3D");
}
function Mv(e) {
  return _o(e).replace(Gc, "%23").replace(Nv, "%3F");
}
function kv(e) {
  return e == null ? "" : Mv(e).replace(Sv, "%2F");
}
function As(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {}
  return "" + e;
}
function Fv(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(Xc, " "),
      a = i.indexOf("="),
      l = As(a < 0 ? i : i.slice(0, a)),
      c = a < 0 ? null : As(i.slice(a + 1));
    if (l in t) {
      let d = t[l];
      _t(d) || (d = t[l] = [d]), d.push(c);
    } else t[l] = c;
  }
  return t;
}
function pl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = $v(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (_t(r) ? r.map((i) => i && Vi(i)) : [r && Vi(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function Vv(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = _t(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const jv = Symbol(""),
  ml = Symbol(""),
  go = Symbol(""),
  eu = Symbol(""),
  ji = Symbol("");
function vr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function qt(e, t, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (p) => {
          p === !1
            ? l(Jn(4, { from: n, to: t }))
            : p instanceof Error
            ? l(p)
            : fv(p)
            ? l(Jn(2, { from: t, to: p }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof p == "function" &&
                i.push(p),
              a());
        },
        d = e.call(r && r.instances[s], t, n, c);
      let f = Promise.resolve(d);
      e.length < 3 && (f = f.then(c)), f.catch((p) => l(p));
    });
}
function _i(e, t, n, r) {
  const s = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (Hv(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(qt(d, n, r, i, a));
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
              const g = (f.__vccOpts || f)[t];
              return g && qt(g, n, r, i, a)();
            })
          );
        }
    }
  return s;
}
function Hv(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function _l(e) {
  const t = Pt(go),
    n = Pt(eu),
    r = Qe(() => t.resolve(Kn(e.to))),
    s = Qe(() => {
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
    i = Qe(() => s.value > -1 && Wv(n.params, r.value.params)),
    a = Qe(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Kc(n.params, r.value.params)
    );
  function l(c = {}) {
    return Kv(c)
      ? t[Kn(e.replace) ? "replace" : "push"](Kn(e.to)).catch(wr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: Qe(() => r.value.href),
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
    setup(e, { slots: t }) {
      const n = ar(_l(e)),
        { options: r } = Pt(go),
        s = Qe(() => ({
          [vl(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [vl(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : Hc(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
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
function Kv(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Wv(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == "string") {
      if (r !== s) return !1;
    } else if (!_t(s) || s.length !== r.length || r.some((i, a) => i !== s[a]))
      return !1;
  }
  return !0;
}
function gl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const vl = (e, t, n) => (e != null ? e : t != null ? t : n),
  zv = wc({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Pt(ji),
        s = Qe(() => e.route || r.value),
        i = Pt(ml, 0),
        a = Qe(() => {
          let d = Kn(i);
          const { matched: f } = s.value;
          let p;
          for (; (p = f[d]) && !p.components; ) d++;
          return d;
        }),
        l = Qe(() => s.value.matched[a.value]);
      cs(
        ml,
        Qe(() => a.value + 1)
      ),
        cs(jv, l),
        cs(ji, s);
      const c = xm();
      return (
        qn(
          () => [c.value, l.value, e.name],
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
            f = e.name,
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
              ve({}, b, t, {
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
function El(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const qv = zv;
function Yv(e) {
  const t = yv(e.routes, e),
    n = e.parseQuery || Fv,
    r = e.stringifyQuery || pl,
    s = e.history,
    i = vr(),
    a = vr(),
    l = vr(),
    c = Rm(Kt);
  let d = Kt;
  Vn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = pi.bind(null, (S) => "" + S),
    p = pi.bind(null, kv),
    g = pi.bind(null, As);
  function E(S, U) {
    let j, K;
    return (
      zc(S) ? ((j = t.getRecordMatcher(S)), (K = U)) : (K = S), t.addRoute(K, j)
    );
  }
  function b(S) {
    const U = t.getRecordMatcher(S);
    U && t.removeRoute(U);
  }
  function y() {
    return t.getRoutes().map((S) => S.record);
  }
  function D(S) {
    return !!t.getRecordMatcher(S);
  }
  function x(S, U) {
    if (((U = ve({}, U || c.value)), typeof S == "string")) {
      const h = mi(n, S, U.path),
        v = t.resolve({ path: h.path }, U),
        w = s.createHref(h.fullPath);
      return ve(h, v, {
        params: g(v.params),
        hash: As(h.hash),
        redirectedFrom: void 0,
        href: w,
      });
    }
    let j;
    if ("path" in S) j = ve({}, S, { path: mi(n, S.path, U.path).path });
    else {
      const h = ve({}, S.params);
      for (const v in h) h[v] == null && delete h[v];
      (j = ve({}, S, { params: p(S.params) })), (U.params = p(U.params));
    }
    const K = t.resolve(j, U),
      ae = S.hash || "";
    K.params = f(g(K.params));
    const Ee = Gg(r, ve({}, S, { hash: Iv(ae), path: K.path })),
      A = s.createHref(Ee);
    return ve(
      { fullPath: Ee, hash: ae, query: r === pl ? Vv(S.query) : S.query || {} },
      K,
      { redirectedFrom: void 0, href: A }
    );
  }
  function F(S) {
    return typeof S == "string" ? mi(n, S, c.value.path) : ve({}, S);
  }
  function M(S, U) {
    if (d !== S) return Jn(8, { from: U, to: S });
  }
  function H(S) {
    return re(S);
  }
  function q(S) {
    return H(ve(F(S), { replace: !0 }));
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
        ve(
          { query: S.query, hash: S.hash, params: "path" in K ? {} : S.params },
          K
        )
      );
    }
  }
  function re(S, U) {
    const j = (d = x(S)),
      K = c.value,
      ae = S.state,
      Ee = S.force,
      A = S.replace === !0,
      h = Z(j);
    if (h)
      return re(
        ve(F(h), {
          state: typeof h == "object" ? ve({}, ae, h.state) : ae,
          force: Ee,
          replace: A,
        }),
        U || j
      );
    const v = j;
    v.redirectedFrom = U;
    let w;
    return (
      !Ee &&
        Xg(r, K, j) &&
        ((w = Jn(16, { to: v, from: K })), Be(K, K, !0, !1)),
      (w ? Promise.resolve(w) : J(v, K))
        .catch((T) => (Lt(T) ? (Lt(T, 2) ? T : Te(T)) : ne(T, v, K)))
        .then((T) => {
          if (T) {
            if (Lt(T, 2))
              return re(
                ve({ replace: A }, F(T.to), {
                  state: typeof T.to == "object" ? ve({}, ae, T.to.state) : ae,
                  force: Ee,
                }),
                U || v
              );
          } else T = te(v, K, !0, A, ae);
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
    const [K, ae, Ee] = Gv(S, U);
    j = _i(K.reverse(), "beforeRouteLeave", S, U);
    for (const h of K)
      h.leaveGuards.forEach((v) => {
        j.push(qt(v, S, U));
      });
    const A = Y.bind(null, S, U);
    return (
      j.push(A),
      Mn(j)
        .then(() => {
          j = [];
          for (const h of i.list()) j.push(qt(h, S, U));
          return j.push(A), Mn(j);
        })
        .then(() => {
          j = _i(ae, "beforeRouteUpdate", S, U);
          for (const h of ae)
            h.updateGuards.forEach((v) => {
              j.push(qt(v, S, U));
            });
          return j.push(A), Mn(j);
        })
        .then(() => {
          j = [];
          for (const h of S.matched)
            if (h.beforeEnter && !U.matched.includes(h))
              if (_t(h.beforeEnter))
                for (const v of h.beforeEnter) j.push(qt(v, S, U));
              else j.push(qt(h.beforeEnter, S, U));
          return j.push(A), Mn(j);
        })
        .then(
          () => (
            S.matched.forEach((h) => (h.enterCallbacks = {})),
            (j = _i(Ee, "beforeRouteEnter", S, U)),
            j.push(A),
            Mn(j)
          )
        )
        .then(() => {
          j = [];
          for (const h of a.list()) j.push(qt(h, S, U));
          return j.push(A), Mn(j);
        })
        .catch((h) => (Lt(h, 8) ? h : Promise.reject(h)))
    );
  }
  function G(S, U, j) {
    for (const K of l.list()) K(S, U, j);
  }
  function te(S, U, j, K, ae) {
    const Ee = M(S, U);
    if (Ee) return Ee;
    const A = U === Kt,
      h = Vn ? history.state : {};
    j &&
      (K || A
        ? s.replace(S.fullPath, ve({ scroll: A && h && h.scroll }, ae))
        : s.push(S.fullPath, ae)),
      (c.value = S),
      Be(S, U, j, A),
      Te();
  }
  let me;
  function _e() {
    me ||
      (me = s.listen((S, U, j) => {
        if (!Ge.listening) return;
        const K = x(S),
          ae = Z(K);
        if (ae) {
          re(ve(ae, { replace: !0 }), K).catch(wr);
          return;
        }
        d = K;
        const Ee = c.value;
        Vn && sv(ol(Ee.fullPath, j.delta), js()),
          J(K, Ee)
            .catch((A) =>
              Lt(A, 12)
                ? A
                : Lt(A, 2)
                ? (re(A.to, K)
                    .then((h) => {
                      Lt(h, 20) &&
                        !j.delta &&
                        j.type === Pr.pop &&
                        s.go(-1, !1);
                    })
                    .catch(wr),
                  Promise.reject())
                : (j.delta && s.go(-j.delta, !1), ne(A, K, Ee))
            )
            .then((A) => {
              (A = A || te(K, Ee, !1)),
                A &&
                  (j.delta && !Lt(A, 8)
                    ? s.go(-j.delta, !1)
                    : j.type === Pr.pop && Lt(A, 20) && s.go(-1, !1)),
                G(K, Ee, A);
            })
            .catch(wr);
      }));
  }
  let Ne = vr(),
    ke = vr(),
    ce;
  function ne(S, U, j) {
    Te(S);
    const K = ke.list();
    return (
      K.length ? K.forEach((ae) => ae(S, U, j)) : console.error(S),
      Promise.reject(S)
    );
  }
  function ue() {
    return ce && c.value !== Kt
      ? Promise.resolve()
      : new Promise((S, U) => {
          Ne.add([S, U]);
        });
  }
  function Te(S) {
    return (
      ce ||
        ((ce = !S),
        _e(),
        Ne.list().forEach(([U, j]) => (S ? j(S) : U())),
        Ne.reset()),
      S
    );
  }
  function Be(S, U, j, K) {
    const { scrollBehavior: ae } = e;
    if (!Vn || !ae) return Promise.resolve();
    const Ee =
      (!j && iv(ol(S.fullPath, 0))) ||
      ((K || !j) && history.state && history.state.scroll) ||
      null;
    return pc()
      .then(() => ae(S, U, Ee))
      .then((A) => A && rv(A))
      .catch((A) => ne(A, S, U));
  }
  const Le = (S) => s.go(S);
  let we;
  const Ye = new Set(),
    Ge = {
      currentRoute: c,
      listening: !0,
      addRoute: E,
      removeRoute: b,
      hasRoute: D,
      getRoutes: y,
      resolve: x,
      options: e,
      push: H,
      replace: q,
      go: Le,
      back: () => Le(-1),
      forward: () => Le(1),
      beforeEach: i.add,
      beforeResolve: a.add,
      afterEach: l.add,
      onError: ke.add,
      isReady: ue,
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
            !we &&
            c.value === Kt &&
            ((we = !0), H(s.location).catch((ae) => {}));
        const j = {};
        for (const ae in Kt) j[ae] = Qe(() => c.value[ae]);
        S.provide(go, U), S.provide(eu, ar(j)), S.provide(ji, c);
        const K = S.unmount;
        Ye.add(S),
          (S.unmount = function () {
            Ye.delete(S),
              Ye.size < 1 &&
                ((d = Kt),
                me && me(),
                (me = null),
                (c.value = Kt),
                (we = !1),
                (ce = !1)),
              K();
          });
      },
    };
  return Ge;
}
function Mn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Gv(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((d) => Xn(d, l)) ? r.push(l) : n.push(l));
    const c = e.matched[a];
    c && (t.matched.find((d) => Xn(d, c)) || s.push(c));
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
function Qv(e, t, n, r, s, i) {
  return (
    dt(),
    ht("div", Jv, [
      k(
        "h3",
        null,
        "Med en årsavkastning på " + Ve(s.increaseInterestedrate) + "%",
        1
      ),
      bt(
        k(
          "input",
          {
            "onUpdate:modelValue":
              t[0] || (t[0] = (a) => (s.increaseInterestedrate = a)),
            onInput:
              t[1] || (t[1] = (...a) => i.changeRate && i.changeRate(...a)),
            min: "0",
            max: "20",
            type: "range",
          },
          null,
          544
        ),
        [[At, s.increaseInterestedrate]]
      ),
    ])
  );
}
const Zv = wn(Xv, [
  ["render", Qv],
  ["__scopeId", "data-v-e138e60c"],
]);
const eE = {
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
        set(e) {
          if (e.endsWith(" kr")) {
            const t = e.substring(0, e.length - 3);
            if (!isNaN(t)) {
              this.startValue = Number(t);
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
        set(e) {
          if (e.endsWith(" år")) {
            const t = e.substring(0, e.length - 3);
            if (!isNaN(t)) {
              this.timeSaving = Number(t);
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
        set(e) {
          if (e.endsWith(" kr")) {
            const t = e.substring(0, e.length - 3);
            if (!isNaN(t)) {
              this.monthlySaving = Number(t);
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
      increaseRate(e) {
        (this.newFutureValue =
          this.startValue * Math.pow(1 + e / 12, this.timeSaving * 12)),
          (this.newfutureValue = new Intl.NumberFormat("sv-SE").format(
            Math.trunc(
              this.newfutureValue +
                (this.monthlySaving *
                  (Math.pow(1 + e / 12, this.timeSaving * 12) - 1)) /
                  (e / 12)
            )
          ));
      },
    },
  },
  Tn = (e) => ($r("data-v-1a98c49c"), (e = e()), Mr(), e),
  tE = { id: "container" },
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
function _E(e, t, n, r, s, i) {
  const a = vn("ChildComponent");
  return (
    dt(),
    ht("div", tE, [
      k("div", nE, [
        rE,
        sE,
        k("div", iE, [
          oE,
          k("div", aE, [
            bt(
              k(
                "input",
                {
                  ref: "currency",
                  "onUpdate:modelValue":
                    t[0] || (t[0] = (l) => (i.currencyValue = l)),
                  onInput:
                    t[1] ||
                    (t[1] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, i.currencyValue]]
            ),
            bt(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    t[2] || (t[2] = (l) => (s.startValue = l)),
                  type: "range",
                  min: "0",
                  max: "1000000",
                  onInput:
                    t[3] ||
                    (t[3] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, s.startValue]]
            ),
          ]),
          lE,
          k("div", cE, [
            bt(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    t[4] || (t[4] = (l) => (i.yearsValue = l)),
                  onInput:
                    t[5] ||
                    (t[5] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, i.yearsValue]]
            ),
            bt(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    t[6] || (t[6] = (l) => (s.timeSaving = l)),
                  type: "range",
                  min: "0",
                  max: "100",
                  onInput:
                    t[7] ||
                    (t[7] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, s.timeSaving]]
            ),
          ]),
          uE,
          k("div", fE, [
            bt(
              k(
                "input",
                {
                  ref: "currencyMonthly",
                  "onUpdate:modelValue":
                    t[8] || (t[8] = (l) => (i.currencyValueMonthly = l)),
                  onInput:
                    t[9] ||
                    (t[9] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, i.currencyValueMonthly]]
            ),
            bt(
              k(
                "input",
                {
                  "onUpdate:modelValue":
                    t[10] || (t[10] = (l) => (s.monthlySaving = l)),
                  type: "range",
                  min: "0",
                  max: "50000",
                  onInput:
                    t[11] ||
                    (t[11] = (...l) => i.calculator && i.calculator(...l)),
                },
                null,
                544
              ),
              [[At, s.monthlySaving]]
            ),
          ]),
        ]),
        k("div", dE, [
          k(
            "h3",
            null,
            " Resultatet hade genererat dig följande efter " +
              Ve(s.timeSaving) +
              " år av sparande: ",
            1
          ),
          k("h3", hE, Ve(s.futureValue) + " kr", 1),
          Oe(a, { onIncreaseRate: i.increaseRate }, null, 8, [
            "onIncreaseRate",
          ]),
          pE,
          k("h2", null, Ve(s.newFutureValue) + " kr", 1),
          mE,
        ]),
      ]),
    ])
  );
}
const gE = wn(eE, [
  ["render", _E],
  ["__scopeId", "data-v-1a98c49c"],
]);
function tu(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: nu } = Object.prototype,
  { getPrototypeOf: vo } = Object,
  Eo = ((e) => (t) => {
    const n = nu.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Vt = (e) => ((e = e.toLowerCase()), (t) => Eo(t) === e),
  Hs = (e) => (t) => typeof t === e,
  { isArray: cr } = Array,
  Ir = Hs("undefined");
function vE(e) {
  return (
    e !== null &&
    !Ir(e) &&
    e.constructor !== null &&
    !Ir(e.constructor) &&
    Qt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ru = Vt("ArrayBuffer");
function EE(e) {
  let t;
  return (
    typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ru(e.buffer)),
    t
  );
}
const bE = Hs("string"),
  Qt = Hs("function"),
  su = Hs("number"),
  bo = (e) => e !== null && typeof e == "object",
  yE = (e) => e === !0 || e === !1,
  hs = (e) => {
    if (Eo(e) !== "object") return !1;
    const t = vo(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  AE = Vt("Date"),
  wE = Vt("File"),
  TE = Vt("Blob"),
  OE = Vt("FileList"),
  SE = (e) => bo(e) && Qt(e.pipe),
  CE = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        nu.call(e) === t ||
        (Qt(e.toString) && e.toString() === t))
    );
  },
  NE = Vt("URLSearchParams"),
  xE = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function kr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), cr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function iu(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
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
  au = (e) => !Ir(e) && e !== ou;
function Hi() {
  const { caseless: e } = (au(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && iu(t, s)) || s;
      hs(t[i]) && hs(r)
        ? (t[i] = Hi(t[i], r))
        : hs(r)
        ? (t[i] = Hi({}, r))
        : cr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && kr(arguments[r], n);
  return t;
}
const RE = (e, t, n, { allOwnKeys: r } = {}) => (
    kr(
      t,
      (s, i) => {
        n && Qt(s) ? (e[i] = tu(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  LE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  DE = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  PE = (e, t, n, r) => {
    let s, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (a = s[i]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && vo(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  IE = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $E = (e) => {
    if (!e) return null;
    if (cr(e)) return e;
    let t = e.length;
    if (!su(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ME = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != "undefined" && vo(Uint8Array)),
  kE = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  FE = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  VE = Vt("HTMLFormElement"),
  jE = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  bl = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  HE = Vt("RegExp"),
  lu = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    kr(n, (s, i) => {
      t(s, i, e) !== !1 && (r[i] = s);
    }),
      Object.defineProperties(e, r);
  },
  BE = (e) => {
    lu(e, (t, n) => {
      if (Qt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Qt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  UE = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return cr(e) ? r(e) : r(String(e).split(t)), n;
  },
  KE = () => {},
  WE = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  gi = "abcdefghijklmnopqrstuvwxyz",
  yl = "0123456789",
  cu = { DIGIT: yl, ALPHA: gi, ALPHA_DIGIT: gi + gi.toUpperCase() + yl },
  zE = (e = 16, t = cu.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function qE(e) {
  return !!(
    e &&
    Qt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const YE = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (bo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = cr(r) ? [] : {};
            return (
              kr(r, (a, l) => {
                const c = n(a, s + 1);
                !Ir(c) && (i[l] = c);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
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
    isFunction: Qt,
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
    kindOfTest: Vt,
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
function he(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
C.inherits(he, Error, {
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
const uu = he.prototype,
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
].forEach((e) => {
  fu[e] = { value: e };
});
Object.defineProperties(he, fu);
Object.defineProperty(uu, "isAxiosError", { value: !0 });
he.from = (e, t, n, r, s, i) => {
  const a = Object.create(uu);
  return (
    C.toFlatObject(
      e,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    he.call(a, e.message, t, n, r, s),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const GE = null;
function Bi(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function du(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Al(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = du(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function XE(e) {
  return C.isArray(e) && !e.some(Bi);
}
const JE = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Bs(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
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
      C.isSpecCompliantForm(t);
  if (!C.isFunction(s)) throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if (C.isDate(b)) return b.toISOString();
    if (!c && C.isBlob(b))
      throw new he("Blob is not supported. Use a Buffer instead.");
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
              t.append(
                a === !0 ? Al([y], H, i) : a === null ? y : y + "[]",
                d(M)
              );
          }),
          !1
        );
    }
    return Bi(b) ? !0 : (t.append(Al(D, y, i), d(b)), !1);
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
            s.call(t, x, C.isString(F) ? F.trim() : F, y, g)) === !0 &&
            E(x, y ? y.concat(F) : [F]);
        }),
        p.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return E(e), t;
}
function wl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function yo(e, t) {
  (this._pairs = []), e && Bs(e, this, t);
}
const hu = yo.prototype;
hu.append = function (t, n) {
  this._pairs.push([t, n]);
};
hu.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, wl);
      }
    : wl;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function QE(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function pu(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || QE,
    s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = C.isURLSearchParams(t) ? t.toString() : new yo(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ZE {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Tl = ZE,
  mu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  eb = typeof URLSearchParams != "undefined" ? URLSearchParams : yo,
  tb = FormData,
  nb = (() => {
    let e;
    return typeof navigator != "undefined" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window != "undefined" && typeof document != "undefined";
  })(),
  rb = (() =>
    typeof WorkerGlobalScope != "undefined" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Tt = {
    isBrowser: !0,
    classes: { URLSearchParams: eb, FormData: tb, Blob },
    isStandardBrowserEnv: nb,
    isStandardBrowserWebWorkerEnv: rb,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function sb(e, t) {
  return Bs(
    e,
    new Tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Tt.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ib(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function ob(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function _u(e) {
  function t(n, r, s, i) {
    let a = n[i++];
    const l = Number.isFinite(+a),
      c = i >= n.length;
    return (
      (a = !a && C.isArray(s) ? s.length : a),
      c
        ? (C.hasOwnProp(s, a) ? (s[a] = [s[a], r]) : (s[a] = r), !l)
        : ((!s[a] || !C.isObject(s[a])) && (s[a] = []),
          t(n, r, s[a], i) && C.isArray(s[a]) && (s[a] = ob(s[a])),
          !l)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, s) => {
        t(ib(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
const ab = { "Content-Type": void 0 };
function lb(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Us = {
  transitional: mu,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return s && s ? JSON.stringify(_u(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return sb(t, this.formSerializer).toString();
        if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Bs(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), lb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Us.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && C.isString(t) && ((r && !this.responseType) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? he.from(l, he.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Tt.classes.FormData, Blob: Tt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
C.forEach(["delete", "get", "head"], function (t) {
  Us.headers[t] = {};
});
C.forEach(["post", "put", "patch"], function (t) {
  Us.headers[t] = C.merge(ab);
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
  ub = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (s = a.indexOf(":")),
              (n = a.substring(0, s).trim().toLowerCase()),
              (r = a.substring(s + 1).trim()),
              !(!n || (t[n] && cb[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ol = Symbol("internals");
function Er(e) {
  return e && String(e).trim().toLowerCase();
}
function ps(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(ps) : String(e);
}
function fb(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function db(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function vi(e, t, n, r) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if (C.isString(t)) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function hb(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function pb(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, a) {
        return this[r].call(this, t, s, i, a);
      },
      configurable: !0,
    });
  });
}
class Ks {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
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
      C.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : C.isString(t) && (t = t.trim()) && !db(t)
        ? a(ub(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Er(t)), t)) {
      const r = C.findKey(this, t);
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
  has(t, n) {
    if (((t = Er(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || vi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(a) {
      if (((a = Er(a)), a)) {
        const l = C.findKey(r, a);
        l && (!n || vi(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || vi(this, this[i], i, t)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (s, i) => {
        const a = C.findKey(r, i);
        if (a) {
          (n[a] = ps(s)), delete n[i];
          return;
        }
        const l = t ? hb(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = ps(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ol] = this[Ol] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(a) {
      const l = Er(a);
      r[l] || (pb(s, a), (r[l] = !0));
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
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
const $t = Ks;
function Ei(e, t) {
  const n = this || Ao,
    r = t || n,
    s = $t.from(r.headers);
  let i = r.data;
  return (
    C.forEach(e, function (l) {
      i = l.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function gu(e) {
  return !!(e && e.__CANCEL__);
}
function Fr(e, t, n) {
  he.call(this, e == null ? "canceled" : e, he.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(Fr, he, { __CANCEL__: !0 });
function mb(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new he(
          "Request failed with status code " + n.status,
          [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const _b = Tt.isStandardBrowserEnv
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
function gb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function vb(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vu(e, t) {
  return e && !gb(t) ? vb(e, t) : t;
}
const Eb = Tt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(i) {
        let a = i;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
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
function bb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function yb(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const d = Date.now(),
        f = r[i];
      a || (a = d), (n[s] = c), (r[s] = d);
      let p = i,
        g = 0;
      for (; p !== s; ) (g += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), d - a < t)) return;
      const E = f && d - f;
      return E ? Math.round((g * 1e3) / E) : void 0;
    }
  );
}
function Sl(e, t) {
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
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const Ab = typeof XMLHttpRequest != "undefined",
  wb =
    Ab &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const i = $t.from(e.headers).normalize(),
          a = e.responseType;
        let l;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        C.isFormData(s) &&
          (Tt.isStandardBrowserEnv || Tt.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let d = new XMLHttpRequest();
        if (e.auth) {
          const E = e.auth.username || "",
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(E + ":" + b));
        }
        const f = vu(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), pu(f, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function p() {
          if (!d) return;
          const E = $t.from(
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
              config: e,
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
              (r(new he("Request aborted", he.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new he("Network Error", he.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let b = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || mu;
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new he(
                  b,
                  y.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Tt.isStandardBrowserEnv)
        ) {
          const E =
            (e.withCredentials || Eb(f)) &&
            e.xsrfCookieName &&
            _b.read(e.xsrfCookieName);
          E && i.set(e.xsrfHeaderName, E);
        }
        s === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            C.forEach(i.toJSON(), function (b, y) {
              d.setRequestHeader(y, b);
            }),
          C.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          a && a !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", Sl(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", Sl(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (E) => {
              d &&
                (r(!E || E.type ? new Fr(null, e, d) : E),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const g = bb(f);
        if (g && Tt.protocols.indexOf(g) === -1) {
          r(new he("Unsupported protocol " + g + ":", he.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(s || null);
      });
    },
  ms = { http: GE, xhr: wb };
C.forEach(ms, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (n) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tb = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let s = 0;
      s < t && ((n = e[s]), !(r = C.isString(n) ? ms[n.toLowerCase()] : n));
      s++
    );
    if (!r)
      throw r === !1
        ? new he(
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
function bi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Fr(null, e);
}
function Cl(e) {
  return (
    bi(e),
    (e.headers = $t.from(e.headers)),
    (e.data = Ei.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Tb.getAdapter(e.adapter || Ao.adapter)(e).then(
      function (r) {
        return (
          bi(e),
          (r.data = Ei.call(e, e.transformResponse, r)),
          (r.headers = $t.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          gu(r) ||
            (bi(e),
            r &&
              r.response &&
              ((r.response.data = Ei.call(e, e.transformResponse, r.response)),
              (r.response.headers = $t.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Nl = (e) => (e instanceof $t ? e.toJSON() : e);
function Qn(e, t) {
  t = t || {};
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
    if (p in t) return r(d, f);
    if (p in e) return r(void 0, d);
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
    C.forEach(Object.keys(e).concat(Object.keys(t)), function (f) {
      const p = c[f] || s,
        g = p(e[f], t[f], f);
      (C.isUndefined(g) && p !== l) || (n[f] = g);
    }),
    n
  );
}
const Eu = "1.3.2",
  wo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    wo[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const xl = {};
wo.transitional = function (t, n, r) {
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
    if (t === !1)
      throw new he(
        s(a, " has been removed" + (n ? " in " + n : "")),
        he.ERR_DEPRECATED
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
      t ? t(i, a, l) : !0
    );
  };
};
function Ob(e, t, n) {
  if (typeof e != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      a = t[i];
    if (a) {
      const l = e[i],
        c = l === void 0 || a(l, i, e);
      if (c !== !0)
        throw new he("option " + i + " must be " + c, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new he("Unknown option " + i, he.ERR_BAD_OPTION);
  }
}
const Ui = { assertOptions: Ob, validators: wo },
  Wt = Ui.validators;
class ws {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Tl(), response: new Tl() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Qn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Ui.assertOptions(
        r,
        {
          silentJSONParsing: Wt.transitional(Wt.boolean),
          forcedJSONParsing: Wt.transitional(Wt.boolean),
          clarifyTimeoutError: Wt.transitional(Wt.boolean),
        },
        !1
      ),
      s !== void 0 &&
        Ui.assertOptions(
          s,
          { encode: Wt.function, serialize: Wt.function },
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
      (n.headers = $t.concat(a, i));
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
  getUri(t) {
    t = Qn(this.defaults, t);
    const n = vu(t.baseURL, t.url);
    return pu(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  ws.prototype[t] = function (n, r) {
    return this.request(
      Qn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        Qn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (ws.prototype[t] = n()), (ws.prototype[t + "Form"] = n(!0));
});
const _s = ws;
class To {
  constructor(t) {
    if (typeof t != "function")
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
      t(function (i, a, l) {
        r.reason || ((r.reason = new Fr(i, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new To(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const Sb = To;
function Cb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Nb(e) {
  return C.isObject(e) && e.isAxiosError === !0;
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
Object.entries(Ki).forEach(([e, t]) => {
  Ki[t] = e;
});
const xb = Ki;
function bu(e) {
  const t = new _s(e),
    n = tu(_s.prototype.request, t);
  return (
    C.extend(n, _s.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return bu(Qn(e, s));
    }),
    n
  );
}
const Re = bu(Ao);
Re.Axios = _s;
Re.CanceledError = Fr;
Re.CancelToken = Sb;
Re.isCancel = gu;
Re.VERSION = Eu;
Re.toFormData = Bs;
Re.AxiosError = he;
Re.Cancel = Re.CanceledError;
Re.all = function (t) {
  return Promise.all(t);
};
Re.spread = Cb;
Re.isAxiosError = Nb;
Re.mergeConfig = Qn;
Re.AxiosHeaders = $t;
Re.formToJSON = (e) => _u(C.isHTMLForm(e) ? new FormData(e) : e);
Re.HttpStatusCode = xb;
Re.default = Re;
const Rl = Re,
  Rb = "./assets/blocks-bg-89b2de70.png";
const Lb = {
    created() {
      Rl.get(
        "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=SEK&apikey=0VM7EK5D4W5JPHH7"
      ).then((e) => {
        this.lastUpdate = e.data["Meta Data"]["5. Last Refreshed"];
        const t = e.data["Time Series FX (Daily)"],
          n = Object.keys(t)[0];
        this.dailyValue = t[n]["4. close"];
      }),
        Rl.get(
          "https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=USD&to_symbol=SEK&apikey=0VM7EK5D4W5JPHH7"
        ).then((e) => {
          this.fetchValues = [
            {
              date: "2020-06-31",
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              id: "f5954868-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2023-01-31"]["4. close"],
            },
            {
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              date: "2021-01-29",
              id: "f595231a-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2021-01-29"]["4. close"],
            },
            {
              date: "2021-06-30",
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              id: "f59526da-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2021-06-30"]["4. close"],
            },
            {
              date: "2022-01-31",
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              id: "f5952d2e-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2022-01-31"]["4. close"],
            },
            {
              date: "2022-06-30",
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              id: "f59538be-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2022-06-30"]["4. close"],
            },
            {
              date: "2023-01-31",
              from: e.data["Meta Data"]["2. From Symbol"],
              to: e.data["Meta Data"]["3. To Symbol"],
              id: "f5954868-a624-11ed-afa1-0242ac120002",
              value:
                e.data["Time Series FX (Monthly)"]["2023-01-31"]["4. close"],
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
      email(e) {
        e.includes("@") &&
          !this.emailAdded &&
          ((this.email = e + "gmail.com"), (this.emailAdded = !0));
      },
    },
  },
  Nt = (e) => ($r("data-v-ee26f8e4"), (e = e()), Mr(), e),
  Db = { id: "background-container" },
  Pb = { id: "background-container-text" },
  Ib = { id: "btn-container" },
  $b = Nt(() => k("button", { id: "read-more-btn" }, "Läs mer", -1)),
  Mb = Nt(() => k("img", { id: "bg-image", alt: "", src: Rb }, null, -1)),
  kb = { id: "main-container" },
  Fb = { id: "main-position" },
  Vb = Nt(() => k("h3", null, "Nuvarande valuta (USD till SEK)", -1)),
  jb = Nt(() => k("h4", null, "Senast uppdaterad", -1)),
  Hb = { style: { "text-decoration": "underline" } },
  Bb = { id: "daily-value-container" },
  Ub = Nt(() => k("h3", null, "Idag står dagens valuta på:", -1)),
  Kb = { style: { "font-size": "3rem", "text-decoration": "underline" } },
  Wb = { id: "current-currency-container" },
  zb = { id: "form-container" },
  qb = { id: "form-total" },
  Yb = Nt(() => k("h2", null, "Kom i kontakt med oss!", -1)),
  Gb = { id: "form-position" },
  Xb = { class: "form-box" },
  Jb = Nt(() => k("label", { for: "name" }, "Förnamn: *", -1)),
  Qb = Nt(() => k("label", { for: "lastname" }, "Efternamn: *", -1)),
  Zb = Nt(() => k("label", { for: "email" }, "Email: *", -1)),
  ey = Fs(
    '<div class="form-box" data-v-ee26f8e4><label for="city" data-v-ee26f8e4>Stad:</label><input name="city" class="form-input" data-v-ee26f8e4><label for="phone" data-v-ee26f8e4>Telefon:</label><input name="phone" class="form-input" data-v-ee26f8e4><label for="company" data-v-ee26f8e4>Företag:</label><input name="company" class="form-input" data-v-ee26f8e4></div>',
    1
  ),
  ty = Fs(
    '<div id="checkbox-container" data-v-ee26f8e4><h3 data-v-ee26f8e4>Intresse:</h3><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="stocks" checked data-v-ee26f8e4><label for="stocks" data-v-ee26f8e4>Aktier</label></div><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="funds" data-v-ee26f8e4><label for="funds" data-v-ee26f8e4>Fonder</label></div><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="indexfunds" data-v-ee26f8e4><label for="indexfunds" data-v-ee26f8e4>Indexfonder</label></div><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="metals" data-v-ee26f8e4><label for="metals" data-v-ee26f8e4>Ädelmetaller</label></div><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="crypto" data-v-ee26f8e4><label for="crypto" data-v-ee26f8e4>Kryptovalutor</label></div><div class="checkbox-alt" data-v-ee26f8e4><input type="checkbox" name="properties" data-v-ee26f8e4><label for="properties" data-v-ee26f8e4>Fastigheter</label></div></div>',
    1
  ),
  ny = { id: "form-message-container" },
  ry = Nt(() => k("label", { for: "message" }, "Meddelande:", -1)),
  sy = ["placeholder"],
  iy = { key: 0 },
  oy = { key: 1 };
function ay(e, t, n, r, s, i) {
  const a = vn("RouterLink");
  return (
    dt(),
    ht(
      We,
      null,
      [
        k("div", Db, [
          k("div", Pb, [
            k("h1", null, Ve(this.$store.state.welcomeText), 1),
            k("h2", null, Ve(this.$store.state.welcomeTextLower), 1),
            k("div", Ib, [
              Oe(a, { to: "/About/Lorem" }, { default: zn(() => [$b]), _: 1 }),
              Oe(
                a,
                { to: "/CalculatorMain" },
                {
                  default: zn(() => [
                    k(
                      "button",
                      {
                        onClick:
                          t[0] ||
                          (t[0] = (l) => e.$store.commit("changeMainText")),
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
            k("p", Hb, Ve(s.lastUpdate), 1),
            k("div", Bb, [Ub, k("h2", Kb, Ve(s.dailyValue) + " SEK ", 1)]),
          ]),
          k("div", Wb, [
            (dt(!0),
            ht(
              We,
              null,
              c_(
                s.fetchValues,
                (l) => (
                  dt(),
                  ht("div", { key: l.id, id: "currency-box" }, [
                    k("h3", null, Ve(l.date), 1),
                    k(
                      "p",
                      null,
                      "En " + Ve(l.from) + " detta datum motsvarande följande:",
                      1
                    ),
                    k("h4", null, Ve(l.value) + " " + Ve(l.to), 1),
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
                bt(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (l) => (s.name = l)),
                      name: "name",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[At, s.name]]
                ),
                Qb,
                bt(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        t[2] || (t[2] = (l) => (s.lastname = l)),
                      name: "lastname",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[At, s.lastname]]
                ),
                Zb,
                bt(
                  k(
                    "input",
                    {
                      "onUpdate:modelValue":
                        t[3] || (t[3] = (l) => (s.email = l)),
                      name: "email",
                      class: "form-input",
                    },
                    null,
                    512
                  ),
                  [[At, s.email]]
                ),
              ]),
              ey,
            ]),
            ty,
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
                ? (dt(), ht("button", iy, " Skicka "))
                : (dt(), ht("p", oy, "Fyll i alla obligatoriska fält")),
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
  ["__scopeId", "data-v-ee26f8e4"],
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
function uy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var s = [null];
        s.push.apply(s, arguments);
        var i = Function.bind.apply(t, s);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r];
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
    set exports(e) {
      Ll = e;
    },
  },
  je = "top",
  et = "bottom",
  tt = "right",
  He = "left",
  Ws = "auto",
  ur = [je, et, tt, He],
  yn = "start",
  Zn = "end",
  yu = "clippingParents",
  Oo = "viewport",
  jn = "popper",
  Au = "reference",
  Wi = ur.reduce(function (e, t) {
    return e.concat([t + "-" + yn, t + "-" + Zn]);
  }, []),
  So = [].concat(ur, [Ws]).reduce(function (e, t) {
    return e.concat([t, t + "-" + yn, t + "-" + Zn]);
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
function Ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ot(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function An(e) {
  var t = ot(e).Element;
  return e instanceof t || e instanceof Element;
}
function it(e) {
  var t = ot(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Co(e) {
  if (typeof ShadowRoot == "undefined") return !1;
  var t = ot(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function dy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      s = t.attributes[n] || {},
      i = t.elements[n];
    !it(i) ||
      !Ct(i) ||
      (Object.assign(i.style, r),
      Object.keys(s).forEach(function (a) {
        var l = s[a];
        l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
      }));
  });
}
function hy(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var s = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          l = a.reduce(function (c, d) {
            return (c[d] = ""), c;
          }, {});
        !it(s) ||
          !Ct(s) ||
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
function Ot(e) {
  return e.split("-")[0];
}
var bn = Math.max,
  Ts = Math.min,
  er = Math.round;
function zi() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Pu() {
  return !/^((?!chrome|android).)*safari/i.test(zi());
}
function tr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    s = 1,
    i = 1;
  t &&
    it(e) &&
    ((s = (e.offsetWidth > 0 && er(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && er(r.height) / e.offsetHeight) || 1));
  var a = An(e) ? ot(e) : window,
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
function xo(e) {
  var t = tr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Iu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Co(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kt(e) {
  return ot(e).getComputedStyle(e);
}
function py(e) {
  return ["table", "td", "th"].indexOf(Ct(e)) >= 0;
}
function Zt(e) {
  return ((An(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function zs(e) {
  return Ct(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Co(e) ? e.host : null) || Zt(e);
}
function Dl(e) {
  return !it(e) || kt(e).position === "fixed" ? null : e.offsetParent;
}
function my(e) {
  var t = /firefox/i.test(zi()),
    n = /Trident/i.test(zi());
  if (n && it(e)) {
    var r = kt(e);
    if (r.position === "fixed") return null;
  }
  var s = zs(e);
  for (Co(s) && (s = s.host); it(s) && ["html", "body"].indexOf(Ct(s)) < 0; ) {
    var i = kt(s);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return s;
    s = s.parentNode;
  }
  return null;
}
function Vr(e) {
  for (var t = ot(e), n = Dl(e); n && py(n) && kt(n).position === "static"; )
    n = Dl(n);
  return n &&
    (Ct(n) === "html" || (Ct(n) === "body" && kt(n).position === "static"))
    ? t
    : n || my(e) || t;
}
function Ro(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Or(e, t, n) {
  return bn(e, Ts(t, n));
}
function _y(e, t, n) {
  var r = Or(e, t, n);
  return r > n ? n : r;
}
function $u() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Mu(e) {
  return Object.assign({}, $u(), e);
}
function ku(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var gy = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Mu(typeof t != "number" ? t : ku(t, ur))
  );
};
function vy(e) {
  var t,
    n = e.state,
    r = e.name,
    s = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = Ot(n.placement),
    c = Ro(l),
    d = [He, tt].indexOf(l) >= 0,
    f = d ? "height" : "width";
  if (!(!i || !a)) {
    var p = gy(s.padding, n),
      g = xo(i),
      E = c === "y" ? je : He,
      b = c === "y" ? et : tt,
      y =
        n.rects.reference[f] + n.rects.reference[c] - a[c] - n.rects.popper[f],
      D = a[c] - n.rects.reference[c],
      x = Vr(i),
      F = x ? (c === "y" ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      M = y / 2 - D / 2,
      H = p[E],
      q = F - g[f] - p[b],
      Z = F / 2 - g[f] / 2 + M,
      re = Or(H, Z, q),
      Y = c;
    n.modifiersData[r] = ((t = {}), (t[Y] = re), (t.centerOffset = re - Z), t);
  }
}
function Ey(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null &&
    ((typeof s == "string" && ((s = t.elements.popper.querySelector(s)), !s)) ||
      (Iu(t.elements.popper, s) && (t.elements.arrow = s)));
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
function nr(e) {
  return e.split("-")[1];
}
var by = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yy(e) {
  var t = e.x,
    n = e.y,
    r = window,
    s = r.devicePixelRatio || 1;
  return { x: er(t * s) / s || 0, y: er(n * s) / s || 0 };
}
function Pl(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    s = e.placement,
    i = e.variation,
    a = e.offsets,
    l = e.position,
    c = e.gpuAcceleration,
    d = e.adaptive,
    f = e.roundOffsets,
    p = e.isFixed,
    g = a.x,
    E = g === void 0 ? 0 : g,
    b = a.y,
    y = b === void 0 ? 0 : b,
    D = typeof f == "function" ? f({ x: E, y }) : { x: E, y };
  (E = D.x), (y = D.y);
  var x = a.hasOwnProperty("x"),
    F = a.hasOwnProperty("y"),
    M = He,
    H = je,
    q = window;
  if (d) {
    var Z = Vr(n),
      re = "clientHeight",
      Y = "clientWidth";
    if (
      (Z === ot(n) &&
        ((Z = Zt(n)),
        kt(Z).position !== "static" &&
          l === "absolute" &&
          ((re = "scrollHeight"), (Y = "scrollWidth"))),
      (Z = Z),
      s === je || ((s === He || s === tt) && i === Zn))
    ) {
      H = et;
      var J =
        p && Z === q && q.visualViewport ? q.visualViewport.height : Z[re];
      (y -= J - r.height), (y *= c ? 1 : -1);
    }
    if (s === He || ((s === je || s === et) && i === Zn)) {
      M = tt;
      var G = p && Z === q && q.visualViewport ? q.visualViewport.width : Z[Y];
      (E -= G - r.width), (E *= c ? 1 : -1);
    }
  }
  var te = Object.assign({ position: l }, d && by),
    me = f === !0 ? yy({ x: E, y }) : { x: E, y };
  if (((E = me.x), (y = me.y), c)) {
    var _e;
    return Object.assign(
      {},
      te,
      ((_e = {}),
      (_e[H] = F ? "0" : ""),
      (_e[M] = x ? "0" : ""),
      (_e.transform =
        (q.devicePixelRatio || 1) <= 1
          ? "translate(" + E + "px, " + y + "px)"
          : "translate3d(" + E + "px, " + y + "px, 0)"),
      _e)
    );
  }
  return Object.assign(
    {},
    te,
    ((t = {}),
    (t[H] = F ? y + "px" : ""),
    (t[M] = x ? E + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Ay(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    s = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    l = n.roundOffsets,
    c = l === void 0 ? !0 : l,
    d = {
      placement: Ot(t.placement),
      variation: nr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: s,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Pl(
        Object.assign({}, d, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: c,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Pl(
          Object.assign({}, d, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
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
function wy(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    s = r.scroll,
    i = s === void 0 ? !0 : s,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    c = ot(t.elements.popper),
    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
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
function gs(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ty[t];
  });
}
var Oy = { start: "end", end: "start" };
function Il(e) {
  return e.replace(/start|end/g, function (t) {
    return Oy[t];
  });
}
function Po(e) {
  var t = ot(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Io(e) {
  return tr(Zt(e)).left + Po(e).scrollLeft;
}
function Sy(e, t) {
  var n = ot(e),
    r = Zt(e),
    s = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    c = 0;
  if (s) {
    (i = s.width), (a = s.height);
    var d = Pu();
    (d || (!d && t === "fixed")) && ((l = s.offsetLeft), (c = s.offsetTop));
  }
  return { width: i, height: a, x: l + Io(e), y: c };
}
function Cy(e) {
  var t,
    n = Zt(e),
    r = Po(e),
    s = (t = e.ownerDocument) == null ? void 0 : t.body,
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
    l = -r.scrollLeft + Io(e),
    c = -r.scrollTop;
  return (
    kt(s || n).direction === "rtl" &&
      (l += bn(n.clientWidth, s ? s.clientWidth : 0) - i),
    { width: i, height: a, x: l, y: c }
  );
}
function $o(e) {
  var t = kt(e),
    n = t.overflow,
    r = t.overflowX,
    s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Vu(e) {
  return ["html", "body", "#document"].indexOf(Ct(e)) >= 0
    ? e.ownerDocument.body
    : it(e) && $o(e)
    ? e
    : Vu(zs(e));
}
function Sr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Vu(e),
    s = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = ot(r),
    a = s ? [i].concat(i.visualViewport || [], $o(r) ? r : []) : r,
    l = t.concat(a);
  return s ? l : l.concat(Sr(zs(a)));
}
function qi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Ny(e, t) {
  var n = tr(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function $l(e, t, n) {
  return t === Oo ? qi(Sy(e, n)) : An(t) ? Ny(t, n) : qi(Cy(Zt(e)));
}
function xy(e) {
  var t = Sr(zs(e)),
    n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0,
    r = n && it(e) ? Vr(e) : e;
  return An(r)
    ? t.filter(function (s) {
        return An(s) && Iu(s, r) && Ct(s) !== "body";
      })
    : [];
}
function Ry(e, t, n, r) {
  var s = t === "clippingParents" ? xy(e) : [].concat(t),
    i = [].concat(s, [n]),
    a = i[0],
    l = i.reduce(function (c, d) {
      var f = $l(e, d, r);
      return (
        (c.top = bn(f.top, c.top)),
        (c.right = Ts(f.right, c.right)),
        (c.bottom = Ts(f.bottom, c.bottom)),
        (c.left = bn(f.left, c.left)),
        c
      );
    }, $l(e, a, r));
  return (
    (l.width = l.right - l.left),
    (l.height = l.bottom - l.top),
    (l.x = l.left),
    (l.y = l.top),
    l
  );
}
function ju(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    s = r ? Ot(r) : null,
    i = r ? nr(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    c;
  switch (s) {
    case je:
      c = { x: a, y: t.y - n.height };
      break;
    case et:
      c = { x: a, y: t.y + t.height };
      break;
    case tt:
      c = { x: t.x + t.width, y: l };
      break;
    case He:
      c = { x: t.x - n.width, y: l };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var d = s ? Ro(s) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (i) {
      case yn:
        c[d] = c[d] - (t[f] / 2 - n[f] / 2);
        break;
      case Zn:
        c[d] = c[d] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return c;
}
function rr(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    s = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
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
    M = e.rects.popper,
    H = e.elements[b ? F : g],
    q = Ry(An(H) ? H : H.contextElement || Zt(e.elements.popper), c, f, a),
    Z = tr(e.elements.reference),
    re = ju({ reference: Z, element: M, strategy: "absolute", placement: s }),
    Y = qi(Object.assign({}, M, re)),
    J = g === jn ? Y : Z,
    G = {
      top: q.top - J.top + x.top,
      bottom: J.bottom - q.bottom + x.bottom,
      left: q.left - J.left + x.left,
      right: J.right - q.right + x.right,
    },
    te = e.modifiersData.offset;
  if (g === jn && te) {
    var me = te[s];
    Object.keys(G).forEach(function (_e) {
      var Ne = [tt, et].indexOf(_e) >= 0 ? 1 : -1,
        ke = [je, et].indexOf(_e) >= 0 ? "y" : "x";
      G[_e] += me[ke] * Ne;
    });
  }
  return G;
}
function Ly(e, t) {
  t === void 0 && (t = {});
  var n = t,
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
      (b[y] = rr(e, { placement: y, boundary: s, rootBoundary: i, padding: a })[
        Ot(y)
      ]),
      b
    );
  }, {});
  return Object.keys(E).sort(function (b, y) {
    return E[b] - E[y];
  });
}
function Dy(e) {
  if (Ot(e) === Ws) return [];
  var t = gs(e);
  return [Il(e), t, Il(t)];
}
function Py(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
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
        D = t.options.placement,
        x = Ot(D),
        F = x === D,
        M = c || (F || !b ? [gs(D)] : Dy(D)),
        H = [D].concat(M).reduce(function (Ge, S) {
          return Ge.concat(
            Ot(S) === Ws
              ? Ly(t, {
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
        q = t.rects.reference,
        Z = t.rects.popper,
        re = new Map(),
        Y = !0,
        J = H[0],
        G = 0;
      G < H.length;
      G++
    ) {
      var te = H[G],
        me = Ot(te),
        _e = nr(te) === yn,
        Ne = [je, et].indexOf(me) >= 0,
        ke = Ne ? "width" : "height",
        ce = rr(t, {
          placement: te,
          boundary: f,
          rootBoundary: p,
          altBoundary: g,
          padding: d,
        }),
        ne = Ne ? (_e ? tt : He) : _e ? et : je;
      q[ke] > Z[ke] && (ne = gs(ne));
      var ue = gs(ne),
        Te = [];
      if (
        (i && Te.push(ce[me] <= 0),
        l && Te.push(ce[ne] <= 0, ce[ue] <= 0),
        Te.every(function (Ge) {
          return Ge;
        }))
      ) {
        (J = te), (Y = !1);
        break;
      }
      re.set(te, Te);
    }
    if (Y)
      for (
        var Be = b ? 3 : 1,
          Le = function (S) {
            var U = H.find(function (j) {
              var K = re.get(j);
              if (K)
                return K.slice(0, S).every(function (ae) {
                  return ae;
                });
            });
            if (U) return (J = U), "break";
          },
          we = Be;
        we > 0;
        we--
      ) {
        var Ye = Le(we);
        if (Ye === "break") break;
      }
    t.placement !== J &&
      ((t.modifiersData[r]._skip = !0), (t.placement = J), (t.reset = !0));
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
function Ml(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function kl(e) {
  return [je, tt, et, He].some(function (t) {
    return e[t] >= 0;
  });
}
function Iy(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    s = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = rr(t, { elementContext: "reference" }),
    l = rr(t, { altBoundary: !0 }),
    c = Ml(a, r),
    d = Ml(l, s, i),
    f = kl(c),
    p = kl(d);
  (t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: f,
    hasPopperEscaped: p,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
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
function $y(e, t, n) {
  var r = Ot(e),
    s = [He, je].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    l = i[1];
  return (
    (a = a || 0),
    (l = (l || 0) * s),
    [He, tt].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function My(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    s = n.offset,
    i = s === void 0 ? [0, 0] : s,
    a = So.reduce(function (f, p) {
      return (f[p] = $y(p, t.rects, i)), f;
    }, {}),
    l = a[t.placement],
    c = l.x,
    d = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c),
    (t.modifiersData.popperOffsets.y += d)),
    (t.modifiersData[r] = a);
}
const Uu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: My,
};
function ky(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = ju({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const Mo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ky,
  data: {},
};
function Fy(e) {
  return e === "x" ? "y" : "x";
}
function Vy(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
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
    D = rr(t, { boundary: c, rootBoundary: d, padding: p, altBoundary: f }),
    x = Ot(t.placement),
    F = nr(t.placement),
    M = !F,
    H = Ro(x),
    q = Fy(H),
    Z = t.modifiersData.popperOffsets,
    re = t.rects.reference,
    Y = t.rects.popper,
    J =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    G =
      typeof J == "number"
        ? { mainAxis: J, altAxis: J }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, J),
    te = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    me = { x: 0, y: 0 };
  if (Z) {
    if (i) {
      var _e,
        Ne = H === "y" ? je : He,
        ke = H === "y" ? et : tt,
        ce = H === "y" ? "height" : "width",
        ne = Z[H],
        ue = ne + D[Ne],
        Te = ne - D[ke],
        Be = E ? -Y[ce] / 2 : 0,
        Le = F === yn ? re[ce] : Y[ce],
        we = F === yn ? -Y[ce] : -re[ce],
        Ye = t.elements.arrow,
        Ge = E && Ye ? xo(Ye) : { width: 0, height: 0 },
        S = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : $u(),
        U = S[Ne],
        j = S[ke],
        K = Or(0, re[ce], Ge[ce]),
        ae = M ? re[ce] / 2 - Be - K - U - G.mainAxis : Le - K - U - G.mainAxis,
        Ee = M
          ? -re[ce] / 2 + Be + K + j + G.mainAxis
          : we + K + j + G.mainAxis,
        A = t.elements.arrow && Vr(t.elements.arrow),
        h = A ? (H === "y" ? A.clientTop || 0 : A.clientLeft || 0) : 0,
        v = (_e = te == null ? void 0 : te[H]) != null ? _e : 0,
        w = ne + ae - v - h,
        T = ne + Ee - v,
        N = Or(E ? Ts(ue, w) : ue, ne, E ? bn(Te, T) : Te);
      (Z[H] = N), (me[H] = N - ne);
    }
    if (l) {
      var P,
        B = H === "x" ? je : He,
        I = H === "x" ? et : tt,
        L = Z[q],
        R = q === "y" ? "height" : "width",
        X = L + D[B],
        W = L - D[I],
        z = [je, He].indexOf(x) !== -1,
        Q = (P = te == null ? void 0 : te[q]) != null ? P : 0,
        se = z ? X : L - re[R] - Y[R] - Q + G.altAxis,
        ge = z ? L + re[R] + Y[R] - Q - G.altAxis : W,
        fe = E && z ? _y(se, L, ge) : Or(E ? se : X, L, E ? ge : W);
      (Z[q] = fe), (me[q] = fe - L);
    }
    t.modifiersData[r] = me;
  }
}
const Ku = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vy,
  requiresIfExists: ["offset"],
};
function jy(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Hy(e) {
  return e === ot(e) || !it(e) ? Po(e) : jy(e);
}
function By(e) {
  var t = e.getBoundingClientRect(),
    n = er(t.width) / e.offsetWidth || 1,
    r = er(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Uy(e, t, n) {
  n === void 0 && (n = !1);
  var r = it(t),
    s = it(t) && By(t),
    i = Zt(t),
    a = tr(e, s, n),
    l = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Ct(t) !== "body" || $o(i)) && (l = Hy(t)),
      it(t)
        ? ((c = tr(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop))
        : i && (c.x = Io(i))),
    {
      x: a.left + l.scrollLeft - c.x,
      y: a.top + l.scrollTop - c.y,
      width: a.width,
      height: a.height,
    }
  );
}
function Ky(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function s(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && s(c);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || s(i);
    }),
    r
  );
}
function Wy(e) {
  var t = Ky(e);
  return Du.reduce(function (n, r) {
    return n.concat(
      t.filter(function (s) {
        return s.phase === r;
      })
    );
  }, []);
}
function zy(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function qy(e) {
  var t = e.reduce(function (n, r) {
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
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Fl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function qs(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    s = t.defaultOptions,
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
                  re = q.options,
                  Y = re === void 0 ? {} : re,
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
        bottom: et,
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
        left: He,
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
        right: tt,
        start: yn,
        top: je,
        variationPlacements: Wi,
        viewport: Oo,
        write: Ru,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  eA = uy(Zy);
/*!
 * Bootstrap v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r(eA);
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
      re = [],
      Y = (m) => {
        document.readyState === "loading"
          ? (re.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const o of re) o();
              }),
            re.push(m))
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
      te = (m) => {
        typeof m == "function" && m();
      },
      me = (m, o, u = !0) => {
        if (!u) {
          te(m);
          return;
        }
        const _ = 5,
          O = E(o) + _;
        let V = !1;
        const $ = ({ target: le }) => {
          le === o && ((V = !0), o.removeEventListener(l, $), te(m));
        };
        o.addEventListener(l, $),
          setTimeout(() => {
            V || b(o);
          }, O);
      },
      _e = (m, o, u, _) => {
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
      Ne = /[^.]*(?=\..*)\.|.*/,
      ke = /\..*/,
      ce = /::\d+$/,
      ne = {};
    let ue = 1;
    const Te = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Be = new Set([
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
    function Le(m, o) {
      return (o && `${o}::${ue++}`) || m.uidEvent || ue++;
    }
    function we(m) {
      const o = Le(m);
      return (m.uidEvent = o), (ne[o] = ne[o] || {}), ne[o];
    }
    function Ye(m, o) {
      return function u(_) {
        return (
          h(_, { delegateTarget: m }),
          u.oneOff && A.off(m, _.type, o),
          o.apply(m, [_])
        );
      };
    }
    function Ge(m, o, u) {
      return function _(O) {
        const V = m.querySelectorAll(o);
        for (let { target: $ } = O; $ && $ !== this; $ = $.parentNode)
          for (const le of V)
            if (le === $)
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
      let V = Ee(m);
      return Be.has(V) || (V = m), [_, O, V];
    }
    function j(m, o, u, _, O) {
      if (typeof o != "string" || !m) return;
      let [V, $, le] = U(o, u, _);
      o in Te &&
        ($ = ((Ip) =>
          function (In) {
            if (
              !In.relatedTarget ||
              (In.relatedTarget !== In.delegateTarget &&
                !In.delegateTarget.contains(In.relatedTarget))
            )
              return Ip.call(this, In);
          })($));
      const Ue = we(m),
        Je = Ue[le] || (Ue[le] = {}),
        Ce = S(Je, $, V ? u : null);
      if (Ce) {
        Ce.oneOff = Ce.oneOff && O;
        return;
      }
      const ct = Le($, o.replace(Ne, "")),
        vt = V ? Ge(m, u, $) : Ye(m, $);
      (vt.delegationSelector = V ? u : null),
        (vt.callable = $),
        (vt.oneOff = O),
        (vt.uidEvent = ct),
        (Je[ct] = vt),
        m.addEventListener(le, vt, V);
    }
    function K(m, o, u, _, O) {
      const V = S(o[u], _, O);
      V && (m.removeEventListener(u, V, Boolean(O)), delete o[u][V.uidEvent]);
    }
    function ae(m, o, u, _) {
      const O = o[u] || {};
      for (const V of Object.keys(O))
        if (V.includes(_)) {
          const $ = O[V];
          K(m, o, u, $.callable, $.delegationSelector);
        }
    }
    function Ee(m) {
      return (m = m.replace(ke, "")), Te[m] || m;
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
          le = $ !== o,
          Ue = we(m),
          Je = Ue[$] || {},
          Ce = o.startsWith(".");
        if (typeof V != "undefined") {
          if (!Object.keys(Je).length) return;
          K(m, Ue, $, V, O ? u : null);
          return;
        }
        if (Ce) for (const ct of Object.keys(Ue)) ae(m, Ue, ct, o.slice(1));
        for (const ct of Object.keys(Je)) {
          const vt = ct.replace(ce, "");
          if (!le || o.includes(vt)) {
            const gr = Je[ct];
            K(m, Ue, $, gr.callable, gr.delegationSelector);
          }
        }
      },
      trigger(m, o, u) {
        if (typeof o != "string" || !m) return null;
        const _ = Z(),
          O = Ee(o),
          V = o !== O;
        let $ = null,
          le = !0,
          Ue = !0,
          Je = !1;
        V &&
          _ &&
          (($ = _.Event(o, u)),
          _(m).trigger($),
          (le = !$.isPropagationStopped()),
          (Ue = !$.isImmediatePropagationStopped()),
          (Je = $.isDefaultPrevented()));
        let Ce = new Event(o, { bubbles: le, cancelable: !0 });
        return (
          (Ce = h(Ce, u)),
          Je && Ce.preventDefault(),
          Ue && m.dispatchEvent(Ce),
          Ce.defaultPrevented && $ && $.preventDefault(),
          Ce
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
        return Pe(
          Pe(
            Pe(Pe({}, this.constructor.Default), typeof _ == "object" ? _ : {}),
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
        me(o, u, _);
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
      se = `closed${z}`,
      ge = "fade",
      fe = "show";
    class be extends L {
      static get NAME() {
        return X;
      }
      close() {
        if (A.trigger(this._element, Q).defaultPrevented) return;
        this._element.classList.remove(fe);
        const u = this._element.classList.contains(ge);
        this._queueCallback(() => this._destroyElement(), this._element, u);
      }
      _destroyElement() {
        this._element.remove(), A.trigger(this._element, se), this.dispose();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = be.getOrCreateInstance(this);
          if (typeof o == "string") {
            if (u[o] === void 0 || o.startsWith("_") || o === "constructor")
              throw new TypeError(`No method named "${o}"`);
            u[o](this);
          }
        });
      }
    }
    R(be, "close"), G(be);
    const Xe = "button",
      jr = ".bs.button",
      tn = ".data-api",
      Hr = "active",
      De = '[data-bs-toggle="button"]',
      nt = `click${jr}${tn}`;
    class jt extends L {
      static get NAME() {
        return Xe;
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle(Hr)
        );
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = jt.getOrCreateInstance(this);
          o === "toggle" && u[o]();
        });
      }
    }
    A.on(document, nt, De, (m) => {
      m.preventDefault();
      const o = m.target.closest(De);
      jt.getOrCreateInstance(o).toggle();
    }),
      G(jt);
    const oe = {
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
      ef = "swipe",
      Sn = ".bs.swipe",
      tf = `touchstart${Sn}`,
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
        return ef;
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
          te(this._config.endCallback);
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
            te(u > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (A.on(this._element, sf, (o) => this._start(o)),
            A.on(this._element, of, (o) => this._end(o)),
            this._element.classList.add(cf))
          : (A.on(this._element, tf, (o) => this._start(o)),
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
      Ht = ".bs.carousel",
      jo = ".data-api",
      pf = "ArrowLeft",
      mf = "ArrowRight",
      _f = 500,
      dr = "next",
      Cn = "prev",
      Nn = "left",
      Ur = "right",
      gf = `slide${Ht}`,
      Gs = `slid${Ht}`,
      vf = `keydown${Ht}`,
      Ef = `mouseenter${Ht}`,
      bf = `mouseleave${Ht}`,
      yf = `dragstart${Ht}`,
      Af = `load${Ht}${jo}`,
      wf = `click${Ht}${jo}`,
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
          (this._indicatorsElement = oe.findOne(Lf, this._element)),
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
        for (const _ of oe.find(Rf, this._element))
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
        const u = oe.findOne(Bo, this._indicatorsElement);
        u.classList.remove(Kr), u.removeAttribute("aria-current");
        const _ = oe.findOne(
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
          V = u || _e(this._getItems(), _, O, this._config.wrap);
        if (V === _) return;
        const $ = this._getItemIndex(V),
          le = (gr) =>
            A.trigger(this._element, gr, {
              relatedTarget: V,
              direction: this._orderToDirection(o),
              from: this._getItemIndex(_),
              to: $,
            });
        if (le(gf).defaultPrevented || !_ || !V) return;
        const Je = Boolean(this._interval);
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement($),
          (this._activeElement = V);
        const Ce = O ? Sf : Of,
          ct = O ? Cf : Nf;
        V.classList.add(ct), q(V), _.classList.add(Ce), V.classList.add(Ce);
        const vt = () => {
          V.classList.remove(Ce, ct),
            V.classList.add(Kr),
            _.classList.remove(Kr, ct, Ce),
            (this._isSliding = !1),
            le(Gs);
        };
        this._queueCallback(vt, _, this._isAnimated()), Je && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(Tf);
      }
      _getActive() {
        return oe.findOne(xf, this._element);
      }
      _getItems() {
        return oe.find(Uo, this._element);
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
        const m = oe.find(Pf);
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
        const _ = oe.find(Js);
        for (const O of _) {
          const V = p(O),
            $ = oe.find(V).filter((le) => le === this._element);
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
              .filter((le) => le !== this._element)
              .map((le) => Ln.getOrCreateInstance(le, { toggle: !1 }))),
          (o.length && o[0]._isTransitioning) ||
            A.trigger(this._element, Vf).defaultPrevented)
        )
          return;
        for (const le of o) le.hide();
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
        const u = oe.find(Wf, this._config.parent);
        return oe.find(o, this._config.parent).filter((_) => !u.includes(_));
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
        u = oe.find(o);
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
      ed = 2,
      td = `hide${nn}`,
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
    class at extends L {
      constructor(o, u) {
        super(o, u),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            oe.next(this._element, zr)[0] ||
            oe.prev(this._element, zr)[0] ||
            oe.findOne(zr, this._parent)),
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
        if (!A.trigger(this._element, td, o).defaultPrevented) {
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
          Pe(
            Pe({}, o),
            typeof this._config.popperConfig == "function"
              ? this._config.popperConfig(o)
              : this._config.popperConfig
          )
        );
      }
      _selectMenuItem({ key: o, target: u }) {
        const _ = oe.find(pd, this._menu).filter((O) => x(O));
        _.length && _e(_, u, o === zo, !_.includes(u)).focus();
      }
      static jQueryInterface(o) {
        return this.each(function () {
          const u = at.getOrCreateInstance(this, o);
          if (typeof o == "string") {
            if (typeof u[o] == "undefined")
              throw new TypeError(`No method named "${o}"`);
            u[o]();
          }
        });
      }
      static clearMenus(o) {
        if (o.button === ed || (o.type === "keyup" && o.key !== Wo)) return;
        const u = oe.find(fd);
        for (const _ of u) {
          const O = at.getInstance(_);
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
          const le = { relatedTarget: O._element };
          o.type === "click" && (le.clickEvent = o), O._completeHide(le);
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
            : oe.prev(this, rn)[0] ||
              oe.next(this, rn)[0] ||
              oe.findOne(rn, o.delegateTarget.parentNode),
          $ = at.getOrCreateInstance(V);
        if (O) {
          o.stopPropagation(), $.show(), $._selectMenuItem(o);
          return;
        }
        $._isShown() && (o.stopPropagation(), $.hide(), V.focus());
      }
    }
    A.on(document, Yo, rn, at.dataApiKeydownHandler),
      A.on(document, Yo, zr, at.dataApiKeydownHandler),
      A.on(document, qo, at.clearMenus),
      A.on(document, id, at.clearMenus),
      A.on(document, qo, rn, function (m) {
        m.preventDefault(), at.getOrCreateInstance(this).toggle();
      }),
      G(at);
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
            const le = window.getComputedStyle($).getPropertyValue(u);
            $.style.setProperty(u, `${_(Number.parseFloat(le))}px`);
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
        for (const _ of oe.find(o, this._element)) u(_);
      }
    }
    const Qo = "backdrop",
      Od = "fade",
      Zo = "show",
      ea = `mousedown.bs.${Qo}`,
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
    class ta extends B {
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
          te(o);
          return;
        }
        this._append();
        const u = this._getElement();
        this._config.isAnimated && q(u),
          u.classList.add(Zo),
          this._emulateAnimation(() => {
            te(o);
          });
      }
      hide(o) {
        if (!this._config.isVisible) {
          te(o);
          return;
        }
        this._getElement().classList.remove(Zo),
          this._emulateAnimation(() => {
            this.dispose(), te(o);
          });
      }
      dispose() {
        this._isAppended &&
          (A.off(this._element, ea),
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
          A.on(o, ea, () => {
            te(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(o) {
        me(o, this._getElement(), this._config.isAnimated);
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
        const _ = oe.focusableChildren(u);
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
      lt = ".bs.modal",
      Md = ".data-api",
      kd = "Escape",
      Fd = `hide${lt}`,
      Vd = `hidePrevented${lt}`,
      sa = `hidden${lt}`,
      ia = `show${lt}`,
      jd = `shown${lt}`,
      Hd = `resize${lt}`,
      Bd = `click.dismiss${lt}`,
      Ud = `mousedown.dismiss${lt}`,
      Kd = `keydown.dismiss${lt}`,
      Wd = `click${lt}${Md}`,
      oa = "modal-open",
      zd = "fade",
      aa = "show",
      ei = "modal-static",
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
          (this._dialog = oe.findOne(Yd, this._element)),
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
        for (const o of [window, this._dialog]) A.off(o, lt);
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new ta({
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
        const u = oe.findOne(Gd, this._dialog);
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
          this._element.classList.contains(ei) ||
          (u || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(ei),
          this._queueCallback(() => {
            this._element.classList.remove(ei),
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
      const u = oe.findOne(qd);
      u && sn.getInstance(u).hide(), sn.getOrCreateInstance(o).toggle(this);
    }),
      R(sn),
      G(sn);
    const Zd = "offcanvas",
      xt = ".bs.offcanvas",
      la = ".data-api",
      eh = `load${xt}${la}`,
      th = "Escape",
      ca = "show",
      ua = "showing",
      fa = "hiding",
      nh = "offcanvas-backdrop",
      da = ".offcanvas.show",
      rh = `show${xt}`,
      sh = `shown${xt}`,
      ih = `hide${xt}`,
      ha = `hidePrevented${xt}`,
      pa = `hidden${xt}`,
      oh = `resize${xt}`,
      ah = `click${xt}${la}`,
      lh = `keydown.dismiss${xt}`,
      ch = '[data-bs-toggle="offcanvas"]',
      uh = { backdrop: !0, keyboard: !0, scroll: !1 },
      fh = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Rt extends L {
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
        return new ta({
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
          if (o.key === th) {
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
          const u = Rt.getOrCreateInstance(this, o);
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
      const u = oe.findOne(da);
      u && u !== o && Rt.getInstance(u).hide(),
        Rt.getOrCreateInstance(o).toggle(this);
    }),
      A.on(window, eh, () => {
        for (const m of oe.find(da)) Rt.getOrCreateInstance(m).show();
      }),
      A.on(window, oh, () => {
        for (const m of oe.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(m).position !== "fixed" &&
            Rt.getOrCreateInstance(m).hide();
      }),
      R(Rt),
      G(Rt);
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
        const le = $.nodeName.toLowerCase();
        if (!Object.keys(o).includes(le)) {
          $.remove();
          continue;
        }
        const Ue = [].concat(...$.attributes),
          Je = [].concat(o["*"] || [], o[le] || []);
        for (const Ce of Ue) _h(Ce, Je) || $.removeAttribute(Ce.nodeName);
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
          (this._config.content = Pe(Pe({}, this._config.content), o)),
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
        const O = oe.findOne(_, o);
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
      ti = "fade",
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
          for (const le of [].concat(...document.body.children))
            A.on(le, "mouseover", H);
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
        u.classList.remove(ti, Gr),
          u.classList.add(`bs-${this.constructor.NAME}-auto`);
        const _ = d(this.constructor.NAME).toString();
        return (
          u.setAttribute("id", _), this._isAnimated() && u.classList.add(ti), u
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
                Zr(Pe({}, this._config), {
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
          (this.tip && this.tip.classList.contains(ti))
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
        return Pe(
          Pe({}, u),
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
          (o = Pe(Pe({}, u), typeof o == "object" && o ? o : {})),
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
      Wh = Zr(Pe({}, on.Default), {
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      }),
      zh = Zr(Pe({}, on.DefaultType), {
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
      ep = `${Ea}, .nav-item > ${Ea}, .list-group-item`,
      tp = ".dropdown",
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
          const le =
            $.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (V && le) {
            if ((_($), !O)) return;
            continue;
          }
          !V && !le && _($);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const o = oe.find(si, this._config.target);
        for (const u of o) {
          if (!u.hash || F(u)) continue;
          const _ = oe.findOne(u.hash, this._element);
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
          oe.findOne(np, o.closest(tp)).classList.add(Pn);
          return;
        }
        for (const u of oe.parents(o, Zh))
          for (const _ of oe.prev(u, ep)) _.classList.add(Pn);
      }
      _clearActiveClass(o) {
        o.classList.remove(Pn);
        const u = oe.find(`${si}.${Pn}`, o);
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
      for (const m of oe.find(Qh)) mr.getOrCreateInstance(m);
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
          _ = _e(
            this._getChildren().filter((O) => !F(O)),
            o.target,
            u,
            !0
          );
        _ && (_.focus({ preventScroll: !0 }), cn.getOrCreateInstance(_).show());
      }
      _getChildren() {
        return oe.find(ai, this._parent);
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
          const le = oe.findOne(V, _);
          le && le.classList.toggle($, u);
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
        return o.matches(ai) ? o : oe.findOne(ai, o);
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
        for (const m of oe.find(yp)) cn.getOrCreateInstance(m);
      }),
      G(cn);
    const Ap = "toast",
      Bt = ".bs.toast",
      wp = `mouseover${Bt}`,
      Tp = `mouseout${Bt}`,
      Op = `focusin${Bt}`,
      Sp = `focusout${Bt}`,
      Cp = `hide${Bt}`,
      Np = `hidden${Bt}`,
      xp = `show${Bt}`,
      Rp = `shown${Bt}`,
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
        Alert: be,
        Button: jt,
        Carousel: xn,
        Collapse: Ln,
        Dropdown: at,
        Modal: sn,
        Offcanvas: Rt,
        Popover: Xr,
        ScrollSpy: mr,
        Tab: cn,
        Toast: _r,
        Tooltip: on,
      }
    );
  });
})(fy);
const tA = "./assets/savings-pig-744c88c9.png";
const nA = {
    data() {
      return {};
    },
  },
  rA = (e) => ($r("data-v-87fa167d"), (e = e()), Mr(), e),
  sA = { class: "container main-cont" },
  iA = { class: "row row-cols-2" },
  oA = { class: "col" },
  aA = { id: "second-art" },
  lA = rA(() =>
    k(
      "div",
      { class: "col" },
      [k("img", { class: "logo-image", alt: "", src: tA })],
      -1
    )
  ),
  cA = Fs(
    '<div class="container px-4" data-v-87fa167d><div class="row gx-5" data-v-87fa167d><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>Front-end Utvecklare</h4><p data-v-87fa167d> Vi söker nu en tekniskt kunnig frontend utvecklare som har en solid grund inom HTML, Javascript, React, Vue och React Native. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>Full-stack Utvecklare</h4><p data-v-87fa167d> Vi söker en motiverad och duktig utvecklare som brinner för att leverera hög kvalité både på framsidan och baksidan av digitala tjänster. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div><div class="col" data-v-87fa167d><div class="p-3 border bg-light" data-v-87fa167d><h3 data-v-87fa167d>Ledig Roll</h3><h4 data-v-87fa167d>HR Ansvarig</h4><p data-v-87fa167d> Har du erfarenhet av och stort intresse för strategiskt HR-arbete? Den här tjänsten passar dig med goda ledaregenskaper. </p><button type="button" class="btn btn-primary" data-v-87fa167d>Ansök</button></div></div></div></div>',
    1
  );
function uA(e, t, n, r, s, i) {
  const a = vn("ChildComponent");
  return (
    dt(),
    ht(
      We,
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
                    Ve(e.$route.params.OneParameter) +
                    " Ipsum griper vi denna möjlighet. Vi är en sammanhållen men decentraliserad grupp högt erfarna ingenjörer och affärsmän baserade i New York, Sverige och runt om i världen. Vi bygger på bästa praxis från både traditionella marknader och kryptoekosystemet, samt inkorporerar bästa-av-båda-världars expertis i en utökbar digital tillgångshandelplattform som gör det möjligt för institutionella marknadsdeltagare att smidigt interagera med varandra via en enda tillgångspunkt. ",
                  1
                ),
              ]),
            ]),
            lA,
          ]),
        ]),
        cA,
        Oe(a),
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
function fr(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function pA(e) {
  return e !== null && typeof e == "object";
}
function mA(e) {
  return e && typeof e.then == "function";
}
function _A(e, t) {
  return function () {
    return e(t);
  };
}
function Wu(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function zu(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  Ys(e, n, [], e._modules.root, !0), ko(e, n, t);
}
function ko(e, t, n) {
  var r = e._state,
    s = e._scope;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var i = e._wrappedGetters,
    a = {},
    l = {},
    c = Zp(!0);
  c.run(function () {
    fr(i, function (d, f) {
      (a[f] = _A(d, e)),
        (l[f] = Qe(function () {
          return a[f]();
        })),
        Object.defineProperty(e.getters, f, {
          get: function () {
            return l[f].value;
          },
          enumerable: !0,
        });
    });
  }),
    (e._state = ar({ data: t })),
    (e._scope = c),
    e.strict && yA(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      }),
    s && s.stop();
}
function Ys(e, t, n, r, s) {
  var i = !n.length,
    a = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[a], (e._modulesNamespaceMap[a] = r)),
    !i && !s)
  ) {
    var l = Fo(t, n.slice(0, -1)),
      c = n[n.length - 1];
    e._withCommit(function () {
      l[c] = r.state;
    });
  }
  var d = (r.context = gA(e, a, n));
  r.forEachMutation(function (f, p) {
    var g = a + p;
    vA(e, g, f, d);
  }),
    r.forEachAction(function (f, p) {
      var g = f.root ? p : a + p,
        E = f.handler || f;
      EA(e, g, E, d);
    }),
    r.forEachGetter(function (f, p) {
      var g = a + p;
      bA(e, g, f, d);
    }),
    r.forEachChild(function (f, p) {
      Ys(e, t, n.concat(p), f, s);
    });
}
function gA(e, t, n) {
  var r = t === "",
    s = {
      dispatch: r
        ? e.dispatch
        : function (i, a, l) {
            var c = Os(i, a, l),
              d = c.payload,
              f = c.options,
              p = c.type;
            return (!f || !f.root) && (p = t + p), e.dispatch(p, d);
          },
      commit: r
        ? e.commit
        : function (i, a, l) {
            var c = Os(i, a, l),
              d = c.payload,
              f = c.options,
              p = c.type;
            (!f || !f.root) && (p = t + p), e.commit(p, d, f);
          },
    };
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return qu(e, t);
            },
      },
      state: {
        get: function () {
          return Fo(e.state, n);
        },
      },
    }),
    s
  );
}
function qu(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, r) === t) {
        var i = s.slice(r);
        Object.defineProperty(n, i, {
          get: function () {
            return e.getters[s];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function vA(e, t, n, r) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function (a) {
    n.call(e, r.state, a);
  });
}
function EA(e, t, n, r) {
  var s = e._actions[t] || (e._actions[t] = []);
  s.push(function (a) {
    var l = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      a
    );
    return (
      mA(l) || (l = Promise.resolve(l)),
      e._devtoolHook
        ? l.catch(function (c) {
            throw (e._devtoolHook.emit("vuex:error", c), c);
          })
        : l
    );
  });
}
function bA(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (i) {
      return n(r.state, r.getters, i.state, i.getters);
    });
}
function yA(e) {
  qn(
    function () {
      return e._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" }
  );
}
function Fo(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function Os(e, t, n) {
  return (
    pA(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  );
}
var AA = "vuex bindings",
  jl = "vuex:mutations",
  yi = "vuex:actions",
  kn = "vuex",
  wA = 0;
function TA(e, t) {
  Wg(
    {
      id: "org.vuejs.vuex",
      app: e,
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
          if (r.app === e && r.inspectorId === kn)
            if (r.filter) {
              var s = [];
              Ju(s, t._modules.root, r.filter, ""), (r.rootNodes = s);
            } else r.rootNodes = [Xu(t._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === kn) {
            var s = r.nodeId;
            qu(t, s),
              (r.state = CA(
                xA(t._modules, s),
                s === "root" ? t.getters : t._makeLocalGettersCache,
                s
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === kn) {
            var s = r.nodeId,
              i = r.path;
            s !== "root" && (i = s.split("/").filter(Boolean).concat(i)),
              t._withCommit(function () {
                r.set(t._state.data, i, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, s) {
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
        t.subscribeAction({
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
function Gu(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function Xu(e, t) {
  return {
    id: t || "root",
    label: Gu(t),
    tags: e.namespaced ? [Yu] : [],
    children: Object.keys(e._children).map(function (n) {
      return Xu(e._children[n], t + n + "/");
    }),
  };
}
function Ju(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: t.namespaced ? [Yu] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      Ju(e, t._children[s], n, r + s + "/");
    });
}
function CA(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (a) {
        return { key: a, editable: !0, value: e.state[a] };
      }),
    };
  if (r.length) {
    var i = NA(t);
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
function NA(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var s = t,
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
            return e[n];
          }));
      } else
        t[n] = Yi(function () {
          return e[n];
        });
    }),
    t
  );
}
function xA(e, t) {
  var n = t.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, s, i) {
      var a = r[s];
      if (!a)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return i === n.length - 1 ? a : a._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Yi(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var gt = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  Qu = { namespaced: { configurable: !0 } };
Qu.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
gt.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
gt.prototype.removeChild = function (t) {
  delete this._children[t];
};
gt.prototype.getChild = function (t) {
  return this._children[t];
};
gt.prototype.hasChild = function (t) {
  return t in this._children;
};
gt.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
gt.prototype.forEachChild = function (t) {
  fr(this._children, t);
};
gt.prototype.forEachGetter = function (t) {
  this._rawModule.getters && fr(this._rawModule.getters, t);
};
gt.prototype.forEachAction = function (t) {
  this._rawModule.actions && fr(this._rawModule.actions, t);
};
gt.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && fr(this._rawModule.mutations, t);
};
Object.defineProperties(gt.prototype, Qu);
var On = function (t) {
  this.register([], t, !1);
};
On.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
On.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + "/" : "");
  }, "");
};
On.prototype.update = function (t) {
  Zu([], this.root, t);
};
On.prototype.register = function (t, n, r) {
  var s = this;
  r === void 0 && (r = !0);
  var i = new gt(n, r);
  if (t.length === 0) this.root = i;
  else {
    var a = this.get(t.slice(0, -1));
    a.addChild(t[t.length - 1], i);
  }
  n.modules &&
    fr(n.modules, function (l, c) {
      s.register(t.concat(c), l, r);
    });
};
On.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    s = n.getChild(r);
  s && s.runtime && n.removeChild(r);
};
On.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function Zu(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      Zu(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function RA(e) {
  return new qe(e);
}
var qe = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var s = t.strict;
    s === void 0 && (s = !1);
    var i = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new On(t)),
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
qe.prototype.install = function (t, n) {
  t.provide(n || hA, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && TA(t, this);
};
Vo.state.get = function () {
  return this._state.data;
};
Vo.state.set = function (e) {};
qe.prototype.commit = function (t, n, r) {
  var s = this,
    i = Os(t, n, r),
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
qe.prototype.dispatch = function (t, n) {
  var r = this,
    s = Os(t, n),
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
qe.prototype.subscribe = function (t, n) {
  return Wu(t, this._subscribers, n);
};
qe.prototype.subscribeAction = function (t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Wu(r, this._actionSubscribers, n);
};
qe.prototype.watch = function (t, n, r) {
  var s = this;
  return qn(
    function () {
      return t(s.state, s.getters);
    },
    n,
    Object.assign({}, r)
  );
};
qe.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
qe.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == "string" && (t = [t]),
    this._modules.register(t, n),
    Ys(this, this.state, t, this._modules.get(t), r.preserveState),
    ko(this, this.state);
};
qe.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == "string" && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = Fo(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    zu(this);
};
qe.prototype.hasModule = function (t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
qe.prototype.hotUpdate = function (t) {
  this._modules.update(t), zu(this, !0);
};
qe.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(qe.prototype, Vo);
const LA = {
    changeMainText(e) {
      (e.welcomeText =
        "Nu har du testat våran kalkylator. Varför inte slänga iväg ett email till oss nedanför?"),
        (e.welcomeTextLower = "");
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
