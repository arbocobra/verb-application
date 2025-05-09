export const selectData = (tense, verbs) => {
   fetch('http://localhost:5050/verbs')
      .then(response => {
         if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
         return response.json();
      })
      .then(data => {
         let results
         if (tense[0] == 'all') results = data;
         else {
            const tenseArr = data.filter(el => tense.includes(el.tense))
            results = tenseArr
         }
         return results
      })
      // .then(data => console.log(data))
}

// useEffect(() => {
//         if (!userId || userId === 'null') {
//             navigate('/');
//             return;
//         }

//         fetch(`http://localhost:5000/api/users/${userId}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setUser(data);
//             })            
//             .catch(error => {
//                 console.error("Error fetching user:", error);
//                 setError(error.message);
//             });
//     }, [userId, navigate]);