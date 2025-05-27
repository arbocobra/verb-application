import IconFlag from './../assets/IconFlag.svg'
const Header = () => {
   return (
      <div id='header'>
         <div>
            <div>
               <img height='100' width='100' src={IconFlag}/>
            </div>
            <div>
               <h1>Portuguese Verb Translation Flashcards</h1>
            </div>
         </div>
      </div>
   )
}
export default Header;