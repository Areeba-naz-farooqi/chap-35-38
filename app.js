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

