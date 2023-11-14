// selecing the typeface selectio bar in html line 15
var typefaceEl = document.querySelector('#typeface');
// selecting the clear button in html line 26
var clearEl = document.querySelector('#clear');
// selecting the <h1> tag in html line 31
var h1El = document.querySelector('#h1');
// selecting the <h2> tag in html line 32
var h2El = document.querySelector('#h2');
// selecting the <h3> tag in html line 33
var h3El = document.querySelector('#h3');
// selecting the <p> tag in html line 34
var pEl = document.querySelector('#p');
// selecting the <textarea> in html line 24
var textAreaEl = document.querySelector('#textarea');

var elements = [h1El, h2El, h3El, pEl];

var typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  console.log(event);
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
