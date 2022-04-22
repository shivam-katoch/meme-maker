import { useState,useEffect} from "react";
import { fetchApi,baseUrl } from "./Apis/fetchApi";
import { Box,Flex,Text,Avatar} from '@chakra-ui/react';
import './App.css';
import Layout from "./components/Layout";
import Template from "./components/Template";
import {Link} from 'react-router-dom';
import Create from './components/Create'

function App() {
 const [memes,setmemes]=useState([]);
 const [onememe,setonememe]=useState(null);


 useEffect(()=>{fetchApi(baseUrl).then(e=>setmemes(e.data.data.memes)); },[]);
 
  return (
   
      <Layout>
       <Flex flexWrap="wrap" ml='3.5'pt='0.5' > 
       {onememe == null ? 
       <>
       {memes.map((props)=><Template  props={props}  setonememe={setonememe} />)}
       </>
        :
       <Create  onememe={onememe} setonememe={setonememe}/>
       }
       </Flex>
      </Layout>

  );
}

export default App;
