const Medication = require('../models/medicationModel');

exports.getMedications = (req, res) => {
  Medication.getAllMedications((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createMedication = (req, res) => {
  const { nombre, horario } = req.body;
  if (!nombre || !horario) {
    return res.status(400).json({ error: 'Nombre y horario son requeridos' });
  }

  Medication.addMedication({ nombre, horario }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, nombre, horario });
  });
};
