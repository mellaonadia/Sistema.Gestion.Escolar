const express = require('express');
const router = express.Router();
const cursosController = require('./../controllers/cursosController');
router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
router.post('/', cursosController.addCursos);
router.put('/:id', cursosController.updateCursos);
router.delete('/:id', cursosController.deleteCurso);
module.exports = router;