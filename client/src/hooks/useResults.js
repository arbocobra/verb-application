import {useState} from 'react';

export const useResults = () => {
   const [results, setResults] = useState({ correct: [], incorrect: [] })

   const updateResults = (bool, correctValue) => {
      const current = {...results}
      if (bool) {
         let updateCorrect = [...current.correct, correctValue];
         setResults({...results, correct: updateCorrect})
      } else {
         let updateIncorrect = [...current.incorrect, correctValue];
         setResults({...results, incorrect: updateIncorrect})
      }
   }

   const clearResults = () => setResults({ correct: [], incorrect: [] })

   return { results, updateResults, clearResults }

}