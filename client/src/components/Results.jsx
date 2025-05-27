const Results = (props) => {
   const { totalQuestions, resetTest, results } = props

   const answeredCount = results.correct.length + results.incorrect.length
   const correctCount = results.correct.length
   const incorrectCount = results.incorrect.length
   const incorrectAnswers = results.incorrect

   return (
      <div>
         <div>
            <div>
               <p>Test Score</p>
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
            <div>
               <div onClick={resetTest}>Restart</div>
            </div>
         </div>
      </div>
   )
}

export default Results