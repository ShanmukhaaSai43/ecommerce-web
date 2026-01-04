
import { redirect, useLoaderData } from 'react-router';
import { getProductById } from "~/services/api.server"
import { commitCartSession, getCartSession } from '~/utils/session.server';

export const loader = async ({params}: any) => {
    return getProductById(params.id);
}


export const action = async ({ request, params }: any) => {
  const session = await getCartSession(request);

  const cart = session.get("cart") || [];

  cart.push({
    productId: params.id,
    quantity: 1,
  });

  session.set("cart", cart);

  return redirect("/cart", {
    headers: {
      "Set-Cookie": await commitCartSession(session),
    },
  });
};

export default function ProductDetails() {
  const product = useLoaderData<typeof loader>();

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Price: <span>$</span> {product.price}</p>

      <form method="post">
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

