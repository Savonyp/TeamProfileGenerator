const Employee = require('./employee.js');

class  manager extends Employee{
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'manager';
    }
    /* Office # string */
    getOfficeNumber() {
        return this.getOfficeNumber;
    }
}
/* link all files */
module.exports = manager;