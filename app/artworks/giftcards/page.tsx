import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const filteredProducts = products.data.filter(
    (product) => product.metadata?.category === "giftcard"
  );

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
         beautiful giftcards
      </h1>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-center text-muted-foreground">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
