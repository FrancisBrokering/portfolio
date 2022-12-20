import { Box, Image } from "@chakra-ui/react"
type MobileExperienceProps = {
    title: string,
    role: string,
    logo: string,
    date: string,
    description: (string)[],
}

export const MobileExperience = (props: MobileExperienceProps) => {
    return (
        <>
            <Box mb='50px'>
                <Image
                    rounded='10px'
                    objectFit='cover'
                    src={props.logo}
                    alt='nasa Jet'
                />
                <h1>
                    {props.title}
                </h1>
                <Box pb='20px'>
                    <i>{props.role}</i>
                    <br />
                    <i>{props.date}</i>
                </Box>
                <Box >
                    { props.description.map((desc, index) => (<Box mb={index!=props.description.length-1?'20px':'0px'}><i text-align='left' >{desc}</i><br /></Box>))}
                </Box>
            </Box>
        </>
    )
}
