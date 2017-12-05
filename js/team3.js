/*
* @Author: SmallRed
* @Date:   2017-08-06 14:05:34
* @Last Modified by:   SmallRed
* @Last Modified time: 2017-08-06 14:05:57
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
		$('#nav ul li:nth-of-type(1)').addClass('nav_li');
	});	
})