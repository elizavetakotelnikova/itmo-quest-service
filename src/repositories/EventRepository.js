const EventModel = require('../models/EventModel');
var db = require('../database');
// const User = require('../entities/User');

class EventRepository {

    constructor(db) {
        this.db = db
    }

    getAllEvents(db) {
        let results = new Set();

        results = db.query('SELECT * FROM events')
            .catch(error => {
                console.log(error);
            });

        return results.toArray().map(each => new EventModel(each));
    }

    getEventById(id) {
        const res = this.db.one('SELECT * FROM events WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new EventModel(each));

    }

    getEventsByCategory(time) {
        const res = this.db.one('SELECT * FROM events WHERE start_time = $1', [time])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new EventModel(each));
    }

    createEvent(currentEventModel) {
        this.db.one('INSERT INTO events(id, title, description, photo_link, start_time, status) VALUES($1, $2, $3, $4, $5, $6)',
            [currentEventModel.id, currentEventModel.title, currentEventModel.description, currentEventModel.photoLink,
                currentEventModel.startTime, currentEventModel.status])
            .catch(error => {
                console.log(error);
            });
    }

    updateEvent(currentEventModel) {
        this.db.one('UPDATE events WHERE id = $1 SET title = $2, description = $2, photo_link = $3, start_time = $4 status = $5',
            [currentEventModel.id, currentEventModel.title, currentEventModel.description, currentEventModel.photoLink,
                currentEventModel.startTime, currentEventModel.status])
            .catch(error => {
                console.log(error);
            });
    }

    deleteEvent(currentEventModel) {
        this.db.one('DELETE events WHERE id = $1',
            [currentEventModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new EventRepository();