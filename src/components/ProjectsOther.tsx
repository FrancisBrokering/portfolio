import { Box, Button, Center, Text, Container, Flex, Grid, GridItem, Link, List, ListIcon, ListItem, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { ReactComponent as Svadilfari } from '../assets/img/svadilfari.svg'
import { ReactComponent as Leetcode } from '../assets/img/leetcode.svg'
import { ReactComponent as UnityLogo } from '../assets/img/unityLogo.svg'

type ProjectCardProps = {
    title: string,
    description: string,
    imgUrl: string,
}

export const ProjectOther = () => {
    return (
        <Box>
            <Box textAlign='left' fontSize='20px' mb='30px'>Here are contributions and smaller projects</Box>

            <Flex direction='column'>
                <Flex direction='column'>
                    <Flex direction='row' height='30px'>
                        <Svadilfari width='30px' height='30px' />
                        <Box textAlign='left' ml='5px' fontSize='25px'>Svdilfari</Box>
                    </Flex>
                    <Box ml='15px'>Contributed to the development of a Safari extensions app on iOS 15 called
                        “Svadilfari” by adding a feature that checks if Safari is supported on the user’s
                        device. Accomplished this by checking the user agent and changing the display based
                        on the results. This app was selected as "Best Apps and Games of September 2021".
                    </Box>

                    <Link href='https://www.svadilfari.app/' className={"other"} ml='15px'>
                        <button background-color={'transparent'} >Learn More <ArrowForwardIcon w={25} /></button>
                    </Link>
                    <Link href='https://github.com/shumbo/Svadilfari/pull/34/commits/e903a1eec4c35e2dbfe9c0fc2c40db4bb42279cb' className={"other"} ml='15px'>
                        <button background-color={'transparent'} >My Contrbution <ArrowForwardIcon w={25} /></button>
                    </Link>
                </Flex>

                <Flex direction='column' marginTop='20px'>
                    <Flex direction='row' height='30px'>
                        <Leetcode width='30px' height='30px' />
                        <Box textAlign='left' ml='5px' fontSize='25px'>Leetcode Test Case </Box>
                    </Flex>
                    <Box ml='15px'>Found a missing Test Case in leetcode problem 1971 <i>(Find if Path Exists in Graph).</i> Contributed to the test case by providing examples of how the code breaks with specif inputs.
                    </Box>
                    <Link href='https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/9614' className={"other"} ml='15px'>
                        <button background-color={'transparent'} >My Contrbution <ArrowForwardIcon w={25} /></button>
                    </Link>
                </Flex>

                <Flex direction='column' marginTop='20px'>
                    <Flex direction='row' height='30px'>
                        <UnityLogo width='30px' height='30px' />
                        <Box textAlign='left' ml='5px' fontSize='25px'>Building History in 3D</Box>
                    </Flex>
                    <Box ml='15px'>
                    Researched local historical buildings and modeled our town using 3D CAD software. Imported models into Unity (a  game engine)
                    so that we could explore this world in virtual reality
                    </Box>
                    <Link href='https://dkgreenlee.com/building_history.php' className={"other"} ml='15px'>
                        <button background-color={'transparent'} >Learn More <ArrowForwardIcon w={25} /></button>
                    </Link>
                </Flex>



                {/* <ListItem>
            <ListIcon as={Leetcode} color='green.500' />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
            <ListIcon as={ReactLogo} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem> */}
                {/* <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem> */}
            </Flex>
        </Box>
    )
}
