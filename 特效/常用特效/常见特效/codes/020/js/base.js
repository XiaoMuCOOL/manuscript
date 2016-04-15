//--------------------------------------------------------------------------
//	Image onload cycle fade v0.01 Kirk Bentley
//--------------------------------------------------------------------------
//	Copyright 2005 Fyrebase.com
//
//	Original code: Richard Rutter
//	Copyright 2004 Clagnut.com
//--------------------------------------------------------------------------
var imgCycleCount	= 0;

function cycleFadeFn(imgTotal,idPrefix,endFn,arg0,arg1,arg2,arg3){
	imgCycleCount < imgTotal ? initImage(idPrefix + imgCycleCount,imgTotal,idPrefix):null;
}

function initImage(imageId,imgTotal,idPrefix){
	image				= document.getElementById(imageId);
	setOpacity(image, 0);
	image.style.visibility	= 'visible';
	fadeIn(imageId,0,imgTotal,idPrefix);
}

function setOpacity(obj,opacity){
	opacity			= (opacity == 100) ? 99.999:opacity;
	obj.style.filter		= "alpha(opacity:" + opacity + ")";
	obj.style.KHTMLOpacity	= opacity / 100;
	obj.style.MozOpacity	= opacity / 100;
	obj.style.opacity		= opacity / 100;
}

function fadeIn(objId,opacity,imgTotal,idPrefix){
	if (document.getElementById){
		obj = document.getElementById(objId);
		if (opacity <= 100) {
			setOpacity(obj,opacity);
			opacity	+= 10;
			window.setTimeout("fadeIn('" + objId + "'," + opacity + "," + imgTotal + ",'" + idPrefix + "')", 50);
		}else{
			obj.parentNode.parentNode.style.background	= '#222';
			imgCycleCount ++;
			cycleFadeFn(imgTotal,idPrefix);
		}
	}
}

//--------------------------------------------------------------------------
//	Movement Core v0.02 Kirk Bentley
//--------------------------------------------------------------------------
//	Copyright 2005 Fyrebase.com
//--------------------------------------------------------------------------
var moveAr = new Array(); //<-- Create storage for all animated objects.
	

moveFn	= function(el,speed,xPos,yPos,endFn,arg0){
	!endFn ? endFn = null:'';
	//alert(arg0);
	typeof(el) == 'string' ? el = document.getElementById(el):'';
	//--> Store currently animated object.
	if (el.moveIndex == null) { el.moveIndex = moveAr.length; }
	moveAr[el.moveIndex]	= el;
	//--> Convert speed scale to decimal.
	speed 			= '0.' + speed;
	//--> Call recal function.
	el.moveTimer ? clearTimeout(el.moveTimer):'';
	window.setTimeout('moveRecalFn(' + el.moveIndex + ',' + speed + ',' + xPos + ',' + yPos + ',' + endFn + ',' + arg0 + ')',0);
}

moveRecalFn	= function(moveIndex,speed,xPos,yPos,endFn,arg0){
	el		= moveAr[moveIndex];
	floatDisX	= Math.round(xPos - parseInt(el.offsetLeft));
	(parseInt(el.offsetLeft) < xPos) ? floatVelX = Math.ceil(floatDisX * speed):floatVelX = Math.floor(floatDisX * speed);
	el.style.left	= Math.ceil(parseInt(el.offsetLeft) + floatVelX) + 'px';
	floatDisY	= Math.round(yPos - parseInt(el.offsetTop));
	(parseInt(el.offsetTop) < yPos) ? floatVelY = Math.ceil(floatDisY * speed):floatVelY = Math.floor(floatDisY * speed);
	el.style.top	= Math.ceil(parseInt(el.offsetTop) + floatVelY) + 'px';
	el.moveTimer	= window.setTimeout('moveRecalFn(' + el.moveIndex + ',' + speed + ',' + xPos + ',' + yPos + ',' + endFn + ',' + arg0 + ')',40);
	if(floatDisX == 0 && floatDisY == 0){
		clearTimeout(el.moveTimer);
		el.moveTimer	= null;
		endFn ? endFn(arg0):'';
		//alert(arg0);
	}
}

getThumbsFn = function(){
	var img		= document.getElementsByTagName('img');
	var zoom	= document.getElementById('zoom');
	var y		= 0;
	for(var x = 0; x < img.length; x++){
		if(img[x].id && img[x].id.indexOf('zoom') != 0){
			img[x].num	= 0 - (432 * y);
			y++;
			 img[x].parentNode.onclick = function(){
				moveFn('zoom',2,0,this.firstChild.num,null);
				showAllFn(y)
			}
		}
	}
}

showAllFn	= function(tt){
	for(var x = 0; x < tt; x++){
		var zoomItem	= document.getElementById('zoom' + x);
		zoomItem.style.visibility	= 'visible';
	}
}

window.onload	= function(){
	cycleFadeFn(thumbCount,'thumb');
	getThumbsFn();
	var zLast	= document.getElementById('zoom' + (thumbCount - 1));
	zLast.setAttribute('onload',moveFn('zoom',2,0,0,showAllFn,thumbCount));
}