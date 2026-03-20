import { useState, useEffect } from 'react';
import { fetchHints } from '@/functions/loadingFunctions';

export const useHints = (verb) => {
   const { innerId, infinitiveP, tense } = verb
   const [hints, setHints] = useState([])

   useEffect(() => {
      const current = [...hints]
      current[0] = `${tense} // ${infinitiveP}`
      const getHints = async () => {
         if (innerId < 12 || innerId > 23) {
            if (!infinitiveP.includes('(')) {
               const data = await fetchHints(tense)
               if (data) {
                  current[1] = data[infinitiveP];
                  setHints(current)
               }
            }
         }
      }
      getHints()
   }, [verb])

   return hints
}