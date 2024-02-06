class Teacher{
constructor(username){
    this.username=username;
}

course(){
console.log(`this is new course owned by: ${this.username}`)
}
static techerdetail(){// this method is static therfore it cannot be accessed by its instance or child
    salary=12000;
}

}

class student extends Teacher{// this is student class which is a child class of parent teacher

    constructor(username,email){
        super(username)// to access the constructor of parent class super keyword is used.it is just like a call() method
        this.email=email
    }

    showstudent(){
        console.log(`Student Name:${this.username}`)
    }
}

const student1= new student("shyam","sh@gmail.com")
console.log(student1.course());
console.log(student1.showstudent())
console.log(student1.techerdetail());