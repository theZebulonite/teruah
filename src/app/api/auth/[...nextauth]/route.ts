import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // ID de cliente de Google
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Secreto de cliente de Google
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Secreto para firmar cookies
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirige al usuario a la URL especificada en `callbackUrl`
      if (url.startsWith("/")) return `${baseUrl}${url}`; // Permite rutas relativas
      else if (new URL(url).origin === baseUrl) return url; // Permite URLs absolutas dentro del mismo dominio
      return baseUrl; // Redirige a la URL base por defecto
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };