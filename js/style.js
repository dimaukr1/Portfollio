const sign = document.querySelector(".menu__link__sing")
const active = document.querySelector(".wrapper")
const closing = document.querySelector(".Signup__close");
const MenuBurger = document.querySelector(".NavBurger");
const MenuLeft = document.querySelector(".header__menu__list");
const MenuScroll = document.querySelector(".menu__link__1");
const MenuScroll2 = document.querySelector(".menu__link__2");
const MenuScroll3 = document.querySelector(".menu__link__3");
const AboutUs = document.querySelector(".body__grid__content")
const Contact = document.querySelector(".body__contact__content")
const BodyBlock = document.querySelector(".body__service")
let thisburger = 1;
let coord = AboutUs.getBoundingClientRect().top;
let coord1 =  Contact.getBoundingClientRect().top;
let coord2 = BodyBlock.getBoundingClientRect().top;

/*
    MenuBurger.addEventListener('click', () => {

        MenuLeft.classList.add("Active");
        document.body.classList.add("hidden");
        if(thisburger % 2 == 0)
        {
            MenuLeft.classList.remove("Active");
            document.body.classList.remove("hidden");
        }
        thisburger= thisburger+1;
        console.log( thisburger)
    })

*/
const burger = document.querySelector(".burger");
let activeT = 1;

burger.addEventListener('click', function() {
    if(activeT % 2 != 0)
    {
        document.querySelector(".header__menu__list").classList.add("active");

    }
    if(activeT % 2 == 0)
    {
        document.querySelector(".header__menu__list").classList.remove("active");
        
    }
    console.log( document.querySelector(".header__menu__list"))
    activeT++;
})



sign.addEventListener("click", () => {
    active.classList.add('active');
    MenuLeft.classList.remove("active");
    document.body.classList.remove("hidden");
    document.body.classList.add("scrollY")
})
closing.addEventListener("click", () => {
    console.log("Work")
    active.classList.remove('active')
    document.body.classList.remove("scrollY")
}) 

console.log(coord)
MenuScroll.addEventListener("click", () => {
    console.log(true)
    window.scrollTo({
        top: coord - 100,
        behavior: "smooth",
      });
      MenuLeft.classList.remove("active");
})
MenuScroll2.addEventListener("click", () => {
    console.log(true)
    window.scrollTo({
        top: coord1,
        behavior: "smooth",
      });
      MenuLeft.classList.remove("active");
})
MenuScroll3.addEventListener("click", () => {
    console.log(true)
    window.scrollTo({
        top: coord2,
        behavior: "smooth",
      });
      MenuLeft.classList.remove("active");
})