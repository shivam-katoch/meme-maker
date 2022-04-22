import { Input } from "@chakra-ui/react";
import React from "react";
import { useState,useEffect} from "react";
import {GetGif,GifUrl } from "../Apis/gifApi";
import { Button,Box,Flex,Text,Avatar,Image} from '@chakra-ui/react';

const Gifs =() => {
const [gif,setgif]=useState([]);
useEffect(()=>{
  GetGif(GifUrl).then((e)=>setgif(e.data));
}
,[])
console.log(setgif)
  return (
    <div>
      <h1>jdnjdf</h1>
    </div>
  )
}

export default Gifs
