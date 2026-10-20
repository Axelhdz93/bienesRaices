import { Suspense } from "react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Bienes raices",
  description: "Mi proyecto de bienes raices",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <ViewTransitions>
    <html
      lang="es"
      className={`${quickSand.className} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col px-4">

        <Suspense fallback={<div>Cargando...</div>}>
        {children}
        </Suspense> 

      </body>
    </html>
  </ViewTransitions>  
 
  );
}
