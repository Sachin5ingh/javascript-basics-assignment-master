// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const results=()=>{
    const studentsList=[
        {name:'sachin',subjects:[{subject:'Grammer',marks:80},{subject:'Accounts',marks:79}]},
        {name:'sandeep',subjects:[{subject:'Grammer',marks:45},{subject:'Accounts',marks:98}]},
        {name:'mala',subjects:[{subject:'Grammer',marks:100},{subject:'Accounts',marks:79}]},
        {name:'arvind',subjects:[{subject:'Grammer',marks:60},{subject:'Accounts',marks:69}]},
        {name:'bhawani',subjects:[{subject:'Grammer',marks:28},{subject:'Physics',marks:53}]},
        {name:'ravi',subjects:[{subject:'Grammer',marks:35},{subject:'Physics',marks:44}]},
        {name:'harsh',subjects:[{subject:'Grammer',marks:43},{subject:'Physics',marks:90}]},
        {name:'deepak',subjects:[{subject:'Grammer',marks:44},{subject:'Physics',marks:78}]},
    ]
    const result=()=>
    studentsList.reduce((obj,item)=>{

        let percenRes=item.subjects.reduce(()=>{
            return (item.subjects[0].marks+item.subjects[1].marks)/item.subjects.length;
        }, {})
        console.log({ 'name':item.name,'percentage':percenRes});
    }, {})
    const finResult=result(studentsList);
    return finResult;
}
results();
