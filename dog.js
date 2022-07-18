// 1

class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya adalah seekor ${this.breed}`);
      
      console.log(`Saya berusia ${this.age} tahun`);
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    getHumanAge() {
        return this.age * 7;
      }
    }
    
//2 
// Import class Animal dibawah baris ini
import Animal from "./animal"; // memanggil kelas animal dari file animal js 

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya adalah seekor ${this.breed}`);
    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Export class Dog dibawah baris ini
export default Dog; // mekspor kelas dog supaya bisa dipakai di file lain 

// 6 
import chalk from "./chalk"
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    const humanAge = this.getHumanAge();
    
    this.greet();
    // Tulis ulang konten dari console.log menggunakan chalk
    console.log(`Nama saya adalah ${this.name}`);
    
    // Tulis ulang konten dari console.log menggunakan chalk
    console.log(`Saya adalah seekor ${this.breed}`);
    
    console.log(`Saya berusia ${this.age} tahun`);
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;