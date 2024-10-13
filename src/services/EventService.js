const EventModel = require('../models/EventModel');
const userRepository = require('../repositories/UserRepository');
const eventRepository = require('../repositories/EventRepository');
// const Event = require('../entities/Event');

class EventService {
    getAllEvents() {
        let results = new Set();
        results = eventRepository.getAllEvents()

        return results.toArray().map(each => new EventModel(each));
    }

    getAllEventUsers(currentModelEvent) {
        let results = new Set();
        results = eventsRepository.getAllEventUsers(currentModelEvent.id);
        return results;

    }

    getEventById(id) {
        const res = eventRepository.getEventById(id);

        return res.map(each => new EventModel(each));
    }

    createEvent(currentEventModel) {
        eventRepository.createEvent(currentEventModel);
    }

    addUserToEvent(userId, eventId) {
        eventRepository.addUserToEvent(userId, eventId)
    }

    updateEvent(currentEventModel) {
        eventRepository.updateEvent(currentEventModel);
    }

    deleteEvent(currentEventModel) {
        eventRepository.deleteEvent(currentEventModel.id)
    }
}

module.exports = new EventService();