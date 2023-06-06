const db = require('../config/db');
exports.getProfesores = async () =>{
    const [rows,fields] = await db.execute ("SELECT * FROM profesores");
    console.log (rows);
    return rows;
}
exports.getProfesoresById = async(id)=>{
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id=?',[id]);
    console.log(rows)
    return rows;
}
exports.addProfesores = async (profesores)=>{
    const [rows, fields] = await db.execute("INSERT INTO profesores (nombre, especialidad, email) values ?",[profesores])
    console.log(rows);
    return [rows]
}
exports.updateProfesores =  async (profesores)=> {
    console.log('modelo')
    console.log(profesores);
    const [rows, fields] =await db.execute ('UPDATE SET nombre =?, especialidad =?, email = ? WHERE id =?',[profesores.nombre, profesores.especialidad,profesores.email,profesores.id]);
    return rows;
}
exports.deleteProfesores = async (idProfesores) => {
    const [rows] = await db.execute('DELETE FROM profesores WHERE id = ?', [idProfesores]);
    return rows;
  };

// exports.deleteProfesores = async (idProfesores) => {
//     const [rows] = await db.execute('DELETE FROM cursos WHERE id = ?', [idProfesores]);
//     return rows;
//   };