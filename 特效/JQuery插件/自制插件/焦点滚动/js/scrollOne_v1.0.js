/*!
 * scrollOne v1.0
 * Author : 小牧COOL
 * Date : 2013-10-10
 * QQ : 895355044
 */

(function($) {       
	$.fn.scrollOne = function(options) {
		var defaults = {    
			//自动播放时间间隔
			timeNum : 3000,
			//每个DIV 的宽度 : 每张图片宽度 + 10 margin
			itemW : 142 + 10,
			//left的偏移量，当中图片距离前一张的偏移量
			leftOffset : -14,
			//自动播放 方向: "next" or "pre"
			autoDir : "next"
		  };
		var opts = $.extend(defaults, options);
		//自动播放时间间隔
		var timeNum = opts.timeNum;
		//每个DIV 的宽度 : 每张图片宽度 + 10 margin
		var itemW = opts.itemW;
		//left的偏移量，当中图片距离前一张的偏移量
		var leftOffset = opts.leftOffset;
		//自动播放 方向: "next" or "pre"
		var autoDir = opts.autoDir;

		var item = $("#items .item");
		var maxNum = item.length;
		var nowId = 0;
		var nowLeft = -10;
		var saveLeft = -10;
		//复制 功能
		$(item[item.length -2]).clone().addClass("itemPre").attr('id','cloneLast2').insertBefore(item.first());
		$(item[item.length -1]).clone().attr('id','cloneLast1').insertBefore(item.first());
		$(item[1]).clone().attr('id','cloneFirst2').insertAfter(item.last());
		$(item[0]).clone().removeClass("now").attr('id','cloneFirst1').insertAfter(item.last());

		//设置大图
		$(".now img").attr("src",$(".now img").attr("bigSrc"));

		function scrollOne(direction,thisId){
			var dir = direction?direction : "next"
			var thisId;
			//判断Now
			if(dir == "next"){
				thisId = thisId?thisId : nowId + 1;
				if(thisId > maxNum-1){
					thisId = 0;
					saveLeft = leftOffset - (itemW * -1);
				}else{
					saveLeft = nowLeft;
				}
			}else if(dir == "pre"){
				thisId = thisId?thisId : nowId - 1;
				if(thisId < 0){
					thisId = maxNum-1;
					saveLeft = leftOffset - (itemW * maxNum);
				}else{
					saveLeft = nowLeft;
				}
			};
			nowLeft = leftOffset - (itemW * thisId);
			//去掉 now , 改变 src
			var now = $(".now");
			var nowImg = $(".now img");
			var src = nowImg.attr("smallSrc");

			//动画效果
			$(item[nowId]).animate({"opacity":0.2},300,function(){
				//去掉 now , 改变 src
				now.removeClass("now");
				nowImg.attr("src",src);
				$(this).css("opacity","1");
				// 设置新的now
				$(item[thisId]).addClass("now");
				$(".now img").attr("src",$(".now img").attr("bigSrc")).css("opacity","0");
				$(".item").css({"left":saveLeft});
				$(".item").animate({"left":nowLeft},500,function(){
					$(".now img").animate({"opacity":1},200);
				});
			});
			nowId = thisId;
		}
		

		//点击事件
		$("#next").click(function(){
			//nextOne();
			scrollOne("next");
		});
		$("#pre").click(function(){
			//preOne();
			scrollOne("pre");
		});

		//自动播放
		var timer = setInterval(function(){
			scrollOne(autoDir);
		},timeNum);

		//鼠标事件
		$("#area").mouseenter(function(){
			//暂停自动播放
			clearInterval(timer);
			$("#pre").show();
			$("#next").show();
		}).mouseleave(function(){
			timer = setInterval(function(){
				scrollOne(autoDir);
			},timeNum);
			$("#pre").hide();
			$("#next").hide();
		});
	};     
})(jQuery);