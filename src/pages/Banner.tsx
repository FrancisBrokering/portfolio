import { Box, Grid, GridItem } from "@chakra-ui/react"
import meIcon from "../assets/img/meIcon.png"

export default function Banner() {
    return (
        <Box className='banner' id='home'>
            <Box ml={{base: '25px', md:'10%'}} mr={{base: '25px', md:'10%'}}>
                <Grid templateRows={{ sm: 'repeat(2, 1fr)', md: 'none' }} templateColumns={{ sm: 'none', md: 'repeat(8, 1fr)' }} gap={4} className="aligh-items-center">
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'center', md:'left'}} className={"animate__animated animate__fadeIn"}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! my name is  Francis Brokering`}</h1>
                            <p>Nice to meet you! I was born and raised in Tokyo Japan and came to the United States when I was in my second year of high school. 
                                I am currently a student at the University of California Santa Cruz majoring in Computer Engineering with goals to one day become a software engineer.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <img src={meIcon} alt='Header Img'/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}