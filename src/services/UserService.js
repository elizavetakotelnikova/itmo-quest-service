const UserModel = require('../models/UserModel');
const userRepository = require('../repositories/UserRepository');
const clubRepository = require('../repositories/ClubRepository');
const error = require("eslint-plugin-react/lib/util/error");
// const User = require('../entities/User');

class UserService {

    async getAllUsers() {
        let results = new Set();
        results = await userRepository.getAllUsers()

        console.log(results)

        return results;
    }

    getClubsByUser(currentModelUser) {
        let results = new Set();
        results = clubsRepository.getClubsByUserId(currentModelUser.id);
        return results;

    }

    async getUserById(id) {
        const res = await userRepository.getUserById(id);
        return res;
    }

    async getUserByIsu(isu) {
        const res = await userRepository.getUserByIsu(isu);

        return res;
    }

    createUser(currentUserModel) {
        userRepository.createUser(currentUserModel);
    }

    updateUser(currentUserModel) {
        userRepository.updateUser(currentUserModel);
    }

    async deleteUser(id) {
        console.log("meow")
        var user = await userRepository.getUserById(id)
        if (user == null) return;

        await userRepository.deleteUser(id)
    }
}

module.exports = new UserService();