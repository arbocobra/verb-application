const Response = (props) => {
   const {val, correctResponse} = props

   if (val === null) return (
      <div></div>
   )
   else if (val=== 0) return (
      <div>
         <p>Correct</p>
      </div>
   )
   else if (val === 1) return (
      <div>
         <p>{`(wrong accent) - ${correctResponse}`}</p>
      </div>
   )
   else if (val === 2) return (
      <div>
         <p>{correctResponse}</p>
      </div>
   )
}

export default Response