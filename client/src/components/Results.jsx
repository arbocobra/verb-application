import { useEffect, useRef } from 'react';

const Results = (props) => {
   const { totalQuestions, resetTest, results } = props
   const resultsButtonRef = useRef(null)

   useEffect(() => {
      resultsButtonRef.current.addEventListener('click', handleReset)
   }, [])

   const handleReset = () => resetTest()

   const correctCount = results.correct.length
   const incorrectCount = results.incorrect.length
   const incorrectAnswers = results.incorrect

   return (
      <div id='results-box'>
         <div className='results-container'>
            <div className='results score'>
               <p>Test Score</p>
               <p>Questions Answered: {totalQuestions}</p>
               <p>Correct: {correctCount}</p>
               <p>Incorrect: {incorrectCount}</p>

            </div>
            <div className='results errors'>
               Incorrect Conjugations
               <ul>
                  {incorrectAnswers.map((verb, i) => (<li key={i}>{verb}</li>))}
               </ul>
            </div>
         </div>
         <div id='footer' className='footer-container'>
            <div className='end-game'>
               <div ref={resultsButtonRef} id='button3' className='button'>Restart</div>
            </div>
         </div>
      </div>
   )
}

export default Results