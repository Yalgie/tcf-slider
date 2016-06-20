"use strict";

jQuery.fn.tcf_slider = function(options) {

    var defaults = {

    };

    var settings = $.extend( {}, defaults, options );

    var methods = {
        init: function() {
        	methods.defineElements();
        	methods.buildWrappers();
        	methods.buildPrevBtn();
        	methods.buildImages();
        	methods.buildNextBtn();
        	methods.buildCrumbs();
        },

        defineElements: function() {
        	settings.eles.mainWrap = $("<div class='tcf-slider-wrap'>");
        	settings.eles.imageWrap = $("<div class='tcf-slider-image-wrap'>");
        	settings.eles.prevWrap = $("<div class='tcf-slider-prev'>");
        	settings.eles.nextWrap = $("<div class='tcf-slider-next'>");
        	settings.eles.crumbWrap = $("<div class='tcf-slider-crumb-container'>");
        	settings.eles.crumb = $("<div class='tcf-slider-crumb'>");
        },

        buildWrappers: function() {
        	settings.eles.main.append(settings.eles.mainWrap);
        	settings.eles.mainWrap.append(settings.eles.prevWrap);
        	settings.eles.mainWrap.append(settings.eles.imageWrap);
        	settings.eles.mainWrap.append(settings.eles.nextWrap);
        	settings.eles.mainWrap.append(settings.eles.crumbWrap);
        },

        buildPrevBtn: function() {
        	// &laquo
        },

        buildImages: function() {

        },

        buildNextBtn: function() {
        	// &raquo
        },

        buildCrumbs: function() {

        }
    };

    return this.each(function() {
        settings.eles = {};
        settings.eles.main = $(this);
        methods.init(this);
    });

};
