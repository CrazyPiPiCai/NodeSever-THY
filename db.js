// JavaScript source code
'use strict';

const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=D:\\testForDB\\TestDB2.accdb;Persist Security Info=False;');

var DB = {
    'start': function () {
        return connection
            .query(`SELECT * FROM App_start`)
            .then(data => {
                return JSON.stringify(data, null, 2)
            })
            .catch(error => {
                console.error(error);
            });
    },
    'App': function (sheet_name) {
        return connection
            .query(`SELECT * FROM ${sheet_name}`)
            .then(data => {
                return JSON.stringify(data, null, 2)
            })
            .catch(error => {
                console.error(error);
            });
    },
}

exports = module.exports = DB;

