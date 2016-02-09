System.config({
  baseURL: "/ib-react/app",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "vendor/react.min.js": [
      "npm:lodash@4.3.0",
      "npm:lodash@4.3.0/lodash",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:buffer@3.6.0",
      "npm:buffer@3.6.0/index",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6",
      "npm:isarray@1.0.0",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:isarray@1.0.0/index",
      "npm:ieee754@1.1.6/index",
      "npm:jquery@2.2.0",
      "npm:jquery@2.2.0/dist/jquery",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "github:components/jquery@2.2.0",
      "github:components/jquery@2.2.0/jquery",
      "npm:react-bootstrap@0.28.2",
      "npm:react-bootstrap@0.28.2/lib/index",
      "npm:babel-runtime@5.8.35/helpers/interop-require-default",
      "npm:babel-runtime@5.8.35/helpers/interop-require-wildcard",
      "npm:react-bootstrap@0.28.2/lib/utils/childrenValueInputValidation",
      "npm:react@0.14.7",
      "npm:react@0.14.7/react",
      "npm:react@0.14.7/lib/React",
      "npm:react@0.14.7/lib/ReactDOM",
      "npm:react@0.14.7/lib/ReactDOMServer",
      "npm:react@0.14.7/lib/ReactIsomorphic",
      "npm:react@0.14.7/lib/Object.assign",
      "npm:react@0.14.7/lib/deprecated",
      "npm:react@0.14.7/lib/ReactCurrentOwner",
      "npm:react@0.14.7/lib/ReactDOMTextComponent",
      "npm:react@0.14.7/lib/ReactDefaultInjection",
      "npm:react@0.14.7/lib/ReactInstanceHandles",
      "npm:react@0.14.7/lib/ReactMount",
      "npm:react@0.14.7/lib/ReactPerf",
      "npm:react@0.14.7/lib/ReactReconciler",
      "npm:react@0.14.7/lib/ReactUpdates",
      "npm:react@0.14.7/lib/ReactVersion",
      "npm:react@0.14.7/lib/findDOMNode",
      "npm:react@0.14.7/lib/renderSubtreeIntoContainer",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.7/lib/ReactServerRendering",
      "npm:react@0.14.7/lib/ReactChildren",
      "npm:react@0.14.7/lib/ReactComponent",
      "npm:react@0.14.7/lib/ReactClass",
      "npm:react@0.14.7/lib/ReactDOMFactories",
      "npm:react@0.14.7/lib/ReactElement",
      "npm:react@0.14.7/lib/ReactElementValidator",
      "npm:react@0.14.7/lib/ReactPropTypes",
      "npm:react@0.14.7/lib/onlyChild",
      "npm:react@0.14.7/lib/DOMChildrenOperations",
      "npm:react@0.14.7/lib/DOMPropertyOperations",
      "npm:react@0.14.7/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.7/lib/escapeTextContentForBrowser",
      "npm:react@0.14.7/lib/setTextContent",
      "npm:react@0.14.7/lib/validateDOMNesting",
      "npm:react@0.14.7/lib/BeforeInputEventPlugin",
      "npm:react@0.14.7/lib/ChangeEventPlugin",
      "npm:react@0.14.7/lib/ClientReactRootIndex",
      "npm:react@0.14.7/lib/DefaultEventPluginOrder",
      "npm:react@0.14.7/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.7/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.7/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.7/lib/ReactDOMComponent",
      "npm:react@0.14.7/lib/ReactEventListener",
      "npm:react@0.14.7/lib/ReactInjection",
      "npm:react@0.14.7/lib/ReactReconcileTransaction",
      "npm:react@0.14.7/lib/SelectEventPlugin",
      "npm:react@0.14.7/lib/ServerReactRootIndex",
      "npm:react@0.14.7/lib/SimpleEventPlugin",
      "npm:react@0.14.7/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.7/lib/ReactDefaultPerf",
      "npm:react@0.14.7/lib/ReactRootIndex",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.7/lib/DOMProperty",
      "npm:react@0.14.7/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.7/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.7/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.7/lib/ReactInstanceMap",
      "npm:react@0.14.7/lib/ReactMarkupChecksum",
      "npm:react@0.14.7/lib/ReactUpdateQueue",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:react@0.14.7/lib/instantiateReactComponent",
      "npm:react@0.14.7/lib/setInnerHTML",
      "npm:react@0.14.7/lib/shouldUpdateReactComponent",
      "npm:react@0.14.7/lib/ReactRef",
      "npm:react@0.14.7/lib/CallbackQueue",
      "npm:react@0.14.7/lib/PooledClass",
      "npm:react@0.14.7/lib/Transaction",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.7/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.7/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.7/lib/traverseAllChildren",
      "npm:react@0.14.7/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.7/lib/canDefineProperty",
      "npm:react@0.14.7/lib/ReactPropTypeLocations",
      "npm:react@0.14.7/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:react@0.14.7/lib/getIteratorFn",
      "npm:react@0.14.7/lib/Danger",
      "npm:react@0.14.7/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.7/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.7/lib/ReactDOMIDOperations",
      "npm:react@0.14.7/lib/EventConstants",
      "npm:react@0.14.7/lib/EventPropagators",
      "npm:react@0.14.7/lib/FallbackCompositionState",
      "npm:react@0.14.7/lib/SyntheticCompositionEvent",
      "npm:react@0.14.7/lib/SyntheticInputEvent",
      "npm:react@0.14.7/lib/EventPluginHub",
      "npm:react@0.14.7/lib/SyntheticEvent",
      "npm:react@0.14.7/lib/getEventTarget",
      "npm:react@0.14.7/lib/isEventSupported",
      "npm:react@0.14.7/lib/isTextInputElement",
      "npm:react@0.14.7/lib/SyntheticMouseEvent",
      "npm:react@0.14.7/lib/AutoFocusUtils",
      "npm:react@0.14.7/lib/CSSPropertyOperations",
      "npm:react@0.14.7/lib/ReactDOMButton",
      "npm:react@0.14.7/lib/ReactDOMInput",
      "npm:react@0.14.7/lib/ReactDOMOption",
      "npm:react@0.14.7/lib/ReactDOMSelect",
      "npm:react@0.14.7/lib/ReactDOMTextarea",
      "npm:react@0.14.7/lib/ReactMultiChild",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:react@0.14.7/lib/ReactComponentEnvironment",
      "npm:react@0.14.7/lib/ReactEmptyComponent",
      "npm:react@0.14.7/lib/ReactNativeComponent",
      "npm:react@0.14.7/lib/ReactInputSelection",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.7/lib/SyntheticClipboardEvent",
      "npm:react@0.14.7/lib/SyntheticFocusEvent",
      "npm:react@0.14.7/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.7/lib/SyntheticDragEvent",
      "npm:react@0.14.7/lib/SyntheticTouchEvent",
      "npm:react@0.14.7/lib/SyntheticUIEvent",
      "npm:react@0.14.7/lib/SyntheticWheelEvent",
      "npm:react@0.14.7/lib/getEventCharCode",
      "npm:react@0.14.7/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:react@0.14.7/lib/EventPluginRegistry",
      "npm:react@0.14.7/lib/ReactEventEmitterMixin",
      "npm:react@0.14.7/lib/ViewportMetrics",
      "npm:react@0.14.7/lib/adler32",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:react@0.14.7/lib/ReactCompositeComponent",
      "npm:react@0.14.7/lib/ReactOwner",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.7/lib/accumulateInto",
      "npm:react@0.14.7/lib/forEachAccumulated",
      "npm:react@0.14.7/lib/getTextContentAccessor",
      "npm:react@0.14.7/lib/EventPluginUtils",
      "npm:react@0.14.7/lib/ReactErrorUtils",
      "npm:react@0.14.7/lib/getEventModifierState",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.7/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.7/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:react@0.14.7/lib/LinkedValueUtils",
      "npm:react@0.14.7/lib/ReactChildReconciler",
      "npm:react@0.14.7/lib/flattenChildren",
      "npm:react@0.14.7/lib/ReactDOMSelection",
      "npm:react@0.14.7/lib/getEventKey",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:react@0.14.7/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.6.1/lib/toArray",
      "npm:react-bootstrap@0.28.2/lib/utils/createChainedFunction",
      "npm:react-bootstrap@0.28.2/lib/utils/ValidComponentChildren",
      "npm:react-bootstrap@0.28.2/lib/utils/bootstrapUtils",
      "npm:react-bootstrap@0.28.2/lib/Accordion",
      "npm:react-bootstrap@0.28.2/lib/Alert",
      "npm:react-bootstrap@0.28.2/lib/Badge",
      "npm:react-bootstrap@0.28.2/lib/Breadcrumb",
      "npm:react-bootstrap@0.28.2/lib/BreadcrumbItem",
      "npm:react-bootstrap@0.28.2/lib/Button",
      "npm:react-bootstrap@0.28.2/lib/ButtonGroup",
      "npm:react-bootstrap@0.28.2/lib/ButtonInput",
      "npm:react-bootstrap@0.28.2/lib/ButtonToolbar",
      "npm:react-bootstrap@0.28.2/lib/Carousel",
      "npm:react-bootstrap@0.28.2/lib/CarouselItem",
      "npm:react-bootstrap@0.28.2/lib/Col",
      "npm:react-bootstrap@0.28.2/lib/CollapsibleNav",
      "npm:react-bootstrap@0.28.2/lib/Dropdown",
      "npm:react-bootstrap@0.28.2/lib/DropdownButton",
      "npm:react-bootstrap@0.28.2/lib/Glyphicon",
      "npm:react-bootstrap@0.28.2/lib/Image",
      "npm:react-bootstrap@0.28.2/lib/Grid",
      "npm:react-bootstrap@0.28.2/lib/Input",
      "npm:react-bootstrap@0.28.2/lib/Interpolate",
      "npm:react-bootstrap@0.28.2/lib/Jumbotron",
      "npm:react-bootstrap@0.28.2/lib/Label",
      "npm:react-bootstrap@0.28.2/lib/ListGroup",
      "npm:react-bootstrap@0.28.2/lib/ListGroupItem",
      "npm:react-bootstrap@0.28.2/lib/MenuItem",
      "npm:react-bootstrap@0.28.2/lib/Modal",
      "npm:react-bootstrap@0.28.2/lib/ModalBody",
      "npm:react-bootstrap@0.28.2/lib/ModalFooter",
      "npm:react-bootstrap@0.28.2/lib/ModalHeader",
      "npm:react-bootstrap@0.28.2/lib/ModalTitle",
      "npm:react-bootstrap@0.28.2/lib/Nav",
      "npm:react-bootstrap@0.28.2/lib/Navbar",
      "npm:react-bootstrap@0.28.2/lib/NavBrand",
      "npm:react-bootstrap@0.28.2/lib/NavbarBrand",
      "npm:react-bootstrap@0.28.2/lib/NavDropdown",
      "npm:react-bootstrap@0.28.2/lib/NavItem",
      "npm:react-bootstrap@0.28.2/lib/Overlay",
      "npm:react-bootstrap@0.28.2/lib/OverlayTrigger",
      "npm:react-bootstrap@0.28.2/lib/PageHeader",
      "npm:react-bootstrap@0.28.2/lib/PageItem",
      "npm:react-bootstrap@0.28.2/lib/Pager",
      "npm:react-bootstrap@0.28.2/lib/Pagination",
      "npm:react-bootstrap@0.28.2/lib/Panel",
      "npm:react-bootstrap@0.28.2/lib/PanelGroup",
      "npm:react-bootstrap@0.28.2/lib/Popover",
      "npm:react-bootstrap@0.28.2/lib/ProgressBar",
      "npm:react-bootstrap@0.28.2/lib/ResponsiveEmbed",
      "npm:react-bootstrap@0.28.2/lib/Row",
      "npm:react-bootstrap@0.28.2/lib/SafeAnchor",
      "npm:react-bootstrap@0.28.2/lib/SplitButton",
      "npm:react-bootstrap@0.28.2/lib/Tab",
      "npm:react-bootstrap@0.28.2/lib/Table",
      "npm:react-bootstrap@0.28.2/lib/Tabs",
      "npm:react-bootstrap@0.28.2/lib/Thumbnail",
      "npm:react-bootstrap@0.28.2/lib/Tooltip",
      "npm:react-bootstrap@0.28.2/lib/Well",
      "npm:react-bootstrap@0.28.2/lib/Collapse",
      "npm:react-bootstrap@0.28.2/lib/Fade",
      "npm:react-bootstrap@0.28.2/lib/FormControls/index",
      "npm:react-prop-types@0.3.0/lib/singlePropFrom",
      "npm:babel-runtime@5.8.35/helpers/extends",
      "npm:react-bootstrap@0.28.2/lib/styleMaps",
      "npm:invariant@2.2.0",
      "npm:warning@2.1.0",
      "npm:classnames@2.2.3",
      "npm:react-prop-types@0.3.0/lib/elementType",
      "npm:babel-runtime@5.8.35/helpers/object-without-properties",
      "npm:react-prop-types@0.3.0/lib/all",
      "npm:babel-runtime@5.8.35/helpers/inherits",
      "npm:babel-runtime@5.8.35/helpers/class-call-check",
      "npm:react-bootstrap@0.28.2/lib/FormGroup",
      "npm:react-bootstrap@0.28.2/lib/InputBase",
      "npm:react-dom@0.14.7",
      "npm:react-bootstrap@0.28.2/lib/utils/TransitionEvents",
      "npm:babel-runtime@5.8.35/core-js/object/keys",
      "npm:react-bootstrap@0.28.2/lib/utils/deprecationWarning",
      "npm:dom-helpers@2.4.0/activeElement",
      "npm:dom-helpers@2.4.0/query/contains",
      "npm:keycode@2.1.0",
      "npm:lodash-compat@3.10.2/collection/find",
      "npm:lodash-compat@3.10.2/object/omit",
      "npm:react-prop-types@0.3.0/lib/isRequiredForA11y",
      "npm:uncontrollable@3.2.1",
      "npm:react-bootstrap@0.28.2/lib/DropdownMenu",
      "npm:react-bootstrap@0.28.2/lib/DropdownToggle",
      "npm:react-bootstrap@0.28.2/lib/utils/CustomPropTypes",
      "npm:lodash-compat@3.10.2/object/pick",
      "npm:dom-helpers@2.4.0/util/scrollbarSize",
      "npm:dom-helpers@2.4.0/util/inDOM",
      "npm:dom-helpers@2.4.0/ownerDocument",
      "npm:dom-helpers@2.4.0/events",
      "npm:react-bootstrap@0.28.2/lib/ModalDialog",
      "npm:react-overlays@0.5.4/lib/Modal",
      "npm:react-overlays@0.5.4/lib/utils/isOverflowing",
      "npm:react-prop-types@0.3.0/lib/deprecated",
      "npm:react-bootstrap@0.28.2/lib/deprecated/Navbar",
      "npm:react-bootstrap@0.28.2/lib/NavbarHeader",
      "npm:react-bootstrap@0.28.2/lib/NavbarToggle",
      "npm:react-bootstrap@0.28.2/lib/NavbarCollapse",
      "npm:react-overlays@0.5.4/lib/Overlay",
      "npm:react-bootstrap@0.28.2/lib/PaginationButton",
      "npm:react-bootstrap@0.28.2/lib/SplitToggle",
      "npm:dom-helpers@2.4.0/style",
      "npm:react-overlays@0.5.4/lib/Transition",
      "npm:react-bootstrap@0.28.2/lib/FormControls/Static",
      "npm:babel-runtime@5.8.35/core-js/object/create",
      "npm:invariant@2.2.0/browser",
      "npm:babel-runtime@5.8.35/core-js/object/assign",
      "npm:warning@2.1.0/browser",
      "npm:classnames@2.2.3/index",
      "npm:react-prop-types@0.3.0/lib/common",
      "npm:babel-runtime@5.8.35/core-js/object/set-prototype-of",
      "npm:react-dom@0.14.7/index",
      "npm:core-js@1.2.6/library/fn/object/keys",
      "npm:dom-helpers@2.4.0/util/babelHelpers",
      "npm:keycode@2.1.0/index",
      "npm:lodash-compat@3.10.2/internal/baseEach",
      "npm:lodash-compat@3.10.2/internal/createFind",
      "npm:lodash-compat@3.10.2/internal/arrayMap",
      "npm:lodash-compat@3.10.2/internal/baseDifference",
      "npm:lodash-compat@3.10.2/internal/baseFlatten",
      "npm:lodash-compat@3.10.2/internal/bindCallback",
      "npm:lodash-compat@3.10.2/object/keysIn",
      "npm:lodash-compat@3.10.2/internal/pickByArray",
      "npm:lodash-compat@3.10.2/internal/pickByCallback",
      "npm:lodash-compat@3.10.2/function/restParam",
      "npm:uncontrollable@3.2.1/index",
      "npm:react-overlays@0.5.4/lib/RootCloseWrapper",
      "npm:react-bootstrap@0.28.2/lib/utils/childrenToArray",
      "npm:dom-helpers@2.4.0/events/index",
      "npm:react-prop-types@0.2.2/lib/mountable",
      "npm:react-prop-types@0.2.2/lib/elementType",
      "npm:react-overlays@0.5.4/lib/Portal",
      "npm:react-overlays@0.5.4/lib/ModalManager",
      "npm:react-overlays@0.5.4/lib/utils/ownerDocument",
      "npm:react-overlays@0.5.4/lib/utils/addEventListener",
      "npm:react-overlays@0.5.4/lib/utils/addFocusListener",
      "npm:react-overlays@0.5.4/lib/utils/getContainer",
      "npm:dom-helpers@2.4.0/query/isWindow",
      "npm:react-overlays@0.5.4/lib/Position",
      "npm:react-bootstrap@0.28.2/lib/utils/createSelectedEvent",
      "npm:dom-helpers@2.4.0/style/index",
      "npm:dom-helpers@2.4.0/transition/properties",
      "npm:dom-helpers@2.4.0/events/on",
      "npm:core-js@1.2.6/library/fn/object/assign",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "npm:core-js@1.2.6/library/modules/es6.object.keys",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:lodash-compat@3.10.2/internal/baseForOwn",
      "npm:lodash-compat@3.10.2/internal/createBaseEach",
      "npm:lodash-compat@3.10.2/internal/baseCallback",
      "npm:lodash-compat@3.10.2/internal/baseFind",
      "npm:lodash-compat@3.10.2/lang/isArray",
      "npm:lodash-compat@3.10.2/internal/baseFindIndex",
      "npm:lodash-compat@3.10.2/internal/baseIndexOf",
      "npm:lodash-compat@3.10.2/internal/cacheIndexOf",
      "npm:lodash-compat@3.10.2/internal/createCache",
      "npm:lodash-compat@3.10.2/internal/arrayPush",
      "npm:lodash-compat@3.10.2/lang/isArguments",
      "npm:lodash-compat@3.10.2/internal/isArrayLike",
      "npm:lodash-compat@3.10.2/internal/isObjectLike",
      "npm:lodash-compat@3.10.2/utility/identity",
      "npm:lodash-compat@3.10.2/internal/arrayEach",
      "npm:lodash-compat@3.10.2/lang/isFunction",
      "npm:lodash-compat@3.10.2/internal/isIndex",
      "npm:lodash-compat@3.10.2/internal/isLength",
      "npm:lodash-compat@3.10.2/lang/isObject",
      "npm:lodash-compat@3.10.2/lang/isString",
      "npm:lodash-compat@3.10.2/support",
      "npm:lodash-compat@3.10.2/internal/toObject",
      "npm:lodash-compat@3.10.2/internal/baseForIn",
      "npm:uncontrollable@3.2.1/createUncontrollable",
      "npm:react-overlays@0.5.4/lib/utils/createChainedFunction",
      "npm:dom-helpers@2.4.0/events/off",
      "npm:dom-helpers@2.4.0/events/filter",
      "npm:react-prop-types@0.2.2/lib/common",
      "npm:dom-helpers@2.4.0/class",
      "npm:react-overlays@0.5.4/lib/utils/manageAriaHidden",
      "npm:react-overlays@0.5.4/lib/utils/overlayPositionUtils",
      "npm:dom-helpers@2.4.0/util/camelizeStyle",
      "npm:dom-helpers@2.4.0/util/hyphenateStyle",
      "npm:dom-helpers@2.4.0/style/getComputedStyle",
      "npm:dom-helpers@2.4.0/style/removeStyle",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:lodash-compat@3.10.2/internal/baseFor",
      "npm:lodash-compat@3.10.2/object/keys",
      "npm:lodash-compat@3.10.2/internal/getLength",
      "npm:lodash-compat@3.10.2/internal/baseMatches",
      "npm:lodash-compat@3.10.2/internal/baseMatchesProperty",
      "npm:lodash-compat@3.10.2/utility/property",
      "npm:lodash-compat@3.10.2/internal/getNative",
      "npm:lodash-compat@3.10.2/internal/indexOfNaN",
      "npm:lodash-compat@3.10.2/internal/SetCache",
      "npm:uncontrollable@3.2.1/utils",
      "npm:dom-helpers@2.4.0/query/querySelectorAll",
      "npm:dom-helpers@2.4.0/class/index",
      "npm:dom-helpers@2.4.0/query/offset",
      "npm:dom-helpers@2.4.0/query/position",
      "npm:dom-helpers@2.4.0/query/scrollTop",
      "npm:dom-helpers@2.4.0/util/camelize",
      "npm:dom-helpers@2.4.0/util/hyphenate",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:lodash-compat@3.10.2/internal/createBaseFor",
      "npm:lodash-compat@3.10.2/internal/shimKeys",
      "npm:lodash-compat@3.10.2/internal/baseProperty",
      "npm:lodash-compat@3.10.2/internal/baseIsMatch",
      "npm:lodash-compat@3.10.2/internal/getMatchData",
      "npm:lodash-compat@3.10.2/internal/baseGet",
      "npm:lodash-compat@3.10.2/internal/baseIsEqual",
      "npm:lodash-compat@3.10.2/internal/baseSlice",
      "npm:lodash-compat@3.10.2/internal/isKey",
      "npm:lodash-compat@3.10.2/internal/isStrictComparable",
      "npm:lodash-compat@3.10.2/array/last",
      "npm:lodash-compat@3.10.2/internal/toPath",
      "npm:lodash-compat@3.10.2/internal/basePropertyDeep",
      "npm:lodash-compat@3.10.2/lang/isNative",
      "npm:lodash-compat@3.10.2/internal/cachePush",
      "npm:dom-helpers@2.4.0/class/addClass",
      "npm:dom-helpers@2.4.0/class/removeClass",
      "npm:dom-helpers@2.4.0/class/hasClass",
      "npm:dom-helpers@2.4.0/query/offsetParent",
      "npm:dom-helpers@2.4.0/query/scrollLeft",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:lodash-compat@3.10.2/object/pairs",
      "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep",
      "npm:lodash-compat@3.10.2/internal/baseToString",
      "npm:lodash-compat@3.10.2/internal/isHostObject",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:lodash-compat@3.10.2/internal/equalArrays",
      "npm:lodash-compat@3.10.2/internal/equalByTag",
      "npm:lodash-compat@3.10.2/internal/equalObjects",
      "npm:lodash-compat@3.10.2/lang/isTypedArray",
      "npm:lodash-compat@3.10.2/internal/arraySome"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jquery": "npm:jquery@2.2.0",
    "jsx": "github:floatdrop/plugin-jsx@1.2.1",
    "lodash": "npm:lodash@4.3.0",
    "oboe": "npm:oboe@2.1.2",
    "react": "npm:react@0.14.7",
    "react-bootstrap": "npm:react-bootstrap@0.28.2",
    "react-dom": "npm:react-dom@0.14.7",
    "github:floatdrop/plugin-jsx@1.2.1": {
      "react-tools": "npm:react-tools@0.13.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.10.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.8.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "detective": "npm:detective@4.3.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "recast": "npm:recast@0.10.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.10.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:http-https@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash@4.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:oboe@2.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-https": "npm:http-https@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.4.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.10.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-bootstrap@0.28.2": {
      "babel-runtime": "npm:babel-runtime@5.8.35",
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.0",
      "keycode": "npm:keycode@2.1.0",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7",
      "react-dom": "npm:react-dom@0.14.7",
      "react-overlays": "npm:react-overlays@0.5.4",
      "react-prop-types": "npm:react-prop-types@0.3.0",
      "uncontrollable": "npm:uncontrollable@3.2.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.7": {
      "react": "npm:react@0.14.7"
    },
    "npm:react-overlays@0.5.4": {
      "classnames": "npm:classnames@2.2.3",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.7",
      "react-dom": "npm:react-dom@0.14.7",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.3.0": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-tools@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.4",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.14.7": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:uncontrollable@3.2.1": {
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.7"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
