import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';


export async function loader({params, context}) {
  const {handle} = params;
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle,
    },
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }
  return json({
    handle,
    product
  });
}

export default function ProductHandle() {
    const {handle, product} = useLoaderData();
    console.log("handle: ", handle);
  
    return (
      <div className="product-wrapper">
        <h2>Product Handle: {handle}</h2>
        <PrintJson data={product} />
      </div>
    );
}


function PrintJson({data}) {
    return (
      <details class="">
        <summary>Product JSON</summary>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </details>
    );
}

const PRODUCT_QUERY = `#graphql
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
    }
  }
`;