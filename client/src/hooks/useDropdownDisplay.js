import { useState, useEffect } from 'react';

export const useDropdownDisplay = () => {
   const [displayKeyboard, setDisplayKeyboard] = useState(false)
   const [displayHintA, setDisplayHintA] = useState(false)
   const [displayHintB, setDisplayHintB] = useState(false)

   const updateDisplay = (val) => {
      if (val === 0) setDisplayKeyboard((prev) => !prev)
      else if (val == 1) setDisplayHintA((prev) => !prev)
      else if (val == 2) setDisplayHintB((prev) => !prev)
      else return
   }

   useEffect(() => {
      if (displayKeyboard) {
         setDisplayHintA(false)
         setDisplayHintB(false)
      }
   }, [displayKeyboard])

   useEffect(() => {
      if (displayHintA) {
         setDisplayKeyboard(false)
         setDisplayHintB(false)
      }
   }, [displayHintA])

   useEffect(() => {
      if (displayHintB) {
         setDisplayKeyboard(false)
         setDisplayHintA(false)
      }
   }, [displayHintB])

   // const hideAllDropdown = () => {}

   return { displayKeyboard, displayHintA, displayHintB, updateDisplay }
}