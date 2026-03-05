import { useState } from 'react'

export const Test = () => {
   return (
      <div id='test' className='flex flex-col h-full'>
         <TestHeader />
         {/* suspense wrap */}
         <TestInner />
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
         <Question />
         <Footer count={4} total={12} />
      </div>
   )
}

const Question = () => {
   return (
      <div className='flex flex-1 flex-col p-2 bg-white shadow-md shadow-black/20'>
         <QuestionInner />
         <Response />
         <AccentKeyboard />
      </div>
   )
}

const QuestionInner = () => {
   return (
      <div className='flex border-2 border-red-500 p-2'>
         Question Inner
      </div>
   )
}

const Response = () => {
   return (
      <div className='flex flex-col p-2 border-2 border-green-600'>
         Response
         <ResponseInput />
      </div>
   )
}

const ResponseInput = () => {
   return (
      <div className='flex p-2 border-2 border-purple-600'>
         Response Inner
      </div>
   )
}

const AccentKeyboard = () => {
return (
    <div className='flex p-2 border-2 border-pink-400'>
         Accent Keyboard
      </div>
   )
}

const Footer = ({count, total}) => {
   const progress = count / total
   return (
      <div id='test-footer' className='flex p-2 bg-secondary rounded-b-2xl shadow-md shadow-black/20'>
         <div className='grid grid-cols-[auto_1fr_50px] flex-1 h-8 gap-4 items-center'>
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
   return (
      <div className=''>

      </div>
   )
}

/**
 * {
  "_id": "681d337b67144163d7c0597e",
  "tense": "present perfect",
  "infinitiveP": "ir",
  "infinitiveE": "to go",
  "pronounP": "nós",
  "pronounE": "we",
  "conjugationP": "temos ido",
  "conjugationE": "have gone",
  "innerId": 27
} {
  "_id": "681d337b67144163d7c0592a",
  "tense": "imperfect",
  "infinitiveP": "estar",
  "infinitiveE": "to be (temporarily)",
  "pronounP": "eles",
  "pronounE": "they",
  "conjugationP": "estavam",
  "conjugationE": "used to be (temporarily)",
  "innerId": 47
} {
  "_id": "681d337b67144163d7c05882",
  "tense": "present continuous",
  "infinitiveP": "beber (-ER)",
  "infinitiveE": "to drink",
  "pronounP": "eles",
  "pronounE": "they",
  "conjugationP": "estão a beber",
  "conjugationE": "are drinking",
  "innerId": 17
}
 * 
 * 
 */