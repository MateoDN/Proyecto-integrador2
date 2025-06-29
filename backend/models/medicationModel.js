const db = require('../config/db');

exports.getAllMedications = (callback) => {
  db.query('SELECT * FROM medicamentos', callback);
};

exports.addMedication = (data, callback) => {
  db.query('INSERT INTO medicamentos SET ?', data, callback);
};
