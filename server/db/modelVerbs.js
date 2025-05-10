import mongoose from 'mongoose';

const verbSchema = new mongoose.Schema({
   tense: { type: String, required: true },
   infinitiveP: { type: String, required: true },
   infinitiveE: { type: String, required: true },
   pronounP: { type: String, required: true },
   pronounE: { type: String, required: true },
   conjugationP: { type: String, required: true },
   conjugationE: { type: String, required: true },
   innerId: { type: Number, required: true },
});

export const Verb = mongoose.model("Verb", verbSchema);