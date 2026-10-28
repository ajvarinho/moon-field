
const moonColor = document.getElementById('moon');
const moons = document.querySelectorAll('.moon')

moonColor.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  let color = event.target.value;
  document.documentElement.style.setProperty('--moon-color', color);
}

moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
   element.classList.toggle('move')
  })
})