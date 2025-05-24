import { useEffect, useState } from 'react';
import Answer from './Answer';
import Hints from './Hints';
import { checkAnswer } from '../functions/responseFunctions';

import checkMark from './../assets/check.svg'
import xMark from './../assets/incorrect.svg'
import exclamationMark from './../assets/exclamation.svg'

const Question = (props) => {
   const {display, index, verb, handleResponse} = props
   const { conjugationE, conjugationP, infinitiveE, infinitiveP, innerId, pronounE, pronounP, tense } = verb
   const fullP = `${pronounP} ${conjugationP}`
   // const fullE = `${pronounE} ${conjugationE}`

   // const {verb, index, display, handleAnswer} = props
   const [correct, setCorrect] = useState(null)
   
   useEffect(() => setCorrect(null), [index])

   const responseIcon = () => {
      if (correct === null) return null
      else if (correct === 0) return checkMark
      else if (correct === 1) return exclamationMark
      else if (correct === 2) return xMark
   }
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
         setTimeout(() => handleResponse(true, fullP), 1000)
      } else if (result === 1) { // correct but wrong accent
         setCorrect(result)
         setTimeout(() => handleResponse(false, fullP), 2500)
      } else if (result === 2) { // incorrect
         setCorrect(result)
         setTimeout(() => handleResponse(false, fullP), 2500)
      }
   }

   if (display && verb) {
      return (
         <div id='question-container' className='question-box'>
            <div className='question-container'>
               <div className='question-text'>
                  {tense === 'imperative' ? `${conjugationE}!` : `${pronounE} ${conjugationE}`}
               </div>
               <Answer index={index} verb={verb} handleSubmit={handleSubmit} responseIcon={responseIcon()} />
               <Response val={correct} correctResponse={fullP} />
            </div>
            <Hints index={index} innerId={innerId} infinitiveP={infinitiveP} tense={tense} />
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

const Response = (props) => {
   const {val, correctResponse} = props

   if (val === null) return (
      <div className='result'></div>
   )
   else if (val=== 0) return (
      <div className='result'>
         <p>Correct</p>
      </div>
   )
   else if (val === 1) return (
      <div className='result'>
         <p>{`(wrong accent) - ${correctResponse}`}</p>
      </div>
   )
   else if (val === 2) return (
      <div className='result'>
         <p>{correctResponse}</p>
      </div>
   )
}

export default Question