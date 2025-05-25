import { useState, useEffect, useRef } from 'react';
import SelectTense from './SelectTense';
import SelectVerb from './SelectVerb';


const Selection = (props) => {
   const {updatePage, tenseFilter, setTenseFilter, verbFilter, setVerbFilter} = props

   const [submit, setSubmit] = useState(false)

   const isFirstRender = useRef(true)
   const selectButtonRef = useRef(null)

   const onFirstRender = () => {
      isFirstRender.current = false
   }

   useEffect(() => selectButtonRef.current.addEventListener('click', submitSelection), []);

   useEffect(() => {
      if (submit && !isFirstRender.current) updatePage()
      onFirstRender()
   }, [submit])
   
   const submitSelection = (event) => {
      event.preventDefault()
      setSubmit(true)
   }

   return (
      <div className='selection-container'>
         <div className='selection-box'>
            <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} />
            <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} />
         </div>
         <div ref={selectButtonRef} className='button md'>Begin Test</div>
      </div>
   )
}

export default Selection