import {background, body, sideBar} from './script-menu';

const feedbacks = document.querySelectorAll('.chat');
const feedbackWindow = document.querySelector('.feedback-wrapper');
const exits = document.querySelectorAll('.close');
const callbacks = document.querySelectorAll('.call');
const callbackWindow = document.querySelector('.callback-wrapper');

feedbacks.forEach(function (feedback) {
  feedback.addEventListener('click', function () {
    sideBar.classList.remove('sidebar-trans');
    feedbackWindow.classList.add('open');
    background.style.display = 'block';
    exits.forEach(function (exit) {
      exit.classList.add('exit');
    });
    body.style.overflowY = 'hidden';
    feedbackWindow.style.overflowY = 'visible';
  });
});

callbacks.forEach(function (callback) {
  callback.addEventListener('click', function () {
    sideBar.classList.remove('sidebar-trans');
    callbackWindow.classList.add('open');
    background.style.display = 'block';
    exits.forEach(function (exit) {
      exit.classList.add('exit');
    });
    body.style.overflowY = 'hidden';
    callbackWindow.style.overflowY = 'visible';
  });
});
exits.forEach(function (exit) {
  exit.addEventListener('click', function () {
     feedbackWindow.classList.remove('open');
     callbackWindow.classList.remove('open');
    background.style.display = 'none';
    body.style.overflowY = 'visible';
    exit.classList.remove('exit');
  });
});


background.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
   callbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
  exit.classList.remove('exit');
});
