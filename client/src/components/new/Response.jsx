import { useEffect, useRef } from 'react';
import { ResponseInput, ResponseInputImperative } from '@/ui/ResponseInput';
import AccentKeyboard from '@/ui/AccentKeyboard';

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
   
   const inputImperative = (
      <>
         <input id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
         <div>{`-${verb.pronounP}`}</div>
         <div className='icon h-30'>{icon}</div>
      </>
   )
   const inputVerb = (
      <>
         <div className='pronoun'>{verb.pronounP}</div>
         <input  id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
         <div className='icon h-30'>{icon}</div>
      </>
   )

   return (
      <div className='flex flex-col g-5'>
         { verb.tense == 'imperative' ? 
            <ResponseInputImperative ref={inputRef} pronoun={verb.pronounP} pressEnter={pressEnter} icon={icon} /> : 
            <ResponseInput ref={inputRef} pronoun={verb.pronounP} pressEnter={pressEnter} icon={icon} />}
      </div>
   )

   // if (verb.tense === 'imperative') {
   //    return (
   //       <div className='flex-column nowrap g-5'>
   //          <div className='input-row flex-row middle g-2'>
   //             <input id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
   //             <div>{`-${verb.pronounP}`}</div>
   //             <div className='icon h-30'>{icon}</div>
   //          </div>
   //          {/* <AccentKeyboard typeAccent={typeAccent} /> */}
   //       </div>
   //    )
   // } else {
   //    return (
   //       <div className='flex-column nowrap g-5'>
   //          <div className='input-row flex-row middle g-2'>
   //             <div className='pronoun'>{verb.pronounP}</div>
   //             <input  id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
   //             <div className='icon h-30'>{icon}</div>
   //          </div>
   //          {/* <AccentKeyboard typeAccent={typeAccent} /> */}
   //       </div>
   //    )
   // }
}

export default Response