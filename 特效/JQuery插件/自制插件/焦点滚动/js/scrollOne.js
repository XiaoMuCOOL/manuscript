/*!
 * scrollOne v3.0
 * Author : 小牧COOL
 * Date : 2013-10-18
 * QQ : 895355044
 */

(function($) {       
	$.fn.scrollOne = function(options) {
		var defaults = {    
			//自动播放时间间隔
			timeNum : 3000,
			//每个DIV 的宽度 : 每张图片宽度 + 10 margin
			itemW : 142 + 10,
			//图片框架路径
			bgImgSrc : "img/case_web.png",
			//自动播放 方向: "next" or "pre"
			autoDir : "next"
		  };
		var opts = $.extend(defaults, options);
		//自动播放时间间隔
		var timeNum = opts.timeNum;
		//每个DIV 的宽度 : 每张图片宽度 + 10 margin
		var itemW = opts.itemW;
		//left的偏移量，程序 自动获取了！！
		var leftOffset = 0;
		//自动播放 方向: "next" or "pre"
		var autoDir = opts.autoDir;

		var item = $("#items .item");
		var maxNum = item.length;
		var nowId = 0;
		var nowLeft = -10;
		var saveLeft = -10;
		var bgLeft = 0;
		var bgTop = 0;
		// 优化点击过快 造成的问题
		var isFinish = true;
		//复制 功能
		$(item[item.length -4]).clone().attr('i',item.length-4).attr('id','clonePre'+(item.length-4)).insertBefore(item.first());
		$(item[item.length -3]).clone().attr('i',item.length-3).attr('id','clonePre'+(item.length-3)).insertBefore(item.first());
		$(item[item.length -2]).clone().attr('i',item.length-2).attr('id','clonePre'+(item.length-2)).insertBefore(item.first());
		$(item[item.length -1]).clone().attr('i',item.length-1).attr('id','clonePre'+(item.length-1)).insertBefore(item.first());
		$(item[3]).clone().attr('i','3').attr('id','cloneNext3').insertAfter(item.last());
		$(item[2]).clone().attr('i','2').attr('id','cloneNext2').insertAfter(item.last());
		$(item[1]).clone().attr('i','1').attr('id','cloneNext1').insertAfter(item.last());
		$(item[0]).clone().attr('i','0').removeClass("now").attr('id','cloneNext0').insertAfter(item.last());
		//设置背景图居中
		//document.getElementById("bgImg").onload = function(){
		var bgImg = document.getElementById("bgImg");
		function setImgSize(){
			var isFirst = true;
			bgLeft = ($("#area").width() - $("#bgImg").width())/2;
			bgTop = ($("#area").height() - $("#bgImg").height())/2;
			$("#bgImg").css({
				left : bgLeft,
				top : bgTop
			});
			//设置大图
			var nowImg = $(".now img").attr("src",$(".now img").attr("bigSrc"));
			$(".now .title").fadeIn(200);
			nowImg[0].onload = function(){
				if(isFirst){
					leftOffset = ($("#area").width() - nowImg.width())/2 - ((itemW * 4) + 33);
					$("#area .item").css({left:leftOffset});
					isFirst = false;
				}
			}
		}
		bgImg.onload = function(){
			setImgSize();
		}
		window.onresize = function(){
			bgLeft = ($("#area").width() - $("#bgImg").width())/2;
			bgTop = ($("#area").height() - $("#bgImg").height())/2;
			$("#bgImg").css({
				left : bgLeft,
				top : bgTop
			});
			var nowImg = $(".now img").attr("src",$(".now img").attr("bigSrc"));
			leftOffset = ($("#area").width() - nowImg.width())/2 - ((itemW * 4) + 33);
			var leftResize = leftOffset - (itemW * nowId);
			$("#area .item").css({left:leftResize});
		}
		bgImg.src = opts.bgImgSrc;
		


		function scrollOne(direction,thisId){
			var dir = direction?direction : "next"
			var thisId;
			//判断Now
			if(dir == "next"){
				thisId = thisId != undefined?thisId : nowId + 1;
				if(thisId > maxNum-1){
					thisId = 0;
					saveLeft = leftOffset - (itemW * -1);
				}else{
					saveLeft = leftOffset - (itemW * (thisId-1));
					//saveLeft = nowLeft;
				}
			}else if(dir == "pre"){
				thisId = thisId != undefined?thisId : nowId - 1;

				if(thisId < 0){
					thisId = maxNum-1;
					saveLeft = leftOffset - (itemW * maxNum);
				}else{
					saveLeft = leftOffset - (itemW * (parseInt(thisId) +1));
					//saveLeft = nowLeft;
				}
			};
			nowLeft = leftOffset - (itemW * thisId);
			//去掉 now , 改变 src
			var now = $(".now");
			var nowImg = $(".now img");
			var src = nowImg.attr("smallSrc");
			$(".now .title").fadeOut(200);
			//动画效果
			$(item[nowId]).animate({"opacity":0.2},300,function(){
				//去掉 now , 改变 src
				now.removeClass("now");
				nowImg.attr("src",src);
				$(this).css("opacity","1");
				// 设置新的now
				$(item[thisId]).addClass("now");
				$(".now img").css("opacity","0").attr("src",$(".now img").attr("bigSrc"));
				$(".item").css({"left":saveLeft});
				$(".item").animate({"left":nowLeft},300,function(){
					$(".now img").animate({"opacity":1},100);
					$(".now .title").fadeIn(100);
				});
			});
			nowId = thisId;
		}
		// 每个图篇的单击事件
		item.each(function(i){
			$(this).click(function(){
				if(isFinish){
					isFinish = false;
					if(i < nowId){
						scrollOne("pre",i);
					}else{
						scrollOne("next",i);
					}
					setTimeout(function(){
						isFinish = true;
					},1000);
				}
			});
		});
		for(var i=0;i<4;i++){
			$("#cloneNext"+i).click(function(){
				var j = $(this).attr("i");
				if(j == 0){
					j= maxNum;
				}
				if(isFinish){
					isFinish = false;
					scrollOne("next",j);
					setTimeout(function(){
						isFinish = true;
					},1000);
				}
			});
		}
		for(var i=(maxNum-1);i>(maxNum-5);i--){
			$("#clonePre"+i).click(function(){
				var j = $(this).attr("i");
				if(j == (maxNum-1)){
					j= -1;
				}
				if(isFinish){
					isFinish = false;
					scrollOne("pre",j);
					setTimeout(function(){
						isFinish = true;
					},1000);
				}
			});
		}

		//点击事件
		$("#next").click(function(){
			//nextOne();
			if(isFinish){
				isFinish = false;
				scrollOne("next");
				setTimeout(function(){
					isFinish = true;
				},1000);
			}
		});
		$("#pre").click(function(){
			//preOne();
			if(isFinish){
				isFinish = false;
				scrollOne("pre");
				setTimeout(function(){
					isFinish = true;
				},1000);
			}
		});

		//自动播放
		var timer = setInterval(function(){
			scrollOne(autoDir);
		},timeNum);

		//鼠标事件
		$("#area").mouseenter(function(){
			//暂停自动播放
			clearInterval(timer);
			$("#pre").fadeIn(300);
			$("#next").fadeIn(300);
		}).mouseleave(function(){
			timer = setInterval(function(){
				scrollOne(autoDir);
			},timeNum);
			$("#pre").fadeOut(300);
			$("#next").fadeOut(300);
		});
		//鼠标事件
		$(".item").mouseenter(function(){
			if($(this).hasClass("now")){
				$(".now .mask").fadeIn(300);
			}
		});
		$(".item").mouseleave(function(){
			$(".mask").fadeOut(200);
		});
	};     
})(jQuery);