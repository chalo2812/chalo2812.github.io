import { useState, useEffect } from 'react'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 6))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return { repos, loading }
}
