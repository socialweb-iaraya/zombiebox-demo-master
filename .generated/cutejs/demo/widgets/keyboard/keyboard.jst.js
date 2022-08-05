import * as cutejs from 'cutejs-lib/cute-library';
import {Action} from "demo/widgets/keyboard/keyboard";
import {Type} from "demo/widgets/keyboard/keyboard";
import KeyboardLayout from "ui/widgets/keyboard/keyboard-layout";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     layoutAbc: KeyboardLayout,
 *     layoutNum: KeyboardLayout,
 *     itemsAbc: Array.<HTMLDivElement>,
 *     itemsNum: Array.<HTMLDivElement>
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
		layoutAbc: null,
		layoutNum: null,
		itemsAbc: [],
		itemsNum: []
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
			case 'layoutAbc':
				if (!exports.layoutAbc) {
					exports.layoutAbc = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'layoutNum':
				if (!exports.layoutNum) {
					exports.layoutNum = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'itemsAbc':
				exports.itemsAbc.push(value);
				break;
			case 'itemsNum':
				exports.itemsNum.push(value);
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="w-keyboard">\n\t<div class="w-keyboard__layout _english zb-clear" data-component="' +
	 cutejs.includeInline('component', KeyboardLayout,  {type: Type.ABC}, "layoutAbc", templatesData) +
	'">\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t';
	 "1 2 3 4 5 6 7 8 9 0".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsAbc">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-item _red" data-export-id="itemsAbc">&#46;</div>\n\t\t\t\t<div class="w-keyboard-item _green" data-export-id="itemsAbc">&#58;</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t';
	 "? q w e r t y u i o p".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsAbc">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-item _yellow" data-export-id="itemsAbc">&#47;</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t<div class="w-keyboard-item _service _caps" data-export-id="itemsAbc" data-keyboard-action="' +
	(Action.CAPS) +
	'"></div>\n\t\t\t\t';
	 "a s d f g h j k l".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsAbc">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-item _service _switch-keyboard" data-export-id="itemsAbc" data-keyboard-action="' +
	(Action.TYPE_NUM) +
	'">\n\t\t\t\t\t&#35;&#37;&#38;\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t';
	 "z x c v b n m".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsAbc">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-item _service _backspace _blue" data-export-id="itemsAbc" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="w-keyboard__layout _symbol zb-clear" data-component="' +
	 cutejs.includeInline('component', KeyboardLayout,  {type: Type.NUM}, "layoutNum", templatesData) +
	'">\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t';
	 "@ # $ % & * ( ) [ ] '".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsNum">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard__line">\n\t\t\t<div class="w-keyboard__center">\n\t\t\t\t';
	 "- _ = + ~ , ; !".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-item" data-export-id="itemsNum">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-item _service _switch-keyboard" data-export-id="itemsNum" data-keyboard-action="' +
	(Action.TYPE_ABC) +
	'">ABC</div>\n\t\t\t\t<div class="w-keyboard-item _service _blue _backspace" data-export-id="itemsNum" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
