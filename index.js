const moons = document.querySelectorAll('.moon')


moons.forEach((element)=>{ element.addEventListener('mouseover', ()=> {
   element.classList.toggle('move')
  })
})