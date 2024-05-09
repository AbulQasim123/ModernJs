// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `encrypted ${this.password}abc`;
//     }
//     changeUpperCase(){
//         return this.username.toUpperCase();
//     }
// }
// const user = new User("john","a@a.com","123");
// console.log(user.encryptPassword());
// console.log(user.changeUpperCase());

// Behind the scene
// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function(){
//     return `encrypted ${this.password}abc`;
// }
// User.prototype.changeUpperCase = function(){
//     return this.username.toUpperCase();
// }
// const user = new User("john","a@a.com","123");
// console.log(user.encryptPassword());
// console.log(user.changeUpperCase());

// Inheritance
class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`My username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const TeacObj = new Teacher("john","a@a.com","123");
const UserOBj = new User("Qasim");
TeacObj.logMe();
TeacObj.addCourse();
console.log(TeacObj instanceof Teacher);

class Me{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`My username is ${this.username}`);
    }
    static createId(){
        return '123';
    }
}

const aboutMe = new Me("Qasim");
aboutMe.logMe();
console.log(aboutMe.createId());