import { useState } from 'react';
import Selection from './Selection';
import TestContainer from './TestContainer';

const Verbs = () => {

   const [displayActive, setDisplayActive] = useState(false)
   const [tenseFilter, setTenseFilter] = useState(['all'])
   const [verbFilter, setVerbFilter] = useState(['all']) 

   const updatePage = () => {
      document.getElementById('selection').classList.add('hidden')
      setDisplayActive(true)
   }

   const resetPage = () => {
      setTenseFilter(['all'])
      setVerbFilter(['all'])
      setDisplayActive(false)
   }

   return (
      <div id='verbs'>
         { displayActive ? <TestContainer resetPage={resetPage} tenseFilter={tenseFilter} verbFilter={verbFilter} /> : <Selection updatePage={updatePage} tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} verbFilter={verbFilter} setVerbFilter={setVerbFilter} /> } 
      </div>
   )
}

export default Verbs