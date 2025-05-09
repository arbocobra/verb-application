import React, { useState, useEffect, useRef } from 'react';
import SelectTense from './SelectTense';
import SelectVerb from './SelectVerb';
// import { useDispatch } from 'react-redux';
// import _ from 'lodash'
// import { startTest } from '../app/verbsSlice';

const Selection = (props) => {
   const {updatePage, tenseFilter, setTenseFilter, verbFilter, setVerbFilter} = props
   
   // const [selectedTense, setSelectedTense] = useState(['all'])
   // const [isAll, setIsAll] = useState(true)
   // const [isAllTense, setIsAllTense] = useState(true)
   const [submit, setSubmit] = useState(false)

   const isFirstRender = useRef(true)
   const selectButtonRef = useRef(null)
   // const tenseSelection = useRef(['present', 'past', 'present continuous', 'past continuous', 'present perfect', 'past perfect', 'future perfect', 'imperfect', 'imperative'])
   // const verbSelection = useRef(['amar (-AR)', '"beber (-ER)', 'decidir (-IR)', 'vir', 'dizer', 'ler', 'dar', 'estar', 'fazer', 'ir', 'ouvir', 'poder', 'querer', 'saber', 'ser', 'ter', 'trazer', 'ver', 'pôr'])

   const onFirstRender = () => {
      isFirstRender.current = false
   }

   // const dispatch = useDispatch()

   useEffect(() => selectButtonRef.current.addEventListener('click', submitSelection), []);

   // useEffect(() => {
   //    if (isAllTense && !isFirstRender.current) {
   //       let divArr = document.getElementsByClassName('tense-checkbox')
   //       for (let div of divArr) {
   //          div.checked = false
   //       }
   //    }
   // }, [isAllTense])

   useEffect(() => {
      if (submit && !isFirstRender.current) {
         // dispatch(startTest(selectedTense))
         updatePage()
      }
      onFirstRender()
      }, [submit])
   
   //  const selectTense = (e) => {
   //    let val = e.target.value
   //    let isSelected = e.target.checked
   //    let arr = [...selectedTense]

   //    if (val === 'all') {
   //       setIsAllTense(current => !current)
   //       if (isSelected) setSelectedTense(['all'])
   //       else arr = [...arr].filter(el => el !== 'all')         
   //    } else {
   //       if (isSelected) {
   //          arr = [...arr].filter(el => el !== 'all')
   //          arr.push(val)
   //          setIsAllTense(false)
   //       } else arr = [...arr].filter(el => el !== val)
   //       setSelectedTense(arr)
   //    }
   // }
   const tempContainer = {
      display: 'flex',
      gap: '20px'
   }

   const tempBox = {
      display: 'flex',
      flexFlow: 'column nowrap',
      gap: '20px'
   }

   const submitSelection = (event) => {
      event.preventDefault()
      setSubmit(true)
   }

   return (
      <div style={tempContainer} className='selection-container'>
         <div style={tempBox} className='selection-box'>
            <SelectTense tenseFilter={tenseFilter} setTenseFilter={setTenseFilter} />
            <SelectVerb verbFilter={verbFilter} setVerbFilter={setVerbFilter} />
         </div>
         
         {/* <div id='selection' className='selection-container'>
               <div className='selection-input' id='input-all'>
                  <input type='checkbox' id='tense0' value='all' onChange={selectTense} checked={isAllTense} />
                  <label htmlFor='tense0'> All</label>
               </div>
               {tenseSelection.current.map((tense,i) => (
                  <div key={`checkbox${i}`}>
                     <input className='tense-checkbox, auto-checkbox' type='checkbox' id={`tense-${i + 1}`} value={tense} onChange={selectTense} />
                     <label htmlFor={`tense-${i + 1}`}> {tense}</label>
                  </div>
               ))} */}

               {/* {tenseSelection.current.map((tense, i) => (
                  <div id={`input-${_.kebabCase(tense)}`} className='selection-input' key={`checkbox${i}`}>
                     <input className='tense-checkbox, auto-checkbox' type='checkbox' id={`tense${i + 1}`} value={tense} onChange={checkHandler} />
                     <label htmlFor={`tense${i}`}> {_.upperFirst(tense)}</label>
                  </div>
               ))} */}
               <div ref={selectButtonRef} className='button'>Begin Test</div>
         {/* </div> */}
         {/* <div className='selection-container'>
               <div className='selection-input' id='input-all'>
                  <input type='checkbox' id='verb0' value='all' onChange={checkHandler} checked={isAll} />
                  <label htmlFor='verbe0'> All</label>
               </div>
               {verbSelection.current.map((verb,i) => (
                  <div key={`v-checkbox-${i}`}>
                     <input className='verb-checkbox, auto-checkbox' type='checkbox' id={`verb-${i + 1}`} value={verb} onChange={checkHandler} />
                     <label htmlFor={`verb-${i + 1}`}> {verb}</label>
                  </div>
               ))}
               <div ref={selectButtonRef} className='button'>Begin Test</div>
         </div> */}
      </div>
      
   )
}

export default Selection