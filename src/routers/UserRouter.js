const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const jwt = require("jsonwebtoken")
const jwtSecret = "3cc9671ea78296449b91ce1e02c7b0fd5c32411c7cb5029f2117bfc8754753e9a75ec6"
const usersService = require('../services/UserService');

router.get("/api/signup", (req, res, next) => {
    let user = new UserModel(crypto.randomUUID(), req.isu, null, null, null)
    try {
        usersService.createUser(user);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    // view?????????? мне же надо только json возвращать
    //res.render("about_view", { title: "About", list: queryResults });
    res.render(JSON.stringify(user));
});
