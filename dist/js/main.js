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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ManageTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ManageTask */ \"./assets/js/modules/ManageTask.js\");\n// **  TO DO LIST - built with JS ES6 **\n// by Marco Gregorin\n// v 1.0.0\n\nvar manageTask = new _modules_ManageTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/modules/ManageTask.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/ManageTask.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ManageTask = function ManageTask() {\n  _classCallCheck(this, ManageTask);\n\n  // **** DEFINE GLOBAL VARIABLES **** //\n  var addTaskForm = document.querySelector('#addTaskForm');\n  var addTaskButton = document.querySelector('#addTaskButton');\n  var addTaskInput = document.querySelector('#addTaskInput');\n  var taskList = document.querySelector('#tasksList');\n  var alertMessage = document.createElement('span'); // **** FUNCTION THAT CREATES LI **** //\n\n  function createListItem(inputValue) {\n    // Create li item\n    var newlistItem = document.createElement('li');\n    var taskText = document.createElement('span'); // Get input value and add it to the li\n\n    taskText.innerHTML = inputValue; // Create a complete task icon\n\n    var newListCompleteIcon = document.createElement('img');\n    newListCompleteIcon.src = \"assets/img/checked.svg\";\n    newListCompleteIcon.className = 'task-icon'; // Add checkbox to the li\n\n    newlistItem.prepend(taskText);\n    newlistItem.prepend(newListCompleteIcon); // Return list item to the handler\n\n    return newlistItem;\n  } // **** FRONT-END VALIDATION **** //\n\n\n  function validateInput() {\n    var messageIsPresent = addTaskForm.querySelector('.alertMessage');\n\n    if (!messageIsPresent) {\n      alertMessage.className = 'alertMessage';\n      addTaskInput.classList.add('inputError');\n      alertMessage.textContent = 'Please insert some value';\n      addTaskForm.appendChild(alertMessage);\n    }\n  } // **** ADD NEW TASK ITEM **** //\n\n\n  addTaskButton.addEventListener('click', function (event) {\n    // Prevent broswer from refreshing when form is submitted\n    event.preventDefault(); // Remove validation label if is messgae is present\n\n    if (addTaskForm.appendChild(alertMessage)) {\n      addTaskForm.removeChild(alertMessage);\n      addTaskInput.classList.remove('inputError');\n    }\n\n    ;\n    var inputValue = addTaskInput.value; // Run Function that creates the LI item\n\n    if (inputValue === '') {\n      validateInput();\n    } else {\n      var li = createListItem(inputValue); // Display li into #tasklist ul\n\n      taskList.append(li);\n    } // Clean input value in form after item is added\n\n\n    addTaskInput.value = \"\";\n  }); // **** REMOVE TASK WHEN IS COMPLETED  **** //\n\n  taskList.addEventListener('click', function (event) {\n    var clickedItem = event.target;\n\n    if (clickedItem.tagName == 'IMG' & clickedItem.classList.contains(\"task-icon\")) {\n      var li = clickedItem.parentElement;\n      var ul = li.parentElement;\n      ul.removeChild(li);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageTask);\n\n//# sourceURL=webpack:///./assets/js/modules/ManageTask.js?");

/***/ })

/******/ });