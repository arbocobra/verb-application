const primaryShimmer = { backgroundImage: 'linear-gradient(-45deg, var(--color-primaryExtraLight) 40%, #ee7690 50%, var(--color-primaryExtraLight) 60%)' }
const secondaryShimmer = { backgroundImage: 'linear-gradient(-45deg, var(--color-secondaryExtraLight) 40%, #94fbe5 50%, var(--color-secondaryExtraLight) 60%)' }

const Skeleton = () => {
   return (
      <div className='flex flex-col h-full'>
         <div id='test-inner' className='flex flex-col flex-1 justify-between'>
            <SkHeader />
            <div className='flex flex-1 flex-col px-2 py-4 gap-2 bg-white shadow-md shadow-black/20'>
               <SkQuestionInner />
               <SkResponse />
            </div>
            <SkFooter /> 
         </div>
      </div>
   )
}

const SkHeader = () => {
   return (
      <div id='skeletor-header' style={secondaryShimmer} className='flex h-12 rounded-t-2xl shadow-md shadow-black/20 bg-size-[300%] animate-shimmer bg-position-[100%_50%]' />
   )
}

const SkQuestionInner = () => {
   return (
      <div className='flex flex-col basis-48 items-center gap-2 p-2'>
         <div className='rounded-t-lg h-3 w-8/10 bg-secondaryExtraLight' />
         <div className= 'rounded-t-lg h-3 w-9/10 bg-tertiaryExtraLight' />
         <div style={primaryShimmer} className='flex flex-1 rounded-2xl w-full bg-size-[300%] animate-shimmer bg-position-[100%_50%]' />
      </div>
   )
}

const SkResponse = () => {
   return (
      <div className='flex flex-col items-stretch gap-2'>
            <div className='flex gap-3 text-xl items-center justify-center py-2'>
            <div>AA</div>
            <div className='bg-gray-200 px-1 py-2 max-w-50'>BBB</div>
            <div className='flex leading-3 p-1 cursor-pointer rounded-sm justify-center border h-6 w-6 border-gray-200 bg-gray-100' />
         </div>
      </div>
   )
}

const SkFooter = () => {
   return (
      <div id='skeleton-footer' style={secondaryShimmer} className='flex h-12 rounded-b-2xl shadow-md shadow-black/20 bg-size-[300%] animate-shimmer bg-position-[100%_50%]' />
   )
}

export default Skeleton;