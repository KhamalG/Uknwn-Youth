import {
  Navbar,
  ProductGrid
} from "/build/_shared/chunk-7AWUVP5C.js";
import {
  useLoaderData
} from "/build/_shared/chunk-J37TFXHT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/shop.jsx
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
function Shop() {
  const { collection } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "shop-home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "shop-home-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { class: "shop-logo", src: "https://i.imgur.com/0q0GRK3.gif" }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { class: "new-arrivals", children: "New Arrivals" }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 53,
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
          fileName: "app/routes/shop.jsx",
          lineNumber: 54,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/shop.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

export {
  handle,
  meta,
  Shop
};
//# sourceMappingURL=/build/_shared/chunk-U5RAAKFR.js.map
