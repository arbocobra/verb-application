const Footer = ({count, total, completeTest}) => {
   const progress = count / total

   return (
      <div id='test-footer' className='flex p-2 bg-secondary rounded-b-2xl shadow-md shadow-black/20'>
         <div className='grid grid-cols-[auto_1fr_50px] flex-1 h-8 gap-4 items-center px-1'>
            <div className='font-bold text-sm'>{count + 1} / {total}</div>
            <ProgressBar progress={progress} />
            <div onClick={completeTest} className='flex flex-wrap place-content-center p-2 bg-primary text-sm/[14px] text-white font-medium rounded-xl cursor-pointer'>Exit</div>
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

export default Footer