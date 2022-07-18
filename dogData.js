// 3 
// Buat agar constant dog dapat diakses dari file berikut
import Dog from "./dog";
const dog = new Dog("Leo", 4, "Chihuahua");

export default dog; // mengekspor const dog agar bisa dipake di js lain 


// 4 

import Dog from "./dog";

// Ingatlah 2 constant dog1 dan dog2 dibawah ini
const dog1 = new Dog("Leo", 4, "Chihuahua");
const dog2 = new Dog("Ben", 2, "Poodle");

// Ubah code dibawah dan export constant dog1 dan dog2
export {dog1,dog2};
