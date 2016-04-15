$(function () {
	if (Modernizr.borderradius) {
		alert('浏览器 有 borderradius 属性');
	}else{
		alert('浏览器 没有 borderradius 属性');
		Modernizr.load('js/ex.js');
	}
});