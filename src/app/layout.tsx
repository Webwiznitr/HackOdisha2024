import type { Metadata } from "next"
import { Dela_Gothic_One, Inter, Archivo_Black, Archivo,Oxanium } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "700"],
})
const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
  weight: ["400"],
})
const oxanium=Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["700"],
})

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--archivo-black",
})

const archivo = Archivo({
  subsets: ["latin"],
  weight: "400",
  variable: "--archivo",
})

export const metadata: Metadata = {
  title: "HackOdisha 4.0",
  description: "hackodisha",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${archivo_black.variable} ${archivo.variable} ${delaGothicOne.variable} ${oxanium.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
