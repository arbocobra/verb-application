export const ResponseInput = ({ref, pronoun, pressEnter, icon}) => {
   return (
      <div className='input-row flex-row middle g-2'>
         <div className='pronoun'>{pronoun}</div>
         <input  id='answer-input' ref={ref} onKeyUp={pressEnter} maxLength='19' type='text' />
         <div className='icon h-30'>{icon}</div>
      </div>
   )
}

export const ResponseInputImperative = ({ref, pronoun, pressEnter, icon}) => {
   return (
      <div className='input-row flex-row middle g-2'>
         <input id='answer-input' ref={ref} onKeyUp={pressEnter} maxLength='19' type='text' />
         <div>{`-${pronoun}`}</div>
         <div className='icon h-30'>{icon}</div>
      </div>
   )
}