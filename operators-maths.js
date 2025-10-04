// An operator is unary if it has a single operand.
let x=1 
x=-x
console.log(x)
//An operator is binary if it has two operands
let z = 1, y = 3;
console.log( y - z );
//remainder operator %
console.log(5%2)//1
console.log(8%3)//2
console.log(8%4)//0
//exponential **
console.log(2**2)
//STRING CONCATENATION
let s = "my" + "string";
console.log(s); // mystring
//Note: that if any of the operands is a string, then the other one is converted to a string too.
console.log('1'+2)
console.log(2 + 2 + '1' ); // "41" and not "221"
/**Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41' */
console.log('1' + 2 + 2); // "122" and not "14"

// other than + all other opertors works only with numbers 
console.log(6-'2')//4
console.log('6'/'2')//

/**
 Numeric conversion, unary +
 The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
 */
// No effect on numbers
let a = 1;
console.log( +a); // 1

let b = -2;
console.log( +b ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log(+"")// No effect on numbers


