const express = require('express');
const {getHomepage, getTrinhltpage, createUser,getUsers } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/trinhlt', getTrinhltpage);

router.post('/create-user', createUser);
router.get('/users', getUsers);

module.exports = router;