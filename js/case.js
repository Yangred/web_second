window.onload = function() {
	var loading = document.getElementById('loading');

	setTimeout(function() {
		loading.style.display = 'none';
	}, 1000);

	var search = document.getElementById('search');
	var oSubmit = document.getElementById('submit');

	oSubmit.onclick = function() {
		window.open('https://www.baidu.com/s?wd=' + search.value); //在新窗口打开页面
		search.value = '';
	}
	window.onkeydown = function(e) {
		var ev = e || window.event;
		if(ev.keyCode === 13) {
			window.open('https://www.baidu.com/s?wd=' + search.value);
			search.value = '';
		}
	}
	var time=setTimeout(function(){
		return_top.style.opacity=1;
	},10000)
	var content_center = document.getElementById('content_center');

	for(var i = 0; i < date.length; i++) {
		content_center.innerHTML += "<li><div><img src=" + date[i].img + "/></div><h3>" + date[i].title + "</h3><p>" + date[i].content + "</p><span>查看详情</span></li>";
	}

	var return_top = document.getElementById('return_top');
	var timer = null;
	return_top.onclick = function() {
		timer = setInterval(function() {
			var top = document.body.scrollTop || document.documentElement.scrollTop;
			if(top > 0) {
				document.body.scrollTop = document.documentElement.scrollTop = top - 15;
			} else {
				clearInterval(timer);
			}
		})
	}

}