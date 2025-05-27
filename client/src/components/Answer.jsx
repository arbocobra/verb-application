import { useEffect, useRef } from 'react';
import AccentKeyboard from './AccentKeyboard';

const Answer = (props) => {
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

   const typeAccent = (val) => {
      inputRef.current.value += val
      inputRef.current.focus()
   } 

   if (verb.tense === 'imperative') {
      return (
         <div>
            <input ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
            <div>{`-${verb.pronounP}`}</div>
            <div>{icon}</div>
            <AccentKeyboard typeAccent={typeAccent} />
         </div>
      )
   } else {
      return (
         <div>
            <div>{verb.pronounP}</div>
            <input ref={inputRef} onKeyUp={pressEnter} maxLength='20' type='text' />
            <div>{icon}</div>
            <AccentKeyboard typeAccent={typeAccent} />
         </div>
      )
   }
}

export default Answer