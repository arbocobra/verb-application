const Response = (props) => {
   const {val, correctResponse} = props

   if (val === null) return (
      <div className='result'></div>
   )
   else if (val=== 0) return (
      <div className='result'>
         <p>Correct</p>
      </div>
   )
   else if (val === 1) return (
      <div className='result'>
         <p>{`(wrong accent) - ${correctResponse}`}</p>
      </div>
   )
   else if (val === 2) return (
      <div className='result'>
         <p>{correctResponse}</p>
      </div>
   )
}

export default Response