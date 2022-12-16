import { Box, GridItem } from "@chakra-ui/react"
type ProjectCardProps = {
  title: string,
  description: string,
  imgUrl: string,
  role: string,
  date: string,
  video: JSX.Element | null,
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <GridItem colSpan={2}>
        {props.video ? props.video :
          <div className="proj-imgbx">
            <img src={props.imgUrl} />
            <div className="proj-txtx">
              <h4>{props.role}</h4>
              <span>{props.date}</span>
            </div>
          </div>
        }
      </GridItem>
      <GridItem colSpan={3} mb={{ base: '50px', md: '0px' }}>
        <h1>{props.title}</h1>
        <Box>
          {props.description}
        </Box>
      </GridItem>
    </>
  )
}
