const UserModel = require('../models/UserModel');

// const User = require('../entities/User');

class UserService {
    constructor(userRepository, clubRepository) {
        this.userRepository = userRepository
        this.clubRepository = clubRepository
    }

    getAllUsers() {
        let results = new Set();
        results = this.userRepository.getAllUsers()

        return results.toArray().map(each => new UserModel(each));
    }

    getClubsByUser(currentModelUser) {
        let results = new Set();
        results = this.clubsRepository.getClubsByUserId(currentModelUser.id);
        return results;

    }

    getUserById(id) {
        const res = this.userRepository.getUserById(id);

        return res.map(each => new UserModel(each));
    }

    getByIsu(isu) {
        const res = this.userRepository.getUserById(isu);

        return res.map(each => new UserModel(each));
    }

    createUser(currentUserModel) {
        this.userRepository.createUser(currentUserModel);
    }

    updateUser(currentUserModel) {
        this.userRepository.updateUser(currentUserModel);
    }

    deleteUser(currentUserModel) {
        this.userRepository.deleteUser(currentUserModel.id)
    }
}

module.exports = new UserService();