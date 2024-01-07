import type { Metadata } from 'next'
import "boxicons/css/boxicons.min.css"
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'MRIsdi - Home',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Poppins'] bg-[#1e1e1e]">{children}</body>
    </html>
  )
}
