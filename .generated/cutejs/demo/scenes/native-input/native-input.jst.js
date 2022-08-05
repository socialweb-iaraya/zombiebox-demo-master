import * as cutejs from 'cutejs-lib/cute-library';
import NativeInput from "ui/widgets/input/native-input";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     input: NativeInput,
 *     inputWrap: HTMLDivElement,
 *     warnMessage: HTMLDivElement
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
		inputWrap: null,
		warnMessage: null
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
			case 'inputWrap':
				if (!exports.inputWrap) {
					exports.inputWrap = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'warnMessage':
				if (!exports.warnMessage) {
					exports.warnMessage = value;
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
	__p += '<div class="s-native-input__title">Native Input</div>\n\n<div class="s-native-input__input-wrapper" data-export-id="inputWrap">\n\t<input class="s-native-input__input" id="nativeInput" data-component="' +
	 cutejs.includeInline('component', NativeInput,  {}, "input", templatesData) +
	'">\n</div>\n\n<div class="s-native-input-warn" data-export-id="warnMessage">\n\t<div class="s-native-input-warn__title">Attention!</div>\n\t<div class="s-native-input-warn__message">\n\t\tCurrent platform doesn\'t provide virtual onscreen keyboard for applications.\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
