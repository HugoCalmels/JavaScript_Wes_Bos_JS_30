console.log('hello from js variables')


const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.name)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate)
  input.addEventListener('mousemove', handleUpdate)
})