const ClubModel = require('../models/ClubModel');
var db = require('../database');
const UserModel = require('../models/UserModel');

class ClubRepository {

    constructor(db) {
        this.db = db
    }

    getAllClubs(db) {
        let results = new Set();

        results = db.query('SELECT * FROM clubs')
            .catch(error => {
                console.log(error);
            });

        return results.toArray().map(each => new ClubModel(each));
    }

    getAllClubUsers(club) {
        const res = this.db.query('SELECT u.id, u.first_name, u.last_name, u.faculty, u.course, FROM clubs AS s INNER JOIN users_clubs AS u WHERE u.club_id = $1', [club.id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new UserModel(each));
    }

    getClubById(id) {
        const res = this.db.query('SELECT id, name, description, category, type, course FROM clubs WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));

    }

    getClubsByCategory(category) {
        const res = this.db.query('SELECT * FROM clubs WHERE category = $1', [category])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));
    }

    getClubsByUserId(id) {
        const res = this.db.query('SELECT c.id, c.name, c.description, c.category, c.type FROM clubs AS s INNER JOIN users_clubs AS u WHERE u.user_id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));
    }

    createClub(currentClubModel) {
        this.db.query('INSERT INTO clubs(id, name, description, category, type) VALUES($1, $2, $3, $4, $5)',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    updateClub(currentClubModel) {
        this.db.query('UPDATE clubs WHERE id = $1 SET name = $2, description = $2, category = $3, type = $4',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    deleteClub(currentClubModel) {
        this.db.query('DELETE FROM clubs WHERE id = $1',
            [currentClubModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new ClubRepository();