import * as cutejs from 'cutejs-lib/cute-library';
import {Action} from "demo/widgets/keyboard-extended/keyboard-extended";
import {Lang} from "demo/widgets/keyboard-extended/keyboard-extended";
import {Type} from "demo/widgets/keyboard-extended/keyboard-extended";
import KeyboardExtendedLayout from "demo/widgets/keyboard-extended/keyboard-extended-layout";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     layoutAbcEn: KeyboardExtendedLayout,
 *     layoutAbcRu: KeyboardExtendedLayout,
 *     layoutSymbolsCommon: KeyboardExtendedLayout,
 *     layoutSymbolsSpecial: KeyboardExtendedLayout,
 *     itemsAbcEn: Array.<HTMLDivElement>,
 *     itemsAbcRu: Array.<HTMLDivElement>,
 *     itemsSymbolsCommon: Array.<HTMLDivElement>,
 *     itemsSymbolsSpecial: Array.<HTMLDivElement>
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
		layoutAbcEn: null,
		layoutAbcRu: null,
		layoutSymbolsCommon: null,
		layoutSymbolsSpecial: null,
		itemsAbcEn: [],
		itemsAbcRu: [],
		itemsSymbolsCommon: [],
		itemsSymbolsSpecial: []
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
			case 'layoutAbcEn':
				if (!exports.layoutAbcEn) {
					exports.layoutAbcEn = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'layoutAbcRu':
				if (!exports.layoutAbcRu) {
					exports.layoutAbcRu = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'layoutSymbolsCommon':
				if (!exports.layoutSymbolsCommon) {
					exports.layoutSymbolsCommon = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'layoutSymbolsSpecial':
				if (!exports.layoutSymbolsSpecial) {
					exports.layoutSymbolsSpecial = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'itemsAbcEn':
				exports.itemsAbcEn.push(value);
				break;
			case 'itemsAbcRu':
				exports.itemsAbcRu.push(value);
				break;
			case 'itemsSymbolsCommon':
				exports.itemsSymbolsCommon.push(value);
				break;
			case 'itemsSymbolsSpecial':
				exports.itemsSymbolsSpecial.push(value);
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="w-keyboard-extended">\n\t<!--ABC english keyboard-->\n\t<div class="w-keyboard-extended__layout _english zb-clear" data-component="' +
	 cutejs.includeInline('component', KeyboardExtendedLayout,  {type: Type.ABC, lang: Lang.EN}, "layoutAbcEn", templatesData) +
	'">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "q w e r t y u i o p".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "a s d f g h j k l".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _caps" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.CAPS) +
	'"></div>\n\t\t\t\t';
	 "z x c v b n m".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-extended-item _arrow _left" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.LEFT) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item _arrow _right" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.RIGHT) +
	'"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _symbols" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.TYPE_NUM) +
	'">?123</div>\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang _green" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.LANG_RU) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">,</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace _yellow" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.SPACE) +
	'">Space</div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcEn">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace _blue" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter _red" data-export-id="itemsAbcEn" data-keyboard-action="' +
	(Action.ENTER) +
	'">Enter</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--ABC russian keyboard-->\n\t<div class="w-keyboard-extended__layout _russian zb-clear" data-component="' +
	 cutejs.includeInline('component', KeyboardExtendedLayout,  {type: Type.ABC, lang: Lang.RU}, "layoutAbcRu", templatesData) +
	'">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "й ц у к е н г ш щ з х ъ".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "ф ы в а п р о л д ж э ё".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _caps" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.CAPS) +
	'"></div>\n\t\t\t\t';
	 "я ч с м и т ь б ю".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t\t<div class="w-keyboard-extended-item _arrow _left" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.LEFT) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item _arrow _right" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.RIGHT) +
	'"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _symbols" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.TYPE_NUM) +
	'">?123</div>\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang _green" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.LANG_EN) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">,</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace _yellow" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.SPACE) +
	'">Пробел</div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsAbcRu">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace _blue" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter _red" data-export-id="itemsAbcRu" data-keyboard-action="' +
	(Action.ENTER) +
	'">Ввод</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--NUM keyboard-->\n\t<div class="w-keyboard-extended__layout _symbols-common zb-clear" data-component="' +
	 cutejs.includeInline('component', KeyboardExtendedLayout,  {type: Type.NUM}, "layoutSymbolsCommon", templatesData) +
	'">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "1 2 3 4 5 6 7 8 9 0".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "@ # $ % & * - + ( )".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _symbols-special" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.TYPE_SYMBOL) +
	'">=\\<</div>\n\t\t\t\t';
	 ['!', '"', '`', ':', ';', '/', '?'].forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _characters" data-keyboard-name="' +
	(Type.ABC) +
	'" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.TYPE_ABC) +
	'">АБВ</div>\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang _green" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.LANG) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">,</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace _yellow" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.SPACE) +
	'">Пробел</div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsCommon">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace _blue" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter _red" data-export-id="itemsSymbolsCommon" data-keyboard-action="' +
	(Action.ENTER) +
	'">Ввод</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!--SYMBOL keyboard-->\n\t<div class="w-keyboard-extended__layout _symbols-special" data-component="' +
	 cutejs.includeInline('component', KeyboardExtendedLayout,  {type: Type.SYMBOLS}, "layoutSymbolsSpecial", templatesData) +
	'">\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "~ ` | &bull; &radic; &pi; &divide; &times; { }".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsSpecial">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "&#8677; &pound; &cent; &euro; &deg; ^ - = [ ]".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsSpecial">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended-item _symbols" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.TYPE_NUM) +
	'">?123</div>\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t';
	 "&trade; &copy; &reg; &para; \\ < >".split(" ").forEach(function(sym) { 
	;__p += '\n\t\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsSpecial">' +
	(sym) +
	'</div>\n\t\t\t\t';
	 }); 
	;__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="w-keyboard-extended__line">\n\t\t\t<div class="w-keyboard-extended__center">\n\t\t\t\t<div class="w-keyboard-extended-item _characters" data-keyboard-name="' +
	(Type.ABC) +
	'" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.TYPE_ABC) +
	'">АБВ</div>\n\t\t\t\t<div class="w-keyboard-extended-item _switch-lang _green" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.LANG) +
	'"></div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsSpecial">,</div>\n\t\t\t\t<div class="w-keyboard-extended-item _whitespace _yellow" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.SPACE) +
	'">Пробел</div>\n\t\t\t\t<div class="w-keyboard-extended-item" data-export-id="itemsSymbolsSpecial">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _backspace _blue" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.BACKSPACE) +
	'">.</div>\n\t\t\t\t<div class="w-keyboard-extended-item _enter _red" data-export-id="itemsSymbolsSpecial" data-keyboard-action="' +
	(Action.ENTER) +
	'">Ввод</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
