function cardType(number) {

  number = number.toString();

  let firstDigit = number.slice(0,1);
  let firstTwoDigits = number.slice(0,2);
  let firstFourDigits = number.slice(0,4);

  if ((firstTwoDigits === "34" || firstTwoDigits === "37") && number.length === 15){
    return("Amex");
  }
  else if (firstFourDigits === "6011" && number.length === 16){
    return("Discover");
  }
  else if ((parseInt(firstTwoDigits) >= 51 && parseInt(firstTwoDigits) <= 55) && number.length === 16) {
    return("MasterCard");
  }
  else if (firstDigit === "4" && (number.length === 15 || number.length === 16)){
    return("Visa");
  }
  else {
    return(null);
  }

}

console.log(cardType(349123789012345));
console.log(cardType(6011237890123456));
console.log(cardType(5391237890123456));
console.log(cardType(491236789012345));
console.log(cardType(4912367890123456));
console.log(cardType("matheus"));
function validate(number) {
  const numberToCharArray = number.toString().split('');
  const reversedArray = numberToCharArray.reverse();
  let sum =  0

  reversedArray.forEach((numero, indice) => {
    if (indice % 2 !== 0) {
      sum += parseInt(numero) * 2;
      console.log(reversedArray);
      console.log(sum);
    }
  })
}
//
//   const v = reversedArray
//   .filter((_, indice) => indice % 2 !== 0)
//   .map(item => item * 2)
//   .reduce((acum, item) => acum + item, 0)
//
//   console.log(v);
//
//   const tchau = () => console.log('Tchau')
//
//   // oi(() => 'oi')
//   setTimeout(function () {
//     console.log('oi');
//   }, 1000);
//
//   tchau()
//
//
//   // console.log(sum);
//
//   // for (let char in reversedArray){
//   //   console.log(char);
//   //   console.log(reversedArray);
//   //   console.log(reversedArray.indexOf(char));
//   //   if (reversedArray.indexOf(char) % 2 !== 0){
//   //    sum += char * 2;
//   //    console.log(sum);
//   //  }
//   // }
// }
//
//
validate(12345);
// // 54321
// // for each em x
// // soma tds
// // divide = 0 true
// // !=0 false
// //
// // gg
