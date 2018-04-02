
$(window).on('keydown', handleKey)
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

function handleKey (ev) {
  if ( !ev.metaKey ) {
    ev.preventDefault();
  }
	
	const title = $('.keyAbece__title')
  title.css('display', 'none')

  const hand = $('.keyAbece__hand')
	hand.css('display', 'block')

	const error = $('.keyAbece__error')

  const letter = $('.keyCodMostrar_letter');
  letter.text(keyCodes[ev.keyCode]);

  if (keyCodes[ev.keyCode]) {
    console.log(ev.keyCode);
    error.text('').css('display', 'block');
  }else {
    hand.css('display', 'none')
    error.text('Solo alfabero');
  }

}
