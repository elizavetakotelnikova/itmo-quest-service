const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const UserModel = require('../models/UserModel')
const usersService = require('../services/UserService');

router.post("/signup", (req, res) => {
    let user = new UserModel(crypto.randomUUID(), req.body.isu, req.body.firstName, req.body.lastName, null, null, null)
    console.log("iop")
    try {
        usersService.createUser(user);
    }
    catch (e) {
        console.log(e.message)
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    res.send(JSON.stringify(user));
});

router.get("/filter", async (req, res) => {
    let user = null
    try {
        user = await usersService.getUserByIsu(req.query.isu);
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

    res.send(JSON.stringify(user));
});

router.get("/:userId", async (req, res) => {
    let user = null
    try {
        user = await usersService.getUserById(req.params.userId);
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

    res.send(JSON.stringify(user));
});

router.get("/creation", async (req, res) => {
    let users = null
    try {
        users = await usersService.getAllUsers();
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (users == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(users));
});

router.put("/", (req, res) => {
    let user = new UserModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course, req.vkId)
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

    res.send(JSON.stringify(user));
});

router.delete("/:userId", async (req, res) => {
    try {
        await usersService.deleteUser(req.params.userId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }

    res.send({})
});

module.exports = router;