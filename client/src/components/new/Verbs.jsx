import { useState } from 'react';
import Selection from '@/components/Selection';
// import Test from '@/components/Test';
import { Test } from '@/app/components/new/TempFrames';

const Verbs = () => {

   const [displayActive, setDisplayActive] = useState(false)
   const [tenseFilter, setTenseFilter] = useState(['all'])
   const [verbFilter, setVerbFilter] = useState(['all']) 

   const updatePage = () => {
      setDisplayActive(true)
      // console.log(tenseFilter, verbFilter)
   }

   const resetPage = () => {
      setTenseFilter(['all'])
      setVerbFilter(['all'])
      setDisplayActive(false)
   } 

   return (
      <div id='Verbs' className='flex items-end h-full max-w-90'>
         <div id='selection' className='flex flex-col h-9/10 bg-white rounded-3xl w-full p-5'>
         { displayActive ? 
         <Test resetPage={resetPage} tenseFilter={tenseFilter} verbFilter={verbFilter} /> : 
         <Selection updatePage={updatePage} tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} verbFilter={verbFilter} setVerbFilter={setVerbFilter} /> } 
         </div>
      </div>
   )
}

export default Verbs