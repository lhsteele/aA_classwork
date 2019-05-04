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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nclass Clock  {\n  constructor() {\n    const currentTime = new Date();\n    \n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n    \n  }\n  \n  printTime() {\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    return timeString;\n  }\n  \n}\nconst clock = new Clock();\nconst clockElement = document.getElementById(\"clock\");\nObject(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock.printTime(), clockElement);\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(){\n  let linkArray = [];\n  Object.keys(dogs).forEach(dog =>{\n    const aElement = document.createElement(\"a\");\n    aElement.innerHTML = dog;\n    aElement.href = dogs[dog];\n    const liElement = document.createElement(\"li\");\n    liElement.className = \"dog-link\";\n    liElement.appendChild(aElement);\n    linkArray.push(liElement);\n    \n  });\n  return linkArray;\n}\n\nfunction attachDogLinks (){\n  const dropdown = document.getElementsByClassName(\"drop-down-dog-list\");\n  let dogLinks = dogLinkCreator();\n  dogLinks.forEach(link => {\n     dropdown[0].appendChild(link);\n  });\n}\n\nfunction handleEnter() {\n  const lis = document.querySelectorAll(\".dog-link\");\n  const dogLinks = Array.from(lis);\n  dogLinks.forEach(link => {\n    link.classList.add(\"open\");\n  });\n}\n\n//add a css class for hidden and toggle that instead of removing dog-list class\nfunction handleLeave() {\n  const lis = document.querySelectorAll(\".dog-link\");\n  const dogLinks = Array.from(lis);\n  dogLinks.forEach(link => {\n    link.classList.remove(\"open\");\n  });\n}\n\nattachDogLinks();\nconst label = document.querySelector('.drop-down-dog-nav');\nlabel.addEventListener(\"mouseenter\", () => {handleEnter()});\nlabel.addEventListener(\"mouseleave\", handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todoarr = [];\nif (localStorage.getItem(\"to-do\") !== null) {\n  let list = localStorage.getItem(\"to-do\");\n  list = JSON.parse(list);\n  todoarr = todoarr.concat(list);\n}\nconst todoUl = document.querySelector(\".todos\");\nconst todoForm = document.querySelector(\".add-todo-form\");\n\nfunction addTodo () {\n  const todoInput = document.getElementsByName(\"add-todo\")[0];\n  const toDo = {\n      \"add-todo\": todoInput.value,\n      \"done\": false \n  };\n  todoarr.push(toDo);\n  localStorage.setItem(\"to-do\",JSON.stringify(todoarr));\n  todoInput.value = \"\";\n  addNewTodo(toDo); \n}\n\nfunction addNewTodo(item) {\n    const ul = document.querySelector(\".todos\"); \n        const newTodo = document.createElement(\"li\");\n        const todoCheckbox = document.createElement(\"input\");\n        todoCheckbox.type = \"checkbox\";\n        todoCheckbox.checked = false;\n        const todoLabel = document.createElement(\"label\");\n        todoLabel.innerHTML = item[\"add-todo\"];\n        newTodo.appendChild(todoCheckbox);\n        newTodo.appendChild(todoLabel);\n        ul.appendChild(newTodo);\n}\n\n\n\nfunction populateList(){\n//   debugger\n    let list = localStorage.getItem(\"to-do\");\n    list = JSON.parse(list);\n    const ul = document.querySelector(\".todos\");\n    //`<input type=checkbox ${checked}></input> <label>${item['add-todo']}</label>`\n    ul.innerHTML = list.map((item, i) =>{\n      // debugger\n      let checked = item[\"done\"] ? \"checked\" : \"\";\n      return `<li ><input type=checkbox ${checked} data-idx=\"${i}\"></input> <label>${item['add-todo']}</label></li>`;\n        // const newTodo = document.createElement(\"li\");\n        // const todoCheckbox = document.createElement(\"input\");\n        // // todoCheckbox.innerHTML = \"<input type=\"\" >\"\n        // todoCheckbox.type = \"checkbox\";\n        // todoCheckbox.checked = false;\n        // todoCheckbox.setAttribute(\"data-checked\", false);\n        // const todoLabel = document.createElement(\"label\");\n        // todoLabel.innerHTML = item[\"add-todo\"];\n        // newTodo.appendChild(todoCheckbox);\n        // newTodo.appendChild(todoLabel);\n        // ul.appendChild(newTodo);\n    }).join('');\n}\n//find all the todo items (li) relog it into local storage (clear local storage)\n// go through local storage, and find the one we're currently looking at and reset in local storage\n\n//array from local storage objects, \n//find element to change, change to done\n// reset under the same key to local storage\n// e.target.checked == 'true'\nfunction handleCheckbox(e) {\n    // debugger\n    const local = JSON.parse(localStorage.getItem(\"to-do\"));\n     let item = local[e.target.dataset({idx})];\n     item.target.checked = !item.target.checked;\n    \n}\n\n//function handleCheckbox => \n//when checked, get index of checkbox, key into todoarr and change done: opposite, \n//store into local storage\n\n// do we need to set an id to access the li\n\nfunction addListener(){\n  const submitButton =  document.querySelector('input[type=submit]');\n  submitButton.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    addTodo();\n  });\n}\n\naddListener();\nif (localStorage.getItem(\"to-do\") !== null) populateList();\n// localStorage.clear();\nlet checkboxUl = document.querySelector(\".todos\");\ncheckboxUl.addEventListener(\"click\", handleCheckbox);\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    deleteChild();\n  const element = document.createElement('p');\n  element.innerHTML = string;\n  htmlElement.appendChild(element);\n};\n\nfunction deleteChild() { \n    var e = document.querySelector(\"#clock\"); \n    \n    //e.firstElementChild can be used. \n    var child = e.lastElementChild;  \n    while (child) { \n        e.removeChild(child); \n        child = e.lastElementChild; \n    } \n}\n\n\nhtmlGenerator('TGIF', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });