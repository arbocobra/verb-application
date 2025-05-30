const Footer = (props) => {
   const { activeId, testLength, completeTest } = props

   return (
      <div id='Footer' className='flex-row middle'>
         <div className='flex-column left'>
            <p>{`${activeId + 1} / ${testLength}`}</p>
         </div>
         <div className='flex-column left'>
            <div className='button simple' onClick={completeTest}>End Game</div>
         </div>
      </div>
   )

}

export default Footer