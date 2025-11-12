//complete this code
class Person {
	constructer(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	get age(){
		return this._age;
	}
	set age(newAge){
		return this._newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// exemapl
const person = new Person("prince", 22);
console.log(new.person);

const age = 22;
console.log(person.age);

const student = new Student("Alice", 30);
student.study();

const teacher =  new Teacher("rahul", 40);
teacher.teach();



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
