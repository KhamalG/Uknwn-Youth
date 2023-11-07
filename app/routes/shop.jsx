import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import ProductGrid from '../components/productgrid';
import Navbar from "~/components/navbar"

const seo = ({data}) => ({
    title: data?.collection?.title,
    description: data?.collection?.description.substr(0, 154),
});
export const handle = {
    seo
};

export async function loader({params, context}) {
    const {handle} = 'Home Page';
    const {collection} = await context.storefront.query(COLLECTION_QUERY, {
      variables: {
        handle: "frontpage",
      },
    });
  
    // Handle 404s
    if (!collection) {
      throw new Response(null, {status: 404});
    }
  
    // json is a Remix utility for creating application/json responses
    // https://remix.run/docs/en/v1/utils/json
    return json({
      collection,
    });
}

export function meta({data}){
    return [
      {title: data?.collection?.title ?? 'Collection'},
      {description: data?.collection?.description},
    ];
};

export default function Shop () {
    const {collection} = useLoaderData();
    return (
        <div class="shop-home">
            <header>
                <Navbar />
            </header>
            <div class="shop-home-body"> 
                <body>
                    <h1>
                        <img class="shop-logo" src="https://i.imgur.com/0q0GRK3.gif"></img>
                    </h1>
                    <h2 class="new-arrivals">New Arrivals</h2>
                    <ProductGrid
                        collection={collection}
                        url={`/collections/${collection.handle}`}
                        class="shop-productgrid"
                    />
                </body>
            </div>
        </div>
    )
}

const COLLECTION_QUERY = `#graphql
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