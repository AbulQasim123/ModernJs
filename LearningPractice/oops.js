/*** 
    In programing languages we often say "an object is an instance of a class"
    this means that, using a class, i can create many object and then all share methods and properties.
    Class is a blueprint for creating objects.
***/
class Student {
    constructor(name, age, gender, degree) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
    }
    studentBioDate() {
        // console.log(`Hello Here is ${this.name} and age is ${this.age} and gender is ${this.gender} and degree is ${this.degree}`);
        return `Hello Here is ${this.name} and age is ${this.age} and gender is ${this.gender} and degree is ${this.degree}`;
    }
}

class Player extends Student {
    constructor(name, age, gender, degree, habit) {
        super(name, age, gender, degree);
        this.habit = habit;
    }
    playerBioData() {
        // console.log(`Hello Here is ${this.name} and age is ${this.age} and gender is ${this.gender} and degree is ${this.degree} and habit is ${this.habit}`);
        return `${super.studentBioDate()}. and habit is ${this.habit}`;
    }
}
const student1 = new Student("AbulQaism", 22, "Male", "BCA");
const student2 = new Student("Mohammad", 23, "Male", "MCA");
const player1 = new Player("AbulQaism", 22, "Male", "BCA", 'cricket');
const player2 = new Player("Mohammad", 23, "Male", "MCA", 'football');
console.log(student1.studentBioDate());
console.log(student2.studentBioDate());
console.log(player1.playerBioData());
console.log(player2.playerBioData());
