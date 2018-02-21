var express = require('express');
var router = express.Router();
var dbService = require('../dbService');

//GET API
router.get("/api/user/getAll", function (req, res) {
    var query = "GetUsers";
    dbService.executeQuery(query, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
});

// GET API
router.get("/api/user/getUser/:id", function (req, res) {
    var query = "[GetUserById] " + parseInt(req.params.id) + "";

    dbService.executeQuery(query, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
});

//POST API
router.post("/api/user/setUser", function (req, res) {
    var query = "[SetUser] '" + req.body.Name + "', '" + req.body.Email + "', '" + req.body.Phone + "'";
    dbService.executeQuery(query, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
});

//PUT API
router.put("/api/user/putUser", function (req, res) {
    var query = "[PutUser] " + parseInt(req.body.Id) + ", '" + req.body.Name + "','" + req.body.Email + "', '" + req.body.Phone + "'";
    dbService.executeQuery(query, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
});

// DELETE API
router.delete("/api/user/deleteUser/:id", function (req, res) {
    var query = "[DeleteUser] " + parseInt(req.params.id) + "";

    dbService.executeQuery(query, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
});

module.exports = router;
