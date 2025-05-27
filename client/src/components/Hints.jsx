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
      <div>
         <div>
            <div onClick={toggleHint}>Hint 1</div>
            <div className='hidden'>
               <p>{`${tense} // ${infinitiveP}`}</p>
            </div>    
         </div>
         <div>
            <div onClick={toggleHint}>Hint 2</div>
            <div className='hidden'>
               {hintA ? <p>{hintA}</p> : <p>No extra hint</p>}
            </div>    
         </div>
      </div>
   )
}

export default Hints