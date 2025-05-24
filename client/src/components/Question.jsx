import { useEffect, useState } from 'react';
import Answer from './Answer';
import Hints from './Hints';
// import { checkAnswer } from '../functions/questionFunctions';

import checkMark from './../assets/check.svg'
import xMark from './../assets/incorrect.svg'
import exclamationMark from './../assets/exclamation.svg'

const Question = (props) => {
   const {display, verb, handleResponse} = props
   const { conjugationE, conjugationP, infinitiveE, infinitiveP, innerID, pronounE, pronounP, tense } = verb

   // const {verb, index, display, handleAnswer} = props
   const [correct, setCorrect] = useState(null)
   

   // const isCorrectText = () => {
   //    if (correct === null) return null
   //    else if (correct === 0) return null
   //    else if (correct === 1) return (
   //       <div className='result'>
   //          <p>{`(wrong accent) - ${verb.fullP}`}</p>
   //       </div>
   //    )
   //    else if (correct === 2) return (
   //       <div className='result'>
   //          <p>{verb.fullP}</p>
   //       </div>
   //    )
   // }

   // const responseIcon = () => {
   //    if (correct === null) return null
   //    else if (correct === 0) return checkMark
   //    else if (correct === 1) return exclamationMark
   //    else if (correct === 2) return xMark
   // }
   // // const responseIcon = setIcon()

   // const isCorrectIcon = () => {
   //    if (correct === null) return null
   //    else if (correct === 0) return (
   //       <div className='icon green'><span>&#10004;</span></div>
   //    )
   //    else if (correct === 1) return (
   //       <div className='icon red'><span>&#10071;&#10071;</span></div>
   //    )
   //    else if (correct === 2) return (
   //       <div className='icon red'><span>&#10006;</span></div>
   //    )
   // }

   const handleSubmit = (val) => {
      const result = checkAnswer(val, verb.conjugationP)
      if (result === 0) { // is correct
         setCorrect(result)
         // setTimeout(() => handleAnswer(true), 1000)
      } else if (result === 1) { // correct but wrong accent
         setCorrect(result)
         // setTimeout(() => handleAnswer(false), 2500)
      } else if (result === 2) { // incorrect
         setCorrect(result)
         // setTimeout(() => handleAnswer(false), 2500)
      }
   }

   const checkAnswer = (submitted, correct) => {
      if (submitted === correct) return 0
      else {
         const normalizeSubmit = removeDiacritics(submitted)
         const normalizeCorrect = removeDiacritics(correct)
         if (normalizeSubmit === normalizeCorrect) return 1
         else return 2
      }
   }

   const removeDiacritics = str => {
   return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}


   if (display && verb) {
      return (
         <div id='question-container' className='question-box'>
            <div className='question-container'>
               <div className='question-text'>
                  {tense === 'imperative' ? `${conjugationE}!` : `${pronounE} ${conjugationE}`}
               </div>
               <Answer verb={verb} handleResponse={handleResponse} />
            </div>
            <Hints innerID={innerID} infinitiveP={infinitiveP} tense={tense} />
         </div>
         // <>
         //    <div id={`question-${index}`} className='question-container'>
         //       <div className='question-text'>
         //          <p>{verb.fullE}</p>
         //       </div>
         //       {/* <Answer verb={verb} index={index} handleSubmit={handleSubmit} responseIcon={responseIcon()} /> */}
         //       {/* {isCorrectIcon()} */}
         //       {isCorrectText()}
         //    </div>
         //    {/* <Hint verb={verb} index={index} /> */}
         // </>
      )
   } else return null
   
}

export default Question