import nasaJet from "../assets/img/nasaJet.png";
import nasaGlobe from "../assets/img/nasaGlobe.png";
import rakutenSign from "../assets/img/rakutenSign.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Box, Image, Center, Grid, GridItem } from "@chakra-ui/react"
import { MobileExperience } from "../components/MobileExperience";

export const MobileWorkExperience = () => {
    const experience = [
        {
            title: "NASA Langley Research Center",
            role: "Rapid Prototyping Intern",
            logo: nasaGlobe,
            date: "Jun 2019 - Sep 2019",
            description: [" ● Modeled 3D components of the ACS3 Solar Sail using CAD software. Created prototypes of the parts using various 3D printers, which were then used for testing the design and practicing assembling the solar sail."],
        },
        {
            title: "NASA Ames Research Center",
            role: "Database Engineer Intern",
            logo: nasaJet,
            date: "Jun 2020 - Dec 2020",
            description: [" ● Created a database with US-made drone parts to connect OEMs and suppliers. The data included the origin of every component making up the drone part. This data was used by a NASA team designing a search-and-rescue drone for the U.S. Coast Guard."],
        },
        {
            title: "Rakuten Group, Inc.",
            role: "Frontend Engineer Intern",
            logo: rakutenSign,
            date: "Jun 2022 - Sep 2022",
            description: [" ● Helped the development of new software that will streamline the status monitoring of drones. These drones are expected to be used for Rakuten’s delivery services. In the final stages of this expect, this software will allow one pilot to monitor up to 50 drones at a time. (React.js, Typescript, Material-UI)", "● Completed 18 tickets for an e-commerce Progressive Web App used for Rakuten Drone Delivery. The tickets included fixing arising issues, implementing new features, and making design changes. (React.js, Typescript)"]
        },
    ];

    return (
        <Box display={{ base: 'flex', md: 'none' }}>
            <section className="experience" id="experience">
                <Center mr='25px' ml='25px'>
                    <Grid >
                        <GridItem >
                            <h2>Experience</h2>
                            <Box id="experience-tabs">
                                <Box id="slideInUp" >
                                    {
                                        experience.map((exp, index) => { return <MobileExperience key={index} {...exp} /> })
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
