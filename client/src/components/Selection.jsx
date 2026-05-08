import { useState, useEffect } from 'react';
import SelectTense from '@/components/SelectTense';
import SelectVerb from '@/components/SelectVerb';
import clsx from 'clsx';

const useSelection = (updatePage) => {
   const [displayTense, setDisplayTense] = useState(false);
   const [displayVerb, setDisplayVerb] = useState(false);
   const [submitState, setSubmitState] = useState(0)

   const submitSelection = () => { setSubmitState(1) }

   const updateDisplay = (view) => {
      if (view == 'tense') setDisplayTense(true)
      else if (view == 'verb') setDisplayVerb(true)
   }

   useEffect(() => {
      if (submitState == 1) {
         setTimeout(() => {
            setSubmitState(2)
         }, 800)
      } else if (submitState == 2) {
         setTimeout(() => {
            updatePage()
         }, 500)
      }
   }, [submitState, updatePage])

   useEffect(() => {
      if (displayTense) setDisplayVerb(false)
   }, [displayTense])

   useEffect(() => {
      if (displayVerb) setDisplayTense(false)
   }, [displayVerb])

   return { displayTense, displayVerb, submitState, submitSelection, updateDisplay }
}

const Selection = (props) => {
   const {updatePage, tenseFilter, setTenseFilter, verbFilter, setVerbFilter} = props

   const { displayTense, displayVerb, submitState, submitSelection, updateDisplay } = useSelection(updatePage)

   return (
      <>
         
         <div className='flex flex-col flex-1 '>
            <div className='flex flex-col relative w-full flex-1 z-1' >
               <div className={clsx('absolute top-0 bottom-0 w-full z-1 py-4 flex flex-col gap-3', {'hidden':submitState == 2})}>
                  <div className='text-h-1 text-center font-semibold'>Portuguese Flashcards</div>
                  <div className='text-h-2 text-center font-semibold'>Practice Verb Conjugation</div>
                  <p>Test your knowledge of European Portuguese verbs!</p>
                  <p>Select up to 9 verb tenses and 15 irregular verbs / 4 examples of regular verbs.</p>
                  <p>(Watch out, if you select &lsquo;All&lsquo; Verbs and Tenses you may have a lot of questions.)</p>
               </div>

               <div onClick={() => updateDisplay('tense')} className={clsx('transition-[height] duration-200 absolute bottom-0 w-full p-4 bg-secondary rounded-2xl', {'h-full z-5 flex flex-col':displayTense}, {'h-[36%] z-5 hover:h-[39%]':!displayTense && !displayVerb}, {'z-6 h-[24%] hover:h-[27%]':!displayTense && displayVerb}, {'hidden':submitState == 2})}>
                  <div className='text-black text-h-2 font-semibold text-center mb-2'>Select Tenses</div>
                  <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} display={displayTense} />
               </div>

               <div onClick={() => updateDisplay('verb')} className={clsx('transition-[height] duration-200 absolute bottom-0 w-full p-4 bg-primary rounded-2xl z-5', {'h-full z-5 flex flex-col':displayVerb}, {'h-[24%] hover:h-[27%]':!displayVerb}, {'hidden':submitState == 2})}>
                  <div className='text-white text-h-2 font-semibold text-center mb-2'>Select Verbs</div>
                  <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} display={displayVerb} />
               </div>

               <div onClick={submitSelection} className={clsx('transition-[height] absolute bottom-0 w-full bg-tertiary rounded-2xl z-7', {'h-[12%] hover:h-[15%] p-4 duration-200':submitState == 0}, {'h-full p-0 duration-400':submitState == 1}, {'h-0 overflow-hidden p-0 duration-400':submitState == 2})}>
                  { submitState == 0 && <div className='text-black text-h-2 font-bold text-center uppercase'>Begin</div>}
               </div>
            </div>
         </div>
      </>
   )
}

export default Selection