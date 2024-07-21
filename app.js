// chap 35 - 38 started.(functions)

// 1. Write a function that displays current date & time in your
// browser.

// function currentDate (){
//     var  today = new Date ();
//     document.write(today)
//    }
//    currentDate();
   
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var firstName = prompt("enter your first name :")
// var lastName = prompt("enter your last name :")
// function greetUser (){
//   alert("hello👋  " + firstName +" "+ lastName)
// }
// greetUser()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var input1 = Number(prompt("enter first number "))
// var input2 = Number(prompt("enter second  number "))
// function addition (input1,input2){
//   var add = input1+input2
//   document.write("The addition of two numbers is :" + add);

// }
// addition(input1,input2)

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var val1 = Number(prompt("enter first  number :"))
// var operator = prompt("which mathematical operation you want to perform:","+,-,*,/")
// var val2 = Number(prompt("enter second  number :"))
// var result;
// function calculator (val1,operator,val2){
//   if(operator== "+"){
// result= "The sum of " + val1 + " and " + val2 + " is " + (val1+val2)
//   }
//   else if(operator=="-"){
//     result="The subtraction  of " + val1 + " and " + val2 + " is " + (val1-val2)
//   }
//   else if(operator=="/"){
//     result= "The division of " + val1 + " and " + val2 + " is " + (val1/val2);
//   }
//   else if(operator=="*"){
//     result= "The multiplication of " + val1 + " and " + val2 + " is " + (val1*val2)
//   }

// document.write(result)
// }
// calculator(val1,operator,val2)
// function calculator(result){
//     var num1 = +prompt("Enter your first number");
//     var num2 = +prompt("Enter your second number");
//     var operators = prompt("+,-,*,/");
//     if(operators === "+"){
//         result = num1+num2
// }
//     else if(operators === "-"){
//         result = num1-num2
//     }
//     else if(operators === "*"){
//         result = num1*num2
//     } 
//     else if(operators === "/"){
//         result = num1/num2
//     }
//        alert(num1+num2)  
        
// }
// calculator()

// 5. Write a function that squares its argument.

// var num = Number(prompt("enter number for squares"))
// function squares (num){
//   console.log(num*num)
// }
// squares(num)
// 6. Write a function that computes factorial of a number.

// var num1= Number(prompt("enter number for factorization"))
// function squares (num1){
//  var factors =[];
//  var divisor = 2;
 
//  for( var i =0 ; i <= divisor ; i++){
//   if(num1%divisor==0){
//     factors.push(divisor);
//     num1=num1/divisor
//    }
//    else{
//     divisor++;
//    }
//   }
// document.write("the factors of " + num1 + " is :" +factors)
//  }

// squares(num1)

// 6. Write a function that computes factorial of a number.

// function factorial (){
//     var userinput = +prompt("Enter any number for factorial :");
//     if(userinput<0){
//         alert("error: factorial is not defined for negative number :")
//     }
//     else{
//         var result = 1;
//         for(var i = 2; i <=userinput; i++){
//            var result = result*i ; 
//         }
//     }
//     alert("the factorial of "+userinput+ "is" +result)
// }
// factorial()

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(){
//     var userinput1 = Number(prompt("Enter a start number"));
//     var userinput2 = Number(prompt("Enter a end number"));
//     for(var i =userinput1; i<=userinput2; +i++)
//     document.write(i);
   
// }
// document.write(counting());

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function Calculatehypotenuse(){
//     function calculatesquare(x){
//     return x*x
//     }
//     var base = +prompt("Enter the base of a right angle triangle");
//     var perpendicular = +prompt("Enter the perpendicular of a right angle triangle");

//     var hypotenuse = Math.sqrt(calculatesquare(base)+calculatesquare(perpendicular));
//     alert("The hypotenuse of right angle triangle with base"+base+"and perpendicular"+perpendicular+"is"+hypotenuse)

// }
// // console.log(math.sqrt(50))
// Calculatehypotenuse()

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// Arguments as value:
// function area(){
//     var area = width*height
//     return area 
// }
// console.log("The area of right Angle triangle" +area(4,5));

// // Argument as a variable:

// function area(){
//     var width = Number(prompt("Enter a width of rectangle"));
//     var height = Number(prompt("Enter a height of rectangle"));
//     var result = width*height
//     return result
// }
// console.log((area));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

    // var words = prompt("Enter any palindromewords :");
    // var splittedarr = words.split();
    // var rev = splittedarr.reverse();
    // var str = rev.join();
    // function palindrome (){
    //     if(str != words){
    //         alert("this is not palindrome word");
    //         }
    //        else{
    //         alert("this is a palindrome word");
    //        }
    //     }
    //     palindrome()

//     11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titlecase(){
//     var userinput = "write any sentence";
//     var splittedarr = userinput.split(" ");
//     var result = [];
//     for(var i =0; i < splittedarr.length; i++){
//         var upper = splittedarr.slice(i,0).toUpperCase()
//         result.push(upper)
//         return result
//     }
// } 
// titlecase()

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var userinput = prompt("write any sentence. I will find the longest word in the sentence.");
// function longestword (){
//     var splittedarr = userinput.split(" ");
//     var result;
//     for (var i =0; i <= splittedarr.length; i++){
//         if(splittedarr[i]> splittedarr[i]){
//             var word = splittedarr[i];
//             result.push(word)
//         }
//     }
//     return result.join(" ");
// }
// longestword();

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function checkingLetter(str, letter) {
//   var str = prompt("enter one sentence:");
//   var letter = prompt("enter one letter you want to find in string :");

//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       console.log(
//         "The letter " +
//           letter +
//           " in the sentence : " +
//           str +
//           " is occured " +
//           i +
//           "times"
//       );
//       break;
//     }
//   }
// }
// checkingLetter();

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

var num = Number(prompt("Enter radius"));
function calcCircumference (x){
return 2*3.14*x
}
var result = calcCircumference(num)
console.log("The circumference is" +result)

function calcArea (a){
return 3.14*Math.sqrt(num)    
}
var area = calcArea(num)
console.log("The area is" +area);


