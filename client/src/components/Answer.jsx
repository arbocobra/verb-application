import { useEffect, useRef } from 'react';

const Answer = (props) => {
   const {verb, handleResponse} = props
   // const {verb, index, handleSubmit, responseIcon} = props
   const inputRef = useRef(null);

   useEffect(() => {
      // const div = document.getElementById(`input-${index}`)
      // const input = div.querySelector('input')
      inputRef.current.addEventListener('keyup', pressEnter)
      inputRef.current.focus()
   }, [])

   const pressEnter = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault();
         const clearCaps = e.target.value.toLowerCase()
         handleResponse(true, clearCaps)
         // handleSubmit(clearCaps)
         clearText(e.target)
       }
   }

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
            {/* <div className='icon'><img src={responseIcon}/></div> */}
         </div>
      )
   }
}

export default Answer