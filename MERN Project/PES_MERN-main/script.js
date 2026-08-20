let arr=[1,"sh",3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr);


function add(a,b)
{
    console.log(`sum of ${a+b}`);
}

function fun(callback)
{
    console.log("inside fun");
    callback(2,3);
}
fun(add);