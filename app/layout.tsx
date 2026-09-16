import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corretora de imóveis",
  description: "Venda de impreendimentos residenciais",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
