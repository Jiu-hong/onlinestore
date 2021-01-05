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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user_chckout_post.js");
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

/***/ "./pages/api/user_chckout_post.js":
/*!****************************************!*\
  !*** ./pages/api/user_chckout_post.js ***!
  \****************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/iteminstance */ \"./models/iteminstance.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst config = {\n  api: {\n    externalResolver: true\n  }\n};\nasync function handler(req, res) {\n  req.body = JSON.parse(req.body);\n  var ordernumber;\n  var validateduser;\n\n  if (validator__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_2___default.a.trim(req.body.user))) {\n    errors.push(' The user is empty');\n  } else {\n    validateduser = validator__WEBPACK_IMPORTED_MODULE_2___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_2___default.a.trim(req.body.user));\n  }\n\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  ordernumber = Math.floor(new Date().valueOf() + Math.random()); // first write to order document?\n\n  _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateMany({\n    status: 'Cart',\n    check: true\n  }, {\n    status: 'Checkout',\n    ordernumber: ordernumber,\n    buy_date: Date.now()\n  }).then(() => {\n    return _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      user: req.body.user,\n      status: 'Cart'\n    }).populate('item');\n  }).then(items_carts => {\n    res.status(201).json({\n      data: items_carts\n    });\n    res.end();\n  }).catch(err => {\n    res.status(500).json({\n      error: err\n    });\n    res.end();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcl9jaGNrb3V0X3Bvc3QuanM/ZDZlNiJdLCJuYW1lcyI6WyJjb25maWciLCJhcGkiLCJleHRlcm5hbFJlc29sdmVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJvcmRlcm51bWJlciIsInZhbGlkYXRlZHVzZXIiLCJ2YWxpZGF0b3IiLCJpc0VtcHR5IiwidHJpbSIsInVzZXIiLCJlcnJvcnMiLCJwdXNoIiwiZXNjYXBlIiwiZGJDb25uZWN0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsInZhbHVlT2YiLCJyYW5kb20iLCJJdGVtSW5zdGFuY2UiLCJ1cGRhdGVNYW55Iiwic3RhdHVzIiwiY2hlY2siLCJidXlfZGF0ZSIsIm5vdyIsInRoZW4iLCJmaW5kIiwicG9wdWxhdGUiLCJpdGVtc19jYXJ0cyIsImpzb24iLCJkYXRhIiwiZW5kIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxNQUFNLEdBQUc7QUFDbEJDLEtBQUcsRUFBRTtBQUNEQyxvQkFBZ0IsRUFBRTtBQURqQjtBQURhLENBQWY7QUFNUSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUNELEtBQUcsQ0FBQ0UsSUFBSixHQUFXQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBRyxDQUFDRSxJQUFmLENBQVg7QUFFQSxNQUFJRyxXQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFFQSxNQUFJQyxnREFBUyxDQUFDQyxPQUFWLENBQWtCRCxnREFBUyxDQUFDRSxJQUFWLENBQWVULEdBQUcsQ0FBQ0UsSUFBSixDQUFTUSxJQUF4QixDQUFsQixDQUFKLEVBQXNEO0FBQ2xEQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxvQkFBWjtBQUNILEdBRkQsTUFFTztBQUNITixpQkFBYSxHQUFHQyxnREFBUyxDQUFDTSxNQUFWLENBQWlCTixnREFBUyxDQUFDRSxJQUFWLENBQWVULEdBQUcsQ0FBQ0UsSUFBSixDQUFTUSxJQUF4QixDQUFqQixDQUFoQjtBQUNIOztBQUVELFFBQU1JLGdFQUFTLEVBQWY7QUFFQVQsYUFBVyxHQUFHVSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUJILElBQUksQ0FBQ0ksTUFBTCxFQUFsQyxDQUFkLENBZDRDLENBZ0I1Qzs7QUFDQUMsOERBQVksQ0FBQ0MsVUFBYixDQUNJO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FESixFQUVJO0FBQUVELFVBQU0sRUFBRSxVQUFWO0FBQXNCakIsZUFBVyxFQUFFQSxXQUFuQztBQUFnRG1CLFlBQVEsRUFBRVAsSUFBSSxDQUFDUSxHQUFMO0FBQTFELEdBRkosRUFJS0MsSUFKTCxDQUlVLE1BQU07QUFDUixXQUFPTiw0REFBWSxDQUFDTyxJQUFiLENBQWtCO0FBQ3JCakIsVUFBSSxFQUFFVixHQUFHLENBQUNFLElBQUosQ0FBU1EsSUFETTtBQUVyQlksWUFBTSxFQUFFO0FBRmEsS0FBbEIsRUFHSk0sUUFISSxDQUdLLE1BSEwsQ0FBUDtBQUlILEdBVEwsRUFVS0YsSUFWTCxDQVVXRyxXQUFELElBQWlCO0FBQ25CNUIsT0FBRyxDQUFDcUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JRLElBQWhCLENBQXFCO0FBQUVDLFVBQUksRUFBRUY7QUFBUixLQUFyQjtBQUNBNUIsT0FBRyxDQUFDK0IsR0FBSjtBQUNILEdBYkwsRUFjS0MsS0FkTCxDQWNZQyxHQUFELElBQVM7QUFDWmpDLE9BQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCUSxJQUFoQixDQUFxQjtBQUFFSyxXQUFLLEVBQUVEO0FBQVQsS0FBckI7QUFDQWpDLE9BQUcsQ0FBQytCLEdBQUo7QUFDSCxHQWpCTDtBQWtCSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyX2NoY2tvdXRfcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtSW5zdGFuY2UgZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW1pbnN0YW5jZSc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBleHRlcm5hbFJlc29sdmVyOiB0cnVlLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgcmVxLmJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblxuICAgIHZhciBvcmRlcm51bWJlcjtcbiAgICB2YXIgdmFsaWRhdGVkdXNlcjtcblxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eSh2YWxpZGF0b3IudHJpbShyZXEuYm9keS51c2VyKSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJyBUaGUgdXNlciBpcyBlbXB0eScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRlZHVzZXIgPSB2YWxpZGF0b3IuZXNjYXBlKHZhbGlkYXRvci50cmltKHJlcS5ib2R5LnVzZXIpKTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICAgIG9yZGVybnVtYmVyID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgLy8gZmlyc3Qgd3JpdGUgdG8gb3JkZXIgZG9jdW1lbnQ/XG4gICAgSXRlbUluc3RhbmNlLnVwZGF0ZU1hbnkoXG4gICAgICAgIHsgc3RhdHVzOiAnQ2FydCcsIGNoZWNrOiB0cnVlIH0sXG4gICAgICAgIHsgc3RhdHVzOiAnQ2hlY2tvdXQnLCBvcmRlcm51bWJlcjogb3JkZXJudW1iZXIsIGJ1eV9kYXRlOiBEYXRlLm5vdygpIH1cbiAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBJdGVtSW5zdGFuY2UuZmluZCh7XG4gICAgICAgICAgICAgICAgdXNlcjogcmVxLmJvZHkudXNlcixcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdDYXJ0JyxcbiAgICAgICAgICAgIH0pLnBvcHVsYXRlKCdpdGVtJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChpdGVtc19jYXJ0cykgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhOiBpdGVtc19jYXJ0cyB9KTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user_chckout_post.js\n");

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