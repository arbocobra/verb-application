import { useEffect, useRef } from 'react';

const Answer = (props) => {
   const { index, verb, handleSubmit, responseIcon } = props
   // const {verb, index, handleSubmit, responseIcon} = props
   const initializeListeners = useRef(false)
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.addEventListener('keyup', pressEnter)
      inputRef.current.focus()

   }, [index])

   const pressEnter = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault();
         const clearCaps = e.target.value.toLowerCase()
         handleSubmit(clearCaps)
         // handleSubmit(clearCaps)
         clearText(e.target)
         inputRef.current.removeEventListener('keyup', pressEnter)
       }
   }

   const icon = responseIcon == null ? <div></div> : <img width={30} height={30} src={responseIcon}/>

   const clearText = (div) => div.value = ''

   if (verb.tense === 'imperative') {
      return (
         <div className='answer-container'>
            {/* <div id={`input-${index}`} className='answer-container'> */}
            <input ref={inputRef} className='answer-input' type='text' />
            <div className='pronoun imperative'>{`-${verb.pronounP}`}</div>
         </div>
      )
   } else {
      return (
         <div className='answer-container'>
            {/* <div id={`input-${index}`} className='answer-container'> */}
            <div className='pronoun'>{verb.pronounP}</div>
            <input ref={inputRef} className='answer-input' maxLength='20' type='text' />
            <div className='icon'>{icon}</div>
         </div>
      )
   }
}

export default Answer