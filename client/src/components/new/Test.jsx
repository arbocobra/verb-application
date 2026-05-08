import { useState, useEffect } from 'react';
import { useQuestionFilter } from '@/hooks/useQuestionFilter';
import { useResponse } from '@/hooks/useResponse';
import { useResults } from '@/app/hooks/useResults';
import Skeleton from '@/ui/Skeleton';

import Question from '@/components/Question';
import Results from '@/components/Results';
import Footer from '@/components/Footer';
import Header from '@/components/TestHeader';


const Test = ({ resetPage, tenseFilter, verbFilter }) => {

   const { testQuestions, testIndexList, isLoading } = useQuestionFilter(tenseFilter, verbFilter)
   const [testActive, setTestActive] = useState(true);
   const {results, updateResults } = useResults();
   // const [results, setResults] = useState({ correct: [], incorrect: [] })
   // const finalResults = ()

   const completeTest = () => { setTestActive(false) }

   if (testActive) {
      if (isLoading) return <Skeleton />
      else {
         return (
            <div id='test' className='flex flex-col h-full'>
               <TestInner testQuestions={testQuestions} testIndexList={testIndexList} completeTest={completeTest} updateResults={updateResults} />
            </div>
         )}
   } else {
      return <Results results={results} length={testQuestions.length} />
   }
}

export const TempInner = ({ testIndexList, completeTest }) => {
   const { count, results, isFinal, handleResponse } = useResponse(testIndexList, completeTest)

   useEffect(() => {
      if (count === 0) {
         handleResponse(false, 'nós temos')
      } else if (count === 1) {
         handleResponse(true, 'eu leio')
      } else if (count === 2) {
         handleResponse(false, 'ele dá')
      }
      console.log(results, isFinal)
   }, [count])

   return (
      <div></div>
   )
}

const TestInner = ({ testQuestions, testIndexList, completeTest, updateResults }) => {
   
   const { count, handleResponse } = useResponse(testIndexList, completeTest, updateResults)

   // const [countIndex, setCountIndex] = useState(0)
   // const [results, setResults] = useState({ correct: [], incorrect: [] })

   // const finalQuestion = useRef(false)
   // const resultsRef = useRef(null)
   // const countRef = useRef(0)

   // resultsRef.current = { ...results}
   // countRef.current = countIndex
   // if (testIndexList.length > 0 && countIndex == testIndexList.length - 1) finalQuestion.current = true
   
   // const handleResponse = (bool, correctValue) => {
   //    if (bool) {
   //       let updateResults = [...resultsRef.current.correct, correctValue]
   //       setResults({...results, correct: updateResults})
   //    } else {
   //       let updateResults = [...resultsRef.current.incorrect, correctValue]
   //       setResults({...results, incorrect: updateResults})
   //    }
   //    if (finalQuestion.current) completeTest()
   //    setCountIndex(countRef.current + 1)
   // }

   return (
      <div id='test-inner' className='flex flex-col flex-1 justify-between'>
         {/* { testQuestions.length && testIndexList.length && <Question display={true} index={count} verb={testQuestions[testIndexList[count]]} handleResponse={handleResponse} />} */}
         <Header />
         <Question count={count} verb={testQuestions[testIndexList[count]]} handleResponse={handleResponse} />
         <Footer count={count} total={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )
}

export default Test;