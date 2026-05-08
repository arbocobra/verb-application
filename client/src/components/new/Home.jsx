import Verbs from '@/components/Verbs'

const Home = () => {
   const prevtStyle = 'fixed flex w-full h-dvh max-h-dvh flex-wrap items-stretch'
   const prevVerb = 'flex-3 p-2 flex justify-center items-center '
   const prevInner = 'border-none md:border-7 rounded-none md:rounded-4xl max-h-dvh min-h-dvh w-full md:w-auto md:max-h-19/20 md:min-h-9/10 md:aspect-9/19 bg-hero-pattern bg-cover bg-center'
   return (
      <div className='bg-secondary flex flex-1 justify-center md:justify-end'>
         {/* <div className='flex-2 bg-secondary'/> */}
         <div className='flex justify-center items-center bg-white w-full md:w-3/5 h-dvh max-h-dvh'>
            <div className='h-full w-full md:border-7 md:rounded-4xl md:max-h-19/20 md:min-h-9/10 md:w-auto md:aspect-9/19 bg-hero-pattern bg-cover bg-center'>
               <Verbs />
            </div>
         </div>
      </div>
   )
}

export default Home;