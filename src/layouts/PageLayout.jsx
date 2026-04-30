import Nav from '../components/Nav.jsx'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
    </div>
  )
}
