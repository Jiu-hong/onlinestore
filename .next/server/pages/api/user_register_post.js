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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user_register_post.js");
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

/***/ "./pages/api/user_register_post.js":
/*!*****************************************!*\
  !*** ./pages/api/user_register_post.js ***!
  \*****************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ \"./models/user.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst config = {\n  api: {\n    externalResolver: true,\n    bodyParser: false\n  }\n};\n\nconst getHashedPassword = password => {\n  const sha256 = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha256');\n  const hash = sha256.update(password).digest('base64');\n  return hash;\n};\n\nasync function handler(req, res) {\n  const form = formidable__WEBPACK_IMPORTED_MODULE_3___default()({\n    multiples: true\n  });\n  var validatedusername, validatedemail, validatedpassword;\n  var errors = [];\n  await Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var formfields = await new Promise((resolve, reject) => form.parse(req, (err, fields, files) => {\n    if (err) {\n      console.log('err: ', err);\n      res.json(err);\n      return;\n    }\n    /*  username = fields.username;\n          email = feilds.email;\n          password = fields.password;*/\n\n\n    resolve(fields);\n  })); // validator text\n\n  if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.username))) {\n    errors.push(' The username is empty');\n  } else {\n    validatedusername = validator__WEBPACK_IMPORTED_MODULE_4___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.username));\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.email))) {\n    errors.push(' The email is empty');\n  } else {\n    if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmail(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.email))) {\n      validatedemail = validator__WEBPACK_IMPORTED_MODULE_4___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.email));\n    } else {\n      errors.push('The email format is incorrect');\n    }\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.password))) {\n    errors.push(' The password is empty');\n  } else {\n    if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.isLength(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.password), {\n      min: 6\n    })) {\n      validatedpassword = validator__WEBPACK_IMPORTED_MODULE_4___default.a.escape(validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.password));\n    } else {\n      errors.push(' The password must be at least 6 charactors.');\n    }\n  }\n\n  if (validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.confirmPassword) !== validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.password)) {\n    errors.push('Password confirmation does not match password.');\n  }\n\n  await _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: validator__WEBPACK_IMPORTED_MODULE_4___default.a.trim(formfields.email)\n  }).then(user => {\n    if (user) errors.push('Email already in use');\n  });\n\n  if (errors.length > 0) {\n    console.log(' errors:', errors);\n    res.status(500).json({\n      error: errors,\n      status: 500\n    });\n    res.end();\n    return;\n  }\n\n  const hashedPassword = getHashedPassword(validatedpassword);\n  var user = new _models_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    username: validatedusername,\n    email: validatedemail,\n    password: hashedPassword\n  });\n  user.save(function (err, user) {\n    if (err) {\n      res.status(500).json({\n        status: 500,\n        error: err\n      });\n      res.end();\n    } else {\n      console.log('user: ', user); // Successful - redirect to login.\n\n      res.status(201).json({\n        status: 201,\n        data: user\n      });\n      res.end();\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcl9yZWdpc3Rlcl9wb3N0LmpzP2YzODEiXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciIsImJvZHlQYXJzZXIiLCJnZXRIYXNoZWRQYXNzd29yZCIsInBhc3N3b3JkIiwic2hhMjU2IiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsImhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybSIsImZvcm1pZGFibGUiLCJtdWx0aXBsZXMiLCJ2YWxpZGF0ZWR1c2VybmFtZSIsInZhbGlkYXRlZGVtYWlsIiwidmFsaWRhdGVkcGFzc3dvcmQiLCJlcnJvcnMiLCJkYkNvbm5lY3QiLCJmb3JtZmllbGRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ2YWxpZGF0b3IiLCJpc0VtcHR5IiwidHJpbSIsInVzZXJuYW1lIiwicHVzaCIsImVzY2FwZSIsImVtYWlsIiwiaXNFbWFpbCIsImlzTGVuZ3RoIiwibWluIiwiY29uZmlybVBhc3N3b3JkIiwiVXNlcjEiLCJmaW5kT25lIiwidGhlbiIsInVzZXIiLCJsZW5ndGgiLCJzdGF0dXMiLCJlcnJvciIsImVuZCIsImhhc2hlZFBhc3N3b3JkIiwic2F2ZSIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRU8sTUFBTUEsTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsb0JBQWdCLEVBQUUsSUFEZjtBQUVIQyxjQUFVLEVBQUU7QUFGVDtBQURlLENBQWY7O0FBT1AsTUFBTUMsaUJBQWlCLEdBQUlDLFFBQUQsSUFBYztBQUN0QyxRQUFNQyxNQUFNLEdBQUdDLDZDQUFN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Q3NDLEdBQUo7QUFDRCxLQUhELE1BR087QUFDTHJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JnQixJQUF0QixFQURLLENBRUw7O0FBQ0FsQyxTQUFHLENBQUNvQyxNQUFKLENBQVcsR0FBWCxFQUFnQmpCLElBQWhCLENBQXFCO0FBQUVpQixjQUFNLEVBQUUsR0FBVjtBQUFlSyxZQUFJLEVBQUVQO0FBQXJCLE9BQXJCO0FBQ0FsQyxTQUFHLENBQUNzQyxHQUFKO0FBQ0Q7QUFDRixHQVZEO0FBV0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcl9yZWdpc3Rlcl9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIxIGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSAnZm9ybWlkYWJsZSc7XG5cbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmNvbnN0IGdldEhhc2hlZFBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IHNoYTI1NiA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKTtcbiAgY29uc3QgaGFzaCA9IHNoYTI1Ni51cGRhdGUocGFzc3dvcmQpLmRpZ2VzdCgnYmFzZTY0Jyk7XG4gIHJldHVybiBoYXNoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBmb3JtID0gZm9ybWlkYWJsZSh7IG11bHRpcGxlczogdHJ1ZSB9KTtcblxuICB2YXIgdmFsaWRhdGVkdXNlcm5hbWUsIHZhbGlkYXRlZGVtYWlsLCB2YWxpZGF0ZWRwYXNzd29yZDtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICB2YXIgZm9ybWZpZWxkcyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VycjogJywgZXJyKTtcbiAgICAgICAgcmVzLmpzb24oZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyogIHVzZXJuYW1lID0gZmllbGRzLnVzZXJuYW1lO1xuICAgICAgICAgICAgZW1haWwgPSBmZWlsZHMuZW1haWw7XG4gICAgICAgICAgICBwYXNzd29yZCA9IGZpZWxkcy5wYXNzd29yZDsqL1xuICAgICAgcmVzb2x2ZShmaWVsZHMpO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gdmFsaWRhdG9yIHRleHRcbiAgaWYgKHZhbGlkYXRvci5pc0VtcHR5KHZhbGlkYXRvci50cmltKGZvcm1maWVsZHMudXNlcm5hbWUpKSkge1xuICAgIGVycm9ycy5wdXNoKCcgVGhlIHVzZXJuYW1lIGlzIGVtcHR5Jyk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVkdXNlcm5hbWUgPSB2YWxpZGF0b3IuZXNjYXBlKHZhbGlkYXRvci50cmltKGZvcm1maWVsZHMudXNlcm5hbWUpKTtcbiAgfVxuXG4gIGlmICh2YWxpZGF0b3IuaXNFbXB0eSh2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLmVtYWlsKSkpIHtcbiAgICBlcnJvcnMucHVzaCgnIFRoZSBlbWFpbCBpcyBlbXB0eScpO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWxpZGF0b3IuaXNFbWFpbCh2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLmVtYWlsKSkpIHtcbiAgICAgIHZhbGlkYXRlZGVtYWlsID0gdmFsaWRhdG9yLmVzY2FwZSh2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLmVtYWlsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9ycy5wdXNoKCdUaGUgZW1haWwgZm9ybWF0IGlzIGluY29ycmVjdCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YWxpZGF0b3IuaXNFbXB0eSh2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLnBhc3N3b3JkKSkpIHtcbiAgICBlcnJvcnMucHVzaCgnIFRoZSBwYXNzd29yZCBpcyBlbXB0eScpO1xuICB9IGVsc2Uge1xuICAgIGlmIChcbiAgICAgIHZhbGlkYXRvci5pc0xlbmd0aCh2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLnBhc3N3b3JkKSwge1xuICAgICAgICBtaW46IDYsXG4gICAgICB9KVxuICAgICkge1xuICAgICAgdmFsaWRhdGVkcGFzc3dvcmQgPSB2YWxpZGF0b3IuZXNjYXBlKHZhbGlkYXRvci50cmltKGZvcm1maWVsZHMucGFzc3dvcmQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzLnB1c2goJyBUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RvcnMuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIHZhbGlkYXRvci50cmltKGZvcm1maWVsZHMuY29uZmlybVBhc3N3b3JkKSAhPT1cbiAgICB2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLnBhc3N3b3JkKVxuICApIHtcbiAgICBlcnJvcnMucHVzaCgnUGFzc3dvcmQgY29uZmlybWF0aW9uIGRvZXMgbm90IG1hdGNoIHBhc3N3b3JkLicpO1xuICB9XG5cbiAgYXdhaXQgVXNlcjEuZmluZE9uZSh7IGVtYWlsOiB2YWxpZGF0b3IudHJpbShmb3JtZmllbGRzLmVtYWlsKSB9KS50aGVuKFxuICAgICh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikgZXJyb3JzLnB1c2goJ0VtYWlsIGFscmVhZHkgaW4gdXNlJyk7XG4gICAgfVxuICApO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUubG9nKCcgZXJyb3JzOicsIGVycm9ycyk7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3JzLCBzdGF0dXM6IDUwMCB9KTtcbiAgICByZXMuZW5kKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBnZXRIYXNoZWRQYXNzd29yZCh2YWxpZGF0ZWRwYXNzd29yZCk7XG4gIHZhciB1c2VyID0gbmV3IFVzZXIxKHtcbiAgICB1c2VybmFtZTogdmFsaWRhdGVkdXNlcm5hbWUsXG4gICAgZW1haWw6IHZhbGlkYXRlZGVtYWlsLFxuICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgfSk7XG5cbiAgdXNlci5zYXZlKGZ1bmN0aW9uIChlcnIsIHVzZXIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN0YXR1czogNTAwLCBlcnJvcjogZXJyIH0pO1xuICAgICAgcmVzLmVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndXNlcjogJywgdXNlcik7XG4gICAgICAvLyBTdWNjZXNzZnVsIC0gcmVkaXJlY3QgdG8gbG9naW4uXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN0YXR1czogMjAxLCBkYXRhOiB1c2VyIH0pO1xuICAgICAgcmVzLmVuZCgpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user_register_post.js\n");

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