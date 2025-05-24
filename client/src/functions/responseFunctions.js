export const checkAnswer = (submitted, correct) => {
      if (submitted === correct) return 0
      else {
         const normalizeSubmit = removeDiacritics(submitted)
         const normalizeCorrect = removeDiacritics(correct)
         if (normalizeSubmit === normalizeCorrect) return 1
         else return 2
      }
   }

const removeDiacritics = str => {
   return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
   }