import { useState, useRef } from 'react';

const SelectTense = (props) => {
   const {tenseFilter, setTenseFilter, toggleAccordion} = props

   const [isAllTense, setIsAllTense] = useState(true)
   const tenseCheckboxRef = useRef(null)
   const tenseSelection = useRef(['present', 'past', 'present continuous', 'past continuous', 'present perfect', 'past perfect', 'future perfect', 'imperfect', 'imperative'])

   const handleCheckbox = (e) => {
      let val = e.target.value
      let isSelected = e.target.checked
      
      if (val === 'all') {
         selectAll(isSelected, tenseCheckboxRef.current.children)       
      } else {
         selectOne(val, isSelected)
      }
   }

   const selectAll = (isSelected, collection) => {
      if (isSelected) {
         setIsAllTense(true)
         setTenseFilter(['all'])
         for (let i = 1; i < collection.length; i++) {
            collection[i].firstChild.checked = false
         }
      } else {
         setIsAllTense(false)
         let updateFilter = [...tenseFilter].filter(el => el !== 'all')
         setTenseFilter(updateFilter)
      }
   }

   const selectOne = (val, isSelected) => {
      if (isSelected) {
         let arr = [...tenseFilter].filter(el => el !== 'all')
         arr.push(val)
         setIsAllTense(false)
         setTenseFilter(arr)
      } else {
         let arr = [...tenseFilter].filter(el => el !== val)
         setTenseFilter(arr)
      }
   }

   return (
      <div className='select-container p-10'>
         <div onClick={toggleAccordion}>
            <h2 className='subheading'>Select Tense to Practice</h2>
         </div>
         <div className='selection-container closed'>
            <div className='p-010 flex-column wrap g-10' ref={tenseCheckboxRef}>
               <div className='select-checkbox h-30 flex-row middle left g-10'>
                  <input type='checkbox' id='tense0' value='all' onChange={handleCheckbox} checked={isAllTense} />
                  <label htmlFor='tense0'>All</label>
               </div>
               {tenseSelection.current.map((tense,i) => (
                  <div className='select-checkbox h-30 flex-row middle left g-10' key={`checkbox${i}`}>
                     <input type='checkbox' id={`tense${i + 1}`} value={tense} onChange={handleCheckbox} />
                     <label htmlFor={`tense${i + 1}`}>{tense}</label>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default SelectTense