import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {{
 *     title: string
 * }}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment
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
			root: null
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
				default:
					cutejs.onUnknownKey(key);
					break;
			}
		};
		var __p = '';
		__p += '<div class="w-zbui-base-list-item">\n\t<div class="w-zbui-base-list-item__wrap">\n\t\t<div class="w-zbui-base-list-item__title">' +
		 cutejs.escape( this.title ) +
		'</div>\n\t</div>\n</div>\n';
		
		return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
	};
	return _template.call(templateParams);
};
