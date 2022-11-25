import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Box } from "@chakra-ui/react";

export default function Skills(){
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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box className="skill" id="skills">
        <Box className="container"  ml={'10%'} mr={'10%'}>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are my software engineering-skill breakdown.<br></br> *Skill percentage is subjective.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Box>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </Box>
  )
}
