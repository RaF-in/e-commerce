let nav = document.getElementById("nav");
let ham = document.getElementById("hamburger")
let mobile = document.getElementById("mobile");
let cross = document.getElementById("cross");
if (ham) {
    ham.addEventListener('click', ()=>{
        nav.classList.add("nav-class");
        mobile.classList.add('not-active')
    })
}

if (cross) {
    cross.addEventListener('click', ()=>{
        nav.classList.remove("nav-class");
        mobile.classList.remove('not-active')
    })
}
