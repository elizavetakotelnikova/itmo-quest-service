const EventModel = require('../models/EventModel');
// const Event = require('../entities/Event');

class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository
    }

    getAllEvents() {
        let results = new Set();
        results = this.eventRepository.getAllEvents()

        return results.toArray().map(each => new EventModel(each));
    }

    getAllEventUsers(currentModelEvent) {
        let results = new Set();
        results = this.eventsRepository.getAllEventUsers(currentModelEvent.id);
        return results;

    }

    getEventById(id) {
        const res = this.eventRepository.getEventById(id);

        return res.map(each => new EventModel(each));
    }

    createEvent(currentEventModel) {
        this.eventRepository.createEvent(currentEventModel);
    }

    updateEvent(currentEventModel) {
        this.eventRepository.updateEvent(currentEventModel);
    }

    deleteEvent(currentEventModel) {
        this.eventRepository.deleteEvent(currentEventModel.id)
    }
}

module.exports = new EventService();