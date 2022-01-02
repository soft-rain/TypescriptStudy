var studentID = 12345;
var studentName = "jenny Kim";
var age = 23;
var gender = "female";
var subject = "javascript";
var courseCompleted = false;
var student1 = {
    studentID: 12123123,
    studentName: "janet jackson",
    age: 30,
    gender: "female",
    subject: "mongo db",
    courseCompleted: true
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark jacobs',
        gender: 'male',
        subject: 'Node.js',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
