import {
  Image,
  Money
} from "/build/_shared/chunk-EMUA66O2.js";
import {
  json
} from "/build/_shared/chunk-7VLLRZKP.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-IIYIZHR5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-E45KJLCL.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/components/productcard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-sm rounded relative", children: [
      isDiscounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs", children: "Sale" }, void 0, false, {
        fileName: "app/components/productcard.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Image,
        {
          className: "product-card-image",
          data: product.variants.nodes[0].image,
          alt: product.title,
          height: 250,
          width: 250
        },
        void 0,
        false,
        {
          fileName: "app/components/productcard.jsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/productcard.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { classNamw: "product-card-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ", children: product.title }, void 0, false, {
        fileName: "app/components/productcard.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, data: price }, void 0, false, {
          fileName: "app/components/productcard.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        isDiscounted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Money,
          {
            className: "line-through opacity-50",
            withoutTrailingZeros: true,
            data: compareAtPrice
          },
          void 0,
          false,
          {
            fileName: "app/components/productcard.jsx",
            lineNumber: 32,
            columnNumber: 17
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/productcard.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/productcard.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/productcard.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/productcard.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/productcard.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/productgrid.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ProductGrid({ collection, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { class: "product-grid-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { class: "product-grid", children: collection.products.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.id, false, {
    fileName: "app/components/productgrid.jsx",
    lineNumber: 8,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/productgrid.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/productgrid.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/navbar.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "navbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "site-address", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { class: "site-address-header", children: "www.unknwn-youth.com" }, void 0, false, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 7,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { class: "site-address-minimize", children: "minimize" }, void 0, false, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { class: "site-address-close", children: "close" }, void 0, false, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 9,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { class: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { class: "nav-logo", src: "https://i.imgur.com/8dF98hJ.png" }, void 0, false, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { class: "mini-menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "home" }, void 0, false, {
          fileName: "app/components/navbar.jsx",
          lineNumber: 14,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "about" }, void 0, false, {
          fileName: "app/components/navbar.jsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "cart" }, void 0, false, {
          fileName: "app/components/navbar.jsx",
          lineNumber: 16,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: "search" }, void 0, false, {
          fileName: "app/components/navbar.jsx",
          lineNumber: 17,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/navbar.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navbar.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navbar.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/shop.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Shop() {
  const seo = ({ data }) => ({
    title: data?.collection?.title,
    description: data?.collection?.description.substr(0, 154)
  });
  const handle = {
    seo
  };
  async function loader({ params, context }) {
    const { handle: handle2 } = "Home Page";
    const { collection: collection2 } = await context.storefront.query(COLLECTION_QUERY, {
      variables: {
        handle: "frontpage"
      }
    });
    if (!collection2) {
      throw new Response(null, { status: 404 });
    }
    return json({
      collection: collection2
    });
  }
  function meta({ data }) {
    return [
      { title: data?.collection?.title ?? "Collection" },
      { description: data?.collection?.description }
    ];
  }
  ;
  const { collection } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "shop-home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 49,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { class: "shop-home-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { class: "shop-logo", src: "https://i.imgur.com/0q0GRK3.gif" }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 54,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 53,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { class: "new-arrivals", children: "New Arrivals" }, void 0, false, {
        fileName: "app/routes/shop.jsx",
        lineNumber: 56,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          lineNumber: 57,
          columnNumber: 19
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/shop.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/shop.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this);
}
var COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(first: 3) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

export {
  Shop
};
//# sourceMappingURL=/build/_shared/chunk-N2YOBGG5.js.map
