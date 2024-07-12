import type { Metadata } from "next"
import { Inter, Archivo_Black, Archivo } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${archivo_black.variable} ${archivo.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
