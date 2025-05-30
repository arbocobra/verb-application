import { useRef } from 'react';

const AccentKeyboard = (props) => {
   const { typeAccent } = props
   const accentCharacters = useRef(['á', 'â', 'ã', 'à', 'ç', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú'])

   const toggleKeyboard = (e) => {
      e.preventDefault();
      const contentDiv = e.target.nextElementSibling
      contentDiv.classList.toggle('closed')
   }

   return (
      <div className='flex-row left'>
         <div className='button accordion flex-column nowrap left'>
            <div className='toggle-title' onClick={toggleKeyboard}>Use Accent Keyboard</div>
            <div id='keyboard-container' className='closed flex-row wrap g-10 middle'>
               <div className='flex-row wrap g-10 p-010'>
                  {accentCharacters.current.map((char,i) => (<div key={`char-${i}`} className='accent-key button flex-row centre middle nowrap' onClick={typeAccent}>{char}</div>))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default AccentKeyboard;