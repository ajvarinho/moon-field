
const moonColor = document.getElementById('moon');
const moonBg = document.getElementById('moon_bg');

const moonBgColor = document.getElementById('background');

const moonShape = document.getElementById('shape');
const showShape = document.getElementById('show_shape');

const addWidth = document.getElementById('add_width');
const addHeight = document.getElementById('add_height');

const removeWidth = document.getElementById('remove_width');
const removeHeight = document.getElementById('remove_height');

const showWidth = document.getElementById('show_width');
const showHeight = document.getElementById('show_height');


/**
 * change height and width
 */

const MIN = 10;
const MAX = 300;
let currentWidth = 100;
let currentHeight = 100;

/**
 * update buttons
 */

function updateButtons() {
  addWidth.disabled = currentWidth >= MAX;
  removeWidth.disabled = currentWidth <= MIN;
  addHeight.disabled = currentHeight >= MAX;
  removeHeight.disabled = currentHeight <= MIN;
}

function addTen(event){

  let value = event.target.id;

  if(value === 'add_width'){
    currentWidth = Math.min(currentWidth + 10, MAX);
    showWidth.innerText = currentWidth;
    document.documentElement.style.setProperty('--moon-width', currentWidth + 'px');
  }

  if(value === 'add_height'){
    currentHeight = Math.min(currentHeight + 10, MAX);
    showHeight.innerText = currentHeight;
    document.documentElement.style.setProperty('--moon-height', currentHeight + 'px');
  }

  updateButtons();
}

function removeTen(event){

  let value = event.target.id;
  
  if(value === 'remove_width'){
    currentWidth = Math.min(currentWidth - 10, MAX);
    showWidth.innerText = currentWidth;
    document.documentElement.style.setProperty('--moon-width', currentWidth + 'px');
  }

  if(value === 'remove_height'){
    currentHeight = Math.min(currentHeight - 10, MAX);
    showHeight.innerText = currentHeight;
    document.documentElement.style.setProperty('--moon-height', currentHeight + 'px');
  }

  updateButtons();
}

/**
 * height and width event handlers
 */

addWidth.addEventListener('click', addTen);
addHeight.addEventListener('click', addTen);

removeWidth.addEventListener('click', removeTen);
removeHeight.addEventListener('click', removeTen);




const moons = document.querySelectorAll('.moon');

/**
 * toggle background
 */

moonBg.addEventListener("change", toggleMoonBg);


/**
 * change crescent color
 * @param {} event 
*/

moonColor.addEventListener("change", changeColor);

function changeColor(event) {
  let color = event.target.value;
  document.documentElement.style.setProperty('--moon-color', color);
}

/**
 * change moon background color
 */

moonBgColor.addEventListener("change", changeGradientColor);
function changeGradientColor(event) {
  let colorOne = event.target.value;
  document.documentElement.style.setProperty('--bg-color-1', colorOne);
}


/**
 * change radius - moon shape
 * @param {*} event 
*/

moonShape.addEventListener("change", changeShape)

function changeShape(event){
  let radiusCurve = event.target.value;
  showShape.innerText = radiusCurve;
  document.documentElement.style.setProperty('--moon-radius', radiusCurve + '%');
  if(radiusCurve <= 20){
    //finish
  }
}


/**
 * toggle background
*/

moonBg.addEventListener("change", toggleMoonBg);
const background = 'radial-gradient( circle at 72%, #4fe5db, #333 63%, #eee 0%, #333 0% )'

function toggleMoonBg(event){
  let isBg = event.target.checked;
  isBg ? document.documentElement.style.setProperty('--moon-bg', 'var(--radial-1)') :  document.documentElement.style.setProperty('--moon-bg', 'none');
}

/**
 * 
 */

moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
   element.classList.toggle('move')
  })
})