const js_btn = document.querySelector(".javascript-btn");
const react_btn = document.querySelector(".react-btn");
const angular_btn = document.querySelector(".angular-btn");
const python_btn = document.querySelector(".python-btn");

const react_projects_container = document.querySelector(
  ".react-projects__container"
);
const js_projects_container = document.querySelector(".js-projects__container");
const python_projects_container = document.querySelector(
  ".python-projects__container"
);
const angular_projects_container = document.querySelector(
  ".angular-projects__container"
);

const projects_control = document.querySelectorAll(".project-control");

const btnClicked = (project_container) => {
  for (let p of projects_control) {
    // if (p === project_container) {
    //   return;
    // }
     if (!p.classList.contains("d-none")) {
      p.classList.remove("show_projects-anime");
      p.classList.add("hide_projects-anime");
      // btn.classList.remove("active");

      setTimeout(() => {
        p.classList.add("d-none");
        // btn.classList.remove('active')

      }, 1500);
      setTimeout(() => {
        project_container.classList.remove("d-none");
        // btn.classList.add('active')
        project_container.classList.add("show_projects-anime");
      }, 1500);
    }
  }
};
react_btn.addEventListener("click", () => {
  btnClicked(react_projects_container);
});
angular_btn.addEventListener("click", () => {
  btnClicked(angular_projects_container);
});
python_btn.addEventListener("click", () => {
  btnClicked(python_projects_container);
});
js_btn.addEventListener("click", () => {
  btnClicked(js_projects_container);
});
