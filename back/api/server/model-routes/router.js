var express = require('express');
const router = express.Router();
const controllers = require('../model-controllers/user-controller');

router.route('/users')
  .post(controllers.createUser)
  .get(controllers.getAllUsers);

router.route('/users/:userId')
  .put(controllers.updateUser)
  .delete(controllers.deleteUser); 

module.exports = router;