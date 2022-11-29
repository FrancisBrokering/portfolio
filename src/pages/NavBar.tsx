import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Button, useDisclosure, Stack, } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import navLinkedIn from '../assets/img/navLinkedIn.svg';
import navInsta from '../assets/img/navInsta.svg';
import navGithub from '../assets/img/navGithub.svg';

const Links = ['Home', 'Skills', 'Projects'];



export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onUpdateActiveLink = (value: string) => { setActiveLink(value) }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <Flex direction='column' backgroundColor={'transparent'} className={scrolled ? "scrolled navbar" : "navbar"} display={{base: scrolled ?'none':'flex',md:'flex'}} pr={{base: '20px', md:'10%'}} pl={{base: '20px', md:'10%'}}>
        <Flex h={'80px'} alignItems={'center'} justifyContent='space-between'>
          <IconButton backgroundColor={'transparent'} size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <Flex direction='row' alignItems={'center'} >
            <Box className='navbar-my-name' fontWeight={'bold'} >
              <Link _hover={{ textDecoration: 'none' }} href="/">Francis Brokering</Link>
            </Box>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} _hover={{ textDecoration: 'none', opacity: 1, }}>Home</Link>
              <Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} _hover={{ textDecoration: 'none', opacity: 1, }}>Skills</Link>
              <Link href='#experience' className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')} _hover={{ textDecoration: 'none', opacity: 1, }}>Experience</Link>
              <Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} _hover={{ textDecoration: 'none', opacity: 1, }}>Projects</Link>
            </Flex>
            <Flex className="social-icon" display={{ base: 'none', md: 'flex' }}>
              <Link href="https://www.linkedin.com/in/francis-brokering"><img src={navLinkedIn} alt="linkedin" /></Link>
              <Link href="https://www.instagram.com/fkb_0710/"><img src={navInsta} alt="insta" /></Link>
              <Link href="https://github.com/FrancisBrokering/portfolio"><img src={navGithub} alt="github" /></Link>
            </Flex>
            <Button display={{ base: 'none', md: 'flex' }} backgroundColor={'transparent'} className="navbar-button" ><Link href='#connect' _hover={{ textDecoration: 'none' }} >Contact Me!</Link></Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} backgroundColor='black' rounded='30px' pt='15px'>
            <Stack as={'nav'} spacing={4}>
              <Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} _hover={{ textDecoration: 'none', opacity: 1, }}>Home</Link>
              <Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} _hover={{ textDecoration: 'none', opacity: 1, }}>Skills</Link>
              <Link href='#experience' className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')} _hover={{ textDecoration: 'none', opacity: 1, }}>Experience</Link>
              <Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} _hover={{ textDecoration: 'none', opacity: 1, }}>Projects</Link>
              <Flex className="social-icon" justifyContent={'center'} >
                <a href="https://www.linkedin.com/in/francis-brokering"><img src={navLinkedIn} alt="linkedin" /></a>
                <a href="https://www.instagram.com/fkb_0710/"><img src={navInsta} alt="insta" /></a>
                <a href="https://github.com/FrancisBrokering/portfolio"><img src={navGithub} alt="github" /></a>
                <Button backgroundColor={'transparent'} className="navbar-button" ><a href='#connect' text-decoration='none'>Contact</a></Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}