import { Verb } from './modelVerbs.js';

const getAllVerbs = async (req, res) => {
   try {
      const verbs = await Verb.find();
      res.status(200).json(verbs);      
   } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ message: "Server Error" });
   }
}

const getFilteredVerbs = async(req, res) => {
   try {
      const { tense, infinitiveP } = req.query;
      let query = {}
      if (tense !== undefined) query.tense = { $in: tense }
      if (infinitiveP !== undefined) query.infinitiveP = { $in: infinitiveP }

      const data = await Verb.find(query)
      res.status(200).json(data)
   } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Server Error" });
   }
}

export { getAllVerbs, getFilteredVerbs }