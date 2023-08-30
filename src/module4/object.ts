//Class
class Animal {
  name: string;
  species: string;
  sound: string;

  //Constractor
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  //function
  makeSound() {
    console.log(`The ${this.name} says ${this.sound} `);
  }
}
//intents
const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
dog.makeSound();
