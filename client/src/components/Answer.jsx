import { ExclamationCircleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx';

const Answer = ({val, correctResponse}) => {
   const getResponse = () => {
      if (val == 0) {
         return (<>
            <CheckCircleIcon className='h-8 w-8 fill-secondary' />
            <div>Correct</div>
         </>)
      } else if (val == 1) {
         return (<>
            <ExclamationCircleIcon className='h-8 w-8 fill-tertiary' />
            <div>Wrong accent - {correctResponse}</div>
         </>)
      } else if (val == 2) {
         return (<>
            <XCircleIcon className='h-8 w-8 fill-primary' />
            <div>Incorrect - {correctResponse}</div>
         </>)
      } else return null
   }
   
   return (
      <div className={clsx('transition-[height] duration-200 overflow-hidden', {'flex h-10 gap-2 justify-start items-center p-2':val === 0 || val > 0}, {'h-0':val===null})}>
         { getResponse() }
      </div>
   )
}

export default Answer