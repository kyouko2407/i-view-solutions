import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 