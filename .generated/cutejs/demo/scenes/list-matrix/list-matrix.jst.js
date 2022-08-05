import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     title: HTMLDivElement,
 *     sliderWrapper: HTMLDivElement,
 *     rows: HTMLElement,
 *     columns: HTMLElement
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
		title: null,
		sliderWrapper: null,
		rows: null,
		columns: null
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
			case 'title':
				if (!exports.title) {
					exports.title = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'sliderWrapper':
				if (!exports.sliderWrapper) {
					exports.sliderWrapper = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'rows':
				if (!exports.rows) {
					exports.rows = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'columns':
				if (!exports.columns) {
					exports.columns = value;
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
	__p += '<div class="s-list-matrix__title" data-export-id="title"></div>\n\n<div class="s-list-matrix__slider-wrapper" data-export-id="sliderWrapper"></div>\n\n<div class="s-list-matrix__amount">\n\tRows: <span class="s-list-matrix__amount-number" data-export-id="rows"></span>\n\tColumns: <span class="s-list-matrix__amount-number" data-export-id="columns"></span>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
