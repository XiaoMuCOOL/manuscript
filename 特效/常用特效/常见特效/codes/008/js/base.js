if(!ist) { var ist = []; }
/* --------------------------------------------------
	IE BackgroundImageCache
-------------------------------------------------- */
try{
	document.execCommand("BackgroundImageCache", false, true);
}
catch(err){}

/* --------------------------------------------------
	LOAD FUNCTION
-------------------------------------------------- */
(function($){
$(function(){
	ist.putUtilSwf('container');
	$('.imgover').hoverImg();
	$('a[href^="#"],area[href^="#"]').filter(function (i) {
		return $(this).parents('.tabTitle').length == 0;
	}).scrollFor();
	ist.stayGnav();
	ist.stayFollowNav();
});

$(window).load(function(){
	ist.alignBoxes();
});
})($jq['base']);

/* --------------------------------------------------
	STAY GLOBAL NAVIGATION
-------------------------------------------------- */
ist.stayGnav = function(){(function($){
	var suffix = '_s';
	var classList = [
		'^home$',
		'^group$',
		'^news$',
		'^ir$',
		'^csr$',
		'^rd$'
	];
	for(var i=0, n=classList.length; i<n; i++){
		var regObj = new RegExp(classList[i]);
		var stayString = '';
		$.each(document.body.className.split(' '), function(index, value){
			if(regObj.test(value)) {
				stayString = value;
			}
		});
		if(stayString != ''){
			var convertId = '#gNav' + stayString.charAt(0).toUpperCase() + stayString.substr(1);
			$(convertId).find('.imgover').attr('src', function(){
				var imgsrc = this.src;
				var dot = imgsrc.lastIndexOf('.');
				return imgsrc.substr(0, dot) + suffix + imgsrc.substr(dot);
			}).unbind('mouseenter').unbind('mouseleave');
		}
	}
})($jq['base'])};

/* --------------------------------------------------
	STAY FOLLOWING NAVIGATION
-------------------------------------------------- */
ist.stayFollowNav = function(){(function($){
	$('div.followingNav').each(function(){
		$(this).find('li').hoverElement({ hoverClass : 'followingPageListB_o' }).stayElement({
			'^followStay01$' : 0,
			'^followStay02$' : 1,
			'^followStay03$' : 2,
			'^followStay04$' : 3,
			'^followStay05$' : 4,
			'^followStay06$' : 5,
			'^followStay07$' : 6,
			'^followStay08$' : 7
		});
	});
})($jq['base'])};


/* --------------------------------------------------
	PUT UTILITY SWF
-------------------------------------------------- */
ist.putUtilSwf = function(elemId){(function($){
	if($.browser.msie){
		var imageId = 'utilImage';
		var imageBox = document.createElement('div');
		imageBox.id = imageId+'Box';
		imageBox.style.width = '1em';
		imageBox.style.height = '1em';
		imageBox.style.top = '0px';
		imageBox.style.left = '0px';
		imageBox.style.position = 'absolute';
		document.getElementById(elemId).appendChild(imageBox);
		imageBox.onresize = function(){ist.alignBoxes();};
	}else{
		var swfId = 'utilSwf';
		var swfBox = document.createElement('div');
		swfBox.id = swfId+'Box';
		swfBox.style.width = '1em';
		swfBox.style.height = '1em';
		swfBox.style.top = '0px';
		swfBox.style.left = '0px';
		swfBox.style.position = 'fixed';
		document.getElementById(elemId).appendChild(swfBox);
		var so = new SWFObject('/template/swf/onresize.swf', swfId, '100%', '100%', '8');
		so.addParam("wmode", "transparent");
		so.write(swfBox.id);
	}
})($jq['base'])};

/* --------------------------------------------------
	ALIGN BOXES HEIGHT
-------------------------------------------------- */
ist.alignBoxesSetting = function(wrapStr, boxStr){(function($){
	$(wrapStr).each(function(){
		var maxHeight = 0;
		var alignBox = $(this).find(boxStr);
		if($.browser.msie && Number($.browser.version) < 7) { alignBox.height('auto'); }
		else { alignBox.css('min-height', 0); }

		setTimeout(function(){
			for(var i=0; i<alignBox.length; i++){
				maxHeight = Math.max(maxHeight, alignBox.eq(i).height());	
			}
			if($.browser.msie && Number($.browser.version) < 7) { alignBox.height(maxHeight); }
			else { alignBox.css('min-height', maxHeight); }
		},1);
	});
})($jq['base'])};

ist.alignBoxes = function(){(function($){
	ist.alignBoxesSetting('div.boxFrameWrap', 'div.boxFrameA05');
	ist.alignBoxesSetting('div.categoryBoxFrame', 'div.h3FrameA03');
	ist.alignBoxesSetting('div.sizeBoxFrame', 'div.sizeBoxInner');
})($jq['base'])};



/* --------------------------------------------------
	RELATED INFO SLIDE PANELS
-------------------------------------------------- */
(function($){
$(function(){
	var currentPanelNum = 0;
	var openPanelNum = 0;
	var timer;
	var slideFunc = function(){
		if(currentPanelNum != openPanelNum) {
			var h = jqInfoText.eq(openPanelNum).outerHeight();
			var openPannel = jqWrapper.eq(openPanelNum);
			var closePannel = jqWrapper.eq(currentPanelNum);
			openPannel.animate({ height: h+'px' },'fast', function(){ openPannel.css('height', 'auto'); });
			closePannel.animate({ height: '0px' },'fast', function(){ closePannel.css('overflow', 'hidden'); });
		}
		currentPanelNum = openPanelNum;
	};
	var wrapper = document.createElement('div');
	wrapper.className = 'infoTextWrapper';
	var jqRelatedInfo = $('#relatedInfo');
	var jqInfoItem = jqRelatedInfo.find('.infoItem');
	var jqInfoText = jqInfoItem.find('.infoText').wrap(wrapper);
	var jqWrapper = jqInfoText.parent().css('overflow', 'hidden');
	jqInfoItem.eq(jqInfoItem.length-1).addClass('infoItemLast');
	jqWrapper.not(':eq('+currentPanelNum+')').css('height', '0px');
	jqInfoItem.css('cursor', 'pointer').hover(
		function(){
			openPanelNum = $('.infoItem').index(this);
			timer = setTimeout( slideFunc ,150);
		},
		function(){ clearTimeout(timer); }
	).click(function(){
		location.href = $(this).find('a').get(0).href;
	});
});
})($jq['base']);
