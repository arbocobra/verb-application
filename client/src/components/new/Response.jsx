import { useRef } from 'react';
import { ResponseInput, ResponseInputImperative } from '@/ui/ResponseInput';
import AccentKeyboard from '@/ui/AccentKeyboard';

const Response = ({verb, handleSubmit, displayKeyboard, updateDisplay}) => {
   
   const inputRef = useRef(null)
   
   const clearText = (div) => div.value = ''
   const typeAccent = (e) => {
      let val = e.target.innerText
      inputRef.current.value += val
      inputRef.current.focus()
   }
   const submitAnswer = () => {
      const val = inputRef.current.value
      const clearCaps = val.toLowerCase()
      handleSubmit(clearCaps)
      clearText(inputRef.current)
      // displayKeyboard={displayKeyboard}
   }

   return (
      <div className='flex flex-col items-stretch gap-2'>
         { verb.tense == 'imperative' ? 
            <ResponseInputImperative ref={inputRef} submitAnswer={submitAnswer} /> :
            <ResponseInput ref={inputRef} submitAnswer={submitAnswer} pronoun={verb.pronounP} />
         }
         <AccentKeyboard typeAccent={typeAccent} updateDisplay={updateDisplay} displayKeyboard={displayKeyboard} />
      </div>
   )
}

export default Response