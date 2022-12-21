import { Box, Button, GridItem, Img } from "@chakra-ui/react"
import { Link } from "react-router-dom"
type ProjectCardProps = {
  title: string,
  description: string,
  imgUrl: string,
  role: string,
  date: string,
  video: JSX.Element | null,
  link: string | null,
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <GridItem colSpan={2}>
        {props.video ? props.video :
            (props.link ? (<Link to={props.link}><div className="proj-imgbx">
              <Img src={props.imgUrl} />
              <div className="proj-txtx">
                <h4>{props.role}</h4>
                <span>{props.date}</span>
              </div>
            </div></Link>) : (<div className="proj-imgbx">
              <Img src={props.imgUrl} />
              <div className="proj-txtx">
                <h4>{props.role}</h4>
                <span>{props.date}</span>
              </div>
            </div>))
          }
      </GridItem>
      <GridItem colSpan={3} mb={{ base: '50px', md: '0px' }}>
        <h1>{props.title}</h1>
        <Box>
          {props.description}
        </Box>
        {props.link ? <Link to={props.link}> <Button minWidth='140px' mt='30px' size='lg' mb='5px' ml='0px' backgroundColor={'transparent'} className="navbar-button" >Learn More</Button>
        </Link> : <></>}
      </GridItem>
    </>
  )
}
