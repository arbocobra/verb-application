import { useState, useEffect, useRef } from 'react';
import { PropagateLoader } from 'react-spinners';
import { randomizeQuestionIndex, fetchFilteredData } from './../functions/loadingFunctions';

import Question from './Question';
import Results from './Results';
import Footer from './Footer';


const TestContainer = (props) => {
   const { resetPage, tenseFilter, verbFilter } = props
   
   const [testIndexList, setTestIndexList] = useState([])
   const [countIndex, setCountIndex] = useState(0)
   const [testActive, setTestActive] = useState(true)
   const [testQuestions, setTestQuestions] = useState([])
   const [results, setResults] = useState({ correct: [], incorrect: [] })

   const finalQuestion = useRef(false)
   const initializeRandomize = useRef(false)
   const resultsRef = useRef(null)
   const countRef = useRef(0)
   
   useEffect(() => {
      let ignore = false
      fetchFilteredData(tenseFilter, verbFilter)
      .then(data => {
         if (!ignore) setTestQuestions(data)
      })
      return () => ignore = true
   }, [tenseFilter, verbFilter])
 
   useEffect(() => {
      if (testQuestions.length > 0 && !initializeRandomize.current) {
         initializeRandomize.current = true
         const idArray = randomizeQuestionIndex(testQuestions)
         setTestIndexList(idArray)
      }
   }, [testQuestions])
   
   resultsRef.current = { ...results}
   countRef.current = countIndex
   if (testIndexList.length > 0 && countIndex == testIndexList.length - 1) finalQuestion.current = true

   const handleResponse = (bool, correctValue) => {
      if (bool) {
         let updateResults = [...resultsRef.current.correct, correctValue]
         setResults({...results, correct: updateResults})
      } else {
         let updateResults = [...resultsRef.current.incorrect, correctValue]
         setResults({...results, incorrect: updateResults})
      }
      if (finalQuestion.current) completeTest()
      setCountIndex(countRef.current + 1)
   }

   const completeTest = () => {
      setTestActive(false)
   }

   const resetTest = () => {
      setTestActive(false)
      setResults({ correct: [], incorrect: [] })
      setTestIndexList([])
      setCountIndex(0)
      setTestActive(false)
      setTestQuestions([])
      resetPage()
   }

   if (testActive && initializeRandomize.current) {
      return (
      <div id='Test'>
         <Question display={true} index={countIndex} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />
         <Footer activeId={countIndex} testLength={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )} else if (testActive) return <PropagateLoader/>
   else return <Results totalQuestions={testIndexList.length} resetTest={resetTest} results={results} />
}

export default TestContainer