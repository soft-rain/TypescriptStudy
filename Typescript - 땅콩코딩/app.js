var studentID = 12345;
var studentName = "jenny Kim";
var age = 23;
var gender = "Female";
var subject = "javascript";
var courseCompleted = false;
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 12123123,
    studentName: "janet jackson",
    age: 30,
    gender: GenderType.Female,
    subject: "mongo db",
    courseCompleted: true
};
function getStudentDetails(studentID) {
    return {
        studentID: 123456,
        studentName: 'Mark jacobs',
        gender: GenderType.Male,
        subject: 'Node.js',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
