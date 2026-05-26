import { useGitHubRepos } from '../hooks/useGitHubRepos'

export default function GitHubRepos() {
  const { repos, loading } = useGitHubRepos('chalo2812')

  return (
    <section id="github" className="py-20 px-4 bg-term-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-term-dim font-mono">
            <span className="text-accent-500">gonzalo@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-500">$ </span>
            curl api.github.com/users/chalo2812/repos
          </span>
        </div>

        <div className="border border-term-border rounded p-4 bg-term-surface/50 mb-10">
          {loading ? (
            <div className="flex items-center gap-2 justify-center py-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-blink" />
              <span className="text-xs text-term-dim font-mono">cargando...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-term-border rounded p-3 bg-term-surface hover:border-accent-500/50 transition-all block"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-accent-500 text-xs font-mono">📁</span>
                    <h3 className="text-xs font-mono text-gray-200 truncate">{repo.name}</h3>
                  </div>

                  {repo.description && (
                    <p className="text-[10px] text-term-dim font-mono mb-2 leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  <div className="flex items-center gap-3 text-[10px] text-term-dim font-mono">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
