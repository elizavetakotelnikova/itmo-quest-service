const EventModel = require('../models/EventModel');
const userRepository = require('../repositories/UserRepository');
const eventRepository = require('../repositories/EventRepository');
// const Event = require('../entities/Event');

class EventService {
    async getAllEvents() {
        let results = new Set();
        results = await eventRepository.getAllEvents()

        return results;
    }

    getAllEventUsers(currentModelEvent) {
        let results = new Set();
        results = eventRepository.getAllEventUsers(currentModelEvent.id);
        return results;

    }

    async getEventById(id) {
        return await eventRepository.getEventById(id);
    }

    createEvent(currentEventModel) {
        console.log("jit")
        eventRepository.createEvent(currentEventModel);
    }

    async addUserToEvent(userId, eventId) {
        await eventRepository.addUserToEvent(userId, eventId)
    }

    updateEvent(currentEventModel) {
        eventRepository.updateEvent(currentEventModel);
    }

    deleteEvent(currentEventModel) {
        eventRepository.deleteEvent(currentEventModel.id)
    }
}

module.exports = new EventService();