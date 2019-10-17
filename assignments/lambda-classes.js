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
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject){
        return `${this.name} had submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challeng on ${subject}.`;
    }
}

class PM extends Instructor {
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}
//End classes

const bill = new Instructor({
    name: 'Bill',
    age: 35,
    location: 'Earth',
    specialty: 'Web Dev',
    favLanguage: 'Python',
    catchPhrase: 'KaChow'
});

const phil = new Instructor({
    name: 'Phil',
    age: 28,
    location: 'The Amazon',
    specialty: 'Dev Web',
    favLanguage: 'Gibberish',
    catchPhrase: 'ChowKa'
});

const jill = new Student ({
    name: 'Jill',
    age: 21,
    location: 'Westeros',
    previousBackground: 'none',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const gill = new Student ({
    name: 'Gill',
    age: 43,
    location: 'Rural Montana',
    previousBackground: 'Highly Wanted Hacker',
    className: 'Web 32',
    favSubjects: ['Advanced JavaScript', 'Node.js', 'LambdaX']
});

const dill = new PM ({
    name: 'Dill',
    age: 17,
    location: `Don't worry about it`,
    gradClassName: 'Web23',
    favInstructor: `Bryan`
});

const syle = new PM ({
    name: 'Syle',
    age: 38,
    location: 'ISS',
    gradClassName: 'Web22',
    favInstructor: 'Brit'
});

console.log(dill.name);
console.log(gill.name);
console.log(bill.demo('advanced physics'));
console.log(phil.grade(jill, 'javascript'));
dill.standUp('web_26_dill');
syle.debugsCode(jill, 'ethical hacking');
jill.listsSubjects();
console.log(gill.sprintChallenge('React'));
console.log(phil.speak());