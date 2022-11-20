import { ReactNode, useState, useEffect } from 'react';
import { Box, Flex, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
      <Box backgroundColor={'transparent'} px={4} className={'navbar'} ml={'15%'} mr={'15%'}>
        <Flex h={16} alignItems={'center'} className={scrolled ? "scrolled" : ""}>
          <IconButton backgroundColor={'transparent'} size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'} justifyContent={{ base: 'flex-end', md: 'space-between' }}>
            <Box className='navbar-my-name' fontWeight={'bold'} >
              <Link _hover={{ textDecoration: 'none' }} href="/">Francis Brokering</Link>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} _hover={{ textDecoration: 'none', opacity: 1, }}>Home</Link>
              <Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} _hover={{ textDecoration: 'none', opacity: 1, }}>Skills</Link>
              <Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} _hover={{ textDecoration: 'none', opacity: 1, }}>Projects</Link>
            </HStack>
            <Flex className="social-icon" display={{ base: 'none', md: 'flex' }}>
              <a href="https://www.linkedin.com/in/francis-brokering"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/fkb_0710/"><img src={navIcon3} alt="" /></a>
            </Flex>
            <Button backgroundColor={'transparent'} className="navbar-button" display={{ base: 'none', md: 'flex' }}><span>Let’s Connect</span></Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} _hover={{ textDecoration: 'none', opacity: 1, }}>Home</Link>
              <Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} _hover={{ textDecoration: 'none', opacity: 1, }}>Skills</Link>
              <Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} _hover={{ textDecoration: 'none', opacity: 1, }}>Projects</Link>
              <Flex className="social-icon" justifyContent={'center'} >
                <a href="https://www.linkedin.com/in/francis-brokering"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/fkb_0710/"><img src={navIcon3} alt="" /></a>
                <Button backgroundColor={'transparent'} className="navbar-button" ><span>Let’s Connect</span></Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}