import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="card">
      <h1>Welcome to Ecommerce Web</h1>
      <p>This is a simple SSR eCommerce app built using React Router.</p>
      <br />
      <a href="/products">Browse Products </a>
    </div>
  );
}
