const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const ClubModel = require('../models/ClubModel')
const ClubsService = require('../services/ClubService');

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

    res.render(JSON.stringify(Club));
});

router.post("/creation", (req, res) => {
    let club = new ClubModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course)
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

    res.render(JSON.stringify(club));
});

router.put("/api/club/", (req, res) => {
    let club = new ClubModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course)
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

    res.render(JSON.stringify(club));
});

router.delete("/api/club/:clubId", (req, res) => {
    try {
        ClubsService.deleteClub(req.params.ClubId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }
});
