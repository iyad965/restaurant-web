const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>80);
});

let section = document.querySelectorAll('section');
let menuLi = document.querySelectorAll('header nav a');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.scroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal (".home-text" , {delay:300});
sr.reveal (".home-img" , {delay:400});
sr.reveal (".container" , {delay:400});
sr.reveal (".about-img" , {});
sr.reveal (".about-text" , {delay:300});
sr.reveal (".middle-text" , {});
sr.reveal (".row-btn, .shop-content" , {delay:300});
sr.reveal (".review-content, .contact" , {delay:300});

