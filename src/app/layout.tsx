import LocaleProvider from '@/language/locale'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guilherme Pimenta',
  description: 'Guilherme Pimenta\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
