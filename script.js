//your JS code here. If required.
let i = 1
let circles = document.querySelectorAll('.circle')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

next.addEventListener("click",()=>{
	circles[i-1].classList.remove('active')
	i++
	circles[i-1].classList.add('active')
	prev.disabled = false

	if(i === 5) next.disabled = true
})

prev.addEventListener("click",()=>{
	circles[i-1].classList.remove('active')
	i--
	circles[i-1].classList.add('active')
	next.disabled = false

	if(i === 1) prev.disabled = true
})