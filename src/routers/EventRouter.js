const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const EventModel = require('../models/EventModel')
const EventsService = require('../services/EventService');

router.post("/create", (req, res) => {
    let event = new EventModel(crypto.randomUUID(), req.body.title, req.body.description, req.body.photoLink, req.body.startTime, req.body.status)
    try {
        EventsService.createEvent(event);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (event == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(event));
});

router.post("/subscribe", async (req, res) => {
    if (req.body.userId == null || req.body.eventId == null) {
        return res
            .status(404)
            .json({message: "Bad request"})
    }

    try {
        await EventsService.addUserToEvent(req.body.userId, req.body.eventId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    res.send(JSON.stringify("success"));
});

router.get("/getAll", async (req, res) => {
    let Event = null
    try {
        console.log("mw")
        Event = await EventsService.getAllEvents();
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Event == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Event));
});

router.get("/:eventId", async (req, res) => {
    let Event = null
    try {
        Event = await EventsService.getEventById(req.params.eventId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Event == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Event));
});


router.get("/filter/:eventId", (req, res) => {
    let Event = null
    try {
        Event = EventsService.getAllEventUsers(req.params.EventId);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (Event == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(Event));
});

router.put("/:eventId", (req, res) => {
    let event = new EventModel(crypto.randomUUID(), req.body.title, req.body.description, req.body.photoLink, req.body.startTime, req.body.status)
    try {
        EventsService.updateEvent(Event);
    }
    catch (e) {
        return res
            .status(400)
            .json({ message: "Bad request" })
    }

    if (event == null) {
        return res
            .status(404)
            .json({message: "Not found"})
    }

    res.send(JSON.stringify(event));
});

router.delete("/:eventId", (req, res) => {
    try {
        EventsService.deleteEvent(req.params.EventId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }
});

module.exports = router;