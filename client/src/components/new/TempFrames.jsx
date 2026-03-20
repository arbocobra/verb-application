import { useState, useEffect } from 'react'
import { useDropdownDisplay } from '@/hooks/useDropdownDisplay'
import { ExclamationCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/24/outline'
import { TempInner } from '@/app/components/new/Test'

import clsx from 'clsx'

export const Test = () => {
   const [bool, setBool] = useState(false)
   const completeTest = () => { console.log('test complete') }
   return (
      <div id='test' className='flex flex-col h-full'>
         { bool ? <Skeleton /> : <TestInner /> }
         <TempInner testIndexList={[3,4,5]} completeTest={completeTest} />
      </div>
   )
}

const TestHeader = () => {
   const [displayInfo, setDisplayInfo] = useState(false)

   return (
      <div id='test-header' className='flex flex-col'>
         <div className='flex bg-secondary rounded-t-2xl shadow-md shadow-black/20'>
            <div className='grid grid-cols-[40px_1fr_40px] flex-1 p-2 items-center'>
               <div className='col-start-2 flex mx-auto font-bold'>Practice Conjugation</div>
               <div onClick={() => setDisplayInfo((prev) => !prev)} className='col-start-3 flex flex-wrap place-content-center bg-white w-8 h-8 text-sm/[14px] font-medium rounded-full cursor-pointer'>?</div>
            </div>
         </div>
         <HeaderInfo height={displayInfo ? 200 : 0} />
      </div>
   )
}

const HeaderInfo = ({height}) => {
   return (
      <div className='relative h-0 w-full'>
         <div style={{height}} className='absolute w-full top-0 bg-amber-300 transition-[height] duration-300'></div>
      </div>
   )
}

const TestInner = () => {
   return (
      <div id='test-inner' className='flex flex-col flex-1 justify-between'>
         <TestHeader />
         <Question />
         <Footer count={4} total={12} />
      </div>
   )
}

const Question = () => {
   const {displayKeyboard, displayHintA, displayHintB, updateDisplay} = useDropdownDisplay()

   return (
      <div className='flex flex-1 flex-col px-2 py-4 gap-2 bg-white shadow-md shadow-black/20'>
         <QuestionInner count={8} tense={false} pronoun={'they'} conjugation={'are drinking'} />
         <Response updateDisplay={updateDisplay} displayKeyboard={displayKeyboard} />
         {/* <AccentKeyboard updateDisplay={updateDisplay} displayKeyboard={displayKeyboard} /> */}
         <Answer val={1} correction={'something else'} icon={'X'} />
         <Hints updateDisplay={updateDisplay} displayHintA={displayHintA} displayHintB={displayHintB} />
      </div>
   )
}

const QuestionInner = ({count, tense, conjugation, pronoun}) => {
   const bg = count % 3 == 0 ? {a: 'var(--color-primary)', b: 'var(--color-tertiary)', c: 'var(--color-secondary)'} 
   : (count % 3) == 1 ? {a: 'var(--color-tertiary)', b: 'var(--color-secondary)', c: 'var(--color-primary)'}
   : {a: 'var(--color-secondary)', b: 'var(--color-primary)', c: 'var(--color-tertiary)'}

   return (
      <div className='flex flex-col basis-62 items-center gap-2 p-2'>
         <div style={{backgroundColor: bg.c}} className='rounded-t-lg h-3 w-8/10 transition-colors duration-200'></div>
         <div style={{backgroundColor: bg.b}} className= 'rounded-t-lg h-3 w-9/10 transition-colors duration-200'></div>
         <div style={{backgroundColor: bg.a}} className='flex flex-1 rounded-2xl w-full transition-colors duration-200 justify-center items-center p-3'>
            { tense ? <div className='uppercase font-semibold text-lg'>{conjugation}!</div> : <div className='uppercase font-semibold text-lg'>{pronoun}&nbsp;{conjugation}</div>}
         </div>
      </div>
   )
}

const Response = ({ updateDisplay, displayKeyboard }) => {
   // submission hook here
   return (
      <div className='flex flex-col items-stretch gap-2'>
         <ResponseInput tense={false} />
         <AccentKeyboard updateDisplay={updateDisplay} displayKeyboard={displayKeyboard} />
      </div>
   )
}

const ResponseInput = ({tense}) => {
   if (tense) { return (
      <div className='flex gap-4 text-xl items-center py-2'>
         <input id='response' maxLength='25' className='bg-gray-200 px-1 py-2 max-w-50' type='text'/>
         <div>!</div>
         <div className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'>&rarr;</div>
      </div>
   )} else { return (
      <div className='flex gap-3 text-xl items-center py-2'>
         <div>Nós</div>
         <input id='response' maxLength='25' className='bg-gray-200 px-1 py-2 max-w-50' type='text'/>
         <div className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'>&rarr;</div>
      </div>
   )}
}

const AccentKeyboard = ({ updateDisplay, displayKeyboard }) => {
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
               {accentCharacters.map((el,i) => <div key={`accent-${i}`} className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 hover:bg-gray-100'>{el}</div>)}
            </div>
         </div>
      </div>
   );
};

const Answer = ({val, correction, icon}) => {
   const answerText = val == 0 ? 'Correct' 
      : val == 1 ? `Wrong accent - ${correction}` 
      : val == 2 ? `Incorrect - ${correction}` 
      : null
   
   return (
      <div className='flex basis-10 gap-2 justify-center'>
         <div className=''>{icon}</div>
         <div className=''>{answerText}</div>
      </div>
   ) 
}

const Hints = ({updateDisplay, displayHintA, displayHintB}) => {
   const val = 'hint here'
   const height = displayHintA || displayHintB ? {height: 35} : {height: 0}

   return (
      <div className='flex flex-col flex-1 justify-end px-2'>
         <div className='flex flex-col'>
            <div style={height} className='bg-tertiary flex items-center px-2 overflow-hidden transition-[height] duration-200'>{val}</div>
            <div className={clsx('w-20 h-3 flex justify-center', {'self-start': displayHintA}, {'self-end': displayHintB}, {'hidden': !displayHintA && !displayHintB})}>
               <div className='w-0 h-0 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-tertiary'></div>
            </div>
           
         </div>
         
         <div className='flex justify-between w-full font-semibold'>
            <div onClick={() => updateDisplay(1)} className='p-1 bg-tertiary w-20 text-center cursor-pointer'>Hint A</div>
            <div onClick={() => updateDisplay(2)} className='p-1 bg-tertiary w-20 text-center cursor-pointer'>Hint B</div>
         </div>
      </div>
   )
}

const Footer = ({count, total}) => {
   const progress = count / total
   return (
      <div id='test-footer' className='flex p-2 bg-secondary rounded-b-2xl shadow-md shadow-black/20'>
         <div className='grid grid-cols-[auto_1fr_50px] flex-1 h-8 gap-4 items-center px-1'>
            <div className='font-bold text-sm'>{count} / {total}</div>
            <ProgressBar progress={progress} />
            <div className='flex flex-wrap place-content-center p-2 bg-primary text-sm/[14px] text-white font-medium rounded-xl'>Exit</div>
         </div>
      </div>
   )
}

const ProgressBar = ({progress}) => {
   const percentA = Math.round(progress * 100)
   const percentB = 100 - Math.round(progress * 100)
   return (
      <div className='flex flex-1 h-1 bg-gray-200'>
         <div style={{width: `${percentA}%`}} className='bg-primary duration-400 transition-[width] ease-in'></div>
         <div style={{width: `${percentB}%`}} className='bg-white duration-400 transition-[width] ease-in'></div>
      </div>
   )
}

const Skeleton = () => { // do last
   const primaryShimmer = { backgroundImage: 'linear-gradient(-45deg, var(--color-primaryExtraLight) 40%, #ee7690 50%, var(--color-primaryExtraLight) 60%)' }
   const secondaryShimmer = { backgroundImage: 'linear-gradient(-45deg, var(--color-secondaryExtraLight) 40%, #94fbe5 50%, var(--color-secondaryExtraLight) 60%)' }

   return (
      <div id='test-inner' className='flex flex-col flex-1 justify-between'>
         <div id='test-header' className='flex flex-col'>
            <div className='flex bg-secondaryLight rounded-t-2xl h-12 shadow-md shadow-black/20'/>
         </div>
         <div className='flex flex-1 flex-col px-2 py-4 gap-2 bg-white shadow-md shadow-black/20'>
            <div className='flex flex-col basis-62 items-center gap-2 p-2'>
               <div className='rounded-t-lg h-3 w-8/10 bg-secondaryExtraLight'/>
               <div className= 'rounded-t-lg h-3 w-9/10 bg-tertiaryExtraLight'/>
               <div style={primaryShimmer} className='flex flex-1 rounded-2xl w-full bg-size-[300%] animate-shimmer bg-position-[100%_50%]'/>
            </div>
            <div className='flex flex-col items-center basis-15 p-2'>
               <div className='flex gap-3 text-xl items-center w-8/10 h-12 p-2 bg-gray-200'></div>
            </div>
            <div className='flex flex-col basis-12 gap-1 justify-end'>
               <div className='flex px-2 gap-1'>
                  {Array.from({length:12}).map((el,i) => <div key={`accent-${i}`} className='flex leading-3 p-1 rounded-sm justify-center h-6 w-5 bg-gray-200' />)}
               </div>
            </div>
            <div className='flex flex-col flex-1 justify-end'>
               <div className='flex justify-between px-2'>
                  <div className='bg-tertiaryLight rounded-md flex items-center w-20 h-8 overflow-hidden transition-[height] duration-200'/>
                  <div className='bg-tertiaryLight rounded-md flex items-center w-20 h-8 overflow-hidden transition-[height] duration-200'/>
               </div>
            </div>
         </div>
         <div id='test-header' className='flex flex-col'>
            <div className='flex bg-secondaryLight rounded-b-2xl h-12 shadow-md shadow-black/20'></div>
         </div>
      </div>
   )
}