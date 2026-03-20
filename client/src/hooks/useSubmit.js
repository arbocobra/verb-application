import { useState, useEffect } from 'react';
import { checkAnswer } from '@/functions/responseFunctions';

export const useSubmit = (verb, handleResponse) => {
   const [resultId, setResultId] = useState(null) 
   const { conjugationP, pronounP, tense } = verb
   const fullP = tense == 'imperative' ? conjugationP : `${pronounP} ${conjugationP}`

   const handleSubmit = (val) => {
      const id = checkAnswer(val, conjugationP)
      setResultId(id)
   }

   useEffect(() => {
      if (resultId === 0) {
         setTimeout(() => {
            handleResponse(true, fullP);
            setResultId(null)
         }, 1000 )
      } else if (resultId > 0) {
         setTimeout(() => {
            handleResponse(false, fullP);
            setResultId(null)
         }, 2500 )
      }
   }, [fullP, handleResponse, resultId])

   return { resultId, handleSubmit }
}