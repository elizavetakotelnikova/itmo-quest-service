const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const UserModel = require('../models/UserModel')
const usersService = require('../services/UserService');

router.post("/api/signup", (req, res) => {
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

router.get("/api/user/:userId", (req, res) => {
    let user = null
    try {
        user = usersService.getUserById(req.params.userId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (user == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.render(JSON.stringify(user));
});

router.put("/api/user/", (req, res) => {
    let user = new UserModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course)
    try {
        usersService.updateUser(user);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (user == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.render(JSON.stringify(user));
});

router.delete("/api/user/:userId", (req, res) => {
    try {
        usersService.deleteUser(req.params.userId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }
});
