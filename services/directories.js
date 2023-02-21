const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getDirectories(id){
  const rows = await db.query(
    `SELECT *
    FROM directories WHERE parentFolderId = '${id}'`
  );

  return rows
}

async function createDirectory(directory){
    const result = await db.query(
      `INSERT INTO directories 
      (id, parentFolderId, name, type, link) 
      VALUES 
      ("${directory.id}", "${directory.parentFolderId}", "${directory.name}", "${directory.type}", "${directory.link}")`
    );
  
    let message = 'Error in creating Directory';
  
    if (result.affectedRows) {
      message = 'Directory created successfully';
    }
  
    return {message};
  }

module.exports = {
  getDirectories,
  createDirectory
}