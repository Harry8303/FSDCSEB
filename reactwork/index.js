// let div = document.getElementsByClassName("parent");
// console.log(div); 
// const h2=document.createElement("h2");
// h2.innerText="Welcome to REACT JS";
// console.log(h2);
// h2.style.color="green";
// h2.style.marginLeft="500px"
// div[0].appendChild(h2);

const parent =document.getElementById("root");
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2= React.createElement("h2",{style:{color:"blue"}},"Welcome to React JS");
root.render(h2);

// const li1=React.createElement("li",{},"Apple");
// const li2=React.createElement("li",{},"Banana");
// const li3=React.createElement("li",{},"Kiwi");
// const li4=React.createElement("li",{},"DragonFruit");
// const ul= React.createElement("ul",{style:{backgroundColor:"cyan"}},li1,li2,li3,li4);

// root.render(ul);

// const div =React.createElement("h1",{},"By React Create Element");
// const h1=
// const parent = document.getElementById("root");
// const root =vg ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"red"}},"welcome to react js");
// root.render(h2);
// const li1=React.createElement("li",{style:{color:"red"}},"orange");
// const li2=React.createElement("li",{},"mango");
// const li3=React.createElement("li",{},"banana");
// const li4=React.createElement("li",{},"Guava");
// const ul=React.createElement("ul",{style:{backgroundColor:"aqua"}},[li1,li2,li3,li4]);
// root.render(ul);

// working on jsx
const h1 = React.createElement("h1", {}, "hy there");
const h11 = <h1>Creating h1 using jsx</h1>;
const li1 = <li>orange</li>;
const li2 = <li>mango</li>;
const li3 = <li>banana</li>;
const li4 = <li>Guava</li>;
const ul = (
  <ul>
    {li1}
    {li2}
    {li3}
    {li4}
  </ul>
);
// root.render(h11)
// root.render(ul)
const mystyle = {
  backgroundColor: "aqua",
};
const container = (
  <div style={mystyle}>
    <div>welcome to the application</div>
    <div>{ul}</div>
    <div>{h11}</div>
  </div>
);
root.render(container);