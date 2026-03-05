import { useEffect, useState } from 'react';
import Response from '@/components/Response';
import Hints from '@/components/Hints';
import Answer from '@/components/Answer';
import { checkAnswer } from '@/functions/responseFunctions';

import checkMark from '@/assets/check.svg'
import xMark from '@/assets/incorrect.svg'
import exclamationMark from '@/assets/exclamation.svg'

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
         
         // <div id='Question' className='flex-row wrap g-20 middle bottom-40'>
            <div className= 'flex flex-col justify-stretch w-full h-5/8 items-center gap-2'>
         
         <div className='bg-secondary rounded-t-lg h-3 w-8/10'></div>
         <div className='bg-tertiary rounded-t-lg h-3 w-9/10'></div>
         <div className='flex flex-1 rounded-2xl bg-primary w-80'>
            <div className='flex text-3xl w-full p-4 text-white justify-center items-center capitalize'>
                     {tense === 'imperative' ? `${conjugationE}!` : `${pronounE} ${conjugationE}`}
            </div>
         </div>
         <div className='flex flex-col flex-1 w-full items-center gap-10 py-8'>
            <div className='bg-gray-200 w-9/10 h-13'>
               <Response index={index} verb={verb} handleSubmit={handleSubmit} responseIcon={responseIcon()} />
            </div>
            
         </div>
            </div>

            /*{ <div className='question-wrap g-20 flex-column'>
               <div>
                  <h3>
                     {tense === 'imperative' ? `${conjugationE}!` : `${pronounE} ${conjugationE}`}
                  </h3>
               </div>
               <Response index={index} verb={verb} handleSubmit={handleSubmit} responseIcon={responseIcon()} />
               <Answer val={correct} correctResponse={fullP} />
            </div>
            <Hints innerId={innerId} infinitiveP={infinitiveP} tense={tense} />
            </div> }*/
            
      )
   } else return null
}

export default Question

/**
 * 
 * 
 */