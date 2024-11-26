import Navigation from './Navigation'
import Projects from './Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <Navigation />
          <Projects />
        </div>
      </div>
    </div>
  )
}