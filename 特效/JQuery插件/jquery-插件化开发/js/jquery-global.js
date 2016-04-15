//1.1 添加一个新的全局函数
jQuery.foo=function() {   
		alert('最简单的全局函数添加');
	};    
//1.2 增加多个全局函数 
//1.3 使用jQuery.extend(object);
jQuery.extend({
	bar : function(){
		alert('使用JQuery的extend方法添加全局函数');
	},
	bar2 : function(parm){
		alert('使用JQuery的extend方法添加多个全局函数，并带参数：' + parm);
	}
});
//1.4 使用命名空间
jQuery.global={
	foo : function() {   
		alert('使用了自定义命名空间的全局函数');
	}
}
jQuery.global.foo2 = function() {   
		alert('使用了自定义命名空间的全局函数2');
	};