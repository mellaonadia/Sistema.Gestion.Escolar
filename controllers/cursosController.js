const cursosModel = require('../models/cursosModel');
exports.getCursos = async (req, res)=>{
    try {
        const cursos = await cursosModel.getCursos();
        res.status(200).json({
            success:true,
            data:cursos
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.addCursos = async (req, res) => {
  const cursosData = req.body;
  console.log('Agregar cursos');
  console.log(cursosData);
  try {
    const cursos = await cursosModel.addCursos(cursosData);
    if (cursos.length < 1) {
      res.status(407).json({
        success: false,
        msg: 'No se logró insertar el curso en la base de datos'
      });
    }
    res.status(200).json({
      success: true,
      msg: '¡Curso agregado con éxito!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: 'Hubo un error al obtener los datos'
    });
  }
};

exports.getCursosById = async(req, res)=>{
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.getCursosById(idCursos)
        if(cursos.length<1){ 
            res.status(404).json({
                success:false,
                mgs:`No existe curso con el id: ${idCursos}`
            })
        }
        res.status(200).json({
            success:true,
            cursos
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
  
  exports.updateCursos = async (req, res) => {
    const cursosActualizado = req.body;
    const idCurso = req.params.id;
    const curso = {
      idCurso,
      ...cursosActualizado
    };
    console.log(curso);
    try {
      const listaActualizada = await cursosModel.updateCursos(curso);
      if (listaActualizada < 1) {
        res.status(404).json({
          success: false,
          msg: '¡Datos no actualizados!'
        });
      }
      // Obtener la lista actualizada de la base de datos
      res.status(200).json({
        success: true,
        msg: '¡Lista Actualizada!',
        lista: listaActualizada // Agregar la lista actualizada en la respuesta
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Hubo un error al obtener los datos'
      });
    }
  };

    exports.deleteCurso = async (req, res) => {
        const idCursos = req.params.id;
        try {
          const eliminar = await cursosModel.deleteCurso(idCursos);
          if (eliminar.affectedRows === 0) {
            res.status(404).json({
              success: false,
              msg: '¡No se pudo eliminar el curso!'
            });
          } else {
            res.status(200).json({
              success: true,
              msg: '¡Curso eliminado!'
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el curso'
          });
        }
      };