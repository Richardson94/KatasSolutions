function generateShape(integer) {
  var square = '';
  for (let i = 1; i <= integer; i++) {
    for (let j = 1; j <= integer; j++) {
      square += '+';
    }
    i == integer ? square : (square += '\n');
  }
  return square;
}
console.log(generateShape(8));
