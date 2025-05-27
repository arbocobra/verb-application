import IconFlag from './../assets/IconFlag.svg'
const Header = () => {
   return (
      <div id='header'>
         <div className='header-container'>
            <div className='header-icon'>
               <img src={IconFlag}/>
            </div>
            <div className='header-title'>
               <h1>Portuguese Verb Translation Flashcards</h1>
            </div>
         </div>
      </div>
   )
}
export default Header;