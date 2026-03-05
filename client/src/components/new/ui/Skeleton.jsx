import { PropagateLoader } from 'react-spinners';

const Skeleton = () => {
   return (
      <div className= 'flex flex-col justify-stretch w-full h-3/4 items-center gap-2'>
         
         <div className='bg-gray-200 rounded-t-lg h-3 w-8/10'></div>
         <div className='bg-gray-200 rounded-t-lg h-3 w-9/10'></div>
         <div className='flex flex-1 rounded-2xl bg-gray-200 w-full'></div>
         <div className='flex flex-col flex-1 w-full items-center gap-10 py-8'>
            <div className='bg-gray-200 w-9/10 h-13'></div>
            <PropagateLoader color='var(--color-gray-200)'/>
         </div>

         
         
         {/* <div className='absolute top-0 w-full h-140 flex flex-1 flex-col justify-center items-center gap-2'>
            <div className='bg-primaryLight rounded-lg h-12 w-full mb-10'></div>
            <div className='bg-[#ea708b] rounded-t-lg h-3 w-8/10'></div>
            <div className='bg-primaryExtraLight rounded-t-lg h-3 w-9/10'></div>
            <div className='bg-primaryLight rounded-lg h-70 w-full'></div>
         </div> */}
      </div>
   )
}

export default Skeleton;