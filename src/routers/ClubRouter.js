const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const ClubModel = require('../models/ClubModel')
const ClubsService = require('../services/ClubService');

router.post("/create", (req, res) => {
    console.log(req.body)
    let club = new ClubModel(crypto.randomUUID(), req.body.name, req.body.description, req.body.category, req.body.type, req.body.creator)
    try {
        ClubsService.createClub(club);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (club == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(club));
});

router.get("/filter/:userId", async (req, res) => {
    let Club = null
    try {
        Club = await ClubsService.getClubsByUserId(req.params.userId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Club == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Club));
});

router.get("/getAll", async (req, res) => {
    let Club = null
    try {
        Club = await ClubsService.getAllClubs();
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Club == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Club));
});


router.get("/:clubId", async (req, res) => {
    let Club = null
    try {
        Club = await ClubsService.getClubById(req.params.clubId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Club == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Club));
});

router.put("/:clubId", (req, res) => {
    let club = new ClubModel(crypto.randomUUID(), req.body.name, req.body.description, req.body.category, req.body.type, req.body.creator)
    try {
        ClubsService.updateClub(club);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (club == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(club));
});

router.post("/subscribe", (req, res) => {
    try {
        ClubsService.subscribeToSlub(req.query.userId, req.query.clubId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }

    res.send(JSON.stringify("success"))
});


router.delete("/:clubId", (req, res) => {
    try {
        ClubsService.deleteClub(req.params.ClubId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }
});

module.exports = router;