import Swiper, { pagination } from 'swiper';


let swiper = null;
const breakpoint = 768;
function toggleSwiper () {
if (window.innerWidth > breakpoint) {
if (swiper) {
swiper.destroy(true, true);
swiper = null;
}
} else  {
    if (!swiper) {
        swiper = new Swiper('.swiper', {
                   
                    direction: 'horizontal',
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true,
                      },
                      
                      slidesPerView: 'auto',
                      centerSlides:true,
                      spaceBetween:16,
                      slidesPerGroup:1,
                });
    }
}   
}       
document.addEventListener('DOMContentLoaded', () => {
    toggleSwiper();
  });
window.addEventListener('resize', toggleSwiper)

const expendButton = document.querySelector('.expend');
const brands = document.querySelector('.brands');
const swiperWrapper = brands.querySelector('.swiper-wrapper');
const swiperSlides = brands.querySelectorAll('.hidden');

    expendButton.addEventListener('click', function () {
        for (let i = 0; i < swiperSlides.length; i++) {
                swiperSlides[i].classList.toggle('hidden')
            
        }
        expendButton.classList.toggle('active');
        if (expendButton.classList.contains('active')) {
    
            expendButton.textContent = 'Скрыть';
        } else  {
            expendButton.textContent = 'Показать все';
        }
    });

    export{swiper, breakpoint,toggleSwiper ,expendButton ,swiperWrapper ,swiperSlides}





