/* eslint-disable no-undef */
import { useState, useEffect, useRef } from 'react';
import.meta.env.VITE_API_URL;

import Question from './Question';
// import Results from './Results';
import Footer from './Footer';


const TestContainer = (props) => {
   const { setDisplayActive, tenseFilter, verbFilter } = props
   
   const [testIndexList, setTestIndexList] = useState([])
   const [countIndex, setCountIndex] = useState(0)
   const [testActive, setTestActive] = useState(true)
   const [testQuestions, setTestQuestions] = useState([])
   const [results, setResults] = useState({ correct: [], incorrect: [] })
   const initializeData = useRef(false)
   const initializeRandomize = useRef(false)
   const resultsRef = useRef(null)
   const countRef = useRef(0)
   // const initializeResponse = useRef(false)
   const finalQuestion = useRef(false)

   useEffect(() => {
      console.log('useEffect => init')
      if (!initializeData.current) {
         initializeData.current = true
         loadData()
      }      
   }, [])

   const loadData = () => {
      fetch(`${process.env.VITE_API_URL}/api/verbs`)
      .then(response => {
         if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
         return response.json();
      })
      .then(data => {
         let results
         if (tenseFilter[0] == 'all') results = data;
         else {
            const tenseArr = data.filter(el => tenseFilter.includes(el.tense))
            results = tenseArr
         }
         return results
      })
      .then(data => {
         let results
         if (verbFilter[0] == 'all') results = data;
         else {
            const verbArr = data.filter(el => verbFilter.includes(el.infinitiveP))
            results = verbArr
         }
         return results
      })
      .then(data => {
         console.log(data)
         setTestQuestions(data)
      })
   }

   useEffect(() => {
      console.log('useEffect => testQuestions')
      if (testQuestions.length > 0 && !initializeRandomize.current) {
         initializeRandomize.current = true
         randomizeQuestionIndex()         
      }
   }, [testQuestions])

   const randomizeQuestionIndex = () => {
      let idArray = testQuestions.map((_, i) => i)
      for (let i = idArray.length - 1; i > 0; i-- ) {
         const j = Math.floor(Math.random() * (i + 1));
         [idArray[i], idArray[j]] = [idArray[j], idArray[i]]; 
      }
      setTestIndexList(idArray)
   }

   useEffect(() => { resultsRef.current = { ...results} }, [results])

   useEffect(() => { countRef.current = countIndex }, [countIndex])

   useEffect(() => {
      console.log('useEffect => countIndex')
      if (testIndexList.length > 0 && countIndex == testIndexList.length) {
         completeTest()
      } 
   }, [countIndex])

   const handleResponse = (bool, correctValue) => {
      // if (bool) setResults(...results, correct.push(correctValue))
      // else setResults(...results, incorrect.push(correctValue))

      let updateResults = [...resultsRef.current.incorrect, correctValue]
      setResults({...results, incorrect: updateResults})
      // setResults({...results, incorrect: [...results.incorrect, correctValue]})
      setCountIndex(countRef.current + 1)
      // nextQuestionIndex()
      
   }

   const completeTest = () => {
      setTestActive(false)
      // finalQuestion.current = false
   }

   if (testActive && initializeRandomize.current) {
      return (
      <div id='test' className='test-container'>
         <Question display={true} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />
         {/* <div id='question-container' className='question-box'>
            <Question verb={currentQuestion} index={activeIndex} display={true} handleAnswer={handleAnswer} key={activeIndex} />
         </div> */}
         <Footer activeId={countIndex} testLength={testIndexList.length} completeTest={completeTest} /> 
      </div>
   )} else if (testActive) {
      return (
         <div>Current test index not defined</div>
      )
      // return <Results totalQuestions={activeIndex} setDisplayQuestion={setDisplayQuestion} setTestActive={setTestActive} />
   } else return (<div>I finished</div>)
}

export default TestContainer