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
const expendSecond = document.querySelector('.second');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const brands = document.querySelector('.brands');
const devices = document.querySelector('.devices');
const swiperSlides = brands.querySelectorAll('.hidden');
const secondSlides = devices.querySelectorAll('.hidden');


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

    expendSecond.addEventListener('click', function () {
        for (let i = 0; i < secondSlides.length; i++) {
            secondSlides[i].classList.toggle('hidden')
            
        }
        expendSecond.classList.toggle('active');
        if (expendSecond.classList.contains('active')) {
    
            expendSecond.textContent = 'Скрыть';
        } else  {
            expendSecond.textContent = 'Показать все';
        }
    });






