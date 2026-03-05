import Verbs from '@/components/Verbs'

const Home = () => {
   return (
      <div className='fixed flex w-full h-screen flex-wrap items-stretch'>
         <div className='flex-2 p-15 bg-secondary'></div>
         <div className='flex-3 p-15 flex justify-center items-stretch'>
            <div className='border-7 rounded-4xl aspect-9/19 bg-hero-pattern bg-cover bg-center'>
               <Verbs />
            </div>
         </div>
      </div>
   )
}

export default Home;