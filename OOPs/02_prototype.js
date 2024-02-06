// injecting prototype (simply methods) or properties to the objects(functions,string,array) using prototype

function employee(name,email,salary){
    this.name=name;
    this.email=email;
    this.salary=salary
    return this
}
// console.log(user("Bikash","bikash@gmail.com",20000))

employee.prototype.incrementsalary=function(salary){ // adding incrementsalary function to the function employee
    this.salary++ // this refers to the current context
}
employee.prototype.displaysalary=function(salary){
    console.log(`your incremented salary is:${salary}`)
}
// console.log(employee.prototype)// check if the prototype increment salary is present or not

const emp1= new employee("Bikash","bikash@gamil.com",20000);
// console.log(emp1)
emp1.incrementsalary(emp1.salary);
console.log(emp1.displaysalary(emp1.salary));
// const emp2=employee("Ramesh","RAmu@gamil,com",30000);

const emp2=new employee("Ramesh","Ramu@gmail.com",30000)
emp2.incrementsalary(emp2.salary)
console.log(emp2.displaysalary(emp2.salary))