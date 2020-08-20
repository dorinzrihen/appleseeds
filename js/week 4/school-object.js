school = {
    teachers:[
        {
            name: "Bar",
            subject: ["photoshop"],
            students: [],
            capacity: 2,
        },
        {
            name: "boaz",
            subject: ["programing","photoshop"],
            students: [],
            capacity: 1,
        },
    ],
    students:[
        {
            name: "bob",
            age: 12,
        },
        {
            name: "Gal",
            age: 16,
        },
        {
            name: "Beny",
            age: 15,
        },
        {
            name: "roee",
            age: 9,
        },
        
    ],
}

function assignStudent(student,subject){
    let studentName = school.students.find(element => element.name ===student);
    let teachersOptions =school.teachers.filter(element => (element.subject.includes(subject)) && element.capacity > 0);
    if(teachersOptions.length){
        teachersOptions[0].students.push(studentName);
        teachersOptions[0].capacity--;
        studentName["Study-topic"] = subject;
        return;
    }  
    return console.log("Sorry, there is no option to sign up");
   
}

assignStudent('Beny','photoshop'); 
assignStudent('roee','photoshop'); 
assignStudent('bob','photoshop'); 
assignStudent('Gal','photoshop'); 



 console.log(school);
//  console.log(school.teachers[0].students)
console.log(school.teachers[1].students)
console.log(school.teachers[0].students)
// console.log(school);