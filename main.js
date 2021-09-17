const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * .4 + "px";
})


const parallaxtwo = document.getElementById("parallaxtwo");
window.addEventListener("scroll", function()
{
	let offset = window.pageYOffset;
	parallaxtwo.style.backgroundPositionY = offset * .4 + "px";
})