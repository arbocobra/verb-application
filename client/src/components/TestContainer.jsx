/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
// import { selectData } from '../functions/loadingFunctions'
import.meta.env.VITE_API_URL;
// import { useSelector, useDispatch } from 'react-redux';
// import { selectShuffledIds, selectNextQuestion, setQuestion, addCorrect, addIncorrect } from '../app/verbsSlice';

import Question from './Question';
// import Results from './Results';
// import Footer from './Footer';


const TestContainer = (props) => {
   const { setDisplayActive, tenseFilter, verbFilter } = props
   
   const [testIndexList, setTestIndexList] = useState([])
   // const [activeIndex, setActiveIndex] = useState(null)
   const [countIndex, setCountIndex] = useState(0)
   // const [currentQuestion, setCurrentQuestion] = useState(null)
   const [testActive, setTestActive] = useState(true)
   const finalQuestion = useRef(false)
   const [testQuestions, setTestQuestions] = useState([])
   // const [correctAnswers, setCorrectAnswer] = useState([])
   const [results, setResults] = useState({ correct: [], incorrect: [] })
   const firstRender = useRef(true)

   useEffect(() => {
      if (firstRender.current) {
         fetch(process.env.VITE_API_URL)
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
   }, [])

   useEffect(() => {
      console.log('useEffect => testQuestions')
      console.log(testQuestions)
      if (testQuestions.length && !firstRender.current) {
         console.log(true)
         let idArray = testQuestions.map((_, i) => i)
          for (let i = idArray.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * (i + 1));
            [idArray[i], idArray[j]] = [idArray[j], idArray[i]]; 
         }
         setTestIndexList(idArray)
      }
   }, [testQuestions])

   // useEffect(() => {   
   //    console.log('useEffect => testIndexList')
   //    console.log(testIndexList)
   //    if (testIndexList.length && !firstRender.current) { 
   //       console.log(true)
   //       setCountIndex(0)
   //    }
   // }, [testIndexList])

   useEffect(() => {
      console.log('useEffect => results')
      console.log(results)
      if (!firstRender.current) {
         console.log(true)
         setCountIndex(countIndex + 1) 
      }
   }, [results])

   useEffect(() => {
      console.log('useEffect => countIndex')
      console.log(countIndex)
      if (countIndex == testIndexList.length && countIndex > 0) {
         console.log(true)
         setDisplayActive(false)
      } else if (firstRender.current) {
         firstRender.current = false;
      }
   }, [countIndex])

   // const nextQuestionIndex = () => {
   //    if (countIndex < testIndexList.length - 1) { 
   //       setCountIndex((current) => current++) 
   //    }
   //    else {
   //       setDisplayActive(false)
   //    }
   // }

   // const dispatch = useDispatch()

   // const currentQuestion = useSelector(selectNextQuestion)
   // const questionIdArray = useSelector(selectShuffledIds)

   // useEffect(() => {
   //    if (activeIndex === questionIdArray.length - 1) finalQuestion.current = true
   // }, [activeIndex])


   const handleResponse = (bool, correctValue) => {
      // if (bool) setResults(...results, correct.push(correctValue))
      // else setResults(...results, incorrect.push(correctValue))
      // let newArr = results.incorrect.push('hello')
      console.log(countIndex)
      setResults({...results, incorrect: [...results.incorrect, 'hello']})
      // nextQuestionIndex()
      
   }

   // const completeTest = () => {
   //    setTestActive(false)
   //    finalQuestion.current = false

   // }

   if (testActive && testQuestions.length) {
      return (
      <div id='test' className='test-container'>
         <Question display={true} verb={testQuestions[testIndexList[countIndex]]} handleResponse={handleResponse} />
         {/* <div id='question-container' className='question-box'>
            <Question verb={currentQuestion} index={activeIndex} display={true} handleAnswer={handleAnswer} key={activeIndex} />
         </div> 
         <Footer activeId={activeIndex} testLength={questionIdArray.length} completeTest={completeTest} /> */}
      </div>
   )} else if (testActive) {
      return (
         <div>Current test index not defined</div>
      )
      // return <Results totalQuestions={activeIndex} setDisplayQuestion={setDisplayQuestion} setTestActive={setTestActive} />
   } else return (<div>I finished</div>)
}

export default TestContainer