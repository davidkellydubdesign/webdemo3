var elem = document.getElementById("changeme");



function sub(){
	var result = document.getElementById("data").value
	elem.innerHTML+="<br>" + result;
	document.getElementById("data").value = "";
	
}