import React, { useState, useEffect, useRef } from 'react';

const SelectVerb = (props) => {
   const {verbFilter, setVerbFilter, toggleAccordion} = props

   const [isAllVerb, setIsAllVerb] = useState(true)
   const initializeVerb = useRef(false)
   const verbRef = useRef(null)
   const verbPanelRef = useRef(null)

   const isFirstRender = useRef(true)
   const verbSelection = useRef(['amar (-AR)', 'beber (-ER)', 'decidir (-IR)', 'vir', 'dizer', 'ler', 'dar', 'estar', 'fazer', 'ir', 'ouvir', 'poder', 'querer', 'saber', 'ser', 'ter', 'trazer', 'ver', 'pôr'])

   useEffect(() => {
      if (isAllVerb && initializeVerb.current) {
         let divArr = document.getElementsByClassName('verb-checkbox')
         for (let div of divArr) {
            div.checked = false
         }
      }
      onFirstRender()
   }, [isAllVerb])

   const onFirstRender = () => {
      if (!initializeVerb.current) {
         verbRef.current.addEventListener('click', () => toggleAccordion(verbRef.current, verbPanelRef.current))
         initializeVerb.current = true
      }
   }
   
    const handleCheckbox = (e) => {
      let val = e.target.value
      let isSelected = e.target.checked
      let arr = [...verbFilter]

      if (val === 'all') {
         setIsAllVerb(current => !current)
         if (isSelected) setVerbFilter(['all'])
         else arr = [...arr].filter(el => el !== 'all')         
      } else {
         if (isSelected) {
            arr = [...arr].filter(el => el !== 'all')
            arr.push(val)
            setIsAllVerb(false)
         } else arr = [...arr].filter(el => el !== val)
         setVerbFilter(arr)
      }
   }

   return (
      <div id='selection' className='single-selection'>
         <div ref={verbRef} className='select-accordion'>
            <h3>Select Verbs to Practice</h3>
         </div>
         <div ref={verbPanelRef} className='selection-options closed'>
            <div className='options-box'>
               <div className='selection-input' id='input-all'>
                  <input type='checkbox' id='verb0' value='all' onChange={handleCheckbox} checked={isAllVerb} />
                  <label className='select-label' htmlFor='verb0'> All</label>
               </div>
               {verbSelection.current.map((tense,i) => (
                  <div key={`checkbox${i}`}>
                     <input className='auto-checkbox, verb-checkbox' type='checkbox' id={`verb${i + 1}`} value={tense} onChange={handleCheckbox} />
                     <label className='select-label' htmlFor={`verb${i + 1}`}> {tense}</label>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default SelectVerb