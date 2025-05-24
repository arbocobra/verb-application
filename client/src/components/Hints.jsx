import React, { useState, useEffect } from 'react';
import { selectHints } from '../functions/loadingFunctions'

const Hints = (props) => {
   const { innerID, infinitiveP, tense } = props

   const [hintA, setHintA] = useState()

   useEffect(() => {
      if (innerID < 12 || innerID > 23) {
         if (!infinitiveP.includes('(')) {
            selectHints(tense, infinitiveP)
            .then(data => setHintA(data))
         }
      }
   },[])

   useEffect(() => {
      const divArr = document.getElementsByClassName('hint-title')
      for (let div of divArr) {
         let divContents = div.nextElementSibling
         div.addEventListener('click', () => divContents.classList.toggle('hidden'))
      }
   })
   
   return (
      <div className='hint-container'>
         <div className='hint'>
            <div className='hint-title'>Hint 1</div>
            <div className='hint-contents hidden'>
               <p>{`${tense} // ${infinitiveP}`}</p>
            </div>    
         </div>
         <div className='hint'>
            <div className='hint-title'>Hint 2</div>
            <div className='hint-contents hidden'>
               {hintA ? <p>{hintA}</p> : <p>No extra hint</p>}
            </div>    
         </div>
      </div>
   )
}

export default Hints