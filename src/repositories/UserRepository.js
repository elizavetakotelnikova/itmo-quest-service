const UserModel = require('../models/UserModel');
var db = require('../database');
// const User = require('../entities/User');

class UserRepository {
    async getAllUsers() {
        let results = new Set();

        results = await db.query('SELECT * FROM users')
            .catch(error => {
                console.log(error);
            });

        return results.rows.map(each => new UserModel(each.id, each.isu, each.first_name, each.last_name,
            each.faculty, each.course, each.vk_id));
    }

    async getUserById(id) {
        const res = await db.query('SELECT * FROM users WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        if (res == null) return null;

        return res.rows.map(each => new UserModel(each.id, each.isu, each.first_name, each.last_name,
            each.faculty, each.course, each.vk_id))[0];

    }

    async getAllUsersEvents(user) {
        const res = await db.query('SELECT e.id, e.title, e.description, e.photo_link, e.status FROM events AS e INNER JOIN users_events AS u WHERE u.user_id = $1', [user.id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new UserModel(each.id, each.isu, each.first_name, each.last_name,
            each.faculty, each.course, each.vk_id));
    }

    async getUserByIsu(isu) {
        const res = await db.query('SELECT * FROM users WHERE isu = $1', [isu])
    .catch(error => {
            console.log(error);
        });

        if (res == null) return null;

        return res.rows.map(each => new UserModel(each.id, each.isu, each.first_name, each.last_name,
            each.faculty, each.course, each.vk_id))[0];
    }

    createUser(currentUserModel) {
        console.log("meow")
        db.query('INSERT INTO users(id, first_name, last_name, isu, faculty, course, vk_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [currentUserModel.id, currentUserModel.firstName, currentUserModel.lastName, currentUserModel.isu,
            currentUserModel.faculty, currentUserModel.course, currentUserModel.vkId])
    .catch(error => {
            console.log(error);
        });
    }

    updateUser(currentUserModel) {
        db.query('UPDATE users WHERE id = $1 SET first_name = $2, last_name = $3, isu = $4, faculty = $5, course = $6',
            [currentUserModel.id, currentUserModel.firstName, currentUserModel.lastName, currentUserModel.isu,
                currentUserModel.faculty, currentUserModel.course, currentUserModel.vkId])
            .catch(error => {
                console.log(error);
            });
    }

    async deleteUser(id) {
        await db.query('DELETE FROM users WHERE id = $1',
            [id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new UserRepository();