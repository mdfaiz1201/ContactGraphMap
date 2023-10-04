import {REACT_APP_RAPID_API_KEY} from './env'

export const fetchFromAPI = async (parameter) => {

   const url = 'https://covid-193.p.rapidapi.com';
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
   };

   try {
      const response = await fetch(`${url}/${parameter}`, options);
      const result = await response.json();
      return result;
   } catch (error) {
      return error;
   }

}