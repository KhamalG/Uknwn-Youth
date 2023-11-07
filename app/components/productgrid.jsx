import ProductCard from './productcard';
export default function ProductGrid({collection, url}) {

  return (
    <section class="product-grid-wrapper">
      <div class="product-grid">
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}