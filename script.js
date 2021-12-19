/*Shows or hides menu-selector*/
function menu_selector() {
	if (document.getElementById('menu-selector').style.visibility != "visible") {		
		document.getElementById('menu-selector').style.transform = "translateX(0px)";
		document.getElementById('show-menu').style.transform = "translateX(133.5px)";
		document.getElementById('show-menu').style.border = "0px solid white";
		document.getElementById('show-menu').style.backgroundImage = "url('images/icons/close_icon.png')";
		document.getElementById('show-menu').style.backdropFilter = "none";
		document.getElementById('menu-selector').style.visibility = "visible";
	} else {
		document.getElementById('show-menu').style.border = "1px solid white";
		document.getElementById('show-menu').style.backgroundImage = "url('images/icons/menu_icon.png')";
		document.getElementById('menu-selector').style.transform = "translateX(-300px)";
		document.getElementById('show-menu').style.transform = "translateX(0px)";
		document.getElementById('show-menu').style.backdropFilter = "blur(3.5px)";
		document.getElementById('menu-selector').style.visibility = "hidden";
	}
}

/*Reloads index page*/
function reload_page() {
	window.location.href = 'index.html';
}
