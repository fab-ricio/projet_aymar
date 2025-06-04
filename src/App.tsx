import './App.css'
import Hero from './components/hero.jsx'
import Projects from './components/projects.jsx'
import Comment from './components/comment.jsx'

function App() {
  return (
    <div className="container mt-5">
      <Hero />
      <Projects />
      <Comment />
      {/* Page vide, prêt à commencer */}
    </div>
  )
}

export default App
