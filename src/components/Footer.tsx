import { Box, Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Box ml={'10%'} mr={'10%'}>
                <Flex pt='30px' justifyContent='flex-end' alignItems='center'  direction='column'>
                    <Box className="social-icon">
                        <a href="https://www.linkedin.com/in/francis-brokering"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/fkb_0710/"><img src={navIcon3} alt="" /></a>
                    </Box>
                    <p>Last updated Nov 2022</p>
                </Flex>
            </Box>
        </footer>
    )
}
