// const myPets = [
//   {
//     name: 'Max',
//     age: 3,
//     type: 'dog',
//     toys:['ball', 'frisbee','bone'],
//     isFluffy: false
//   },
//   {
//     name: 'Luna',
//     age: 2,
//     type:'cat',
//     toys:['catnip','ball','mouse'],
//     isFluffy: true
//   },

// ]

// console.clear();
// console.log(myPets[0].isFluffy);


class Dog {
  status  = 'healthy';
  wow = 'Strelka';
  constructor(name, age, isFluffy) {
    this.name = name;
    this.age = age;
    this.isFluffy = isFluffy;
    this.wow = 'WOW'
    this.age = 18;
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

const cosmosDog = new Dog('Cosmos', 3, false);
console.clear();
console.log(cosmosDog);
cosmosDog.play();