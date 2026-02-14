import "./globals.css";
import { siteMetadata } from "./shared-metada";
import { Saira_Condensed } from "next/font/google";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        {children}
      </body>
    </html>
  );
}
