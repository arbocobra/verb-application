/* eslint-disable no-undef */
import axios from 'axios';
import.meta.env.VITE_API_URL;

export const selectData = () => {
   axios.get(`${process.env.VITE_API_URL}/api/verbs`)
      .then((response) => data = response.data)
      .catch((error) => console.log(error))
      .finally(() => {console.log(data)})
}

export const selectHints = async (tense, verb) => {
   try {
      let tenseParam = encodeURIComponent(tense)
      const response = await fetch(`${process.env.VITE_API_URL}/api/hints/${tenseParam}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })
      if (!response.ok) throw new Error(`HTTP error - Status: ${response.status}`);
      const data = await response.json();
      return data[0].values[verb]
   } catch (error) {
      console.error('Fetch Hint Error.', error)
   }
}

export const selectFilteredData = async (tense, infinitives) => {
   const queryParams = new URLSearchParams();

   if (tense[0] !== 'all') queryParams.append('tense', tense)
   if (infinitives[0] !== 'all') queryParams.append('infinitiveP', infinitives)
   
   try {
      const response = await fetch(`${process.env.VITE_API_URL}/api/verbs/filter?${queryParams.toString()}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })
      if (!response.ok) throw new Error(`HTTP error - Status: ${response.status}`);
      const data = await response.json();
      // console.log(data)
      return data
   } catch (error) {
      console.error('Fetch Error.', error)
   }
}

export const randomizeQuestionIndex = (questions) => {
      let idArray = questions.map((_, i) => i)
      for (let i = idArray.length - 1; i > 0; i-- ) {
         const j = Math.floor(Math.random() * (i + 1));
         [idArray[i], idArray[j]] = [idArray[j], idArray[i]]; 
      }
      return idArray
   }