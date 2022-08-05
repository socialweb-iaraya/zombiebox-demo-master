import * as cutejs from 'cutejs-lib/cute-library';
import PlayerProgress from "demo/widgets/player-progress/player-progress";
import Button from "ui/widgets/button/button";
import PlayerPlayPause from "ui/widgets/player-play-pause/player-play-pause";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     rew: Button,
 *     playPause: PlayerPlayPause,
 *     ff: Button,
 *     fullscreen: Button,
 *     playerProgress: PlayerProgress,
 *     playerControls: HTMLDivElement
 * }}
 */
export var Out;


/**
 * @param {*=} opt_templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		rew: null,
		playPause: null,
		ff: null,
		fullscreen: null,
		playerProgress: null,
		playerControls: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {Out} exports
	 */
	var exportFunction = function(value, key, exports) {
		switch (key) {
			case 'root':
				if (!exports.root) {
					exports.root = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'rew':
				if (!exports.rew) {
					exports.rew = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'playPause':
				if (!exports.playPause) {
					exports.playPause = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'ff':
				if (!exports.ff) {
					exports.ff = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'fullscreen':
				if (!exports.fullscreen) {
					exports.fullscreen = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'playerProgress':
				if (!exports.playerProgress) {
					exports.playerProgress = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'playerControls':
				if (!exports.playerControls) {
					exports.playerControls = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="s-video-player__title">Videoplayer</div>\n\n<div class="s-video-player__frame"></div>\n<div class="s-video-player__overlay"></div>\n\n<div class="s-video-player-control" data-export-id="playerControls">\n\t<div class="s-video-player-control__wrap">\n\t\t<div class="s-video-player-control__item _rew" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "rew", templatesData) +
	'"></div>\n\t\t<div class="s-video-player-control__item _pause" data-component="' +
	 cutejs.includeInline('component', PlayerPlayPause,  {}, "playPause", templatesData) +
	'"></div>\n\t\t<div class="s-video-player-control__item _ff" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "ff", templatesData) +
	'"></div>\n\t\t<div class="s-video-player-control__item _full-screen" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "fullscreen", templatesData) +
	'"></div>\n\t\t' +
	 cutejs.include('component', PlayerProgress,  {}, "playerProgress", templatesData) +
	'\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
