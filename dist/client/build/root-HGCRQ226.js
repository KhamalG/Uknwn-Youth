import {
  tt
} from "/build/_shared/chunk-O6RXEPXO.js";
import {
  Links,
  Meta,
  Outlet,
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

// app/components/Layout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen antialiased bg-neutral-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "header",
      {
        role: "banner",
        className: `flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "font-bold", href: "/", children: title }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 8,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.jsx",
        lineNumber: 4,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "main",
      {
        role: "main",
        id: "mainContent",
        className: "flex-grow p-6 md:p-8 lg:p-12",
        children
      },
      void 0,
      false,
      {
        fileName: "app/components/Layout.jsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/root.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
    setMiniBrowser(true);
  }
  function closeMiniBrowser() {
    setMiniBrowser(false);
  }
  function window() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this);
  }
  const { name } = data.layout.shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tt, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { href: "path/to/your/generated.css", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      landingPage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 84,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: closeLandingPage, children: "Press to Enter" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 88,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 87,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 86,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 10
      }, this),
      landingPage == false && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "Home", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("video", { className: "homeVideo", autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 98,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 97,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://i.imgur.com/i9KgFOX.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 103,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "buttonShop", onClick: openMiniBrowser, children: "Shop" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 104,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://i.imgur.com/xDgYL4R.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 109,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "buttonCart", children: "Cart" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 110,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "https://i.imgur.com/Mm0P4CS.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 114,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "buttonAbout", children: "About" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 115,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 101,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 100,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "buttonFooter", children: "Start" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 122,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 121,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      miniBrowser && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 131,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-HGCRQ226.js.map
