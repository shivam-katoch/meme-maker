import { Input } from "@chakra-ui/react";
import React from "react";
import { useState,useEffect} from "react";
import {postmeme,postUrl } from "../Apis/postmeme";
import { Button,Box,Flex,Text,Avatar,Image} from '@chakra-ui/react';

import {IoArrowBackCircleOutline} from 'react-icons/io5'


const Create = ({onememe,setonememe}) => {
const{url,name,id}= onememe;
const [text1,settext1]=useState("");
const [text2,settext2]=useState("");

console.log(text1,text2);
return(
   
  
<Flex width='auto' pt='0.5'flexwrap='wrap' bgColor='#1ABC9C' justifyContent='center' >

<Button  m='5' onClick={()=>setonememe(null)} leftIcon={<IoArrowBackCircleOutline/>} bgColor="black" color="#1ABC9C">BACk</Button>
<Box  align='center' m='20'p='4' bgColor='black' borderRadius='3xl' >
       <Text p='2' fontWeight='bold' fontSize='xl'color='white'>{name}</Text>
       <Image w="600px" h="500px" src={url}  />
     
       <Flex mt='2' mb='2'flexWrap='wrap' flexDirection='column' justifyContent='flex-start'> 
       <Flex>
       <Input color='#1ABC9C' focusBorderColor='#1ABC9C' w='20rem' placeholder='Text One' varient='filled' mr='2' value={text1} onChange={(e)=>settext1(e.target.value)}/> 
        <Input color='#1ABC9C' focusBorderColor='#1ABC9C' w='20rem'placeholder='Text Two' varient='filled'  value={text2} onChange={(e)=>settext2(e.target.value)}/>
       </Flex>
      
        </Flex> 
        <Button m='4'bgColor="#1ABC9C" onClick={(e)=>{
            e.preventDefault();
        const info = {
                "template_id": id,
                "username": "useit",
                "password": "useit123",
                "boxes[0][text]":text1,
                "boxes[0][color]": "#ffffff",
                "boxes[1][text]": text2,
                "boxes[1][color]": "#ffffff",
            }
         
         const data=postmeme(info);
        }}>GENERATE</Button> 
        <Button bgColor="#1ABC9C">DOWNLOAD</Button>
       
</Box>

 </Flex>

     
     
    )

}

export default Create;

