//your JS code here. If required.
let i = 0
let circles = document.querySelectorAll('.circle')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

next.addEventListener("click",()=>{
	if(i < circles.length-1){
	circles[i].classList.remove('active')
	i++
	circles[i].classList.add('active')
	prev.disabled = false

	if(i === circles.length - 1) next.disabled = true
	}
})

prev.addEventListener("click",()=>{
	if(i > 0){
	circles[i].classList.remove('active')
	i--
	circles[i].classList.add('active')
	next.disabled = false

	if(i === 0) prev.disabled = true
	}
})