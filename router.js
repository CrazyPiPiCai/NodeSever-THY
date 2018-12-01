const express = require("express");
//const DB = require('./db')
const router = express.Router();

router.get("/all", (req, res) => {
  /*
    var result = DB.start();
    result.then(val =>
        res.type('json').send(val)
    ).catch(err =>
        res.send(err)
    )
    */
  res.send("测试OK");
});

/*
router.get('/select', (req, res) => {
    const sheet_name = req.query.sheet_name;
    var result = DB.App(sheet_name);
    result.then(val =>
        res.type('json').send(val)
    ).catch(err =>
        res.send(err)
    )
})
*/

module.exports = router;
