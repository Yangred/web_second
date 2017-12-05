/*
* @Author: SmallRed
* @Date:   2017-08-06 13:51:42
* @Last Modified by:   SmallRed
* @Last Modified time: 2017-08-06 13:52:52
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