import { Q as e, L as p } from "./index-cYbhPZer.mjs";
import { A as h, c as w } from "./automations-TIrlBsPd.mjs";
import { u as r } from "./skeleton-BLfZp8N_.mjs";
import { T as d, a as m, e as c, b as i } from "./table-yZ9zEulc.mjs";
import { M as j } from "./main-layout-DXS1ZOEg.mjs";
import { L as l, P as n } from "./list-page-C0jCVF3Y.mjs";
import { a as L, u as N, c as A } from "./settings-CTfrowFd.mjs";
const E = {
  "member-welcome-email-free": "Onboard new free members with a short welcome email.",
  "member-welcome-email-paid": "Greet new paid members and point them at member-only content."
}, S = () => /* @__PURE__ */ e.jsx(d, { className: "flex table-fixed flex-col border-t lg:table", "data-testid": "automations-list-loading", children: /* @__PURE__ */ e.jsx(m, { className: "flex flex-col lg:table-row-group", children: Array.from({ length: 2 }, (a, t) => /* @__PURE__ */ e.jsxs(
  c,
  {
    "aria-hidden": "true",
    className: "grid w-full grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
    children: [
      /* @__PURE__ */ e.jsxs(i, { className: "min-w-0 lg:p-4", children: [
        /* @__PURE__ */ e.jsx(r, { className: "mb-1 h-3 w-48 max-w-full " }),
        /* @__PURE__ */ e.jsx(r, { className: "h-3 w-80 max-w-full" })
      ] }),
      /* @__PURE__ */ e.jsx(i, { className: "text-right lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(r, { className: "ml-auto h-3 w-16" }) })
    ]
  },
  t
)) }) }), T = ({ automations: a = [], isLoading: t = !1 }) => t ? /* @__PURE__ */ e.jsx(S, {}) : /* @__PURE__ */ e.jsx(d, { className: "flex table-fixed flex-col border-t lg:table", "data-testid": "automations-list", children: /* @__PURE__ */ e.jsx(m, { className: "flex flex-col lg:table-row-group", children: a.map((s) => {
  const o = E[s.slug];
  return /* @__PURE__ */ e.jsxs(
    c,
    {
      className: "grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 p-2 lg:table-row lg:p-0",
      "data-testid": "automation-list-row",
      children: [
        /* @__PURE__ */ e.jsxs(i, { className: "static min-w-0 lg:p-4", children: [
          /* @__PURE__ */ e.jsx(
            p,
            {
              className: "before:absolute before:inset-0 before:z-10 before:rounded-sm focus-visible:outline-hidden focus-visible:before:ring-2 focus-visible:before:ring-focus-ring",
              to: `/automations/${s.id}`,
              children: /* @__PURE__ */ e.jsx("span", { className: "block text-md font-semibold", children: s.name })
            }
          ),
          o && /* @__PURE__ */ e.jsx("span", { className: "block text-muted-foreground", children: o })
        ] }),
        /* @__PURE__ */ e.jsx(i, { className: "text-right lg:w-32 lg:p-4", children: /* @__PURE__ */ e.jsx(h, { status: s.status }) })
      ]
    },
    s.slug
  );
}) }) }), k = {
  paid: "member-welcome-email-paid"
}, B = () => {
  const { data: a, error: t, isError: s, isLoading: o } = w({
    defaultErrorHandler: !1
  }), { data: u, isLoading: g } = L(), { data: f, isLoading: x } = N();
  return {
    automations: A(u?.settings || [], f?.config || {}) ? a?.automations : a?.automations?.filter((b) => b.slug !== k.paid),
    error: t,
    isError: s,
    isLoading: o || g || x
  };
}, H = () => {
  const { automations: a, error: t, isError: s, isLoading: o } = B();
  if (s)
    throw t || new Error("Failed to load automations");
  return /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsxs(l, { "data-testid": "automations-page", children: [
    /* @__PURE__ */ e.jsx(l.Header, { children: /* @__PURE__ */ e.jsx(n, { blurredBackground: !1, sticky: !1, children: /* @__PURE__ */ e.jsx(n.Left, { children: /* @__PURE__ */ e.jsx(n.Title, { children: "Automations" }) }) }) }),
    /* @__PURE__ */ e.jsx(l.Body, { children: /* @__PURE__ */ e.jsx(T, { automations: a, isLoading: o }) })
  ] }) });
};
export {
  H as default
};
//# sourceMappingURL=automations-CWa2j91d.mjs.map
