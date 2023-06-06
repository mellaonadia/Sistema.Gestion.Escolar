const db = require('../config/db');
exports.getCursos = async () =>{
    const [rows,fields] = await db.execute ("SELECT * FROM cursos");
    console.log (rows);
    return rows;
}

exports.getCursosById = async(id)=>{
    const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE id=?',[id]);
    console.log(rows)
    return rows;
}

exports.addCursos = async (cursos) => {
    const [rows, fields] = await db.execute("INSERT INTO cursos (id, nombre, descripcion) VALUES (?, ?, ?)", [cursos.id, cursos.nombre, cursos.descripcion]);
    console.log(rows);
    return rows;
  };  

exports.updateCursos = async(curso)=>{
    const [rows, fields] = await db.execute('UPDATE curso SET nombre = ?, descripcion = ? WHERE id = ?', [curso.nombre, curso.descripcion, curso.idCurso]);
    return rows
    }

exports.deleteCurso = async (idCursos) => {
    const [rows] = await db.execute('DELETE FROM cursos WHERE id = ?', [idCursos]);
    return rows;
  };
