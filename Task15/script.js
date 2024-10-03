btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    const inputText= document.getElementById('name-input').value;
    document.getElementById('box-1').innerText="Hello, "+inputText+"!";
})

const color1=document.getElementById('color-1');
const color2=document.getElementById('color-2');
const color3=document.getElementById('color-3');
const color4=document.getElementById('color-4');

color1.addEventListener('click',()=>{
    color1.style.backgroundColor=color1.innerText;
})
color2.addEventListener('click',()=>{
    color2.style.backgroundColor=color2.innerText;
})
color3.addEventListener('click',()=>{
    color3.style.backgroundColor=color3.innerText;
})
color4.addEventListener('click',()=>{
    color4.style.backgroundColor=color4.innerText;
})