// console.log("Hello World");
// const a=12;
// console.log(a);
// if(a>10)
// {
//    let b=23;
//    a=40;
//     console.log("a inside condition:"+a);
// }
// console.log("a outside condition:"+a);

// let a=12;
// let b="12";
// console.log(typeof b);
// let today=Date();
// console.log(today);

// let a=12;
// let b="12";
// if(a==b){
//     console.log("welcome");
// }
// else{
//     console.log("hello");
// }
// let myname "Amit";
// let college="abes ec";
// let result =hi my name is ${myname} and  i am doing engineering from ${college};
// console.log(result);
// let key="sname";
// const students=[
//     {
//     sname:"amit",
// course:"btech",
// college:"abes"
// },
// {
//     sname:"bro",
// course:"ba",
// college:"abesit"
// }
// ]
// console.log("name "+students.sname+" course:"+students.course);
// const {sname}=students;
// console.log(sname);
// students[key]="rahul";
// console.log(students);
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);

// function greeting(msg="Welcome")
// {
//     console.log("Good Morning "+msg);
// }
// greeting();
// function sum(a,b)
// {
//     return a+b;
// }
// let data=sum(12,20);
// console.log(data);
// function javaCompiler()
// {
// return "JAva compiler selected";
// }
// function selectLanguage(clbk){
//     console.log("you have :"+clbk);
// }
// if(language=="java")
// {
//     function javaCompiler{
//         return "JAva compiler selected";
//     }
//     data=javaCompiler;
// }
// return data;
// console.log("Hello World");
// const a = 12;
// console.log(a);
// if (a > 10) {
//     let b = 23;
//     a = 40;
//     console.log("a inside condition:" + a);
// }
// console.log("a outside condition:" + a);

// let myname = "Amit";
// let college = "abes ec";
// let result = `hi my name is ${myname} and I am doing engineering from ${college}`;
// console.log(result);

// let key = "sname";
// const students = [
//     {
//         sname: "amit",
//         course: "btech",
//         college: "abes"
//     },
//     {
//         sname: "bro",
//         course: "ba",
//         college: "abesit"
//     }
// ];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);

// function greeting(msg = "Welcome") {
//     console.log("Good Morning " + msg);
// }
// greeting();

// function sum(a, b) {
//     return a + b;
// }
// let data = sum(12, 20);
// console.log(data);

// function javaCompiler() {
//     return "Java compiler selected";
// }

// let language = "java"; 
// function selectLanguage(clbk) {
//     console.log("you have: " + clbk);
// }

// if (language == "java") {
//     data = javaCompiler();
// }

// console.log(data);
console.log("Hello World");
let parent = document.getElementsByClassName("parent");
console.log(parent);
if (parent.length > 0) {
    parent[0].innerText = "data has changed";
    parent[0].innerHTML = "<h2 style='color:red'>data has changed</h2>";
}

let div = document.getElementsByTagName("div");
if (div.length > 0) {
    div[0].innerHTML = "hello.js";
    div[0].innerHTML = "<h2>Hello JS</h2>";
    const h1 = document.createElement("h1");
    console.log(h1);
    h1.innerText = "ABES ENGINEERING COLLEGE";
    console.log(h1);
    h1.style.backgroundColor = "cyan";
    h1.style.padding = "20px";
    h1.style.marginLeft = "300px";
    div[0].appendChild(h1);
}
img.src="C:\Users\Arpit\OneDrive\Desktop\FSD\FSDCSEB\images\img1.jpg";
console.log(img);