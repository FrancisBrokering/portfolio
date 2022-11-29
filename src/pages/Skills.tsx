import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import getProgrammingLanguageSvg from '../data/ProgrammingLanguage'
import colorSharp from "../assets/img/color-sharp.png"
import { Box, Center, Flex } from "@chakra-ui/react";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Box className="skill" id="skills" >
            <Box className="container" ml={{base: '25px', md:'10%'}} mr={{base: '25px', md:'10%'}}>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Here are programming languages and frameworks I've used for internships, assignments, and personal projects.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('python', '130px', '130px')}
                                    </Center>
                                    <h5>Python</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('c', '130px', '130px')}
                                    </Center>
                                    <h5>C</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('cpp', '130px', '130px')}
                                    </Center>
                                    <h5>C++</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('javascript', '130px', '130px')}
                                    </Center>
                                    <h5>Javascript</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('typescript', '130px', '130px')}
                                    </Center>
                                    <h5>Typescript</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('css', '130px', '130px')}
                                    </Center>
                                    <h5>CSS</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('html', '130px', '130px')}
                                    </Center>
                                    <h5>HTML</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('go', '130px', '130px')}
                                    </Center>
                                    <h5>Go</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('react', '130px', '130px')}
                                    </Center>
                                    <h5>React.js</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('redux', '130px', '130px')}
                                    </Center>
                                    <h5>Redux</h5>
                                </Flex>
                                <Flex direction='column' justifyContent='center' className="item" gap='3'>
                                    <Center>
                                        {getProgrammingLanguageSvg('node', '130px', '130px')}
                                    </Center>
                                    <h5>Node.js</h5>
                                </Flex>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Box>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </Box>
    )
}
