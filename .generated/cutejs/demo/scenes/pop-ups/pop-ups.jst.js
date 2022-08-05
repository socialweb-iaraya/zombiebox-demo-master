import * as cutejs from 'cutejs-lib/cute-library';
import Button from "demo/widgets/button/button";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     alertBtn: Button,
 *     confirmBtn: Button,
 *     selectBtn: Button
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
		alertBtn: null,
		confirmBtn: null,
		selectBtn: null
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
			case 'alertBtn':
				if (!exports.alertBtn) {
					exports.alertBtn = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'confirmBtn':
				if (!exports.confirmBtn) {
					exports.confirmBtn = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'selectBtn':
				if (!exports.selectBtn) {
					exports.selectBtn = value;
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
	__p += '<div class="s-pop-ups__title">Pop-ups</div>\n\n<div class="s-pop-ups__wrapper">\n\t' +
	 cutejs.include('component', Button,  {}, "alertBtn", templatesData) +
	'\n\t' +
	 cutejs.include('component', Button,  {}, "confirmBtn", templatesData) +
	'\n\t' +
	 cutejs.include('component', Button,  {}, "selectBtn", templatesData) +
	'\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
