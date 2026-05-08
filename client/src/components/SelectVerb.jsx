import { useRef } from 'react';
import { useSelection } from '@/hooks/useSelection';
import Checkbox from '@/ui/Checkbox';
import clsx from 'clsx';

const SelectVerb = ({ verbFilter, setVerbFilter, display }) => {
   const {isAll:isAllVerb, handleCheckbox} = useSelection(setVerbFilter, verbFilter)
   const verbCheckboxRef = useRef(null)
   const verbSelection = ['amar (-AR)', 'beber (-ER)', 'decidir (-IR)', 'vir', 'dizer', 'ler', 'dar', 'estar', 'fazer', 'ir', 'ouvir', 'poder', 'querer', 'saber', 'ser', 'ter', 'trazer', 'ver', 'pôr'];

   return (
      <div className={clsx('select-container flex justify-center', {'h-[67%] overflow-y-auto':display}, {'h-0 overflow-y-hidden':!display})}>
         {/* <div className='grid grid-cols-2 grid-rows-10 gap-4 items-stretch justify-items-stretch' ref={verbCheckboxRef} > */}
         {/* <div className='flex flex-col flex-wrap gap-2 w-full' ref={verbCheckboxRef} > */}
         <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(25%,1fr))] gap-2' ref={verbCheckboxRef} >
            <Checkbox index={0} type={'verb'} value={'all'} action={handleCheckbox} isChecked={isAllVerb} ref={verbCheckboxRef.current} />
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