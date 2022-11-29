import nasaJet from "../assets/img/nasaJet.png";
import nasaGlobe from "../assets/img/nasaGlobe.png";
import rakutenSign from "../assets/img/rakutenSign.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Box, Image, Button, Center, Container, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { useState } from "react";
import { ExperienceCard } from "../components/ExperienceCard";

export const MobileWorkExperience = () => {
    const experience = [
        {
            title: "NASA Langley Research Center",
            description: "Rapid Prototyping Intern",
            logo: "nasaLangley",
            date: "Jun 2019 - Sep 2019",
        },
        {
            title: "NASA Ames Research Center",
            description: "Database Engineer Intern",
            logo: "nasaAmes",
            date: "Jun 2020 - Dec 2020",
        },
        {
            title: "Rakuten Group, Inc.",
            description: "Frontend Engineer Intern",
            logo: "rakuten",
            date: "Jun 2022 - Sep 2022",
        },
    ];

    return (
        <Box display={{base: 'flex', md:'none'}}>
            <section className="projects" id="experience">
                <Center mr='25px' ml='25px'>
                    <Grid >
                        <GridItem >
                            <h2>Work Experience</h2>
                            <Box id="projects-tabs">
                                <Box id="slideInUp" >
                                    <Box mb='30px'>
                                        <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)'>
                                        </Grid>
                                    </Box>
                                    {
                                        <Box mb='75px'>
                                            <Image
                                                objectFit='cover'
                                                src={nasaGlobe}
                                                alt='nasa Jet'
                                            />
                                            <h1>
                                                {"NASA Langley Research Center"}
                                            </h1>
                                            <Box>
                                                <i>Rapid Prototyping Intern</i>
                                            </Box>
                                            <Box textAlign='left'>
                                                ● Modeled 3D components of the ACS3 Solar Sail using CAD software. Created prototypes of the parts using various 3D printers, which were then used for testing the design and practicing assembling the solar sail.
                                            </Box>
                                        </Box>
                                    }
                                    {
                                        <Box mb='75px'>
                                            <Image
                                                objectFit='cover'
                                                src={nasaJet}
                                                alt='nasa Jet'
                                            />
                                            <h1>
                                                {"NASA Ames Research Center"}
                                            </h1>
                                            <Box>
                                                <i>Database Engineer Intern</i> (Jun 2020 - Dec 2020)
                                            </Box>
                                            <Box textAlign='left'>
                                                ● Created a database with US-made drone parts to connect OEMs and suppliers. The data included the origin of every component making up the drone part. This data was used by a NASA team designing a search-and-rescue drone for the U.S. Coast Guard.
                                            </Box>
                                        </Box>

                                    }
                                    {
                                        <Box>
                                            <Image
                                                objectFit='cover'
                                                src={rakutenSign}
                                                alt='nasa Jet'
                                            />
                                            <h1>
                                                {"Frontend Engineer Intern"}
                                            </h1>
                                            <Box textAlign='left'>
                                                ● Pioneered the development of new software that will streamline the status monitoring of drones. These drones are
                                                expected to be used for Rakuten’s delivery services. In the final stages of this project, this software will allow one pilot
                                                to monitor up to 50 drones at a time. (React.js, Typescript, Material-UI)
                                            </Box>
                                            <Box textAlign='left'>
                                                ● Completed 18 tickets for an e-commerce Progressive Web App used for Rakuten Drone Delivery. The tickets included
                                                fixing arising issues, implementing new features, and making design changes. (React.js, Typescript)
                                            </Box>
                                        </Box>
                                    }
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                </Center>
                <img className="background-image-right" src={colorSharp2}></img>
            </section>
        </Box>
    )
}
