

function ADSfull(){
if (IS_FULL && Fsrc.length!=0 && FStartTime.length==FEndTime.length && FEndTime.length==Fsrc.length && Fsrc.length==Fhref.length && IS_FULL)
{
	for(fulli=0;fulli<Fsrc.length;fulli++){
		var ST=new Date(FStartTime[fulli]);
		var ET=new Date(FEndTime[fulli]);
		var NT=new Date();
		if((ST<=ET)&&(NT<ET)&&(NT>=ST)){
		var OBJ=document.getElementById("fullscreenad");
			if(OBJ!=null){
				self.scroll(0,0);
				is_ad=true;
				OBJ.style.display="block";
				fulls="<a href='"+Fhref[fulli]+"' target='_blank'><img src='"+Fsrc[fulli]+"' border='0' width='750' height='450'></a>";
				//OBJ.innerHTML=GdmFull(Fsrc[fulli],750,450,Fhref[fulli]);
				OBJ.innerHTML=fulls;
				setTimeout("GdmFull_Close()",5000);
			}else{
				IS_FULL=0;
			}
		}
	}
	if(!is_ad)GdmFull_Close("fullscreenad");
}else{
IS_FULL=0;
}
}

function GdmFull(src,w,h,href){
var fulls="";
if(src.indexOf(".gif")!=-1||src.indexOf(".jpg")!=-1){
	fulls="<a href='"+href+"' target='_blank'><img src='"+src+"' border='0' width='"+w+"' height='"+h+"'></a>";
}
return fulls;
}
function GdmFull_Close(){
	document.getElementById('fullscreenad').style.display='none';
	IS_FULL=0;
}

 /**
  * @author [tom]tongjl@
  * @version v1.1.0
  * Date:2007-1-17
  */
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
var l=new RegExp(I+"=([^\\&]*)(\\&?)","i").exec(i);if(o.escapeIs){return unescape(RegExp.$1)}
return RegExp.$1},addParam:function(I,i){this.forSetAttribute(I,i)},getParam:function(){return this.forGetAttribute(name)},write:function(i){var I=this;if(typeof i=="string"){tom.$(i).innerHTML=I.getFlashHtml()}else if(typeof i=="object"){i.innerHTML=I.getFlashHtml()}}}
	
var IS_FULL=1;//1是有全屏，0是没有全屏
var is_ad=false;
var FStartTime=new Array();
var FEndTime=new Array();
var Fsrc=new Array();
var Fhref=new Array();


ADSfull();

//对联
var dl_src1 = "flash/100x300.swf";
var dl_src2 = "flash/100x300.swf";
var dl_img = "flash/chinaz.swf";
var dl_height=300;
var dl_top=5;

 /**
  * @author [tom]tongjl@
  * @version v1.1.7
  * Date:2007-1-8 2007-1-22
  */
var __Agt = navigator.userAgent.toLowerCase();
var __If  = /(firefox|netscape|opera).?[\/| ](.)\.([^;\)]+|[^\)]+\))$/.exec(__Agt);
if(!__If) __If = /(msie) (.)\.[^;]+;/.exec(__Agt);
var _Br=__If[1], _Ver=__If[2];
var isie=(navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion)>=4)?true:false;
var bwy = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;
/*判断cookie是否开启*/
var cookieEnabled=(navigator.cookieEnabled)? true : false;
var ISplay=0;var ISclose;
var _CE=document.all?1:(document.getElementById?0:-1);
var _DIV="TOMGD";
var rtime1=null,rtime2=null,dltime1=null;
document.write("<div id='"+_DIV+"'></div>");
var LMTname=(typeof(LMT_name)=="undefined" || LMT_name=='' || LMT_name=='fk')?"TOMAD_FK":"TOMAD_LMT";
function ISsc (_oid){
	return ( eval(_oid)=='' || eval(_oid).match(/\.(jpg|swf|gif)$/i) == null)?false:true;
}
//var ISDrag=(typeof(_swf_src_)=="undefined")?false:true;
//ISDrag=(ISDrag)?ISsc('_swf_src_'):false;
var ISlmt=(typeof(lmt_src)=="undefined")?false:true;
ISlmt=(ISlmt)?ISsc('lmt_src'):false;
var ISdl=(typeof(dl_src1)=="undefined")?false:true;
ISdl=(ISdl)?ISsc('dl_src1'):false;
var ISfloatR=(typeof(float_rightSrc)=="undefined")?false:true;
ISfloatR=(ISfloatR)?ISsc('float_rightSrc'):false;
var ISfloatL=(typeof(float_leftSrc)=="undefined")?false:true;
ISfloatL=(ISfloatL)?ISsc('float_leftSrc'):false;
var ISkhb=(typeof(khb_src)=="undefined")?false:true;
ISkhb=(ISkhb)?ISsc('khb_src'):false;
var ISpop=(typeof(pop_src)=="undefined")?false:true;
ISpop=(ISpop)?ISsc('pop_src'):false;

var IsRePlay = (typeof(RePlayId)=="undefined" || RePlayId=="" || RePlayId!="dl")?false:true;
var IsDlPlay = (typeof(dl_img)=="undefined" || dl_img=="")?false:true;
var replay_left="<td style='text-align:center;padding-top:3px' bgcolor='#ffffff'><a href='#' onclick='javascript:ShowLMT();return false;' style='font-size:12px;color:#000000;text-decoration:none;line-height:130%'>重 播</a></td>";
var replay_right="<td style='text-align:center;padding-top:3px; bgcolor='#ffffff'><a href='#' onclick='javascript:ShowLMT();return false;' style='font-size:12px;color:#000000;text-decoration:none;line-height:130%'>流 媒 体 重 播</a></td>";

if (ISkhb)WritePOP('khb');

/*cookie star*/

function getCookie(name)    
{
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}
function setCookie(name, value)
{	
	var cookie = name + "=" + value ;		
	document.cookie = cookie+";path=/";
}

function setCookie (name, value) { 
	var argv = setCookie.arguments; 
	var argc = setCookie.arguments.length; 
	var expires = (argc > 2) ? argv[2] : null; 
	var path = (argc > 3) ? argv[3] : null; 
	var domain = (argc > 4) ? argv[4] : null; 
	var secure = (argc > 5) ? argv[5] : false; 
	document.cookie = name + "=" + escape (value) + 
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
	((path == null) ? "" : ("; path=" + path)) + 
	((domain == null) ? "" : ("; domain=" + domain)) + 
	((secure == true) ? "; secure" : "");
}

function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


/*设置cookies时间,自己根据情况设置*/

function checkCookie(count_str,ckhour){
	var expDays = 1;
	var expHour=ckhour;
	var exp = new Date();
	exp.setTime(exp.getTime() + (expDays*expHour*60*60*1000));
	if (expHour==0) return 1;
	var count = getCookie(count_str); /*同一ip只显示一次*/
	if(count == null) {
		setCookie(count_str,'1');
		return 1;
	}else{
		var newcount = parseInt(count) + 1;
		if(newcount<2) count=1;
		setCookie(count_str,newcount,exp);
		return newcount;
	}
}

/*cookie end*/

function WriteDiv(_ID,a,s){
	var _obj=document.getElementById(_ID);
	if(_obj==null){
		_obj=document.createElement("div");
		_obj.id=_ID;
		//_obj.name=_ID;
		if(_CE==1)document.getElementById(_DIV).insertAdjacentElement("beforeBegin",_obj);
		else document.getElementById(_DIV).insertBefore(_obj,null);
	}

	_obj.innerHTML=a;
	/*
	if (_ID=='Float_left' || _ID=='Float_right'){
		_obj.style.left=-80;
		_obj.style.top=-80;
	}
	*/
	_obj.style.display=s;
	_obj.style.position='absolute';
	//_obj.style.index=99;
}

function ShowLMT(){
	var ltime=9000;
	clearTimeout(rtime1);
	clearTimeout(rtime2);
	if (ISclose=='left' && ISfloatL)document.getElementById('Float_left').style.display='none';
	if (ISclose=='right' && ISfloatR)document.getElementById('Float_right').style.display='none';
	WriteLmt(LMTname);
	if (LMTname=='TOMAD_LMT') ltime=8000;
	rtime1=setTimeout("CloseLMT()",parseInt(ltime));
	document.getElementById('TOMAD_LMT').style.display='block';
	document.getElementById('lmtplay').Play();	
}
function CloseLMT(){
	var OBJ=document.getElementById('TOMAD_LMT');
	if(OBJ)OBJ.style.display='none';
	if (ISclose=='left' && ISfloatL)ShowOBJ('Float_left');
	if (ISclose=='right' && ISfloatR)ShowOBJ('Float_right');
	clearTimeout(rtime1);
	clearTimeout(rtime2);
	if(OBJ)OBJ.removeNode(true);
}

function CloseFLOAT(_ID){
	var OBJ=document.getElementById(_ID);
	if(OBJ)OBJ.style.display="none";
}

function ShowOBJ(_ID){
	var OBJ=document.getElementById(_ID);
	if(OBJ)OBJ.style.display="block";
}

function lmtplay_DoFSCommand(command, args){CloseLMT();}	
function dlplay_DoFSCommand(command, args){CloseDL();}	

function ShowDL(_n){
	WriteDL();
	if (_n==1){
		var duiliantime=5000;
		dltime1=setTimeout("CloseDL()",parseInt(duiliantime));
	}
//the_timeout = setTimeout("alert('3');", 3000);
	document.getElementById('dl_left').style.display="block";
	document.getElementById('dl_left').style.top=dl_top+"px";
	document.getElementById('dl_left').style.left=0+"px";
	document.getElementById('dl_right').style.display="block";
	document.getElementById('dl_right').style.top=dl_top+"px";
	document.getElementById('dl_right').style.right=0+"px";
	if (IsDlPlay){
	document.getElementById('dl_releft').style.display="none";
	document.getElementById('dl_reright').style.display="none";
	}
}

function CloseDL1(){alert('weewwe');}
function CloseDL(){
	document.getElementById('dl_left').style.display='none';
	document.getElementById('dl_right').style.display='none';
	clearTimeout(dltime1);
	if (IsDlPlay){
	document.getElementById('dl_releft').style.display='block';
	document.getElementById('dl_reright').style.display='block';
	document.getElementById('dl_releft').style.top=dl_top+"px";
	document.getElementById('dl_releft').style.left=0+"px";
	document.getElementById('dl_reright').style.top=dl_top+"px";
	document.getElementById('dl_reright').style.right=0+"px";
	}
	
	var OBJ=document.getElementById('dl_left');
	if(OBJ)OBJ.removeNode(true);
	var OBJ=document.getElementById('dl_right');
	if(OBJ)OBJ.removeNode(true);
}

function CheckPOP(_NAME){
	return (_NAME.match(/\.(jpg|gif)$/i) != null)?false:true;
}


function Div_SWF (Dname,Fname,Fsrc,Furl,Fclose,Fxs){
	var s="<table border='0' cellpadding='0' cellspacing='0' background=red><tr><td>";
	/*
	if(Fsrc.indexOf(".swf")!=-1){
		s+="<div id='"+Fname+"'></div>";
	}else{
		s+="<a href='" + Furl + "' target = '_blank'><img src='" + Fsrc + "' WIDTH='20' HEIGHT='100' border = '0'></a>";
	}
	*/
	s+=Fclose+"</td></tr></table>";
	WriteDiv(Dname,s,Fxs);
	if(Fsrc.indexOf(".swf")!=-1){
		var objFlash = new TomFlash(Fsrc, ""+Fname+"_swf", "20", "220", "7", "");
		objFlash.addParam("quality", "high");
		objFlash.addParam("wmode", "opaque");
		objFlash.write(Fname);
	}
}


function WriteDL()
{
	var dl_top=5;var RP_left="";var RP_right="";
	var h=(typeof(dl_height)=="undefined")?300:parseInt(dl_height);
	var src1=dl_src1;
	var src2=dl_src2;
	var resrc = dl_img;
	if (IsRePlay){
		RP_left=replay_left;
		RP_right=replay_right;
	}else{
		RP_left="";RP_right="";
	}
	if(window.screen.width>=1024){	
		WriteDiv('dl_left','<div id="dl_leftflash"></div><table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style="padding-top:0px;padding-left:2px;" align=left><a href="#" onclick="javascript:CloseDL();return false;" style="font-size:12px;color:#000000;text-decoration:none;;line-height:130%">关闭</a></td>'+RP_left+'</tr></table>','block');
		var duilian_Left = new TomFlash(src1, "tomdlleft", "100", h, "7", "", false, "High");
		duilian_Left.addParam("wmode", "opaque");
		duilian_Left.write("dl_leftflash");

		WriteDiv('dl_right','<div id="dl_rightflash"></div><table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr>'+RP_right+'<td align=right style="padding-top:0px;padding-right:0px;"><a href="#" onclick="javascript:CloseDL();return false;" style="font-size:12px;color:#000000;text-decoration:none;line-height:130%">关闭</a></td></tr></table>','block');
		var duilian_Right = new TomFlash(src2, "tomdlright", "100", h, "7","", false, "High");
		duilian_Right.addParam("wmode", "opaque");
		duilian_Right.write("dl_rightflash");


		if (IsDlPlay){
			WriteDiv('dl_releft','<div id="dl_releftflash"></div><table width="20" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style=\'text-align:center;padding-top:3px;\' bgcolor=\'#ffffff\'><a href=\'#\' onclick=\'javascript:ShowDL();return false;\' style=\'font-size:12px;color:#000000;text-decoration:none;line-height:130%\'>重 播</a></td></tr></table>','none');
			var duilian_Left = new TomFlash(resrc, "tomdl_rel", "20", h, "7", "", false, "High");
			duilian_Left.addParam("wmode", "opaque");
			duilian_Left.write("dl_releftflash");

			WriteDiv('dl_reright','<div id="dl_rerightflash"></div><table width="20" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0"><tr><td style=\'text-align:center;padding-top:3px;\' bgcolor=\'#ffffff\'><a href=\'#\' onclick=\'javascript:ShowDL();return false;\' style=\'font-size:12px;color:#000000;text-decoration:none;line-height:130%\'>重 播</a></td></tr></table>','none');
			var duilian_Right = new TomFlash(resrc, "tomdl_rer", "20", h, "7","", false, "High");
			duilian_Right.addParam("wmode", "opaque");
			duilian_Right.write("dl_rerightflash");
		}

		
	}

}

function WriteFloat(){
	var t_l='';var t_r='';var isxs_l='block';;var isxs_r='block';
	if (typeof(LMT_replay)=="undefined" || LMT_replay==''){t_l='';t_r='';}
	else if (LMT_replay=='left' && ISfloatL && ISlmt && !IsRePlay) 
	{
		ISclose='left';
		t_l=replay_left;
		if (ISplay)isxs_l='none';
	}
	else if (LMT_replay=='right' && ISfloatR && ISlmt && !IsRePlay) 
	{
		ISclose='right';
		t_r=replay_right;
		if (ISplay)isxs_r='none';
	}
	else {t_l='';t_r='';}
	
	if (ISfloatL)
	{
		if (float_leftSrc.match(/\.(jpg|swf|gif)$/i) != null)
		{
		var float_close="</td></tr><table width='20' bgcolor='#ffffff' border='0' cellpadding='0' cellspacing='0'><tr>"+t_l+"</tr></table>";
		Div_SWF('Float_left','left_float',float_leftSrc,float_leftHref,float_close,isxs_l);
		}
	}
	if (ISfloatR)
	{
		if (float_rightSrc.match(/\.(jpg|swf|gif)$/i) != null)
		{
		var float_close="</td></tr><table width='20' bgcolor='#cccccc' border='0' cellpadding='0' cellspacing='0'><tr>"+t_r+"</tr></table>";
		Div_SWF('Float_right','right_float',float_rightSrc,float_rightHref,float_close,isxs_r);
		}
	}
	window.setInterval("FLOAT_position()",400);
	//alert(document.getElementById("Float_right"));

}

function FLOAT_position(){
	var OBJ_Left=document.getElementById("Float_left");
	var OBJ_Right=document.getElementById("Float_right");
	//var a=120;
	//var b=105;
	//var a=43;
	var a=(typeof document.body.style.maxHeight != "undefined" )?23:43;
	var b=90;
	if (_Br == "opera") b = 802;
	if(isie || _Br == "opera"){
		if(OBJ_Left){
			OBJ_Left.style.top=bwy.scrollTop+bwy.offsetHeight-b+"px";
			OBJ_Left.style.left=bwy.scrollLeft+20+"px";
		}	
		if(OBJ_Right){
			OBJ_Right.style.top=bwy.scrollTop+bwy.offsetHeight-b+"px";
			OBJ_Right.style.left=bwy.scrollLeft+bwy.offsetWidth-a+"px";
		}
	}else{
		if(OBJ_Left){
			OBJ_Left.style.top=parseInt(0.75*(parseInt(bwy.scrollTop)+parseInt(bwy.clientHeight)-b))+"pt";
			OBJ_Left.style.left=parseInt(0.75*(parseInt(bwy.scrollLeft)+20))+"pt";
		}	
		if(OBJ_Right){
			OBJ_Right.style.top=parseInt(0.75*(parseInt(bwy.scrollTop)+parseInt(bwy.clientHeight)-b))+"pt";
			OBJ_Right.style.left=parseInt(0.75*(parseInt(bwy.scrollLeft)+parseInt(bwy.clientWidth)-a+3))+"pt";
		}
	}
}


function WritePOP(_ID){
	var Ln='|';
	if (_ID=='khb')
	{
		kurl=khb_url.replace(/\#/g,"＃")
		if (CheckPOP(khb_src))var Purl="khb"+Ln+"swf"+Ln+khb_src+Ln+kurl+Ln+Math.random();
		else var Purl="khb"+Ln+"img"+Ln+khb_src+Ln+kurl+Ln+Math.random();
		ISkhb=0;
		var ad_khb = open("http://ad.tom.com/app/khb_ent.html?"+Purl+"", "tomkhb_ent", "width=0,height=0,top=4000,left=3000,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no");
	}else{
		purl=pop_url.replace(/\#/g,"＃")
		if (CheckPOP(pop_src))var Purl="pop"+Ln+"swf"+Ln+pop_src+Ln+purl+Ln+Math.random();
		else var Purl="pop"+Ln+"img"+Ln+pop_src+Ln+purl+Ln+Math.random();
		ISpop=0;
		var ad_pop = open("http://ad.tom.com/app/pop_ent.html?"+Purl+"", "tompop_ent", "left=0,top=0,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,width=360,height=300");
	}
}

function WriteLmt(obj){
	var Lobj=document.getElementById(obj);
	var w=(typeof(FK_width)=="undefined")?610:parseInt(FK_width);
	var h=(typeof(FK_height)=="undefined")?300:parseInt(FK_height);
	var a=document.body.clientWidth/2-(w/2);
	var b=FK_top;var bgcor;
	if (obj=='TOMAD_LMT'){
		/*
		w=200;h=200;
		a=document.body.clientWidth/2-(w/2);
		b=LMT_top;
		*/
		w=200;h=200;
		a=document.body.clientWidth/2+275;
		b=LMT_top;
	}

	var s='<div id="tomlmt"  style="position:absolute;z-index:2;"></div>';
	s+='<table width="'+w+'" '+bgcor+' border="0" cellpadding="0" cellspacing="0" style="position:absolute;z-index:99; top:'+h+'px;">';
	s+="<tr><td align='center' style='padding-top:2px;padding-left:5px;'><a href='#' onclick='javascript:CloseLMT();return false;' style='font-size:12px;color:#000000;text-decoration:none;font-weight:bold;'>关 闭</a></td></tr></table>";
	WriteDiv('TOMAD_LMT',s,'none');
	document.getElementById("TOMAD_LMT").style.top=b+"px";
	document.getElementById("TOMAD_LMT").style.left=a+"px";

	var FlashLmt = new TomFlash( lmt_src , "lmtplay", w, h, "7", "", false, "High");
	if (parseInt(LMT_transparent)==1){
		FlashLmt.addParam("wmode", "transparent");
	}
	FlashLmt.write("tomlmt");
	rtime2=setInterval("OBJ_position('"+obj+"')",400);
}

function OBJ_position(obj){
	/*默认疯狂广告*/
	var w=(typeof(FK_width)=="undefined")?610:parseInt(FK_width);
	var Lobj=document.getElementById('TOMAD_LMT');
	var a=bwy.clientWidth/2-(w/2)-bwy.scrollLeft;
	var b=bwy.clientHeight-FK_top;

	if (obj=='TOMAD_LMT')
	{
		/*
		var w=200;
		var a=bwy.clientWidth/2-(w/2);
		var b=bwy.clientHeight-LMT_top;
		*/
		var a=bwy.clientWidth/2+275;
		var b=bwy.clientHeight-LMT_top;
	}

	if(isie){
		Lobj.style.top=parseInt((parseInt(bwy.scrollTop)+parseInt(bwy.clientHeight)-b))+"px";
		Lobj.style.left=parseInt((parseInt(bwy.scrollLeft)+a))+"px";
	}else{
		Lobj.style.top=parseInt(0.75*(parseInt(bwy.scrollTop)+parseInt(bwy.clientHeight)-b))+"pt";
		Lobj.style.left=parseInt(0.75*(parseInt(bwy.scrollLeft)+a))+"pt";
	}
}

function initad(){
	var cookiehour=parseInt((typeof(LMT_CookieHour)=="undefined"  || LMT_CookieHour=='') ? 24:parseInt(LMT_CookieHour));

	var LMTCookie=(typeof(LMT_CookieHour)=="undefined" || LMT_CookieHour=='')?false:true;
	
	if (ISpop)WritePOP('pop');
	if (ISdl)ShowDL(1);
	//if (ISDrag)ShowDragObj();
	if (ISfloatR || ISfloatL)WriteFloat();
	
	if (ISlmt){
		if (LMTCookie && LMTname=='TOMAD_FK')
		{
			var CookieLmt; 
			var S=checkCookie("TOM_" + document.URL,cookiehour);
			if(S==1 && cookieEnabled) {ShowLMT();ISplay=1;
			}else {CloseLMT();ISplay=0;}
		}else {ShowLMT();}
	}else{ISplay=0;}

	

}

function PushAD(){
	var htime;
	if (IS_FULL || typeof(IS_FULL)=="undefined"){
		htime=setTimeout("PushAD()",1000);
	}else {
		clearTimeout(htime);
		initad();
	}
}

PushAD();

