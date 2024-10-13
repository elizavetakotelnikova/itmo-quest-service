const ClubModel = require('../models/ClubModel');
const clubRepository = require('../repositories/ClubRepository');
// const Club = require('../entities/Club');

class ClubService {
    async getAllClubs() {
        let results = new Set();
        results = await clubRepository.getAllClubs()

        return results;
    }

    async getAllClubUsers(currentModelClub) {
        let results = new Set();
        results = await clubRepository.getAllClubUsers(currentModelClub.id);
        return results;
    }

    getClubById(id) {
        const res = clubRepository.getClubById(id);

        return res;
    }

    createClub(currentClubModel) {
        clubRepository.createClub(currentClubModel);
    }

    subscribeUserToClub(userId, clubId) {
        clubRepository.subscribeUserToClub(userId, clubId);
    }


    updateClub(currentClubModel) {
        clubRepository.updateClub(currentClubModel);
    }

    deleteClub(currentClubModel) {
        clubRepository.deleteClub(currentClubModel.id)
    }
}

module.exports = new ClubService();