import { useHints } from '@/hooks/useHints';
import clsx from 'clsx';

const Hints = ({ verb, updateDisplay, displayHintA, displayHintB }) => {
   const hints = useHints(verb)
   const height = displayHintA || displayHintB ? {height: 35} : {height: 0}
   const displayText = displayHintA ? hints[0] : displayHintB ? hints[1] : null

   if (hints) return (
      <div className='flex flex-col flex-1 justify-end px-2'>
         <div className='flex flex-col'>
            <div style={height} className='bg-tertiary flex items-center px-2 overflow-hidden transition-[height] duration-200'>{displayText}</div>
            <div className={clsx('w-20 h-3 flex justify-center', {'self-start': displayHintA}, {'self-end': displayHintB}, {'hidden': !displayHintA && !displayHintB})}>
               <div className='w-0 h-0 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-tertiary'></div>
            </div>
         </div>
         
         <div className='flex justify-between w-full font-semibold'>
            <div onClick={() => updateDisplay(1)} className='p-1 bg-tertiary w-20 text-center cursor-pointer'>Hint 1</div>
            { hints.length > 1 && <div onClick={() => updateDisplay(2)} className='p-1 bg-tertiary w-20 text-center cursor-pointer'>Hint 2</div>}
         </div>
      </div>
   )
}

export default Hints