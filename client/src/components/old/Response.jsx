import { useEffect, useRef } from 'react';
import AccentKeyboard from './AccentKeyboard';

const Response = (props) => {
   const { verb, handleSubmit, responseIcon } = props

   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus()
   }, [])

   const pressEnter = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault();
         const clearCaps = e.target.value.toLowerCase()
         handleSubmit(clearCaps)
         clearText(e.target)
       }
   }

   const icon = responseIcon == null ? <div></div> : <img width={30} height={30} src={responseIcon}/>

   const clearText = (div) => div.value = ''

   const typeAccent = (e) => {
      let val = e.target.innerText
      inputRef.current.value += val
      inputRef.current.focus()
   } 

   if (verb.tense === 'imperative') {
      return (
         <div className='flex-column nowrap g-20'>
            <div className='input-row flex-row middle g-10'>
               <input id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
               <div>{`-${verb.pronounP}`}</div>
               <div className='icon h-30'>{icon}</div>
            </div>
            <AccentKeyboard typeAccent={typeAccent} />
         </div>
      )
   } else {
      return (
         <div className='flex-column nowrap g-20'>
            <div className='input-row flex-row middle g-10'>
               <div className='pronoun'>{verb.pronounP}</div>
               <input  id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
               <div className='icon h-30'>{icon}</div>
            </div>
            <AccentKeyboard typeAccent={typeAccent} />
         </div>
      )
   }
}

export default Response