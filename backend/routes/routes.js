const express = require('express');
const userController = require('../src/user/userController');
const router = express.Router();

router.route('/user/register').post(userController.createUserControlerFn);

module.exports = router;
