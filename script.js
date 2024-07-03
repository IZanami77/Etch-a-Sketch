const container = document.querySelector(".container");
const body = document.querySelector("body");

const btn = document.querySelector("button");


for(i = 0; i<16 *16;i++){
    const div = document.createElement("div");
    div.style.border = "solid 1px white";
    container.appendChild(div);
}

btn.addEventListener('click',() =>{
    stored = prompt("How many squares do you need?");
    container.innerHTML ='';
    for(i = 0; i < stored * stored;i++){
        const divs = document.createElement("div");
        const width = (1/stored)*100;
        const height = (1/stored)*100;
        divs.style.border = "solid 1px white";
        divs.style.width = width+"%";
        divs.style.height = height+"%";
        container.appendChild(divs);
    } 
});