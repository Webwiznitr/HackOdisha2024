import type { Metadata } from "next";
import { Dela_Gothic_One, Inter } from "next/font/google";
import "./globals.css";

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
        <html lang="en">
            <body className={`${inter.variable} ${delaGothicOne.variable}`}>
                {children}
            </body>
        </html>
    );
}
