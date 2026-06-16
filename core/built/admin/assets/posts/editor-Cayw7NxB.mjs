import { a8 as ce, al as fe, a5 as pe, aj as se, ae as Ce, x as we, Q as p, i as ve, n as Fa, S as Ju, Z as uh, z as Qu, a0 as Be, R as Ae, m as ch, a6 as vn, k as as, ac as dh, a9 as fh, c as hh, u as ba, L as ph, ag as gh, a4 as mh, a2 as Ri } from "./index-cYbhPZer.mjs";
import { M as is } from "./mail-BzgBa-LU.mjs";
import { C as ss, S as vh, a as ec, M as xh, Z as tc, T as nc, b as yh, P as _h } from "./zap-DYdYxKIg.mjs";
import { a as ut, c as Ls, b as Os, d as wh, i as Di, A as Sh } from "./value-CLWivQSM.mjs";
import { f as os, a as Bs, g as ls, d as rc, r as bh, b as ac, u as Ah, J as ic, c as Eh, h as Ih } from "./hooks-DxTWmWfO.mjs";
import { P as sc, b as oc, a as lc } from "./popover-C0ysVMxw.mjs";
import { b as Mh, T as Ch, c as Nh, a as $h, C as Rh, E as Dh } from "./tooltip-jux5-JO_.mjs";
import { P as Ha } from "./plus-DhjIEuWx.mjs";
import { L as dt } from "./loading-indicator-CnQS5ZPO.mjs";
import { u as us, a as Za, g as qa, i as cs, h as uc, s as Ph } from "./settings-CTfrowFd.mjs";
import { u as kh } from "./site-EKvZjM5G.mjs";
import { u as Th } from "./posts-BOgcdu2l.mjs";
import { e as Lh, L as Oh } from "./label-DpgquYuS.mjs";
import { B as Ee } from "./button-DJdXBRcJ.mjs";
import { I as za } from "./input-RbeggObt.mjs";
import { A as Jt, c as Qt, f as en, g as tn, d as nn, e as rn, b as an } from "./alert-dialog-BXBKa5hD.mjs";
import { X as Bh, b as Fh, c as Hh, g as Zh } from "./dialog-DTGtFy_7.mjs";
import { T as qh, b as zh, c as Fs } from "./tabs-CUUYpcMr.mjs";
import { M as Hs, r as Uh, b as jh, u as Zs, i as Vh, a as Wh, A as Gh, e as Kh, d as Yh } from "./automations-TIrlBsPd.mjs";
import { t as Xh, a as Jh, z as cc, P as Qh, g as ep, S as tp, o as np, G as rp, L as ap, C as ip, R as sp, q as op, p as lp, c as up, x as cp, w as dp, d as fp, e as hp, D as pp, n as gp, i as mp, k as qs, m as vp, l as xp, u as yp } from "./skeleton-BLfZp8N_.mjs";
import { n as _p, b as wp, d as Vt, g as Sp, C as dc } from "./check-Bk1CoFjE.mjs";
import { a as zs } from "./input-surface-BdsmiZ-G.mjs";
import { P as fc } from "./pencil-BuvhqAF_.mjs";
function bp(e) {
  ce(() => {
    if (!e)
      return;
    const t = (n) => {
      n.preventDefault(), n.returnValue = "";
    };
    return window.addEventListener("beforeunload", t), () => {
      window.removeEventListener("beforeunload", t);
    };
  }, [e]);
}
const Ap = ({ initialState: e, savingDelay: t, savedDelay: n = 2e3, onSave: a, onSaveError: r, onSavedStateReset: i, onValidate: s }) => {
  const [o, l] = fe(e), [u, f] = fe(""), [d, c] = fe({});
  ce(() => {
    u === "saved" && setTimeout(() => {
      i?.(), f((_) => _ === "saved" ? "" : _);
    }, n);
  }, [u, n]);
  const g = (_) => Object.values(_).filter(Boolean).length === 0, m = pe(
    () => {
      if (!s)
        return !0;
      const _ = s(o);
      return c(_), g(_);
    },
    [o, s]
  ), v = pe(async (_ = {}) => {
    if (!m())
      return f("error"), !1;
    if (u !== "unsaved" && !_.force && !_.fakeWhenUnchanged)
      return !0;
    const b = Date.now();
    f("saving");
    try {
      (u === "unsaved" || _.force) && await a(o);
      const S = Date.now() - b;
      return t && S < t && await new Promise((I) => {
        setTimeout(I, t - S);
      }), f("saved"), !0;
    } catch (S) {
      throw await r?.(S), f("unsaved"), S;
    }
  }, [o, u, t, a, r, m]), h = pe((_) => {
    l(_), f("unsaved");
  }, []);
  let x = "black";
  u === "saved" ? x = "green" : u === "error" && (x = "red");
  let w = "";
  u === "saved" ? w = "Saved" : u === "saving" ? w = "Saving..." : u === "error" && (w = "Retry");
  const y = {
    disabled: u === "saving",
    color: x,
    label: w || void 0
  };
  return {
    formState: o,
    saveState: u,
    handleSave: v,
    updateForm: h,
    setFormState: l,
    reset() {
      l(e), f("");
    },
    validate: m,
    isValid: g(d),
    clearError: (_) => {
      c((b) => ({ ...b, [_]: "" }));
    },
    errors: d,
    setErrors: c,
    okProps: y
  };
}, Us = (e = [], t, n) => !e || !n ? e : e.filter((a) => a[t]?.toLowerCase().includes(n.toLowerCase())), js = ({ path: e, filterKey: t, responseKey: n, limit: a = 20 }) => {
  const r = os(), i = se({}), s = async (l) => {
    if ((i.current.allLoaded || i.current.lastInput === l) && i.current.data)
      return Us(i.current.data, t, l);
    const u = await r(Bs(e, {
      filter: l ? `${t}:~${Lh(l)}` : "",
      limit: a.toString()
    }));
    return i.current.data = u[n], i.current.allLoaded = !l && !u.meta?.pagination.next, i.current.lastInput = l, Us(u[n], t, l);
  };
  return {
    loadData: s,
    loadInitialValues: async (l, u) => {
      await s("");
      const f = [...i.current.data || []], d = l.filter((c) => !i.current.data?.find((g) => g[u] === c));
      if (d.length) {
        const c = await r(Bs(e, {
          filter: `${u}:[${d.join(",")}]`,
          limit: "100"
        }));
        f.push(...c[n]);
      }
      return l.map((c) => f.find((g) => g[u] === c));
    }
  };
}, Kt = {
  image: {
    mimeTypes: ["image/gif", "image/jpg", "image/jpeg", "image/png", "image/svg+xml", "image/webp"],
    extensions: ["gif", "jpg", "jpeg", "png", "svg", "svgz", "webp"],
    endpoint: "/images/upload/",
    requestMethod: "post",
    resourceName: "images"
  },
  video: {
    mimeTypes: ["video/mp4", "video/webm", "video/ogg"],
    extensions: ["mp4", "webm", "ogv"],
    endpoint: "/media/upload/",
    requestMethod: "post",
    resourceName: "media"
  },
  audio: {
    mimeTypes: ["audio/mp3", "audio/mpeg", "audio/ogg", "audio/wav", "audio/vnd.wav", "audio/wave", "audio/x-wav", "audio/mp4", "audio/x-m4a"],
    extensions: ["mp3", "wav", "ogg", "m4a"],
    endpoint: "/media/upload/",
    requestMethod: "post",
    resourceName: "media"
  },
  mediaThumbnail: {
    mimeTypes: ["image/gif", "image/jpg", "image/jpeg", "image/png", "image/webp"],
    extensions: ["gif", "jpg", "jpeg", "png", "webp"],
    endpoint: "/media/thumbnail/upload/",
    requestMethod: "put",
    resourceName: "media"
  },
  file: {
    extensions: [],
    endpoint: "/files/upload/",
    requestMethod: "post",
    resourceName: "files"
  }
}, Pi = (e, t) => {
  let n = e;
  for (const a of t)
    if (n && typeof n == "object" && a in n)
      n = n[a];
    else
      return null;
  return typeof n == "string" ? n : null;
}, Ep = (e = "image") => {
  const [t, n] = fe(0), [a, r] = fe(!1), [i, s] = fe([]), [o, l] = fe(0), u = se(/* @__PURE__ */ new Map()), f = os();
  function d() {
    if (u.current.size === 0) {
      n(0);
      return;
    }
    let h = 0;
    u.current.forEach((x) => {
      h += x;
    }), n(Math.round(h / u.current.size));
  }
  const c = (h) => {
    if (e === "file")
      return !0;
    const x = Kt[e].extensions, [, w] = /(?:\.([^.]+))?$/.exec(h.name) ?? [];
    return x && (!w || x.indexOf(w.toLowerCase()) === -1) ? `The file type you uploaded is not supported. Please use ${`.${x.join(", .").toUpperCase()}`}` : !0;
  }, g = (h = []) => {
    const x = [];
    for (let w = 0; w < h.length; w += 1) {
      const y = h[w], _ = c(y);
      _ !== !0 && x.push({ fileName: y.name, message: _ });
    }
    return x;
  }, m = async (h, { formData: x = {} } = {}) => {
    u.current.set(h, 0);
    const w = new FormData();
    w.append("file", h, h.name), Object.keys(x).forEach((_) => {
      w.append(_, x[_]);
    });
    const y = `${ls().apiRoot}${Kt[e].endpoint}`;
    try {
      const _ = await f(y, {
        method: Kt[e].requestMethod,
        body: w,
        onUploadProgress(S) {
          u.current.set(h, S), d();
        }
      });
      u.current.set(h, 100), d();
      let b;
      if (_) {
        const S = _[Kt[e].resourceName];
        S && Array.isArray(S) && S[0] && (b = S[0].url);
      }
      return {
        url: b,
        fileName: h.name
      };
    } catch (_) {
      throw console.error(_), {
        message: Pi(_, ["data", "errors", 0, "message"]) || Pi(_, ["message"]) || "",
        context: Pi(_, ["data", "errors", 0, "context"]) || "",
        fileName: h.name
      };
    }
  };
  return { progress: t, isLoading: a, upload: async (h = [], x = {}) => {
    l(h.length), r(!0);
    const w = g(h);
    if (w.length)
      return s(w), r(!1), n(100), null;
    const y = [];
    for (let _ = 0; _ < h.length; _ += 1) {
      const b = h[_];
      y.push(m(b, x));
    }
    try {
      const _ = await Promise.all(y);
      return n(100), u.current.clear(), r(!1), s([]), _;
    } catch (_) {
      return console.error(_), s((b) => [...b, _]), r(!1), n(100), u.current.clear(), null;
    }
  }, errors: i, filesNumber: o };
}, Ip = () => {
  const e = os();
  return pe(async (t, { type: n } = {}) => {
    const a = new URL(`${ls().apiRoot}/oembed/`, window.location.origin);
    return a.searchParams.set("url", t), n && a.searchParams.set("type", n), await e(a);
  }, [e]);
}, Mp = "OffersResponseType", Cp = rc({
  dataType: Mp,
  path: "/offers/",
  // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
  defaultSearchParams: {}
}), Np = ({
  siteUrl: e,
  membersSignupAccess: t,
  donationsEnabled: n,
  recommendationsEnabled: a
}) => {
  const { data: r } = Cp(), { data: i } = Th({
    searchParams: {
      filter: "status:published",
      fields: "id,url,title,visibility,published_at",
      order: "published_at desc",
      limit: "5"
    }
  }), s = js({
    path: "/search-index/posts/",
    filterKey: "title",
    responseKey: "posts"
  }), o = js({
    path: "/search-index/pages/",
    filterKey: "title",
    responseKey: "pages"
  }), l = Ce(() => [{
    label: "Latest posts",
    items: (i?.posts || []).map((g) => ({
      id: g.id,
      title: g.title,
      url: g.url,
      visibility: g.visibility,
      publishedAt: g.published_at
    }))
  }], [i?.posts]), u = pe(async () => {
    const d = [
      { label: "Homepage", value: e },
      { label: "Free signup", value: "#/portal/signup/free" }
    ], c = t === "all" ? [
      { label: "Paid signup", value: "#/portal/signup" },
      { label: "Upgrade or change plan", value: "#/portal/account/plans" }
    ] : [], g = n ? [{ label: "Tips and donations", value: "#/portal/support" }] : [], m = a ? [{ label: "Recommendations", value: "#/portal/recommendations" }] : [], v = (r?.offers || []).filter((h) => h.status === "active" && h.redemption_type === "signup").map((h) => ({
      label: `Offer - ${h.name}`,
      value: new URL(h.code, e).toString()
    }));
    return [...d, ...c, ...g, ...m, ...v];
  }, [n, t, r?.offers, a, e]), f = pe(async (d) => {
    if (!d)
      return l;
    const [c, g] = await Promise.all([
      s.loadData(d),
      o.loadData(d)
    ]);
    return [
      {
        label: "Posts",
        items: c.filter((m) => m.status === "published").map((m) => ({
          id: m.id,
          title: m.title,
          url: m.url,
          visibility: m.visibility,
          publishedAt: m.published_at
        }))
      },
      {
        label: "Pages",
        items: g.filter((m) => m.status === "published").map((m) => ({
          id: m.id,
          title: m.title,
          url: m.url,
          visibility: m.visibility,
          publishedAt: m.published_at
        }))
      }
    ].filter((m) => m.items.length > 0);
  }, [l, o, s]);
  return {
    fetchAutocompleteLinks: u,
    searchLinks: f
  };
};
function $p(e, t) {
  const n = e.editorInstance.getRootElement();
  if (!n)
    return;
  const { bottom: a } = n.getBoundingClientRect();
  t.pageY > a && t.clientY > a && (t.preventDefault(), e.lastNodeIsDecorator() && e.insertParagraphAtBottom(), e.focusEditor({ position: "bottom" }));
}
const Rp = Fa(
  "relative block rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-border-default bg-surface-panel shadow-sm hover:shadow-md",
        gradient: [
          "cursor-pointer bg-surface-elevated",
          "shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_28%),7px_6px_42px_8px_rgb(202_103_255_/_32%)]",
          "dark:shadow-[-7px_-6px_42px_8px_rgb(75_225_226_/_36%),7px_6px_42px_8px_rgb(202_103_255_/_38%)]",
          "hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_38%),7px_8px_42px_10px_rgb(202_103_255_/_42%)]",
          "dark:hover:shadow-[-7px_-4px_42px_10px_rgb(75_225_226_/_50%),7px_8px_42px_10px_rgb(202_103_255_/_52%)]",
          "hover:translate-y-[-2px] hover:scale-[1.01]"
        ],
        info: "border border-state-info/40 bg-state-info/10",
        success: "border border-state-success/40 bg-state-success/10",
        warning: "border border-state-warning/40 bg-state-warning/10",
        destructive: "bg-surface-panel shadow-sm"
      },
      size: {
        sm: "p-2 text-sm",
        md: "p-3",
        lg: "p-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), hc = we(
  (e, t) => {
    const {
      variant: n,
      size: a,
      dismissible: r = !1,
      onDismiss: i,
      role: s = "status",
      className: o,
      children: l,
      ...u
    } = e, f = (d) => {
      d.preventDefault(), d.stopPropagation(), r && i && i();
    };
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        ref: t,
        className: ve(Rp({ variant: n, size: a }), o),
        role: s,
        ...u,
        children: [
          r && /* @__PURE__ */ p.jsx(
            Ee,
            {
              "aria-label": "Dismiss notification",
              className: "absolute top-1 right-1 size-8 text-text-secondary hover:bg-transparent hover:text-text-primary",
              size: "icon",
              variant: "ghost",
              onClick: f,
              children: /* @__PURE__ */ p.jsx(Bh, { className: "size-5" })
            }
          ),
          l
        ]
      }
    );
  }
);
hc.displayName = "Banner";
var Vs = 180 / Math.PI, Vi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pc(e, t, n, a, r, i) {
  var s, o, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * a) && (n -= e * l, a -= t * l), (o = Math.sqrt(n * n + a * a)) && (n /= o, a /= o, l /= o), e * a < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: r,
    translateY: i,
    rotate: Math.atan2(t, e) * Vs,
    skewX: Math.atan(l) * Vs,
    scaleX: s,
    scaleY: o
  };
}
var $n;
function Dp(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Vi : pc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Pp(e) {
  return e == null || ($n || ($n = document.createElementNS("http://www.w3.org/2000/svg", "g")), $n.setAttribute("transform", e), !(e = $n.transform.baseVal.consolidate())) ? Vi : (e = e.matrix, pc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function gc(e, t, n, a) {
  function r(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, f, d, c, g, m) {
    if (u !== d || f !== c) {
      var v = g.push("translate(", null, t, null, n);
      m.push({ i: v - 4, x: ut(u, d) }, { i: v - 2, x: ut(f, c) });
    } else (d || c) && g.push("translate(" + d + t + c + n);
  }
  function s(u, f, d, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: d.push(r(d) + "rotate(", null, a) - 2, x: ut(u, f) })) : f && d.push(r(d) + "rotate(" + f + a);
  }
  function o(u, f, d, c) {
    u !== f ? c.push({ i: d.push(r(d) + "skewX(", null, a) - 2, x: ut(u, f) }) : f && d.push(r(d) + "skewX(" + f + a);
  }
  function l(u, f, d, c, g, m) {
    if (u !== d || f !== c) {
      var v = g.push(r(g) + "scale(", null, ",", null, ")");
      m.push({ i: v - 4, x: ut(u, d) }, { i: v - 2, x: ut(f, c) });
    } else (d !== 1 || c !== 1) && g.push(r(g) + "scale(" + d + "," + c + ")");
  }
  return function(u, f) {
    var d = [], c = [];
    return u = e(u), f = e(f), i(u.translateX, u.translateY, f.translateX, f.translateY, d, c), s(u.rotate, f.rotate, d, c), o(u.skewX, f.skewX, d, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, d, c), u = f = null, function(g) {
      for (var m = -1, v = c.length, h; ++m < v; ) d[(h = c[m]).i] = h.x(g);
      return d.join("");
    };
  };
}
var kp = gc(Dp, "px, ", "px)", "deg)"), Tp = gc(Pp, ", ", ")", ")"), Lp = 1e-12;
function Ws(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Op(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Bp(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Aa = (function e(t, n, a) {
  function r(i, s) {
    var o = i[0], l = i[1], u = i[2], f = s[0], d = s[1], c = s[2], g = f - o, m = d - l, v = g * g + m * m, h, x;
    if (v < Lp)
      x = Math.log(c / u) / t, h = function(I) {
        return [
          o + I * g,
          l + I * m,
          u * Math.exp(t * I * x)
        ];
      };
    else {
      var w = Math.sqrt(v), y = (c * c - u * u + a * v) / (2 * u * n * w), _ = (c * c - u * u - a * v) / (2 * c * n * w), b = Math.log(Math.sqrt(y * y + 1) - y), S = Math.log(Math.sqrt(_ * _ + 1) - _);
      x = (S - b) / t, h = function(I) {
        var $ = I * x, R = Ws(b), L = u / (n * w) * (R * Bp(t * $ + b) - Op(b));
        return [
          o + L * g,
          l + L * m,
          u * R / Ws(t * $ + b)
        ];
      };
    }
    return h.duration = x * 1e3 * t / Math.SQRT2, h;
  }
  return r.rho = function(i) {
    var s = Math.max(1e-3, +i), o = s * s, l = o * o;
    return e(s, o, l);
  }, r;
})(Math.SQRT2, 2, 4);
var Ua = "ContextMenu", [Fp] = Sp(Ua, [
  cc
]), $e = cc(), [Hp, mc] = Fp(Ua), vc = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: a, open: r, dir: i, modal: s = !0 } = e, o = se(!1);
  {
    const d = se(!1);
    ce(() => {
      r === !0 && !o.current && !d.current && (d.current = !0, console.warn(
        "ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."
      ));
    }, [r]);
  }
  const [l, u] = _p({
    prop: r,
    defaultProp: !1,
    onChange: a,
    caller: Ua
  }), f = $e(t);
  return /* @__PURE__ */ p.jsx(
    Hp,
    {
      scope: t,
      open: l,
      onOpenChange: u,
      modal: s,
      hasInteractedRef: o,
      children: /* @__PURE__ */ p.jsx(Xh, { ...f, dir: i, open: l, onOpenChange: u, modal: s, children: n })
    }
  );
};
vc.displayName = Ua;
var xc = "ContextMenuTrigger", yc = we(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: a = !1, ...r } = e, i = mc(xc, n), s = $e(n), o = se({ x: 0, y: 0 }), l = se({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...o.current })
    }), u = se(0), f = pe(
      () => window.clearTimeout(u.current),
      []
    ), d = (c) => {
      i.hasInteractedRef.current = !0, o.current = { x: c.clientX, y: c.clientY }, i.onOpenChange(!0);
    };
    return ce(() => f, [f]), ce(() => {
      a && f();
    }, [a, f]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Jh, { ...s, virtualRef: l }),
      /* @__PURE__ */ p.jsx(
        wp.span,
        {
          "data-state": i.open ? "open" : "closed",
          "data-disabled": a ? "" : void 0,
          ...r,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: a ? e.onContextMenu : Vt(e.onContextMenu, (c) => {
            f(), d(c), c.preventDefault();
          }),
          onPointerDown: a ? e.onPointerDown : Vt(
            e.onPointerDown,
            Rn((c) => {
              f(), i.open && i.onOpenChange(!1), u.current = window.setTimeout(() => d(c), 700);
            })
          ),
          onPointerMove: a ? e.onPointerMove : Vt(e.onPointerMove, Rn(f)),
          onPointerCancel: a ? e.onPointerCancel : Vt(e.onPointerCancel, Rn(f)),
          onPointerUp: a ? e.onPointerUp : Vt(e.onPointerUp, Rn(f))
        }
      )
    ] });
  }
);
yc.displayName = xc;
var Zp = "ContextMenuPortal", _c = (e) => {
  const { __scopeContextMenu: t, ...n } = e, a = $e(t);
  return /* @__PURE__ */ p.jsx(Qh, { ...a, ...n });
};
_c.displayName = Zp;
var wc = "ContextMenuContent", Sc = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = mc(wc, n), i = $e(n), s = se(!1);
    return /* @__PURE__ */ p.jsx(
      ep,
      {
        ...i,
        ...a,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (o) => {
          e.onCloseAutoFocus?.(o), !o.defaultPrevented && s.current && o.preventDefault(), s.current = !1;
        },
        onInteractOutside: (o) => {
          e.onInteractOutside?.(o), !o.defaultPrevented && !r.modal && (s.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Sc.displayName = wc;
var qp = "ContextMenuGroup", zp = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(rp, { ...r, ...a, ref: t });
  }
);
zp.displayName = qp;
var Up = "ContextMenuLabel", bc = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(ap, { ...r, ...a, ref: t });
  }
);
bc.displayName = Up;
var jp = "ContextMenuItem", Ac = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(np, { ...r, ...a, ref: t });
  }
);
Ac.displayName = jp;
var Vp = "ContextMenuCheckboxItem", Ec = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(ip, { ...r, ...a, ref: t });
});
Ec.displayName = Vp;
var Wp = "ContextMenuRadioGroup", Gp = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(sp, { ...r, ...a, ref: t });
});
Gp.displayName = Wp;
var Kp = "ContextMenuRadioItem", Ic = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(op, { ...r, ...a, ref: t });
});
Ic.displayName = Kp;
var Yp = "ContextMenuItemIndicator", Mc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(lp, { ...r, ...a, ref: t });
});
Mc.displayName = Yp;
var Xp = "ContextMenuSeparator", Cc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(tp, { ...r, ...a, ref: t });
});
Cc.displayName = Xp;
var Jp = "ContextMenuArrow", Qp = we(
  (e, t) => {
    const { __scopeContextMenu: n, ...a } = e, r = $e(n);
    return /* @__PURE__ */ p.jsx(up, { ...r, ...a, ref: t });
  }
);
Qp.displayName = Jp;
var e0 = "ContextMenuSubTrigger", Nc = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(cp, { ...r, ...a, ref: t });
});
Nc.displayName = e0;
var t0 = "ContextMenuSubContent", $c = we((e, t) => {
  const { __scopeContextMenu: n, ...a } = e, r = $e(n);
  return /* @__PURE__ */ p.jsx(
    dp,
    {
      ...r,
      ...a,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
$c.displayName = t0;
function Rn(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var n0 = vc, r0 = yc, a0 = _c, Rc = Sc, Dc = bc, Pc = Ac, kc = Ec, Tc = Ic, Lc = Mc, Oc = Cc, Bc = Nc, Fc = $c;
const i0 = n0, s0 = r0, o0 = we(({ className: e, inset: t, children: n, ...a }, r) => /* @__PURE__ */ p.jsxs(
  Bc,
  {
    ref: r,
    className: ve(
      "flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden hover:bg-accent focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...a,
    children: [
      n,
      /* @__PURE__ */ p.jsx(fp, { className: "ml-auto" })
    ]
  }
));
o0.displayName = Bc.displayName;
const l0 = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx("div", { className: Ju, children: /* @__PURE__ */ p.jsx(
  Fc,
  {
    ref: n,
    className: ve(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
l0.displayName = Fc.displayName;
const Hc = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(a0, { children: /* @__PURE__ */ p.jsx("div", { className: Ju, children: /* @__PURE__ */ p.jsx(
  Rc,
  {
    ref: n,
    className: ve(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }) }));
Hc.displayName = Rc.displayName;
const Zc = we(({ className: e, inset: t, variant: n = "default", ...a }, r) => /* @__PURE__ */ p.jsx(
  Pc,
  {
    ref: r,
    className: ve(
      "relative flex cursor-default select-none cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      n === "destructive" && "text-destructive focus:bg-destructive/10 focus:text-destructive",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Zc.displayName = Pc.displayName;
const u0 = we(({ className: e, children: t, checked: n, ...a }, r) => /* @__PURE__ */ p.jsxs(
  kc,
  {
    ref: r,
    checked: n,
    className: ve(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Lc, { children: /* @__PURE__ */ p.jsx(dc, { className: "size-4" }) }) }),
      t
    ]
  }
));
u0.displayName = kc.displayName;
const c0 = we(({ className: e, children: t, ...n }, a) => /* @__PURE__ */ p.jsxs(
  Tc,
  {
    ref: a,
    className: ve(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(Lc, { children: /* @__PURE__ */ p.jsx(hp, { className: "size-2 fill-current" }) }) }),
      t
    ]
  }
));
c0.displayName = Tc.displayName;
const d0 = we(({ className: e, inset: t, ...n }, a) => /* @__PURE__ */ p.jsx(
  Dc,
  {
    ref: a,
    className: ve(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
d0.displayName = Dc.displayName;
const qc = we(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  Oc,
  {
    ref: n,
    className: ve("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qc.displayName = Oc.displayName;
const f0 = Fa(
  "group/field flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function h0({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ve(f0({ orientation: t }), e),
      "data-orientation": t,
      "data-slot": "field",
      role: "group",
      ...n
    }
  );
}
function p0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Oh,
    {
      className: ve(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      "data-slot": "field-label",
      ...t
    }
  );
}
function g0({
  className: e,
  children: t,
  errors: n,
  ...a
}) {
  const r = Ce(() => t || (n ? n?.length === 1 && n[0]?.message ? n[0].message : /* @__PURE__ */ p.jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: n.map(
    (i) => i?.message && /* @__PURE__ */ p.jsx("li", { children: i.message }, i.message)
  ) }) : null), [t, n]);
  return r ? /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ve("text-destructive text-control font-normal", e),
      "data-slot": "field-error",
      role: "alert",
      ...a,
      children: r
    }
  ) : null;
}
function m0({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ve(
        // Shared surface chrome (border, bg, radius, transition, invalid state).
        zs.base,
        zs.invalidWithin,
        // Wrapper layout + group context (input-group specific).
        "group/input-group relative flex w-full items-center outline-hidden",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state — scoped to the input-group control specifically so that
        // focusing an InputGroupButton inside the group does NOT trigger the surface
        // focus ring. This is why we don't use inputSurface('within') here.
        "has-[[data-slot=input-group-control]:focus-visible]:outline-hidden has-[[data-slot=input-group-control]:focus-visible]:bg-transparent has-[[data-slot=input-group-control]:focus-visible]:border-focus-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-focus-ring/25",
        e
      ),
      "data-slot": "input-group",
      role: "group",
      ...t
    }
  );
}
const v0 = Fa(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-control font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--input-group-radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function x0({
  className: e,
  align: t = "inline-start",
  ...n
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: ve(v0({ align: t }), e),
      "data-align": t,
      "data-slot": "input-group-addon",
      role: "group",
      onClick: (a) => {
        if (a.target.closest("button"))
          return;
        a.currentTarget.closest('[data-slot="input-group"]')?.querySelector('[data-slot="input-group-control"]')?.focus();
      },
      ...n
    }
  );
}
const y0 = Fa(
  "flex items-center gap-2 text-control shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--input-group-radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--input-group-radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function Gs({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: a = "xs",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    Ee,
    {
      className: ve(y0({ size: a }), e),
      "data-size": a,
      type: t,
      variant: n,
      ...r
    }
  );
}
function _0({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "span",
    {
      className: ve(
        "text-muted-foreground flex items-center gap-2 text-control [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        e
      ),
      ...t
    }
  );
}
function w0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    za,
    {
      className: ve(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:outline-hidden focus-visible:shadow-none dark:bg-transparent",
        e
      ),
      "data-slot": "input-group-control",
      ...t
    }
  );
}
const Ks = (e) => {
  if (!(e === null || typeof e > "u")) {
    if (typeof e == "string")
      return e;
    throw new TypeError("Expected value to be null, undefined, or a string");
  }
}, Ys = (e) => {
  if (e.startsWith("/")) {
    const { adminRoot: t } = ls();
    return window.location.origin + t.replace(/\/$/, "") + e;
  }
  return e;
};
function S0() {
  const { data: e } = us(), { data: t } = Za(), a = e?.config?.hostSettings?.pintura, r = t?.settings ?? null, [i, s, o] = qa(r, [
    "pintura",
    "pintura_js_url",
    "pintura_css_url"
  ]);
  let l, u;
  return i && (l = a?.js || Ks(s), u = a?.css || Ks(o)), Ce(() => !l || !u ? null : {
    jsUrl: Ys(l),
    cssUrl: Ys(u)
  }, [l, u]);
}
const Xs = ({ icon: e, label: t, description: n, onClick: a }) => /* @__PURE__ */ p.jsxs(
  "button",
  {
    className: "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-grey-50 focus-visible:bg-grey-50 focus-visible:outline-none dark:hover:bg-grey-900 dark:focus-visible:bg-grey-900",
    type: "button",
    onClick: a,
    children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(e, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col", children: [
        /* @__PURE__ */ p.jsx("span", { className: "font-medium", children: t }),
        /* @__PURE__ */ p.jsx("span", { className: "text-xs text-text-secondary", children: n })
      ] })
    ]
  }
), zc = ({ onPick: e }) => /* @__PURE__ */ p.jsxs("div", { className: "flex w-72 flex-col gap-1 p-1", "data-testid": "step-picker", children: [
  /* @__PURE__ */ p.jsx(
    Xs,
    {
      description: "Send an email",
      icon: is,
      label: "Email",
      onClick: () => e("send_email")
    }
  ),
  /* @__PURE__ */ p.jsx(
    Xs,
    {
      description: "Wait a set amount of time",
      icon: ss,
      label: "Wait",
      onClick: () => e("wait")
    }
  )
] });
function Ie(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, a; n < e.length; n++)
      (a = Ie(e[n])) !== "" && (t += (t && " ") + a);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var b0 = { value: () => {
} };
function ja() {
  for (var e = 0, t = arguments.length, n = {}, a; e < t; ++e) {
    if (!(a = arguments[e] + "") || a in n || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    n[a] = [];
  }
  return new Ea(n);
}
function Ea(e) {
  this._ = e;
}
function A0(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var a = "", r = n.indexOf(".");
    if (r >= 0 && (a = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: a };
  });
}
Ea.prototype = ja.prototype = {
  constructor: Ea,
  on: function(e, t) {
    var n = this._, a = A0(e + "", n), r, i = -1, s = a.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((r = (e = a[i]).type) && (r = E0(n[r], e.name))) return r;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (r = (e = a[i]).type) n[r] = Js(n[r], e.name, t);
      else if (t == null) for (r in n) n[r] = Js(n[r], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ea(e);
  },
  call: function(e, t) {
    if ((r = arguments.length - 2) > 0) for (var n = new Array(r), a = 0, r, i; a < r; ++a) n[a] = arguments[a + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], a = 0, r = i.length; a < r; ++a) i[a].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
  }
};
function E0(e, t) {
  for (var n = 0, a = e.length, r; n < a; ++n)
    if ((r = e[n]).name === t)
      return r.value;
}
function Js(e, t, n) {
  for (var a = 0, r = e.length; a < r; ++a)
    if (e[a].name === t) {
      e[a] = b0, e = e.slice(0, a).concat(e.slice(a + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Wi = "http://www.w3.org/1999/xhtml";
const Qs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Va(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Qs.hasOwnProperty(t) ? { space: Qs[t], local: e } : e;
}
function I0(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Wi && t.documentElement.namespaceURI === Wi ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function M0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Uc(e) {
  var t = Va(e);
  return (t.local ? M0 : I0)(t);
}
function C0() {
}
function ds(e) {
  return e == null ? C0 : function() {
    return this.querySelector(e);
  };
}
function N0(e) {
  typeof e != "function" && (e = ds(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = new Array(s), l, u, f = 0; f < s; ++f)
      (l = i[f]) && (u = e.call(l, l.__data__, f, i)) && ("__data__" in l && (u.__data__ = l.__data__), o[f] = u);
  return new ke(a, this._parents);
}
function $0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function R0() {
  return [];
}
function jc(e) {
  return e == null ? R0 : function() {
    return this.querySelectorAll(e);
  };
}
function D0(e) {
  return function() {
    return $0(e.apply(this, arguments));
  };
}
function P0(e) {
  typeof e == "function" ? e = D0(e) : e = jc(e);
  for (var t = this._groups, n = t.length, a = [], r = [], i = 0; i < n; ++i)
    for (var s = t[i], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && (a.push(e.call(l, l.__data__, u, s)), r.push(l));
  return new ke(a, r);
}
function Vc(e) {
  return function() {
    return this.matches(e);
  };
}
function Wc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var k0 = Array.prototype.find;
function T0(e) {
  return function() {
    return k0.call(this.children, e);
  };
}
function L0() {
  return this.firstElementChild;
}
function O0(e) {
  return this.select(e == null ? L0 : T0(typeof e == "function" ? e : Wc(e)));
}
var B0 = Array.prototype.filter;
function F0() {
  return Array.from(this.children);
}
function H0(e) {
  return function() {
    return B0.call(this.children, e);
  };
}
function Z0(e) {
  return this.selectAll(e == null ? F0 : H0(typeof e == "function" ? e : Wc(e)));
}
function q0(e) {
  typeof e != "function" && (e = Vc(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && o.push(l);
  return new ke(a, this._parents);
}
function Gc(e) {
  return new Array(e.length);
}
function z0() {
  return new ke(this._enter || this._groups.map(Gc), this._parents);
}
function Ra(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ra.prototype = {
  constructor: Ra,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function U0(e) {
  return function() {
    return e;
  };
}
function j0(e, t, n, a, r, i) {
  for (var s = 0, o, l = t.length, u = i.length; s < u; ++s)
    (o = t[s]) ? (o.__data__ = i[s], a[s] = o) : n[s] = new Ra(e, i[s]);
  for (; s < l; ++s)
    (o = t[s]) && (r[s] = o);
}
function V0(e, t, n, a, r, i, s) {
  var o, l, u = /* @__PURE__ */ new Map(), f = t.length, d = i.length, c = new Array(f), g;
  for (o = 0; o < f; ++o)
    (l = t[o]) && (c[o] = g = s.call(l, l.__data__, o, t) + "", u.has(g) ? r[o] = l : u.set(g, l));
  for (o = 0; o < d; ++o)
    g = s.call(e, i[o], o, i) + "", (l = u.get(g)) ? (a[o] = l, l.__data__ = i[o], u.delete(g)) : n[o] = new Ra(e, i[o]);
  for (o = 0; o < f; ++o)
    (l = t[o]) && u.get(c[o]) === l && (r[o] = l);
}
function W0(e) {
  return e.__data__;
}
function G0(e, t) {
  if (!arguments.length) return Array.from(this, W0);
  var n = t ? V0 : j0, a = this._parents, r = this._groups;
  typeof e != "function" && (e = U0(e));
  for (var i = r.length, s = new Array(i), o = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var f = a[u], d = r[u], c = d.length, g = K0(e.call(f, f && f.__data__, u, a)), m = g.length, v = o[u] = new Array(m), h = s[u] = new Array(m), x = l[u] = new Array(c);
    n(f, d, v, h, x, g, t);
    for (var w = 0, y = 0, _, b; w < m; ++w)
      if (_ = v[w]) {
        for (w >= y && (y = w + 1); !(b = h[y]) && ++y < m; ) ;
        _._next = b || null;
      }
  }
  return s = new ke(s, a), s._enter = o, s._exit = l, s;
}
function K0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Y0() {
  return new ke(this._exit || this._groups.map(Gc), this._parents);
}
function X0(e, t, n) {
  var a = this.enter(), r = this, i = this.exit();
  return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? i.remove() : n(i), a && r ? a.merge(r).order() : r;
}
function J0(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, a = t._groups, r = n.length, i = a.length, s = Math.min(r, i), o = new Array(r), l = 0; l < s; ++l)
    for (var u = n[l], f = a[l], d = u.length, c = o[l] = new Array(d), g, m = 0; m < d; ++m)
      (g = u[m] || f[m]) && (c[m] = g);
  for (; l < r; ++l)
    o[l] = n[l];
  return new ke(o, this._parents);
}
function Q0() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var a = e[t], r = a.length - 1, i = a[r], s; --r >= 0; )
      (s = a[r]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function eg(e) {
  e || (e = tg);
  function t(d, c) {
    return d && c ? e(d.__data__, c.__data__) : !d - !c;
  }
  for (var n = this._groups, a = n.length, r = new Array(a), i = 0; i < a; ++i) {
    for (var s = n[i], o = s.length, l = r[i] = new Array(o), u, f = 0; f < o; ++f)
      (u = s[f]) && (l[f] = u);
    l.sort(t);
  }
  return new ke(r, this._parents).order();
}
function tg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ng() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function rg() {
  return Array.from(this);
}
function ag() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, i = a.length; r < i; ++r) {
      var s = a[r];
      if (s) return s;
    }
  return null;
}
function ig() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function sg() {
  return !this.node();
}
function og(e) {
  for (var t = this._groups, n = 0, a = t.length; n < a; ++n)
    for (var r = t[n], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && e.call(o, o.__data__, i, r);
  return this;
}
function lg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function ug(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function cg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function dg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function hg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function pg(e, t) {
  var n = Va(e);
  if (arguments.length < 2) {
    var a = this.node();
    return n.local ? a.getAttributeNS(n.space, n.local) : a.getAttribute(n);
  }
  return this.each((t == null ? n.local ? ug : lg : typeof t == "function" ? n.local ? hg : fg : n.local ? dg : cg)(n, t));
}
function Kc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function gg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function mg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function vg(e, t, n) {
  return function() {
    var a = t.apply(this, arguments);
    a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, n);
  };
}
function xg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? gg : typeof t == "function" ? vg : mg)(e, t, n ?? "")) : Lt(this.node(), e);
}
function Lt(e, t) {
  return e.style.getPropertyValue(t) || Kc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function yg(e) {
  return function() {
    delete this[e];
  };
}
function _g(e, t) {
  return function() {
    this[e] = t;
  };
}
function wg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Sg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? yg : typeof t == "function" ? wg : _g)(e, t)) : this.node()[e];
}
function Yc(e) {
  return e.trim().split(/^|\s+/);
}
function fs(e) {
  return e.classList || new Xc(e);
}
function Xc(e) {
  this._node = e, this._names = Yc(e.getAttribute("class") || "");
}
Xc.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Jc(e, t) {
  for (var n = fs(e), a = -1, r = t.length; ++a < r; ) n.add(t[a]);
}
function Qc(e, t) {
  for (var n = fs(e), a = -1, r = t.length; ++a < r; ) n.remove(t[a]);
}
function bg(e) {
  return function() {
    Jc(this, e);
  };
}
function Ag(e) {
  return function() {
    Qc(this, e);
  };
}
function Eg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Jc : Qc)(this, e);
  };
}
function Ig(e, t) {
  var n = Yc(e + "");
  if (arguments.length < 2) {
    for (var a = fs(this.node()), r = -1, i = n.length; ++r < i; ) if (!a.contains(n[r])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Eg : t ? bg : Ag)(n, t));
}
function Mg() {
  this.textContent = "";
}
function Cg(e) {
  return function() {
    this.textContent = e;
  };
}
function Ng(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function $g(e) {
  return arguments.length ? this.each(e == null ? Mg : (typeof e == "function" ? Ng : Cg)(e)) : this.node().textContent;
}
function Rg() {
  this.innerHTML = "";
}
function Dg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Pg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function kg(e) {
  return arguments.length ? this.each(e == null ? Rg : (typeof e == "function" ? Pg : Dg)(e)) : this.node().innerHTML;
}
function Tg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Lg() {
  return this.each(Tg);
}
function Og() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bg() {
  return this.each(Og);
}
function Fg(e) {
  var t = typeof e == "function" ? e : Uc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Hg() {
  return null;
}
function Zg(e, t) {
  var n = typeof e == "function" ? e : Uc(e), a = t == null ? Hg : typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function qg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function zg() {
  return this.each(qg);
}
function Ug() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Vg(e) {
  return this.select(e ? jg : Ug);
}
function Wg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Gg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Kg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", a = t.indexOf(".");
    return a >= 0 && (n = t.slice(a + 1), t = t.slice(0, a)), { type: t, name: n };
  });
}
function Yg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, a = -1, r = t.length, i; n < r; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++a] = i;
      ++a ? t.length = a : delete this.__on;
    }
  };
}
function Xg(e, t, n) {
  return function() {
    var a = this.__on, r, i = Gg(t);
    if (a) {
      for (var s = 0, o = a.length; s < o; ++s)
        if ((r = a[s]).type === e.type && r.name === e.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), r.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), r = { type: e.type, name: e.name, value: t, listener: i, options: n }, a ? a.push(r) : this.__on = [r];
  };
}
function Jg(e, t, n) {
  var a = Kg(e + ""), r, i = a.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, u = o.length, f; l < u; ++l)
        for (r = 0, f = o[l]; r < i; ++r)
          if ((s = a[r]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = t ? Xg : Yg, r = 0; r < i; ++r) this.each(o(a[r], t, n));
  return this;
}
function ed(e, t, n) {
  var a = Kc(e), r = a.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = a.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
}
function Qg(e, t) {
  return function() {
    return ed(this, e, t);
  };
}
function em(e, t) {
  return function() {
    return ed(this, e, t.apply(this, arguments));
  };
}
function tm(e, t) {
  return this.each((typeof t == "function" ? em : Qg)(e, t));
}
function* nm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var a = e[t], r = 0, i = a.length, s; r < i; ++r)
      (s = a[r]) && (yield s);
}
var td = [null];
function ke(e, t) {
  this._groups = e, this._parents = t;
}
function xn() {
  return new ke([[document.documentElement]], td);
}
function rm() {
  return this;
}
ke.prototype = xn.prototype = {
  constructor: ke,
  select: N0,
  selectAll: P0,
  selectChild: O0,
  selectChildren: Z0,
  filter: q0,
  data: G0,
  enter: z0,
  exit: Y0,
  join: X0,
  merge: J0,
  selection: rm,
  order: Q0,
  sort: eg,
  call: ng,
  nodes: rg,
  node: ag,
  size: ig,
  empty: sg,
  each: og,
  attr: pg,
  style: xg,
  property: Sg,
  classed: Ig,
  text: $g,
  html: kg,
  raise: Lg,
  lower: Bg,
  append: Fg,
  insert: Zg,
  remove: zg,
  clone: Vg,
  datum: Wg,
  on: Jg,
  dispatch: tm,
  [Symbol.iterator]: nm
};
function Pe(e) {
  return typeof e == "string" ? new ke([[document.querySelector(e)]], [document.documentElement]) : new ke([[e]], td);
}
function am(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Oe(e, t) {
  if (e = am(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var a = n.createSVGPoint();
      return a.x = e.clientX, a.y = e.clientY, a = a.matrixTransform(t.getScreenCTM().inverse()), [a.x, a.y];
    }
    if (t.getBoundingClientRect) {
      var r = t.getBoundingClientRect();
      return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const im = { passive: !1 }, ln = { capture: !0, passive: !1 };
function ki(e) {
  e.stopImmediatePropagation();
}
function Tt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nd(e) {
  var t = e.document.documentElement, n = Pe(e).on("dragstart.drag", Tt, ln);
  "onselectstart" in t ? n.on("selectstart.drag", Tt, ln) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rd(e, t) {
  var n = e.document.documentElement, a = Pe(e).on("dragstart.drag", null);
  t && (a.on("click.drag", Tt, ln), setTimeout(function() {
    a.on("click.drag", null);
  }, 0)), "onselectstart" in n ? a.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Dn = (e) => () => e;
function Gi(e, {
  sourceEvent: t,
  subject: n,
  target: a,
  identifier: r,
  active: i,
  x: s,
  y: o,
  dx: l,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: a, enumerable: !0, configurable: !0 },
    identifier: { value: r, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: o, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Gi.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function sm(e) {
  return !e.ctrlKey && !e.button;
}
function om() {
  return this.parentNode;
}
function lm(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function um() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ad() {
  var e = sm, t = om, n = lm, a = um, r = {}, i = ja("start", "drag", "end"), s = 0, o, l, u, f, d = 0;
  function c(_) {
    _.on("mousedown.drag", g).filter(a).on("touchstart.drag", h).on("touchmove.drag", x, im).on("touchend.drag touchcancel.drag", w).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, b) {
    if (!(f || !e.call(this, _, b))) {
      var S = y(this, t.call(this, _, b), _, b, "mouse");
      S && (Pe(_.view).on("mousemove.drag", m, ln).on("mouseup.drag", v, ln), nd(_.view), ki(_), u = !1, o = _.clientX, l = _.clientY, S("start", _));
    }
  }
  function m(_) {
    if (Tt(_), !u) {
      var b = _.clientX - o, S = _.clientY - l;
      u = b * b + S * S > d;
    }
    r.mouse("drag", _);
  }
  function v(_) {
    Pe(_.view).on("mousemove.drag mouseup.drag", null), rd(_.view, u), Tt(_), r.mouse("end", _);
  }
  function h(_, b) {
    if (e.call(this, _, b)) {
      var S = _.changedTouches, I = t.call(this, _, b), $ = S.length, R, L;
      for (R = 0; R < $; ++R)
        (L = y(this, I, _, b, S[R].identifier, S[R])) && (ki(_), L("start", _, S[R]));
    }
  }
  function x(_) {
    var b = _.changedTouches, S = b.length, I, $;
    for (I = 0; I < S; ++I)
      ($ = r[b[I].identifier]) && (Tt(_), $("drag", _, b[I]));
  }
  function w(_) {
    var b = _.changedTouches, S = b.length, I, $;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), I = 0; I < S; ++I)
      ($ = r[b[I].identifier]) && (ki(_), $("end", _, b[I]));
  }
  function y(_, b, S, I, $, R) {
    var L = i.copy(), D = Oe(R || S, b), O, H, E;
    if ((E = n.call(_, new Gi("beforestart", {
      sourceEvent: S,
      target: c,
      identifier: $,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), I)) != null)
      return O = E.x - D[0] || 0, H = E.y - D[1] || 0, function C(N, P, B) {
        var k = D, F;
        switch (N) {
          case "start":
            r[$] = C, F = s++;
            break;
          case "end":
            delete r[$], --s;
          // falls through
          case "drag":
            D = Oe(B || P, b), F = s;
            break;
        }
        L.call(
          N,
          _,
          new Gi(N, {
            sourceEvent: P,
            subject: E,
            target: c,
            identifier: $,
            active: F,
            x: D[0] + O,
            y: D[1] + H,
            dx: D[0] - k[0],
            dy: D[1] - k[1],
            dispatch: L
          }),
          I
        );
      };
  }
  return c.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Dn(!!_), c) : e;
  }, c.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Dn(_), c) : t;
  }, c.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Dn(_), c) : n;
  }, c.touchable = function(_) {
    return arguments.length ? (a = typeof _ == "function" ? _ : Dn(!!_), c) : a;
  }, c.on = function() {
    var _ = i.on.apply(i, arguments);
    return _ === i ? c : _;
  }, c.clickDistance = function(_) {
    return arguments.length ? (d = (_ = +_) * _, c) : Math.sqrt(d);
  }, c;
}
var Ot = 0, Yt = 0, Wt = 0, id = 1e3, Da, Xt, Pa = 0, pt = 0, Wa = 0, un = typeof performance == "object" && performance.now ? performance : Date, sd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function hs() {
  return pt || (sd(cm), pt = un.now() + Wa);
}
function cm() {
  pt = 0;
}
function ka() {
  this._call = this._time = this._next = null;
}
ka.prototype = od.prototype = {
  constructor: ka,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? hs() : +n) + (t == null ? 0 : +t), !this._next && Xt !== this && (Xt ? Xt._next = this : Da = this, Xt = this), this._call = e, this._time = n, Ki();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ki());
  }
};
function od(e, t, n) {
  var a = new ka();
  return a.restart(e, t, n), a;
}
function dm() {
  hs(), ++Ot;
  for (var e = Da, t; e; )
    (t = pt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ot;
}
function eo() {
  pt = (Pa = un.now()) + Wa, Ot = Yt = 0;
  try {
    dm();
  } finally {
    Ot = 0, hm(), pt = 0;
  }
}
function fm() {
  var e = un.now(), t = e - Pa;
  t > id && (Wa -= t, Pa = e);
}
function hm() {
  for (var e, t = Da, n, a = 1 / 0; t; )
    t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Da = n);
  Xt = e, Ki(a);
}
function Ki(e) {
  if (!Ot) {
    Yt && (Yt = clearTimeout(Yt));
    var t = e - pt;
    t > 24 ? (e < 1 / 0 && (Yt = setTimeout(eo, e - un.now() - Wa)), Wt && (Wt = clearInterval(Wt))) : (Wt || (Pa = un.now(), Wt = setInterval(fm, id)), Ot = 1, sd(eo));
  }
}
function to(e, t, n) {
  var a = new ka();
  return t = t == null ? 0 : +t, a.restart((r) => {
    a.stop(), e(r + t);
  }, t, n), a;
}
var pm = ja("start", "end", "cancel", "interrupt"), gm = [], ld = 0, no = 1, Yi = 2, Ia = 3, ro = 4, Xi = 5, Ma = 6;
function Ga(e, t, n, a, r, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  mm(e, n, {
    name: t,
    index: a,
    // For context during callback.
    group: r,
    // For context during callback.
    on: pm,
    tween: gm,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ld
  });
}
function ps(e, t) {
  var n = qe(e, t);
  if (n.state > ld) throw new Error("too late; already scheduled");
  return n;
}
function ze(e, t) {
  var n = qe(e, t);
  if (n.state > Ia) throw new Error("too late; already running");
  return n;
}
function qe(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function mm(e, t, n) {
  var a = e.__transition, r;
  a[t] = n, n.timer = od(i, 0, n.time);
  function i(u) {
    n.state = no, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var f, d, c, g;
    if (n.state !== no) return l();
    for (f in a)
      if (g = a[f], g.name === n.name) {
        if (g.state === Ia) return to(s);
        g.state === ro ? (g.state = Ma, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete a[f]) : +f < t && (g.state = Ma, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete a[f]);
      }
    if (to(function() {
      n.state === Ia && (n.state = ro, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Yi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Yi) {
      for (n.state = Ia, r = new Array(c = n.tween.length), f = 0, d = -1; f < c; ++f)
        (g = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (r[++d] = g);
      r.length = d + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Xi, 1), d = -1, c = r.length; ++d < c; )
      r[d].call(e, f);
    n.state === Xi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ma, n.timer.stop(), delete a[t];
    for (var u in a) return;
    delete e.__transition;
  }
}
function Ca(e, t) {
  var n = e.__transition, a, r, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((a = n[s]).name !== t) {
        i = !1;
        continue;
      }
      r = a.state > Yi && a.state < Xi, a.state = Ma, a.timer.stop(), a.on.call(r ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function vm(e) {
  return this.each(function() {
    Ca(this, e);
  });
}
function xm(e, t) {
  var n, a;
  return function() {
    var r = ze(this, e), i = r.tween;
    if (i !== n) {
      a = n = i;
      for (var s = 0, o = a.length; s < o; ++s)
        if (a[s].name === t) {
          a = a.slice(), a.splice(s, 1);
          break;
        }
    }
    r.tween = a;
  };
}
function ym(e, t, n) {
  var a, r;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ze(this, e), s = i.tween;
    if (s !== a) {
      r = (a = s).slice();
      for (var o = { name: t, value: n }, l = 0, u = r.length; l < u; ++l)
        if (r[l].name === t) {
          r[l] = o;
          break;
        }
      l === u && r.push(o);
    }
    i.tween = r;
  };
}
function _m(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var a = qe(this.node(), n).tween, r = 0, i = a.length, s; r < i; ++r)
      if ((s = a[r]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? xm : ym)(n, e, t));
}
function gs(e, t, n) {
  var a = e._id;
  return e.each(function() {
    var r = ze(this, a);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return qe(r, a).value[t];
  };
}
function ud(e, t) {
  var n;
  return (typeof t == "number" ? ut : t instanceof Ls ? Os : (n = Ls(t)) ? (t = n, Os) : wh)(e, t);
}
function wm(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sm(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function bm(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function Am(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function Em(e, t, n) {
  var a, r, i;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = o + "", s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o)));
  };
}
function Im(e, t, n) {
  var a, r, i;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = o + "", s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o)));
  };
}
function Mm(e, t) {
  var n = Va(e), a = n === "transform" ? Tp : ud;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Im : Em)(n, a, gs(this, "attr." + e, t)) : t == null ? (n.local ? Sm : wm)(n) : (n.local ? Am : bm)(n, a, t));
}
function Cm(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Nm(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function $m(e, t) {
  var n, a;
  function r() {
    var i = t.apply(this, arguments);
    return i !== a && (n = (a = i) && Nm(e, i)), n;
  }
  return r._value = t, r;
}
function Rm(e, t) {
  var n, a;
  function r() {
    var i = t.apply(this, arguments);
    return i !== a && (n = (a = i) && Cm(e, i)), n;
  }
  return r._value = t, r;
}
function Dm(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var a = Va(e);
  return this.tween(n, (a.local ? $m : Rm)(a, t));
}
function Pm(e, t) {
  return function() {
    ps(this, e).delay = +t.apply(this, arguments);
  };
}
function km(e, t) {
  return t = +t, function() {
    ps(this, e).delay = t;
  };
}
function Tm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Pm : km)(t, e)) : qe(this.node(), t).delay;
}
function Lm(e, t) {
  return function() {
    ze(this, e).duration = +t.apply(this, arguments);
  };
}
function Om(e, t) {
  return t = +t, function() {
    ze(this, e).duration = t;
  };
}
function Bm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Lm : Om)(t, e)) : qe(this.node(), t).duration;
}
function Fm(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ze(this, e).ease = t;
  };
}
function Hm(e) {
  var t = this._id;
  return arguments.length ? this.each(Fm(t, e)) : qe(this.node(), t).ease;
}
function Zm(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ze(this, e).ease = n;
  };
}
function qm(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zm(this._id, e));
}
function zm(e) {
  typeof e != "function" && (e = Vc(e));
  for (var t = this._groups, n = t.length, a = new Array(n), r = 0; r < n; ++r)
    for (var i = t[r], s = i.length, o = a[r] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && o.push(l);
  return new Ye(a, this._parents, this._name, this._id);
}
function Um(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, a = t.length, r = n.length, i = Math.min(a, r), s = new Array(a), o = 0; o < i; ++o)
    for (var l = t[o], u = n[o], f = l.length, d = s[o] = new Array(f), c, g = 0; g < f; ++g)
      (c = l[g] || u[g]) && (d[g] = c);
  for (; o < a; ++o)
    s[o] = t[o];
  return new Ye(s, this._parents, this._name, this._id);
}
function jm(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Vm(e, t, n) {
  var a, r, i = jm(t) ? ps : ze;
  return function() {
    var s = i(this, e), o = s.on;
    o !== a && (r = (a = o).copy()).on(t, n), s.on = r;
  };
}
function Wm(e, t) {
  var n = this._id;
  return arguments.length < 2 ? qe(this.node(), n).on.on(e) : this.each(Vm(n, e, t));
}
function Gm(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Km() {
  return this.on("end.remove", Gm(this._id));
}
function Ym(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ds(e));
  for (var a = this._groups, r = a.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = a[s], l = o.length, u = i[s] = new Array(l), f, d, c = 0; c < l; ++c)
      (f = o[c]) && (d = e.call(f, f.__data__, c, o)) && ("__data__" in f && (d.__data__ = f.__data__), u[c] = d, Ga(u[c], t, n, c, u, qe(f, n)));
  return new Ye(i, this._parents, t, n);
}
function Xm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = jc(e));
  for (var a = this._groups, r = a.length, i = [], s = [], o = 0; o < r; ++o)
    for (var l = a[o], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        for (var c = e.call(f, f.__data__, d, l), g, m = qe(f, n), v = 0, h = c.length; v < h; ++v)
          (g = c[v]) && Ga(g, t, n, v, c, m);
        i.push(c), s.push(f);
      }
  return new Ye(i, s, t, n);
}
var Jm = xn.prototype.constructor;
function Qm() {
  return new Jm(this._groups, this._parents);
}
function ev(e, t) {
  var n, a, r;
  return function() {
    var i = Lt(this, e), s = (this.style.removeProperty(e), Lt(this, e));
    return i === s ? null : i === n && s === a ? r : r = t(n = i, a = s);
  };
}
function cd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tv(e, t, n) {
  var a, r = n + "", i;
  return function() {
    var s = Lt(this, e);
    return s === r ? null : s === a ? i : i = t(a = s, n);
  };
}
function nv(e, t, n) {
  var a, r, i;
  return function() {
    var s = Lt(this, e), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), Lt(this, e))), s === l ? null : s === a && l === r ? i : (r = l, i = t(a = s, o));
  };
}
function rv(e, t) {
  var n, a, r, i = "style." + t, s = "end." + i, o;
  return function() {
    var l = ze(this, e), u = l.on, f = l.value[i] == null ? o || (o = cd(t)) : void 0;
    (u !== n || r !== f) && (a = (n = u).copy()).on(s, r = f), l.on = a;
  };
}
function av(e, t, n) {
  var a = (e += "") == "transform" ? kp : ud;
  return t == null ? this.styleTween(e, ev(e, a)).on("end.style." + e, cd(e)) : typeof t == "function" ? this.styleTween(e, nv(e, a, gs(this, "style." + e, t))).each(rv(this._id, e)) : this.styleTween(e, tv(e, a, t), n).on("end.style." + e, null);
}
function iv(e, t, n) {
  return function(a) {
    this.style.setProperty(e, t.call(this, a), n);
  };
}
function sv(e, t, n) {
  var a, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (a = (r = s) && iv(e, s, n)), a;
  }
  return i._value = t, i;
}
function ov(e, t, n) {
  var a = "style." + (e += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (t == null) return this.tween(a, null);
  if (typeof t != "function") throw new Error();
  return this.tween(a, sv(e, t, n ?? ""));
}
function lv(e) {
  return function() {
    this.textContent = e;
  };
}
function uv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function cv(e) {
  return this.tween("text", typeof e == "function" ? uv(gs(this, "text", e)) : lv(e == null ? "" : e + ""));
}
function dv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function fv(e) {
  var t, n;
  function a() {
    var r = e.apply(this, arguments);
    return r !== n && (t = (n = r) && dv(r)), t;
  }
  return a._value = e, a;
}
function hv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, fv(e));
}
function pv() {
  for (var e = this._name, t = this._id, n = dd(), a = this._groups, r = a.length, i = 0; i < r; ++i)
    for (var s = a[i], o = s.length, l, u = 0; u < o; ++u)
      if (l = s[u]) {
        var f = qe(l, t);
        Ga(l, e, n, u, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Ye(a, this._parents, e, n);
}
function gv() {
  var e, t, n = this, a = n._id, r = n.size();
  return new Promise(function(i, s) {
    var o = { value: s }, l = { value: function() {
      --r === 0 && i();
    } };
    n.each(function() {
      var u = ze(this, a), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), u.on = t;
    }), r === 0 && i();
  });
}
var mv = 0;
function Ye(e, t, n, a) {
  this._groups = e, this._parents = t, this._name = n, this._id = a;
}
function dd() {
  return ++mv;
}
var Ve = xn.prototype;
Ye.prototype = {
  constructor: Ye,
  select: Ym,
  selectAll: Xm,
  selectChild: Ve.selectChild,
  selectChildren: Ve.selectChildren,
  filter: zm,
  merge: Um,
  selection: Qm,
  transition: pv,
  call: Ve.call,
  nodes: Ve.nodes,
  node: Ve.node,
  size: Ve.size,
  empty: Ve.empty,
  each: Ve.each,
  on: Wm,
  attr: Mm,
  attrTween: Dm,
  style: av,
  styleTween: ov,
  text: cv,
  textTween: hv,
  remove: Km,
  tween: _m,
  delay: Tm,
  duration: Bm,
  ease: Hm,
  easeVarying: qm,
  end: gv,
  [Symbol.iterator]: Ve[Symbol.iterator]
};
function vv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vv
};
function yv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function _v(e) {
  var t, n;
  e instanceof Ye ? (t = e._id, e = e._name) : (t = dd(), (n = xv).time = hs(), e = e == null ? null : e + "");
  for (var a = this._groups, r = a.length, i = 0; i < r; ++i)
    for (var s = a[i], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && Ga(l, e, t, u, s, n || yv(l, t));
  return new Ye(a, this._parents, e, t);
}
xn.prototype.interrupt = vm;
xn.prototype.transition = _v;
const Pn = (e) => () => e;
function wv(e, {
  sourceEvent: t,
  target: n,
  transform: a,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: a, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function Ge(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Ge.prototype = {
  constructor: Ge,
  scale: function(e) {
    return e === 1 ? this : new Ge(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ge(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Ka = new Ge(1, 0, 0);
fd.prototype = Ge.prototype;
function fd(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ka;
  return e.__zoom;
}
function Ti(e) {
  e.stopImmediatePropagation();
}
function Gt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Sv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function bv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ao() {
  return this.__zoom || Ka;
}
function Av(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ev() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Iv(e, t, n) {
  var a = e.invertX(t[0][0]) - n[0][0], r = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    r > a ? (a + r) / 2 : Math.min(0, a) || Math.max(0, r),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function hd() {
  var e = Sv, t = bv, n = Iv, a = Av, r = Ev, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, l = Aa, u = ja("start", "zoom", "end"), f, d, c, g = 500, m = 150, v = 0, h = 10;
  function x(E) {
    E.property("__zoom", ao).on("wheel.zoom", $, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", L).filter(r).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(E, C, N, P) {
    var B = E.selection ? E.selection() : E;
    B.property("__zoom", ao), E !== B ? b(E, C, N, P) : B.interrupt().each(function() {
      S(this, arguments).event(P).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, x.scaleBy = function(E, C, N, P) {
    x.scaleTo(E, function() {
      var B = this.__zoom.k, k = typeof C == "function" ? C.apply(this, arguments) : C;
      return B * k;
    }, N, P);
  }, x.scaleTo = function(E, C, N, P) {
    x.transform(E, function() {
      var B = t.apply(this, arguments), k = this.__zoom, F = N == null ? _(B) : typeof N == "function" ? N.apply(this, arguments) : N, q = k.invert(F), z = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(y(w(k, z), F, q), B, s);
    }, N, P);
  }, x.translateBy = function(E, C, N, P) {
    x.transform(E, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof N == "function" ? N.apply(this, arguments) : N
      ), t.apply(this, arguments), s);
    }, null, P);
  }, x.translateTo = function(E, C, N, P, B) {
    x.transform(E, function() {
      var k = t.apply(this, arguments), F = this.__zoom, q = P == null ? _(k) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Ka.translate(q[0], q[1]).scale(F.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof N == "function" ? -N.apply(this, arguments) : -N
      ), k, s);
    }, P, B);
  };
  function w(E, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === E.k ? E : new Ge(C, E.x, E.y);
  }
  function y(E, C, N) {
    var P = C[0] - N[0] * E.k, B = C[1] - N[1] * E.k;
    return P === E.x && B === E.y ? E : new Ge(E.k, P, B);
  }
  function _(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function b(E, C, N, P) {
    E.on("start.zoom", function() {
      S(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var B = this, k = arguments, F = S(B, k).event(P), q = t.apply(B, k), z = N == null ? _(q) : typeof N == "function" ? N.apply(B, k) : N, X = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), Y = B.__zoom, ee = typeof C == "function" ? C.apply(B, k) : C, le = l(Y.invert(z).concat(X / Y.k), ee.invert(z).concat(X / ee.k));
      return function(te) {
        if (te === 1) te = ee;
        else {
          var Z = le(te), J = X / Z[2];
          te = new Ge(J, z[0] - Z[0] * J, z[1] - Z[1] * J);
        }
        F.zoom(null, te);
      };
    });
  }
  function S(E, C, N) {
    return !N && E.__zooming || new I(E, C);
  }
  function I(E, C) {
    this.that = E, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, C), this.taps = 0;
  }
  I.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, C) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var C = Pe(this.that).datum();
      u.call(
        E,
        this.that,
        new wv(E, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: u
        }),
        C
      );
    }
  };
  function $(E, ...C) {
    if (!e.apply(this, arguments)) return;
    var N = S(this, C).event(E), P = this.__zoom, B = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, a.apply(this, arguments)))), k = Oe(E);
    if (N.wheel)
      (N.mouse[0][0] !== k[0] || N.mouse[0][1] !== k[1]) && (N.mouse[1] = P.invert(N.mouse[0] = k)), clearTimeout(N.wheel);
    else {
      if (P.k === B) return;
      N.mouse = [k, P.invert(k)], Ca(this), N.start();
    }
    Gt(E), N.wheel = setTimeout(F, m), N.zoom("mouse", n(y(w(P, B), N.mouse[0], N.mouse[1]), N.extent, s));
    function F() {
      N.wheel = null, N.end();
    }
  }
  function R(E, ...C) {
    if (c || !e.apply(this, arguments)) return;
    var N = E.currentTarget, P = S(this, C, !0).event(E), B = Pe(E.view).on("mousemove.zoom", z, !0).on("mouseup.zoom", X, !0), k = Oe(E, N), F = E.clientX, q = E.clientY;
    nd(E.view), Ti(E), P.mouse = [k, this.__zoom.invert(k)], Ca(this), P.start();
    function z(Y) {
      if (Gt(Y), !P.moved) {
        var ee = Y.clientX - F, le = Y.clientY - q;
        P.moved = ee * ee + le * le > v;
      }
      P.event(Y).zoom("mouse", n(y(P.that.__zoom, P.mouse[0] = Oe(Y, N), P.mouse[1]), P.extent, s));
    }
    function X(Y) {
      B.on("mousemove.zoom mouseup.zoom", null), rd(Y.view, P.moved), Gt(Y), P.event(Y).end();
    }
  }
  function L(E, ...C) {
    if (e.apply(this, arguments)) {
      var N = this.__zoom, P = Oe(E.changedTouches ? E.changedTouches[0] : E, this), B = N.invert(P), k = N.k * (E.shiftKey ? 0.5 : 2), F = n(y(w(N, k), P, B), t.apply(this, C), s);
      Gt(E), o > 0 ? Pe(this).transition().duration(o).call(b, F, P, E) : Pe(this).call(x.transform, F, P, E);
    }
  }
  function D(E, ...C) {
    if (e.apply(this, arguments)) {
      var N = E.touches, P = N.length, B = S(this, C, E.changedTouches.length === P).event(E), k, F, q, z;
      for (Ti(E), F = 0; F < P; ++F)
        q = N[F], z = Oe(q, this), z = [z, this.__zoom.invert(z), q.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== z[2] && (B.touch1 = z, B.taps = 0) : (B.touch0 = z, k = !0, B.taps = 1 + !!f);
      f && (f = clearTimeout(f)), k && (B.taps < 2 && (d = z[0], f = setTimeout(function() {
        f = null;
      }, g)), Ca(this), B.start());
    }
  }
  function O(E, ...C) {
    if (this.__zooming) {
      var N = S(this, C).event(E), P = E.changedTouches, B = P.length, k, F, q, z;
      for (Gt(E), k = 0; k < B; ++k)
        F = P[k], q = Oe(F, this), N.touch0 && N.touch0[2] === F.identifier ? N.touch0[0] = q : N.touch1 && N.touch1[2] === F.identifier && (N.touch1[0] = q);
      if (F = N.that.__zoom, N.touch1) {
        var X = N.touch0[0], Y = N.touch0[1], ee = N.touch1[0], le = N.touch1[1], te = (te = ee[0] - X[0]) * te + (te = ee[1] - X[1]) * te, Z = (Z = le[0] - Y[0]) * Z + (Z = le[1] - Y[1]) * Z;
        F = w(F, Math.sqrt(te / Z)), q = [(X[0] + ee[0]) / 2, (X[1] + ee[1]) / 2], z = [(Y[0] + le[0]) / 2, (Y[1] + le[1]) / 2];
      } else if (N.touch0) q = N.touch0[0], z = N.touch0[1];
      else return;
      N.zoom("touch", n(y(F, q, z), N.extent, s));
    }
  }
  function H(E, ...C) {
    if (this.__zooming) {
      var N = S(this, C).event(E), P = E.changedTouches, B = P.length, k, F;
      for (Ti(E), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, g), k = 0; k < B; ++k)
        F = P[k], N.touch0 && N.touch0[2] === F.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === F.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (F = Oe(F, this), Math.hypot(d[0] - F[0], d[1] - F[1]) < h)) {
        var q = Pe(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(E) {
    return arguments.length ? (a = typeof E == "function" ? E : Pn(+E), x) : a;
  }, x.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Pn(!!E), x) : e;
  }, x.touchable = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Pn(!!E), x) : r;
  }, x.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Pn([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), x) : t;
  }, x.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], x) : [i[0], i[1]];
  }, x.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], x) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, x.constrain = function(E) {
    return arguments.length ? (n = E, x) : n;
  }, x.duration = function(E) {
    return arguments.length ? (o = +E, x) : o;
  }, x.interpolate = function(E) {
    return arguments.length ? (l = E, x) : l;
  }, x.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? x : E;
  }, x.clickDistance = function(E) {
    return arguments.length ? (v = (E = +E) * E, x) : Math.sqrt(v);
  }, x.tapDistance = function(E) {
    return arguments.length ? (h = +E, x) : h;
  }, x;
}
const Ze = {
  error001: (e = "react") => `Seems like you have not used zustand provider as an ancestor. Help: https://${e}flow.dev/error#001`,
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: a }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : a}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  error016: (e) => `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
}, cn = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], pd = ["Enter", " ", "Escape"], gd = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Bt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Bt || (Bt = {}));
var ht;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ht || (ht = {}));
var dn;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(dn || (dn = {}));
const md = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var it;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(it || (it = {}));
var Ta;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ta || (Ta = {}));
var ie;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ie || (ie = {}));
const io = {
  [ie.Left]: ie.Right,
  [ie.Right]: ie.Left,
  [ie.Top]: ie.Bottom,
  [ie.Bottom]: ie.Top
};
function vd(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const xd = (e) => "id" in e && "source" in e && "target" in e, Mv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ms = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), yn = (e, t = [0, 0]) => {
  const { width: n, height: a } = Xe(e), r = e.origin ?? t, i = n * r[0], s = a * r[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Cv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((a, r) => {
    const i = typeof r == "string";
    let s = !t.nodeLookup && !i ? r : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(r) : ms(r) ? r : t.nodeLookup.get(r.id));
    const o = s ? La(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ya(a, o);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Xa(n);
}, _n = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, a = !1;
  return e.forEach((r) => {
    (t.filter === void 0 || t.filter(r)) && (n = Ya(n, La(r)), a = !0);
  }), a ? Xa(n) : { x: 0, y: 0, width: 0, height: 0 };
}, vs = (e, t, [n, a, r] = [0, 0, 1], i = !1, s = !1) => {
  const o = {
    ...Ut(t, [n, a, r]),
    width: t.width / r,
    height: t.height / r
  }, l = [];
  for (const u of e.values()) {
    const { measured: f, selectable: d = !0, hidden: c = !1 } = u;
    if (s && !d || c)
      continue;
    const g = f.width ?? u.width ?? u.initialWidth ?? null, m = f.height ?? u.height ?? u.initialHeight ?? null, v = fn(o, Ht(u)), h = (g ?? 0) * (m ?? 0), x = i && v > 0;
    (!u.internals.handleBounds || x || v >= h || u.dragging) && l.push(u);
  }
  return l;
}, Nv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((a) => {
    n.add(a.id);
  }), t.filter((a) => n.has(a.source) || n.has(a.target));
};
function $v(e, t) {
  const n = /* @__PURE__ */ new Map(), a = t?.nodes ? new Set(t.nodes.map((r) => r.id)) : null;
  return e.forEach((r) => {
    r.measured.width && r.measured.height && (t?.includeHiddenNodes || !r.hidden) && (!a || a.has(r.id)) && n.set(r.id, r);
  }), n;
}
async function Rv({ nodes: e, width: t, height: n, panZoom: a, minZoom: r, maxZoom: i }, s) {
  if (e.size === 0)
    return !0;
  const o = $v(e, s), l = _n(o), u = ys(l, t, n, s?.minZoom ?? r, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await a.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), !0;
}
function yd({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: a = [0, 0], nodeExtent: r, onError: i }) {
  const s = n.get(e), o = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = o ? o.internals.positionAbsolute : { x: 0, y: 0 }, f = s.origin ?? a;
  let d = s.extent || r;
  if (s.extent === "parent" && !s.expandParent)
    if (!o)
      i?.("005", Ze.error005());
    else {
      const g = o.measured.width, m = o.measured.height;
      g && m && (d = [
        [l, u],
        [l + g, u + m]
      ]);
    }
  else o && mt(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const c = mt(d) ? gt(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Ze.error015()), {
    position: {
      x: c.x - l + (s.measured.width ?? 0) * f[0],
      y: c.y - u + (s.measured.height ?? 0) * f[1]
    },
    positionAbsolute: c
  };
}
async function Dv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: a, onBeforeDelete: r }) {
  const i = new Set(e.map((c) => c.id)), s = [];
  for (const c of n) {
    if (c.deletable === !1)
      continue;
    const g = i.has(c.id), m = !g && c.parentId && s.find((v) => v.id === c.parentId);
    (g || m) && s.push(c);
  }
  const o = new Set(t.map((c) => c.id)), l = a.filter((c) => c.deletable !== !1), f = Nv(s, l);
  for (const c of l)
    o.has(c.id) && !f.find((m) => m.id === c.id) && f.push(c);
  if (!r)
    return {
      edges: f,
      nodes: s
    };
  const d = await r({
    nodes: s,
    edges: f
  });
  return typeof d == "boolean" ? d ? { edges: f, nodes: s } : { edges: [], nodes: [] } : d;
}
const Ft = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), gt = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ft(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Ft(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function _d(e, t, n) {
  const { width: a, height: r } = Xe(n), { x: i, y: s } = n.internals.positionAbsolute;
  return gt(e, [
    [i, s],
    [i + a, s + r]
  ], t);
}
const so = (e, t, n) => e < t ? Ft(Math.abs(e - t), 1, t) / t : e > n ? -Ft(Math.abs(e - n), 1, t) / t : 0, xs = (e, t, n = 15, a = 40) => {
  const r = so(e.x, a, t.width - a) * n, i = so(e.y, a, t.height - a) * n;
  return [r, i];
}, Ya = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ji = ({ x: e, y: t, width: n, height: a }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + a
}), Xa = ({ x: e, y: t, x2: n, y2: a }) => ({
  x: e,
  y: t,
  width: n - e,
  height: a - t
}), Ht = (e, t = [0, 0]) => {
  const { x: n, y: a } = ms(e) ? e.internals.positionAbsolute : yn(e, t);
  return {
    x: n,
    y: a,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, La = (e, t = [0, 0]) => {
  const { x: n, y: a } = ms(e) ? e.internals.positionAbsolute : yn(e, t);
  return {
    x: n,
    y: a,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, wd = (e, t) => Xa(Ya(Ji(e), Ji(t))), fn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), a = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * a);
}, oo = (e) => Fe(e.width) && Fe(e.height) && Fe(e.x) && Fe(e.y), Fe = (e) => !isNaN(e) && isFinite(e), Sd = (e, t) => (n, a) => {
}, wn = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ut = ({ x: e, y: t }, [n, a, r], i = !1, s = [1, 1]) => {
  const o = {
    x: (e - n) / r,
    y: (t - a) / r
  };
  return i ? wn(o, s) : o;
}, Zt = ({ x: e, y: t }, [n, a, r]) => ({
  x: e * r + n,
  y: t * r + a
});
function _t(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Pv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const a = _t(e, n), r = _t(e, t);
    return {
      top: a,
      right: r,
      bottom: a,
      left: r,
      x: r * 2,
      y: a * 2
    };
  }
  if (typeof e == "object") {
    const a = _t(e.top ?? e.y ?? 0, n), r = _t(e.bottom ?? e.y ?? 0, n), i = _t(e.left ?? e.x ?? 0, t), s = _t(e.right ?? e.x ?? 0, t);
    return { top: a, right: s, bottom: r, left: i, x: i + s, y: a + r };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function kv(e, t, n, a, r, i) {
  const { x: s, y: o } = Zt(e, [t, n, a]), { x: l, y: u } = Zt({ x: e.x + e.width, y: e.y + e.height }, [t, n, a]), f = r - l, d = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(o),
    right: Math.floor(f),
    bottom: Math.floor(d)
  };
}
const ys = (e, t, n, a, r, i) => {
  const s = Pv(i, t, n), o = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(o, l), f = Ft(u, a, r), d = e.x + e.width / 2, c = e.y + e.height / 2, g = t / 2 - d * f, m = n / 2 - c * f, v = kv(e, g, m, f, t, n), h = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: g - h.left + h.right,
    y: m - h.top + h.bottom,
    zoom: f
  };
}, hn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function mt(e) {
  return e != null && e !== "parent";
}
function Xe(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function bd(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Ad(e, t = { width: 0, height: 0 }, n, a, r) {
  const i = { ...e }, s = a.get(n);
  if (s) {
    const o = s.origin || r;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * o[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * o[1];
  }
  return i;
}
function lo(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Tv() {
  let e, t;
  return { promise: new Promise((a, r) => {
    e = a, t = r;
  }), resolve: e, reject: t };
}
function Lv(e) {
  return { ...gd, ...e || {} };
}
function sn(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: a, containerBounds: r }) {
  const { x: i, y: s } = He(e), o = Ut({ x: i - (r?.left ?? 0), y: s - (r?.top ?? 0) }, a), { x: l, y: u } = n ? wn(o, t) : o;
  return {
    xSnapped: l,
    ySnapped: u,
    ...o
  };
}
const _s = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Ed = (e) => e?.getRootNode?.() || window?.document, Ov = ["INPUT", "SELECT", "TEXTAREA"];
function Id(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Ov.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Md = (e) => "clientX" in e, He = (e, t) => {
  const n = Md(e), a = n ? e.clientX : e.touches?.[0].clientX, r = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: a - (t?.left ?? 0),
    y: r - (t?.top ?? 0)
  };
}, uo = (e, t, n, a, r) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const o = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: r,
      position: s.getAttribute("data-handlepos"),
      x: (o.left - n.left) / a,
      y: (o.top - n.top) / a,
      ..._s(s)
    };
  });
};
function Cd({ sourceX: e, sourceY: t, targetX: n, targetY: a, sourceControlX: r, sourceControlY: i, targetControlX: s, targetControlY: o }) {
  const l = e * 0.125 + r * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + o * 0.375 + a * 0.125, f = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, f, d];
}
function kn(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function co({ pos: e, x1: t, y1: n, x2: a, y2: r, c: i }) {
  switch (e) {
    case ie.Left:
      return [t - kn(t - a, i), n];
    case ie.Right:
      return [t + kn(a - t, i), n];
    case ie.Top:
      return [t, n - kn(n - r, i)];
    case ie.Bottom:
      return [t, n + kn(r - n, i)];
  }
}
function Nd({ sourceX: e, sourceY: t, sourcePosition: n = ie.Bottom, targetX: a, targetY: r, targetPosition: i = ie.Top, curvature: s = 0.25 }) {
  const [o, l] = co({
    pos: n,
    x1: e,
    y1: t,
    x2: a,
    y2: r,
    c: s
  }), [u, f] = co({
    pos: i,
    x1: a,
    y1: r,
    x2: e,
    y2: t,
    c: s
  }), [d, c, g, m] = Cd({
    sourceX: e,
    sourceY: t,
    targetX: a,
    targetY: r,
    sourceControlX: o,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: f
  });
  return [
    `M${e},${t} C${o},${l} ${u},${f} ${a},${r}`,
    d,
    c,
    g,
    m
  ];
}
function $d({ sourceX: e, sourceY: t, targetX: n, targetY: a }) {
  const r = Math.abs(n - e) / 2, i = n < e ? n + r : n - r, s = Math.abs(a - t) / 2, o = a < t ? a + s : a - s;
  return [i, o, r, s];
}
function Bv({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: a = 0, elevateOnSelect: r = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return a;
  const s = r && n ? a + 1e3 : a, o = Math.max(e.parentId || r && e.selected ? e.internals.z : 0, t.parentId || r && t.selected ? t.internals.z : 0);
  return s + o;
}
function Fv({ sourceNode: e, targetNode: t, width: n, height: a, transform: r }) {
  const i = Ya(La(e), La(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -r[0] / r[2],
    y: -r[1] / r[2],
    width: n / r[2],
    height: a / r[2]
  };
  return fn(s, Xa(i)) > 0;
}
const Hv = ({ source: e, sourceHandle: t, target: n, targetHandle: a }) => `xy-edge__${e}${t || ""}-${n}${a || ""}`, Zv = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), qv = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return n.onError?.("006", Ze.error006()), t;
  const a = n.getEdgeId || Hv;
  let r;
  return xd(e) ? r = { ...e } : r = {
    ...e,
    id: a(e)
  }, Zv(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function Rd({ sourceX: e, sourceY: t, targetX: n, targetY: a }) {
  const [r, i, s, o] = $d({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: a
  });
  return [`M ${e},${t}L ${n},${a}`, r, i, s, o];
}
const fo = {
  [ie.Left]: { x: -1, y: 0 },
  [ie.Right]: { x: 1, y: 0 },
  [ie.Top]: { x: 0, y: -1 },
  [ie.Bottom]: { x: 0, y: 1 }
}, zv = ({ source: e, sourcePosition: t = ie.Bottom, target: n }) => t === ie.Left || t === ie.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ho = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Uv({ source: e, sourcePosition: t = ie.Bottom, target: n, targetPosition: a = ie.Top, center: r, offset: i, stepPosition: s }) {
  const o = fo[t], l = fo[a], u = { x: e.x + o.x * i, y: e.y + o.y * i }, f = { x: n.x + l.x * i, y: n.y + l.y * i }, d = zv({
    source: u,
    sourcePosition: t,
    target: f
  }), c = d.x !== 0 ? "x" : "y", g = d[c];
  let m = [], v, h;
  const x = { x: 0, y: 0 }, w = { x: 0, y: 0 }, [, , y, _] = $d({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (o[c] * l[c] === -1) {
    c === "x" ? (v = r.x ?? u.x + (f.x - u.x) * s, h = r.y ?? (u.y + f.y) / 2) : (v = r.x ?? (u.x + f.x) / 2, h = r.y ?? u.y + (f.y - u.y) * s);
    const $ = [
      { x: v, y: u.y },
      { x: v, y: f.y }
    ], R = [
      { x: u.x, y: h },
      { x: f.x, y: h }
    ];
    o[c] === g ? m = c === "x" ? $ : R : m = c === "x" ? R : $;
  } else {
    const $ = [{ x: u.x, y: f.y }], R = [{ x: f.x, y: u.y }];
    if (c === "x" ? m = o.x === g ? R : $ : m = o.y === g ? $ : R, t === a) {
      const E = Math.abs(e[c] - n[c]);
      if (E <= i) {
        const C = Math.min(i - 1, i - E);
        o[c] === g ? x[c] = (u[c] > e[c] ? -1 : 1) * C : w[c] = (f[c] > n[c] ? -1 : 1) * C;
      }
    }
    if (t !== a) {
      const E = c === "x" ? "y" : "x", C = o[c] === l[E], N = u[E] > f[E], P = u[E] < f[E];
      (o[c] === 1 && (!C && N || C && P) || o[c] !== 1 && (!C && P || C && N)) && (m = c === "x" ? $ : R);
    }
    const L = { x: u.x + x.x, y: u.y + x.y }, D = { x: f.x + w.x, y: f.y + w.y }, O = Math.max(Math.abs(L.x - m[0].x), Math.abs(D.x - m[0].x)), H = Math.max(Math.abs(L.y - m[0].y), Math.abs(D.y - m[0].y));
    O >= H ? (v = (L.x + D.x) / 2, h = m[0].y) : (v = m[0].x, h = (L.y + D.y) / 2);
  }
  const b = { x: u.x + x.x, y: u.y + x.y }, S = { x: f.x + w.x, y: f.y + w.y };
  return [[
    e,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...b.x !== m[0].x || b.y !== m[0].y ? [b] : [],
    ...m,
    ...S.x !== m[m.length - 1].x || S.y !== m[m.length - 1].y ? [S] : [],
    n
  ], v, h, y, _];
}
function jv(e, t, n, a) {
  const r = Math.min(ho(e, t) / 2, ho(t, n) / 2, a), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, f = e.y < n.y ? 1 : -1;
    return `L ${i + r * u},${s}Q ${i},${s} ${i},${s + r * f}`;
  }
  const o = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + r * l}Q ${i},${s} ${i + r * o},${s}`;
}
function Oa({ sourceX: e, sourceY: t, sourcePosition: n = ie.Bottom, targetX: a, targetY: r, targetPosition: i = ie.Top, borderRadius: s = 5, centerX: o, centerY: l, offset: u = 20, stepPosition: f = 0.5 }) {
  const [d, c, g, m, v] = Uv({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: a, y: r },
    targetPosition: i,
    center: { x: o, y: l },
    offset: u,
    stepPosition: f
  });
  let h = `M${d[0].x} ${d[0].y}`;
  for (let x = 1; x < d.length - 1; x++)
    h += jv(d[x - 1], d[x], d[x + 1], s);
  return h += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [h, c, g, m, v];
}
function po(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Vv(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!po(t) || !po(n))
    return null;
  const a = t.internals.handleBounds || go(t.handles), r = n.internals.handleBounds || go(n.handles), i = mo(a?.source ?? [], e.sourceHandle), s = mo(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Bt.Strict ? r?.target ?? [] : (r?.target ?? []).concat(r?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Ze.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const o = i?.position || ie.Bottom, l = s?.position || ie.Top, u = vt(t, i, o), f = vt(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: o,
    targetPosition: l
  };
}
function go(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const a of e)
    a.width = a.width ?? 1, a.height = a.height ?? 1, a.type === "source" ? t.push(a) : a.type === "target" && n.push(a);
  return {
    source: t,
    target: n
  };
}
function vt(e, t, n = ie.Left, a = !1) {
  const r = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: o } = t ?? Xe(e);
  if (a)
    return { x: r + s / 2, y: i + o / 2 };
  switch (t?.position ?? n) {
    case ie.Top:
      return { x: r + s / 2, y: i };
    case ie.Right:
      return { x: r + s, y: i + o / 2 };
    case ie.Bottom:
      return { x: r + s / 2, y: i + o };
    case ie.Left:
      return { x: r, y: i + o / 2 };
  }
}
function mo(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Qi(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((a) => `${a}=${e[a]}`).join("&")}` : "";
}
function Wv(e, { id: t, defaultColor: n, defaultMarkerStart: a, defaultMarkerEnd: r }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, o) => ([o.markerStart || a, o.markerEnd || r].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Qi(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, o) => s.id.localeCompare(o.id));
}
const Dd = 1e3, Gv = 10, ws = {
  nodeOrigin: [0, 0],
  nodeExtent: cn,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Kv = {
  ...ws,
  checkEquality: !0
};
function Ss(e, t) {
  const n = { ...e };
  for (const a in t)
    t[a] !== void 0 && (n[a] = t[a]);
  return n;
}
function Yv(e, t, n) {
  const a = Ss(ws, n);
  for (const r of e.values())
    if (r.parentId)
      As(r, e, t, a);
    else {
      const i = yn(r, a.nodeOrigin), s = mt(r.extent) ? r.extent : a.nodeExtent, o = gt(i, s, Xe(r));
      r.internals.positionAbsolute = o;
    }
}
function Xv(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], a = [];
  for (const r of e.handles) {
    const i = {
      id: r.id,
      width: r.width ?? 1,
      height: r.height ?? 1,
      nodeId: e.id,
      x: r.x,
      y: r.y,
      position: r.position,
      type: r.type
    };
    r.type === "source" ? n.push(i) : r.type === "target" && a.push(i);
  }
  return {
    source: n,
    target: a
  };
}
function bs(e) {
  return e === "manual";
}
function es(e, t, n, a = {}) {
  const r = Ss(Kv, a), i = { i: 0 }, s = new Map(t), o = r?.elevateNodesOnSelect && !bs(r.zIndexMode) ? Dd : 0;
  let l = e.length > 0, u = !1;
  t.clear(), n.clear();
  for (const f of e) {
    let d = s.get(f.id);
    if (r.checkEquality && f === d?.internals.userNode)
      t.set(f.id, d);
    else {
      const c = yn(f, r.nodeOrigin), g = mt(f.extent) ? f.extent : r.nodeExtent, m = gt(c, g, Xe(f));
      d = {
        ...r.defaults,
        ...f,
        measured: {
          width: f.measured?.width,
          height: f.measured?.height
        },
        internals: {
          positionAbsolute: m,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Xv(f, d),
          z: Pd(f, o, r.zIndexMode),
          userNode: f
        }
      }, t.set(f.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), f.parentId && As(d, t, n, a, i), u ||= f.selected ?? !1;
  }
  return { nodesInitialized: l, hasSelectedNodes: u };
}
function Jv(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function As(e, t, n, a, r) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: o, zIndexMode: l } = Ss(ws, a), u = e.parentId, f = t.get(u);
  if (!f) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Jv(e, n), r && !f.parentId && f.internals.rootParentIndex === void 0 && l === "auto" && (f.internals.rootParentIndex = ++r.i, f.internals.z = f.internals.z + r.i * Gv), r && f.internals.rootParentIndex !== void 0 && (r.i = f.internals.rootParentIndex);
  const d = i && !bs(l) ? Dd : 0, { x: c, y: g, z: m } = Qv(e, f, s, o, d, l), { positionAbsolute: v } = e.internals, h = c !== v.x || g !== v.y;
  (h || m !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: c, y: g } : v,
      z: m
    }
  });
}
function Pd(e, t, n) {
  const a = Fe(e.zIndex) ? e.zIndex : 0;
  return bs(n) ? a : a + (e.selected ? t : 0);
}
function Qv(e, t, n, a, r, i) {
  const { x: s, y: o } = t.internals.positionAbsolute, l = Xe(e), u = yn(e, n), f = mt(e.extent) ? gt(u, e.extent, l) : u;
  let d = gt({ x: s + f.x, y: o + f.y }, a, l);
  e.extent === "parent" && (d = _d(d, l, t));
  const c = Pd(e, r, i), g = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: g >= c ? g + 1 : c
  };
}
function Es(e, t, n, a = [0, 0]) {
  const r = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const o = t.get(s.parentId);
    if (!o)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ht(o), u = wd(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: o });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: o }, l) => {
    const u = o.internals.positionAbsolute, f = Xe(o), d = o.origin ?? a, c = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(f.width, Math.round(s.width)), v = Math.max(f.height, Math.round(s.height)), h = (m - f.width) * d[0], x = (v - f.height) * d[1];
    (c > 0 || g > 0 || h || x) && (r.push({
      id: l,
      type: "position",
      position: {
        x: o.position.x - c + h,
        y: o.position.y - g + x
      }
    }), n.get(l)?.forEach((w) => {
      e.some((y) => y.id === w.id) || r.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + c,
          y: w.position.y + g
        }
      });
    })), (f.width < s.width || f.height < s.height || c || g) && r.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (c ? d[0] * c - h : 0),
        height: v + (g ? d[1] * g - x : 0)
      }
    });
  }), r;
}
function e1(e, t, n, a, r, i, s) {
  const o = a?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!o)
    return { changes: [], updatedInternals: l };
  const u = [], f = window.getComputedStyle(o), { m22: d } = new window.DOMMatrixReadOnly(f.transform), c = [];
  for (const g of e.values()) {
    const m = t.get(g.id);
    if (!m)
      continue;
    if (m.hidden) {
      t.set(m.id, {
        ...m,
        internals: {
          ...m.internals,
          handleBounds: void 0
        }
      }), l = !0;
      continue;
    }
    const v = _s(g.nodeElement), h = m.measured.width !== v.width || m.measured.height !== v.height;
    if (!!(v.width && v.height && (h || !m.internals.handleBounds || g.force))) {
      const w = g.nodeElement.getBoundingClientRect(), y = mt(m.extent) ? m.extent : i;
      let { positionAbsolute: _ } = m.internals;
      m.parentId && m.extent === "parent" ? _ = _d(_, v, t.get(m.parentId)) : y && (_ = gt(_, y, v));
      const b = {
        ...m,
        measured: v,
        internals: {
          ...m.internals,
          positionAbsolute: _,
          handleBounds: {
            source: uo("source", g.nodeElement, w, d, m.id),
            target: uo("target", g.nodeElement, w, d, m.id)
          }
        }
      };
      t.set(m.id, b), m.parentId && As(b, t, n, { nodeOrigin: r, zIndexMode: s }), l = !0, h && (u.push({
        id: m.id,
        type: "dimensions",
        dimensions: v
      }), m.expandParent && m.parentId && c.push({
        id: m.id,
        parentId: m.parentId,
        rect: Ht(b, r)
      }));
    }
  }
  if (c.length > 0) {
    const g = Es(c, t, n, r);
    u.push(...g);
  }
  return { changes: u, updatedInternals: l };
}
async function t1({ delta: e, panZoom: t, transform: n, translateExtent: a, width: r, height: i }) {
  if (!t || !e.x && !e.y)
    return !1;
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [r, i]
  ], a);
  return !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
}
function vo(e, t, n, a, r, i) {
  let s = r;
  const o = a.get(s) || /* @__PURE__ */ new Map();
  a.set(s, o.set(n, t)), s = `${r}-${e}`;
  const l = a.get(s) || /* @__PURE__ */ new Map();
  if (a.set(s, l.set(n, t)), i) {
    s = `${r}-${e}-${i}`;
    const u = a.get(s) || /* @__PURE__ */ new Map();
    a.set(s, u.set(n, t));
  }
}
function kd(e, t, n) {
  e.clear(), t.clear();
  for (const a of n) {
    const { source: r, target: i, sourceHandle: s = null, targetHandle: o = null } = a, l = { edgeId: a.id, source: r, target: i, sourceHandle: s, targetHandle: o }, u = `${r}-${s}--${i}-${o}`, f = `${i}-${o}--${r}-${s}`;
    vo("source", l, f, e, r, s), vo("target", l, u, e, i, o), t.set(a.id, a);
  }
}
function Td(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Td(n, t) : !1;
}
function xo(e, t, n) {
  let a = e;
  do {
    if (a?.matches?.(t))
      return !0;
    if (a === n)
      return !1;
    a = a?.parentElement;
  } while (a);
  return !1;
}
function n1(e, t, n, a) {
  const r = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === a) && (!s.parentId || !Td(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const o = e.get(i);
      o && r.set(i, {
        id: i,
        position: o.position || { x: 0, y: 0 },
        distance: {
          x: n.x - o.internals.positionAbsolute.x,
          y: n.y - o.internals.positionAbsolute.y
        },
        extent: o.extent,
        parentId: o.parentId,
        origin: o.origin,
        expandParent: o.expandParent,
        internals: {
          positionAbsolute: o.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: o.measured.width ?? 0,
          height: o.measured.height ?? 0
        }
      });
    }
  return r;
}
function Li({ nodeId: e, dragItems: t, nodeLookup: n, dragging: a = !0 }) {
  const r = [];
  for (const [s, o] of t) {
    const l = n.get(s)?.internals.userNode;
    l && r.push({
      ...l,
      position: o.position,
      dragging: a
    });
  }
  if (!e)
    return [r[0], r];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: a
    } : r[0],
    r
  ];
}
function r1({ dragItems: e, snapGrid: t, x: n, y: a }) {
  const r = e.values().next().value;
  if (!r)
    return null;
  const i = {
    x: n - r.distance.x,
    y: a - r.distance.y
  }, s = wn(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function a1({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: a, onDragStop: r }) {
  let i = { x: null, y: null }, s = 0, o = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, f = null, d = !1, c = null, g = !1, m = !1, v = null;
  function h({ noDragClassName: w, handleSelector: y, domNode: _, isSelectable: b, nodeId: S, nodeClickDistance: I = 0 }) {
    c = Pe(_);
    function $({ x: O, y: H }) {
      const { nodeLookup: E, nodeExtent: C, snapGrid: N, snapToGrid: P, nodeOrigin: B, onNodeDrag: k, onSelectionDrag: F, onError: q, updateNodePositions: z } = t();
      i = { x: O, y: H };
      let X = !1;
      const Y = o.size > 1, ee = Y && C ? Ji(_n(o)) : null, le = Y && P ? r1({
        dragItems: o,
        snapGrid: N,
        x: O,
        y: H
      }) : null;
      for (const [te, Z] of o) {
        if (!E.has(te))
          continue;
        let J = { x: O - Z.distance.x, y: H - Z.distance.y };
        P && (J = le ? {
          x: Math.round(J.x + le.x),
          y: Math.round(J.y + le.y)
        } : wn(J, N));
        let K = null;
        if (Y && C && !Z.extent && ee) {
          const { positionAbsolute: ne } = Z.internals, ue = ne.x - ee.x + C[0][0], ge = ne.x + Z.measured.width - ee.x2 + C[1][0], xe = ne.y - ee.y + C[0][1], Me = ne.y + Z.measured.height - ee.y2 + C[1][1];
          K = [
            [ue, xe],
            [ge, Me]
          ];
        }
        const { position: Q, positionAbsolute: re } = yd({
          nodeId: te,
          nextPosition: J,
          nodeLookup: E,
          nodeExtent: K || C,
          nodeOrigin: B,
          onError: q
        });
        X = X || Z.position.x !== Q.x || Z.position.y !== Q.y, Z.position = Q, Z.internals.positionAbsolute = re;
      }
      if (m = m || X, !!X && (z(o, !0), v && (a || k || !S && F))) {
        const [te, Z] = Li({
          nodeId: S,
          dragItems: o,
          nodeLookup: E
        });
        a?.(v, o, te, Z), k?.(v, te, Z), S || F?.(v, Z);
      }
    }
    async function R() {
      if (!f)
        return;
      const { transform: O, panBy: H, autoPanSpeed: E, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [N, P] = xs(u, f, E);
      (N !== 0 || P !== 0) && (i.x = (i.x ?? 0) - N / O[2], i.y = (i.y ?? 0) - P / O[2], await H({ x: N, y: P }) && $(i)), s = requestAnimationFrame(R);
    }
    function L(O) {
      const { nodeLookup: H, multiSelectionActive: E, nodesDraggable: C, transform: N, snapGrid: P, snapToGrid: B, selectNodesOnDrag: k, onNodeDragStart: F, onSelectionDragStart: q, unselectNodesAndEdges: z } = t();
      d = !0, (!k || !b) && !E && S && (H.get(S)?.selected || z()), b && k && S && e?.(S);
      const X = sn(O.sourceEvent, { transform: N, snapGrid: P, snapToGrid: B, containerBounds: f });
      if (i = X, o = n1(H, C, X, S), o.size > 0 && (n || F || !S && q)) {
        const [Y, ee] = Li({
          nodeId: S,
          dragItems: o,
          nodeLookup: H
        });
        n?.(O.sourceEvent, o, Y, ee), F?.(O.sourceEvent, Y, ee), S || q?.(O.sourceEvent, ee);
      }
    }
    const D = ad().clickDistance(I).on("start", (O) => {
      const { domNode: H, nodeDragThreshold: E, transform: C, snapGrid: N, snapToGrid: P } = t();
      f = H?.getBoundingClientRect() || null, g = !1, m = !1, v = O.sourceEvent, E === 0 && L(O), i = sn(O.sourceEvent, { transform: C, snapGrid: N, snapToGrid: P, containerBounds: f }), u = He(O.sourceEvent, f);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: H, transform: E, snapGrid: C, snapToGrid: N, nodeDragThreshold: P, nodeLookup: B } = t(), k = sn(O.sourceEvent, { transform: E, snapGrid: C, snapToGrid: N, containerBounds: f });
      if (v = O.sourceEvent, (O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      S && !B.has(S)) && (g = !0), !g) {
        if (!l && H && d && (l = !0, R()), !d) {
          const F = He(O.sourceEvent, f), q = F.x - u.x, z = F.y - u.y;
          Math.sqrt(q * q + z * z) > P && L(O);
        }
        (i.x !== k.xSnapped || i.y !== k.ySnapped) && o && d && (u = He(O.sourceEvent, f), $(k));
      }
    }).on("end", (O) => {
      if (!d || g) {
        g && o.size > 0 && t().updateNodePositions(o, !1);
        return;
      }
      if (l = !1, d = !1, cancelAnimationFrame(s), o.size > 0) {
        const { nodeLookup: H, updateNodePositions: E, onNodeDragStop: C, onSelectionDragStop: N } = t();
        if (m && (E(o, !1), m = !1), r || C || !S && N) {
          const [P, B] = Li({
            nodeId: S,
            dragItems: o,
            nodeLookup: H,
            dragging: !1
          });
          r?.(O.sourceEvent, o, P, B), C?.(O.sourceEvent, P, B), S || N?.(O.sourceEvent, B);
        }
      }
    }).filter((O) => {
      const H = O.target;
      return !O.button && (!w || !xo(H, `.${w}`, _)) && (!y || xo(H, y, _));
    });
    c.call(D);
  }
  function x() {
    c?.on(".drag", null);
  }
  return {
    update: h,
    destroy: x
  };
}
function i1(e, t, n) {
  const a = [], r = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    fn(r, Ht(i)) > 0 && a.push(i);
  return a;
}
const s1 = 250;
function o1(e, t, n, a) {
  let r = [], i = 1 / 0;
  const s = i1(e, n, t + s1);
  for (const o of s) {
    const l = [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (a.nodeId === u.nodeId && a.type === u.type && a.id === u.id)
        continue;
      const { x: f, y: d } = vt(o, u, u.position, !0), c = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(d - e.y, 2));
      c > t || (c < i ? (r = [{ ...u, x: f, y: d }], i = c) : c === i && r.push({ ...u, x: f, y: d }));
    }
  }
  if (!r.length)
    return null;
  if (r.length > 1) {
    const o = a.type === "source" ? "target" : "source";
    return r.find((l) => l.type === o) ?? r[0];
  }
  return r[0];
}
function Ld(e, t, n, a, r, i = !1) {
  const s = a.get(e);
  if (!s)
    return null;
  const o = r === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? o?.find((u) => u.id === n) : o?.[0]) ?? null;
  return l && i ? { ...l, ...vt(s, l, l.position, !0) } : l;
}
function Od(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function l1(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Bd = () => !0;
function u1(e, { connectionMode: t, connectionRadius: n, handleId: a, nodeId: r, edgeUpdaterType: i, isTarget: s, domNode: o, nodeLookup: l, lib: u, autoPanOnConnect: f, flowId: d, panBy: c, cancelConnection: g, onConnectStart: m, onConnect: v, onConnectEnd: h, isValidConnection: x = Bd, onReconnectEnd: w, updateConnection: y, getTransform: _, getFromHandle: b, autoPanSpeed: S, dragThreshold: I = 1, handleDomNode: $ }) {
  const R = Ed(e.target);
  let L = 0, D;
  const { x: O, y: H } = He(e), E = Od(i, $), C = o?.getBoundingClientRect();
  let N = !1;
  if (!C || !E)
    return;
  const P = Ld(r, E, a, l, t);
  if (!P)
    return;
  let B = He(e, C), k = !1, F = null, q = !1, z = null;
  function X() {
    if (!f || !C)
      return;
    const [Q, re] = xs(B, C, S);
    c({ x: Q, y: re }), L = requestAnimationFrame(X);
  }
  const Y = {
    ...P,
    nodeId: r,
    type: E,
    position: P.position
  }, ee = l.get(r);
  let te = {
    inProgress: !0,
    isValid: null,
    from: vt(ee, Y, ie.Left, !0),
    fromHandle: Y,
    fromPosition: Y.position,
    fromNode: ee,
    to: B,
    toHandle: null,
    toPosition: io[Y.position],
    toNode: null,
    pointer: B
  };
  function Z() {
    N = !0, y(te), m?.(e, { nodeId: r, handleId: a, handleType: E });
  }
  I === 0 && Z();
  function J(Q) {
    if (!N) {
      const { x: Me, y: A } = He(Q), M = Me - O, T = A - H;
      if (!(M * M + T * T > I * I))
        return;
      Z();
    }
    if (!b() || !Y) {
      K(Q);
      return;
    }
    const re = _();
    B = He(Q, C), D = o1(Ut(B, re, !1, [1, 1]), n, l, Y), k || (X(), k = !0);
    const ne = Fd(Q, {
      handle: D,
      connectionMode: t,
      fromNodeId: r,
      fromHandleId: a,
      fromType: s ? "target" : "source",
      isValidConnection: x,
      doc: R,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    z = ne.handleDomNode, F = ne.connection, q = l1(!!D, ne.isValid);
    const ue = l.get(r), ge = ue ? vt(ue, Y, ie.Left, !0) : te.from, xe = {
      ...te,
      from: ge,
      isValid: q,
      to: ne.toHandle && q ? Zt({ x: ne.toHandle.x, y: ne.toHandle.y }, re) : B,
      toHandle: ne.toHandle,
      toPosition: q && ne.toHandle ? ne.toHandle.position : io[Y.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null,
      pointer: B
    };
    y(xe), te = xe;
  }
  function K(Q) {
    if (!("touches" in Q && Q.touches.length > 0)) {
      if (N) {
        (D || z) && F && q && v?.(F);
        const { inProgress: re, ...ne } = te, ue = {
          ...ne,
          toPosition: te.toHandle ? te.toPosition : null
        };
        h?.(Q, ue), i && w?.(Q, ue);
      }
      g(), cancelAnimationFrame(L), k = !1, q = !1, F = null, z = null, R.removeEventListener("mousemove", J), R.removeEventListener("mouseup", K), R.removeEventListener("touchmove", J), R.removeEventListener("touchend", K);
    }
  }
  R.addEventListener("mousemove", J), R.addEventListener("mouseup", K), R.addEventListener("touchmove", J), R.addEventListener("touchend", K);
}
function Fd(e, { handle: t, connectionMode: n, fromNodeId: a, fromHandleId: r, fromType: i, doc: s, lib: o, flowId: l, isValidConnection: u = Bd, nodeLookup: f }) {
  const d = i === "target", c = t ? s.querySelector(`.${o}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: m } = He(e), v = s.elementFromPoint(g, m), h = v?.classList.contains(`${o}-flow__handle`) ? v : c, x = {
    handleDomNode: h,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (h) {
    const w = Od(void 0, h), y = h.getAttribute("data-nodeid"), _ = h.getAttribute("data-handleid"), b = h.classList.contains("connectable"), S = h.classList.contains("connectableend");
    if (!y || !w)
      return x;
    const I = {
      source: d ? y : a,
      sourceHandle: d ? _ : r,
      target: d ? a : y,
      targetHandle: d ? r : _
    };
    x.connection = I;
    const R = b && S && (n === Bt.Strict ? d && w === "source" || !d && w === "target" : y !== a || _ !== r);
    x.isValid = R && u(I), x.toHandle = Ld(y, w, _, f, n, !0);
  }
  return x;
}
const ts = {
  onPointerDown: u1,
  isValid: Fd
};
function c1({ domNode: e, panZoom: t, getTransform: n, getViewScale: a }) {
  const r = Pe(e);
  function i({ translateExtent: o, width: l, height: u, zoomStep: f = 1, pannable: d = !0, zoomable: c = !0, inversePan: g = !1 }) {
    const m = (y) => {
      if (y.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = n(), b = y.sourceEvent.ctrlKey && hn() ? 10 : 1, S = -y.sourceEvent.deltaY * (y.sourceEvent.deltaMode === 1 ? 0.05 : y.sourceEvent.deltaMode ? 1 : 2e-3) * f, I = _[2] * Math.pow(2, S * b);
      t.scaleTo(I);
    };
    let v = [0, 0];
    const h = (y) => {
      (y.sourceEvent.type === "mousedown" || y.sourceEvent.type === "touchstart") && (v = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ]);
    }, x = (y) => {
      const _ = n();
      if (y.sourceEvent.type !== "mousemove" && y.sourceEvent.type !== "touchmove" || !t)
        return;
      const b = [
        y.sourceEvent.clientX ?? y.sourceEvent.touches[0].clientX,
        y.sourceEvent.clientY ?? y.sourceEvent.touches[0].clientY
      ], S = [b[0] - v[0], b[1] - v[1]];
      v = b;
      const I = a() * Math.max(_[2], Math.log(_[2])) * (g ? -1 : 1), $ = {
        x: _[0] - S[0] * I,
        y: _[1] - S[1] * I
      }, R = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: $.x,
        y: $.y,
        zoom: _[2]
      }, R, o);
    }, w = hd().on("start", h).on("zoom", d ? x : null).on("zoom.wheel", c ? m : null);
    r.call(w, {});
  }
  function s() {
    r.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Oe
  };
}
const Ja = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Oi = ({ x: e, y: t, zoom: n }) => Ka.translate(e, t).scale(n), Pt = (e, t) => e.target.closest(`.${t}`), Hd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), d1 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Bi = (e, t = 0, n = d1, a = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || a(), r ? e.transition().duration(t).ease(n).on("end", a) : e;
}, Zd = (e) => {
  const t = e.ctrlKey && hn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function f1({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: a, panOnScrollMode: r, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: o, onPanZoom: l, onPanZoomEnd: u }) {
  return (f) => {
    if (Pt(f, t))
      return f.ctrlKey && f.preventDefault(), !1;
    f.preventDefault(), f.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const h = Oe(f), x = Zd(f), w = d * Math.pow(2, x);
      a.scaleTo(n, w, h, f);
      return;
    }
    const c = f.deltaMode === 1 ? 20 : 1;
    let g = r === ht.Vertical ? 0 : f.deltaX * c, m = r === ht.Horizontal ? 0 : f.deltaY * c;
    !hn() && f.shiftKey && r !== ht.Vertical && (g = f.deltaY * c, m = 0), a.translateBy(
      n,
      -(g / d) * i,
      -(m / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = Ja(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(f, v), e.panScrollTimeout = setTimeout(() => {
      u?.(f, v), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, o?.(f, v));
  };
}
function h1({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(a, r) {
    const i = a.type === "wheel", s = !t && i && !a.ctrlKey, o = Pt(a, e);
    if (a.ctrlKey && i && o && a.preventDefault(), s || o)
      return null;
    a.preventDefault(), n.call(this, a, r);
  };
}
function p1({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (a) => {
    if (a.sourceEvent?.internal)
      return;
    const r = Ja(a.transform);
    e.mouseButton = a.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = r, a.sourceEvent?.type === "mousedown" && t(!0), n && n?.(a.sourceEvent, r);
  };
}
function g1({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: a, onPanZoom: r }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Hd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || a([i.transform.x, i.transform.y, i.transform.k]), r && !i.sourceEvent?.internal && r?.(i.sourceEvent, Ja(i.transform));
  };
}
function m1({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: a, onPanZoomEnd: r, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Hd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, a(!1), r)) {
      const o = Ja(s.transform);
      e.prevViewport = o, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          r?.(s.sourceEvent, o);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function v1({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: a, panOnScroll: r, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: o, noPanClassName: l, lib: u, connectionInProgress: f }) {
  return (d) => {
    const c = e || t, g = n && d.ctrlKey, m = d.type === "wheel";
    if (d.button === 1 && d.type === "mousedown" && (Pt(d, `${u}-flow__node`) || Pt(d, `${u}-flow__edge`)))
      return !0;
    if (!a && !c && !r && !i && !n || s || f && !m || Pt(d, o) && m || Pt(d, l) && (!m || r && m && !e) || !n && d.ctrlKey && m)
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!c && !r && !g && m || !a && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(a) && !a.includes(d.button) && d.type === "mousedown")
      return !1;
    const v = Array.isArray(a) && a.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || m) && v;
  };
}
function x1({ domNode: e, minZoom: t, maxZoom: n, translateExtent: a, viewport: r, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: o, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), d = hd().scaleExtent([t, n]).translateExtent(a), c = Pe(e).call(d);
  w({
    x: r.x,
    y: r.y,
    zoom: Ft(r.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], a);
  const g = c.on("wheel.zoom"), m = c.on("dblclick.zoom");
  d.wheelDelta(Zd);
  async function v(D, O) {
    return c ? new Promise((H) => {
      d?.interpolate(O?.interpolate === "linear" ? Di : Aa).transform(Bi(c, O?.duration, O?.ease, () => H(!0)), D);
    }) : !1;
  }
  function h({ noWheelClassName: D, noPanClassName: O, onPaneContextMenu: H, userSelectionActive: E, panOnScroll: C, panOnDrag: N, panOnScrollMode: P, panOnScrollSpeed: B, preventScrolling: k, zoomOnPinch: F, zoomOnScroll: q, zoomOnDoubleClick: z, zoomActivationKeyPressed: X, lib: Y, onTransformChange: ee, connectionInProgress: le, paneClickDistance: te, selectionOnDrag: Z }) {
    E && !u.isZoomingOrPanning && x();
    const J = C && !X && !E;
    d.clickDistance(Z ? 1 / 0 : !Fe(te) || te < 0 ? 0 : te);
    const K = J ? f1({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: c,
      d3Zoom: d,
      panOnScrollMode: P,
      panOnScrollSpeed: B,
      zoomOnPinch: F,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: o
    }) : h1({
      noWheelClassName: D,
      preventScrolling: k,
      d3ZoomHandler: g
    });
    c.on("wheel.zoom", K, { passive: !1 });
    const Q = p1({
      zoomPanValues: u,
      onDraggingChange: l,
      onPanZoomStart: s
    });
    d.on("start", Q);
    const re = g1({
      zoomPanValues: u,
      panOnDrag: N,
      onPaneContextMenu: !!H,
      onPanZoom: i,
      onTransformChange: ee
    });
    d.on("zoom", re);
    const ne = m1({
      zoomPanValues: u,
      panOnDrag: N,
      panOnScroll: C,
      onPaneContextMenu: H,
      onPanZoomEnd: o,
      onDraggingChange: l
    });
    d.on("end", ne);
    const ue = v1({
      zoomActivationKeyPressed: X,
      panOnDrag: N,
      zoomOnScroll: q,
      panOnScroll: C,
      zoomOnDoubleClick: z,
      zoomOnPinch: F,
      userSelectionActive: E,
      noPanClassName: O,
      noWheelClassName: D,
      lib: Y,
      connectionInProgress: le
    });
    d.filter(ue), z ? c.on("dblclick.zoom", m) : c.on("dblclick.zoom", null);
  }
  function x() {
    d.on("zoom", null);
  }
  async function w(D, O, H) {
    const E = Oi(D), C = d?.constrain()(E, O, H);
    return C && await v(C), C;
  }
  async function y(D, O) {
    const H = Oi(D);
    return await v(H, O), H;
  }
  function _(D) {
    if (c) {
      const O = Oi(D), H = c.property("__zoom");
      (H.k !== D.zoom || H.x !== D.x || H.y !== D.y) && d?.transform(c, O, null, { sync: !0 });
    }
  }
  function b() {
    const D = c ? fd(c.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  async function S(D, O) {
    return c ? new Promise((H) => {
      d?.interpolate(O?.interpolate === "linear" ? Di : Aa).scaleTo(Bi(c, O?.duration, O?.ease, () => H(!0)), D);
    }) : !1;
  }
  async function I(D, O) {
    return c ? new Promise((H) => {
      d?.interpolate(O?.interpolate === "linear" ? Di : Aa).scaleBy(Bi(c, O?.duration, O?.ease, () => H(!0)), D);
    }) : !1;
  }
  function $(D) {
    d?.scaleExtent(D);
  }
  function R(D) {
    d?.translateExtent(D);
  }
  function L(D) {
    const O = !Fe(D) || D < 0 ? 0 : D;
    d?.clickDistance(O);
  }
  return {
    update: h,
    destroy: x,
    setViewport: y,
    setViewportConstrained: w,
    getViewport: b,
    scaleTo: S,
    scaleBy: I,
    setScaleExtent: $,
    setTranslateExtent: R,
    syncViewport: _,
    setClickDistance: L
  };
}
var qt;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(qt || (qt = {}));
function y1({ width: e, prevWidth: t, height: n, prevHeight: a, affectsX: r, affectsY: i }) {
  const s = e - t, o = n - a, l = [s > 0 ? 1 : s < 0 ? -1 : 0, o > 0 ? 1 : o < 0 ? -1 : 0];
  return s && r && (l[0] = l[0] * -1), o && i && (l[1] = l[1] * -1), l;
}
function yo(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), a = e.includes("left"), r = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: a,
    affectsY: r
  };
}
function nt(e, t) {
  return Math.max(0, t - e);
}
function rt(e, t) {
  return Math.max(0, e - t);
}
function Tn(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function _o(e, t) {
  return e ? !t : t;
}
function _1(e, t, n, a, r, i, s, o) {
  let { affectsX: l, affectsY: u } = t;
  const { isHorizontal: f, isVertical: d } = t, c = f && d, { xSnapped: g, ySnapped: m } = n, { minWidth: v, maxWidth: h, minHeight: x, maxHeight: w } = a, { x: y, y: _, width: b, height: S, aspectRatio: I } = e;
  let $ = Math.floor(f ? g - e.pointerX : 0), R = Math.floor(d ? m - e.pointerY : 0);
  const L = b + (l ? -$ : $), D = S + (u ? -R : R), O = -i[0] * b, H = -i[1] * S;
  let E = Tn(L, v, h), C = Tn(D, x, w);
  if (s) {
    let B = 0, k = 0;
    l && $ < 0 ? B = nt(y + $ + O, s[0][0]) : !l && $ > 0 && (B = rt(y + L + O, s[1][0])), u && R < 0 ? k = nt(_ + R + H, s[0][1]) : !u && R > 0 && (k = rt(_ + D + H, s[1][1])), E = Math.max(E, B), C = Math.max(C, k);
  }
  if (o) {
    let B = 0, k = 0;
    l && $ > 0 ? B = rt(y + $, o[0][0]) : !l && $ < 0 && (B = nt(y + L, o[1][0])), u && R > 0 ? k = rt(_ + R, o[0][1]) : !u && R < 0 && (k = nt(_ + D, o[1][1])), E = Math.max(E, B), C = Math.max(C, k);
  }
  if (r) {
    if (f) {
      const B = Tn(L / I, x, w) * I;
      if (E = Math.max(E, B), s) {
        let k = 0;
        !l && !u || l && !u && c ? k = rt(_ + H + L / I, s[1][1]) * I : k = nt(_ + H + (l ? $ : -$) / I, s[0][1]) * I, E = Math.max(E, k);
      }
      if (o) {
        let k = 0;
        !l && !u || l && !u && c ? k = nt(_ + L / I, o[1][1]) * I : k = rt(_ + (l ? $ : -$) / I, o[0][1]) * I, E = Math.max(E, k);
      }
    }
    if (d) {
      const B = Tn(D * I, v, h) / I;
      if (C = Math.max(C, B), s) {
        let k = 0;
        !l && !u || u && !l && c ? k = rt(y + D * I + O, s[1][0]) / I : k = nt(y + (u ? R : -R) * I + O, s[0][0]) / I, C = Math.max(C, k);
      }
      if (o) {
        let k = 0;
        !l && !u || u && !l && c ? k = nt(y + D * I, o[1][0]) / I : k = rt(y + (u ? R : -R) * I, o[0][0]) / I, C = Math.max(C, k);
      }
    }
  }
  R = R + (R < 0 ? C : -C), $ = $ + ($ < 0 ? E : -E), r && (c ? L > D * I ? R = (_o(l, u) ? -$ : $) / I : $ = (_o(l, u) ? -R : R) * I : f ? (R = $ / I, u = l) : ($ = R * I, l = u));
  const N = l ? y + $ : y, P = u ? _ + R : _;
  return {
    width: b + (l ? -$ : $),
    height: S + (u ? -R : R),
    x: i[0] * $ * (l ? -1 : 1) + N,
    y: i[1] * R * (u ? -1 : 1) + P
  };
}
const qd = { width: 0, height: 0, x: 0, y: 0 }, w1 = {
  ...qd,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function S1(e, t, n) {
  const a = t.position.x + e.position.x, r = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, o = n[0] * i, l = n[1] * s;
  return [
    [a - o, r - l],
    [a + i - o, r + s - l]
  ];
}
function b1({ domNode: e, nodeId: t, getStoreItems: n, onChange: a, onEnd: r }) {
  const i = Pe(e);
  let s = {
    controlDirection: yo("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function o({ controlPosition: u, boundaries: f, keepAspectRatio: d, resizeDirection: c, onResizeStart: g, onResize: m, onResizeEnd: v, shouldResize: h }) {
    let x = { ...qd }, w = { ...w1 };
    s = {
      boundaries: f,
      resizeDirection: c,
      keepAspectRatio: d,
      controlDirection: yo(u)
    };
    let y, _ = null, b = [], S, I, $, R = !1;
    const L = ad().on("start", (D) => {
      const { nodeLookup: O, transform: H, snapGrid: E, snapToGrid: C, nodeOrigin: N, paneDomNode: P } = n();
      if (y = O.get(t), !y)
        return;
      _ = P?.getBoundingClientRect() ?? null;
      const { xSnapped: B, ySnapped: k } = sn(D.sourceEvent, {
        transform: H,
        snapGrid: E,
        snapToGrid: C,
        containerBounds: _
      });
      x = {
        width: y.measured.width ?? 0,
        height: y.measured.height ?? 0,
        x: y.position.x ?? 0,
        y: y.position.y ?? 0
      }, w = {
        ...x,
        pointerX: B,
        pointerY: k,
        aspectRatio: x.width / x.height
      }, S = void 0, I = mt(y.extent) ? y.extent : void 0, y.parentId && (y.extent === "parent" || y.expandParent) && (S = O.get(y.parentId)), S && y.extent === "parent" && (I = [
        [0, 0],
        [S.measured.width, S.measured.height]
      ]), b = [], $ = void 0;
      for (const [F, q] of O)
        if (q.parentId === t && (b.push({
          id: F,
          position: { ...q.position },
          extent: q.extent
        }), q.extent === "parent" || q.expandParent)) {
          const z = S1(q, y, q.origin ?? N);
          $ ? $ = [
            [Math.min(z[0][0], $[0][0]), Math.min(z[0][1], $[0][1])],
            [Math.max(z[1][0], $[1][0]), Math.max(z[1][1], $[1][1])]
          ] : $ = z;
        }
      g?.(D, { ...x });
    }).on("drag", (D) => {
      const { transform: O, snapGrid: H, snapToGrid: E, nodeOrigin: C } = n(), N = sn(D.sourceEvent, {
        transform: O,
        snapGrid: H,
        snapToGrid: E,
        containerBounds: _
      }), P = [];
      if (!y)
        return;
      const { x: B, y: k, width: F, height: q } = x, z = {}, X = y.origin ?? C, { width: Y, height: ee, x: le, y: te } = _1(w, s.controlDirection, N, s.boundaries, s.keepAspectRatio, X, I, $), Z = Y !== F, J = ee !== q, K = le !== B && Z, Q = te !== k && J;
      if (!K && !Q && !Z && !J)
        return;
      if ((K || Q || X[0] === 1 || X[1] === 1) && (z.x = K ? le : x.x, z.y = Q ? te : x.y, x.x = z.x, x.y = z.y, b.length > 0)) {
        const ge = le - B, xe = te - k;
        for (const Me of b)
          Me.position = {
            x: Me.position.x - ge + X[0] * (Y - F),
            y: Me.position.y - xe + X[1] * (ee - q)
          }, P.push(Me);
      }
      if ((Z || J) && (z.width = Z && (!s.resizeDirection || s.resizeDirection === "horizontal") ? Y : x.width, z.height = J && (!s.resizeDirection || s.resizeDirection === "vertical") ? ee : x.height, x.width = z.width, x.height = z.height), S && y.expandParent) {
        const ge = X[0] * (z.width ?? 0);
        z.x && z.x < ge && (x.x = ge, w.x = w.x - (z.x - ge));
        const xe = X[1] * (z.height ?? 0);
        z.y && z.y < xe && (x.y = xe, w.y = w.y - (z.y - xe));
      }
      const re = y1({
        width: x.width,
        prevWidth: F,
        height: x.height,
        prevHeight: q,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), ne = { ...x, direction: re };
      h?.(D, ne) !== !1 && (R = !0, m?.(D, ne), a(z, P));
    }).on("end", (D) => {
      R && (v?.(D, { ...x }), r?.({ ...x }), R = !1);
    });
    i.call(L);
  }
  function l() {
    i.on(".drag", null);
  }
  return {
    update: o,
    destroy: l
  };
}
var Fi = { exports: {} }, Hi = {};
var wo;
function A1() {
  if (wo) return Hi;
  wo = 1;
  var e = uh, t = bh();
  function n(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var a = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, o = e.useMemo, l = e.useDebugValue;
  return Hi.useSyncExternalStoreWithSelector = function(u, f, d, c, g) {
    var m = i(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else v = m.current;
    m = o(
      function() {
        function x(S) {
          if (!w) {
            if (w = !0, y = S, S = c(S), g !== void 0 && v.hasValue) {
              var I = v.value;
              if (g(I, S))
                return _ = I;
            }
            return _ = S;
          }
          if (I = _, a(y, S)) return I;
          var $ = c(S);
          return g !== void 0 && g(I, $) ? (y = S, I) : (y = S, _ = $);
        }
        var w = !1, y, _, b = d === void 0 ? null : d;
        return [
          function() {
            return x(f());
          },
          b === null ? void 0 : function() {
            return x(b());
          }
        ];
      },
      [f, d, c, g]
    );
    var h = r(u, m[0], m[1]);
    return s(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), l(h), h;
  }, Hi;
}
var So;
function E1() {
  return So || (So = 1, Fi.exports = A1()), Fi.exports;
}
var I1 = E1();
const M1 = /* @__PURE__ */ Qu(I1), C1 = {}, bo = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), a = (f, d) => {
    const c = typeof f == "function" ? f(t) : f;
    if (!Object.is(c, t)) {
      const g = t;
      t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((m) => m(t, g));
    }
  }, r = () => t, l = { setState: a, getState: r, getInitialState: () => u, subscribe: (f) => (n.add(f), () => n.delete(f)), destroy: () => {
    (C1 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(a, r, l);
  return l;
}, N1 = (e) => e ? bo(e) : bo, { useDebugValue: $1 } = Be, { useSyncExternalStoreWithSelector: R1 } = M1, D1 = (e) => e;
function zd(e, t = D1, n) {
  const a = R1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return $1(a), a;
}
const Ao = (e, t) => {
  const n = N1(e), a = (r, i = t) => zd(n, r, i);
  return Object.assign(a, n), a;
}, P1 = (e, t) => e ? Ao(e, t) : Ao;
function _e(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [a, r] of e)
      if (!Object.is(r, t.get(a)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const a of e)
      if (!t.has(a))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const a of n)
    if (!Object.prototype.hasOwnProperty.call(t, a) || !Object.is(e[a], t[a]))
      return !1;
  return !0;
}
const Qa = as(null), k1 = Qa.Provider, Ud = Ze.error001("react");
function he(e, t) {
  const n = vn(Qa);
  if (n === null)
    throw new Error(Ud);
  return zd(n, e, t);
}
function Se() {
  const e = vn(Qa);
  if (e === null)
    throw new Error(Ud);
  return Ce(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Eo = { display: "none" }, T1 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, jd = "react-flow__node-desc", Vd = "react-flow__edge-desc", L1 = "react-flow__aria-live", O1 = (e) => e.ariaLiveMessage, B1 = (e) => e.ariaLabelConfig;
function F1({ rfId: e }) {
  const t = he(O1);
  return p.jsx("div", { id: `${L1}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: T1, children: t });
}
function H1({ rfId: e, disableKeyboardA11y: t }) {
  const n = he(B1);
  return p.jsxs(p.Fragment, { children: [p.jsx("div", { id: `${jd}-${e}`, style: Eo, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), p.jsx("div", { id: `${Vd}-${e}`, style: Eo, children: n["edge.a11yDescription.default"] }), !t && p.jsx(F1, { rfId: e })] });
}
const ei = we(({ position: e = "top-left", children: t, className: n, style: a, ...r }, i) => {
  const s = `${e}`.split("-");
  return p.jsx("div", { className: Ie(["react-flow__panel", n, ...s]), style: a, ref: i, ...r, children: t });
});
ei.displayName = "Panel";
function Z1({ proOptions: e, position: t = "bottom-right" }) {
  return e?.hideAttribution ? null : p.jsx(ei, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: p.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const q1 = (e) => {
  const t = [], n = [];
  for (const [, a] of e.nodeLookup)
    a.selected && t.push(a.internals.userNode);
  for (const [, a] of e.edgeLookup)
    a.selected && n.push(a);
  return { selectedNodes: t, selectedEdges: n };
}, Ln = (e) => e.id;
function z1(e, t) {
  return _e(e.selectedNodes.map(Ln), t.selectedNodes.map(Ln)) && _e(e.selectedEdges.map(Ln), t.selectedEdges.map(Ln));
}
function U1({ onSelectionChange: e }) {
  const t = Se(), { selectedNodes: n, selectedEdges: a } = he(q1, z1);
  return ce(() => {
    const r = { nodes: n, edges: a };
    e?.(r), t.getState().onSelectionChangeHandlers.forEach((i) => i(r));
  }, [n, a, e]), null;
}
const j1 = (e) => !!e.onSelectionChangeHandlers;
function V1({ onSelectionChange: e }) {
  const t = he(j1);
  return e || t ? p.jsx(U1, { onSelectionChange: e }) : null;
}
const Wd = [0, 0], W1 = { x: 0, y: 0, zoom: 1 }, G1 = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Io = [...G1, "rfId"], K1 = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Mo = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: cn,
  nodeOrigin: Wd,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Y1(e) {
  const { setNodes: t, setEdges: n, setMinZoom: a, setMaxZoom: r, setTranslateExtent: i, setNodeExtent: s, reset: o, setDefaultNodesAndEdges: l } = he(K1, _e), u = Se();
  ce(() => (l(e.defaultNodes, e.defaultEdges), () => {
    f.current = Mo, o();
  }), []);
  const f = se(Mo);
  return ce(
    () => {
      for (const d of Io) {
        const c = e[d], g = f.current[d];
        c !== g && (typeof e[d] > "u" || (d === "nodes" ? t(c) : d === "edges" ? n(c) : d === "minZoom" ? a(c) : d === "maxZoom" ? r(c) : d === "translateExtent" ? i(c) : d === "nodeExtent" ? s(c) : d === "ariaLabelConfig" ? u.setState({ ariaLabelConfig: Lv(c) }) : d === "fitView" ? u.setState({ fitViewQueued: c }) : d === "fitViewOptions" ? u.setState({ fitViewOptions: c }) : u.setState({ [d]: c })));
      }
      f.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Io.map((d) => e[d])
  ), null;
}
function Co() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function X1(e) {
  const [t, n] = fe(e === "system" ? null : e);
  return ce(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const a = Co(), r = () => n(a?.matches ? "dark" : "light");
    return r(), a?.addEventListener("change", r), () => {
      a?.removeEventListener("change", r);
    };
  }, [e]), t !== null ? t : Co()?.matches ? "dark" : "light";
}
const No = typeof document < "u" ? document : null;
function pn(e = null, t = { target: No, actInsideInputWithModifier: !0 }) {
  const [n, a] = fe(!1), r = se(!1), i = se(/* @__PURE__ */ new Set([])), [s, o] = Ce(() => {
    if (e !== null) {
      const u = (Array.isArray(e) ? e : [e]).filter((d) => typeof d == "string").map((d) => d.replace("+", `
`).replace(`

`, `
+`).split(`
`)), f = u.reduce((d, c) => d.concat(...c), []);
      return [u, f];
    }
    return [[], []];
  }, [e]);
  return ce(() => {
    const l = t?.target ?? No, u = t?.actInsideInputWithModifier ?? !0;
    if (e !== null) {
      const f = (g) => {
        if (r.current = g.ctrlKey || g.metaKey || g.shiftKey || g.altKey, (!r.current || r.current && !u) && Id(g))
          return !1;
        const v = Ro(g.code, o);
        if (i.current.add(g[v]), $o(s, i.current, !1)) {
          const h = g.composedPath?.()?.[0] || g.target, x = h?.nodeName === "BUTTON" || h?.nodeName === "A";
          t.preventDefault !== !1 && (r.current || !x) && g.preventDefault(), a(!0);
        }
      }, d = (g) => {
        const m = Ro(g.code, o);
        $o(s, i.current, !0) ? (a(!1), i.current.clear()) : i.current.delete(g[m]), g.key === "Meta" && i.current.clear(), r.current = !1;
      }, c = () => {
        i.current.clear(), a(!1);
      };
      return l?.addEventListener("keydown", f), l?.addEventListener("keyup", d), window.addEventListener("blur", c), window.addEventListener("contextmenu", c), () => {
        l?.removeEventListener("keydown", f), l?.removeEventListener("keyup", d), window.removeEventListener("blur", c), window.removeEventListener("contextmenu", c);
      };
    }
  }, [e, a]), n;
}
function $o(e, t, n) {
  return e.filter((a) => n || a.length === t.size).some((a) => a.every((r) => t.has(r)));
}
function Ro(e, t) {
  return t.includes(e) ? "code" : "key";
}
const J1 = () => {
  const e = Se();
  return Ce(() => ({
    zoomIn: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, t) : !1;
    },
    zoomOut: async (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, t) : !1;
    },
    zoomTo: async (t, n) => {
      const { panZoom: a } = e.getState();
      return a ? a.scaleTo(t, n) : !1;
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [a, r, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? a,
        y: t.y ?? r,
        zoom: t.zoom ?? i
      }, n), !0) : !1;
    },
    getViewport: () => {
      const [t, n, a] = e.getState().transform;
      return { x: t, y: n, zoom: a };
    },
    setCenter: async (t, n, a) => e.getState().setCenter(t, n, a),
    fitBounds: async (t, n) => {
      const { width: a, height: r, minZoom: i, maxZoom: s, panZoom: o } = e.getState(), l = ys(t, a, r, i, s, n?.padding ?? 0.1);
      return o ? (await o.setViewport(l, {
        duration: n?.duration,
        ease: n?.ease,
        interpolate: n?.interpolate
      }), !0) : !1;
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: a, snapGrid: r, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: o, y: l } = s.getBoundingClientRect(), u = {
        x: t.x - o,
        y: t.y - l
      }, f = n.snapGrid ?? r, d = n.snapToGrid ?? i;
      return Ut(u, a, d, f);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: a } = e.getState();
      if (!a)
        return t;
      const { x: r, y: i } = a.getBoundingClientRect(), s = Zt(t, n);
      return {
        x: s.x + r,
        y: s.y + i
      };
    }
  }), []);
};
function Gd(e, t) {
  const n = [], a = /* @__PURE__ */ new Map(), r = [];
  for (const i of e)
    if (i.type === "add") {
      r.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      a.set(i.id, [i]);
    else {
      const s = a.get(i.id);
      s ? s.push(i) : a.set(i.id, [i]);
    }
  for (const i of t) {
    const s = a.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const o = { ...i };
    for (const l of s)
      Q1(l, o);
    n.push(o);
  }
  return r.length && r.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Q1(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function ex(e, t) {
  return Gd(e, t);
}
function tx(e, t) {
  return Gd(e, t);
}
function ct(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function kt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const a = [];
  for (const [r, i] of e) {
    const s = t.has(r);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), a.push(ct(i.id, s)));
  }
  return a;
}
function Do({ items: e = [], lookup: t }) {
  const n = [], a = new Map(e.map((r) => [r.id, r]));
  for (const [r, i] of e.entries()) {
    const s = t.get(i.id), o = s?.internals?.userNode ?? s;
    o !== void 0 && o !== i && n.push({ id: i.id, item: i, type: "replace" }), o === void 0 && n.push({ item: i, type: "add", index: r });
  }
  for (const [r] of t)
    a.get(r) === void 0 && n.push({ id: r, type: "remove" });
  return n;
}
function Po(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const nx = Sd();
function rx(e, t, n = {}) {
  return qv(e, t, {
    ...n,
    onError: n.onError ?? nx
  });
}
const ko = (e) => Mv(e), ax = (e) => xd(e);
function Kd(e) {
  return we(e);
}
const ix = typeof window < "u" ? dh : ce;
function To(e) {
  const [t, n] = fe(BigInt(0)), [a] = fe(() => sx(() => n((r) => r + BigInt(1))));
  return ix(() => {
    const r = a.get();
    r.length && (e(r), a.reset());
  }, [t]), a;
}
function sx(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const Yd = as(null);
function ox({ children: e }) {
  const t = Se(), n = pe((o) => {
    const { nodes: l = [], setNodes: u, hasDefaultNodes: f, onNodesChange: d, nodeLookup: c, fitViewQueued: g, onNodesChangeMiddlewareMap: m } = t.getState();
    let v = l;
    for (const x of o)
      v = typeof x == "function" ? x(v) : x;
    let h = Do({
      items: v,
      lookup: c
    });
    for (const x of m.values())
      h = x(h);
    f && u(v), h.length > 0 ? d?.(h) : g && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: w, setNodes: y } = t.getState();
      x && y(w);
    });
  }, []), a = To(n), r = pe((o) => {
    const { edges: l = [], setEdges: u, hasDefaultEdges: f, onEdgesChange: d, edgeLookup: c } = t.getState();
    let g = l;
    for (const m of o)
      g = typeof m == "function" ? m(g) : m;
    f ? u(g) : d && d(Do({
      items: g,
      lookup: c
    }));
  }, []), i = To(r), s = Ce(() => ({ nodeQueue: a, edgeQueue: i }), []);
  return p.jsx(Yd.Provider, { value: s, children: e });
}
function lx() {
  const e = vn(Yd);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const ux = (e) => !!e.panZoom;
function ti() {
  const e = J1(), t = Se(), n = lx(), a = he(ux), r = Ce(() => {
    const i = (d) => t.getState().nodeLookup.get(d), s = (d) => {
      n.nodeQueue.push(d);
    }, o = (d) => {
      n.edgeQueue.push(d);
    }, l = (d) => {
      const { nodeLookup: c, nodeOrigin: g } = t.getState(), m = ko(d) ? d : c.get(d.id), v = m.parentId ? Ad(m.position, m.measured, m.parentId, c, g) : m.position, h = {
        ...m,
        position: v,
        width: m.measured?.width ?? m.width,
        height: m.measured?.height ?? m.height
      };
      return Ht(h);
    }, u = (d, c, g = { replace: !1 }) => {
      s((m) => m.map((v) => {
        if (v.id === d) {
          const h = typeof c == "function" ? c(v) : c;
          return g.replace && ko(h) ? h : { ...v, ...h };
        }
        return v;
      }));
    }, f = (d, c, g = { replace: !1 }) => {
      o((m) => m.map((v) => {
        if (v.id === d) {
          const h = typeof c == "function" ? c(v) : c;
          return g.replace && ax(h) ? h : { ...v, ...h };
        }
        return v;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((d) => ({ ...d })),
      getNode: (d) => i(d)?.internals.userNode,
      getInternalNode: i,
      getEdges: () => {
        const { edges: d = [] } = t.getState();
        return d.map((c) => ({ ...c }));
      },
      getEdge: (d) => t.getState().edgeLookup.get(d),
      setNodes: s,
      setEdges: o,
      addNodes: (d) => {
        const c = Array.isArray(d) ? d : [d];
        n.nodeQueue.push((g) => [...g, ...c]);
      },
      addEdges: (d) => {
        const c = Array.isArray(d) ? d : [d];
        n.edgeQueue.push((g) => [...g, ...c]);
      },
      toObject: () => {
        const { nodes: d = [], edges: c = [], transform: g } = t.getState(), [m, v, h] = g;
        return {
          nodes: d.map((x) => ({ ...x })),
          edges: c.map((x) => ({ ...x })),
          viewport: {
            x: m,
            y: v,
            zoom: h
          }
        };
      },
      deleteElements: async ({ nodes: d = [], edges: c = [] }) => {
        const { nodes: g, edges: m, onNodesDelete: v, onEdgesDelete: h, triggerNodeChanges: x, triggerEdgeChanges: w, onDelete: y, onBeforeDelete: _ } = t.getState(), { nodes: b, edges: S } = await Dv({
          nodesToRemove: d,
          edgesToRemove: c,
          nodes: g,
          edges: m,
          onBeforeDelete: _
        }), I = S.length > 0, $ = b.length > 0;
        if (I) {
          const R = S.map(Po);
          h?.(S), w(R);
        }
        if ($) {
          const R = b.map(Po);
          v?.(b), x(R);
        }
        return ($ || I) && y?.({ nodes: b, edges: S }), { deletedNodes: b, deletedEdges: S };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (d, c = !0, g) => {
        const m = oo(d), v = m ? d : l(d), h = g !== void 0;
        return v ? (g || t.getState().nodes).filter((x) => {
          const w = t.getState().nodeLookup.get(x.id);
          if (w && !m && (x.id === d.id || !w.internals.positionAbsolute))
            return !1;
          const y = Ht(h ? x : w), _ = fn(y, v);
          return c && _ > 0 || _ >= y.width * y.height || _ >= v.width * v.height;
        }) : [];
      },
      isNodeIntersecting: (d, c, g = !0) => {
        const v = oo(d) ? d : l(d);
        if (!v)
          return !1;
        const h = fn(v, c);
        return g && h > 0 || h >= c.width * c.height || h >= v.width * v.height;
      },
      updateNode: u,
      updateNodeData: (d, c, g = { replace: !1 }) => {
        u(d, (m) => {
          const v = typeof c == "function" ? c(m) : c;
          return g.replace ? { ...m, data: v } : { ...m, data: { ...m.data, ...v } };
        }, g);
      },
      updateEdge: f,
      updateEdgeData: (d, c, g = { replace: !1 }) => {
        f(d, (m) => {
          const v = typeof c == "function" ? c(m) : c;
          return g.replace ? { ...m, data: v } : { ...m, data: { ...m.data, ...v } };
        }, g);
      },
      getNodesBounds: (d) => {
        const { nodeLookup: c, nodeOrigin: g } = t.getState();
        return Cv(d, { nodeLookup: c, nodeOrigin: g });
      },
      getHandleConnections: ({ type: d, id: c, nodeId: g }) => Array.from(t.getState().connectionLookup.get(`${g}-${d}${c ? `-${c}` : ""}`)?.values() ?? []),
      getNodeConnections: ({ type: d, handleId: c, nodeId: g }) => Array.from(t.getState().connectionLookup.get(`${g}${d ? c ? `-${d}-${c}` : `-${d}` : ""}`)?.values() ?? []),
      fitView: async (d) => {
        const c = t.getState().fitViewResolver ?? Tv();
        return t.setState({ fitViewQueued: !0, fitViewOptions: d, fitViewResolver: c }), n.nodeQueue.push((g) => [...g]), c.promise;
      }
    };
  }, []);
  return Ce(() => ({
    ...r,
    ...e,
    viewportInitialized: a
  }), [a]);
}
const Lo = (e) => e.selected, cx = typeof window < "u" ? window : void 0;
function dx({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = Se(), { deleteElements: a } = ti(), r = pn(e, { actInsideInputWithModifier: !1 }), i = pn(t, { target: cx });
  ce(() => {
    if (r) {
      const { edges: s, nodes: o } = n.getState();
      a({ nodes: o.filter(Lo), edges: s.filter(Lo) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [r]), ce(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function fx(e) {
  const t = Se();
  ce(() => {
    const n = () => {
      if (!e.current || !(e.current.checkVisibility?.() ?? !0))
        return !1;
      const a = _s(e.current);
      (a.height === 0 || a.width === 0) && t.getState().onError?.("004", Ze.error004()), t.setState({ width: a.width || 500, height: a.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const a = new ResizeObserver(() => n());
      return a.observe(e.current), () => {
        window.removeEventListener("resize", n), a && e.current && a.unobserve(e.current);
      };
    }
  }, []);
}
const ni = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, hx = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function px({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: a = !1, panOnScrollSpeed: r = 0.5, panOnScrollMode: i = ht.Free, zoomOnDoubleClick: s = !0, panOnDrag: o = !0, defaultViewport: l, translateExtent: u, minZoom: f, maxZoom: d, zoomActivationKeyCode: c, preventScrolling: g = !0, children: m, noWheelClassName: v, noPanClassName: h, onViewportChange: x, isControlledViewport: w, paneClickDistance: y, selectionOnDrag: _ }) {
  const b = Se(), S = se(null), { userSelectionActive: I, lib: $, connectionInProgress: R } = he(hx, _e), L = pn(c), D = se();
  fx(S);
  const O = pe((H) => {
    x?.({ x: H[0], y: H[1], zoom: H[2] }), w || b.setState({ transform: H });
  }, [x, w]);
  return ce(() => {
    if (S.current) {
      D.current = x1({
        domNode: S.current,
        minZoom: f,
        maxZoom: d,
        translateExtent: u,
        viewport: l,
        onDraggingChange: (N) => b.setState((P) => P.paneDragging === N ? P : { paneDragging: N }),
        onPanZoomStart: (N, P) => {
          const { onViewportChangeStart: B, onMoveStart: k } = b.getState();
          k?.(N, P), B?.(P);
        },
        onPanZoom: (N, P) => {
          const { onViewportChange: B, onMove: k } = b.getState();
          k?.(N, P), B?.(P);
        },
        onPanZoomEnd: (N, P) => {
          const { onViewportChangeEnd: B, onMoveEnd: k } = b.getState();
          k?.(N, P), B?.(P);
        }
      });
      const { x: H, y: E, zoom: C } = D.current.getViewport();
      return b.setState({
        panZoom: D.current,
        transform: [H, E, C],
        domNode: S.current.closest(".react-flow")
      }), () => {
        D.current?.destroy();
      };
    }
  }, []), ce(() => {
    D.current?.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: a,
      panOnScrollSpeed: r,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: o,
      zoomActivationKeyPressed: L,
      preventScrolling: g,
      noPanClassName: h,
      userSelectionActive: I,
      noWheelClassName: v,
      lib: $,
      onTransformChange: O,
      connectionInProgress: R,
      selectionOnDrag: _,
      paneClickDistance: y
    });
  }, [
    e,
    t,
    n,
    a,
    r,
    i,
    s,
    o,
    L,
    g,
    h,
    I,
    v,
    $,
    O,
    R,
    _,
    y
  ]), p.jsx("div", { className: "react-flow__renderer", ref: S, style: ni, children: m });
}
const gx = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function mx() {
  const { userSelectionActive: e, userSelectionRect: t } = he(gx, _e);
  return e && t ? p.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Zi = (e, t) => (n) => {
  n.target === t.current && e?.(n);
}, vx = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging,
  panBy: e.panBy,
  autoPanSpeed: e.autoPanSpeed
});
function xx({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = dn.Full, panOnDrag: a, autoPanOnSelection: r, paneClickDistance: i, selectionOnDrag: s, onSelectionStart: o, onSelectionEnd: l, onPaneClick: u, onPaneContextMenu: f, onPaneScroll: d, onPaneMouseEnter: c, onPaneMouseMove: g, onPaneMouseLeave: m, children: v }) {
  const h = se(0), x = Se(), { userSelectionActive: w, elementsSelectable: y, dragging: _, connectionInProgress: b, panBy: S, autoPanSpeed: I } = he(vx, _e), $ = y && (e || w), R = se(null), L = se(), D = se(/* @__PURE__ */ new Set()), O = se(/* @__PURE__ */ new Set()), H = se(!1), E = se({ x: 0, y: 0 }), C = se(!1), N = (Z) => {
    if (H.current || b) {
      H.current = !1;
      return;
    }
    u?.(Z), x.getState().resetSelectedElements(), x.setState({ nodesSelectionActive: !1 });
  }, P = (Z) => {
    if (Array.isArray(a) && a?.includes(2)) {
      Z.preventDefault();
      return;
    }
    f?.(Z);
  }, B = d ? (Z) => d(Z) : void 0, k = (Z) => {
    H.current && (Z.stopPropagation(), H.current = !1);
  }, F = (Z) => {
    const { domNode: J, transform: K } = x.getState();
    if (L.current = J?.getBoundingClientRect(), !L.current)
      return;
    const Q = Z.target === R.current;
    if (!Q && !!Z.target.closest(".nokey") || !e || !(s && Q || t) || Z.button !== 0 || !Z.isPrimary)
      return;
    Z.target?.setPointerCapture?.(Z.pointerId), H.current = !1;
    const { x: ue, y: ge } = He(Z.nativeEvent, L.current), xe = Ut({ x: ue, y: ge }, K);
    x.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: xe.x,
        startY: xe.y,
        x: ue,
        y: ge
      }
    }), Q || (Z.stopPropagation(), Z.preventDefault());
  };
  function q(Z, J) {
    const { userSelectionRect: K } = x.getState();
    if (!K)
      return;
    const { transform: Q, nodeLookup: re, edgeLookup: ne, connectionLookup: ue, triggerNodeChanges: ge, triggerEdgeChanges: xe, defaultEdgeOptions: Me } = x.getState(), A = { x: K.startX, y: K.startY }, { x: M, y: T } = Zt(A, Q), U = {
      startX: A.x,
      startY: A.y,
      x: Z < M ? Z : M,
      y: J < T ? J : T,
      width: Math.abs(Z - M),
      height: Math.abs(J - T)
    }, j = D.current, V = O.current;
    D.current = new Set(vs(re, U, Q, n === dn.Partial, !0).map((oe) => oe.id)), O.current = /* @__PURE__ */ new Set();
    const ae = Me?.selectable ?? !0;
    for (const oe of D.current) {
      const de = ue.get(oe);
      if (de)
        for (const { edgeId: me } of de.values()) {
          const Ne = ne.get(me);
          Ne && (Ne.selectable ?? ae) && O.current.add(me);
        }
    }
    if (!lo(j, D.current)) {
      const oe = kt(re, D.current, !0);
      ge(oe);
    }
    if (!lo(V, O.current)) {
      const oe = kt(ne, O.current);
      xe(oe);
    }
    x.setState({
      userSelectionRect: U,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }
  function z() {
    if (!r || !L.current)
      return;
    const [Z, J] = xs(E.current, L.current, I);
    S({ x: Z, y: J }).then((K) => {
      if (!H.current || !K) {
        h.current = requestAnimationFrame(z);
        return;
      }
      const { x: Q, y: re } = E.current;
      q(Q, re), h.current = requestAnimationFrame(z);
    });
  }
  const X = () => {
    cancelAnimationFrame(h.current), h.current = 0, C.current = !1;
  };
  ce(() => () => X(), []);
  const Y = (Z) => {
    const { userSelectionRect: J, transform: K, resetSelectedElements: Q } = x.getState();
    if (!L.current || !J)
      return;
    const { x: re, y: ne } = He(Z.nativeEvent, L.current);
    E.current = { x: re, y: ne };
    const ue = Zt({ x: J.startX, y: J.startY }, K);
    if (!H.current) {
      const ge = t ? 0 : i;
      if (Math.hypot(re - ue.x, ne - ue.y) <= ge)
        return;
      Q(), o?.(Z);
    }
    H.current = !0, C.current || (z(), C.current = !0), q(re, ne);
  }, ee = (Z) => {
    Z.button === 0 && (Z.target?.releasePointerCapture?.(Z.pointerId), !w && Z.target === R.current && x.getState().userSelectionRect && N?.(Z), x.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), H.current && (l?.(Z), x.setState({
      nodesSelectionActive: D.current.size > 0
    })), X());
  }, le = (Z) => {
    Z.target?.releasePointerCapture?.(Z.pointerId), X();
  }, te = a === !0 || Array.isArray(a) && a.includes(0);
  return p.jsxs("div", { className: Ie(["react-flow__pane", { draggable: te, dragging: _, selection: e }]), onClick: $ ? void 0 : Zi(N, R), onContextMenu: Zi(P, R), onWheel: Zi(B, R), onPointerEnter: $ ? void 0 : c, onPointerMove: $ ? Y : g, onPointerUp: $ ? ee : void 0, onPointerCancel: $ ? le : void 0, onPointerDownCapture: $ ? F : void 0, onClickCapture: $ ? k : void 0, onPointerLeave: m, ref: R, style: ni, children: [v, p.jsx(mx, {})] });
}
function ns({ id: e, store: t, unselect: n = !1, nodeRef: a }) {
  const { addSelectedNodes: r, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: o, onError: l } = t.getState(), u = o.get(e);
  if (!u) {
    l?.("012", Ze.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (n || u.selected && s) && (i({ nodes: [u], edges: [] }), requestAnimationFrame(() => a?.current?.blur())) : r([e]);
}
function Xd({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: a, nodeId: r, isSelectable: i, nodeClickDistance: s }) {
  const o = Se(), [l, u] = fe(!1), f = se();
  return ce(() => {
    f.current = a1({
      getStoreItems: () => o.getState(),
      onNodeMouseDown: (d) => {
        ns({
          id: d,
          store: o,
          nodeRef: e
        });
      },
      onDragStart: () => {
        u(!0);
      },
      onDragStop: () => {
        u(!1);
      }
    });
  }, []), ce(() => {
    if (!(t || !e.current || !f.current))
      return f.current.update({
        noDragClassName: n,
        handleSelector: a,
        domNode: e.current,
        isSelectable: i,
        nodeId: r,
        nodeClickDistance: s
      }), () => {
        f.current?.destroy();
      };
  }, [n, a, t, i, e, r, s]), l;
}
const yx = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Jd() {
  const e = Se();
  return pe((n) => {
    const { nodeExtent: a, snapToGrid: r, snapGrid: i, nodesDraggable: s, onError: o, updateNodePositions: l, nodeLookup: u, nodeOrigin: f } = e.getState(), d = /* @__PURE__ */ new Map(), c = yx(s), g = r ? i[0] : 5, m = r ? i[1] : 5, v = n.direction.x * g * n.factor, h = n.direction.y * m * n.factor;
    for (const [, x] of u) {
      if (!c(x))
        continue;
      let w = {
        x: x.internals.positionAbsolute.x + v,
        y: x.internals.positionAbsolute.y + h
      };
      r && (w = wn(w, i));
      const { position: y, positionAbsolute: _ } = yd({
        nodeId: x.id,
        nextPosition: w,
        nodeLookup: u,
        nodeExtent: a,
        nodeOrigin: f,
        onError: o
      });
      x.position = y, x.internals.positionAbsolute = _, d.set(x.id, x);
    }
    l(d);
  }, []);
}
const Is = as(null), _x = Is.Provider;
Is.Consumer;
const Qd = () => vn(Is), wx = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), Sx = (e, t, n) => (a) => {
  const { connectionClickStartHandle: r, connectionMode: i, connection: s } = a, { fromHandle: o, toHandle: l, isValid: u } = s, f = l?.nodeId === e && l?.id === t && l?.type === n;
  return {
    connectingFrom: o?.nodeId === e && o?.id === t && o?.type === n,
    connectingTo: f,
    clickConnecting: r?.nodeId === e && r?.id === t && r?.type === n,
    isPossibleEndHandle: i === Bt.Strict ? o?.type !== n : e !== o?.nodeId || t !== o?.id,
    connectionInProcess: !!o,
    clickConnectionInProcess: !!r,
    valid: f && u
  };
};
function bx({ type: e = "source", position: t = ie.Top, isValidConnection: n, isConnectable: a = !0, isConnectableStart: r = !0, isConnectableEnd: i = !0, id: s, onConnect: o, children: l, className: u, onMouseDown: f, onTouchStart: d, ...c }, g) {
  const m = s || null, v = e === "target", h = Se(), x = Qd(), { connectOnClick: w, noPanClassName: y, rfId: _ } = he(wx, _e), { connectingFrom: b, connectingTo: S, clickConnecting: I, isPossibleEndHandle: $, connectionInProcess: R, clickConnectionInProcess: L, valid: D } = he(Sx(x, m, e), _e);
  x || h.getState().onError?.("010", Ze.error010());
  const O = (C) => {
    const { defaultEdgeOptions: N, onConnect: P, hasDefaultEdges: B } = h.getState(), k = {
      ...N,
      ...C
    };
    if (B) {
      const { edges: F, setEdges: q, onError: z } = h.getState();
      q(rx(k, F, { onError: z }));
    }
    P?.(k), o?.(k);
  }, H = (C) => {
    if (!x)
      return;
    const N = Md(C.nativeEvent);
    if (r && (N && C.button === 0 || !N)) {
      const P = h.getState();
      ts.onPointerDown(C.nativeEvent, {
        handleDomNode: C.currentTarget,
        autoPanOnConnect: P.autoPanOnConnect,
        connectionMode: P.connectionMode,
        connectionRadius: P.connectionRadius,
        domNode: P.domNode,
        nodeLookup: P.nodeLookup,
        lib: P.lib,
        isTarget: v,
        handleId: m,
        nodeId: x,
        flowId: P.rfId,
        panBy: P.panBy,
        cancelConnection: P.cancelConnection,
        onConnectStart: P.onConnectStart,
        onConnectEnd: (...B) => h.getState().onConnectEnd?.(...B),
        updateConnection: P.updateConnection,
        onConnect: O,
        isValidConnection: n || ((...B) => h.getState().isValidConnection?.(...B) ?? !0),
        getTransform: () => h.getState().transform,
        getFromHandle: () => h.getState().connection.fromHandle,
        autoPanSpeed: P.autoPanSpeed,
        dragThreshold: P.connectionDragThreshold
      });
    }
    N ? f?.(C) : d?.(C);
  }, E = (C) => {
    const { onClickConnectStart: N, onClickConnectEnd: P, connectionClickStartHandle: B, connectionMode: k, isValidConnection: F, lib: q, rfId: z, nodeLookup: X, connection: Y } = h.getState();
    if (!x || !B && !r)
      return;
    if (!B) {
      N?.(C.nativeEvent, { nodeId: x, handleId: m, handleType: e }), h.setState({ connectionClickStartHandle: { nodeId: x, type: e, id: m } });
      return;
    }
    const ee = Ed(C.target), le = n || F, { connection: te, isValid: Z } = ts.isValid(C.nativeEvent, {
      handle: {
        nodeId: x,
        id: m,
        type: e
      },
      connectionMode: k,
      fromNodeId: B.nodeId,
      fromHandleId: B.id || null,
      fromType: B.type,
      isValidConnection: le,
      flowId: z,
      doc: ee,
      lib: q,
      nodeLookup: X
    });
    Z && te && O(te);
    const J = structuredClone(Y);
    delete J.inProgress, J.toPosition = J.toHandle ? J.toHandle.position : null, P?.(C, J), h.setState({ connectionClickStartHandle: null });
  };
  return p.jsx("div", { "data-handleid": m, "data-nodeid": x, "data-handlepos": t, "data-id": `${_}-${x}-${m}-${e}`, className: Ie([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    y,
    u,
    {
      source: !v,
      target: v,
      connectable: a,
      connectablestart: r,
      connectableend: i,
      clickconnecting: I,
      connectingfrom: b,
      connectingto: S,
      valid: D,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: a && (!R || $) && (R || L ? i : r)
    }
  ]), onMouseDown: H, onTouchStart: H, onClick: w ? E : void 0, ref: g, ...c, children: l });
}
const gn = Ae(Kd(bx));
function Ax({ data: e, isConnectable: t, sourcePosition: n = ie.Bottom }) {
  return p.jsxs(p.Fragment, { children: [e?.label, p.jsx(gn, { type: "source", position: n, isConnectable: t })] });
}
function Ex({ data: e, isConnectable: t, targetPosition: n = ie.Top, sourcePosition: a = ie.Bottom }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(gn, { type: "target", position: n, isConnectable: t }), e?.label, p.jsx(gn, { type: "source", position: a, isConnectable: t })] });
}
function Ix() {
  return null;
}
function Mx({ data: e, isConnectable: t, targetPosition: n = ie.Top }) {
  return p.jsxs(p.Fragment, { children: [p.jsx(gn, { type: "target", position: n, isConnectable: t }), e?.label] });
}
const Ba = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Oo = {
  input: Ax,
  default: Ex,
  output: Mx,
  group: Ix
};
function Cx(e) {
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? e.style?.width,
    height: e.height ?? e.initialHeight ?? e.style?.height
  } : {
    width: e.width ?? e.style?.width,
    height: e.height ?? e.style?.height
  };
}
const Nx = (e) => {
  const { width: t, height: n, x: a, y: r } = _n(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Fe(t) ? t : null,
    height: Fe(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${a}px,${r}px)`
  };
};
function $x({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const a = Se(), { width: r, height: i, transformString: s, userSelectionActive: o } = he(Nx, _e), l = Jd(), u = se(null);
  ce(() => {
    n || u.current?.focus({
      preventScroll: !0
    });
  }, [n]);
  const f = !o && r !== null && i !== null;
  if (Xd({
    nodeRef: u,
    disabled: !f
  }), !f)
    return null;
  const d = e ? (g) => {
    const m = a.getState().nodes.filter((v) => v.selected);
    e(g, m);
  } : void 0, c = (g) => {
    Object.prototype.hasOwnProperty.call(Ba, g.key) && (g.preventDefault(), l({
      direction: Ba[g.key],
      factor: g.shiftKey ? 4 : 1
    }));
  };
  return p.jsx("div", { className: Ie(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: p.jsx("div", { ref: u, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : c, style: {
    width: r,
    height: i
  } }) });
}
const Bo = typeof window < "u" ? window : void 0, Rx = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function ef({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: a, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: o, deleteKeyCode: l, selectionKeyCode: u, selectionOnDrag: f, selectionMode: d, onSelectionStart: c, onSelectionEnd: g, multiSelectionKeyCode: m, panActivationKeyCode: v, zoomActivationKeyCode: h, elementsSelectable: x, zoomOnScroll: w, zoomOnPinch: y, panOnScroll: _, panOnScrollSpeed: b, panOnScrollMode: S, zoomOnDoubleClick: I, panOnDrag: $, autoPanOnSelection: R, defaultViewport: L, translateExtent: D, minZoom: O, maxZoom: H, preventScrolling: E, onSelectionContextMenu: C, noWheelClassName: N, noPanClassName: P, disableKeyboardA11y: B, onViewportChange: k, isControlledViewport: F }) {
  const { nodesSelectionActive: q, userSelectionActive: z } = he(Rx, _e), X = pn(u, { target: Bo }), Y = pn(v, { target: Bo }), ee = Y || $, le = Y || _, te = f && ee !== !0, Z = X || z || te;
  return dx({ deleteKeyCode: l, multiSelectionKeyCode: m }), p.jsx(px, { onPaneContextMenu: i, elementsSelectable: x, zoomOnScroll: w, zoomOnPinch: y, panOnScroll: le, panOnScrollSpeed: b, panOnScrollMode: S, zoomOnDoubleClick: I, panOnDrag: !X && ee, defaultViewport: L, translateExtent: D, minZoom: O, maxZoom: H, zoomActivationKeyCode: h, preventScrolling: E, noWheelClassName: N, noPanClassName: P, onViewportChange: k, isControlledViewport: F, paneClickDistance: o, selectionOnDrag: te, children: p.jsxs(xx, { onSelectionStart: c, onSelectionEnd: g, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: a, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: ee, autoPanOnSelection: R, isSelecting: !!Z, selectionMode: d, selectionKeyPressed: X, paneClickDistance: o, selectionOnDrag: te, children: [e, q && p.jsx($x, { onSelectionContextMenu: C, noPanClassName: P, disableKeyboardA11y: B })] }) });
}
ef.displayName = "FlowRenderer";
const Dx = Ae(ef), Px = (e) => (t) => e ? vs(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function kx(e) {
  return he(pe(Px(e), [e]), _e);
}
const Tx = (e) => e.updateNodeInternals;
function Lx() {
  const e = he(Tx), [t] = fe(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const a = /* @__PURE__ */ new Map();
    n.forEach((r) => {
      const i = r.target.getAttribute("data-id");
      a.set(i, {
        id: i,
        nodeElement: r.target,
        force: !0
      });
    }), e(a);
  }));
  return ce(() => () => {
    t?.disconnect();
  }, [t]), t;
}
function Ox({ node: e, nodeType: t, hasDimensions: n, resizeObserver: a }) {
  const r = Se(), i = se(null), s = se(null), o = se(e.sourcePosition), l = se(e.targetPosition), u = se(t), f = n && !!e.internals.handleBounds;
  return ce(() => {
    i.current && !e.hidden && (!f || s.current !== i.current) && (s.current && a?.unobserve(s.current), a?.observe(i.current), s.current = i.current);
  }, [f, e.hidden]), ce(() => () => {
    s.current && (a?.unobserve(s.current), s.current = null);
  }, []), ce(() => {
    if (i.current) {
      const d = u.current !== t, c = o.current !== e.sourcePosition, g = l.current !== e.targetPosition;
      (d || c || g) && (u.current = t, o.current = e.sourcePosition, l.current = e.targetPosition, r.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function Bx({ id: e, onClick: t, onMouseEnter: n, onMouseMove: a, onMouseLeave: r, onContextMenu: i, onDoubleClick: s, nodesDraggable: o, elementsSelectable: l, nodesConnectable: u, nodesFocusable: f, resizeObserver: d, noDragClassName: c, noPanClassName: g, disableKeyboardA11y: m, rfId: v, nodeTypes: h, nodeClickDistance: x, onError: w }) {
  const { node: y, internals: _, isParent: b } = he((Z) => {
    const J = Z.nodeLookup.get(e), K = Z.parentLookup.has(e);
    return {
      node: J,
      internals: J.internals,
      isParent: K
    };
  }, _e);
  let S = y.type || "default", I = h?.[S] || Oo[S];
  I === void 0 && (w?.("003", Ze.error003(S)), S = "default", I = h?.default || Oo.default);
  const $ = !!(y.draggable || o && typeof y.draggable > "u"), R = !!(y.selectable || l && typeof y.selectable > "u"), L = !!(y.connectable || u && typeof y.connectable > "u"), D = !!(y.focusable || f && typeof y.focusable > "u"), O = Se(), H = bd(y), E = Ox({ node: y, nodeType: S, hasDimensions: H, resizeObserver: d }), C = Xd({
    nodeRef: E,
    disabled: y.hidden || !$,
    noDragClassName: c,
    handleSelector: y.dragHandle,
    nodeId: e,
    isSelectable: R,
    nodeClickDistance: x
  }), N = Jd();
  if (y.hidden)
    return null;
  const P = Xe(y), B = Cx(y), k = R || $ || t || n || a || r, F = n ? (Z) => n(Z, { ..._.userNode }) : void 0, q = a ? (Z) => a(Z, { ..._.userNode }) : void 0, z = r ? (Z) => r(Z, { ..._.userNode }) : void 0, X = i ? (Z) => i(Z, { ..._.userNode }) : void 0, Y = s ? (Z) => s(Z, { ..._.userNode }) : void 0, ee = (Z) => {
    const { selectNodesOnDrag: J, nodeDragThreshold: K } = O.getState();
    R && (!J || !$ || K > 0) && ns({
      id: e,
      store: O,
      nodeRef: E
    }), t && t(Z, { ..._.userNode });
  }, le = (Z) => {
    if (!(Id(Z.nativeEvent) || m)) {
      if (pd.includes(Z.key) && R) {
        const J = Z.key === "Escape";
        ns({
          id: e,
          store: O,
          unselect: J,
          nodeRef: E
        });
      } else if ($ && y.selected && Object.prototype.hasOwnProperty.call(Ba, Z.key)) {
        Z.preventDefault();
        const { ariaLabelConfig: J } = O.getState();
        O.setState({
          ariaLiveMessage: J["node.a11yDescription.ariaLiveMessage"]({
            direction: Z.key.replace("Arrow", "").toLowerCase(),
            x: ~~_.positionAbsolute.x,
            y: ~~_.positionAbsolute.y
          })
        }), N({
          direction: Ba[Z.key],
          factor: Z.shiftKey ? 4 : 1
        });
      }
    }
  }, te = () => {
    if (m || !E.current?.matches(":focus-visible"))
      return;
    const { transform: Z, width: J, height: K, autoPanOnNodeFocus: Q, setCenter: re } = O.getState();
    if (!Q)
      return;
    vs(/* @__PURE__ */ new Map([[e, y]]), { x: 0, y: 0, width: J, height: K }, Z, !0).length > 0 || re(y.position.x + P.width / 2, y.position.y + P.height / 2, {
      zoom: Z[2]
    });
  };
  return p.jsx("div", { className: Ie([
    "react-flow__node",
    `react-flow__node-${S}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [g]: $
    },
    y.className,
    {
      selected: y.selected,
      selectable: R,
      parent: b,
      draggable: $,
      dragging: C
    }
  ]), ref: E, style: {
    zIndex: _.z,
    transform: `translate(${_.positionAbsolute.x}px,${_.positionAbsolute.y}px)`,
    pointerEvents: k ? "all" : "none",
    visibility: H ? "visible" : "hidden",
    ...y.style,
    ...B
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: F, onMouseMove: q, onMouseLeave: z, onContextMenu: X, onClick: ee, onDoubleClick: Y, onKeyDown: D ? le : void 0, tabIndex: D ? 0 : void 0, onFocus: D ? te : void 0, role: y.ariaRole ?? (D ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": m ? void 0 : `${jd}-${v}`, "aria-label": y.ariaLabel, ...y.domAttributes, children: p.jsx(_x, { value: e, children: p.jsx(I, { id: e, data: y.data, type: S, positionAbsoluteX: _.positionAbsolute.x, positionAbsoluteY: _.positionAbsolute.y, selected: y.selected ?? !1, selectable: R, draggable: $, deletable: y.deletable ?? !0, isConnectable: L, sourcePosition: y.sourcePosition, targetPosition: y.targetPosition, dragging: C, dragHandle: y.dragHandle, zIndex: _.z, parentId: y.parentId, ...P }) }) });
}
var Fx = Ae(Bx);
const Hx = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function tf(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: a, elementsSelectable: r, onError: i } = he(Hx, _e), s = kx(e.onlyRenderVisibleElements), o = Lx();
  return p.jsx("div", { className: "react-flow__nodes", style: ni, children: s.map((l) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    p.jsx(Fx, { id: l, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: o, nodesDraggable: t, nodesConnectable: n, nodesFocusable: a, elementsSelectable: r, nodeClickDistance: e.nodeClickDistance, onError: i }, l)
  )) });
}
tf.displayName = "NodeRenderer";
const Zx = Ae(tf);
function qx(e) {
  return he(pe((n) => {
    if (!e)
      return n.edges.map((r) => r.id);
    const a = [];
    if (n.width && n.height)
      for (const r of n.edges) {
        const i = n.nodeLookup.get(r.source), s = n.nodeLookup.get(r.target);
        i && s && Fv({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && a.push(r.id);
      }
    return a;
  }, [e]), _e);
}
const zx = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return p.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Ux = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return p.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, Fo = {
  [Ta.Arrow]: zx,
  [Ta.ArrowClosed]: Ux
};
function jx(e) {
  const t = Se();
  return Ce(() => Object.prototype.hasOwnProperty.call(Fo, e) ? Fo[e] : (t.getState().onError?.("009", Ze.error009(e)), null), [e]);
}
const Vx = ({ id: e, type: t, color: n, width: a = 12.5, height: r = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: o = "auto-start-reverse" }) => {
  const l = jx(t);
  return l ? p.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${a}`, markerHeight: `${r}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: o, refX: "0", refY: "0", children: p.jsx(l, { color: n, strokeWidth: s }) }) : null;
}, nf = ({ defaultColor: e, rfId: t }) => {
  const n = he((i) => i.edges), a = he((i) => i.defaultEdgeOptions), r = Ce(() => Wv(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: a?.markerStart,
    defaultMarkerEnd: a?.markerEnd
  }), [n, a, t, e]);
  return r.length ? p.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: p.jsx("defs", { children: r.map((i) => p.jsx(Vx, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
nf.displayName = "MarkerDefinitions";
var Wx = Ae(nf);
function rf({ x: e, y: t, label: n, labelStyle: a, labelShowBg: r = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: o = 2, children: l, className: u, ...f }) {
  const [d, c] = fe({ x: 1, y: 0, width: 0, height: 0 }), g = Ie(["react-flow__edge-textwrapper", u]), m = se(null);
  return ce(() => {
    if (m.current) {
      const v = m.current.getBBox();
      c({
        x: v.x,
        y: v.y,
        width: v.width,
        height: v.height
      });
    }
  }, [n]), n ? p.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: g, visibility: d.width ? "visible" : "hidden", ...f, children: [r && p.jsx("rect", { width: d.width + 2 * s[0], x: -s[0], y: -s[1], height: d.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: o, ry: o }), p.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: m, style: a, children: n }), l] }) : null;
}
rf.displayName = "EdgeText";
const Gx = Ae(rf);
function zt({ path: e, labelX: t, labelY: n, label: a, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: o, labelBgBorderRadius: l, interactionWidth: u = 20, ...f }) {
  return p.jsxs(p.Fragment, { children: [p.jsx("path", { ...f, d: e, fill: "none", className: Ie(["react-flow__edge-path", f.className]) }), u ? p.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: u, className: "react-flow__edge-interaction" }) : null, a && Fe(t) && Fe(n) ? p.jsx(Gx, { x: t, y: n, label: a, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: o, labelBgBorderRadius: l }) : null] });
}
function Ho({ pos: e, x1: t, y1: n, x2: a, y2: r }) {
  return e === ie.Left || e === ie.Right ? [0.5 * (t + a), n] : [t, 0.5 * (n + r)];
}
function af({ sourceX: e, sourceY: t, sourcePosition: n = ie.Bottom, targetX: a, targetY: r, targetPosition: i = ie.Top }) {
  const [s, o] = Ho({
    pos: n,
    x1: e,
    y1: t,
    x2: a,
    y2: r
  }), [l, u] = Ho({
    pos: i,
    x1: a,
    y1: r,
    x2: e,
    y2: t
  }), [f, d, c, g] = Cd({
    sourceX: e,
    sourceY: t,
    targetX: a,
    targetY: r,
    sourceControlX: s,
    sourceControlY: o,
    targetControlX: l,
    targetControlY: u
  });
  return [
    `M${e},${t} C${s},${o} ${l},${u} ${a},${r}`,
    f,
    d,
    c,
    g
  ];
}
function sf(e) {
  return Ae(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, sourcePosition: s, targetPosition: o, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: g, style: m, markerEnd: v, markerStart: h, interactionWidth: x }) => {
    const [w, y, _] = af({
      sourceX: n,
      sourceY: a,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: o
    }), b = e.isInternal ? void 0 : t;
    return p.jsx(zt, { id: b, path: w, labelX: y, labelY: _, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: g, style: m, markerEnd: v, markerStart: h, interactionWidth: x });
  });
}
const Kx = sf({ isInternal: !1 }), of = sf({ isInternal: !0 });
Kx.displayName = "SimpleBezierEdge";
of.displayName = "SimpleBezierEdgeInternal";
function lf(e) {
  return Ae(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, sourcePosition: g = ie.Bottom, targetPosition: m = ie.Top, markerEnd: v, markerStart: h, pathOptions: x, interactionWidth: w }) => {
    const [y, _, b] = Oa({
      sourceX: n,
      sourceY: a,
      sourcePosition: g,
      targetX: r,
      targetY: i,
      targetPosition: m,
      borderRadius: x?.borderRadius,
      offset: x?.offset,
      stepPosition: x?.stepPosition
    }), S = e.isInternal ? void 0 : t;
    return p.jsx(zt, { id: S, path: y, labelX: _, labelY: b, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: v, markerStart: h, interactionWidth: w });
  });
}
const uf = lf({ isInternal: !1 }), cf = lf({ isInternal: !0 });
uf.displayName = "SmoothStepEdge";
cf.displayName = "SmoothStepEdgeInternal";
function df(e) {
  return Ae(({ id: t, ...n }) => {
    const a = e.isInternal ? void 0 : t;
    return p.jsx(uf, { ...n, id: a, pathOptions: Ce(() => ({ borderRadius: 0, offset: n.pathOptions?.offset }), [n.pathOptions?.offset]) });
  });
}
const Yx = df({ isInternal: !1 }), ff = df({ isInternal: !0 });
Yx.displayName = "StepEdge";
ff.displayName = "StepEdgeInternal";
function hf(e) {
  return Ae(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: g, markerStart: m, interactionWidth: v }) => {
    const [h, x, w] = Rd({ sourceX: n, sourceY: a, targetX: r, targetY: i }), y = e.isInternal ? void 0 : t;
    return p.jsx(zt, { id: y, path: h, labelX: x, labelY: w, label: s, labelStyle: o, labelShowBg: l, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: d, style: c, markerEnd: g, markerStart: m, interactionWidth: v });
  });
}
const Xx = hf({ isInternal: !1 }), pf = hf({ isInternal: !0 });
Xx.displayName = "StraightEdge";
pf.displayName = "StraightEdgeInternal";
function gf(e) {
  return Ae(({ id: t, sourceX: n, sourceY: a, targetX: r, targetY: i, sourcePosition: s = ie.Bottom, targetPosition: o = ie.Top, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: g, style: m, markerEnd: v, markerStart: h, pathOptions: x, interactionWidth: w }) => {
    const [y, _, b] = Nd({
      sourceX: n,
      sourceY: a,
      sourcePosition: s,
      targetX: r,
      targetY: i,
      targetPosition: o,
      curvature: x?.curvature
    }), S = e.isInternal ? void 0 : t;
    return p.jsx(zt, { id: S, path: y, labelX: _, labelY: b, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: c, labelBgBorderRadius: g, style: m, markerEnd: v, markerStart: h, interactionWidth: w });
  });
}
const Jx = gf({ isInternal: !1 }), mf = gf({ isInternal: !0 });
Jx.displayName = "BezierEdge";
mf.displayName = "BezierEdgeInternal";
const Zo = {
  default: mf,
  straight: pf,
  step: ff,
  smoothstep: cf,
  simplebezier: of
}, qo = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Qx = (e, t, n) => n === ie.Left ? e - t : n === ie.Right ? e + t : e, ey = (e, t, n) => n === ie.Top ? e - t : n === ie.Bottom ? e + t : e, zo = "react-flow__edgeupdater";
function Uo({ position: e, centerX: t, centerY: n, radius: a = 10, onMouseDown: r, onMouseEnter: i, onMouseOut: s, type: o }) {
  return p.jsx("circle", { onMouseDown: r, onMouseEnter: i, onMouseOut: s, className: Ie([zo, `${zo}-${o}`]), cx: Qx(t, a, e), cy: ey(n, a, e), r: a, stroke: "transparent", fill: "transparent" });
}
function ty({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: a, sourceY: r, targetX: i, targetY: s, sourcePosition: o, targetPosition: l, onReconnect: u, onReconnectStart: f, onReconnectEnd: d, setReconnecting: c, setUpdateHover: g }) {
  const m = Se(), v = (_, b) => {
    if (_.button !== 0)
      return;
    const { autoPanOnConnect: S, domNode: I, connectionMode: $, connectionRadius: R, lib: L, onConnectStart: D, cancelConnection: O, nodeLookup: H, rfId: E, panBy: C, updateConnection: N } = m.getState(), P = b.type === "target", B = (q, z) => {
      c(!1), d?.(q, n, b.type, z);
    }, k = (q) => u?.(n, q), F = (q, z) => {
      c(!0), f?.(_, n, b.type), D?.(q, z);
    };
    ts.onPointerDown(_.nativeEvent, {
      autoPanOnConnect: S,
      connectionMode: $,
      connectionRadius: R,
      domNode: I,
      handleId: b.id,
      nodeId: b.nodeId,
      nodeLookup: H,
      isTarget: P,
      edgeUpdaterType: b.type,
      lib: L,
      flowId: E,
      cancelConnection: O,
      panBy: C,
      isValidConnection: (...q) => m.getState().isValidConnection?.(...q) ?? !0,
      onConnect: k,
      onConnectStart: F,
      onConnectEnd: (...q) => m.getState().onConnectEnd?.(...q),
      onReconnectEnd: B,
      updateConnection: N,
      getTransform: () => m.getState().transform,
      getFromHandle: () => m.getState().connection.fromHandle,
      dragThreshold: m.getState().connectionDragThreshold,
      handleDomNode: _.currentTarget
    });
  }, h = (_) => v(_, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), x = (_) => v(_, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), w = () => g(!0), y = () => g(!1);
  return p.jsxs(p.Fragment, { children: [(e === !0 || e === "source") && p.jsx(Uo, { position: o, centerX: a, centerY: r, radius: t, onMouseDown: h, onMouseEnter: w, onMouseOut: y, type: "source" }), (e === !0 || e === "target") && p.jsx(Uo, { position: l, centerX: i, centerY: s, radius: t, onMouseDown: x, onMouseEnter: w, onMouseOut: y, type: "target" })] });
}
function ny({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: a, onClick: r, onDoubleClick: i, onContextMenu: s, onMouseEnter: o, onMouseMove: l, onMouseLeave: u, reconnectRadius: f, onReconnect: d, onReconnectStart: c, onReconnectEnd: g, rfId: m, edgeTypes: v, noPanClassName: h, onError: x, disableKeyboardA11y: w }) {
  let y = he((re) => re.edgeLookup.get(e));
  const _ = he((re) => re.defaultEdgeOptions);
  y = _ ? { ..._, ...y } : y;
  let b = y.type || "default", S = v?.[b] || Zo[b];
  S === void 0 && (x?.("011", Ze.error011(b)), b = "default", S = v?.default || Zo.default);
  const I = !!(y.focusable || t && typeof y.focusable > "u"), $ = typeof d < "u" && (y.reconnectable || n && typeof y.reconnectable > "u"), R = !!(y.selectable || a && typeof y.selectable > "u"), L = se(null), [D, O] = fe(!1), [H, E] = fe(!1), C = Se(), { zIndex: N, sourceX: P, sourceY: B, targetX: k, targetY: F, sourcePosition: q, targetPosition: z } = he(pe((re) => {
    const ne = re.nodeLookup.get(y.source), ue = re.nodeLookup.get(y.target);
    if (!ne || !ue)
      return {
        zIndex: y.zIndex,
        ...qo
      };
    const ge = Vv({
      id: e,
      sourceNode: ne,
      targetNode: ue,
      sourceHandle: y.sourceHandle || null,
      targetHandle: y.targetHandle || null,
      connectionMode: re.connectionMode,
      onError: x
    });
    return {
      zIndex: Bv({
        selected: y.selected,
        zIndex: y.zIndex,
        sourceNode: ne,
        targetNode: ue,
        elevateOnSelect: re.elevateEdgesOnSelect,
        zIndexMode: re.zIndexMode
      }),
      ...ge || qo
    };
  }, [y.source, y.target, y.sourceHandle, y.targetHandle, y.selected, y.zIndex]), _e), X = Ce(() => y.markerStart ? `url('#${Qi(y.markerStart, m)}')` : void 0, [y.markerStart, m]), Y = Ce(() => y.markerEnd ? `url('#${Qi(y.markerEnd, m)}')` : void 0, [y.markerEnd, m]);
  if (y.hidden || P === null || B === null || k === null || F === null)
    return null;
  const ee = (re) => {
    const { addSelectedEdges: ne, unselectNodesAndEdges: ue, multiSelectionActive: ge } = C.getState();
    R && (C.setState({ nodesSelectionActive: !1 }), y.selected && ge ? (ue({ nodes: [], edges: [y] }), L.current?.blur()) : ne([e])), r && r(re, y);
  }, le = i ? (re) => {
    i(re, { ...y });
  } : void 0, te = s ? (re) => {
    s(re, { ...y });
  } : void 0, Z = o ? (re) => {
    o(re, { ...y });
  } : void 0, J = l ? (re) => {
    l(re, { ...y });
  } : void 0, K = u ? (re) => {
    u(re, { ...y });
  } : void 0, Q = (re) => {
    if (!w && pd.includes(re.key) && R) {
      const { unselectNodesAndEdges: ne, addSelectedEdges: ue } = C.getState();
      re.key === "Escape" ? (L.current?.blur(), ne({ edges: [y] })) : ue([e]);
    }
  };
  return p.jsx("svg", { style: { zIndex: N }, children: p.jsxs("g", { className: Ie([
    "react-flow__edge",
    `react-flow__edge-${b}`,
    y.className,
    h,
    {
      selected: y.selected,
      animated: y.animated,
      inactive: !R && !r,
      updating: D,
      selectable: R
    }
  ]), onClick: ee, onDoubleClick: le, onContextMenu: te, onMouseEnter: Z, onMouseMove: J, onMouseLeave: K, onKeyDown: I ? Q : void 0, tabIndex: I ? 0 : void 0, role: y.ariaRole ?? (I ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": y.ariaLabel === null ? void 0 : y.ariaLabel || `Edge from ${y.source} to ${y.target}`, "aria-describedby": I ? `${Vd}-${m}` : void 0, ref: L, ...y.domAttributes, children: [!H && p.jsx(S, { id: e, source: y.source, target: y.target, type: y.type, selected: y.selected, animated: y.animated, selectable: R, deletable: y.deletable ?? !0, label: y.label, labelStyle: y.labelStyle, labelShowBg: y.labelShowBg, labelBgStyle: y.labelBgStyle, labelBgPadding: y.labelBgPadding, labelBgBorderRadius: y.labelBgBorderRadius, sourceX: P, sourceY: B, targetX: k, targetY: F, sourcePosition: q, targetPosition: z, data: y.data, style: y.style, sourceHandleId: y.sourceHandle, targetHandleId: y.targetHandle, markerStart: X, markerEnd: Y, pathOptions: "pathOptions" in y ? y.pathOptions : void 0, interactionWidth: y.interactionWidth }), $ && p.jsx(ty, { edge: y, isReconnectable: $, reconnectRadius: f, onReconnect: d, onReconnectStart: c, onReconnectEnd: g, sourceX: P, sourceY: B, targetX: k, targetY: F, sourcePosition: q, targetPosition: z, setUpdateHover: O, setReconnecting: E })] }) });
}
var ry = Ae(ny);
const ay = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function vf({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: a, noPanClassName: r, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: o, onEdgeMouseMove: l, onEdgeMouseLeave: u, onEdgeClick: f, reconnectRadius: d, onEdgeDoubleClick: c, onReconnectStart: g, onReconnectEnd: m, disableKeyboardA11y: v }) {
  const { edgesFocusable: h, edgesReconnectable: x, elementsSelectable: w, onError: y } = he(ay, _e), _ = qx(t);
  return p.jsxs("div", { className: "react-flow__edges", children: [p.jsx(Wx, { defaultColor: e, rfId: n }), _.map((b) => p.jsx(ry, { id: b, edgesFocusable: h, edgesReconnectable: x, elementsSelectable: w, noPanClassName: r, onReconnect: i, onContextMenu: s, onMouseEnter: o, onMouseMove: l, onMouseLeave: u, onClick: f, reconnectRadius: d, onDoubleClick: c, onReconnectStart: g, onReconnectEnd: m, rfId: n, onError: y, edgeTypes: a, disableKeyboardA11y: v }, b))] });
}
vf.displayName = "EdgeRenderer";
const iy = Ae(vf), sy = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function oy({ children: e }) {
  const t = he(sy);
  return p.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function ly(e) {
  const t = ti(), n = se(!1);
  ce(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const uy = (e) => e.panZoom?.syncViewport;
function cy(e) {
  const t = he(uy), n = Se();
  return ce(() => {
    e && (t?.(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function dy(e) {
  return e.connection.inProgress ? { ...e.connection, to: Ut(e.connection.to, e.transform) } : { ...e.connection };
}
function fy(e) {
  return dy;
}
function hy(e) {
  const t = fy();
  return he(t, _e);
}
const py = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function gy({ containerStyle: e, style: t, type: n, component: a }) {
  const { nodesConnectable: r, width: i, height: s, isValid: o, inProgress: l } = he(py, _e);
  return !(i && r && l) ? null : p.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: p.jsx("g", { className: Ie(["react-flow__connection", vd(o)]), children: p.jsx(xf, { style: t, type: n, CustomComponent: a, isValid: o }) }) });
}
const xf = ({ style: e, type: t = it.Bezier, CustomComponent: n, isValid: a }) => {
  const { inProgress: r, from: i, fromNode: s, fromHandle: o, fromPosition: l, to: u, toNode: f, toHandle: d, toPosition: c, pointer: g } = hy();
  if (!r)
    return;
  if (n)
    return p.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: o, fromX: i.x, fromY: i.y, toX: u.x, toY: u.y, fromPosition: l, toPosition: c, connectionStatus: vd(a), toNode: f, toHandle: d, pointer: g });
  let m = "";
  const v = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: l,
    targetX: u.x,
    targetY: u.y,
    targetPosition: c
  };
  switch (t) {
    case it.Bezier:
      [m] = Nd(v);
      break;
    case it.SimpleBezier:
      [m] = af(v);
      break;
    case it.Step:
      [m] = Oa({
        ...v,
        borderRadius: 0
      });
      break;
    case it.SmoothStep:
      [m] = Oa(v);
      break;
    default:
      [m] = Rd(v);
  }
  return p.jsx("path", { d: m, fill: "none", className: "react-flow__connection-path", style: e });
};
xf.displayName = "ConnectionLine";
const my = {};
function jo(e = my) {
  se(e), Se(), ce(() => {
  }, [e]);
}
function vy() {
  Se(), se(!1), ce(() => {
  }, []);
}
function yf({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: a, onEdgeClick: r, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: o, onNodeMouseMove: l, onNodeMouseLeave: u, onNodeContextMenu: f, onSelectionContextMenu: d, onSelectionStart: c, onSelectionEnd: g, connectionLineType: m, connectionLineStyle: v, connectionLineComponent: h, connectionLineContainerStyle: x, selectionKeyCode: w, selectionOnDrag: y, selectionMode: _, multiSelectionKeyCode: b, panActivationKeyCode: S, zoomActivationKeyCode: I, deleteKeyCode: $, onlyRenderVisibleElements: R, elementsSelectable: L, defaultViewport: D, translateExtent: O, minZoom: H, maxZoom: E, preventScrolling: C, defaultMarkerColor: N, zoomOnScroll: P, zoomOnPinch: B, panOnScroll: k, panOnScrollSpeed: F, panOnScrollMode: q, zoomOnDoubleClick: z, panOnDrag: X, autoPanOnSelection: Y, onPaneClick: ee, onPaneMouseEnter: le, onPaneMouseMove: te, onPaneMouseLeave: Z, onPaneScroll: J, onPaneContextMenu: K, paneClickDistance: Q, nodeClickDistance: re, onEdgeContextMenu: ne, onEdgeMouseEnter: ue, onEdgeMouseMove: ge, onEdgeMouseLeave: xe, reconnectRadius: Me, onReconnect: A, onReconnectStart: M, onReconnectEnd: T, noDragClassName: U, noWheelClassName: j, noPanClassName: V, disableKeyboardA11y: ae, nodeExtent: oe, rfId: de, viewport: me, onViewportChange: Ne }) {
  return jo(e), jo(t), vy(), ly(n), cy(me), p.jsx(Dx, { onPaneClick: ee, onPaneMouseEnter: le, onPaneMouseMove: te, onPaneMouseLeave: Z, onPaneContextMenu: K, onPaneScroll: J, paneClickDistance: Q, deleteKeyCode: $, selectionKeyCode: w, selectionOnDrag: y, selectionMode: _, onSelectionStart: c, onSelectionEnd: g, multiSelectionKeyCode: b, panActivationKeyCode: S, zoomActivationKeyCode: I, elementsSelectable: L, zoomOnScroll: P, zoomOnPinch: B, zoomOnDoubleClick: z, panOnScroll: k, panOnScrollSpeed: F, panOnScrollMode: q, panOnDrag: X, autoPanOnSelection: Y, defaultViewport: D, translateExtent: O, minZoom: H, maxZoom: E, onSelectionContextMenu: d, preventScrolling: C, noDragClassName: U, noWheelClassName: j, noPanClassName: V, disableKeyboardA11y: ae, onViewportChange: Ne, isControlledViewport: !!me, children: p.jsxs(oy, { children: [p.jsx(iy, { edgeTypes: t, onEdgeClick: r, onEdgeDoubleClick: s, onReconnect: A, onReconnectStart: M, onReconnectEnd: T, onlyRenderVisibleElements: R, onEdgeContextMenu: ne, onEdgeMouseEnter: ue, onEdgeMouseMove: ge, onEdgeMouseLeave: xe, reconnectRadius: Me, defaultMarkerColor: N, noPanClassName: V, disableKeyboardA11y: ae, rfId: de }), p.jsx(gy, { style: v, type: m, component: h, containerStyle: x }), p.jsx("div", { className: "react-flow__edgelabel-renderer" }), p.jsx(Zx, { nodeTypes: e, onNodeClick: a, onNodeDoubleClick: i, onNodeMouseEnter: o, onNodeMouseMove: l, onNodeMouseLeave: u, onNodeContextMenu: f, nodeClickDistance: re, onlyRenderVisibleElements: R, noPanClassName: V, noDragClassName: U, disableKeyboardA11y: ae, nodeExtent: oe, rfId: de }), p.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
yf.displayName = "GraphView";
const xy = Ae(yf), yy = Sd(), Vo = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, width: r, height: i, fitView: s, fitViewOptions: o, minZoom: l = 0.5, maxZoom: u = 2, nodeOrigin: f, nodeExtent: d, zIndexMode: c = "basic" } = {}) => {
  const g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = a ?? t ?? [], w = n ?? e ?? [], y = f ?? [0, 0], _ = d ?? cn;
  kd(v, h, x);
  const { nodesInitialized: b } = es(w, g, m, {
    nodeOrigin: y,
    nodeExtent: _,
    zIndexMode: c
  });
  let S = [0, 0, 1];
  if (s && r && i) {
    const I = _n(g, {
      filter: (D) => !!((D.width || D.initialWidth) && (D.height || D.initialHeight))
    }), { x: $, y: R, zoom: L } = ys(I, r, i, l, u, o?.padding ?? 0.1);
    S = [$, R, L];
  }
  return {
    rfId: "1",
    width: r ?? 0,
    height: i ?? 0,
    transform: S,
    nodes: w,
    nodesInitialized: b,
    nodeLookup: g,
    parentLookup: m,
    edges: x,
    edgeLookup: h,
    connectionLookup: v,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: a !== void 0,
    panZoom: null,
    minZoom: l,
    maxZoom: u,
    translateExtent: cn,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: Bt.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: y,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: o,
    fitViewResolver: null,
    connection: { ...md },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: yy,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: gd,
    zIndexMode: c,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, _y = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, width: r, height: i, fitView: s, fitViewOptions: o, minZoom: l, maxZoom: u, nodeOrigin: f, nodeExtent: d, zIndexMode: c }) => P1((g, m) => {
  async function v() {
    const { nodeLookup: h, panZoom: x, fitViewOptions: w, fitViewResolver: y, width: _, height: b, minZoom: S, maxZoom: I } = m();
    x && (await Rv({
      nodes: h,
      width: _,
      height: b,
      panZoom: x,
      minZoom: S,
      maxZoom: I
    }, w), y?.resolve(!0), g({ fitViewResolver: null }));
  }
  return {
    ...Vo({
      nodes: e,
      edges: t,
      width: r,
      height: i,
      fitView: s,
      fitViewOptions: o,
      minZoom: l,
      maxZoom: u,
      nodeOrigin: f,
      nodeExtent: d,
      defaultNodes: n,
      defaultEdges: a,
      zIndexMode: c
    }),
    setNodes: (h) => {
      const { nodeLookup: x, parentLookup: w, nodeOrigin: y, elevateNodesOnSelect: _, fitViewQueued: b, zIndexMode: S, nodesSelectionActive: I } = m(), { nodesInitialized: $, hasSelectedNodes: R } = es(h, x, w, {
        nodeOrigin: y,
        nodeExtent: d,
        elevateNodesOnSelect: _,
        checkEquality: !0,
        zIndexMode: S
      }), L = I && R;
      b && $ ? (v(), g({
        nodes: h,
        nodesInitialized: $,
        fitViewQueued: !1,
        fitViewOptions: void 0,
        nodesSelectionActive: L
      })) : g({ nodes: h, nodesInitialized: $, nodesSelectionActive: L });
    },
    setEdges: (h) => {
      const { connectionLookup: x, edgeLookup: w } = m();
      kd(x, w, h), g({ edges: h });
    },
    setDefaultNodesAndEdges: (h, x) => {
      if (h) {
        const { setNodes: w } = m();
        w(h), g({ hasDefaultNodes: !0 });
      }
      if (x) {
        const { setEdges: w } = m();
        w(x), g({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (h) => {
      const { triggerNodeChanges: x, nodeLookup: w, parentLookup: y, domNode: _, nodeOrigin: b, nodeExtent: S, debug: I, fitViewQueued: $, zIndexMode: R } = m(), { changes: L, updatedInternals: D } = e1(h, w, y, _, b, S, R);
      D && (Yv(w, y, { nodeOrigin: b, nodeExtent: S, zIndexMode: R }), $ ? (v(), g({ fitViewQueued: !1, fitViewOptions: void 0 })) : g({}), L?.length > 0 && (I && console.log("React Flow: trigger node changes", L), x?.(L)));
    },
    updateNodePositions: (h, x = !1) => {
      const w = [];
      let y = [];
      const { nodeLookup: _, triggerNodeChanges: b, connection: S, updateConnection: I, onNodesChangeMiddlewareMap: $ } = m();
      for (const [R, L] of h) {
        const D = _.get(R), O = !!(D?.expandParent && D?.parentId && L?.position), H = {
          id: R,
          type: "position",
          position: O ? {
            x: Math.max(0, L.position.x),
            y: Math.max(0, L.position.y)
          } : L.position,
          dragging: x
        };
        if (D && S.inProgress && S.fromNode.id === D.id) {
          const E = vt(D, S.fromHandle, ie.Left, !0);
          I({ ...S, from: E });
        }
        O && D.parentId && w.push({
          id: R,
          parentId: D.parentId,
          rect: {
            ...L.internals.positionAbsolute,
            width: L.measured.width ?? 0,
            height: L.measured.height ?? 0
          }
        }), y.push(H);
      }
      if (w.length > 0) {
        const { parentLookup: R, nodeOrigin: L } = m(), D = Es(w, _, R, L);
        y.push(...D);
      }
      for (const R of $.values())
        y = R(y);
      b(y);
    },
    triggerNodeChanges: (h) => {
      const { onNodesChange: x, setNodes: w, nodes: y, hasDefaultNodes: _, debug: b } = m();
      if (h?.length) {
        if (_) {
          const S = ex(h, y);
          w(S);
        }
        b && console.log("React Flow: trigger node changes", h), x?.(h);
      }
    },
    triggerEdgeChanges: (h) => {
      const { onEdgesChange: x, setEdges: w, edges: y, hasDefaultEdges: _, debug: b } = m();
      if (h?.length) {
        if (_) {
          const S = tx(h, y);
          w(S);
        }
        b && console.log("React Flow: trigger edge changes", h), x?.(h);
      }
    },
    addSelectedNodes: (h) => {
      const { multiSelectionActive: x, edgeLookup: w, nodeLookup: y, triggerNodeChanges: _, triggerEdgeChanges: b } = m();
      if (x) {
        const S = h.map((I) => ct(I, !0));
        _(S);
        return;
      }
      _(kt(y, /* @__PURE__ */ new Set([...h]), !0)), b(kt(w));
    },
    addSelectedEdges: (h) => {
      const { multiSelectionActive: x, edgeLookup: w, nodeLookup: y, triggerNodeChanges: _, triggerEdgeChanges: b } = m();
      if (x) {
        const S = h.map((I) => ct(I, !0));
        b(S);
        return;
      }
      b(kt(w, /* @__PURE__ */ new Set([...h]))), _(kt(y, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: h, edges: x } = {}) => {
      const { edges: w, nodes: y, nodeLookup: _, triggerNodeChanges: b, triggerEdgeChanges: S } = m(), I = h || y, $ = x || w, R = [];
      for (const D of I) {
        if (!D.selected)
          continue;
        const O = _.get(D.id);
        O && (O.selected = !1), R.push(ct(D.id, !1));
      }
      const L = [];
      for (const D of $)
        D.selected && L.push(ct(D.id, !1));
      b(R), S(L);
    },
    setMinZoom: (h) => {
      const { panZoom: x, maxZoom: w } = m();
      x?.setScaleExtent([h, w]), g({ minZoom: h });
    },
    setMaxZoom: (h) => {
      const { panZoom: x, minZoom: w } = m();
      x?.setScaleExtent([w, h]), g({ maxZoom: h });
    },
    setTranslateExtent: (h) => {
      m().panZoom?.setTranslateExtent(h), g({ translateExtent: h });
    },
    resetSelectedElements: () => {
      const { edges: h, nodes: x, triggerNodeChanges: w, triggerEdgeChanges: y, elementsSelectable: _ } = m();
      if (!_)
        return;
      const b = x.reduce((I, $) => $.selected ? [...I, ct($.id, !1)] : I, []), S = h.reduce((I, $) => $.selected ? [...I, ct($.id, !1)] : I, []);
      w(b), y(S);
    },
    setNodeExtent: (h) => {
      const { nodes: x, nodeLookup: w, parentLookup: y, nodeOrigin: _, elevateNodesOnSelect: b, nodeExtent: S, zIndexMode: I } = m();
      h[0][0] === S[0][0] && h[0][1] === S[0][1] && h[1][0] === S[1][0] && h[1][1] === S[1][1] || (es(x, w, y, {
        nodeOrigin: _,
        nodeExtent: h,
        elevateNodesOnSelect: b,
        checkEquality: !1,
        zIndexMode: I
      }), g({ nodeExtent: h }));
    },
    panBy: (h) => {
      const { transform: x, width: w, height: y, panZoom: _, translateExtent: b } = m();
      return t1({ delta: h, panZoom: _, transform: x, translateExtent: b, width: w, height: y });
    },
    setCenter: async (h, x, w) => {
      const { width: y, height: _, maxZoom: b, panZoom: S } = m();
      if (!S)
        return !1;
      const I = typeof w?.zoom < "u" ? w.zoom : b;
      return await S.setViewport({
        x: y / 2 - h * I,
        y: _ / 2 - x * I,
        zoom: I
      }, { duration: w?.duration, ease: w?.ease, interpolate: w?.interpolate }), !0;
    },
    cancelConnection: () => {
      g({
        connection: { ...md }
      });
    },
    updateConnection: (h) => {
      g({ connection: h });
    },
    reset: () => g({ ...Vo() })
  };
}, Object.is);
function wy({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: a, initialWidth: r, initialHeight: i, initialMinZoom: s, initialMaxZoom: o, initialFitViewOptions: l, fitView: u, nodeOrigin: f, nodeExtent: d, zIndexMode: c, children: g }) {
  const [m] = fe(() => _y({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: a,
    width: r,
    height: i,
    fitView: u,
    minZoom: s,
    maxZoom: o,
    fitViewOptions: l,
    nodeOrigin: f,
    nodeExtent: d,
    zIndexMode: c
  }));
  return p.jsx(k1, { value: m, children: p.jsx(ox, { children: g }) });
}
function Sy({ children: e, nodes: t, edges: n, defaultNodes: a, defaultEdges: r, width: i, height: s, fitView: o, fitViewOptions: l, minZoom: u, maxZoom: f, nodeOrigin: d, nodeExtent: c, zIndexMode: g }) {
  return vn(Qa) ? p.jsx(p.Fragment, { children: e }) : p.jsx(wy, { initialNodes: t, initialEdges: n, defaultNodes: a, defaultEdges: r, initialWidth: i, initialHeight: s, fitView: o, initialFitViewOptions: l, initialMinZoom: u, initialMaxZoom: f, nodeOrigin: d, nodeExtent: c, zIndexMode: g, children: e });
}
const by = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Ay({ nodes: e, edges: t, defaultNodes: n, defaultEdges: a, className: r, nodeTypes: i, edgeTypes: s, onNodeClick: o, onEdgeClick: l, onInit: u, onMove: f, onMoveStart: d, onMoveEnd: c, onConnect: g, onConnectStart: m, onConnectEnd: v, onClickConnectStart: h, onClickConnectEnd: x, onNodeMouseEnter: w, onNodeMouseMove: y, onNodeMouseLeave: _, onNodeContextMenu: b, onNodeDoubleClick: S, onNodeDragStart: I, onNodeDrag: $, onNodeDragStop: R, onNodesDelete: L, onEdgesDelete: D, onDelete: O, onSelectionChange: H, onSelectionDragStart: E, onSelectionDrag: C, onSelectionDragStop: N, onSelectionContextMenu: P, onSelectionStart: B, onSelectionEnd: k, onBeforeDelete: F, connectionMode: q, connectionLineType: z = it.Bezier, connectionLineStyle: X, connectionLineComponent: Y, connectionLineContainerStyle: ee, deleteKeyCode: le = "Backspace", selectionKeyCode: te = "Shift", selectionOnDrag: Z = !1, selectionMode: J = dn.Full, panActivationKeyCode: K = "Space", multiSelectionKeyCode: Q = hn() ? "Meta" : "Control", zoomActivationKeyCode: re = hn() ? "Meta" : "Control", snapToGrid: ne, snapGrid: ue, onlyRenderVisibleElements: ge = !1, selectNodesOnDrag: xe, nodesDraggable: Me, autoPanOnNodeFocus: A, nodesConnectable: M, nodesFocusable: T, nodeOrigin: U = Wd, edgesFocusable: j, edgesReconnectable: V, elementsSelectable: ae = !0, defaultViewport: oe = W1, minZoom: de = 0.5, maxZoom: me = 2, translateExtent: Ne = cn, preventScrolling: Le = !0, nodeExtent: De, defaultMarkerColor: st = "#b1b1b7", zoomOnScroll: ot = !0, zoomOnPinch: Ue = !0, panOnScroll: Je = !1, panOnScrollSpeed: xt = 0.5, panOnScrollMode: bn = ht.Free, zoomOnDoubleClick: ai = !0, panOnDrag: ii = !0, onPaneClick: si, onPaneMouseEnter: oi, onPaneMouseMove: li, onPaneMouseLeave: ui, onPaneScroll: ci, onPaneContextMenu: di, paneClickDistance: fi = 1, nodeClickDistance: hi = 0, children: pi, onReconnect: gi, onReconnectStart: mi, onReconnectEnd: vi, onEdgeContextMenu: An, onEdgeDoubleClick: xi, onEdgeMouseEnter: yi, onEdgeMouseMove: _i, onEdgeMouseLeave: wi, reconnectRadius: Si = 10, onNodesChange: bi, onEdgesChange: Ai, noDragClassName: Ei = "nodrag", noWheelClassName: Ii = "nowheel", noPanClassName: En = "nopan", fitView: In, fitViewOptions: Mn, connectOnClick: Mi, attributionPosition: Ci, proOptions: Cn, defaultEdgeOptions: Qe, elevateNodesOnSelect: W = !0, elevateEdgesOnSelect: Ni = !1, disableKeyboardA11y: Nn = !1, autoPanOnConnect: ye, autoPanOnNodeDrag: Te, autoPanOnSelection: je = !0, autoPanSpeed: et, connectionRadius: jt, isValidConnection: tt, onError: yt, style: Kf, id: Ds, nodeDragThreshold: Yf, connectionDragThreshold: Xf, viewport: Jf, onViewportChange: Qf, width: eh, height: th, colorMode: nh = "light", debug: rh, onScroll: Ps, ariaLabelConfig: ah, zIndexMode: ks = "basic", ...ih }, sh) {
  const $i = Ds || "1", oh = X1(nh), lh = pe((Ts) => {
    Ts.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Ps?.(Ts);
  }, [Ps]);
  return p.jsx("div", { "data-testid": "rf__wrapper", ...ih, onScroll: lh, style: { ...Kf, ...by }, ref: sh, className: Ie(["react-flow", r, oh]), id: Ds, role: "application", children: p.jsxs(Sy, { nodes: e, edges: t, width: eh, height: th, fitView: In, fitViewOptions: Mn, minZoom: de, maxZoom: me, nodeOrigin: U, nodeExtent: De, zIndexMode: ks, children: [p.jsx(Y1, { nodes: e, edges: t, defaultNodes: n, defaultEdges: a, onConnect: g, onConnectStart: m, onConnectEnd: v, onClickConnectStart: h, onClickConnectEnd: x, nodesDraggable: Me, autoPanOnNodeFocus: A, nodesConnectable: M, nodesFocusable: T, edgesFocusable: j, edgesReconnectable: V, elementsSelectable: ae, elevateNodesOnSelect: W, elevateEdgesOnSelect: Ni, minZoom: de, maxZoom: me, nodeExtent: De, onNodesChange: bi, onEdgesChange: Ai, snapToGrid: ne, snapGrid: ue, connectionMode: q, translateExtent: Ne, connectOnClick: Mi, defaultEdgeOptions: Qe, fitView: In, fitViewOptions: Mn, onNodesDelete: L, onEdgesDelete: D, onDelete: O, onNodeDragStart: I, onNodeDrag: $, onNodeDragStop: R, onSelectionDrag: C, onSelectionDragStart: E, onSelectionDragStop: N, onMove: f, onMoveStart: d, onMoveEnd: c, noPanClassName: En, nodeOrigin: U, rfId: $i, autoPanOnConnect: ye, autoPanOnNodeDrag: Te, autoPanSpeed: et, onError: yt, connectionRadius: jt, isValidConnection: tt, selectNodesOnDrag: xe, nodeDragThreshold: Yf, connectionDragThreshold: Xf, onBeforeDelete: F, debug: rh, ariaLabelConfig: ah, zIndexMode: ks }), p.jsx(xy, { onInit: u, onNodeClick: o, onEdgeClick: l, onNodeMouseEnter: w, onNodeMouseMove: y, onNodeMouseLeave: _, onNodeContextMenu: b, onNodeDoubleClick: S, nodeTypes: i, edgeTypes: s, connectionLineType: z, connectionLineStyle: X, connectionLineComponent: Y, connectionLineContainerStyle: ee, selectionKeyCode: te, selectionOnDrag: Z, selectionMode: J, deleteKeyCode: le, multiSelectionKeyCode: Q, panActivationKeyCode: K, zoomActivationKeyCode: re, onlyRenderVisibleElements: ge, defaultViewport: oe, translateExtent: Ne, minZoom: de, maxZoom: me, preventScrolling: Le, zoomOnScroll: ot, zoomOnPinch: Ue, zoomOnDoubleClick: ai, panOnScroll: Je, panOnScrollSpeed: xt, panOnScrollMode: bn, panOnDrag: ii, autoPanOnSelection: je, onPaneClick: si, onPaneMouseEnter: oi, onPaneMouseMove: li, onPaneMouseLeave: ui, onPaneScroll: ci, onPaneContextMenu: di, paneClickDistance: fi, nodeClickDistance: hi, onSelectionContextMenu: P, onSelectionStart: B, onSelectionEnd: k, onReconnect: gi, onReconnectStart: mi, onReconnectEnd: vi, onEdgeContextMenu: An, onEdgeDoubleClick: xi, onEdgeMouseEnter: yi, onEdgeMouseMove: _i, onEdgeMouseLeave: wi, reconnectRadius: Si, defaultMarkerColor: st, noDragClassName: Ei, noWheelClassName: Ii, noPanClassName: En, rfId: $i, disableKeyboardA11y: Nn, nodeExtent: De, viewport: Jf, onViewportChange: Qf }), p.jsx(V1, { onSelectionChange: H }), pi, p.jsx(Z1, { proOptions: Cn, position: Ci }), p.jsx(H1, { rfId: $i, disableKeyboardA11y: Nn })] }) });
}
var Ey = Kd(Ay);
const Iy = (e) => e.domNode?.querySelector(".react-flow__edgelabel-renderer");
function My({ children: e }) {
  const t = he(Iy);
  return t ? ch(e, t) : null;
}
const Cy = (e) => ({
  x: e.transform[0],
  y: e.transform[1],
  zoom: e.transform[2]
});
function Ny() {
  return he(Cy, _e);
}
function $y({ dimensions: e, lineWidth: t, variant: n, className: a }) {
  return p.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: Ie(["react-flow__background-pattern", n, a]) });
}
function Ry({ radius: e, className: t }) {
  return p.jsx("circle", { cx: e, cy: e, r: e, className: Ie(["react-flow__background-pattern", "dots", t]) });
}
var Ke;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ke || (Ke = {}));
const Dy = {
  [Ke.Dots]: 1,
  [Ke.Lines]: 1,
  [Ke.Cross]: 6
}, Py = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function _f({
  id: e,
  variant: t = Ke.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: a,
  lineWidth: r = 1,
  offset: i = 0,
  color: s,
  bgColor: o,
  style: l,
  className: u,
  patternClassName: f
}) {
  const d = se(null), { transform: c, patternId: g } = he(Py, _e), m = a || Dy[t], v = t === Ke.Dots, h = t === Ke.Cross, x = Array.isArray(n) ? n : [n, n], w = [x[0] * c[2] || 1, x[1] * c[2] || 1], y = m * c[2], _ = Array.isArray(i) ? i : [i, i], b = h ? [y, y] : w, S = [
    _[0] * c[2] || 1 + b[0] / 2,
    _[1] * c[2] || 1 + b[1] / 2
  ], I = `${g}${e || ""}`;
  return p.jsxs("svg", { className: Ie(["react-flow__background", u]), style: {
    ...l,
    ...ni,
    "--xy-background-color-props": o,
    "--xy-background-pattern-color-props": s
  }, ref: d, "data-testid": "rf__background", children: [p.jsx("pattern", { id: I, x: c[0] % w[0], y: c[1] % w[1], width: w[0], height: w[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${S[0]},-${S[1]})`, children: v ? p.jsx(Ry, { radius: y / 2, className: f }) : p.jsx($y, { dimensions: b, lineWidth: r, variant: t, className: f }) }), p.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${I})` })] });
}
_f.displayName = "Background";
const ky = Ae(_f);
function Ty() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: p.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Ly() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: p.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function Oy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: p.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function By() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Fy() {
  return p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: p.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function On({ children: e, className: t, ...n }) {
  return p.jsx("button", { type: "button", className: Ie(["react-flow__controls-button", t]), ...n, children: e });
}
const Hy = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function wf({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: a = !0, fitViewOptions: r, onZoomIn: i, onZoomOut: s, onFitView: o, onInteractiveChange: l, className: u, children: f, position: d = "bottom-left", orientation: c = "vertical", "aria-label": g }) {
  const m = Se(), { isInteractive: v, minZoomReached: h, maxZoomReached: x, ariaLabelConfig: w } = he(Hy, _e), { zoomIn: y, zoomOut: _, fitView: b } = ti(), S = () => {
    y(), i?.();
  }, I = () => {
    _(), s?.();
  }, $ = () => {
    b(r), o?.();
  }, R = () => {
    m.setState({
      nodesDraggable: !v,
      nodesConnectable: !v,
      elementsSelectable: !v
    }), l?.(!v);
  }, L = c === "horizontal" ? "horizontal" : "vertical";
  return p.jsxs(ei, { className: Ie(["react-flow__controls", L, u]), position: d, style: e, "data-testid": "rf__controls", "aria-label": g ?? w["controls.ariaLabel"], children: [t && p.jsxs(p.Fragment, { children: [p.jsx(On, { onClick: S, className: "react-flow__controls-zoomin", title: w["controls.zoomIn.ariaLabel"], "aria-label": w["controls.zoomIn.ariaLabel"], disabled: x, children: p.jsx(Ty, {}) }), p.jsx(On, { onClick: I, className: "react-flow__controls-zoomout", title: w["controls.zoomOut.ariaLabel"], "aria-label": w["controls.zoomOut.ariaLabel"], disabled: h, children: p.jsx(Ly, {}) })] }), n && p.jsx(On, { className: "react-flow__controls-fitview", onClick: $, title: w["controls.fitView.ariaLabel"], "aria-label": w["controls.fitView.ariaLabel"], children: p.jsx(Oy, {}) }), a && p.jsx(On, { className: "react-flow__controls-interactive", onClick: R, title: w["controls.interactive.ariaLabel"], "aria-label": w["controls.interactive.ariaLabel"], children: v ? p.jsx(Fy, {}) : p.jsx(By, {}) }), f] });
}
wf.displayName = "Controls";
const Zy = Ae(wf);
function qy({ id: e, x: t, y: n, width: a, height: r, style: i, color: s, strokeColor: o, strokeWidth: l, className: u, borderRadius: f, shapeRendering: d, selected: c, onClick: g }) {
  const { background: m, backgroundColor: v } = i || {}, h = s || m || v;
  return p.jsx("rect", { className: Ie(["react-flow__minimap-node", { selected: c }, u]), x: t, y: n, rx: f, ry: f, width: a, height: r, style: {
    fill: h,
    stroke: o,
    strokeWidth: l
  }, shapeRendering: d, onClick: g ? (x) => g(x, e) : void 0 });
}
const zy = Ae(qy), Uy = (e) => e.nodes.map((t) => t.id), qi = (e) => e instanceof Function ? e : () => e;
function jy({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: a = 5,
  nodeStrokeWidth: r,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = zy,
  onClick: s
}) {
  const o = he(Uy, _e), l = qi(t), u = qi(e), f = qi(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return p.jsx(p.Fragment, { children: o.map((c) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    p.jsx(Wy, { id: c, nodeColorFunc: l, nodeStrokeColorFunc: u, nodeClassNameFunc: f, nodeBorderRadius: a, nodeStrokeWidth: r, NodeComponent: i, onClick: s, shapeRendering: d }, c)
  )) });
}
function Vy({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: a, nodeBorderRadius: r, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: o, onClick: l }) {
  const { node: u, x: f, y: d, width: c, height: g } = he((m) => {
    const v = m.nodeLookup.get(e);
    if (!v)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const h = v.internals.userNode, { x, y: w } = v.internals.positionAbsolute, { width: y, height: _ } = Xe(h);
    return {
      node: h,
      x,
      y: w,
      width: y,
      height: _
    };
  }, _e);
  return !u || u.hidden || !bd(u) ? null : p.jsx(o, { x: f, y: d, width: c, height: g, style: u.style, selected: !!u.selected, className: a(u), color: t(u), borderRadius: r, strokeColor: n(u), strokeWidth: i, shapeRendering: s, onClick: l, id: u.id });
}
const Wy = Ae(Vy);
var Gy = Ae(jy);
const Ky = 200, Yy = 150, Xy = (e) => !e.hidden, Jy = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? wd(_n(e.nodeLookup, { filter: Xy }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Qy = "react-flow__minimap-desc";
function Sf({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: a,
  nodeClassName: r = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: o,
  bgColor: l,
  maskColor: u,
  maskStrokeColor: f,
  maskStrokeWidth: d,
  position: c = "bottom-right",
  onClick: g,
  onNodeClick: m,
  pannable: v = !1,
  zoomable: h = !1,
  ariaLabel: x,
  inversePan: w,
  zoomStep: y = 1,
  offsetScale: _ = 5
}) {
  const b = Se(), S = se(null), { boundingRect: I, viewBB: $, rfId: R, panZoom: L, translateExtent: D, flowWidth: O, flowHeight: H, ariaLabelConfig: E } = he(Jy, _e), C = e?.width ?? Ky, N = e?.height ?? Yy, P = I.width / C, B = I.height / N, k = Math.max(P, B), F = k * C, q = k * N, z = _ * k, X = I.x - (F - I.width) / 2 - z, Y = I.y - (q - I.height) / 2 - z, ee = F + z * 2, le = q + z * 2, te = `${Qy}-${R}`, Z = se(0), J = se();
  Z.current = k, ce(() => {
    if (S.current && L)
      return J.current = c1({
        domNode: S.current,
        panZoom: L,
        getTransform: () => b.getState().transform,
        getViewScale: () => Z.current
      }), () => {
        J.current?.destroy();
      };
  }, [L]), ce(() => {
    J.current?.update({
      translateExtent: D,
      width: O,
      height: H,
      inversePan: w,
      pannable: v,
      zoomStep: y,
      zoomable: h
    });
  }, [v, h, w, y, D, O, H]);
  const K = g ? (ne) => {
    const [ue, ge] = J.current?.pointer(ne) || [0, 0];
    g(ne, { x: ue, y: ge });
  } : void 0, Q = m ? pe((ne, ue) => {
    const ge = b.getState().nodeLookup.get(ue).internals.userNode;
    m(ne, ge);
  }, []) : void 0, re = x ?? E["minimap.ariaLabel"];
  return p.jsx(ei, { position: c, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * k : void 0,
    "--xy-minimap-node-background-color-props": typeof a == "string" ? a : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: Ie(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: p.jsxs("svg", { width: C, height: N, viewBox: `${X} ${Y} ${ee} ${le}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": te, ref: S, onClick: K, children: [re && p.jsx("title", { id: te, children: re }), p.jsx(Gy, { onClick: Q, nodeColor: a, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: r, nodeStrokeWidth: s, nodeComponent: o }), p.jsx("path", { className: "react-flow__minimap-mask", d: `M${X - z},${Y - z}h${ee + z * 2}v${le + z * 2}h${-ee - z * 2}z
        M${$.x},${$.y}h${$.width}v${$.height}h${-$.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Sf.displayName = "MiniMap";
Ae(Sf);
const e_ = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, t_ = {
  [qt.Line]: "right",
  [qt.Handle]: "bottom-right"
};
function n_({ nodeId: e, position: t, variant: n = qt.Handle, className: a, style: r = void 0, children: i, color: s, minWidth: o = 10, minHeight: l = 10, maxWidth: u = Number.MAX_VALUE, maxHeight: f = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: c, autoScale: g = !0, shouldResize: m, onResizeStart: v, onResize: h, onResizeEnd: x }) {
  const w = Qd(), y = typeof e == "string" ? e : w, _ = Se(), b = se(null), S = n === qt.Handle, I = he(pe(e_(S && g), [S, g]), _e), $ = se(null), R = t ?? t_[n];
  ce(() => {
    if (!(!b.current || !y))
      return $.current || ($.current = b1({
        domNode: b.current,
        nodeId: y,
        getStoreItems: () => {
          const { nodeLookup: D, transform: O, snapGrid: H, snapToGrid: E, nodeOrigin: C, domNode: N } = _.getState();
          return {
            nodeLookup: D,
            transform: O,
            snapGrid: H,
            snapToGrid: E,
            nodeOrigin: C,
            paneDomNode: N
          };
        },
        onChange: (D, O) => {
          const { triggerNodeChanges: H, nodeLookup: E, parentLookup: C, nodeOrigin: N } = _.getState(), P = [], B = { x: D.x, y: D.y }, k = E.get(y);
          if (k && k.expandParent && k.parentId) {
            const F = k.origin ?? N, q = D.width ?? k.measured.width ?? 0, z = D.height ?? k.measured.height ?? 0, X = {
              id: k.id,
              parentId: k.parentId,
              rect: {
                width: q,
                height: z,
                ...Ad({
                  x: D.x ?? k.position.x,
                  y: D.y ?? k.position.y
                }, { width: q, height: z }, k.parentId, E, F)
              }
            }, Y = Es([X], E, C, N);
            P.push(...Y), B.x = D.x ? Math.max(F[0] * q, D.x) : void 0, B.y = D.y ? Math.max(F[1] * z, D.y) : void 0;
          }
          if (B.x !== void 0 && B.y !== void 0) {
            const F = {
              id: y,
              type: "position",
              position: { ...B }
            };
            P.push(F);
          }
          if (D.width !== void 0 && D.height !== void 0) {
            const q = {
              id: y,
              type: "dimensions",
              resizing: !0,
              setAttributes: c ? c === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: D.width,
                height: D.height
              }
            };
            P.push(q);
          }
          for (const F of O) {
            const q = {
              ...F,
              type: "position"
            };
            P.push(q);
          }
          H(P);
        },
        onEnd: ({ width: D, height: O }) => {
          const H = {
            id: y,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: D,
              height: O
            }
          };
          _.getState().triggerNodeChanges([H]);
        }
      })), $.current.update({
        controlPosition: R,
        boundaries: {
          minWidth: o,
          minHeight: l,
          maxWidth: u,
          maxHeight: f
        },
        keepAspectRatio: d,
        resizeDirection: c,
        onResizeStart: v,
        onResize: h,
        onResizeEnd: x,
        shouldResize: m
      }), () => {
        $.current?.destroy();
      };
  }, [
    R,
    o,
    l,
    u,
    f,
    d,
    v,
    h,
    x,
    m
  ]);
  const L = R.split("-");
  return p.jsx("div", { className: Ie(["react-flow__resize-control", "nodrag", ...L, n, a]), ref: b, style: {
    ...r,
    scale: I,
    ...s && { [S ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
Ae(n_);
const r_ = "border-dashed border-border-default bg-surface-page text-text-secondary shadow-sm hover:border-border-strong", Wo = "var(--xy-edge-stroke)", a_ = ({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: a,
  targetY: r,
  sourcePosition: i,
  targetPosition: s,
  data: o
}) => {
  const [l, u] = fe(!1), [f, d] = fe(!1), [c, g] = fe(!1), m = o, [v, h, x] = Oa({
    sourceX: t,
    sourceY: n,
    sourcePosition: i,
    targetX: a,
    targetY: r,
    targetPosition: s
  });
  if (!m)
    return /* @__PURE__ */ p.jsx(zt, { id: e, path: v, style: { stroke: Wo } });
  const w = (S) => {
    u(!1), m.onPick(S, { sourceId: m.sourceId, targetId: m.targetId });
  }, y = l || f || c, _ = /* @__PURE__ */ p.jsx(
    "button",
    {
      "aria-label": "Insert step here",
      className: ve(
        "flex size-8 items-center justify-center rounded-full border transition-opacity focus-visible:opacity-100 focus-visible:outline-none",
        r_,
        y ? "opacity-100" : "opacity-0",
        m.disabled && "cursor-not-allowed!"
      ),
      "data-testid": `add-step-button-${m.sourceId}-${m.targetId}`,
      disabled: m.disabled,
      type: "button",
      children: /* @__PURE__ */ p.jsx(Ha, { className: "size-5", strokeWidth: 1.5 })
    }
  );
  let b;
  return m.disabled ? b = m.disabledReason ? /* @__PURE__ */ p.jsx(Mh, { delayDuration: 150, children: /* @__PURE__ */ p.jsxs(Ch, { children: [
    /* @__PURE__ */ p.jsx(Nh, { asChild: !0, children: /* @__PURE__ */ p.jsx("span", { tabIndex: 0, children: _ }) }),
    /* @__PURE__ */ p.jsx($h, { children: m.disabledReason })
  ] }) }) : _ : b = /* @__PURE__ */ p.jsxs(sc, { open: l, onOpenChange: u, children: [
    /* @__PURE__ */ p.jsx(oc, { asChild: !0, children: _ }),
    /* @__PURE__ */ p.jsx(lc, { align: "center", className: "border-0 p-0 shadow-lg", side: "top", sideOffset: 12, children: /* @__PURE__ */ p.jsx(zc, { onPick: w }) })
  ] }), /* @__PURE__ */ p.jsxs(
    "g",
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      children: [
        /* @__PURE__ */ p.jsx(zt, { id: e, interactionWidth: 30, path: v, style: { stroke: Wo } }),
        /* @__PURE__ */ p.jsx(My, { children: /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "pointer-events-auto absolute",
            style: {
              transform: `translate(-50%, -50%) translate(${h}px, ${x}px)`
            },
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            children: /* @__PURE__ */ p.jsx("div", { className: "flex h-10 w-16 items-center justify-center", children: b })
          }
        ) })
      ]
    }
  );
}, i_ = () => {
  const { data: e } = Za(), { data: t } = kh(), n = e?.settings || [], a = t?.site?.url || "", [
    r = "all",
    i = !1,
    s = !1
  ] = qa(n, [
    "members_signup_access",
    "donations_enabled",
    "recommendations_enabled"
  ]);
  return Np({
    siteUrl: a,
    membersSignupAccess: typeof r == "string" ? r : "all",
    donationsEnabled: !!i,
    recommendationsEnabled: !!s
  });
}, s_ = {
  useFileUpload: Ep,
  fileTypes: Kt
}, o_ = Be.lazy(() => import("./koenig-lexical-CV_EE-0y.mjs").then((e) => ({ default: e.EmailEditor })));
class l_ extends Be.Component {
  state = { hasError: !1 };
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ p.jsx("div", { className: "p-6 text-sm text-destructive", children: "Something went wrong loading the editor." }) : this.props.children;
  }
}
const u_ = ve(
  // Base typography
  "text-[1.6rem] leading-[1.6] tracking-[-0.01em] pb-10",
  // Dark mode
  "dark:text-white dark:selection:bg-[rgba(88,101,116,0.99)]",
  // Placeholder styling
  "[&_.koenig-lexical-editor-input-placeholder]:font-sans! [&_.koenig-lexical-editor-input-placeholder]:text-[1.6rem] [&_.koenig-lexical-editor-input-placeholder]:tracking-tight",
  // Headings dark mode
  "[&_:is(h2,h3)]:dark:text-white",
  // Inputs
  "[&_.koenig-lexical_input]:text-[1.4rem]",
  // Plus icon
  "[&_[data-kg-plus-button]]:top-[-4px]",
  // Settings panel
  "[&_[data-kg-card-selected]]:isolate",
  // Content typography
  "[&_:is(p,blockquote,aside,ul,ol)]:tracking-tight",
  // Reset content typography inside card captions to match Koenig's caption styles
  "[&_figcaption_:is(p,blockquote,aside,ul,ol)]:text-[1.4rem] [&_figcaption_:is(p,blockquote,aside,ul,ol)]:tracking-[.025em]",
  "[&_figcaption_p]:mb-0",
  "[&_:is(h1)]:text-[36px] [&_:is(h2)]:text-[32px] [&_:is(h3)]:text-[26px] [&_:is(h4)]:text-[21px] [&_:is(h5)]:text-[19px] [&_:is(h6)]:text-[19px] [&_:is(h1,h2,h3,h4,h5,h6)]:mb-[0.5em]",
  // Horizontal ruler
  "[&_:is(hr)]:pt-0",
  // Paragraph spacing & bold
  "[&_p]:mb-4 [&_strong]:font-semibold",
  // Keep settings panel copy compact
  "[&_[data-kg-settings-panel]_p]:!mb-0",
  // Nested-editor (callout, etc.) fixes: align placeholder with text
  "[&_.not-kg-prose>div]:font-sans! [&_.not-kg-prose>div]:tracking-tight! [&_.not-kg-prose>div]:text-[1.6rem]! [&_.not-kg-prose>div]:leading-[1.6]!",
  "[&_.kg-inherit-styles_p]:mb-0!",
  "[&_.kg-inherit-styles]:pt-[3px]!",
  // CTA card: keep sponsor label at its intended 12.5px size
  "[&_.koenig-lexical-cta-label_p]:!text-[12.5px]"
), c_ = ({
  value: e,
  placeholder: t,
  className: n,
  onChange: a
}) => {
  const r = se(null), i = se(e), { unsplashConfig: s } = fh(), o = S0(), { data: l } = Za(), { data: u } = us(), f = l?.settings || [], d = u?.config, { fetchAutocompleteLinks: c, searchLinks: g } = i_(), m = Ip(), v = d?.tenor?.googleApiKey ? d.tenor : null, [h] = qa(f, ["transistor"]), x = Ce(() => ({
    unsplash: s,
    pinturaConfig: o,
    tenor: v,
    fetchEmbed: m,
    fetchAutocompleteLinks: c,
    searchLinks: g,
    feature: {
      transistor: h
    },
    visibilitySettings: "none"
  }), [s, o, v, m, c, g, h]), w = pe((S) => {
    r.current = S;
  }, []), y = pe((S) => {
    a && S && typeof S == "object" && a(JSON.stringify(S));
  }, [a]), _ = pe((S) => {
    (S.metaKey || S.ctrlKey) && S.key === "k" && S.stopPropagation();
  }, []), b = (S) => {
    r.current && $p(r.current, S);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "h-full", onKeyDown: _, onMouseDown: b, children: /* @__PURE__ */ p.jsx(l_, { children: /* @__PURE__ */ p.jsx(hh, { fallback: /* @__PURE__ */ p.jsx(dt, { size: "lg" }), children: /* @__PURE__ */ p.jsx("div", { className: ve("koenig-react-editor w-full", u_, n), children: /* @__PURE__ */ p.jsx(
    o_,
    {
      cardConfig: x,
      className: "koenig-lexical koenig-lexical-editor-input",
      darkMode: !1,
      fileUploader: s_,
      initialEditorState: i.current,
      placeholderText: t,
      registerAPI: w,
      onChange: y
    }
  ) }) }) }) });
}, d_ = Be.memo(c_), f_ = ({ previewState: e }) => {
  const [t, n] = fe(null), [a, r] = fe(!1), i = se(!1), s = se(null), o = se(null), l = se(null), u = se(null);
  function f() {
    o.current?.disconnect(), o.current = null, l.current !== null && (window.cancelAnimationFrame(l.current), l.current = null), u.current !== null && (window.cancelAnimationFrame(u.current), u.current = null);
  }
  const d = e.status === "success" ? e.html : "";
  ce(() => (f(), i.current = !1, r(!1), n(null), () => {
    f();
  }), [d, e.status]);
  function c() {
    const h = s.current, x = h?.contentDocument;
    if (!h || !x)
      return;
    x.documentElement.style.overflowY = "hidden", x.body.style.overflowY = "hidden";
    const w = Math.max(
      x.documentElement?.scrollHeight || 0,
      x.body?.scrollHeight || 0,
      x.documentElement?.offsetHeight || 0,
      x.body?.offsetHeight || 0
    );
    w > 0 && (n((y) => y === w ? y : w), !i.current && u.current === null && (u.current = window.requestAnimationFrame(() => {
      u.current = window.requestAnimationFrame(() => {
        u.current = null, i.current = !0, r(!0);
      });
    })));
  }
  function g() {
    l.current !== null && window.cancelAnimationFrame(l.current), l.current = window.requestAnimationFrame(() => {
      l.current = null, c();
    });
  }
  function m() {
    const h = s.current, x = h?.contentDocument;
    if (!(!h || !x) && (f(), g(), typeof ResizeObserver < "u")) {
      const w = new ResizeObserver(() => {
        g();
      });
      w.observe(x.documentElement), w.observe(x.body), o.current = w;
    }
  }
  const v = e.status === "loading" || e.status === "success" && !a;
  return /* @__PURE__ */ p.jsxs("div", { className: "relative w-full", "data-testid": "email-preview", children: [
    v && /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "flex min-h-full items-start justify-center pt-24",
        "data-testid": "email-preview-loading",
        style: t ? { height: `${t}px` } : void 0,
        children: /* @__PURE__ */ p.jsx(dt, { size: "md" })
      }
    ),
    e.status === "success" && /* @__PURE__ */ p.jsx(
      "div",
      {
        "aria-hidden": !a,
        className: ve(
          "w-full",
          !a && "pointer-events-none absolute left-0 top-0 opacity-0"
        ),
        children: /* @__PURE__ */ p.jsx(
          "iframe",
          {
            ref: s,
            className: "w-full rounded bg-white",
            "data-testid": "email-preview-iframe",
            sandbox: "allow-same-origin allow-popups allow-popups-to-escape-sandbox",
            srcDoc: e.html,
            style: { height: t ? `${t}px` : "600px" },
            title: "Email preview",
            onLoad: m
          }
        )
      }
    ),
    (e.status === "error" || e.status === "invalid") && /* @__PURE__ */ p.jsx("div", { className: "flex h-full items-center justify-center px-4", "data-testid": "email-preview-error", children: /* @__PURE__ */ p.jsx("span", { className: "text-sm text-destructive", children: e.message }) })
  ] });
};
var Bn = { exports: {} }, Fn = { exports: {} }, Hn = { exports: {} }, Go;
function G() {
  return Go || (Go = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    function n(r) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, n(r);
    }
    function a(r) {
      var i = typeof r == "string" || r instanceof String;
      if (!i) {
        var s = n(r);
        throw r === null ? s = "null" : s === "object" && (s = r.constructor.name), new TypeError("Expected a string but received a ".concat(s));
      }
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Hn, Hn.exports)), Hn.exports;
}
var Ko;
function Ms() {
  return Ko || (Ko = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i = Date.parse(i), isNaN(i) ? null : new Date(i);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Fn, Fn.exports)), Fn.exports;
}
var Zn = { exports: {} }, wt = {}, be = {}, Yo;
function Sn() {
  if (Yo) return be;
  Yo = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.farsiLocales = be.englishLocales = be.dotDecimal = be.decimal = be.commaDecimal = be.bengaliLocales = be.arabicLocales = be.alphanumeric = be.alpha = void 0;
  for (var e = be.alpha = {
    "en-US": /^[A-Z]+$/i,
    "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[А-Я]+$/i,
    "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[A-ZÆØÅ]+$/i,
    "de-DE": /^[A-ZÄÖÜß]+$/i,
    "el-GR": /^[Α-ώ]+$/i,
    "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
    "fi-FI": /^[A-ZÅÄÖ]+$/i,
    "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "nb-NO": /^[A-ZÆØÅ]+$/i,
    "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[A-ZÆØÅ]+$/i,
    "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[А-ЯЁ]+$/i,
    "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๐\s]+$/i,
    "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[א-ת]+$/,
    fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
    "si-LK": /^[\u0D80-\u0DFF]+$/
  }, t = be.alphanumeric = {
    "en-US": /^[0-9A-Z]+$/i,
    "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[0-9А-Я]+$/i,
    "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[0-9A-ZÆØÅ]+$/i,
    "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
    "el-GR": /^[0-9Α-ω]+$/i,
    "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
    "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
    "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
    "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[0-9А-ЯЁ]+$/i,
    "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
    "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๙\s]+$/i,
    "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[0-9א-ת]+$/,
    fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
    "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
    "si-LK": /^[0-9\u0D80-\u0DFF]+$/
  }, n = be.decimal = {
    "en-US": ".",
    ar: "٫"
  }, a = be.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"], r, i = 0; i < a.length; i++)
    r = "en-".concat(a[i]), e[r] = e["en-US"], t[r] = t["en-US"], n[r] = n["en-US"];
  for (var s = be.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"], o, l = 0; l < s.length; l++)
    o = "ar-".concat(s[l]), e[o] = e.ar, t[o] = t.ar, n[o] = n.ar;
  for (var u = be.farsiLocales = ["IR", "AF"], f, d = 0; d < u.length; d++)
    f = "fa-".concat(u[d]), t[f] = t.fa, n[f] = n.ar;
  for (var c = be.bengaliLocales = ["BD", "IN"], g, m = 0; m < c.length; m++)
    g = "bn-".concat(c[m]), e[g] = e.bn, t[g] = t.bn, n[g] = n["en-US"];
  for (var v = be.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], h = be.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"], x = 0; x < v.length; x++)
    n[v[x]] = n["en-US"];
  for (var w = 0; w < h.length; w++)
    n[h[w]] = ",";
  return e["fr-CA"] = e["fr-FR"], t["fr-CA"] = t["fr-FR"], e["pt-BR"] = e["pt-PT"], t["pt-BR"] = t["pt-PT"], n["pt-BR"] = n["pt-PT"], e["pl-Pl"] = e["pl-PL"], t["pl-Pl"] = t["pl-PL"], n["pl-Pl"] = n["pl-PL"], e["fa-AF"] = e.fa, be;
}
var Xo;
function bf() {
  if (Xo) return wt;
  Xo = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  }), wt.default = a, wt.locales = void 0;
  var e = n(/* @__PURE__ */ G()), t = /* @__PURE__ */ Sn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, i) {
    (0, e.default)(r), i = i || {};
    var s = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(i.locale ? t.decimal[i.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (r === "" || r === "." || r === "," || r === "-" || r === "+")
      return !1;
    var o = parseFloat(r.replace(",", "."));
    return s.test(r) && (!i.hasOwnProperty("min") || o >= i.min) && (!i.hasOwnProperty("max") || o <= i.max) && (!i.hasOwnProperty("lt") || o < i.lt) && (!i.hasOwnProperty("gt") || o > i.gt);
  }
  return wt.locales = Object.keys(t.decimal), wt;
}
var Jo;
function Af() {
  return Jo || (Jo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ bf());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i) ? parseFloat(i) : NaN;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Zn, Zn.exports)), Zn.exports;
}
var qn = { exports: {} }, Qo;
function h_() {
  return Qo || (Qo = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), parseInt(i, s || 10);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(qn, qn.exports)), qn.exports;
}
var zn = { exports: {} }, el;
function p_() {
  return el || (el = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), s ? i === "1" || /^true$/i.test(i) : i !== "0" && !/^false$/i.test(i) && i !== "";
    }
    e.exports = t.default, e.exports.default = t.default;
  })(zn, zn.exports)), zn.exports;
}
var Un = { exports: {} }, tl;
function g_() {
  return tl || (tl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i === s;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Un, Un.exports)), Un.exports;
}
var jn = { exports: {} }, Vn = { exports: {} }, nl;
function Ef() {
  return nl || (nl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    function n(r) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, n(r);
    }
    function a(r) {
      return n(r) === "object" && r !== null ? typeof r.toString == "function" ? r = r.toString() : r = "[object Object]" : (r === null || typeof r > "u" || isNaN(r) && !r.length) && (r = ""), String(r);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Vn, Vn.exports)), Vn.exports;
}
var Wn = { exports: {} }, rl;
function Re() {
  return rl || (rl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;
    function n() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
      for (var i in r)
        typeof a[i] > "u" && (a[i] = r[i]);
      return a;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Wn, Wn.exports)), Wn.exports;
}
var al;
function m_() {
  return al || (al = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = i(/* @__PURE__ */ G()), a = i(/* @__PURE__ */ Ef()), r = i(/* @__PURE__ */ Re());
    function i(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var s = {
      ignoreCase: !1,
      minOccurrences: 1
    };
    function o(l, u, f) {
      return (0, n.default)(l), f = (0, r.default)(f, s), f.ignoreCase ? l.toLowerCase().split((0, a.default)(u).toLowerCase()).length > f.minOccurrences : l.split((0, a.default)(u)).length > f.minOccurrences;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(jn, jn.exports)), jn.exports;
}
var Gn = { exports: {} }, il;
function v_() {
  return il || (il = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s, o) {
      return (0, n.default)(i), Object.prototype.toString.call(s) !== "[object RegExp]" && (s = new RegExp(s, o)), !!i.match(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Gn, Gn.exports)), Gn.exports;
}
var Kn = { exports: {} }, Yn = { exports: {} }, sl;
function If() {
  return sl || (sl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function r(s) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, r(s);
    }
    function i(s, o) {
      (0, n.default)(s);
      var l, u;
      r(o) === "object" ? (l = o.min || 0, u = o.max) : (l = arguments[1], u = arguments[2]);
      var f = encodeURI(s).split(/%..|./).length - 1;
      return f >= l && (typeof u > "u" || f <= u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Yn, Yn.exports)), Yn.exports;
}
var Xn = { exports: {} }, ol;
function Cs() {
  return ol || (ol = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      require_tld: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_numeric_tld: !1,
      allow_wildcard: !1,
      ignore_max_length: !1
    };
    function s(o, l) {
      (0, n.default)(o), l = (0, a.default)(l, i), l.allow_trailing_dot && o[o.length - 1] === "." && (o = o.substring(0, o.length - 1)), l.allow_wildcard === !0 && o.indexOf("*.") === 0 && (o = o.substring(2));
      var u = o.split("."), f = u[u.length - 1];
      return l.require_tld && (u.length < 2 || !l.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f) || /\s/.test(f)) || !l.allow_numeric_tld && /^\d+$/.test(f) ? !1 : u.every(function(d) {
        return !(d.length > 63 && !l.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(d) || /[\uff01-\uff5e]/.test(d) || /^-|-$/.test(d) || !l.allow_underscores && /_/.test(d));
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Xn, Xn.exports)), Xn.exports;
}
var Jn = { exports: {} }, ll;
function ri() {
  return ll || (ll = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = u;
    var n = a(/* @__PURE__ */ G());
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var r = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", i = "(".concat(r, "[.]){3}").concat(r), s = new RegExp("^".concat(i, "$")), o = "(?:[0-9a-fA-F]{1,4})", l = new RegExp("^(" + "(?:".concat(o, ":){7}(?:").concat(o, "|:)|") + "(?:".concat(o, ":){6}(?:").concat(i, "|:").concat(o, "|:)|") + "(?:".concat(o, ":){5}(?::").concat(i, "|(:").concat(o, "){1,2}|:)|") + "(?:".concat(o, ":){4}(?:(:").concat(o, "){0,1}:").concat(i, "|(:").concat(o, "){1,3}|:)|") + "(?:".concat(o, ":){3}(?:(:").concat(o, "){0,2}:").concat(i, "|(:").concat(o, "){1,4}|:)|") + "(?:".concat(o, ":){2}(?:(:").concat(o, "){0,3}:").concat(i, "|(:").concat(o, "){1,5}|:)|") + "(?:".concat(o, ":){1}(?:(:").concat(o, "){0,4}:").concat(i, "|(:").concat(o, "){1,6}|:)|") + "(?::((?::".concat(o, "){0,5}:").concat(i, "|(?::").concat(o, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
    function u(f) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (0, n.default)(f), d = String(d), d ? d === "4" ? s.test(f) : d === "6" ? l.test(f) : !1 : u(f, 4) || u(f, 6);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Jn, Jn.exports)), Jn.exports;
}
var ul;
function Mf() {
  return ul || (ul = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = x;
    var n = o(/* @__PURE__ */ G()), a = o(/* @__PURE__ */ If()), r = o(/* @__PURE__ */ Cs()), i = o(/* @__PURE__ */ ri()), s = o(/* @__PURE__ */ Re());
    function o(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var l = {
      allow_display_name: !1,
      allow_underscores: !1,
      require_display_name: !1,
      allow_utf8_local_part: !0,
      require_tld: !0,
      blacklisted_chars: "",
      ignore_max_length: !1,
      host_blacklist: [],
      host_whitelist: []
    }, u = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, d = /^[a-z\d]+$/, c = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, g = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, m = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, v = 254;
    function h(w) {
      var y = w.replace(/^"(.+)"$/, "$1");
      if (!y.trim())
        return !1;
      var _ = /[\.";<>]/.test(y);
      if (_) {
        if (y === w)
          return !1;
        var b = y.split('"').length === y.split('\\"').length;
        if (!b)
          return !1;
      }
      return !0;
    }
    function x(w, y) {
      if ((0, n.default)(w), y = (0, s.default)(y, l), y.require_display_name || y.allow_display_name) {
        var _ = w.match(u);
        if (_) {
          var b = _[1];
          if (w = w.replace(b, "").replace(/(^<|>$)/g, ""), b.endsWith(" ") && (b = b.slice(0, -1)), !h(b))
            return !1;
        } else if (y.require_display_name)
          return !1;
      }
      if (!y.ignore_max_length && w.length > v)
        return !1;
      var S = w.split("@"), I = S.pop(), $ = I.toLowerCase();
      if (y.host_blacklist.includes($) || y.host_whitelist.length > 0 && !y.host_whitelist.includes($))
        return !1;
      var R = S.join("@");
      if (y.domain_specific_validation && ($ === "gmail.com" || $ === "googlemail.com")) {
        R = R.toLowerCase();
        var L = R.split("+")[0];
        if (!(0, a.default)(L.replace(/\./g, ""), {
          min: 6,
          max: 30
        }))
          return !1;
        for (var D = L.split("."), O = 0; O < D.length; O++)
          if (!d.test(D[O]))
            return !1;
      }
      if (y.ignore_max_length === !1 && (!(0, a.default)(R, {
        max: 64
      }) || !(0, a.default)(I, {
        max: 254
      })))
        return !1;
      if (!(0, r.default)(I, {
        require_tld: y.require_tld,
        ignore_max_length: y.ignore_max_length,
        allow_underscores: y.allow_underscores
      })) {
        if (!y.allow_ip_domain)
          return !1;
        if (!(0, i.default)(I)) {
          if (!I.startsWith("[") || !I.endsWith("]"))
            return !1;
          var H = I.slice(1, -1);
          if (H.length === 0 || !(0, i.default)(H))
            return !1;
        }
      }
      if (R[0] === '"')
        return R = R.slice(1, R.length - 1), y.allow_utf8_local_part ? m.test(R) : c.test(R);
      for (var E = y.allow_utf8_local_part ? g : f, C = R.split("."), N = 0; N < C.length; N++)
        if (!E.test(C[N]))
          return !1;
      return !(y.blacklisted_chars && R.search(new RegExp("[".concat(y.blacklisted_chars, "]+"), "g")) !== -1);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Kn, Kn.exports)), Kn.exports;
}
var Qn = { exports: {} }, cl;
function x_() {
  return cl || (cl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = x;
    var n = s(/* @__PURE__ */ G()), a = s(/* @__PURE__ */ Cs()), r = s(/* @__PURE__ */ ri()), i = s(/* @__PURE__ */ Re());
    function s(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function o(w, y) {
      return c(w) || d(w, y) || u(w, y) || l();
    }
    function l() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function u(w, y) {
      if (w) {
        if (typeof w == "string") return f(w, y);
        var _ = Object.prototype.toString.call(w).slice(8, -1);
        if (_ === "Object" && w.constructor && (_ = w.constructor.name), _ === "Map" || _ === "Set") return Array.from(w);
        if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return f(w, y);
      }
    }
    function f(w, y) {
      (y == null || y > w.length) && (y = w.length);
      for (var _ = 0, b = new Array(y); _ < y; _++) b[_] = w[_];
      return b;
    }
    function d(w, y) {
      var _ = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
      if (_ != null) {
        var b, S, I, $, R = [], L = !0, D = !1;
        try {
          if (I = (_ = _.call(w)).next, y !== 0) for (; !(L = (b = I.call(_)).done) && (R.push(b.value), R.length !== y); L = !0) ;
        } catch (O) {
          D = !0, S = O;
        } finally {
          try {
            if (!L && _.return != null && ($ = _.return(), Object($) !== $)) return;
          } finally {
            if (D) throw S;
          }
        }
        return R;
      }
    }
    function c(w) {
      if (Array.isArray(w)) return w;
    }
    var g = {
      protocols: ["http", "https", "ftp"],
      require_tld: !0,
      require_protocol: !1,
      require_host: !0,
      require_port: !1,
      require_valid_protocol: !0,
      allow_underscores: !1,
      allow_trailing_dot: !1,
      allow_protocol_relative_urls: !1,
      allow_fragments: !0,
      allow_query_components: !0,
      validate_length: !0
    }, m = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function v(w) {
      return Object.prototype.toString.call(w) === "[object RegExp]";
    }
    function h(w, y) {
      for (var _ = 0; _ < y.length; _++) {
        var b = y[_];
        if (w === b || v(b) && b.test(w))
          return !0;
      }
      return !1;
    }
    function x(w, y) {
      if ((0, n.default)(w), !w || /[\s<>]/.test(w) || w.indexOf("mailto:") === 0 || (y = (0, i.default)(y, g), y.validate_length && w.length >= 2083) || !y.allow_fragments && w.includes("#") || !y.allow_query_components && (w.includes("?") || w.includes("&")))
        return !1;
      var _, b, S, I, $, R, L, D;
      if (L = w.split("#"), w = L.shift(), L = w.split("?"), w = L.shift(), L = w.split("://"), L.length > 1) {
        if (_ = L.shift().toLowerCase(), y.require_valid_protocol && y.protocols.indexOf(_) === -1)
          return !1;
      } else {
        if (y.require_protocol)
          return !1;
        if (w.slice(0, 2) === "//") {
          if (!y.allow_protocol_relative_urls)
            return !1;
          L[0] = w.slice(2);
        }
      }
      if (w = L.join("://"), w === "")
        return !1;
      if (L = w.split("/"), w = L.shift(), w === "" && !y.require_host)
        return !0;
      if (L = w.split("@"), L.length > 1) {
        if (y.disallow_auth || L[0] === "" || (b = L.shift(), b.indexOf(":") >= 0 && b.split(":").length > 2))
          return !1;
        var O = b.split(":"), H = o(O, 2), E = H[0], C = H[1];
        if (E === "" && C === "")
          return !1;
      }
      I = L.join("@"), R = null, D = null;
      var N = I.match(m);
      if (N ? (S = "", D = N[1], R = N[2] || null) : (L = I.split(":"), S = L.shift(), L.length && (R = L.join(":"))), R !== null && R.length > 0) {
        if ($ = parseInt(R, 10), !/^[0-9]+$/.test(R) || $ <= 0 || $ > 65535)
          return !1;
      } else if (y.require_port)
        return !1;
      return y.host_whitelist ? h(S, y.host_whitelist) : S === "" && !y.require_host ? !0 : !(!(0, r.default)(S) && !(0, a.default)(S, y) && (!D || !(0, r.default)(D, 6)) || (S = S || D, y.host_blacklist && h(S, y.host_blacklist)));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Qn, Qn.exports)), Qn.exports;
}
var er = { exports: {} }, dl;
function y_() {
  return dl || (dl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = a(/* @__PURE__ */ G());
    function a(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var r = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/, i = /^([0-9a-fA-F]){12}$/, s = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/, o = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/, l = /^([0-9a-fA-F]){16}$/, u = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
    function f(d, c) {
      return (0, n.default)(d), c != null && c.eui && (c.eui = String(c.eui)), c != null && c.no_colons || c != null && c.no_separators ? c.eui === "48" ? i.test(d) : c.eui === "64" ? l.test(d) : i.test(d) || l.test(d) : c?.eui === "48" ? r.test(d) || s.test(d) : c?.eui === "64" ? o.test(d) || u.test(d) : f(d, {
        eui: "48"
      }) || f(d, {
        eui: "64"
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(er, er.exports)), er.exports;
}
var tr = { exports: {} }, fl;
function __() {
  return fl || (fl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ ri());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /^\d{1,3}$/, s = 32, o = 128;
    function l(u) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (0, n.default)(u);
      var d = u.split("/");
      if (d.length !== 2 || !i.test(d[1]) || d[1].length > 1 && d[1].startsWith("0"))
        return !1;
      var c = (0, a.default)(d[0], f);
      if (!c)
        return !1;
      var g = null;
      switch (String(f)) {
        case "4":
          g = s;
          break;
        case "6":
          g = o;
          break;
        default:
          g = (0, a.default)(d[0], "6") ? o : s;
      }
      return d[1] <= g && d[1] >= 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(tr, tr.exports)), tr.exports;
}
var nr = { exports: {} }, hl;
function Cf() {
  return hl || (hl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = m;
    var n = a(/* @__PURE__ */ Re());
    function a(v) {
      return v && v.__esModule ? v : { default: v };
    }
    function r(v, h) {
      return o(v) || s(v, h) || u(v, h) || i();
    }
    function i() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function s(v, h) {
      var x = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (x != null) {
        var w, y, _, b, S = [], I = !0, $ = !1;
        try {
          if (_ = (x = x.call(v)).next, h !== 0) for (; !(I = (w = _.call(x)).done) && (S.push(w.value), S.length !== h); I = !0) ;
        } catch (R) {
          $ = !0, y = R;
        } finally {
          try {
            if (!I && x.return != null && (b = x.return(), Object(b) !== b)) return;
          } finally {
            if ($) throw y;
          }
        }
        return S;
      }
    }
    function o(v) {
      if (Array.isArray(v)) return v;
    }
    function l(v, h) {
      var x = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (!x) {
        if (Array.isArray(v) || (x = u(v)) || h) {
          x && (v = x);
          var w = 0, y = function() {
          };
          return { s: y, n: function() {
            return w >= v.length ? { done: !0 } : { done: !1, value: v[w++] };
          }, e: function($) {
            throw $;
          }, f: y };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var _ = !0, b = !1, S;
      return { s: function() {
        x = x.call(v);
      }, n: function() {
        var $ = x.next();
        return _ = $.done, $;
      }, e: function($) {
        b = !0, S = $;
      }, f: function() {
        try {
          !_ && x.return != null && x.return();
        } finally {
          if (b) throw S;
        }
      } };
    }
    function u(v, h) {
      if (v) {
        if (typeof v == "string") return f(v, h);
        var x = Object.prototype.toString.call(v).slice(8, -1);
        if (x === "Object" && v.constructor && (x = v.constructor.name), x === "Map" || x === "Set") return Array.from(v);
        if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)) return f(v, h);
      }
    }
    function f(v, h) {
      (h == null || h > v.length) && (h = v.length);
      for (var x = 0, w = new Array(h); x < h; x++) w[x] = v[x];
      return w;
    }
    var d = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1
    };
    function c(v) {
      return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(v);
    }
    function g(v, h) {
      for (var x = [], w = Math.min(v.length, h.length), y = 0; y < w; y++)
        x.push([v[y], h[y]]);
      return x;
    }
    function m(v, h) {
      if (typeof h == "string" ? h = (0, n.default)({
        format: h
      }, d) : h = (0, n.default)(h, d), typeof v == "string" && c(h.format)) {
        var x = h.delimiters.find(function(C) {
          return h.format.indexOf(C) !== -1;
        }), w = h.strictMode ? x : h.delimiters.find(function(C) {
          return v.indexOf(C) !== -1;
        }), y = g(v.split(w), h.format.toLowerCase().split(x)), _ = {}, b = l(y), S;
        try {
          for (b.s(); !(S = b.n()).done; ) {
            var I = r(S.value, 2), $ = I[0], R = I[1];
            if ($.length !== R.length)
              return !1;
            _[R.charAt(0)] = $;
          }
        } catch (C) {
          b.e(C);
        } finally {
          b.f();
        }
        var L = _.y;
        if (L.startsWith("-"))
          return !1;
        if (_.y.length === 2) {
          var D = parseInt(_.y, 10);
          if (isNaN(D))
            return !1;
          var O = (/* @__PURE__ */ new Date()).getFullYear() % 100;
          D < O ? L = "20".concat(_.y) : L = "19".concat(_.y);
        }
        var H = _.m;
        _.m.length === 1 && (H = "0".concat(_.m));
        var E = _.d;
        return _.d.length === 1 && (E = "0".concat(_.d)), new Date("".concat(L, "-").concat(H, "-").concat(E, "T00:00:00.000Z")).getUTCDate() === +_.d;
      }
      return h.strictMode ? !1 : Object.prototype.toString.call(v) === "[object Date]" && isFinite(v);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(nr, nr.exports)), nr.exports;
}
var rr = { exports: {} }, pl;
function w_() {
  return pl || (pl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ Re());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = {
      hourFormat: "hour24",
      mode: "default"
    }, i = {
      hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
      },
      hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
      }
    };
    function s(o, l) {
      return l = (0, n.default)(l, r), typeof o != "string" ? !1 : i[l.hourFormat][l.mode].test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(rr, rr.exports)), rr.exports;
}
var ar = { exports: {} }, gl;
function S_() {
  return gl || (gl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ G());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = {
      loose: !1
    }, i = ["true", "false", "1", "0"], s = [].concat(i, ["yes", "no"]);
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r;
      return (0, n.default)(l), u.loose ? s.includes(l.toLowerCase()) : i.includes(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ar, ar.exports)), ar.exports;
}
var ir = { exports: {} }, ml;
function b_() {
  return ml || (ml = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = w;
    var n = a(/* @__PURE__ */ G());
    function a(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var r = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})", i = "(([a-zA-Z]{2,3}(-".concat(r, ")?)|([a-zA-Z]{5,8}))"), s = "([A-Za-z]{4})", o = "([A-Za-z]{2}|\\d{3})", l = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))", u = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])", f = "(".concat(u, "(-[A-Za-z0-9]{2,8})+)"), d = "(x(-[A-Za-z0-9]{1,8})+)", c = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))", g = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))", m = "(".concat(c, "|").concat(g, ")"), v = "(-|_)", h = "".concat(i, "(").concat(v).concat(s, ")?(").concat(v).concat(o, ")?(").concat(v).concat(l, ")*(").concat(v).concat(f, ")*(").concat(v).concat(d, ")?"), x = new RegExp("(^".concat(d, "$)|(^").concat(m, "$)|(^").concat(h, "$)"));
    function w(y) {
      return (0, n.default)(y), x.test(y);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ir, ir.exports)), ir.exports;
}
var sr = { exports: {} }, vl;
function A_() {
  return vl || (vl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
    function i(s) {
      if ((0, n.default)(s), !r.test(s)) return !1;
      for (var o = 0, l = 0; l < s.length; l++)
        l % 3 === 0 ? o += s[l] * 3 : l % 3 === 1 ? o += s[l] * 7 : o += s[l] * 1;
      return o % 10 === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(sr, sr.exports)), sr.exports;
}
var St = {}, xl;
function E_() {
  if (xl) return St;
  xl = 1, Object.defineProperty(St, "__esModule", {
    value: !0
  }), St.default = a, St.locales = void 0;
  var e = n(/* @__PURE__ */ G()), t = /* @__PURE__ */ Sn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, e.default)(r);
    var o = r, l = s.ignore;
    if (l)
      if (l instanceof RegExp)
        o = o.replace(l, "");
      else if (typeof l == "string")
        o = o.replace(new RegExp("[".concat(l.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
      else
        throw new Error("ignore should be instance of a String or RegExp");
    if (i in t.alpha)
      return t.alpha[i].test(o);
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return St.locales = Object.keys(t.alpha), St;
}
var bt = {}, yl;
function I_() {
  if (yl) return bt;
  yl = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = a, bt.locales = void 0;
  var e = n(/* @__PURE__ */ G()), t = /* @__PURE__ */ Sn();
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (0, e.default)(r);
    var o = r, l = s.ignore;
    if (l)
      if (l instanceof RegExp)
        o = o.replace(l, "");
      else if (typeof l == "string")
        o = o.replace(new RegExp("[".concat(l.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
      else
        throw new Error("ignore should be instance of a String or RegExp");
    if (i in t.alphanumeric)
      return t.alphanumeric[i].test(o);
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return bt.locales = Object.keys(t.alphanumeric), bt;
}
var or = { exports: {} }, _l;
function M_() {
  return _l || (_l = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = /* @__PURE__ */ Sn();
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = /^[0-9]+$/;
    function s(o, l) {
      return (0, n.default)(o), l && l.no_symbols ? i.test(o) : new RegExp("^[+-]?([0-9]*[".concat((l || {}).locale ? a.decimal[l.locale] : ".", "])?[0-9]+$")).test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(or, or.exports)), or.exports;
}
var lr = { exports: {} }, wl;
function C_() {
  return wl || (wl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      AM: /^[A-Z]{2}\d{7}$/,
      // ARMENIA
      AR: /^[A-Z]{3}\d{6}$/,
      // ARGENTINA
      AT: /^[A-Z]\d{7}$/,
      // AUSTRIA
      AU: /^[A-Z]\d{7}$/,
      // AUSTRALIA
      AZ: /^[A-Z]{1}\d{8}$/,
      // AZERBAIJAN
      BE: /^[A-Z]{2}\d{6}$/,
      // BELGIUM
      BG: /^\d{9}$/,
      // BULGARIA
      BR: /^[A-Z]{2}\d{6}$/,
      // BRAZIL
      BY: /^[A-Z]{2}\d{7}$/,
      // BELARUS
      CA: /^[A-Z]{2}\d{6}$/,
      // CANADA
      CH: /^[A-Z]\d{7}$/,
      // SWITZERLAND
      CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
      // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
      CY: /^[A-Z](\d{6}|\d{8})$/,
      // CYPRUS
      CZ: /^\d{8}$/,
      // CZECH REPUBLIC
      DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
      // GERMANY
      DK: /^\d{9}$/,
      // DENMARK
      DZ: /^\d{9}$/,
      // ALGERIA
      EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
      // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
      ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
      // SPAIN
      FI: /^[A-Z]{2}\d{7}$/,
      // FINLAND
      FR: /^\d{2}[A-Z]{2}\d{5}$/,
      // FRANCE
      GB: /^\d{9}$/,
      // UNITED KINGDOM
      GR: /^[A-Z]{2}\d{7}$/,
      // GREECE
      HR: /^\d{9}$/,
      // CROATIA
      HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
      // HUNGARY
      IE: /^[A-Z0-9]{2}\d{7}$/,
      // IRELAND
      IN: /^[A-Z]{1}-?\d{7}$/,
      // INDIA
      ID: /^[A-C]\d{7}$/,
      // INDONESIA
      IR: /^[A-Z]\d{8}$/,
      // IRAN
      IS: /^(A)\d{7}$/,
      // ICELAND
      IT: /^[A-Z0-9]{2}\d{7}$/,
      // ITALY
      JM: /^[Aa]\d{7}$/,
      // JAMAICA
      JP: /^[A-Z]{2}\d{7}$/,
      // JAPAN
      KR: /^[MS]\d{8}$/,
      // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
      KZ: /^[a-zA-Z]\d{7}$/,
      // KAZAKHSTAN
      LI: /^[a-zA-Z]\d{5}$/,
      // LIECHTENSTEIN
      LT: /^[A-Z0-9]{8}$/,
      // LITHUANIA
      LU: /^[A-Z0-9]{8}$/,
      // LUXEMBURG
      LV: /^[A-Z0-9]{2}\d{7}$/,
      // LATVIA
      LY: /^[A-Z0-9]{8}$/,
      // LIBYA
      MT: /^\d{7}$/,
      // MALTA
      MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
      // MOZAMBIQUE
      MY: /^[AHK]\d{8}$/,
      // MALAYSIA
      MX: /^\d{10,11}$/,
      // MEXICO
      NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
      // NETHERLANDS
      NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
      // NEW ZEALAND
      PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
      // PHILIPPINES
      PK: /^[A-Z]{2}\d{7}$/,
      // PAKISTAN
      PL: /^[A-Z]{2}\d{7}$/,
      // POLAND
      PT: /^[A-Z]\d{6}$/,
      // PORTUGAL
      RO: /^\d{8,9}$/,
      // ROMANIA
      RU: /^\d{9}$/,
      // RUSSIAN FEDERATION
      SE: /^\d{8}$/,
      // SWEDEN
      SL: /^(P)[A-Z]\d{7}$/,
      // SLOVENIA
      SK: /^[0-9A-Z]\d{7}$/,
      // SLOVAKIA
      TH: /^[A-Z]{1,2}\d{6,7}$/,
      // THAILAND
      TR: /^[A-Z]\d{8}$/,
      // TURKEY
      UA: /^[A-Z]{2}\d{6}$/,
      // UKRAINE
      US: /^\d{9}$/,
      // UNITED STATES
      ZA: /^[TAMD]\d{8}$/
      // SOUTH AFRICA
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = s.replace(/\s/g, "").toUpperCase();
      return o.toUpperCase() in r && r[o].test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(lr, lr.exports)), lr.exports;
}
var ur = { exports: {} }, cr = { exports: {} }, Sl;
function Ns() {
  return Sl || (Sl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ G());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/;
    function s(o, l) {
      (0, n.default)(o), l = l || {};
      var u = l.allow_leading_zeroes === !1 ? r : i, f = !l.hasOwnProperty("min") || o >= l.min, d = !l.hasOwnProperty("max") || o <= l.max, c = !l.hasOwnProperty("lt") || o < l.lt, g = !l.hasOwnProperty("gt") || o > l.gt;
      return u.test(o) && f && d && c && g;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(cr, cr.exports)), cr.exports;
}
var bl;
function N_() {
  return bl || (bl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ Ns());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i, {
        allow_leading_zeroes: !1,
        min: 0,
        max: 65535
      });
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ur, ur.exports)), ur.exports;
}
var dr = { exports: {} }, Al;
function $_() {
  return Al || (Al = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i === i.toLowerCase();
    }
    e.exports = t.default, e.exports.default = t.default;
  })(dr, dr.exports)), dr.exports;
}
var fr = { exports: {} }, El;
function R_() {
  return El || (El = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i === i.toUpperCase();
    }
    e.exports = t.default, e.exports.default = t.default;
  })(fr, fr.exports)), fr.exports;
}
var hr = { exports: {} }, Il;
function D_() {
  return Il || (Il = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ G());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^[0-9]{15}$/, i = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
    function s(o, l) {
      (0, n.default)(o), l = l || {};
      var u = r;
      if (l.allow_hyphens && (u = i), !u.test(o))
        return !1;
      o = o.replace(/-/g, "");
      for (var f = 0, d = 2, c = 14, g = 0; g < c; g++) {
        var m = o.substring(c - g - 1, c - g), v = parseInt(m, 10) * d;
        v >= 10 ? f += v % 10 + 1 : f += v, d === 1 ? d += 1 : d -= 1;
      }
      var h = (10 - f % 10) % 10;
      return h === parseInt(o.substring(14, 15), 10);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(hr, hr.exports)), hr.exports;
}
var pr = { exports: {} }, Ml;
function P_() {
  return Ml || (Ml = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[\x00-\x7F]+$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(pr, pr.exports)), pr.exports;
}
var At = {}, Cl;
function Nf() {
  if (Cl) return At;
  Cl = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.default = a, At.fullWidth = void 0;
  var e = t(/* @__PURE__ */ G());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = At.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
  function a(r) {
    return (0, e.default)(r), n.test(r);
  }
  return At;
}
var Et = {}, Nl;
function $f() {
  if (Nl) return Et;
  Nl = 1, Object.defineProperty(Et, "__esModule", {
    value: !0
  }), Et.default = a, Et.halfWidth = void 0;
  var e = t(/* @__PURE__ */ G());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = Et.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
  function a(r) {
    return (0, e.default)(r), n.test(r);
  }
  return Et;
}
var gr = { exports: {} }, $l;
function k_() {
  return $l || ($l = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = i(/* @__PURE__ */ G()), a = /* @__PURE__ */ Nf(), r = /* @__PURE__ */ $f();
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function s(o) {
      return (0, n.default)(o), a.fullWidth.test(o) && r.halfWidth.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(gr, gr.exports)), gr.exports;
}
var mr = { exports: {} }, Rl;
function T_() {
  return Rl || (Rl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /[^\x00-\x7F]/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(mr, mr.exports)), mr.exports;
}
var vr = { exports: {} }, xr = { exports: {} }, Dl;
function L_() {
  return Dl || (Dl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = n;
    function n(a, r) {
      var i = a.join("");
      return new RegExp(i, r);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(xr, xr.exports)), xr.exports;
}
var Pl;
function O_() {
  return Pl || (Pl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ L_());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = (0, a.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
    function s(o) {
      return (0, n.default)(o), i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(vr, vr.exports)), vr.exports;
}
var yr = { exports: {} }, kl;
function B_() {
  return kl || (kl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(yr, yr.exports)), yr.exports;
}
var _r = { exports: {} }, wr = { exports: {} }, Tl;
function F_() {
  return Tl || (Tl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = function(r, i) {
      return r.some(function(s) {
        return i === s;
      });
    };
    t.default = n, e.exports = t.default, e.exports.default = t.default;
  })(wr, wr.exports)), wr.exports;
}
var Ll;
function H_() {
  return Ll || (Ll = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = s(/* @__PURE__ */ Re()), a = s(/* @__PURE__ */ G()), r = s(/* @__PURE__ */ F_()), i = /* @__PURE__ */ Sn();
    function s(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function o(d) {
      var c = new RegExp("^[-+]?([0-9]+)?(\\".concat(i.decimal[d.locale], "[0-9]{").concat(d.decimal_digits, "})").concat(d.force_decimal ? "" : "?", "$"));
      return c;
    }
    var l = {
      force_decimal: !1,
      decimal_digits: "1,",
      locale: "en-US"
    }, u = ["", "-", "+"];
    function f(d, c) {
      if ((0, a.default)(d), c = (0, n.default)(c, l), c.locale in i.decimal)
        return !(0, r.default)(u, d.replace(/ /g, "")) && o(c).test(d);
      throw new Error("Invalid locale '".concat(c.locale, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(_r, _r.exports)), _r.exports;
}
var Sr = { exports: {} }, Ol;
function Rf() {
  return Ol || (Ol = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0x|0h)?[0-9A-F]+$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Sr, Sr.exports)), Sr.exports;
}
var br = { exports: {} }, Bl;
function Z_() {
  return Bl || (Bl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0o)?[0-7]+$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(br, br.exports)), br.exports;
}
var Ar = { exports: {} }, Fl;
function q_() {
  return Fl || (Fl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Af());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      return (0, n.default)(s), (0, a.default)(s) % parseInt(o, 10) === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ar, Ar.exports)), Ar.exports;
}
var Er = { exports: {} }, Hl;
function z_() {
  return Hl || (Hl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Er, Er.exports)), Er.exports;
}
var Ir = { exports: {} }, Zl;
function U_() {
  return Zl || (Zl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = a(/* @__PURE__ */ G());
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var r = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/, i = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/, s = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/, o = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
    function l(u) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return (0, n.default)(u), f ? r.test(u) || i.test(u) || s.test(u) || o.test(u) : r.test(u) || i.test(u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ir, Ir.exports)), Ir.exports;
}
var Mr = { exports: {} }, ql;
function j_() {
  return ql || (ql = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ G());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i, i = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
    function s(o) {
      (0, n.default)(o);
      var l = o.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
      return l.indexOf(",") !== -1 ? r.test(l) : i.test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Mr, Mr.exports)), Mr.exports;
}
var Cr = { exports: {} }, zl;
function V_() {
  return zl || (zl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Cr, Cr.exports)), Cr.exports;
}
var It = {}, Ul;
function W_() {
  if (Ul) return It;
  Ul = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.default = s, It.locales = void 0;
  var e = t(/* @__PURE__ */ G());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var n = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    DZ: /^(DZ\d{24})$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MA: /^(MA[0-9]{26})$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
  };
  function a(o) {
    var l = o.filter(function(u) {
      return !(u in n);
    });
    return !(l.length > 0);
  }
  function r(o, l) {
    var u = o.replace(/[\s\-]+/gi, "").toUpperCase(), f = u.slice(0, 2).toUpperCase(), d = f in n;
    if (l.whitelist) {
      if (!a(l.whitelist))
        return !1;
      var c = l.whitelist.includes(f);
      if (!c)
        return !1;
    }
    if (l.blacklist) {
      var g = l.blacklist.includes(f);
      if (g)
        return !1;
    }
    return d && n[f].test(u);
  }
  function i(o) {
    var l = o.replace(/[^A-Z0-9]+/gi, "").toUpperCase(), u = l.slice(4) + l.slice(0, 4), f = u.replace(/[A-Z]/g, function(c) {
      return c.charCodeAt(0) - 55;
    }), d = f.match(/\d{1,7}/g).reduce(function(c, g) {
      return Number(c + g) % 97;
    }, "");
    return d === 1;
  }
  function s(o) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, e.default)(o), r(o, l) && i(o);
  }
  return It.locales = Object.keys(n), It;
}
var Nr = { exports: {} }, Mt = {}, jl;
function Df() {
  if (jl) return Mt;
  jl = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.CountryCodes = void 0, Mt.default = a;
  var e = t(/* @__PURE__ */ G());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
  function a(r) {
    return (0, e.default)(r), n.has(r.toUpperCase());
  }
  return Mt.CountryCodes = n, Mt;
}
var Vl;
function G_() {
  return Vl || (Vl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = /* @__PURE__ */ Df();
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
    function s(o) {
      (0, n.default)(o);
      var l = o.slice(4, 6).toUpperCase();
      return !a.CountryCodes.has(l) && l !== "XK" ? !1 : i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Nr, Nr.exports)), Nr.exports;
}
var $r = { exports: {} }, Wl;
function K_() {
  return Wl || (Wl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[a-f0-9]{32}$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })($r, $r.exports)), $r.exports;
}
var Rr = { exports: {} }, Gl;
function Y_() {
  return Gl || (Gl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      md5: 32,
      md4: 32,
      sha1: 40,
      sha256: 64,
      sha384: 96,
      sha512: 128,
      ripemd128: 32,
      ripemd160: 40,
      tiger128: 32,
      tiger160: 40,
      tiger192: 48,
      crc32: 8,
      crc32b: 8
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = new RegExp("^[a-fA-F0-9]{".concat(r[o], "}$"));
      return l.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Rr, Rr.exports)), Rr.exports;
}
var Dr = { exports: {} }, Pr = { exports: {} }, Kl;
function Pf() {
  return Kl || (Kl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /[^A-Z0-9+\/=]/i, s = /^[A-Z0-9_\-]*$/i, o = {
      urlSafe: !1
    };
    function l(u, f) {
      (0, n.default)(u), f = (0, a.default)(f, o);
      var d = u.length;
      if (f.urlSafe)
        return s.test(u);
      if (d % 4 !== 0 || i.test(u))
        return !1;
      var c = u.indexOf("=");
      return c === -1 || c === d - 1 || c === d - 2 && u[d - 1] === "=";
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Pr, Pr.exports)), Pr.exports;
}
var Yl;
function X_() {
  return Yl || (Yl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Pf());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      (0, n.default)(s);
      var o = s.split("."), l = o.length;
      return l !== 3 ? !1 : o.reduce(function(u, f) {
        return u && (0, a.default)(f, {
          urlSafe: !0
        });
      }, !0);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Dr, Dr.exports)), Dr.exports;
}
var kr = { exports: {} }, Xl;
function J_() {
  return Xl || (Xl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function i(l) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
        return typeof u;
      } : function(u) {
        return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
      }, i(l);
    }
    var s = {
      allow_primitives: !1
    };
    function o(l, u) {
      (0, n.default)(l);
      try {
        u = (0, a.default)(u, s);
        var f = [];
        u.allow_primitives && (f = [null, !1, !0]);
        var d = JSON.parse(l);
        return f.includes(d) || !!d && i(d) === "object";
      } catch {
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(kr, kr.exports)), kr.exports;
}
var Tr = { exports: {} }, Jl;
function Q_() {
  return Jl || (Jl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      ignore_whitespace: !1
    };
    function s(o, l) {
      return (0, n.default)(o), l = (0, a.default)(l, i), (l.ignore_whitespace ? o.trim().length : o.length) === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Tr, Tr.exports)), Tr.exports;
}
var Lr = { exports: {} }, Ql;
function ew() {
  return Ql || (Ql = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function r(s) {
      "@babel/helpers - typeof";
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, r(s);
    }
    function i(s, o) {
      (0, n.default)(s);
      var l, u;
      r(o) === "object" ? (l = o.min || 0, u = o.max) : (l = arguments[1] || 0, u = arguments[2]);
      var f = s.match(/(\uFE0F|\uFE0E)/g) || [], d = s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], c = s.length - f.length - d.length;
      return c >= l && (typeof u > "u" || c <= u);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Lr, Lr.exports)), Lr.exports;
}
var Or = { exports: {} }, eu;
function tw() {
  return eu || (eu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    function i(s, o) {
      (0, n.default)(s);
      var l = r[[void 0, null].includes(o) ? "all" : o];
      return !!l && l.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Or, Or.exports)), Or.exports;
}
var Br = { exports: {} }, tu;
function nw() {
  return tu || (tu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Rf());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      return (0, n.default)(s), (0, a.default)(s) && s.length === 24;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Br, Br.exports)), Br.exports;
}
var Fr = { exports: {} }, nu;
function rw() {
  return nu || (nu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ Ms());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      var o = s?.comparisonDate || s || Date().toString(), l = (0, n.default)(o), u = (0, n.default)(i);
      return !!(u && l && u > l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Fr, Fr.exports)), Fr.exports;
}
var Hr = { exports: {} }, ru;
function aw() {
  return ru || (ru = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Ms());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
      (0, n.default)(s);
      var l = (0, a.default)(o), u = (0, a.default)(s);
      return !!(u && l && u < l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Hr, Hr.exports)), Hr.exports;
}
var Zr = { exports: {} }, au;
function iw() {
  return au || (au = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Ef());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function i(o) {
      "@babel/helpers - typeof";
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
        return typeof l;
      } : function(l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
      }, i(o);
    }
    function s(o, l) {
      (0, n.default)(o);
      var u;
      if (Object.prototype.toString.call(l) === "[object Array]") {
        var f = [];
        for (u in l)
          ({}).hasOwnProperty.call(l, u) && (f[u] = (0, a.default)(l[u]));
        return f.indexOf(o) >= 0;
      } else {
        if (i(l) === "object")
          return l.hasOwnProperty(o);
        if (l && typeof l.indexOf == "function")
          return l.indexOf(o) >= 0;
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Zr, Zr.exports)), Zr.exports;
}
var qr = { exports: {} }, iu;
function kf() {
  return iu || (iu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      (0, n.default)(i);
      for (var s = i.replace(/[- ]+/g, ""), o = 0, l, u, f, d = s.length - 1; d >= 0; d--)
        l = s.substring(d, d + 1), u = parseInt(l, 10), f ? (u *= 2, u >= 10 ? o += u % 10 + 1 : o += u) : o += u, f = !f;
      return !!(o % 10 === 0 && s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(qr, qr.exports)), qr.exports;
}
var zr = { exports: {} }, su;
function sw() {
  return su || (su = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ kf());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var i = {
      amex: /^3[47][0-9]{13}$/,
      dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
      mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
      // /^[25][1-7][0-9]{14}$/;
      unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
      visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
    }, s = (function() {
      var l = [];
      for (var u in i)
        i.hasOwnProperty(u) && l.push(i[u]);
      return l;
    })();
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(l);
      var f = u.provider, d = l.replace(/[- ]+/g, "");
      if (f && f.toLowerCase() in i) {
        if (!i[f.toLowerCase()].test(d))
          return !1;
      } else {
        if (f && !(f.toLowerCase() in i))
          throw new Error("".concat(f, " is not a valid credit card provider."));
        if (!s.some(function(c) {
          return c.test(d);
        }))
          return !1;
      }
      return (0, a.default)(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(zr, zr.exports)), zr.exports;
}
var Ur = { exports: {} }, ou;
function ow() {
  return ou || (ou = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Ns());
    function r(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var i = {
      PL: function(l) {
        (0, n.default)(l);
        var u = {
          1: 1,
          2: 3,
          3: 7,
          4: 9,
          5: 1,
          6: 3,
          7: 7,
          8: 9,
          9: 1,
          10: 3,
          11: 0
        };
        if (l != null && l.length === 11 && (0, a.default)(l, {
          allow_leading_zeroes: !0
        })) {
          var f = l.split("").slice(0, -1), d = f.reduce(function(m, v, h) {
            return m + Number(v) * u[h + 1];
          }, 0), c = d % 10, g = Number(l.charAt(l.length - 1));
          if (c === 0 && g === 0 || g === 10 - c)
            return !0;
        }
        return !1;
      },
      ES: function(l) {
        (0, n.default)(l);
        var u = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/, f = {
          X: 0,
          Y: 1,
          Z: 2
        }, d = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], c = l.trim().toUpperCase();
        if (!u.test(c))
          return !1;
        var g = c.slice(0, -1).replace(/[X,Y,Z]/g, function(m) {
          return f[m];
        });
        return c.endsWith(d[g % 23]);
      },
      FI: function(l) {
        if ((0, n.default)(l), l.length !== 11 || !l.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))
          return !1;
        var u = "0123456789ABCDEFHJKLMNPRSTUVWXY", f = parseInt(l.slice(0, 6), 10) * 1e3 + parseInt(l.slice(7, 10), 10), d = f % 31, c = u[d];
        return c === l.slice(10, 11);
      },
      IN: function(l) {
        var u = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/, f = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], c = l.trim();
        if (!u.test(c))
          return !1;
        var g = 0, m = c.replace(/\s/g, "").split("").map(Number).reverse();
        return m.forEach(function(v, h) {
          g = f[g][d[h % 8][v]];
        }), g === 0;
      },
      IR: function(l) {
        if (!l.match(/^\d{10}$/) || (l = "0000".concat(l).slice(l.length - 6), parseInt(l.slice(3, 9), 10) === 0)) return !1;
        for (var u = parseInt(l.slice(9, 10), 10), f = 0, d = 0; d < 9; d++)
          f += parseInt(l.slice(d, d + 1), 10) * (10 - d);
        return f %= 11, f < 2 && u === f || f >= 2 && u === 11 - f;
      },
      IT: function(l) {
        return l.length !== 9 || l === "CA00000AA" ? !1 : l.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
      },
      NO: function(l) {
        var u = l.trim();
        if (isNaN(Number(u)) || u.length !== 11 || u === "00000000000") return !1;
        var f = u.split("").map(Number), d = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11, c = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * d) % 11) % 11;
        return !(d !== f[9] || c !== f[10]);
      },
      TH: function(l) {
        if (!l.match(/^[1-8]\d{12}$/)) return !1;
        for (var u = 0, f = 0; f < 12; f++)
          u += parseInt(l[f], 10) * (13 - f);
        return l[12] === ((11 - u % 11) % 10).toString();
      },
      LK: function(l) {
        var u = /^[1-9]\d{8}[vx]$/i, f = /^[1-9]\d{11}$/i;
        return l.length === 10 && u.test(l) ? !0 : !!(l.length === 12 && f.test(l));
      },
      "he-IL": function(l) {
        var u = /^\d{9}$/, f = l.trim();
        if (!u.test(f))
          return !1;
        for (var d = f, c = 0, g, m = 0; m < d.length; m++)
          g = Number(d[m]) * (m % 2 + 1), c += g > 9 ? g - 9 : g;
        return c % 10 === 0;
      },
      "ar-LY": function(l) {
        var u = /^(1|2)\d{11}$/, f = l.trim();
        return !!u.test(f);
      },
      "ar-TN": function(l) {
        var u = /^\d{8}$/, f = l.trim();
        return !!u.test(f);
      },
      "zh-CN": function(l) {
        var u = [
          "11",
          // 北京
          "12",
          // 天津
          "13",
          // 河北
          "14",
          // 山西
          "15",
          // 内蒙古
          "21",
          // 辽宁
          "22",
          // 吉林
          "23",
          // 黑龙江
          "31",
          // 上海
          "32",
          // 江苏
          "33",
          // 浙江
          "34",
          // 安徽
          "35",
          // 福建
          "36",
          // 江西
          "37",
          // 山东
          "41",
          // 河南
          "42",
          // 湖北
          "43",
          // 湖南
          "44",
          // 广东
          "45",
          // 广西
          "46",
          // 海南
          "50",
          // 重庆
          "51",
          // 四川
          "52",
          // 贵州
          "53",
          // 云南
          "54",
          // 西藏
          "61",
          // 陕西
          "62",
          // 甘肃
          "63",
          // 青海
          "64",
          // 宁夏
          "65",
          // 新疆
          "71",
          // 台湾
          "81",
          // 香港
          "82",
          // 澳门
          "91"
          // 国外
        ], f = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"], d = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], c = function(_) {
          return u.includes(_);
        }, g = function(_) {
          var b = parseInt(_.substring(0, 4), 10), S = parseInt(_.substring(4, 6), 10), I = parseInt(_.substring(6), 10), $ = new Date(b, S - 1, I);
          return $ > /* @__PURE__ */ new Date() ? !1 : $.getFullYear() === b && $.getMonth() === S - 1 && $.getDate() === I;
        }, m = function(_) {
          for (var b = _.substring(0, 17), S = 0, I = 0; I < 17; I++)
            S += parseInt(b.charAt(I), 10) * parseInt(f[I], 10);
          var $ = S % 11;
          return d[$];
        }, v = function(_) {
          return m(_) === _.charAt(17).toUpperCase();
        }, h = function(_) {
          var b = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(_);
          if (!b) return !1;
          var S = _.substring(0, 2);
          if (b = c(S), !b) return !1;
          var I = "19".concat(_.substring(6, 12));
          return b = g(I), !!b;
        }, x = function(_) {
          var b = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(_);
          if (!b) return !1;
          var S = _.substring(0, 2);
          if (b = c(S), !b) return !1;
          var I = _.substring(6, 14);
          return b = g(I), b ? v(_) : !1;
        }, w = function(_) {
          var b = /^\d{15}|(\d{17}(\d|x|X))$/.test(_);
          return b ? _.length === 15 ? h(_) : x(_) : !1;
        };
        return w(l);
      },
      "zh-HK": function(l) {
        l = l.trim();
        var u = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/, f = /^[0-9]$/;
        if (l = l.toUpperCase(), !u.test(l)) return !1;
        l = l.replace(/\[|\]|\(|\)/g, ""), l.length === 8 && (l = "3".concat(l));
        for (var d = 0, c = 0; c <= 7; c++) {
          var g = void 0;
          f.test(l[c]) ? g = l[c] : g = (l[c].charCodeAt(0) - 55) % 11, d += g * (9 - c);
        }
        d %= 11;
        var m;
        return d === 0 ? m = "0" : d === 1 ? m = "A" : m = String(11 - d), m === l[l.length - 1];
      },
      "zh-TW": function(l) {
        var u = {
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          G: 16,
          H: 17,
          I: 34,
          J: 18,
          K: 19,
          L: 20,
          M: 21,
          N: 22,
          O: 35,
          P: 23,
          Q: 24,
          R: 25,
          S: 26,
          T: 27,
          U: 28,
          V: 29,
          W: 32,
          X: 30,
          Y: 31,
          Z: 33
        }, f = l.trim().toUpperCase();
        return /^[A-Z][0-9]{9}$/.test(f) ? Array.from(f).reduce(function(d, c, g) {
          if (g === 0) {
            var m = u[c];
            return m % 10 * 9 + Math.floor(m / 10);
          }
          return g === 9 ? (10 - d % 10 - Number(c)) % 10 === 0 : d + Number(c) * (9 - g);
        }, 0) : !1;
      }
    };
    function s(o, l) {
      if ((0, n.default)(o), l in i)
        return i[l](o);
      if (l === "any") {
        for (var u in i)
          if (i.hasOwnProperty(u)) {
            var f = i[u];
            if (f(o))
              return !0;
          }
        return !1;
      }
      throw new Error("Invalid locale '".concat(l, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Ur, Ur.exports)), Ur.exports;
}
var jr = { exports: {} }, lu;
function lw() {
  return lu || (lu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = u;
    var n = a(/* @__PURE__ */ G());
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var r = 8, i = 14, s = /^(\d{8}|\d{13}|\d{14})$/;
    function o(f, d) {
      return f === r || f === i ? d % 2 === 0 ? 3 : 1 : d % 2 === 0 ? 1 : 3;
    }
    function l(f) {
      var d = f.slice(0, -1).split("").map(function(g, m) {
        return Number(g) * o(f.length, m);
      }).reduce(function(g, m) {
        return g + m;
      }, 0), c = 10 - d % 10;
      return c < 10 ? c : 0;
    }
    function u(f) {
      (0, n.default)(f);
      var d = Number(f.slice(-1));
      return s.test(f) && d === l(f);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(jr, jr.exports)), jr.exports;
}
var Vr = { exports: {} }, uu;
function uw() {
  return uu || (uu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
    function i(s) {
      if ((0, n.default)(s), !r.test(s))
        return !1;
      for (var o = !0, l = 0, u = s.length - 2; u >= 0; u--)
        if (s[u] >= "A" && s[u] <= "Z")
          for (var f = s[u].charCodeAt(0) - 55, d = f % 10, c = Math.trunc(f / 10), g = 0, m = [d, c]; g < m.length; g++) {
            var v = m[g];
            o ? v >= 5 ? l += 1 + (v - 5) * 2 : l += v * 2 : l += v, o = !o;
          }
        else {
          var h = s[u].charCodeAt(0) - 48;
          o ? h >= 5 ? l += 1 + (h - 5) * 2 : l += h * 2 : l += h, o = !o;
        }
      var x = Math.trunc((l + 9) / 10) * 10 - l;
      return +s[s.length - 1] === x;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Vr, Vr.exports)), Vr.exports;
}
var Wr = { exports: {} }, cu;
function cw() {
  return cu || (cu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ G());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^(?:[0-9]{9}X|[0-9]{10})$/, i = /^(?:[0-9]{13})$/, s = [1, 3];
    function o(l, u) {
      (0, n.default)(l);
      var f = String(u?.version || u);
      if (!(u != null && u.version || u))
        return o(l, {
          version: 10
        }) || o(l, {
          version: 13
        });
      var d = l.replace(/[\s-]+/g, ""), c = 0;
      if (f === "10") {
        if (!r.test(d))
          return !1;
        for (var g = 0; g < f - 1; g++)
          c += (g + 1) * d.charAt(g);
        if (d.charAt(9) === "X" ? c += 100 : c += 10 * d.charAt(9), c % 11 === 0)
          return !0;
      } else if (f === "13") {
        if (!i.test(d))
          return !1;
        for (var m = 0; m < 12; m++)
          c += s[m % 2] * d.charAt(m);
        if (d.charAt(12) - (10 - c % 10) % 10 === 0)
          return !0;
      }
      return !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Wr, Wr.exports)), Wr.exports;
}
var Gr = { exports: {} }, du;
function dw() {
  return du || (du = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = "^\\d{4}-?\\d{3}[\\dX]$";
    function i(s) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(s);
      var l = r;
      if (l = o.require_hyphen ? l.replace("?", "") : l, l = o.case_sensitive ? new RegExp(l) : new RegExp(l, "i"), !l.test(s))
        return !1;
      for (var u = s.replace("-", "").toUpperCase(), f = 0, d = 0; d < u.length; d++) {
        var c = u[d];
        f += (c === "X" ? 10 : +c) * (8 - d);
      }
      return f % 11 === 0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Gr, Gr.exports)), Gr.exports;
}
var Kr = { exports: {} }, lt = {}, fu;
function Tf() {
  if (fu) return lt;
  fu = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.iso7064Check = e, lt.luhnCheck = t, lt.reverseMultiplyAndSum = n, lt.verhoeffCheck = a;
  function e(r) {
    for (var i = 10, s = 0; s < r.length - 1; s++)
      i = (parseInt(r[s], 10) + i) % 10 === 0 ? 20 % 11 : (parseInt(r[s], 10) + i) % 10 * 2 % 11;
    return i = i === 1 ? 0 : 11 - i, i === parseInt(r[10], 10);
  }
  function t(r) {
    for (var i = 0, s = !1, o = r.length - 1; o >= 0; o--) {
      if (s) {
        var l = parseInt(r[o], 10) * 2;
        l > 9 ? i += l.toString().split("").map(function(u) {
          return parseInt(u, 10);
        }).reduce(function(u, f) {
          return u + f;
        }, 0) : i += l;
      } else
        i += parseInt(r[o], 10);
      s = !s;
    }
    return i % 10 === 0;
  }
  function n(r, i) {
    for (var s = 0, o = 0; o < r.length; o++)
      s += r[o] * (i - o);
    return s;
  }
  function a(r) {
    for (var i = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], s = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], o = r.split("").reverse().join(""), l = 0, u = 0; u < o.length; u++)
      l = i[l][s[u % 8][parseInt(o[u], 10)]];
    return l === 0;
  }
  return lt;
}
var hu;
function fw() {
  return hu || (hu = 1, (function(e, t) {
    function n(A) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
        return typeof M;
      } : function(M) {
        return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
      }, n(A);
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = Me;
    var a = l(/* @__PURE__ */ G()), r = o(/* @__PURE__ */ Tf()), i = l(/* @__PURE__ */ Cf());
    function s(A) {
      if (typeof WeakMap != "function") return null;
      var M = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap();
      return (s = function(j) {
        return j ? T : M;
      })(A);
    }
    function o(A, M) {
      if (A && A.__esModule) return A;
      if (A === null || n(A) != "object" && typeof A != "function") return { default: A };
      var T = s(M);
      if (T && T.has(A)) return T.get(A);
      var U = { __proto__: null }, j = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var V in A) if (V !== "default" && {}.hasOwnProperty.call(A, V)) {
        var ae = j ? Object.getOwnPropertyDescriptor(A, V) : null;
        ae && (ae.get || ae.set) ? Object.defineProperty(U, V, ae) : U[V] = A[V];
      }
      return U.default = A, T && T.set(A, U), U;
    }
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function u(A) {
      return g(A) || c(A) || d(A) || f();
    }
    function f() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function d(A, M) {
      if (A) {
        if (typeof A == "string") return m(A, M);
        var T = Object.prototype.toString.call(A).slice(8, -1);
        if (T === "Object" && A.constructor && (T = A.constructor.name), T === "Map" || T === "Set") return Array.from(A);
        if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T)) return m(A, M);
      }
    }
    function c(A) {
      if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
    }
    function g(A) {
      if (Array.isArray(A)) return m(A);
    }
    function m(A, M) {
      (M == null || M > A.length) && (M = A.length);
      for (var T = 0, U = new Array(M); T < M; T++) U[T] = A[T];
      return U;
    }
    function v(A) {
      var M = A.slice(0, 2), T = parseInt(A.slice(2, 4), 10);
      T > 40 ? (T -= 40, M = "20".concat(M)) : T > 20 ? (T -= 20, M = "18".concat(M)) : M = "19".concat(M), T < 10 && (T = "0".concat(T));
      var U = "".concat(M, "/").concat(T, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var j = A.split("").map(function(de) {
        return parseInt(de, 10);
      }), V = [2, 4, 8, 5, 10, 9, 7, 3, 6], ae = 0, oe = 0; oe < V.length; oe++)
        ae += j[oe] * V[oe];
      return ae = ae % 11 === 10 ? 0 : ae % 11, ae === j[9];
    }
    function h(A) {
      var M = A.split(""), T = M.filter(function(j, V) {
        return V % 2;
      }).map(function(j) {
        return Number(j) * 2;
      }).join("").split(""), U = M.filter(function(j, V) {
        return !(V % 2);
      }).concat(T).map(function(j) {
        return Number(j);
      }).reduce(function(j, V) {
        return j + V;
      });
      return U % 10 === 0;
    }
    function x(A) {
      A = A.replace(/\W/, "");
      var M = parseInt(A.slice(0, 2), 10);
      if (A.length === 10)
        M < 54 ? M = "20".concat(M) : M = "19".concat(M);
      else {
        if (A.slice(6) === "000")
          return !1;
        if (M < 54)
          M = "19".concat(M);
        else
          return !1;
      }
      M.length === 3 && (M = [M.slice(0, 2), "0", M.slice(2)].join(""));
      var T = parseInt(A.slice(2, 4), 10);
      if (T > 50 && (T -= 50), T > 20) {
        if (parseInt(M, 10) < 2004)
          return !1;
        T -= 20;
      }
      T < 10 && (T = "0".concat(T));
      var U = "".concat(M, "/").concat(T, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      if (A.length === 10 && parseInt(A, 10) % 11 !== 0) {
        var j = parseInt(A.slice(0, 9), 10) % 11;
        if (parseInt(M, 10) < 1986 && j === 10) {
          if (parseInt(A.slice(9), 10) !== 0)
            return !1;
        } else
          return !1;
      }
      return !0;
    }
    function w(A) {
      return r.luhnCheck(A);
    }
    function y(A) {
      for (var M = A.split("").map(function(de) {
        return parseInt(de, 10);
      }), T = [], U = 0; U < M.length - 1; U++) {
        T.push("");
        for (var j = 0; j < M.length - 1; j++)
          M[U] === M[j] && (T[U] += j);
      }
      if (T = T.filter(function(de) {
        return de.length > 1;
      }), T.length !== 2 && T.length !== 3)
        return !1;
      if (T[0].length === 3) {
        for (var V = T[0].split("").map(function(de) {
          return parseInt(de, 10);
        }), ae = 0, oe = 0; oe < V.length - 1; oe++)
          V[oe] + 1 === V[oe + 1] && (ae += 1);
        if (ae === 2)
          return !1;
      }
      return r.iso7064Check(A);
    }
    function _(A) {
      A = A.replace(/\W/, "");
      var M = parseInt(A.slice(4, 6), 10), T = A.slice(6, 7);
      switch (T) {
        case "0":
        case "1":
        case "2":
        case "3":
          M = "19".concat(M);
          break;
        case "4":
        case "9":
          M < 37 ? M = "20".concat(M) : M = "19".concat(M);
          break;
        default:
          if (M < 37)
            M = "20".concat(M);
          else if (M > 58)
            M = "18".concat(M);
          else
            return !1;
          break;
      }
      M.length === 3 && (M = [M.slice(0, 2), "0", M.slice(2)].join(""));
      var U = "".concat(M, "/").concat(A.slice(2, 4), "/").concat(A.slice(0, 2));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var j = A.split("").map(function(de) {
        return parseInt(de, 10);
      }), V = 0, ae = 4, oe = 0; oe < 9; oe++)
        V += j[oe] * ae, ae -= 1, ae === 1 && (ae = 7);
      return V %= 11, V === 1 ? !1 : V === 0 ? j[9] === 0 : j[9] === 11 - V;
    }
    function b(A) {
      for (var M = A.slice(0, 8).split("").map(function(V) {
        return parseInt(V, 10);
      }), T = 0, U = 1; U < M.length; U += 2)
        T += M[U];
      for (var j = 0; j < M.length; j += 2)
        M[j] < 2 ? T += 1 - M[j] : (T += 2 * (M[j] - 2) + 5, M[j] > 4 && (T += 2));
      return String.fromCharCode(T % 26 + 65) === A.charAt(8);
    }
    function S(A) {
      for (var M = A.split("").map(function(j) {
        return parseInt(j, 10);
      }), T = 0, U = 0; U < 8; U++)
        T += M[U] * Math.pow(2, 8 - U);
      return T % 11 % 10 === M[8];
    }
    function I(A) {
      var M = r.reverseMultiplyAndSum(A.split("").slice(0, 7).map(function(T) {
        return parseInt(T, 10);
      }), 8);
      return A.length === 9 && A[8] !== "W" && (M += (A[8].charCodeAt(0) - 64) * 9), M %= 23, M === 0 ? A[7].toUpperCase() === "W" : A[7].toUpperCase() === String.fromCharCode(64 + M);
    }
    var $ = {
      andover: ["10", "12"],
      atlanta: ["60", "67"],
      austin: ["50", "53"],
      brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
      cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
      fresno: ["15", "24"],
      internet: ["20", "26", "27", "45", "46", "47"],
      kansas: ["40", "44"],
      memphis: ["94", "95"],
      ogden: ["80", "90"],
      philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
      sba: ["31"]
    };
    function R() {
      var A = [];
      for (var M in $)
        $.hasOwnProperty(M) && A.push.apply(A, u($[M]));
      return A;
    }
    function L(A) {
      return R().indexOf(A.slice(0, 2)) !== -1;
    }
    function D(A) {
      for (var M = 0, T = A.split(""), U = parseInt(T.pop(), 10), j = 0; j < T.length; j++)
        M += T[9 - j] * (2 + j % 6);
      var V = 11 - M % 11;
      return V === 11 ? V = 0 : V === 10 && (V = 9), U === V;
    }
    function O(A) {
      var M = A.toUpperCase().split("");
      if (isNaN(parseInt(M[0], 10)) && M.length > 1) {
        var T = 0;
        switch (M[0]) {
          case "Y":
            T = 1;
            break;
          case "Z":
            T = 2;
            break;
        }
        M.splice(0, 1, T);
      } else
        for (; M.length < 9; )
          M.unshift(0);
      var U = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      M = M.join("");
      var j = parseInt(M.slice(0, 8), 10) % 23;
      return M[8] === U[j];
    }
    function H(A) {
      var M = A.slice(1, 3), T = A.slice(0, 1);
      switch (T) {
        case "1":
        case "2":
          M = "18".concat(M);
          break;
        case "3":
        case "4":
          M = "19".concat(M);
          break;
        default:
          M = "20".concat(M);
          break;
      }
      var U = "".concat(M, "/").concat(A.slice(3, 5), "/").concat(A.slice(5, 7));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      for (var j = A.split("").map(function(me) {
        return parseInt(me, 10);
      }), V = 0, ae = 1, oe = 0; oe < 10; oe++)
        V += j[oe] * ae, ae += 1, ae === 10 && (ae = 1);
      if (V % 11 === 10) {
        V = 0, ae = 3;
        for (var de = 0; de < 10; de++)
          V += j[de] * ae, ae += 1, ae === 10 && (ae = 1);
        if (V % 11 === 10)
          return j[10] === 0;
      }
      return V % 11 === j[10];
    }
    function E(A) {
      var M = A.slice(4, 6), T = A.slice(6, 7);
      switch (T) {
        case "+":
          M = "18".concat(M);
          break;
        case "-":
          M = "19".concat(M);
          break;
        default:
          M = "20".concat(M);
          break;
      }
      var U = "".concat(M, "/").concat(A.slice(2, 4), "/").concat(A.slice(0, 2));
      if (!(0, i.default)(U, "YYYY/MM/DD"))
        return !1;
      var j = parseInt(A.slice(0, 6) + A.slice(7, 10), 10) % 31;
      if (j < 10)
        return j === parseInt(A.slice(10), 10);
      j -= 10;
      var V = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
      return V[j] === A.slice(10);
    }
    function C(A) {
      if (A.slice(2, 4) !== "00" || A.slice(4, 6) !== "00") {
        var M = "".concat(A.slice(0, 2), "/").concat(A.slice(2, 4), "/").concat(A.slice(4, 6));
        if (!(0, i.default)(M, "YY/MM/DD"))
          return !1;
      }
      var T = 97 - parseInt(A.slice(0, 9), 10) % 97, U = parseInt(A.slice(9, 11), 10);
      return !(T !== U && (T = 97 - parseInt("2".concat(A.slice(0, 9)), 10) % 97, T !== U));
    }
    function N(A) {
      A = A.replace(/\s/g, "");
      var M = parseInt(A.slice(0, 10), 10) % 511, T = parseInt(A.slice(10, 13), 10);
      return M === T;
    }
    function P(A) {
      var M = "".concat(A.slice(0, 4), "/").concat(A.slice(4, 6), "/").concat(A.slice(6, 8));
      return !(0, i.default)(M, "YYYY/MM/DD") || !r.luhnCheck(A.slice(0, 12)) ? !1 : r.verhoeffCheck("".concat(A.slice(0, 11)).concat(A[12]));
    }
    function B(A) {
      return r.iso7064Check(A);
    }
    function k(A) {
      for (var M = A.split("").map(function(j) {
        return parseInt(j, 10);
      }), T = 8, U = 1; U < 9; U++)
        T += M[U] * (U + 1);
      return T % 11 === M[9];
    }
    function F(A) {
      for (var M = !1, T = !1, U = 0; U < 3; U++)
        if (!M && /[AEIOU]/.test(A[U]))
          M = !0;
        else if (!T && M && A[U] === "X")
          T = !0;
        else if (U > 0 && (M && !T && !/[AEIOU]/.test(A[U]) || T && !/X/.test(A[U])))
          return !1;
      return !0;
    }
    function q(A) {
      var M = A.toUpperCase().split("");
      if (!F(M.slice(0, 3)) || !F(M.slice(3, 6)))
        return !1;
      for (var T = [6, 7, 9, 10, 12, 13, 14], U = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
      }, j = 0, V = T; j < V.length; j++) {
        var ae = V[j];
        M[ae] in U && M.splice(ae, 1, U[M[ae]]);
      }
      var oe = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
      }, de = oe[M[8]], me = parseInt(M[9] + M[10], 10);
      me > 40 && (me -= 40), me < 10 && (me = "0".concat(me));
      var Ne = "".concat(M[6]).concat(M[7], "/").concat(de, "/").concat(me);
      if (!(0, i.default)(Ne, "YY/MM/DD"))
        return !1;
      for (var Le = 0, De = 1; De < M.length - 1; De += 2) {
        var st = parseInt(M[De], 10);
        isNaN(st) && (st = M[De].charCodeAt(0) - 65), Le += st;
      }
      for (var ot = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
      }, Ue = 0; Ue < M.length - 1; Ue += 2) {
        var Je = 0;
        if (M[Ue] in ot)
          Je = ot[M[Ue]];
        else {
          var xt = parseInt(M[Ue], 10);
          Je = 2 * xt + 1, xt > 4 && (Je += 2);
        }
        Le += Je;
      }
      return String.fromCharCode(65 + Le % 26) === M[15];
    }
    function z(A) {
      A = A.replace(/\W/, "");
      var M = A.slice(0, 2);
      if (M !== "32") {
        var T = A.slice(2, 4);
        if (T !== "00") {
          var U = A.slice(4, 6);
          switch (A[6]) {
            case "0":
              U = "18".concat(U);
              break;
            case "1":
              U = "19".concat(U);
              break;
            default:
              U = "20".concat(U);
              break;
          }
          var j = "".concat(U, "/").concat(A.slice(2, 4), "/").concat(M);
          if (!(0, i.default)(j, "YYYY/MM/DD"))
            return !1;
        }
        for (var V = 1101, ae = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], oe = 0; oe < A.length - 1; oe++)
          V -= parseInt(A[oe], 10) * ae[oe];
        return parseInt(A[10], 10) === V % 11;
      }
      return !0;
    }
    function X(A) {
      if (A.length !== 9) {
        for (var M = A.toUpperCase().split(""); M.length < 8; )
          M.unshift(0);
        switch (A[7]) {
          case "A":
          case "P":
            if (parseInt(M[6], 10) === 0)
              return !1;
            break;
          default: {
            var T = parseInt(M.join("").slice(0, 5), 10);
            if (T > 32e3)
              return !1;
            var U = parseInt(M.join("").slice(5, 7), 10);
            if (T === U)
              return !1;
          }
        }
      }
      return !0;
    }
    function Y(A) {
      return r.reverseMultiplyAndSum(A.split("").slice(0, 8).map(function(M) {
        return parseInt(M, 10);
      }), 9) % 11 === parseInt(A[8], 10);
    }
    function ee(A) {
      if (A.length === 10) {
        for (var M = [6, 5, 7, 2, 3, 4, 5, 6, 7], T = 0, U = 0; U < M.length; U++)
          T += parseInt(A[U], 10) * M[U];
        return T %= 11, T === 10 ? !1 : T === parseInt(A[9], 10);
      }
      var j = A.slice(0, 2), V = parseInt(A.slice(2, 4), 10);
      V > 80 ? (j = "18".concat(j), V -= 80) : V > 60 ? (j = "22".concat(j), V -= 60) : V > 40 ? (j = "21".concat(j), V -= 40) : V > 20 ? (j = "20".concat(j), V -= 20) : j = "19".concat(j), V < 10 && (V = "0".concat(V));
      var ae = "".concat(j, "/").concat(V, "/").concat(A.slice(4, 6));
      if (!(0, i.default)(ae, "YYYY/MM/DD"))
        return !1;
      for (var oe = 0, de = 1, me = 0; me < A.length - 1; me++)
        oe += parseInt(A[me], 10) * de % 10, de += 2, de > 10 ? de = 1 : de === 5 && (de += 2);
      return oe = 10 - oe % 10, oe === parseInt(A[10], 10);
    }
    function le(A) {
      if (A.length === 11) {
        var M, T;
        if (M = 0, // Reject known invalid CPFs
        A === "11111111111" || A === "22222222222" || A === "33333333333" || A === "44444444444" || A === "55555555555" || A === "66666666666" || A === "77777777777" || A === "88888888888" || A === "99999999999" || A === "00000000000") return !1;
        for (var U = 1; U <= 9; U++) M += parseInt(A.substring(U - 1, U), 10) * (11 - U);
        if (T = M * 10 % 11, T === 10 && (T = 0), T !== parseInt(A.substring(9, 10), 10)) return !1;
        M = 0;
        for (var j = 1; j <= 10; j++) M += parseInt(A.substring(j - 1, j), 10) * (12 - j);
        return T = M * 10 % 11, T === 10 && (T = 0), T === parseInt(A.substring(10, 11), 10);
      }
      if (
        // Reject know invalid CNPJs
        A === "00000000000000" || A === "11111111111111" || A === "22222222222222" || A === "33333333333333" || A === "44444444444444" || A === "55555555555555" || A === "66666666666666" || A === "77777777777777" || A === "88888888888888" || A === "99999999999999"
      )
        return !1;
      for (var V = A.length - 2, ae = A.substring(0, V), oe = A.substring(V), de = 0, me = V - 7, Ne = V; Ne >= 1; Ne--)
        de += ae.charAt(V - Ne) * me, me -= 1, me < 2 && (me = 9);
      var Le = de % 11 < 2 ? 0 : 11 - de % 11;
      if (Le !== parseInt(oe.charAt(0), 10))
        return !1;
      V += 1, ae = A.substring(0, V), de = 0, me = V - 7;
      for (var De = V; De >= 1; De--)
        de += ae.charAt(V - De) * me, me -= 1, me < 2 && (me = 9);
      return Le = de % 11 < 2 ? 0 : 11 - de % 11, Le === parseInt(oe.charAt(1), 10);
    }
    function te(A) {
      var M = 11 - r.reverseMultiplyAndSum(A.split("").slice(0, 8).map(function(T) {
        return parseInt(T, 10);
      }), 9) % 11;
      return M > 9 ? parseInt(A[8], 10) === 0 : M === parseInt(A[8], 10);
    }
    function Z(A) {
      if (A.slice(0, 4) !== "9000") {
        var M = A.slice(1, 3);
        switch (A[0]) {
          case "1":
          case "2":
            M = "19".concat(M);
            break;
          case "3":
          case "4":
            M = "18".concat(M);
            break;
          case "5":
          case "6":
            M = "20".concat(M);
            break;
        }
        var T = "".concat(M, "/").concat(A.slice(3, 5), "/").concat(A.slice(5, 7));
        if (T.length === 8) {
          if (!(0, i.default)(T, "YY/MM/DD"))
            return !1;
        } else if (!(0, i.default)(T, "YYYY/MM/DD"))
          return !1;
        for (var U = A.split("").map(function(oe) {
          return parseInt(oe, 10);
        }), j = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], V = 0, ae = 0; ae < j.length; ae++)
          V += U[ae] * j[ae];
        return V % 11 === 10 ? U[12] === 1 : U[12] === V % 11;
      }
      return !0;
    }
    function J(A) {
      if (A.length === 9) {
        if (A = A.replace(/\W/, ""), A.slice(6) === "000")
          return !1;
        var M = parseInt(A.slice(0, 2), 10);
        if (M > 53)
          return !1;
        M < 10 ? M = "190".concat(M) : M = "19".concat(M);
        var T = parseInt(A.slice(2, 4), 10);
        T > 50 && (T -= 50), T < 10 && (T = "0".concat(T));
        var U = "".concat(M, "/").concat(T, "/").concat(A.slice(4, 6));
        if (!(0, i.default)(U, "YYYY/MM/DD"))
          return !1;
      }
      return !0;
    }
    function K(A) {
      var M = 11 - r.reverseMultiplyAndSum(A.split("").slice(0, 7).map(function(T) {
        return parseInt(T, 10);
      }), 8) % 11;
      return M === 10 ? parseInt(A[7], 10) === 0 : M === parseInt(A[7], 10);
    }
    function Q(A) {
      var M = A.slice(0);
      A.length > 11 && (M = M.slice(2));
      var T = "", U = M.slice(2, 4), j = parseInt(M.slice(4, 6), 10);
      if (A.length > 11)
        T = A.slice(0, 4);
      else if (T = A.slice(0, 2), A.length === 11 && j < 60) {
        var V = (/* @__PURE__ */ new Date()).getFullYear().toString(), ae = parseInt(V.slice(0, 2), 10);
        if (V = parseInt(V, 10), A[6] === "-")
          parseInt("".concat(ae).concat(T), 10) > V ? T = "".concat(ae - 1).concat(T) : T = "".concat(ae).concat(T);
        else if (T = "".concat(ae - 1).concat(T), V - parseInt(T, 10) < 100)
          return !1;
      }
      j > 60 && (j -= 60), j < 10 && (j = "0".concat(j));
      var oe = "".concat(T, "/").concat(U, "/").concat(j);
      if (oe.length === 8) {
        if (!(0, i.default)(oe, "YY/MM/DD"))
          return !1;
      } else if (!(0, i.default)(oe, "YYYY/MM/DD"))
        return !1;
      return r.luhnCheck(A.replace(/\W/, ""));
    }
    function re(A) {
      for (var M = A.split("").map(function(V) {
        return parseInt(V, 10);
      }), T = [-1, 5, 7, 9, 4, 6, 10, 5, 7], U = 0, j = 0; j < T.length; j++)
        U += M[j] * T[j];
      return U % 11 === 10 ? M[9] === 0 : M[9] === U % 11;
    }
    var ne = {
      "bg-BG": /^\d{10}$/,
      "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
      "de-AT": /^\d{9}$/,
      "de-DE": /^[1-9]\d{10}$/,
      "dk-DK": /^\d{6}-{0,1}\d{4}$/,
      "el-CY": /^[09]\d{7}[A-Z]$/,
      "el-GR": /^([0-4]|[7-9])\d{8}$/,
      "en-CA": /^\d{9}$/,
      "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
      "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
      "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
      "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
      "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
      "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
      "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
      "fr-BE": /^\d{11}$/,
      "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
      // Conforms both to official spec and provided example
      "fr-LU": /^\d{13}$/,
      "hr-HR": /^\d{11}$/,
      "hu-HU": /^8\d{9}$/,
      "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
      "lv-LV": /^\d{6}-{0,1}\d{5}$/,
      // Conforms both to DG TAXUD spec and original research
      "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
      "nl-NL": /^\d{9}$/,
      "pl-PL": /^\d{10,11}$/,
      "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
      "pt-PT": /^\d{9}$/,
      "ro-RO": /^\d{13}$/,
      "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
      "sl-SI": /^[1-9]\d{7}$/,
      "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
      "uk-UA": /^\d{10}$/
    };
    ne["lb-LU"] = ne["fr-LU"], ne["lt-LT"] = ne["et-EE"], ne["nl-BE"] = ne["fr-BE"], ne["fr-CA"] = ne["en-CA"];
    var ue = {
      "bg-BG": v,
      "cs-CZ": x,
      "de-AT": w,
      "de-DE": y,
      "dk-DK": _,
      "el-CY": b,
      "el-GR": S,
      "en-CA": h,
      "en-IE": I,
      "en-US": L,
      "es-AR": D,
      "es-ES": O,
      "et-EE": H,
      "fi-FI": E,
      "fr-BE": C,
      "fr-FR": N,
      "fr-LU": P,
      "hr-HR": B,
      "hu-HU": k,
      "it-IT": q,
      "lv-LV": z,
      "mt-MT": X,
      "nl-NL": Y,
      "pl-PL": ee,
      "pt-BR": le,
      "pt-PT": te,
      "ro-RO": Z,
      "sk-SK": J,
      "sl-SI": K,
      "sv-SE": Q,
      "uk-UA": re
    };
    ue["lb-LU"] = ue["fr-LU"], ue["lt-LT"] = ue["et-EE"], ue["nl-BE"] = ue["fr-BE"], ue["fr-CA"] = ue["en-CA"];
    var ge = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g, xe = {
      "de-AT": ge,
      "de-DE": /[\/\\]/g,
      "fr-BE": ge
    };
    xe["nl-BE"] = xe["fr-BE"];
    function Me(A) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
      (0, a.default)(A);
      var T = A.slice(0);
      if (M in ne)
        return M in xe && (T = T.replace(xe[M], "")), ne[M].test(T) ? M in ue ? ue[M](T) : !0 : !1;
      throw new Error("Invalid locale '".concat(M, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Kr, Kr.exports)), Kr.exports;
}
var Ct = {}, pu;
function hw() {
  if (pu) return Ct;
  pu = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = a, Ct.locales = void 0;
  var e = t(/* @__PURE__ */ G());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = {
    "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
    "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
    "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
    "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
    "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
    "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
    "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
    "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-TN": /^(\+?216)?[2459]\d{7}$/,
    "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
    "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
    "ca-AD": /^(\+376)?[346]\d{5}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
    "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
    "de-LU": /^(\+352)?((6\d1)\d{6})$/,
    "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
    "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-GG": /^(\+?44|0)1481\d{6}$/,
    "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    "en-GY": /^(\+592|0)6\d{6}$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
    "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
    "en-JM": /^(\+?876)?\d{7}$/,
    "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
    "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
    "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
    "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    "en-MU": /^(\+?230|0)?\d{8}$/,
    "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
    "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
    "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
    "en-PH": /^(09|\+639)\d{9}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-SG": /^(\+65)?[3689]\d{7}$/,
    "en-SL": /^(\+?232|0)\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "en-ZW": /^(\+263)[0-9]{9}$/,
    "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
    "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
    "es-BO": /^(\+?591)?(6|7)\d{7}$/,
    "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    "es-CR": /^(\+506)?[2-8]\d{7}$/,
    "es-CU": /^(\+53|0053)?5\d{7}$/,
    "es-DO": /^(\+?1)?8[024]9\d{7}$/,
    "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
    "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    "es-ES": /^(\+?34)?[6|7]\d{8}$/,
    "es-PE": /^(\+?51)?9\d{8}$/,
    "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
    "es-NI": /^(\+?505)\d{7,8}$/,
    "es-PA": /^(\+?507)\d{7,8}$/,
    "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
    "es-SV": /^(\+?503)?[67]\d{7}$/,
    "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
    "es-VE": /^(\+?58)?(2|4)\d{9}$/,
    "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "fr-BF": /^(\+226|0)[67]\d{7}$/,
    "fr-BJ": /^(\+229)\d{8}$/,
    "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
    "fr-CM": /^(\+?237)6[0-9]{8}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
    "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
    "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
    "fr-PF": /^(\+?689)?8[789]\d{6}$/,
    "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
    "fr-WF": /^(\+681)?\d{6}$/,
    "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    "ir-IR": /^(\+98|0)?9\d{9}$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
    "kk-KZ": /^(\+?7|8)?7\d{9}$/,
    "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "lv-LV": /^(\+?371)2\d{7}$/,
    "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
    "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "ne-NP": /^(\+?977)?9[78]\d{8}$/,
    "nl-BE": /^(\+?32|0)4\d{8}$/,
    "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "pt-AO": /^(\+244)\d{9}$/,
    "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
    "sq-AL": /^(\+355|0)6[789]\d{6}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
    "th-TH": /^(\+66|66|0)\d{9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "tk-TM": /^(\+993|993|8)\d{8}$/,
    "uk-UA": /^(\+?38|8)?0\d{9}$/,
    "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
    "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
  };
  n["en-CA"] = n["en-US"], n["fr-CA"] = n["en-CA"], n["fr-BE"] = n["nl-BE"], n["zh-HK"] = n["en-HK"], n["zh-MO"] = n["en-MO"], n["ga-IE"] = n["en-IE"], n["fr-CH"] = n["de-CH"], n["it-CH"] = n["fr-CH"];
  function a(r, i, s) {
    if ((0, e.default)(r), s && s.strictMode && !r.startsWith("+"))
      return !1;
    if (Array.isArray(i))
      return i.some(function(u) {
        if (n.hasOwnProperty(u)) {
          var f = n[u];
          if (f.test(r))
            return !0;
        }
        return !1;
      });
    if (i in n)
      return n[i].test(r);
    if (!i || i === "any") {
      for (var o in n)
        if (n.hasOwnProperty(o)) {
          var l = n[o];
          if (l.test(r))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(i, "'"));
  }
  return Ct.locales = Object.keys(n), Ct;
}
var Yr = { exports: {} }, gu;
function pw() {
  return gu || (gu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^(0x)[0-9a-f]{40}$/i;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Yr, Yr.exports)), Yr.exports;
}
var Xr = { exports: {} }, mu;
function gw() {
  return mu || (mu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = r(/* @__PURE__ */ Re()), a = r(/* @__PURE__ */ G());
    function r(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function i(l) {
      var u = "\\d{".concat(l.digits_after_decimal[0], "}");
      l.digits_after_decimal.forEach(function(w, y) {
        y !== 0 && (u = "".concat(u, "|\\d{").concat(w, "}"));
      });
      var f = "(".concat(l.symbol.replace(/\W/, function(w) {
        return "\\".concat(w);
      }), ")").concat(l.require_symbol ? "" : "?"), d = "-?", c = "[1-9]\\d*", g = "[1-9]\\d{0,2}(\\".concat(l.thousands_separator, "\\d{3})*"), m = ["0", c, g], v = "(".concat(m.join("|"), ")?"), h = "(\\".concat(l.decimal_separator, "(").concat(u, "))").concat(l.require_decimal ? "" : "?"), x = v + (l.allow_decimal || l.require_decimal ? h : "");
      return l.allow_negatives && !l.parens_for_negatives && (l.negative_sign_after_digits ? x += d : l.negative_sign_before_digits && (x = d + x)), l.allow_negative_sign_placeholder ? x = "( (?!\\-))?".concat(x) : l.allow_space_after_symbol ? x = " ?".concat(x) : l.allow_space_after_digits && (x += "( (?!$))?"), l.symbol_after_digits ? x += f : x = f + x, l.allow_negatives && (l.parens_for_negatives ? x = "(\\(".concat(x, "\\)|").concat(x, ")") : l.negative_sign_before_digits || l.negative_sign_after_digits || (x = d + x)), new RegExp("^(?!-? )(?=.*\\d)".concat(x, "$"));
    }
    var s = {
      symbol: "$",
      require_symbol: !1,
      allow_space_after_symbol: !1,
      symbol_after_digits: !1,
      allow_negatives: !0,
      parens_for_negatives: !1,
      negative_sign_before_digits: !1,
      negative_sign_after_digits: !1,
      allow_negative_sign_placeholder: !1,
      thousands_separator: ",",
      decimal_separator: ".",
      allow_decimal: !0,
      require_decimal: !1,
      digits_after_decimal: [2],
      allow_space_after_digits: !1
    };
    function o(l, u) {
      return (0, a.default)(l), u = (0, n.default)(u, s), i(u).test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Xr, Xr.exports)), Xr.exports;
}
var Jr = { exports: {} }, vu;
function mw() {
  return vu || (vu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = s;
    var n = a(/* @__PURE__ */ G());
    function a(o) {
      return o && o.__esModule ? o : { default: o };
    }
    var r = /^(bc1)[a-z0-9]{25,39}$/, i = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
    function s(o) {
      return (0, n.default)(o), r.test(o) || i.test(o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Jr, Jr.exports)), Jr.exports;
}
var Nt = {}, xu;
function vw() {
  if (xu) return Nt;
  xu = 1, Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.isFreightContainerID = void 0, Nt.isISO6346 = r;
  var e = t(/* @__PURE__ */ G());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/, a = /^[0-9]$/;
  function r(i) {
    if ((0, e.default)(i), i = i.toUpperCase(), !n.test(i)) return !1;
    if (i.length === 11) {
      for (var s = 0, o = 0; o < i.length - 1; o++)
        if (a.test(i[o]))
          s += i[o] * Math.pow(2, o);
        else {
          var l = void 0, u = i.charCodeAt(o) - 55;
          u < 11 ? l = u : u >= 11 && u <= 20 ? l = 12 + u % 11 : u >= 21 && u <= 30 ? l = 23 + u % 21 : l = 34 + u % 31, s += l * Math.pow(2, o);
        }
      var f = s % 11;
      return Number(i[i.length - 1]) === f;
    }
    return !0;
  }
  return Nt.isFreightContainerID = r, Nt;
}
var Qr = { exports: {} }, yu;
function xw() {
  return yu || (yu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
    function i(s) {
      return (0, n.default)(s), r.has(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Qr, Qr.exports)), Qr.exports;
}
var ea = { exports: {} }, _u;
function yw() {
  return _u || (_u = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ G());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, s = function(u) {
      var f = u.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
      if (f) {
        var d = Number(f[1]), c = Number(f[2]);
        return d % 4 === 0 && d % 100 !== 0 || d % 400 === 0 ? c <= 366 : c <= 365;
      }
      var g = u.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number), m = g[1], v = g[2], h = g[3], x = v && "0".concat(v).slice(-2), w = h && "0".concat(h).slice(-2), y = new Date("".concat(m, "-").concat(x || "01", "-").concat(w || "01"));
      return v && h ? y.getUTCFullYear() === m && y.getUTCMonth() + 1 === v && y.getUTCDate() === h : !0;
    };
    function o(l) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (0, n.default)(l);
      var f = u.strictSeparator ? i.test(l) : r.test(l);
      return f && u.strict ? s(l) : f;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ea, ea.exports)), ea.exports;
}
var ta = { exports: {} }, wu;
function _w() {
  return wu || (wu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = x;
    var n = a(/* @__PURE__ */ G());
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var r = /[0-9]{4}/, i = /(0[1-9]|1[0-2])/, s = /([12]\d|0[1-9]|3[01])/, o = /([01][0-9]|2[0-3])/, l = /[0-5][0-9]/, u = /([0-5][0-9]|60)/, f = /(\.[0-9]+)?/, d = new RegExp("[-+]".concat(o.source, ":").concat(l.source)), c = new RegExp("([zZ]|".concat(d.source, ")")), g = new RegExp("".concat(o.source, ":").concat(l.source, ":").concat(u.source).concat(f.source)), m = new RegExp("".concat(r.source, "-").concat(i.source, "-").concat(s.source)), v = new RegExp("".concat(g.source).concat(c.source)), h = new RegExp("^".concat(m.source, "[ tT]").concat(v.source, "$"));
    function x(w) {
      return (0, n.default)(w), h.test(w);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ta, ta.exports)), ta.exports;
}
var na = { exports: {} }, Su;
function ww() {
  return Su || (Su = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
    function i(s) {
      return (0, n.default)(s), r.has(s.toUpperCase());
    }
    e.exports = t.default, e.exports.default = t.default;
  })(na, na.exports)), na.exports;
}
var $t = {}, bu;
function Sw() {
  if (bu) return $t;
  bu = 1, Object.defineProperty($t, "__esModule", {
    value: !0
  }), $t.CurrencyCodes = void 0, $t.default = a;
  var e = t(/* @__PURE__ */ G());
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
  function a(r) {
    return (0, e.default)(r), n.has(r.toUpperCase());
  }
  return $t.CurrencyCodes = n, $t;
}
var ra = { exports: {} }, Au;
function bw() {
  return Au || (Au = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = l;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var i = /^[A-Z2-7]+=*$/, s = /^[A-HJKMNP-TV-Z0-9]+$/, o = {
      crockford: !1
    };
    function l(u, f) {
      if ((0, n.default)(u), f = (0, a.default)(f, o), f.crockford)
        return s.test(u);
      var d = u.length;
      return !!(d % 8 === 0 && i.test(u));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ra, ra.exports)), ra.exports;
}
var aa = { exports: {} }, Eu;
function Aw() {
  return Eu || (Eu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[A-HJ-NP-Za-km-z1-9]*$/;
    function i(s) {
      return (0, n.default)(s), !!r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(aa, aa.exports)), aa.exports;
}
var ia = { exports: {} }, Iu;
function Ew() {
  return Iu || (Iu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ G());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^[a-z]+\/[a-z0-9\-\+\._]+$/i, i = /^[a-z\-]+=[a-z0-9\-]+$/i, s = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
    function o(l) {
      (0, n.default)(l);
      var u = l.split(",");
      if (u.length < 2)
        return !1;
      var f = u.shift().trim().split(";"), d = f.shift();
      if (d.slice(0, 5) !== "data:")
        return !1;
      var c = d.slice(5);
      if (c !== "" && !r.test(c))
        return !1;
      for (var g = 0; g < f.length; g++)
        if (!(g === f.length - 1 && f[g].toLowerCase() === "base64") && !i.test(f[g]))
          return !1;
      for (var m = 0; m < u.length; m++)
        if (!s.test(u[m]))
          return !1;
      return !0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ia, ia.exports)), ia.exports;
}
var sa = { exports: {} }, Mu;
function Iw() {
  return Mu || (Mu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
    function i(s) {
      return (0, n.default)(s), s.indexOf("magnet:?") !== 0 ? !1 : r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(sa, sa.exports)), sa.exports;
}
var oa = { exports: {} }, la = { exports: {} }, ua = { exports: {} }, Cu;
function Lf() {
  return Cu || (Cu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      if ((0, n.default)(i), s) {
        var o = new RegExp("[".concat(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return i.replace(o, "");
      }
      for (var l = i.length - 1; /\s/.test(i.charAt(l)); )
        l -= 1;
      return i.slice(0, l + 1);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ua, ua.exports)), ua.exports;
}
var ca = { exports: {} }, Nu;
function Of() {
  return Nu || (Nu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      (0, n.default)(i);
      var o = s ? new RegExp("^[".concat(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
      return i.replace(o, "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ca, ca.exports)), ca.exports;
}
var $u;
function Bf() {
  return $u || ($u = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ Lf()), a = r(/* @__PURE__ */ Of());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      return (0, n.default)((0, a.default)(s, o), o);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(la, la.exports)), la.exports;
}
var Ru;
function Mw() {
  return Ru || (Ru = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = m;
    var n = i(/* @__PURE__ */ Bf()), a = i(/* @__PURE__ */ Mf()), r = i(/* @__PURE__ */ G());
    function i(v) {
      return v && v.__esModule ? v : { default: v };
    }
    function s(v, h) {
      return u(v) || l(v, h) || d(v, h) || o();
    }
    function o() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function l(v, h) {
      var x = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (x != null) {
        var w, y, _, b, S = [], I = !0, $ = !1;
        try {
          if (_ = (x = x.call(v)).next, h !== 0) for (; !(I = (w = _.call(x)).done) && (S.push(w.value), S.length !== h); I = !0) ;
        } catch (R) {
          $ = !0, y = R;
        } finally {
          try {
            if (!I && x.return != null && (b = x.return(), Object(b) !== b)) return;
          } finally {
            if ($) throw y;
          }
        }
        return S;
      }
    }
    function u(v) {
      if (Array.isArray(v)) return v;
    }
    function f(v, h) {
      var x = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
      if (!x) {
        if (Array.isArray(v) || (x = d(v)) || h) {
          x && (v = x);
          var w = 0, y = function() {
          };
          return { s: y, n: function() {
            return w >= v.length ? { done: !0 } : { done: !1, value: v[w++] };
          }, e: function($) {
            throw $;
          }, f: y };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var _ = !0, b = !1, S;
      return { s: function() {
        x = x.call(v);
      }, n: function() {
        var $ = x.next();
        return _ = $.done, $;
      }, e: function($) {
        b = !0, S = $;
      }, f: function() {
        try {
          !_ && x.return != null && x.return();
        } finally {
          if (b) throw S;
        }
      } };
    }
    function d(v, h) {
      if (v) {
        if (typeof v == "string") return c(v, h);
        var x = Object.prototype.toString.call(v).slice(8, -1);
        if (x === "Object" && v.constructor && (x = v.constructor.name), x === "Map" || x === "Set") return Array.from(v);
        if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)) return c(v, h);
      }
    }
    function c(v, h) {
      (h == null || h > v.length) && (h = v.length);
      for (var x = 0, w = new Array(h); x < h; x++) w[x] = v[x];
      return w;
    }
    function g(v) {
      var h = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), x = {
        cc: "",
        bcc: ""
      }, w = !1, y = v.split("&");
      if (y.length > 4)
        return !1;
      var _ = f(y), b;
      try {
        for (_.s(); !(b = _.n()).done; ) {
          var S = b.value, I = S.split("="), $ = s(I, 2), R = $[0], L = $[1];
          if (R && !h.has(R)) {
            w = !0;
            break;
          }
          L && (R === "cc" || R === "bcc") && (x[R] = L), R && h.delete(R);
        }
      } catch (D) {
        _.e(D);
      } finally {
        _.f();
      }
      return w ? !1 : x;
    }
    function m(v, h) {
      if ((0, r.default)(v), v.indexOf("mailto:") !== 0)
        return !1;
      var x = v.replace("mailto:", "").split("?"), w = s(x, 2), y = w[0], _ = w[1], b = _ === void 0 ? "" : _;
      if (!y && !b)
        return !0;
      var S = g(b);
      return S ? "".concat(y, ",").concat(S.cc, ",").concat(S.bcc).split(",").every(function(I) {
        return I = (0, n.default)(I, " "), I ? (0, a.default)(I, h) : !0;
      }) : !1;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(oa, oa.exports)), oa.exports;
}
var da = { exports: {} }, Du;
function Cw() {
  return Du || (Du = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = o;
    var n = a(/* @__PURE__ */ G());
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var r = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i, i = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i, s = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
    function o(l) {
      return (0, n.default)(l), r.test(l) || i.test(l) || s.test(l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(da, da.exports)), da.exports;
}
var fa = { exports: {} }, Pu;
function Nw() {
  return Pu || (Pu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Re());
    function r(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var i = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/, s = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/, o = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i, l = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i, u = {
      checkDMS: !1
    };
    function f(d, c) {
      if ((0, n.default)(d), c = (0, a.default)(c, u), !d.includes(",")) return !1;
      var g = d.split(",");
      return g[0].startsWith("(") && !g[1].endsWith(")") || g[1].endsWith(")") && !g[0].startsWith("(") ? !1 : c.checkDMS ? o.test(g[0]) && l.test(g[1]) : i.test(g[0]) && s.test(g[1]);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(fa, fa.exports)), fa.exports;
}
var Rt = {}, ku;
function $w() {
  if (ku) return Rt;
  ku = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = o, Rt.locales = void 0;
  var e = t(/* @__PURE__ */ G());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var n = /^\d{3}$/, a = /^\d{4}$/, r = /^\d{5}$/, i = /^\d{6}$/, s = {
    AD: /^AD\d{3}$/,
    AT: a,
    AU: a,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: a,
    BG: a,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: a,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: r,
    DK: a,
    DO: r,
    DZ: r,
    EE: r,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: r,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: a,
    ID: r,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: n,
    IT: r,
    JP: /^\d{3}\-\d{4}$/,
    KE: r,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: a,
    LV: /^LV\-\d{4}$/,
    LK: r,
    MG: n,
    MX: r,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: r,
    NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
    NO: a,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: a,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: i,
    RU: i,
    SA: r,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: i,
    SI: a,
    SK: /^\d{3}\s?\d{2}$/,
    TH: r,
    TN: a,
    TW: /^\d{3}(\d{2})?$/,
    UA: r,
    US: /^\d{5}(-\d{4})?$/,
    ZA: a,
    ZM: r
  };
  Rt.locales = Object.keys(s);
  function o(l, u) {
    if ((0, e.default)(l), u in s)
      return s[u].test(l);
    if (u === "any") {
      for (var f in s)
        if (s.hasOwnProperty(f)) {
          var d = s[f];
          if (d.test(l))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(u, "'"));
  }
  return Rt;
}
var ha = { exports: {} }, Tu;
function Rw() {
  return Tu || (Tu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ha, ha.exports)), ha.exports;
}
var pa = { exports: {} }, Lu;
function Dw() {
  return Lu || (Lu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i) {
      return (0, n.default)(i), i.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(pa, pa.exports)), pa.exports;
}
var ga = { exports: {} }, ma = { exports: {} }, Ou;
function Ff() {
  return Ou || (Ou = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i.replace(new RegExp("[".concat(s, "]+"), "g"), "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ma, ma.exports)), ma.exports;
}
var Bu;
function Pw() {
  return Bu || (Bu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = r(/* @__PURE__ */ G()), a = r(/* @__PURE__ */ Ff());
    function r(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function i(s, o) {
      (0, n.default)(s);
      var l = o ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
      return (0, a.default)(s, l);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ga, ga.exports)), ga.exports;
}
var va = { exports: {} }, Fu;
function kw() {
  return Fu || (Fu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      return (0, n.default)(i), i.replace(new RegExp("[^".concat(s, "]+"), "g"), "");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(va, va.exports)), va.exports;
}
var xa = { exports: {} }, Hu;
function Tw() {
  return Hu || (Hu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var n = a(/* @__PURE__ */ G());
    function a(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function r(i, s) {
      (0, n.default)(i);
      for (var o = i.length - 1; o >= 0; o--)
        if (s.indexOf(i[o]) === -1)
          return !1;
      return !0;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(xa, xa.exports)), xa.exports;
}
var ya = { exports: {} }, Zu;
function Lw() {
  return Zu || (Zu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = f;
    var n = a(/* @__PURE__ */ Re());
    function a(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var r = {
      // The following options apply to all email addresses
      // Lowercases the local part of the email address.
      // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
      // The domain is always lowercased, as per RFC 1035
      all_lowercase: !0,
      // The following conversions are specific to GMail
      // Lowercases the local part of the GMail address (known to be case-insensitive)
      gmail_lowercase: !0,
      // Removes dots from the local part of the email address, as that's ignored by GMail
      gmail_remove_dots: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      gmail_remove_subaddress: !0,
      // Conversts the googlemail.com domain to gmail.com
      gmail_convert_googlemaildotcom: !0,
      // The following conversions are specific to Outlook.com / Windows Live / Hotmail
      // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
      outlookdotcom_lowercase: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      outlookdotcom_remove_subaddress: !0,
      // The following conversions are specific to Yahoo
      // Lowercases the local part of the Yahoo address (known to be case-insensitive)
      yahoo_lowercase: !0,
      // Removes the subaddress (e.g. "-foo") from the email address
      yahoo_remove_subaddress: !0,
      // The following conversions are specific to Yandex
      // Lowercases the local part of the Yandex address (known to be case-insensitive)
      yandex_lowercase: !0,
      // The following conversions are specific to iCloud
      // Lowercases the local part of the iCloud address (known to be case-insensitive)
      icloud_lowercase: !0,
      // Removes the subaddress (e.g. "+foo") from the email address
      icloud_remove_subaddress: !0
    }, i = ["icloud.com", "me.com"], s = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], o = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"], l = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
    function u(d) {
      return d.length > 1 ? d : "";
    }
    function f(d, c) {
      c = (0, n.default)(c, r);
      var g = d.split("@"), m = g.pop(), v = g.join("@"), h = [v, m];
      if (h[1] = h[1].toLowerCase(), h[1] === "gmail.com" || h[1] === "googlemail.com") {
        if (c.gmail_remove_subaddress && (h[0] = h[0].split("+")[0]), c.gmail_remove_dots && (h[0] = h[0].replace(/\.+/g, u)), !h[0].length)
          return !1;
        (c.all_lowercase || c.gmail_lowercase) && (h[0] = h[0].toLowerCase()), h[1] = c.gmail_convert_googlemaildotcom ? "gmail.com" : h[1];
      } else if (i.indexOf(h[1]) >= 0) {
        if (c.icloud_remove_subaddress && (h[0] = h[0].split("+")[0]), !h[0].length)
          return !1;
        (c.all_lowercase || c.icloud_lowercase) && (h[0] = h[0].toLowerCase());
      } else if (s.indexOf(h[1]) >= 0) {
        if (c.outlookdotcom_remove_subaddress && (h[0] = h[0].split("+")[0]), !h[0].length)
          return !1;
        (c.all_lowercase || c.outlookdotcom_lowercase) && (h[0] = h[0].toLowerCase());
      } else if (o.indexOf(h[1]) >= 0) {
        if (c.yahoo_remove_subaddress) {
          var x = h[0].split("-");
          h[0] = x.length > 1 ? x.slice(0, -1).join("-") : x[0];
        }
        if (!h[0].length)
          return !1;
        (c.all_lowercase || c.yahoo_lowercase) && (h[0] = h[0].toLowerCase());
      } else l.indexOf(h[1]) >= 0 ? ((c.all_lowercase || c.yandex_lowercase) && (h[0] = h[0].toLowerCase()), h[1] = "yandex.ru") : c.all_lowercase && (h[0] = h[0].toLowerCase());
      return h.join("@");
    }
    e.exports = t.default, e.exports.default = t.default;
  })(ya, ya.exports)), ya.exports;
}
var _a = { exports: {} }, qu;
function Ow() {
  return qu || (qu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
    function i(s) {
      return (0, n.default)(s), r.test(s);
    }
    e.exports = t.default, e.exports.default = t.default;
  })(_a, _a.exports)), _a.exports;
}
var wa = { exports: {} }, zu;
function Bw() {
  return zu || (zu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var n = a(/* @__PURE__ */ G());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var r = {
      "cs-CZ": function(o) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(o);
      },
      "de-DE": function(o) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(o);
      },
      "de-LI": function(o) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(o);
      },
      "en-IN": function(o) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(o);
      },
      "es-AR": function(o) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(o);
      },
      "fi-FI": function(o) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(o);
      },
      "hu-HU": function(o) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(o);
      },
      "pt-BR": function(o) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(o);
      },
      "pt-PT": function(o) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(o);
      },
      "sq-AL": function(o) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(o);
      },
      "sv-SE": function(o) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(o.trim());
      },
      "en-PK": function(o) {
        return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(o.trim());
      }
    };
    function i(s, o) {
      if ((0, n.default)(s), o in r)
        return r[o](s);
      if (o === "any") {
        for (var l in r) {
          var u = r[l];
          if (u(s))
            return !0;
        }
        return !1;
      }
      throw new Error("Invalid locale '".concat(o, "'"));
    }
    e.exports = t.default, e.exports.default = t.default;
  })(wa, wa.exports)), wa.exports;
}
var Sa = { exports: {} }, Uu;
function Fw() {
  return Uu || (Uu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = g;
    var n = r(/* @__PURE__ */ Re()), a = r(/* @__PURE__ */ G());
    function r(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var i = /^[A-Z]$/, s = /^[a-z]$/, o = /^[0-9]$/, l = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/, u = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: !1,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    };
    function f(m) {
      var v = {};
      return Array.from(m).forEach(function(h) {
        var x = v[h];
        x ? v[h] += 1 : v[h] = 1;
      }), v;
    }
    function d(m) {
      var v = f(m), h = {
        length: m.length,
        uniqueChars: Object.keys(v).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
      };
      return Object.keys(v).forEach(function(x) {
        i.test(x) ? h.uppercaseCount += v[x] : s.test(x) ? h.lowercaseCount += v[x] : o.test(x) ? h.numberCount += v[x] : l.test(x) && (h.symbolCount += v[x]);
      }), h;
    }
    function c(m, v) {
      var h = 0;
      return h += m.uniqueChars * v.pointsPerUnique, h += (m.length - m.uniqueChars) * v.pointsPerRepeat, m.lowercaseCount > 0 && (h += v.pointsForContainingLower), m.uppercaseCount > 0 && (h += v.pointsForContainingUpper), m.numberCount > 0 && (h += v.pointsForContainingNumber), m.symbolCount > 0 && (h += v.pointsForContainingSymbol), h;
    }
    function g(m) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      (0, a.default)(m);
      var h = d(m);
      return v = (0, n.default)(v || {}, u), v.returnScore ? c(h, v) : h.length >= v.minLength && h.lowercaseCount >= v.minLowercase && h.uppercaseCount >= v.minUppercase && h.numberCount >= v.minNumbers && h.symbolCount >= v.minSymbols;
    }
    e.exports = t.default, e.exports.default = t.default;
  })(Sa, Sa.exports)), Sa.exports;
}
var Dt = {}, ju;
function Hw() {
  if (ju) return Dt;
  ju = 1;
  function e(d) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, e(d);
  }
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.default = f, Dt.vatMatchers = void 0;
  var t = i(/* @__PURE__ */ G()), n = r(/* @__PURE__ */ Tf());
  function a(d) {
    if (typeof WeakMap != "function") return null;
    var c = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (a = function(v) {
      return v ? g : c;
    })(d);
  }
  function r(d, c) {
    if (d && d.__esModule) return d;
    if (d === null || e(d) != "object" && typeof d != "function") return { default: d };
    var g = a(c);
    if (g && g.has(d)) return g.get(d);
    var m = { __proto__: null }, v = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var h in d) if (h !== "default" && {}.hasOwnProperty.call(d, h)) {
      var x = v ? Object.getOwnPropertyDescriptor(d, h) : null;
      x && (x.get || x.set) ? Object.defineProperty(m, h, x) : m[h] = d[h];
    }
    return m.default = d, g && g.set(d, m), m;
  }
  function i(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var s = function(c) {
    var g = c.match(/^(AU)?(\d{11})$/);
    if (!g)
      return !1;
    var m = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    c = c.replace(/^AU/, "");
    for (var v = (parseInt(c.slice(0, 1), 10) - 1).toString() + c.slice(1), h = 0, x = 0; x < 11; x++)
      h += m[x] * v.charAt(x);
    return h !== 0 && h % 89 === 0;
  }, o = function(c) {
    var g = function(v) {
      var h = v.pop(), x = [5, 4, 3, 2, 7, 6, 5, 4], w = (11 - v.reduce(function(y, _, b) {
        return y + _ * x[b];
      }, 0) % 11) % 11;
      return h === w;
    };
    return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(c) && g(c.match(/\d/g).map(function(m) {
      return +m;
    }));
  }, l = function(c) {
    var g = c.match(/^(PT)?(\d{9})$/);
    if (!g)
      return !1;
    var m = g[2], v = 11 - n.reverseMultiplyAndSum(m.split("").slice(0, 8).map(function(h) {
      return parseInt(h, 10);
    }), 9) % 11;
    return v > 9 ? parseInt(m[8], 10) === 0 : v === parseInt(m[8], 10);
  }, u = Dt.vatMatchers = {
    /**
     * European Union VAT identification numbers
     */
    AT: function(c) {
      return /^(AT)?U\d{8}$/.test(c);
    },
    BE: function(c) {
      return /^(BE)?\d{10}$/.test(c);
    },
    BG: function(c) {
      return /^(BG)?\d{9,10}$/.test(c);
    },
    HR: function(c) {
      return /^(HR)?\d{11}$/.test(c);
    },
    CY: function(c) {
      return /^(CY)?\w{9}$/.test(c);
    },
    CZ: function(c) {
      return /^(CZ)?\d{8,10}$/.test(c);
    },
    DK: function(c) {
      return /^(DK)?\d{8}$/.test(c);
    },
    EE: function(c) {
      return /^(EE)?\d{9}$/.test(c);
    },
    FI: function(c) {
      return /^(FI)?\d{8}$/.test(c);
    },
    FR: function(c) {
      return /^(FR)?\w{2}\d{9}$/.test(c);
    },
    DE: function(c) {
      return /^(DE)?\d{9}$/.test(c);
    },
    EL: function(c) {
      return /^(EL)?\d{9}$/.test(c);
    },
    HU: function(c) {
      return /^(HU)?\d{8}$/.test(c);
    },
    IE: function(c) {
      return /^(IE)?\d{7}\w{1}(W)?$/.test(c);
    },
    IT: function(c) {
      return /^(IT)?\d{11}$/.test(c);
    },
    LV: function(c) {
      return /^(LV)?\d{11}$/.test(c);
    },
    LT: function(c) {
      return /^(LT)?\d{9,12}$/.test(c);
    },
    LU: function(c) {
      return /^(LU)?\d{8}$/.test(c);
    },
    MT: function(c) {
      return /^(MT)?\d{8}$/.test(c);
    },
    NL: function(c) {
      return /^(NL)?\d{9}B\d{2}$/.test(c);
    },
    PL: function(c) {
      return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(c);
    },
    PT: l,
    RO: function(c) {
      return /^(RO)?\d{2,10}$/.test(c);
    },
    SK: function(c) {
      return /^(SK)?\d{10}$/.test(c);
    },
    SI: function(c) {
      return /^(SI)?\d{8}$/.test(c);
    },
    ES: function(c) {
      return /^(ES)?\w\d{7}[A-Z]$/.test(c);
    },
    SE: function(c) {
      return /^(SE)?\d{12}$/.test(c);
    },
    /**
     * VAT numbers of non-EU countries
     */
    AL: function(c) {
      return /^(AL)?\w{9}[A-Z]$/.test(c);
    },
    MK: function(c) {
      return /^(MK)?\d{13}$/.test(c);
    },
    AU: s,
    BY: function(c) {
      return /^(УНП )?\d{9}$/.test(c);
    },
    CA: function(c) {
      return /^(CA)?\d{9}$/.test(c);
    },
    IS: function(c) {
      return /^(IS)?\d{5,6}$/.test(c);
    },
    IN: function(c) {
      return /^(IN)?\d{15}$/.test(c);
    },
    ID: function(c) {
      return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(c);
    },
    IL: function(c) {
      return /^(IL)?\d{9}$/.test(c);
    },
    KZ: function(c) {
      return /^(KZ)?\d{12}$/.test(c);
    },
    NZ: function(c) {
      return /^(NZ)?\d{9}$/.test(c);
    },
    NG: function(c) {
      return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(c);
    },
    NO: function(c) {
      return /^(NO)?\d{9}MVA$/.test(c);
    },
    PH: function(c) {
      return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(c);
    },
    RU: function(c) {
      return /^(RU)?(\d{10}|\d{12})$/.test(c);
    },
    SM: function(c) {
      return /^(SM)?\d{5}$/.test(c);
    },
    SA: function(c) {
      return /^(SA)?\d{15}$/.test(c);
    },
    RS: function(c) {
      return /^(RS)?\d{9}$/.test(c);
    },
    CH: o,
    TR: function(c) {
      return /^(TR)?\d{10}$/.test(c);
    },
    UA: function(c) {
      return /^(UA)?\d{12}$/.test(c);
    },
    GB: function(c) {
      return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(c);
    },
    UZ: function(c) {
      return /^(UZ)?\d{9}$/.test(c);
    },
    /**
     * VAT numbers of Latin American countries
     */
    AR: function(c) {
      return /^(AR)?\d{11}$/.test(c);
    },
    BO: function(c) {
      return /^(BO)?\d{7}$/.test(c);
    },
    BR: function(c) {
      return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(c);
    },
    CL: function(c) {
      return /^(CL)?\d{8}-\d{1}$/.test(c);
    },
    CO: function(c) {
      return /^(CO)?\d{10}$/.test(c);
    },
    CR: function(c) {
      return /^(CR)?\d{9,12}$/.test(c);
    },
    EC: function(c) {
      return /^(EC)?\d{13}$/.test(c);
    },
    SV: function(c) {
      return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(c);
    },
    GT: function(c) {
      return /^(GT)?\d{7}-\d{1}$/.test(c);
    },
    HN: function(c) {
      return /^(HN)?$/.test(c);
    },
    MX: function(c) {
      return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(c);
    },
    NI: function(c) {
      return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(c);
    },
    PA: function(c) {
      return /^(PA)?$/.test(c);
    },
    PY: function(c) {
      return /^(PY)?\d{6,8}-\d{1}$/.test(c);
    },
    PE: function(c) {
      return /^(PE)?\d{11}$/.test(c);
    },
    DO: function(c) {
      return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(c);
    },
    UY: function(c) {
      return /^(UY)?\d{12}$/.test(c);
    },
    VE: function(c) {
      return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(c);
    }
  };
  function f(d, c) {
    if ((0, t.default)(d), (0, t.default)(c), c in u)
      return u[c](d);
    throw new Error("Invalid country code: '".concat(c, "'"));
  }
  return Dt;
}
var Vu;
function Zw() {
  return Vu || (Vu = 1, (function(e, t) {
    function n(ye) {
      "@babel/helpers - typeof";
      return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Te) {
        return typeof Te;
      } : function(Te) {
        return Te && typeof Symbol == "function" && Te.constructor === Symbol && Te !== Symbol.prototype ? "symbol" : typeof Te;
      }, n(ye);
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = W(/* @__PURE__ */ Ms()), r = W(/* @__PURE__ */ Af()), i = W(/* @__PURE__ */ h_()), s = W(/* @__PURE__ */ p_()), o = W(/* @__PURE__ */ g_()), l = W(/* @__PURE__ */ m_()), u = W(/* @__PURE__ */ v_()), f = W(/* @__PURE__ */ Mf()), d = W(/* @__PURE__ */ x_()), c = W(/* @__PURE__ */ y_()), g = W(/* @__PURE__ */ ri()), m = W(/* @__PURE__ */ __()), v = W(/* @__PURE__ */ Cs()), h = W(/* @__PURE__ */ Cf()), x = W(/* @__PURE__ */ w_()), w = W(/* @__PURE__ */ S_()), y = W(/* @__PURE__ */ b_()), _ = W(/* @__PURE__ */ A_()), b = Qe(/* @__PURE__ */ E_()), S = Qe(/* @__PURE__ */ I_()), I = W(/* @__PURE__ */ M_()), $ = W(/* @__PURE__ */ C_()), R = W(/* @__PURE__ */ N_()), L = W(/* @__PURE__ */ $_()), D = W(/* @__PURE__ */ R_()), O = W(/* @__PURE__ */ D_()), H = W(/* @__PURE__ */ P_()), E = W(/* @__PURE__ */ Nf()), C = W(/* @__PURE__ */ $f()), N = W(/* @__PURE__ */ k_()), P = W(/* @__PURE__ */ T_()), B = W(/* @__PURE__ */ O_()), k = W(/* @__PURE__ */ B_()), F = W(/* @__PURE__ */ Ns()), q = Qe(/* @__PURE__ */ bf()), z = W(/* @__PURE__ */ H_()), X = W(/* @__PURE__ */ Rf()), Y = W(/* @__PURE__ */ Z_()), ee = W(/* @__PURE__ */ q_()), le = W(/* @__PURE__ */ z_()), te = W(/* @__PURE__ */ U_()), Z = W(/* @__PURE__ */ j_()), J = W(/* @__PURE__ */ V_()), K = Qe(/* @__PURE__ */ W_()), Q = W(/* @__PURE__ */ G_()), re = W(/* @__PURE__ */ K_()), ne = W(/* @__PURE__ */ Y_()), ue = W(/* @__PURE__ */ X_()), ge = W(/* @__PURE__ */ J_()), xe = W(/* @__PURE__ */ Q_()), Me = W(/* @__PURE__ */ ew()), A = W(/* @__PURE__ */ If()), M = W(/* @__PURE__ */ tw()), T = W(/* @__PURE__ */ nw()), U = W(/* @__PURE__ */ rw()), j = W(/* @__PURE__ */ aw()), V = W(/* @__PURE__ */ iw()), ae = W(/* @__PURE__ */ kf()), oe = W(/* @__PURE__ */ sw()), de = W(/* @__PURE__ */ ow()), me = W(/* @__PURE__ */ lw()), Ne = W(/* @__PURE__ */ uw()), Le = W(/* @__PURE__ */ cw()), De = W(/* @__PURE__ */ dw()), st = W(/* @__PURE__ */ fw()), ot = Qe(/* @__PURE__ */ hw()), Ue = W(/* @__PURE__ */ pw()), Je = W(/* @__PURE__ */ gw()), xt = W(/* @__PURE__ */ mw()), bn = /* @__PURE__ */ vw(), ai = W(/* @__PURE__ */ xw()), ii = W(/* @__PURE__ */ yw()), si = W(/* @__PURE__ */ _w()), oi = W(/* @__PURE__ */ Df()), li = W(/* @__PURE__ */ ww()), ui = W(/* @__PURE__ */ Sw()), ci = W(/* @__PURE__ */ bw()), di = W(/* @__PURE__ */ Aw()), fi = W(/* @__PURE__ */ Pf()), hi = W(/* @__PURE__ */ Ew()), pi = W(/* @__PURE__ */ Iw()), gi = W(/* @__PURE__ */ Mw()), mi = W(/* @__PURE__ */ Cw()), vi = W(/* @__PURE__ */ Nw()), An = Qe(/* @__PURE__ */ $w()), xi = W(/* @__PURE__ */ Of()), yi = W(/* @__PURE__ */ Lf()), _i = W(/* @__PURE__ */ Bf()), wi = W(/* @__PURE__ */ Rw()), Si = W(/* @__PURE__ */ Dw()), bi = W(/* @__PURE__ */ Pw()), Ai = W(/* @__PURE__ */ kw()), Ei = W(/* @__PURE__ */ Ff()), Ii = W(/* @__PURE__ */ Tw()), En = W(/* @__PURE__ */ Lw()), In = W(/* @__PURE__ */ Ow()), Mn = W(/* @__PURE__ */ Bw()), Mi = W(/* @__PURE__ */ Fw()), Ci = W(/* @__PURE__ */ Hw());
    function Cn(ye) {
      if (typeof WeakMap != "function") return null;
      var Te = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap();
      return (Cn = function(jt) {
        return jt ? je : Te;
      })(ye);
    }
    function Qe(ye, Te) {
      if (ye && ye.__esModule) return ye;
      if (ye === null || n(ye) != "object" && typeof ye != "function") return { default: ye };
      var je = Cn(Te);
      if (je && je.has(ye)) return je.get(ye);
      var et = { __proto__: null }, jt = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var tt in ye) if (tt !== "default" && {}.hasOwnProperty.call(ye, tt)) {
        var yt = jt ? Object.getOwnPropertyDescriptor(ye, tt) : null;
        yt && (yt.get || yt.set) ? Object.defineProperty(et, tt, yt) : et[tt] = ye[tt];
      }
      return et.default = ye, je && je.set(ye, et), et;
    }
    function W(ye) {
      return ye && ye.__esModule ? ye : { default: ye };
    }
    var Ni = "13.12.0", Nn = {
      version: Ni,
      toDate: a.default,
      toFloat: r.default,
      toInt: i.default,
      toBoolean: s.default,
      equals: o.default,
      contains: l.default,
      matches: u.default,
      isEmail: f.default,
      isURL: d.default,
      isMACAddress: c.default,
      isIP: g.default,
      isIPRange: m.default,
      isFQDN: v.default,
      isBoolean: w.default,
      isIBAN: K.default,
      isBIC: Q.default,
      isAbaRouting: _.default,
      isAlpha: b.default,
      isAlphaLocales: b.locales,
      isAlphanumeric: S.default,
      isAlphanumericLocales: S.locales,
      isNumeric: I.default,
      isPassportNumber: $.default,
      isPort: R.default,
      isLowercase: L.default,
      isUppercase: D.default,
      isAscii: H.default,
      isFullWidth: E.default,
      isHalfWidth: C.default,
      isVariableWidth: N.default,
      isMultibyte: P.default,
      isSemVer: B.default,
      isSurrogatePair: k.default,
      isInt: F.default,
      isIMEI: O.default,
      isFloat: q.default,
      isFloatLocales: q.locales,
      isDecimal: z.default,
      isHexadecimal: X.default,
      isOctal: Y.default,
      isDivisibleBy: ee.default,
      isHexColor: le.default,
      isRgbColor: te.default,
      isHSL: Z.default,
      isISRC: J.default,
      isMD5: re.default,
      isHash: ne.default,
      isJWT: ue.default,
      isJSON: ge.default,
      isEmpty: xe.default,
      isLength: Me.default,
      isLocale: y.default,
      isByteLength: A.default,
      isUUID: M.default,
      isMongoId: T.default,
      isAfter: U.default,
      isBefore: j.default,
      isIn: V.default,
      isLuhnNumber: ae.default,
      isCreditCard: oe.default,
      isIdentityCard: de.default,
      isEAN: me.default,
      isISIN: Ne.default,
      isISBN: Le.default,
      isISSN: De.default,
      isMobilePhone: ot.default,
      isMobilePhoneLocales: ot.locales,
      isPostalCode: An.default,
      isPostalCodeLocales: An.locales,
      isEthereumAddress: Ue.default,
      isCurrency: Je.default,
      isBtcAddress: xt.default,
      isISO6346: bn.isISO6346,
      isFreightContainerID: bn.isFreightContainerID,
      isISO6391: ai.default,
      isISO8601: ii.default,
      isRFC3339: si.default,
      isISO31661Alpha2: oi.default,
      isISO31661Alpha3: li.default,
      isISO4217: ui.default,
      isBase32: ci.default,
      isBase58: di.default,
      isBase64: fi.default,
      isDataURI: hi.default,
      isMagnetURI: pi.default,
      isMailtoURI: gi.default,
      isMimeType: mi.default,
      isLatLong: vi.default,
      ltrim: xi.default,
      rtrim: yi.default,
      trim: _i.default,
      escape: wi.default,
      unescape: Si.default,
      stripLow: bi.default,
      whitelist: Ai.default,
      blacklist: Ei.default,
      isWhitelisted: Ii.default,
      normalizeEmail: En.default,
      toString,
      isSlug: In.default,
      isStrongPassword: Mi.default,
      isTaxID: st.default,
      isDate: h.default,
      isTime: x.default,
      isLicensePlate: Mn.default,
      isVAT: Ci.default,
      ibanLocales: K.locales
    };
    t.default = Nn, e.exports = t.default, e.exports.default = t.default;
  })(Bn, Bn.exports)), Bn.exports;
}
var qw = /* @__PURE__ */ Zw();
const zw = /* @__PURE__ */ Qu(qw), Uw = "AutomatedEmailsResponseType", jw = rc({
  dataType: Uw,
  path: "/automated_emails/"
}), Vw = ac({
  method: "POST",
  path: ({ id: e }) => `/automated_emails/${e}/test/`,
  body: ({ email: e, subject: t, lexical: n }) => ({ email: e, subject: t, lexical: n })
}), Ww = ac({
  method: "POST",
  path: ({ id: e }) => `/automated_emails/${e}/preview/`,
  body: ({ subject: e, lexical: t }) => ({ subject: e, lexical: t })
}), Gw = ({
  automatedEmailId: e,
  subject: t,
  lexical: n,
  validateForm: a,
  onClose: r
}) => {
  const { data: i } = Ah(), { mutateAsync: s } = Vw(), [o, l] = fe(i?.email || ""), [u, f] = fe(""), [d, c] = fe("idle"), g = se(null);
  ce(() => () => {
    g.current && clearTimeout(g.current);
  }, []), ce(() => {
    i?.email && l(i.email);
  }, [i?.email]), ce(() => {
    const v = (h) => {
      h.key === "Escape" && (h.stopPropagation(), r());
    };
    return document.addEventListener("keydown", v, !0), () => document.removeEventListener("keydown", v, !0);
  }, [r]);
  const m = async () => {
    if (f(""), !zw.isEmail(o)) {
      f("Please enter a valid email address");
      return;
    }
    if (!a()) {
      f("Please complete the required fields");
      return;
    }
    c("sending");
    try {
      await s({
        id: e,
        email: o,
        subject: t,
        lexical: n
      }), c("sent"), g.current && clearTimeout(g.current), g.current = setTimeout(() => c("idle"), 2e3);
    } catch (v) {
      c("idle");
      let h;
      v instanceof ic && v.data && v.data.errors[0] ? h = v.data.errors[0].context || v.data.errors[0].message : v instanceof Error && (h = v.message), f(h || "Failed to send test email");
    }
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "absolute top-full right-0 z-10 mt-2 w-[260px] rounded border border-grey-300 bg-white p-4 shadow-lg dark:border-grey-950 dark:bg-grey-950", "data-testid": "test-email-dropdown", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ p.jsx("label", { className: "mb-2 block text-sm font-semibold", htmlFor: "test-email-input", children: "Send test email" }),
      /* @__PURE__ */ p.jsx(
        za,
        {
          id: "test-email-input",
          placeholder: "you@yoursite.com",
          value: o,
          onChange: (v) => {
            l(v.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ p.jsx(
      Ee,
      {
        className: "w-full",
        disabled: d === "sending",
        onClick: m,
        children: d === "sent" ? "Sent" : d === "sending" ? "Sending..." : "Send"
      }
    ),
    u && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block text-xs text-destructive", children: u })
  ] });
}, $s = (e, t, n) => cs(t) && !uc(t) && n ? n : e.sender_email || n || "", Kw = (e, t, n, a) => e.sender_reply_to === "newsletter" ? cs(t) ? "" : $s(e, t, a) : e.sender_reply_to === "support" ? n || a || "" : e.sender_reply_to, Yw = (e, t, n, a) => {
  const r = Kw(e, t, n, a);
  return r || (e.sender_reply_to === "newsletter" ? $s(e, t, a) || n || a || "" : n || a || "");
}, rs = {
  free: "member-welcome-email-free",
  paid: "member-welcome-email-paid"
}, at = (e) => e?.trim() || "", zi = (...e) => e.map(at).find(Boolean) || "", Xw = ({
  automatedEmails: e = [],
  config: t,
  defaultEmailAddress: n,
  newsletter: a,
  siteTitle: r,
  supportEmailAddress: i
}) => {
  const s = e.find((I) => I.slug === rs.free), o = e.find((I) => I.slug === rs.paid), l = zi(s?.sender_name, o?.sender_name), u = zi(s?.sender_email, o?.sender_email), f = zi(s?.sender_reply_to, o?.sender_reply_to), d = at(a?.sender_name), c = a ? at($s(a, t, n || void 0)) : "", g = a ? at(Yw(a, t, i || void 0, n || void 0)) : "", m = d || at(r) || "Your site name", v = c || at(n), h = g || at(i) || at(n), x = l || m, w = u || v || "", y = f || h || "", _ = y !== "" && y !== w, b = cs(t), S = uc(t);
  return {
    hasDistinctReplyTo: _,
    replyToEmailInput: f,
    replyToEmailPlaceholder: h,
    resolvedReplyToEmail: y,
    resolvedSenderEmail: w,
    resolvedSenderName: x,
    senderEmailDomain: S ? Ph(t) : null,
    senderEmailInput: u,
    senderEmailPlaceholder: v,
    senderNameInput: l,
    senderNamePlaceholder: m,
    showSenderEmailInput: !b || S
  };
}, Jw = (e) => {
  if (!e)
    return !0;
  try {
    const n = JSON.parse(e)?.root?.children;
    return !n || n.length === 0 || n.length === 1 && n[0].type === "paragraph" && (!n[0].children || n[0].children.length === 0);
  } catch {
    return !0;
  }
}, Hf = (e) => {
  const t = {};
  return e.subject?.trim() || (t.subject = "A subject is required"), Jw(e.lexical) && (t.lexical = "Email content is required"), t;
}, Qw = (e) => {
  if (typeof DOMParser > "u")
    return e;
  const n = new DOMParser().parseFromString(e, "text/html");
  return n.querySelectorAll("a[href]").forEach((a) => {
    a.target = "_blank", a.rel = "noopener noreferrer";
  }), `<!doctype html>${n.documentElement.outerHTML}`;
}, eS = (e) => {
  const t = "Failed to render preview";
  return e instanceof ic && e.data?.errors?.[0] ? e.data.errors[0].context || e.data.errors[0].message || t : e instanceof Error && e.message ? e.message : t;
}, tS = ({ automatedEmailId: e, previewWelcomeEmail: t, setErrors: n }) => {
  const [a, r] = fe({ status: "idle" }), i = se(0), s = () => {
    i.current += 1, r({ status: "idle" }), n({});
  }, o = async (u) => {
    const f = i.current + 1;
    i.current = f;
    const d = Hf(u);
    if (d.lexical) {
      n({ lexical: d.lexical }), r({
        status: "invalid",
        message: d.lexical
      });
      return;
    }
    n({}), r({ status: "loading" });
    try {
      const c = await t({
        id: e,
        subject: u.subject,
        lexical: u.lexical
      });
      if (i.current !== f)
        return;
      const g = c.automated_emails?.[0];
      if (!g?.html || !g?.plaintext || !g?.subject)
        throw new Error("Preview response was incomplete");
      r({
        status: "success",
        preview: {
          ...g,
          html: Qw(g.html)
        }
      });
    } catch (c) {
      if (i.current !== f)
        return;
      r({
        status: "error",
        message: eS(c)
      });
    }
  };
  let l = { status: "loading" };
  return a.status === "success" ? l = { status: "success", html: a.preview.html } : (a.status === "error" || a.status === "invalid") && (l = { status: a.status, message: a.message }), {
    previewFrameState: l,
    previewState: a,
    enterPreview: o,
    exitPreview: s
  };
}, nS = "NewslettersResponseType", rS = Eh({
  dataType: nS,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (e, t) => ({
    ...t,
    page: (e.meta?.pagination.next || 1).toString()
  }),
  returnData: (e) => {
    const { pages: t } = e, n = t.flatMap((r) => r.newsletters), a = t[t.length - 1].meta;
    return {
      newsletters: n,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), aS = (e = []) => {
  const { data: t } = Za(), { data: n } = us(), a = t?.settings || [], r = Ce(() => n?.config || {}, [n]), [i, s, o] = qa(a, ["title", "default_email_address", "support_email_address"]), { data: l } = rS({
    searchParams: {
      filter: "status:active",
      limit: "1"
    }
  }), u = l?.newsletters?.[0];
  return Ce(() => Xw({
    automatedEmails: e,
    config: r,
    defaultEmailAddress: s,
    newsletter: u,
    siteTitle: i,
    supportEmailAddress: o
  }), [e, r, s, u, i, o]);
}, Zf = Be.forwardRef(({ title: e, centeredHeaderContent: t, headerActions: n, children: a, className: r, isEditMode: i = !1 }, s) => /* @__PURE__ */ p.jsxs(
  "div",
  {
    ref: s,
    className: ve(
      "flex h-full w-full flex-col gap-0 overflow-hidden p-0",
      i ? "bg-white" : "bg-gray-100",
      "dark:bg-gray-975",
      r
    ),
    children: [
      /* @__PURE__ */ p.jsxs("div", { className: "sticky top-0 grid shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-gray-200 bg-white px-5 py-3 dark:border-gray-900 dark:bg-gray-950", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "justify-self-start text-xl font-semibold", children: e }),
        /* @__PURE__ */ p.jsx("div", { className: "justify-self-center", children: t }),
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center gap-2 justify-self-end", children: n })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "flex min-h-0 grow flex-col overflow-y-auto [scrollbar-gutter:stable]", children: a })
    ]
  }
));
Zf.displayName = "EmailPreviewModalContent";
const iS = ({ children: e, className: t }) => /* @__PURE__ */ p.jsx("div", { className: ve(
  "relative z-20 isolate mx-auto w-full max-w-[780px] rounded-t-lg border border-b-0 border-gray-200 bg-white px-6 py-4 transition-[max-width,padding] duration-300 ease-out motion-reduce:transition-none dark:border-grey-900 dark:bg-grey-975",
  t
), children: e }), sS = ({ children: e, className: t }) => /* @__PURE__ */ p.jsx("div", { className: ve(
  "flex mx-auto w-full rounded-b-lg transition-[max-width,height,padding] duration-300 ease-out motion-reduce:transition-none dark:border-grey-900 dark:shadow-none grow max-w-[780px]",
  t
), children: e }), oS = ({ initialMode: e = "edit", initialSubject: t, initialLexical: n, onClose: a, onSave: r }) => {
  const { mutateAsync: i } = Ww(), { data: s } = jw(), [o, l] = fe(!1), [u, f] = fe(e), [d, c] = fe(null), [g, m] = fe(!1), v = se(!1), h = se(null), x = se(n || ""), w = se(!1), y = Ih(), _ = s?.automated_emails || [], { resolvedSenderName: b, resolvedSenderEmail: S, resolvedReplyToEmail: I, hasDistinctReplyTo: $ } = aS(_), R = (_.find((K) => K.slug === rs.free) || _[0])?.id || "", { formState: L, saveState: D, updateForm: O, setFormState: H, setErrors: E, handleSave: C, okProps: N, errors: P, clearError: B } = Ap({
    initialState: {
      subject: t || "",
      lexical: n || ""
    },
    savingDelay: 500,
    onSave: async (K) => {
      r({ subject: K.subject, lexical: K.lexical });
    },
    onSaveError: y
  }), k = pe(() => {
    const K = Hf(L);
    return E(K), Object.values(K).every((Q) => !Q);
  }, [L, E]), F = N.label || "Save", { previewFrameState: q, enterPreview: z, exitPreview: X } = tS({
    automatedEmailId: R,
    previewWelcomeEmail: i,
    setErrors: E
  });
  ce(() => {
    e !== "preview" || v.current || (v.current = !0, z(L));
  }, [z, L, e]);
  const Y = D === "unsaved", ee = pe(() => {
    Y ? m(!0) : a();
  }, [Y, a]), le = pe(async () => {
    await C({ fakeWhenUnchanged: !0 });
  }, [C]);
  ce(() => {
    const K = (Q) => {
      h.current && !h.current.contains(Q.target) && l(!1);
    };
    return o && document.addEventListener("mousedown", K), () => {
      document.removeEventListener("mousedown", K);
    };
  }, [o]);
  const te = se(le);
  ce(() => {
    te.current = le;
  }, [le]), ce(() => {
    const K = (Q) => {
      (Q.metaKey || Q.ctrlKey) && Q.key === "s" && (Q.preventDefault(), te.current());
    };
    return window.addEventListener("keydown", K), () => {
      window.removeEventListener("keydown", K);
    };
  }, []);
  const Z = pe((K) => {
    f(K), K === "preview" ? (c(null), z(L)) : (l(!1), c(null), X());
  }, [z, X, L]), J = pe((K) => {
    if (!w.current) {
      x.current = K, H((Q) => ({ ...Q, lexical: K }));
      return;
    }
    K !== x.current ? O((Q) => ({ ...Q, lexical: K })) : H((Q) => ({ ...Q, lexical: K }));
  }, [H, O]);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Fh, { open: !0, onOpenChange: (K) => {
      K || ee();
    }, children: /* @__PURE__ */ p.jsxs(
      Hh,
      {
        "aria-describedby": void 0,
        className: "top-0 left-0 h-[100dvh] w-full max-w-full translate-x-0 translate-y-0 grid-rows-[1fr] gap-0 rounded-none border-0 p-0 shadow-none outline-hidden sm:rounded-none dark:bg-[#151719]",
        onEscapeKeyDown: (K) => {
          K.preventDefault(), K.stopPropagation(), ee();
        },
        children: [
          /* @__PURE__ */ p.jsx(Zh, { className: "sr-only", children: "Edit email" }),
          /* @__PURE__ */ p.jsx(
            Zf,
            {
              centeredHeaderContent: /* @__PURE__ */ p.jsx(
                qh,
                {
                  "data-testid": "email-mode-toggle",
                  value: u,
                  variant: "segmented-sm",
                  onValueChange: (K) => K && Z(K),
                  children: /* @__PURE__ */ p.jsxs(zh, { className: "grid w-[240px] grid-cols-2 bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]", children: [
                    /* @__PURE__ */ p.jsx(Fs, { className: "w-full justify-center data-[state=active]:bg-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black", "data-testid": "email-mode-edit", value: "edit", children: "Email content" }),
                    /* @__PURE__ */ p.jsx(Fs, { className: "w-full justify-center", "data-testid": "email-mode-preview", value: "preview", children: "Preview" })
                  ] })
                }
              ),
              headerActions: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
                /* @__PURE__ */ p.jsx(Ee, { variant: "outline", onClick: ee, children: "Close" }),
                /* @__PURE__ */ p.jsx(
                  Ee,
                  {
                    disabled: N.disabled,
                    onClick: le,
                    children: F
                  }
                )
              ] }),
              isEditMode: u === "edit",
              title: "Edit email",
              children: /* @__PURE__ */ p.jsxs("div", { className: "flex grow flex-col items-center p-6", children: [
                u === "preview" && /* @__PURE__ */ p.jsx(iS, { className: "border-x-0 border-t-0 border-b", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center py-1", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "From:" }),
                    /* @__PURE__ */ p.jsx("div", { className: "min-w-0 grow pr-4 text-sm", children: /* @__PURE__ */ p.jsxs("span", { className: "flex gap-1 truncate whitespace-nowrap", children: [
                      /* @__PURE__ */ p.jsx("span", { children: b }),
                      /* @__PURE__ */ p.jsx("span", { className: "text-gray-500 dark:text-gray-400", children: `<${S}>` })
                    ] }) }),
                    /* @__PURE__ */ p.jsxs("div", { ref: h, className: "relative", children: [
                      /* @__PURE__ */ p.jsxs(Ee, { variant: "outline", onClick: () => l(!o), children: [
                        /* @__PURE__ */ p.jsx(vh, { className: "size-4" }),
                        "Test"
                      ] }),
                      o && /* @__PURE__ */ p.jsx(Gw, { automatedEmailId: R, lexical: L.lexical, subject: L.subject, validateForm: k, onClose: () => l(!1) })
                    ] })
                  ] }),
                  $ && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "Reply-to:" }),
                    /* @__PURE__ */ p.jsx("div", { className: "grow text-sm text-gray-500 dark:text-gray-400", children: I })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ p.jsx("div", { className: "w-20 shrink-0 text-sm font-semibold", children: "Subject:" }),
                    /* @__PURE__ */ p.jsxs("div", { className: "grow", children: [
                      /* @__PURE__ */ p.jsx(
                        za,
                        {
                          className: "w-full",
                          "data-testid": "email-preview-subject",
                          value: d ?? L.subject,
                          onChange: (K) => {
                            const Q = K.target.value;
                            c(Q), O((re) => ({ ...re, subject: Q })), B("subject");
                          }
                        }
                      ),
                      P.subject && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block text-xs text-destructive", children: P.subject })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ p.jsxs(sS, { className: ve(
                  u === "preview" && "shadow-sm bg-white dark:bg-grey-975",
                  u === "edit" && "px-6",
                  u === "edit" && "rounded-lg",
                  u === "edit" && P.lexical && "border border-red-500"
                ), children: [
                  /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: ve(
                        "mx-auto w-full max-w-[600px] pt-10 pb-8 transition-[max-width,padding] duration-300 ease-out motion-reduce:transition-none",
                        u === "preview" && "hidden"
                      ),
                      "data-testid": "email-editor",
                      onFocus: () => {
                        w.current = !0;
                      },
                      children: /* @__PURE__ */ p.jsx(
                        d_,
                        {
                          className: "automation-email-editor",
                          placeholder: "Write your email content...",
                          value: L.lexical,
                          onChange: J
                        }
                      )
                    }
                  ),
                  u === "preview" && /* @__PURE__ */ p.jsx(f_, { previewState: q })
                ] }),
                u === "edit" && P.lexical && /* @__PURE__ */ p.jsx("span", { className: "mt-2 block max-w-[740px] text-xs text-destructive", children: P.lexical })
              ] })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ p.jsx(Jt, { open: g, onOpenChange: m, children: /* @__PURE__ */ p.jsxs(Qt, { children: [
      /* @__PURE__ */ p.jsxs(en, { children: [
        /* @__PURE__ */ p.jsx(tn, { children: "Discard changes?" }),
        /* @__PURE__ */ p.jsx(nn, { children: "Your changes to this email haven't been saved." })
      ] }),
      /* @__PURE__ */ p.jsxs(rn, { children: [
        /* @__PURE__ */ p.jsx(an, { children: "Keep editing" }),
        /* @__PURE__ */ p.jsx(
          Ee,
          {
            variant: "destructive",
            onClick: () => {
              m(!1), a();
            },
            children: "Discard"
          }
        )
      ] })
    ] }) })
  ] });
}, lS = 180, uS = [1.5, 1, 0.75, 0.5, 0.25], cS = () => {
  const [e, t] = fe(!1), { fitView: n, zoomIn: a, zoomOut: r, zoomTo: i } = ti(), { zoom: s } = Ny(), o = { duration: lS }, l = Math.round(s * 100), u = (d) => {
    t(!1), i(d, o);
  }, f = () => {
    t(!1), n(o);
  };
  return /* @__PURE__ */ p.jsxs(
    Zy,
    {
      className: "gap-1 overflow-hidden rounded-md bg-surface-elevated p-0.5 text-foreground shadow-sm",
      orientation: "horizontal",
      showFitView: !1,
      showInteractive: !1,
      showZoom: !1,
      style: { bottom: 24, left: 24 },
      children: [
        /* @__PURE__ */ p.jsx(
          Ee,
          {
            "aria-label": "Zoom out",
            className: "rounded-sm text-text-secondary hover:text-foreground",
            size: "icon",
            title: "Zoom out",
            type: "button",
            variant: "ghost",
            onClick: () => {
              r(o);
            },
            children: /* @__PURE__ */ p.jsx(ec, { className: "size-5", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ p.jsxs(pp, { open: e, onOpenChange: t, children: [
          /* @__PURE__ */ p.jsx(gp, { asChild: !0, children: /* @__PURE__ */ p.jsxs(
            Ee,
            {
              "aria-label": `Zoom level ${ba(l)}%`,
              className: "h-9 min-w-14 rounded-sm px-2 font-semibold",
              type: "button",
              variant: "ghost",
              children: [
                ba(l),
                "%"
              ]
            }
          ) }),
          /* @__PURE__ */ p.jsxs(mp, { align: "center", className: "w-40", side: "top", sideOffset: 12, children: [
            uS.map((d) => {
              const c = Math.round(d * 100), g = Math.abs(s - d) < 0.01;
              return /* @__PURE__ */ p.jsxs(qs, { onSelect: () => u(d), children: [
                ba(c),
                "%",
                g && /* @__PURE__ */ p.jsx(vp, { children: /* @__PURE__ */ p.jsx(dc, { className: "size-4 text-text-secondary", strokeWidth: 1.5 }) })
              ] }, d);
            }),
            /* @__PURE__ */ p.jsx(xp, {}),
            /* @__PURE__ */ p.jsx(qs, { onSelect: f, children: "Fit to view" })
          ] })
        ] }),
        /* @__PURE__ */ p.jsx(
          Ee,
          {
            "aria-label": "Zoom in",
            className: "rounded-sm text-text-secondary hover:text-foreground",
            size: "icon",
            title: "Zoom in",
            type: "button",
            variant: "ghost",
            onClick: () => {
              a(o);
            },
            children: /* @__PURE__ */ p.jsx(Ha, { className: "size-5", strokeWidth: 1.5 })
          }
        )
      ]
    }
  );
}, We = "__trigger__", ft = "__tail__", dS = ({ sourceId: e, targetId: t }) => ({
  previousActionId: e === We ? void 0 : e,
  nextActionId: t === ft ? void 0 : t
}), fS = {
  background: "transparent",
  border: "none",
  height: 0,
  minHeight: 0,
  minWidth: 0,
  opacity: 0,
  pointerEvents: "none",
  width: 0
}, mn = ({ type: e, position: t }) => /* @__PURE__ */ p.jsx(gn, { isConnectable: !1, position: t, style: fS, type: e }), qf = ({ children: e, className: t, data: n }) => {
  const a = se(!1);
  return /* @__PURE__ */ p.jsxs(i0, { onOpenChange: (r) => {
    r || (a.current = !1);
  }, children: [
    /* @__PURE__ */ p.jsx(s0, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      "button",
      {
        "aria-invalid": !!n.errorMessage,
        "aria-label": n.value ? `${n.label}: ${n.value}` : n.label,
        "aria-pressed": n.selected,
        className: ve(
          "flex w-64 items-center gap-3 rounded-lg border border-transparent bg-surface-elevated p-3 text-left text-sm text-foreground shadow-sm transition-all focus-visible:border-border-strong focus-visible:outline-none",
          (n.errorMessage || n.warningMessage) && "items-start",
          !n.selected && "hover:border-border-strong",
          n.selected && !n.errorMessage && "border-gray-700 shadow-[inset_0_0_0_1px_var(--color-gray-700),0_1px_2px_0_rgb(0_0_0_/_0.05)]",
          n.errorMessage && "border-destructive",
          !n.errorMessage && n.warningMessage && "border-yellow-600",
          n.isNew && "animate-in fade-in-0 zoom-in-90 duration-250 ease-out motion-reduce:animate-none",
          t
        ),
        type: "button",
        onClick: (r) => {
          if (r.stopPropagation(), r.button !== 0 || a.current) {
            a.current = !1;
            return;
          }
          n.onSelect();
        },
        onContextMenu: (r) => {
          a.current = !0, r.stopPropagation();
        },
        onPointerDown: (r) => {
          r.button === 2 && r.stopPropagation();
        },
        children: e
      }
    ) }),
    /* @__PURE__ */ p.jsx(
      Hc,
      {
        className: "w-44",
        onClick: (r) => r.stopPropagation(),
        onPointerDown: (r) => r.stopPropagation(),
        children: n.contextMenuItems.map((r) => {
          if (r.type === "separator")
            return /* @__PURE__ */ p.jsx(qc, {}, r.id);
          const i = r.icon;
          return /* @__PURE__ */ p.jsxs(Zc, { variant: r.variant, onSelect: r.onSelect, children: [
            i && /* @__PURE__ */ p.jsx(i, { className: "size-4" }),
            r.label
          ] }, r.label);
        })
      }
    )
  ] });
}, zf = ({ data: e }) => {
  const t = e.icon, n = e.errorMessage || e.warningMessage;
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: ve("flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", n && "mt-[3px]"), children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 flex-col text-left", children: [
      /* @__PURE__ */ p.jsx("span", { className: "text-sm text-text-secondary", children: e.label }),
      e.value && /* @__PURE__ */ p.jsx("span", { className: ve("truncate text-base font-medium", e.isPlaceholderValue && "opacity-50"), children: e.value }),
      e.errorMessage && /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-xs text-destructive", children: e.errorMessage }),
      !e.errorMessage && e.warningMessage && /* @__PURE__ */ p.jsx("span", { className: "mt-1 text-xs text-yellow-600", children: e.warningMessage })
    ] })
  ] });
}, Uf = Be.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(qf, { data: e, children: [
  /* @__PURE__ */ p.jsx(zf, { data: e }),
  /* @__PURE__ */ p.jsx(mn, { position: ie.Bottom, type: "source" })
] }));
Uf.displayName = "TriggerNode";
const jf = Be.memo(({ data: e }) => /* @__PURE__ */ p.jsxs(qf, { data: e, children: [
  /* @__PURE__ */ p.jsx(mn, { position: ie.Top, type: "target" }),
  /* @__PURE__ */ p.jsx(zf, { data: e }),
  /* @__PURE__ */ p.jsx(mn, { position: ie.Bottom, type: "source" })
] }));
jf.displayName = "StepNode";
const hS = ({ data: e }) => {
  const [t, n] = fe(!1), a = (i) => {
    n(!1), e.onPick(i, e.anchor);
  }, r = "flex h-12 w-64 items-center justify-center rounded-lg border border-dashed border-border-default bg-surface-page transition-colors hover:border-border-strong focus-visible:border-border-strong focus-visible:outline-none";
  return e.disabled ? /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "flex h-12 w-64 items-center justify-center rounded-lg border border-border-default bg-[repeating-linear-gradient(135deg,var(--color-white)_0,var(--color-white)_12px,var(--color-gray-100)_12px,var(--color-gray-100)_24px)] text-sm font-medium text-text-secondary",
      "data-testid": "step-limit-tail-node",
      children: [
        /* @__PURE__ */ p.jsx(mn, { position: ie.Top, type: "target" }),
        /* @__PURE__ */ p.jsx(xh, { className: "mr-2 size-4", strokeWidth: 1.5 }),
        e.disabledReason
      ]
    }
  ) : /* @__PURE__ */ p.jsxs(sc, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ p.jsxs(
      oc,
      {
        "aria-label": "Add step",
        className: ve(r, "cursor-pointer"),
        "data-testid": "add-step-tail-button",
        children: [
          /* @__PURE__ */ p.jsx(mn, { position: ie.Top, type: "target" }),
          /* @__PURE__ */ p.jsx(Ha, { className: "size-5 text-text-secondary", strokeWidth: 1.5 })
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(lc, { align: "center", className: "border-0 p-0 shadow-lg", side: "top", sideOffset: 12, children: /* @__PURE__ */ p.jsx(zc, { onPick: a }) })
  ] });
}, pS = {
  trigger: Uf,
  step: jf,
  tail: hS
}, Vf = (e) => {
  if (e <= 0)
    throw new Error("Wait time must be a positive number of hours.");
  if (e % 24 === 0) {
    const t = e / 24;
    return t === 1 ? "1 day" : `${t} days`;
  }
  return e === 1 ? "1 hour" : `${e} hours`;
}, Na = 30, gS = /^\d+$/, Ui = (e) => {
  const t = Number(e);
  return !gS.test(e) || !Number.isInteger(t) || t < 1 || t > Na ? null : t;
}, Wf = ({ children: e, htmlFor: t, label: n }) => /* @__PURE__ */ p.jsxs(h0, { children: [
  /* @__PURE__ */ p.jsx(p0, { className: "text-sm font-medium text-text-secondary", htmlFor: t, children: n }),
  e
] }), Gf = ({ onClick: e }) => /* @__PURE__ */ p.jsxs(
  Ee,
  {
    className: "w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
    type: "button",
    variant: "outline",
    onClick: e,
    children: [
      /* @__PURE__ */ p.jsx(nc, { className: "size-4" }),
      "Delete step"
    ]
  }
), mS = {
  free: "Free",
  paid: "Paid"
}, vS = ({ memberTiers: e }) => {
  const t = e.map((n) => mS[n]).join(", ");
  return /* @__PURE__ */ p.jsx("div", { className: "flex flex-col gap-5", children: t && /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ p.jsx("span", { className: "text-sm font-medium text-text-secondary", children: "Members" }),
    /* @__PURE__ */ p.jsx("span", { className: "text-base text-foreground", children: t })
  ] }) });
}, xS = ({ action: e, onUpdate: t, onDelete: n }) => {
  if (e.data.wait_hours % 24 !== 0)
    throw new Error(`WaitSidebarBody: wait_hours must be a multiple of 24, received ${e.data.wait_hours}`);
  const a = e.data.wait_hours / 24, [r, i] = fe(String(a)), [s, o] = fe(!1), l = Number(r), u = Ui(r) !== null, f = s && !u, d = (m) => {
    const v = m * 24;
    v !== e.data.wait_hours && t(v);
  }, c = (m) => {
    const v = Ui(r);
    if (v === null)
      return;
    const h = Math.min(Na, Math.max(1, v + m));
    i(String(h)), d(h);
  }, g = (m) => {
    const v = m.target.value;
    i(v);
    const h = Ui(v);
    h !== null && d(h);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
    /* @__PURE__ */ p.jsxs(Wf, { htmlFor: "automation-wait-days", label: "Wait for", children: [
      /* @__PURE__ */ p.jsxs(
        m0,
        {
          "aria-label": "Wait duration in days",
          className: "h-(--control-height)",
          "data-disabled": f ? "true" : void 0,
          children: [
            /* @__PURE__ */ p.jsx(
              w0,
              {
                "aria-describedby": f ? "automation-wait-days-error" : void 0,
                "aria-invalid": f,
                className: "w-10 min-w-10 flex-none pr-1 font-mono tabular-nums",
                id: "automation-wait-days",
                inputMode: "numeric",
                value: r,
                onBlur: () => o(!0),
                onChange: g,
                onFocus: () => o(!1)
              }
            ),
            /* @__PURE__ */ p.jsx(_0, { className: "mr-auto", children: l === 1 ? "day" : "days" }),
            /* @__PURE__ */ p.jsxs(x0, { align: "inline-end", className: "gap-0.5 pr-2", children: [
              /* @__PURE__ */ p.jsx(
                Gs,
                {
                  "aria-label": "Decrease wait by one day",
                  disabled: !u || l <= 1,
                  size: "icon-xs",
                  title: "Decrease wait by one day",
                  onClick: () => c(-1),
                  children: /* @__PURE__ */ p.jsx(ec, { className: "size-4" })
                }
              ),
              /* @__PURE__ */ p.jsx(
                Gs,
                {
                  "aria-label": "Increase wait by one day",
                  disabled: !u || l >= Na,
                  size: "icon-xs",
                  title: "Increase wait by one day",
                  onClick: () => c(1),
                  children: /* @__PURE__ */ p.jsx(Ha, { className: "size-4" })
                }
              )
            ] })
          ]
        }
      ),
      f && /* @__PURE__ */ p.jsxs(g0, { className: "text-xs", id: "automation-wait-days-error", children: [
        "Enter a delay between 1 and ",
        ba(Na),
        " days"
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsx(Gf, { onClick: n }) })
  ] });
}, yS = ({ action: e, onUpdateSubject: t, onEditEmail: n, onDelete: a }) => {
  const r = se(null);
  return ce(() => {
    r.current?.focus({ preventScroll: !0 });
  }, [e.id]), /* @__PURE__ */ p.jsxs("div", { className: "flex flex-1 flex-col gap-5", children: [
    /* @__PURE__ */ p.jsx(Wf, { label: "Subject line", children: /* @__PURE__ */ p.jsx(
      za,
      {
        ref: r,
        placeholder: "Subject line",
        value: e.data.email_subject,
        onChange: (i) => t(i.target.value)
      }
    ) }),
    /* @__PURE__ */ p.jsxs(
      Ee,
      {
        className: "w-full",
        type: "button",
        variant: "outline",
        onClick: n,
        children: [
          /* @__PURE__ */ p.jsx(fc, { className: "size-4" }),
          "Edit email content"
        ]
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ p.jsx(Gf, { onClick: a }) })
  ] });
}, _S = ({ detail: e }) => {
  switch (e.type) {
    case "trigger":
      return /* @__PURE__ */ p.jsx(vS, { memberTiers: e.memberTiers });
    case "wait":
      return /* @__PURE__ */ p.jsx(xS, { action: e.action, onDelete: e.onDelete, onUpdate: e.onUpdate }, e.action.id);
    case "send_email":
      return /* @__PURE__ */ p.jsx(yS, { action: e.action, onDelete: e.onDelete, onEditEmail: e.onEditEmail, onUpdateSubject: e.onUpdateSubject }, e.action.id);
    default: {
      const t = e;
      throw new Error(`Unknown sidebar type: ${t}`);
    }
  }
}, wS = ({ detail: e }) => {
  const t = e.icon;
  return /* @__PURE__ */ p.jsxs("div", { className: "flex min-h-full flex-col gap-6", children: [
    /* @__PURE__ */ p.jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx("div", { className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-text-secondary", children: /* @__PURE__ */ p.jsx(t, { className: "size-4" }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ p.jsx("span", { className: "block text-sm text-text-secondary", children: e.label }),
        /* @__PURE__ */ p.jsx("h2", { className: ve("truncate text-base leading-tight font-medium text-foreground", e.isPlaceholderTitle && "opacity-50"), children: e.title })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(_S, { detail: e })
  ] });
}, SS = {
  "member-welcome-email-free": ["free"],
  "member-welcome-email-paid": ["paid"]
}, bS = ({ automation: e, stepId: t, onDelete: n, onUpdateWait: a, onUpdateSubject: r, onEditEmail: i }) => {
  if (!t)
    return null;
  if (t === We)
    return {
      icon: tc,
      label: "Trigger",
      title: "Member signs up",
      memberTiers: SS[e.slug] ?? [],
      type: "trigger"
    };
  const s = e.actions.find((o) => o.id === t);
  if (!s)
    return null;
  switch (s.type) {
    case "wait": {
      const o = Vf(s.data.wait_hours);
      return {
        icon: ss,
        label: "Wait",
        title: o,
        action: s,
        onDelete: () => n(s.id),
        onUpdate: (l) => a(s.id, l),
        type: "wait"
      };
    }
    case "send_email":
      return {
        icon: is,
        label: "Send email",
        isPlaceholderTitle: !s.data.email_subject,
        title: s.data.email_subject || "Untitled",
        action: s,
        onDelete: () => n(s.id),
        onUpdateSubject: (o) => r(s.id, o),
        onEditEmail: () => i(s.id),
        type: "send_email"
      };
    default: {
      const o = s;
      throw new Error(`Unknown automation action type: ${o}`);
    }
  }
}, AS = ({ automation: e, stepId: t, onDelete: n, onUpdateWait: a, onUpdateSubject: r, onEditEmail: i, isEmailModalOpen: s, onClose: o }) => {
  const l = bS({
    automation: e,
    stepId: t,
    onDelete: n,
    onUpdateWait: a,
    onUpdateSubject: r,
    onEditEmail: i
  });
  return ce(() => {
    if (!l)
      return;
    const u = (f) => {
      if (f.key === "Escape") {
        if (s)
          return;
        o();
      }
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l, s, o]), /* @__PURE__ */ p.jsx(
    "aside",
    {
      "aria-hidden": !l,
      "aria-label": "Step details",
      className: ve(
        "absolute inset-y-0 right-0 z-[1] flex w-[calc(100%-6rem)] max-w-none translate-x-full flex-col gap-6 overflow-y-auto bg-background p-6 shadow-sm transition-transform duration-200 ease-out sm:w-[36rem] dark:border-l dark:border-gray-950",
        l ? "translate-x-0" : "pointer-events-none"
      ),
      "data-state": l ? "open" : "closed",
      "data-testid": "automation-step-sidebar",
      children: l && /* @__PURE__ */ p.jsx(wS, { detail: l })
    }
  );
}, Rs = (e) => {
  if (!e)
    return !0;
  try {
    const n = JSON.parse(e)?.root?.children;
    return !n || n.length === 0 ? !0 : n.length === 1 && n[0].type === "paragraph" && (!n[0].children || n[0].children.length === 0);
  } catch {
    return !0;
  }
}, $a = 0, ES = 256, IS = $a + ES / 2, Wu = 180, MS = 40, CS = 250, NS = "Maximum steps added", $S = "var(--xy-edge-stroke)", RS = {
  "add-step-edge": a_
}, DS = (e) => {
  switch (e.type) {
    case "wait":
      return { icon: ss, label: "Wait", value: Vf(e.data.wait_hours) };
    case "send_email":
      return {
        icon: is,
        isPlaceholderValue: !e.data.email_subject,
        label: "Send email",
        value: e.data.email_subject || "Untitled",
        warningMessage: Rs(e.data.email_lexical) ? "Empty email body" : void 0
      };
    default: {
      const t = e;
      throw new Error(`Unknown automation action type: ${t}`);
    }
  }
}, Gu = ({
  canDelete: e = !1,
  canEditEmailBody: t = !1,
  onDelete: n,
  onEditEmailBody: a,
  onPreviewEmail: r,
  onSelectStep: i,
  stepId: s
}) => {
  const o = [{
    icon: yh,
    label: "Edit settings",
    onSelect: () => i(s)
  }];
  return t && a && o.push({
    icon: fc,
    label: "Edit email body",
    onSelect: () => a(s)
  }), t && r && o.push({
    icon: Dh,
    label: "Preview",
    onSelect: () => r(s)
  }), e && n && (t && o.push({ id: "before-delete", type: "separator" }), o.push({
    icon: nc,
    label: "Delete",
    onSelect: () => n(s),
    variant: "destructive"
  })), o;
}, PS = (e) => {
  if (e.actions.length === 0)
    return [];
  const t = new Map(e.actions.map((l) => [l.id, l])), n = new Set(e.edges.map((l) => l.target_action_id)), a = e.actions.find((l) => !n.has(l.id));
  if (!a)
    throw new Error(`Could not determine the starting step for automation ${e.id}.`);
  const r = new Map(e.edges.map((l) => [l.source_action_id, l.target_action_id])), i = [], s = /* @__PURE__ */ new Set();
  let o = a;
  for (; o; ) {
    if (s.has(o.id))
      throw new Error(`Detected a loop in automation ${e.id}.`);
    i.push(o), s.add(o.id);
    const l = r.get(o.id);
    o = l ? t.get(l) : void 0;
  }
  if (i.length !== e.actions.length)
    throw new Error(`Some steps in automation ${e.id} are missing or disconnected.`);
  return i;
}, kS = ({ actionErrors: e, automation: t, disabled: n, onDelete: a, onEditEmailBody: r, onPick: i, onPreviewEmail: s, onSelectStep: o, newStepId: l, selectedStepId: u }) => {
  const f = PS(t), d = {
    draggable: !1,
    selectable: !1,
    connectable: !1,
    focusable: !1
  }, c = n ? NS : void 0, m = {
    sourceId: f[f.length - 1]?.id ?? We,
    targetId: ft
  }, v = [
    {
      id: We,
      type: "trigger",
      position: { x: $a, y: 0 },
      data: {
        contextMenuItems: Gu({
          onSelectStep: o,
          stepId: We
        }),
        icon: tc,
        isNew: !1,
        label: "Trigger",
        value: "Member signs up",
        selected: u === We,
        onSelect: () => o(We)
      },
      ...d
    }
  ];
  f.forEach((w, y) => {
    v.push({
      id: w.id,
      type: "step",
      position: { x: $a, y: Wu * (y + 1) },
      data: {
        ...DS(w),
        contextMenuItems: Gu({
          canDelete: !0,
          canEditEmailBody: w.type === "send_email",
          onDelete: a,
          onEditEmailBody: r,
          onPreviewEmail: s,
          onSelectStep: o,
          stepId: w.id
        }),
        errorMessage: e[w.id],
        isNew: l === w.id,
        selected: u === w.id,
        onSelect: () => o(w.id)
      },
      ...d
    });
  }), v.push({
    id: ft,
    type: "tail",
    position: { x: $a, y: Wu * (f.length + 1) },
    data: { disabled: n, disabledReason: c, onPick: i, anchor: m },
    draggable: !1,
    connectable: !1
  });
  const h = [];
  let x = We;
  return f.forEach((w) => {
    const y = {
      sourceId: x,
      targetId: w.id,
      disabled: n,
      disabledReason: c,
      onPick: i
    };
    h.push({
      id: `e-${x}-${w.id}`,
      source: x,
      target: w.id,
      type: "add-step-edge",
      focusable: !1,
      data: y
    }), x = w.id;
  }), h.push({
    id: `e-${x}-${ft}`,
    source: x,
    target: ft,
    type: "smoothstep",
    focusable: !1,
    style: { stroke: $S }
  }), { nodes: v, edges: h };
}, TS = (e) => ({
  x: Math.round(e / 2 - IS),
  y: MS,
  zoom: 1
}), LS = {
  wait: Wh,
  send_email: Vh
}, OS = ({ actionErrors: e = {}, automation: t, isLoading: n, isError: a, onChange: r }) => {
  const [i, s] = fe(null), [o, l] = fe("edit"), [u, f] = fe(null), [d, c] = fe(null), [g, m] = fe(null), v = d?.id ?? null, h = pe((C, N) => {
    if (!t || t.actions.length >= Hs)
      return;
    const P = dS(N), B = LS[C], k = B({ detail: t, anchor: P }), F = k.actions.find((q) => !t.actions.some((z) => z.id === q.id));
    s(F?.id ?? null), F && c({ id: F.id }), r(k);
  }, [t, r]);
  ce(() => {
    if (!i)
      return;
    const C = window.setTimeout(() => {
      s(null);
    }, CS);
    return () => window.clearTimeout(C);
  }, [i]);
  const x = pe((C) => {
    if (!t)
      return;
    const N = Uh({ detail: t, actionId: C });
    f((P) => P === C ? null : P), c(null), m(null), r(N);
  }, [t, r]), w = pe((C) => {
    if (!t)
      return;
    const N = t.actions.find((P) => P.id === C);
    if (N?.type === "send_email" && !Rs(N.data.email_lexical)) {
      m(N.id);
      return;
    }
    x(C);
  }, [t, x]), y = pe((C, N) => {
    t && r(jh({ detail: t, actionId: C, waitHours: N }));
  }, [t, r]), _ = pe((C, N) => {
    if (!t)
      return;
    const P = t.actions.find((B) => B.id === C && B.type === "send_email");
    P && r(Zs({ detail: t, actionId: C, emailSubject: N, emailLexical: P.data.email_lexical }));
  }, [t, r]), b = pe((C, N = "edit") => {
    l(N), f(C);
  }, []), S = pe((C, N = "edit") => {
    c(null), l(N), f(C);
  }, []), I = pe((C) => {
    S(C, "preview");
  }, [S]), $ = u && t ? t.actions.find((C) => C.id === u && C.type === "send_email") : void 0, R = t && g ? t.actions.find((C) => C.id === g && C.type === "send_email") : void 0, L = se(TS(window.innerWidth)), D = Ce(() => t ? kS({
    actionErrors: e,
    automation: t,
    disabled: t.actions.length >= Hs,
    onDelete: w,
    onEditEmailBody: S,
    onPick: h,
    onPreviewEmail: I,
    onSelectStep: (C) => c({ id: C }),
    newStepId: i,
    selectedStepId: v
  }) : null, [e, t, S, I, h, w, i, v]), O = pe(() => {
    c(null);
  }, []), H = () => {
    f(null), l("edit");
  }, E = pe((C, N) => {
    if (C.stopPropagation(), !t || N.id === ft || N.id === We)
      return;
    const P = t.actions.find((B) => B.id === N.id);
    P?.type === "send_email" && b(P.id);
  }, [t, b]);
  return n ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-center justify-center bg-surface-page", "data-testid": "automation-canvas-loading", children: /* @__PURE__ */ p.jsx(dt, { size: "lg" }) }) : a || !t || !D ? /* @__PURE__ */ p.jsx("div", { className: "flex flex-1 items-start justify-center bg-surface-page px-4 py-8", children: /* @__PURE__ */ p.jsx(hc, { className: "max-w-md", role: "alert", variant: "destructive", children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ p.jsx(Rh, { className: "mt-0.5 size-5 text-red" }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx("strong", { className: "block", children: "Couldn't load automation" }),
      /* @__PURE__ */ p.jsx("p", { className: "text-sm text-muted-foreground", children: "Try refreshing the page." })
    ] })
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "relative flex-1 overflow-hidden bg-surface-page", "data-testid": "automation-canvas", children: [
    /* @__PURE__ */ p.jsxs(
      Ey,
      {
        className: "[--xy-background-color:var(--color-grey-50)] [--xy-background-pattern-color:var(--color-grey-500)] [--xy-edge-stroke:var(--color-grey-300)] dark:[--xy-background-color:var(--color-black)] dark:[--xy-background-pattern-color:var(--color-grey-900)] dark:[--xy-edge-stroke:var(--color-grey-800)]",
        defaultViewport: L.current,
        edges: D.edges,
        edgesFocusable: !1,
        edgeTypes: RS,
        nodes: D.nodes,
        nodesConnectable: !1,
        nodesDraggable: !1,
        nodesFocusable: !1,
        nodeTypes: pS,
        proOptions: { hideAttribution: !0 },
        zoomOnDoubleClick: !1,
        zoomOnScroll: !1,
        panOnScroll: !0,
        onNodeClick: (C, N) => {
          C.button === 0 && N.id !== ft && c({ id: N.id });
        },
        onNodeDoubleClick: E,
        onPaneClick: O,
        children: [
          /* @__PURE__ */ p.jsx(ky, { variant: Ke.Dots }),
          /* @__PURE__ */ p.jsx(cS, {})
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(
      AS,
      {
        automation: t,
        isEmailModalOpen: !!$ || !!R,
        stepId: v,
        onClose: O,
        onDelete: w,
        onEditEmail: b,
        onUpdateSubject: _,
        onUpdateWait: y
      }
    ),
    $ && t && /* @__PURE__ */ p.jsx(
      oS,
      {
        initialLexical: $.data.email_lexical,
        initialMode: o,
        initialSubject: $.data.email_subject,
        onClose: H,
        onSave: ({ subject: C, lexical: N }) => {
          r(Zs({ detail: t, actionId: $.id, emailSubject: C, emailLexical: N }));
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      Jt,
      {
        open: !!R,
        onOpenChange: (C) => {
          C || m(null);
        },
        children: /* @__PURE__ */ p.jsxs(Qt, { children: [
          /* @__PURE__ */ p.jsxs(en, { children: [
            /* @__PURE__ */ p.jsx(tn, { children: "Delete this email?" }),
            /* @__PURE__ */ p.jsx(nn, { children: "This email will be removed from the automation. Save or publish the automation to apply this change." })
          ] }),
          /* @__PURE__ */ p.jsxs(rn, { children: [
            /* @__PURE__ */ p.jsx(an, { children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                variant: "destructive",
                onClick: () => {
                  R && x(R.id);
                },
                children: "Delete email"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, BS = ({
  automation: e,
  isLoadingAutomation: t,
  isSaveButtonEnabled: n,
  isPublishButtonEnabled: a,
  saveButtonVariant: r,
  publishButtonVariant: i,
  isTurnOffButtonEnabled: s,
  saveButtonChildren: o,
  publishButtonChildren: l,
  onSave: u,
  onPublish: f,
  onTurnOff: d
}) => {
  const c = e?.name, g = e?.status;
  return /* @__PURE__ */ p.jsxs("header", { className: "relative z-10 flex h-14 shrink-0 items-center justify-between bg-background px-4 shadow-sm dark:border-b dark:border-gray-950", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
      /* @__PURE__ */ p.jsx(Ee, { variant: "ghost", asChild: !0, children: /* @__PURE__ */ p.jsx(ph, { "aria-label": "Back to automations", to: "/automations", children: /* @__PURE__ */ p.jsx(Sh, { strokeWidth: 2 }) }) }),
      t ? /* @__PURE__ */ p.jsx(yp, { className: "h-5 w-40" }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "truncate text-lg font-semibold", children: c }),
        g && /* @__PURE__ */ p.jsx(Gh, { status: g })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex shrink-0 items-center gap-3", children: [
      g === "active" && /* @__PURE__ */ p.jsxs(
        Ee,
        {
          disabled: !s,
          variant: "outline",
          onClick: d,
          children: [
            /* @__PURE__ */ p.jsx(_h, {}),
            "Turn off"
          ]
        }
      ),
      g === "inactive" && /* @__PURE__ */ p.jsx(
        Ee,
        {
          disabled: !n,
          variant: r,
          onClick: u,
          children: o
        }
      ),
      /* @__PURE__ */ p.jsx(
        Ee,
        {
          disabled: !a,
          variant: i,
          onClick: f,
          children: l
        }
      )
    ] })
  ] });
};
var Ku = Object.prototype.hasOwnProperty;
function Yu(e, t, n) {
  for (n of e.keys())
    if (on(n, t)) return n;
}
function on(e, t) {
  var n, a, r;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((a = e.length) === t.length)
        for (; a-- && on(e[a], t[a]); ) ;
      return a === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (r = a, r && typeof r == "object" && (r = Yu(t, r), !r) || !t.has(r)) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (a of e)
        if (r = a[0], r && typeof r == "object" && (r = Yu(t, r), !r) || !on(a[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e.getInt8(a) === t.getInt8(a); ) ;
      return a === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((a = e.byteLength) === t.byteLength)
        for (; a-- && e[a] === t[a]; ) ;
      return a === -1;
    }
    if (!n || typeof e == "object") {
      a = 0;
      for (n in e)
        if (Ku.call(e, n) && ++a && !Ku.call(t, n) || !(n in t) || !on(e[n], t[n])) return !1;
      return Object.keys(t).length === a;
    }
  }
  return e !== e && t !== t;
}
const FS = "Add a subject line.", HS = "Add an email body.", ZS = "Add a subject line and email body.", Xu = (e) => ({
  status: e.status,
  actions: e.actions,
  edges: e.edges
}), qS = (e) => e.phase === "failed", ji = (e) => {
  const t = {};
  for (const n of e.actions) {
    if (n.type !== "send_email")
      continue;
    const a = !n.data.email_subject.trim(), r = Rs(n.data.email_lexical);
    a && r ? t[n.id] = ZS : a ? t[n.id] = FS : r && (t[n.id] = HS);
  }
  return t;
}, fb = () => {
  const { id: e = "" } = gh(), { data: t, isLoading: n, isError: a } = Kh(e, {
    defaultErrorHandler: !1
  }), r = t?.automations[0], i = Yh(), [s, o] = Be.useState({ phase: "idle" }), [l, u] = Be.useState({}), [f, d] = Be.useState(void 0);
  Be.useEffect(() => {
    r && d((k) => k?.id === r.id ? k : r);
  }, [r]);
  const c = !!f && !!r && !on(Xu(f), Xu(r)), g = (k) => {
    d(k), u((F) => {
      if (Object.keys(F).length === 0)
        return F;
      const q = ji(k);
      return Object.fromEntries(
        Object.entries(F).filter(([z]) => q[z])
      );
    }), o((F) => qS(F) ? { phase: "idle" } : F);
  }, m = (k, F) => {
    const q = ji(k);
    return Object.keys(q).length > 0 ? (u(q), o(F), Ri.error("Automation couldn’t be saved", {
      description: "Fix the highlighted steps and try again."
    }), !1) : !0;
  }, v = (k) => {
    if (!f)
      throw new Error("Cannot edit an automation that has not loaded.");
    let F, q;
    const z = f.status, X = k ?? z, Y = `${z} -> ${X}`;
    switch (Y) {
      case "active -> active":
        F = { phase: "submitting", action: "republish" }, q = { phase: "failed", action: "republish" };
        break;
      case "inactive -> inactive":
        F = { phase: "submitting", action: "save" }, q = { phase: "failed", action: "save" };
        break;
      case "inactive -> active":
        F = { phase: "submitting", action: "publish" }, q = { phase: "failed", action: "publish" };
        break;
      case "active -> inactive":
        F = { phase: "submitting", action: "unpublish" }, q = { phase: "failed", action: "unpublish" };
        break;
      default: {
        const ee = Y;
        throw new Error(`Unhandled status transition: ${ee}`);
      }
    }
    X === "active" && !m(f, q) || (o(F), i.mutate(
      {
        id: f.id,
        status: X,
        actions: f.actions,
        edges: f.edges
      },
      {
        onSuccess: (ee) => {
          d(ee.automations[0]), u({}), o({ phase: "idle" });
        },
        onError: (ee) => {
          const le = X === "active" ? ji(f) : {}, te = Object.keys(le).length > 0;
          te && u(le), o(q), te ? Ri.error("Automation couldn’t be saved", {
            description: "Fix the highlighted steps and try again."
          }) : Ri.error("Automation couldn’t be saved");
        }
      }
    ));
  }, h = s.action === "unpublish", x = s.action === "republish", w = s.phase === "submitting";
  let y = !!f && f.actions.length > 0 && f.status === "inactive" && c, _ = "outline", b = "Save", S = !!f && f.actions.length > 0 && (f.status === "inactive" || c), I = "default", $ = f?.status === "active" ? c ? "Publish changes" : "Published" : "Publish", R = !0, L = "Turn off", D = !0, O = "default", H = "Publish changes";
  switch (s.phase) {
    case "idle":
      break;
    case "submitting":
      switch (y = !1, S = !1, R = !1, s.action) {
        case "save":
          b = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Saving..." })
          ] });
          break;
        case "publish":
          $ = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Publishing..." })
          ] });
          break;
        case "republish":
          D = !1, H = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Publishing..." })
          ] });
          break;
        case "unpublish":
          L = /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx(dt, { color: "light", size: "sm" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Turning off..." })
          ] });
          break;
      }
      break;
    case "confirming":
      switch (s.action) {
        case "republish":
          S = !1, R = !1;
          break;
        case "unpublish":
          y = !1, S = !1, R = !1;
          break;
      }
      break;
    case "failed":
      switch (s.action) {
        case "save":
          _ = "destructive", b = "Retry";
          break;
        case "publish":
          I = "destructive", $ = "Retry";
          break;
        case "republish":
          S = !1, R = !1, O = "destructive", H = "Retry";
          break;
        case "unpublish":
          R = !0, L = "Retry";
          break;
      }
      break;
    default: {
      const k = s;
      throw new Error(`Unhandled edit state: ${k}`);
    }
  }
  const E = (k) => {
    o((F) => {
      switch (F.phase) {
        case "confirming":
        case "failed":
          return F.action === "unpublish" && !k ? { phase: "idle" } : F;
        case "idle":
          return k ? { phase: "confirming", action: "unpublish" } : F;
        default:
          return F;
      }
    });
  }, C = (k) => {
    o((F) => {
      switch (F.phase) {
        case "confirming":
        case "failed":
          return F.action === "republish" && !k ? { phase: "idle" } : F;
        case "idle":
          return k ? { phase: "confirming", action: "republish" } : F;
        default:
          return F;
      }
    });
  }, N = () => {
    if (!f)
      throw new Error("Cannot publish an automation that has not loaded.");
    switch (f.status) {
      case "active":
        if (!m(f, { phase: "idle" }))
          return;
        o({ phase: "confirming", action: "republish" });
        break;
      case "inactive":
        v("active");
        break;
      default: {
        const k = f.status;
        throw new Error(`Unhandled status: ${k}`);
      }
    }
  };
  bp(w || c);
  const P = mh(({ currentLocation: k, nextLocation: F }) => c && k.pathname !== F.pathname), B = (k) => {
    !k && P.state === "blocked" && P.reset();
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-background", "data-testid": "automation-editor", children: [
    /* @__PURE__ */ p.jsx(
      BS,
      {
        automation: f,
        isLoadingAutomation: n,
        isPublishButtonEnabled: S,
        isSaveButtonEnabled: y,
        isTurnOffButtonEnabled: R,
        publishButtonChildren: $,
        publishButtonVariant: I,
        saveButtonChildren: b,
        saveButtonVariant: _,
        onPublish: N,
        onSave: () => v(),
        onTurnOff: () => o({ phase: "confirming", action: "unpublish" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      OS,
      {
        actionErrors: l,
        automation: f,
        isError: a,
        isLoading: n,
        onChange: g
      }
    ),
    /* @__PURE__ */ p.jsx(
      Jt,
      {
        open: P.state === "blocked",
        onOpenChange: B,
        children: /* @__PURE__ */ p.jsxs(Qt, { children: [
          /* @__PURE__ */ p.jsxs(en, { children: [
            /* @__PURE__ */ p.jsx(tn, { children: "Discard unsaved changes?" }),
            /* @__PURE__ */ p.jsx(nn, { children: "Your changes will be lost if you leave this automation." })
          ] }),
          /* @__PURE__ */ p.jsxs(rn, { children: [
            /* @__PURE__ */ p.jsx(an, { children: "Keep working" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                variant: "destructive",
                onClick: () => P.proceed?.(),
                children: "Discard changes"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Jt,
      {
        open: h,
        onOpenChange: E,
        children: /* @__PURE__ */ p.jsxs(Qt, { children: [
          /* @__PURE__ */ p.jsxs(en, { children: [
            /* @__PURE__ */ p.jsx(tn, { children: "Turn off this automation?" }),
            /* @__PURE__ */ p.jsx(nn, { children: "It will stop running until you turn it back on." })
          ] }),
          /* @__PURE__ */ p.jsxs(rn, { children: [
            /* @__PURE__ */ p.jsx(an, { disabled: w, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                disabled: w,
                variant: s.phase === "failed" && s.action === "unpublish" ? "destructive" : "default",
                onClick: () => v("inactive"),
                children: L
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Jt,
      {
        open: x,
        onOpenChange: C,
        children: /* @__PURE__ */ p.jsxs(Qt, { children: [
          /* @__PURE__ */ p.jsxs(en, { children: [
            /* @__PURE__ */ p.jsx(tn, { children: "Update automation?" }),
            /* @__PURE__ */ p.jsx(nn, { children: "This will update the automation for new runs of the automation, as well as any actively-running ones." })
          ] }),
          /* @__PURE__ */ p.jsxs(rn, { children: [
            /* @__PURE__ */ p.jsx(an, { disabled: w, children: "Cancel" }),
            /* @__PURE__ */ p.jsx(
              Ee,
              {
                disabled: !D,
                variant: O,
                onClick: () => v(),
                children: H
              }
            )
          ] })
        ] })
      }
    )
  ] });
};
export {
  fb as default
};
//# sourceMappingURL=editor-Cayw7NxB.mjs.map
