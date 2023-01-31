const Employee = require("./Employee.js");

class intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.shcool = school;
    }
    getName() {
        return this.name;
    }
     
    getEmail() {
        return this.email;
    }
/* SCHOOL STRING */
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'intern';
    }
}
/* link all files */
module.exports = intern;