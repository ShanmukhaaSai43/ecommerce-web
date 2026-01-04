import { useLoaderData } from "react-router";
import { getCartSession } from "~/utils/session.server";

export const loader = async ({ request }: any) => {
  const session = await getCartSession(request);
  const cart = session.get("cart") || [];
  return cart;
};

export default function Cart() {
  const cart = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="card">
          <ul>
            {cart.map((item: any, index: number) => (
              <li key={index}>
                Product ID: {item.productId} | Qty: {item.quantity}
              </li>
            ))}
          </ul>

          <a href="/checkout">Proceed to Checkout </a>
        </div>
      )}
    </div>
  );
}