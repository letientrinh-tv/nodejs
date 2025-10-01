const connection = require('../config/database');

const getAllUsers = async () => {

   const [rows, fields] = await connection.execute(
      'SELECT * FROM `users`',
   );
   return rows;
   }

module.exports = {getAllUsers};