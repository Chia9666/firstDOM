const container = document.querySelector("#container");
//create p content in container
const para = document.createElement("p");
//add class to div
para.classList.add("para");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red; background: #d7fff1; font-size: 1rem;");
//connect para attributes to container
container.appendChild(para);

const headThree = document.createElement("h3");
headThree.classList.add("headThree");
headThree.textContent = "I'm a blue h3!";
headThree.style.color = "blue";
headThree.style.backgroundColor = "yellow";
container.appendChild(headThree);

const divContent = document.createElement("div");
//div attributes
divContent.classList.add("border");
divContent.style.border = "2px solid black";
divContent.style.backgroundColor = "pink";

const headOne = document.createElement("h1");
headOne.textContent = "I'm in a div";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
divContent.appendChild(headOne);
divContent.appendChild(para2);
container.appendChild(divContent);
