const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicationController');

router.get('/', controller.getMedications);
router.post('/', controller.createMedication);

module.exports = router;
