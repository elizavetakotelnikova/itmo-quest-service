const ClubModel = require('../models/ClubModel');
var db = require('../database');
// const Club = require('../entities/Club');

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

    getClubById(id) {
        const res = this.db.one('SELECT id, name, description, category, type, course FROM clubs WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));

    }

    getClubsByCategory(category) {
        const res = this.db.one('SELECT * FROM clubs WHERE category = $1', [category])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));
    }

    getClubsByUserId(id) {
        const res = this.db.one('SELECT c.id, c.name, c.description, c.category, c.type FROM clubs AS s INNER JOIN users_clubs AS u WHERE u.user_id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.map(each => new ClubModel(each));
    }

    createClub(currentClubModel) {
        this.db.one('INSERT INTO clubs(id, name, description, category, type) VALUES($1, $2, $3, $4, $5)',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    updateClub(currentClubModel) {
        this.db.one('UPDATE clubs WHERE id = $1 SET name = $2, description = $2, category = $3, type = $4',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    deleteClub(currentClubModel) {
        this.db.one('DELETE clubs WHERE id = $1',
            [currentClubModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new ClubRepository();