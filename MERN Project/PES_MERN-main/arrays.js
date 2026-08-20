let arr=[1,2,3,4,5];
function double(n)
{
    return n*2;
}
let arr2=arr.map(double);
console.log(arr2);


let mulbyfour=arr.map((n)=>n*4);
console.log(mulbyfour);



let obj=[

    {name:"shree",age:22,rno:12},
    {name:"A",age:23,rno:20},
    {name:"B",age:24,rno:25}
]

console.log(obj);

let pro=obj.map((n)=>n.name);
console.log(pro);

let pro2=obj.map((n)=>{return n.age});
console.log(pro2);

let res3=obj.filter((n)=>n.age>22) && obj.filter((n)=>n.rno>20);
console.log(res3);

let total=obj.reduce((i,n)=>i+n.age,0);
console.log(total);


console.log(obj[0].name);


let arr3=[1,2,3,4,5];
let res=arr3.filter((n)=>n%2==0);
console.log(res);

function isodd(n)
{
    return n%2!=0;
}
let res1=arr3.filter(isodd);
console.log(res1);

let sum=arr3.reduce((s,n)=>n+s,0);
console.log(sum);



let a=[1,2,3,4,5];
let a1=[6,7,8,9];
let a3=[...a,...a1];
console.log(a3);


/* deconstructing */
let [n1,n2,...n3]=a1;
console.log(n1);
console.log(n2);
console.log(n3);



let user=
{
    name:"Neha",
    age:20
}

let newuser=
{
    ...user,
    city:"Mandya"
}

console.log(newuser);



const merge=(one,...numbers)=>console.log(numbers);
merge(1,2,3);


let student={name:"shree",mark:30,age:20};
let {name:stuname,mark:m,age}=student;
console.log(stuname);