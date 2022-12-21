import { Text, Box, Center, Flex, Grid, GridItem, List, ListIcon, ListItem, UnorderedList, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, AspectRatio } from "@chakra-ui/react"
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import CarmackArchitecture from "../assets/img/CarmackArchitecture.png";
import CarmackLanguageSelection from "../assets/img/CarmackLanguageSelection.png";
import CarmackHome from "../assets/img/CarmackHome.png";
import CarmackGenerateCode from "../assets/img/CarmackGenerateCode.png";
import CarmackTranslate from "../assets/img/CarmackTranslate.png";
import ComputerFrame from "../assets/img/computerFrame.png";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

export default function Carmack() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box className='carmack'>
            <NavBar />
            <Center pt={{base: '120px', md: '250px'}} pb={{md: '200px'}} className='carmack-banner' >
                <Grid w="100%" ml={{ base: '25px', md: '10%' }} mr={{ base: '25px', md: '10%' }} templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
                    <GridItem pt={{ md: '40px' }} colSpan={{ md: 1 }} rowSpan={{ base: 1 }}>
                        <h2>Carmack</h2>
                        <h1>Conversational Coding</h1>
                        <p>Caramack is a web IDE with speech recognition which allow users to generate code with voice commands. The user can manuever through the website and generate code without any mouse/keyboard interactions.</p>
                    </GridItem>
                    <GridItem colSpan={{ md: 1 }} rowSpan={{ base: 1 }}>
                        <Box position='absolute' w="590px" display={{base: 'none', md: "flex"}}>
                            <img src={ComputerFrame} />
                        </Box>
                        <Box padding={{base: '30px 0px 0px 0px', md: '32px 0px 0px 26px'}} position='relative'>
                            <AspectRatio ratio={16 / 9} w={{ md: "532px" }}  >
                                <iframe z-index={0} src="https://www.youtube.com/embed/OcfLd3WHz_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </AspectRatio>
                        </Box>
                    </GridItem>
                </Grid>
            </Center>
            <Box mt={{md: '100px'}} ml={{ base: '25px', md: '10%' }} mr={{ base: '25px', md: '10%' }} >
                <h1>How it works</h1>
                <Grid templateRows={{base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)'}} templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={{md: '20px'}} >
                    <GridItem colSpan={1} rowSpan={1} >
                        <Text as='b' fontSize='18px'>Step 1.</Text>
                        <Text>Start Conversation</Text>
                        <Text>Begin by saying: "Start Conversation"</Text>
                        <img src={CarmackHome} />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} >
                        <Text as='b' fontSize='18px'>Step 2.</Text>
                        <Text>Select Language</Text>
                        <Text >Example Voice Command: "Select Python"</Text>
                        <img src={CarmackLanguageSelection} />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} >
                        <Text as='b' fontSize='18px'>Step 3.</Text>
                        <Text>Generate Code</Text>
                        <Text mb='10px'>Example Voice Command: "Create a function that returns the current weather in Santa Cruz"</Text>
                        <img src={CarmackGenerateCode} />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1} >
                        <Text as='b' fontSize='18px'>Step 4.</Text>
                        <Text>Do Whatever With The Code</Text>
                        <Text >Example Voice Command: "Translate to Javascript"</Text>
                        <Button size='sm' onClick={onOpen} mb='5px' _hover={{ bg: "rgba(67, 27, 92, 0.4)" }} borderColor='#431b5c' variant='outline'>More Commands</Button>
                        <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent mt='200px'>
                                <ModalHeader textColor='black'>Other voice command options</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <UnorderedList spacing={3} textColor='black' ml='10px'>
                                        <ListItem> "Copy Code": Copies generated code to clipboard </ListItem>
                                        <ListItem> "Download": Downloads the generated code to your local drive</ListItem>
                                        <ListItem> "Edit so that it returns a string": Edit the generated code </ListItem>
                                        <ListItem> "Delete": Deletes the generated code </ListItem>
                                        <ListItem> "Return Home": Can maneuver through the website </ListItem>
                                    </UnorderedList>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' variant='ghost' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button variant='ghost'>Secondary Action</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <img src={CarmackTranslate} />

                    </GridItem>
                </Grid>
                <Box mt={{base:'50px', md: '100px'}}>
                    <h1>Architecture</h1>
                    <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} templateRows={{base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)'}} gap={'20px'}>
                        <GridItem colSpan={1} rowSpan={1} >
                            <p>The user gives a voice input to an ASR system which gets translated into text. The controller is monitoring the transcript that the ASR provides and base on what it sees, it will push, pop, or make any changes it needs. The model will react to the changes to get fetching-code from the API and update the models state. The user will see an updated render and provide more commands. The frontend was created using React.js and Chakra UI. The API was managed using AWS Lambda.</p>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} >
                            <img src={CarmackArchitecture} />
                        </GridItem>
                    </Grid>
                </Box>
                <Box mt={{base:'50px', md: '100px'}} mb='100px'>
                    <h1>Goals</h1>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Make a visual conversation IDE by allowing users to manuever through the website with voice commands.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Embrace Accessibility for those who are not able to use keyboard/mouse.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Lower coding barriers for those who are not advanced in programming.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={NotAllowedIcon} color='red.500' />
                            Provide unbound command flexibility. (in progress)
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Footer />
        </Box>

    )
}