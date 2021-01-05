module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user_chkchg_post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/iteminstance.js":
/*!********************************!*\
  !*** ./models/iteminstance.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst {\n  DateTime\n} = __webpack_require__(/*! luxon */ \"luxon\"); //for date handling\n\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar ItemInstanceSchema = new Schema({\n  item: {\n    type: Schema.ObjectId,\n    ref: 'Item',\n    required: true\n  },\n  // Reference to the associated item.\n  user: {\n    type: String,\n    required: true\n  },\n  // Reference to the associated user.\n  //imprint: { type: String, required: true },\n  status: {\n    type: String,\n    required: true,\n    enum: ['Cart', 'Buy', 'Checkout'],\n    default: 'Cart'\n  },\n  quantity: {\n    type: Number,\n    required: true\n  },\n  check: {\n    type: Boolean,\n    default: true\n  },\n  buy_date: {\n    type: Date,\n    default: Date.now()\n  },\n  ordernumber: {\n    type: String\n  },\n  commenttext: {\n    type: String\n  },\n  commentimage: [{\n    type: String\n  }]\n}); // Virtual for this iteminstance object's URL.\n\nItemInstanceSchema.virtual('url').get(function () {\n  return '/auth/iteminstance/' + this._id;\n});\nItemInstanceSchema.virtual('buy_date_formatted').get(function () {\n  return DateTime.fromJSDate(this.buy_date).toLocaleString(DateTime.DATE_MED);\n});\nItemInstanceSchema.virtual('buy_date_yyyy_mm_dd').get(function () {\n  return DateTime.fromJSDate(this.buy_date).toISODate(); //format 'YYYY-MM-DD'\n}); // Export model.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.ItemInstance || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('ItemInstance', ItemInstanceSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvaXRlbWluc3RhbmNlLmpzPzcwMTIiXSwibmFtZXMiOlsiRGF0ZVRpbWUiLCJyZXF1aXJlIiwiU2NoZW1hIiwibW9uZ29vc2UiLCJJdGVtSW5zdGFuY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJ1c2VyIiwiU3RyaW5nIiwic3RhdHVzIiwiZW51bSIsImRlZmF1bHQiLCJxdWFudGl0eSIsIk51bWJlciIsImNoZWNrIiwiQm9vbGVhbiIsImJ1eV9kYXRlIiwiRGF0ZSIsIm5vdyIsIm9yZGVybnVtYmVyIiwiY29tbWVudHRleHQiLCJjb21tZW50aW1hZ2UiLCJ2aXJ0dWFsIiwiZ2V0IiwiX2lkIiwiZnJvbUpTRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiREFURV9NRUQiLCJ0b0lTT0RhdGUiLCJtb2RlbHMiLCJJdGVtSW5zdGFuY2UiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWVDLG1CQUFPLENBQUMsb0JBQUQsQ0FBNUIsQyxDQUF1Qzs7O0FBRXZDLElBQUlDLE1BQU0sR0FBR0MsK0NBQVEsQ0FBQ0QsTUFBdEI7QUFFQSxJQUFJRSxrQkFBa0IsR0FBRyxJQUFJRixNQUFKLENBQVc7QUFDaENHLE1BQUksRUFBRTtBQUFFQyxRQUFJLEVBQUVKLE1BQU0sQ0FBQ0ssUUFBZjtBQUF5QkMsT0FBRyxFQUFFLE1BQTlCO0FBQXNDQyxZQUFRLEVBQUU7QUFBaEQsR0FEMEI7QUFDOEI7QUFDOURDLE1BQUksRUFBRTtBQUFFSixRQUFJLEVBQUVLLE1BQVI7QUFBZ0JGLFlBQVEsRUFBRTtBQUExQixHQUYwQjtBQUVRO0FBQ3hDO0FBQ0FHLFFBQU0sRUFBRTtBQUNKTixRQUFJLEVBQUVLLE1BREY7QUFFSkYsWUFBUSxFQUFFLElBRk47QUFHSkksUUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsVUFBaEIsQ0FIRjtBQUlKQyxXQUFPLEVBQUU7QUFKTCxHQUp3QjtBQVVoQ0MsVUFBUSxFQUFFO0FBQUVULFFBQUksRUFBRVUsTUFBUjtBQUFnQlAsWUFBUSxFQUFFO0FBQTFCLEdBVnNCO0FBV2hDUSxPQUFLLEVBQUU7QUFBRVgsUUFBSSxFQUFFWSxPQUFSO0FBQWlCSixXQUFPLEVBQUU7QUFBMUIsR0FYeUI7QUFZaENLLFVBQVEsRUFBRTtBQUFFYixRQUFJLEVBQUVjLElBQVI7QUFBY04sV0FBTyxFQUFFTSxJQUFJLENBQUNDLEdBQUw7QUFBdkIsR0Fac0I7QUFhaENDLGFBQVcsRUFBRTtBQUFFaEIsUUFBSSxFQUFFSztBQUFSLEdBYm1CO0FBY2hDWSxhQUFXLEVBQUU7QUFBRWpCLFFBQUksRUFBRUs7QUFBUixHQWRtQjtBQWVoQ2EsY0FBWSxFQUFFLENBQUM7QUFBRWxCLFFBQUksRUFBRUs7QUFBUixHQUFEO0FBZmtCLENBQVgsQ0FBekIsQyxDQWtCQTs7QUFDQVAsa0JBQWtCLENBQUNxQixPQUFuQixDQUEyQixLQUEzQixFQUFrQ0MsR0FBbEMsQ0FBc0MsWUFBWTtBQUM5QyxTQUFPLHdCQUF3QixLQUFLQyxHQUFwQztBQUNILENBRkQ7QUFJQXZCLGtCQUFrQixDQUFDcUIsT0FBbkIsQ0FBMkIsb0JBQTNCLEVBQWlEQyxHQUFqRCxDQUFxRCxZQUFZO0FBQzdELFNBQU8xQixRQUFRLENBQUM0QixVQUFULENBQW9CLEtBQUtULFFBQXpCLEVBQW1DVSxjQUFuQyxDQUFrRDdCLFFBQVEsQ0FBQzhCLFFBQTNELENBQVA7QUFDSCxDQUZEO0FBSUExQixrQkFBa0IsQ0FBQ3FCLE9BQW5CLENBQTJCLHFCQUEzQixFQUFrREMsR0FBbEQsQ0FBc0QsWUFBWTtBQUM5RCxTQUFPMUIsUUFBUSxDQUFDNEIsVUFBVCxDQUFvQixLQUFLVCxRQUF6QixFQUFtQ1ksU0FBbkMsRUFBUCxDQUQ4RCxDQUNQO0FBQzFELENBRkQsRSxDQUlBOztBQUNlNUIsOEdBQVEsQ0FBQzZCLE1BQVQsQ0FBZ0JDLFlBQWhCLElBQ1g5QiwrQ0FBUSxDQUFDK0IsS0FBVCxDQUFlLGNBQWYsRUFBK0I5QixrQkFBL0IsQ0FESiIsImZpbGUiOiIuL21vZGVscy9pdGVtaW5zdGFuY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgeyBEYXRlVGltZSB9ID0gcmVxdWlyZSgnbHV4b24nKTsgLy9mb3IgZGF0ZSBoYW5kbGluZ1xuXG52YXIgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuXG52YXIgSXRlbUluc3RhbmNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgaXRlbTogeyB0eXBlOiBTY2hlbWEuT2JqZWN0SWQsIHJlZjogJ0l0ZW0nLCByZXF1aXJlZDogdHJ1ZSB9LCAvLyBSZWZlcmVuY2UgdG8gdGhlIGFzc29jaWF0ZWQgaXRlbS5cbiAgICB1c2VyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSwgLy8gUmVmZXJlbmNlIHRvIHRoZSBhc3NvY2lhdGVkIHVzZXIuXG4gICAgLy9pbXByaW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZW51bTogWydDYXJ0JywgJ0J1eScsICdDaGVja291dCddLFxuICAgICAgICBkZWZhdWx0OiAnQ2FydCcsXG4gICAgfSxcbiAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgY2hlY2s6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGJ1eV9kYXRlOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93KCkgfSxcbiAgICBvcmRlcm51bWJlcjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb21tZW50dGV4dDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb21tZW50aW1hZ2U6IFt7IHR5cGU6IFN0cmluZyB9XSxcbn0pO1xuXG4vLyBWaXJ0dWFsIGZvciB0aGlzIGl0ZW1pbnN0YW5jZSBvYmplY3QncyBVUkwuXG5JdGVtSW5zdGFuY2VTY2hlbWEudmlydHVhbCgndXJsJykuZ2V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy9hdXRoL2l0ZW1pbnN0YW5jZS8nICsgdGhpcy5faWQ7XG59KTtcblxuSXRlbUluc3RhbmNlU2NoZW1hLnZpcnR1YWwoJ2J1eV9kYXRlX2Zvcm1hdHRlZCcpLmdldChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUodGhpcy5idXlfZGF0ZSkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9NRUQpO1xufSk7XG5cbkl0ZW1JbnN0YW5jZVNjaGVtYS52aXJ0dWFsKCdidXlfZGF0ZV95eXl5X21tX2RkJykuZ2V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZSh0aGlzLmJ1eV9kYXRlKS50b0lTT0RhdGUoKTsgLy9mb3JtYXQgJ1lZWVktTU0tREQnXG59KTtcblxuLy8gRXhwb3J0IG1vZGVsLlxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkl0ZW1JbnN0YW5jZSB8fFxuICAgIG1vbmdvb3NlLm1vZGVsKCdJdGVtSW5zdGFuY2UnLCBJdGVtSW5zdGFuY2VTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/iteminstance.js\n");

/***/ }),

/***/ "./pages/api/user_chkchg_post.js":
/*!***************************************!*\
  !*** ./pages/api/user_chkchg_post.js ***!
  \***************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/iteminstance */ \"./models/iteminstance.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst config = {\n  api: {\n    externalResolver: true\n  }\n};\nasync function handler(req, res) {\n  req.body = JSON.parse(req.body);\n  console.log('req.body: ', req.body);\n  var errors = [];\n  var validatedinsid;\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_2___default.a.trim(req.body.insid))) {\n    errors.push(' The insid is empty');\n  } else {\n    validatedinsid = validator__WEBPACK_IMPORTED_MODULE_2___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_2___default.a.trim(req.body.insid));\n  }\n\n  if (errors.length > 0) {\n    res.status(500).json({\n      error: errors,\n      status: 500\n    });\n    res.end();\n    return;\n  }\n\n  _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(validatedinsid, {\n    check: req.body.check,\n    buy_date: Date.now()\n  }).populate('item').then(newins => {\n    console.log('newins: ', newins);\n    res.status(201).json({\n      status: 201,\n      data: newins\n    });\n    res.end();\n  }).catch(err => {\n    res.status(500).json({\n      status: 500,\n      error: err\n    });\n    res.end();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcl9jaGtjaGdfcG9zdC5qcz9mMjU4Il0sIm5hbWVzIjpbImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ2YWxpZGF0ZWRpbnNpZCIsImRiQ29ubmVjdCIsInZhbGlkYXRvciIsImlzRW1wdHkiLCJ0cmltIiwiaW5zaWQiLCJwdXNoIiwiZXNjYXBlIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZW5kIiwiSXRlbUluc3RhbmNlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJjaGVjayIsImJ1eV9kYXRlIiwiRGF0ZSIsIm5vdyIsInBvcHVsYXRlIiwidGhlbiIsIm5ld2lucyIsImRhdGEiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFTyxNQUFNQSxNQUFNLEdBQUc7QUFDbEJDLEtBQUcsRUFBRTtBQUNEQyxvQkFBZ0IsRUFBRTtBQURqQjtBQURhLENBQWY7QUFNUSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUNELEtBQUcsQ0FBQ0UsSUFBSixHQUFXQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBRyxDQUFDRSxJQUFmLENBQVg7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQk4sR0FBRyxDQUFDRSxJQUE5QjtBQUNBLE1BQUlLLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLFFBQU1DLGdFQUFTLEVBQWY7O0FBRUEsTUFBSUMsZ0RBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsZ0RBQVMsQ0FBQ0UsSUFBVixDQUFlWixHQUFHLENBQUNFLElBQUosQ0FBU1csS0FBeEIsQ0FBbEIsQ0FBSixFQUF1RDtBQUNuRE4sVUFBTSxDQUFDTyxJQUFQLENBQVkscUJBQVo7QUFDSCxHQUZELE1BRU87QUFDSE4sa0JBQWMsR0FBR0UsZ0RBQVMsQ0FBQ0ssTUFBVixDQUFpQkwsZ0RBQVMsQ0FBQ0UsSUFBVixDQUFlWixHQUFHLENBQUNFLElBQUosQ0FBU1csS0FBeEIsQ0FBakIsQ0FBakI7QUFDSDs7QUFFRCxNQUFJTixNQUFNLENBQUNTLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJmLE9BQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUVaLE1BQVQ7QUFBaUJVLFlBQU0sRUFBRTtBQUF6QixLQUFyQjtBQUNBaEIsT0FBRyxDQUFDbUIsR0FBSjtBQUNBO0FBQ0g7O0FBRURDLDhEQUFZLENBQUNDLGlCQUFiLENBQStCZCxjQUEvQixFQUErQztBQUMzQ2UsU0FBSyxFQUFFdkIsR0FBRyxDQUFDRSxJQUFKLENBQVNxQixLQUQyQjtBQUUzQ0MsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7QUFGaUMsR0FBL0MsRUFJS0MsUUFKTCxDQUljLE1BSmQsRUFLS0MsSUFMTCxDQUtXQyxNQUFELElBQVk7QUFDZHhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0J1QixNQUF4QjtBQUNBNUIsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVELFlBQU0sRUFBRSxHQUFWO0FBQWVhLFVBQUksRUFBRUQ7QUFBckIsS0FBckI7QUFDQTVCLE9BQUcsQ0FBQ21CLEdBQUo7QUFDSCxHQVRMLEVBVUtXLEtBVkwsQ0FVWUMsR0FBRCxJQUFTO0FBQ1ovQixPQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUQsWUFBTSxFQUFFLEdBQVY7QUFBZUUsV0FBSyxFQUFFYTtBQUF0QixLQUFyQjtBQUNBL0IsT0FBRyxDQUFDbUIsR0FBSjtBQUNILEdBYkw7QUFjSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyX2Noa2NoZ19wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1JbnN0YW5jZSBmcm9tICcuLi8uLi9tb2RlbHMvaXRlbWluc3RhbmNlJztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcblxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBleHRlcm5hbFJlc29sdmVyOiB0cnVlLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgcmVxLmJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICBjb25zb2xlLmxvZygncmVxLmJvZHk6ICcsIHJlcS5ib2R5KTtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgdmFyIHZhbGlkYXRlZGluc2lkO1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gICAgaWYgKHZhbGlkYXRvci5pc0VtcHR5KHZhbGlkYXRvci50cmltKHJlcS5ib2R5Lmluc2lkKSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJyBUaGUgaW5zaWQgaXMgZW1wdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0ZWRpbnNpZCA9IHZhbGlkYXRvci5lc2NhcGUodmFsaWRhdG9yLnRyaW0ocmVxLmJvZHkuaW5zaWQpKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3JzLCBzdGF0dXM6IDUwMCB9KTtcbiAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgSXRlbUluc3RhbmNlLmZpbmRCeUlkQW5kVXBkYXRlKHZhbGlkYXRlZGluc2lkLCB7XG4gICAgICAgIGNoZWNrOiByZXEuYm9keS5jaGVjayxcbiAgICAgICAgYnV5X2RhdGU6IERhdGUubm93KCksXG4gICAgfSlcbiAgICAgICAgLnBvcHVsYXRlKCdpdGVtJylcbiAgICAgICAgLnRoZW4oKG5ld2lucykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld2luczogJywgbmV3aW5zKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3RhdHVzOiAyMDEsIGRhdGE6IG5ld2lucyB9KTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzOiA1MDAsIGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user_chkchg_post.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* This is a database connection function*/\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('returnOriginal', false);\nconst connection = {};\n/* creating connection object*/\n\nasync function dbConnect() {\n  /* check if we have connection to our databse*/\n  if (connection.isConnected) {\n    return;\n  }\n  /* connecting to our database */\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: false\n  });\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInNldCIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQUEsK0NBQVEsQ0FBQ0MsR0FBVCxDQUFhLGdCQUFiLEVBQStCLEtBQS9CO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQXVCOztBQUV2QixlQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCO0FBQ0EsTUFBSUQsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQ3hCO0FBQ0g7QUFFRDs7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHLE1BQU1MLCtDQUFRLENBQUNNLE9BQVQsQ0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUE3QixFQUEwQztBQUN2REMsbUJBQWUsRUFBRSxJQURzQztBQUV2REMsc0JBQWtCLEVBQUUsSUFGbUM7QUFHdkRDLG9CQUFnQixFQUFFO0FBSHFDLEdBQTFDLENBQWpCO0FBTUFWLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDUSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDSDs7QUFFY1gsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGlzIGEgZGF0YWJhc2UgY29ubmVjdGlvbiBmdW5jdGlvbiovXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xubW9uZ29vc2Uuc2V0KCdyZXR1cm5PcmlnaW5hbCcsIGZhbHNlKTtcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9OyAvKiBjcmVhdGluZyBjb25uZWN0aW9uIG9iamVjdCovXG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICAvKiBjaGVjayBpZiB3ZSBoYXZlIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFic2UqL1xuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBjb25uZWN0aW5nIHRvIG91ciBkYXRhYmFzZSAqL1xuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"luxon\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiP2EzZDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibHV4b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsdXhvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///luxon\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3JcIj9iMGNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///validator\n");

/***/ })

/******/ });