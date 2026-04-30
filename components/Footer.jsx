export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-12">
      <div className="max-w-[42rem] mx-auto px-6 py-10 text-sm text-stone-500">
        Built by{' '}
        <a
          href="https://mutomorro.com"
          target="_blank"
          rel="noreferrer"
          className="text-teal-700 hover:text-teal-800 underline-offset-2 hover:underline"
        >
          Mutomorro
        </a>
        .
      </div>
    </footer>
  )
}
