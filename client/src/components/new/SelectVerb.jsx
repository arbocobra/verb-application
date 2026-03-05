import { useState, useRef } from 'react';
import Checkbox from '@/ui/Checkbox';
import clsx from 'clsx';

const SelectVerb = ({ verbFilter, setVerbFilter, display }) => {
   const [isAllVerb, setIsAllVerb] = useState(true)
   const verbCheckboxRef = useRef(null)
   const verbSelection = ['amar (-AR)', 'beber (-ER)', 'decidir (-IR)', 'vir', 'dizer', 'ler', 'dar', 'estar', 'fazer', 'ir', 'ouvir', 'poder', 'querer', 'saber', 'ser', 'ter', 'trazer', 'ver', 'pôr'];

   const handleCheckbox = (e) => {
      let val = e.target.value
      let isSelected = e.target.checked
      
      if (val === 'all') {
         const collection = verbCheckboxRef.current.getElementsByTagName('input');
         selectAll(isSelected, collection)
      } else {
         selectOne(val, isSelected)
      }
   }

   const selectAll = (isSelected, collection) => {
      if (isSelected) {
         setIsAllVerb(true)
         setVerbFilter(['all'])
         for (let i = 1; i < collection.length; i++) {
            collection[i].checked = false
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
      <div className={clsx('select-container flex justify-center', {'h-105 overflow-y-auto':display}, {'h-0 overflow-y-hidden':!display})}>
         <div className='grid grid-cols-2 grid-rows-10 gap-4 items-stretch justify-items-stretch' ref={verbCheckboxRef} >
            <Checkbox index={0} type={'verb'} value={'all'} action={handleCheckbox} isChecked={isAllVerb} />
            {verbSelection.map((verb, i) => (
               <Checkbox
                  key={`verb-${i + 1}`}
                  index={i + 1}
                  type={'verb'}
                  value={verb}
                  action={handleCheckbox}
                  isChecked={false}
               />
            ))}
         </div>
      </div>
   )
}

export default SelectVerb