function change() {
	if (document.title == "Welcome to www.adam-marsh.com") { (document.getElementById("splash").className = 'Current'); }
 	else if (document.title == "www.adam-marsh.com - JSP Demos 1") { (document.getElementById("jsp1").className = 'Current'); }
 	else if (document.title == "www.adam-marsh.com - JSP Demos 2") { (document.getElementById("jsp2").className = 'Current'); }
	else if (document.title == "www.adam-marsh.com - JSP Demos 3") { (document.getElementById("jsp3").className = 'Current'); }
 	else if (document.title == "www.adam-marsh.com - Contact") { (document.getElementById("contact").className = 'Current'); }
	else if (document.title == "www.adam-marsh.com - Database Demo") { (document.getElementById("jsp3").className = 'Current'); }
	else if (document.title == "www.adam-marsh.com - Articles and More") { (document.getElementById("more").className = 'Current'); }
 }
 function autotab(original, destination) {
	if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))destination.focus()
}
