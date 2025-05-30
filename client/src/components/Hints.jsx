import { useState, useEffect } from 'react';
import { fetchHints } from '../functions/loadingFunctions'


const Hints = (props) => {
   const { innerId, infinitiveP, tense } = props

   const [hintA, setHintA] = useState()

   const toggleHint = (e) => {
      e.preventDefault();
      const contentDiv = e.target.nextElementSibling
      contentDiv.classList.toggle('closed')
   }

   useEffect(() => {
      let ignore = false
      if (innerId < 12 || innerId > 23) {
         if (!infinitiveP.includes('(')) {
            fetchHints(tense)
            .then(data => {
               if (!ignore) setHintA(data[infinitiveP])
            })
         }
      }
      return () => ignore = true
   }, [tense, infinitiveP, innerId])
   
   return (
      <div id='hints' className='hint-wrap flex-column wrap g-10'>
         <div className='button accordion hint'>
            <div className='toggle-title' onClick={toggleHint}>Hint 1</div>
            <div className='flex-column middle nowrap h-30 closed'>
               <p>{`${tense} // ${infinitiveP}`}</p>
            </div>    
         </div>
         <div className='button accordion hint flex-column'>
            <div className='toggle-title' onClick={toggleHint}>Hint 2</div>
            <div className='closed flex-column middle nowrap h-30'>
               {hintA ? <p>{hintA}</p> : <p>No extra hint</p>}
            </div>    
         </div>
      </div>
   )
}

export default Hints