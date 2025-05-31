let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = new Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    note: Number
}, { collection: 'assiDB' });  // <-- Spécifie la collection exacte

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema,'assiDB');
