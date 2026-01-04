const VITE_API_BASE_URL = process.env.VITE_API_BASE_URL!;

export async function getProducts(){
    const res = await fetch(`${VITE_API_BASE_URL}/products`)
    return res.json();
}

export async function getProductById(id: string){
    const res = await fetch(`${VITE_API_BASE_URL}/products/${id}`)
    return res.json();
}

export async function createOrder(order: any) {
  const res = await fetch(`${VITE_API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  return res.json();
}