
let letter = $('.keyCodMostrar__letter')
let title = $('.keyAbece__title')
let hand = $('.keyAbece__hand')
let error = $('.keyAbece__error')

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
  
  title.css('display', 'none')
  hand.css('display', 'block')

  letter.text(keyCodes[ev.keyCode]).addClass('active');
  error.css('display', 'none');

  let key = (ev.keyCode) ? ev.keyCode : ev.which;

  if (keyCodes[ev.keyCode] && key) {
    console.log(ev.keyCode);
  } else {
    hand.css('display', 'none')
    error.text('Solo alfabero').css('display', 'block');
  }

}

function handleKeyUp (ev) {
  console.log(`Handle Key UP: ${ev.keyCode}`);
  letter.removeClass('active')
}

$(window).on('keyup', handleKeyUp);
$(window).on('keydown', handleKeyDown)
