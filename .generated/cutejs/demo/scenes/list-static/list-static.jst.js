import * as cutejs from 'cutejs-lib/cute-library';
import BaseListItem from "demo/widgets/base-list-item/base-list-item";
import BaseList from "ui/widgets/base-list/base-list";

/**
 * @typedef {{
 *     count: number
 * }}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     baseList: BaseList,
 *     title: HTMLDivElement,
 *     count: HTMLElement
 * }}
 */
export var Out;


/**
 * @param {In} templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(templateParams, opt_options) {
	/**
	 * @this {In}
	 * @return {Out}
	 */
	var _template = function() {
		var templatesData = {};
		var exports = {
			root: null,
			baseList: null,
			title: null,
			count: null
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
				case 'baseList':
					if (!exports.baseList) {
						exports.baseList = value;
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
				case 'count':
					if (!exports.count) {
						exports.count = value;
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
		__p += '<div class="s-list-static__title" data-export-id="title"></div>\n\n' +
		 cutejs.include('component', BaseList,  {options: {padding: 5, lineSize: 1}, itemClass: BaseListItem}, "baseList", templatesData) +
		'\n\n<div class="s-list-static__amount">\n\tElements amount: <span class="s-list-static__amount-number" data-export-id="count">' +
		 cutejs.escape( this.count ) +
		'</span>\n</div>\n';
		
		return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
	};
	return _template.call(templateParams);
};
