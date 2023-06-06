const estudiantesModel = require('../models/estudiantesModel');
exports.getEstudiantes = async (req, res)=>{
    try {
        const estudiantes = await estudiantesModel.obtenerEstudiantes();
        res.status(200).json({
            success:true,
            data:estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
// exports.addEstudiantes = async (req, res)=>{
//     const estudiantes = req.body;
//     console.log('Agregar estudiante');
//     console.log(req);
//     try {
//         estudiantes = await estudiantesModel.addEstudiantes(estudiantes);
//         if(estudiantes.lenght<1)(
//             res.status(407).json({
//                 success: false,
//                 msg: "no se logro insertar el estudiante en la base de datos"
//             })
//         )
//             res.status(200).json({
//                 msg:"Estudiante agregado con exito!"
//             })
//     } catch (error) {
//         res.status(200).json({
//             success: false,
//             msg: "Hubo un error al obtener los datos"
//         })
//     }
// }


exports.addEstudiantes = async (req, res) => {
    const estudiantes = req.body;
    console.log('Agregar estudiante');
    console.log(req);
    try {
      const estudiantesInsertados = await estudiantesModel.addEstudiantes(estudiantes);
      if (estudiantesInsertados.length < 1) {
        res.status(407).json({
          success: false,
          msg: "No se logró insertar el estudiante en la base de datos"
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "Estudiante agregado con éxito"
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: "Hubo un error al obtener los datos"
      });
    }
  };





exports.getEstudiantesById = async(req, res)=>{
    const idEstudiantes = req.params.id;
    try {
        const estudiantes = await estudiantesModel.getEstudiantesById(idEstudiantes)
        if(estudiantes.length<1){ 
            res.status(404).json({
                success:false,
                mgs:`No existe el estudiante con el id: ${idEstudiantes}`
            })
        }
        res.status(200).json({
            success:true,
            estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.updateEstudiantes =  async (req, res)=> {
    const estudiantesData = req.body
    const idEstudiantes = req.params.id
    const estudiantes = {
        idEstudiantes,
        ...estudiantesData 
    }
    console.log(estudiantes);
    try{
        const listaActualizada = await estudiantesModel.updateEstudiantes (estudiantes);
    
        if (listaActualizada<1) {
            res.status(404).json({
                success:false,
                msg:'¡Datos no actualizados!'
            })
        }
        res.status (200).json({
            sucess:true,
            msg: '¡Lista Actualizada!'
        })
    }catch (error) {
            res.status(500).json({
                success:false,
                message: 'Hubo un error al obtener los datos'
            })
        }
    }


//estudiantesController.js
exports.deleteEstudiantes = async (req, res) => {
    const idEstudiantes = req.params.id;
    try {
      const eliminar = await estudiantesModel.deleteEstudiantes(idEstudiantes);
      if (eliminar.affectedRows === 0) {
        res.status(404).json({
          success: false,
          msg: '¡No se pudo eliminar el estudiante!'
        });
      } else {
        res.status(200).json({
          success: true,
          msg: '¡estudiante eliminado!'
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Hubo un error al eliminar el estudiante'
      });
    }
  };