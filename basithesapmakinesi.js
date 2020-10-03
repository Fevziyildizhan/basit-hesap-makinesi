let operatör = prompt('yapacağınız işlemi girin(+,-,*,/)')

let num1 = parseFloat( prompt('ilk sayı'))
let num2 = parseFloat( prompt('ikinci sayı'))
let result;
if(operatör =='+') {
 result=  num1 + num2

}else if(operatör == '-'){
    result = num1 -num2
}else if(operatör =='*'){
    result = num1*num2
}else if(operatör =='/'){

    result = num1 / num2
}

console.log(result)
