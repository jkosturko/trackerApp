/*
* Creates a checkbox View
*
*<p><b> Require Path:</b> app/views/myview
*
* @module Homepage
* @submodule Homepage.InsideNYT
* @namespace InsideNYT
* @class InsideNYT
* @constructor
* @extends BaseView
**/

define([
	'underscore',
	'jquery',
	'backbone',
    'text!templates/checkbox'
], function (_, $, backbone, Templates) {
	'use strict';

	var View = Backbone.View.extend ({
		el: '#counter',

		initialize: function() {
            this.render();
		},

        render: function() {
           // var html = templates.checkBox({columns: 5});
            //this.$el.html(html);
        }
	});

	return View;
	//var view = new View();
});
