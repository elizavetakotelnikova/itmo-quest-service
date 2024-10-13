const EventModel = require('../models/EventModel');
var db = require('../database');
const UserModel = require("../models/UserModel");
// const User = require('../entities/User');

class EventRepository {
    async getAllEvents() {
        let results = new Set();

        results = await db.query('SELECT * FROM events')
            .catch(error => {
                console.log(error);
            });

        return results.rows.map(each => new EventModel(each.id, each.title,
            each.description, each.photo_link, each.start_time, each.status));
    }

    async getEventById(id) {
        const res = await db.query('SELECT * FROM events WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });
        return res.rows.map(each => new EventModel(each.id, each.title,
            each.description, each.photo_link, each.start_time, each.status))[0];

    }

    async getAllEventUsers(event) {
        const res = await db.query('SELECT u.id, u.first_name, u.last_name, u.faculty, u.course, FROM clubs AS s INNER JOIN users_events AS u WHERE u.event_id = $1', [event.id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new EventModel(each.id, each.title,
            each.description, each.photo_link, each.start_time, each.status));
    }

    createEvent(currentEventModel) {
        db.query('INSERT INTO events(id, title, description, photo_link, start_time, status) VALUES($1, $2, $3, $4, $5, $6)',
            [currentEventModel.id, currentEventModel.title, currentEventModel.description, currentEventModel.photoLink,
                currentEventModel.startTime, currentEventModel.status])
            .catch(error => {
                console.log(error);
            });
    }

    async addUserToEvent(userId, eventId) {
        await db.query('INSERT INTO users_events(user_id, event_id) VALUES($1, $2)',
            [userId, eventId])
            .catch(error => {
                console.log(error);
            });
    }

    updateEvent(currentEventModel) {
        db.query('UPDATE events WHERE id = $1 SET title = $2, description = $2, photo_link = $3, start_time = $4 status = $5',
            [currentEventModel.id, currentEventModel.title, currentEventModel.description, currentEventModel.photoLink,
                currentEventModel.startTime, currentEventModel.status])
            .catch(error => {
                console.log(error);
            });
    }

    deleteEvent(currentEventModel) {
        db.query('DELETE FROM events WHERE id = $1',
            [currentEventModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new EventRepository();