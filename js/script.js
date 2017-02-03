alert('plugged');

var x;
var y;
var i;
var r = 1;

//do {
x = prompt('Введите число', 1);


y = prompt('Введите степень, в которую нужно это число возвести', 1);

var a = pow(x, y);

function pow(x, y) {
  for (i = 1; i <= y; i++) {
      result = result * x;
  }
}

//} while (i = isNan(x));

console.log('x = ', x)
console.log('y = ', y);
console.log(a);
