/*
* @Author: SmallRed
* @Date:   2017-08-09 10:07:57
* @Last Modified by:   SmallRed
* @Last Modified time: 2017-08-09 10:08:43
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
		$('#nav ul li:nth-of-type(4)').addClass('nav_li');
	});	
})