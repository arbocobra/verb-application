import { randomizeQuestionIndex, fetchFilteredData } from '@/functions/loadingFunctions';

import { useState, useEffect } from 'react';

export const useQuestionFilter = (tenseFilter, verbFilter) => {
   const [testIndexList, setTestIndexList] = useState([]);
   const [testQuestions, setTestQuestions] = useState([]);

   useEffect(() => {
      fetchFilteredData(tenseFilter, verbFilter).then((data) => setTestQuestions(data));
   }, [tenseFilter, verbFilter]);

   useEffect(() => {
      if (testQuestions.length > 0) {
         const idArray = randomizeQuestionIndex(testQuestions);
         setTestIndexList(idArray);
      }
   }, [testQuestions]);

   return { testQuestions, testIndexList };
};
