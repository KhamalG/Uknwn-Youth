import {
  Home,
  require_lib
} from "/build/_shared/chunk-PQQNLO4Q.js";
import "/build/_shared/chunk-CIBBRL5I.js";
import "/build/_shared/chunk-PJ3DEAWR.js";
import {
  tt
} from "/build/_shared/chunk-D7KEMPTB.js";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-J37TFXHT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/styles/app.css
var app_default = "/build/_assets/app-RK35PAK2.css";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-5FIZBM2K.svg";

// app/root.jsx
var import_react2 = __toESM(require_react());
var import_react_modal = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  console.log("styles: ", app_default);
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://cdn.shopify.com"
    },
    {
      rel: "preconnect",
      href: "https://shop.app"
    },
    { rel: "icon", type: "image/svg+xml", href: favicon_default }
  ];
};
function App() {
  const data = useLoaderData();
  const [landingPage, setLandingPage] = (0, import_react2.useState)(true);
  const [miniBrowser, setMiniBrowser] = (0, import_react2.useState)(false);
  function openLandingPage() {
    setLandingPage(true);
  }
  function closeLandingPage() {
    setLandingPage(false);
  }
  function openMiniBrowser() {
    setLandingPage(true);
  }
  function closeMiniBrowser() {
    setLandingPage(false);
  }
  const { name } = data.layout.shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: "path/to/your/generated.css", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      landingPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeLandingPage, children: "Press to Enter" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 10
      }, this),
      landingPage == false && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, { setMiniBrowser: setMiniBrowser() }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-CTBMI6X3.js.map
