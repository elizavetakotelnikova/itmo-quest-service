const ClubModel = require('../models/ClubModel');
const clubRepository = require('../repositories/ClubRepository');
// const Club = require('../entities/Club');

class ClubService {
    getAllClubs() {
        let results = new Set();
        results = clubRepository.getAllClubs()

        return results.toArray().map(each => new ClubModel(each));
    }

    getAllClubUsers(currentModelClub) {
        let results = new Set();
        results = clubsRepository.getAllClubUsers(currentModelClub.id);
        return results;

    }

    getClubById(id) {
        const res = clubRepository.getClubById(id);

        return res.map(each => new ClubModel(each));
    }

    createClub(currentClubModel) {
        clubRepository.createClub(currentClubModel);
    }

    updateClub(currentClubModel) {
        clubRepository.updateClub(currentClubModel);
    }

    deleteClub(currentClubModel) {
        clubRepository.deleteClub(currentClubModel.id)
    }
}

module.exports = new ClubService();