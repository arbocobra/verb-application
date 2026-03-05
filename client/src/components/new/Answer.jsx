const Answer = (props) => {
   const {val, correctResponse} = props

   if (val === null) return (
      <div className='flex-row h-20'></div>
   )
   else if (val=== 0) return (
      <div className='flex-row italic h-20'>
         <p>Correct</p>
      </div>
   )
   else if (val === 1) return (
      <div className='flex-row italic h-20'>
         <p>{`Wrong accent - ${correctResponse}`}</p>
      </div>
   )
   else if (val === 2) return (
      <div className='flex-row italic h-20'>
         <p>{`Incorrect - ${correctResponse}`}</p>
      </div>
   )
}

export default Answer