import { useState, useEffect, useRef } from 'react';

export const useResponse = (testindex, completeTest, updateResults) => {

   const [count, setCount] = useState(0)
   const [isFinal, setIsFinal] = useState(false)
   const countRef = useRef(0)

   const handleResponse = (bool, correctValue) => {
      updateResults(bool, correctValue)
      if (isFinal) {
         countRef.current = 0
         setCount(0)
         completeTest()
      }
      else {
         countRef.current = count
         setCount(countRef.current + 1)
      }
   }

   useEffect(() => {
      if (testindex.length > 0 && count == testindex.length - 1 && !isFinal) {
         setIsFinal(true)
      }
   }, [count, testindex])

   return { count, handleResponse }
}