const db = require('../config/db');
exports.obtenerEstudiantes = async () =>{
    const [rows,fields] = await db.execute ("SELECT * FROM estudiantes");
    console.log (rows);
    return rows;
}
exports.getEstudiantesById = async(id)=>{
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id=?',[id]);
    console.log(rows)
    return rows;
}
// exports.addEstudiantes = async (estudiantes)=>{
//     const [rows, fields] = await db.execute("INSERT INTO estudiantes (nombre, edad, grado) values ?",[estudiantes])
//     console.log(rows);
//     return [rows]s
// }


exports.addEstudiantes = async (estudiantes) => {
    const [rows, fields] = await db.execute("INSERT INTO estudiantes (nombre, edad, grado) VALUES ?", [[estudiantes]]);
    return rows;
};





exports.updateEstudiantes =  async (estudiantes)=> {
    console.log('modelo')
    console.log(estudiantes);
    const [rows, fields] =await db.execute ('UPDATE SET nombre =?, edad =?, grado = ? WHERE id =?',[cursos.id,cursos.nombre, cursos.edad,cursos.grado]);
    return rows;
}

//EstudianteModel.js
exports.deleteEstudiantes = async (idEstudiantes) => {
    const [rows] = await db.execute('DELETE FROM estudiantes WHERE id = ?', [idEstudiantes]);
    return rows;
  };