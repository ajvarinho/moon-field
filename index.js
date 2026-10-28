
const moonColor = document.getElementById('moon');
const moonBg = document.getElementById('moon_bg');
const moons = document.querySelectorAll('.moon');

moonColor.addEventListener("change", changeColor);
moonBg.addEventListener("change", toggleMoonBg);

function changeColor(event) {
  let color = event.target.value;
  document.documentElement.style.setProperty('--moon-color', color);
}

const background = 'radial-gradient( circle at 72%, #4fe5db, #333 63%, #eee 0%, #333 0% )'

function toggleMoonBg(event){
  let isBg = event.target.checked;
  isBg ? document.documentElement.style.setProperty('--moon-bg', 'var(--radial-1)') :  document.documentElement.style.setProperty('--moon-bg', 'none');
}

moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
   element.classList.toggle('move')
  })
})