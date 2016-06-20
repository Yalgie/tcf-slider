"use strict";

jQuery.fn.tcf_slider = function(options) {

    var defaults = {

    };

    var settings = $.extend( {}, defaults, options );

    var methods = {
        init: function() {
        	methods.defineElements();
        	methods.build();
        },

        defineElements: function() {
        	settings.eles.wrap = $("<div class='tcf-slider-wrap'>");
        	settings.eles.imageWrap = $("<div class='tcf-slider-image-wrap'>");
        	settings.eles.prev = $("<div class='tcf-slider-prev'>");
        	settings.eles.next = $("<div class='tcf-slider-next'>");
        	settings.eles.crumbContainer = $("<div class='tcf-slider-crumb-container'>");
        	settings.eles.crumb = $("<div class='tcf-slider-crumb'>");
        },

        build: function() {
        	settings.eles.main.append(settings.eles.wrap);
        }
    };

    return this.each(function() {
        settings.eles = {};
        settings.eles.main = $(this);
        methods.init(this);
    });

};
