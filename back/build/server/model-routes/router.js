"use strict";

var express = require('express');

var router = express.Router();

var controllers = require('../model-controllers/user-controller');

router.route('/users').post(controllers.createUser).get(controllers.getAllUsers);
router.route('/users/:userId').put(controllers.updateUser)["delete"](controllers.deleteUser);
module.exports = router;
//# sourceMappingURL=router.js.map