import { Button } from "@/components/ui/button"

interface ProjectElementProps {
  title: string
  description: string
  image: string
}

export default function ProjectElement({ title, description, image }: ProjectElementProps) {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-100 p-4 rounded-lg">
      <img src={image} alt={title} className="w-full md:w-1/3 rounded" />
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-x-2">
          <Button  variant="outline">Github</Button>
          <Button className="bg-gray-800">Visit Web</Button>
        </div>
      </div>
    </div>
  )
}


export function StackElement({stack}:{stack:string}){
    return <div className="bg-">
        {stack}
    </div>
}