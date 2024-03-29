import './globals.css'
import PageBody from './components/layout/PageBody'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="page">
        <PageBody>{children}</PageBody>
      </body>
    </html>
  )
}
