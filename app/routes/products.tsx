import type { Route } from "./+types/products";
import { useLoaderData } from "react-router";
import { getProducts } from "~/services/api.server"

export const loader = async () => {
    const products = await getProducts();
    return products;
};
export default function Products() {
    const products = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>Products</h1>

            <div className="product-grid">
                {products.map((p: any) => (
                    <div key={p.id} className="product-card">
                        <a href={`/products/${p.id}`}>
                            <h3>{p.name}</h3>
                            <p> <span>$</span> {p.price}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}