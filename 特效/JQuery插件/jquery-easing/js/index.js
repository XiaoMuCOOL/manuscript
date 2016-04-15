$(function() {
	//$.easing.def="easeOutBounce";
	$.easing.def="easeInOutElastic";
	$("#btnOpen").click(function(){
		$("#box").toggle(2000);
		//$.easing.def="";
	})
	$("#box").slideUp({
		duration: 1000, 
		easing: "easeOutBounce", 
		complete: function(){
			//alert('slideUp事件，easeOutBounce效果 完成');
		}
	});
	$("#btnAnimate").click(function(){
		$("#box").animate({
			left: 500,
			top: [200,"swing"]
			},5000,"easeOutBounce",function(){
				$("#box").animate({
					left: 0,
					top: 0
					},1000,"linear");
			});
	});

});