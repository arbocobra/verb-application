import SelectTense from './SelectTense';
import SelectVerb from './SelectVerb';


const Selection = (props) => {
   const {updatePage, tenseFilter, setTenseFilter, verbFilter, setVerbFilter} = props
   
   const submitSelection = (e) => {
      e.preventDefault()
      updatePage()
   }

   const toggleAccordion = (e) => {
      let accordion = e.currentTarget
      let panel = e.currentTarget.nextElementSibling

      accordion.classList.toggle('active')
      if (accordion.classList.contains('active')) panel.classList.remove('closed')
      else panel.classList.add('closed')
   }

   return (
      <div id='selection'>
         <div className='flex-column nowrap left'>
            <div className='flex-column nowrap w-100 g-20 bottom-40'>
               <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} toggleAccordion={toggleAccordion} />
               <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} toggleAccordion={toggleAccordion} />
            </div>
            <div className='button simple' onClick={submitSelection}>Begin Test</div>
         </div>
      </div>
   )
}

export default Selection