import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Importa authOptions desde lib/auth.ts

const handler = NextAuth(authOptions);

// Exporta el manejador como GET y POST
export { handler as GET, handler as POST };