const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates-list');
const items = JSON.parse(localStorage.getItem('items')) || []
// what it will do is, it will try 1st to set the 1st option, if cant, try the 2nd.
// OP ..

// LISTENING ON SUBMIT



function addItem(e) {
  e.preventDefault() // prevents the page to refresh
  console.log("Hello")

  // THIS RIGHT HERE IS MINDBLOWING TO ME
  const text = this.querySelector('[name=item]').value
  // why can we do this.querySelector
  // mindblowing also gets by name
  const item = {
    text: text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  // 1st use of local storage
  // 1st parameter is key, my local storage will be named "items" here
  // 2nd parameter, the data, must be a STRING !!
  // 3rd OP: convert object into JSON string equivalent
  localStorage.setItem('items', JSON.stringify(items))
  let test = localStorage.getItem('items')
  console.log(test) // note it returns a string

  this.reset() // resets the form after submit, kinda OP
}

// default to "nothing" if we type nothing
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    // ${plate.done? 'checked' : ''}
    // depends on plate to be done or not to return the checkbox default checked
    // kinda smart and kinda short
    return `
      <li> 
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}

function toggleDone(e) { // il passe pas l'event dans le call, par contre il le recupere 
  if (!e.target.matches('input')) return; // skip this unless its an input
  console.log(e.target)

  const el = e.target

  // USE OF DATASET OP MINDBLOWING
  console.log(el.dataset.index)

  const index = el.dataset.index;
  items[index].done = !items[index].done // the opposite because its a boolean
  // if its true, then it's false, if its false then if true

  // and then do the same trick with Local localStorage
  localStorage.setItem('items', JSON.stringify(items))
}

// next time I'll write my code sequences in the bottom
addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)



// pour la checkbox, la garder apres le localstorage