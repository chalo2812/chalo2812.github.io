import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <GitHubRepos />
      <Contact />
      <Footer />
    </div>
  )
}
