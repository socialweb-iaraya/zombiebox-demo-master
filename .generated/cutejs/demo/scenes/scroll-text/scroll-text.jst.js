import * as cutejs from 'cutejs-lib/cute-library';
import ScrollText from "demo/widgets/scroll-text/scroll-text";
import ScrollBar from "ui/widgets/scroll-bar/scroll-bar";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     scroll: ScrollText,
 *     scrollBar: ScrollBar,
 *     slider: HTMLDivElement,
 *     text: HTMLDivElement,
 *     shadow: HTMLDivElement
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
		scroll: null,
		scrollBar: null,
		slider: null,
		text: null,
		shadow: null
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
			case 'scroll':
				if (!exports.scroll) {
					exports.scroll = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'scrollBar':
				if (!exports.scrollBar) {
					exports.scrollBar = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'slider':
				if (!exports.slider) {
					exports.slider = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'text':
				if (!exports.text) {
					exports.text = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'shadow':
				if (!exports.shadow) {
					exports.shadow = value;
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
	__p += '<div class="s-scroll-text__title">Scroll-text with scroll bar</div>\n\n<div class="s-scroll-text__wrap" data-component="' +
	 cutejs.includeInline('component', ScrollText,  {}, "scroll", templatesData) +
	'">\n\t<div class="s-scroll-text__slider" data-export-id="slider">\n\t\t<div class="s-scroll-text__text" data-export-id="text">\n\t\t\t<div class="s-scroll-text__para">\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n\t\t\t\tindustry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n\t\t\t\tscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n\t\t\t\tinto electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n\t\t\t\tthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n\t\t\t\tpublishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\t\t\t</div>\n\t\t\t<div class="s-scroll-text__para">\n\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n\t\t\t\tindustry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n\t\t\t\tscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n\t\t\t\tinto electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n\t\t\t\tthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n\t\t\t\tpublishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\t\t\t</div>\n\t\t\t<div class="s-scroll-text__para">\n\t\t\t\tContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n\t\t\t\tclassical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin\n\t\t\t\tprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,\n\t\t\t\tconsectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical\n\t\t\t\tliterature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and\n\t\t\t\t1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written\n\t\t\t\tin 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.\n\t\t\t\tThe first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",\n\t\t\t\tcomes from a line in section 1.10.32.\n\t\t\t</div>\n\t\t\t<div class="s-scroll-text__para">\n\t\t\t\tThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.\n\t\t\t\tSections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced\n\t\t\t\tin their exact original form, accompanied by English versions from the 1914 translation\n\t\t\t\tby H. Rackham.\n\t\t\t</div>\n\t\t\t<div class="s-scroll-text__para">\n\t\t\t\tThere are many variations of passages of Lorem Ipsum available, but the majority have suffered\n\t\t\t\talteration in some form, by injected humour, or randomised words which don\'t look even slightly\n\t\t\t\tbelievable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t\n\t\t\t\tanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet\n\t\t\t\ttend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n\t\t\t\tIt uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,\n\t\t\t\tto generate Lorem Ipsum which looks reasonable.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="s-scroll-text__shadow" data-export-id="shadow"></div>\n\t' +
	 cutejs.include('component', ScrollBar,  {isVertical: true}, "scrollBar", templatesData) +
	'\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
