//形式一
/*(function($) {       
	$.fn.pluginName = function() {     
	     // Our plugin implementation code goes here.     
	};     
})(jQuery);*/
//形式二
/*(function($){     
	$.fn.extend({     
		pluginName:function(opt,callback){     
		          // Our plugin implementation code goes here.       
		}     
	})     
})(jQuery);*/

(function($) {       
	$.fn.object = function(options) {
		var defaults = {    
			id : "btn1",
		    width : 500,    
		    height : 500,
		    color : "red"    
		  };
		var opts = $.extend(defaults, options);
		// var opts = $.extend({}, defaults, options||{});
		var $this = $(this);
		this.width(opts.width);
		this.height(opts.height);
		this.css({
			background : opts.color
		});
		$("#" + opts.id).click(function(){
			alert(opts.width + ":" + opts.height + ":" + opts.color)
		});
	};     
})(jQuery);