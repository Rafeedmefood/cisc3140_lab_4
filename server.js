const express = require("express")
const app = express()
const db = require("./database.js")
const {json} = require("express");
const PORT = 8080

app.listen(PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/cars", (req, res, next) => {
    const sql = "select * from cars"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "status":"success",
            "data": rows
        })
    });
});

app.set('json spaces', 3)

app.use(function(req, res){
    res.status(404);
});
