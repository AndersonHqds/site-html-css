document.addEventListener("DOMContentLoaded", function(event){
	//alert(screen.height);
	const headerSize = document.getElementById('header').clientHeight;
	alert(headerSize);
	document.getElementById('container-background').style.height = (window.innerHeight - headerSize) + "px";
});