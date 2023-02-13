
const counter = document.querySelector('[data-counter]');
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

btnMinus.addEventListener('click', function(){

  if( parseInt( counter.innerText ) > 1) {

    counter.innerText = --counter.innerText
  } else {

    return
  }
});


btnPlus.addEventListener('click', function(){

  counter.innerText = ++counter.innerText;
});

