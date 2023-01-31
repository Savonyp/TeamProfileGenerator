/* added extendment */
const Employee = require('./Employee');
/* engineer class */
class engineer extends Employee {
    constructor(name, id, email, Github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.Github = Github;
    }
    getName() {
        return this.name;
    }
    
    getId() {
         return this.id;
    }
/* Github */
    getGithub() {
        return this.Github;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'engineer';
    }
}
/* link all files */
module.exports = engineer;