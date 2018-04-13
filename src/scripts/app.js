
let showLetter = document.querySelector('.keyCodMostrar__letter')
let title = document.querySelector('.keyAbece__title')
let hand = document.querySelector('.keyAbece__hand')
let handIcon = document.querySelector('.iconHand')
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
const keyHands = {
  65 : "images/abecedario_Aa.svg",
  66 : "images/abecedario_Bb.svg",
  67 : "images/abecedario_Cc.svg"
  // 68 : "images/abecedario_Dd.svg",
  // 69 : "images/abecedario_Ee.svg",
  // 70 : "images/abecedario_Ff.svg",
  // 71 : "images/abecedario_Gg.svg",
  // 72 : "images/abecedario_Hh.svg",
  // 73 : "images/abecedario_Ii.svg",
  // 74 : "images/abecedario_Jj.svg",
  // 75 : "images/abecedario_Kk.svg",
  // 76 : "images/abecedario_Ll.svg",
  // 77 : "images/abecedario_Mm.svg",
  // 78 : "images/abecedario_Nn.svg",
  // 79 : "images/abecedario_Ññ.svg",
  // 80 : "images/abecedario_Oo.svg",
  // 81 : "images/abecedario_Pp.svg",
  // 82 : "images/abecedario_Qq.svg",
  // 83 : "images/abecedario_Rr.svg",
  // 84 : "images/abecedario_Ss.svg",
  // 85 : "images/abecedario_Tt.svg",
  // 86 : "images/abecedario_Uu.svg",
  // 87 : "images/abecedario_Vv.svg",
  // 88 : "images/abecedario_Ww.svg",
  // 89 : "images/abecedario_Xx.svg",
  // 90 : "images/abecedario_Yy.svg",
};

function handleKeyDown (ev) {
  if ( !ev.metaKey ) {
    ev.preventDefault();
  }
  
  title.style.display = 'none'
  error.style.display = 'none'
  
  let key = (ev.keyCode) ? ev.keyCode : ev.which;

  const imgBloq = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP94z19hOeXX6UD_qr9cabEAnh9OEYRo1zSMBItiRu42i3od71'

  if (keyCodes[ev.keyCode] && key) {

    const letterKC = keyCodes[ev.keyCode]
    const handKC = keyHands[ev.keyCode]

    showLetter.innerHTML = letterKC
    handIcon.src = handKC ? handKC : imgBloq;
    hand.style.display = 'block'

    console.log(handKC);

    showLetter.classList.add('active')
  } else {
    error.style.display = 'block'
    handIcon.src = ''
  }

}

function handleKeyUp (ev) {
  showLetter.classList.remove('active')
}

window.addEventListener('keyup', handleKeyUp);
window.addEventListener('keydown', handleKeyDown)
