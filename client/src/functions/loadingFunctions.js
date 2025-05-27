/* eslint-disable no-undef */
import.meta.env.VITE_API_URL;
import axios from 'axios';

export const fetchHints = (tense) => {
   return axios.get(`${process.env.VITE_API_URL}/api/hints/${tense}`)
   .then(response => response.data[0].values)
}

export const fetchFilteredData = (tense, infinitiveP) => {
   if (tense[0] === 'all' && infinitiveP[0] === 'all') {
      return axios.get(`${process.env.VITE_API_URL}/api/verbs`)
      .then(response => response.data)
   } else {
      let paramQuery = {}
      if (tense[0] !== 'all') paramQuery.tense = tense
      if (infinitiveP[0] !== 'all') paramQuery.infinitiveP = infinitiveP
      const axiosInstance = axios.create({
      paramsSerializer: {indexes: null}
      })
      return axiosInstance.get(`${process.env.VITE_API_URL}/api/verbs/filter`, {
         params: paramQuery
      })
      .then(response => response.data)
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