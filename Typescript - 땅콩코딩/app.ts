class Employee{
    fullName:string;
    age :number;
    jobTitle:string;
    hourlyRate:number;
    workingHoursPerWeek:number;

    constructor(fullName:string, age:number,jobTitle:string, hourlyRate:number, workingHoursPerWeek:number){
        this.fullName=fullName;
        this.age=age;
        this.jobTitle=jobTitle;
        this.hourlyRate=hourlyRate;
        this.workingHoursPerWeek=workingHoursPerWeek;


    }
    printEmployeeDetails= ():void=>{
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 
        ${this.hourlyRate*this.workingHoursPerWeek}달러이다.`)
    }
}
 
let employee1 = new Employee('민수', 28, '주니어 웹개발자', 40, 35);
