import 'aos/dist/aos.css';
import { Metadata } from 'next';
import "./globals.css";
import { Rajdhani, Chakra_Petch } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra-petch',
})

export const metadata: Metadata = {
  title: 'Arcane',
  description: 'Welcome to the world of Piltover and Zaun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${chakraPetch.variable}`}>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
