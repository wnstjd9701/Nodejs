const { pathToFileURL } = require('url');
const pool = require('../../config/database');

module.exports = {
  create: (data, callBack) => {
    pool.query('insert into [Table Name]( [Table ] ) values(?,?,?,?,?)', [[Table]], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUsers: (callBack) => {
    pool.query('select [Table ] from [Table]', [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserByUserID: (id, callBack) => {
    pool.query(`select [Table ] from [Table] where [Table ]`, [[Table]], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
  updateUser: (data, callBack) => {
    pool.query(`update [Table] set [Table ] where [Table ]`, [[Table]], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserByID: ([Table], callBack) => {
    pool.query(`select * from [Table] where [Table ]`, [[Table]], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
};
