import { GridItem } from "@chakra-ui/react"
type ProjectCardProps ={
    title: string,
    description: string,
    imgUrl: string,
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <GridItem >
      <div className="proj-imgbx">
        <img src={props.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
    </GridItem>
  )
}
