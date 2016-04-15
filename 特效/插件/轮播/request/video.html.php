{template header} 
<title>无标题文档</title>
<link href="templates/default/css/style_inner.css" type="text/css" rel="stylesheet" />
<title>无标题文档</title>
<style type="text/css">

a{ color:#C8DCE5; }
h3{ margin: 10px 10px 0 10px; color:#FFF; font-size:14px; letter-spacing:-1px; font-weight: bold;  }


				

				
</style>
<script type="text/javascript" src="templates/default/js/jquery-1.9.0.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
	//Vertical Sliding
	$('.boxgrid.captionfull').hover(function(){
		$(".cover", this).stop().animate({top:'60px'},{queue:false,duration:160});
	}, function() {
		$(".cover", this).stop().animate({top:'120px'},{queue:false,duration:160});
	});
	//Caption Sliding (Partially Hidden to Visible)
});
</script>
</head>
</head>

<body class="meiti">
<div class="kuangjia_box">
	<div class="left">
        <div class="menu">
        	<a href="?picture.html">图片<span>+</span></a>
            <a href="?video.html" class="on">视频<span>+</span></a>
            <a href="?music.html">音乐<span>+</span></a>
            <a href="?mv.html">MV<span>+</span></a>
        </div>
    </div>
    <div class="right">
    	<div class="center_box photo_box">
        	<div class="meiti_photo_box">
        	<!--{block name="category" parameter="cachename/category/type/video/upid/0/limit/0,1000/tpl/data"}-->
        	<!--{loop $_SBLOCK[category] $key $val}--><div class="box_bg">
        	<!--{block name="video" parameter="cachename/video/catid/$val[catid]/limit/0,1/tpl/data"}-->
            
        		<div class="boxgrid captionfull">
	                <img src="$val[imgsrc]" />
	                <!--{if $_SBLOCK[video][0][vid]}-->
	                <a href="?videodetail/<!--{eval echo $_SBLOCK[video][0][vid]}-->.html">
	                <!--{else}-->
	                  <a href="javascript:;">
	                <!--{/if}-->
		                <div class="cover boxcaption">
							<h3>$val[name]</h3>
						</div>	
					</a>
                </div>
                </div> 
            <!--{/loop}-->           
            </div>
        </div>
        <input type="hidden" name="url" id="url" value="?meiti.html" />
    </div>
    
    
</div>
</body>
<script>
window.parent.window.showbtn();
</script>
</html>