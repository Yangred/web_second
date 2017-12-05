/*
* @Author: SmallRed
* @Date:   2017-08-09 10:27:27
* @Last Modified by:   SmallRed
* @Last Modified time: 2017-08-09 10:27:34
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