let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
async function getAssignments(req, res) {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// Récupérer un assignment par son champ personnalisé 'id' (GET)
async function getAssignment(req, res) {
  try {
    let assignmentId = parseInt(req.params.id);
    if (isNaN(assignmentId)) return res.status(400).send('ID invalide');
    
    const assignment = await Assignment.findOne({ id: assignmentId });
    if (!assignment) return res.status(404).send('Assignment not found');
    res.json(assignment);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// Ajout d'un assignment (POST)
async function postAssignment(req, res) {
  try {
    let assignment = new Assignment({
      id: req.body.id,
      nom: req.body.nom,
      dateDeRendu: req.body.dateDeRendu,
      rendu: req.body.rendu,
    });

    await assignment.save();
    res.json({ message: `${assignment.nom} saved!` });
  } catch (err) {
    res.status(500).send('cant post assignment: ' + err.message);
  }
}

// Update d'un assignment (PUT) par 'id' personnalisé
async function updateAssignment(req, res) {
  try {
    const assignmentId = parseInt(req.body.id);
    if (isNaN(assignmentId)) return res.status(400).send('ID invalide');

    const updatedAssignment = await Assignment.findOneAndUpdate(
      { id: assignmentId },
      req.body,
      { new: true }
    );
    if (!updatedAssignment) return res.status(404).send('Assignment not found');
    res.json({ message: 'updated', assignment: updatedAssignment });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

// suppression d'un assignment (DELETE) par 'id' personnalisé
async function deleteAssignment(req, res) {
  try {
    const assignmentId = parseInt(req.params.id);
    if (isNaN(assignmentId)) return res.status(400).send('ID invalide');

    const deletedAssignment = await Assignment.findOneAndRemove({ id: assignmentId });
    if (!deletedAssignment) return res.status(404).send('Assignment not found');
    res.json({ message: `${deletedAssignment.nom} deleted` });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  getAssignments,
  postAssignment,
  getAssignment,
  updateAssignment,
  deleteAssignment,
};
