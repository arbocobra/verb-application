import Verbs from '@/components/Verbs'

const Home = () => {
   return (
      <div className='fixed flex w-full h-screen flex-wrap items-stretch'>
         <div className='flex-2 bg-secondary'/>
         <div className='flex-3 p-2 flex justify-center items-center'>
            <div className='border-7 rounded-4xl max-h-19/20 min-h-9/10 aspect-9/19 bg-hero-pattern bg-cover bg-center'>
               <Verbs />
            </div>
         </div>
      </div>
   )
}

export default Home;