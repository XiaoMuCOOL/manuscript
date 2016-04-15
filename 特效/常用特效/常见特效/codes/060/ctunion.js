window.onresize = resize_wm;
window.onerror = function(){}

var divTop,divLeft,divWidth,divHeight,docHeight,docWidth,objTimer,mytm,i = 0;

function getMsg()
{
try
{
divTop = parseInt(document.getElementById("ctpop").style.top,10)
divLeft = parseInt(document.getElementById("ctpop").style.left,10)
divHeight = parseInt(document.getElementById("ctpop").offsetHeight,10)
divWidth = parseInt(document.getElementById("ctpop").offsetWidth,10)
docWidth = document.body.clientWidth;
docHeight = document.body.clientHeight;
document.getElementById("ctpop").style.top = parseInt(document.body.scrollTop,10) + docHeight + 10;// divHeight
document.getElementById("ctpop").style.left = parseInt(document.body.scrollLeft,10) + docWidth - divWidth
document.getElementById("ctbody").style.visibility="visible"
objTimer = window.setInterval("move_wm()",12)
autocls()
}
catch(e){}
}


function resize_wm()
{
i+=1
try
{
divHeight = parseInt(document.getElementById("ctpop").offsetHeight,10)
divWidth = parseInt(document.getElementById("ctpop").offsetWidth,10)
docWidth = document.body.clientWidth;
docHeight = document.body.clientHeight;
document.getElementById("ctpop").style.top = docHeight - divHeight + parseInt(document.body.scrollTop,10)
document.getElementById("ctpop").style.left = docWidth - divWidth + parseInt(document.body.scrollLeft,10)
}
catch(e){}
}


function move_wm()
{
try
{
if (parseInt(document.getElementById("ctpop").style.top,10) <= (docHeight - divHeight + parseInt(document.body.scrollTop,10)))
{
window.clearInterval(objTimer)
objTimer = window.setInterval("resize_wm()",1)
}
divTop = parseInt(document.getElementById("ctpop").style.top,10)
document.getElementById("ctpop").style.top = divTop - 1
}
catch(e){}
}

function close_wm()
{
document.getElementById('ctpop').style.visibility='hidden';
document.getElementById('ctbody').style.visibility='hidden';
document.getElementById('opwm').style.visibility='hidden';
if(objTimer) window.clearInterval(objTimer);
}

function mini_wm() 
{
document.getElementById('ctbody').style.visibility='hidden';
document.getElementById("opwm").style.visibility="visible";
}

function reop_wm(){
document.getElementById("opwm").style.visibility="hidden";
document.getElementById('ctbody').style.visibility='visible';
} 

function hold_wm()
{
if(mytm) clearTimeout(mytm);
}

function autocls()
{
mytm=setTimeout("mini_wm()",30000);
}





document.write("<DIV id=ctpop style='LEFT: 0px; VISIBILITY: visible; WIDTH: 306px; POSITION: absolute; TOP: 0px; HEIGHT: 206px;' onmouseover='hold_wm()' onmouseout='autocls()' oncontextmenu='self.event.returnValue=false'>");
document.write("<div id=opwm style='position:relative; VISIBILITY: hidden;left:0px; top:208px; height:26px; width:306px;'>");
document.write("<table style='width: 306px; height: 26px;border: 1px solid #999999;' cellspacing='0' cellpadding='0'>");
document.write("	<tr>");
document.write("		<td style='height: 26px;background-image: url(images/th_bg.gif);'><table width='306' height='26' border='0' cellpadding='0' cellspacing='0'>");
document.write("	<tr>");
document.write("		<td>");
document.write("			<img src='images/logo_tit.gif' width='260' height='26' onClick='reop_wm()' style='cursor:hand;'/></td>");
document.write("		<td width='16' height='26'></td>");
document.write("		<td width='50' height='26' style='text-align: center;'><table width='35' border='0' cellspacing='0' cellpadding='0'>");
document.write("              <tr>");
document.write("                <td><img src='images/open.gif' width='15' height='15' onClick='reop_wm()' style='cursor:hand;' alt='ʾ'/></td>");
document.write("                <td width='5'></td>");
document.write("                <td><img src='images/close.gif' width='15' height='15' onClick='close_wm()' style='cursor:hand;' alt='ر'/></td>");
document.write("              </tr>");
document.write("            </table></td>");
document.write("	</tr>");
document.write("</table>");
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");
document.write("<DIV id=ctbody style='LEFT: 0px; VISIBILITY: hidden; WIDTH: 306px; POSITION: relative; TOP: 0px; HEIGHT: 206px;'>");
document.write("<table style='width: 306px; height: 206px;border: 1px solid #999999;' cellspacing='0' cellpadding='0'>");
document.write("	<tr>");
document.write("		<td style='height: 26px;background-image: url(images/th_bg.gif);'><table width='306' height='26' border='0' cellpadding='0' cellspacing='0'>");
document.write("	<tr>");
document.write("		<td>");
document.write("			<a href='http://www.chinaz.com' target='_blank'><img src='images/logo_tit.gif' width='260' height='26' alt='' border='0'/></td>");
document.write("		<td width='16' height='26'></td>");
document.write("		<td width='50' height='26' style='text-align: center;'><table width='35' border='0' cellspacing='0' cellpadding='0'>");
document.write("              <tr>");
document.write("                <td><img src='images/mini.gif' width='15' height='15' onClick='mini_wm()' style='cursor:hand;' alt='С'/></td>");
document.write("                <td width='5'></td>");
document.write("                <td><img src='images/close.gif' width='15' height='15' onClick='close_wm()' style='cursor:hand;' alt='ر'/></td>");
document.write("              </tr>");
document.write("            </table></td>");
document.write("	</tr>");
document.write("</table>");
document.write("</td>");
document.write("	</tr>");
document.write("	<tr>");
document.write("		<td style='height: 180px;background-image: url(images/main_bg.gif);'><iframe src='wm.htm' width='306' height='180' target='_blank' allowTransparency='true' marginWidth='0' marginHeight='0' frameBorder='0' scrolling='no' ></iframe></td>");
document.write("	</tr>");
document.write("</table>");
document.write("</DIV>");
document.write("</DIV>");
setTimeout("getMsg();",3000);