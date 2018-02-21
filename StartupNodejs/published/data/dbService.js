var mssql = require('mssql');

var dbConfig = {
    user: "sa",
    password: "sa@12345",
    server: "DESKTOP-80DEJMQ",
    database: "dbNode",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

var executeQuery = function (sql, res) {
    const conn = new mssql.ConnectionPool(dbConfig);
    conn.connect().then(function () {
        const req = new mssql.Request(conn);
        req.query(sql).then(function (data) {
            res(data);
        }).catch(function (err) {
            res(null, err);
        })
    }).catch(function (err) {
        res(null, err);
    })
}

module.exports = {
    executeQuery
}