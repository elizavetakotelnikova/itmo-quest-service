import { makeRequest } from '../helpers/makeRequest.js';

export const createUser = (isu, firstName, lastName, vkId) =>
    makeRequest('POST', '/api/user/signup', {
        isu: isu,
        firstName: firstName,
        lastName: lastName,
        vkId: vkId
    });

export const createEvent = (clubId, eventName) =>
    makeRequest('POST', `/api/event/create/`, {
        clubId: clubId,
        eventName: eventName,
    });


export const markAttendance = (userId, eventId) =>
    makeRequest('POST', '/api/event/mark/attendance', {
        userId: userId,
        eventId: eventId,
    });


export const getAchievements = (userId) =>
    makeRequest('POST', '/api/event/get/achievements', {
        userId: userId,

    });

export const getNotifications = (userId) =>
    makeRequest('POST', '/api/event/get/notifications', {
        userId: userId,
    });

export const getClubs = () => {
    return makeRequest('GET', '/api/club/getAll');
}

export const getClubDetails = (clubId) =>
    makeRequest('GET', `/api/club/${clubId}`, {
        clubId: clubId,
    });

export const postNewTask = (taskTitle, additionalInfo, clubId) =>
    makeRequest('POST', 'API YOUR WORK HERE', {
        taskTitle: taskTitle,
        additionalInfo: additionalInfo,
        clubId: clubId
    })

export const postNewClubData = (name, category, type, description, creator) =>
    makeRequest('POST', '/api/club/create', {
        name: name,
        category: category,
        type: type,
        description: description,
        creator: creator,
    });


