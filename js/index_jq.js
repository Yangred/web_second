$(function() {
	var num = 0;
	var timer;
	$('#right_nav li').click(function(event) {
		num = $(this).index();
		$('#content').stop().animate({
			'top': -100 * num + 'vh'
		}, 500)
		$(this).addClass('active_right_nav').siblings('li').removeClass('active_right_nav')
		if(num===1){
				$('#page2_content_center li:nth-of-type(1)').animate({'top':'0px'},800);
				$('#page2_content_center li:nth-of-type(2)').animate({'top':'0px'},1000);
				$('#page2_content_center li:nth-of-type(3)').animate({'top':'0px'},1200);
				$('#page2_content_center li:nth-of-type(4)').animate({'top':'0px'},1400);
			}else{
				$('#page2_content_center li').css('top','410px');
			}
	});
	//滚轮
	$(document).mousewheel(function(e, d) {
		//向下滚动：d=-1 向上: d=1
		clearTimeout(timer);
		timer = setTimeout(function() {
			num = num - d;
			if(num > 5) {
				num = 5;
			}
			if(num===1){
				$('#page2_content_center li:nth-of-type(1)').animate({'top':'0px'},800);
				$('#page2_content_center li:nth-of-type(2)').animate({'top':'0px'},1000);
				$('#page2_content_center li:nth-of-type(3)').animate({'top':'0px'},1200);
				$('#page2_content_center li:nth-of-type(4)').animate({'top':'0px'},1400);
			}else{
				$('#page2_content_center li').css('top','410px');
			}
			if(num < 0) {
				num = 0;
			}
			$('#content').stop().animate({
				'top': -100 * num + 'vh'
			}, 500)
			$('#right_nav li').eq(num).addClass('active_right_nav').siblings('li').removeClass('active_right_nav')
		}, 200)
	})
	$('#page2_nav li').click(function(){
		$(this).addClass('page2_nav_active').siblings().removeClass('page2_nav_active');
	})
	$('#page2_nav').children('li:nth-of-type(1)').click(function(){
		$('#page2_content_center li').css('display','block');
	})
	$('#page2_nav').children('li:nth-of-type(2)').click(function(){
		$('#page2_content_center li:nth-of-type(1)').css('display','block').siblings('li').css('display','none');
	})
	$('#page2_nav').children('li:nth-of-type(3)').click(function(){
		$('#page2_content_center li:nth-of-type(2)').css('display','block').siblings('li').css('display','none');
	})
	$('#page2_nav').children('li:nth-of-type(4)').click(function(){
		$('#page2_content_center li:nth-of-type(3)').css('display','block').siblings('li').css('display','none');
	})
	$('#page2_nav').children('li:nth-of-type(5)').click(function(){
		$('#page2_content_center li:nth-of-type(4)').css('display','block').siblings('li').css('display','none');
	})
})