import React from "react";
import {Flex,Box,Text,Image,Button,Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
   MenuDivider,} from '@chakra-ui/react';
import fun from '../resourses/fun.png';
import {MdOutlineAccountCircle} from "react-icons/md";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
       <Flex flexWrap='wrap' bgColor='black' borderRadius='3xl'>
       <Image src={fun} paddingBlockStart='1' pl='2' height='3rem'/>
       <Text p='2' color='#1ABC9C'letterSpacing='1px' fontFamily='cursive' fontSize='20px'>MEME MAKER</Text>
   
     <Box alignContent='flex-end'> 
      <Button bgColor='black' textColor='#1ABC9C' height='2rem'width='4rem' m='1' mt='2'>Memes</Button>
     <Link to="/Gifs"> <Button bgColor='black' textColor='#1ABC9C' height='2rem'width='4rem 'm='1' mt='2' >GIFs</Button></Link>
      <Button bgColor='black' textColor='#1ABC9C' height='2rem'width='4rem' m='1' mt='2'>Videos</Button>
    </Box>
    <Spacer/>

       <Box mr='4'p='1'>
       <Menu>
         <MenuButton as={Button} colorScheme='black'><MdOutlineAccountCircle size={30} color='#1ABC9C'/></MenuButton>
         <MenuList bgColor='black' color='#1ABC9C' >
          <MenuGroup title='Profile'>
           <MenuItem>My Account</MenuItem>
           <MenuItem>Payments </MenuItem>
          </MenuGroup>
         <MenuDivider/>
           <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
           </MenuGroup>
         </MenuList>
       </Menu>
       </Box>
       </Flex>
      
    </>
  )
}

export default Navbar
