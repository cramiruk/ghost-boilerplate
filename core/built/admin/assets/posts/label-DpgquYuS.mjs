import { x as r, Q as o, i as n, n as i } from "./index-cYbhPZer.mjs";
import { b as c } from "./check-Bk1CoFjE.mjs";
var d = "Label", s = r((a, t) => /* @__PURE__ */ o.jsx(
  c.label,
  {
    ...a,
    ref: t,
    onMouseDown: (e) => {
      e.target.closest("button, input, select, textarea") || (a.onMouseDown?.(e), !e.defaultPrevented && e.detail > 1 && e.preventDefault());
    }
  }
));
s.displayName = d;
var l = s;
function x(a) {
  return `'${a.replace(/'/g, "\\'")}'`;
}
const u = i(
  "text-control leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), m = r(({ className: a, ...t }, e) => /* @__PURE__ */ o.jsx(
  l,
  {
    ref: e,
    className: n(u(), a),
    ...t
  }
));
m.displayName = l.displayName;
export {
  m as L,
  x as e
};
//# sourceMappingURL=label-DpgquYuS.mjs.map
