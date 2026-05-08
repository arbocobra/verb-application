import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon, CheckIcon, XMarkIcon} from '@heroicons/react/24/outline'
import clsx from 'clsx';

export const ResultDropdown = ({openState, results, isCorrect}) => {
   const [display, setDisplay] = useState(openState)

   const accentColour = isCorrect ? 'var(--color-secondary)' : 'var(--color-primary)'

   return (
      <div className='flex flex-col'>
         <div style={{borderBottomColor: accentColour}} onClick={() => setDisplay(current => !current)} className='border-b-3 flex p-1 font-bold justify-between text-gray-600'>
            {isCorrect ? <span className=''>Display Correct</span> : <span className=''>Display Incorrect</span>}
            {display ? <ChevronDownIcon style={{color:accentColour}} className='size-6 py-1' /> : <ChevronUpIcon style={{color:accentColour}} className='size-6 py-1' />}
         </div>
         <div className={clsx('pt-3 flex flex-col gap-2', display ? 'h-0 pt-0 overflow-hidden' : 'h-auto')}>
            { results.length && isCorrect && results.map((el,i) => (
               <div key={`correct-${i}`} className='flex gap-3'>
                  <CheckIcon className='size-6 py-1 text-secondary' />
                  <span>{el}</span>
               </div>
            ))}
            { results.length && !isCorrect && results.map((el,i) => (
               <div key={`incorrect-${i}`} className='flex gap-3'>
                  <XMarkIcon className='size-6 py-1 text-primary' />
                  <span>{el}</span>
               </div>
            ))}
         </div>
      </div>
   )
}