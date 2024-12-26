
import {swiper, breakpoint,toggleSwiper ,swiperWrapper ,swiperSlides} from './brands-swiper'; 

document.addEventListener('DOMContentLoaded', () => {
    toggleSwiper();
  });

window.addEventListener('resize', toggleSwiper);
const expendSecond = document.querySelector('.second');
const devices = document.querySelector('.devices');
const secondSlides = devices.querySelectorAll('.hidden');
//КНОПКА РАСКРЫТИЯ

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






