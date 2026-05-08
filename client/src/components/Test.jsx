import { useState } from 'react';
import { useQuestionFilter } from '@/hooks/useQuestionFilter';
import { useResponse } from '@/hooks/useResponse';
import { useResults } from '@/hooks/useResults';
import Skeleton from '@/ui/Skeleton';
import Question from '@/components/Question';
import Results from '@/components/Results';
import Footer from '@/components/Footer';
import Header from '@/components/TestHeader';


const Test = ({ resetPage, tenseFilter, verbFilter }) => {

   const { testQuestions, testIndexList, clearQuestions, isLoading } = useQuestionFilter(tenseFilter, verbFilter)
   const [testActive, setTestActive] = useState(true);
   const {results, updateResults, clearResults } = useResults();

   const completeTest = () => { setTestActive(false) }
   
   const handleReset = () => {
      clearResults()
      clearQuestions()
      resetPage()
   }

   if (testActive) {
      if (isLoading) return <Skeleton />
      else {
         return (
            <div id='test' className='flex flex-col h-full'>
               <TestInner testQuestions={testQuestions} testIndexList={testIndexList} completeTest={completeTest} updateResults={updateResults} />
            </div>
         )}
   } else {
      return <Results results={results} length={testQuestions.length} handleReset={handleReset} />
   }
}

const TestInner = ({ testQuestions, testIndexList, completeTest, updateResults }) => {
   
   const { count, handleResponse } = useResponse(testIndexList, completeTest, updateResults)

   return (
      <div id='test-inner' className='flex flex-col flex-1 justify-between'>
         <Header />
         <Question count={count} verb={testQuestions[testIndexList[count]]} handleResponse={handleResponse} />
         <Footer count={count} total={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )
}

export default Test;