export{};
let result:string | number;
result ="Done";
console.log(result);
result =80;
console.log(result);

enum status{
    Active,
    Probation,
    Retired
}
let studentStatus: status = status.Active;
console.log(studentStatus);
studentStatus = status.Probation;
console.log(studentStatus);

type ID = string | number;
type user ={
    id: ID;
    name:string;
}
let student:user = {id:"T101",name:"Thawanrat"};
console.log(student);

interface Student{
    id:string,
    name:string,
    stat:status,
    province: string
}

let students:Student[] =[
    {id:"684245009",name:"Thawanrat",stat:status.Active,province:"Samutsongkhram"},
    {id:"684245000",name:"Prae",stat:status.Active,province:"Samutsongkhram"},
        ];
for (const p of students){
    console.log(`รหัสนักศึกษา ${p.id}
ชื่อ:${p.name}
สถานะ:${p.stat}
จังหวัด:${p.province}
        `)
}