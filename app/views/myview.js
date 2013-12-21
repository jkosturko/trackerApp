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
	'backbone'
], function (_, $, backbone) {
	'use strict';

	el: $container;

	var View = Backbone.View.extend ({
		initialize: function() {
			console.log('Hello World');
		}
	});

	return View;
	//var view = new View();
});
