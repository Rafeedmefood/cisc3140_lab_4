const express = require("express")
const app = express()
const PORT = 8080
const bodyParser = require("body-parser");
const carRoutes = require('./routes/CarRoutes')


app.use(bodyParser.json())
app.set('json spaces', 3)
app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});
app.use("/cars", carRoutes)
app.use(function (req, res) {
    res.status(404);
});
app.listen(PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", PORT))
});