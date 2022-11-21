import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import headerImg from "../assets/img/header-img.svg"

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;
    return (
        <Box className='banner' id='home'>
            <Box ml={'10%'} mr={'10%'}>
                <Grid templateRows={{ base: 'repeat(2, 1fr)', md: 'none' }} templateColumns={{ base: 'none', md: 'repeat(7, 1fr)' }} gap={4} className="aligh-items-center">
                    <GridItem colSpan={4} >
                        <div className={"animate__animated animate__fadeIn"}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Francis`} <span className="txt-rotate" ><br /><span className="wrap">I'm a Software Engieer</span></span></h1>
                            <p>Nice to meet you! My name is Francis Brokering.I was born and raised in Tokyo Japan and came to the United States when I was in my second year of high school. 
                                I am currently a student at the University of California Santa Cruz majoring in Computer Engineering with goals to one day become a software engineer.
                            </p>
                            <button background-color={'transparent'} onClick={() => console.log('connect')} >Let’s Connect <ArrowForwardIcon w={25} /></button>
                        </div>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <img src={headerImg} alt='Header Img' />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}