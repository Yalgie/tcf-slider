"use strict";

jQuery.fn.tcf_slider = function(options) {

    var defaults = {
    	loop: true,
    	auto: true,
    	transition: "fade",
    	activeCrumbColor: "#2FD565",
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
        	methods.applyDefaults();
        },

        defineWrapElements: function() {
        	settings.eles.mainWrap = $("<div class='tcf-slider-wrap' />");
        	settings.eles.imageWrap = $("<div class='tcf-slider-image-wrap' />");
        	settings.eles.prevWrap = $("<div class='tcf-slider-prev-wrap' />");
        	settings.eles.nextWrap = $("<div class='tcf-slider-next-wrap' />");
        	settings.eles.crumbWrap = $("<div class='tcf-slider-crumb-wrap' />");
        },

        defineElements: function() {
        	settings.eles.prevBtn = $("<span class='tcf-slider-prev-btn'>&laquo;</span>");
        	settings.eles.image = $("<img class='tcf-slider-image' />");
        	settings.eles.nextBtn = $("<span class='tcf-slider-next-btn'>&raquo;</span>");
        	settings.eles.crumb = $("<span class='tcf-slider-crumb'>&bull;</span>");
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
        		)
        	})
        	settings.eles.crumbWrap
        	.children()
        	.first()
        	.addClass("active")
        },

        applyDefaults: function() {

        }
    };

    return this.each(function() {
        settings.eles = {};
        settings.eles.main = $(this);
        methods.init(this);
    });

};
