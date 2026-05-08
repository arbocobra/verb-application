import {useState} from 'react';

export const useResults = () => {
   const [results, setResults] = useState({ correct: [], incorrect: [] })
   // const resultsRef = useRef(null)
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

   return { results, updateResults }

      /**
       * const handleResponse = (bool, correctValue) => {
      resultsRef.current = { ...results}
      countRef.current = count
      if (bool) {
         let updateResults = [...resultsRef.current.correct, correctValue]
         setResults({...results, correct: updateResults})
      } else {
         let updateResults = [...resultsRef.current.incorrect, correctValue]
         setResults({...results, incorrect: updateResults})
      }
      setCount(countRef.current + 1)
   }
       */
}// 