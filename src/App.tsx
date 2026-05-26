import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-term-bg text-gray-100">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <GitHubRepos />
      <Contact />
      <Footer />
    </div>
  )
}
