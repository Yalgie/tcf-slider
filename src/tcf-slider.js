"use strict";

jQuery.fn.tcf_slider = function(options) {

    var defaults = {
    	loop: true,
    	auto: true,
    	transition: "fade"
    };

    var settings = $.extend( {}, defaults, options );

    var methods = {
        init: function() {
        	methods.defineWrapElements();
        	methods.defineElements();
        	methods.buildWrappers();
        	methods.buildPrevBtn();
        	methods.buildImages();
        	methods.buildNextBtn();
        	methods.buildCrumbs();
        	methods.bindClickEvents();
        	methods.bindKeyboardEvents();
        	methods.bindBlurEvents();
        	methods.bindMouseOverEvents();
        	methods.checkLoop();
        },

        defineWrapElements: function() {
        	settings.eles.mainWrap = $("<div class='tcf-slider-wrap' />");
        	settings.eles.imageWrap = $("<div class='tcf-slider-image-wrap' />");
        	settings.eles.prevWrap = $("<div tabindex='0' class='tcf-slider-prev-wrap' />");
        	settings.eles.nextWrap = $("<div tabindex='0' class='tcf-slider-next-wrap' />");
        	settings.eles.crumbWrap = $("<div class='tcf-slider-crumb-wrap' />");
        },

        defineElements: function() {
        	settings.eles.prevBtn = $("<span class='tcf-slider-prev-btn'>&laquo;</span>");
        	settings.eles.image = $("<img class='tcf-slider-image' />");
        	settings.eles.nextBtn = $("<span class='tcf-slider-next-btn'>&raquo;</span>");
        	settings.eles.crumb = $("<span tabindex='0' class='tcf-slider-crumb'>&bull;</span>");
        },

        buildWrappers: function() {
        	settings.eles.main.append(settings.eles.mainWrap);
        	settings.eles.mainWrap.append(settings.eles.prevWrap);
        	settings.eles.mainWrap.append(settings.eles.imageWrap);
        	settings.eles.mainWrap.append(settings.eles.nextWrap);
        	settings.eles.mainWrap.append(settings.eles.crumbWrap);
        },

        buildPrevBtn: function() {
        	settings.eles.prevWrap.append(settings.eles.prevBtn);
        },

        buildImages: function() {
        	settings.images.map(function(item, i) {
        		settings.eles.imageWrap.append(
        			settings.eles.image
        			.clone()
        			.hide()
        			.attr("src", item.src)
        			.attr("alt", item.alt)
        			.attr("title", item.caption)
        		);
        	})
        	settings.eles.imageWrap.children().first().show();
        },

        buildNextBtn: function() {
        	settings.eles.nextWrap.append(settings.eles.nextBtn);
        },

        buildCrumbs: function() {
        	settings.images.map(function(item, i) {
        		settings.eles.crumbWrap.append(
        			settings.eles.crumb.clone()
        		);
        	})
        	settings.eles.crumbWrap.children().first().addClass("active");
        },

        bindClickEvents: function() {
        	settings.eles.prevWrap.on("click", function() {
        		methods.changeImage("prev")
        	});
        	settings.eles.nextWrap.on("click", function() {
        		methods.changeImage("next")
        	});
        	settings.eles.crumbWrap.children().on("click", function() {
        		methods.changeImage("crumb", $(this).index())
        	});
        },

        bindKeyboardEvents: function() {
        	settings.eles.prevWrap.on("keydown", function(e) {
        		if (e.which == 13) {
        			methods.changeImage("prev", $(this).index())
        		}
        	});
        	settings.eles.nextWrap.on("keydown", function(e) {
        		if (e.which == 13) {
        			methods.changeImage("next", $(this).index())
        		}
        	});
        	settings.eles.crumbWrap.children().on("keydown", function(e) {
        		if (e.which == 13) {
        			methods.changeImage("crumb", $(this).index())
        		}
        	});
        },

        bindBlurEvents: function() {
        	settings.eles.prevWrap.on("mouseout", function() {
        		$(this).blur();
        	});
        	settings.eles.nextWrap.on("mouseout", function() {
        		$(this).blur();
        	});
        	settings.eles.crumbWrap.children().on("mouseout", function() {
        		$(this).blur();
        	});
        },

        bindMouseOverEvents: function() {
        	settings.eles.prevWrap.on("mouseover", function() {
        		$(this).focus();
        	});
        	settings.eles.nextWrap.on("mouseover", function() {
        		$(this).focus();
        	});
        	settings.eles.crumbWrap.children().on("mouseover", function() {
        		$(this).focus();
        	});
        },

        changeImage: function(direction, index) {
        	var current = settings.eles.crumbWrap.find(".active").index();
        	var target;

        	if (direction == "prev")
        		target = current - 1;
        	else if (direction == "next")
        		target = current + 1;
        	else
        		target = index;

        	if (settings.images[target] == undefined) {
        		if (direction == "prev")
        			target = settings.images.length - 1;
        		else
        			target = 0;
        	}

        	methods.transitionImage(current, target);
        	methods.updateCrumb(target);
        	methods.checkLoop();
        },

        transitionImage: function(current, target) {
        	if (settings.transition == "none") {
        		settings.eles.imageWrap.children().eq(current).hide();
        		settings.eles.imageWrap.children().eq(target).show();
        	}
        	else if (settings.transition == "fade") {
        		settings.eles.imageWrap.children().eq(current).fadeOut(function() {
        			settings.eles.imageWrap.children().eq(target).fadeIn();
        		});
        	}
        },

        updateCrumb: function(i) {
        	settings.eles.crumbWrap.find(".active").removeClass("active");
        	settings.eles.crumbWrap.children().eq(i).addClass("active");
        },

        checkLoop: function() {
        	var current = settings.eles.crumbWrap.find(".active").index();
        	var next = settings.images[current + 1];
        	if (!settings.loop) {
        		if (current == 0) {
        			settings.eles.prevWrap.fadeOut()
        		}
        		else {
        			settings.eles.prevWrap.fadeIn()
        		}

        		if (next == undefined) {
        			settings.eles.nextWrap.fadeOut()
        		}
        		else {
        			settings.eles.nextWrap.fadeIn()
        		}
        	}
        }
    };

    return this.each(function() {
        settings.eles = {};
        settings.eles.main = $(this);
        methods.init(this);
    });

};
