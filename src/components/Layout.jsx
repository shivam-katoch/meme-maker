import React from 'react';
import { Box } from '@chakra-ui/react';

import Footer from './Footer.jsx'
import Navbar from './Navbar';


const Layout = ({children}) => {
  return (
   
     <> 
     
       
    
     
    
      <Box maxWidth='1300px'  m="auto">
      <header>
        <Navbar/>
      </header>
      <main>
       {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      </Box>
    </>
  )
}

export default Layout
