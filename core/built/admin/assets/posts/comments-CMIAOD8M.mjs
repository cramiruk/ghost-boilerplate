import { x as yr, Q as l, al as pe, aj as ee, a8 as je, i as he, n as cp, a0 as ht, ae as we, ah as up, a5 as lr, w as zt, u as $t, ak as gr, L as fa, ad as lp, j as ul, y as da, z as fp } from "./index-cYbhPZer.mjs";
import { u as dp, F as pp, a as hp, c as mp } from "./filters-iVBNa6dh.mjs";
import { b as Dn, T as kn, c as In, a as Cn, E as ll } from "./tooltip-jux5-JO_.mjs";
import { e as fr, L as yp } from "./label-DpgquYuS.mjs";
import { C as gp, c as pa, h as bp, F as vp, e as xp, d as wp, b as jp, f as fl, D as ha, P as Ki, i as dl, M as Sp, H as pl, R as Np, E as hl, g as Qi } from "./search-C-bAcYdE.mjs";
import { H as Pp, e as Tp, D as Ep, n as Op, i as Rp, k as er } from "./skeleton-BLfZp8N_.mjs";
import { U as ml, E as Ap, S as Dp, g as kp } from "./get-site-timezone-C7k0KEIU.mjs";
import { b as br, c as ma, a as Ip, e as Gn } from "./hooks-DxTWmWfO.mjs";
import { a as Cp } from "./posts-BOgcdu2l.mjs";
import { X as Mp, b as ya, c as ga, f as ba, g as va, d as _p, e as xa } from "./dialog-DTGtFy_7.mjs";
import { B as le, C as Fp } from "./button-DJdXBRcJ.mjs";
import { A as xt } from "./avatar-CVsjiZhY.mjs";
import { L as wt } from "./loading-indicator-CnQS5ZPO.mjs";
import { a as Bp, b as wa, n as Lp, m as yl, d as hc, g as Up, C as qp } from "./check-Bk1CoFjE.mjs";
import { u as $p, a as zp } from "./settings-CTfrowFd.mjs";
import { E as Yp } from "./ellipsis-ylZG0-0T.mjs";
import { T as Zp, b as Wp, c as mc, a as yc } from "./tabs-CUUYpcMr.mjs";
import { b as ar, a as gl, T as bl } from "./app-utils-CJzAPXLk.mjs";
import { E as Ji } from "./empty-indicator-C4EOv-cX.mjs";
import { S as Hp, a as Vp, c as Gp, d as Kp } from "./sheet-DnXkSXPK.mjs";
import { g as Qp, a as Jp, u as Xp, L as eh } from "./virtual-list-window-B4trPzSq.mjs";
import { M as vl } from "./main-layout-DXS1ZOEg.mjs";
import { I as th, L as sr, P as gt } from "./list-page-C0jCVF3Y.mjs";
function rh(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Kn = "Checkbox", [nh] = Up(Kn), [oh, ja] = nh(Kn);
function ih(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [p, h] = Lp({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Kn
  }), [y, m] = pe(null), [b, N] = pe(null), j = ee(!1), E = y ? !!a || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), R = {
    checked: p,
    disabled: i,
    setChecked: h,
    control: y,
    setControl: m,
    name: s,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: j,
    required: u,
    defaultChecked: jt(o) ? !1 : o,
    isFormControl: E,
    bubbleInput: b,
    setBubbleInput: N
  };
  return /* @__PURE__ */ l.jsx(
    oh,
    {
      scope: t,
      ...R,
      children: ah(d) ? d(R) : n
    }
  );
}
var xl = "CheckboxTrigger", wl = yr(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: i,
      value: a,
      disabled: s,
      checked: c,
      required: u,
      setControl: f,
      setChecked: d,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: y
    } = ja(xl, e), m = yl(o, f), b = ee(c);
    return je(() => {
      const N = i?.form;
      if (N) {
        const j = () => d(b.current);
        return N.addEventListener("reset", j), () => N.removeEventListener("reset", j);
      }
    }, [i, d]), /* @__PURE__ */ l.jsx(
      wa.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": jt(c) ? "mixed" : c,
        "aria-required": u,
        "data-state": Tl(c),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...n,
        ref: m,
        onKeyDown: hc(t, (N) => {
          N.key === "Enter" && N.preventDefault();
        }),
        onClick: hc(r, (N) => {
          d((j) => jt(j) ? !0 : !j), y && h && (p.current = N.isPropagationStopped(), p.current || N.stopPropagation());
        })
      }
    );
  }
);
wl.displayName = xl;
var Sa = yr(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c,
      onCheckedChange: u,
      form: f,
      ...d
    } = e;
    return /* @__PURE__ */ l.jsx(
      ih,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: a,
        onCheckedChange: u,
        name: n,
        form: f,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            wl,
            {
              ...d,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            Pl,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Sa.displayName = Kn;
var jl = "CheckboxIndicator", Sl = yr(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = ja(jl, r);
    return /* @__PURE__ */ l.jsx(
      Bp,
      {
        present: n || jt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          wa.span,
          {
            "data-state": Tl(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Sl.displayName = jl;
var Nl = "CheckboxBubbleInput", Pl = yr(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      name: u,
      value: f,
      form: d,
      bubbleInput: p,
      setBubbleInput: h
    } = ja(Nl, e), y = yl(r, h), m = dp(i), b = Pp(n);
    je(() => {
      const j = p;
      if (!j) return;
      const E = window.HTMLInputElement.prototype, M = Object.getOwnPropertyDescriptor(
        E,
        "checked"
      ).set, _ = !o.current;
      if (m !== i && M) {
        const D = new Event("click", { bubbles: _ });
        j.indeterminate = jt(i), M.call(j, jt(i) ? !1 : i), j.dispatchEvent(D);
      }
    }, [p, m, i, o]);
    const N = ee(jt(i) ? !1 : i);
    return /* @__PURE__ */ l.jsx(
      wa.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? N.current,
        required: s,
        disabled: c,
        name: u,
        value: f,
        form: d,
        ...t,
        tabIndex: -1,
        ref: y,
        style: {
          ...t.style,
          ...b,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Pl.displayName = Nl;
function ah(e) {
  return typeof e == "function";
}
function jt(e) {
  return e === "indeterminate";
}
function Tl(e) {
  return jt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
const El = cp(
  "inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        warning: "border-transparent bg-state-warning/20 text-yellow-600",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function gc({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ l.jsx("div", { className: he(El({ variant: t }), e), ...r });
}
const Ol = yr(({ className: e, ...t }, r) => /* @__PURE__ */ l.jsx(
  Sa,
  {
    ref: r,
    className: he(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-xs border border-primary shadow focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      Sl,
      {
        className: he("grid place-content-center text-current"),
        children: /* @__PURE__ */ l.jsx(qp, { className: "size-4" })
      }
    )
  }
));
Ol.displayName = Sa.displayName;
function sh({ className: e, children: t }) {
  return ht.Children.count(t) === 0 ? null : /* @__PURE__ */ l.jsx(
    th,
    {
      align: "start",
      className: he("w-full", e),
      "data-slot": "filter-bar",
      gap: "sm",
      justify: "between",
      children: t
    }
  );
}
const ch = ["is-less", "is-or-less", "is-greater", "is-or-greater"], uh = {
  "is-less": "before",
  "is-or-less": "on or before",
  "is-greater": "after",
  "is-or-greater": "on or after"
}, lh = "is-or-less", zr = "in-the-last", Rl = "in-the-next", fh = {
  [zr]: "in the last",
  [Rl]: "in the next"
};
function Al(e) {
  return e === zr || e === Rl;
}
function dh(e) {
  return e.operators.some(Al);
}
function ph(e) {
  return { ...e, operators: [...e.operators, zr] };
}
function hh(e) {
  return Object.assign((r) => ht.createElement(bh, {
    ...r,
    fallbackDate: e
  }), { displayName: "RelativeDateRenderer" });
}
const mh = 7, yh = /^\d{4}-\d{2}-\d{2}$/, gh = "w-full bg-transparent outline-hidden dark:!bg-transparent", bh = ({
  field: e,
  values: t,
  onChange: r,
  operator: n,
  fallbackDate: o
}) => {
  const i = Al(n), a = t[0], s = typeof a == "number" && Number.isSafeInteger(a) && a > 0 ? a : mh, c = typeof a == "string" && yh.test(a) ? a : o, u = ee(null);
  je(() => {
    if (u.current === n)
      return;
    u.current = n;
    const p = i ? [s] : [c];
    wh(t, p) || r(p);
  }, [n, i, s, c, t, r]);
  const [f, d] = pe(() => String(s));
  if (je(() => {
    d(String(s));
  }, [s]), i) {
    const p = n === zr ? "Since" : "Until", h = vh(o, n === zr ? -s : s);
    return /* @__PURE__ */ l.jsx(Dn, { children: /* @__PURE__ */ l.jsxs(kn, { children: [
      /* @__PURE__ */ l.jsx(In, { asChild: !0, children: /* @__PURE__ */ l.jsxs("div", { className: "flex w-full items-center gap-2", "data-slot": "filters-input-wrapper", children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            "aria-label": "Relative date amount",
            className: he(gh, "min-w-[1ch] tabular-nums [field-sizing:content] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"),
            "data-slot": "filters-input",
            min: 1,
            type: "number",
            value: f,
            onBlur: () => {
              const y = Number(f);
              (!Number.isSafeInteger(y) || y <= 0) && d(String(s));
            },
            onChange: (y) => {
              const m = y.target.value;
              d(m);
              const b = Number(m);
              Number.isSafeInteger(b) && b > 0 && r([b]);
            }
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground select-none", children: s === 1 ? "day" : "days" })
      ] }) }),
      /* @__PURE__ */ l.jsxs(Cn, { children: [
        p,
        " ",
        h
      ] })
    ] }) });
  }
  return /* @__PURE__ */ l.jsx(
    pp,
    {
      className: e.className,
      embedded: !0,
      field: e,
      value: c,
      onChange: (p) => r([p])
    }
  );
};
function vh(e, t) {
  const [r, n, o] = e.split("-").map(Number), i = new Date(r, n - 1, o);
  return i.setDate(i.getDate() + t), new Intl.DateTimeFormat(xh(), {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(i);
}
function xh() {
  return typeof navigator > "u" ? "en-US" : navigator.language || "en-US";
}
function wh(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r += 1)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Oe(e, t, r, n, o) {
  return at(t, ((i, a) => {
    const s = i[a];
    if (s === void 0)
      throw new TypeError(vs(a));
    return s;
  })(e, t), r, n, o);
}
function at(e, t, r, n, o, i) {
  const a = Zr(t, r, n);
  if (o && t !== a)
    throw new RangeError(Hf(e, t, r, n, i));
  return a;
}
function Pe(e) {
  return e !== null && /object|function/.test(typeof e);
}
function Ce(e, t = Map) {
  const r = new t();
  return (n, ...o) => {
    if (r.has(n))
      return r.get(n);
    const i = e(n, ...o);
    return r.set(n, i), i;
  };
}
function Yr(e) {
  return dr({
    name: e
  }, 1);
}
function dr(e, t) {
  return st(((r) => ({
    value: r,
    configurable: 1,
    writable: !t
  })), e);
}
function jh(e) {
  return st(((t) => ({
    get: t,
    configurable: 1
  })), e);
}
function Na(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function vr(e, t) {
  const r = {};
  let n = e.length;
  for (const o of t)
    r[e[--n]] = o;
  return r;
}
function st(e, t, r) {
  const n = {};
  for (const o in t)
    n[o] = e(t[o], o, r);
  return n;
}
function Qn(e, t, r) {
  const n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    n[i] = e(i, o, r);
  }
  return n;
}
function Dl(e, t, r) {
  const n = {};
  for (let o = 0; o < e.length; o++)
    n[t[o]] = r[e[o]];
  return n;
}
function Ue(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    r[n] = t[n];
  return r;
}
function bc(e, t) {
  for (const r of t)
    if (r in e)
      return 1;
  return 0;
}
function kl(e, t, r) {
  for (const n of e)
    if (t[n] !== r[n])
      return 0;
  return 1;
}
function Il(e, t, r) {
  const n = {
    ...r
  };
  for (let o = 0; o < t; o++)
    n[e[o]] = 0;
  return n;
}
function J(e, ...t) {
  return (...r) => e(...t, ...r);
}
function Sh() {
}
function vc(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Jr(e) {
  return e.slice().sort();
}
function Mn(e, t) {
  return String(t).padStart(e, "0");
}
function St(e, t) {
  return Math.sign(e - t);
}
function Zr(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function nt(e, t) {
  return [Math.floor(e / t), Ur(e, t)];
}
function Ur(e, t) {
  return (e % t + t) % t;
}
function Tt(e, t) {
  return [Jn(e, t), Pa(e, t)];
}
function Jn(e, t) {
  return Math.trunc(e / t) || 0;
}
function Pa(e, t) {
  return e % t || 0;
}
function Sn(e) {
  return Math.abs(e % 1) === 0.5;
}
function Cl(e, t, r) {
  let n = 0, o = 0;
  for (let s = 0; s <= t; s++) {
    const c = e[r[s]], u = Qe[s], f = ae / u, [d, p] = Tt(c, f);
    n += p * u, o += d;
  }
  const [i, a] = Tt(n, ae);
  return [o + i, a];
}
function Xn(e, t, r) {
  const n = {};
  for (let o = t; o >= 0; o--) {
    const i = Qe[o];
    n[r[o]] = Jn(e, i), e = Pa(e, i);
  }
  return n;
}
function Nh(e) {
  if (e !== void 0)
    return be(e);
}
function Ph(e) {
  if (e !== void 0)
    return rt(e);
}
function Ml(e) {
  if (e !== void 0)
    return Ta(e);
}
function rt(e) {
  return Bl(Ta(e));
}
function Ta(e) {
  return Fl(yg(e));
}
function _l(e, t) {
  if (t == null)
    throw new RangeError(vs(e));
  return t;
}
function Xr(e) {
  if (!Pe(e))
    throw new TypeError(qy);
  return e;
}
function Ea(e, t, r = e) {
  if (typeof t !== e)
    throw new TypeError(_t(r, t));
  return t;
}
function Fl(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(My(t, e));
  return e || 0;
}
function Bl(e, t = "number") {
  if (e <= 0)
    throw new RangeError(_y(t, e));
  return e;
}
function Oa(e) {
  if (typeof e == "symbol")
    throw new TypeError(Uy);
  return String(e);
}
function _n(e, t) {
  return Pe(e) ? String(e) : be(e, t);
}
function Ra(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(Ly(e));
  return e;
}
function Ll(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(By(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(Fy(t, e));
  return e;
}
function Se(e, t) {
  return Math.trunc(Ll(e, t)) || 0;
}
function Aa(e, t) {
  return Fl(Ll(e, t), t);
}
function xc(e, t) {
  return Bl(Se(e, t), t);
}
function Da(e, t) {
  let [r, n] = Tt(t, ae), o = e + r;
  const i = Math.sign(o);
  return i && i === -Math.sign(n) && (o -= i, n += i * ae), [o, n];
}
function pr(e, t, r = 1) {
  return Da(e[0] + t[0] * r, e[1] + t[1] * r);
}
function Yt(e, t) {
  return Da(e[0], e[1] + t);
}
function Ge(e, t) {
  return pr(t, e, -1);
}
function Me(e, t) {
  return St(e[0], t[0]) || St(e[1], t[1]);
}
function Ul(e, t, r) {
  return Me(e, t) === -1 || Me(e, r) === 1;
}
function ka(e, t = 1) {
  const r = BigInt(ae / t);
  return [Number(e / r), Number(e % r) * t];
}
function Fn(e, t = 1) {
  const r = ae / t, [n, o] = Tt(e, r);
  return [n, o * t];
}
function Th(e, t = 1) {
  const [r, n] = e, o = Math.floor(n / t), i = ae / t;
  return BigInt(r) * BigInt(i) + BigInt(o);
}
function Ke(e, t = 1, r) {
  const [n, o] = e, [i, a] = Tt(o, t);
  return n * (ae / t) + (i + (r ? a / t : 0));
}
function Eh(e) {
  return e[0] + e[1] / ae;
}
function Ia(e, t, r = nt) {
  const [n, o] = e, [i, a] = r(o, t);
  return [n * (ae / t) + i, a];
}
function Ca(e) {
  return Oe(e, "isoYear", Qr, Kr, 1), e.isoYear === Qr ? Oe(e, "isoMonth", 4, 12, 1) : e.isoYear === Kr && Oe(e, "isoMonth", 1, 9, 1), e;
}
function Le(e) {
  return ke({
    ...e,
    ...Ie,
    isoHour: 12
  }), e;
}
function ke(e) {
  const t = Oe(e, "isoYear", Qr, Kr, 1), r = t === Qr ? 1 : t === Kr ? -1 : 0;
  return r && Je(me({
    ...e,
    isoDay: e.isoDay + r,
    isoNanosecond: e.isoNanosecond - r
  })), e;
}
function Je(e) {
  if (!e || Ul(e, Sg, jg))
    throw new RangeError(Ft);
  return e;
}
function Et(e) {
  return Cl(e, 5, ze)[1];
}
function eo(e) {
  const [t, r] = nt(e, ae);
  return [Xn(r, 5, ze), t];
}
function Oh(e) {
  return ql(e)[0];
}
function ql(e) {
  return Ia(e, Ve);
}
function Ne(e) {
  return xr(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function me(e) {
  const t = Ne(e);
  if (t !== void 0) {
    const [r, n] = Tt(t, De);
    return [r, n * lt + (e.isoMicrosecond || 0) * sn + (e.isoNanosecond || 0)];
  }
}
function Ma(e, t) {
  const [r, n] = eo(Et(e) - t);
  return Je(me({
    ...e,
    isoDay: e.isoDay + n,
    ...r
  }));
}
function Bn(...e) {
  return xr(...e) / rd;
}
function xr(...e) {
  const [t, r] = $l(...e), n = t.valueOf();
  if (!isNaN(n))
    return n - r * De;
}
function $l(e, t = 1, r = 1, n = 0, o = 0, i = 0, a = 0) {
  const s = e === Qr ? 1 : e === Kr ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(n, o, i, a), c.setUTCFullYear(e, t - 1, r + s), [c, s];
}
function wr(e, t) {
  let [r, n] = Yt(e, t);
  n < 0 && (n += ae, r -= 1);
  const [o, i] = nt(n, lt), [a, s] = nt(i, sn);
  return to(r * De + o, a, s);
}
function to(e, t = 0, r = 0) {
  const n = Math.ceil(Math.max(0, Math.abs(e) - ks) / De) * Math.sign(e), o = new Date(e - n * De);
  return vr(Po, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + n, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, r]);
}
function _a(e, t) {
  if (t < -ks)
    throw new RangeError(Ft);
  const r = e.formatToParts(t), n = {};
  for (const o of r)
    n[o.type] = o.value;
  return n;
}
function Rh(e) {
  return e.isoDay;
}
function Fa(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function zl(e, t) {
  return [t, 0];
}
function Ah(e, t) {
  if (!t)
    return [it, e];
}
function Dh(e, t, r) {
  return {
    isoYear: e,
    isoMonth: t,
    isoDay: r
  };
}
function kh() {
  return 7;
}
function Yl() {
  return bt;
}
function Zl(e, t) {
  switch (t) {
    case 2:
      return Ba(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Wl(e) {
  return Ba(e) ? 366 : 365;
}
function Ba(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Hl(e) {
  const [t, r] = $l(e.isoYear, e.isoMonth, e.isoDay);
  return Ur(t.getUTCDay() - r, 7) || 7;
}
function Vl(e) {
  return this.id === Ar ? (({ isoYear: t }) => t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(e) : this.id === At ? Tg(e) : [];
}
function Ih(e) {
  const t = Ne(e);
  if (t < Pg) {
    const { isoYear: i } = e;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const r = _a($s(At), t), { era: n, eraYear: o } = Mf(r, At);
  return [n, o];
}
function ro(e) {
  return Ht(e), jr(e, 1), e;
}
function Ht(e) {
  return Gl(e, 1), e;
}
function wc(e) {
  return kl(Rs, e, Gl(e));
}
function Gl(e, t) {
  const { isoYear: r } = e, n = Oe(e, "isoMonth", 1, Yl(), t);
  return {
    isoYear: r,
    isoMonth: n,
    isoDay: Oe(e, "isoDay", 1, Zl(r, n), t)
  };
}
function jr(e, t) {
  return vr(ze, [Oe(e, "isoHour", 0, 23, t), Oe(e, "isoMinute", 0, 59, t), Oe(e, "isoSecond", 0, 59, t), Oe(e, "isoMillisecond", 0, 999, t), Oe(e, "isoMicrosecond", 0, 999, t), Oe(e, "isoNanosecond", 0, 999, t)]);
}
function te(e) {
  return e === void 0 ? 0 : yd(Xr(e));
}
function no(e, t = 0) {
  e = Xe(e);
  const r = gd(e), n = Fg(e, t);
  return [yd(e), n, r];
}
function Sr(e, t, r, n = 9, o = 0, i = 4) {
  t = Xe(t);
  let a = md(t, n, o), s = qa(t), c = ln(t, i);
  const u = un(t, n, o, 1);
  return a == null ? a = Math.max(r, u) : Xl(a, u), s = $a(s, u, 1), e && (c = ((f) => f < 4 ? (f + 2) % 4 : f)(c)), [a, u, s, c];
}
function oo(e, t = 6, r) {
  let n = qa(e = io(e, Zn));
  const o = ln(e, 7);
  let i = un(e, t);
  return i = _l(Zn, i), n = $a(n, i, void 0, r), [i, n, o];
}
function La(e) {
  return Is(Xe(e));
}
function Kl(e, t) {
  return Ua(Xe(e), t);
}
function Ch(e) {
  const t = io(e, zo), r = Dt(zo, Mg, t, 0);
  if (!r)
    throw new RangeError(_t(zo, r));
  return r;
}
function Ua(e, t = 4) {
  const r = Jl(e);
  return [ln(e, 4), ...Ql(un(e, t), r)];
}
function Ql(e, t) {
  return e != null ? [Qe[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function qa(e) {
  const t = e[qr];
  return t === void 0 ? 1 : Se(t, qr);
}
function $a(e, t, r, n) {
  const o = n ? ae : Qe[t + 1];
  if (o) {
    const i = Qe[t];
    if (o % ((e = at(qr, e, 1, o / i - (n ? 0 : 1), 1)) * i))
      throw new RangeError(_t(qr, e));
  } else
    e = at(qr, e, 1, r ? 10 ** 9 : 1, 1);
  return e;
}
function Jl(e) {
  let t = e[$o];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (Oa(t) === "auto")
        return;
      throw new RangeError(_t($o, t));
    }
    t = at($o, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function Xe(e) {
  return e === void 0 ? {} : Xr(e);
}
function io(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : Xr(e);
}
function ao(e) {
  return {
    overflow: Og[e]
  };
}
function za(e, t, r = 9, n = 0, o) {
  let i = t[e];
  if (i === void 0)
    return o ? n : void 0;
  if (i = Oa(i), i === "auto")
    return o ? n : null;
  let a = ra[i];
  if (a === void 0 && (a = vg[i]), a === void 0)
    throw new RangeError(Gf(e, i, ra));
  return at(e, a, n, r, 1, xs), a;
}
function Dt(e, t, r, n = 0) {
  const o = r[e];
  if (o === void 0)
    return n;
  const i = Oa(o), a = t[i];
  if (a === void 0)
    throw new RangeError(Gf(e, i, t));
  return a;
}
function Xl(e, t) {
  if (t > e)
    throw new RangeError(cg);
}
function ct(e) {
  return {
    branding: Fs,
    epochNanoseconds: e
  };
}
function qe(e, t, r) {
  return {
    branding: Bt,
    calendar: r,
    timeZone: t,
    epochNanoseconds: e
  };
}
function $e(e, t = e.calendar) {
  return {
    branding: Dr,
    calendar: t,
    ...Ue(xg, e)
  };
}
function ut(e, t = e.calendar) {
  return {
    branding: fn,
    calendar: t,
    ...Ue(As, e)
  };
}
function Wr(e, t = e.calendar) {
  return {
    branding: Cs,
    calendar: t,
    ...Ue(As, e)
  };
}
function Ln(e, t = e.calendar) {
  return {
    branding: Ms,
    calendar: t,
    ...Ue(As, e)
  };
}
function et(e) {
  return {
    branding: _s,
    ...Ue(dd, e)
  };
}
function fe(e) {
  return {
    branding: Bs,
    sign: kt(e),
    ...Ue(Ts, e)
  };
}
function Ya(e) {
  return Ia(e.epochNanoseconds, lt)[0];
}
function Mh(e) {
  return Th(e.epochNanoseconds);
}
function ef(e) {
  return e.epochNanoseconds;
}
function _h(e, t, r, n, o) {
  const i = Zt(n), [a, s] = ((N, j) => {
    const E = j((N = io(N, oa))[pd]);
    let R = _g(N);
    return R = _l(oa, R), [R, E];
  })(o, e), c = Math.max(a, i);
  if (!s && Vr(c, s))
    return jc(n, a);
  if (!s)
    throw new RangeError(jo);
  if (!n.sign)
    return 0;
  const [u, f, d] = fo(t, r, s), p = Xa(d), h = po(d), y = es(d), m = h(f, u, n);
  hr(s) || (ke(u), ke(m));
  const b = y(f, u, m, a);
  return Vr(a, s) ? jc(b, a) : Fh(b, p(m), a, f, u, p, h);
}
function Fh(e, t, r, n, o, i, a) {
  const s = kt(e), [c, u] = Za(n, Os(r, e), r, s, o, i, a), f = Wa(t, c, u);
  return e[re[r]] + f * s;
}
function jc(e, t) {
  return Ke(ye(e), Qe[t], 1);
}
function Za(e, t, r, n, o, i, a) {
  const s = re[r], c = {
    ...t,
    [s]: t[s] + n
  }, u = a(e, o, t), f = a(e, o, c);
  return [i(u), i(f)];
}
function Wa(e, t, r) {
  const n = Ke(Ge(t, r));
  if (!n)
    throw new RangeError(Or);
  return Ke(Ge(t, e)) / n;
}
function Bh(e, t) {
  const [r, n, o] = oo(t, 5, 1);
  return ct(co(e.epochNanoseconds, r, n, o, 1));
}
function Lh(e, t, r) {
  let { epochNanoseconds: n, timeZone: o, calendar: i } = t;
  const [a, s, c] = oo(r);
  if (a === 0 && s === 1)
    return t;
  const u = e(o);
  if (a === 6)
    n = Zh(nf, u, t, c);
  else {
    const f = u.N(n);
    n = Nr(u, tf(wr(n, f), a, s, c), f, 2, 0, 1);
  }
  return qe(n, o, i);
}
function Uh(e, t) {
  return $e(tf(e, ...oo(t)), e.calendar);
}
function qh(e, t) {
  const [r, n, o] = oo(t, 5);
  var i;
  return et((i = o, Ha(e, en(r, n), i)[0]));
}
function $h(e, t) {
  const r = e(t.timeZone), n = Fe(t, r), [o, i] = nf(n), a = Ke(Ge(Rt(r, o), Rt(r, i)), No, 1);
  if (a <= 0)
    throw new RangeError(Or);
  return a;
}
function zh(e, t) {
  const { timeZone: r, calendar: n } = t;
  return qe(Yh(of, e(r), t), r, n);
}
function Yh(e, t, r) {
  return Rt(t, e(Fe(r, t)));
}
function Zh(e, t, r, n) {
  const o = Fe(r, t), [i, a] = e(o), s = r.epochNanoseconds, c = Rt(t, i), u = Rt(t, a);
  if (Ul(s, c, u))
    throw new RangeError(Or);
  return af(Wa(s, c, u), n) ? u : c;
}
function tf(e, t, r, n) {
  return rf(e, en(t, r), n);
}
function rf(e, t, r) {
  const [n, o] = Ha(e, t, r);
  return ke({
    ...Vt(e, o),
    ...n
  });
}
function Ha(e, t, r) {
  return eo(Ot(Et(e), t, r));
}
function Un(e) {
  return Ot(e, So, 7);
}
function en(e, t) {
  return Qe[e] * t;
}
function nf(e) {
  const t = of(e);
  return [t, Vt(t, 1)];
}
function of(e) {
  return wg(6, e);
}
function Wh(e, t, r) {
  const n = Math.min(Zt(e), 6);
  return Pr(uo(ye(e, n), t, r), n);
}
function so(e, t, r, n, o, i, a, s, c, u) {
  if (n === 0 && o === 1)
    return e;
  const f = Vr(n, s) ? hr(s) && n < 6 && r >= 6 ? Vh : Hh : Gh;
  let [d, p, h] = f(e, t, r, n, o, i, a, s, c, u);
  return h && n !== 7 && (d = ((y, m, b, N, j, E, R, M) => {
    const _ = kt(y);
    for (let D = N + 1; D <= b; D++) {
      if (D === 7 && b !== 7)
        continue;
      const Z = Os(D, y);
      Z[re[D]] += _;
      const U = Ke(Ge(R(M(j, E, Z)), m));
      if (U && Math.sign(U) !== _)
        break;
      y = Z;
    }
    return y;
  })(d, p, r, Math.max(6, n), a, s, c, u)), d;
}
function co(e, t, r, n, o) {
  return t === 6 ? [Ot(Eh(e), r, n), 0] : uo(e, en(t, r), n, o);
}
function uo(e, t, r, n) {
  let [o, i] = e;
  n && i < 0 && (i += ae, o -= 1);
  const [a, s] = nt(Ot(i, t, r), ae);
  return Da(o + a, s);
}
function Ot(e, t, r) {
  return af(e / t, r) * t;
}
function af(e, t) {
  return Ug[t](e);
}
function Hh(e, t, r, n, o, i) {
  const a = kt(e), s = ye(e), c = co(s, n, o, i), u = Ge(s, c), f = Math.sign(c[0] - s[0]) === a, d = Pr(c, Math.min(r, 6));
  return [{
    ...e,
    ...d
  }, pr(t, u), f];
}
function Vh(e, t, r, n, o, i, a, s, c, u) {
  const f = kt(e) || 1, d = Ke(ye(e, 5)), p = en(n, o);
  let h = Ot(d, p, i);
  const [y, m] = Za(a, {
    ...e,
    ...Es
  }, 6, f, s, c, u), b = h - Ke(Ge(y, m));
  let N = 0;
  b && Math.sign(b) !== f ? t = Yt(y, h) : (N += f, h = Ot(b, p, i), t = Yt(m, h));
  const j = ho(h);
  return [{
    ...e,
    ...j,
    days: e.days + N
  }, t, !!N];
}
function Gh(e, t, r, n, o, i, a, s, c, u) {
  const f = kt(e), d = re[n], p = Os(n, e);
  n === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const h = Jn(e[d], o) * o;
  p[d] = h;
  const [y, m] = Za(a, p, n, o * f, s, c, u), b = h + Wa(t, y, m) * f * o, N = Ot(b, o, i), j = Math.sign(N - b) === f;
  return p[d] = N, [p, j ? m : y, j];
}
function ko(e, t, r, n) {
  const [o, i, a, s] = ((u) => {
    const f = Ua(u = Xe(u));
    return [u.timeZone, ...f];
  })(n), c = o !== void 0;
  return ((u, f, d, p, h, y) => {
    d = uo(d, h, p, 1);
    const m = f.N(d);
    return Va(wr(d, m), y) + (u ? tn(Un(m)) : "Z");
  })(c, t(c ? e(o) : Jt), r.epochNanoseconds, i, a, s);
}
function Io(e, t, r) {
  const [n, o, i, a, s, c] = ((u) => {
    u = Xe(u);
    const f = Is(u), d = Jl(u), p = Lg(u), h = ln(u, 4), y = un(u, 4);
    return [f, Bg(u), p, h, ...Ql(y, d)];
  })(r);
  return ((u, f, d, p, h, y, m, b, N, j) => {
    p = uo(p, N, b, 1);
    const E = u(d).N(p);
    return Va(wr(p, E), j) + tn(Un(E), m) + ((R, M) => M !== 1 ? "[" + (M === 2 ? "!" : "") + R + "]" : "")(d, y) + Ga(f, h);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, n, o, i, a, s, c);
}
function Co(e, t) {
  const [r, n, o, i] = ((u) => (u = Xe(u), [Is(u), ...Ua(u)]))(t);
  return a = e.calendar, s = r, c = i, Va(rf(e, o, n), c) + Ga(a, s);
  var a, s, c;
}
function Mo(e, t) {
  return r = e.calendar, n = e, o = La(t), qn(n) + Ga(r, o);
  var r, n, o;
}
function _o(e, t) {
  return sf(e.calendar, cf, e, La(t));
}
function Fo(e, t) {
  return sf(e.calendar, Kh, e, La(t));
}
function Bo(e, t) {
  const [r, n, o] = Kl(t);
  return i = o, uf(Ha(e, n, r)[0], i);
  var i;
}
function Nn(e, t) {
  const [r, n, o] = Kl(t, 3);
  return n > 1 && Gt(e = {
    ...e,
    ...Wh(e, n, r)
  }), ((i, a) => {
    const { sign: s } = i, c = s === -1 ? Te(i) : i, { hours: u, minutes: f } = c, [d, p] = Ia(ye(c, 3), Ve, Tt);
    pf(d);
    const h = Ka(p, a), y = a >= 0 || !s || h;
    return (s < 0 ? "-" : "") + "P" + Sc({
      Y: qt(c.years),
      M: qt(c.months),
      W: qt(c.weeks),
      D: qt(c.days)
    }) + (u || f || d || y ? "T" + Sc({
      H: qt(u),
      M: qt(f),
      S: qt(d, y) + h
    }) : "");
  })(e, o);
}
function sf(e, t, r, n) {
  const o = n > 1 || n === 0 && e !== Q;
  return n === 1 ? e === Q ? t(r) : qn(r) : o ? qn(r) + lf(e, n === 2) : t(r);
}
function Sc(e) {
  const t = [];
  for (const r in e) {
    const n = e[r];
    n && t.push(n, r);
  }
  return t.join("");
}
function Va(e, t) {
  return qn(e) + "T" + uf(e, t);
}
function qn(e) {
  return cf(e) + "-" + Be(e.isoDay);
}
function cf(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? ff(t) + Mn(6, Math.abs(t)) : Mn(4, t)) + "-" + Be(e.isoMonth);
}
function Kh(e) {
  return Be(e.isoMonth) + "-" + Be(e.isoDay);
}
function uf(e, t) {
  const r = [Be(e.isoHour), Be(e.isoMinute)];
  return t !== -1 && r.push(Be(e.isoSecond) + ((n, o, i, a) => Ka(n * lt + o * sn + i, a))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), r.join(":");
}
function tn(e, t = 0) {
  if (t === 1)
    return "";
  const [r, n] = nt(Math.abs(e), No), [o, i] = nt(n, So), [a, s] = nt(i, Ve);
  return ff(e) + Be(r) + ":" + Be(o) + (a || s ? ":" + Be(a) + Ka(s) : "");
}
function Ga(e, t) {
  return t !== 1 && (t > 1 || t === 0 && e !== Q) ? lf(e, t === 2) : "";
}
function lf(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Ka(e, t) {
  let r = Mn(9, e);
  return r = t === void 0 ? r.replace(zg, "") : r.slice(0, t), r ? "." + r : "";
}
function ff(e) {
  return e < 0 ? "-" : "+";
}
function qt(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Qh(e, t) {
  const { epochNanoseconds: r } = e, n = (t.N ? t : t(e.timeZone)).N(r), o = wr(r, n);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: n
  };
}
function Nr(e, t, r, n = 0, o = 0, i, a) {
  if (r !== void 0 && n === 1 && (n === 1 || a))
    return Ma(t, r);
  const s = e.v(t);
  if (r !== void 0 && n !== 3) {
    const c = ((u, f, d, p) => {
      const h = me(f);
      p && (d = Un(d));
      for (const y of u) {
        let m = Ke(Ge(y, h));
        if (p && (m = Un(m)), m === d)
          return y;
      }
    })(s, t, r, i);
    if (c !== void 0)
      return c;
    if (n === 0)
      throw new RangeError(rg);
  }
  return a ? me(t) : rn(e, t, o, s);
}
function rn(e, t, r = 0, n = e.v(t)) {
  if (n.length === 1)
    return n[0];
  if (r === 1)
    throw new RangeError(ng);
  if (n.length)
    return n[r === 3 ? 1 : 0];
  const o = me(t), i = ((s, c) => {
    const u = s.N(Yt(c, -ae));
    return ((f) => {
      if (f > ae)
        throw new RangeError(tg);
      return f;
    })(s.N(Yt(c, ae)) - u);
  })(e, o), a = i * (r === 2 ? -1 : 1);
  return (n = e.v(wr(o, a)))[r === 2 ? 0 : n.length - 1];
}
function Rt(e, t) {
  const r = e.v(t);
  if (r.length)
    return r[0];
  const n = Yt(me(t), -ae);
  return e.l(n, 1);
}
function Nc(e, t, r) {
  return ct(Je(pr(t.epochNanoseconds, ((n) => {
    if (hf(n))
      throw new RangeError(ag);
    return ye(n, 5);
  })(e ? Te(r) : r))));
}
function Pc(e, t, r, n, o, i = /* @__PURE__ */ Object.create(null)) {
  const a = t(n.timeZone), s = e(n.calendar);
  return {
    ...n,
    ...Qa(a, s, n, r ? Te(o) : o, i)
  };
}
function Tc(e, t, r, n, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = r;
  return $e(Ja(e(i), r, t ? Te(n) : n, o), i);
}
function Ec(e, t, r, n, o) {
  const { calendar: i } = r;
  return ut(lo(e(i), r, t ? Te(n) : n, o), i);
}
function Oc(e, t, r, n, o) {
  const i = r.calendar, a = e(i);
  let s = Le(Hr(a, r));
  t && (n = ts(n)), n.sign < 0 && (s = a.P(s, {
    ...ge,
    months: 1
  }), s = Vt(s, -1));
  const c = a.P(s, n, o);
  return Wr(Hr(a, c), i);
}
function Rc(e, t, r) {
  return et(df(t, e ? Te(r) : r)[0]);
}
function Qa(e, t, r, n, o) {
  const i = ye(n, 5);
  let a = r.epochNanoseconds;
  if (hf(n)) {
    const s = Fe(r, e);
    a = pr(rn(e, {
      ...lo(t, s, {
        ...n,
        ...Es
      }, o),
      ...Ue(ze, s)
    }), i);
  } else
    a = pr(a, i), te(o);
  return {
    epochNanoseconds: Je(a)
  };
}
function Ja(e, t, r, n) {
  const [o, i] = df(t, r);
  return ke({
    ...lo(e, t, {
      ...r,
      ...Es,
      days: r.days + i
    }, n),
    ...o
  });
}
function lo(e, t, r, n) {
  if (r.years || r.months || r.weeks)
    return e.P(t, r, n);
  te(n);
  const o = r.days + ye(r, 5)[0];
  return o ? Le(Vt(t, o)) : t;
}
function Hr(e, t, r = 1) {
  return Vt(t, r - e.day(t));
}
function df(e, t) {
  const [r, n] = ye(t, 5), [o, i] = eo(Et(e) + n);
  return [o, r + i];
}
function Jh(e, t, r) {
  const n = te(r);
  let o, { years: i, months: a, weeks: s, days: c } = t;
  if (c += ye(t, 5)[0], i || a)
    o = Xh(this, e, i, a, n);
  else {
    if (!s && !c)
      return e;
    o = Ne(e);
  }
  if (o === void 0)
    throw new RangeError(Ft);
  return o += (7 * s + c) * De, Le(to(o));
}
function Xh(e, t, r, n, o) {
  let [i, a, s] = e.u(t);
  if (r) {
    const [c, u] = e.m(i, a);
    i += r, a = vo(c, u, e.F(i)), a = at("month", a, 1, e.O(i), o);
  }
  return n && ([i, a] = e.p(i, a, n)), s = at("day", s, 1, e.B(i, a), o), e.M(i, a, s);
}
function em(e, t, r) {
  return e += Jn(r, bt), (t += Pa(r, bt)) < 1 ? (e--, t += bt) : t > bt && (e++, t -= bt), [e, t];
}
function tm(e, t, r) {
  if (r) {
    if (t += r, !Number.isSafeInteger(t))
      throw new RangeError(Ft);
    if (r < 0)
      for (; t < 1; )
        t += zn.call(this, --e);
    else {
      let n;
      for (; t > (n = zn.call(this, e)); )
        t -= n, e++;
    }
  }
  return [e, t];
}
function Vt(e, t) {
  return t ? {
    ...e,
    ...to(Ne(e) + t * De)
  } : e;
}
function fo(e, t, r) {
  const n = e(r.calendar);
  return hr(r) ? [r, n, t(r.timeZone)] : [{
    ...r,
    ...Ie
  }, n];
}
function Xa(e) {
  return e ? ef : me;
}
function po(e) {
  return e ? J(Qa, e) : Ja;
}
function es(e) {
  return e ? J(Pm, e) : Tm;
}
function hr(e) {
  return e && e.epochNanoseconds;
}
function Vr(e, t) {
  return e <= 6 - (hr(t) ? 1 : 0);
}
function Ac(e, t, r, n, o, i, a) {
  const s = e(Xe(a).relativeTo), c = Math.max(Zt(o), Zt(i));
  if (Vr(c, s))
    return fe(Gt(((m, b, N, j) => {
      const E = pr(ye(m), ye(b), j ? -1 : 1);
      if (!Number.isFinite(E[0]))
        throw new RangeError(Ft);
      return {
        ...ge,
        ...Pr(E, N)
      };
    })(o, i, c, n)));
  if (!s)
    throw new RangeError(jo);
  n && (i = Te(i));
  const [u, f, d] = fo(t, r, s), p = po(d), h = es(d), y = p(f, u, o);
  return fe(h(f, u, p(f, y, i), c));
}
function rm(e, t, r, n, o) {
  const i = Zt(n), [a, s, c, u, f] = ((_, D, Z) => {
    _ = io(_, Zn);
    let U = md(_);
    const G = Z(_[pd]);
    let B = qa(_);
    const T = ln(_, 7);
    let S = un(_);
    if (U === void 0 && S === void 0)
      throw new RangeError(sg);
    if (S == null && (S = 0), U == null && (U = Math.max(S, D)), Xl(U, S), B = $a(B, S, 1), B > 1 && S > 5 && U !== S)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [U, S, B, T, G];
  })(o, i, e), d = Math.max(i, a);
  if (!f && d <= 6)
    return fe(Gt(((_, D, Z, U, G) => {
      const B = co(ye(_), Z, U, G);
      return {
        ...ge,
        ...Pr(B, D)
      };
    })(n, a, s, c, u)));
  if (!hr(f) && !n.sign)
    return n;
  if (!f)
    throw new RangeError(jo);
  const [p, h, y] = fo(t, r, f), m = Xa(y), b = po(y), N = es(y), j = b(h, p, n);
  hr(f) || (ke(p), ke(j));
  let E = N(h, p, j, a);
  const R = n.sign, M = kt(E);
  if (R && M && R !== M)
    throw new RangeError(Or);
  return E = so(E, m(j), a, s, c, u, h, p, m, b), fe(E);
}
function nm(e) {
  return e.sign === -1 ? ts(e) : e;
}
function ts(e) {
  return fe(Te(e));
}
function Te(e) {
  const t = {};
  for (const r of re)
    t[r] = -1 * e[r] || 0;
  return t;
}
function om(e) {
  return !e.sign;
}
function kt(e, t = re) {
  let r = 0;
  for (const n of t) {
    const o = Math.sign(e[n]);
    if (o) {
      if (r && r !== o)
        throw new RangeError(ig);
      r = o;
    }
  }
  return r;
}
function Gt(e) {
  for (const t of bg)
    at(t, e[t], -Uc, Uc, 1);
  return pf(Ke(ye(e), Ve)), e;
}
function pf(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(og);
}
function ye(e, t = 6) {
  return Cl(e, t, re);
}
function Pr(e, t = 6) {
  const [r, n] = e, o = Xn(n, t, re);
  if (o[re[t]] += r * (ae / Qe[t]), !Number.isFinite(o[re[t]]))
    throw new RangeError(Ft);
  return o;
}
function ho(e, t = 5) {
  return Xn(e, t, re);
}
function hf(e) {
  return !!kt(e, fd);
}
function Zt(e) {
  let t = 9;
  for (; t > 0 && !e[re[t]]; t--)
    ;
  return t;
}
function im(e, t) {
  return [e, t];
}
function Dc(e) {
  const t = Math.floor(e / Rn) * Rn;
  return [t, t + Rn];
}
function am(e) {
  const t = It(e = _n(e));
  if (!t)
    throw new RangeError(Re(e));
  let r;
  if (t.C)
    r = 0;
  else {
    if (!t.offset)
      throw new RangeError(Re(e));
    r = Kt(t.offset);
  }
  return t.timeZone && as(t.timeZone, 1), ct(Ma(ro(t), r));
}
function sm(e) {
  const t = It(be(e));
  if (!t)
    throw new RangeError(Re(e));
  if (t.timeZone)
    return mf(t, t.offset ? Kt(t.offset) : void 0);
  if (t.C)
    throw new RangeError(Re(e));
  return gf(t);
}
function cm(e, t) {
  const r = It(be(e));
  if (!r || !r.timeZone)
    throw new RangeError(Re(e));
  const { offset: n } = r, o = n ? Kt(n) : void 0, [, i, a] = no(t);
  return mf(r, o, i, a);
}
function Kt(e) {
  const t = as(e);
  if (t === void 0)
    throw new RangeError(Re(e));
  return t;
}
function um(e) {
  const t = It(be(e));
  if (!t || t.C)
    throw new RangeError(Re(e));
  return $e(yf(t));
}
function rs(e, t, r) {
  let n = It(be(e));
  if (!n || n.C)
    throw new RangeError(Re(e));
  return t ? n.calendar === Q && (n = n.isoYear === -271821 && n.isoMonth === 4 ? {
    ...n,
    isoDay: 20,
    ...Ie
  } : {
    ...n,
    isoDay: 1,
    ...Ie
  }) : r && n.calendar === Q && (n = {
    ...n,
    isoYear: it
  }), ut(n.k ? yf(n) : gf(n));
}
function lm(e, t) {
  const r = os(be(t));
  if (r)
    return ns(r), Wr(Ca(Ht(r)));
  const n = rs(t, 1);
  return Wr(Hr(e(n.calendar), n));
}
function ns(e) {
  if (e.calendar !== Q)
    throw new RangeError(ot(e.calendar));
}
function fm(e, t) {
  const r = is(be(t));
  if (r)
    return ns(r), Ln(Ht(r));
  const n = rs(t, 0, 1), { calendar: o } = n, i = e(o), [a, s, c] = i.u(n), [u, f] = i.m(a, s), [d, p] = i.R(u, f, c);
  return Ln(Le(i.U(d, p, c)), o);
}
function dm(e) {
  let t, r = ((n) => {
    const o = Kg.exec(n);
    return o ? (mo(o[10]), xf(o)) : void 0;
  })(be(e));
  if (!r) {
    if (r = It(e), !r)
      throw new RangeError(Re(e));
    if (!r.k)
      throw new RangeError(Re(e));
    if (r.C)
      throw new RangeError(ot("Z"));
    ns(r);
  }
  if ((t = os(e)) && wc(t))
    throw new RangeError(Re(e));
  if ((t = is(e)) && wc(t))
    throw new RangeError(Re(e));
  return et(jr(r, 1));
}
function pm(e) {
  const t = ((r) => {
    const n = Xg.exec(r);
    return n ? ((o) => {
      function i(f, d, p) {
        let h = 0, y = 0;
        if (p && ([h, c] = nt(c, Qe[p])), f !== void 0) {
          if (s)
            throw new RangeError(ot(f));
          y = ((m) => {
            const b = parseInt(m);
            if (!Number.isFinite(b))
              throw new RangeError(ot(m));
            return b;
          })(f), a = 1, d && (c = ss(d) * (Qe[p] / Ve), s = 1);
        }
        return h + y;
      }
      let a = 0, s = 0, c = 0, u = {
        ...vr(re, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...Xn(c, 2, re)
      };
      if (!a)
        throw new RangeError(Vf(re));
      return cs(o[1]) < 0 && (u = Te(u)), u;
    })(n) : void 0;
  })(be(e));
  if (!t)
    throw new RangeError(Re(e));
  return fe(Gt(t));
}
function hm(e) {
  const t = It(e) || os(e) || is(e);
  return t ? t.calendar : e;
}
function mm(e) {
  const t = It(e);
  return t && (t.timeZone || t.C && Jt || t.offset) || e;
}
function mf(e, t, r = 0, n = 0) {
  const o = us(e.timeZone), i = H(o);
  let a;
  return ro(e), a = e.k ? Nr(i, e, t, r, n, !i.j, e.C) : Rt(i, e), qe(a, o, wo(e.calendar));
}
function yf(e) {
  return bf(ke(ro(e)));
}
function gf(e) {
  return bf(Le(Ht(e)));
}
function bf(e) {
  return {
    ...e,
    calendar: wo(e.calendar)
  };
}
function It(e) {
  const t = Gg.exec(e);
  return t ? ((r) => {
    const n = r[10], o = (n || "").toUpperCase() === "Z";
    return {
      isoYear: vf(r),
      isoMonth: parseInt(r[4]),
      isoDay: parseInt(r[5]),
      ...xf(r.slice(5)),
      ...mo(r[16]),
      k: !!r[6],
      C: o,
      offset: o ? void 0 : n
    };
  })(t) : void 0;
}
function os(e) {
  const t = Hg.exec(e);
  return t ? ((r) => ({
    isoYear: vf(r),
    isoMonth: parseInt(r[4]),
    isoDay: 1,
    ...mo(r[5])
  }))(t) : void 0;
}
function is(e) {
  const t = Vg.exec(e);
  return t ? ((r) => ({
    isoYear: it,
    isoMonth: parseInt(r[1]),
    isoDay: parseInt(r[2]),
    ...mo(r[3])
  }))(t) : void 0;
}
function as(e, t) {
  const r = Qg.exec(e);
  return r ? ((n, o) => {
    const i = n[4] || n[5];
    if (o && i)
      throw new RangeError(ot(i));
    return ((a) => {
      if (Math.abs(a) >= ae)
        throw new RangeError(eg);
      return a;
    })((cr(n[2]) * No + cr(n[3]) * So + cr(n[4]) * Ve + ss(n[5] || "")) * cs(n[1]));
  })(r, t) : void 0;
}
function vf(e) {
  const t = cs(e[1]), r = parseInt(e[2] || e[3]);
  if (t < 0 && !r)
    throw new RangeError(ot(-0));
  return t * r;
}
function xf(e) {
  const t = cr(e[3]);
  return {
    ...eo(ss(e[4] || ""))[0],
    isoHour: cr(e[1]),
    isoMinute: cr(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function mo(e) {
  let t, r;
  const n = [];
  if (e.replace(Jg, ((o, i, a) => {
    const s = !!i, [c, u] = a.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        n.push(c), t || (t = s);
      else if (s || /[A-Z]/.test(u))
        throw new RangeError(ot(o));
    } else {
      if (r)
        throw new RangeError(ot(o));
      r = c;
    }
    return "";
  })), n.length > 1 && t)
    throw new RangeError(ot(e));
  return {
    timeZone: r,
    calendar: n[0] || Q
  };
}
function ss(e) {
  return parseInt(e.padEnd(9, "0"));
}
function Tr(e) {
  return new RegExp(`^${e}$`, "i");
}
function cs(e) {
  return e && e !== "+" ? -1 : 1;
}
function cr(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function ym(e) {
  return us(be(e));
}
function us(e) {
  const t = ls(e);
  return typeof t == "number" ? tn(t) : t ? ((r) => {
    if (rb.test(r))
      throw new RangeError(Xf(r));
    if (tb.test(r))
      throw new RangeError(Xy);
    return r.toLowerCase().split("/").map(((n, o) => (n.length <= 3 || /\d/.test(n)) && !/etc|yap/.test(n) ? n.toUpperCase() : n.replace(/baja|dumont|[a-z]+/g, ((i, a) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !a ? vc(i).replace(/island|noronha|murdo|rivadavia|urville/, vc) : i)))).join("/");
  })(e) : Jt;
}
function kc(e) {
  const t = ls(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : Jt;
}
function ls(e) {
  const t = as(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== Jt ? eb(e) : void 0;
}
function wf(e, t) {
  return Me(e.epochNanoseconds, t.epochNanoseconds);
}
function jf(e, t) {
  return Me(e.epochNanoseconds, t.epochNanoseconds);
}
function gm(e, t, r, n, o, i) {
  const a = e(Xe(i).relativeTo), s = Math.max(Zt(n), Zt(o));
  if (kl(re, n, o))
    return 0;
  if (Vr(s, a))
    return Me(ye(n), ye(o));
  if (!a)
    throw new RangeError(jo);
  const [c, u, f] = fo(t, r, a), d = Xa(f), p = po(f);
  return Me(d(p(u, c, n)), d(p(u, c, o)));
}
function Sf(e, t) {
  return Er(e, t) || fs(e, t);
}
function Er(e, t) {
  return St(Ne(e), Ne(t));
}
function fs(e, t) {
  return St(Et(e), Et(t));
}
function bm(e, t) {
  return !wf(e, t);
}
function vm(e, t) {
  return !jf(e, t) && !!Nf(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function xm(e, t) {
  return !Sf(e, t) && e.calendar === t.calendar;
}
function wm(e, t) {
  return !Er(e, t) && e.calendar === t.calendar;
}
function jm(e, t) {
  return !Er(e, t) && e.calendar === t.calendar;
}
function Sm(e, t) {
  return !Er(e, t) && e.calendar === t.calendar;
}
function Nm(e, t) {
  return !fs(e, t);
}
function Nf(e, t) {
  if (e === t)
    return 1;
  try {
    return kc(e) === kc(t);
  } catch {
  }
}
function Ic(e, t, r, n) {
  const o = Sr(e, n, 3, 5), i = yo(t.epochNanoseconds, r.epochNanoseconds, ...o);
  return fe(e ? Te(i) : i);
}
function Cc(e, t, r, n, o, i) {
  const a = bo(n.calendar, o.calendar), [s, c, u, f] = Sr(r, i, 5), d = n.epochNanoseconds, p = o.epochNanoseconds, h = Me(p, d);
  let y;
  if (h)
    if (s < 6)
      y = yo(d, p, s, c, u, f);
    else {
      const m = t(Dm(n.timeZone, o.timeZone)), b = e(a);
      y = Tf(b, m, n, o, h, s, i), y = so(y, p, s, c, u, f, b, n, ef, J(Qa, m));
    }
  else
    y = ge;
  return fe(r ? Te(y) : y);
}
function Mc(e, t, r, n, o) {
  const i = bo(r.calendar, n.calendar), [a, s, c, u] = Sr(t, o, 6), f = me(r), d = me(n), p = Me(d, f);
  let h;
  if (p)
    if (a <= 6)
      h = yo(f, d, a, s, c, u);
    else {
      const y = e(i);
      h = Ef(y, r, n, p, a, o), h = so(h, d, a, s, c, u, y, r, me, Ja);
    }
  else
    h = ge;
  return fe(t ? Te(h) : h);
}
function _c(e, t, r, n, o) {
  const i = bo(r.calendar, n.calendar);
  return Pf(t, (() => e(i)), r, n, ...Sr(t, o, 6, 9, 6));
}
function Fc(e, t, r, n, o) {
  const i = bo(r.calendar, n.calendar), a = Sr(t, o, 9, 9, 8), s = e(i), c = Hr(s, r), u = Hr(s, n);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? fe(ge) : Pf(t, (() => s), Le(c), Le(u), ...a, 8);
}
function Pf(e, t, r, n, o, i, a, s, c = 6) {
  const u = me(r), f = me(n);
  if (u === void 0 || f === void 0)
    throw new RangeError(Ft);
  let d;
  if (Me(f, u))
    if (o === 6)
      d = yo(u, f, o, i, a, s);
    else {
      const p = t();
      d = p.h(r, n, o), i === c && a === 1 || (d = so(d, f, o, i, a, s, p, r, me, lo));
    }
  else
    d = ge;
  return fe(e ? Te(d) : d);
}
function Bc(e, t, r, n) {
  const [o, i, a, s] = Sr(e, n, 5, 5), c = Ot(ds(t, r), en(i, a), s), u = {
    ...ge,
    ...ho(c, o)
  };
  return fe(e ? Te(u) : u);
}
function Pm(e, t, r, n, o, i) {
  const a = Me(n.epochNanoseconds, r.epochNanoseconds);
  return a ? o < 6 ? Of(r.epochNanoseconds, n.epochNanoseconds, o) : Tf(t, e, r, n, a, o, i) : ge;
}
function Tm(e, t, r, n, o) {
  const i = me(t), a = me(r), s = Me(a, i);
  return s ? n <= 6 ? Of(i, a, n) : Ef(e, t, r, s, n, o) : ge;
}
function Tf(e, t, r, n, o, i, a) {
  const [s, c, u] = Em(t, r, n, o);
  var f, d;
  return {
    ...i === 6 ? (f = s, d = c, {
      ...ge,
      days: Rf(f, d)
    }) : e.h(s, c, i, a),
    ...ho(u)
  };
}
function Ef(e, t, r, n, o, i) {
  const [a, s, c] = ((u, f, d) => {
    let p = f, h = ds(u, f);
    return Math.sign(h) === -d && (p = Vt(f, -d), h += ae * d), [u, p, h];
  })(t, r, n);
  return {
    ...e.h(a, s, o, i),
    ...ho(c)
  };
}
function Em(e, t, r, n) {
  function o() {
    return d = {
      ...Vt(s, u++ * -n),
      ...a
    }, p = rn(e, d), Me(c, p) === -n;
  }
  const i = Fe(t, e), a = Ue(ze, i), s = Fe(r, e), c = r.epochNanoseconds;
  let u = 0;
  const f = ds(i, s);
  let d, p;
  if (Math.sign(f) === -n && u++, o() && (n === -1 || o()))
    throw new RangeError(Or);
  const h = Ke(Ge(p, c));
  return [i, d, h];
}
function yo(e, t, r, n, o, i) {
  return {
    ...ge,
    ...Pr(co(Ge(e, t), n, o, i), r)
  };
}
function Of(e, t, r) {
  return {
    ...ge,
    ...Pr(Ge(e, t), r)
  };
}
function Rf(e, t) {
  return go(Ne(e), Ne(t));
}
function go(e, t) {
  return Math.trunc((t - e) / De);
}
function ds(e, t) {
  return Et(t) - Et(e);
}
function Om(e, t, r) {
  if (r <= 7) {
    let c = 0, u = Rf({
      ...e,
      ...Ie
    }, {
      ...t,
      ...Ie
    });
    return r === 7 && ([c, u] = Tt(u, 7)), {
      ...ge,
      weeks: c,
      days: u
    };
  }
  const n = this.u(e), o = this.u(t);
  let [i, a, s] = ((c, u, f, d, p, h, y) => {
    let m = p - u, b = h - f, N = y - d;
    if (m || b) {
      const j = Math.sign(m || b);
      let E = c.B(p, h), R = 0;
      if (Math.sign(N) === -j) {
        const M = E;
        [p, h] = c.p(p, h, -j), m = p - u, b = h - f, E = c.B(p, h), R = j < 0 ? -M : E;
      }
      if (N = y - Math.min(d, E) + R, m) {
        const [M, _] = c.m(u, f), [D, Z] = c.m(p, h);
        if (b = D - M || Number(Z) - Number(_), Math.sign(b) === -j) {
          const U = j < 0 && -c.O(p);
          m = (p -= j) - u, b = h - vo(M, _, c.F(p)) + (U || c.O(p));
        }
      }
    }
    return [m, b, N];
  })(this, ...n, ...o);
  return r === 8 && (a += this.q(i, n[0]), i = 0), {
    ...ge,
    years: i,
    months: a,
    days: s
  };
}
function Rm(e) {
  return e * bt;
}
function Am(e, t) {
  const r = t + e, n = Math.sign(e), o = n < 0 ? -1 : 0;
  let i = 0;
  for (let a = t; a !== r; a += n)
    i += zn.call(this, a + o);
  return i;
}
function bo(e, t) {
  if (e !== t)
    throw new RangeError(Jf);
  return e;
}
function Dm(e, t) {
  if (!Nf(e, t))
    throw new RangeError(ed);
  return e;
}
function Af(e) {
  return this.I(e)[0];
}
function Df(e) {
  return this.I(e)[1];
}
function km(e) {
  const [t] = this.u(e);
  return this.L(t);
}
function Im(e) {
  const [t] = this.u(e);
  return this.O(t);
}
function Cm(e) {
  const [t, r] = this.u(e);
  return this.B(t, r);
}
function Mm(e) {
  const [t] = this.u(e);
  return this.G(t);
}
function ps(e) {
  const [t] = this.u(e);
  return go(this.M(t), Ne(e)) + 1;
}
function hs(e) {
  const t = nb.exec(e);
  if (!t)
    throw new RangeError(Qy(e));
  return [parseInt(t[1]), !!t[2]];
}
function nn(e, t) {
  return "M" + Be(e) + (t ? "L" : "");
}
function vo(e, t, r) {
  return e + (t || r && e >= r ? 1 : 0);
}
function ms(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function kf(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function ys(e) {
  return ud[Cf(e)];
}
function If(e) {
  return hg[Cf(e)];
}
function Cf(e) {
  return Wt(e.id || Q);
}
function _m(e) {
  function t(o) {
    return ((i, a) => ({
      ...Mf(i, a),
      V: i.month,
      day: parseInt(i.day)
    }))(_a(r, o), n);
  }
  const r = $s(e), n = Wt(e);
  return {
    id: e,
    _: Fm(t),
    J: Bm(t)
  };
}
function Fm(e) {
  return Ce(((t) => {
    const r = Ne(t);
    return e(r);
  }), WeakMap);
}
function Bm(e) {
  const t = e(0).year - Ng;
  return Ce(((r) => {
    let n, o = xr(r - t), i = 0;
    const a = [], s = [];
    do
      o += 400 * De;
    while ((n = e(o)).year <= r);
    do
      if (o += (1 - n.day) * De, n.year === r && (a.push(o), s.push(n.V)), o -= De, ++i > 100 || o < -ks)
        throw new RangeError(Or);
    while ((n = e(o)).year >= r);
    return {
      K: a.reverse(),
      X: td(s.reverse())
    };
  }));
}
function Mf(e, t) {
  let r, n, o = _f(e);
  if (e.era) {
    const i = ud[t], a = ld[t] || {};
    i !== void 0 && (r = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), r === "bc" || r === "b" ? r = "bce" : r === "ad" || r === "a" ? r = "ce" : r === "beforeroc" && (r = "broc"), r = a[r] || r, n = o, o = kf(n, i[r] || 0));
  }
  return {
    era: r,
    eraYear: n,
    year: o
  };
}
function _f(e) {
  return parseInt(e.relatedYear || e.year);
}
function Lm(e) {
  return this._(e).day;
}
function xo(e) {
  const { year: t, V: r, day: n } = this._(e), { X: o } = this.J(t);
  return [t, o[r] + 1, n];
}
function Um(e, t, r) {
  return to(Gr.call(this, e, t, r));
}
function Gr(e, t = 1, r = 1) {
  return this.J(e).K[t - 1] + (r - 1) * De;
}
function Ff(e, t) {
  const r = $n.call(this, e);
  return [ms(t, r), r === t];
}
function $n(e) {
  const t = Lc(this, e), r = Lc(this, e - 1), n = t.length;
  if (n > r.length) {
    const o = If(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < n; i++)
      if (t[i] !== r[i])
        return i + 1;
  }
}
function qm(e) {
  const t = On.call(this, e);
  return t > On.call(this, e - 1) && t > On.call(this, e + 1);
}
function On(e) {
  return go(Gr.call(this, e), Gr.call(this, e + 1));
}
function Bf(e, t) {
  const { K: r } = this.J(e);
  let n = t + 1, o = r;
  return n > r.length && (n = 1, o = this.J(e + 1).K), go(r[t - 1], o[n - 1]);
}
function zn(e) {
  return this.J(e).K.length;
}
function Lf(e) {
  const t = this._(e);
  return [t.era, t.eraYear];
}
function $m(e, t, r) {
  const n = this.id && Wt(this.id) === "chinese" ? ((u, f, d) => {
    if (f)
      switch (u) {
        case 1:
          return 1651;
        case 2:
          return d < 30 ? 1947 : 1765;
        case 3:
          return d < 30 ? 1966 : 1955;
        case 4:
          return d < 30 ? 1963 : 1944;
        case 5:
          return d < 30 ? 1971 : 1952;
        case 6:
          return d < 30 ? 1960 : 1941;
        case 7:
          return d < 30 ? 1968 : 1938;
        case 8:
          return d < 30 ? 1957 : 1718;
        case 9:
          return 1832;
        case 10:
          return 1870;
        case 11:
          return 1814;
        case 12:
          return 1890;
      }
    return 1972;
  })(e, t, r) : it;
  let [o, i, a] = xo.call(this, {
    isoYear: n,
    isoMonth: bt,
    isoDay: 31
  });
  const s = $n.call(this, o), c = i === s;
  (St(e, ms(i, s)) || St(Number(t), Number(c)) || St(r, a)) === 1 && o--;
  for (let u = 0; u < 100; u++) {
    const f = o - u, d = $n.call(this, f), p = vo(e, t, d);
    if (t === (p === d) && r <= Bf.call(this, f, p))
      return [f, p];
  }
}
function Lc(e, t) {
  return Object.keys(e.J(t).X);
}
function on(e) {
  return wo(be(e));
}
function wo(e) {
  if ((e = e.toLowerCase()) !== Q && e !== Ar) {
    const t = $s(e).resolvedOptions().calendar;
    if (Wt(e) !== Wt(t))
      throw new RangeError(Qf(e));
    return t;
  }
  return e;
}
function Wt(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function Uf(e, t) {
  return (r) => r === Q ? e : r === Ar || r === At ? Object.assign(Object.create(e), {
    id: r
  }) : Object.assign(Object.create(t), ob(r));
}
function zm(e, t, r, n) {
  const o = Ct(r, n, dt, [], id);
  if (o.timeZone !== void 0) {
    const i = r.ee(o), a = an(o), s = e(o.timeZone);
    return {
      epochNanoseconds: Nr(t(s), {
        ...i,
        ...a
      }, o.offset !== void 0 ? Kt(o.offset) : void 0),
      timeZone: s
    };
  }
  return {
    ...r.ee(o),
    ...Ie
  };
}
function Ym(e, t, r, n, o, i) {
  const a = Ct(r, o, dt, nd, id), s = e(a.timeZone), [c, u, f] = no(i), d = r.ee(a, ao(c)), p = an(a, c);
  return qe(Nr(t(s), {
    ...d,
    ...p
  }, a.offset !== void 0 ? Kt(a.offset) : void 0, u, f), s, n);
}
function Zm(e, t, r) {
  const n = Ct(e, t, dt, [], ft), o = te(r);
  return $e(ke({
    ...e.ee(n, ao(o)),
    ...an(n, o)
  }));
}
function Wm(e, t, r, n = []) {
  const o = Ct(e, t, dt, n);
  return e.ee(o, r);
}
function Hm(e, t, r, n) {
  const o = Ct(e, t, Ps, n);
  return e.ne(o, r);
}
function Vm(e, t, r, n) {
  const o = Ct(e, r, dt, cn);
  return t && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = it), e.te(o, n);
}
function Gm(e, t) {
  return et(an(_e(e, na, [], 1), te(t)));
}
function Km(e) {
  const t = _e(e, Ts);
  return fe(Gt({
    ...ge,
    ...t
  }));
}
function Ct(e, t, r, n = [], o = []) {
  return _e(t, [...e.fields(r), ...o].sort(), n);
}
function _e(e, t, r, n = !r) {
  const o = {};
  let i, a = 0;
  for (const s of t) {
    if (s === i)
      throw new RangeError(zy(s));
    if (s === "constructor" || s === "__proto__")
      throw new RangeError($y(s));
    let c = e[s];
    if (c !== void 0)
      a = 1, qc[s] && (c = qc[s](c, s)), o[s] = c;
    else if (r) {
      if (r.includes(s))
        throw new TypeError(vs(s));
      o[s] = cd[s];
    }
    i = s;
  }
  if (n && !a)
    throw new TypeError(Vf(t));
  return o;
}
function an(e, t) {
  return jr(zs({
    ...cd,
    ...e
  }), t);
}
function Qm(e, t, r, n, o) {
  const { calendar: i, timeZone: a } = r, s = e(i), c = t(a), u = [...s.fields(dt), ...od].sort(), f = ((N) => {
    const j = Fe(N, H), E = tn(j.offsetNanoseconds), R = Eo(N.calendar), [M, _, D] = R.u(j), [Z, U] = R.m(M, _), G = nn(Z, U);
    return {
      ...bb(j),
      year: M,
      monthCode: G,
      day: D,
      offset: E
    };
  })(r), d = _e(n, u), p = s.oe(f, d), h = {
    ...f,
    ...d
  }, [y, m, b] = no(o, 2);
  return qe(Nr(c, {
    ...s.ee(p, ao(y)),
    ...jr(zs(h), y)
  }, Kt(h.offset), m, b), a, i);
}
function Jm(e, t, r, n) {
  const o = e(t.calendar), i = [...o.fields(dt), ...ft].sort(), a = {
    ...$f(s = t),
    hour: s.isoHour,
    minute: s.isoMinute,
    second: s.isoSecond,
    millisecond: s.isoMillisecond,
    microsecond: s.isoMicrosecond,
    nanosecond: s.isoNanosecond
  };
  var s;
  const c = _e(r, i), u = te(n), f = o.oe(a, c), d = {
    ...a,
    ...c
  };
  return $e(ke({
    ...o.ee(f, ao(u)),
    ...jr(zs(d), u)
  }));
}
function Xm(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(dt).sort(), a = $f(t), s = _e(r, i), c = o.oe(a, s);
  return o.ee(c, n);
}
function ey(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(Ps).sort(), a = ((u) => {
    const f = Eo(u.calendar), [d, p] = f.u(u), [h, y] = f.m(d, p);
    return {
      year: d,
      monthCode: nn(h, y)
    };
  })(t), s = _e(r, i), c = o.oe(a, s);
  return o.ne(c, n);
}
function ty(e, t, r, n) {
  const o = e(t.calendar), i = o.fields(dt).sort(), a = ((u) => {
    const f = Eo(u.calendar), [d, p, h] = f.u(u), [y, m] = f.m(d, p);
    return {
      monthCode: nn(y, m),
      day: h
    };
  })(t), s = _e(r, i), c = o.oe(a, s);
  return o.te(c, n);
}
function ry(e, t, r) {
  return et(((n, o, i) => an({
    ...Ue(na, n),
    ..._e(o, na)
  }, te(i)))(e, t, r));
}
function ny(e, t) {
  return fe((r = e, n = t, Gt({
    ...r,
    ..._e(n, Ts)
  })));
  var r, n;
}
function oy(e, t) {
  const r = Ct(e, t, sd);
  return e.te(r);
}
function iy(e, t, r) {
  const n = Ct(e, t, ad);
  return e.ne(n, r);
}
function qf(e, t, r, n, o) {
  t = Ue(r = e.fields(r), t), n = _e(n, o = e.fields(o), []);
  let i = e.oe(t, n);
  return i = _e(i, [...r, ...o].sort(), []), e.ee(i);
}
function ay(e, t) {
  const r = te(t), n = gs(this, e), o = Yn(this, e, n, r), i = Xi(this, e, o, n, r);
  return ut(Le(this.U(n, o, i)), this.id || Q);
}
function sy(e, t) {
  const r = te(t), n = gs(this, e), o = Yn(this, e, n, r);
  return Wr(Ca(this.U(n, o, 1)), this.id || Q);
}
function cy(e, t) {
  const r = te(t);
  let n, o, i, a = e.eraYear !== void 0 || e.year !== void 0 ? gs(this, e) : void 0;
  const s = !this.id;
  if (a === void 0 && s && (a = it), a !== void 0) {
    const d = Yn(this, e, a, r);
    n = Xi(this, e, d, a, r);
    const p = this.F(a);
    o = ms(d, p), i = d === p;
  } else {
    if (e.monthCode === void 0)
      throw new TypeError(Kf);
    if ([o, i] = hs(e.monthCode), this.id && this.id !== Ar && this.id !== At)
      if (this.id && Wt(this.id) === "coptic" && r === 0) {
        const d = i || o !== 13 ? 30 : 6;
        n = e.day, n = Zr(n, 1, d);
      } else if (this.id && Wt(this.id) === "chinese" && r === 0) {
        const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
        n = e.day, n = Zr(n, 1, d);
      } else
        n = e.day;
    else
      n = Xi(this, e, Yn(this, e, it, r), it, r);
  }
  const c = this.R(o, i, n);
  if (!c)
    throw new RangeError("Cannot guess year");
  const [u, f] = c;
  return Ln(Le(this.U(u, f, n)), this.id || Q);
}
function uy(e) {
  return ys(this) && e.includes("year") ? [...e, ...ws] : e;
}
function ly(e, t) {
  const r = Object.assign(/* @__PURE__ */ Object.create(null), e);
  return Lo(r, t, Ns), ys(this) && (Lo(r, t, dg), this.id === At && Lo(r, t, pg, ws)), r;
}
function gs(e, t) {
  const r = ys(e), n = ld[e.id || ""] || {};
  let { era: o, eraYear: i, year: a } = t;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Hy);
    if (!r)
      throw new RangeError(Wy);
    const s = r[n[o] || o];
    if (s === void 0)
      throw new RangeError(Gy(o));
    const c = kf(i, s);
    if (a !== void 0 && a !== c)
      throw new RangeError(Vy);
    a = c;
  } else if (a === void 0)
    throw new TypeError(Ky(r));
  return a;
}
function Yn(e, t, r, n) {
  let { month: o, monthCode: i } = t;
  if (i !== void 0) {
    const a = ((s, c, u, f) => {
      const d = s.F(u), [p, h] = hs(c);
      let y = vo(p, h, d);
      if (h) {
        const m = If(s);
        if (m === void 0)
          throw new RangeError(_r);
        if (m > 0) {
          if (y > m)
            throw new RangeError(_r);
          if (d === void 0) {
            if (f === 1)
              throw new RangeError(_r);
            y--;
          }
        } else {
          if (y !== -m)
            throw new RangeError(_r);
          if (d === void 0 && f === 1)
            throw new RangeError(_r);
        }
      }
      return y;
    })(e, i, r, n);
    if (o !== void 0 && o !== a)
      throw new RangeError(Jy);
    o = a, n = 1;
  } else if (o === void 0)
    throw new TypeError(Kf);
  return at("month", o, 1, e.O(r), n);
}
function Xi(e, t, r, n, o) {
  return Oe(t, "day", 1, e.B(n, r), o);
}
function Lo(e, t, r, n) {
  let o = 0;
  const i = [];
  for (const a of r)
    t[a] !== void 0 ? o = 1 : i.push(a);
  if (Object.assign(e, t), o)
    for (const a of n || i)
      delete e[a];
}
function $f(e) {
  const t = Eo(e.calendar), [r, n, o] = t.u(e), [i, a] = t.m(r, n);
  return {
    year: r,
    monthCode: nn(i, a),
    day: o
  };
}
function fy(e) {
  return ct(Je(ka(Ra(e))));
}
function dy(e, t, r, n, o = Q) {
  return qe(Je(ka(Ra(r))), t(n), e(o));
}
function py(e, t, r, n, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0, f = Q) {
  return $e(ke(ro(st(Se, vr(Po, [t, r, n, o, i, a, s, c, u])))), e(f));
}
function hy(e, t, r, n, o = Q) {
  return ut(Le(Ht(st(Se, {
    isoYear: t,
    isoMonth: r,
    isoDay: n
  }))), e(o));
}
function my(e, t, r, n = Q, o = 1) {
  const i = Se(t), a = Se(r), s = e(n);
  return Wr(Ca(Ht({
    isoYear: i,
    isoMonth: a,
    isoDay: Se(o)
  })), s);
}
function yy(e, t, r, n = Q, o = it) {
  const i = Se(t), a = Se(r), s = e(n);
  return Ln(Le(Ht({
    isoYear: Se(o),
    isoMonth: i,
    isoDay: a
  })), s);
}
function gy(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0) {
  return et(jr(st(Se, vr(ze, [e, t, r, n, o, i])), 1));
}
function by(e = 0, t = 0, r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, c = 0, u = 0) {
  return fe(Gt(st(Aa, vr(re, [e, t, r, n, o, i, a, s, c, u]))));
}
function vy(e, t, r = Q) {
  return qe(e.epochNanoseconds, t, r);
}
function xy(e) {
  return ct(e.epochNanoseconds);
}
function zf(e, t) {
  return $e(Fe(t, e));
}
function Yf(e, t) {
  return ut(Fe(t, e));
}
function Zf(e, t) {
  return et(Fe(t, e));
}
function wy(e, t, r, n) {
  const o = ((i, a, s, c) => {
    const u = ((f) => gd(Xe(f)))(c);
    return rn(i(a), s, u);
  })(e, r, t, n);
  return qe(Je(o), r, t.calendar);
}
function jy(e, t, r, n, o) {
  const i = e(o.timeZone), a = o.plainTime, s = a !== void 0 ? t(a) : void 0, c = r(i);
  let u;
  return u = s ? rn(c, {
    ...n,
    ...s
  }) : Rt(c, {
    ...n,
    ...Ie
  }), qe(u, i, n.calendar);
}
function Sy(e, t = Ie) {
  return $e(ke({
    ...e,
    ...t
  }));
}
function Ny(e, t, r) {
  return iy(e(t.calendar), r);
}
function Py(e, t, r) {
  return oy(e(t.calendar), r);
}
function Ty(e, t, r, n) {
  return ((o, i, a) => qf(o, i, ad, Xr(a), cn))(e(t.calendar), r, n);
}
function Ey(e, t, r, n) {
  return ((o, i, a) => qf(o, i, sd, Xr(a), js))(e(t.calendar), r, n);
}
function Oy(e) {
  return ct(Je(Fn(Aa(e), lt)));
}
function Ry(e) {
  return ct(Je(ka(Ra(e))));
}
function Qt(e, t, r) {
  const n = new Set(r);
  return (o, i) => {
    const a = r && bc(o, r);
    if (!bc(o = ((s, c) => {
      const u = {};
      for (const f in c)
        s.has(f) || (u[f] = c[f]);
      return u;
    })(n, o), e)) {
      if (i && a)
        throw new TypeError("Invalid formatting options");
      o = {
        ...t,
        ...o
      };
    }
    return r && (o.timeZone = Jt, ["full", "long"].includes(o.ie) && (o.ie = "medium")), o;
  };
}
function Mt(e, t = Wf, r = 0) {
  const [n, , , o] = e;
  return (i, a = Fb, ...s) => {
    const c = t(o && o(...s), i, a, n, r), u = c.resolvedOptions();
    return [c, ...Dy(e, u, s)];
  };
}
function Wf(e, t, r, n, o) {
  if (r = n(r, o), e) {
    if (r.timeZone !== void 0)
      throw new TypeError(lg);
    r.timeZone = e;
  }
  return new Nt(t, r);
}
function Ay() {
  return new Nt(void 0, {
    calendar: Q
  }).resolvedOptions().calendar === Q;
}
function Dy(e, t, r) {
  const [, n, o] = e;
  return r.map(((i) => (i.calendar && ((a, s, c) => {
    if ((c || a !== Q) && a !== s)
      throw new RangeError(Jf);
  })(i.calendar, t.calendar, o), n(i, t))));
}
function ky(e, t, r) {
  const n = t.timeZone, o = e(n), i = {
    ...Fe(t, o),
    ...r || Ie
  };
  let a;
  return a = r ? Nr(o, i, i.offsetNanoseconds, 2) : Rt(o, i), qe(a, n, t.calendar);
}
function Iy(e, t = Ie) {
  return $e(ke({
    ...e,
    ...t
  }));
}
function bs(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function Cy(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function Uo(e) {
  const t = ea();
  return wr(t, e.N(t));
}
function ea() {
  return Fn(Date.now(), lt);
}
function Mr() {
  return new Nt().resolvedOptions().timeZone;
}
const My = (e, t) => `Non-integer ${e}: ${t}`, _y = (e, t) => `Non-positive ${e}: ${t}`, Fy = (e, t) => `Non-finite ${e}: ${t}`, By = (e) => `Cannot convert bigint to ${e}`, Ly = (e) => `Invalid bigint: ${e}`, Uy = "Cannot convert Symbol to string", qy = "Invalid object", Hf = (e, t, r, n, o) => o ? Hf(e, o[t], o[r], o[n]) : _t(e, t) + `; must be between ${r}-${n}`, _t = (e, t) => `Invalid ${e}: ${t}`, vs = (e) => `Missing ${e}`, $y = (e) => `Invalid field ${e}`, zy = (e) => `Duplicate field ${e}`, Vf = (e) => "No valid fields: " + e.join(), Yy = "Invalid bag", Gf = (e, t, r) => _t(e, t) + "; must be " + Object.keys(r).join(), Zy = "Cannot use valueOf", ta = "Invalid calling context", Wy = "Forbidden era/eraYear", Hy = "Mismatching era/eraYear", Vy = "Mismatching year/eraYear", Gy = (e) => `Invalid era: ${e}`, Ky = (e) => "Missing year" + (e ? "/era/eraYear" : ""), Qy = (e) => `Invalid monthCode: ${e}`, Jy = "Mismatching month/monthCode", Kf = "Missing month/monthCode", _r = "Invalid leap month", Or = "Invalid protocol results", Qf = (e) => _t("Calendar", e), Jf = "Mismatching Calendars", Xf = (e) => _t("TimeZone", e), ed = "Mismatching TimeZones", Xy = "Forbidden ICU TimeZone", eg = "Out-of-bounds offset", tg = "Out-of-bounds TimeZone gap", rg = "Invalid TimeZone offset", ng = "Ambiguous offset", Ft = "Out-of-bounds date", og = "Out-of-bounds duration", ig = "Cannot mix duration signs", jo = "Missing relativeTo", ag = "Cannot use large units", sg = "Required smallestUnit or largestUnit", cg = "smallestUnit > largestUnit", Re = (e) => `Cannot parse: ${e}`, ot = (e) => `Invalid substring: ${e}`, ug = (e) => `Cannot format ${e}`, qo = "Mismatching types for formatting", lg = "Cannot specify TimeZone", td = /* @__PURE__ */ J(Qn, ((e, t) => t)), Rr = /* @__PURE__ */ J(Qn, ((e, t, r) => r)), Be = /* @__PURE__ */ J(Mn, 2), ra = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, xs = /* @__PURE__ */ Object.keys(ra), De = 864e5, rd = 1e3, sn = 1e3, lt = 1e6, Ve = 1e9, So = 6e10, No = 36e11, ae = 864e11, Qe = [1, sn, lt, Ve, So, No, ae], ft = /* @__PURE__ */ xs.slice(0, 6), na = /* @__PURE__ */ Jr(ft), fg = ["offset"], nd = ["timeZone"], od = /* @__PURE__ */ ft.concat(fg), id = /* @__PURE__ */ od.concat(nd), ws = ["era", "eraYear"], dg = /* @__PURE__ */ ws.concat(["year"]), js = ["year"], Ss = ["monthCode"], Ns = /* @__PURE__ */ ["month"].concat(Ss), cn = ["day"], Ps = /* @__PURE__ */ Ns.concat(js), ad = /* @__PURE__ */ Ss.concat(js), dt = /* @__PURE__ */ cn.concat(Ps), pg = /* @__PURE__ */ cn.concat(Ns), sd = /* @__PURE__ */ cn.concat(Ss), cd = /* @__PURE__ */ Rr(ft, 0), Q = "iso8601", Ar = "gregory", At = "japanese", ud = {
  [Ar]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [At]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, ld = {
  [Ar]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [At]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, hg = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, be = /* @__PURE__ */ J(Ea, "string"), mg = /* @__PURE__ */ J(Ea, "boolean"), yg = /* @__PURE__ */ J(Ea, "number"), re = /* @__PURE__ */ xs.map(((e) => e + "s")), Ts = /* @__PURE__ */ Jr(re), gg = /* @__PURE__ */ re.slice(0, 6), fd = /* @__PURE__ */ re.slice(6), bg = /* @__PURE__ */ fd.slice(1), vg = /* @__PURE__ */ td(re), ge = /* @__PURE__ */ Rr(re, 0), Es = /* @__PURE__ */ Rr(gg, 0), Os = /* @__PURE__ */ J(Il, re), ze = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Rs = ["isoDay", "isoMonth", "isoYear"], Po = /* @__PURE__ */ ze.concat(Rs), As = /* @__PURE__ */ Jr(Rs), dd = /* @__PURE__ */ Jr(ze), xg = /* @__PURE__ */ Jr(Po), Ie = /* @__PURE__ */ Rr(dd, 0), wg = /* @__PURE__ */ J(Il, Po), Ds = 1e8, ks = Ds * De, jg = [Ds, 0], Sg = [-Ds, 0], Kr = 275760, Qr = -271821, Nt = Intl.DateTimeFormat, Ng = 1970, it = 1972, bt = 12, Pg = /* @__PURE__ */ xr(1868, 9, 8), Tg = /* @__PURE__ */ Ce(Ih, WeakMap), Zn = "smallestUnit", oa = "unit", Eg = "roundingMode", qr = "roundingIncrement", $o = "fractionalSecondDigits", pd = "relativeTo", zo = "direction", hd = {
  constrain: 0,
  reject: 1
}, Og = /* @__PURE__ */ Object.keys(hd), Rg = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, Ag = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, Dg = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, kg = {
  auto: 0,
  never: 1,
  critical: 2
}, Ig = {
  auto: 0,
  never: 1
}, Cg = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, Mg = {
  previous: -1,
  next: 1
}, un = /* @__PURE__ */ J(za, Zn), md = /* @__PURE__ */ J(za, "largestUnit"), _g = /* @__PURE__ */ J(za, oa), yd = /* @__PURE__ */ J(Dt, "overflow", hd), gd = /* @__PURE__ */ J(Dt, "disambiguation", Rg), Fg = /* @__PURE__ */ J(Dt, "offset", Ag), Is = /* @__PURE__ */ J(Dt, "calendarName", Dg), Bg = /* @__PURE__ */ J(Dt, "timeZoneName", kg), Lg = /* @__PURE__ */ J(Dt, "offset", Ig), ln = /* @__PURE__ */ J(Dt, Eg, Cg), Cs = "PlainYearMonth", Ms = "PlainMonthDay", fn = "PlainDate", Dr = "PlainDateTime", _s = "PlainTime", Bt = "ZonedDateTime", Fs = "Instant", Bs = "Duration", Ug = [Math.floor, (e) => Sn(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => Sn(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => Sn(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => Sn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], Jt = "UTC", Rn = 5184e3, qg = /* @__PURE__ */ Bn(1847), $g = /* @__PURE__ */ Bn((() => {
  const e = /* @__PURE__ */ new Date();
  return (e.getTime() === 0 ? 2040 : e.getUTCFullYear()) + 10;
})()), zg = /0+$/, Fe = /* @__PURE__ */ Ce(Qh, WeakMap), Uc = 2 ** 32 - 1, H = /* @__PURE__ */ Ce(((e) => {
  const t = ls(e);
  return typeof t == "object" ? new Zg(t) : new Yg(t || 0);
}));
class Yg {
  constructor(t) {
    this.j = t;
  }
  N() {
    return this.j;
  }
  v(t) {
    return ((r) => {
      const n = me({
        ...r,
        ...Ie
      });
      if (!n || Math.abs(n[0]) > 1e8)
        throw new RangeError(Ft);
    })(t), [Ma(t, this.j)];
  }
  l() {
  }
}
class Zg {
  constructor(t) {
    this.ae = ((r) => {
      function n(u) {
        const f = Zr(u, s, c), [d, p] = Dc(f), h = i(d), y = i(p);
        return h === y ? h : o(a(d, p), h, y, u);
      }
      function o(u, f, d, p) {
        let h, y;
        for (; (p === void 0 || (h = p < u[0] ? f : p >= u[1] ? d : void 0) === void 0) && (y = u[1] - u[0]); ) {
          const m = u[0] + Math.floor(y / 2);
          r(m) === d ? u[1] = m : u[0] = m + 1;
        }
        return h;
      }
      const i = Ce(r), a = Ce(im);
      let s = qg, c = $g;
      return {
        se(u) {
          const f = n(u - 86400), d = n(u + 86400), p = u - f, h = u - d;
          if (f === d)
            return [p];
          const y = n(p);
          return y === n(h) ? [u - y] : f > d ? [p, h] : [];
        },
        ue: n,
        l(u, f) {
          const d = Zr(u, s, c);
          let [p, h] = Dc(d);
          const y = Rn * f, m = f < 0 ? () => h > s || (s = d, 0) : () => p < c || (c = d, 0);
          for (; m(); ) {
            const b = i(p), N = i(h);
            if (b !== N) {
              const j = a(p, h);
              o(j, b, N);
              const E = j[0];
              if ((St(E, u) || 1) === f)
                return E;
            }
            p += y, h += y;
          }
        }
      };
    })(/* @__PURE__ */ ((r) => (n) => {
      const o = _a(r, n * rd);
      return Bn(_f(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - n;
    })(t));
  }
  N(t) {
    return this.ae.ue(Oh(t)) * Ve;
  }
  v(t) {
    const [r, n] = [Bn((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * lt + o.isoMicrosecond * sn + o.isoNanosecond];
    var o;
    return this.ae.se(r).map(((i) => Je(Yt(Fn(i, Ve), n))));
  }
  l(t, r) {
    const [n, o] = ql(t), i = this.ae.l(n + (r > 0 || o ? 1 : 0), r);
    if (i !== void 0)
      return Fn(i, Ve);
  }
}
const Ls = "([+-])", An = "(?:[.,](\\d{1,9}))?", bd = `(?:(?:${Ls}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Us = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + An + ")?)?", qs = Ls + Us, Wg = bd + "-?(\\d{2})(?:[T ]" + Us + "(Z|" + qs + ")?)?", vd = "\\[(!?)([^\\]]*)\\]", To = `((?:${vd}){0,9})`, Hg = /* @__PURE__ */ Tr(bd + To), Vg = /* @__PURE__ */ Tr("(?:--)?(\\d{2})-?(\\d{2})" + To), Gg = /* @__PURE__ */ Tr(Wg + To), Kg = /* @__PURE__ */ Tr("T?" + Us + "(?:" + qs + ")?" + To), Qg = /* @__PURE__ */ Tr(qs), Jg = /* @__PURE__ */ new RegExp(vd, "g"), Xg = /* @__PURE__ */ Tr(`${Ls}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${An}H)?(?:(\\d+)${An}M)?(?:(\\d+)${An}S)?)?`), eb = /* @__PURE__ */ Ce(((e) => new Nt("en", {
  calendar: Q,
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: 0
}))), tb = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, rb = /[^\w\/:+-]+/, nb = /^M(\d{2})(L?)$/, ob = /* @__PURE__ */ Ce(_m), $s = /* @__PURE__ */ Ce(((e) => new Nt("en", {
  calendar: e,
  timeZone: Jt,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour12: 0
}))), xd = {
  P: Jh,
  h: Om,
  ee: ay,
  ne: sy,
  te: cy,
  fields: uy,
  oe: ly,
  inLeapYear: km,
  monthsInYear: Im,
  daysInMonth: Cm,
  daysInYear: Mm,
  dayOfYear: ps,
  era(e) {
    return this.$(e)[0];
  },
  eraYear(e) {
    return this.$(e)[1];
  },
  monthCode(e) {
    const [t, r] = this.u(e), [n, o] = this.m(t, r);
    return nn(n, o);
  },
  dayOfWeek: Hl,
  daysInWeek: kh
}, ib = {
  u: Fa,
  $: Vl,
  m: zl
}, ab = {
  dayOfYear: ps,
  u: Fa,
  M: xr
}, sb = /* @__PURE__ */ Object.assign({}, ab, {
  weekOfYear: Af,
  yearOfWeek: Df,
  I(e) {
    function t(h) {
      return (7 - h < n ? 7 : 0) - h;
    }
    function r(h) {
      const y = Wl(p + h), m = h || 1, b = t(Ur(c + y * m, 7));
      return f = (y + (b - u) * m) / 7;
    }
    const n = this.id ? 1 : 4, o = Hl(e), i = this.dayOfYear(e), a = Ur(o - 1, 7), s = i - 1, c = Ur(a - s, 7), u = t(c);
    let f, d = Math.floor((s - u) / 7) + 1, p = e.isoYear;
    return d ? d > r(0) && (d = 1, p++) : (d = r(-1), p--), [d, p, f];
  }
}), cb = /* @__PURE__ */ Object.assign({}, xd, sb, {
  u: Fa,
  $: Vl,
  m: zl,
  R: Ah,
  L: Ba,
  F: Sh,
  O: Yl,
  q: Rm,
  B: Zl,
  G: Wl,
  U: Dh,
  M: xr,
  p: em,
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: Rh
}), ub = {
  u: xo,
  $: Lf,
  m: Ff
}, lb = {
  dayOfYear: ps,
  u: xo,
  M: Gr
}, fb = {
  I() {
    return [];
  }
}, db = /* @__PURE__ */ Object.assign({}, lb, fb, {
  weekOfYear: Af,
  yearOfWeek: Df
}), pb = /* @__PURE__ */ Object.assign({}, xd, db, {
  u: xo,
  $: Lf,
  m: Ff,
  R: $m,
  L: qm,
  F: $n,
  O: zn,
  q: Am,
  B: Bf,
  G: On,
  U: Um,
  M: Gr,
  p: tm,
  year(e) {
    return this._(e).year;
  },
  month(e) {
    const { year: t, V: r } = this._(e), { X: n } = this.J(t);
    return n[r] + 1;
  },
  day: Lm
}), Eo = /* @__PURE__ */ Uf(ib, ub), Y = /* @__PURE__ */ Uf(cb, pb), hb = {
  era: _n,
  eraYear: Se,
  year: Se,
  month: xc,
  monthCode(e) {
    const t = _n(e);
    return hs(t), t;
  },
  day: xc
}, mb = /* @__PURE__ */ Rr(ft, Se), yb = /* @__PURE__ */ Rr(re, Aa), gb = {
  offset(e) {
    const t = _n(e);
    return Kt(t), t;
  }
}, qc = /* @__PURE__ */ Object.assign({}, hb, mb, yb, gb), zs = /* @__PURE__ */ J(Dl, ft, ze), bb = /* @__PURE__ */ J(Dl, ze, ft), Pt = "numeric", dn = ["timeZoneName"], wd = {
  month: Pt,
  day: Pt
}, Ys = {
  year: Pt,
  month: Pt
}, Zs = /* @__PURE__ */ Object.assign({}, Ys, {
  day: Pt
}), Ws = {
  hour: Pt,
  minute: Pt,
  second: Pt
}, Hs = /* @__PURE__ */ Object.assign({}, Zs, Ws), vb = /* @__PURE__ */ Object.assign({}, Hs, {
  timeZoneName: "short"
}), xb = /* @__PURE__ */ Object.keys(Ys), wb = /* @__PURE__ */ Object.keys(wd), jb = /* @__PURE__ */ Object.keys(Zs), Sb = /* @__PURE__ */ Object.keys(Ws), Vs = ["dateStyle"], Nb = /* @__PURE__ */ xb.concat(Vs), Pb = /* @__PURE__ */ wb.concat(Vs), Gs = /* @__PURE__ */ jb.concat(Vs, ["weekday"]), pn = /* @__PURE__ */ Sb.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Ks = /* @__PURE__ */ Gs.concat(pn), Tb = /* @__PURE__ */ dn.concat(pn), Eb = /* @__PURE__ */ dn.concat(Gs), Ob = /* @__PURE__ */ dn.concat(["day", "weekday"], pn), Rb = /* @__PURE__ */ dn.concat(["year", "weekday"], pn), Ab = /* @__PURE__ */ Qt(Ks, Hs), Db = /* @__PURE__ */ Qt(Ks, vb), kb = /* @__PURE__ */ Qt(Ks, Hs, dn), Ib = /* @__PURE__ */ Qt(Gs, Zs, Tb), Cb = /* @__PURE__ */ Qt(pn, Ws, Eb), Mb = /* @__PURE__ */ Qt(Nb, Ys, Ob), _b = /* @__PURE__ */ Qt(Pb, wd, Rb), Fb = {}, jd = /* @__PURE__ */ Ay(), Sd = [Ab, Ya], Bb = [Db, Ya, 0, (e, t) => {
  const r = e.timeZone;
  if (t && t.timeZone !== r)
    throw new RangeError(ed);
  return r;
}], Nd = [kb, Ne], Pd = [Ib, Ne], Td = [Cb, (e) => Et(e) / lt], Ed = [Mb, Ne, jd], Od = [_b, Ne, jd];
function Lt(e, t, r, n, o, i) {
  function a(...u) {
    if (!(this instanceof a))
      throw new TypeError(ta);
    {
      const f = t(...u);
      Yc(this, f), ia(this, f, i);
    }
  }
  function s(u, f) {
    return Object.defineProperties((function(...d) {
      return u.call(this, c(this), ...d);
    }), Yr(f));
  }
  function c(u) {
    const f = Ee(u);
    if (!f || f.branding !== e)
      throw new TypeError(ta);
    return f;
  }
  return Object.defineProperties(a.prototype, {
    ...jh(st(s, r)),
    ...dr(st(s, n)),
    ...Na("Temporal." + e)
  }), Object.defineProperties(a, {
    ...dr(o),
    ...Yr(e)
  }), [a, (u) => {
    const f = Object.create(a.prototype);
    return Yc(f, u), ia(f, u, i), f;
  }, c];
}
function kr(e) {
  if (Ee(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(Yy);
  return e;
}
function ia(e, t, r) {
  ia.name === "dbg" && Object.defineProperty(e, "o", {
    value: r(t),
    writable: 0,
    enumerable: 0,
    configurable: 0
  });
}
function hn(e) {
  return Rd(e) || Q;
}
function Rd(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return Oo(t);
}
function Oo(e) {
  if (Pe(e)) {
    const { calendar: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Qf(e));
    return t;
  }
  return ((t) => wo(hm(be(t))))(e);
}
function Qs(e) {
  const t = {};
  for (const r in e)
    t[r] = (n) => {
      const { calendar: o } = n;
      return Y(o)[r](n);
    };
  return t;
}
function Ut() {
  throw new TypeError(Zy);
}
function Ae(e) {
  if (Pe(e)) {
    const { timeZone: t } = Ee(e) || {};
    if (!t)
      throw new TypeError(Xf(e));
    return t;
  }
  return ((t) => us(mm(be(t))))(e);
}
function ue(e) {
  if (Pe(e)) {
    const t = Ee(e);
    return t && t.branding === Bs ? t : Km(e);
  }
  return pm(e);
}
function Fr(e) {
  if (e !== void 0) {
    if (Pe(e)) {
      const t = Ee(e) || {};
      switch (t.branding) {
        case Bt:
        case fn:
          return t;
        case Dr:
          return ut(t);
      }
      const r = hn(e);
      return {
        ...zm(Ae, H, Y(r), e),
        calendar: r
      };
    }
    return sm(e);
  }
}
function mt(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case _s:
        return te(t), n;
      case Dr:
        return te(t), et(n);
      case Bt:
        return te(t), Zf(H, n);
    }
    return Gm(e, t);
  }
  const r = dm(e);
  return te(t), r;
}
function Js(e) {
  return e === void 0 ? void 0 : mt(e);
}
function tr(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case Dr:
        return te(t), n;
      case fn:
        return te(t), $e({
          ...n,
          ...Ie
        });
      case Bt:
        return te(t), zf(H, n);
    }
    return Zm(Y(hn(e)), e, t);
  }
  const r = um(e);
  return te(t), r;
}
function $c(e, t) {
  if (Pe(e)) {
    const n = Ee(e);
    if (n && n.branding === Ms)
      return te(t), n;
    const o = Rd(e);
    return Vm(Y(o || Q), !o, e, t);
  }
  const r = fm(Y, e);
  return te(t), r;
}
function rr(e, t) {
  if (Pe(e)) {
    const n = Ee(e);
    return n && n.branding === Cs ? (te(t), n) : Hm(Y(hn(e)), e, t);
  }
  const r = lm(Y, e);
  return te(t), r;
}
function nr(e, t) {
  if (Pe(e)) {
    const n = Ee(e) || {};
    switch (n.branding) {
      case fn:
        return te(t), n;
      case Dr:
        return te(t), ut(n);
      case Bt:
        return te(t), Yf(H, n);
    }
    return Wm(Y(hn(e)), e, t);
  }
  const r = rs(e);
  return te(t), r;
}
function or(e, t) {
  if (Pe(e)) {
    const r = Ee(e);
    if (r && r.branding === Bt)
      return no(t), r;
    const n = hn(e);
    return Ym(Ae, H, Y(n), n, e, t);
  }
  return cm(e, t);
}
function zc(e) {
  return st(((t) => (r) => t(aa(r))), e);
}
function aa(e) {
  return Fe(e, H);
}
function ir(e) {
  if (Pe(e)) {
    const t = Ee(e);
    if (t)
      switch (t.branding) {
        case Fs:
          return t;
        case Bt:
          return ct(t.epochNanoseconds);
      }
  }
  return am(e);
}
function Lb() {
  function e(i, a) {
    return new t(i, a);
  }
  function t(i, a = /* @__PURE__ */ Object.create(null)) {
    Hn.set(this, ((s, c) => {
      const u = new Nt(s, c), f = u.resolvedOptions(), d = f.locale, p = Ue(Object.keys(c), f), h = Ce($b), y = (m, ...b) => {
        if (m) {
          if (b.length !== 2)
            throw new TypeError(qo);
          for (const R of b)
            if (R === void 0)
              throw new TypeError(qo);
        }
        m || b[0] !== void 0 || (b = []);
        const N = b.map(((R) => Ee(R) || Number(R)));
        let j, E = 0;
        for (const R of N) {
          const M = typeof R == "object" ? R.branding : void 0;
          if (E++ && M !== j)
            throw new TypeError(qo);
          j = M;
        }
        return j ? h(j)(d, p, ...N) : [u, ...N];
      };
      return y.i = u, y;
    })(i, a));
  }
  const r = Nt.prototype, n = Object.getOwnPropertyDescriptors(r), o = Object.getOwnPropertyDescriptors(Nt);
  for (const i in n) {
    const a = n[i], s = i.startsWith("format") && Ub(i);
    typeof a.value == "function" ? a.value = i === "constructor" ? e : s || qb(i) : s && (a.get = function() {
      if (!Hn.has(this))
        throw new TypeError(ta);
      return (...c) => s.apply(this, c);
    }, Object.defineProperties(a.get, Yr(`get ${i}`)));
  }
  return o.prototype.value = t.prototype = Object.create({}, n), Object.defineProperties(e, o), e;
}
function Ub(e) {
  return Object.defineProperties((function(...t) {
    const r = Hn.get(this), [n, ...o] = r(e.includes("Range"), ...t);
    return n[e](...o);
  }), Yr(e));
}
function qb(e) {
  return Object.defineProperties((function(...t) {
    return Hn.get(this).i[e](...t);
  }), Yr(e));
}
function $b(e) {
  const t = Vb[e];
  if (!t)
    throw new TypeError(ug(e));
  return Mt(t, Ce(Wf), 1);
}
const Wn = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ Wn.get.bind(Wn), Yc = /* @__PURE__ */ Wn.set.bind(Wn), Ad = {
  era: Nh,
  eraYear: Ml,
  year: Ta,
  month: rt,
  daysInMonth: rt,
  daysInYear: rt,
  inLeapYear: mg,
  monthsInYear: rt
}, Xs = {
  monthCode: be
}, Dd = {
  day: rt
}, zb = {
  dayOfWeek: rt,
  dayOfYear: rt,
  weekOfYear: Ph,
  yearOfWeek: Ml,
  daysInWeek: rt
}, ec = /* @__PURE__ */ Qs(/* @__PURE__ */ Object.assign({}, Ad, Xs, Dd, zb)), Yb = /* @__PURE__ */ Qs({
  ...Ad,
  ...Xs
}), Zb = /* @__PURE__ */ Qs({
  ...Xs,
  ...Dd
}), mn = {
  calendarId: (e) => e.calendar
}, Wb = /* @__PURE__ */ Qn(((e) => (t) => t[e]), re.concat("sign")), tc = /* @__PURE__ */ Qn(((e, t) => (r) => r[ze[t]]), ft), kd = {
  epochMilliseconds: Ya,
  epochNanoseconds: Mh
}, [Hb, se] = Lt(Bs, by, {
  ...Wb,
  blank: om
}, {
  with: (e, t) => se(ny(e, t)),
  negated: (e) => se(ts(e)),
  abs: (e) => se(nm(e)),
  add: (e, t, r) => se(Ac(Fr, Y, H, 0, e, ue(t), r)),
  subtract: (e, t, r) => se(Ac(Fr, Y, H, 1, e, ue(t), r)),
  round: (e, t) => se(rm(Fr, Y, H, e, t)),
  total: (e, t) => _h(Fr, Y, H, e, t),
  toLocaleString(e, t, r) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, r).format(this) : Nn(e);
  },
  toString: Nn,
  toJSON: (e) => Nn(e),
  valueOf: Ut
}, {
  from: (e) => se(ue(e)),
  compare: (e, t, r) => gm(Fr, Y, H, ue(e), ue(t), r)
}, Nn), Vb = {
  Instant: Sd,
  PlainDateTime: Nd,
  PlainDate: Pd,
  PlainTime: Td,
  PlainYearMonth: Ed,
  PlainMonthDay: Od
}, Gb = /* @__PURE__ */ Mt(Sd), Kb = /* @__PURE__ */ Mt(Bb), Qb = /* @__PURE__ */ Mt(Nd), Jb = /* @__PURE__ */ Mt(Pd), Xb = /* @__PURE__ */ Mt(Td), ev = /* @__PURE__ */ Mt(Ed), tv = /* @__PURE__ */ Mt(Od), [rv, vt] = Lt(_s, gy, tc, {
  with(e, t, r) {
    return vt(ry(this, kr(t), r));
  },
  add: (e, t) => vt(Rc(0, e, ue(t))),
  subtract: (e, t) => vt(Rc(1, e, ue(t))),
  until: (e, t, r) => se(Bc(0, e, mt(t), r)),
  since: (e, t, r) => se(Bc(1, e, mt(t), r)),
  round: (e, t) => vt(qh(e, t)),
  equals: (e, t) => Nm(e, mt(t)),
  toLocaleString(e, t, r) {
    const [n, o] = Xb(t, r, e);
    return n.format(o);
  },
  toString: Bo,
  toJSON: (e) => Bo(e),
  valueOf: Ut
}, {
  from: (e, t) => vt(mt(e, t)),
  compare: (e, t) => fs(mt(e), mt(t))
}, Bo), [nv, We] = Lt(Dr, J(py, on), {
  ...mn,
  ...ec,
  ...tc
}, {
  with: (e, t, r) => We(Jm(Y, e, kr(t), r)),
  withCalendar: (e, t) => We(bs(e, Oo(t))),
  withPlainTime: (e, t) => We(Iy(e, Js(t))),
  add: (e, t, r) => We(Tc(Y, 0, e, ue(t), r)),
  subtract: (e, t, r) => We(Tc(Y, 1, e, ue(t), r)),
  until: (e, t, r) => se(Mc(Y, 0, e, tr(t), r)),
  since: (e, t, r) => se(Mc(Y, 1, e, tr(t), r)),
  round: (e, t) => We(Uh(e, t)),
  equals: (e, t) => xm(e, tr(t)),
  toZonedDateTime: (e, t, r) => xe(wy(H, e, Ae(t), r)),
  toPlainDate: (e) => He(ut(e)),
  toPlainTime: (e) => vt(et(e)),
  toLocaleString(e, t, r) {
    const [n, o] = Qb(t, r, e);
    return n.format(o);
  },
  toString: Co,
  toJSON: (e) => Co(e),
  valueOf: Ut
}, {
  from: (e, t) => We(tr(e, t)),
  compare: (e, t) => Sf(tr(e), tr(t))
}, Co), [ov, sa] = Lt(Ms, J(yy, on), {
  ...mn,
  ...Zb
}, {
  with: (e, t, r) => sa(ty(Y, e, kr(t), r)),
  equals: (e, t) => Sm(e, $c(t)),
  toPlainDate(e, t) {
    return He(Ey(Y, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = tv(t, r, e);
    return n.format(o);
  },
  toString: Fo,
  toJSON: (e) => Fo(e),
  valueOf: Ut
}, {
  from: (e, t) => sa($c(e, t))
}, Fo), [iv, Lr] = Lt(Cs, J(my, on), {
  ...mn,
  ...Yb
}, {
  with: (e, t, r) => Lr(ey(Y, e, kr(t), r)),
  add: (e, t, r) => Lr(Oc(Y, 0, e, ue(t), r)),
  subtract: (e, t, r) => Lr(Oc(Y, 1, e, ue(t), r)),
  until: (e, t, r) => se(Fc(Y, 0, e, rr(t), r)),
  since: (e, t, r) => se(Fc(Y, 1, e, rr(t), r)),
  equals: (e, t) => jm(e, rr(t)),
  toPlainDate(e, t) {
    return He(Ty(Y, e, this, t));
  },
  toLocaleString(e, t, r) {
    const [n, o] = ev(t, r, e);
    return n.format(o);
  },
  toString: _o,
  toJSON: (e) => _o(e),
  valueOf: Ut
}, {
  from: (e, t) => Lr(rr(e, t)),
  compare: (e, t) => Er(rr(e), rr(t))
}, _o), [av, He] = Lt(fn, J(hy, on), {
  ...mn,
  ...ec
}, {
  with: (e, t, r) => He(Xm(Y, e, kr(t), r)),
  withCalendar: (e, t) => He(bs(e, Oo(t))),
  add: (e, t, r) => He(Ec(Y, 0, e, ue(t), r)),
  subtract: (e, t, r) => He(Ec(Y, 1, e, ue(t), r)),
  until: (e, t, r) => se(_c(Y, 0, e, nr(t), r)),
  since: (e, t, r) => se(_c(Y, 1, e, nr(t), r)),
  equals: (e, t) => wm(e, nr(t)),
  toZonedDateTime(e, t) {
    const r = Pe(t) ? t : {
      timeZone: t
    };
    return xe(jy(Ae, mt, H, e, r));
  },
  toPlainDateTime: (e, t) => We(Sy(e, Js(t))),
  toPlainYearMonth(e) {
    return Lr(Ny(Y, e, this));
  },
  toPlainMonthDay(e) {
    return sa(Py(Y, e, this));
  },
  toLocaleString(e, t, r) {
    const [n, o] = Jb(t, r, e);
    return n.format(o);
  },
  toString: Mo,
  toJSON: (e) => Mo(e),
  valueOf: Ut
}, {
  from: (e, t) => He(nr(e, t)),
  compare: (e, t) => Er(nr(e), nr(t))
}, Mo), [sv, xe] = Lt(Bt, J(dy, on, ym), {
  ...kd,
  ...mn,
  ...zc(ec),
  ...zc(tc),
  offset: (e) => tn(aa(e).offsetNanoseconds),
  offsetNanoseconds: (e) => aa(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => $h(H, e)
}, {
  with: (e, t, r) => xe(Qm(Y, H, e, kr(t), r)),
  withCalendar: (e, t) => xe(bs(e, Oo(t))),
  withTimeZone: (e, t) => xe(Cy(e, Ae(t))),
  withPlainTime: (e, t) => xe(ky(H, e, Js(t))),
  add: (e, t, r) => xe(Pc(Y, H, 0, e, ue(t), r)),
  subtract: (e, t, r) => xe(Pc(Y, H, 1, e, ue(t), r)),
  until: (e, t, r) => se(fe(Cc(Y, H, 0, e, or(t), r))),
  since: (e, t, r) => se(fe(Cc(Y, H, 1, e, or(t), r))),
  round: (e, t) => xe(Lh(H, e, t)),
  startOfDay: (e) => xe(zh(H, e)),
  equals: (e, t) => vm(e, or(t)),
  toInstant: (e) => yt(xy(e)),
  toPlainDateTime: (e) => We(zf(H, e)),
  toPlainDate: (e) => He(Yf(H, e)),
  toPlainTime: (e) => vt(Zf(H, e)),
  toLocaleString(e, t, r = {}) {
    const [n, o] = Kb(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => Io(H, e, t),
  toJSON: (e) => Io(H, e),
  valueOf: Ut,
  getTimeZoneTransition(e, t) {
    const { timeZone: r, epochNanoseconds: n } = e, o = Ch(t), i = H(r).l(n, o);
    return i ? xe({
      ...e,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (e, t) => xe(or(e, t)),
  compare: (e, t) => jf(or(e), or(t))
}, ((e) => Io(H, e))), [cv, yt] = Lt(Fs, fy, kd, {
  add: (e, t) => yt(Nc(0, e, ue(t))),
  subtract: (e, t) => yt(Nc(1, e, ue(t))),
  until: (e, t, r) => se(Ic(0, e, ir(t), r)),
  since: (e, t, r) => se(Ic(1, e, ir(t), r)),
  round: (e, t) => yt(Bh(e, t)),
  equals: (e, t) => bm(e, ir(t)),
  toZonedDateTimeISO: (e, t) => xe(vy(e, Ae(t))),
  toLocaleString(e, t, r) {
    const [n, o] = Gb(t, r, e);
    return n.format(o);
  },
  toString: (e, t) => ko(Ae, H, e, t),
  toJSON: (e) => ko(Ae, H, e),
  valueOf: Ut
}, {
  from: (e) => yt(ir(e)),
  fromEpochMilliseconds: (e) => yt(Oy(e)),
  fromEpochNanoseconds: (e) => yt(Ry(e)),
  compare: (e, t) => wf(ir(e), ir(t))
}, ((e) => ko(Ae, H, e))), uv = /* @__PURE__ */ Object.defineProperties({}, {
  ...Na("Temporal.Now"),
  ...dr({
    timeZoneId: () => Mr(),
    instant: () => yt(ct(ea())),
    zonedDateTimeISO: (e = Mr()) => xe(qe(ea(), Ae(e), Q)),
    plainDateTimeISO: (e = Mr()) => We($e(Uo(H(Ae(e))), Q)),
    plainDateISO: (e = Mr()) => He(ut(Uo(H(Ae(e))), Q)),
    plainTimeISO: (e = Mr()) => vt(et(Uo(H(Ae(e)))))
  })
}), ur = /* @__PURE__ */ Object.defineProperties({}, {
  ...Na("Temporal"),
  ...dr({
    PlainYearMonth: iv,
    PlainMonthDay: ov,
    PlainDate: av,
    PlainTime: rv,
    PlainDateTime: nv,
    ZonedDateTime: sv,
    Instant: cv,
    Duration: Hb,
    Now: uv
  })
}), lv = /* @__PURE__ */ Lb(), Hn = /* @__PURE__ */ new WeakMap();
Object.create(Intl), dr({
  DateTimeFormat: lv
});
const fv = /^(\d{4})-(\d{2})-(\d{2})$/, dv = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
function Zc(e, t) {
  try {
    if (fv.test(e))
      return ur.PlainDate.from(e).toString();
    const r = dv.test(e) ? `${e.replace(" ", "T")}Z` : e;
    return ur.Instant.from(r).toZonedDateTimeISO(t).toPlainDate().toString();
  } catch {
    return null;
  }
}
function pv(e) {
  return ur.Now.zonedDateTimeISO(e).toPlainDate().toString();
}
function hv(e, t) {
  let r;
  try {
    r = ur.PlainDate.from(e);
  } catch {
    throw new Error(`Invalid filter date: ${e}`);
  }
  try {
    const n = r.toPlainDateTime(ur.PlainTime.from("00:00:00")).toZonedDateTime(t).toInstant(), o = r.toPlainDateTime(ur.PlainTime.from("23:59:59.999")).toZonedDateTime(t).toInstant();
    return {
      start: n.toString({ fractionalSecondDigits: 3 }),
      end: o.toString({ fractionalSecondDigits: 3 })
    };
  } catch {
    throw new Error(`Invalid timezone: ${t}`);
  }
}
function mv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp);
}
function yv(e) {
  const t = Object.keys(e);
  if (t.length !== 1)
    return;
  const [r] = t;
  if (!r.startsWith("$"))
    return r;
}
function Ro(e) {
  const t = yv(e);
  if (!t)
    return;
  const r = e[t];
  if (mv(r)) {
    const n = Object.entries(r);
    if (n.length !== 1)
      return;
    const [o, i] = n[0];
    return { field: t, operator: o, value: i };
  }
  return {
    field: t,
    operator: "$eq",
    value: r
  };
}
const gv = {
  $eq: "is",
  $ne: "is-not"
}, bv = {
  $lt: "is-less",
  $lte: "is-or-less",
  $gt: "is-greater",
  $gte: "is-or-greater"
}, vv = {
  contains: "~",
  "does-not-contain": "-~",
  "starts-with": "~^",
  "does-not-start-with": "-~^",
  "ends-with": "~$",
  "does-not-end-with": "-~$"
}, xv = {
  "is-less": "<",
  "is-or-less": "<=",
  "is-greater": ">",
  "is-or-greater": ">="
}, wv = /^[A-Za-z0-9_.-]+$/;
function mr(e, t) {
  return e?.field ?? t;
}
function Wc(e, t) {
  return typeof e == "string" ? t?.quoteStrings || e.startsWith("-") || !wv.test(e) ? fr(e) : e : String(e);
}
function Hc(e, t = !1) {
  const r = e.source, n = r.startsWith("^"), o = r.endsWith("$");
  return n && o ? t ? "does-not-contain" : "contains" : n ? t ? "does-not-start-with" : "starts-with" : o ? t ? "does-not-end-with" : "ends-with" : t ? "does-not-contain" : "contains";
}
function Vc(e) {
  let t = e.source;
  return t.startsWith("^") && (t = t.slice(1)), t.endsWith("$") && (t = t.slice(0, -1)), t.replace(/\\([\\.^$|?*+()[\]{}\/-])/g, "$1");
}
function Yo(e) {
  return {
    parse(t, r) {
      const n = Ro(t), o = mr(e, r.key);
      if (!n || n.field !== o)
        return null;
      const i = gv[n.operator];
      return i ? {
        field: r.key,
        operator: i,
        values: [n.value]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = mr(e, r.key);
      return n == null || n === "" ? null : t.operator === "is" ? [`${o}:${Wc(n, e)}`] : t.operator === "is-not" ? [`${o}:-${Wc(n, e)}`] : null;
    }
  };
}
function jv(e) {
  return {
    parse(t, r) {
      const n = Ro(t), o = mr(e, r.key);
      return !n || n.field !== o ? null : n.operator === "$eq" && typeof n.value == "string" ? {
        field: r.key,
        operator: "is",
        values: [n.value]
      } : n.operator === "$regex" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Hc(n.value),
        values: [Vc(n.value)]
      } : n.operator === "$not" && n.value instanceof RegExp ? {
        field: r.key,
        operator: Hc(n.value, !0),
        values: [Vc(n.value)]
      } : null;
    },
    serialize(t, r) {
      const n = t.values[0], o = mr(e, r.key);
      if (typeof n != "string" || n === "")
        return null;
      if (t.operator === "is")
        return [`${o}:${fr(n)}`];
      const i = vv[t.operator];
      return i ? [`${o}:${i}${fr(n)}`] : null;
    }
  };
}
function Sv(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = e.$relativeDate;
  if (!t || typeof t != "object")
    return !1;
  const { op: r, amount: n, unit: o } = t;
  return (r === "sub" || r === "add") && typeof n == "number" && Number.isSafeInteger(n) && n > 0 && typeof o == "string";
}
function Nv(e) {
  return {
    parse(t, r) {
      const n = Ro(t), o = mr(e, r.key);
      if (!n || n.field !== o)
        return null;
      if (Sv(n.value) && n.value.$relativeDate.unit === "days") {
        const { op: s, amount: c } = n.value.$relativeDate, u = s === "sub" && n.operator === "$gte", f = s === "add" && n.operator === "$lte";
        if (u || f)
          return {
            field: r.key,
            operator: u ? "in-the-last" : "in-the-next",
            values: [c]
          };
      }
      if (typeof n.value != "string")
        return null;
      const i = bv[n.operator], a = Zc(n.value, r.timezone);
      return !i || !a ? null : {
        field: r.key,
        operator: i,
        values: [a]
      };
    },
    serialize(t, r) {
      const n = mr(e, r.key);
      if (t.operator === "in-the-last" || t.operator === "in-the-next") {
        const f = t.values[0];
        if (typeof f != "number" || !Number.isSafeInteger(f) || f <= 0)
          return null;
        const d = t.operator === "in-the-last" ? "-" : "+", p = t.operator === "in-the-last" ? ">=" : "<=";
        return [`${n}:${p}now${d}${f}d`];
      }
      const o = t.values[0];
      if (typeof o != "string" || o === "")
        return null;
      const i = Zc(o, r.timezone);
      if (!i)
        return null;
      const { start: a, end: s } = hv(i, r.timezone), c = xv[t.operator];
      if (c === void 0)
        return null;
      const u = t.operator === "is-less" || t.operator === "is-or-greater" ? a : s;
      return [`${n}:${c}'${u}'`];
    }
  };
}
const Pv = {
  parse(e, t) {
    const r = Ro(e);
    return !r || r.field !== "count.reports" ? null : r.operator === "$eq" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["false"]
    } : r.operator === "$gt" && r.value === 0 ? {
      field: t.key,
      operator: "is",
      values: ["true"]
    } : null;
  },
  serialize(e) {
    const t = e.values[0];
    return e.operator !== "is" ? null : t === "true" ? ["count.reports:>0"] : t === "false" ? ["count.reports:0"] : null;
  }
}, yn = {
  status: {
    operators: ["is"],
    ui: {
      label: "Status",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "published", label: "Published" },
      { value: "hidden", label: "Hidden" }
    ],
    codec: Yo()
  },
  created_at: ph({
    operators: ch,
    ui: {
      label: "Date",
      defaultOperator: lh,
      type: "date"
    },
    codec: Nv()
  }),
  body: {
    operators: ["contains", "does-not-contain"],
    parseKeys: ["html"],
    ui: {
      label: "Text",
      type: "text",
      placeholder: "Search comment text...",
      defaultOperator: "contains",
      className: "w-full max-w-48",
      popoverContentClassName: "w-full max-w-48"
    },
    codec: jv({ field: "html" })
  },
  post: {
    operators: ["is", "is-not"],
    parseKeys: ["post_id"],
    ui: {
      label: "Post",
      type: "select",
      searchable: !0,
      className: "w-full max-w-80",
      popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80"
    },
    codec: Yo({ field: "post_id" })
  },
  author: {
    operators: ["is", "is-not"],
    parseKeys: ["member_id"],
    ui: {
      label: "Author",
      type: "select",
      searchable: !0,
      className: "w-80",
      popoverContentClassName: "w-80"
    },
    codec: Yo({ field: "member_id" })
  },
  reported: {
    operators: ["is"],
    parseKeys: ["count.reports"],
    ui: {
      label: "Reported",
      type: "select",
      searchable: !1,
      hideOperatorSelect: !0
    },
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" }
    ],
    codec: Pv
  }
};
function Tv(e, t = {}) {
  const r = t.labels || {};
  return e.map((n) => ({
    value: n,
    label: r[n] ?? n.replaceAll("-", " ")
  }));
}
const Ev = ["author", "post", "body", "status", "reported", "created_at"], Ov = {
  ...uh,
  ...fh
};
function Rv(e) {
  switch (e) {
    case "author":
      return ht.createElement(ml, { className: "size-4" });
    case "post":
      return ht.createElement(vp, { className: "size-4" });
    case "body":
      return ht.createElement(bp, { className: "size-4" });
    case "status":
      return ht.createElement(Tp, { className: "size-4" });
    case "reported":
      return ht.createElement(pa, { className: "size-4" });
    case "created_at":
      return ht.createElement(gp, { className: "size-4" });
    default:
      return;
  }
}
function Av({
  postValueSource: e,
  memberValueSource: t,
  siteTimezone: r = "UTC"
}) {
  return we(() => {
    const n = pv(r);
    return Ev.map((o) => {
      const i = yn[o], a = o === "created_at" ? {
        defaultValue: n,
        ...dh(i) ? { customRenderer: hh(n) } : {}
      } : {};
      return {
        key: o,
        ...i.ui,
        icon: Rv(o),
        operators: Tv(i.operators, { labels: Ov }),
        ..."options" in i && i.options ? { options: i.options } : {},
        ...a,
        ...o === "author" ? { valueSource: t } : {},
        ...o === "post" ? { valueSource: e } : {}
      };
    });
  }, [t, e, r]);
}
const Id = "MembersResponseType", Cd = "/members/", Dv = { limit: "1" }, kv = () => [Id, Ip(Cd, Dv)], Iv = br({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Cv = br({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), Mv = ma({
  dataType: Id,
  path: Cd,
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "100",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.members), n = t[t.length - 1].meta;
    return {
      members: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function _v(e) {
  return !e?.filter && !e?.search;
}
function Fv(e, t) {
  const r = up(), n = e.data?.meta?.pagination?.total, o = _v(t);
  je(() => {
    if (!(o && !e.isError && !e.isPlaceholderData && !e.isPreviousData && typeof n == "number"))
      return;
    const a = kv(), s = r.getQueryState(a), c = s?.data, u = c?.meta?.pagination;
    if (!s || !c || !u)
      return;
    const f = u.total === n, d = s.dataUpdatedAt <= e.dataUpdatedAt;
    f || !d || r.setQueryData(a, {
      ...c,
      meta: {
        ...c.meta,
        pagination: {
          ...u,
          total: n
        }
      }
    }, { updatedAt: e.dataUpdatedAt });
  }, [r, o, n, e.dataUpdatedAt, e.isError, e.isPlaceholderData, e.isPreviousData]);
}
function Bv(e = {}) {
  const t = Mv(e);
  return Fv(t, e.searchParams), t;
}
function Lv(e, t) {
  if (t.length !== 0)
    return `${e}:[${t.map((r) => fr(r)).join(",")}]`;
}
function Vn(...e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e)
    if (r)
      for (const n of r)
        t.has(n.value) || t.set(n.value, n);
  return [...t.values()];
}
function Uv(e, t, r, n) {
  var o = this, i = ee(null), a = ee(0), s = ee(0), c = ee(null), u = ee([]), f = ee(), d = ee(), p = ee(e), h = ee(!0), y = ee(), m = ee();
  p.current = e;
  var b = typeof window < "u", N = !t && t !== 0 && b;
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var j = !!(r = r || {}).leading, E = !("trailing" in r) || !!r.trailing, R = !!r.flushOnExit && E, M = "maxWait" in r, _ = "debounceOnServer" in r && !!r.debounceOnServer, D = M ? Math.max(+r.maxWait || 0, t) : null, Z = we(function() {
    var U = function(A) {
      var P = u.current, ie = f.current;
      return u.current = f.current = null, a.current = A, s.current = s.current || A, d.current = p.current.apply(ie, P);
    }, G = function(A, P) {
      N && cancelAnimationFrame(c.current), c.current = N ? requestAnimationFrame(A) : setTimeout(A, P);
    }, B = function(A) {
      if (!h.current) return !1;
      var P = A - i.current;
      return !i.current || P >= t || P < 0 || M && A - a.current >= D;
    }, T = function(A) {
      return c.current = null, E && u.current ? U(A) : (u.current = f.current = null, d.current);
    }, S = function A() {
      var P = Date.now();
      if (j && s.current === a.current && k(), B(P)) return T(P);
      if (h.current) {
        var ie = t - (P - i.current), K = M ? Math.min(ie, D - (P - a.current)) : ie;
        G(A, K);
      }
    }, k = function() {
      n && n({});
    }, C = function() {
      if (b || _) {
        var A, P = Date.now(), ie = B(P);
        if (u.current = [].slice.call(arguments), f.current = o, i.current = P, R && !y.current && (y.current = function() {
          var K;
          ((K = globalThis.document) == null ? void 0 : K.visibilityState) === "hidden" && m.current.flush();
        }, (A = globalThis.document) == null || A.addEventListener == null || A.addEventListener("visibilitychange", y.current)), ie) {
          if (!c.current && h.current) return a.current = i.current, G(S, t), j ? U(i.current) : d.current;
          if (M) return G(S, t), U(i.current);
        }
        return c.current || G(S, t), d.current;
      }
    };
    return C.cancel = function() {
      var A = c.current;
      A && (N ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), a.current = 0, u.current = i.current = f.current = c.current = null, A && n && n({});
    }, C.isPending = function() {
      return !!c.current;
    }, C.flush = function() {
      return c.current ? T(Date.now()) : d.current;
    }, C;
  }, [j, M, t, D, E, R, N, b, _, n]);
  return m.current = Z, je(function() {
    return h.current = !0, function() {
      var U;
      R && m.current.flush(), y.current && ((U = globalThis.document) == null || U.removeEventListener == null || U.removeEventListener("visibilitychange", y.current), y.current = null), h.current = !1;
    };
  }, [R]), Z;
}
function qv(e, t) {
  return e === t;
}
function $v(e, t, r) {
  var n = qv, o = ee(e), i = pe({})[1], a = Uv(lr(function(c) {
    o.current = c, i({});
  }, [i]), t, r, i), s = ee(e);
  return n(s.current, e) || (a(e), s.current = e), [o.current, a];
}
const Gc = () => {
};
function zv(e, t, r) {
  return r ? e.flatMap((n) => t.some((i) => i.value === n) ? [] : [r(n)]) : [];
}
function Yv(e) {
  return function(r = {}) {
    const { enabled: n = !0 } = r, o = () => {
      const a = e.useBrowse("", { enabled: !0 }), s = we(() => (a.data || []).map(e.toOption), [a.data]);
      return {
        items: a.data,
        options: s,
        isLoading: a.isLoading,
        pagination: a.pagination
      };
    }, i = ({ query: a, selectedValues: s }) => {
      const [c] = $v(a, e.debounceMs ?? 200), u = e.useBrowse(c, { enabled: n }), f = e.useHydrate?.(s, { enabled: n }), d = we(() => (u.data || []).map(e.toOption), [u.data]), p = we(() => (f?.data || []).map(e.toOption), [f?.data]), h = we(() => Vn(p, d), [p, d]), y = we(() => zv(
        s,
        h,
        e.getMissingSelectedOption
      ), [h, s]);
      return n ? {
        options: Vn(y, h),
        isInitialLoad: u.isLoading && h.length === 0,
        isSearching: !u.isLoading && u.isRefreshing && !u.isLoadingMore,
        isLoadingMore: u.isLoadingMore,
        hasMore: u.hasMore,
        loadMore: u.loadMore ?? Gc
      } : {
        options: [],
        isInitialLoad: !1,
        isSearching: !1,
        isLoadingMore: !1,
        hasMore: !1,
        loadMore: Gc
      };
    };
    return {
      id: e.id,
      useInitialBrowse: o,
      useOptions: i
    };
  };
}
function Zv(e) {
  return { filter: e };
}
function Wv(e) {
  return Lv("id", e);
}
function Kc(e) {
  return {
    limit: "100",
    ...e
  };
}
function rc({
  id: e,
  buildBrowseSearchParams: t,
  buildHydrateSearchParams: r = Zv,
  buildHydrateFilter: n = Wv,
  debounceMs: o,
  selectItems: i,
  toOption: a,
  getMissingSelectedOption: s,
  useQuery: c
}) {
  return Yv({
    id: e,
    useBrowse: (u, f) => {
      const d = c({
        enabled: f.enabled ?? !0,
        searchParams: Kc(t(u))
      });
      return {
        data: i(d.data),
        isLoading: d.isLoading,
        isRefreshing: d.isFetching,
        isLoadingMore: d.isFetchingNextPage,
        hasMore: !!d.hasNextPage,
        loadMore: d.fetchNextPage,
        pagination: d.data?.meta?.pagination
      };
    },
    useHydrate: (u, f) => {
      const d = n(u), p = {};
      typeof d == "string" && Object.assign(p, Kc(r(d)));
      const y = c({
        enabled: (f.enabled ?? !0) && u.length > 0,
        searchParams: p
      });
      return {
        data: i(y.data),
        isLoading: y.isLoading
      };
    },
    toOption: a,
    getMissingSelectedOption: s,
    debounceMs: o
  });
}
function Hv(e) {
  return {
    value: e.id,
    label: e.name || "Unknown name",
    detail: e.email ?? "(Unknown email)"
  };
}
const Vv = rc({
  id: "posts.members.remote",
  buildBrowseSearchParams: (e) => ({
    limit: "100",
    order: "created_at DESC",
    ...e ? { search: e } : {}
  }),
  getMissingSelectedOption: (e) => ({
    value: e,
    label: `ID: ${e}`
  }),
  selectItems: (e) => e?.members,
  useQuery: ({ enabled: e, searchParams: t }) => Bv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: Hv
});
function Gv() {
  return Vv();
}
const Kv = "PagesResponseType", Qv = ma({
  dataType: Kv,
  path: "/pages/",
  defaultNextPageParams: (e, t) => {
    if (e.meta?.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.pages), n = t[t.length - 1].meta;
    return {
      pages: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
});
function Jv(e, t, r) {
  return function(o) {
    const i = e(o), a = t(o), s = lr(({ query: c, selectedValues: u }) => {
      const f = i.useOptions({ query: c, selectedValues: u }), d = a.useOptions({ query: c, selectedValues: u }), p = Vn(f.options, d.options), h = r ? u.flatMap((y) => p.some((b) => b.value === y) ? [] : [r(y)]) : [];
      return {
        options: Vn(p, h),
        isInitialLoad: f.options.length === 0 && d.options.length === 0 && (f.isInitialLoad || d.isInitialLoad),
        isSearching: f.isSearching || d.isSearching,
        isLoadingMore: f.isLoadingMore || d.isLoadingMore,
        hasMore: f.hasMore || d.hasMore,
        loadMore: () => {
          f.hasMore && f.loadMore(), d.hasMore && d.loadMore();
        }
      };
    }, [i, a]);
    return we(() => ({
      id: `${i.id}+${a.id}`,
      useOptions: s
    }), [i.id, a.id, s]);
  };
}
function Xv(e) {
  return e ? `status:published+title:~${fr(e)}` : "status:published";
}
function e1(e) {
  return {
    value: e.id,
    label: e.title
  };
}
function t1(e) {
  return {
    value: e.id,
    label: e.title,
    detail: "Page"
  };
}
const Md = (e) => ({
  filter: Xv(e),
  limit: "25",
  fields: "id,title",
  order: "published_at DESC"
}), _d = (e) => ({
  fields: "id,title",
  filter: e
}), r1 = rc({
  id: "posts.published.remote",
  buildBrowseSearchParams: Md,
  buildHydrateSearchParams: _d,
  selectItems: (e) => e?.posts,
  useQuery: ({ enabled: e, searchParams: t }) => Cp({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: e1
}), n1 = rc({
  id: "pages.published.remote",
  buildBrowseSearchParams: Md,
  buildHydrateSearchParams: _d,
  selectItems: (e) => e?.pages,
  useQuery: ({ enabled: e, searchParams: t }) => Qv({
    enabled: e,
    keepPreviousData: !0,
    searchParams: t
  }),
  toOption: t1
}), o1 = Jv(
  r1,
  n1,
  (e) => ({
    value: e,
    label: `ID: ${e}`
  })
);
function i1() {
  return o1();
}
const Qc = ({
  filters: e,
  siteTimezone: t,
  onFiltersChange: r
}) => {
  const n = i1(), o = Gv(), i = Av({
    memberValueSource: o,
    postValueSource: n,
    siteTimezone: t
  }), a = e.length > 0;
  return /* @__PURE__ */ l.jsx(
    hp,
    {
      addButtonIcon: a ? /* @__PURE__ */ l.jsx(xp, {}) : /* @__PURE__ */ l.jsx(wp, {}),
      addButtonText: a ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${a ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ l.jsx(Mp, {}),
      clearButtonText: "Clear",
      fields: i,
      filters: e,
      keyboardShortcut: "f",
      popoverAlign: a ? "start" : "end",
      showClearButton: a,
      showSearchInput: !1,
      onChange: r
    }
  );
};
function a1({ onClick: e, expanded: t }) {
  return /* @__PURE__ */ l.jsxs(
    le,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: e,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ l.jsx(jp, {}) : /* @__PURE__ */ l.jsx(Fp, {})
      ]
    }
  );
}
function Fd({ item: e }) {
  const t = ee(null), [r, n] = pe(!1), [o, i] = pe(!1);
  return je(() => {
    if (o)
      return;
    const a = () => {
      t.current && n(t.current.scrollHeight > t.current.clientHeight);
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e.html, o]), /* @__PURE__ */ l.jsx("div", { className: "mt-2 flex flex-col gap-2", children: /* @__PURE__ */ l.jsxs("div", { className: `flex max-w-full flex-col items-start ${e.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: e.html || "" },
        ref: t,
        className: he(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          o ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ l.jsx(a1, { expanded: o, onClick: () => i(!o) })
  ] }) });
}
const Ir = "CommentsResponseType", Bd = "count.dislikes", nc = (e) => [
  "member",
  "post",
  "count.replies",
  "count.direct_replies",
  "count.likes",
  ...e ? [Bd] : [],
  "count.reports",
  "parent",
  "in_reply_to"
].join(","), s1 = (e) => [
  "member",
  "post",
  "count.direct_replies",
  "count.likes",
  ...e ? [Bd] : [],
  "count.reports",
  "parent",
  "in_reply_to"
].join(","), c1 = ma({
  dataType: Ir,
  path: "/comments/",
  defaultNextPageParams: (e, t) => e.meta?.pagination.next ? {
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  } : void 0,
  returnData: (e) => {
    const { pages: t } = e, r = t.flatMap((o) => o.comments), n = t[t.length - 1].meta;
    return {
      comments: r,
      meta: n,
      isEnd: n ? n.pagination.pages === n.pagination.page : !0
    };
  }
}), Ld = (e) => c1({
  ...e,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...e?.searchParams
  }
}), Ud = br({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: Ir
  }
}), qd = br({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: Ir
  }
}), u1 = br({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !0
    }]
  }),
  invalidateQueries: {
    dataType: Ir
  }
}), oc = br({
  method: "PUT",
  path: ({ id: e }) => `/comments/${e}/`,
  body: ({ id: e }) => ({
    comments: [{
      id: e,
      pinned: !1
    }]
  }),
  invalidateQueries: {
    dataType: Ir
  }
}), l1 = Gn({
  dataType: Ir,
  path: (e) => `/comments/${e}/`,
  defaultSearchParams: {
    include: nc(!1)
  }
}), f1 = (e, t) => {
  const { dislikesEnabled: r = !1, searchParams: n, ...o } = t || {};
  return l1(e, {
    ...o,
    searchParams: {
      include: nc(r),
      ...n
    }
  });
}, d1 = Gn({
  dataType: "CommentReportsResponseType",
  path: (e) => `/comments/${e}/reports/`
}), p1 = (e, t) => d1(e, { ...t }), h1 = Gn({
  dataType: "CommentLikesResponseType",
  path: (e) => `/comments/${e}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), m1 = (e, t) => h1(e, { ...t }), y1 = Gn({
  dataType: "CommentDislikesResponseType",
  path: (e) => `/comments/${e}/dislikes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), g1 = (e, t) => y1(e, { ...t }), b1 = (e, t) => {
  const { dislikesEnabled: r = !1, ...n } = t || {};
  return Ld({
    ...n,
    searchParams: {
      filter: `(parent_id:${e}+in_reply_to_id:null),in_reply_to_id:${e}`,
      order: "created_at asc",
      include: s1(r),
      limit: "100"
    }
  });
};
function v1(e) {
  const t = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
const x1 = he(
  El({ variant: "warning" }),
  "gap-1 hover:bg-state-warning/30"
);
function $d({
  memberName: e,
  memberId: t,
  createdAt: r,
  isHidden: n,
  canComment: o,
  isPinned: i,
  onAuthorClick: a,
  postTitle: s,
  onPostClick: c,
  onUnpinClick: u,
  className: f
}) {
  const d = (p) => {
    p.stopPropagation(), u?.();
  };
  return /* @__PURE__ */ l.jsxs("div", { className: he("flex items-center gap-2", f), children: [
    /* @__PURE__ */ l.jsxs("div", { className: he(
      "flex min-w-0 items-center gap-x-1",
      n && "opacity-50"
    ), children: [
      /* @__PURE__ */ l.jsx("div", { className: "whitespace-nowrap", children: t && a ? /* @__PURE__ */ l.jsx(
        le,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 text-md font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: a,
          children: e || "Unknown"
        }
      ) : /* @__PURE__ */ l.jsx("span", { className: "block truncate font-semibold", children: e || "Unknown" }) }),
      o === !1 && /* @__PURE__ */ l.jsx(Dn, { children: /* @__PURE__ */ l.jsxs(kn, { children: [
        /* @__PURE__ */ l.jsx(In, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ l.jsx(
          fl,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ l.jsx(Cn, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ l.jsx(ha, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ l.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ l.jsx(Dn, { children: /* @__PURE__ */ l.jsxs(kn, { children: [
        /* @__PURE__ */ l.jsx(In, { asChild: !0, children: /* @__PURE__ */ l.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: zt(r) }) }),
        /* @__PURE__ */ l.jsx(Cn, { children: v1(r) })
      ] }) }) }),
      s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ l.jsx("div", { className: "min-w-0 truncate", children: c ? /* @__PURE__ */ l.jsx(
          le,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: c,
            children: s
          }
        ) : /* @__PURE__ */ l.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: s }) })
      ] })
    ] }),
    n && /* @__PURE__ */ l.jsx(gc, { variant: "secondary", children: "Hidden" }),
    i && (u ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        "aria-label": "Unpin comment",
        className: he("group", x1),
        type: "button",
        onClick: d,
        children: [
          /* @__PURE__ */ l.jsxs("span", { className: "grid size-3 shrink-0", children: [
            /* @__PURE__ */ l.jsx(Ki, { className: "col-start-1 row-start-1 size-3 group-hover:opacity-0 group-focus-visible:opacity-0" }),
            /* @__PURE__ */ l.jsx(dl, { className: "col-start-1 row-start-1 size-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" })
          ] }),
          /* @__PURE__ */ l.jsxs("span", { className: "grid justify-items-start text-left", children: [
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 group-hover:opacity-0 group-focus-visible:opacity-0", children: "Pinned" }),
            /* @__PURE__ */ l.jsx("span", { className: "col-start-1 row-start-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100", children: "Unpin" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(gc, { className: "gap-1", variant: "warning", children: [
      /* @__PURE__ */ l.jsx(Ki, { className: "size-3" }),
      "Pinned"
    ] }))
  ] });
}
function w1({
  open: e,
  memberName: t,
  onOpenChange: r,
  onConfirm: n
}) {
  const [o, i] = pe(!1), a = (c) => {
    c || i(!1), r(c);
  }, s = () => {
    n(o), i(!1);
  };
  return /* @__PURE__ */ l.jsx(ya, { open: e, onOpenChange: a, children: /* @__PURE__ */ l.jsxs(ga, { className: "gap-5", children: [
    /* @__PURE__ */ l.jsxs(ba, { children: [
      /* @__PURE__ */ l.jsx(va, { children: "Disable comments" }),
      /* @__PURE__ */ l.jsxs(_p, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l.jsx(
        Ol,
        {
          checked: o,
          id: "hide-comments",
          onCheckedChange: (c) => i(c === !0)
        }
      ),
      /* @__PURE__ */ l.jsx(yp, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ l.jsxs(xa, { children: [
      /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => a(!1), children: "Cancel" }),
      /* @__PURE__ */ l.jsx(le, { onClick: s, children: "Disable comments" })
    ] })
  ] }) });
}
const ic = () => {
  const { data: e } = $p();
  return e?.config?.labs?.commentsPinning === !0;
};
function zd({
  comment: e
}) {
  const { mutate: t } = Iv(), { mutate: r } = Cv(), { mutate: n } = u1(), { mutate: o } = oc(), [i, a] = pe(!1), s = ic(), { id: c, post: u, member: f } = e, d = u?.url, p = f?.id, h = f?.can_comment, y = s && !e.parent_id && e.status !== "deleted", m = (N) => {
    p && (t({
      id: p,
      reason: `Disabled from comment ${c}`,
      hideComments: N
    }), a(!1));
  }, b = () => {
    p && r({ id: p });
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(Ep, { children: [
      /* @__PURE__ */ l.jsx(Op, { asChild: !0, children: /* @__PURE__ */ l.jsx(
        le,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ l.jsx(Yp, {})
        }
      ) }),
      /* @__PURE__ */ l.jsxs(Rp, { align: "start", children: [
        d && /* @__PURE__ */ l.jsx(er, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `${d}#ghost-comments-${c}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ l.jsx(Ap, { className: "size-4" }),
          "View on post"
        ] }) }),
        p && /* @__PURE__ */ l.jsx(er, { asChild: !0, children: /* @__PURE__ */ l.jsxs("a", { href: `#/members/${p}`, children: [
          /* @__PURE__ */ l.jsx(ml, { className: "size-4" }),
          "View member"
        ] }) }),
        y && (e.pinned ? /* @__PURE__ */ l.jsxs(er, { onClick: () => o({ id: c }), children: [
          /* @__PURE__ */ l.jsx(dl, { className: "size-4" }),
          "Unpin comment"
        ] }) : /* @__PURE__ */ l.jsxs(er, { onClick: () => n({ id: c }), children: [
          /* @__PURE__ */ l.jsx(Ki, { className: "size-4" }),
          "Pin comment"
        ] })),
        p && (h !== !1 ? /* @__PURE__ */ l.jsxs(er, { onClick: () => a(!0), children: [
          /* @__PURE__ */ l.jsx(fl, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ l.jsxs(er, { onClick: b, children: [
          /* @__PURE__ */ l.jsx(Sp, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      w1,
      {
        memberName: f?.name,
        open: i,
        onConfirm: m,
        onOpenChange: a
      }
    )
  ] });
}
function j1({ comment: e, dislikesEnabled: t, open: r, defaultTab: n = "likes", onOpenChange: o }) {
  const { data: i, isLoading: a } = m1(e.id, { enabled: r }), { data: s, isLoading: c } = g1(e.id, { enabled: r && t }), u = i?.comment_likes ?? [], f = t ? s?.comment_dislikes ?? [] : [], d = e.count?.likes ?? 0, p = t ? e.count?.dislikes ?? 0 : 0, h = Math.max(0, d - u.length), y = Math.max(0, p - f.length);
  return /* @__PURE__ */ l.jsx(ya, { open: r, onOpenChange: o, children: /* @__PURE__ */ l.jsxs(ga, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ba, { children: /* @__PURE__ */ l.jsx(va, { children: t ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      $t(d),
      " ",
      d === 1 ? "like" : "likes",
      " and ",
      $t(p),
      " ",
      p === 1 ? "dislike" : "dislikes"
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      $t(d),
      " ",
      d === 1 ? "like" : "likes"
    ] }) }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? ar(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(ha, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && zt(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    t ? /* @__PURE__ */ l.jsxs(Zp, { defaultValue: n, variant: "segmented", children: [
      /* @__PURE__ */ l.jsxs(Wp, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ l.jsx(mc, { value: "likes", children: "Likes" }),
        /* @__PURE__ */ l.jsx(mc, { value: "dislikes", children: "Dislikes" })
      ] }),
      /* @__PURE__ */ l.jsx(yc, { className: "mt-4", value: "likes", children: /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(wt, { size: "md" }) }) : u.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "py-4 text-center text-sm text-muted-foreground", children: "No likes yet" }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
        u.map((m) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ l.jsx(
                xt,
                {
                  email: m.member?.email,
                  name: m.member?.name,
                  src: m.member?.avatar_image
                }
              ),
              /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-gray-500 text-white", children: /* @__PURE__ */ l.jsx(gl, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: m.member ? ar(m.member) : "Deleted member" })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: zt(m.created_at) })
        ] }, m.id)),
        h > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
          "and ",
          $t(h),
          " more"
        ] })
      ] }) }) }),
      /* @__PURE__ */ l.jsx(yc, { className: "mt-4", value: "dislikes", children: /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: c ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(wt, { size: "md" }) }) : f.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "py-4 text-center text-sm text-muted-foreground", children: "No dislikes yet" }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
        f.map((m) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ l.jsx(
                xt,
                {
                  email: m.member?.email,
                  name: m.member?.name,
                  src: m.member?.avatar_image
                }
              ),
              /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-gray-500 text-white", children: /* @__PURE__ */ l.jsx(bl, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: m.member ? ar(m.member) : "Deleted member" })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: zt(m.created_at) })
        ] }, m.id)),
        y > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
          "and ",
          $t(y),
          " more"
        ] })
      ] }) }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: a ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(wt, { size: "md" }) }) : /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      u.map((m) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ l.jsx(
              xt,
              {
                email: m.member?.email,
                name: m.member?.name,
                src: m.member?.avatar_image
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ l.jsx(pl, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: m.member ? ar(m.member) : "Deleted member" })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: zt(m.created_at) })
      ] }, m.id)),
      h > 0 && /* @__PURE__ */ l.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        $t(h),
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(xa, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => o(!1), children: "OK" }) })
  ] }) });
}
function S1({ comment: e, open: t, onOpenChange: r }) {
  const { data: n, isLoading: o } = p1(e.id, { enabled: t }), i = n?.comment_reports ?? [], a = e.count?.reports ?? i.length;
  return /* @__PURE__ */ l.jsx(ya, { open: t, onOpenChange: r, children: /* @__PURE__ */ l.jsxs(ga, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ l.jsx(ba, { children: /* @__PURE__ */ l.jsxs(va, { children: [
      a,
      " ",
      a === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: "shrink-0",
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 font-semibold", children: e.member ? ar(e.member) : "Deleted member" }),
          /* @__PURE__ */ l.jsx(ha, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: e.created_at && zt(e.created_at) }),
          /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ l.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: e.post?.title || "Unknown post" })
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: e.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: o ? /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ l.jsx(wt, { size: "md" }) }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-col gap-3 pb-1", children: i.map((s) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ l.jsx(
            xt,
            {
              email: s.member?.email,
              name: s.member?.name,
              src: s.member?.avatar_image
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ l.jsx(pa, { className: "size-2.5", fill: "currentColor" }) })
        ] }),
        /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: s.member ? ar(s.member) : "Deleted member" })
      ] }),
      /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: zt(s.created_at) })
    ] }, s.id)) }) }),
    /* @__PURE__ */ l.jsx(xa, { children: /* @__PURE__ */ l.jsx(le, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Br({ icon: e, count: t, label: r, to: n, onClick: o, className: i, testId: a }) {
  const s = he("flex items-center gap-1 text-xs text-gray-800", i), c = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e,
    /* @__PURE__ */ l.jsx("span", { children: $t(t) })
  ] }), u = n || o;
  return /* @__PURE__ */ l.jsx(Dn, { children: /* @__PURE__ */ l.jsxs(kn, { children: [
    /* @__PURE__ */ l.jsx(In, { asChild: !0, children: n ? /* @__PURE__ */ l.jsx(
      fa,
      {
        className: he(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        to: n,
        onClick: (f) => {
          f.stopPropagation();
        },
        children: c
      }
    ) : o ? /* @__PURE__ */ l.jsx(
      "button",
      {
        className: he(s, "cursor-pointer hover:opacity-70"),
        "data-testid": a,
        type: "button",
        onClick: (f) => {
          f.stopPropagation(), o();
        },
        children: c
      }
    ) : /* @__PURE__ */ l.jsx("div", { className: s, "data-testid": a, children: c }) }),
    /* @__PURE__ */ l.jsx(Cn, { children: u ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function ac(e, t) {
  if (!t)
    return;
  const r = new URLSearchParams(e);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function Yd({
  comment: e,
  dislikesEnabled: t,
  className: r
}) {
  const [n] = gr(), [o, i] = pe(!1), [a, s] = pe("likes"), [c, u] = pe(!1), f = ac(n, e.id), d = e.count?.direct_replies ?? e.replies?.length ?? 0, p = e.count?.likes ?? 0, h = t ? e.count?.dislikes ?? 0 : 0, y = e.count?.reports ?? 0, m = d > 0, b = p > 0, N = h > 0, j = y > 0;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: he("flex items-center gap-6", r), children: [
      /* @__PURE__ */ l.jsx(
        Br,
        {
          count: d,
          icon: /* @__PURE__ */ l.jsx(Np, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: m ? f : void 0
        }
      ),
      t ? /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l.jsx(
          Br,
          {
            count: p,
            icon: /* @__PURE__ */ l.jsx(gl, { size: 16, strokeWidth: 1.5 }),
            label: "Likes",
            testId: "likes-metric",
            onClick: b ? () => {
              s("likes"), i(!0);
            } : void 0
          }
        ),
        /* @__PURE__ */ l.jsx(
          Br,
          {
            count: h,
            icon: /* @__PURE__ */ l.jsx(bl, { size: 16, strokeWidth: 1.5 }),
            label: "Dislikes",
            testId: "dislikes-metric",
            onClick: N ? () => {
              s("dislikes"), i(!0);
            } : void 0
          }
        )
      ] }) : /* @__PURE__ */ l.jsx(
        Br,
        {
          count: p,
          icon: /* @__PURE__ */ l.jsx(pl, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: b ? () => i(!0) : void 0
        }
      ),
      /* @__PURE__ */ l.jsx(
        Br,
        {
          className: j ? "font-semibold text-red" : void 0,
          count: y,
          icon: /* @__PURE__ */ l.jsx(pa, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: j ? () => u(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      j1,
      {
        comment: e,
        defaultTab: a,
        dislikesEnabled: t,
        open: o,
        onOpenChange: i
      }
    ),
    /* @__PURE__ */ l.jsx(
      S1,
      {
        comment: e,
        open: c,
        onOpenChange: u
      }
    )
  ] });
}
function N1({ hasReplies: e }) {
  return e ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function Zd({ comment: e, dislikesEnabled: t, isReply: r = !1, isSelectedComment: n = !1, selectedCommentId: o }) {
  const [i] = gr(), { mutate: a } = Ud(), { mutate: s } = qd(), { mutate: c } = oc(), u = ic(), f = (e.replies?.length ?? 0) > 0 || (e.count?.direct_replies ?? e.count?.replies ?? 0) > 0, d = !f || r ? "mb-7" : "mb-0";
  return /* @__PURE__ */ l.jsxs("div", { className: `flex w-full flex-row ${d}`, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ l.jsx(
        xt,
        {
          className: he("mb-3 size-6 md:mb-4 md:size-8", e.status === "hidden" && "opacity-50"),
          email: e.member?.email,
          name: e.member?.name,
          src: e.member?.avatar_image
        }
      ),
      /* @__PURE__ */ l.jsx(N1, { hasReplies: f && !r })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "grow", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${e.id}`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ l.jsx(
              $d,
              {
                canComment: e.member?.can_comment,
                createdAt: e.created_at,
                isHidden: e.status === "hidden",
                isPinned: u && e.pinned,
                memberId: e.member?.id,
                memberName: e.member?.name,
                onUnpinClick: u ? () => c({ id: e.id }) : void 0
              }
            ),
            e.in_reply_to_snippet && n && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${e.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ l.jsx(
                fa,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: ac(i, e.in_reply_to_id || e.parent_id) || "",
                  onClick: (p) => {
                    p.stopPropagation();
                  },
                  children: e.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ l.jsx(Fd, { item: e }),
            /* @__PURE__ */ l.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              e.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => a({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(hl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              e.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => s({ id: e.id }), children: [
                /* @__PURE__ */ l.jsx(ll, {}),
                /* @__PURE__ */ l.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ l.jsx(
                Yd,
                {
                  comment: e,
                  dislikesEnabled: t
                }
              ),
              /* @__PURE__ */ l.jsx(
                zd,
                {
                  comment: e
                }
              )
            ] })
          ] }),
          f && e.replies && /* @__PURE__ */ l.jsx("div", { className: "mt-7 mb-4 -ml-2 pl-2 md:mt-8 md:mb-0 md:-ml-3 md:pl-3", children: e.replies.map((p) => /* @__PURE__ */ l.jsx(
            Zd,
            {
              comment: p,
              dislikesEnabled: t,
              isReply: !0,
              selectedCommentId: o
            },
            p.id
          )) })
        ]
      }
    ) })
  ] });
}
const P1 = ({
  selectedComment: e,
  dislikesEnabled: t,
  replies: r,
  selectedCommentId: n,
  fetchNextPage: o,
  hasNextPage: i,
  isFetchingNextPage: a
}) => {
  const s = { ...e, replies: r };
  return /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ l.jsx(
      Zd,
      {
        comment: s,
        dislikesEnabled: t,
        isSelectedComment: !0,
        selectedCommentId: n
      }
    ),
    i && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ l.jsx(
      le,
      {
        disabled: a,
        variant: "outline",
        onClick: () => o(),
        children: a ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(wt, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, T1 = ({
  commentId: e,
  dislikesEnabled: t,
  open: r,
  onOpenChange: n
}) => {
  const {
    data: o,
    isLoading: i,
    isError: a,
    fetchNextPage: s,
    hasNextPage: c,
    isFetchingNextPage: u
  } = b1(e ?? "", {
    dislikesEnabled: t,
    enabled: r && !!e
  }), { data: f, isLoading: d, isError: p } = f1(e ?? "", {
    dislikesEnabled: t,
    enabled: r && !!e
  }), h = i || d, y = p || a && !f, m = f?.comments?.[0], b = o?.comments || [];
  return /* @__PURE__ */ l.jsx(Hp, { open: r, onOpenChange: n, children: /* @__PURE__ */ l.jsxs(Vp, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[420px]", children: [
    /* @__PURE__ */ l.jsx(Gp, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ l.jsx(Kp, { className: "text-md", children: "Thread" }) }),
    m?.post && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: m.post.title }),
          m.post.excerpt && /* @__PURE__ */ l.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: m.post.excerpt })
        ] }),
        m.post.feature_image && /* @__PURE__ */ l.jsx(
          "img",
          {
            alt: m.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: m.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Dp, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ l.jsx("div", { children: h ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(wt, { size: "lg" }) }) : y || !m ? /* @__PURE__ */ l.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ l.jsx(
      Ji,
      {
        actions: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: () => n(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ l.jsx(Qi, {})
      }
    ) }) : /* @__PURE__ */ l.jsx(
      P1,
      {
        dislikesEnabled: t,
        fetchNextPage: s,
        hasNextPage: c,
        isFetchingNextPage: u,
        replies: b,
        selectedComment: m,
        selectedCommentId: e ?? ""
      }
    ) })
  ] }) });
}, Zo = /* @__PURE__ */ new Map(), ca = "ghostVirtualListScrollPosition", Jc = 150, E1 = 500;
function Wo() {
  if (!(typeof window > "u"))
    return window.history.state;
}
function ua(e) {
  const t = e?.key;
  if (typeof t == "string" || typeof t == "number")
    return String(t);
  const r = e?.idx;
  if (typeof r == "number")
    return String(r);
}
function Xc(e, t) {
  const r = ua(e);
  if (r)
    return `${r}::${t}`;
}
function O1(e, t) {
  const r = e?.[ca];
  if (!r || typeof r != "object")
    return;
  const n = r[t];
  if (typeof n == "number")
    return n;
}
function R1(e, t, r) {
  if (typeof window > "u")
    return;
  const n = e?.[ca], o = {
    ...e ?? {},
    [ca]: {
      ...n && typeof n == "object" ? n : {},
      [t]: r
    }
  };
  window.history.replaceState(o, "");
}
function A1({ parentRef: e, enabled: t = !0, isLoading: r = !1 }) {
  const n = lp(), [o, i] = pe(null), a = ee(null), s = ee(0), c = ee(0), u = ee(0), f = ee(null), d = ee(/* @__PURE__ */ new Set()), p = n.pathname + n.search;
  je(() => {
    if (!t || !e.current)
      return;
    const h = Qp(e.current);
    i(h);
  }, [t, e]), je(() => {
    if (!t || !o)
      return;
    const h = Wo(), y = ua(h), m = Xc(h, p), b = () => {
      f.current !== null && (window.clearTimeout(f.current), f.current = null);
    }, N = (_) => {
      m && Zo.set(m, _);
      const D = Wo();
      ua(D) === y && R1(D, p, _), c.current = Date.now(), u.current = _;
    }, j = ({ persistToHistory: _ = !0 } = {}) => {
      if (b(), !_) {
        const D = s.current;
        m && Zo.set(m, D), c.current = Date.now(), u.current = D;
        return;
      }
      N(s.current);
    }, E = () => {
      const _ = Date.now();
      if (Math.abs(s.current - u.current) >= E1 || _ - c.current >= Jc) {
        b(), N(s.current);
        return;
      }
      f.current === null && (f.current = window.setTimeout(() => {
        f.current = null, N(s.current);
      }, Jc));
    }, R = () => {
      s.current = o.scrollTop, E();
    }, M = () => {
      j();
    };
    return s.current = o.scrollTop, o.addEventListener("scroll", R), window.addEventListener("pagehide", M), () => {
      j({ persistToHistory: !1 }), o.removeEventListener("scroll", R), window.removeEventListener("pagehide", M);
    };
  }, [t, p, o]), je(() => {
    const h = Wo(), y = Xc(h, p), m = (y ? Zo.get(y) : void 0) ?? O1(h, p);
    if (!(!t || !o || r)) {
      if (m !== void 0 && a.current !== p) {
        a.current = p;
        let b = 0;
        const N = 20, j = () => {
          for (const M of d.current)
            window.clearTimeout(M);
          d.current.clear();
        }, E = (M, _) => {
          const D = window.setTimeout(() => {
            d.current.delete(D), M();
          }, _);
          d.current.add(D);
        }, R = () => {
          if (b += 1, !o)
            return;
          const M = o.scrollTop, _ = o.scrollHeight, D = o.clientHeight, Z = _ - D;
          if (m > Z && b < N) {
            E(R, 100);
            return;
          }
          if (Math.abs(m - M) > 5) {
            const U = Math.min(m, Z);
            o.scrollTop = U;
          }
        };
        return E(R, 150), () => j();
      }
      a.current = p;
    }
  }, [t, p, o, r]);
}
const eu = ({ height: e }) => /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ l.jsx("div", { className: "flex", style: { height: e } }) }), D1 = yr(function(t, r) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ l.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ l.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function k1({
  items: e,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: n,
  fetchNextPage: o,
  resetKey: i,
  onAddFilter: a,
  isLoading: s,
  dislikesEnabled: c
}) {
  const u = ee(null), { visibleItemCount: f, canLoadMore: d, loadMore: p } = Jp(t, { resetKey: i }), [h, y] = gr(), [m, b] = pe(!1), [N, j] = pe(null), { mutate: E } = Ud(), { mutate: R } = qd(), { mutate: M } = oc(), _ = ic(), D = (B) => {
    if (b(B), !B) {
      const T = new URLSearchParams(h);
      T.delete("thread"), y(T, { replace: !0 });
    }
  };
  je(() => {
    const B = h.get("thread");
    if (B) {
      const T = B.match(/^is:(.+)$/);
      if (T && T[1]) {
        const S = T[1];
        j(S), b(!0);
      } else
        b(!1), j(null);
    } else
      b(!1), j(null);
  }, [h]), A1({ parentRef: u, isLoading: s });
  const { visibleItems: Z, spaceBefore: U, spaceAfter: G } = Xp({
    items: e,
    totalItems: f,
    hasNextPage: r,
    isFetchingNextPage: n,
    fetchNextPage: o,
    parentRef: u
  });
  return /* @__PURE__ */ l.jsxs("div", { ref: u, className: "overflow-hidden border-t", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(eu, { height: U }),
          Z.map(({ key: B, virtualItem: T, item: S, props: k }) => T.index > e.length - 1 ? /* @__PURE__ */ l.jsx(D1, { ...k }, B) : /* @__PURE__ */ l.jsxs(
            "div",
            {
              ...k,
              className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
              "data-testid": "comment-list-row",
              onClick: () => {
                m && D(!1);
              },
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ l.jsx(
                    xt,
                    {
                      className: he("mt-0.5 size-6 md:size-8", S.status === "hidden" && "opacity-50"),
                      email: S.member?.email,
                      name: S.member?.name,
                      src: S.member?.avatar_image
                    }
                  ),
                  /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 flex-col gap-3", children: [
                    /* @__PURE__ */ l.jsxs("div", { children: [
                      /* @__PURE__ */ l.jsx(
                        $d,
                        {
                          canComment: S.member?.can_comment,
                          createdAt: S.created_at,
                          isHidden: S.status === "hidden",
                          isPinned: _ && S.pinned,
                          memberId: S.member?.id,
                          memberName: S.member?.name,
                          postTitle: S.post?.title,
                          onAuthorClick: S.member?.id ? () => a("author", S.member.id) : void 0,
                          onPostClick: S.post?.id ? () => a("post", S.post.id) : void 0,
                          onUnpinClick: _ ? () => M({ id: S.id }) : void 0
                        }
                      ),
                      S.in_reply_to_snippet && /* @__PURE__ */ l.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl ${S.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ l.jsx(
                          fa,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: ac(h, S.in_reply_to_id || S.parent_id) || "",
                            onClick: (A) => {
                              A.stopPropagation();
                            },
                            children: S.in_reply_to_snippet
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ l.jsx(Fd, { item: S }),
                    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-row flex-nowrap items-center gap-3", children: [
                      S.status === "published" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => E({ id: S.id }), children: [
                        /* @__PURE__ */ l.jsx(hl, {}),
                        "Hide"
                      ] }),
                      S.status === "hidden" && /* @__PURE__ */ l.jsxs(le, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => R({ id: S.id }), children: [
                        /* @__PURE__ */ l.jsx(ll, {}),
                        "Show"
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        Yd,
                        {
                          className: "ml-2",
                          comment: S,
                          dislikesEnabled: c
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        zd,
                        {
                          comment: S
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { children: S.post?.feature_image ? /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    alt: S.post.title || "Post feature image",
                    className: `hidden aspect-video w-36 rounded object-cover lg:block ${S.status === "hidden" && "opacity-50"}`,
                    src: S.post.feature_image
                  }
                ) : null })
              ]
            },
            B
          )),
          /* @__PURE__ */ l.jsx(eu, { height: G })
        ] })
      }
    ),
    d && /* @__PURE__ */ l.jsx(eh, { isLoading: n, onClick: p }),
    /* @__PURE__ */ l.jsx(
      T1,
      {
        commentId: N,
        dislikesEnabled: c,
        open: m,
        onOpenChange: D
      }
    )
  ] });
}
var Pn = {}, Ho = {}, Vo = {}, Go, tu;
function Wd() {
  return tu || (tu = 1, Go = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Go;
}
var Ko, ru;
function Ao() {
  if (ru) return Ko;
  ru = 1;
  var e = Wd();
  return Ko = function() {
    return e() && !!Symbol.toStringTag;
  }, Ko;
}
var Qo, nu;
function Hd() {
  return nu || (nu = 1, Qo = Object), Qo;
}
var Jo, ou;
function I1() {
  return ou || (ou = 1, Jo = Error), Jo;
}
var Xo, iu;
function C1() {
  return iu || (iu = 1, Xo = EvalError), Xo;
}
var ei, au;
function M1() {
  return au || (au = 1, ei = RangeError), ei;
}
var ti, su;
function _1() {
  return su || (su = 1, ti = ReferenceError), ti;
}
var ri, cu;
function Vd() {
  return cu || (cu = 1, ri = SyntaxError), ri;
}
var ni, uu;
function gn() {
  return uu || (uu = 1, ni = TypeError), ni;
}
var oi, lu;
function F1() {
  return lu || (lu = 1, oi = URIError), oi;
}
var ii, fu;
function B1() {
  return fu || (fu = 1, ii = Math.abs), ii;
}
var ai, du;
function L1() {
  return du || (du = 1, ai = Math.floor), ai;
}
var si, pu;
function U1() {
  return pu || (pu = 1, si = Math.max), si;
}
var ci, hu;
function q1() {
  return hu || (hu = 1, ci = Math.min), ci;
}
var ui, mu;
function $1() {
  return mu || (mu = 1, ui = Math.pow), ui;
}
var li, yu;
function z1() {
  return yu || (yu = 1, li = Math.round), li;
}
var fi, gu;
function Y1() {
  return gu || (gu = 1, fi = Number.isNaN || function(t) {
    return t !== t;
  }), fi;
}
var di, bu;
function Z1() {
  if (bu) return di;
  bu = 1;
  var e = /* @__PURE__ */ Y1();
  return di = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, di;
}
var pi, vu;
function W1() {
  return vu || (vu = 1, pi = Object.getOwnPropertyDescriptor), pi;
}
var hi, xu;
function Cr() {
  if (xu) return hi;
  xu = 1;
  var e = /* @__PURE__ */ W1();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return hi = e, hi;
}
var mi, wu;
function Do() {
  if (wu) return mi;
  wu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return mi = e, mi;
}
var yi, ju;
function H1() {
  if (ju) return yi;
  ju = 1;
  var e = typeof Symbol < "u" && Symbol, t = Wd();
  return yi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, yi;
}
var gi, Su;
function Gd() {
  return Su || (Su = 1, gi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), gi;
}
var bi, Nu;
function Kd() {
  if (Nu) return bi;
  Nu = 1;
  var e = /* @__PURE__ */ Hd();
  return bi = e.getPrototypeOf || null, bi;
}
var vi, Pu;
function V1() {
  if (Pu) return vi;
  Pu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(c, u) {
    for (var f = [], d = 0; d < c.length; d += 1)
      f[d] = c[d];
    for (var p = 0; p < u.length; p += 1)
      f[p + c.length] = u[p];
    return f;
  }, i = function(c, u) {
    for (var f = [], d = u, p = 0; d < c.length; d += 1, p += 1)
      f[p] = c[d];
    return f;
  }, a = function(s, c) {
    for (var u = "", f = 0; f < s.length; f += 1)
      u += s[f], f + 1 < s.length && (u += c);
    return u;
  };
  return vi = function(c) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var f = i(arguments, 1), d, p = function() {
      if (this instanceof d) {
        var N = u.apply(
          this,
          o(f, arguments)
        );
        return Object(N) === N ? N : this;
      }
      return u.apply(
        c,
        o(f, arguments)
      );
    }, h = r(0, u.length - f.length), y = [], m = 0; m < h; m++)
      y[m] = "$" + m;
    if (d = Function("binder", "return function (" + a(y, ",") + "){ return binder.apply(this,arguments); }")(p), u.prototype) {
      var b = function() {
      };
      b.prototype = u.prototype, d.prototype = new b(), b.prototype = null;
    }
    return d;
  }, vi;
}
var xi, Tu;
function bn() {
  if (Tu) return xi;
  Tu = 1;
  var e = V1();
  return xi = Function.prototype.bind || e, xi;
}
var wi, Eu;
function sc() {
  return Eu || (Eu = 1, wi = Function.prototype.call), wi;
}
var ji, Ou;
function cc() {
  return Ou || (Ou = 1, ji = Function.prototype.apply), ji;
}
var Si, Ru;
function G1() {
  return Ru || (Ru = 1, Si = typeof Reflect < "u" && Reflect && Reflect.apply), Si;
}
var Ni, Au;
function Qd() {
  if (Au) return Ni;
  Au = 1;
  var e = bn(), t = cc(), r = sc(), n = G1();
  return Ni = n || e.call(r, t), Ni;
}
var Pi, Du;
function uc() {
  if (Du) return Pi;
  Du = 1;
  var e = bn(), t = /* @__PURE__ */ gn(), r = sc(), n = Qd();
  return Pi = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, Pi;
}
var Ti, ku;
function K1() {
  if (ku) return Ti;
  ku = 1;
  var e = uc(), t = /* @__PURE__ */ Cr(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return Ti = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, Ti;
}
var Ei, Iu;
function lc() {
  if (Iu) return Ei;
  Iu = 1;
  var e = Gd(), t = Kd(), r = /* @__PURE__ */ K1();
  return Ei = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, Ei;
}
var Oi, Cu;
function Jd() {
  if (Cu) return Oi;
  Cu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = bn();
  return Oi = r.call(e, t), Oi;
}
var Ri, Mu;
function Xd() {
  if (Mu) return Ri;
  Mu = 1;
  var e, t = /* @__PURE__ */ Hd(), r = /* @__PURE__ */ I1(), n = /* @__PURE__ */ C1(), o = /* @__PURE__ */ M1(), i = /* @__PURE__ */ _1(), a = /* @__PURE__ */ Vd(), s = /* @__PURE__ */ gn(), c = /* @__PURE__ */ F1(), u = /* @__PURE__ */ B1(), f = /* @__PURE__ */ L1(), d = /* @__PURE__ */ U1(), p = /* @__PURE__ */ q1(), h = /* @__PURE__ */ $1(), y = /* @__PURE__ */ z1(), m = /* @__PURE__ */ Z1(), b = Function, N = function(L) {
    try {
      return b('"use strict"; return (' + L + ").constructor;")();
    } catch {
    }
  }, j = /* @__PURE__ */ Cr(), E = /* @__PURE__ */ Do(), R = function() {
    throw new s();
  }, M = j ? (function() {
    try {
      return arguments.callee, R;
    } catch {
      try {
        return j(arguments, "callee").get;
      } catch {
        return R;
      }
    }
  })() : R, _ = H1()(), D = lc(), Z = Kd(), U = Gd(), G = cc(), B = sc(), T = {}, S = typeof Uint8Array > "u" || !D ? e : D(Uint8Array), k = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": _ && D ? D([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": T,
    "%AsyncGenerator%": T,
    "%AsyncGeneratorFunction%": T,
    "%AsyncIteratorPrototype%": T,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": b,
    "%GeneratorFunction%": T,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": _ && D ? D(D([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !_ || !D ? e : D((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": j,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !_ || !D ? e : D((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": _ && D ? D(""[Symbol.iterator]()) : e,
    "%Symbol%": _ ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": M,
    "%TypedArray%": S,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": B,
    "%Function.prototype.apply%": G,
    "%Object.defineProperty%": E,
    "%Object.getPrototypeOf%": Z,
    "%Math.abs%": u,
    "%Math.floor%": f,
    "%Math.max%": d,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": y,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": U
  };
  if (D)
    try {
      null.error;
    } catch (L) {
      var C = D(D(L));
      k["%Error.prototype%"] = C;
    }
  var A = function L(I) {
    var z;
    if (I === "%AsyncFunction%")
      z = N("async function () {}");
    else if (I === "%GeneratorFunction%")
      z = N("function* () {}");
    else if (I === "%AsyncGeneratorFunction%")
      z = N("async function* () {}");
    else if (I === "%AsyncGenerator%") {
      var q = L("%AsyncGeneratorFunction%");
      q && (z = q.prototype);
    } else if (I === "%AsyncIteratorPrototype%") {
      var ne = L("%AsyncGenerator%");
      ne && D && (z = D(ne.prototype));
    }
    return k[I] = z, z;
  }, P = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, ie = bn(), K = /* @__PURE__ */ Jd(), O = ie.call(B, Array.prototype.concat), pt = ie.call(G, Array.prototype.splice), g = ie.call(B, String.prototype.replace), v = ie.call(B, String.prototype.slice), w = ie.call(B, RegExp.prototype.exec), F = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, W = /\\(\\)?/g, V = function(I) {
    var z = v(I, 0, 1), q = v(I, -1);
    if (z === "%" && q !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (q === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ne = [];
    return g(I, F, function(oe, de, X, tt) {
      ne[ne.length] = X ? g(tt, W, "$1") : de || oe;
    }), ne;
  }, $ = function(I, z) {
    var q = I, ne;
    if (K(P, q) && (ne = P[q], q = "%" + ne[0] + "%"), K(k, q)) {
      var oe = k[q];
      if (oe === T && (oe = A(q)), typeof oe > "u" && !z)
        throw new s("intrinsic " + I + " exists, but is not available. Please file an issue!");
      return {
        alias: ne,
        name: q,
        value: oe
      };
    }
    throw new a("intrinsic " + I + " does not exist!");
  };
  return Ri = function(I, z) {
    if (typeof I != "string" || I.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof z != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (w(/^%?[^%]*%?$/, I) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var q = V(I), ne = q.length > 0 ? q[0] : "", oe = $("%" + ne + "%", z), de = oe.name, X = oe.value, tt = !1, Ye = oe.alias;
    Ye && (ne = Ye[0], pt(q, O([0, 1], Ye)));
    for (var x = 1, ve = !0; x < q.length; x += 1) {
      var Ze = q[x], xn = v(Ze, 0, 1), wn = v(Ze, -1);
      if ((xn === '"' || xn === "'" || xn === "`" || wn === '"' || wn === "'" || wn === "`") && xn !== wn)
        throw new a("property names with quotes must have matching quotes");
      if ((Ze === "constructor" || !ve) && (tt = !0), ne += "." + Ze, de = "%" + ne + "%", K(k, de))
        X = k[de];
      else if (X != null) {
        if (!(Ze in X)) {
          if (!z)
            throw new s("base intrinsic for " + I + " exists, but the property is not available.");
          return;
        }
        if (j && x + 1 >= q.length) {
          var jn = j(X, Ze);
          ve = !!jn, ve && "get" in jn && !("originalValue" in jn.get) ? X = jn.get : X = X[Ze];
        } else
          ve = K(X, Ze), X = X[Ze];
        ve && !tt && (k[de] = X);
      }
    }
    return X;
  }, Ri;
}
var Ai, _u;
function vn() {
  if (_u) return Ai;
  _u = 1;
  var e = /* @__PURE__ */ Xd(), t = uc(), r = t([e("%String.prototype.indexOf%")]);
  return Ai = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ai;
}
var Di, Fu;
function Q1() {
  if (Fu) return Di;
  Fu = 1;
  var e = Ao()(), t = /* @__PURE__ */ vn(), r = t("Object.prototype.toString"), n = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : r(s) === "[object Arguments]";
  }, o = function(s) {
    return n(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && r(s) !== "[object Array]" && "callee" in s && r(s.callee) === "[object Function]";
  }, i = (function() {
    return n(arguments);
  })();
  return n.isLegacyArguments = o, Di = i ? n : o, Di;
}
var ki, Bu;
function J1() {
  if (Bu) return ki;
  Bu = 1;
  var e = /* @__PURE__ */ vn(), t = Ao()(), r = /* @__PURE__ */ Jd(), n = /* @__PURE__ */ Cr(), o;
  if (t) {
    var i = e("RegExp.prototype.exec"), a = {}, s = function() {
      throw a;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), o = function(p) {
      if (!p || typeof p != "object")
        return !1;
      var h = (
        /** @type {NonNullable<typeof gOPD>} */
        n(
          /** @type {{ lastIndex?: unknown }} */
          p,
          "lastIndex"
        )
      ), y = h && r(h, "value");
      if (!y)
        return !1;
      try {
        i(
          p,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (m) {
        return m === a;
      }
    };
  } else {
    var u = e("Object.prototype.toString"), f = "[object RegExp]";
    o = function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : u(p) === f;
    };
  }
  return ki = o, ki;
}
var Ii, Lu;
function X1() {
  if (Lu) return Ii;
  Lu = 1;
  var e = /* @__PURE__ */ vn(), t = J1(), r = e("RegExp.prototype.exec"), n = /* @__PURE__ */ gn();
  return Ii = function(i) {
    if (!t(i))
      throw new n("`regex` must be a RegExp");
    return function(s) {
      return r(i, s) !== null;
    };
  }, Ii;
}
var Ci, Uu;
function e0() {
  if (Uu) return Ci;
  Uu = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return Ci = () => e, Ci;
}
var Mi, qu;
function t0() {
  if (qu) return Mi;
  qu = 1;
  var e = /* @__PURE__ */ vn(), t = /* @__PURE__ */ X1(), r = t(/^\s*(?:function)?\*/), n = Ao()(), o = lc(), i = e("Object.prototype.toString"), a = e("Function.prototype.toString"), s = /* @__PURE__ */ e0();
  return Mi = function(u) {
    if (typeof u != "function")
      return !1;
    if (r(a(u)))
      return !0;
    if (!n) {
      var f = i(u);
      return f === "[object GeneratorFunction]";
    }
    if (!o)
      return !1;
    var d = s();
    return d && o(u) === d.prototype;
  }, Mi;
}
var _i, $u;
function r0() {
  if ($u) return _i;
  $u = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, r, n;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      r = Object.defineProperty({}, "length", {
        get: function() {
          throw n;
        }
      }), n = {}, t(function() {
        throw 42;
      }, null, r);
    } catch (j) {
      j !== n && (t = null);
    }
  else
    t = null;
  var o = /^\s*class\b/, i = function(E) {
    try {
      var R = e.call(E);
      return o.test(R);
    } catch {
      return !1;
    }
  }, a = function(E) {
    try {
      return i(E) ? !1 : (e.call(E), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", u = "[object Function]", f = "[object GeneratorFunction]", d = "[object HTMLAllCollection]", p = "[object HTML document.all class]", h = "[object HTMLCollection]", y = typeof Symbol == "function" && !!Symbol.toStringTag, m = !(0 in [,]), b = function() {
    return !1;
  };
  if (typeof document == "object") {
    var N = document.all;
    s.call(N) === s.call(document.all) && (b = function(E) {
      if ((m || !E) && (typeof E > "u" || typeof E == "object"))
        try {
          var R = s.call(E);
          return (R === d || R === p || R === h || R === c) && E("") == null;
        } catch {
        }
      return !1;
    });
  }
  return _i = t ? function(E) {
    if (b(E))
      return !0;
    if (!E || typeof E != "function" && typeof E != "object")
      return !1;
    try {
      t(E, null, r);
    } catch (R) {
      if (R !== n)
        return !1;
    }
    return !i(E) && a(E);
  } : function(E) {
    if (b(E))
      return !0;
    if (!E || typeof E != "function" && typeof E != "object")
      return !1;
    if (y)
      return a(E);
    if (i(E))
      return !1;
    var R = s.call(E);
    return R !== u && R !== f && !/^\[object HTML/.test(R) ? !1 : a(E);
  }, _i;
}
var Fi, zu;
function n0() {
  if (zu) return Fi;
  zu = 1;
  var e = r0(), t = Object.prototype.toString, r = Object.prototype.hasOwnProperty, n = function(c, u, f) {
    for (var d = 0, p = c.length; d < p; d++)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  }, o = function(c, u, f) {
    for (var d = 0, p = c.length; d < p; d++)
      f == null ? u(c.charAt(d), d, c) : u.call(f, c.charAt(d), d, c);
  }, i = function(c, u, f) {
    for (var d in c)
      r.call(c, d) && (f == null ? u(c[d], d, c) : u.call(f, c[d], d, c));
  };
  function a(s) {
    return t.call(s) === "[object Array]";
  }
  return Fi = function(c, u, f) {
    if (!e(u))
      throw new TypeError("iterator must be a function");
    var d;
    arguments.length >= 3 && (d = f), a(c) ? n(c, u, d) : typeof c == "string" ? o(c, u, d) : i(c, u, d);
  }, Fi;
}
var Bi, Yu;
function o0() {
  return Yu || (Yu = 1, Bi = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), Bi;
}
var Li, Zu;
function i0() {
  if (Zu) return Li;
  Zu = 1;
  var e = /* @__PURE__ */ o0(), t = typeof globalThis > "u" ? ul : globalThis;
  return Li = function() {
    for (var n = [], o = 0; o < e.length; o++)
      typeof t[e[o]] == "function" && (n[n.length] = e[o]);
    return n;
  }, Li;
}
var Ui = { exports: {} }, qi, Wu;
function a0() {
  if (Wu) return qi;
  Wu = 1;
  var e = /* @__PURE__ */ Do(), t = /* @__PURE__ */ Vd(), r = /* @__PURE__ */ gn(), n = /* @__PURE__ */ Cr();
  return qi = function(i, a, s) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new r("`obj` must be an object or a function`");
    if (typeof a != "string" && typeof a != "symbol")
      throw new r("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new r("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new r("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new r("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new r("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, u = arguments.length > 4 ? arguments[4] : null, f = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, p = !!n && n(i, a);
    if (e)
      e(i, a, {
        configurable: f === null && p ? p.configurable : !f,
        enumerable: c === null && p ? p.enumerable : !c,
        value: s,
        writable: u === null && p ? p.writable : !u
      });
    else if (d || !c && !u && !f)
      i[a] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, qi;
}
var $i, Hu;
function s0() {
  if (Hu) return $i;
  Hu = 1;
  var e = /* @__PURE__ */ Do(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, $i = t, $i;
}
var zi, Vu;
function c0() {
  if (Vu) return zi;
  Vu = 1;
  var e = /* @__PURE__ */ Xd(), t = /* @__PURE__ */ a0(), r = /* @__PURE__ */ s0()(), n = /* @__PURE__ */ Cr(), o = /* @__PURE__ */ gn(), i = e("%Math.floor%");
  return zi = function(s, c) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || i(c) !== c)
      throw new o("`length` must be a positive 32-bit integer");
    var u = arguments.length > 2 && !!arguments[2], f = !0, d = !0;
    if ("length" in s && n) {
      var p = n(s, "length");
      p && !p.configurable && (f = !1), p && !p.writable && (d = !1);
    }
    return (f || d || !u) && (r ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, zi;
}
var Yi, Gu;
function u0() {
  if (Gu) return Yi;
  Gu = 1;
  var e = bn(), t = cc(), r = Qd();
  return Yi = function() {
    return r(e, t, arguments);
  }, Yi;
}
var Ku;
function l0() {
  return Ku || (Ku = 1, (function(e) {
    var t = /* @__PURE__ */ c0(), r = /* @__PURE__ */ Do(), n = uc(), o = u0();
    e.exports = function(a) {
      var s = n(arguments), c = 1 + a.length - (arguments.length - 1);
      return t(
        s,
        c > 0 ? c : 0,
        !0
      );
    }, r ? r(e.exports, "apply", { value: o }) : e.exports.apply = o;
  })(Ui)), Ui.exports;
}
var Zi, Qu;
function ep() {
  if (Qu) return Zi;
  Qu = 1;
  var e = n0(), t = /* @__PURE__ */ i0(), r = l0(), n = /* @__PURE__ */ vn(), o = /* @__PURE__ */ Cr(), i = lc(), a = n("Object.prototype.toString"), s = Ao()(), c = typeof globalThis > "u" ? ul : globalThis, u = t(), f = n("String.prototype.slice"), d = n("Array.prototype.indexOf", !0) || function(b, N) {
    for (var j = 0; j < b.length; j += 1)
      if (b[j] === N)
        return j;
    return -1;
  }, p = { __proto__: null };
  s && o && i ? e(u, function(m) {
    var b = new c[m]();
    if (Symbol.toStringTag in b && i) {
      var N = i(b), j = o(N, Symbol.toStringTag);
      if (!j && N) {
        var E = i(N);
        j = o(E, Symbol.toStringTag);
      }
      if (j && j.get) {
        var R = r(j.get);
        p[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + m
        ] = R;
      }
    }
  }) : e(u, function(m) {
    var b = new c[m](), N = b.slice || b.set;
    if (N) {
      var j = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        r(N)
      );
      p[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + m
      ] = j;
    }
  });
  var h = function(b) {
    var N = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(j, E) {
        if (!N)
          try {
            "$" + j(b) === E && (N = /** @type {import('.').TypedArrayName} */
            f(E, 1));
          } catch {
          }
      }
    ), N;
  }, y = function(b) {
    var N = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      p,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(j, E) {
        if (!N)
          try {
            j(b), N = /** @type {import('.').TypedArrayName} */
            f(E, 1);
          } catch {
          }
      }
    ), N;
  };
  return Zi = function(b) {
    if (!b || typeof b != "object")
      return !1;
    if (!s) {
      var N = f(a(b), 8, -1);
      return d(u, N) > -1 ? N : N !== "Object" ? !1 : y(b);
    }
    return o ? h(b) : null;
  }, Zi;
}
var Wi, Ju;
function f0() {
  if (Ju) return Wi;
  Ju = 1;
  var e = /* @__PURE__ */ ep();
  return Wi = function(r) {
    return !!e(r);
  }, Wi;
}
var Xu;
function d0() {
  return Xu || (Xu = 1, (function(e) {
    var t = /* @__PURE__ */ Q1(), r = t0(), n = /* @__PURE__ */ ep(), o = /* @__PURE__ */ f0();
    function i(x) {
      return x.call.bind(x);
    }
    var a = typeof BigInt < "u", s = typeof Symbol < "u", c = i(Object.prototype.toString), u = i(Number.prototype.valueOf), f = i(String.prototype.valueOf), d = i(Boolean.prototype.valueOf);
    if (a)
      var p = i(BigInt.prototype.valueOf);
    if (s)
      var h = i(Symbol.prototype.valueOf);
    function y(x, ve) {
      if (typeof x != "object")
        return !1;
      try {
        return ve(x), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
    function m(x) {
      return typeof Promise < "u" && x instanceof Promise || x !== null && typeof x == "object" && typeof x.then == "function" && typeof x.catch == "function";
    }
    e.isPromise = m;
    function b(x) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(x) : o(x) || v(x);
    }
    e.isArrayBufferView = b;
    function N(x) {
      return n(x) === "Uint8Array";
    }
    e.isUint8Array = N;
    function j(x) {
      return n(x) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = j;
    function E(x) {
      return n(x) === "Uint16Array";
    }
    e.isUint16Array = E;
    function R(x) {
      return n(x) === "Uint32Array";
    }
    e.isUint32Array = R;
    function M(x) {
      return n(x) === "Int8Array";
    }
    e.isInt8Array = M;
    function _(x) {
      return n(x) === "Int16Array";
    }
    e.isInt16Array = _;
    function D(x) {
      return n(x) === "Int32Array";
    }
    e.isInt32Array = D;
    function Z(x) {
      return n(x) === "Float32Array";
    }
    e.isFloat32Array = Z;
    function U(x) {
      return n(x) === "Float64Array";
    }
    e.isFloat64Array = U;
    function G(x) {
      return n(x) === "BigInt64Array";
    }
    e.isBigInt64Array = G;
    function B(x) {
      return n(x) === "BigUint64Array";
    }
    e.isBigUint64Array = B;
    function T(x) {
      return c(x) === "[object Map]";
    }
    T.working = typeof Map < "u" && T(/* @__PURE__ */ new Map());
    function S(x) {
      return typeof Map > "u" ? !1 : T.working ? T(x) : x instanceof Map;
    }
    e.isMap = S;
    function k(x) {
      return c(x) === "[object Set]";
    }
    k.working = typeof Set < "u" && k(/* @__PURE__ */ new Set());
    function C(x) {
      return typeof Set > "u" ? !1 : k.working ? k(x) : x instanceof Set;
    }
    e.isSet = C;
    function A(x) {
      return c(x) === "[object WeakMap]";
    }
    A.working = typeof WeakMap < "u" && A(/* @__PURE__ */ new WeakMap());
    function P(x) {
      return typeof WeakMap > "u" ? !1 : A.working ? A(x) : x instanceof WeakMap;
    }
    e.isWeakMap = P;
    function ie(x) {
      return c(x) === "[object WeakSet]";
    }
    ie.working = typeof WeakSet < "u" && ie(/* @__PURE__ */ new WeakSet());
    function K(x) {
      return ie(x);
    }
    e.isWeakSet = K;
    function O(x) {
      return c(x) === "[object ArrayBuffer]";
    }
    O.working = typeof ArrayBuffer < "u" && O(new ArrayBuffer());
    function pt(x) {
      return typeof ArrayBuffer > "u" ? !1 : O.working ? O(x) : x instanceof ArrayBuffer;
    }
    e.isArrayBuffer = pt;
    function g(x) {
      return c(x) === "[object DataView]";
    }
    g.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && g(new DataView(new ArrayBuffer(1), 0, 1));
    function v(x) {
      return typeof DataView > "u" ? !1 : g.working ? g(x) : x instanceof DataView;
    }
    e.isDataView = v;
    var w = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function F(x) {
      return c(x) === "[object SharedArrayBuffer]";
    }
    function W(x) {
      return typeof w > "u" ? !1 : (typeof F.working > "u" && (F.working = F(new w())), F.working ? F(x) : x instanceof w);
    }
    e.isSharedArrayBuffer = W;
    function V(x) {
      return c(x) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = V;
    function $(x) {
      return c(x) === "[object Map Iterator]";
    }
    e.isMapIterator = $;
    function L(x) {
      return c(x) === "[object Set Iterator]";
    }
    e.isSetIterator = L;
    function I(x) {
      return c(x) === "[object Generator]";
    }
    e.isGeneratorObject = I;
    function z(x) {
      return c(x) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = z;
    function q(x) {
      return y(x, u);
    }
    e.isNumberObject = q;
    function ne(x) {
      return y(x, f);
    }
    e.isStringObject = ne;
    function oe(x) {
      return y(x, d);
    }
    e.isBooleanObject = oe;
    function de(x) {
      return a && y(x, p);
    }
    e.isBigIntObject = de;
    function X(x) {
      return s && y(x, h);
    }
    e.isSymbolObject = X;
    function tt(x) {
      return q(x) || ne(x) || oe(x) || de(x) || X(x);
    }
    e.isBoxedPrimitive = tt;
    function Ye(x) {
      return typeof Uint8Array < "u" && (pt(x) || W(x));
    }
    e.isAnyArrayBuffer = Ye, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(x) {
      Object.defineProperty(e, x, {
        enumerable: !1,
        value: function() {
          throw new Error(x + " is not supported in userland");
        }
      });
    });
  })(Vo)), Vo;
}
var Hi, el;
function p0() {
  return el || (el = 1, Hi = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Hi;
}
var Tn = { exports: {} }, tl;
function h0() {
  return tl || (tl = 1, typeof Object.create == "function" ? Tn.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Tn.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
    }
  }), Tn.exports;
}
var rl;
function m0() {
  return rl || (rl = 1, (function(e) {
    var t = Object.getOwnPropertyDescriptors || function(v) {
      for (var w = Object.keys(v), F = {}, W = 0; W < w.length; W++)
        F[w[W]] = Object.getOwnPropertyDescriptor(v, w[W]);
      return F;
    }, r = /%[sdj%]/g;
    e.format = function(g) {
      if (!M(g)) {
        for (var v = [], w = 0; w < arguments.length; w++)
          v.push(a(arguments[w]));
        return v.join(" ");
      }
      for (var w = 1, F = arguments, W = F.length, V = String(g).replace(r, function(L) {
        if (L === "%%") return "%";
        if (w >= W) return L;
        switch (L) {
          case "%s":
            return String(F[w++]);
          case "%d":
            return Number(F[w++]);
          case "%j":
            try {
              return JSON.stringify(F[w++]);
            } catch {
              return "[Circular]";
            }
          default:
            return L;
        }
      }), $ = F[w]; w < W; $ = F[++w])
        j($) || !U($) ? V += " " + $ : V += " " + a($);
      return V;
    }, e.deprecate = function(g, v) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return g;
      if (typeof process > "u")
        return function() {
          return e.deprecate(g, v).apply(this, arguments);
        };
      var w = !1;
      function F() {
        if (!w) {
          if (process.throwDeprecation)
            throw new Error(v);
          process.traceDeprecation ? console.trace(v) : console.error(v), w = !0;
        }
        return g.apply(this, arguments);
      }
      return F;
    };
    var n = {}, o = /^$/;
    if (process.env.NODE_DEBUG) {
      var i = process.env.NODE_DEBUG;
      i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), o = new RegExp("^" + i + "$", "i");
    }
    e.debuglog = function(g) {
      if (g = g.toUpperCase(), !n[g])
        if (o.test(g)) {
          var v = process.pid;
          n[g] = function() {
            var w = e.format.apply(e, arguments);
            console.error("%s %d: %s", g, v, w);
          };
        } else
          n[g] = function() {
          };
      return n[g];
    };
    function a(g, v) {
      var w = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && (w.depth = arguments[2]), arguments.length >= 4 && (w.colors = arguments[3]), N(v) ? w.showHidden = v : v && e._extend(w, v), D(w.showHidden) && (w.showHidden = !1), D(w.depth) && (w.depth = 2), D(w.colors) && (w.colors = !1), D(w.customInspect) && (w.customInspect = !0), w.colors && (w.stylize = s), f(w, g, w.depth);
    }
    e.inspect = a, a.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, a.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function s(g, v) {
      var w = a.styles[v];
      return w ? "\x1B[" + a.colors[w][0] + "m" + g + "\x1B[" + a.colors[w][1] + "m" : g;
    }
    function c(g, v) {
      return g;
    }
    function u(g) {
      var v = {};
      return g.forEach(function(w, F) {
        v[w] = !0;
      }), v;
    }
    function f(g, v, w) {
      if (g.customInspect && v && T(v.inspect) && // Filter out the util module, it's inspect function is special
      v.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(v.constructor && v.constructor.prototype === v)) {
        var F = v.inspect(w, g);
        return M(F) || (F = f(g, F, w)), F;
      }
      var W = d(g, v);
      if (W)
        return W;
      var V = Object.keys(v), $ = u(V);
      if (g.showHidden && (V = Object.getOwnPropertyNames(v)), B(v) && (V.indexOf("message") >= 0 || V.indexOf("description") >= 0))
        return p(v);
      if (V.length === 0) {
        if (T(v)) {
          var L = v.name ? ": " + v.name : "";
          return g.stylize("[Function" + L + "]", "special");
        }
        if (Z(v))
          return g.stylize(RegExp.prototype.toString.call(v), "regexp");
        if (G(v))
          return g.stylize(Date.prototype.toString.call(v), "date");
        if (B(v))
          return p(v);
      }
      var I = "", z = !1, q = ["{", "}"];
      if (b(v) && (z = !0, q = ["[", "]"]), T(v)) {
        var ne = v.name ? ": " + v.name : "";
        I = " [Function" + ne + "]";
      }
      if (Z(v) && (I = " " + RegExp.prototype.toString.call(v)), G(v) && (I = " " + Date.prototype.toUTCString.call(v)), B(v) && (I = " " + p(v)), V.length === 0 && (!z || v.length == 0))
        return q[0] + I + q[1];
      if (w < 0)
        return Z(v) ? g.stylize(RegExp.prototype.toString.call(v), "regexp") : g.stylize("[Object]", "special");
      g.seen.push(v);
      var oe;
      return z ? oe = h(g, v, w, $, V) : oe = V.map(function(de) {
        return y(g, v, w, $, de, z);
      }), g.seen.pop(), m(oe, I, q);
    }
    function d(g, v) {
      if (D(v))
        return g.stylize("undefined", "undefined");
      if (M(v)) {
        var w = "'" + JSON.stringify(v).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return g.stylize(w, "string");
      }
      if (R(v))
        return g.stylize("" + v, "number");
      if (N(v))
        return g.stylize("" + v, "boolean");
      if (j(v))
        return g.stylize("null", "null");
    }
    function p(g) {
      return "[" + Error.prototype.toString.call(g) + "]";
    }
    function h(g, v, w, F, W) {
      for (var V = [], $ = 0, L = v.length; $ < L; ++$)
        ie(v, String($)) ? V.push(y(
          g,
          v,
          w,
          F,
          String($),
          !0
        )) : V.push("");
      return W.forEach(function(I) {
        I.match(/^\d+$/) || V.push(y(
          g,
          v,
          w,
          F,
          I,
          !0
        ));
      }), V;
    }
    function y(g, v, w, F, W, V) {
      var $, L, I;
      if (I = Object.getOwnPropertyDescriptor(v, W) || { value: v[W] }, I.get ? I.set ? L = g.stylize("[Getter/Setter]", "special") : L = g.stylize("[Getter]", "special") : I.set && (L = g.stylize("[Setter]", "special")), ie(F, W) || ($ = "[" + W + "]"), L || (g.seen.indexOf(I.value) < 0 ? (j(w) ? L = f(g, I.value, null) : L = f(g, I.value, w - 1), L.indexOf(`
`) > -1 && (V ? L = L.split(`
`).map(function(z) {
        return "  " + z;
      }).join(`
`).slice(2) : L = `
` + L.split(`
`).map(function(z) {
        return "   " + z;
      }).join(`
`))) : L = g.stylize("[Circular]", "special")), D($)) {
        if (V && W.match(/^\d+$/))
          return L;
        $ = JSON.stringify("" + W), $.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? ($ = $.slice(1, -1), $ = g.stylize($, "name")) : ($ = $.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), $ = g.stylize($, "string"));
      }
      return $ + ": " + L;
    }
    function m(g, v, w) {
      var F = g.reduce(function(W, V) {
        return V.indexOf(`
`) >= 0, W + V.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return F > 60 ? w[0] + (v === "" ? "" : v + `
 `) + " " + g.join(`,
  `) + " " + w[1] : w[0] + v + " " + g.join(", ") + " " + w[1];
    }
    e.types = d0();
    function b(g) {
      return Array.isArray(g);
    }
    e.isArray = b;
    function N(g) {
      return typeof g == "boolean";
    }
    e.isBoolean = N;
    function j(g) {
      return g === null;
    }
    e.isNull = j;
    function E(g) {
      return g == null;
    }
    e.isNullOrUndefined = E;
    function R(g) {
      return typeof g == "number";
    }
    e.isNumber = R;
    function M(g) {
      return typeof g == "string";
    }
    e.isString = M;
    function _(g) {
      return typeof g == "symbol";
    }
    e.isSymbol = _;
    function D(g) {
      return g === void 0;
    }
    e.isUndefined = D;
    function Z(g) {
      return U(g) && k(g) === "[object RegExp]";
    }
    e.isRegExp = Z, e.types.isRegExp = Z;
    function U(g) {
      return typeof g == "object" && g !== null;
    }
    e.isObject = U;
    function G(g) {
      return U(g) && k(g) === "[object Date]";
    }
    e.isDate = G, e.types.isDate = G;
    function B(g) {
      return U(g) && (k(g) === "[object Error]" || g instanceof Error);
    }
    e.isError = B, e.types.isNativeError = B;
    function T(g) {
      return typeof g == "function";
    }
    e.isFunction = T;
    function S(g) {
      return g === null || typeof g == "boolean" || typeof g == "number" || typeof g == "string" || typeof g == "symbol" || // ES6 symbol
      typeof g > "u";
    }
    e.isPrimitive = S, e.isBuffer = p0();
    function k(g) {
      return Object.prototype.toString.call(g);
    }
    function C(g) {
      return g < 10 ? "0" + g.toString(10) : g.toString(10);
    }
    var A = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function P() {
      var g = /* @__PURE__ */ new Date(), v = [
        C(g.getHours()),
        C(g.getMinutes()),
        C(g.getSeconds())
      ].join(":");
      return [g.getDate(), A[g.getMonth()], v].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", P(), e.format.apply(e, arguments));
    }, e.inherits = h0(), e._extend = function(g, v) {
      if (!v || !U(v)) return g;
      for (var w = Object.keys(v), F = w.length; F--; )
        g[w[F]] = v[w[F]];
      return g;
    };
    function ie(g, v) {
      return Object.prototype.hasOwnProperty.call(g, v);
    }
    var K = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    e.promisify = function(v) {
      if (typeof v != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (K && v[K]) {
        var w = v[K];
        if (typeof w != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(w, K, {
          value: w,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), w;
      }
      function w() {
        for (var F, W, V = new Promise(function(I, z) {
          F = I, W = z;
        }), $ = [], L = 0; L < arguments.length; L++)
          $.push(arguments[L]);
        $.push(function(I, z) {
          I ? W(I) : F(z);
        });
        try {
          v.apply(this, $);
        } catch (I) {
          W(I);
        }
        return V;
      }
      return Object.setPrototypeOf(w, Object.getPrototypeOf(v)), K && Object.defineProperty(w, K, {
        value: w,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        w,
        t(v)
      );
    }, e.promisify.custom = K;
    function O(g, v) {
      if (!g) {
        var w = new Error("Promise was rejected with a falsy value");
        w.reason = g, g = w;
      }
      return v(g);
    }
    function pt(g) {
      if (typeof g != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function v() {
        for (var w = [], F = 0; F < arguments.length; F++)
          w.push(arguments[F]);
        var W = w.pop();
        if (typeof W != "function")
          throw new TypeError("The last argument must be of type Function");
        var V = this, $ = function() {
          return W.apply(V, arguments);
        };
        g.apply(this, w).then(
          function(L) {
            process.nextTick($.bind(null, null, L));
          },
          function(L) {
            process.nextTick(O.bind(null, L, $));
          }
        );
      }
      return Object.setPrototypeOf(v, Object.getPrototypeOf(g)), Object.defineProperties(
        v,
        t(g)
      ), v;
    }
    e.callbackify = pt;
  })(Ho)), Ho;
}
function ce(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Xt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function fc(e) {
  Xt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || $r(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function tp(e, t) {
  Xt(2, arguments);
  var r = fc(e), n = ce(t);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function rp(e, t) {
  Xt(2, arguments);
  var r = fc(e), n = ce(t);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var o = r.getDate(), i = new Date(r.getTime());
  i.setMonth(r.getMonth() + n + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r);
}
function y0(e, t) {
  if (Xt(2, arguments), !t || $r(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = fc(e), f = n || r ? rp(u, n + r * 12) : u, d = i || o ? tp(f, i + o * 7) : f, p = s + a * 60, h = c + p * 60, y = h * 1e3, m = new Date(d.getTime() + y);
  return m;
}
const g0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: y0
}, Symbol.toStringTag, { value: "Module" })), b0 = /* @__PURE__ */ da(g0);
function v0(e, t) {
  Xt(2, arguments);
  var r = ce(t);
  return tp(e, -r);
}
function x0(e, t) {
  Xt(2, arguments);
  var r = ce(t);
  return rp(e, -r);
}
function w0(e, t) {
  if (Xt(2, arguments), !t || $r(t) !== "object") return /* @__PURE__ */ new Date(NaN);
  var r = t.years ? ce(t.years) : 0, n = t.months ? ce(t.months) : 0, o = t.weeks ? ce(t.weeks) : 0, i = t.days ? ce(t.days) : 0, a = t.hours ? ce(t.hours) : 0, s = t.minutes ? ce(t.minutes) : 0, c = t.seconds ? ce(t.seconds) : 0, u = x0(e, n + r * 12), f = v0(u, i + o * 7), d = s + a * 60, p = c + d * 60, h = p * 1e3, y = new Date(f.getTime() - h);
  return y;
}
const j0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w0
}, Symbol.toStringTag, { value: "Module" })), S0 = /* @__PURE__ */ da(j0);
var Vi, nl;
function N0() {
  if (nl) return Vi;
  nl = 1;
  const e = m0(), n = {
    add: b0,
    sub: S0
  }, o = {
    d: "days",
    w: "weeks",
    M: "months",
    y: "years",
    h: "hours",
    m: "minutes",
    s: "seconds"
  }, i = (a) => a.toISOString().replace("T", " ").replace(/\.[0-9]{3}Z/, "");
  return Vi = {
    ungroup(a) {
      return a.yg ? a.yg : a;
    },
    unescape(a) {
      const s = new RegExp(`\\\\(['"])`, "g");
      return a.replace(s, "$1");
    },
    stringToRegExp(a, s) {
      let c = a.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
      return s === "^" ? c = "^" + c : s === "$" && (c = c + "$"), new RegExp(c, "i");
    },
    relDateToAbsolute(a, s, c) {
      if (this.preserveRelativeDates)
        return { $relativeDate: { op: a, amount: Number(s), unit: o[c] } };
      const u = /* @__PURE__ */ new Date(), f = n[a](u, { [o[c]]: s });
      return i(f);
    },
    debug() {
      if (!process.env.DEBUG || !/nql/.test(process.env.DEBUG))
        return;
      const a = arguments[0], s = Array.prototype.slice.call(arguments, 1), c = [a];
      s.forEach(function(u) {
        c.push(e.inspect(u, !1, null));
      }), console.log.apply(this, c);
    }
  }, Vi;
}
var En = { exports: {} };
const P0 = {}, T0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: P0
}, Symbol.toStringTag, { value: "Module" })), ol = /* @__PURE__ */ da(T0);
var il;
function E0() {
  return il || (il = 1, (function(e, t) {
    var r = (function() {
      var n = function(B, T, S, k) {
        for (S = S || {}, k = B.length; k--; S[B[k]] = T) ;
        return S;
      }, o = [1, 5], i = [1, 7], a = [1, 8], s = [1, 6, 10], c = [1, 9], u = [1, 6, 8, 10], f = [1, 24], d = [1, 25], p = [1, 26], h = [1, 27], y = [1, 28], m = [1, 29], b = [1, 30], N = [1, 17], j = [1, 18], E = [1, 19], R = [21, 22, 23, 24, 25, 29, 30], M = [1, 6, 8, 10, 18], _ = [1, 47], D = [6, 18], Z = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, expressions: 3, expression: 4, andCondition: 5, OR: 6, filterExpr: 7, AND: 8, LPAREN: 9, RPAREN: 10, propExpr: 11, valueExpr: 12, PROP: 13, NOT: 14, REGEXPOP: 15, LBRACKET: 16, inExpr: 17, RBRACKET: 18, OP: 19, VALUE: 20, NULL: 21, TRUE: 22, FALSE: 23, NUMBER: 24, NOW: 25, DATEOP: 26, AMOUNT: 27, INTERVAL: 28, LITERAL: 29, STRING: 30, ADD: 31, SUB: 32, CONTAINS: 33, STARTSWITH: 34, ENDSWITH: 35, GT: 36, LT: 37, GTE: 38, LTE: 39, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 6: "OR", 8: "AND", 9: "LPAREN", 10: "RPAREN", 13: "PROP", 14: "NOT", 16: "LBRACKET", 18: "RBRACKET", 21: "NULL", 22: "TRUE", 23: "FALSE", 24: "NUMBER", 25: "NOW", 27: "AMOUNT", 28: "INTERVAL", 29: "LITERAL", 30: "STRING", 31: "ADD", 32: "SUB", 33: "CONTAINS", 34: "STARTSWITH", 35: "ENDSWITH", 36: "GT", 37: "LT", 38: "GTE", 39: "LTE" },
        productions_: [0, [3, 1], [4, 1], [4, 3], [5, 1], [5, 3], [7, 3], [7, 2], [11, 1], [12, 2], [12, 1], [12, 4], [12, 3], [12, 2], [12, 1], [17, 3], [17, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 4], [20, 1], [20, 1], [26, 1], [26, 1], [15, 2], [15, 2], [15, 2], [19, 1], [19, 1], [19, 1], [19, 1], [19, 1]],
        performAction: function(T, S, k, C, A, P, ie, K) {
          var O = P.length - 1;
          switch (A) {
            case 1:
              return C.debug("expression", P[O]), C.debug("opt", K), P[O] && P[O].yg ? P[O].yg : P[O];
            case 2:
              C.debug("andCondition", P[O]), this.$ = P[O];
              break;
            case 3:
              C.debug("expression OR andCondition", P[O - 2], P[O]), P[O - 2] = P[O - 2].$or ? P[O - 2] : { $or: [C.ungroup(P[O - 2])] }, P[O - 2].$or.push(C.ungroup(P[O])), this.$ = P[O - 2];
              break;
            case 4:
              C.debug("filterExpr", P[O]), this.$ = P[O];
              break;
            case 5:
              C.debug("andCondition AND filterExpr", P[O - 2], P[O]), P[O - 2] = P[O - 2].$and ? P[O - 2] : { $and: [C.ungroup(P[O - 2])] }, P[O - 2].$and.push(C.ungroup(P[O])), this.$ = P[O - 2];
              break;
            case 6:
              C.debug("LPAREN expression RPAREN", P[O - 1]), this.$ = { yg: P[O - 1] };
              break;
            case 7:
              this.$ = { [P[O - 1]]: P[O] };
              break;
            case 8:
              P[O] = P[O].replace(/:$/, ""), P[O] = K.aliases && K.aliases[P[O]] ? K.aliases[P[O]] : P[O], this.$ = P[O];
              break;
            case 9:
              this.$ = { $not: P[O] };
              break;
            case 10:
              this.$ = { $regex: P[O] };
              break;
            case 11:
              this.$ = { $nin: P[O - 1] };
              break;
            case 12:
              this.$ = { $in: P[O - 1] };
              break;
            case 13:
              this.$ = {}, this.$[P[O - 1]] = P[O];
              break;
            case 14:
              this.$ = P[O];
              break;
            case 15:
              this.$.push(P[O]);
              break;
            case 16:
              this.$ = [P[O]];
              break;
            case 17:
              this.$ = null;
              break;
            case 18:
              this.$ = !0;
              break;
            case 19:
              this.$ = !1;
              break;
            case 20:
              this.$ = parseInt(T);
              break;
            case 21:
              this.$ = C.relDateToAbsolute(P[O - 2], P[O - 1], P[O]);
              break;
            case 22:
              this.$ = C.unescape(P[O]);
              break;
            case 23:
              P[O] = P[O].replace(/^'|'$/g, ""), this.$ = C.unescape(P[O]);
              break;
            case 24:
              this.$ = "add";
              break;
            case 25:
              this.$ = "sub";
              break;
            case 26:
              P[O] = P[O].replace(/^'|'$/g, ""), P[O] = C.unescape(P[O]), this.$ = C.stringToRegExp(P[O]);
              break;
            case 27:
              P[O] = P[O].replace(/^'|'$/g, ""), P[O] = C.unescape(P[O]), this.$ = C.stringToRegExp(P[O], "^");
              break;
            case 28:
              P[O] = P[O].replace(/^'|'$/g, ""), P[O] = C.unescape(P[O]), this.$ = C.stringToRegExp(P[O], "$");
              break;
            case 29:
              this.$ = "$ne";
              break;
            case 30:
              this.$ = "$gt";
              break;
            case 31:
              this.$ = "$lt";
              break;
            case 32:
              this.$ = "$gte";
              break;
            case 33:
              this.$ = "$lte";
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 1: [3] }, { 1: [2, 1], 6: a }, n(s, [2, 2], { 8: c }), n(u, [2, 4]), { 4: 10, 5: 3, 7: 4, 9: o, 11: 6, 13: i }, { 12: 11, 14: [1, 12], 15: 13, 16: [1, 14], 19: 15, 20: 16, 21: f, 22: d, 23: p, 24: h, 25: y, 29: m, 30: b, 33: N, 34: j, 35: E, 36: [1, 20], 37: [1, 21], 38: [1, 22], 39: [1, 23] }, n([14, 16, 21, 22, 23, 24, 25, 29, 30, 33, 34, 35, 36, 37, 38, 39], [2, 8]), { 5: 31, 7: 4, 9: o, 11: 6, 13: i }, { 7: 32, 9: o, 11: 6, 13: i }, { 6: a, 10: [1, 33] }, n(u, [2, 7]), n(R, [2, 29], { 15: 34, 16: [1, 35], 33: N, 34: j, 35: E }), n(u, [2, 10]), { 17: 36, 20: 37, 21: f, 22: d, 23: p, 24: h, 25: y, 29: m, 30: b }, { 20: 38, 21: f, 22: d, 23: p, 24: h, 25: y, 29: m, 30: b }, n(u, [2, 14]), { 30: [1, 39] }, { 30: [1, 40] }, { 30: [1, 41] }, n(R, [2, 30]), n(R, [2, 31]), n(R, [2, 32]), n(R, [2, 33]), n(M, [2, 17]), n(M, [2, 18]), n(M, [2, 19]), n(M, [2, 20]), { 26: 42, 31: [1, 43], 32: [1, 44] }, n(M, [2, 22]), n(M, [2, 23]), n(s, [2, 3], { 8: c }), n(u, [2, 5]), n(u, [2, 6]), n(u, [2, 9]), { 17: 45, 20: 37, 21: f, 22: d, 23: p, 24: h, 25: y, 29: m, 30: b }, { 6: _, 18: [1, 46] }, n(D, [2, 16]), n(u, [2, 13]), n(u, [2, 26]), n(u, [2, 27]), n(u, [2, 28]), { 27: [1, 48] }, { 27: [2, 24] }, { 27: [2, 25] }, { 6: _, 18: [1, 49] }, n(u, [2, 12]), { 20: 50, 21: f, 22: d, 23: p, 24: h, 25: y, 29: m, 30: b }, { 28: [1, 51] }, n(u, [2, 11]), n(D, [2, 15]), n(M, [2, 21])],
        defaultActions: { 43: [2, 24], 44: [2, 25] },
        parseError: function(T, S) {
          if (S.recoverable)
            this.trace(T);
          else {
            var k = new Error(T);
            throw k.hash = S, k;
          }
        },
        parse: function(T) {
          var S = this, k = [0], C = [null], A = [], P = this.table, ie = "", K = 0, O = 0, pt = 2, g = 1, v = A.slice.call(arguments, 1), w = Object.create(this.lexer), F = { yy: {} };
          for (var W in this.yy)
            Object.prototype.hasOwnProperty.call(this.yy, W) && (F.yy[W] = this.yy[W]);
          w.setInput(T, F.yy), F.yy.lexer = w, F.yy.parser = this, typeof w.yylloc > "u" && (w.yylloc = {});
          var V = w.yylloc;
          A.push(V);
          var $ = w.options && w.options.ranges;
          typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var L = function() {
            var ve;
            return ve = w.lex() || g, typeof ve != "number" && (ve = S.symbols_[ve] || ve), ve;
          }, I, z, q, ne, oe = {}, de, X, tt, Ye; ; ) {
            if (z = k[k.length - 1], this.defaultActions[z] ? q = this.defaultActions[z] : ((I === null || typeof I > "u") && (I = L()), q = P[z] && P[z][I]), typeof q > "u" || !q.length || !q[0]) {
              var x = "";
              Ye = [];
              for (de in P[z])
                this.terminals_[de] && de > pt && Ye.push("'" + this.terminals_[de] + "'");
              w.showPosition ? x = "Parse error on line " + (K + 1) + `:
` + w.showPosition() + `
Expecting ` + Ye.join(", ") + ", got '" + (this.terminals_[I] || I) + "'" : x = "Parse error on line " + (K + 1) + ": Unexpected " + (I == g ? "end of input" : "'" + (this.terminals_[I] || I) + "'"), this.parseError(x, {
                text: w.match,
                token: this.terminals_[I] || I,
                line: w.yylineno,
                loc: V,
                expected: Ye
              });
            }
            if (q[0] instanceof Array && q.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + z + ", token: " + I);
            switch (q[0]) {
              case 1:
                k.push(I), C.push(w.yytext), A.push(w.yylloc), k.push(q[1]), I = null, O = w.yyleng, ie = w.yytext, K = w.yylineno, V = w.yylloc;
                break;
              case 2:
                if (X = this.productions_[q[1]][1], oe.$ = C[C.length - X], oe._$ = {
                  first_line: A[A.length - (X || 1)].first_line,
                  last_line: A[A.length - 1].last_line,
                  first_column: A[A.length - (X || 1)].first_column,
                  last_column: A[A.length - 1].last_column
                }, $ && (oe._$.range = [
                  A[A.length - (X || 1)].range[0],
                  A[A.length - 1].range[1]
                ]), ne = this.performAction.apply(oe, [
                  ie,
                  O,
                  K,
                  F.yy,
                  q[1],
                  C,
                  A
                ].concat(v)), typeof ne < "u")
                  return ne;
                X && (k = k.slice(0, -1 * X * 2), C = C.slice(0, -1 * X), A = A.slice(0, -1 * X)), k.push(this.productions_[q[1]][0]), C.push(oe.$), A.push(oe._$), tt = P[k[k.length - 2]][k[k.length - 1]], k.push(tt);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      };
      Z.parseError = function(B, T) {
        var S = B.split(`
`);
        throw S[0] = "Query Error: unexpected character in filter at char " + (T.loc.first_column + 1), new Error(S.join(`
`));
      };
      var U = (function() {
        var B = {
          EOF: 1,
          parseError: function(S, k) {
            if (this.yy.parser)
              this.yy.parser.parseError(S, k);
            else
              throw new Error(S);
          },
          // resets the lexer, sets new input
          setInput: function(T, S) {
            return this.yy = S || this.yy || {}, this._input = T, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0
            }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          // consumes and returns one char from the input
          input: function() {
            var T = this._input[0];
            this.yytext += T, this.yyleng++, this.offset++, this.match += T, this.matched += T;
            var S = T.match(/(?:\r\n?|\n).*/g);
            return S ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), T;
          },
          // unshifts one char (or a string) into the input
          unput: function(T) {
            var S = T.length, k = T.split(/(?:\r\n?|\n)/g);
            this._input = T + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
            var C = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), k.length - 1 && (this.yylineno -= k.length - 1);
            var A = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: k ? (k.length === C.length ? this.yylloc.first_column : 0) + C[C.length - k.length].length - k[0].length : this.yylloc.first_column - S
            }, this.options.ranges && (this.yylloc.range = [A[0], A[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
          },
          // When called from action, caches matched text and appends it on next action
          more: function() {
            return this._more = !0, this;
          },
          // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
          reject: function() {
            if (this.options.backtrack_lexer)
              this._backtrack = !0;
            else
              return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              });
            return this;
          },
          // retain first n characters of the match
          less: function(T) {
            this.unput(this.match.slice(T));
          },
          // displays already matched input, i.e. for error messages
          pastInput: function() {
            var T = this.matched.substr(0, this.matched.length - this.match.length);
            return (T.length > 20 ? "..." : "") + T.substr(-20).replace(/\n/g, "");
          },
          // displays upcoming input, i.e. for error messages
          upcomingInput: function() {
            var T = this.match;
            return T.length < 20 && (T += this._input.substr(0, 20 - T.length)), (T.substr(0, 20) + (T.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          // displays the character position where the lexing error occurred, i.e. for error messages
          showPosition: function() {
            var T = this.pastInput(), S = new Array(T.length + 1).join("-");
            return T + this.upcomingInput() + `
` + S + "^";
          },
          // test the lexed token: return FALSE when not a match, otherwise return token
          test_match: function(T, S) {
            var k, C, A;
            if (this.options.backtrack_lexer && (A = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (A.yylloc.range = this.yylloc.range.slice(0))), C = T[0].match(/(?:\r\n?|\n).*/g), C && (this.yylineno += C.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: C ? C[C.length - 1].length - C[C.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + T[0].length
            }, this.yytext += T[0], this.match += T[0], this.matches = T, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(T[0].length), this.matched += T[0], k = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), k)
              return k;
            if (this._backtrack) {
              for (var P in A)
                this[P] = A[P];
              return !1;
            }
            return !1;
          },
          // return next match in input
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var T, S, k, C;
            this._more || (this.yytext = "", this.match = "");
            for (var A = this._currentRules(), P = 0; P < A.length; P++)
              if (k = this._input.match(this.rules[A[P]]), k && (!S || k[0].length > S[0].length)) {
                if (S = k, C = P, this.options.backtrack_lexer) {
                  if (T = this.test_match(k, A[P]), T !== !1)
                    return T;
                  if (this._backtrack) {
                    S = !1;
                    continue;
                  } else
                    return !1;
                } else if (!this.options.flex)
                  break;
              }
            return S ? (T = this.test_match(S, A[C]), T !== !1 ? T : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          },
          // return next match that has a token
          lex: function() {
            var S = this.next();
            return S || this.lex();
          },
          // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
          begin: function(S) {
            this.conditionStack.push(S);
          },
          // pop the previously active lexer condition state off the condition stack
          popState: function() {
            var S = this.conditionStack.length - 1;
            return S > 0 ? this.conditionStack.pop() : this.conditionStack[0];
          },
          // produce the lexer rule set which is active for the currently active lexer condition state
          _currentRules: function() {
            return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
          },
          // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
          topState: function(S) {
            return S = this.conditionStack.length - 1 - Math.abs(S || 0), S >= 0 ? this.conditionStack[S] : "INITIAL";
          },
          // alias for begin(condition)
          pushState: function(S) {
            this.begin(S);
          },
          // return the number of states currently on the stack
          stateStackSize: function() {
            return this.conditionStack.length;
          },
          options: {},
          performAction: function(S, k, C, A) {
            switch (C) {
              case 0:
                break;
              case 1:
                return 21;
              case 2:
                return 22;
              case 3:
                return 23;
              case 4:
                return 13;
              case 5:
                return 24;
              case 6:
                return 16;
              case 7:
                return 18;
              case 8:
                return this.pushState("reldate"), 25;
              case 9:
                return 32;
              case 10:
                return 31;
              case 11:
                return 27;
              case 12:
                return this.popState(), 28;
              case 13:
                return 29;
              case 14:
                return 30;
              case 15:
                return 9;
              case 16:
                return 10;
              case 17:
                return 6;
              case 18:
                return 8;
              case 19:
                return 14;
              case 20:
                return 38;
              case 21:
                return 39;
              case 22:
                return 36;
              case 23:
                return 37;
              case 24:
                return 34;
              case 25:
                return 35;
              case 26:
                return 33;
              case 27:
                return 29;
            }
          },
          rules: [/^(?:\s+)/, /^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+))/, /^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/, /^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/, /^(?:\[)/, /^(?:\])/, /^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/, /^(?:-)/, /^(?:\+)/, /^(?:\d+)/, /^(?:[dwMyhms])/, /^(?:([^\s'"\+\,\(\)\>\<=\[\]\~\-])(\\(['"\+\,\(\)\>\<=\[\]\~\^\$])|([^\s'"\+\,\(\)\>\<=\[\]\~]))+)/, /^(?:['](\\['"]|[^'"])+?['])/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\+)/, /^(?:-)/, /^(?:>=)/, /^(?:<=)/, /^(?:>)/, /^(?:<)/, /^(?:~\^)/, /^(?:~\$)/, /^(?:~)/, /^(?:([a-zA-Z])(?![a-zA-Z'"\,\(\)\>\<=\[\]\~]))/],
          conditions: { reldate: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], inclusive: !0 } }
        };
        return B.parseError = function(T, S) {
          var k = T.split(`
`), C, A;
          throw C = k[2].indexOf("^"), A = k[1].charAt(C), k[0] = 'Query Error: unrecognized text "' + A + '" in filter at char ' + (C + 1), Error(k.join(`
`));
        }, B;
      })();
      Z.lexer = U;
      function G() {
        this.yy = {};
      }
      return G.prototype = Z, Z.Parser = G, new G();
    })();
    typeof rh < "u" && (t.parser = r, t.Parser = r.Parser, t.parse = function() {
      return r.parse.apply(r, arguments);
    }, t.main = function(o) {
      o[1] || (console.log("Usage: " + o[0] + " FILE"), process.exit(1));
      var i = ol.readFileSync(ol.normalize(o[1]), "utf8");
      return t.parser.parse(i);
    }, require.main === e && t.main(process.argv.slice(1)));
  })(En, En.exports)), En.exports;
}
var al;
function O0() {
  if (al) return Pn;
  al = 1;
  const e = N0(), t = E0().parser;
  return t.yy = e, Pn.lex = (r) => {
    t.lexer.setInput(r);
    let n = t.lexer.lex();
    const o = [];
    for (; n !== t.lexer.EOF; )
      o.push({ token: t.terminals_[n], matched: t.lexer.match }), n = t.lexer.lex();
    return o;
  }, Pn.parse = (r, n) => {
    const o = n || {};
    e.preserveRelativeDates = o.preserveRelativeDates === !0;
    try {
      return t.parse(r, o);
    } finally {
      e.preserveRelativeDates = !1;
    }
  }, Pn;
}
var Gi, sl;
function R0() {
  return sl || (sl = 1, Gi = O0()), Gi;
}
var A0 = R0();
const D0 = /* @__PURE__ */ fp(A0);
function k0(e, t) {
  const r = e.split("."), n = t.split(".");
  if (r.length !== n.length)
    return null;
  const o = {};
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i], s = n[i];
    if (a.startsWith(":")) {
      o[a.slice(1)] = s;
      continue;
    }
    if (a !== s)
      return null;
  }
  return o;
}
function dc(e, t, r) {
  const n = e[t];
  if (n)
    return {
      definition: n,
      context: {
        key: t,
        pattern: t,
        params: {},
        timezone: r
      }
    };
  for (const [o, i] of Object.entries(e))
    if (i.parseKeys?.includes(t))
      return {
        definition: i,
        context: {
          key: o,
          pattern: o,
          params: {},
          timezone: r
        }
      };
  for (const [o, i] of Object.entries(e)) {
    if (!o.includes(":"))
      continue;
    const a = k0(o, t);
    if (a)
      return {
        definition: i,
        context: {
          key: t,
          pattern: o,
          params: a,
          timezone: r
        }
      };
  }
}
function np(e) {
  if (e)
    try {
      return D0.parse(e, { preserveRelativeDates: !0 });
    } catch {
      return;
    }
}
function I0(e) {
  return e.map((t, r) => ({
    ...t,
    id: `${t.field}:${r + 1}`
  }));
}
function C0(e, t) {
  const r = /* @__PURE__ */ new Set();
  return Object.entries(e).forEach(([n, o]) => {
    o.ui.type === t && (r.add(n), o.parseKeys?.forEach((i) => r.add(i)));
  }), r;
}
function la(e, t) {
  return Object.keys(e).some((r) => t.has(r)) ? !0 : Object.values(e).some((r) => Array.isArray(r) ? r.some((n) => n !== null && typeof n == "object" && la(n, t)) : r !== null && typeof r == "object" && !(r instanceof RegExp) && la(r, t));
}
function M0(e, t, r) {
  return e.flatMap((n) => {
    const o = Object.keys(n);
    if (o.length !== 1 || o[0].startsWith("$"))
      return [];
    const i = dc(t, o[0], r);
    if (i) {
      const a = i.definition.codec.parse(n, i.context);
      if (a)
        return [a];
    }
    return [];
  });
}
function _0(e) {
  return [...e].sort((t, r) => t.localeCompare(r));
}
function F0(e, t, r) {
  const n = e.flatMap((o) => {
    const i = dc(t, o.field, r);
    return i ? i.definition.codec.serialize(o, i.context) ?? [] : [];
  });
  if (n.length)
    return _0(n).join("+");
}
const B0 = C0(yn, "date");
function op(e) {
  return dc(yn, e.field, "UTC")?.definition.operators.includes(e.operator) ?? !1;
}
function ip(e, t) {
  return Array.isArray(e.$and) ? e.$and.flatMap((r) => ip(r, t)) : M0([e], yn, t);
}
function L0(e, t) {
  const r = np(e ?? "");
  return r ? I0(ip(r, t).filter(op)) : [];
}
function U0(e) {
  const t = np(e ?? "");
  return t ? la(t, B0) : !1;
}
function pc(e, t) {
  return F0(e.filter(op), yn, t);
}
const ap = ["status", "created_at", "body", "post", "author", "reported"], q0 = {
  is_not: "is-not",
  not_contains: "does-not-contain",
  before: "is-less",
  after: "is-greater",
  on_or_before: "is-or-less",
  on_or_after: "is-or-greater"
};
function $0(e) {
  const t = e.indexOf(":");
  if (t <= 0)
    return null;
  const r = e.substring(0, t), n = e.substring(t + 1);
  return n ? {
    operator: q0[r] ?? r,
    value: n
  } : null;
}
function z0(e) {
  const t = [];
  for (const [r, n] of e.entries()) {
    if (!ap.includes(r))
      continue;
    const o = $0(n);
    o && t.push({
      id: `${r}:${t.length + 1}`,
      field: r,
      operator: o.operator,
      values: [o.value]
    });
  }
  return t;
}
function sp(e) {
  ap.forEach((t) => e.delete(t));
}
function cl(e, t, r) {
  const n = new URLSearchParams(e), o = pc(t, r);
  return n.delete("filter"), sp(n), o && n.set("filter", o), n;
}
function Y0(e, t, r = !t) {
  return !!e && r && !t && U0(e);
}
function Z0(e) {
  const [t, r] = gr(), n = ee(null), o = we(() => t.get("filter") ?? void 0, [t]), i = we(() => t.toString(), [t]), a = we(() => o !== void 0 ? L0(o, e) : z0(t), [o, t, e]), [s, c] = pe(a), u = we(() => pc(s, e), [s, e]);
  je(() => {
    i !== n.current && (c(a), n.current = i);
  }, [i, a]), je(() => {
    if (n.current !== null && i !== n.current)
      return;
    const p = cl(t, s, e), h = p.toString();
    h !== i && (n.current = h, r(p, { replace: !0 }));
  }, [i, s, t, r, e]);
  const f = lr((p, h = {}) => {
    const y = typeof p == "function" ? p(s) : p, m = cl(t, y, e), b = h.replace ?? !0;
    c(y), n.current = m.toString(), r(m, { replace: b });
  }, [s, t, r, e]), d = lr(({ replace: p = !0 } = {}) => {
    const h = new URLSearchParams(t);
    h.delete("filter"), sp(h), c([]), n.current = h.toString(), r(h, { replace: p });
  }, [t, r]);
  return { filters: s, nql: u, setFilters: f, clearFilters: d };
}
function W0(e) {
  return e.get("id")?.match(/^is:(.+)$/)?.[1];
}
const H0 = ({
  timezone: e,
  singleCommentId: t
}) => {
  const [r, n] = gr(), { filters: o, nql: i, setFilters: a } = Z0(e), [s, c] = pe(!1), u = lr((_, D, Z = "is") => {
    const U = [
      ...o.filter((T) => T.field !== _),
      mp(_, Z, [D])
    ];
    if (!t) {
      a(U, { replace: !1 });
      return;
    }
    const G = new URLSearchParams(r), B = pc(U, e);
    G.delete("id"), G.delete("filter"), B && G.set("filter", B), n(G, { replace: !1 });
  }, [o, r, a, n, t, e]), f = we(() => t ? `id:${fr(t)}` : i, [i, t]), d = lr(() => {
    n(new URLSearchParams(), { replace: !1 });
  }, [n]), {
    data: p,
    isError: h,
    isFetching: y,
    isFetchingNextPage: m,
    isRefetching: b,
    fetchNextPage: N,
    hasNextPage: j
  } = Ld({
    searchParams: {
      include: nc(s),
      ...f ? { filter: f } : {}
    },
    keepPreviousData: !0
  });
  je(() => {
    !s && p?.meta?.capabilities?.dislikes === !0 && c(!0);
  }, [s, p?.meta?.capabilities?.dislikes]);
  const E = y && !m && !b, R = f ?? "", M = o.length > 0;
  return /* @__PURE__ */ l.jsx(vl, { children: /* @__PURE__ */ l.jsxs(sr, { "data-testid": "comments-page", children: [
    /* @__PURE__ */ l.jsxs(sr.Header, { children: [
      /* @__PURE__ */ l.jsxs(gt, { blurredBackground: !1, sticky: !1, children: [
        /* @__PURE__ */ l.jsx(gt.Left, { children: /* @__PURE__ */ l.jsx(gt.Title, { children: "Comments" }) }),
        !t && !M && /* @__PURE__ */ l.jsx(gt.Actions, { children: /* @__PURE__ */ l.jsx(gt.ActionGroup, { children: /* @__PURE__ */ l.jsx(
          Qc,
          {
            filters: o,
            siteTimezone: e,
            onFiltersChange: a
          }
        ) }) })
      ] }),
      !t && M && /* @__PURE__ */ l.jsx(sh, { children: /* @__PURE__ */ l.jsx(
        Qc,
        {
          filters: o,
          siteTimezone: e,
          onFiltersChange: a
        }
      ) })
    ] }),
    /* @__PURE__ */ l.jsx(sr.Body, { children: E ? /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(wt, { size: "lg" }) }) : h ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
      /* @__PURE__ */ l.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ l.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ l.jsx(le, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : p?.comments.length ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        k1,
        {
          dislikesEnabled: s,
          fetchNextPage: N,
          hasNextPage: j,
          isFetchingNextPage: m,
          isLoading: y && !m,
          items: p?.comments ?? [],
          resetKey: R,
          totalItems: p?.meta?.pagination?.total ?? 0,
          onAddFilter: u
        }
      ),
      t && /* @__PURE__ */ l.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ l.jsx(le, { variant: "outline", onClick: d, children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: t ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ l.jsx(Ji, { title: "Comment not found", children: /* @__PURE__ */ l.jsx(Qi, {}) }),
      /* @__PURE__ */ l.jsx(le, { className: "mt-4", variant: "outline", onClick: d, children: "Show all comments" })
    ] }) : /* @__PURE__ */ l.jsx(Ji, { title: "No comments yet", children: /* @__PURE__ */ l.jsx(Qi, {}) }) }) })
  ] }) });
}, gx = () => {
  const [e] = gr(), { data: t, isLoading: r } = zp({}), n = we(() => W0(e), [e]), o = e.get("filter") ?? void 0;
  if (!n && Y0(o, !!t, r))
    return /* @__PURE__ */ l.jsx(vl, { children: /* @__PURE__ */ l.jsxs(sr, { children: [
      /* @__PURE__ */ l.jsx(sr.Header, { children: /* @__PURE__ */ l.jsx(gt, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ l.jsx(gt.Left, { children: /* @__PURE__ */ l.jsx(gt.Title, { children: "Comments" }) }) }) }),
      /* @__PURE__ */ l.jsx(sr.Body, { children: /* @__PURE__ */ l.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ l.jsx(wt, { size: "lg" }) }) })
    ] }) });
  const a = kp(t?.settings ?? []);
  return /* @__PURE__ */ l.jsx(H0, { singleCommentId: n, timezone: a });
};
export {
  gx as default
};
//# sourceMappingURL=comments-CMIAOD8M.mjs.map
