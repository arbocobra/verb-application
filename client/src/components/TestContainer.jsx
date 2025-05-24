/* eslint-disable no-undef */
import { useState, useEffect, useRef } from 'react';
import { PropagateLoader } from 'react-spinners';
import { selectData, selectFilteredData, randomizeQuestionIndex } from './../functions/loadingFunctions';
import.meta.env.VITE_API_URL;

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
   
   const initializeData = useRef(false)
   const initializeRandomize = useRef(false)
   const resultsRef = useRef(null)
   const countRef = useRef(0)
   
   const finalQuestion = useRef(false)

   useEffect(() => {
      console.log('useEffect => init')
      if (!initializeData.current) {
         initializeData.current = true
         loadData()
      }      
   }, [])

   const loadData = () => {      
      selectFilteredData(tenseFilter, verbFilter)
      .then(data => {
         console.log(data)
         setTestQuestions(data)
      })
   }

   useEffect(() => {
      console.log('useEffect => testQuestions')
      if (testQuestions.length > 0 && !initializeRandomize.current) {
         initializeRandomize.current = true
         randomizeIndex()
      }
   }, [testQuestions])

   const randomizeIndex = () => {
      const idArray = randomizeQuestionIndex(testQuestions)
      setTestIndexList(idArray)
   }

   useEffect(() => { resultsRef.current = { ...results} }, [results])

   useEffect(() => { countRef.current = countIndex }, [countIndex])

   useEffect(() => {
      if (testIndexList.length > 0 && countIndex == testIndexList.length - 1) {
         finalQuestion.current = true
      } 
   }, [countIndex])

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
      // nextQuestionIndex()
      
   }

   const completeTest = () => {
      setTestActive(false)
      // finalQuestion.current = false
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
      <div id='test' className='test-container'>
         <Question display={true} index={countIndex} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />
         {/* <div id='question-container' className='question-box'>
            <Question verb={currentQuestion} index={activeIndex} display={true} handleAnswer={handleAnswer} key={activeIndex} />
         </div> */}
         <Footer activeId={countIndex} testLength={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )} else if (testActive) {
      return (
         // <div>Current test index not defined</div>
         <PropagateLoader/>
      )
   } else return <Results totalQuestions={testIndexList.length} resetTest={resetTest} results={results} />
   // } else return (<div>I finished</div>)
}

export default TestContainer