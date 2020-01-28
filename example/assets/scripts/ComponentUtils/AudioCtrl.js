'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		timeLabel: {
			default: null,
			type: cc.Label
		},
		_audioTask: null,
		_audioID: null
	},

	setAudioTask: function(audio) {
		this._audioTask = audio;
	},

	playAudio: function() {
		// return current audio object
		this._audioID = cc.audioEngine.play(this._audioTask, false);
	},

	stopAudio: function() {
		cc.audioEngine.stop(this._audioID);
	},

	pauseAudio: function() {
		cc.audioEngine.pause(this._audioID);
	},

	resumeAudio: function() {
		cc.audioEngine.resume(this._audioID);
	},

	stopAllAudio: function() {
		cc.audioEngine.stopAll();
	},

	pauseAllAudio: function() {
		cc.audioEngine.pauseAll();
	},

	resumeAllAudio: function() {
		cc.audioEngine.resumeAll();
	},

	currentTime: function() {
		if (!this._audioTask || this._audioID === null) {
			return;
		}
		var currentTime = cc.audioEngine.getCurrentTime(this._audioID).toFixed(1);
		var durationTime = cc.audioEngine.getDuration(this._audioID).toFixed(1);
		this.timeLabel.string = '${currentTime} s / ${durationTime} s';
	}
});
