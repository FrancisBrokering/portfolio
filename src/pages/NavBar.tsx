import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Button, useDisclosure, Stack, Center, Spacer, } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import navLinkedIn from '../assets/img/navLinkedIn.svg';
import navInsta from '../assets/img/navInsta.svg';
import navGithub from '../assets/img/navGithub.svg';
import { useSearchParams } from 'react-router-dom';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home')
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

  const navbarPaths = [
    {
      link: "/#home",
      label: "Home",
    },
    {
      link: "/#skills",
      label: "Skills",
    },
    {
      link: "/#experience",
      label: "Experience",
    },
    {
      link: "/#projects",
      label: "Projects",
    },
  ];
  const mobileNavbarPaths = [
    {
      link: "/#home",
      label: "Home",
    },
    {
      link: "/#skills",
      label: "Skills",
    },
    {
      link: "/#experience-m",
      label: "Experience",
    },
    {
      link: "/#projects",
      label: "Projects",
    },
  ];


  return (
    <>
      <Flex direction='column' backgroundColor={'transparent'} className={scrolled ? "scrolled navbar" : "navbar"} display='flex' pr={{ base: '20px', md: '10%' }} pl={{ base: '20px', md: '10%' }}>
        <Flex h={'80px'} alignItems={'center'} as={'nav'} >
          <Flex alignItems={'center'} w='100%' >
            <Box className='navbar-my-name' fontWeight={'bold'} >
              <Link _hover={{ textDecoration: 'none' }} href="/">Francis Brokering</Link>
            </Box>
            <Spacer />
            <Box display={{ base: 'none', md: 'flex' }}>
              {window.location.href.includes('carmack') ? <></> : navbarPaths.map((path) => { return (<Link href={path.link} className={activeLink === path.label ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(path.label)} _hover={{ textDecoration: 'none', opacity: 1, }}>{path.label}</Link>) })}
            </Box>
            <Box className="social-icon" display={{ base: 'none', md: 'flex' }}>
              <Link href="https://www.linkedin.com/in/francis-brokering"><img src={navLinkedIn} alt="linkedin" /></Link>
              <Link href="https://www.instagram.com/fkb_0710/"><img src={navInsta} alt="insta" /></Link>
              <Link href="https://github.com/FrancisBrokering/portfolio"><img src={navGithub} alt="github" /></Link>
            </Box>
            {window.location.href.includes('carmack') ? <></> : <Button minWidth='140px' display={{ base: 'none', md: 'flex' }} backgroundColor={'transparent'} className="navbar-button" >
              <Link href='/#contact' _hover={{ textDecoration: 'none' }} >Contact Me!</Link>
            </Button>}
            <IconButton _hover={{ bg: "rgba(67, 27, 92, 0.4)" }} borderColor='#431b5c' bg={'transparent'} variant='outline' size={'lg'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} backgroundColor='black' rounded='30px' pt='15px'>
            <Stack as={'nav'} spacing={4} alignItems='center'>
              {window.location.href.includes('carmack') ? <></> : mobileNavbarPaths.map((path) => { return (<Link href={path.link} className={activeLink === path.label ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(path.label)} _hover={{ textDecoration: 'none', opacity: 1, }}>{path.label}</Link>) })}
              <Flex className="social-icon" >
                <a href="https://www.linkedin.com/in/francis-brokering"><img src={navLinkedIn} alt="linkedin" /></a>
                <a href="https://www.instagram.com/fkb_0710/"><img src={navInsta} alt="insta" /></a>
                <a href="https://github.com/FrancisBrokering/portfolio"><img src={navGithub} alt="github" /></a>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}