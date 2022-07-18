//1 
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();

//2 
import Dog from "./dog"; // mengimport class dog dr file dog.js

const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();

// 3 
import dog from "./dogData";
dog.info();

// 4 
// Tulis ulang code dibawah and import constant dog1 dan dog2
import {dog1,dog2} from "./dogData";

// Salin code di jendela instruksi dan tulis ulang constant dog1 dan dog2 agar dapat dicetak
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();
