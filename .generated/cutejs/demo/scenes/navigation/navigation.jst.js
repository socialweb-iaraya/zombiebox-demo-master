import * as cutejs from 'cutejs-lib/cute-library';
import Button from "ui/widgets/button/button";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     box1x1: Button,
 *     box1x2: Button,
 *     box1x3: Button,
 *     box2x1: Button,
 *     box2x2: Button,
 *     box2x3: Button,
 *     box2x4: Button,
 *     box3x1: Button,
 *     box3x2: Button,
 *     box3x3: Button,
 *     box4x1: Button,
 *     box4x2: Button,
 *     box4x3: Button,
 *     title: HTMLDivElement
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
		box1x1: null,
		box1x2: null,
		box1x3: null,
		box2x1: null,
		box2x2: null,
		box2x3: null,
		box2x4: null,
		box3x1: null,
		box3x2: null,
		box3x3: null,
		box4x1: null,
		box4x2: null,
		box4x3: null,
		title: null
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
			case 'box1x1':
				if (!exports.box1x1) {
					exports.box1x1 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box1x2':
				if (!exports.box1x2) {
					exports.box1x2 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box1x3':
				if (!exports.box1x3) {
					exports.box1x3 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box2x1':
				if (!exports.box2x1) {
					exports.box2x1 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box2x2':
				if (!exports.box2x2) {
					exports.box2x2 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box2x3':
				if (!exports.box2x3) {
					exports.box2x3 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box2x4':
				if (!exports.box2x4) {
					exports.box2x4 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box3x1':
				if (!exports.box3x1) {
					exports.box3x1 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box3x2':
				if (!exports.box3x2) {
					exports.box3x2 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box3x3':
				if (!exports.box3x3) {
					exports.box3x3 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box4x1':
				if (!exports.box4x1) {
					exports.box4x1 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box4x2':
				if (!exports.box4x2) {
					exports.box4x2 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'box4x3':
				if (!exports.box4x3) {
					exports.box4x3 = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'title':
				if (!exports.title) {
					exports.title = value;
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
	__p += '<div class="s-navigation__title" data-export-id="title"></div>\n\n<div class="s-navigation-scheme">\n\t<div class="s-navigation-scheme__box" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box1x1", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _left-2 _width-3" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box1x2", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _left-5" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box1x3", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-2 _height-2" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box2x1", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-2 _left-2" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box2x2", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-2 _left-4" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box2x3", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-2 _left-5" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box2x4", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-3 _left-2" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box3x1", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-3 _left-3" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box3x2", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-3 _left-4 _width-2" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box3x3", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-4" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box4x1", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-4 _left-2" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box4x2", templatesData) +
	'"></div>\n\t<div class="s-navigation-scheme__box _top-4 _left-5" data-component="' +
	 cutejs.includeInline('component', Button,  {}, "box4x3", templatesData) +
	'"></div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
