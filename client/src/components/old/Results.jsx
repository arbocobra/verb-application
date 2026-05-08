const Results = (props) => {
   const { totalQuestions, resetTest, results } = props

   const answeredCount = results.correct.length + results.incorrect.length
   const correctCount = results.correct.length
   const incorrectCount = results.incorrect.length
   const incorrectAnswers = results.incorrect

   return (
      <div id='Results'>
         <div className='flex-column g-20 bottom-40'>
            <div className='flex-column g-10'>
               <h2 className='subheading'>Test Score</h2>
               <p>Questions Answered: {`${answeredCount}/${totalQuestions}`}</p>
               <p>Correct: {correctCount}</p>
               <p>Incorrect: {incorrectCount}</p>
            </div>
            <div>
               Incorrect Conjugations:
               <ul>
                  {incorrectAnswers.map((verb, i) => (<li key={i}>{verb}</li>))}
               </ul>
            </div>
         </div>
         <div>
            <div className='flex-row'>
               <div className='button simple' onClick={resetTest}>Restart</div>
            </div>
         </div>
      </div>
   )
}

export default Results