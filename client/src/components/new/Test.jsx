import { Suspense, useState, useEffect, useRef } from 'react';
import { useQuestionFilter } from '@/hooks/useQuestionFilter';
import { useQuestionResponse } from '@/hooks/useQuestionResponse';
import Skeleton from '@/ui/Skeleton';
import { PropagateLoader } from 'react-spinners';
import { randomizeQuestionIndex, fetchFilteredData } from '@/functions/loadingFunctions';

import Question from '@/components/Question';
// import Results from './Results';
import Footer from '@/components/Footer';


const Test = ({ resetPage, tenseFilter, verbFilter }) => {
   // const { resetPage, tenseFilter, verbFilter } = props

   const { testQuestions, testIndexList } = useQuestionFilter(tenseFilter, verbFilter)
   
   // const [testIndexList, setTestIndexList] = useState([])
   // const [testQuestions, setTestQuestions] = useState([])

   // const [countIndex, setCountIndex] = useState(0)
   const [testActive, setTestActive] = useState(true)
   // const [results, setResults] = useState({ correct: [], incorrect: [] })

   // const finalQuestion = useRef(false)
   // const resultsRef = useRef(null)
   // const countRef = useRef(0)

   // const initializeRandomize = useRef(false)
   // useEffect(() => {
   //    let ignore = false
   //    fetchFilteredData(tenseFilter, verbFilter)
   //    .then(data => {
   //       if (!ignore) setTestQuestions(data)
   //    })
   //    return () => ignore = true
   // }, [tenseFilter, verbFilter])
 
   // useEffect(() => {
   //    if (testQuestions.length > 0 && !initializeRandomize.current) {
   //       initializeRandomize.current = true
   //       const idArray = randomizeQuestionIndex(testQuestions)
   //       setTestIndexList(idArray)
   //    }
   // }, [testQuestions])
   
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

   // const completeTest = () => {
   //    setTestActive(false)
   // }

   // const resetTest = () => {
   //    setTestActive(false)
   //    setResults({ correct: [], incorrect: [] })
   //    setTestIndexList([])
   //    setCountIndex(0)
   //    setTestActive(false)
   //    setTestQuestions([])
   //    resetPage()
   // }

   // if (testActive && testQuestions.length && testIndexList.length) {
   //    return (
      //    <div className='h-full flex items-center'>

      //    <Question display={true} index={countIndex} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />
      //    <Footer activeId={countIndex} testLength={testIndexList.length} completeTest={completeTest} /> 
         
      // </div>
   // )} 
   // else if (testActive) return <PropagateLoader/>
   // else return <Results totalQuestions={testIndexList.length} resetTest={resetTest} results={results} />

   if (testActive) {
      return (
         <Suspense fallback={<Skeleton/>}>
            <TestComplete testQuestions={testQuestions} testIndexList={testIndexList} setTestActive={setTestActive} />
            {/* <div className='h-full flex items-center'>
               { testQuestions.length && testIndexList.length && <Question display={true} index={countIndex} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />}
               <Footer activeId={countIndex} testLength={testIndexList.length} completeTest={completeTest} /> 
            </div> */}
         </Suspense>
      )
   } else return <Skeleton />
   // else return <Results totalQuestions={testIndexList.length} resetTest={resetTest} results={results} />
}

const TestComplete = ({testQuestions, testIndexList, setTestActive}) => {
   
   const { count, results, isFinal, handleResponse } = useQuestionResponse(testIndexList)

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

   const completeTest = () => {
      setTestActive(false)
   }

   return (
      <div className='h-full flex items-center flex-col justify-center'>
         { testQuestions.length && testIndexList.length && <Question display={true} index={count} verb={testQuestions[testIndexList[count]]} handleResponse={handleResponse} />}
         <Footer activeId={count} testLength={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )
}

export default Test;