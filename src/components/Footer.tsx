export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-gray-800 bg-gray-950">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Gonzalo Sola
        </p>


      </div>
    </footer>
  )
}
