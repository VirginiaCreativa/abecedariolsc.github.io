
let letter = document.querySelector('.keyCodMostrar__letter')
let title = document.querySelector('.keyAbece__title')
let hand = document.querySelector('.keyAbece__hand')
let error = document.querySelector('.keyAbece__error')

const keyCodes = {
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
};

function handleKeyDown (ev) {
  if ( !ev.metaKey ) {
    ev.preventDefault();
  }
  
  title.style.display = 'none'
  error.style.display = 'none'

  

  let key = (ev.keyCode) ? ev.keyCode : ev.which;

  if (keyCodes[ev.keyCode] && key) {
    console.log(ev.keyCode);
    letter.innerHTML = keyCodes[ev.keyCode]
    letter.classList.add('active')
  } else {
    error.style.display = 'block'
  }



}

function handleKeyUp (ev) {
 letter.classList.remove('active')

}

window.addEventListener('keyup', handleKeyUp);
window.addEventListener('keydown', handleKeyDown)
