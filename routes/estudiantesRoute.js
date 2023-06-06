const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudiantesById);
router.post('/', estudiantesController.addEstudiantes);
router.put('/:id', estudiantesController.updateEstudiantes);
router.delete('/:id', estudiantesController.deleteEstudiantes);
module.exports = router;