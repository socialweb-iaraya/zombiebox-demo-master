import * as cutejs from 'cutejs-lib/cute-library';
import {KeyboardExtended} from "demo/widgets/keyboard-extended/keyboard-extended";
import DivInput from "ui/widgets/input/div-input";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     input: DivInput,
 *     keyboard: KeyboardExtended,
 *     inputWrap: HTMLDivElement
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
		input: null,
		keyboard: null,
		inputWrap: null
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
			case 'input':
				if (!exports.input) {
					exports.input = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'keyboard':
				if (!exports.keyboard) {
					exports.keyboard = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'inputWrap':
				if (!exports.inputWrap) {
					exports.inputWrap = value;
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
	__p += '<div class="s-custom-input__title">Custom input</div>\n<div class="s-custom-input__input-wrapper" data-export-id="inputWrap">\n\t<div class="s-custom-input__input" data-component="' +
	 cutejs.includeInline('component', DivInput,  {}, "input", templatesData) +
	'"></div>\n</div>\n\n' +
	 cutejs.include('component', KeyboardExtended,  {}, "keyboard", templatesData) +
	'\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
