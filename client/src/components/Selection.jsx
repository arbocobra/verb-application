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
      <div>
         <div>
            <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} toggleAccordion={toggleAccordion} />
            <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} toggleAccordion={toggleAccordion} />
         </div>
         <div onClick={submitSelection}>Begin Test</div>
      </div>
   )
}

export default Selection