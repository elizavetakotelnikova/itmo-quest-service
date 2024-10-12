const express = require("express")
const router = express.Router()
const crypto = require("crypto");
const EventModel = require('../models/EventModel')
const EventsService = require('../services/EventService');

router.get("/:eventId", (req, res) => {
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


router.get("/:eventId", (req, res) => {
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

    res.render(JSON.stringify(Event));
});


router.post("/creation", (req, res) => {
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

router.put("/", (req, res) => {
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
