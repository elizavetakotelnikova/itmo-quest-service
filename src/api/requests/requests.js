import {makeRequest} from '../helpers/makeRequest.js';


export const createUser = (isu, firstName, lastName) =>
    makeRequest('POST', '/api/user/signup', {
        isu: isu,
        firstName: firstName,
        lastName: lastName
    });



export const createEvent = (clubId, eventName) =>
    makeRequest('POST', `/api/event/create/event`, {
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


