// JavaScript Document

$(function() {
	function banner() {
		var index = 1;
		var len = $(".banner .list li").length;
		var time;

		for (i = 1; i <= len; i++) {
			var Obtn = $("<li>" + i + "</li>").appendTo($(".banner .btn"));
		}
		$(".banner .btn li").eq(0).addClass('hover');
		$(".banner .list li").eq(0).css("z-index", "1");
		$(".banner .btn li").mouseover(function() {
			index = $(".banner .btn li").index(this);
			show(index);
		})
		time = setInterval(function() {
			show(index);
			index++;
			if (index == len) {
				index = 0
			}
		}, 5000);

		function show(index) {
			$(".banner .list li p").removeClass('hover');
			$(".banner .list li").eq(index).find("p").addClass('hover');

			$(".banner .btn li").eq(index).addClass('hover').siblings("li").removeClass('hover');
			$(".banner .list li").eq(index).fadeIn(900).siblings("li").fadeOut(600);
		}
	}
	banner();
	
	
		 
	
	
	

	$(".sy_menu li").hover(function() {
		var index = $(this).index(".sy_menu li ");
		$(".sy_menu li").children('a').removeClass("active");
		$(this).children('a').addClass("active");
		//			$(this).addClass("active").siblings().removeClass("active");
		//				$(this).addClass("menuliselected").siblings().removeClass("menuliselected");

	}, function() {

	})
	$(".sy_nav1 div").hover(function() {
		var index = $(this).index(".sy_nav1 div ");
		$(this).addClass("active1").siblings().removeClass("active1");
		$(".sy_erjiimg img").eq(index).show().siblings(".sy_erjiimg img").hide();
		$(".sy_nav2 .sy_nav2f1").eq(index).show().siblings(".sy_nav2 .sy_nav2f1").hide();
		//			$(this).addClass("active").siblings().removeClass("active");
		//				$(this).addClass("menuliselected").siblings().removeClass("menuliselected");

	}, function() {

	})
})

/*
本代码由模板在线收集并编辑整理;
尊重他人劳动成果;
转载请保留模板在线链接 - www.htmldivcss.com
*/