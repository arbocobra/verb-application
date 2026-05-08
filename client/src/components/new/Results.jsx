import { ResultDropdown } from '@/app/components/new/ui/ResultDropdown';

const Results = ({results, length}) => {

   const correctBar = Math.round(results.correct.length / length * 100);
   const incorrectBar = 100 - Math.round(results.correct.length / length * 100);

   return (
      <div className='flex flex-col flex-1 w-full gap-4 py-5'>
         <div className='flex w-full basis-6'>
            <div style={{width:correctBar + '%'}} className='flex py-0.5 pl-2 text-sm font-bold bg-secondary justify-start text-black rounded-tl-md rounded-bl-md'>
               {results.correct.length}
            </div>
            <div style={{width:incorrectBar + '%'}} className='flex py-0.5 pr-2 text-sm font-bold bg-primary justify-end text-white rounded-tr-md rounded-br-md'>
               {results.incorrect.length}
            </div>
         </div>
         <div className='flex flex-col w-full basis-100 flex-1 overflow-y-auto gap-4'>
            {results.correct && <ResultDropdown openState={false} results={results.correct} isCorrect={true} />}
            {results.incorrect && <ResultDropdown openState={true} results={results.incorrect} isCorrect={false} />} 
         </div>
         <div className='flex w-full basis-10 border' />
      </div>
   )
}

export default Results