import { ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/24/outline'

const AccentKeyboard = ({ typeAccent, updateDisplay, displayKeyboard }) => {
   const height = displayKeyboard ? { height: 30 } : { height: 0 };
   const accentCharacters = ['á', 'â', 'ã', 'à', 'ç', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú']

   return (
      <div className='flex flex-col gap-1'>
         <div onClick={() => updateDisplay(0)} className='flex gap-4 font-semibold justify-center item-center cursor-pointer'>
            <span>Use Accent Keyboard</span>
            {displayKeyboard ? <ChevronDownIcon className='size-6 py-1' /> : <ChevronUpIcon className='size-6 py-1' />}
         </div>
         <div className='px-2'>
            <div style={height} className='flex gap-1 overflow-hidden transition-[height] duration-200'>
               {accentCharacters.map((el,i) => <div key={`accent-${i}`} onClick={typeAccent} className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'>{el}</div>)}
            </div>
         </div>
      </div>
   );
};

export default AccentKeyboard;