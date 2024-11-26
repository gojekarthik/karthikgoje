import { X, Linkedin, GitBranch, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-gray-100 p-8 md:w-1/4  flex flex-col justify-between">
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 text-white">Karthik Goje</h1>
          <p className="text-xl text-gray-300">Hyderabad | India</p>
          <p className="text-sm mt-2 text-gray-400">Web Dev | Art | Dance</p>
        </div>
        <div className="space-y-4">
          <NavItem href="https://x.com/karthik_goje" icon={<X size={24} />} text="Twitter" />
          <NavItem href="https://www.linkedin.com/in/goje-karthik-a98a62124/" icon={<Linkedin size={24} />} text="LinkedIn" />
          <NavItem href="https://github.com/gojekarthik" icon={<GitBranch size={24} />} text="Github" />
          <NavItem href="mailto:karthikgoje2003@gmail.com?" icon={<Mail size={24} />} text="Email" />
        </div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <Button variant="outline" className="w-full bg-gray-800 hover:bg-gray-700 text-gray-100 border-gray-700">
          Download Resume
        </Button>
      </div>
    </nav>
  )
}

function NavItem({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group"
    >
      <span className="text-gray-400 group-hover:text-gray-100 transition-colors">{icon}</span>
      <span className="text-lg group-hover:translate-x-1 transition-transform">{text}</span>
    </a>
  )
}