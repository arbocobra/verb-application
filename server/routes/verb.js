import express from 'express'
import db from '../db/connection.js'
import { ObjectId } from 'mongodb'

const router = express.Router()

// GET all
router.get("/", async (req, res) => {
   let collection = await db.collection('verbs');
   let results = await collection.find({}).toArray();
   res.send(results).status(200);
})

// GET by ID 
router.get("/:id", async (req, res) => {
   let collection = await db.collection('verbs');
   let query = { _id: new ObjectId(req.params.id) };
   let result = await collection.findOne(query);

   if (!result) res.send('Not Found').status(404);
   else res.send(result).status(200);
})

// GET by tense
// router.getAll("/tense", async (req, res) => {
//    let collection = await db.collection('verbs');
//    let results = await collection.find({}).toArray();
//    res.send(results).status(200);
// })
// GET by verb


// No need to create, edit or delete records

export default router;