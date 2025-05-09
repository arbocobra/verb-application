import React, { useState } from 'react';
import Selection from './Selection';
import TestContainer from './TestContainer';

const Verbs = () => {

   const [displayQuestion, setDisplayQuestion] = useState(false)
   const [tenseFilter, setTenseFilter] = useState(['all']) // update name
   const [verbFilter, setVerbFilter] = useState(['all']) 

   const updatePage = () => {
      document.getElementById('selection').classList.add('hidden')
      setDisplayQuestion(true)
   }

   return (
      <div id='verbs'>
         { displayQuestion ? <TestContainer setDisplayQuestion={setDisplayQuestion} tenseFilter={tenseFilter} verbFilter={verbFilter} /> : <Selection updatePage={updatePage} tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} verbFilter={verbFilter} setVerbFilter={setVerbFilter} /> } 
      </div>
   )
}

export default Verbs