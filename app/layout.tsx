import "./globals.css"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Stoira - AI-Powered Media House",
  description: "Experience the future of AI-driven media with Stoira's innovative services and products.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

