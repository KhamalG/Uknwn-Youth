import "/build/_shared/chunk-7VLLRZKP.js";
import {
  useLoaderData
} from "/build/_shared/chunk-IIYIZHR5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/products.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductHandle() {
  const { handle, product } = useLoaderData();
  console.log("handle: ", handle);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Product Handle: ",
      handle
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrintJson, { data: product }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this);
}
function PrintJson({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { class: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { children: "Product JSON" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: JSON.stringify(data, null, 2) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this);
}
export {
  ProductHandle as default
};
//# sourceMappingURL=/build/routes/products.$handle-DGI4DP4K.js.map
