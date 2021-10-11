const { pool } = require('../../config/database');
const userDao = require('./userDao');
exports.retrieveUserIdList = async function (req, res) {
  const connection = await pool.getConnection(async (conn) => conn);
  const userIdList = await userDao.selectUserId(connection);
  connection.release();
  console.log(userIdList);
  res.json(userIdList);
};
