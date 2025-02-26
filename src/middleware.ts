import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin", // Ruta de inicio de sesión
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Protege todas las rutas bajo /admin
};