// JavaScript source code
"use strict";

var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'fy121212', 
    database: 'test_db'
});

var DB = {
  'start': function(req,res) {
    pool.getConnection(function(err, con) {
        if (err) throw err;
        con.query("SELECT * FROM tb_emp1", function(err, result) {
            return res.jsonp(result);
        });
        con.release();
      });
  },
  'App': function(req,res,sheet_name) {
    pool.getConnection(function(err, con) {
        if (err) throw err;
        con.query(`SELECT * FROM ${sheet_name}`, function(err, result) {
            return res.jsonp(result);
        });
        con.release();
      });
  }
};

exports = module.exports = DB;
