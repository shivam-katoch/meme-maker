import axios from 'axios';
const api_key='3LXTcCE5HrPmnE7HEUEcEEHju2w6Xv16'
export const GifUrl=`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;


export const GetGif= async (url)=>{

 const data =await axios.get(url);
 return data;
}
