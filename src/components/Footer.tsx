export default function Footer() {
  return (
    <footer className="py-4 px-4 border-t border-term-border bg-term-surface">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-[10px] text-term-dim font-mono">
          <span className="text-accent-500">gonzalo@portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-500">$ </span>
          echo $YEAR
        </p>
        <p className="text-[10px] text-term-dim font-mono">
          &copy; {new Date().getFullYear()} — MIT License
        </p>
      </div>
    </footer>
  )
}
