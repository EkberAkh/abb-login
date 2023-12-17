import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Provider";
import "./globals.css";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABB",
  description: "ABB Business",
};

interface IProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
