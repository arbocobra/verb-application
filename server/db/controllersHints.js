import { Hint } from './modelHints.js';

const getHintsByTense = async(req, res) => {
   const { tense } = req.params;
   let query = {}
   try {
      let tenseVal = decodeURIComponent(tense)
      query.tense = { $eq: tenseVal }

      const data = await Hint.find(query)
      res.status(200).json(data)
   } catch (error) {
        console.error("Error fetching hints: ", error);
        res.status(500).json({ message: "Server Error" });
   }
}

export { getHintsByTense }