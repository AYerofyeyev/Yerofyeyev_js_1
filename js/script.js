alert('plugged');

function pow(a, b) {
  var c = 1;

  for (var i = 1; i <= b; i++) {
    c = c * a;
  }

  return c;
}

var x = prompt('Введите число', 1);

do {
var y = prompt('Введите степень, в которую нужно это число возвести', 1);
} while (y < 0);

alert( x + ' в степени ' + y + ' = ' + pow(x, y) );
