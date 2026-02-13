import "./globals.css";
import type { Metadata } from "next";
import { Saira_Condensed } from "next/font/google";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jonathan Amorim - Portfólio",
  description: "Portfólio profissional de Jonathan Amorim — Full Stack Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={saira.className + " bg-black text-white"}>
        {children}
      </body>
    </html>
  );
}
