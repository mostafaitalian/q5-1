document.addEventListener('DOMContentLoaded', function(){
    let navSubHeader = document.getElementById('nav-sub-h')
    let fsContainer = document.getElementById('fs-b')

    document.addEventListener('scroll', (e)=>{
        if(window.scrollY > 0){
            console.log(window.scrollY)
            navSubHeader.style.height = "50px"
            fsContainer.style.top = "50px"
        }
        else{

            navSubHeader.style.height = "0px"
            fsContainer.style.top = "0px"

        }
    })
})