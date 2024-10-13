const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(cors({
    origin: '*', // Разрешить запросы с любого домена
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Разрешить любые методы
    allowedHeaders: '*', // Разрешить заголовки Content-Type и Authorization
}));


app.use("/api/user", require("./routers/UserRouter.js"))
app.use("/api/club", require("./routers/ClubRouter.js"))
app.use("/api/event", require("./routers/EventRouter.js"))

app.set('view engine', 'jade');
app.listen(3000)
