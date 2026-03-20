import { useEffect, useState } from 'react';
import Response from '@/components/Response';
import Hints from '@/components/Hints';
import Answer from '@/components/Answer';
import AccentKeyboard from '@/ui/AccentKeyboard';
import { checkAnswer } from '@/functions/responseFunctions';
import { useDropdownDisplay } from '@/hooks/useDropdownDisplay';
import { useSubmit } from '@/hooks/useSubmit';

const Question = ({count, verb, handleResponse}) => {
   const {displayKeyboard, displayHintA, displayHintB, updateDisplay} = useDropdownDisplay()
   const {resultId, handleSubmit} = useSubmit(verb, handleResponse)
   const {tense, pronounE, conjugationE, pronounP, conjugationP} = verb
   const fullP = tense == 'imperative' ? conjugationP : `${pronounP} ${conjugationP}`

   return (
      <div className='flex flex-1 flex-col px-2 py-4 gap-2 bg-white shadow-md shadow-black/20'>
         <QuestionInner count={count} tense={tense == 'imperative'} pronoun={pronounE} conjugation={conjugationE} />
         <Response verb={verb} handleSubmit={handleSubmit} displayKeyboard={displayKeyboard} updateDisplay={updateDisplay} />
         <Answer val={resultId} correctResponse={fullP} />
         <Hints verb={verb} updateDisplay={updateDisplay} displayHintA={displayHintA} displayHintB={displayHintB} />
      </div>
   )
}

const QuestionInner = ({count, tense, conjugation, pronoun}) => {
   const bg = count % 3 == 0 ? {a: 'var(--color-primary)', b: 'var(--color-tertiary)', c: 'var(--color-secondary)'} 
   : (count % 3) == 1 ? {a: 'var(--color-tertiary)', b: 'var(--color-secondary)', c: 'var(--color-primary)'}
   : {a: 'var(--color-secondary)', b: 'var(--color-primary)', c: 'var(--color-tertiary)'}
   const textColor = count % 3 == 0 ? 'var(--color-white)' : 'var(--color-black)'

   const innerText = tense ? (<><span>{conjugation}!</span><span className='text-base italic'>{pronoun}</span></>) : (<span>{pronoun} {conjugation}</span>)

   return (
      <div className='flex flex-col basis-62 items-center gap-2 p-2'>
         <div style={{backgroundColor: bg.c}} className='rounded-t-lg h-3 w-8/10 transition-colors duration-200'></div>
         <div style={{backgroundColor: bg.b}} className= 'rounded-t-lg h-3 w-9/10 transition-colors duration-200'></div>
         <div style={{backgroundColor: bg.a}} className='flex flex-1 rounded-2xl w-full transition-colors duration-200 justify-center items-center p-4'>
            {/* { tense ? <div className='uppercase font-semibold text-lg'>{conjugation}!</div> : <div className='uppercase font-semibold text-lg'>{pronoun}&nbsp;{conjugation}</div>} */}
            <div style={{color: textColor}} className='uppercase font-semibold text-lg flex flex-col items-center'>{innerText}</div>
         </div>
      </div>
   )
}

export default Question