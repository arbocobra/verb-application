import { useEffect, useState } from 'react';
import Response from './Response';
import Hints from './Hints';
import Answer from './Answer';
import { checkAnswer } from '../functions/responseFunctions';

import checkMark from './../assets/check.svg'
import xMark from './../assets/incorrect.svg'
import exclamationMark from './../assets/exclamation.svg'

const Question = (props) => {
   const {display, index, verb, handleResponse} = props

   const { conjugationE, conjugationP, infinitiveP, innerId, pronounE, pronounP, tense } = verb
   const fullP = `${pronounP} ${conjugationP}`

   const [correct, setCorrect] = useState(null) 

   useEffect(() => setCorrect(null), [index])

   const responseIcon = () => {
      if (correct === null) return null
      else if (correct === 0) return checkMark
      else if (correct === 1) return exclamationMark
      else if (correct === 2) return xMark
   }

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
         <div id='Question' className='flex-row wrap g-20 middle bottom-40'>
            <div className='question-wrap g-20 flex-column'>
               <div>
                  <h3>
                     {tense === 'imperative' ? `${conjugationE}!` : `${pronounE} ${conjugationE}`}
                  </h3>
               </div>
               <Response index={index} verb={verb} handleSubmit={handleSubmit} responseIcon={responseIcon()} />
               <Answer val={correct} correctResponse={fullP} />
            </div>
            <Hints innerId={innerId} infinitiveP={infinitiveP} tense={tense} />
         </div>
      )
   } else return null
}

export default Question