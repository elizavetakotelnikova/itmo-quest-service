const ClubModel = require('../models/ClubModel');
// const Club = require('../entities/Club');

class ClubService {
    constructor(clubRepository) {
        this.clubRepository = clubRepository
    }

    getAllClubs() {
        let results = new Set();
        results = this.clubRepository.getAllClubs()

        return results.toArray().map(each => new ClubModel(each));
    }

    getAllClubUsers(currentModelClub) {
        let results = new Set();
        results = this.clubsRepository.getAllClubUsers(currentModelClub.id);
        return results;

    }

    getClubById(id) {
        const res = this.clubRepository.getClubById(id);

        return res.map(each => new ClubModel(each));
    }

    createClub(currentClubModel) {
        this.clubRepository.createClub(currentClubModel);
    }

    updateClub(currentClubModel) {
        this.clubRepository.updateClub(currentClubModel);
    }

    deleteClub(currentClubModel) {
        this.clubRepository.deleteClub(currentClubModel.id)
    }
}

module.exports = new ClubService();