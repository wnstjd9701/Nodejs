//user_controller.js

const { create, getUserByUserID, getUsers, updateUser, getUserByID } = require("./user_service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.[0] = hashSync(body.[0], salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          sucess: 0,
          message: "Database connect error"
        });
      }
      return res.status(200).json ({
        sucess: 1,
        data: results
      });
    });
  },
  getUserByUserID: (req, res) => {
    const id = req.params.[0];
    getUserByUserID(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          sucess: 0,
          message: "Record not Found"
        });
      }
      return res.json({
        sucess: 1,
        data: results
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        sucess: 1,
        data: results
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.[0] = hashSync(body.[0], salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user"
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByID(body.[0], (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Invalid ID or Password"
        });
      }
      const result = compareSync(body.[0], results.[0]);
      if (result) {
        results.[0] = undefined;
        const jsontoken = sign({ result: results }, "[Token 값]", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          message: "Invalid ID or Password"
        });
      }
    });
  },
}