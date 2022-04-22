import React from 'react'
import { Box,Flex,Text,Image, Button} from '@chakra-ui/react';
import {MdOutlineSaveAlt,MdOutlineCreate} from 'react-icons/md';


import iconl from '../resourses/iconl.gif'
const Template = ({props,setonememe}) => {
  const {id,name,url}=props;
  return (
    
      
      <div>
        <Flex  flexWrap="wrap" flexDirection='row' p="5" bgColor='black' paddingTop="2"justifyContent="flex-start" >
         <Box p='3' bgColor='#1ABC9C' borderRadius='2rem'>
             <Image fit={iconl} borderRadius='2rem'src={url} cursor="pointer" width={360} height={360} alt={name}/>
             <Text fontWeight='bold' color='white' align='center'>{name}</Text>
            <Box align='center'>
           <Button w='4.5rem'mr='2' color='#1ABC9C' bg='black' onClick={()=>setonememe(props)}><Text><MdOutlineCreate/></Text>Create</Button> 
            <Button w='4.5rem' color='#1ABC9C' bg='black'> <Text><MdOutlineSaveAlt/></Text>Save</Button>
            </Box>
         </Box>
        </Flex>
    </div>
    
  )
}

export default Template;