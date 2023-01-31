import '../sass/base/_base.sass'
import '../sass/base/_animation.sass'  
import '../sass/base/_blocks.sass'
import '../sass/base/_menu.sass'
import '../sass/base/_sliders.sass'
import '../sass/components/_button.sass'
import '../sass/components/_comp.sass'
import '../sass/style.sass'
import '../sass/components/_modal.sass'



console.log('Works!')
const menu = document.querySelector(".menu")
const closeMenu = document.querySelector(".menu-top__close")
const munuBtn = document.querySelector(".header__burger")
munuBtn.addEventListener("click" , function() {
    menu.classList.toggle('displayNone')
})
closeMenu.addEventListener("click" , function() {
    menu.classList.toggle('displayNone')
})



new Swiper(".sliders__one", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // когда ширина окна >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 640px
    680: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  },
  centeredSlidesBounds: true,
});
new Swiper(".sliders__two", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // когда ширина окна >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 640px
    680: {
      slidesPerView: 3,
      spaceBetween: 20
    },


  },
  centeredSlidesBounds: true,
});
new Swiper(".sliders__three", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // когда ширина окна >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // когда ширина окна >= 640px
    680: {
      slidesPerView: 3,
      spaceBetween: 20
    },


  },
  centeredSlidesBounds: true,
});
/////////////////////////////////////////////////////////////////////////////////////////
const windowInnerWidth = document.documentElement.clientWidth
const revealOne = document.querySelector('.btn__reveal-one')
const revealOneP = document.querySelector('.btn__reveal-one p')
const revealTwo = document.querySelector('.btn__reveal-two')
const revealTwoP = document.querySelector('.btn__reveal-two p')
const sonyD = document.querySelector('.sonyD')
const sonicD = document.querySelector('.sonicD')
const swipBlock = document.querySelector('.swip-block__two-last') 



if (windowInnerWidth > 1331){
  sonyD.classList.add('close')
  sonicD.classList.add('close')
}

const mainTextOne = document.querySelector('.main__text-one')
const mainTextTwo = document.querySelector('.main__text-two')
const btnText = document.querySelector('.btn__text')

if (windowInnerWidth <= 768){
  mainTextOne.classList.toggle('displayNone')
  mainTextTwo.classList.toggle('displayNone')
} else if (windowInnerWidth < 1332) {
  mainTextTwo.classList.toggle('displayNone')
}


btnText.addEventListener("click" , function() {
  if (windowInnerWidth <= 768){
    mainTextOne.classList.toggle('displayNone')
    mainTextTwo.classList.toggle('displayNone')
  }else if (windowInnerWidth < 1332) {
    mainTextTwo.classList.toggle('displayNone')
  }
})



if (windowInnerWidth < 1331){
  revealOne.addEventListener("click" , function() {
    sonyD.classList.toggle('close')
    sonicD.classList.toggle('close')
    revealOneP.innerHTML="Скрыть"
  })
  revealTwo.addEventListener("click" , function() {
    swipBlock.classList.toggle('close-two')
    revealTwoP.innerHTML="Скрыть"
  })
}





const phoneHeader = document.querySelector('.phone-header')
const chatHeader = document.querySelector('.chat-header')
const phone = document.querySelector('.phone')
const chat = document.querySelector('.chat')
let modalPhone = document.querySelector('.modal-phone')
let modalChat = document.querySelector('.modal-chat')
const btnModal = document.querySelector('.btn__modal')
const btnModalTwo = document.querySelector('.btn__modal-two')

phone.addEventListener("click" , function() {
  modalPhone.classList.toggle('active')
})
btnModal.addEventListener("click" , function() {
  modalPhone.classList.toggle('active')

})
btnModalTwo.addEventListener("click" , function() {
  modalChat.classList.toggle('active')

})

chat.addEventListener("click" , function() {
  modalChat.classList.toggle('active')
})

phoneHeader.addEventListener("click" , function() {
  modalPhone.classList.toggle('active')
})
chatHeader.addEventListener("click" , function() {
  modalChat.classList.toggle('active')
})
 