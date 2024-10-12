const UserModel = require('../models/UserModel');
var db = require('../database');
// const User = require('../entities/User');

class UserRepository {

    constructor(db) {
        this.db = db
    }

    getAllUsers(db) {
        let results = new Set();

        results = db.query('SELECT * FROM users')
            .catch(error => {
                console.log(error);
            });

        return results.toArray().map(each => new UserModel(each));
    }

    getUserById(id) {
        const res = this.db.one('SELECT * FROM users WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new UserModel(each));

    }

    getByIsu(isu) {
        const res = this.db.one('SELECT id, first_name, last_name, isu, faculty, course FROM users WHERE isu = $1', [isu])
    .catch(error => {
            console.log(error);
        });

        return res.map(each => new UserModel(each));
    }

    createUser(currentUserModel) {
        this.db.one('INSERT INTO users(id, first_name, last_name, isu, faculty, course) VALUES ($1, $2, $3, $4, $5, $6)',
            [currentUserModel.id, currentUserModel.firstName, currentUserModel.lastName, currentUserModel.isu,
            currentUserModel.faculty, currentUserModel.course])
    .catch(error => {
            console.log(error);
        });
    }

    updateUser(currentUserModel) {
        this.db.one('UPDATE users WHERE id = $1 SET first_name = $2, last_name = $3, isu = $4, faculty = $5, course = $6',
            [currentUserModel.id, currentUserModel.firstName, currentUserModel.lastName, currentUserModel.isu,
                currentUserModel.faculty, currentUserModel.course])
            .catch(error => {
                console.log(error);
            });
    }

    deleteUser(currentUserModel) {
        this.db.one('DELETE users WHERE id = $1',
            [currentUserModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new UserRepository();