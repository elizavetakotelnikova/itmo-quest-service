const ClubModel = require('../models/ClubModel');
var db = require('../database');
const UserModel = require('../models/UserModel');

class ClubRepository {

    async getAllClubs() {
        let results = new Set();

        results = await db.query('SELECT * FROM clubs')
            .catch(error => {
                console.log(error);
            });

        console.log(results)

        return results.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type));
    }

    async getAllClubUsers(club) {
        const res = await db.query('SELECT u.id, u.first_name, u.last_name, u.faculty, u.course, FROM clubs AS s INNER JOIN users_clubs AS u WHERE u.club_id = $1', [club.id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type))
    }

    getClubById(id) {
        const res = db.query('SELECT id, name, description, category, type, course FROM clubs WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type))[0]

    }

    getClubsByCategory(category) {
        const res = db.query('SELECT * FROM clubs WHERE category = $1', [category])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type))
    }

    getClubsByUserId(id) {
        const res = db.query('SELECT c.id, c.name, c.description, c.category, c.type FROM clubs AS s INNER JOIN users_clubs AS u WHERE u.user_id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type))
    }

    createClub(currentClubModel) {
        db.query('INSERT INTO clubs(id, name, description, category, type) VALUES($1, $2, $3, $4, $5)',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    updateClub(currentClubModel) {
        db.query('UPDATE clubs WHERE id = $1 SET name = $2, description = $2, category = $3, type = $4',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type])
            .catch(error => {
                console.log(error);
            });
    }

    deleteClub(currentClubModel) {
        db.query('DELETE FROM clubs WHERE id = $1',
            [currentClubModel.id])
            .catch(error => {
                console.log(error);
            });
    }
}

module.exports = new ClubRepository();