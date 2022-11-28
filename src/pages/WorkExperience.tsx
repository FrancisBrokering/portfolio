import nasaJet from "../assets/img/nasaJet.png";
import nasaGlobe from "../assets/img/nasaGlobe.png";
import rakutenSign from "../assets/img/rakutenSign.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Box, Image, Button, Center, Container, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { useState } from "react";
import { ExperienceCard } from "../components/ExperienceCard";

export const WorkExperience = () => {
    const [experienceTab, setExperienceTab] = useState("nasaAmes");

    const experience = [
        {
            title: "NASA Langley Research Center",
            description: "Rapid Prototyping Intern",
            logo: "nasaLangley",
            date: "Jun 2019 - Sep 2019",
            selectedTab: experienceTab,
        },
        {
            title: "NASA Ames Research Center",
            description: "Database Engineer Intern",
            logo: "nasaAmes",
            date: "Jun 2020 - Dec 2020",
            selectedTab: experienceTab,
        },
        {
            title: "Rakuten Group, Inc.",
            description: "Frontend Engineer Intern",
            logo: "rakuten",
            date: "Jun 2022 - Sep 2022",
            selectedTab: experienceTab,
        },
    ];

    return (
        <section className="projects" id="experience">
            <Box ml={'10%'} mr={'10%'}>
                <Grid >
                    <GridItem >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Work Experience</h2>
                                    <Box id="projects-tabs">
                                        <Box mt='50px' id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Box mb='30px'>
                                                <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap='20px'>
                                                    {
                                                        experience.map((ex, index) => {
                                                            return (
                                                                <Box onMouseEnter={() => setExperienceTab(ex.logo)} >
                                                                    <ExperienceCard
                                                                        key={index}
                                                                        {...ex}
                                                                    />
                                                                </Box>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </Box>
                                            {
                                                experienceTab === 'nasaLangley' &&
                                                <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap='20px'>
                                                    <GridItem colSpan={1} rowSpan={1}>
                                                        <Image
                                                            objectFit='cover'
                                                            src={nasaGlobe}
                                                            alt='nasa Jet'
                                                        />
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <h1>
                                                            {"Rapid Prototyping Intern"}
                                                        </h1>
                                                        <Box textAlign='left'>
                                                            ● Modeled 3D components of the ACS3 Solar Sail using CAD software. Created prototypes of the parts using various 3D printers, which were then used for testing the design and practicing assembling the solar sail.
                                                        </Box>
                                                    </GridItem>
                                                </Grid>
                                            }
                                            {
                                                experienceTab === 'nasaAmes' &&
                                                <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap='20px'>
                                                    <GridItem colSpan={2}>
                                                        <Image
                                                            objectFit='cover'
                                                            src={nasaJet}
                                                            alt='nasa Jet'
                                                        />
                                                    </GridItem>
                                                    <GridItem colSpan={2}>
                                                        <h1>
                                                            {"Database Engineer Intern"}
                                                        </h1>
                                                        <Box textAlign='left'>
                                                            ● Created a database with US-made drone parts to connect OEMs and suppliers. The data included the origin of every component making up the drone part. This data was used by a NASA team designing a search-and-rescue drone for the U.S. Coast Guard.
                                                        </Box>
                                                    </GridItem>
                                                </Grid>

                                            }
                                            {
                                                experienceTab === 'rakuten' &&
                                                <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap='20px'>
                                                    <GridItem colSpan={1} rowSpan={2}>
                                                        <Image
                                                            objectFit='cover'
                                                            src={rakutenSign}
                                                            alt='nasa Jet'
                                                        />
                                                    </GridItem>
                                                    <GridItem colSpan={2} rowSpan={1}>
                                                        <h1>
                                                            {"Frontend Engineer Intern"}
                                                        </h1>
                                                        <Box textAlign='left'>
                                                            ● Pioneered the development of new software that will streamline the status monitoring of drones. These drones are
                                                            expected to be used for Rakuten’s delivery services. In the final stages of this project, this software will allow one pilot
                                                            to monitor up to 50 drones at a time. (React.js, Typescript, Material-UI)
                                                        </Box>
                                                    </GridItem>
                                                    <GridItem colSpan={2} rowSpan={1}>
                                                        <Box textAlign='left'>
                                                            ● Completed 18 tickets for an e-commerce Progressive Web App used for Rakuten Drone Delivery. The tickets included
                                                            fixing arising issues, implementing new features, and making design changes. (React.js, Typescript)
                                                        </Box>
                                                    </GridItem>
                                                </Grid>
                                            }
                                        </Box>
                                    </Box>
                                </div>}
                        </TrackVisibility>
                    </GridItem>
                </Grid>
            </Box>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
