/*const promise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Data received sfter 4 seconds")
    },4000)
})
promise.then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})

async function hello()
{
    return "hi i am Neha."
}

hello().then((res)=>
{
    console.log(res);
})*/



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error)=> console.log(error))


/*async function getData() {
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await res.json();
    console.groupCollapsed(data);
    
}  
getData(); */   

/*const  getdata=async()=> {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data=await res.json();
        console.groupCollapsed(data);
    }
    catch{
        console.log(err)
    }
    
}  
getdata(); */   

const info = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        const namedata= data.map((n)=>(n.name));
        console.log(namedata);
    }
    catch (error) {
        console.log(error);
    }
}

info();