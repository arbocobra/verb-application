import { useState, useEffect } from 'react';
import { fetchHints } from '../functions/loadingFunctions'


const Hints = (props) => {
   const { innerId, infinitiveP, tense } = props

   const [hintA, setHintA] = useState()

   const toggleHint = (e) => {
      e.preventDefault();
      const contentDiv = e.target.nextElementSibling
      contentDiv.classList.toggle('hidden')
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
      <div className='hint-container'>
         <div className='hint'>
            <div className='hint-title' onClick={toggleHint}>Hint 1</div>
            <div className='hint-contents hidden'>
               <p>{`${tense} // ${infinitiveP}`}</p>
            </div>    
         </div>
         <div className='hint'>
            <div className='hint-title' onClick={toggleHint}>Hint 2</div>
            <div className='hint-contents hidden'>
               {hintA ? <p>{hintA}</p> : <p>No extra hint</p>}
            </div>    
         </div>
      </div>
   )
}

export default Hints