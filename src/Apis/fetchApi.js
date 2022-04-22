import axios from 'axios';
export const baseUrl='https://api.imgflip.com/get_memes';
export const fetchApi= async (url)=>{
    const data =await axios.get(url);
    return data;
}
