import { useState, useRef } from 'react';
import Checkbox from '@/ui/Checkbox';
import clsx from 'clsx';

const SelectTense = ({ tenseFilter, setTenseFilter, display }) => {
   const [isAllTense, setIsAllTense] = useState(true);
   const tenseCheckboxRef = useRef(null);
   const tenseSelection = [
      'present',
      'past',
      'present continuous',
      'past continuous',
      'present perfect',
      'past perfect',
      'future perfect',
      'imperfect',
      'imperative',
   ];

   const handleCheckbox = (e) => {
      let val = e.target.value;
      let isSelected = e.target.checked;

      if (val === 'all') {
         const collection = tenseCheckboxRef.current.getElementsByTagName('input');
         selectAll(isSelected, collection);
      } else {
         selectOne(val, isSelected);
      }
   };

   const selectAll = (isSelected, collection) => {
      if (isSelected) {
         setIsAllTense(true);
         setTenseFilter(['all']);
         for (let i = 1; i < collection.length; i++) {
            collection[i].checked = false;
         }
      } else {
         setIsAllTense(false);
         let updateFilter = [...tenseFilter].filter((el) => el !== 'all');
         setTenseFilter(updateFilter);
      }
   };

   const selectOne = (val, isSelected) => {
      if (isSelected) {
         let arr = [...tenseFilter].filter((el) => el !== 'all');
         arr.push(val);
         setIsAllTense(false);
         setTenseFilter(arr);
      } else {
         let arr = [...tenseFilter].filter((el) => el !== val);
         setTenseFilter(arr);
      }
   };

   return (
      <div className={clsx('select-container flex justify-center', {'h-105 overflow-y-auto':display}, {'h-0 overflow-y-hidden':!display})}>
         <div className='grid grid-cols-2 grid-rows-5 gap-4 items-stretch justify-items-stretch' ref={tenseCheckboxRef} >
            <Checkbox index={0} type={'tense'} value={'all'} action={handleCheckbox} isChecked={isAllTense} />
            {tenseSelection.map((tense, i) => (
               <Checkbox
                  key={`tense-${i + 1}`}
                  index={i + 1}
                  type={'tense'}
                  value={tense}
                  action={handleCheckbox}
                  isChecked={false}
               />
            ))}
         </div>
      </div>
   );
};

export default SelectTense;
