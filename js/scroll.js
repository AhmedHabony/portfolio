const nav = document.querySelector(".navbar");
// const navC = document.querySelector(".navbar__container");
// const fixedNavbarContainer = document.querySelector(".fixedNavbarContainer");
const front = document.querySelector(".frontend-container");
window.onscroll = function (e) {


// const headerOffsetHeight = document.querySelector(".header").offsetHeight;
// const aboutOffsetHeight = document.querySelector(".about").offsetHeight;
 const headerRectTop = document.querySelector(".header").getBoundingClientRect().top
 // const aboutRectTop = document.querySelector(".about").getBoundingClientRect().top
const headerRectBottom = document.querySelector(".header").getBoundingClientRect().bottom
 // const aboutRectBottom = document.querySelector(".about").getBoundingClientRect().bottom




// Bottom/Top
if (headerRectTop >= 0){

  nav.classList.add('fixed-bottom')
    nav.classList.remove('bg-custom')

}
if (headerRectTop < 0){
  nav.classList.remove('fixed-bottom')
}

if (headerRectBottom <= 0){
  nav.classList.add('fixed-top')
    nav.classList.add('bg-custom')














}
if (headerRectBottom > 0){
  nav.classList.remove('fixed-top')

    nav.classList.remove('bg-custom')

}



};



