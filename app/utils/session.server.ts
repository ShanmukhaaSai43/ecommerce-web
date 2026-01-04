import { createCookieSessionStorage } from "react-router";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "cart_session",
    secrets: ["secret-key"], 
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function getCartSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export function commitCartSession(session: any) {
  return sessionStorage.commitSession(session);
}
