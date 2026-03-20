import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const ResponseInputImperative = ({ ref, submitAnswer }) => {
   const pressEnter = (e) => {
      if (e.key === 'Enter') { submitAnswer() }
   }

   return (
      <div className='flex gap-2 text-xl items-center justify-center py-2'>
         <input ref={ref} id='response' onKeyUp={pressEnter} maxLength='25' className='bg-gray-200 px-1 py-2 max-w-50' type='text'/>
         <div className='pr-2 text-2xl'>!</div>
         <div onClick={submitAnswer} className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'><ArrowRightIcon /></div>
      </div>
   )
}

export const ResponseInput = ({ ref, submitAnswer, pronoun }) => {
   const pressEnter = (e) => {
      if (e.key === 'Enter') { submitAnswer() }
   }

   return (
      <div className='flex gap-3 text-xl items-center justify-center py-2'>
         <div>{pronoun}</div>
         <input ref={ref} id='response' onKeyUp={pressEnter} maxLength='25' className='bg-gray-200 px-1 py-2 max-w-50' type='text'/>
         <div onClick={submitAnswer} className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'><ArrowRightIcon /></div>
      </div>
   )
}