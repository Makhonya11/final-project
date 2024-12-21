const burger = document.querySelector('.header__menu');
const sideBar = document.querySelector('.sidebar-wrapper');
const close = document.querySelector('.exit');
const background = document.querySelector('.sidebar-background');
const body = document.querySelector('body');

burger.addEventListener('click', function(){
    
    sideBar.classList.add('sidebar-trans');
    background.style.display = 'block';
    body.style.overflowY = 'hidden';
    sideBar.style.overflowY = 'auto';
});
close.addEventListener('click', function(){
    sideBar.classList.remove('sidebar-trans');
    background.style.display = 'none';
    body.style.overflowY = 'visible';
});
background.addEventListener('click', function(){
    sideBar.classList.remove('sidebar-trans');
    background.style.display = 'none';
    body.style.overflowY = 'visible';
});

export {background, body, sideBar};