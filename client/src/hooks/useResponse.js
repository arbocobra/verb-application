import { useState, useEffect, useRef } from 'react';

export const useResponse = (testindex, completeTest, updateResults) => {

   const [count, setCount] = useState(0)
   const [isFinal, setIsFinal] = useState(false)
   const countRef = useRef(0)

   const handleResponse = (bool, correctValue) => {
      updateResults(bool, correctValue)
      if (isFinal) completeTest()
      else {
         countRef.current = count
         setCount(countRef.current + 1)
      }
   }

   useEffect(() => {
      if (testindex.length > 0 && count == testindex.length - 1) {
         console.log('final question reached')   
         setIsFinal(true)
      }
   }, [count, testindex])

   // useEffect(() => {
   //    if (isFinal) completeTest()
   // }, [isFinal, completeTest])

   return { count, handleResponse }
}