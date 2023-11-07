import {
  Navbar,
  tt
} from "/build/_shared/chunk-SWP7NMFQ.js";
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
var app_default = "/build/_assets/app-IVN4E3CA.css";

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

// app/components/footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { class: "buttonFooter", children: "Start" }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/root.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
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
  function Window() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 99,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 102,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this);
  }
  const { name } = data.layout.shop;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(tt, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "path/to/your/generated.css", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      landingPage && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("video", { autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 131,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: closeLandingPage, children: "Press to Enter" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 135,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 134,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 133,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 129,
        columnNumber: 10
      }, this),
      landingPage == false && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "Home", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("video", { className: "homeVideo", autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 145,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 144,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://i.imgur.com/i9KgFOX.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 150,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "buttonShop", onClick: openMiniBrowser, children: "Shop" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 151,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://i.imgur.com/xDgYL4R.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 156,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "buttonCart", children: "Cart" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 157,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://i.imgur.com/Mm0P4CS.gif" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 161,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "buttonAbout", children: "About" }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 162,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 148,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "buttonFooter", children: "Start" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 169,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 168,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 167,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      miniBrowser && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Window, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-V6DIPW6S.js.map
