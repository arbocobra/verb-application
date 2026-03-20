import { useState, useRef } from 'react';
import { useSelection } from '@/app/hooks/useSelection';
import Checkbox from '@/ui/Checkbox';
import clsx from 'clsx';

const SelectTense = ({ tenseFilter, setTenseFilter, display }) => {

   const {isAll:isAllTense, handleCheckbox} = useSelection(setTenseFilter, tenseFilter)
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

   return (
      <div className={clsx('select-container flex justify-center', {'h-105 overflow-y-auto':display}, {'h-0 overflow-y-hidden':!display})}>
         <div className='grid grid-cols-2 grid-rows-5 gap-4 items-stretch justify-items-stretch' ref={tenseCheckboxRef} >
            <Checkbox index={0} type={'tense'} value={'all'} action={handleCheckbox} isChecked={isAllTense} ref={tenseCheckboxRef.current} />
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
