// Exercice 1 : Inverser les valeurs de deux variables

// var a = 1; //put them into an array and then swap them
// var b = 2;

// function switchVar() {
//   [a, b] = [b, a];
// }

// Exercice 2 : Afficher des variables
// A partir des variables suivantes :
// Nom = toto;
// Age = 30;
// Homme = true;

// let person = { Name: "toto", age: 30, homme: true }; ////im creating an object

// Exercice 3 : Puissance de 2
// Réaliser un programme permettant à l’utilisateur de saisir la puissance de 2 qu’il
// souhaite afficher

// function power(a) {
//   console.log(a + " squared is " + Math.pow(a, 2)); ////Math.pow to use to the power of....
// }

// Exercice 3:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
// Exemple:
// addition(1, 2) ➞ 3
// addition(-2, -4) ➞ -6

// function add(a, b) {
//   console.log(a + " + " + b + " = " + (a += b));
// }

// Exercice 3:
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

// function minToSec(a) {
//   console.log(a + " minutes converted to seconds is " + a * 60 + " seconds");
// }

// Exercice 4:
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le
// résultat.
// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

// function plusOne(a) {
//   // return a + 1;
//   console.log("If I add 1 to " + a + " it will equal " + (a + 1));
// }

// Exercice 5:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez
// que la surface d’un triangle est: (base * hauteur) / 2
// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5

// function areaTriangle(base, height) {
//   console.log(
//     "The area of a triangle with " +
//       base +
//       " base and " +
//       height +
//       " height is equal to " +
//       (base * height) / 2
//   );
// }

// Exercice 6:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH

// function strReverse(str) {
//   var splitString = str.split(""); //convert string to array
//   var reverseArray = splitString.reverse(); //reverses array
//   var joinArray = reverseArray.join(""); //turns array into string
//   return joinArray;
// }

// Exercice 7:
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
// Exemple:
// getMax(5, 9, 1) ➞ 9
// getMax(2, 3, 10) ➞ 10

// function getMax(a, b, c) {
//   console.log("The highest number is " + Math.max(a, b, c));
// }

// Exercice 8:
// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier
// élément d’un tableau commence toujours par l’index 0.
// Exemple:
// getFirst([1, 2, 3]) ➞ 1
// getFirst([50, 60, 70]) ➞ 50

// function getFirst(arr) {
//   console.log("The first number is " + arr[0]);
// }

//you must input an array into the argument

// Exercice 9:
// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web

// function getSite() {
//   console.log("The URL is " + window.location.href);
// }

// Exercice 10:
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul
// opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis
// comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
// Exemple:
// resteDiv(1, 3) ➞ 1
// resteDiv(2, 4) ➞ 2
// resteDiv(3, 3) ➞ 0

// function giveRemainder(a, b) {
//   console.log("The remainder of " + a + " divided by " + b + " is " + (a % b));
// }

// Exercice 11: < 100
// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon,
// retournez FALSE.
// Exemple:
// check(5, 20) ➞ true
// // 5 + 20 = 25
// check(60, 55) ➞ false
// // 60 + 55 = 115

// function check(a, b) {
//   if (a + b >= 100) {
//     console.log("The sum of " + a + " and " + b + " is 100 or more");
//   } else if (a + b < 100) {
//     console.log("The sum of " + a + " and " + b + " is less than 100");
//   }
// }

// Exercice 12:
// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une
// minute et 60 minutes en une heure.
// Exemple:
// heureSeconde(1) ➞ 3600
// heureSeconde(5) ➞ 18000

// function hoursToSeconds(a) {
//   if (a == 1) {
//     console.log("There are " + a * 60 * 60 + " seconds in " + a + " hour"); //1 hour
//   } else {
//     console.log("There are " + a * 60 * 60 + " seconds in " + a + " hours"); //multiple hours
//   }
// }

// Exercice 13:
// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon
// retournez FALSE.
// Exemple:
// checkNbr(1) ➞ false
// checkNbr(-1) ➞ true
// checkNbr(0) ➞ true

// function checkNbr(a) {
//   if (a <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Exercice 14:
// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
// Exemple:
// isEqual(3, 6) ➞ false
// isEqual(1, ‘1’) ➞ false
// isEqual(1, 1) ➞ true

// function isEqual(a, b) {
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Exercice 15:
// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
// Exemple:
// isDivisible(5) ➞ true
// isDivisible(10) ➞ true
// isDivisible(6) ➞ false

// function isDivisibleBy5(a) {
//   if (a % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Exercice 16:
// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
// Exemple:
// hmTos(1, 10) ➞ 4200
// hmTos(0, 59) ➞ 3540
// hmTos(0, 0) ➞ 0

// Exercise 16:
// Write a function that takes two integers (hours, minutes) and converts them to seconds.
// Example:
// hmTos (1, 10) ➞ 4200
// hmTos (0, 59) ➞ 3540
// hmTos (0, 0) ➞ 0

// function hmTos(hours, minutes) {
//   console.log(
//     "There are " +
//       (hours * 60 * 60 + minutes * 60) +
//       " seconds in " +
//       hours +
//       " hours and " +
//       minutes +
//       " minutes"
//   );
// }

// Exercice 17:
// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée
// reverse();
// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]
// reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]

// let arr = [];
// function reverseArr(arr) {
//   newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// Exercice 18:
// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
// Exemple:
// getLastElem([1, 2, 3, 4]) ➞ 4
// getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’

// Exercise 18:
// Create a function that takes an array and returns the last element of the array.
// Example:
// getLastElem ([1, 2, 3, 4]) ➞ 4
// getLastElem ([Alex ’, Bob’, Emily ’]) ➞ Emily’

// function getLast(arr) {
//   console.log("The last element is " + arr[arr.length - 1]);
// }

// Exercice 19:
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de
// paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les
// paramètres sont égaux et FALSE s’ils sont différents.
// Exemple:
// checkEq(5, 5) ➞ true
// // number = number: leur type et leur valeur sont égaux
// checkEq(5, 0) ➞ false
// // number = number: leur type sont égaux et leur valeur sont différent
// checkEq(5, false) ➞ false
// // number <> boolean: leur type est différent
// checkEq(5, ‘5’) ➞ false
// // number <> string: leur type est différent

// function checkEq(a, b) {
//   //== equal value, === equal value and type
//   if (a === b) {
//     console.log("Same value and type");
//   } else {
//     console.log("Not the same value and type");
//   }
// }

// Exercice 20:
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
// Exemple:
// isEmpty("1") ➞ false
// isEmpty("WayToLearnX") ➞ false
// isEmpty(" ") ➞ false
// isEmpty("") ➞ true

// Exercise 20:
// Create a function that returns TRUE if a string is empty and otherwise returns FALSE.
// Example:
// isEmpty ("1") ➞ false
// isEmpty ("WayToLearnX") ➞ false
// isEmpty ("") ➞ false
// isEmpty ("") ➞ true

// function isEmpty(str) {
//   if (str === "") {
//     return true;
//   } else {
//     return false;
//   }
// }
