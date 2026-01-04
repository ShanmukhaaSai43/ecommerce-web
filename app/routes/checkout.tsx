import { useLoaderData } from "react-router";
import { getCartSession, commitCartSession } from "~/utils/session.server";
import { createOrder } from "~/services/api.server";
import { redirect } from "react-router";

export const loader = async ({ request }: any) => {
  const session = await getCartSession(request);
  const cart = session.get("cart") || [];

  if (cart.length === 0) {
    return redirect("/cart");
  }

  return cart;
};

export const action = async ({ request }: any) => {
  const session = await getCartSession(request);
  const cart = session.get("cart") || [];

  // SIMPLE calculation
  const totalAmount = cart.length * 1000;

  await createOrder({
    totalAmount,
    items: cart.map((item: any) => ({
      productId: item.productId,
      productName: `Product ${item.productId}`,
      price: 1000,
      quantity: item.quantity,
    })),
  });

  // Clear cart
  session.set("cart", []);

  return redirect("/success", {
    headers: {
      "Set-Cookie": await commitCartSession(session),
    },
  });
};

export default function Checkout() {
  const cart = useLoaderData<typeof loader>();

  return (
    <div className="card">
      <h1>Checkout</h1>

      <ul>
        {cart.map((item: any, index: number) => (
          <li key={index}>
            Product ID: {item.productId} | Qty: {item.quantity}
          </li>
        ))}
      </ul>

      <form method="post">
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
