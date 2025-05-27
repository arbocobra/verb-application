const Footer = (props) => {
   const { activeId, testLength, completeTest } = props

   return (
      <div id='footer'>
         <div>
            <p>{`${activeId + 1} / ${testLength}`}</p>
         </div>
         <div>
            <div onClick={completeTest}>End Game</div>
         </div>
      </div>
   )

}

export default Footer