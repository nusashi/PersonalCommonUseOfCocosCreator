'use strict';

var TipsManager = require('TipsManager');

cc.Class({
	extends: cc.Component,

	properties: {
		editBox: cc.EditBox,
		_itemList: [],
		_isShow: false
	},

	init: function(menu) {
		this.menu = menu;
	},

	setItemList: function(list) {
		this._itemList = list;
	},
	// searchBlock enter the special scene
	loadExample: function() {
		var sceneName = this.editBox.string;
		var url = this.findItemUrl(sceneName);
		if (!url) {
			TipsManager.createTips("Doesn't find that scene.");
			return;
		}

		if (TipsManager.hasSupport(sceneName)) {
			this.showSearchBlock();
			this.editBox.string = '';
			this.menu.loadScene(url);
		}
	},

	findItemUrl: function(sceneName) {
		for (var i = 0; i < this._itemList.length; i++) {
			var item = this._itemList[i];
			if (item.name === sceneName) {
				return item.url;
			}
		}
	},

	showSearchBlock: function() {
		this._isShow = !this._isShow;
		var action = null;
		if (this._isShow) {
			action = cc.moveBy(0.5, cc.v2(0, -48));
		} else {
			action = cc.moveBy(0.5, cc.v2(0, 48));
		}
		this.node.runAction(action);
	}
});
