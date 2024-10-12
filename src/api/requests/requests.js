import { makeRequest } from '../helpers/makeRequest.js';

export const createUser = (isu, firstName, lastName, vkId) =>
    makeRequest('POST', '/api/auth/signup', {
        isu: isu,
        firstName: firstName,
        lastName: lastName,
        vkId: vkId
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

export const getClubs = () =>
    makeRequest('GET', 'API YOUR WORK HERE', {
    });

export const getClubDetails = () =>
    makeRequest('GET', 'API YOUR WORK HERE')

export const postNewTask = (taskTitle, additionalInfo, clubId) =>
    makeRequest('POST', 'API YOUR WORK HERE', {
        taskTitle: taskTitle,
        additionalInfo: additionalInfo,
        clubId: clubId
    })

export const postNewClubData = (clubName, category, membership, description) =>
    makeRequest('POST', 'API YOUR WORK HERE', {
        clubName: clubName,
        category: category,
        membership: membership,
        description: description
    });


