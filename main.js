/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/button.js":
/*!**********************!*\
  !*** ./js/button.js ***!
  \**********************/
/***/ (() => {

{
  document.querySelectorAll('.open-button').forEach(button => {
    button.addEventListener('click', () => {
      const productSection = button.closest('.content')
      if (!productSection) return

      const gridContainer = productSection.querySelector('.open-content')
      const icon = button.querySelector('.open-button__img')
      const textElement = button.querySelector('.open-button_text')

      const isHidden = gridContainer.classList.contains('hidden')
      textElement.textContent = isHidden ? 'Скрыть все' : 'Показать все'
      gridContainer.classList.toggle('hidden')
      icon.classList.toggle('rotate')
    })
  })
}


/***/ }),

/***/ "./js/icon.js":
/*!********************!*\
  !*** ./js/icon.js ***!
  \********************/
/***/ (() => {

{
  const openBtn = document.querySelector('.menu-button')
  const closeBtn = document.querySelectorAll('.close')
  const overlay = document.querySelector('.overlay')
  const menu = document.querySelector('.sidebar')
  const openPopupBtn = document.querySelectorAll('.button-chat')
  const openPopup2Btn = document.querySelectorAll('.button-call')
  const popup = document.querySelector('.popup')
  const popup2 = document.querySelector('.popup--2')

  openBtn.addEventListener('click', () => {
    menu.classList.add('sidebar--open')
    overlay.classList.add('overlay--active')
  })

  openPopupBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.classList.add('popup--open')
      overlay.classList.add('overlay--active')
      overlay.classList.add('overlay-2')
    })
  })

  openPopup2Btn.forEach(btn => {
    btn.addEventListener('click', () => {
      popup2.classList.add('popup--open')
      overlay.classList.add('overlay--active')
      overlay.classList.add('overlay-2')
    })
  })

  closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.closest('.sidebar')) {
        menu.classList.remove('sidebar--open')
      }
      if (btn.closest('.popup')) {
        popup.classList.remove('popup--open')
      }
      if (btn.closest('.popup--2')) {
        popup2.classList.remove('popup--open')
      }
      overlay.classList.remove('overlay--active')
      overlay.classList.remove('overlay-2')
    })
  })
}


/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ (() => {

const swiperCard = (() => {
  let init = false
  let swiper
  return () => {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true
        swiper = new Swiper('.swiper', {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 25,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }
    } else if (init) {
      if (swiper && typeof swiper.destroy === 'function') {
        swiper.destroy(true, true)
        swiper = undefined
      }
      init = false
    }
  }
})()
swiperCard()
window.addEventListener('resize', swiperCard)


/***/ }),

/***/ "./styles/icon.scss":
/*!**************************!*\
  !*** ./styles/icon.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_icon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/icon.scss */ "./styles/icon.scss");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/swiper.js */ "./js/swiper.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/button.js */ "./js/button.js");
/* harmony import */ var _js_button_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_button_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/icon.js */ "./js/icon.js");
/* harmony import */ var _js_icon_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_icon_js__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=main.js.map