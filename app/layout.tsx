import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dungo\'s Oauth2 ',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto w-full h-full px-6 py-20 md:px-0">
          <div className="w-full h-full flex justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
