const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const ClubModel = require('../models/ClubModel')
const ClubsService = require('../services/ClubService');

router.post("/create", (req, res) => {
    let club = new ClubModel(crypto.randomUUID(), req.body.name, req.body.description, req.body.category, req.body.type)
    console.log(club)
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
        Club = await ClubsService.getAllClubUsers(req.params.userId);
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


router.get("/:clubId", (req, res) => {
    let Club = null
    try {
        Club = ClubsService.getClubById(req.params.ClubId);
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

router.get("/", async (req, res) => {
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


router.put("/:clubId", (req, res) => {
    let club = new ClubModel(crypto.randomUUID(), req.body.name, req.body.description, req.body.category, req.body.type)
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