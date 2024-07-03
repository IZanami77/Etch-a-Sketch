const container = document.querySelector(".container");
const body = document.querySelector("body");

const btn = document.querySelector("button");


for(i = 0; i<16 *16;i++){
    const div = document.createElement("div");
    div.style.border = "solid 1px white";
    container.appendChild(div);

    div.addEventListener('mouseover',()=>{
        rgb();
        div.style.backgroundColor = Color;

    });
}

btn.addEventListener('click',() =>{
    stored = prompt("How many squares do you need per side?");

    if(stored > 100) return alert("The max number is 99");
    container.innerHTML ='';

    for(i = 0; i < stored * stored;i++){

        const divs = document.createElement("div");
        const width = (1/stored)*100;
        const height = (1/stored)*100;

        divs.style.border = "solid 1px white";
        divs.style.width = width+"%";
        divs.style.height = height+"%";
        container.appendChild(divs);
        
        divs.addEventListener('mouseover',()=>{
            rgb();
            divs.style.backgroundColor = Color;
        });
        
    } 
});

function rgb(){

    R = random(0,255);
    G = random(0,255);
    B = random(0,255);

       Color = `rgb(${R},${G},${B})`;
       return Color;
}

function random(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}




