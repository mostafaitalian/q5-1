document.addEventListener("DOMContentLoaded", ()=>{

    let animConts = document.getElementsByClassName("section-cont-inner")
    console.log(animConts)
    for(let i=0; i<3; i++){
        let x = animConts[i]

        x.addEventListener('mouseover', (e)=>{
            console.log(x, x.children)
            x.children[0].classList.add('rotate-vanish-img')
            x.children[1].classList.add('rotate-show-ul')
            x.children[0].classList.remove('rotate-show-img')
            x.children[1].classList.remove('rotate-vanish-ul')
            x.children[0].classList.add('vanish-img')
            x.children[1].classList.add('show-ul')
            x.children[0].classList.remove('show-img')
            x.children[1].classList.remove('vanish-ul')        
            console.log(x.firstChild, x.lastChild)
        })
        x.addEventListener('mouseout', (e)=>{
            console.log(x, x.children)
            x.children[0].classList.add('rotate-show-img')
            x.children[1].classList.add('rotate-vanish-ul')
            x.children[0].classList.remove('rotate-vanish-img')
            x.children[1].classList.remove('rotate-show-ul')
            console.log(x.firstChild, x.lastChild)
        })
    }

})