function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    alert(`Greetings, I am ${this.name}.`);
}


Person.prototype.sleep = function () {
    alert(`I am going to sleep now, My name is ${this.name}`)
}


// The Teacher constructor is a child pseudo class

// Step 1 is to call the parent constructor function
function Teacher(name,age,dept) {

    Person.call(this, name, age);

    // after calling the parent constructor, set your own properties
    this.dept = dept;

}

// here we are cloning the methods of the person before adding the methods of the teacher 

Teacher.prototype = Object.create(Person.prototype);


// Now you have to reset the constructor back to Teacher this is because it would be set to Person because of the pevious line

Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function () {
    alert(`Hello, I am ${this.name}, and I work for ${this.dept} department`);
}



function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.greet = function () {
    alert(`Hi I'm ${this.name}, and I'm majoring in ${this.major}`);
}

let person1 = new Person('Nate Mills', 28)
let teacher1 = new Teacher('Courtney White', 30, 'Math');
let student1 = new Student('Noelle Mills', 24, 'Computer Science');

console.log(person1);
console.log(teacher1);
console.log(student1);


person1.greet();
teacher1.greet();
student1.greet();

person1.sleep();
teacher1.sleep();
student1.sleep();