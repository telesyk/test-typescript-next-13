import Link from 'next/link'

export default function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <nav className="page-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/tool">Tools</Link>
          </nav>
        </div>
      </header>
      <main className="page-main">
        <div className="container">{children}</div>
      </main>
      <footer className="page-footer">
        <div className="container">
          <p>Footer here</p>
        </div>
      </footer>
    </>
  )
}
