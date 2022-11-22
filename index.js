  let nuit = true 
  const sousMenu = document.querySelector('.SousMenu')
  const faAngleRight = document.querySelector('.fa-angle-left')
  const faToggleOn = document.querySelector('.fa-toggle-on')
  const more = document.querySelector('.more')
  const option = document.querySelector('.option')
  const faStar = document.querySelector('.fa-star')
  const productImage = document.querySelectorAll('.productImage')
  const bouttons = document.querySelectorAll('.option span')
  const SousMenu = document.querySelector('.SousMenu')
  const header = document.querySelector('header')

  faAngleRight.addEventListener("click",() =>{
        sousMenu.classList.toggle('sousMenu')
        faAngleRight.classList.toggle('fa-angle-R')
  })
  faToggleOn.addEventListener("click",() =>{
        header.children[0].classList.toggle('bouttons')
        SousMenu.classList.toggle('bouttons')
        document.body.classList.toggle('Body')
        faToggleOn.classList.toggle('fa-angle-R')
        for(i=0;i<productImage.length; i++){
            productImage[i].classList.toggle('ProductImage')
            productImage[i].parentElement.children[1].classList.toggle('ProductDetail')
            productImage[i].parentElement.classList.toggle('SingleProduct')
            productImage[i].parentElement.children[1].children[4].children[0].classList.toggle('Avalaible')
        }
        for(i=0;i<bouttons.length; i++){
            bouttons[i].classList.toggle('bouttons')
            bouttons[i].parentElement.children[0].classList.toggle('bouttons')
        }
        if(nuit ==true){
                SousMenu.children[4].children[1].textContent='Dark'
                    
                SousMenu.children[4].children[0].innerHTML =
                    `<img src="./tof/Iconnuit.png" alt="cd">`
                
                    SousMenu.children[2].children[0].innerHTML =
                    `<img src="./tof/IconcarN.png" alt="dc">`
                    nuit = false      
           }else{
            SousMenu.children[4].children[1].textContent='Light'
                    
                    SousMenu.children[4].children[0].innerHTML =
                        `<img src="./tof/Iconlit.png" alt="cd">`
                    
                        SousMenu.children[2].children[0].innerHTML =
                        `<img src="./tof/Iconsop.png" alt="dc">`
                        nuit = true    
           }
  })
  more.addEventListener("click",() =>{
      more.style.visibility = "hidden"
      option.classList.add('Option')
      })
