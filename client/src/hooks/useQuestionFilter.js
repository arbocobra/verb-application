import { randomizeQuestionIndex, fetchFilteredData } from '@/functions/loadingFunctions';
import { useState, useEffect } from 'react';

export const useQuestionFilter = (tenseFilter, verbFilter) => {
   const [isLoading, setIsLoading] = useState(true)
   const [testIndexList, setTestIndexList] = useState([]);
   const [testQuestions, setTestQuestions] = useState([]);

   useEffect(() => {
      const fetchQuestions = async () => {
         setIsLoading(true)
         const [data] = await Promise.all([
            fetchFilteredData(tenseFilter, verbFilter),
            new Promise(resolve => setTimeout(resolve, 2000))
         ])
         if (data) {
            setTestQuestions(data)
         }
      }

      fetchQuestions()

   }, [tenseFilter, verbFilter]);

   useEffect(() => {
      if (testQuestions.length > 0) {
         const idArray = randomizeQuestionIndex(testQuestions);
         if (idArray) {
            setTestIndexList(idArray);
         } 
         setIsLoading(false)
      }
   }, [testQuestions]);

   return { testQuestions, testIndexList, isLoading };
};
