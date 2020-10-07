"use strict";

var express = require('express');

var app = express();

var bodyParse = require('body-parser');

app.use(bodyParse);

module.exports.createUser = function (req, res, next) {
  res.send('createUser');
};

module.exports.updateUser = function (req, res, next) {
  res.send('updateUser');
};

module.exports.deleteUser = function (req, res, next) {
  res.send('deleteUser');
};

module.exports.getAllUsers = function (req, res, next) {
  res.send('getAllUsers');
};
//# sourceMappingURL=user-controller.js.map