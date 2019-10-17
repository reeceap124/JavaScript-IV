// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){  //need to work out the logging part
        return `I like ${this.favSubjects}.`;
    }
    PRAssignment(subject){
        return `${this.name} had submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challeng on ${subject}.`
    }
}