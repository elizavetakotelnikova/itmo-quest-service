class UserModel {
    constructor(id, isu, firstName, lastName, faculty, course) {
        this.id = id;
        this.isu = isu;
        this.firstName = firstName
        this.lastName = lastName
        this.faculty = faculty;
        this.course = course
    }
}

module.exports = UserModel