import mongoose from 'mongoose';

const hintSchema = new mongoose.Schema({
   tense: { type: String, required: true },
   values: { 
      "pôr": String,
      "dar": String,
      "dizer": String,
      "estar": String,
      "fazer": String,
      "ir": String,
      "ler": String,
      "ouvir": String,
      "poder": String,
      "querer": String,
      "saber": String,
      "ser": String,
      "ter": String,
      "trazer": String,
      "ver": String,
      "vir": String,
    }
});

export const Hint = mongoose.model("Hint", hintSchema);