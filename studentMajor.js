function groupedStudentsByMajor(students) {
    return students.reduce((grouped, student) => {
        if (!grouped[student.major]) {
            grouped[student.major] = [];
        
        }
        grouped[student.major].push(student);
        return grouped;
    }, {});
}

const studentList = [
    {name: "Mabior", major: "Informatics"},
    {name: "david", major: "Accounting"},
    {name: "Misfar", major: "Civil"}
];

console.log(groupedStudentsByMajor(studentList));