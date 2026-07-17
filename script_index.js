/*=====================================
        HEADER SCROLL
======================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("header-scroll");

    }else{

        header.classList.remove("header-scroll");

    }

});


/*=====================================
    ANIMACIÓN AL HACER SCROLL
======================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/*=====================================
        BOTÓN IR ARRIBA
======================================*/

const button = document.createElement("button");

button.innerHTML = "↑";

button.className = "scrollTop";

document.body.appendChild(button);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        button.classList.add("active");

    }else{

        button.classList.remove("active");

    }

});

button.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/*=====================================
        NAV ACTIVO
======================================*/

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",function(){

        links.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});


/*=====================================
    EFECTO HOVER TARJETAS
======================================*/

document.querySelectorAll(".faculty-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*=====================================
    EFECTO TARJETAS NOTICIAS
======================================*/

document.querySelectorAll(".news-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*=====================================
    CONTADOR (OPCIONAL)
======================================*/

function animateValue(obj,start,end,duration){

    let startTime=null;

    function animation(currentTime){

        if(!startTime) startTime=currentTime;

        const progress=Math.min((currentTime-startTime)/duration,1);

        obj.innerHTML=Math.floor(progress*(end-start)+start);

        if(progress<1){

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}


/*=====================================
    PRELOADER
======================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*=====================================
    PARALLAX HERO
======================================*/

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let offset=window.pageYOffset;

    hero.style.backgroundPositionY=offset*0.45+"px";

});


/*=====================================
    MENÚ MÓVIL (para el futuro)
======================================*/

const menu=document.querySelector("nav");

const menuButton=document.querySelector(".menu-btn");

if(menuButton){

    menuButton.addEventListener("click",()=>{

        menu.classList.toggle("open");

    });

}


/*=====================================
        FIN
======================================*/