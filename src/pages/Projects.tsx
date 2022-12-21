import { ProjectCard } from "../components/ProjectCard";
import carmackLanguageSelection from "../assets/img/CarmackLanguageSelection.png";
import printer from "../assets/img/3Dprinter.png";
import comingSoon from "../assets/img/comingSoon2.png";
import frogJump from "../assets/img/basys3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Box, Button, Center, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { useState } from "react";
import { ProjectOther } from "../components/ProjectsOther";

export const Projects = () => {
    const [projectTab, setProjectTab] = useState("first");

    const softwareProjects = [
        {
            title: "Carmack",
            role: "Web App Development",
            description: "Developed a web application with speech recognition to allow users to generate code with voice commands. The code is generated using the Codex API developed by OpenAI which has been released as private beta. The user can manuever through the website, select a programming language, generate code, edit the code, translate the code into a different language, copy the generated code to the clipboard, and download the code without any mouse/keyboard interactions.",
            imgUrl: carmackLanguageSelection,
            date: "Oct 2022 - Dec 2022",
            video: null,
            link: "carmack",
        },
        {
            title: "Capterm",
            role: "CLI/Web App Development",
            description: "Developed a CLI app that will take an output from the terminal and return a shareable URL to a web page with the output. Users can use their GitHub account to log in and see previous outputs generated in the past. The output error/code will be indented and color coded making it easier to read.",
            imgUrl: comingSoon,
            date: "Apr 2022 - Dec 2022",
            video: null,
            link: null
        },
    ];

    const hardwareProjects = [
        {
            title: "Jumping Frog",
            role: "Basys3 Board",
            description: "Created a Jumping Frog game using the Basys3 board and a VGA monitor. The top-level design, included a counter, a selector, a  hex converter, a ring counter, a LFSR, a clock, a VGA displayer, a frog statemachine, movement module for the plants and frog, a edge detector, and the game state machine, all implemented using Verilog.",
            imgUrl: frogJump,
            date: "May 2022 - June 2022",
            video: <iframe className="nav-video" width="560" height="315" src="https://www.youtube.com/embed/BLGiG5rQo5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
            link: null
        },
        {
            title: "Ultem (PEI) Printer",
            role: "3D printer modification",
            description: "Modified the LulzBot TAZ 6 3D printer in order to print Ultem (polyetherimide). Many modifications were needed such as flashing the firmware to print at high temperatures beyond the printer's limit, creating an enclosure and installing heat lamps to prevent the plastic from warping due to the cold air, and installing a liquid cooling system to prevent the motors from overheating.",
            imgUrl: printer,
            date: "Jun 2019 - Sep 2019",
            video: null,
            link: null
        },
    ];

    return (
        <section className="projects" id="projects">
            <Box ml={{ base: '25px', md: '10%' }} mr={{ base: '25px', md: '10%' }}>
                <Grid >
                    <GridItem >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <Box mt='20px' id="projects-tabs">
                                        <Flex direction="row" className="nav-pills" id="pills-tab">
                                            <Center className="nav-item nav-link-first">
                                                <Link className={projectTab === 'first' ? "nav-link nav-link-active" : "nav-link"} onClick={() => setProjectTab("first")}>Software</Link>
                                            </Center>
                                            <Center className="nav-item nav-link-second">
                                                <Link className={projectTab === 'second' ? "nav-link nav-link-active" : "nav-link"} onClick={() => setProjectTab("second")}>Hardware</Link>
                                            </Center>
                                            <Center className="nav-item nav-link-third">
                                                <Link className={projectTab === 'third' ? "nav-link nav-link-active" : "nav-link"} onClick={() => setProjectTab("third")}>Others</Link>
                                            </Center>
                                        </Flex>
                                        <Box mt='50px' id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            {
                                                projectTab === 'first' &&
                                                <Grid templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }} gap={{ base: '0px', md: '20px' }}>
                                                    {softwareProjects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}
                                                </Grid>
                                            }
                                            {
                                                projectTab === 'second' &&
                                                <Grid templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }} gap={{ base: '0px', md: '20px' }}>
                                                    {hardwareProjects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}
                                                </Grid>
                                            }
                                            {
                                                projectTab === 'third' && <ProjectOther />
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
