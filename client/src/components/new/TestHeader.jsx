import { useState } from 'react'

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

export default TestHeader