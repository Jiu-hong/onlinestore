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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user_logon_post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar User1Schema = new Schema({\n  username: {\n    type: String,\n    required: true,\n    maxlength: 100\n  },\n  email: {\n    type: String,\n    required: true,\n    maxlength: 100\n  },\n  password: {\n    type: String,\n    required: true,\n    maxlength: 100\n  },\n  buyer: {\n    type: Boolean,\n    default: true\n  }\n}); //Export model\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User1 || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User1', User1Schema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlci5qcz8xZjY5Il0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiVXNlcjFTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImVtYWlsIiwicGFzc3dvcmQiLCJidXllciIsIkJvb2xlYW4iLCJkZWZhdWx0IiwibW9kZWxzIiwiVXNlcjEiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQSxNQUFNLEdBQUdDLCtDQUFRLENBQUNELE1BQXRCO0FBRUEsSUFBSUUsV0FBVyxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUN6QkcsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRUMsTUFBUjtBQUFnQkMsWUFBUSxFQUFFLElBQTFCO0FBQWdDQyxhQUFTLEVBQUU7QUFBM0MsR0FEZTtBQUV6QkMsT0FBSyxFQUFFO0FBQUVKLFFBQUksRUFBRUMsTUFBUjtBQUFnQkMsWUFBUSxFQUFFLElBQTFCO0FBQWdDQyxhQUFTLEVBQUU7QUFBM0MsR0FGa0I7QUFHekJFLFVBQVEsRUFBRTtBQUFFTCxRQUFJLEVBQUVDLE1BQVI7QUFBZ0JDLFlBQVEsRUFBRSxJQUExQjtBQUFnQ0MsYUFBUyxFQUFFO0FBQTNDLEdBSGU7QUFJekJHLE9BQUssRUFBRTtBQUFFTixRQUFJLEVBQUVPLE9BQVI7QUFBaUJDLFdBQU8sRUFBRTtBQUExQjtBQUprQixDQUFYLENBQWxCLEMsQ0FPQTs7QUFDZVgsOEdBQVEsQ0FBQ1ksTUFBVCxDQUFnQkMsS0FBaEIsSUFBeUJiLCtDQUFRLENBQUNjLEtBQVQsQ0FBZSxPQUFmLEVBQXdCYixXQUF4QixDQUF4QyIsImZpbGUiOiIuL21vZGVscy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxudmFyIFVzZXIxU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWF4bGVuZ3RoOiAxMDAgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDEwMCB9LFxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIG1heGxlbmd0aDogMTAwIH0sXG4gICAgYnV5ZXI6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxufSk7XG5cbi8vRXhwb3J0IG1vZGVsXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuVXNlcjEgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXIxJywgVXNlcjFTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/user_logon_post.js":
/*!**************************************!*\
  !*** ./pages/api/user_logon_post.js ***!
  \**************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"./models/user.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst config = {\n  api: {\n    externalResolver: true,\n    bodyParser: false\n  }\n};\n\nconst getHashedPassword = password => {\n  const sha256 = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha256');\n  const hash = sha256.update(password).digest('base64');\n  return hash;\n};\n\nasync function handler(req, res) {\n  const form = formidable__WEBPACK_IMPORTED_MODULE_3___default()({\n    multiples: true\n  });\n  var validatedemail, validatedpassword;\n  var errors = [];\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  form.parse(req, (err, fields, files) => {\n    if (err) {\n      console.log('err: ', err);\n      res.json(err);\n      return;\n    } // validator text\n\n\n    if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.email))) {\n      errors.push(' The email is empty');\n    } else {\n      if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmail(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.email))) {\n        validatedemail = validator__WEBPACK_IMPORTED_MODULE_4___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.email));\n      } else {\n        errors.push(' The email format is incorrect');\n      }\n    }\n\n    if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.password))) {\n      errors.push(' The password is empty');\n    } else {\n      if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isLength(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.password), {\n        min: 6\n      })) {\n        validatedpassword = validator__WEBPACK_IMPORTED_MODULE_4___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(fields.password));\n      } else {\n        errors.push('The password must be at least 6 charactors.');\n      }\n    }\n\n    if (errors.length > 0) {\n      res.status(500).json({\n        error: errors,\n        status: 500\n      });\n      res.end();\n      return;\n    }\n\n    const hashedPassword = getHashedPassword(validatedpassword);\n    _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      email: validatedemail,\n      password: hashedPassword\n    }).then(user => {\n      if (!user) {\n        errors.push('Invalid username or password');\n        res.status(404).json({\n          status: 404,\n          error: errors\n        });\n        res.end();\n      } else {\n        res.status(201).json({\n          status: 201,\n          data: user\n        });\n        res.end();\n      }\n    }).catch(err => {\n      res.status(500).json({\n        status: 500,\n        error: err\n      });\n      res.end();\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcl9sb2dvbl9wb3N0LmpzPzIyOGQiXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciIsImJvZHlQYXJzZXIiLCJnZXRIYXNoZWRQYXNzd29yZCIsInBhc3N3b3JkIiwic2hhMjU2IiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsImhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybSIsImZvcm1pZGFibGUiLCJtdWx0aXBsZXMiLCJ2YWxpZGF0ZWRlbWFpbCIsInZhbGlkYXRlZHBhc3N3b3JkIiwiZXJyb3JzIiwiZGJDb25uZWN0IiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwidmFsaWRhdG9yIiwiaXNFbXB0eSIsInRyaW0iLCJlbWFpbCIsInB1c2giLCJpc0VtYWlsIiwiZXNjYXBlIiwiaXNMZW5ndGgiLCJtaW4iLCJsZW5ndGgiLCJzdGF0dXMiLCJlcnJvciIsImVuZCIsImhhc2hlZFBhc3N3b3JkIiwiVXNlciIsImZpbmRPbmUiLCJ0aGVuIiwidXNlciIsImRhdGEiLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFTyxNQUFNQSxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxvQkFBZ0IsRUFBRSxJQURmO0FBRUhDLGNBQVUsRUFBRTtBQUZUO0FBRGUsQ0FBZjs7QUFPUCxNQUFNQyxpQkFBaUIsR0FBSUMsUUFBRCxJQUFjO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0MsNkNBQU0sQ0FBQ0MsVUFBUCxDQUFrQixRQUFsQixDQUFmO0FBQ0EsUUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0wsUUFBZCxFQUF3Qk0sTUFBeEIsQ0FB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QixXQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQlgsSUFBaEIsQ0FBcUI7QUFBRVcsZ0JBQU0sRUFBRSxHQUFWO0FBQWVRLGNBQUksRUFBRUQ7QUFBckIsU0FBckI7QUFDQWhDLFdBQUcsQ0FBQzJCLEdBQUo7QUFDRDtBQUNGLEtBVkgsRUFXR08sS0FYSCxDQVdVekIsR0FBRCxJQUFTO0FBQ2RULFNBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWCxJQUFoQixDQUFxQjtBQUFFVyxjQUFNLEVBQUUsR0FBVjtBQUFlQyxhQUFLLEVBQUVqQjtBQUF0QixPQUFyQjtBQUNBVCxTQUFHLENBQUMyQixHQUFKO0FBQ0QsS0FkSDtBQWVELEdBbkREO0FBb0REIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXJfbG9nb25fcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSAnZm9ybWlkYWJsZSc7XG5cbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmNvbnN0IGdldEhhc2hlZFBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IHNoYTI1NiA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKTtcbiAgY29uc3QgaGFzaCA9IHNoYTI1Ni51cGRhdGUocGFzc3dvcmQpLmRpZ2VzdCgnYmFzZTY0Jyk7XG4gIHJldHVybiBoYXNoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBmb3JtID0gZm9ybWlkYWJsZSh7IG11bHRpcGxlczogdHJ1ZSB9KTtcblxuICB2YXIgdmFsaWRhdGVkZW1haWwsIHZhbGlkYXRlZHBhc3N3b3JkO1xuICB2YXIgZXJyb3JzID0gW107XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2VycjogJywgZXJyKTtcbiAgICAgIHJlcy5qc29uKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdG9yIHRleHRcblxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eSh2YWxpZGF0b3IudHJpbShmaWVsZHMuZW1haWwpKSkge1xuICAgICAgZXJyb3JzLnB1c2goJyBUaGUgZW1haWwgaXMgZW1wdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbGlkYXRvci5pc0VtYWlsKHZhbGlkYXRvci50cmltKGZpZWxkcy5lbWFpbCkpKSB7XG4gICAgICAgIHZhbGlkYXRlZGVtYWlsID0gdmFsaWRhdG9yLmVzY2FwZSh2YWxpZGF0b3IudHJpbShmaWVsZHMuZW1haWwpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCcgVGhlIGVtYWlsIGZvcm1hdCBpcyBpbmNvcnJlY3QnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdG9yLmlzRW1wdHkodmFsaWRhdG9yLnRyaW0oZmllbGRzLnBhc3N3b3JkKSkpIHtcbiAgICAgIGVycm9ycy5wdXNoKCcgVGhlIHBhc3N3b3JkIGlzIGVtcHR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWxpZGF0b3IuaXNMZW5ndGgodmFsaWRhdG9yLnRyaW0oZmllbGRzLnBhc3N3b3JkKSwgeyBtaW46IDYgfSkpIHtcbiAgICAgICAgdmFsaWRhdGVkcGFzc3dvcmQgPSB2YWxpZGF0b3IuZXNjYXBlKHZhbGlkYXRvci50cmltKGZpZWxkcy5wYXNzd29yZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLnB1c2goJ1RoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdG9ycy4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9ycywgc3RhdHVzOiA1MDAgfSk7XG4gICAgICByZXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBnZXRIYXNoZWRQYXNzd29yZCh2YWxpZGF0ZWRwYXNzd29yZCk7XG4gICAgVXNlci5maW5kT25lKHsgZW1haWw6IHZhbGlkYXRlZGVtYWlsLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIGVycm9ycy5wdXNoKCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBzdGF0dXM6IDQwNCwgZXJyb3I6IGVycm9ycyB9KTtcbiAgICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdGF0dXM6IDIwMSwgZGF0YTogdXNlciB9KTtcbiAgICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1czogNTAwLCBlcnJvcjogZXJyIH0pO1xuICAgICAgICByZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user_logon_post.js\n");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWRhYmxlXCI/ZWI3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmb3JtaWRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlkYWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formidable\n");

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