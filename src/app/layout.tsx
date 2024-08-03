
import type { Metadata } from "next"
import { Dela_Gothic_One, Inter, Archivo_Black, Archivo,Oxanium, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Link from "next/link"


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "300", "400", "700"],
});
const delaGothicOne = Dela_Gothic_One({
    subsets: ["latin"],
    variable: "--font-dela-gothic-one",
    weight: ["400"],
});
const oxanium = Oxanium({
    subsets: ["latin"],
    variable: "--font-oxanium",
    weight: ["400"],
});

const archivo_black = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
    variable: "--archivo-black",
});

const archivo = Archivo({
    subsets: ["latin"],
    weight: "400",
    variable: "--archivo",
});

const bebas = Bebas_Neue({
    subsets: ["latin"],
    variable: "--bebas-neue",
    weight: "400",
});

export const metadata: Metadata = {
    title: "HackOdisha 4.0",
    description: "hackodisha",
   
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body
        className={`${inter.className} ${archivo_black.variable} ${archivo.variable} ${delaGothicOne.variable} ${oxanium.variable}`}
      >
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KXW0465LB2"></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KXW0465LB2'); `}
        </Script>
      </body>
    </html>
  )

}
