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

const getVerbsById = async(req, res) => {
   const { id } = req.params;
   try {
      const verb = await Verb.findById(id);
      if (!user) {
         return res.status(404).json({ error: 'Cound not find Id' });
      }
      res.status(200).json(user);      
   } catch (err) { res.status(500).json({error: 'I broke'}); }
}

export { getAllVerbs, getVerbsById }