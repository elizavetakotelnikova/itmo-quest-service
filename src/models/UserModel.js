class UserModel {
    constructor(id, isu, firstName, lastName, faculty, course, vkId) {
        this.id = id;
        this.isu = isu;
        this.firstName = firstName
        this.lastName = lastName
        this.faculty = faculty;
        this.course = course
        this.vkId = vkId
    }
}

module.exports = UserModel