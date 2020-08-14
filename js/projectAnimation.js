const projects = document.querySelectorAll('.project')
const p = document.querySelector('.project__extensions-text')
const btn = document.querySelector('.project__extensions-btn')
// project.addEventListener('mouseleave', ()=> {
//    p.classList.add('projectLeaveAnimation-p')
//    btn.classList.add('projectLeaveAnimation-btn')
// })


for (let project of projects){

   project.addEventListener('mouseleave', () => {
    const  inner1 = project.classList.add('animeOnLeave');

   })
}
