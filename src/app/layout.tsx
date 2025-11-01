import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WhiteLabelEcommerce - Sua loja online completa",
  description: "Encontre os melhores produtos para pets, casa, jardim e muito mais. Entrega rápida, preços competitivos e atendimento especializado.",
  keywords: "ecommerce, pets, casa, jardim, produtos, loja online, entrega rápida",
  authors: [{ name: "WhiteLabelEcommerce Team" }],
  creator: "WhiteLabelEcommerce",
  publisher: "WhiteLabelEcommerce",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://whitelabelecommerce.com",
    title: "WhiteLabelEcommerce - Sua loja online completa",
    description: "Encontre os melhores produtos para pets, casa, jardim e muito mais.",
    siteName: "WhiteLabelEcommerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteLabelEcommerce - Sua loja online completa",
    description: "Encontre os melhores produtos para pets, casa, jardim e muito mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
