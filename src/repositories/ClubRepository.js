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

        return results.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type, each.creator));
    }

    async getAllClubUsers(club) {
        const res = await db.query('SELECT u.id, u.first_name, u.last_name, u.faculty, u.course FROM users AS u INNER JOIN users_clubs AS s ON s.user_id = u.id WHERE u.club_id = $1', [club.id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type, each.creator))
    }

    async getClubById(id) {
        const res = await db.query('SELECT id, name, description, category, type, creator_id FROM clubs WHERE id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type, each.creator))[0]

    }

    getClubsByCategory(category) {
        const res = db.query('SELECT * FROM clubs WHERE category = $1', [category])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type,each.creator))
    }

    async getClubsByUserId(id) {
        const res = await db.query('SELECT c.id, c.name, c.description, c.category, c.type, c.creator_id FROM clubs AS c INNER JOIN users_clubs AS u ON c.id = u.club_id WHERE u.user_id = $1', [id])
            .catch(error => {
                console.log(error);
            });

        return res.rows.map(each => new ClubModel(each.id, each.name, each.description, each.category, each.type, each.creator))
    }

    createClub(currentClubModel) {
        db.query('INSERT INTO clubs(id, name, description, category, type, creator_id) VALUES($1, $2, $3, $4, $5, $6)',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type, currentClubModel.creator])
            .catch(error => {
                console.log(error);
            });

        db.query('INSERT INTO users_clubs(user_id, club_id) VALUES($1, $2)',
            [currentClubModel.creator, currentClubModel.id])
            .catch(error => {
                console.log(error);
            });
    }

    subscribeUserToClub(userId, clubId) {
        db.query('INSERT INTO users_clubs(user_id, club_id) VALUES($1, $2)',
            [userId, clubId])
            .catch(error => {
                console.log(error);
            });
    }

    updateClub(currentClubModel) {
        db.query('UPDATE clubs WHERE id = $1 SET name = $2, description = $2, category = $3, type = $4',
            [currentClubModel.id, currentClubModel.name, currentClubModel.description, currentClubModel.category,
                currentClubModel.type, currentClubModel.creator])
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