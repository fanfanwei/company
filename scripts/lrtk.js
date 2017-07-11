$(function() {
	/* #header */
	function showCity() {
		$("#header .area dd").show()
		$("#header .area dt").addClass('active')
	}

	function hideCity() {
		$("#header .area dd").hide()
		$("#header .area dt").removeClass('active')
	}

	$("#header .area dt").mouseenter(function(event) {
		if ($("#header .area dd").css('display') === 'block') {
			showCity()
		} else {
			hideCity()
		}
	});
	$("#header .area dt").click(function(event) {
		showCity()
	});
	$("#header .area dt").mouseleave(function(event) {
		hideCity()
	});
	$("#header .area dd").mouseover(function(event) {
		showCity()
	});
	$("#header .area dd").mouseleave(function(event) {
		hideCity()
		$("#header .area dt").mouseover(function(event) {
			showCity()
		});
	});


	$(".phone").mouseenter(function(event) {
		$(this).addClass('active').children('.phone_download').show()
		$(this).children('.phone_icon').addClass('active')
	});
	$(".phone").mouseleave(function(event) {
		$(this).removeClass('active').children('.phone_download').hide()
		$(this).children('.phone_icon').removeClass('active')
	});

	$(".service").mouseenter(function(event) {
		$(this).addClass('active').children('ul').show()
	});
	$(".service").mouseleave(function(event) {
		$(this).removeClass('active').children('ul').hide()
	});

	$(".websitemap").mouseenter(function(event) {
		$(this).addClass('active').children('.map').show()
	});
	$(".websitemap").mouseleave(function(event) {
		$(this).removeClass('active').children('.map').hide()
	});


	// #search

	$(".myjd dl").mouseenter(function(event) {
		$(this).children('dd').show().end().children('dt').addClass('active')
		$(this).find('i').addClass('active')
	});
	$(".myjd dl").mouseleave(function(event) {
		$(this).children('dd').hide().end().children('dt').removeClass('active')
		$(this).find('i').removeClass('active')
	});

	$(".shoppingcat dl").mouseenter(function(event) {
		$(this).children('dd').show().end().children('dt').addClass('active')
	});
	$(".shoppingcat dl").mouseleave(function(event) {
		$(this).children('dd').hide().end().children('dt').removeClass('active')
	});

	// 
	$(".virtuals_title a").mouseover(function(event) {
		$(this).parents(".virtuals").children('i').stop(true, true).animate({
			left: $(".virtuals_title a").first().width() * $(this).index()
		}, 300).parents(".virtuals").find('.main').removeClass('active').eq($(this).index()).addClass('active')

	});


	// 灞曠ず鍒楄〃
	var time;
	var len = $(".pics_carousel .controls li").length;
	var iCarouselIndex = 0;
	$(".pics_carousel .controls li").mouseover(function() {
		iCarouselIndex = $(this).index()
		fun_Carousel(iCarouselIndex)
	})

	function fun_Carousel(iCarouselIndex) {
		$(".pics_carousel .pics li").removeClass('active').eq(iCarouselIndex).addClass('active')
		$(".pics_carousel .controls li").removeClass('active').eq(iCarouselIndex).addClass('active')
	}
	time = setInterval(function() {
		fun_Carousel(iCarouselIndex);
		iCarouselIndex++;
		if (iCarouselIndex == len) {
			iCarouselIndex = 0
		}
	}, 3000);

	var iCounter_pics_scroll = 0
	$(".pics_scroll .og_next").click(function(event) {
		if (parseInt($(".pics_scroll .pics_show ul").css('left')) <= -1120) {
			$(".pics_scroll .pics_show ul").stop(true, true).animate({
				left: 0
			}, 300)
		} else {
			$(".pics_scroll .pics_show ul").stop(true, true).animate({
				left: "-=1120"
			}, 300)
		}
	});
	$(".pics_scroll .og_prev").click(function(event) {
		if (parseInt($(".pics_scroll .pics_show  ul").css('left')) >= 0) {
			$(".pics_scroll .pics_show   ul").stop(true, true).animate({
				left: -1120
			}, 300)
		} else {
			$(".pics_scroll .pics_show   ul").stop(true, true).animate({
				left: "+=1120"
			}, 300)
		}
	})
	$(".sikao_link a .sy_preimg").click(function(event) {
		if (parseInt($(".market ul").css('left')) <= -1200) {
			$(".market ul").stop(true, true).animate({
				left: 0
			}, 300)
		} else {
			$(".market ul").stop(true, true).animate({
				left: "-=1200"
			}, 300)
		}
	});
	$(".sikao_link a .sy_nextimg").click(function(event) {
		if (parseInt($(".market ul").css('left')) >= 0) {
			$(".market ul").stop(true, true).animate({
				left: -1200
			}, 300)
		} else {
			$(".market ul").stop(true, true).animate({
				left: "+=1200"
			}, 300)
		}
	})
	
	
	
	
	$(".pics_scroll .prev img,.pics_scroll .next img").off("click")


	$(".showcase_content ul.big li").mouseenter(function(event) {
		$(this).find('img').stop(true, true).animate({
			left: -15
		}, 500)
	});
	$(".showcase_content ul.big li").mouseleave(function(event) {
		$(this).find('img').stop(true, true).animate({
			left: 0
		}, 500)
	});




	// #nav

	$(".listVertical li").on("mouseover", function() {
		$(".subContainer").hide().eq($(this).index()).stop(true, true).show()
	})
	$(".listVertical li").hover(function() {
		$(".subContainer").hide().eq($(this).index()).stop(true, true).show()
	}, function() {
		$(".subContainer").hide()
	});
	$(".subContainer").mouseover(function() {
		$(this).show()
	});
	$(".subContainer").mouseout(function() {
		$(this).hide()
	});

	/* floorsList */

	$(".floorsList_center_title h3").mouseover(function(event) {
		$(this).addClass('active').siblings('h3').removeClass('active').siblings('i').stop(true, true).animate({
			left: ($(this).index() - 1) * $(this).width()
		}, 300).parents('.floorsList_center').find('ul.main').removeClass('active').eq($(this).index() - 1).addClass('active')
	});

	$("#book .floorsList_right_title_tabs h3").mouseover(function(event) {
		$(this).siblings('i').stop(true, true).animate({
			left: ($(this).index() - 1) * $(this).width()
		}, 300).parent().siblings().children('ul').removeClass('active').eq($(this).index() - 1).addClass('active')
	});

	$(".pic_big_tabs .controls li").mouseenter(function(event) {
		$(this).addClass('active').siblings().removeClass('active').parents('.pic_big_tabs').children('.pics').stop(true, true).animate({
			left: $(this).index() * -210
		}, 300)
	});

	$(".pic_small_tabs .controls li").mouseenter(function(event) {
		$(this).addClass('active').siblings().removeClass('active').parents('.pic_small_tabs').find('.pics li').removeClass('active').eq($(this).index()).addClass('active')
	});
	//	产品中心特效
	var h2 = 0;
	for (var i = 0; i < 7; i++) {
		var h = $('.cp_rightcont').eq(i).height();

		h2 = h2 + h;
	}
	for (var i = 0; i < 7; i++) {
		//			alert('a');
		$('.cp_right .cp_rightcont').eq(i).css('top', i * 290 + 'px').css('z-index', i + 1);
		//			alert('a');
	}

	$('.cp_left div').click(function() {
		var index = $(this).index();
		//		alert(index);
		$(this).addClass("cp_leftnavact").siblings('div').removeClass("cp_leftnavact");
		$('.chanpin_cont').eq(index).show().siblings('.chanpin_cont').hide();
		//		$('.cp_right').css('top',-(index)*290+'px');
		for (var i = 0; i < 7; i++) {
			if (!$(".cp_right .cp_rightcont").eq(i).is(":animated")) {
				//元素不处于动画中执行。 
				if (i < index) {
					$('.cp_right .cp_rightcont').eq(i).animate({
						top: ((i - index) + 7) * 290 + "px"
					}, 700, 'swing');
				}
				if (i >= index) {
					$('.cp_right .cp_rightcont').eq(i).animate({
						top: (i - index) * 290 + "px"
					}, 700, 'swing');
				}
			}
		}




	});



//	$(".sy_container .sy img").mouseover(function(event) {
//		var img;
//		alert(this.src);
//		img = this.src.replace(/BLUE/, "orange");
//		this.src = img;
//
//
//	});
	





	$('.sy_cmyleft ul li').click(function() {
		var index = $(this).index();
		$(this).addClass("sy_cmyactive").siblings('li').removeClass("sy_cmyactive");
		$('.chanpin_cont').eq(index).show().siblings('.chanpin_cont').hide();
	});
	//	产品中心特效
	/*鎳掑緱灏佽浜嗭紝灏变咯....*/
	timer1 = setInterval(function() {
		$(".hot_activity .hot_list li").last().hide()
		$(".hot_activity .hot_list ul").prepend($(".hot_activity .hot_list li").last())
		$(".hot_activity .hot_list li").first().slideDown(1000)
	}, 2000)

	timer2 = setInterval(function() {
		$(".hot_order .hot_list li").last().hide()
		$(".hot_order .hot_list ul").prepend($(".hot_order .hot_list li").last())
		$(".hot_order .hot_list li").first().slideDown(1000)
	}, 2000)




});