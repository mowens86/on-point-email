/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//jshint esversion:6\n//Navbar Section\nwindow.onscroll = function () {\n  stickyNavigation();\n};\n\nvar navbar = document.getElementById(\"navbar\");\nvar fullnav = document.getElementById(\"fullnav\");\nvar sticky = fullnav.offsetTop;\n\nstickyNavigation = function stickyNavigation() {\n  window.pageYOffset > sticky ? fullnav.classList.add(\"sticky\") : fullnav.classList.remove(\"sticky\");\n}; // Hamburger Bar\n\n\nvar hamburgerBtn = document.querySelector(\".hamburger\");\nhamburgerBtn.addEventListener(\"click\", function () {\n  hamburgerBtn.classList.toggle(\"is-active\");\n  hamburgerBtn.classList.contains(\"is-active\") ? navbar.style.display = \"flex\" : navbar.style.display = \"none\";\n}); // Check for view width to bring back navbar\n\nvar lastState = false;\n\nfunction checkForViewportChange() {\n  var state = window.matchMedia(\"(min-width: 600px)\").matches;\n\n  if (state != lastState) {\n    if (state) {\n      navbar.style.display = \"flex\";\n    } else {\n      navbar.style.display = \"none\";\n    }\n\n    lastState = state;\n  }\n}\n\nwindow.setInterval(checkForViewportChange, 150); // Check to see if top is 0 if so remove sticky navbar to reset padding\n\nvar topState = false;\n\nfunction checkForTopOfPage() {\n  var topOfPage = document.body.scrollTop;\n\n  if (topOfPage === 0) {\n    return fullnav.classList.remove(\"sticky\");\n  }\n} // Modal Section\n\n\nvar modal = document.querySelector(\".modal\");\nvar trigger = document.querySelector(\".trigger\");\nvar closeButton = document.querySelector(\".close-button\");\n\nvar toggleModal = function toggleModal() {\n  modal.classList.toggle(\"show-modal\");\n};\n\nvar windowOnClick = function windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n};\n\ntrigger.addEventListener(\"click\", toggleModal);\n\nif (closeButton) {\n  closeButton.addEventListener(\"click\", toggleModal, false);\n}\n\nwindow.addEventListener(\"click\", windowOnClick); // Carousel Section\n\nvar carouselQuotes = [{\n  quote: \"Fast Service, beautiful templates, and communication was great! Not only that but the pricing is fair and honest. I didn't feel pressured or rushed, just options for me to decide. Definitely coming back for more in the future.\",\n  author: \"~ Rob Lint\"\n}, {\n  quote: \"We needed an email template quickly for an upcoming email campaign, they created it within 24 hours, it was responsonsive, and looked beautiful! We even had replies during the campaign about how great our emails looked.\",\n  author: \"~ Linda Schmeil\"\n}, {\n  quote: \"Communication was very swift and understandable. If I didn't understand, they always explained to the point of where I could. They did a thorough job of explaining the process and the template was gourgeous. A+ Highly recommend!\",\n  author: \"~ Meagan O'Neil\"\n}];\nvar quotePara = document.querySelector(\".testimonial-content-p\");\nvar quoteAuthor = document.querySelector(\".testimonial-content-h2\");\nvar dotOne = document.getElementsByClassName(\"dot\")[0];\nvar dotTwo = document.getElementsByClassName(\"dot\")[1];\nvar dotThree = document.getElementsByClassName(\"dot\")[2];\nvar quoteTime = 8000;\nvar counter = 0;\n\nvar changeQuote = function changeQuote() {\n  quotePara.innerHTML = carouselQuotes[counter].quote;\n  quoteAuthor.innerHTML = carouselQuotes[counter].author;\n\n  if (counter === 2) {\n    dotThree.classList.add(\"active-dot\");\n    dotTwo.classList.remove(\"active-dot\");\n    dotOne.classList.remove(\"active-dot\");\n  } else if (counter === 1) {\n    dotTwo.classList.add(\"active-dot\");\n    dotOne.classList.remove(\"active-dot\");\n    dotThree.classList.remove(\"active-dot\");\n  } else {\n    dotOne.classList.add(\"active-dot\");\n    dotTwo.classList.remove(\"active-dot\");\n    dotThree.classList.remove(\"active-dot\");\n  }\n\n  counter < carouselQuotes.length - 1 ? counter++ : counter = 0;\n};\n\nsetInterval(changeQuote, quoteTime);\nwindow.onload = changeQuote;\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleNotFoundError: Module not found: Error: Can't resolve '../../public/assets/img/Hero_Background.png' in 'C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\src\\\\styles'\\n    at factory.create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:925:10)\\n    at factory (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:401:22)\\n    at resolver (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:130:21)\\n    at asyncLib.parallel (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:224:22)\\n    at C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\neo-async\\\\async.js:2830:7\\n    at C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\neo-async\\\\async.js:6877:13\\n    at normalResolver.resolve (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:214:25)\\n    at doResolve (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:184:12)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn0 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at resolver.doResolve (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\UnsafeCachePlugin.js:37:5)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn0 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn0 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at resolver.doResolve (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn42 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn0 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:27:1)\\n    at resolver.doResolve (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn1 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at hook.callAsync (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\Resolver.js:238:5)\\n    at _fn0 (eval at create (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at fs.stat (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\DirectoryExistsPlugin.js:22:13)\\n    at process.nextTick (C:\\\\Users\\\\Mowens\\\\Desktop\\\\Projects\\\\onpoint\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:73:15)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });