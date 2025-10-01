 const connection = require('../config/database');
const {getAllUsers} = require('../services/userServices');

const getHomepage = (req, res) => {

    res.render('home');
    // let users = [];

    // connection.query(
    // 'SELECT * FROM `users` WHERE `id` > 0',
    //     function(err, results, fields) {
    //         users = results;
    //             res.send(JSON.stringify( users));

    //     }
    // );

}

const getTrinhltpage = (req, res) => {
     res.render('sample');
} 


const createUser = (req, res) => {
  const { name, email } = req.body;
  const password = 1;
  // Kiểm tra input
  if (!name || !email) {
    return res.status(400).json({ error: 'Name và age là bắt buộc' });
  }

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  connection.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error('Lỗi INSERT:', err);
      return res.status(500).json({ error: 'Không thể lưu user' });
    }
    // Gửi lại thông tin + id vừa tạo
    res.json({
      message: 'User đã được tạo',
      user: { id: result.insertId, name, email },
    });
  });
};


const getUsers = async (req, res) => {
 
     let users = await getAllUsers();
     console.log(users);
    res.render('users', { users: users });

//   connection.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Không thể lấy danh sách users' });
//     }
//     console.log(results);
//     res.json(results); // Trả về mảng user
//   });
};

module.exports = {
    getHomepage, getTrinhltpage, createUser,getUsers
}