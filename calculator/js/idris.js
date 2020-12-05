let display = document.getElementById('display');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three= document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let dot = document.getElementById('dot');
let eq = document.getElementById('eq');
let mul = document.getElementById('mul');
let div = document.getElementById('div');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let cancel = document.getElementById('can');

let operand1 = 0;
let operator = '';
let operand2 = 0;


function show(val) {
  display.innerHTML += val;
}

  
function multiply(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '*';
}
function divide(){
  operand1 = display.innerHTML;
  display.innerHTML =' ';
  operator = '/';
}

function plus(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '+';
}
function minus(){
  operand1 = display.innerHTML;
  display.innerHTML = '';
  operator = '-';
}

function eql() {
  operand2 = display.innerHTML;
  if (operator == '*') {
  let output = operand1 * operand2;
  display.innerHTML = output;
  }
  else if (operator == '+') {
    let output = parseFloat(operand1, 10) + parseFloat(operand2, 10);
    display.innerHTML = output;
  }
  else if (operator == '-') {
    let output = operand1 - operand2;
    display.innerHTML = output;
  }
  else if (operator == '/') {
    let output = operand1 / operand2;
    display.innerHTML = output;
  }
}
cancel.addEventListener('click', function(){
  display.innerHTML = '';
  operand1 = 0;
  operand2 = 0;
  operator = '';
  // body...
});

one.addEventListener('click', function(){
 show(1);
});
two.addEventListener('click', function(){
 show(2);
});
three.addEventListener('click', function(){
 show(3);
});
four.addEventListener('click', function(){
 show(4);
});
five.addEventListener('click', function(){
 show(5);
});
six.addEventListener('click', function(){
 show(6);
});
seven.addEventListener('click', function(){
 show(7);
});
eight.addEventListener('click', function(){
 show(8);
});
nine.addEventListener('click', function(){
 show(9);
});
zero.addEventListener('click', function(){
 show(0);
});
dot.addEventListener('click', function(){
 show(`.`);
});
// point.addEventListener('click', function(){
// show();
//});

mul.addEventListener('click', function(){
 multiply();
});
eq.addEventListener('click', function(){
 eql();
});
div.addEventListener('click', function(){
 divide();
});
add.addEventListener('click', function(){
 plus();
});
sub.addEventListener('click', function(){
 minus();
});