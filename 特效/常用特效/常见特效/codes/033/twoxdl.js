
var bdy1601 = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;
function ADSfull1601(){
if (IS_FULL1601 && Fsrc1601.length!=0 && FStartTime1601.length==FEndTime1601.length && FEndTime1601.length==Fsrc1601.length && Fsrc1601.length==Fhref1601.length && IS_FULL1601)
{
	for(fulli=0;fulli<Fsrc1601.length;fulli++){
		var ST1601=new Date(FStartTime1601[fulli]);
		var ET1601=new Date(FEndTime1601[fulli]);
		var NT1601=new Date();
		if((ST1601<=ET1601)&&(NT1601<ET1601)&&(NT1601>=ST1601)){
		var OBJ1601=document.getElementById("fullscreenad");
			if(OBJ1601!=null){
				self.scroll(0,0);
				is_ad1601=true;
				OBJ1601.style.display="block";
				fulls="<a href='"+Fhref1601[fulli]+"' target='_blank'><img src='"+Fsrc1601[fulli]+"' border='0' width='750' height='450'></a>";
				OBJ1601.innerHTML=fulls;
				setTimeout("GdmFull_Close1601()",10000);
			}else{
				IS_FULL1601=0;
			}
		}
	}
	if(!is_ad1601)GdmFull_Close1601("fullscreenad");
}else{
IS_FULL1601=0;
}
}
if(typeof(tom)!="object"){var tom={}}
tom.$=function(objId){if(!objId){throw new Error("tom.$(String objId)参数必须")}
if(document.getElementById){return eval('document.getElementById("'+objId+'")')}else if(document.layers){return eval("document.layers['"+objId+"']")}else{return eval('document.all.'+objId)}}
TomFlash=function(C,v,x,V,c,X,i,O,I,l,o){var z=this;if(!document.createElement||!document.getElementById){return}
z.id=v?v:"";z.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";z.codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+(c?c:"7")+",0,0,0";z.width=x;z.height=V;z.movie=C;z.bgcolor=X?X:null;z.quality=O?O:"high";z.src=z.movie;z.pluginspage="http://www.macromedia.com/go/getflashplayer";z.type="application/x-shockwave-flash";z.useExpressInstall=i?i:null;z.xir=(I)?I:window.location;z.redirectUrl=l?l:null;z.detectKey=o?o:null;z.escapeIs=false;z.objAttrs={};z.params={};z.flashVars=[];z.flashVarsStr="";z.embedAttrs={};z.forSetAttribute("id",z.id);z.objAttrs["classid"]=z.classid;z.forSetAttribute("codebase",z.codebase);z.forSetAttribute("width",z.width);z.forSetAttribute("height",z.height);z.forSetAttribute("movie",z.movie);z.forSetAttribute("quality",z.quality);z.forSetAttribute("pluginspage",z.pluginspage);z.forSetAttribute("type",z.type);z.forSetAttribute("bgcolor",z.bgcolor)}
TomFlash.prototype={getFlashHtml:function(){var I=this,i='<object ';for(var l in I.objAttrs){i+=l+'="'+I.objAttrs[l]+'" '}
i+='>';for(var l in I.params){i+='<param name="'+l+'" value="'+I.params[l]+'" /> '}
if(I.flashVarsStr!=""){i+='<param name="FlashVars" value="'+I.flashVarsStr+'" /> '}
i+='<embed ';for(var l in I.embedAttrs){i+=l+'="'+I.embedAttrs[l]+'" '}
i+=' ></embed></object>';return i},forSetAttribute:function(I,i){var l=this;I=I.toLowerCase();switch(I){case "classid":break;case "pluginspage":l.embedAttrs["pluginspage"]=i;break;case "src":l.embedAttrs["src"]=i;l.params["movie"]=i;break;case "movie":l.params["movie"]=i;l.embedAttrs["src"]=i;break;case "onafterupdate":case "onbeforeupdate":case "onblur":case "oncellchange":case "onclick":case "ondblClick":case "ondrag":case "ondragend":case "ondragenter":case "ondragleave":case "ondragover":case "ondrop":case "onfinish":case "onfocus":case "onhelp":case "onmousedown":case "onmouseup":case "onmouseover":case "onmousemove":case "onmouseout":case "onkeypress":case "onkeydown":case "onkeyup":case "onload":case "onlosecapture":case "onpropertychange":case "onreadystatechange":case "onrowsdelete":case "onrowenter":case "onrowexit":case "onrowsinserted":case "onstart":case "onscroll":case "onbeforeeditfocus":case "onactivate":case "onbeforedeactivate":case "ondeactivate":case "type":l.embedAttrs["type"]=i;break;case "codebase":l.objAttrs["codebase"]=i;break;case "width":l.objAttrs["width"]=i;l.embedAttrs["width"]=i;break;case "height":l.objAttrs["height"]=i;l.embedAttrs["height"]=i;break;case "align":l.objAttrs["align"]=i;l.embedAttrs["align"]=i;break;case "vspace":l.objAttrs["vspace"]=i;l.embedAttrs["vspace"]=i;break;case "hspace":l.objAttrs["hspace"]=i;l.embedAttrs["hspace"]=i;break;case "class":l.objAttrs["class"]=i;l.embedAttrs["class"]=i;break;case "title":l.objAttrs["title"]=i;break;case "accesskey":l.objAttrs["accesskey"]=i;break;case "name":l.objAttrs["name"]=i;l.embedAttrs["name"]=i;break;case "id":l.objAttrs["id"]=i;l.embedAttrs["name"]=i;break;case "tabindex":l.objAttrs["tabindex"]=i;break;default:l.params[I]=l.embedAttrs[I]=i}},forGetAttribute:function(i){var I=this;i=i.toLowerCase();if(I.objAttrs[i]!=undefined){return I.objAttrs[i]}else if(I.embedAttrs[i]!=undefined){return I.embedAttrs[i]}else if(I.embedAttrs!=undefined){return I.embedAttrs[i]}else{return null}},setAttribute:function(I,i){this.forSetAttribute(I,i)},getAttribute:function(i){return this.forGetAttribute(i)},addVariable:function(I,i){var l=this;if(l.escapeIs){I=escape(I);i=escape(i)}
if(l.flashVarsStr==""){l.flashVarsStr=I+"="+i}else{l.flashVarsStr+="&"+I+"="+i}
l.embedAttrs["FlashVars"]=l.flashVarsStr},getVariable:function(I){var o=this,i=o.flashVarsStr;if(o.escapeIs){I=escape(I)}
var l=new RegExp(I+"=([^\&]*)(\&?)","i").exec(i);if(o.escapeIs){return unescape(RegExp.$1)}
return RegExp.$1},addParam:function(I,i){this.forSetAttribute(I,i)},getParam:function(){return this.forGetAttribute(name)},write:function(i){var I=this;if(typeof i=="string"){tom.$(i).innerHTML=I.getFlashHtml()}else if(typeof i=="object"){i.innerHTML=I.getFlashHtml()}}}
var IS_FULL1601=1;//1是有全屏，0是没有全屏
var is_ad1601=false;
var FStartTime1601=new Array();
var FEndTime1601=new Array();
var Fsrc1601=new Array();
var Fhref1601=new Array();
ADSfull1601();
//对联
var dl_src11601 = "images/l.swf";
var dl_src21601 = "images/r.swf";
var dl_img1601 = "images/b.swf";
var dl_img21601 = "images/b.swf";
var dl_height1601=300;
var dl_top1601=5;
var __Agt1601 = navigator.userAgent.toLowerCase();
var __If1601  = /(firefox|netscape|opera).?[\/| ](.)\.([^;\)]+|[^\)]+\))$/.exec(__Agt1601);
if(!__If1601) __If1601 =  /(msie) (.)\.[^;]+;/.exec(__Agt1601);
var _Br1601=__If1601[1], _Ver=__If1601[2];
var isie1601=(navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion)>=4)?true:false;
var bwy1601 = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;
/*判断cookie是否开启*/
var cookieEnabled1601=(navigator.cookieEnabled1601)? true : false;
var ISplay1601=0;var ISclose;
var _CE1601=document.all?1:(document.getElementById?0:-1);
var _DIV1601="TOMGD";
var rtime11601=null,rtime21601=null,dltime11601=null;
document.write("<div id='"+_DIV1601+"'></div>");
var LMTname1601=(typeof(LMT_name)=="undefined" || LMT_name=='' || LMT_name=='fk')?"TOMAD_FK":"TOMAD_LMT";
function ISsc1601 (_oid){
	return ( eval(_oid)=='' || eval(_oid).match(/\.(jpg|swf|gif)$/i) == null)?false:true;
}
var ISlmt1601=(typeof(lmt_src)=="undefined")?false:true;
ISlmt1601=(ISlmt1601)?ISsc1601('lmt_src'):false;
var ISdl1601=(typeof(dl_src11601)=="undefined")?false:true;
ISdl1601=(ISdl1601)?ISsc1601('dl_src11601'):false;
var ISfloatR1601=(typeof(float_rightSrc)=="undefined")?false:true;
ISfloatR1601=(ISfloatR1601)?ISsc1601('float_rightSrc'):false;
var ISfloatL1601=(typeof(float_leftSrc)=="undefined")?false:true;
ISfloatL1601=(ISfloatL1601)?ISsc1601('float_leftSrc'):false;
var ISkhb1601=(typeof(khb_src)=="undefined")?false:true;
ISkhb1601=(ISkhb1601)?ISsc1601('khb_src'):false;
var ISpop1601=(typeof(pop_src)=="undefined")?false:true;
ISpop1601=(ISpop1601)?ISsc1601('pop_src'):false;
var IsRePlay1601 = (typeof(RePlayId)=="undefined" || RePlayId=="" || RePlayId!="dl")?false:true;
var IsDlPlay1601 = (typeof(dl_img1601)=="undefined" || dl_img1601=="")?false:true;
var replay_left1601="<td style='text-align:center;padding-top:3px' bgcolor='#ffffff'><a href='#' onclick='javascript:ShowLMT1601();return false;' style='font-size:12px;color:#000000;text-decoration:none;line-height:130%'>重 播</a></td>";
var replay_right1601="<td style='text-align:center;padding-top:3px; bgcolor='#ffffff'><a href='#' onclick='javascript:ShowLMT1601();return false;' style='font-size:12px;color:#000000;text-decoration:none;line-height:130%'>流 媒 体 重 播</a></td>";
if (ISkhb1601)WritePOP('khb');
function WriteDiv1601(_ID,a,s){
	var _obj1601=document.getElementById(_ID);
	if(_obj1601==null){
		_obj1601=document.createElement("div");
		_obj1601.id=_ID;
		if(_CE1601==1)document.getElementById(_DIV1601).insertAdjacentElement("beforeBegin",_obj1601);
		else document.getElementById(_DIV1601).insertBefore(_obj1601,null);
	}
	_obj1601.innerHTML=a;
	_obj1601.style.display=s;
	_obj1601.style.position='absolute';
}
function ShowLMT1601(){
	var ltime=9000;
	clearTimeout(rtime11601);
	clearTimeout(rtime21601);
	if (ISclose=='left' && ISfloatL1601)document.getElementById('Float_left').style.display='none';
	if (ISclose=='right' && ISfloatR1601)document.getElementById('Float_right').style.display='none';
	WriteLmt(LMTname1601);
	if (LMTname1601=='TOMAD_LMT') ltime=8000;
	rtime11601=setTimeout("CloseLMT1601()",parseInt(ltime));
	document.getElementById('TOMAD_LMT').style.display='block';
	document.getElementById('lmtplay').Play();	
}
function CloseLMT1601(){
	var OBJ1601=document.getElementById('TOMAD_LMT');
	if(OBJ1601)OBJ1601.style.display='none';
	if (ISclose=='left' && ISfloatL1601)ShowOBJ1601('Float_left');
	if (ISclose=='right' && ISfloatR1601)ShowOBJ1601('Float_right');
	clearTimeout(rtime11601);
	clearTimeout(rtime21601);
	if(OBJ1601)OBJ1601.removeNode(true);
}
function CloseLMT1601(_ID){
	var OBJ1601=document.getElementById(_ID);
	if(OBJ1601)OBJ1601.style.display="none";
}
function ShowOBJ1601(_ID){
	var OBJ1601=document.getElementById(_ID);
	if(OBJ1601)OBJ1601.style.display="block";
}
function ShowDL1601(_n){
	WriteDL1601();
	if (_n==1){
		var duiliantime=25000;
		dltime11601=setTimeout("CloseDL1601()",parseInt(duiliantime));
	}
	document.getElementById('dl_left1601').style.display="block";
	document.getElementById('dl_left1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
	document.getElementById('dl_left1601').style.left=0+"px";
	document.getElementById('dl_right1601').style.display="block";
	document.getElementById('dl_right1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
	document.getElementById('dl_right1601').style.right=0+"px";
	if (IsDlPlay1601){
	document.getElementById('dl_releft1601').style.display="none";
	document.getElementById('dl_reright1601').style.display="none";
	}
  window.setInterval("dl_Load21601()",1); 
}
function CloseDL11601(){alert('weewwe');}
function CloseDL1601(){
	document.getElementById('dl_left1601').style.display='none';
	document.getElementById('dl_right1601').style.display='none';
	clearTimeout(dltime11601);
	if (IsDlPlay1601){
	document.getElementById('dl_releft1601').style.display='block';
	document.getElementById('dl_reright1601').style.display='block';
	document.getElementById('dl_releft1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
	document.getElementById('dl_releft1601').style.left=0+"px";
	document.getElementById('dl_reright1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
	document.getElementById('dl_reright1601').style.right=0+"px";
setTimeout("dl_Load1601()", 50);
	}
}
function dl_Load21601()
{
    document.getElementById('dl_left1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
    document.getElementById('dl_left1601').style.left=0+"px";
    document.getElementById('dl_right1601').style.top=bdy1601.scrollTop + dl_top1601 +"px";
    document.getElementById('dl_right1601').style.right = 0+"px";
}
function dl_Load1601()
{
document.getElementById('dl_releft1601').style.top=bdy1601.scrollTop+dl_top1601+"px";
document.getElementById('dl_releft1601').style.left=0+"px";
document.getElementById('dl_reright1601').style.top=bdy1601.scrollTop + dl_top1601 +"px";
document.getElementById('dl_reright1601').style.right = 0+"px";
}
window.onscroll=dl_Load1601;
window.onresize=dl_Load1601;
function WriteDL1601()
{
	var dl_top1601=5;var RP_left="";var RP_right="";
	var h=(typeof(dl_height1601)=="undefined")?300:parseInt(dl_height1601);
	var src11601=dl_src11601;
	var src21601=dl_src21601;
	var resrc1601 = dl_img1601;
	var resrc21601 = dl_img21601;
	if (IsRePlay1601){
		RP_left=replay_left1601;
		RP_right=replay_right1601;
	}else{
		RP_left="";RP_right="";
	}
	if(window.screen.width>=1024){	
		WriteDiv1601('dl_left1601','<div id="dl_leftflash1601"></div><table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style="padding-top:0px;padding-left:2px;" align=left><a href="#" onclick="javascript:CloseDL1601();return false;" style="font-size:12px;color:#000000;text-decoration:none;;line-height:130%">关闭</a></td>'+RP_left+'</tr></table>','block');
		var duilian_Left1601 = new TomFlash(src11601, "tomdlleft", "100", h, "7", "", false, "High");
		duilian_Left1601.write("dl_leftflash1601");
		WriteDiv1601('dl_right1601','<div id="dl_rightflash1601"></div><table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr>'+RP_right+'<td align=right style="padding-top:0px;padding-right:0px;"><a href="#" onclick="javascript:CloseDL1601();return false;" style="font-size:12px;color:#000000;text-decoration:none;line-height:130%">关闭</a></td></tr></table>','block');
		var duilian_Right1601 = new TomFlash(src21601, "tomdlright", "100", h, "7","", false, "High");
		duilian_Right1601.addParam("wmode", "opaque");
		duilian_Right1601.write("dl_rightflash1601");
		if (IsDlPlay1601){
			WriteDiv1601('dl_releft1601','<div id="dl_releftflash1601"></div><table width="25" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style="text-align:center;padding-top:3px;" bgcolor="#ffffff"><a href="#" onclick="javascript:ShowDL1601();return false;" style="font-size:12px;color:#000000;text-decoration:none;line-height:130%">重播</a></td></tr></table>','none');
			var duilian_Left1601 = new TomFlash(resrc1601, "tomdl_rel", "25", h, "7", "", false, "High");
			duilian_Left1601.addParam("wmode", "opaque");
			duilian_Left1601.write("dl_releftflash1601");
			WriteDiv1601('dl_reright1601','<div id="dl_rerightflash1601"></div><table width="25" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style="text-align:center;padding-top:3px;" bgcolor="#ffffff"><a href="#" onclick="javascript:ShowDL1601();return false;" style="font-size:12px;color:#000000;text-decoration:none;line-height:130%">重播</a></td></tr></table>','none');
			var duilian_Right1601 = new TomFlash(resrc21601, "tomdl_rer", "25", h, "7","", false, "High");
			duilian_Right1601.addParam("wmode", "opaque");
			duilian_Right1601.write("dl_rerightflash1601");
		}
	}
}
function initad1601(){
	var cookiehour1601=parseInt((typeof(LMT_CookieHour)=="undefined"  || LMT_CookieHour=='') ? 24:parseInt(LMT_CookieHour));
	var LMTCookie1601=(typeof(LMT_CookieHour)=="undefined" || LMT_CookieHour=='')?false:true;
	if (ISpop1601)WritePOP('pop');
	if (ISdl1601)ShowDL1601(1);
	if (ISfloatR1601 || ISfloatL1601)WriteFloat();
	if (ISlmt1601){
		if (LMTCookie1601 && LMTname1601=='TOMAD_FK')
		{
			var CookieLmt; 
			var S1601=checkCookie("TOM_" + document.URL,cookiehour1601);
			if(S1601==1 && cookieEnabled1601) {ShowLMT1601();ISplay1601=1;
			}else {CloseLMT1601();ISplay1601=0;}
		}else {ShowLMT1601();}
	}else{ISplay1601=0;}
}
function PushAD1601(){
	var htime;
	if (IS_FULL1601 || typeof(IS_FULL1601)=="undefined"){
		htime=setTimeout("PushAD1601()",1000);
	}else {
		clearTimeout(htime);
		initad1601();
	}
}
//============广告过期============================
function compace(EndTime)
{
if(EndTime !='')	
{
now=new Date();//取得当前时间		
var StartTime=now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+'';
if(Comtime(StartTime,EndTime) ==1)
{
	//alert('到期');		
	dw('Overdue');
 checkOverdueAd('1601','321');
}
else
{
	//alert('没到期！');
	dw('NotOverdue');

}
}
else 
{
	dw('NotOverdue');
}
}
function Comtime(Start,End)
{
if((new Date(Start.replace(/-/g,'\/')))  > (new Date( End.replace(/-/g,'\/')))) 
{	
	return   1;   
}
if((new Date(Start.replace(/-/g,'\/')))   <  (new Date( End.replace(/-/g,'\/')))) 
{ 	
	return   -1;  
} 
 }
compace('');
function dw(dt)
{
    if(dt=='Overdue')
    {
        //PushAD1601();
    }
    else
    {
        PushAD1601();
    }
}
