import { useState, useRef } from 'react';

const SelectVerb = (props) => {
   const {verbFilter, setVerbFilter, toggleAccordion} = props

   const [isAllVerb, setIsAllVerb] = useState(true)
   const verbCheckboxRef = useRef(null)
   const verbSelection = useRef(['amar (-AR)', 'beber (-ER)', 'decidir (-IR)', 'vir', 'dizer', 'ler', 'dar', 'estar', 'fazer', 'ir', 'ouvir', 'poder', 'querer', 'saber', 'ser', 'ter', 'trazer', 'ver', 'pôr'])

   const handleCheckbox = (e) => {
      let val = e.target.value
      let isSelected = e.target.checked
      
      if (val === 'all') {
         selectAll(isSelected, verbCheckboxRef.current.children)       
      } else {
         selectOne(val, isSelected)
      }
   }

   const selectAll = (isSelected, collection) => {
      if (isSelected) {
         setIsAllVerb(true)
         setVerbFilter(['all'])
         for (let i = 1; i < collection.length; i++) {
            collection[i].firstChild.checked = false
         }
      } else {
         setIsAllVerb(false)
         let updateFilter = [...verbFilter].filter(el => el !== 'all')
         setVerbFilter(updateFilter)
      }
   }

   const selectOne = (val, isSelected) => {
      if (isSelected) {
         let arr = [...verbFilter].filter(el => el !== 'all')
         arr.push(val)
         setIsAllVerb(false)
         setVerbFilter(arr)
      } else {
         let arr = [...verbFilter].filter(el => el !== val)
         setVerbFilter(arr)
      }
   }

   return (
      <div>
         <div onClick={toggleAccordion}>
            <h3>Select Verbs to Practice</h3>
         </div>
         <div className='closed'>
            <div ref={verbCheckboxRef}>
               <div>
                  <input type='checkbox' id='verb0' value='all' onChange={handleCheckbox} checked={isAllVerb} />
                  <label htmlFor='verb0'> All</label>
               </div>
               {verbSelection.current.map((tense,i) => (
                  <div key={`checkbox${i}`}>
                     <input type='checkbox' id={`verb${i + 1}`} value={tense} onChange={handleCheckbox} />
                     <label htmlFor={`verb${i + 1}`}>{tense}</label>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default SelectVerb