let studentID:number  =12345;
let studentName:string= "jenny Kim";
let age:number = 23;
let gender:string = "Female";
let subject:string = "javascript";
let courseCompleted:boolean = false;

enum GenderType{
    Male = 'male',
    Female='female'
}

//인터페이스
interface Student { 
    readonly studentID:number;
    studentName:string;
    age?:number;
    gender:GenderType;
    subject:string;
    courseCompleted:boolean;
    //메소드
    //addComment(comment:string):string;
    addComment?:(comment:string)=>string;
}

let student1 = {
    studentID:12123123,
    studentName:"janet jackson",
    age:30,
    gender:GenderType.Female,
    subject:"mongo db",
    courseCompleted:true
}

function getStudentDetails(studentID:number)
:Student {
    return {
        studentID:123456,
        studentName:'Mark jacobs',
        gender:GenderType.Male,
        subject:'Node.js',
        courseCompleted:true
        
    };
}
function saveStudentDetails(student:Student):void{

}
saveStudentDetails(student1)
