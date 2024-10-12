const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const EventModel = require('../models/EventModel')
const EventsService = require('../services/EventService');

router.get("/api/event/:eventId", (req, res) => {
    let Event = null
    try {
        Event = EventsService.getEventById(req.params.EventId);
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

    res.render(JSON.stringify(Event));
});

router.post("/api/event/", (req, res) => {
    let event = new EventModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course)
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

    res.render(JSON.stringify(event));
});

router.put("/api/event/", (req, res) => {
    let event = new EventModel(crypto.randomUUID(), req.isu, req.firstName, req.lastName, req.course)
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

    res.render(JSON.stringify(event));
});

router.delete("/api/event/:eventId", (req, res) => {
    try {
        EventsService.deleteEvent(req.params.EventId);
    }
    catch (e) {
        return res
            .status(500)
            .json({ message: "Internal server error" })
    }
});
