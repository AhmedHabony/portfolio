 const text = document.getElementById('text');
    let newDom = '';
    const animationDelay = 6;

    for(let i = 0; i < text.innerText.length; i++)
    {
        if(i === 0 || i === 4) {
            newDom += `<span  class="special text-${i+1}">` + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>'
        }
        else if(i === 2){
            newDom += `<span  class="special-b text-${i+1}">` + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>'
        }
        else{
            newDom += `<span  class="char text-${i+1}">` + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }
    }

    text.innerHTML = newDom;

    const length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    setTimeout(() => {
        const spe = document.querySelectorAll('.special')
        const speB = document.querySelector('.special-b')
        speB.classList.add('special-anime-b')
        for (let el of spe) {
            el.classList.add('special-anime')
        }
    }, 500)


 // Add Class to Navba
 const isShow = document.querySelector('.navbar-toggler-icon');
    const row = document.querySelector('.row');
   isShow.addEventListener('click', (e) => {
       const isShow = document.querySelector('.show');
       if (!isShow){
           row.classList.add('opacity-bg')
       }
       else {
           row.classList.remove('opacity-bg')

       }

    })
