import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de Alejandro Caballero Nieto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
      <NextUIProvider>
      {children}
      </NextUIProvider>

        </body>
    </html>
  );
}
