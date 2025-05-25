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

   const typeAccent = (val) => {
      inputRef.current.value += val
      inputRef.current.focus()
   } 

   if (verb.tense === 'imperative') {
      return (
         <div className='answer-container'>
            {/* <div id={`input-${index}`} className='answer-container'> */}
            <input ref={inputRef} className='answer-input' type='text' />
            <div className='pronoun imperative'>{`-${verb.pronounP}`}</div>
            <div className='icon'>{icon}</div>
            <AccentKeys typeAccent={typeAccent} />
         </div>
      )
   } else {
      return (
         <div className='answer-container'>
            {/* <div id={`input-${index}`} className='answer-container'> */}
            <div className='pronoun'>{verb.pronounP}</div>
            <input ref={inputRef} className='answer-input' maxLength='20' type='text' />
            <div className='icon'>{icon}</div>
            <AccentKeys typeAccent={typeAccent} />
         </div>
      )
   }
}

const AccentKeys = (props) => {
   const { typeAccent } = props

   const initializeKeyboard = useRef(false)

   useEffect(() => {
      if (!initializeKeyboard.current){
         const div = document.getElementById('keyboard')
         let divContents = div.nextElementSibling
         div.addEventListener('click', () => divContents.classList.toggle('hidden'))
         initializeKeyboard.current = true
      }
   },[])
   
   return (
      <div className='keyboard-container'>
         <div className='keyboard-box'>
            <div id='keyboard' className='keyboard-title'>Use Accent Keyboard</div>
            <div className='keyboard-contents hidden'>
               <button className='key' type='button' onClick={()=> typeAccent('á')}>á</button>
               <button className='key' type='button' onClick={()=> typeAccent('â')}>â</button>
               <button className='key' type='button' onClick={()=> typeAccent('ã')}>ã</button>
               <button className='key' type='button' onClick={()=> typeAccent('à')}>à</button>
               <button className='key' type='button' onClick={()=> typeAccent('ç')}>ç</button>
               <button className='key' type='button' onClick={()=> typeAccent('é')}>é</button>
               <button className='key' type='button' onClick={()=> typeAccent('ê')}>ê</button>
               <button className='key' type='button' onClick={()=> typeAccent('í')}>í</button>
               <button className='key' type='button' onClick={()=> typeAccent('ó')}>ó</button>
               <button className='key' type='button' onClick={()=> typeAccent('ô')}>ô</button>
               <button className='key' type='button' onClick={()=> typeAccent('õ')}>õ</button>
               <button className='key' type='button' onClick={()=> typeAccent('ú')}>ú</button>
            </div>    
         </div>
      </div>
   )
}

export default Answer