const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(express.json())

app.use("/api/user", require("./routers/UserRouter.js"))
app.set('view engine', 'jade');
app.listen(3000)
