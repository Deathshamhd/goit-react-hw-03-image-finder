import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const myAPIKey = '40401870-8542c10594019fbfe8494150a';

export const fetchImages = async(topic, page) =>{
   
    try{
        const response = await axios.get(
            `${baseURL}?q=${topic}&page=1&key=${myAPIKey}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
        );
        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}