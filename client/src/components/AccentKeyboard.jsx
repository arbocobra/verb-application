import { useEffect, useRef } from 'react';

const AccentKeyboard = (props) => {
   const { typeAccent } = props

   const initializeKeyboard = useRef(false)

   useEffect(() => {
      if (!initializeKeyboard.current){
         const div = document.getElementById('keyboard')
         let divContents = div.nextElementSibling
         div.addEventListener('click', () => divContents.classList.toggle('hidden'))
         initializeKeyboard.current = true
      }
   },[])
   
   return (
      <div className='keyboard-container'>
         <div className='keyboard-box'>
            <div id='keyboard' className='keyboard-title'>Use Accent Keyboard</div>
            <div className='keyboard-contents hidden'>
               <button className='key' type='button' onClick={()=> typeAccent('á')}>á</button>
               <button className='key' type='button' onClick={()=> typeAccent('â')}>â</button>
               <button className='key' type='button' onClick={()=> typeAccent('ã')}>ã</button>
               <button className='key' type='button' onClick={()=> typeAccent('à')}>à</button>
               <button className='key' type='button' onClick={()=> typeAccent('ç')}>ç</button>
               <button className='key' type='button' onClick={()=> typeAccent('é')}>é</button>
               <button className='key' type='button' onClick={()=> typeAccent('ê')}>ê</button>
               <button className='key' type='button' onClick={()=> typeAccent('í')}>í</button>
               <button className='key' type='button' onClick={()=> typeAccent('ó')}>ó</button>
               <button className='key' type='button' onClick={()=> typeAccent('ô')}>ô</button>
               <button className='key' type='button' onClick={()=> typeAccent('õ')}>õ</button>
               <button className='key' type='button' onClick={()=> typeAccent('ú')}>ú</button>
            </div>    
         </div>
      </div>
   )
}

export default AccentKeyboard;