export const ResponseInputImperative = ({inputRef, pronounP, pressEnter, icon}) => {
   return (
      <div className='input-row flex-row middle g-2'>
         <input id='answer-input' ref={inputRef} onKeyUp={pressEnter} maxLength='19' type='text' />
         <div>{`-${pronounP}`}</div>
         <div className='icon h-30'>{icon}</div>
      </div>
   )
}