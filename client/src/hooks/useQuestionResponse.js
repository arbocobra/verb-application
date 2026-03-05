import { useState, useEffect, useRef } from 'react';

export const useQuestionResponse = (testindex) => {

   const [count, setCount] = useState(0)
   const [results, setResults] = useState({ correct: [], incorrect: [] })
   const [isFinal, setIsFinal] = useState(false)

   const resultsRef = useRef(null)
   const countRef = useRef(0)

   const handleResponse = (bool, correctValue) => {
      resultsRef.current = { ...results}
      countRef.current = count
      if (bool) {
         let updateResults = [...resultsRef.current.correct, correctValue]
         setResults({...results, correct: updateResults})
      } else {
         let updateResults = [...resultsRef.current.incorrect, correctValue]
         setResults({...results, incorrect: updateResults})
      }
      // if (finalQuestion.current) completeTest()
      setCount(countRef.current + 1)
   }

   useEffect(() => {
      if (testindex.length > 0 && count == testindex.length - 1) setIsFinal(true)
   }, [count, testindex])

   return { count, results, isFinal, handleResponse }
}