import type { LinksFunction } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Navbar from "~/components/Navbar";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles as string },
];

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />   
      </head>
      <body>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
