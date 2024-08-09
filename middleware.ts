import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { GetServerSidePropsContext } from "next";

const { auth } = NextAuth(authConfig);

export async function middleware(request: GetServerSidePropsContext) {
  return auth(request);
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
