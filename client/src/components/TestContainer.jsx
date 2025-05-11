/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
// import { selectData } from '../functions/loadingFunctions'
import.meta.env.VITE_API_URL;
// import { useSelector, useDispatch } from 'react-redux';
// import { selectShuffledIds, selectNextQuestion, setQuestion, addCorrect, addIncorrect } from '../app/verbsSlice';

// import Question from './Question';
// import Results from './Results';
// import Footer from './Footer';


const TestContainer = (props) => {
   const { setDisplayQuestion, tenseFilter, verbFilter } = props
   
   const [testIndexList, setTestIndexList] = useState([])
   const [activeIndex, setActiveIndex] = useState(0)
   const [testActive, setTestActive] = useState(true)
   const finalQuestion = useRef(false)
   const [testQuestions, setTestQuestions] = useState([])

   useEffect(() => {
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
   }, [])

   useEffect(() => {
      if (testQuestions.length) {
         let idArray = testQuestions.map(el => el._id)
          for (let i = idArray.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * (i + 1));
            [idArray[i], idArray[j]] = [idArray[j], idArray[i]]; 
         }
         setTestIndexList(idArray)
      }
   }, [testQuestions])

   // const dispatch = useDispatch()

   // const currentQuestion = useSelector(selectNextQuestion)
   // const questionIdArray = useSelector(selectShuffledIds)

   // useEffect(() => {
   //    if (activeIndex === questionIdArray.length - 1) finalQuestion.current = true
   // }, [activeIndex])


   // const handleAnswer = (bool) => {
   //    if (bool) dispatch(addCorrect())   
   //    else dispatch(addIncorrect())

   //    dispatch(setQuestion(questionIdArray[activeIndex + 1]))
      
   //    if (finalQuestion.current) completeTest()
   //    else setActiveIndex((current) => current + 1)
   // }

   // const completeTest = () => {
   //    setTestActive(false)
   //    finalQuestion.current = false

   // }

   if (testActive) {
      return (
      <div id='test' className='test-container'>
         {/* <div id='question-container' className='question-box'>
            <Question verb={currentQuestion} index={activeIndex} display={true} handleAnswer={handleAnswer} key={activeIndex} />
         </div> 
         <Footer activeId={activeIndex} testLength={questionIdArray.length} completeTest={completeTest} /> */}
      </div>
   )} else {
      return <Results totalQuestions={activeIndex} setDisplayQuestion={setDisplayQuestion} setTestActive={setTestActive} />
   }
}

export default TestContainer