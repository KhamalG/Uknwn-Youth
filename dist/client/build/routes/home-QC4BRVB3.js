import {
  require_lib
} from "/build/_shared/chunk-JAG7CFGP.js";
import "/build/_shared/chunk-CIBBRL5I.js";
import {
  Shop
} from "/build/_shared/chunk-NTIJ2PQZ.js";
import "/build/_shared/chunk-O6RXEPXO.js";
import {
  Link
} from "/build/_shared/chunk-J37TFXHT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/home.jsx
var import_react_modal = __toESM(require_lib());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Home() {
  const [modal, setModal] = (0, import_react2.useState)(false);
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  const customStyles = {
    modal: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "Home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { className: "homeVideo", autoPlay: true, loop: true, muted: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: "https://i.imgur.com/2jLwS41.mp4", type: "video/mp4" }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 32,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 31,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://i.imgur.com/i9KgFOX.gif" }, void 0, false, {
        fileName: "app/routes/home.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "buttonShop", onClick: openModal, children: "Shop" }, void 0, false, {
        fileName: "app/routes/home.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cart", className: "cart", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://i.imgur.com/xDgYL4R.gif" }, void 0, false, {
          fileName: "app/routes/home.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "buttonCart", children: "Cart" }, void 0, false, {
          fileName: "app/routes/home.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "about", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://i.imgur.com/Mm0P4CS.gif" }, void 0, false, {
          fileName: "app/routes/home.jsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "buttonAbout", children: "About" }, void 0, false, {
          fileName: "app/routes/home.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/home.jsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/home.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_modal.default,
      {
        isOpen: modal,
        onRequestClose: closeModal,
        style: customStyles.modal,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shop, {}, void 0, false, {
          fileName: "app/routes/home.jsx",
          lineNumber: 61,
          columnNumber: 17
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/home.jsx",
        lineNumber: 56,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "buttonFooter", children: "Start" }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 65,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/home.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home.jsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=/build/routes/home-QC4BRVB3.js.map
