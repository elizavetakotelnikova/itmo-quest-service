class EventModel {
    constructor(id, title, description, photoLink, startTime, status) {
        this.id = id
        this.title = title
        this.description = description
        this.photoLink = photoLink
        this.startTime = startTime
        this.status = status
    }
}

module.exports = EventModel