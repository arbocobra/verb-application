import IconFlag from './../assets/IconFlag.svg'
const Header = () => {
   return (
      <div id='Header'>
         <div className='flex-row wrap left g-20 middle bottom-40'>
            <div>
               <img height='100' width='100' src={IconFlag}/>
            </div>
            <div>
               <h1 className='title'>Portuguese Verb Translation Flashcards</h1>
            </div>
         </div>
      </div>
   )
}
export default Header;