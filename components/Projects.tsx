import ProjectElement from "./ProjectElement"

export default function Projects() {
  const projects = [
    {
      title: "Cypher",
      description: "Cypher Is Training and Social Media Application for Dancers.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "DesignX",
      description: "A Online Designer with Collaborative Features (Figma Clone)",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Portfolio Showcase",
      description: "A dummy example project to showcase the portfolio layout.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="p-6 md:w-2/3">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectElement key={index} {...project} />
        ))}
      </div>
    </div>
  )
}