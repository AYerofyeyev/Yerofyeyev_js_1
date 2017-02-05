alert("plugged");

function pow(a, b) {
  var c = 1;

  for (var i = 1; i <= b; i++) {
    c = c * a;
  }

  return c;
}

var x = prompt("Введите число", 1);

do {
var y = prompt("Введите степень, в которую нужно это число возвести", 1);
} while (y < 0);

alert( x + " в степени " + y + " = " + pow(x, y) );

var nameList = new Array();
var check;

for (var j = 0; j < 5; j++) {
  nameList.push( prompt("Введите имя", "") );
}

console.log(nameList);

var userName = prompt("Введите своё имя", "");

console.log(userName);

checking: for (var k in nameList) {
  if (nameList[k] == userName) {
    check = true;
    break checking;
  }

  check = false;
}

console.log(check);

if (check == true) {
  alert(userName + ", Вы успешно вошли");
} else {
  alert("Вас нет в списке");
}
