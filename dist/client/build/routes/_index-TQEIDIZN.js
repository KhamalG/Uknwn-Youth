import {
  ProductGrid
} from "/build/_shared/chunk-2UVCT52P.js";
import "/build/_shared/chunk-O6RXEPXO.js";
import {
  useLoaderData
} from "/build/_shared/chunk-J37TFXHT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var seo = ({ data }) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154)
});
var handle = {
  seo
};
function meta({ data }) {
  return [
    { title: data?.collection?.title ?? "Collection" },
    { description: data?.collection?.description }
  ];
}
function Index() {
  const { collection } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "shop-home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "shop-home-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { class: "shop-logo", src: "https://i.imgur.com/0q0GRK3.gif" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 49,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 48,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { class: "new-arrivals", children: "New Arrivals" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 51,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ProductGrid,
      {
        collection,
        url: `/collections/${collection.handle}`,
        class: "shop-productgrid"
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 52,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 47,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 46,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
}
export {
  Index as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/_index-TQEIDIZN.js.map
