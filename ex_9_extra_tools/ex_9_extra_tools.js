const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p') 

p.style.color = "green";

p.style.fontSize = '50px';

// regular
console.log("hello")

// interpolated
console.log("hello im a %s string! ", "¿")

// styled
console.log('%c I am some great text', 'font-size: 50px; background:red ; text-shadow: 10px 10px 0 blue')

//warning !
console.warn("NOESS")

// error :/
console.error("Shit!")

// Information
console.info("Crocodiles eats 3-4 people a day")

// Testing
console.assert(1 === 2, 'That is wrong!');
const p2 = document.querySelector('p');
console.assert(p2.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// viewing dom Elements  
console.log(p)
console.dir(p)

// Grouping together 
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})
// Counting
console.count('Wes')
console.count('Lord')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Lord')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

// table

console.table(dogs)




