const fontEnd = document.querySelector(".frontend-container");
const backEnd = document.querySelector(".backend-container");
const tools = document.querySelector(".tools-container");
window.onresize = () => {
  if (window.innerWidth <= 1200) {
    fontEnd.classList.remove("col-lg-4");
    fontEnd.classList.add("col-lg-6");
    fontEnd.classList.add("order-1");

    backEnd.classList.remove("col-lg-4");
    backEnd.classList.add("col-lg-6");
    backEnd.classList.add("order-2");

    tools.classList.remove("col-lg-4");
    tools.classList.add("col-lg-12");
    tools.classList.add("order-3");
  }

  else if (window.innerWidth > 1200){
      fontEnd.classList.add("col-lg-4");
      fontEnd.classList.remove("col-lg-6");
      fontEnd.classList.remove("order-1");

      backEnd.classList.add("col-lg-4");
      backEnd.classList.remove("col-lg-6");
      backEnd.classList.remove("order-2");

      tools.classList.add("col-lg-4");
      tools.classList.remove("col-lg-12");
      tools.classList.remove("order-3");

  }
};

fontEnd.addEventListener('onshow', () => {
    console.log('tttttt')
})