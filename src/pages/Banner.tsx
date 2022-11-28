import { Box, Grid, GridItem } from "@chakra-ui/react"
import {  useState } from "react";
import meIcon from "../assets/img/meIcon.svg"

export default function Banner() {
    return (
        <Box className='banner' id='home'>
            <Box ml={'10%'} mr={'10%'}>
                <Grid templateRows={{ sm: 'repeat(2, 1fr)', md: 'none' }} templateColumns={{ sm: 'none', md: 'repeat(8, 1fr)' }} gap={4} className="aligh-items-center">
                    <GridItem colSpan={4} >
                        <div className={"animate__animated animate__fadeIn"}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! my name is  Francis Brokering`}</h1>
                            <p>Nice to meet you! I was born and raised in Tokyo Japan and came to the United States when I was in my second year of high school. 
                                I am currently a student at the University of California Santa Cruz majoring in Computer Engineering with goals to one day become a software engineer.
                            </p>
                        </div>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <img src={meIcon} alt='Header Img'/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}