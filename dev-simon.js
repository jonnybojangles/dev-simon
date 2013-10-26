var devMemory = devMemory || {};
(function(dm, $){
	"use strict";
	dm.init = function() {
		this.vars();
		this.selectors();

		this._demo();
		this.toggleDemo();
	};
	dm.selectors = function(){
		this.$tiles = $('.tile');
	};
	dm.vars = function(){
		this.isDemo = false;
	};
	dm._demo = function() {
		this.resetAllTiles();
		// Timeout simulates on off flash
		window.setTimeout($.proxy(this.randomActiveTile, this), 500);
		// Recursion
		this.demoID = window.setTimeout($.proxy(this._demo, this), 1500);
	};
	dm._demoDestory = function() {
		if ('undefined' !== typeof this.demoID) {
			window.clearTimeout(this.demoID);
		}
	};
	dm.toggleDemo = function(){
		this.isDemo = !this.isDemo;
	};
	dm.randomActiveTile = function(){
		var max = this.$tiles.length - 1,
			min = 0,
			rand = Math.floor(Math.random() * (max - 0 + 1) + min);
		this.$tiles.eq(rand).toggleClass('active');
	};
	dm.resetAllTiles = function(){
		this.$tiles.siblings('.active').removeClass('active');
	};
	return dm.init();
})(devMemory, jQuery);