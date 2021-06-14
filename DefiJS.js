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
