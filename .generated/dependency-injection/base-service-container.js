import BaseApplication from "generated/base-application";
import CustomInput from "demo/scenes/custom-input/custom-input";
import CustomInputExtended from "demo/scenes/custom-input-extended/custom-input-extended";
import ListArrow from "demo/scenes/list-arrow/list-arrow";
import ListDynamic from "demo/scenes/list-dynamic/list-dynamic";
import ListMatrix from "demo/scenes/list-matrix/list-matrix";
import ListScroll from "demo/scenes/list-scroll/list-scroll";
import ListStatic from "demo/scenes/list-static/list-static";
import {NativeInput} from "demo/scenes/native-input/native-input";
import Navigation from "demo/scenes/navigation/navigation";
import NavigationCustom from "demo/scenes/navigation-custom/navigation-custom";
import PopUps from "demo/scenes/pop-ups/pop-ups";
import Router from "demo/service/router";
import ScrollText from "demo/scenes/scroll-text/scroll-text";
import {VideoPlayer} from "demo/scenes/video-player/video-player";


/**
 */
export default class {
	/**
	 * @param {BaseApplication} application
	 */
	constructor(application) {
		/**
		 * As proxy to system services
		 * @type {BaseApplication}
		 */
		this.application = application;

		/**
		 * @type {CustomInput}
		 */
		this.scenesCustomInput;

		/**
		 * @type {CustomInputExtended}
		 */
		this.scenesCustomInputExtended;

		/**
		 * @type {ListArrow}
		 */
		this.scenesListArrow;

		/**
		 * @type {ListDynamic}
		 */
		this.scenesListDynamic;

		/**
		 * @type {ListMatrix}
		 */
		this.scenesListMatrix;

		/**
		 * @type {ListScroll}
		 */
		this.scenesListScroll;

		/**
		 * @type {ListStatic}
		 */
		this.scenesListStatic;

		/**
		 * @type {NativeInput}
		 */
		this.scenesNativeInput;

		/**
		 * @type {Navigation}
		 */
		this.scenesNavigation;

		/**
		 * @type {NavigationCustom}
		 */
		this.scenesNavigationCustom;

		/**
		 * @type {PopUps}
		 */
		this.scenesPopUps;

		/**
		 * @type {ScrollText}
		 */
		this.scenesScrollText;

		/**
		 * @type {VideoPlayer}
		 */
		this.scenesVideoPlayer;

		/**
		 * @type {Router}
		 */
		this.serviceRouter;
	}

	/**
	 */
	bootstrap() {
		// Constructing
		this.scenesCustomInput = new CustomInput();
		this.scenesCustomInputExtended = new CustomInputExtended();
		this.scenesListArrow = new ListArrow();
		this.scenesListDynamic = new ListDynamic();
		this.scenesListMatrix = new ListMatrix();
		this.scenesListScroll = new ListScroll();
		this.scenesListStatic = new ListStatic();
		this.scenesNativeInput = new NativeInput();
		this.scenesNavigation = new Navigation();
		this.scenesNavigationCustom = new NavigationCustom();
		this.scenesPopUps = new PopUps();
		this.scenesScrollText = new ScrollText();
		this.scenesVideoPlayer = new VideoPlayer();
		this.serviceRouter = new Router();

		// Interlacing
		this.serviceRouter.sceneArrowList = this.scenesListArrow;
		this.serviceRouter.sceneCustomInput = this.scenesCustomInput;
		this.serviceRouter.sceneCustomInputExtended = this.scenesCustomInputExtended;
		this.serviceRouter.sceneListDynamic = this.scenesListDynamic;
		this.serviceRouter.sceneListMatrix = this.scenesListMatrix;
		this.serviceRouter.sceneListStatic = this.scenesListStatic;
		this.serviceRouter.sceneNativeInput = this.scenesNativeInput;
		this.serviceRouter.sceneNavigation = this.scenesNavigation;
		this.serviceRouter.sceneNavigationCustom = this.scenesNavigationCustom;
		this.serviceRouter.scenePopUps = this.scenesPopUps;
		this.serviceRouter.sceneScrollList = this.scenesListScroll;
		this.serviceRouter.sceneScrollText = this.scenesScrollText;
		this.serviceRouter.sceneVideoPlayer = this.scenesVideoPlayer;

		// Setup scenes
		this.application.addScene(this.scenesCustomInput, 'custom-input');
		this.application.addScene(this.scenesCustomInputExtended, 'custom-input-extended');
		this.application.addScene(this.scenesListArrow, 'list-arrow');
		this.application.addScene(this.scenesListDynamic, 'list-dynamic');
		this.application.addScene(this.scenesListMatrix, 'list-matrix');
		this.application.addScene(this.scenesListScroll, 'list-scroll');
		this.application.addScene(this.scenesListStatic, 'list-static');
		this.application.addScene(this.scenesNativeInput, 'native-input');
		this.application.addScene(this.scenesNavigation, 'navigation');
		this.application.addScene(this.scenesNavigationCustom, 'navigation-custom');
		this.application.addScene(this.scenesPopUps, 'pop-ups');
		this.application.addScene(this.scenesScrollText, 'scroll-text');
		this.application.addScene(this.scenesVideoPlayer, 'video-player');
	}
};
