import { Box, Flex } from "@chakra-ui/react";
import navLinkedIn from '../assets/img/navLinkedIn.svg';
import navInsta from '../assets/img/navInsta.svg';
import navGithub from '../assets/img/navGithub.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Box ml={'10%'} mr={'10%'}>
                <Flex pt='30px' justifyContent='flex-end' alignItems='center' direction='column'>
                    <Box className="social-icon">
                        <a href="https://www.linkedin.com/in/francis-brokering"><img src={navLinkedIn} alt="linkedin" /></a>
                        <a href="https://www.instagram.com/fkb_0710/"><img src={navInsta} alt="insta" /></a>
                        <a href="https://github.com/FrancisBrokering/portfolio"><img src={navGithub} alt="github" /></a>
                    </Box>
                    <p>Last updated Nov 2022</p>
                </Flex>
            </Box>
        </footer>
    )
}
