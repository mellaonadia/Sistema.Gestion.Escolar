const express = require('express');
const router = express.Router();
const profesoresController = require('./../controllers/profesoresController');
router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesoresById);
router.post('/', profesoresController.addProfesores);
router.put('/:id', profesoresController.updateProfesores);
router.delete('/:id', profesoresController.deleteProfesores);
module.exports = router;