/*
* @Author: SmallRed
* @Date:   2017-08-05 14:19:41
* @Last Modified by:   SmallRed
* @Last Modified time: 2017-08-05 16:59:58
*/

'use strict';
$(function(){
	$('#nav ul li').mousemove(function(event) {
		/* Act on the event */
		$(this).addClass('nav_li').siblings('li').removeClass('nav_li');
	})
	$('#nav ul li').mouseout(function(event) {
		/* Act on the event */
		$(this).removeClass('nav_li');
		$('#nav ul li:nth-of-type(2)').addClass('nav_li');
	});	
})
