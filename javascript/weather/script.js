loget babysitter={
    name:"sara",
    age:25,
    experience:3,
    languages:["english","arabic"]
}
let jsonstring=JSON.stringify(babysitter);
console.log( "json string",jsonstring);
let obj=JSON.parse(jsonstring);
console.log("object",obj);

let books={
    title:"the secret",
    author:"rhonda byrn",
    year:2006,
    pages:198
}   
let jsonstring2=JSON.stringify(books);
console.log("json string",jsonstring2);
let obj2=JSON.parse(jsonstring2);
console.log("object",obj2);
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log("error",error));  
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(users=>{
    output+=`<li>${user.name}-${user.email}</li>`;
});
output+="</ul>";
document.body.innerHTML+=output;
});