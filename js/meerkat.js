$(window).scroll(function(){if($(".navbar").offset().top>50){$(".navbar-fixed-top").addClass("top-nav-collapse")}else{$(".navbar-fixed-top").removeClass("top-nav-collapse")}});$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo");b.preventDefault()})});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});