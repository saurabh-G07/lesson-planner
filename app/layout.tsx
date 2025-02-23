"use client";

import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current route

  // Define routes where specific styles might be applied (optional)
  const specialRoutes = ["/", "/login", "/signup"];

  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex">
        {/* Main content wrapper */}
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
