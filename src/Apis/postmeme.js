import axios from 'axios';
export const postUrl='https://api.imgflip.com/caption_image?';


export const postmeme= async (info)=>{
 const makeurl= postUrl + Object.entries(info).map((e)=>(`${e[0]}=${e[1]}`)).join('&');
 console.log(postUrl,makeurl);
 const data =await axios.post(postUrl);
 return data;
}
