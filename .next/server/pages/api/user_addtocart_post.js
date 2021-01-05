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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user_addtocart_post.js");
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

/***/ "./pages/api/user_addtocart_post.js":
/*!******************************************!*\
  !*** ./pages/api/user_addtocart_post.js ***!
  \******************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/iteminstance */ \"./models/iteminstance.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n\n\nconst config = {\n  api: {\n    externalResolver: true\n  }\n};\nasync function handler(req, res) {\n  req.body = JSON.parse(req.body);\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //https://stackoverflow.com/questions/38439748/best-way-of-chaining-mongoose-queries\n\n  _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndUpdate({\n    user: req.body.user,\n    status: 'Cart',\n    item: req.body.itemid\n  }, {\n    $inc: {\n      quantity: req.body.count\n    },\n    buy_date: Date.now(),\n    check: true\n  }).then(res => {\n    if (res == null) {\n      var iteminstance = new _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        item: req.body.itemid,\n        user: req.body.user,\n        status: 'Cart',\n        quantity: req.body.count,\n        check: true\n      });\n      return iteminstance.save().then(result => console.log('result: ', result));\n    }\n  }).then(() => {\n    return _models_iteminstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      user: req.body.user,\n      status: 'Cart'\n    }).populate('item');\n  }).then(item_carts => {\n    res.status(201).json({\n      data: item_carts\n    });\n    res.end();\n  }).catch(err => {\n    console.log('err in addtocart_post.js: ', err);\n    res.status(500).json({\n      error: err\n    });\n    res.end();\n  });\n  /*\n   () => {\n          return ItemInstance.find({\n              user: req.body.user,\n              status: 'Cart',\n          }).populate('item');\n   await ItemInstance.findOneAndUpdate(\n  { user: req.body.user, status: 'Cart', item: req.body.itemid },\n  { $inc: { quantity: req.body.count }, buy_date: Date.now(), check: true }\n  ).exec(function (err, items_cart) {\n  if (err) {\n    res.send('err');\n    console.log('err: ', err);\n    res.end();\n    return new Error(err);\n  } else if (items_cart == null) {\n    var iteminstance = new ItemInstance({\n      item: req.body.itemid,\n      user: req.body.user,\n      quantity: req.body.count,\n    });\n    iteminstance.save(function (err) {\n      if (err) {\n        return new Error(err);\n      }\n      console.log('add new instance to itemInstance');\n    });\n  } else {\n    // Successful - redirect to new record.\n    console.log('update exist itemInstance');\n  }\n  });\n  ItemInstance.find({ user: req.body.user, status: 'Cart' })\n  .populate('item')\n  .exec(function (err, items_carts) {\n    if (err) {\n      res.send('err');\n      console.log('err: ', err);\n      res.end();\n      return new Error(err);\n    } else {\n      // Successful.\n      console.log('find exist itemInstance');\n       res.status(201).json({ data: items_carts });\n      res.end();\n    }\n  });*/\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcl9hZGR0b2NhcnRfcG9zdC5qcz9kOTAwIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsImRiQ29ubmVjdCIsIkl0ZW1JbnN0YW5jZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJ1c2VyIiwic3RhdHVzIiwiaXRlbSIsIml0ZW1pZCIsIiRpbmMiLCJxdWFudGl0eSIsImNvdW50IiwiYnV5X2RhdGUiLCJEYXRlIiwibm93IiwiY2hlY2siLCJ0aGVuIiwiaXRlbWluc3RhbmNlIiwic2F2ZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicG9wdWxhdGUiLCJpdGVtX2NhcnRzIiwianNvbiIsImRhdGEiLCJlbmQiLCJjYXRjaCIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBRztBQUNsQkMsS0FBRyxFQUFFO0FBQ0RDLG9CQUFnQixFQUFFO0FBRGpCO0FBRGEsQ0FBZjtBQU1RLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM1Q0QsS0FBRyxDQUFDRSxJQUFKLEdBQVdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLENBQUNFLElBQWYsQ0FBWDtBQUVBLFFBQU1HLGdFQUFTLEVBQWYsQ0FINEMsQ0FJNUM7O0FBQ0FDLDhEQUFZLENBQUNDLGdCQUFiLENBQ0k7QUFBRUMsUUFBSSxFQUFFUixHQUFHLENBQUNFLElBQUosQ0FBU00sSUFBakI7QUFBdUJDLFVBQU0sRUFBRSxNQUEvQjtBQUF1Q0MsUUFBSSxFQUFFVixHQUFHLENBQUNFLElBQUosQ0FBU1M7QUFBdEQsR0FESixFQUVJO0FBQ0lDLFFBQUksRUFBRTtBQUFFQyxjQUFRLEVBQUViLEdBQUcsQ0FBQ0UsSUFBSixDQUFTWTtBQUFyQixLQURWO0FBRUlDLFlBQVEsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBRmQ7QUFHSUMsU0FBSyxFQUFFO0FBSFgsR0FGSixFQVFLQyxJQVJMLENBUVdsQixHQUFELElBQVM7QUFDWCxRQUFJQSxHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNiLFVBQUltQixZQUFZLEdBQUcsSUFBSWQsNERBQUosQ0FBaUI7QUFDaENJLFlBQUksRUFBRVYsR0FBRyxDQUFDRSxJQUFKLENBQVNTLE1BRGlCO0FBRWhDSCxZQUFJLEVBQUVSLEdBQUcsQ0FBQ0UsSUFBSixDQUFTTSxJQUZpQjtBQUdoQ0MsY0FBTSxFQUFFLE1BSHdCO0FBSWhDSSxnQkFBUSxFQUFFYixHQUFHLENBQUNFLElBQUosQ0FBU1ksS0FKYTtBQUtoQ0ksYUFBSyxFQUFFO0FBTHlCLE9BQWpCLENBQW5CO0FBUUEsYUFBT0UsWUFBWSxDQUNkQyxJQURFLEdBRUZGLElBRkUsQ0FFSUcsTUFBRCxJQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QixDQUZmLENBQVA7QUFHSDtBQUNKLEdBdEJMLEVBdUJLSCxJQXZCTCxDQXVCVSxNQUFNO0FBQ1IsV0FBT2IsNERBQVksQ0FBQ21CLElBQWIsQ0FBa0I7QUFDckJqQixVQUFJLEVBQUVSLEdBQUcsQ0FBQ0UsSUFBSixDQUFTTSxJQURNO0FBRXJCQyxZQUFNLEVBQUU7QUFGYSxLQUFsQixFQUdKaUIsUUFISSxDQUdLLE1BSEwsQ0FBUDtBQUlILEdBNUJMLEVBNkJLUCxJQTdCTCxDQTZCV1EsVUFBRCxJQUFnQjtBQUNsQjFCLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JtQixJQUFoQixDQUFxQjtBQUFFQyxVQUFJLEVBQUVGO0FBQVIsS0FBckI7QUFDQTFCLE9BQUcsQ0FBQzZCLEdBQUo7QUFDSCxHQWhDTCxFQWlDS0MsS0FqQ0wsQ0FpQ1lDLEdBQUQsSUFBUztBQUNaVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ1EsR0FBMUM7QUFDQS9CLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JtQixJQUFoQixDQUFxQjtBQUFFSyxXQUFLLEVBQUVEO0FBQVQsS0FBckI7QUFDQS9CLE9BQUcsQ0FBQzZCLEdBQUo7QUFDSCxHQXJDTDtBQXNDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0MiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcl9hZGR0b2NhcnRfcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtSW5zdGFuY2UgZnJvbSAnLi4vLi4vbW9kZWxzL2l0ZW1pbnN0YW5jZSc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICByZXEuYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODQzOTc0OC9iZXN0LXdheS1vZi1jaGFpbmluZy1tb25nb29zZS1xdWVyaWVzXG4gICAgSXRlbUluc3RhbmNlLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgIHsgdXNlcjogcmVxLmJvZHkudXNlciwgc3RhdHVzOiAnQ2FydCcsIGl0ZW06IHJlcS5ib2R5Lml0ZW1pZCB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAkaW5jOiB7IHF1YW50aXR5OiByZXEuYm9keS5jb3VudCB9LFxuICAgICAgICAgICAgYnV5X2RhdGU6IERhdGUubm93KCksXG4gICAgICAgICAgICBjaGVjazogdHJ1ZSxcbiAgICAgICAgfVxuICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1pbnN0YW5jZSA9IG5ldyBJdGVtSW5zdGFuY2Uoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiByZXEuYm9keS5pdGVtaWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcS5ib2R5LnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogcmVxLmJvZHkuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1pbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAuc2F2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gSXRlbUluc3RhbmNlLmZpbmQoe1xuICAgICAgICAgICAgICAgIHVzZXI6IHJlcS5ib2R5LnVzZXIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQ2FydCcsXG4gICAgICAgICAgICB9KS5wb3B1bGF0ZSgnaXRlbScpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoaXRlbV9jYXJ0cykgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhOiBpdGVtX2NhcnRzIH0pO1xuICAgICAgICAgICAgcmVzLmVuZCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VyciBpbiBhZGR0b2NhcnRfcG9zdC5qczogJywgZXJyKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgIHJlcy5lbmQoKTtcbiAgICAgICAgfSk7XG4gICAgLypcblxuICAgICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBJdGVtSW5zdGFuY2UuZmluZCh7XG4gICAgICAgICAgICAgICAgdXNlcjogcmVxLmJvZHkudXNlcixcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdDYXJ0JyxcbiAgICAgICAgICAgIH0pLnBvcHVsYXRlKCdpdGVtJyk7XG5cblxuXG4gIGF3YWl0IEl0ZW1JbnN0YW5jZS5maW5kT25lQW5kVXBkYXRlKFxuICAgIHsgdXNlcjogcmVxLmJvZHkudXNlciwgc3RhdHVzOiAnQ2FydCcsIGl0ZW06IHJlcS5ib2R5Lml0ZW1pZCB9LFxuICAgIHsgJGluYzogeyBxdWFudGl0eTogcmVxLmJvZHkuY291bnQgfSwgYnV5X2RhdGU6IERhdGUubm93KCksIGNoZWNrOiB0cnVlIH1cbiAgKS5leGVjKGZ1bmN0aW9uIChlcnIsIGl0ZW1zX2NhcnQpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXMuc2VuZCgnZXJyJyk7XG4gICAgICBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpO1xuICAgICAgcmVzLmVuZCgpO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpO1xuICAgIH0gZWxzZSBpZiAoaXRlbXNfY2FydCA9PSBudWxsKSB7XG4gICAgICB2YXIgaXRlbWluc3RhbmNlID0gbmV3IEl0ZW1JbnN0YW5jZSh7XG4gICAgICAgIGl0ZW06IHJlcS5ib2R5Lml0ZW1pZCxcbiAgICAgICAgdXNlcjogcmVxLmJvZHkudXNlcixcbiAgICAgICAgcXVhbnRpdHk6IHJlcS5ib2R5LmNvdW50LFxuICAgICAgfSk7XG4gICAgICBpdGVtaW5zdGFuY2Uuc2F2ZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCBuZXcgaW5zdGFuY2UgdG8gaXRlbUluc3RhbmNlJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3VjY2Vzc2Z1bCAtIHJlZGlyZWN0IHRvIG5ldyByZWNvcmQuXG4gICAgICBjb25zb2xlLmxvZygndXBkYXRlIGV4aXN0IGl0ZW1JbnN0YW5jZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgSXRlbUluc3RhbmNlLmZpbmQoeyB1c2VyOiByZXEuYm9keS51c2VyLCBzdGF0dXM6ICdDYXJ0JyB9KVxuICAgIC5wb3B1bGF0ZSgnaXRlbScpXG4gICAgLmV4ZWMoZnVuY3Rpb24gKGVyciwgaXRlbXNfY2FydHMpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVzLnNlbmQoJ2VycicpO1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpO1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFN1Y2Nlc3NmdWwuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaW5kIGV4aXN0IGl0ZW1JbnN0YW5jZScpO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YTogaXRlbXNfY2FydHMgfSk7XG4gICAgICAgIHJlcy5lbmQoKTtcbiAgICAgIH1cbiAgICB9KTsqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user_addtocart_post.js\n");

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

/***/ })

/******/ });