
const menubar =document.querySelector('.menubar');
// const header =document.querySelector('header');
const navlinks =document.querySelectorAll('nav li a');

const nav=document.querySelector("nav");
menubar.addEventListener("click",()=>{
    nav.classList.toggle("open")
    window.addEventListener("scroll",()=>{
        nav.classList.toggle("open") 
        // header.classList.toggle('bg')
    })
})

nav.addEventListener("click",()=>{
    nav.classList.toggle("open")  
})