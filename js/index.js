window.onload = function() {
	var tBanner = document.getElementById('banner');
	var tBanner_ul = tBanner.getElementsByTagName('ul')[0];
	var tBanner_bottom = document.getElementById('banner_bottom');
	var tBanner_bottom_li = tBanner_bottom.getElementsByTagName('li');

	for(var i = 0; i < tBanner_bottom_li.length; i++) {
		tBanner_bottom_li[i].index = i;
		tBanner_bottom_li[i].onclick = function() {
			for(var i = 0; i < tBanner_bottom_li.length; i++) {
				tBanner_bottom_li[i].className = '';
			}
			this.className = 'active_banner';
			tBanner_ul.style.left = this.index * -100 + 'vw';
			num = this.index;
		}
	}

	var num = 0;
	s_right.onclick = function() {
		num++;
		tBanner_ul.style.left = -num * 100 + 'vw';
		if(num > 3) {
			tBanner_ul.style.transition = "0s";
			tBanner_ul.style.left = "0px";
			num = 1;
			setTimeout(function() {
				tBanner_ul.style.transition = "0.5s";
				tBanner_ul.style.left = num * -100 + "vw";
			}, 15)
		} else {
			tBanner_ul.style.transition = "0.5s";
			tBanner_ul.style.left = num * -100 + "vw";
		}

		for(var j = 0; j < tBanner_bottom_li.length; j++) {
			tBanner_bottom_li[j].className = '';
		}
		if(num > 2) {
			tBanner_bottom_li[0].className = 'active_banner';
		} else {
			tBanner_bottom_li[num].className = 'active_banner';
		}
	}

	s_left.onclick = function() {
		num--;
		if(num < 0) {
			tBanner_ul.style.transition = "0s";
			tBanner_ul.style.left = "-300vw";
			num = 2;
			setTimeout(function() {
				tBanner_ul.style.transition = "0.5s";
				tBanner_ul.style.left = num * -100 + "vw";
			}, 15)
		} else {
			tBanner_ul.style.transition = "0.5s";
			tBanner_ul.style.left = num * -100 + "vw";
		}
		for(var j = 0; j < tBanner_bottom_li.length; j++) {
			tBanner_bottom_li[j].className = '';
		}
		if(num < 0) {
			tBanner_bottom_li[2].className = 'active_banner';
		} else {
			tBanner_bottom_li[num].className = 'active_banner';
		}
	}

	var timer = null;
	timer = setInterval(function() {
		num++;
		if(num > 3) {
			tBanner_ul.style.transition = "0s";
			tBanner_ul.style.left = "0px"
			num = 1;
			setTimeout(function() {
				tBanner_ul.style.transition = "0.5s"
				tBanner_ul.style.left = num * -100 + "vw";
			}, 15)
		} else {
			tBanner_ul.style.transition = "0.5s";
			tBanner_ul.style.left = num * -100 + "vw";
		}
		for(var j = 0; j < tBanner_bottom_li.length; j++) {
			tBanner_bottom_li[j].className = '';
		}
		if(num > 2) {
			tBanner_bottom_li[0].className = 'active_banner';
		} else {
			tBanner_bottom_li[num].className = 'active_banner';
		}
	}, 3000)

	tBanner.onmouseover = function() {
		clearInterval(timer);
	}
	tBanner.onmouseout = function() {
		timer = setInterval(function() {
			num++;
			if(num > 3) {
				tBanner_ul.style.transition = "0s";
				tBanner_ul.style.left = "0px"
				num = 1;
				setTimeout(function() {
					tBanner_ul.style.transition = "0.5s"
					tBanner_ul.style.left = num * -100 + "vw";
				}, 15)
			} else {
				tBanner_ul.style.transition = "0.5s";
				tBanner_ul.style.left = num * -100 + "vw";
			}
			for(var j = 0; j < tBanner_bottom_li.length; j++) {
				tBanner_bottom_li[j].className = '';
			}
			if(num > 2) {
				tBanner_bottom_li[0].className = 'active_banner';
			} else {
				tBanner_bottom_li[num].className = 'active_banner';
			}
		}, 3000)
	}
	/*轮播图*/
	
}