import { useState, useEffect, useRef } from 'react';

const SelectTense = (props) => {
   const {tenseFilter, setTenseFilter} = props

   const [isAllTense, setIsAllTense] = useState(true)

   const isFirstRender = useRef(true)
   const tenseSelection = useRef(['present', 'past', 'present continuous', 'past continuous', 'present perfect', 'past perfect', 'future perfect', 'imperfect', 'imperative'])

   useEffect(() => {
      if (isAllTense && !isFirstRender.current) {
         let divArr = document.getElementsByClassName('tense-checkbox')
         if (divArr) {
            for (let div of divArr) {
               div.checked = false
            }
         }
         
      }
      onFirstRender()
   }, [isAllTense])

   const onFirstRender = () => {
      isFirstRender.current = false
   }
   
    const handleCheckbox = (e) => {
      let val = e.target.value
      let isSelected = e.target.checked
      let arr = [...tenseFilter]

      if (val === 'all') {
         setIsAllTense(current => !current)
         if (isSelected) setTenseFilter(['all'])
         else arr = [...arr].filter(el => el !== 'all')         
      } else {
         if (isSelected) {
            arr = [...arr].filter(el => el !== 'all')
            arr.push(val)
            setIsAllTense(false)
         } else arr = [...arr].filter(el => el !== val)
         setTenseFilter(arr)
      }
   }

   return (
      <div id='selection'>
            <h3>Select Tense to Practice</h3>
               <div className='selection-options'>
                  <div className='selection-input' id='input-all'>
                     <input type='checkbox' id='tense0' value='all' onChange={handleCheckbox} checked={isAllTense} />
                     <label htmlFor='tense0'> All</label>
                  </div>
                  {tenseSelection.current.map((tense,i) => (
                     <div key={`checkbox${i}`}>
                        <input className='auto-checkbox tense-checkbox' type='checkbox' id={`tense-${i + 1}`} value={tense} onChange={handleCheckbox} />
                        <label htmlFor={`tense-${i + 1}`}> {tense}</label>
                     </div>
                  ))}
            </div>
         </div>
   )
}

export default SelectTense