const profesoresModel = require('./../models/profesoresModel');
exports.getProfesores = async (req, res)=>{
    try {
        const profesores = await profesoresModel.getProfesores();
        res.status(200).json({
            success:true,
            data:profesores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.addProfesores = async (req, res)=>{
    const profesores= req.body;
    console.log('Agregar profesor');
    console.log(req);
    try {
        profesores= await profesoresModel.addProfesores(profesores);
        if(profesores.lenght<1)(
            res.status(407).json({
                success: false,
                msg: "no se logro insertar el profesor en la base de datos"
            })
        )
            res.status(200).json({
                msg:"¡Profesor agregado con exito!"
            })
    } catch (error) {
        res.status(200).json({
            success: false,
            msg: "Hubo un error al obtener los datos"
        })
    }
}
exports.getProfesoresById = async(req, res)=>{
    const idProfesores = req.params.id;
    try {
        const profesores = await profesoresModel.getProfesoresById(idProfesores)
        if(profesores.length<1){ 
            res.status(404).json({
                success:false,
                mgs:`No existe profesor con el id: ${idProfesores}`
            })
        }
        res.status(200).json({
            success:true,
            profesores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.updateProfesores =  async (req, res)=> {
    const profesoresData = req.body
    const idProfesores = req.params.id
    const profesores = {
        idProfesores,
        ...profesoresData 
    }
    console.log(profesores);
    try{
        const listaActualizada = await profesoresModel.updateProfesores (profesores);
    
        if (listaActualizada<1) {
            res.status(404).json({
                success:false,
                msg:'Datos no actualizados!'
            })
        }
        res.status (200).json({
            sucess:true,
            msg: 'lista Actualizada'
        })
    }catch (error) {
            res.status(500).json({
                success:false,
                message: 'Hubo un error al obtener los datos'
            })
        }
    }
    exports.deleteProfesores = async (req, res) => {
        const idProfesores = req.params.id;
        try {
          const eliminar = await profesoresModel.deleteProfesores(idProfesores);
          if (eliminar.affectedRows === 0) {
            res.status(404).json({
              success: false,
                msg: '¡No se pudo eliminar al profesor!'
            });
          } else {
            res.status(200).json({
              success: true,
              msg: '¡Profesor eliminado!'
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
                message: 'Hubo un error al eliminar al profesor'
          });
        }
      };
    // exports.deleteProfesores = async (req, res) => {
    //     const idProfesores = req.params.id;
    //     try {
    //       const eliminar = await profesoresModel.deleteProfesores(idProfesores);
    //       if (eliminar.affectedRows === 0) {
    //         res.status(404).json({
    //           success: false,
    //           msg: '¡No se pudo eliminar al profesor!'
    //         });
    //       } else {
    //         res.status(200).json({
    //           success: true,
    //           msg: '¡Profesor eliminado!'
    //         });
    //       }
    //     } catch (error) {
    //       res.status(500).json({
    //         success: false,
    //         message: 'Hubo un error al eliminar al profesor'
    //       });
    //     }
    //   };