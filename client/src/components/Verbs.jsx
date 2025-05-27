import { useState } from 'react';
import Selection from './Selection';
import TestContainer from './TestContainer';
import Header from './Header';

const Verbs = () => {

   const [displayActive, setDisplayActive] = useState(false)
   const [tenseFilter, setTenseFilter] = useState(['all'])
   const [verbFilter, setVerbFilter] = useState(['all']) 

   const updatePage = () => {
      setDisplayActive(true)
   }

   const resetPage = () => {
      setTenseFilter(['all'])
      setVerbFilter(['all'])
      setDisplayActive(false)
   } 

   return (
      <div id='verbs'>
         <Header />
         { displayActive ? <TestContainer resetPage={resetPage} tenseFilter={tenseFilter} verbFilter={verbFilter} /> : <Selection updatePage={updatePage} tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} verbFilter={verbFilter} setVerbFilter={setVerbFilter} /> } 
      </div>
   )
}

export default Verbs