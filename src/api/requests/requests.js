import {makeRequest} from 'helpers';

export const createUser = (isu) =>
    makeRequest('POST', '/api/auth/signup', {
        isu: isu
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


