// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { Box, Button, Center, Container, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { useState } from "react";

export const Projects = () => {
    const [projectTab, setProjectTab] = useState("first");

    const projects = [
        {
            title: "Carmack",
            description: "Web App Development",
            imgUrl: projImg1,
        },
        {
            title: "Capterm",
            description: "CLI/Web App Development",
            imgUrl: projImg2,
        },
        {
            title: "Svadilfari",
            description: "App Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Box ml={'10%'} mr={'10%'}>
                <Grid >
                    <GridItem >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Box id="projects-tabs">
                                        <Flex direction="row" className="nav-pills" id="pills-tab">
                                            <Center className="nav-item nav-link-first">
                                                <Link className={projectTab === 'first'?"nav-link nav-link-active":"nav-link"} onClick={() => setProjectTab("first")}>Software</Link>
                                            </Center>
                                            <Center className="nav-item nav-link-second">
                                                <Link className={projectTab === 'second'?"nav-link nav-link-active":"nav-link"} onClick={() => setProjectTab("second")}>Hardware</Link>
                                            </Center>
                                            <Center className="nav-item nav-link-third">
                                                <Link className={projectTab === 'third'?"nav-link nav-link-active":"nav-link"} onClick={() => setProjectTab("third")}>Internship</Link>
                                            </Center>
                                        </Flex>
                                        <Box mt='50px' id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            {
                                                projectTab === 'first' &&
                                                <Box>
                                                    <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(3, 1fr)' gap='20px'>
                                                        {
                                                            projects.map((project, index) => {
                                                                return (
                                                                    <ProjectCard
                                                                        key={index}
                                                                        {...project}
                                                                    />
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                </Box>
                                            }
                                            {
                                                projectTab === 'second' &&
                                                <Box>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                                </Box>
                                            }
                                            {
                                                projectTab === 'third' &&
                                                <Box>
                                                    <p>● Modified a 3D printer by flashing the firmware, creating an enclosure, and installing heat lamps and a liquid cooling system, in order to print Ultem (polyetherimide). The Solar Sail required parts created with Ultem.</p>
                                                </Box>
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
