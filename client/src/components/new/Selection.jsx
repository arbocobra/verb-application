import { useState, useEffect, useRef } from 'react';
import SelectTense from '@/components/SelectTense';
import SelectVerb from '@/components/SelectVerb';
import clsx from 'clsx';

const Selection = (props) => {
   const {updatePage, tenseFilter, setTenseFilter, verbFilter, setVerbFilter} = props
   
   const [displayTense, setDisplayTense] = useState(false);
   const [displayVerb, setDisplayVerb] = useState(false);
   const [submitState, setSubmitState] = useState(0)
   // const selectTenseRef = useRef(null)
   // const selectVerbRef = useRef(null)

   const submitSelection = () => {
      setSubmitState(1)
      // e.preventDefault()
      // updatePage()
   }

   useEffect(() => {
      if (submitState == 1) {
         setTimeout(() => {
            setSubmitState(2)
         }, 1500)
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

   return (
      <>
         <div className={clsx('text-2xl text-center font-semibold', {'hidden':submitState == 2})}>Portuguese Verb Practice</div>
         <div className='flex flex-col flex-1 '>
            <div className='flex flex-col relative w-full flex-1 z-1' >
               <div className={clsx('absolute top-0 bottom-0 w-full z-1 p-4 flex flex-col gap-3', {'hidden':submitState == 2})}>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
                  <p>Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. </p> <p>Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora.</p>
                  <p>Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus.</p>
               </div>

               <div onClick={() => setDisplayTense(true)} className={clsx('transition-[height] duration-200 absolute bottom-0 w-full p-4 bg-secondary rounded-2xl', {'h-160 z-5 flex flex-col gap-3':displayTense}, {'h-50 z-5 hover:h-55':!displayTense && !displayVerb}, {'z-6 h-35 hover:h-40':!displayTense && displayVerb}, {'hidden':submitState == 2})}>
                  <div className='text-black text-xl font-semibold text-center'>Select Tense</div>
                  <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} display={displayTense} />
               </div>

               <div onClick={() => setDisplayVerb(true)} className={clsx('transition-[height] duration-200 absolute bottom-0 w-full p-4 bg-primary rounded-2xl z-5', {'h-160 z-5 flex flex-col gap-3':displayVerb}, {'h-35  hover:h-40':!displayVerb}, {'hidden':submitState == 2})}>
                  <div className='text-white text-xl font-semibold text-center'>Select Verb</div>
                  <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} display={displayVerb} />
               </div>

               <div onClick={submitSelection} className={clsx('transition-[height] duration-200 absolute bottom-0 w-full bg-tertiary rounded-2xl z-7', {'h-20 hover:h-25 p-4':submitState == 0}, {'h-171 p-4':submitState == 1}, {'h-0 overflow-hidden p-0':submitState == 2})}>
                  { submitState == 0 && <div className='text-black text-xl font-bold text-center uppercase'>Begin</div>}
               </div>
            </div>
         </div>
      </>
   )
}

export default Selection