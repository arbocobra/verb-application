import { useRef } from 'react';
import { useSelection } from '@/hooks/useSelection';
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
      <div className={clsx('select-container flex justify-center', {'h-[67%] overflow-y-auto':display}, {'h-0 overflow-y-hidden':!display})}>
         <div className='w-full grid grid-cols-[repeat(2,minmax(40%,1fr))] gap-3' ref={tenseCheckboxRef} >
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
