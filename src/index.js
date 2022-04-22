import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';
import Gifs from './components/Gifs';
import Create from './components/Create';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider> 
     <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="Gifs" element={<Gifs/>}/>
       <Route path="Create" element={<Create/>}/>
     </Routes>
    </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

