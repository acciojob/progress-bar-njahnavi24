//your JS code here. If required.
let i = 0
let circles = document.querySelectorAll('.circle')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

next.addEventListener("click",()=>{
	circles[i].classList.remove('active')
	i--
	next.disabled = false

	if(i === 0) prev.disabled = true
})

prev.addEventListener("click",()=>{
	i++
	circles[i].classList.add('active')
	prev.disabled = false

	if(i === 4) next.disabled = true
})
