var bg = document.getElementById("bg-image");
var windowWidth = window.innerWidth/3;
var windowHeight = window.innerHeight/3;

bg.addEventListener('mousemove', (event)=>{
	var mouseX = event.clientX/windowWidth;
	var mouseY = event.clientY/windowHeight;
	bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});