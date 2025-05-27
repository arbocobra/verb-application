import { useEffect, useRef } from 'react';

const AccentKeyboard = (props) => {
   const { typeAccent } = props

   const initializeKeyboard = useRef(false)
   const keyboardRef = useRef(null)

   useEffect(() => {
      if (!initializeKeyboard.current){
         const div = keyboardRef.current
         let divContents = div.nextElementSibling
         div.addEventListener('click', () => divContents.classList.toggle('hidden'))
         initializeKeyboard.current = true
      }
   },[])
   
   return (
      <div>
         <div>
            <div ref={keyboardRef}>Use Accent Keyboard</div>
            <div className='hidden'>
               <button type='button' onClick={()=> typeAccent('á')}>á</button>
               <button type='button' onClick={()=> typeAccent('â')}>â</button>
               <button type='button' onClick={()=> typeAccent('ã')}>ã</button>
               <button type='button' onClick={()=> typeAccent('à')}>à</button>
               <button type='button' onClick={()=> typeAccent('ç')}>ç</button>
               <button type='button' onClick={()=> typeAccent('é')}>é</button>
               <button type='button' onClick={()=> typeAccent('ê')}>ê</button>
               <button type='button' onClick={()=> typeAccent('í')}>í</button>
               <button type='button' onClick={()=> typeAccent('ó')}>ó</button>
               <button type='button' onClick={()=> typeAccent('ô')}>ô</button>
               <button type='button' onClick={()=> typeAccent('õ')}>õ</button>
               <button type='button' onClick={()=> typeAccent('ú')}>ú</button>
            </div>    
         </div>
      </div>
   )
}

export default AccentKeyboard;