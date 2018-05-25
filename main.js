var but = document.getElementById('but');
var im = document.getElementById('im');
var	count = 1;
but.onclick = function(){
	im.setAttribute("src","img/"+ count+".jpg");
	count++;
	if (count == 3) {
		count =0;
	}

}