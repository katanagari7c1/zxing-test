(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ZXing", [], factory);
	else if(typeof exports === 'object')
		exports["ZXing"] = factory();
	else
		root["ZXing"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-custom-error/dist/custom-error.umd.js":
/*!***************************************************************!*\
  !*** ./node_modules/ts-custom-error/dist/custom-error.umd.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(this, (function (exports) {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function fixProto(target, prototype) {
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf ? setPrototypeOf(target, prototype) : (target.__proto__ = prototype);
    }

    function fixStack(target, fn) {
        if (fn === void 0) {
            fn = target.constructor;
        }
        var captureStackTrace = Error.captureStackTrace;
        captureStackTrace && captureStackTrace(target, fn);
    }



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsU0FBUyxNQUFRLEVBQUEsV0FBVztJQUN4QyxHQUFBLENBQUksaUJBQWlCLE1BQUEsQ0FBTztJQUM1QixjQUFBLEdBQ00sY0FBQSxDQUFlLFFBQVEsY0FDdEIsTUFBQSxDQUFPLFNBQVAsQ0FBQSxDQUFBLENBQW1CO0FBQzlCOztBQUNBLE9BQU8sU0FBUyxTQUFTLE1BQVEsRUFBQSxJQUFJO0lBQ2pDLElBQUksRUFBQSxDQUFBLEdBQUEsQ0FBTyxJQUFBLENBQUssR0FBRztRQUFFLEVBQUEsQ0FBQSxDQUFBLENBQUssTUFBQSxDQUFPO0lBQXJDO0lBQ0ksR0FBQSxDQUFJLG9CQUFvQixLQUFBLENBQU07SUFDOUIsaUJBQUEsQ0FBQSxFQUFBLENBQXFCLGlCQUFBLENBQWtCLFFBQVE7QUFDbkQ7O0FBVkEiLCJmaWxlIjoidXRpbHMudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZpeFByb3RvKHRhcmdldCwgcHJvdG90eXBlKSB7XHJcbiAgICB2YXIgc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2Y7XHJcbiAgICBzZXRQcm90b3R5cGVPZlxyXG4gICAgICAgID8gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpXHJcbiAgICAgICAgOiAodGFyZ2V0Ll9fcHJvdG9fXyA9IHByb3RvdHlwZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeFN0YWNrKHRhcmdldCwgZm4pIHtcclxuICAgIGlmIChmbiA9PT0gdm9pZCAwKSB7IGZuID0gdGFyZ2V0LmNvbnN0cnVjdG9yOyB9XHJcbiAgICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcclxuICAgIGNhcHR1cmVTdGFja1RyYWNlICYmIGNhcHR1cmVTdGFja1RyYWNlKHRhcmdldCwgZm4pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdfQ==

    var CustomError = (function (_super) {
        __extends(CustomError, _super);
        function CustomError(message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            Object.defineProperty(_this, 'name', {
                value: _newTarget.name,
                enumerable: false
            });
            fixProto(_this, _newTarget.prototype);
            fixStack(_this);
            return _this;
        }
        
        return CustomError;
    })(Error);


    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lcnJvci50cyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxhQUFhO0FBQ3pCLFFBQVMsVUFBVSxlQUFnQjtBQUNuQyxHQUFBLENBQUksZUFBZSxVQUFVLFFBQVE7SUFDakMsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsYUFBYTtJQUMvQixTQUFTLFlBQVksU0FBUztRQUMxQixHQUFBLENBQUksYUFBYSxJQUFBLENBQUs7UUFDdEIsR0FBQSxDQUFJLFFBQVEsTUFBQSxDQUFPLElBQVAsQ0FBWSxNQUFNLFFBQWxCLENBQUEsRUFBQSxDQUE4QjtRQUMxQyxNQUFBLENBQU8sY0FBUCxDQUFzQixPQUFPLFFBQVE7WUFDakMsT0FBTyxVQUFBLENBQVcsSUFEZSxDQUFBO1lBRWpDLFlBQVk7O1FBRWhCLFFBQUEsQ0FBUyxPQUFPLFVBQUEsQ0FBVztRQUMzQixRQUFBLENBQVM7UUFDVCxPQUFPO0lBQ2Y7O0lBQ0ksT0FBTztBQUNYLEVBZG1CLENBY2pCO0FBQ0YsT0FBQSxDQUFTO0FBakJUIiwiZmlsZSI6ImN1c3RvbS1lcnJvci50cyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xyXG5pbXBvcnQgeyBmaXhQcm90bywgZml4U3RhY2sgfSBmcm9tICcuL3V0aWxzJztcclxudmFyIEN1c3RvbUVycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIHRzbGliXzEuX19leHRlbmRzKEN1c3RvbUVycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ25hbWUnLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBfbmV3VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpeFByb3RvKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgICAgICAgZml4U3RhY2soX3RoaXMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDdXN0b21FcnJvcjtcclxufShFcnJvcikpO1xyXG5leHBvcnQgeyBDdXN0b21FcnJvciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b20tZXJyb3IuanMubWFwIl19

    function customErrorFactory(fn, parent) {
        if (parent === void 0) {
            parent = Error;
        }
        function CustomError() {
            var args = [];
            for (var _i = 0;_i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!(this instanceof CustomError)) 
                return new (CustomError.bind.apply(CustomError, [void 0].concat(args)))();
            parent.apply(this, args);
            fn.apply(this, args);
            this.name = fn.name || parent.name;
            fixStack(this, CustomError);
        }
        
        return Object.defineProperties(CustomError, {
            prototype: {
                value: Object.create(parent.prototype, {
                    constructor: {
                        value: CustomError,
                        writable: true,
                        configurable: true
                    }
                })
            }
        });
    }



    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RvcnkudHMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsZUFBZ0I7QUFDekIsT0FBTyxTQUFTLG1CQUFtQixFQUFJLEVBQUEsUUFBUTtJQUMzQyxJQUFJLE1BQUEsQ0FBQSxHQUFBLENBQVcsSUFBQSxDQUFLLEdBQUc7UUFBRSxNQUFBLENBQUEsQ0FBQSxDQUFTO0lBQXRDO0lBQ0ksU0FBUyxjQUFjO1FBQ25CLEdBQUEsQ0FBSSxPQUFPO1FBQ1gsS0FBSyxHQUFBLENBQUksS0FBSyxFQUFHLEVBQUEsQ0FBQSxDQUFBLENBQUssU0FBQSxDQUFVLFFBQVEsRUFBQSxJQUFNO1lBQzFDLElBQUEsQ0FBSyxHQUFMLENBQUEsQ0FBQSxDQUFXLFNBQUEsQ0FBVTtRQUNqQztRQUNRLElBQUksRUFBRSxJQUFBLENBQUEsVUFBQSxDQUFnQjtZQUNsQixPQUFPLEtBQUssV0FBQSxDQUFZLElBQVosQ0FBaUIsS0FBakIsQ0FBdUIsYUFBYSxDQUFDLElBQUEsQ0FBSyxFQUFOLENBQVMsTUFBVCxDQUFnQixPQUF6RDtRQUNYLE1BQUEsQ0FBTyxLQUFQLENBQWEsTUFBTTtRQUNuQixFQUFBLENBQUcsS0FBSCxDQUFTLE1BQU07UUFDZixJQUFBLENBQUssSUFBTCxDQUFBLENBQUEsQ0FBWSxFQUFBLENBQUcsSUFBSCxDQUFBLEVBQUEsQ0FBVyxNQUFBLENBQU87UUFDOUIsUUFBQSxDQUFTLE1BQU07SUFDdkI7O0lBQ0ksT0FBTyxNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsYUFBYTtRQUN4QyxXQUFXO1lBQ1AsT0FBTyxNQUFBLENBQU8sTUFBUCxDQUFjLE1BQUEsQ0FBTyxXQUFXO2dCQUNuQyxhQUFhO29CQUNULE9BQU8sV0FERSxDQUFBO29CQUVULFVBQVUsSUFGRCxDQUFBO29CQUdULGNBQWM7Ozs7O0FBS2xDOztBQTFCQSIsImZpbGUiOiJmYWN0b3J5LnRzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpeFN0YWNrIH0gZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FcnJvckZhY3RvcnkoZm4sIHBhcmVudCkge1xyXG4gICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9IEVycm9yOyB9XHJcbiAgICBmdW5jdGlvbiBDdXN0b21FcnJvcigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEN1c3RvbUVycm9yKSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoQ3VzdG9tRXJyb3IuYmluZC5hcHBseShDdXN0b21FcnJvciwgW3ZvaWQgMF0uY29uY2F0KGFyZ3MpKSkoKTtcclxuICAgICAgICBwYXJlbnQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZm4ubmFtZSB8fCBwYXJlbnQubmFtZTtcclxuICAgICAgICBmaXhTdGFjayh0aGlzLCBDdXN0b21FcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ3VzdG9tRXJyb3IsIHtcclxuICAgICAgICBwcm90b3R5cGU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQ3VzdG9tRXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwIl19

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFBO0FBQ2QsY0FBYyxXQUFBO0FBRGQiLCJmaWxlIjoiaW5kZXgudHMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9jdXN0b20tZXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZhY3RvcnknO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=

    exports.CustomError = CustomError;
    exports.customErrorFactory = customErrorFactory;

})));
//# sourceMappingURL=custom-error.umd.js.map


/***/ }),

/***/ "./src/browser/BrowserBarcodeReader.ts":
/*!*********************************************!*\
  !*** ./src/browser/BrowserBarcodeReader.ts ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserCodeReader_1 = __webpack_require__(/*! ./BrowserCodeReader */ "./src/browser/BrowserCodeReader.ts");
var MultiFormatOneDReader_1 = __webpack_require__(/*! ../core/oned/MultiFormatOneDReader */ "./src/core/oned/MultiFormatOneDReader.ts");
/**
 * @deprecated Moving to @zxing/browser
 *
 * Barcode reader reader to use from browser.
 */
var BrowserBarcodeReader = /** @class */ (function (_super) {
    __extends(BrowserBarcodeReader, _super);
    /**
     * Creates an instance of BrowserBarcodeReader.
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
     * @param {Map<DecodeHintType, any>} hints
     */
    function BrowserBarcodeReader(timeBetweenScansMillis, hints) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new MultiFormatOneDReader_1.default(hints), timeBetweenScansMillis, hints) || this;
    }
    return BrowserBarcodeReader;
}(BrowserCodeReader_1.BrowserCodeReader));
exports.BrowserBarcodeReader = BrowserBarcodeReader;


/***/ }),

/***/ "./src/browser/BrowserCodeReader.ts":
/*!******************************************!*\
  !*** ./src/browser/BrowserCodeReader.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = __webpack_require__(/*! ../core/ArgumentException */ "./src/core/ArgumentException.ts");
var BinaryBitmap_1 = __webpack_require__(/*! ../core/BinaryBitmap */ "./src/core/BinaryBitmap.ts");
var ChecksumException_1 = __webpack_require__(/*! ../core/ChecksumException */ "./src/core/ChecksumException.ts");
var HybridBinarizer_1 = __webpack_require__(/*! ../core/common/HybridBinarizer */ "./src/core/common/HybridBinarizer.ts");
var FormatException_1 = __webpack_require__(/*! ../core/FormatException */ "./src/core/FormatException.ts");
var NotFoundException_1 = __webpack_require__(/*! ../core/NotFoundException */ "./src/core/NotFoundException.ts");
var HTMLCanvasElementLuminanceSource_1 = __webpack_require__(/*! ./HTMLCanvasElementLuminanceSource */ "./src/browser/HTMLCanvasElementLuminanceSource.ts");
var VideoInputDevice_1 = __webpack_require__(/*! ./VideoInputDevice */ "./src/browser/VideoInputDevice.ts");
/**
 * @deprecated Moving to @zxing/browser
 *
 * Base class for browser code reader.
 */
var BrowserCodeReader = /** @class */ (function () {
    /**
     * Creates an instance of BrowserCodeReader.
     * @param {Reader} reader The reader instance to decode the barcode
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent successful decode tries
     *
     * @memberOf BrowserCodeReader
     */
    function BrowserCodeReader(reader, timeBetweenScansMillis, _hints) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        this.reader = reader;
        this.timeBetweenScansMillis = timeBetweenScansMillis;
        this._hints = _hints;
        /**
         * This will break the loop.
         */
        this._stopContinuousDecode = false;
        /**
         * This will break the loop.
         */
        this._stopAsyncDecode = false;
        /**
         * Delay time between decode attempts made by the scanner.
         */
        this._timeBetweenDecodingAttempts = 0;
    }
    Object.defineProperty(BrowserCodeReader.prototype, "hasNavigator", {
        /**
         * If navigator is present.
         */
        get: function () {
            return typeof navigator !== 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserCodeReader.prototype, "isMediaDevicesSuported", {
        /**
         * If mediaDevices under navigator is supported.
         */
        get: function () {
            return this.hasNavigator && !!navigator.mediaDevices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserCodeReader.prototype, "canEnumerateDevices", {
        /**
         * If enumerateDevices under navigator is supported.
         */
        get: function () {
            return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserCodeReader.prototype, "timeBetweenDecodingAttempts", {
        /** Time between two decoding tries in milli seconds. */
        get: function () {
            return this._timeBetweenDecodingAttempts;
        },
        /**
         * Change the time span the decoder waits between two decoding tries.
         *
         * @param {number} millis Time between two decoding tries in milli seconds.
         */
        set: function (millis) {
            this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrowserCodeReader.prototype, "hints", {
        /**
         * Sets the hints.
         */
        get: function () {
            return this._hints;
        },
        /**
         * Sets the hints.
         */
        set: function (hints) {
            this._hints = hints || null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lists all the available video input devices.
     */
    BrowserCodeReader.prototype.listVideoInputDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, videoDevices, _i, devices_1, device, kind, deviceId, label, groupId, videoDevice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasNavigator) {
                            throw new Error('Can\'t enumerate devices, navigator is not present.');
                        }
                        if (!this.canEnumerateDevices) {
                            throw new Error('Can\'t enumerate devices, method not supported.');
                        }
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _a.sent();
                        videoDevices = [];
                        for (_i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                            device = devices_1[_i];
                            kind = device.kind === 'video' ? 'videoinput' : device.kind;
                            if (kind !== 'videoinput') {
                                continue;
                            }
                            deviceId = device.deviceId || device.id;
                            label = device.label || "Video device " + (videoDevices.length + 1);
                            groupId = device.groupId;
                            videoDevice = { deviceId: deviceId, label: label, kind: kind, groupId: groupId };
                            videoDevices.push(videoDevice);
                        }
                        return [2 /*return*/, videoDevices];
                }
            });
        });
    };
    /**
     * Obtain the list of available devices with type 'videoinput'.
     *
     * @returns {Promise<VideoInputDevice[]>} an array of available video input devices
     *
     * @memberOf BrowserCodeReader
     *
     * @deprecated Use `listVideoInputDevices` instead.
     */
    BrowserCodeReader.prototype.getVideoInputDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listVideoInputDevices()];
                    case 1:
                        devices = _a.sent();
                        return [2 /*return*/, devices.map(function (d) { return new VideoInputDevice_1.VideoInputDevice(d.deviceId, d.label); })];
                }
            });
        });
    };
    /**
     * Let's you find a device using it's Id.
     */
    BrowserCodeReader.prototype.findDeviceById = function (deviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listVideoInputDevices()];
                    case 1:
                        devices = _a.sent();
                        if (!devices) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, devices.find(function (x) { return x.deviceId === deviceId; })];
                }
            });
        });
    };
    /**
     * Decodes the barcode from the device specified by deviceId while showing the video in the specified video element.
     *
     * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
     * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns The decoding result.
     *
     * @memberOf BrowserCodeReader
     *
     * @deprecated Use `decodeOnceFromVideoDevice` instead.
     */
    BrowserCodeReader.prototype.decodeFromInputVideoDevice = function (deviceId, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.decodeOnceFromVideoDevice(deviceId, videoSource)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * In one attempt, tries to decode the barcode from the device specified by deviceId while showing the video in the specified video element.
     *
     * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
     * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeOnceFromVideoDevice = function (deviceId, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            var videoConstraints, constraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        if (!deviceId) {
                            videoConstraints = { facingMode: 'environment' };
                        }
                        else {
                            videoConstraints = { deviceId: { exact: deviceId } };
                        }
                        constraints = { video: videoConstraints };
                        return [4 /*yield*/, this.decodeOnceFromConstraints(constraints, videoSource)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
     *
     * @param constraints the media stream constraints to get s valid media stream to decode from
     * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeOnceFromConstraints = function (constraints, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                    case 1:
                        stream = _a.sent();
                        return [4 /*yield*/, this.decodeOnceFromStream(stream, videoSource)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
     *
     * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
     * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeOnceFromStream = function (stream, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            var video, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        return [4 /*yield*/, this.attachStreamToVideo(stream, videoSource)];
                    case 1:
                        video = _a.sent();
                        return [4 /*yield*/, this.decodeOnce(video)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Continuously decodes the barcode from the device specified by device while showing the video in the specified video element.
     *
     * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
     * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns {Promise<void>}
     *
     * @memberOf BrowserCodeReader
     *
     * @deprecated Use `decodeFromVideoDevice` instead.
     */
    BrowserCodeReader.prototype.decodeFromInputVideoDeviceContinuously = function (deviceId, videoSource, callbackFn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.decodeFromVideoDevice(deviceId, videoSource, callbackFn)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Continuously tries to decode the barcode from the device specified by device while showing the video in the specified video element.
     *
     * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
     * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns {Promise<void>}
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeFromVideoDevice = function (deviceId, videoSource, callbackFn) {
        return __awaiter(this, void 0, void 0, function () {
            var videoConstraints, constraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!deviceId) {
                            videoConstraints = { facingMode: 'environment' };
                        }
                        else {
                            videoConstraints = { deviceId: { exact: deviceId } };
                        }
                        constraints = { video: videoConstraints };
                        return [4 /*yield*/, this.decodeFromConstraints(constraints, videoSource, callbackFn)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Continuously tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
     *
     * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
     * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeFromConstraints = function (constraints, videoSource, callbackFn) {
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                    case 1:
                        stream = _a.sent();
                        return [4 /*yield*/, this.decodeFromStream(stream, videoSource, callbackFn)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
     *
     * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
     * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeFromStream = function (stream, videoSource, callbackFn) {
        return __awaiter(this, void 0, void 0, function () {
            var video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        return [4 /*yield*/, this.attachStreamToVideo(stream, videoSource)];
                    case 1:
                        video = _a.sent();
                        return [4 /*yield*/, this.decodeContinuously(video, callbackFn)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Breaks the decoding loop.
     */
    BrowserCodeReader.prototype.stopAsyncDecode = function () {
        this._stopAsyncDecode = true;
    };
    /**
     * Breaks the decoding loop.
     */
    BrowserCodeReader.prototype.stopContinuousDecode = function () {
        this._stopContinuousDecode = true;
    };
    /**
     * Sets the new stream and request a new decoding-with-delay.
     *
     * @param stream The stream to be shown in the video element.
     * @param decodeFn A callback for the decode method.
     */
    BrowserCodeReader.prototype.attachStreamToVideo = function (stream, videoSource) {
        return __awaiter(this, void 0, void 0, function () {
            var videoElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        videoElement = this.prepareVideoElement(videoSource);
                        this.addVideoSource(videoElement, stream);
                        this.videoElement = videoElement;
                        this.stream = stream;
                        return [4 /*yield*/, this.playVideoOnLoadAsync(videoElement)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, videoElement];
                }
            });
        });
    };
    /**
     *
     * @param videoElement
     */
    BrowserCodeReader.prototype.playVideoOnLoadAsync = function (videoElement) {
        var _this = this;
        return new Promise(function (resolve, reject) { return _this.playVideoOnLoad(videoElement, function () { return resolve(); }); });
    };
    /**
     * Binds listeners and callbacks to the videoElement.
     *
     * @param element
     * @param callbackFn
     */
    BrowserCodeReader.prototype.playVideoOnLoad = function (element, callbackFn) {
        var _this = this;
        this.videoEndedListener = function () { return _this.stopStreams(); };
        this.videoCanPlayListener = function () { return _this.tryPlayVideo(element); };
        element.addEventListener('ended', this.videoEndedListener);
        element.addEventListener('canplay', this.videoCanPlayListener);
        element.addEventListener('playing', callbackFn);
        // if canplay was already fired, we won't know when to play, so just give it a try
        this.tryPlayVideo(element);
    };
    /**
     * Checks if the given video element is currently playing.
     */
    BrowserCodeReader.prototype.isVideoPlaying = function (video) {
        return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
    };
    /**
     * Just tries to play the video and logs any errors.
     * The play call is only made is the video is not already playing.
     */
    BrowserCodeReader.prototype.tryPlayVideo = function (videoElement) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isVideoPlaying(videoElement)) {
                            console.warn('Trying to play video that is already playing.');
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, videoElement.play()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        console.warn('It was not possible to play the video.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Searches and validates a media element.
     */
    BrowserCodeReader.prototype.getMediaElement = function (mediaElementId, type) {
        var mediaElement = document.getElementById(mediaElementId);
        if (!mediaElement) {
            throw new ArgumentException_1.default("element with id '" + mediaElementId + "' not found");
        }
        if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
            throw new ArgumentException_1.default("element with id '" + mediaElementId + "' must be an " + type + " element");
        }
        return mediaElement;
    };
    /**
     * Decodes the barcode from an image.
     *
     * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
     * @param {string} [url]
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeFromImage = function (source, url) {
        if (!source && !url) {
            throw new ArgumentException_1.default('either imageElement with a src set or an url must be provided');
        }
        if (url && !source) {
            return this.decodeFromImageUrl(url);
        }
        return this.decodeFromImageElement(source);
    };
    /**
     * Decodes the barcode from a video.
     *
     * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
     * @param {string} [url]
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.decodeFromVideo = function (source, url) {
        if (!source && !url) {
            throw new ArgumentException_1.default('Either an element with a src set or an URL must be provided');
        }
        if (url && !source) {
            return this.decodeFromVideoUrl(url);
        }
        return this.decodeFromVideoElement(source);
    };
    /**
     * Decodes continuously the barcode from a video.
     *
     * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
     * @param {string} [url]
     * @returns {Promise<Result>} The decoding result.
     *
     * @memberOf BrowserCodeReader
     *
     * @experimental
     */
    BrowserCodeReader.prototype.decodeFromVideoContinuously = function (source, url, callbackFn) {
        if (undefined === source && undefined === url) {
            throw new ArgumentException_1.default('Either an element with a src set or an URL must be provided');
        }
        if (url && !source) {
            return this.decodeFromVideoUrlContinuously(url, callbackFn);
        }
        return this.decodeFromVideoElementContinuously(source, callbackFn);
    };
    /**
     * Decodes something from an image HTML element.
     */
    BrowserCodeReader.prototype.decodeFromImageElement = function (source) {
        if (!source) {
            throw new ArgumentException_1.default('An image element must be provided.');
        }
        this.reset();
        var element = this.prepareImageElement(source);
        this.imageElement = element;
        var task;
        if (this.isImageLoaded(element)) {
            task = this.decodeOnce(element, false, true);
        }
        else {
            task = this._decodeOnLoadImage(element);
        }
        return task;
    };
    /**
     * Decodes something from an image HTML element.
     */
    BrowserCodeReader.prototype.decodeFromVideoElement = function (source) {
        var element = this._decodeFromVideoElementSetup(source);
        return this._decodeOnLoadVideo(element);
    };
    /**
     * Decodes something from an image HTML element.
     */
    BrowserCodeReader.prototype.decodeFromVideoElementContinuously = function (source, callbackFn) {
        var element = this._decodeFromVideoElementSetup(source);
        return this._decodeOnLoadVideoContinuously(element, callbackFn);
    };
    /**
     * Sets up the video source so it can be decoded when loaded.
     *
     * @param source The video source element.
     */
    BrowserCodeReader.prototype._decodeFromVideoElementSetup = function (source) {
        if (!source) {
            throw new ArgumentException_1.default('A video element must be provided.');
        }
        this.reset();
        var element = this.prepareVideoElement(source);
        // defines the video element before starts decoding
        this.videoElement = element;
        return element;
    };
    /**
     * Decodes an image from a URL.
     */
    BrowserCodeReader.prototype.decodeFromImageUrl = function (url) {
        if (!url) {
            throw new ArgumentException_1.default('An URL must be provided.');
        }
        this.reset();
        var element = this.prepareImageElement();
        this.imageElement = element;
        var decodeTask = this._decodeOnLoadImage(element);
        element.src = url;
        return decodeTask;
    };
    /**
     * Decodes an image from a URL.
     */
    BrowserCodeReader.prototype.decodeFromVideoUrl = function (url) {
        if (!url) {
            throw new ArgumentException_1.default('An URL must be provided.');
        }
        this.reset();
        // creates a new element
        var element = this.prepareVideoElement();
        var decodeTask = this.decodeFromVideoElement(element);
        element.src = url;
        return decodeTask;
    };
    /**
     * Decodes an image from a URL.
     *
     * @experimental
     */
    BrowserCodeReader.prototype.decodeFromVideoUrlContinuously = function (url, callbackFn) {
        if (!url) {
            throw new ArgumentException_1.default('An URL must be provided.');
        }
        this.reset();
        // creates a new element
        var element = this.prepareVideoElement();
        var decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
        element.src = url;
        return decodeTask;
    };
    BrowserCodeReader.prototype._decodeOnLoadImage = function (element) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.imageLoadedListener = function () { return _this.decodeOnce(element, false, true).then(resolve, reject); };
            element.addEventListener('load', _this.imageLoadedListener);
        });
    };
    BrowserCodeReader.prototype._decodeOnLoadVideo = function (videoElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // plays the video
                    return [4 /*yield*/, this.playVideoOnLoadAsync(videoElement)];
                    case 1:
                        // plays the video
                        _a.sent();
                        return [4 /*yield*/, this.decodeOnce(videoElement)];
                    case 2: 
                    // starts decoding after played the video
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BrowserCodeReader.prototype._decodeOnLoadVideoContinuously = function (videoElement, callbackFn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // plays the video
                    return [4 /*yield*/, this.playVideoOnLoadAsync(videoElement)];
                    case 1:
                        // plays the video
                        _a.sent();
                        // starts decoding after played the video
                        this.decodeContinuously(videoElement, callbackFn);
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserCodeReader.prototype.isImageLoaded = function (img) {
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    };
    BrowserCodeReader.prototype.prepareImageElement = function (imageSource) {
        var imageElement;
        if (typeof imageSource === 'undefined') {
            imageElement = document.createElement('img');
            imageElement.width = 200;
            imageElement.height = 200;
        }
        if (typeof imageSource === 'string') {
            imageElement = this.getMediaElement(imageSource, 'img');
        }
        if (imageSource instanceof HTMLImageElement) {
            imageElement = imageSource;
        }
        return imageElement;
    };
    /**
     * Sets a HTMLVideoElement for scanning or creates a new one.
     *
     * @param videoSource The HTMLVideoElement to be set.
     */
    BrowserCodeReader.prototype.prepareVideoElement = function (videoSource) {
        var videoElement;
        if (!videoSource && typeof document !== 'undefined') {
            videoElement = document.createElement('video');
            videoElement.width = 200;
            videoElement.height = 200;
        }
        if (typeof videoSource === 'string') {
            videoElement = this.getMediaElement(videoSource, 'video');
        }
        if (videoSource instanceof HTMLVideoElement) {
            videoElement = videoSource;
        }
        // Needed for iOS 11
        videoElement.setAttribute('autoplay', 'true');
        videoElement.setAttribute('muted', 'true');
        videoElement.setAttribute('playsinline', 'true');
        return videoElement;
    };
    /**
     * Tries to decode from the video input until it finds some value.
     */
    BrowserCodeReader.prototype.decodeOnce = function (element, retryIfNotFound, retryIfChecksumOrFormatError) {
        var _this = this;
        if (retryIfNotFound === void 0) { retryIfNotFound = true; }
        if (retryIfChecksumOrFormatError === void 0) { retryIfChecksumOrFormatError = true; }
        this._stopAsyncDecode = false;
        var loop = function (resolve, reject) {
            if (_this._stopAsyncDecode) {
                reject(new NotFoundException_1.default('Video stream has ended before any code could be detected.'));
                _this._stopAsyncDecode = undefined;
                return;
            }
            try {
                var result = _this.decode(element);
                resolve(result);
            }
            catch (e) {
                var ifNotFound = retryIfNotFound && e instanceof NotFoundException_1.default;
                var isChecksumOrFormatError = e instanceof ChecksumException_1.default || e instanceof FormatException_1.default;
                var ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
                if (ifNotFound || ifChecksumOrFormat) {
                    // trying again
                    return setTimeout(function () { return loop(resolve, reject); }, _this._timeBetweenDecodingAttempts);
                }
                reject(e);
            }
        };
        return new Promise(function (resolve, reject) { return loop(resolve, reject); });
    };
    /**
     * Continuously decodes from video input.
     */
    BrowserCodeReader.prototype.decodeContinuously = function (element, callbackFn) {
        var _this = this;
        this._stopContinuousDecode = false;
        var loop = function () {
            if (_this._stopContinuousDecode) {
                _this._stopContinuousDecode = undefined;
                return;
            }
            try {
                var result = _this.decode(element);
                callbackFn(result, null);
                setTimeout(function () { return loop(); }, _this.timeBetweenScansMillis);
            }
            catch (e) {
                callbackFn(null, e);
                var isChecksumOrFormatError = e instanceof ChecksumException_1.default || e instanceof FormatException_1.default;
                var isNotFound = e instanceof NotFoundException_1.default;
                if (isChecksumOrFormatError || isNotFound) {
                    // trying again
                    setTimeout(function () { return loop(); }, _this._timeBetweenDecodingAttempts);
                }
            }
        };
        loop();
    };
    /**
     * Gets the BinaryBitmap for ya! (and decodes it)
     */
    BrowserCodeReader.prototype.decode = function (element) {
        // get binary bitmap for decode function
        var binaryBitmap = this.createBinaryBitmap(element);
        return this.decodeBitmap(binaryBitmap);
    };
    /**
     * Creates a binaryBitmap based in some image source.
     *
     * @param mediaElement HTML element containing drawable image source.
     */

    var createdBitmap = false;

    BrowserCodeReader.prototype.createBinaryBitmap = function (mediaElement) {
        var ctx = this.getCaptureCanvasContext(mediaElement);
        this.drawImageOnCanvas(ctx, mediaElement);
        var canvas = this.getCaptureCanvas(mediaElement);
        if (!createdBitmap) {
            document.getElementById('log').textContent += 'decoding image size w=' + canvas.width + ', h=' + canvas.height + '\r\n';
            createdBitmap = true;
        }
        var luminanceSource = new HTMLCanvasElementLuminanceSource_1.HTMLCanvasElementLuminanceSource(canvas);
        var hybridBinarizer = new HybridBinarizer_1.default(luminanceSource);
        return new BinaryBitmap_1.default(hybridBinarizer);
    };
    /**
     *
     */
    BrowserCodeReader.prototype.getCaptureCanvasContext = function (mediaElement) {
        if (!this.captureCanvasContext) {
            var elem = this.getCaptureCanvas(mediaElement);
            var ctx = elem.getContext('2d');
            this.captureCanvasContext = ctx;
        }
        return this.captureCanvasContext;
    };
    /**
     *
     */
    BrowserCodeReader.prototype.getCaptureCanvas = function (mediaElement) {
        if (!this.captureCanvas) {
            var elem = this.createCaptureCanvas(mediaElement);
            this.captureCanvas = elem;
        }
        return this.captureCanvas;
    };
    /**
     * Ovewriting this allows you to manipulate the snapshot image in anyway you want before decode.
     */
    BrowserCodeReader.prototype.drawImageOnCanvas = function (canvasElementContext, srcElement) {
        canvasElementContext.drawImage(srcElement, 0, 0);
    };
    /**
     * Call the encapsulated readers decode
     */
    BrowserCodeReader.prototype.decodeBitmap = function (binaryBitmap) {
        return this.reader.decode(binaryBitmap, this._hints);
    };
    /**
     * 🖌 Prepares the canvas for capture and scan frames.
     */
    BrowserCodeReader.prototype.createCaptureCanvas = function (mediaElement) {
        if (typeof document === 'undefined') {
            this._destroyCaptureCanvas();
            return null;
        }
        var canvasElement = document.createElement('canvas');
        var width;
        var height;
        if (typeof mediaElement !== 'undefined') {
            if (mediaElement instanceof HTMLVideoElement) {
                width = mediaElement.videoWidth;
                height = mediaElement.videoHeight;
            }
            else if (mediaElement instanceof HTMLImageElement) {
                width = mediaElement.naturalWidth || mediaElement.width;
                height = mediaElement.naturalHeight || mediaElement.height;
            }
        }
        canvasElement.style.width = width + 'px';
        canvasElement.style.height = height + 'px';
        canvasElement.width = width;
        canvasElement.height = height;
        return canvasElement;
    };
    /**
     * Stops the continuous scan and cleans the stream.
     */
    BrowserCodeReader.prototype.stopStreams = function () {
        if (this.stream) {
            this.stream.getVideoTracks().forEach(function (t) { return t.stop(); });
            this.stream = undefined;
        }
        if (this._stopAsyncDecode === false) {
            this.stopAsyncDecode();
        }
        if (this._stopContinuousDecode === false) {
            this.stopContinuousDecode();
        }
    };
    /**
     * Resets the code reader to the initial state. Cancels any ongoing barcode scanning from video or camera.
     *
     * @memberOf BrowserCodeReader
     */
    BrowserCodeReader.prototype.reset = function () {
        // stops the camera, preview and scan 🔴
        this.stopStreams();
        // clean and forget about HTML elements
        this._destroyVideoElement();
        this._destroyImageElement();
        this._destroyCaptureCanvas();
    };
    BrowserCodeReader.prototype._destroyVideoElement = function () {
        if (!this.videoElement) {
            return;
        }
        // first gives freedon to the element 🕊
        if (typeof this.videoEndedListener !== 'undefined') {
            this.videoElement.removeEventListener('ended', this.videoEndedListener);
        }
        if (typeof this.videoPlayingEventListener !== 'undefined') {
            this.videoElement.removeEventListener('playing', this.videoPlayingEventListener);
        }
        if (typeof this.videoCanPlayListener !== 'undefined') {
            this.videoElement.removeEventListener('loadedmetadata', this.videoCanPlayListener);
        }
        // then forgets about that element 😢
        this.cleanVideoSource(this.videoElement);
        this.videoElement = undefined;
    };
    BrowserCodeReader.prototype._destroyImageElement = function () {
        if (!this.imageElement) {
            return;
        }
        // first gives freedon to the element 🕊
        if (undefined !== this.imageLoadedListener) {
            this.imageElement.removeEventListener('load', this.imageLoadedListener);
        }
        // then forget about that element 😢
        this.imageElement.src = undefined;
        this.imageElement.removeAttribute('src');
        this.imageElement = undefined;
    };
    /**
     * Cleans canvas references 🖌
     */
    BrowserCodeReader.prototype._destroyCaptureCanvas = function () {
        // then forget about that element 😢
        this.captureCanvasContext = undefined;
        this.captureCanvas = undefined;
    };
    /**
     * Defines what the videoElement src will be.
     *
     * @param videoElement
     * @param stream
     */
    BrowserCodeReader.prototype.addVideoSource = function (videoElement, stream) {
        // Older browsers may not have `srcObject`
        try {
            // @note Throws Exception if interrupted by a new loaded request
            videoElement.srcObject = stream;
        }
        catch (err) {
            // @note Avoid using this in new browsers, as it is going away.
            videoElement.src = URL.createObjectURL(stream);
        }
    };
    /**
     * Unbinds a HTML video src property.
     *
     * @param videoElement
     */
    BrowserCodeReader.prototype.cleanVideoSource = function (videoElement) {
        try {
            videoElement.srcObject = null;
        }
        catch (err) {
            videoElement.src = '';
        }
        this.videoElement.removeAttribute('src');
    };
    return BrowserCodeReader;
}());
exports.BrowserCodeReader = BrowserCodeReader;


/***/ }),

/***/ "./src/browser/BrowserDatamatrixCodeReader.ts":
/*!****************************************************!*\
  !*** ./src/browser/BrowserDatamatrixCodeReader.ts ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserCodeReader_1 = __webpack_require__(/*! ./BrowserCodeReader */ "./src/browser/BrowserCodeReader.ts");
var DataMatrixReader_1 = __webpack_require__(/*! ../core/datamatrix/DataMatrixReader */ "./src/core/datamatrix/DataMatrixReader.ts");
/**
 * @deprecated Moving to @zxing/browser
 *
 * QR Code reader to use from browser.
 */
var BrowserDatamatrixCodeReader = /** @class */ (function (_super) {
    __extends(BrowserDatamatrixCodeReader, _super);
    /**
     * Creates an instance of BrowserQRCodeReader.
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
     */
    function BrowserDatamatrixCodeReader(timeBetweenScansMillis) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new DataMatrixReader_1.default(), timeBetweenScansMillis) || this;
    }
    return BrowserDatamatrixCodeReader;
}(BrowserCodeReader_1.BrowserCodeReader));
exports.BrowserDatamatrixCodeReader = BrowserDatamatrixCodeReader;


/***/ }),

/***/ "./src/browser/BrowserMultiFormatReader.ts":
/*!*************************************************!*\
  !*** ./src/browser/BrowserMultiFormatReader.ts ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserCodeReader_1 = __webpack_require__(/*! ./BrowserCodeReader */ "./src/browser/BrowserCodeReader.ts");
var MultiFormatReader_1 = __webpack_require__(/*! ../core/MultiFormatReader */ "./src/core/MultiFormatReader.ts");
var BrowserMultiFormatReader = /** @class */ (function (_super) {
    __extends(BrowserMultiFormatReader, _super);
    function BrowserMultiFormatReader(hints, timeBetweenScansMillis) {
        if (hints === void 0) { hints = null; }
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        var _this = this;
        var reader = new MultiFormatReader_1.default();
        reader.setHints(hints);
        _this = _super.call(this, reader, timeBetweenScansMillis) || this;
        return _this;
    }
    /**
     * Overwrite decodeBitmap to call decodeWithState, which will pay
     * attention to the hints set in the constructor function
     */
    BrowserMultiFormatReader.prototype.decodeBitmap = function (binaryBitmap) {
        return this.reader.decodeWithState(binaryBitmap);
    };
    return BrowserMultiFormatReader;
}(BrowserCodeReader_1.BrowserCodeReader));
exports.BrowserMultiFormatReader = BrowserMultiFormatReader;


/***/ }),

/***/ "./src/browser/BrowserQRCodeReader.ts":
/*!********************************************!*\
  !*** ./src/browser/BrowserQRCodeReader.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserCodeReader_1 = __webpack_require__(/*! ./BrowserCodeReader */ "./src/browser/BrowserCodeReader.ts");
var QRCodeReader_1 = __webpack_require__(/*! ../core/qrcode/QRCodeReader */ "./src/core/qrcode/QRCodeReader.ts");
/**
 * @deprecated Moving to @zxing/browser
 *
 * QR Code reader to use from browser.
 */
var BrowserQRCodeReader = /** @class */ (function (_super) {
    __extends(BrowserQRCodeReader, _super);
    /**
     * Creates an instance of BrowserQRCodeReader.
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
     */
    function BrowserQRCodeReader(timeBetweenScansMillis) {
        if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
        return _super.call(this, new QRCodeReader_1.default(), timeBetweenScansMillis) || this;
    }
    return BrowserQRCodeReader;
}(BrowserCodeReader_1.BrowserCodeReader));
exports.BrowserQRCodeReader = BrowserQRCodeReader;


/***/ }),

/***/ "./src/browser/BrowserQRCodeSvgWriter.ts":
/*!***********************************************!*\
  !*** ./src/browser/BrowserQRCodeSvgWriter.ts ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EncodeHintType_1 = __webpack_require__(/*! ../core/EncodeHintType */ "./src/core/EncodeHintType.ts");
var Encoder_1 = __webpack_require__(/*! ../core/qrcode/encoder/Encoder */ "./src/core/qrcode/encoder/Encoder.ts");
var ErrorCorrectionLevel_1 = __webpack_require__(/*! ../core/qrcode/decoder/ErrorCorrectionLevel */ "./src/core/qrcode/decoder/ErrorCorrectionLevel.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../core/IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var IllegalStateException_1 = __webpack_require__(/*! ../core/IllegalStateException */ "./src/core/IllegalStateException.ts");
/**
 * @deprecated Moving to @zxing/browser
 */
var BrowserQRCodeSvgWriter = /** @class */ (function () {
    function BrowserQRCodeSvgWriter() {
    }
    /**
     * Writes and renders a QRCode SVG element.
     *
     * @param contents
     * @param width
     * @param height
     * @param hints
     */
    BrowserQRCodeSvgWriter.prototype.write = function (contents, width, height, hints) {
        if (hints === void 0) { hints = null; }
        if (contents.length === 0) {
            throw new IllegalArgumentException_1.default('Found empty contents');
        }
        // if (format != BarcodeFormat.QR_CODE) {
        //   throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format)
        // }
        if (width < 0 || height < 0) {
            throw new IllegalArgumentException_1.default('Requested dimensions are too small: ' + width + 'x' + height);
        }
        var errorCorrectionLevel = ErrorCorrectionLevel_1.default.L;
        var quietZone = BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE;
        if (hints !== null) {
            if (undefined !== hints.get(EncodeHintType_1.default.ERROR_CORRECTION)) {
                errorCorrectionLevel = ErrorCorrectionLevel_1.default.fromString(hints.get(EncodeHintType_1.default.ERROR_CORRECTION).toString());
            }
            if (undefined !== hints.get(EncodeHintType_1.default.MARGIN)) {
                quietZone = Number.parseInt(hints.get(EncodeHintType_1.default.MARGIN).toString(), 10);
            }
        }
        var code = Encoder_1.default.encode(contents, errorCorrectionLevel, hints);
        return this.renderResult(code, width, height, quietZone);
    };
    /**
     * Renders the result and then appends it to the DOM.
     */
    BrowserQRCodeSvgWriter.prototype.writeToDom = function (containerElement, contents, width, height, hints) {
        if (hints === void 0) { hints = null; }
        if (typeof containerElement === 'string') {
            containerElement = document.querySelector(containerElement);
        }
        var svgElement = this.write(contents, width, height, hints);
        if (containerElement)
            containerElement.appendChild(svgElement);
    };
    /**
     * Note that the input matrix uses 0 == white, 1 == black.
     * The output matrix uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
     */
    BrowserQRCodeSvgWriter.prototype.renderResult = function (code, width /*int*/, height /*int*/, quietZone /*int*/) {
        var input = code.getMatrix();
        if (input === null) {
            throw new IllegalStateException_1.default();
        }
        var inputWidth = input.getWidth();
        var inputHeight = input.getHeight();
        var qrWidth = inputWidth + (quietZone * 2);
        var qrHeight = inputHeight + (quietZone * 2);
        var outputWidth = Math.max(width, qrWidth);
        var outputHeight = Math.max(height, qrHeight);
        var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
        // Padding includes both the quiet zone and the extra white pixels to accommodate the requested
        // dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
        // If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
        // handle all the padding from 100x100 (the actual QR) up to 200x160.
        var leftPadding = Math.floor((outputWidth - (inputWidth * multiple)) / 2);
        var topPadding = Math.floor((outputHeight - (inputHeight * multiple)) / 2);
        var svgElement = this.createSVGElement(outputWidth, outputHeight);
        for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
            // Write the contents of this row of the barcode
            for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
                if (input.get(inputX, inputY) === 1) {
                    var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
                    svgElement.appendChild(svgRectElement);
                }
            }
        }
        return svgElement;
    };
    /**
     * Creates a SVG element.
     *
     * @param w SVG's width attribute
     * @param h SVG's height attribute
     */
    BrowserQRCodeSvgWriter.prototype.createSVGElement = function (w, h) {
        var svgElement = document.createElementNS(BrowserQRCodeSvgWriter.SVG_NS, 'svg');
        svgElement.setAttributeNS(null, 'height', w.toString());
        svgElement.setAttributeNS(null, 'width', h.toString());
        return svgElement;
    };
    /**
     * Creates a SVG rect element.
     *
     * @param x Element's x coordinate
     * @param y Element's y coordinate
     * @param w Element's width attribute
     * @param h Element's height attribute
     */
    BrowserQRCodeSvgWriter.prototype.createSvgRectElement = function (x, y, w, h) {
        var rect = document.createElementNS(BrowserQRCodeSvgWriter.SVG_NS, 'rect');
        rect.setAttributeNS(null, 'x', x.toString());
        rect.setAttributeNS(null, 'y', y.toString());
        rect.setAttributeNS(null, 'height', w.toString());
        rect.setAttributeNS(null, 'width', h.toString());
        rect.setAttributeNS(null, 'fill', '#000000');
        return rect;
    };
    BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE = 4;
    /**
     * SVG markup NameSpace
     */
    BrowserQRCodeSvgWriter.SVG_NS = 'http://www.w3.org/2000/svg';
    return BrowserQRCodeSvgWriter;
}());
exports.BrowserQRCodeSvgWriter = BrowserQRCodeSvgWriter;


/***/ }),

/***/ "./src/browser/HTMLCanvasElementLuminanceSource.ts":
/*!*********************************************************!*\
  !*** ./src/browser/HTMLCanvasElementLuminanceSource.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvertedLuminanceSource_1 = __webpack_require__(/*! ../core/InvertedLuminanceSource */ "./src/core/InvertedLuminanceSource.ts");
var LuminanceSource_1 = __webpack_require__(/*! ../core/LuminanceSource */ "./src/core/LuminanceSource.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../core/IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * @deprecated Moving to @zxing/browser
 */
var HTMLCanvasElementLuminanceSource = /** @class */ (function (_super) {
    __extends(HTMLCanvasElementLuminanceSource, _super);
    function HTMLCanvasElementLuminanceSource(canvas) {
        var _this = _super.call(this, canvas.width, canvas.height) || this;
        _this.canvas = canvas;
        _this.tempCanvasElement = null;
        _this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(canvas);
        return _this;
    }
    HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData = function (canvas) {
        var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
        return HTMLCanvasElementLuminanceSource.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
    };
    HTMLCanvasElementLuminanceSource.toGrayscaleBuffer = function (imageBuffer, width, height) {
        var grayscaleBuffer = new Uint8ClampedArray(width * height);
        for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
            var gray = void 0;
            var alpha = imageBuffer[i + 3];
            // The color of fully-transparent pixels is irrelevant. They are often, technically, fully-transparent
            // black (0 alpha, and then 0 RGB). They are often used, of course as the "white" area in a
            // barcode image. Force any such pixel to be white:
            if (alpha === 0) {
                gray = 0xFF;
            }
            else {
                var pixelR = imageBuffer[i];
                var pixelG = imageBuffer[i + 1];
                var pixelB = imageBuffer[i + 2];
                // .299R + 0.587G + 0.114B (YUV/YIQ for PAL and NTSC),
                // (306*R) >> 10 is approximately equal to R*0.299, and so on.
                // 0x200 >> 10 is 0.5, it implements rounding.
                gray = (306 * pixelR +
                    601 * pixelG +
                    117 * pixelB +
                    0x200) >> 10;
            }
            grayscaleBuffer[j] = gray;
        }
        return grayscaleBuffer;
    };
    HTMLCanvasElementLuminanceSource.prototype.getRow = function (y /*int*/, row) {
        if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default('Requested row is outside the image: ' + y);
        }
        var width = this.getWidth();
        var start = y * width;
        if (row === null) {
            row = this.buffer.slice(start, start + width);
        }
        else {
            if (row.length < width) {
                row = new Uint8ClampedArray(width);
            }
            // The underlying raster of image consists of bytes with the luminance values
            // TODO: can avoid set/slice?
            row.set(this.buffer.slice(start, start + width));
        }
        return row;
    };
    HTMLCanvasElementLuminanceSource.prototype.getMatrix = function () {
        return this.buffer;
    };
    HTMLCanvasElementLuminanceSource.prototype.isCropSupported = function () {
        return true;
    };
    HTMLCanvasElementLuminanceSource.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        this.crop(left, top, width, height);
        return this;
    };
    /**
     * This is always true, since the image is a gray-scale image.
     *
     * @return true
     */
    HTMLCanvasElementLuminanceSource.prototype.isRotateSupported = function () {
        return true;
    };
    HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise = function () {
        this.rotate(-90);
        return this;
    };
    HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise45 = function () {
        this.rotate(-45);
        return this;
    };
    HTMLCanvasElementLuminanceSource.prototype.getTempCanvasElement = function () {
        if (null === this.tempCanvasElement) {
            var tempCanvasElement = this.canvas.ownerDocument.createElement('canvas');
            tempCanvasElement.width = this.canvas.width;
            tempCanvasElement.height = this.canvas.height;
            this.tempCanvasElement = tempCanvasElement;
        }
        return this.tempCanvasElement;
    };
    HTMLCanvasElementLuminanceSource.prototype.rotate = function (angle) {
        var tempCanvasElement = this.getTempCanvasElement();
        var tempContext = tempCanvasElement.getContext('2d');
        var angleRadians = angle * HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS;
        // Calculate and set new dimensions for temp canvas
        var width = this.canvas.width;
        var height = this.canvas.height;
        var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
        var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
        tempCanvasElement.width = newWidth;
        tempCanvasElement.height = newHeight;
        // Draw at center of temp canvas to prevent clipping of image data
        tempContext.translate(newWidth / 2, newHeight / 2);
        tempContext.rotate(angleRadians);
        tempContext.drawImage(this.canvas, width / -2, height / -2);
        this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(tempCanvasElement);
        return this;
    };
    HTMLCanvasElementLuminanceSource.prototype.invert = function () {
        return new InvertedLuminanceSource_1.default(this);
    };
    HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS = Math.PI / 180;
    return HTMLCanvasElementLuminanceSource;
}(LuminanceSource_1.default));
exports.HTMLCanvasElementLuminanceSource = HTMLCanvasElementLuminanceSource;


/***/ }),

/***/ "./src/browser/VideoInputDevice.ts":
/*!*****************************************!*\
  !*** ./src/browser/VideoInputDevice.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated Moving to @zxing/browser
 *
 * Video input device metadata containing the id and label of the device if available.
 */
var VideoInputDevice = /** @class */ (function () {
    /**
     * Creates an instance of VideoInputDevice.
     *
     * @param {string} deviceId the video input device id
     * @param {string} label the label of the device if available
     */
    function VideoInputDevice(deviceId, label, groupId) {
        this.deviceId = deviceId;
        this.label = label;
        /** @inheritdoc */
        this.kind = 'videoinput';
        this.groupId = groupId || undefined;
    }
    /** @inheritdoc */
    VideoInputDevice.prototype.toJSON = function () {
        return {
            kind: this.kind,
            groupId: this.groupId,
            deviceId: this.deviceId,
            label: this.label,
        };
    };
    return VideoInputDevice;
}());
exports.VideoInputDevice = VideoInputDevice;


/***/ }),

/***/ "./src/core/ArgumentException.ts":
/*!***************************************!*\
  !*** ./src/core/ArgumentException.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var ArgumentException = /** @class */ (function (_super) {
    __extends(ArgumentException, _super);
    function ArgumentException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArgumentException;
}(Exception_1.default));
exports.default = ArgumentException;


/***/ }),

/***/ "./src/core/ArithmeticException.ts":
/*!*****************************************!*\
  !*** ./src/core/ArithmeticException.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var ArithmeticException = /** @class */ (function (_super) {
    __extends(ArithmeticException, _super);
    function ArithmeticException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArithmeticException;
}(Exception_1.default));
exports.default = ArithmeticException;


/***/ }),

/***/ "./src/core/BarcodeFormat.ts":
/*!***********************************!*\
  !*** ./src/core/BarcodeFormat.ts ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Direct port to TypeScript of ZXing by Adrian Toșcă
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*namespace com.google.zxing {*/
/**
 * Enumerates barcode formats known to this package. Please keep alphabetized.
 *
 * @author Sean Owen
 */
var BarcodeFormat;
(function (BarcodeFormat) {
    /** Aztec 2D barcode format. */
    BarcodeFormat[BarcodeFormat["AZTEC"] = 0] = "AZTEC";
    /** CODABAR 1D format. */
    BarcodeFormat[BarcodeFormat["CODABAR"] = 1] = "CODABAR";
    /** Code 39 1D format. */
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    /** Code 93 1D format. */
    BarcodeFormat[BarcodeFormat["CODE_93"] = 3] = "CODE_93";
    /** Code 128 1D format. */
    BarcodeFormat[BarcodeFormat["CODE_128"] = 4] = "CODE_128";
    /** Data Matrix 2D barcode format. */
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 5] = "DATA_MATRIX";
    /** EAN-8 1D format. */
    BarcodeFormat[BarcodeFormat["EAN_8"] = 6] = "EAN_8";
    /** EAN-13 1D format. */
    BarcodeFormat[BarcodeFormat["EAN_13"] = 7] = "EAN_13";
    /** ITF (Interleaved Two of Five) 1D format. */
    BarcodeFormat[BarcodeFormat["ITF"] = 8] = "ITF";
    /** MaxiCode 2D barcode format. */
    BarcodeFormat[BarcodeFormat["MAXICODE"] = 9] = "MAXICODE";
    /** PDF417 format. */
    BarcodeFormat[BarcodeFormat["PDF_417"] = 10] = "PDF_417";
    /** QR Code 2D barcode format. */
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 11] = "QR_CODE";
    /** RSS 14 */
    BarcodeFormat[BarcodeFormat["RSS_14"] = 12] = "RSS_14";
    /** RSS EXPANDED */
    BarcodeFormat[BarcodeFormat["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
    /** UPC-A 1D format. */
    BarcodeFormat[BarcodeFormat["UPC_A"] = 14] = "UPC_A";
    /** UPC-E 1D format. */
    BarcodeFormat[BarcodeFormat["UPC_E"] = 15] = "UPC_E";
    /** UPC/EAN extension format. Not a stand-alone format. */
    BarcodeFormat[BarcodeFormat["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
})(BarcodeFormat || (BarcodeFormat = {}));
exports.default = BarcodeFormat;


/***/ }),

/***/ "./src/core/Binarizer.ts":
/*!*******************************!*\
  !*** ./src/core/Binarizer.ts ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class hierarchy provides a set of methods to convert luminance data to 1 bit data.
 * It allows the algorithm to vary polymorphically, for example allowing a very expensive
 * thresholding technique for servers and a fast one for mobile. It also permits the implementation
 * to vary, e.g. a JNI version for Android and a Java fallback version for other platforms.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var Binarizer = /** @class */ (function () {
    function Binarizer(source) {
        this.source = source;
    }
    Binarizer.prototype.getLuminanceSource = function () {
        return this.source;
    };
    Binarizer.prototype.getWidth = function () {
        return this.source.getWidth();
    };
    Binarizer.prototype.getHeight = function () {
        return this.source.getHeight();
    };
    return Binarizer;
}());
exports.default = Binarizer;


/***/ }),

/***/ "./src/core/BinaryBitmap.ts":
/*!**********************************!*\
  !*** ./src/core/BinaryBitmap.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IllegalArgumentException_1 = __webpack_require__(/*! ./IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var BinaryBitmap = /** @class */ (function () {
    function BinaryBitmap(binarizer) {
        this.binarizer = binarizer;
        if (binarizer === null) {
            throw new IllegalArgumentException_1.default('Binarizer must be non-null.');
        }
    }
    /**
     * @return The width of the bitmap.
     */
    BinaryBitmap.prototype.getWidth = function () {
        return this.binarizer.getWidth();
    };
    /**
     * @return The height of the bitmap.
     */
    BinaryBitmap.prototype.getHeight = function () {
        return this.binarizer.getHeight();
    };
    /**
     * Converts one row of luminance data to 1 bit data. May actually do the conversion, or return
     * cached data. Callers should assume this method is expensive and call it as seldom as possible.
     * This method is intended for decoding 1D barcodes and may choose to apply sharpening.
     *
     * @param y The row to fetch, which must be in [0, bitmap height)
     * @param row An optional preallocated array. If null or too small, it will be ignored.
     *            If used, the Binarizer will call BitArray.clear(). Always use the returned object.
     * @return The array of bits for this row (true means black).
     * @throws NotFoundException if row can't be binarized
     */
    BinaryBitmap.prototype.getBlackRow = function (y /*int*/, row) {
        return this.binarizer.getBlackRow(y, row);
    };
    /**
     * Converts a 2D array of luminance data to 1 bit. As above, assume this method is expensive
     * and do not call it repeatedly. This method is intended for decoding 2D barcodes and may or
     * may not apply sharpening. Therefore, a row from this matrix may not be identical to one
     * fetched using getBlackRow(), so don't mix and match between them.
     *
     * @return The 2D array of bits for the image (true means black).
     * @throws NotFoundException if image can't be binarized to make a matrix
     */
    BinaryBitmap.prototype.getBlackMatrix = function () {
        // The matrix is created on demand the first time it is requested, then cached. There are two
        // reasons for this:
        // 1. This work will never be done if the caller only installs 1D Reader objects, or if a
        //    1D Reader finds a barcode before the 2D Readers run.
        // 2. This work will only be done once even if the caller installs multiple 2D Readers.
        if (this.matrix === null || this.matrix === undefined) {
            this.matrix = this.binarizer.getBlackMatrix();
        }
        return this.matrix;
    };
    /**
     * @return Whether this bitmap can be cropped.
     */
    BinaryBitmap.prototype.isCropSupported = function () {
        return this.binarizer.getLuminanceSource().isCropSupported();
    };
    /**
     * Returns a new object with cropped image data. Implementations may keep a reference to the
     * original data rather than a copy. Only callable if isCropSupported() is true.
     *
     * @param left The left coordinate, which must be in [0,getWidth())
     * @param top The top coordinate, which must be in [0,getHeight())
     * @param width The width of the rectangle to crop.
     * @param height The height of the rectangle to crop.
     * @return A cropped version of this object.
     */
    BinaryBitmap.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        var newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
        return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
    };
    /**
     * @return Whether this bitmap supports counter-clockwise rotation.
     */
    BinaryBitmap.prototype.isRotateSupported = function () {
        return this.binarizer.getLuminanceSource().isRotateSupported();
    };
    /**
     * Returns a new object with rotated image data by 90 degrees counterclockwise.
     * Only callable if {@link #isRotateSupported()} is true.
     *
     * @return A rotated version of this object.
     */
    BinaryBitmap.prototype.rotateCounterClockwise = function () {
        var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
        return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
    };
    /**
     * Returns a new object with rotated image data by 45 degrees counterclockwise.
     * Only callable if {@link #isRotateSupported()} is true.
     *
     * @return A rotated version of this object.
     */
    BinaryBitmap.prototype.rotateCounterClockwise45 = function () {
        var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
        return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
    };
    /*@Override*/
    BinaryBitmap.prototype.toString = function () {
        try {
            return this.getBlackMatrix().toString();
        }
        catch (e /*: NotFoundException*/) {
            return '';
        }
    };
    return BinaryBitmap;
}());
exports.default = BinaryBitmap;


/***/ }),

/***/ "./src/core/ChecksumException.ts":
/*!***************************************!*\
  !*** ./src/core/ChecksumException.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var ChecksumException = /** @class */ (function (_super) {
    __extends(ChecksumException, _super);
    function ChecksumException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChecksumException;
}(Exception_1.default));
exports.default = ChecksumException;


/***/ }),

/***/ "./src/core/DecodeHintType.ts":
/*!************************************!*\
  !*** ./src/core/DecodeHintType.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
/**
 * Encapsulates a type of hint that a caller may pass to a barcode reader to help it
 * more quickly or accurately decode it. It is up to implementations to decide what,
 * if anything, to do with the information that is supplied.
 *
 * @author Sean Owen
 * @author dswitkin@google.com (Daniel Switkin)
 * @see Reader#decode(BinaryBitmap,java.util.Map)
 */
var DecodeHintType;
(function (DecodeHintType) {
    /**
     * Unspecified, application-specific hint. Maps to an unspecified {@link Object}.
     */
    DecodeHintType[DecodeHintType["OTHER"] = 0] = "OTHER"; /*(Object.class)*/
    /**
     * Image is a pure monochrome image of a barcode. Doesn't matter what it maps to;
     * use {@link Boolean#TRUE}.
     */
    DecodeHintType[DecodeHintType["PURE_BARCODE"] = 1] = "PURE_BARCODE"; /*(Void.class)*/
    /**
     * Image is known to be of one of a few possible formats.
     * Maps to a {@link List} of {@link BarcodeFormat}s.
     */
    DecodeHintType[DecodeHintType["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS"; /*(List.class)*/
    /**
     * Spend more time to try to find a barcode; optimize for accuracy, not speed.
     * Doesn't matter what it maps to; use {@link Boolean#TRUE}.
     */
    DecodeHintType[DecodeHintType["TRY_HARDER"] = 3] = "TRY_HARDER"; /*(Void.class)*/
    /**
     * Specifies what character encoding to use when decoding, where applicable (type String)
     */
    DecodeHintType[DecodeHintType["CHARACTER_SET"] = 4] = "CHARACTER_SET"; /*(String.class)*/
    /**
     * Allowed lengths of encoded data -- reject anything else. Maps to an {@code Int32Array}.
     */
    DecodeHintType[DecodeHintType["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS"; /*(Int32Array.class)*/
    /**
     * Assume Code 39 codes employ a check digit. Doesn't matter what it maps to;
     * use {@link Boolean#TRUE}.
     */
    DecodeHintType[DecodeHintType["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT"; /*(Void.class)*/
    /**
     * Assume the barcode is being processed as a GS1 barcode, and modify behavior as needed.
     * For example this affects FNC1 handling for Code 128 (aka GS1-128). Doesn't matter what it maps to;
     * use {@link Boolean#TRUE}.
     */
    DecodeHintType[DecodeHintType["ASSUME_GS1"] = 7] = "ASSUME_GS1"; /*(Void.class)*/
    /**
     * If true, return the start and end digits in a Codabar barcode instead of stripping them. They
     * are alpha, whereas the rest are numeric. By default, they are stripped, but this causes them
     * to not be. Doesn't matter what it maps to; use {@link Boolean#TRUE}.
     */
    DecodeHintType[DecodeHintType["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END"; /*(Void.class)*/
    /**
     * The caller needs to be notified via callback when a possible {@link ResultPoint}
     * is found. Maps to a {@link ResultPointCallback}.
     */
    DecodeHintType[DecodeHintType["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK"; /*(ResultPointCallback.class)*/
    /**
     * Allowed extension lengths for EAN or UPC barcodes. Other formats will ignore this.
     * Maps to an {@code Int32Array} of the allowed extension lengths, for example [2], [5], or [2, 5].
     * If it is optional to have an extension, do not set this hint. If this is set,
     * and a UPC or EAN barcode is found but an extension is not, then no result will be returned
     * at all.
     */
    DecodeHintType[DecodeHintType["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS"; /*(Int32Array.class)*/
    // End of enumeration values.
    /**
     * Data type the hint is expecting.
     * Among the possible values the {@link Void} stands out as being used for
     * hints that do not expect a value to be supplied (flag hints). Such hints
     * will possibly have their value ignored, or replaced by a
     * {@link Boolean#TRUE}. Hint suppliers should probably use
     * {@link Boolean#TRUE} as directed by the actual hint documentation.
     */
    // private valueType: Class<?>
    // DecodeHintType(valueType: Class<?>) {
    //   this.valueType = valueType
    // }
    // public getValueType(): Class<?> {
    //   return valueType
    // }
})(DecodeHintType || (DecodeHintType = {}));
exports.default = DecodeHintType;


/***/ }),

/***/ "./src/core/EncodeHintType.ts":
/*!************************************!*\
  !*** ./src/core/EncodeHintType.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
/**
 * These are a set of hints that you may pass to Writers to specify their behavior.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var EncodeHintType;
(function (EncodeHintType) {
    /**
     * Specifies what degree of error correction to use, for example in QR Codes.
     * Type depends on the encoder. For example for QR codes it's type
     * {@link com.google.zxing.qrcode.decoder.ErrorCorrectionLevel ErrorCorrectionLevel}.
     * For Aztec it is of type {@link Integer}, representing the minimal percentage of error correction words.
     * For PDF417 it is of type {@link Integer}, valid values being 0 to 8.
     * In all cases, it can also be a {@link String} representation of the desired value as well.
     * Note: an Aztec symbol should have a minimum of 25% EC words.
     */
    EncodeHintType[EncodeHintType["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
    /**
     * Specifies what character encoding to use where applicable (type {@link String})
     */
    EncodeHintType[EncodeHintType["CHARACTER_SET"] = 1] = "CHARACTER_SET";
    /**
     * Specifies the matrix shape for Data Matrix (type {@link com.google.zxing.datamatrix.encoder.SymbolShapeHint})
     */
    EncodeHintType[EncodeHintType["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
    /**
     * Specifies a minimum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
     *
     * @deprecated use width/height params in
     * {@link com.google.zxing.datamatrix.DataMatrixWriter#encode(String, BarcodeFormat, int, int)}
     */
    /*@Deprecated*/
    EncodeHintType[EncodeHintType["MIN_SIZE"] = 3] = "MIN_SIZE";
    /**
     * Specifies a maximum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
     *
     * @deprecated without replacement
     */
    /*@Deprecated*/
    EncodeHintType[EncodeHintType["MAX_SIZE"] = 4] = "MAX_SIZE";
    /**
     * Specifies margin, in pixels, to use when generating the barcode. The meaning can vary
     * by format; for example it controls margin before and after the barcode horizontally for
     * most 1D formats. (Type {@link Integer}, or {@link String} representation of the integer value).
     */
    EncodeHintType[EncodeHintType["MARGIN"] = 5] = "MARGIN";
    /**
     * Specifies whether to use compact mode for PDF417 (type {@link Boolean}, or "true" or "false"
     * {@link String} value).
     */
    EncodeHintType[EncodeHintType["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
    /**
     * Specifies what compaction mode to use for PDF417 (type
     * {@link com.google.zxing.pdf417.encoder.Compaction Compaction} or {@link String} value of one of its
     * enum values).
     */
    EncodeHintType[EncodeHintType["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
    /**
     * Specifies the minimum and maximum number of rows and columns for PDF417 (type
     * {@link com.google.zxing.pdf417.encoder.Dimensions Dimensions}).
     */
    EncodeHintType[EncodeHintType["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
    /**
     * Specifies the required number of layers for an Aztec code.
     * A negative number (-1, -2, -3, -4) specifies a compact Aztec code.
     * 0 indicates to use the minimum number of layers (the default).
     * A positive number (1, 2, .. 32) specifies a normal (non-compact) Aztec code.
     * (Type {@link Integer}, or {@link String} representation of the integer value).
     */
    EncodeHintType[EncodeHintType["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
    /**
     * Specifies the exact version of QR code to be encoded.
     * (Type {@link Integer}, or {@link String} representation of the integer value).
     */
    EncodeHintType[EncodeHintType["QR_VERSION"] = 10] = "QR_VERSION";
})(EncodeHintType || (EncodeHintType = {}));
exports.default = EncodeHintType;


/***/ }),

/***/ "./src/core/Exception.ts":
/*!*******************************!*\
  !*** ./src/core/Exception.ts ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "./node_modules/ts-custom-error/dist/custom-error.umd.js");
/**
 * Custom Error class of type Exception.
 */
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    /**
     * Allows Exception to be constructed directly
     * with some message and prototype definition.
     */
    function Exception(message) {
        if (message === void 0) { message = undefined; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        return _this;
    }
    return Exception;
}(ts_custom_error_1.CustomError));
exports.default = Exception;


/***/ }),

/***/ "./src/core/FormatException.ts":
/*!*************************************!*\
  !*** ./src/core/FormatException.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var FormatException = /** @class */ (function (_super) {
    __extends(FormatException, _super);
    function FormatException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormatException;
}(Exception_1.default));
exports.default = FormatException;


/***/ }),

/***/ "./src/core/IllegalArgumentException.ts":
/*!**********************************************!*\
  !*** ./src/core/IllegalArgumentException.ts ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var IllegalArgumentException = /** @class */ (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalArgumentException;
}(Exception_1.default));
exports.default = IllegalArgumentException;


/***/ }),

/***/ "./src/core/IllegalStateException.ts":
/*!*******************************************!*\
  !*** ./src/core/IllegalStateException.ts ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var IllegalStateException = /** @class */ (function (_super) {
    __extends(IllegalStateException, _super);
    function IllegalStateException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalStateException;
}(Exception_1.default));
exports.default = IllegalStateException;


/***/ }),

/***/ "./src/core/InvertedLuminanceSource.ts":
/*!*********************************************!*\
  !*** ./src/core/InvertedLuminanceSource.ts ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LuminanceSource_1 = __webpack_require__(/*! ./LuminanceSource */ "./src/core/LuminanceSource.ts");
/*namespace com.google.zxing {*/
/**
 * A wrapper implementation of {@link LuminanceSource} which inverts the luminances it returns -- black becomes
 * white and vice versa, and each value becomes (255-value).
 *
 * @author Sean Owen
 */
var InvertedLuminanceSource = /** @class */ (function (_super) {
    __extends(InvertedLuminanceSource, _super);
    function InvertedLuminanceSource(delegate) {
        var _this = _super.call(this, delegate.getWidth(), delegate.getHeight()) || this;
        _this.delegate = delegate;
        return _this;
    }
    /*@Override*/
    InvertedLuminanceSource.prototype.getRow = function (y /*int*/, row) {
        var sourceRow = this.delegate.getRow(y, row);
        var width = this.getWidth();
        for (var i = 0; i < width; i++) {
            sourceRow[i] = /*(byte)*/ (255 - (sourceRow[i] & 0xFF));
        }
        return sourceRow;
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.getMatrix = function () {
        var matrix = this.delegate.getMatrix();
        var length = this.getWidth() * this.getHeight();
        var invertedMatrix = new Uint8ClampedArray(length);
        for (var i = 0; i < length; i++) {
            invertedMatrix[i] = /*(byte)*/ (255 - (matrix[i] & 0xFF));
        }
        return invertedMatrix;
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.isCropSupported = function () {
        return this.delegate.isCropSupported();
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        return new InvertedLuminanceSource(this.delegate.crop(left, top, width, height));
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.isRotateSupported = function () {
        return this.delegate.isRotateSupported();
    };
    /**
     * @return original delegate {@link LuminanceSource} since invert undoes itself
     */
    /*@Override*/
    InvertedLuminanceSource.prototype.invert = function () {
        return this.delegate;
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.rotateCounterClockwise = function () {
        return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise());
    };
    /*@Override*/
    InvertedLuminanceSource.prototype.rotateCounterClockwise45 = function () {
        return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise45());
    };
    return InvertedLuminanceSource;
}(LuminanceSource_1.default));
exports.default = InvertedLuminanceSource;


/***/ }),

/***/ "./src/core/LuminanceSource.ts":
/*!*************************************!*\
  !*** ./src/core/LuminanceSource.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringBuilder_1 = __webpack_require__(/*! ./util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var UnsupportedOperationException_1 = __webpack_require__(/*! ./UnsupportedOperationException */ "./src/core/UnsupportedOperationException.ts");
/*namespace com.google.zxing {*/
/**
 * The purpose of this class hierarchy is to abstract different bitmap implementations across
 * platforms into a standard interface for requesting greyscale luminance values. The interface
 * only provides immutable methods; therefore crop and rotation create copies. This is to ensure
 * that one Reader does not modify the original luminance source and leave it in an unknown state
 * for other Readers in the chain.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var LuminanceSource = /** @class */ (function () {
    function LuminanceSource(width /*int*/, height /*int*/) {
        this.width = width;
        this.height = height;
    }
    /**
     * @return The width of the bitmap.
     */
    LuminanceSource.prototype.getWidth = function () {
        return this.width;
    };
    /**
     * @return The height of the bitmap.
     */
    LuminanceSource.prototype.getHeight = function () {
        return this.height;
    };
    /**
     * @return Whether this subclass supports cropping.
     */
    LuminanceSource.prototype.isCropSupported = function () {
        return false;
    };
    /**
     * Returns a new object with cropped image data. Implementations may keep a reference to the
     * original data rather than a copy. Only callable if isCropSupported() is true.
     *
     * @param left The left coordinate, which must be in [0,getWidth())
     * @param top The top coordinate, which must be in [0,getHeight())
     * @param width The width of the rectangle to crop.
     * @param height The height of the rectangle to crop.
     * @return A cropped version of this object.
     */
    LuminanceSource.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        throw new UnsupportedOperationException_1.default('This luminance source does not support cropping.');
    };
    /**
     * @return Whether this subclass supports counter-clockwise rotation.
     */
    LuminanceSource.prototype.isRotateSupported = function () {
        return false;
    };
    /**
     * Returns a new object with rotated image data by 90 degrees counterclockwise.
     * Only callable if {@link #isRotateSupported()} is true.
     *
     * @return A rotated version of this object.
     */
    LuminanceSource.prototype.rotateCounterClockwise = function () {
        throw new UnsupportedOperationException_1.default('This luminance source does not support rotation by 90 degrees.');
    };
    /**
     * Returns a new object with rotated image data by 45 degrees counterclockwise.
     * Only callable if {@link #isRotateSupported()} is true.
     *
     * @return A rotated version of this object.
     */
    LuminanceSource.prototype.rotateCounterClockwise45 = function () {
        throw new UnsupportedOperationException_1.default('This luminance source does not support rotation by 45 degrees.');
    };
    /*@Override*/
    LuminanceSource.prototype.toString = function () {
        var row = new Uint8ClampedArray(this.width);
        var result = new StringBuilder_1.default();
        for (var y = 0; y < this.height; y++) {
            var sourceRow = this.getRow(y, row);
            for (var x = 0; x < this.width; x++) {
                var luminance = sourceRow[x] & 0xFF;
                var c = void 0;
                if (luminance < 0x40) {
                    c = '#';
                }
                else if (luminance < 0x80) {
                    c = '+';
                }
                else if (luminance < 0xC0) {
                    c = '.';
                }
                else {
                    c = ' ';
                }
                result.append(c);
            }
            result.append('\n');
        }
        return result.toString();
    };
    return LuminanceSource;
}());
exports.default = LuminanceSource;


/***/ }),

/***/ "./src/core/MultiFormatReader.ts":
/*!***************************************!*\
  !*** ./src/core/MultiFormatReader.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DecodeHintType_1 = __webpack_require__(/*! ./DecodeHintType */ "./src/core/DecodeHintType.ts");
var BarcodeFormat_1 = __webpack_require__(/*! ./BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var QRCodeReader_1 = __webpack_require__(/*! ./qrcode/QRCodeReader */ "./src/core/qrcode/QRCodeReader.ts");
var MultiFormatOneDReader_1 = __webpack_require__(/*! ./oned/MultiFormatOneDReader */ "./src/core/oned/MultiFormatOneDReader.ts");
var DataMatrixReader_1 = __webpack_require__(/*! ./datamatrix/DataMatrixReader */ "./src/core/datamatrix/DataMatrixReader.ts");
var NotFoundException_1 = __webpack_require__(/*! ./NotFoundException */ "./src/core/NotFoundException.ts");
var ReaderException_1 = __webpack_require__(/*! ./ReaderException */ "./src/core/ReaderException.ts");
/*namespace com.google.zxing {*/
/**
 * MultiFormatReader is a convenience class and the main entry point into the library for most uses.
 * By default it attempts to decode all barcode formats that the library supports. Optionally, you
 * can provide a hints object to request different behavior, for example only decoding QR codes.
 *
 * @author Sean Owen
 * @author dswitkin@google.com (Daniel Switkin)
 */
var MultiFormatReader = /** @class */ (function () {
    function MultiFormatReader() {
    }
    /**
     * This version of decode honors the intent of Reader.decode(BinaryBitmap) in that it
     * passes null as a hint to the decoders. However, that makes it inefficient to call repeatedly.
     * Use setHints() followed by decodeWithState() for continuous scan applications.
     *
     * @param image The pixel data to decode
     * @return The contents of the image
     *
     * @throws NotFoundException Any errors which occurred
     */
    /*@Override*/
    // public decode(image: BinaryBitmap): Result {
    //   setHints(null)
    //   return decodeInternal(image)
    // }
    /**
     * Decode an image using the hints provided. Does not honor existing state.
     *
     * @param image The pixel data to decode
     * @param hints The hints to use, clearing the previous state.
     * @return The contents of the image
     *
     * @throws NotFoundException Any errors which occurred
     */
    /*@Override*/
    MultiFormatReader.prototype.decode = function (image, hints) {
        this.setHints(hints);
        return this.decodeInternal(image);
    };
    /**
     * Decode an image using the state set up by calling setHints() previously. Continuous scan
     * clients will get a <b>large</b> speed increase by using this instead of decode().
     *
     * @param image The pixel data to decode
     * @return The contents of the image
     *
     * @throws NotFoundException Any errors which occurred
     */
    MultiFormatReader.prototype.decodeWithState = function (image) {
        // Make sure to set up the default state so we don't crash
        if (this.readers === null || this.readers === undefined) {
            this.setHints(null);
        }
        return this.decodeInternal(image);
    };
    /**
     * This method adds state to the MultiFormatReader. By setting the hints once, subsequent calls
     * to decodeWithState(image) can reuse the same set of readers without reallocating memory. This
     * is important for performance in continuous scan clients.
     *
     * @param hints The set of hints to use for subsequent calls to decode(image)
     */
    MultiFormatReader.prototype.setHints = function (hints) {
        this.hints = hints;
        var tryHarder = hints !== null && hints !== undefined && undefined !== hints.get(DecodeHintType_1.default.TRY_HARDER);
        /*@SuppressWarnings("unchecked")*/
        var formats = hints === null || hints === undefined ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
        var readers = new Array();
        if (formats !== null && formats !== undefined) {
            var addOneDReader = formats.some(function (f) {
                return f === BarcodeFormat_1.default.UPC_A ||
                    f === BarcodeFormat_1.default.UPC_E ||
                    f === BarcodeFormat_1.default.EAN_13 ||
                    f === BarcodeFormat_1.default.EAN_8 ||
                    f === BarcodeFormat_1.default.CODABAR ||
                    f === BarcodeFormat_1.default.CODE_39 ||
                    f === BarcodeFormat_1.default.CODE_93 ||
                    f === BarcodeFormat_1.default.CODE_128 ||
                    f === BarcodeFormat_1.default.ITF ||
                    f === BarcodeFormat_1.default.RSS_14 ||
                    f === BarcodeFormat_1.default.RSS_EXPANDED;
            });
            // Put 1D readers upfront in "normal" mode
            // TYPESCRIPTPORT: TODO: uncomment below as they are ported
            if (addOneDReader && !tryHarder) {
                readers.push(new MultiFormatOneDReader_1.default(hints));
            }
            if (formats.includes(BarcodeFormat_1.default.QR_CODE)) {
                readers.push(new QRCodeReader_1.default());
            }
            if (formats.includes(BarcodeFormat_1.default.DATA_MATRIX)) {
                readers.push(new DataMatrixReader_1.default());
            }
            // if (formats.includes(BarcodeFormat.AZTEC)) {
            //   readers.push(new AztecReader())
            // }
            // if (formats.includes(BarcodeFormat.PDF_417)) {
            //    readers.push(new PDF417Reader())
            // }
            // if (formats.includes(BarcodeFormat.MAXICODE)) {
            //    readers.push(new MaxiCodeReader())
            // }
            // At end in "try harder" mode
            if (addOneDReader && tryHarder) {
                readers.push(new MultiFormatOneDReader_1.default(hints));
            }
        }
        if (readers.length === 0) {
            if (!tryHarder) {
                readers.push(new MultiFormatOneDReader_1.default(hints));
            }
            readers.push(new QRCodeReader_1.default());
            readers.push(new DataMatrixReader_1.default());
            // readers.push(new AztecReader())
            // readers.push(new PDF417Reader())
            // readers.push(new MaxiCodeReader())
            if (tryHarder) {
                readers.push(new MultiFormatOneDReader_1.default(hints));
            }
        }
        this.readers = readers; // .toArray(new Reader[readers.size()])
    };
    /*@Override*/
    MultiFormatReader.prototype.reset = function () {
        if (this.readers !== null) {
            for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
                var reader = _a[_i];
                reader.reset();
            }
        }
    };
    /**
     * @throws NotFoundException
     */
    MultiFormatReader.prototype.decodeInternal = function (image) {
        if (this.readers === null) {
            throw new ReaderException_1.default('No readers where selected, nothing can be read.');
        }
        for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            // Trying to decode with ${reader} reader.
            try {
                return reader.decode(image, this.hints);
            }
            catch (ex) {
                if (ex instanceof ReaderException_1.default) {
                    continue;
                }
                // Bad Exception.
            }
        }
        throw new NotFoundException_1.default('No MultiFormat Readers were able to detect the code.');
    };
    return MultiFormatReader;
}());
exports.default = MultiFormatReader;


/***/ }),

/***/ "./src/core/MultiFormatWriter.ts":
/*!***************************************!*\
  !*** ./src/core/MultiFormatWriter.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import DataMatrixWriter from './datamatrix/DataMatrixWriter'
// import CodaBarWriter from './oned/CodaBarWriter'
// import Code128Writer from './oned/Code128Writer'
// import Code39Writer from './oned/Code39Writer'
// import Code93Writer from './oned/Code93Writer'
// import EAN13Writer from './oned/EAN13Writer'
// import EAN8Writer from './oned/EAN8Writer'
// import ITFWriter from './oned/ITFWriter'
// import UPCAWriter from './oned/UPCAWriter'
// import UPCEWriter from './oned/UPCEWriter'
// import PDF417Writer from './pdf417/PDF417Writer'
var QRCodeWriter_1 = __webpack_require__(/*! ./qrcode/QRCodeWriter */ "./src/core/qrcode/QRCodeWriter.ts");
var BarcodeFormat_1 = __webpack_require__(/*! ./BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ./IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/*import java.util.Map;*/
/**
 * This is a factory class which finds the appropriate Writer subclass for the BarcodeFormat
 * requested and encodes the barcode with the supplied contents.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var MultiFormatWriter = /** @class */ (function () {
    function MultiFormatWriter() {
    }
    /*@Override*/
    // public encode(contents: string,
    //                         format: BarcodeFormat,
    //                         width: number /*int*/,
    //                         height: number /*int*/): BitMatrix /*throws WriterException */ {
    //   return encode(contents, format, width, height, null)
    // }
    /*@Override*/
    MultiFormatWriter.prototype.encode = function (contents, format, width /*int*/, height /*int*/, hints) {
        var writer;
        switch (format) {
            // case BarcodeFormat.EAN_8:
            //   writer = new EAN8Writer()
            //   break
            // case BarcodeFormat.UPC_E:
            //   writer = new UPCEWriter()
            //   break
            // case BarcodeFormat.EAN_13:
            //   writer = new EAN13Writer()
            //   break
            // case BarcodeFormat.UPC_A:
            //   writer = new UPCAWriter()
            //   break
            case BarcodeFormat_1.default.QR_CODE:
                writer = new QRCodeWriter_1.default();
                break;
            // case BarcodeFormat.CODE_39:
            //   writer = new Code39Writer()
            //   break
            // case BarcodeFormat.CODE_93:
            //   writer = new Code93Writer()
            //   break
            // case BarcodeFormat.CODE_128:
            //   writer = new Code128Writer()
            //   break
            // case BarcodeFormat.ITF:
            //   writer = new ITFWriter()
            //   break
            // case BarcodeFormat.PDF_417:
            //   writer = new PDF417Writer()
            //   break
            // case BarcodeFormat.CODABAR:
            //   writer = new CodaBarWriter()
            //   break
            // case BarcodeFormat.DATA_MATRIX:
            //   writer = new DataMatrixWriter()
            //   break
            // case BarcodeFormat.AZTEC:
            //   writer = new AztecWriter()
            //   break
            default:
                throw new IllegalArgumentException_1.default('No encoder available for format ' + format);
        }
        return writer.encode(contents, format, width, height, hints);
    };
    return MultiFormatWriter;
}());
exports.default = MultiFormatWriter;


/***/ }),

/***/ "./src/core/NotFoundException.ts":
/*!***************************************!*\
  !*** ./src/core/NotFoundException.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundException;
}(Exception_1.default));
exports.default = NotFoundException;


/***/ }),

/***/ "./src/core/PlanarYUVLuminanceSource.ts":
/*!**********************************************!*\
  !*** ./src/core/PlanarYUVLuminanceSource.ts ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
var System_1 = __webpack_require__(/*! ./util/System */ "./src/core/util/System.ts");
var LuminanceSource_1 = __webpack_require__(/*! ./LuminanceSource */ "./src/core/LuminanceSource.ts");
var InvertedLuminanceSource_1 = __webpack_require__(/*! ./InvertedLuminanceSource */ "./src/core/InvertedLuminanceSource.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ./IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * This object extends LuminanceSource around an array of YUV data returned from the camera driver,
 * with the option to crop to a rectangle within the full data. This can be used to exclude
 * superfluous pixels around the perimeter and speed up decoding.
 *
 * It works for any pixel format where the Y channel is planar and appears first, including
 * YCbCr_420_SP and YCbCr_422_SP.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var PlanarYUVLuminanceSource = /** @class */ (function (_super) {
    __extends(PlanarYUVLuminanceSource, _super);
    function PlanarYUVLuminanceSource(yuvData, dataWidth /*int*/, dataHeight /*int*/, left /*int*/, top /*int*/, width /*int*/, height /*int*/, reverseHorizontal) {
        var _this = _super.call(this, width, height) || this;
        _this.yuvData = yuvData;
        _this.dataWidth = dataWidth;
        _this.dataHeight = dataHeight;
        _this.left = left;
        _this.top = top;
        if (left + width > dataWidth || top + height > dataHeight) {
            throw new IllegalArgumentException_1.default('Crop rectangle does not fit within image data.');
        }
        if (reverseHorizontal) {
            _this.reverseHorizontal(width, height);
        }
        return _this;
    }
    /*@Override*/
    PlanarYUVLuminanceSource.prototype.getRow = function (y /*int*/, row) {
        if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default('Requested row is outside the image: ' + y);
        }
        var width = this.getWidth();
        if (row === null || row === undefined || row.length < width) {
            row = new Uint8ClampedArray(width);
        }
        var offset = (y + this.top) * this.dataWidth + this.left;
        System_1.default.arraycopy(this.yuvData, offset, row, 0, width);
        return row;
    };
    /*@Override*/
    PlanarYUVLuminanceSource.prototype.getMatrix = function () {
        var width = this.getWidth();
        var height = this.getHeight();
        // If the caller asks for the entire underlying image, save the copy and give them the
        // original data. The docs specifically warn that result.length must be ignored.
        if (width === this.dataWidth && height === this.dataHeight) {
            return this.yuvData;
        }
        var area = width * height;
        var matrix = new Uint8ClampedArray(area);
        var inputOffset = this.top * this.dataWidth + this.left;
        // If the width matches the full width of the underlying data, perform a single copy.
        if (width === this.dataWidth) {
            System_1.default.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
            return matrix;
        }
        // Otherwise copy one cropped row at a time.
        for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            System_1.default.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
            inputOffset += this.dataWidth;
        }
        return matrix;
    };
    /*@Override*/
    PlanarYUVLuminanceSource.prototype.isCropSupported = function () {
        return true;
    };
    /*@Override*/
    PlanarYUVLuminanceSource.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        return new PlanarYUVLuminanceSource(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
    };
    PlanarYUVLuminanceSource.prototype.renderThumbnail = function () {
        var width = this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
        var height = this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
        var pixels = new Int32Array(width * height);
        var yuv = this.yuvData;
        var inputOffset = this.top * this.dataWidth + this.left;
        for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            for (var x = 0; x < width; x++) {
                var grey = yuv[inputOffset + x * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR] & 0xff;
                pixels[outputOffset + x] = 0xFF000000 | (grey * 0x00010101);
            }
            inputOffset += this.dataWidth * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
        }
        return pixels;
    };
    /**
     * @return width of image from {@link #renderThumbnail()}
     */
    PlanarYUVLuminanceSource.prototype.getThumbnailWidth = function () {
        return this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
    };
    /**
     * @return height of image from {@link #renderThumbnail()}
     */
    PlanarYUVLuminanceSource.prototype.getThumbnailHeight = function () {
        return this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
    };
    PlanarYUVLuminanceSource.prototype.reverseHorizontal = function (width /*int*/, height /*int*/) {
        var yuvData = this.yuvData;
        for (var y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
            var middle = rowStart + width / 2;
            for (var x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
                var temp = yuvData[x1];
                yuvData[x1] = yuvData[x2];
                yuvData[x2] = temp;
            }
        }
    };
    PlanarYUVLuminanceSource.prototype.invert = function () {
        return new InvertedLuminanceSource_1.default(this);
    };
    PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR = 2;
    return PlanarYUVLuminanceSource;
}(LuminanceSource_1.default));
exports.default = PlanarYUVLuminanceSource;


/***/ }),

/***/ "./src/core/RGBLuminanceSource.ts":
/*!****************************************!*\
  !*** ./src/core/RGBLuminanceSource.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
__webpack_require__(/*! ./InvertedLuminanceSource */ "./src/core/InvertedLuminanceSource.ts"); // required because of circular dependencies between LuminanceSource and InvertedLuminanceSource
var InvertedLuminanceSource_1 = __webpack_require__(/*! ./InvertedLuminanceSource */ "./src/core/InvertedLuminanceSource.ts");
var LuminanceSource_1 = __webpack_require__(/*! ./LuminanceSource */ "./src/core/LuminanceSource.ts");
var System_1 = __webpack_require__(/*! ./util/System */ "./src/core/util/System.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ./IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * This class is used to help decode images from files which arrive as RGB data from
 * an ARGB pixel array. It does not support rotation.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 * @author Betaminos
 */
var RGBLuminanceSource = /** @class */ (function (_super) {
    __extends(RGBLuminanceSource, _super);
    function RGBLuminanceSource(luminances, width /*int*/, height /*int*/, dataWidth /*int*/, dataHeight /*int*/, left /*int*/, top /*int*/) {
        var _this = _super.call(this, width, height) || this;
        _this.dataWidth = dataWidth;
        _this.dataHeight = dataHeight;
        _this.left = left;
        _this.top = top;
        if (luminances.BYTES_PER_ELEMENT === 4) { // Int32Array
            var size = width * height;
            var luminancesUint8Array = new Uint8ClampedArray(size);
            for (var offset = 0; offset < size; offset++) {
                var pixel = luminances[offset];
                var r = (pixel >> 16) & 0xff; // red
                var g2 = (pixel >> 7) & 0x1fe; // 2 * green
                var b = pixel & 0xff; // blue
                // Calculate green-favouring average cheaply
                luminancesUint8Array[offset] = /*(byte) */ ((r + g2 + b) / 4) & 0xFF;
            }
            _this.luminances = luminancesUint8Array;
        }
        else {
            _this.luminances = luminances;
        }
        if (undefined === dataWidth) {
            _this.dataWidth = width;
        }
        if (undefined === dataHeight) {
            _this.dataHeight = height;
        }
        if (undefined === left) {
            _this.left = 0;
        }
        if (undefined === top) {
            _this.top = 0;
        }
        if (_this.left + width > _this.dataWidth || _this.top + height > _this.dataHeight) {
            throw new IllegalArgumentException_1.default('Crop rectangle does not fit within image data.');
        }
        return _this;
    }
    /*@Override*/
    RGBLuminanceSource.prototype.getRow = function (y /*int*/, row) {
        if (y < 0 || y >= this.getHeight()) {
            throw new IllegalArgumentException_1.default('Requested row is outside the image: ' + y);
        }
        var width = this.getWidth();
        if (row === null || row === undefined || row.length < width) {
            row = new Uint8ClampedArray(width);
        }
        var offset = (y + this.top) * this.dataWidth + this.left;
        System_1.default.arraycopy(this.luminances, offset, row, 0, width);
        return row;
    };
    /*@Override*/
    RGBLuminanceSource.prototype.getMatrix = function () {
        var width = this.getWidth();
        var height = this.getHeight();
        // If the caller asks for the entire underlying image, save the copy and give them the
        // original data. The docs specifically warn that result.length must be ignored.
        if (width === this.dataWidth && height === this.dataHeight) {
            return this.luminances;
        }
        var area = width * height;
        var matrix = new Uint8ClampedArray(area);
        var inputOffset = this.top * this.dataWidth + this.left;
        // If the width matches the full width of the underlying data, perform a single copy.
        if (width === this.dataWidth) {
            System_1.default.arraycopy(this.luminances, inputOffset, matrix, 0, area);
            return matrix;
        }
        // Otherwise copy one cropped row at a time.
        for (var y = 0; y < height; y++) {
            var outputOffset = y * width;
            System_1.default.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
            inputOffset += this.dataWidth;
        }
        return matrix;
    };
    /*@Override*/
    RGBLuminanceSource.prototype.isCropSupported = function () {
        return true;
    };
    /*@Override*/
    RGBLuminanceSource.prototype.crop = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        return new RGBLuminanceSource(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
    };
    RGBLuminanceSource.prototype.invert = function () {
        return new InvertedLuminanceSource_1.default(this);
    };
    return RGBLuminanceSource;
}(LuminanceSource_1.default));
exports.default = RGBLuminanceSource;


/***/ }),

/***/ "./src/core/ReaderException.ts":
/*!*************************************!*\
  !*** ./src/core/ReaderException.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var ReaderException = /** @class */ (function (_super) {
    __extends(ReaderException, _super);
    function ReaderException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReaderException;
}(Exception_1.default));
exports.default = ReaderException;


/***/ }),

/***/ "./src/core/ReedSolomonException.ts":
/*!******************************************!*\
  !*** ./src/core/ReedSolomonException.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var ReedSolomonException = /** @class */ (function (_super) {
    __extends(ReedSolomonException, _super);
    function ReedSolomonException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReedSolomonException;
}(Exception_1.default));
exports.default = ReedSolomonException;


/***/ }),

/***/ "./src/core/Result.ts":
/*!****************************!*\
  !*** ./src/core/Result.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
/*import java.util.EnumMap;*/
/*import java.util.Map;*/
var ResultPoint_1 = __webpack_require__(/*! ./ResultPoint */ "./src/core/ResultPoint.ts");
var System_1 = __webpack_require__(/*! ./util/System */ "./src/core/util/System.ts");
/**
 * <p>Encapsulates the result of decoding a barcode within an image.</p>
 *
 * @author Sean Owen
 */
var Result = /** @class */ (function () {
    // public constructor(private text: string,
    //               Uint8Array rawBytes,
    //               ResultPoconst resultPoints: Int32Array,
    //               BarcodeFormat format) {
    //   this(text, rawBytes, resultPoints, format, System.currentTimeMillis())
    // }
    // public constructor(text: string,
    //               Uint8Array rawBytes,
    //               ResultPoconst resultPoints: Int32Array,
    //               BarcodeFormat format,
    //               long timestamp) {
    //   this(text, rawBytes, rawBytes == null ? 0 : 8 * rawBytes.length,
    //        resultPoints, format, timestamp)
    // }
    function Result(text, rawBytes, numBits /*int*/, resultPoints, format, timestamp /*long*/) {
        this.text = text;
        this.rawBytes = rawBytes;
        this.numBits = numBits;
        this.resultPoints = resultPoints;
        this.format = format;
        this.timestamp = timestamp;
        this.text = text;
        this.rawBytes = rawBytes;
        if (undefined === numBits || null === numBits) {
            this.numBits = (rawBytes === null || rawBytes === undefined) ? 0 : 8 * rawBytes.length;
        }
        else {
            this.numBits = numBits;
        }
        this.resultPoints = resultPoints;
        this.format = format;
        this.resultMetadata = null;
        if (undefined === timestamp || null === timestamp) {
            this.timestamp = System_1.default.currentTimeMillis();
        }
        else {
            this.timestamp = timestamp;
        }
    }
    /**
     * @return raw text encoded by the barcode
     */
    Result.prototype.getText = function () {
        return this.text;
    };
    /**
     * @return raw bytes encoded by the barcode, if applicable, otherwise {@code null}
     */
    Result.prototype.getRawBytes = function () {
        return this.rawBytes;
    };
    /**
     * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
     * @since 3.3.0
     */
    Result.prototype.getNumBits = function () {
        return this.numBits;
    };
    /**
     * @return points related to the barcode in the image. These are typically points
     *         identifying finder patterns or the corners of the barcode. The exact meaning is
     *         specific to the type of barcode that was decoded.
     */
    Result.prototype.getResultPoints = function () {
        return this.resultPoints;
    };
    /**
     * @return {@link BarcodeFormat} representing the format of the barcode that was decoded
     */
    Result.prototype.getBarcodeFormat = function () {
        return this.format;
    };
    /**
     * @return {@link Map} mapping {@link ResultMetadataType} keys to values. May be
     *   {@code null}. This contains optional metadata about what was detected about the barcode,
     *   like orientation.
     */
    Result.prototype.getResultMetadata = function () {
        return this.resultMetadata;
    };
    Result.prototype.putMetadata = function (type, value) {
        if (this.resultMetadata === null) {
            this.resultMetadata = new Map();
        }
        this.resultMetadata.set(type, value);
    };
    Result.prototype.putAllMetadata = function (metadata) {
        if (metadata !== null) {
            if (this.resultMetadata === null) {
                this.resultMetadata = metadata;
            }
            else {
                this.resultMetadata = new Map(metadata);
            }
        }
    };
    Result.prototype.addResultPoints = function (newPoints) {
        var oldPoints = this.resultPoints;
        if (oldPoints === null) {
            this.resultPoints = newPoints;
        }
        else if (newPoints !== null && newPoints.length > 0) {
            var allPoints = new ResultPoint_1.default[oldPoints.length + newPoints.length];
            System_1.default.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
            System_1.default.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
            this.resultPoints = allPoints;
        }
    };
    Result.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    /*@Override*/
    Result.prototype.toString = function () {
        return this.text;
    };
    return Result;
}());
exports.default = Result;


/***/ }),

/***/ "./src/core/ResultMetadataType.ts":
/*!****************************************!*\
  !*** ./src/core/ResultMetadataType.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
/**
 * Represents some type of metadata about the result of the decoding that the decoder
 * wishes to communicate back to the caller.
 *
 * @author Sean Owen
 */
var ResultMetadataType;
(function (ResultMetadataType) {
    /**
     * Unspecified, application-specific metadata. Maps to an unspecified {@link Object}.
     */
    ResultMetadataType[ResultMetadataType["OTHER"] = 0] = "OTHER";
    /**
     * Denotes the likely approximate orientation of the barcode in the image. This value
     * is given as degrees rotated clockwise from the normal, upright orientation.
     * For example a 1D barcode which was found by reading top-to-bottom would be
     * said to have orientation "90". This key maps to an {@link Integer} whose
     * value is in the range [0,360).
     */
    ResultMetadataType[ResultMetadataType["ORIENTATION"] = 1] = "ORIENTATION";
    /**
     * <p>2D barcode formats typically encode text, but allow for a sort of 'byte mode'
     * which is sometimes used to encode binary data. While {@link Result} makes available
     * the complete raw bytes in the barcode for these formats, it does not offer the bytes
     * from the byte segments alone.</p>
     *
     * <p>This maps to a {@link java.util.List} of byte arrays corresponding to the
     * raw bytes in the byte segments in the barcode, in order.</p>
     */
    ResultMetadataType[ResultMetadataType["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
    /**
     * Error correction level used, if applicable. The value type depends on the
     * format, but is typically a String.
     */
    ResultMetadataType[ResultMetadataType["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
    /**
     * For some periodicals, indicates the issue number as an {@link Integer}.
     */
    ResultMetadataType[ResultMetadataType["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
    /**
     * For some products, indicates the suggested retail price in the barcode as a
     * formatted {@link String}.
     */
    ResultMetadataType[ResultMetadataType["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
    /**
     * For some products, the possible country of manufacture as a {@link String} denoting the
     * ISO country code. Some map to multiple possible countries, like "US/CA".
     */
    ResultMetadataType[ResultMetadataType["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
    /**
     * For some products, the extension text
     */
    ResultMetadataType[ResultMetadataType["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
    /**
     * PDF417-specific metadata
     */
    ResultMetadataType[ResultMetadataType["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
    /**
     * If the code format supports structured append and the current scanned code is part of one then the
     * sequence number is given with it.
     */
    ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
    /**
     * If the code format supports structured append and the current scanned code is part of one then the
     * parity is given with it.
     */
    ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
})(ResultMetadataType || (ResultMetadataType = {}));
exports.default = ResultMetadataType;


/***/ }),

/***/ "./src/core/ResultPoint.ts":
/*!*********************************!*\
  !*** ./src/core/ResultPoint.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing {*/
var MathUtils_1 = __webpack_require__(/*! ./common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
var Float_1 = __webpack_require__(/*! ./util/Float */ "./src/core/util/Float.ts");
/**
 * <p>Encapsulates a point of interest in an image containing a barcode. Typically, this
 * would be the location of a finder pattern or the corner of the barcode, for example.</p>
 *
 * @author Sean Owen
 */
var ResultPoint = /** @class */ (function () {
    function ResultPoint(x /*float*/, y /*float*/) {
        this.x = x;
        this.y = y;
    }
    ResultPoint.prototype.getX = function () {
        return this.x;
    };
    ResultPoint.prototype.getY = function () {
        return this.y;
    };
    /*@Override*/
    ResultPoint.prototype.equals = function (other) {
        if (other instanceof ResultPoint) {
            var otherPoint = other;
            return this.x === otherPoint.x && this.y === otherPoint.y;
        }
        return false;
    };
    /*@Override*/
    ResultPoint.prototype.hashCode = function () {
        return 31 * Float_1.default.floatToIntBits(this.x) + Float_1.default.floatToIntBits(this.y);
    };
    /*@Override*/
    ResultPoint.prototype.toString = function () {
        return '(' + this.x + ',' + this.y + ')';
    };
    /**
     * Orders an array of three ResultPoints in an order [A,B,C] such that AB is less than AC
     * and BC is less than AC, and the angle between BC and BA is less than 180 degrees.
     *
     * @param patterns array of three {@code ResultPoint} to order
     */
    ResultPoint.orderBestPatterns = function (patterns) {
        // Find distances between pattern centers
        var zeroOneDistance = this.distance(patterns[0], patterns[1]);
        var oneTwoDistance = this.distance(patterns[1], patterns[2]);
        var zeroTwoDistance = this.distance(patterns[0], patterns[2]);
        var pointA;
        var pointB;
        var pointC;
        // Assume one closest to other two is B; A and C will just be guesses at first
        if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
            pointB = patterns[0];
            pointA = patterns[1];
            pointC = patterns[2];
        }
        else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
            pointB = patterns[1];
            pointA = patterns[0];
            pointC = patterns[2];
        }
        else {
            pointB = patterns[2];
            pointA = patterns[0];
            pointC = patterns[1];
        }
        // Use cross product to figure out whether A and C are correct or flipped.
        // This asks whether BC x BA has a positive z component, which is the arrangement
        // we want for A, B, C. If it's negative, then we've got it flipped around and
        // should swap A and C.
        if (this.crossProductZ(pointA, pointB, pointC) < 0.0) {
            var temp = pointA;
            pointA = pointC;
            pointC = temp;
        }
        patterns[0] = pointA;
        patterns[1] = pointB;
        patterns[2] = pointC;
    };
    /**
     * @param pattern1 first pattern
     * @param pattern2 second pattern
     * @return distance between two points
     */
    ResultPoint.distance = function (pattern1, pattern2) {
        return MathUtils_1.default.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
    };
    /**
     * Returns the z component of the cross product between vectors BC and BA.
     */
    ResultPoint.crossProductZ = function (pointA, pointB, pointC) {
        var bX = pointB.x;
        var bY = pointB.y;
        return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
    };
    return ResultPoint;
}());
exports.default = ResultPoint;


/***/ }),

/***/ "./src/core/UnsupportedOperationException.ts":
/*!***************************************************!*\
  !*** ./src/core/UnsupportedOperationException.ts ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var UnsupportedOperationException = /** @class */ (function (_super) {
    __extends(UnsupportedOperationException, _super);
    function UnsupportedOperationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnsupportedOperationException;
}(Exception_1.default));
exports.default = UnsupportedOperationException;


/***/ }),

/***/ "./src/core/WriterException.ts":
/*!*************************************!*\
  !*** ./src/core/WriterException.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Exception_1 = __webpack_require__(/*! ./Exception */ "./src/core/Exception.ts");
/**
 * Custom Error class of type Exception.
 */
var WriterException = /** @class */ (function (_super) {
    __extends(WriterException, _super);
    function WriterException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WriterException;
}(Exception_1.default));
exports.default = WriterException;


/***/ }),

/***/ "./src/core/common/BitArray.ts":
/*!*************************************!*\
  !*** ./src/core/common/BitArray.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
/*import java.util.Arrays;*/
var System_1 = __webpack_require__(/*! ../util/System */ "./src/core/util/System.ts");
var Integer_1 = __webpack_require__(/*! ../util/Integer */ "./src/core/util/Integer.ts");
var Arrays_1 = __webpack_require__(/*! ../util/Arrays */ "./src/core/util/Arrays.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>A simple, fast array of bits, represented compactly by an array of ints internally.</p>
 *
 * @author Sean Owen
 */
var BitArray /*implements Cloneable*/ = /** @class */ (function () {
    // public constructor() {
    //   this.size = 0
    //   this.bits = new Int32Array(1)
    // }
    // public constructor(size?: number /*int*/) {
    //   if (undefined === size) {
    //     this.size = 0
    //   } else {
    //     this.size = size
    //   }
    //   this.bits = this.makeArray(size)
    // }
    // For testing only
    function BitArray(size /*int*/, bits) {
        if (undefined === size) {
            this.size = 0;
            this.bits = new Int32Array(1);
        }
        else {
            this.size = size;
            if (undefined === bits || null === bits) {
                this.bits = BitArray.makeArray(size);
            }
            else {
                this.bits = bits;
            }
        }
    }
    BitArray.prototype.getSize = function () {
        return this.size;
    };
    BitArray.prototype.getSizeInBytes = function () {
        return Math.floor((this.size + 7) / 8);
    };
    BitArray.prototype.ensureCapacity = function (size /*int*/) {
        if (size > this.bits.length * 32) {
            var newBits = BitArray.makeArray(size);
            System_1.default.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
            this.bits = newBits;
        }
    };
    /**
     * @param i bit to get
     * @return true iff bit i is set
     */
    BitArray.prototype.get = function (i /*int*/) {
        return (this.bits[Math.floor(i / 32)] & (1 << (i & 0x1F))) !== 0;
    };
    /**
     * Sets bit i.
     *
     * @param i bit to set
     */
    BitArray.prototype.set = function (i /*int*/) {
        this.bits[Math.floor(i / 32)] |= 1 << (i & 0x1F);
    };
    /**
     * Flips bit i.
     *
     * @param i bit to set
     */
    BitArray.prototype.flip = function (i /*int*/) {
        this.bits[Math.floor(i / 32)] ^= 1 << (i & 0x1F);
    };
    /**
     * @param from first bit to check
     * @return index of first bit that is set, starting from the given index, or size if none are set
     *  at or beyond this given index
     * @see #getNextUnset(int)
     */
    BitArray.prototype.getNextSet = function (from /*int*/) {
        var size = this.size;
        if (from >= size) {
            return size;
        }
        var bits = this.bits;
        var bitsOffset = Math.floor(from / 32);
        var currentBits = bits[bitsOffset];
        // mask off lesser bits first
        currentBits &= ~((1 << (from & 0x1F)) - 1);
        var length = bits.length;
        while (currentBits === 0) {
            if (++bitsOffset === length) {
                return size;
            }
            currentBits = bits[bitsOffset];
        }
        var result = (bitsOffset * 32) + Integer_1.default.numberOfTrailingZeros(currentBits);
        return result > size ? size : result;
    };
    /**
     * @param from index to start looking for unset bit
     * @return index of next unset bit, or {@code size} if none are unset until the end
     * @see #getNextSet(int)
     */
    BitArray.prototype.getNextUnset = function (from /*int*/) {
        var size = this.size;
        if (from >= size) {
            return size;
        }
        var bits = this.bits;
        var bitsOffset = Math.floor(from / 32);
        var currentBits = ~bits[bitsOffset];
        // mask off lesser bits first
        currentBits &= ~((1 << (from & 0x1F)) - 1);
        var length = bits.length;
        while (currentBits === 0) {
            if (++bitsOffset === length) {
                return size;
            }
            currentBits = ~bits[bitsOffset];
        }
        var result = (bitsOffset * 32) + Integer_1.default.numberOfTrailingZeros(currentBits);
        return result > size ? size : result;
    };
    /**
     * Sets a block of 32 bits, starting at bit i.
     *
     * @param i first bit to set
     * @param newBits the new value of the next 32 bits. Note again that the least-significant bit
     * corresponds to bit i, the next-least-significant to i+1, and so on.
     */
    BitArray.prototype.setBulk = function (i /*int*/, newBits /*int*/) {
        this.bits[Math.floor(i / 32)] = newBits;
    };
    /**
     * Sets a range of bits.
     *
     * @param start start of range, inclusive.
     * @param end end of range, exclusive
     */
    BitArray.prototype.setRange = function (start /*int*/, end /*int*/) {
        if (end < start || start < 0 || end > this.size) {
            throw new IllegalArgumentException_1.default();
        }
        if (end === start) {
            return;
        }
        end--; // will be easier to treat this as the last actually set bit -- inclusive
        var firstInt = Math.floor(start / 32);
        var lastInt = Math.floor(end / 32);
        var bits = this.bits;
        for (var i = firstInt; i <= lastInt; i++) {
            var firstBit = i > firstInt ? 0 : start & 0x1F;
            var lastBit = i < lastInt ? 31 : end & 0x1F;
            // Ones from firstBit to lastBit, inclusive
            var mask = (2 << lastBit) - (1 << firstBit);
            bits[i] |= mask;
        }
    };
    /**
     * Clears all bits (sets to false).
     */
    BitArray.prototype.clear = function () {
        var max = this.bits.length;
        var bits = this.bits;
        for (var i = 0; i < max; i++) {
            bits[i] = 0;
        }
    };
    /**
     * Efficient method to check if a range of bits is set, or not set.
     *
     * @param start start of range, inclusive.
     * @param end end of range, exclusive
     * @param value if true, checks that bits in range are set, otherwise checks that they are not set
     * @return true iff all bits are set or not set in range, according to value argument
     * @throws IllegalArgumentException if end is less than start or the range is not contained in the array
     */
    BitArray.prototype.isRange = function (start /*int*/, end /*int*/, value) {
        if (end < start || start < 0 || end > this.size) {
            throw new IllegalArgumentException_1.default();
        }
        if (end === start) {
            return true; // empty range matches
        }
        end--; // will be easier to treat this as the last actually set bit -- inclusive
        var firstInt = Math.floor(start / 32);
        var lastInt = Math.floor(end / 32);
        var bits = this.bits;
        for (var i = firstInt; i <= lastInt; i++) {
            var firstBit = i > firstInt ? 0 : start & 0x1F;
            var lastBit = i < lastInt ? 31 : end & 0x1F;
            // Ones from firstBit to lastBit, inclusive
            var mask = (2 << lastBit) - (1 << firstBit) & 0xFFFFFFFF;
            // TYPESCRIPTPORT: & 0xFFFFFFFF added to discard anything after 32 bits, as ES has 53 bits
            // Return false if we're looking for 1s and the masked bits[i] isn't all 1s (is: that,
            // equals the mask, or we're looking for 0s and the masked portion is not all 0s
            if ((bits[i] & mask) !== (value ? mask : 0)) {
                return false;
            }
        }
        return true;
    };
    BitArray.prototype.appendBit = function (bit) {
        this.ensureCapacity(this.size + 1);
        if (bit) {
            this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 0x1F);
        }
        this.size++;
    };
    /**
     * Appends the least-significant bits, from value, in order from most-significant to
     * least-significant. For example, appending 6 bits from 0x000001E will append the bits
     * 0, 1, 1, 1, 1, 0 in that order.
     *
     * @param value {@code int} containing bits to append
     * @param numBits bits from value to append
     */
    BitArray.prototype.appendBits = function (value /*int*/, numBits /*int*/) {
        if (numBits < 0 || numBits > 32) {
            throw new IllegalArgumentException_1.default('Num bits must be between 0 and 32');
        }
        this.ensureCapacity(this.size + numBits);
        var appendBit = this.appendBit;
        for (var numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
            this.appendBit(((value >> (numBitsLeft - 1)) & 0x01) === 1);
        }
    };
    BitArray.prototype.appendBitArray = function (other) {
        var otherSize = other.size;
        this.ensureCapacity(this.size + otherSize);
        var appendBit = this.appendBit;
        for (var i = 0; i < otherSize; i++) {
            this.appendBit(other.get(i));
        }
    };
    BitArray.prototype.xor = function (other) {
        if (this.size !== other.size) {
            throw new IllegalArgumentException_1.default('Sizes don\'t match');
        }
        var bits = this.bits;
        for (var i = 0, length_1 = bits.length; i < length_1; i++) {
            // The last int could be incomplete (i.e. not have 32 bits in
            // it) but there is no problem since 0 XOR 0 == 0.
            bits[i] ^= other.bits[i];
        }
    };
    /**
     *
     * @param bitOffset first bit to start writing
     * @param array array to write into. Bytes are written most-significant byte first. This is the opposite
     *  of the internal representation, which is exposed by {@link #getBitArray()}
     * @param offset position in array to start writing
     * @param numBytes how many bytes to write
     */
    BitArray.prototype.toBytes = function (bitOffset /*int*/, array, offset /*int*/, numBytes /*int*/) {
        for (var i = 0; i < numBytes; i++) {
            var theByte = 0;
            for (var j = 0; j < 8; j++) {
                if (this.get(bitOffset)) {
                    theByte |= 1 << (7 - j);
                }
                bitOffset++;
            }
            array[offset + i] = /*(byte)*/ theByte;
        }
    };
    /**
     * @return underlying array of ints. The first element holds the first 32 bits, and the least
     *         significant bit is bit 0.
     */
    BitArray.prototype.getBitArray = function () {
        return this.bits;
    };
    /**
     * Reverses all bits in the array.
     */
    BitArray.prototype.reverse = function () {
        var newBits = new Int32Array(this.bits.length);
        // reverse all int's first
        var len = Math.floor((this.size - 1) / 32);
        var oldBitsLen = len + 1;
        var bits = this.bits;
        for (var i = 0; i < oldBitsLen; i++) {
            var x = bits[i];
            x = ((x >> 1) & 0x55555555) | ((x & 0x55555555) << 1);
            x = ((x >> 2) & 0x33333333) | ((x & 0x33333333) << 2);
            x = ((x >> 4) & 0x0f0f0f0f) | ((x & 0x0f0f0f0f) << 4);
            x = ((x >> 8) & 0x00ff00ff) | ((x & 0x00ff00ff) << 8);
            x = ((x >> 16) & 0x0000ffff) | ((x & 0x0000ffff) << 16);
            newBits[len - i] = /*(int)*/ x;
        }
        // now correct the int's if the bit size isn't a multiple of 32
        if (this.size !== oldBitsLen * 32) {
            var leftOffset = oldBitsLen * 32 - this.size;
            var currentInt = newBits[0] >>> leftOffset;
            for (var i = 1; i < oldBitsLen; i++) {
                var nextInt = newBits[i];
                currentInt |= nextInt << (32 - leftOffset);
                newBits[i - 1] = currentInt;
                currentInt = nextInt >>> leftOffset;
            }
            newBits[oldBitsLen - 1] = currentInt;
        }
        this.bits = newBits;
    };
    BitArray.makeArray = function (size /*int*/) {
        return new Int32Array(Math.floor((size + 31) / 32));
    };
    /*@Override*/
    BitArray.prototype.equals = function (o) {
        if (!(o instanceof BitArray)) {
            return false;
        }
        var other = o;
        return this.size === other.size && Arrays_1.default.equals(this.bits, other.bits);
    };
    /*@Override*/
    BitArray.prototype.hashCode = function () {
        return 31 * this.size + Arrays_1.default.hashCode(this.bits);
    };
    /*@Override*/
    BitArray.prototype.toString = function () {
        var result = '';
        for (var i = 0, size = this.size; i < size; i++) {
            if ((i & 0x07) === 0) {
                result += ' ';
            }
            result += this.get(i) ? 'X' : '.';
        }
        return result;
    };
    /*@Override*/
    BitArray.prototype.clone = function () {
        return new BitArray(this.size, this.bits.slice());
    };
    return BitArray;
}());
exports.default = BitArray;


/***/ }),

/***/ "./src/core/common/BitMatrix.ts":
/*!**************************************!*\
  !*** ./src/core/common/BitMatrix.ts ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
/*import java.util.Arrays;*/
var BitArray_1 = __webpack_require__(/*! ./BitArray */ "./src/core/common/BitArray.ts");
var System_1 = __webpack_require__(/*! ../util/System */ "./src/core/util/System.ts");
var Arrays_1 = __webpack_require__(/*! ../util/Arrays */ "./src/core/util/Arrays.ts");
var StringBuilder_1 = __webpack_require__(/*! ../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>Represents a 2D matrix of bits. In function arguments below, and throughout the common
 * module, x is the column position, and y is the row position. The ordering is always x, y.
 * The origin is at the top-left.</p>
 *
 * <p>Internally the bits are represented in a 1-D array of 32-bit ints. However, each row begins
 * with a new int. This is done intentionally so that we can copy out a row into a BitArray very
 * efficiently.</p>
 *
 * <p>The ordering of bits is row-major. Within each int, the least significant bits are used first,
 * meaning they represent lower x values. This is compatible with BitArray's implementation.</p>
 *
 * @author Sean Owen
 * @author dswitkin@google.com (Daniel Switkin)
 */
var BitMatrix /*implements Cloneable*/ = /** @class */ (function () {
    /**
     * Creates an empty square {@link BitMatrix}.
     *
     * @param dimension height and width
     */
    // public constructor(dimension: number /*int*/) {
    //   this(dimension, dimension)
    // }
    /**
     * Creates an empty {@link BitMatrix}.
     *
     * @param width bit matrix width
     * @param height bit matrix height
     */
    // public constructor(width: number /*int*/, height: number /*int*/) {
    //   if (width < 1 || height < 1) {
    //     throw new IllegalArgumentException("Both dimensions must be greater than 0")
    //   }
    //   this.width = width
    //   this.height = height
    //   this.rowSize = (width + 31) / 32
    //   bits = new int[rowSize * height];
    // }
    function BitMatrix(width /*int*/, height /*int*/, rowSize /*int*/, bits) {
        this.width = width;
        this.height = height;
        this.rowSize = rowSize;
        this.bits = bits;
        if (undefined === height || null === height) {
            height = width;
        }
        this.height = height;
        if (width < 1 || height < 1) {
            throw new IllegalArgumentException_1.default('Both dimensions must be greater than 0');
        }
        if (undefined === rowSize || null === rowSize) {
            rowSize = Math.floor((width + 31) / 32);
        }
        this.rowSize = rowSize;
        if (undefined === bits || null === bits) {
            this.bits = new Int32Array(this.rowSize * this.height);
        }
    }
    /**
     * Interprets a 2D array of booleans as a {@link BitMatrix}, where "true" means an "on" bit.
     *
     * @param image bits of the image, as a row-major 2D array. Elements are arrays representing rows
     * @return {@link BitMatrix} representation of image
     */
    BitMatrix.parseFromBooleanArray = function (image) {
        var height = image.length;
        var width = image[0].length;
        var bits = new BitMatrix(width, height);
        for (var i = 0; i < height; i++) {
            var imageI = image[i];
            for (var j = 0; j < width; j++) {
                if (imageI[j]) {
                    bits.set(j, i);
                }
            }
        }
        return bits;
    };
    BitMatrix.parseFromString = function (stringRepresentation, setString, unsetString) {
        if (stringRepresentation === null) {
            throw new IllegalArgumentException_1.default('stringRepresentation cannot be null');
        }
        var bits = new Array(stringRepresentation.length);
        var bitsPos = 0;
        var rowStartPos = 0;
        var rowLength = -1;
        var nRows = 0;
        var pos = 0;
        while (pos < stringRepresentation.length) {
            if (stringRepresentation.charAt(pos) === '\n' ||
                stringRepresentation.charAt(pos) === '\r') {
                if (bitsPos > rowStartPos) {
                    if (rowLength === -1) {
                        rowLength = bitsPos - rowStartPos;
                    }
                    else if (bitsPos - rowStartPos !== rowLength) {
                        throw new IllegalArgumentException_1.default('row lengths do not match');
                    }
                    rowStartPos = bitsPos;
                    nRows++;
                }
                pos++;
            }
            else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
                pos += setString.length;
                bits[bitsPos] = true;
                bitsPos++;
            }
            else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
                pos += unsetString.length;
                bits[bitsPos] = false;
                bitsPos++;
            }
            else {
                throw new IllegalArgumentException_1.default('illegal character encountered: ' + stringRepresentation.substring(pos));
            }
        }
        // no EOL at end?
        if (bitsPos > rowStartPos) {
            if (rowLength === -1) {
                rowLength = bitsPos - rowStartPos;
            }
            else if (bitsPos - rowStartPos !== rowLength) {
                throw new IllegalArgumentException_1.default('row lengths do not match');
            }
            nRows++;
        }
        var matrix = new BitMatrix(rowLength, nRows);
        for (var i = 0; i < bitsPos; i++) {
            if (bits[i]) {
                matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
            }
        }
        return matrix;
    };
    /**
     * <p>Gets the requested bit, where true means black.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     * @return value of given bit in matrix
     */
    BitMatrix.prototype.get = function (x /*int*/, y /*int*/) {
        var offset = y * this.rowSize + Math.floor(x / 32);
        return ((this.bits[offset] >>> (x & 0x1f)) & 1) !== 0;
    };
    /**
     * <p>Sets the given bit to true.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     */
    BitMatrix.prototype.set = function (x /*int*/, y /*int*/) {
        var offset = y * this.rowSize + Math.floor(x / 32);
        this.bits[offset] |= (1 << (x & 0x1f)) & 0xFFFFFFFF;
    };
    BitMatrix.prototype.unset = function (x /*int*/, y /*int*/) {
        var offset = y * this.rowSize + Math.floor(x / 32);
        this.bits[offset] &= ~((1 << (x & 0x1f)) & 0xFFFFFFFF);
    };
    /**
     * <p>Flips the given bit.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     */
    BitMatrix.prototype.flip = function (x /*int*/, y /*int*/) {
        var offset = y * this.rowSize + Math.floor(x / 32);
        this.bits[offset] ^= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
    };
    /**
     * Exclusive-or (XOR): Flip the bit in this {@code BitMatrix} if the corresponding
     * mask bit is set.
     *
     * @param mask XOR mask
     */
    BitMatrix.prototype.xor = function (mask) {
        if (this.width !== mask.getWidth() || this.height !== mask.getHeight()
            || this.rowSize !== mask.getRowSize()) {
            throw new IllegalArgumentException_1.default('input matrix dimensions do not match');
        }
        var rowArray = new BitArray_1.default(Math.floor(this.width / 32) + 1);
        var rowSize = this.rowSize;
        var bits = this.bits;
        for (var y = 0, height = this.height; y < height; y++) {
            var offset = y * rowSize;
            var row = mask.getRow(y, rowArray).getBitArray();
            for (var x = 0; x < rowSize; x++) {
                bits[offset + x] ^= row[x];
            }
        }
    };
    /**
     * Clears all bits (sets to false).
     */
    BitMatrix.prototype.clear = function () {
        var bits = this.bits;
        var max = bits.length;
        for (var i = 0; i < max; i++) {
            bits[i] = 0;
        }
    };
    /**
     * <p>Sets a square region of the bit matrix to true.</p>
     *
     * @param left The horizontal position to begin at (inclusive)
     * @param top The vertical position to begin at (inclusive)
     * @param width The width of the region
     * @param height The height of the region
     */
    BitMatrix.prototype.setRegion = function (left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
        if (top < 0 || left < 0) {
            throw new IllegalArgumentException_1.default('Left and top must be nonnegative');
        }
        if (height < 1 || width < 1) {
            throw new IllegalArgumentException_1.default('Height and width must be at least 1');
        }
        var right = left + width;
        var bottom = top + height;
        if (bottom > this.height || right > this.width) {
            throw new IllegalArgumentException_1.default('The region must fit inside the matrix');
        }
        var rowSize = this.rowSize;
        var bits = this.bits;
        for (var y = top; y < bottom; y++) {
            var offset = y * rowSize;
            for (var x = left; x < right; x++) {
                bits[offset + Math.floor(x / 32)] |= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
            }
        }
    };
    /**
     * A fast method to retrieve one row of data from the matrix as a BitArray.
     *
     * @param y The row to retrieve
     * @param row An optional caller-allocated BitArray, will be allocated if null or too small
     * @return The resulting BitArray - this reference should always be used even when passing
     *         your own row
     */
    BitMatrix.prototype.getRow = function (y /*int*/, row) {
        if (row === null || row === undefined || row.getSize() < this.width) {
            row = new BitArray_1.default(this.width);
        }
        else {
            row.clear();
        }
        var rowSize = this.rowSize;
        var bits = this.bits;
        var offset = y * rowSize;
        for (var x = 0; x < rowSize; x++) {
            row.setBulk(x * 32, bits[offset + x]);
        }
        return row;
    };
    /**
     * @param y row to set
     * @param row {@link BitArray} to copy from
     */
    BitMatrix.prototype.setRow = function (y /*int*/, row) {
        System_1.default.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
    };
    /**
     * Modifies this {@code BitMatrix} to represent the same but rotated 180 degrees
     */
    BitMatrix.prototype.rotate180 = function () {
        var width = this.getWidth();
        var height = this.getHeight();
        var topRow = new BitArray_1.default(width);
        var bottomRow = new BitArray_1.default(width);
        for (var i = 0, length_1 = Math.floor((height + 1) / 2); i < length_1; i++) {
            topRow = this.getRow(i, topRow);
            bottomRow = this.getRow(height - 1 - i, bottomRow);
            topRow.reverse();
            bottomRow.reverse();
            this.setRow(i, bottomRow);
            this.setRow(height - 1 - i, topRow);
        }
    };
    /**
     * This is useful in detecting the enclosing rectangle of a 'pure' barcode.
     *
     * @return {@code left,top,width,height} enclosing rectangle of all 1 bits, or null if it is all white
     */
    BitMatrix.prototype.getEnclosingRectangle = function () {
        var width = this.width;
        var height = this.height;
        var rowSize = this.rowSize;
        var bits = this.bits;
        var left = width;
        var top = height;
        var right = -1;
        var bottom = -1;
        for (var y = 0; y < height; y++) {
            for (var x32 = 0; x32 < rowSize; x32++) {
                var theBits = bits[y * rowSize + x32];
                if (theBits !== 0) {
                    if (y < top) {
                        top = y;
                    }
                    if (y > bottom) {
                        bottom = y;
                    }
                    if (x32 * 32 < left) {
                        var bit = 0;
                        while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
                            bit++;
                        }
                        if ((x32 * 32 + bit) < left) {
                            left = x32 * 32 + bit;
                        }
                    }
                    if (x32 * 32 + 31 > right) {
                        var bit = 31;
                        while ((theBits >>> bit) === 0) {
                            bit--;
                        }
                        if ((x32 * 32 + bit) > right) {
                            right = x32 * 32 + bit;
                        }
                    }
                }
            }
        }
        if (right < left || bottom < top) {
            return null;
        }
        return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
    };
    /**
     * This is useful in detecting a corner of a 'pure' barcode.
     *
     * @return {@code x,y} coordinate of top-left-most 1 bit, or null if it is all white
     */
    BitMatrix.prototype.getTopLeftOnBit = function () {
        var rowSize = this.rowSize;
        var bits = this.bits;
        var bitsOffset = 0;
        while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
            bitsOffset++;
        }
        if (bitsOffset === bits.length) {
            return null;
        }
        var y = bitsOffset / rowSize;
        var x = (bitsOffset % rowSize) * 32;
        var theBits = bits[bitsOffset];
        var bit = 0;
        while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
            bit++;
        }
        x += bit;
        return Int32Array.from([x, y]);
    };
    BitMatrix.prototype.getBottomRightOnBit = function () {
        var rowSize = this.rowSize;
        var bits = this.bits;
        var bitsOffset = bits.length - 1;
        while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
            bitsOffset--;
        }
        if (bitsOffset < 0) {
            return null;
        }
        var y = Math.floor(bitsOffset / rowSize);
        var x = Math.floor(bitsOffset % rowSize) * 32;
        var theBits = bits[bitsOffset];
        var bit = 31;
        while ((theBits >>> bit) === 0) {
            bit--;
        }
        x += bit;
        return Int32Array.from([x, y]);
    };
    /**
     * @return The width of the matrix
     */
    BitMatrix.prototype.getWidth = function () {
        return this.width;
    };
    /**
     * @return The height of the matrix
     */
    BitMatrix.prototype.getHeight = function () {
        return this.height;
    };
    /**
     * @return The row size of the matrix
     */
    BitMatrix.prototype.getRowSize = function () {
        return this.rowSize;
    };
    /*@Override*/
    BitMatrix.prototype.equals = function (o) {
        if (!(o instanceof BitMatrix)) {
            return false;
        }
        var other = o;
        return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize &&
            Arrays_1.default.equals(this.bits, other.bits);
    };
    /*@Override*/
    BitMatrix.prototype.hashCode = function () {
        var hash = this.width;
        hash = 31 * hash + this.width;
        hash = 31 * hash + this.height;
        hash = 31 * hash + this.rowSize;
        hash = 31 * hash + Arrays_1.default.hashCode(this.bits);
        return hash;
    };
    /**
     * @return string representation using "X" for set and " " for unset bits
     */
    /*@Override*/
    // public toString(): string {
    //   return toString(": "X, "  ")
    // }
    /**
     * @param setString representation of a set bit
     * @param unsetString representation of an unset bit
     * @return string representation of entire matrix utilizing given strings
     */
    // public toString(setString: string = "X ", unsetString: string = "  "): string {
    //   return this.buildToString(setString, unsetString, "\n")
    // }
    /**
     * @param setString representation of a set bit
     * @param unsetString representation of an unset bit
     * @param lineSeparator newline character in string representation
     * @return string representation of entire matrix utilizing given strings and line separator
     * @deprecated call {@link #toString(String,String)} only, which uses \n line separator always
     */
    // @Deprecated
    BitMatrix.prototype.toString = function (setString, unsetString, lineSeparator) {
        if (setString === void 0) { setString = 'x'; }
        if (unsetString === void 0) { unsetString = ' '; }
        if (lineSeparator === void 0) { lineSeparator = '\n'; }
        return this.buildToString(setString, unsetString, lineSeparator);
    };
    BitMatrix.prototype.buildToString = function (setString, unsetString, lineSeparator) {
        var result = new StringBuilder_1.default();
        result.append(lineSeparator);
        for (var y = 0, height = this.height; y < height; y++) {
            for (var x = 0, width = this.width; x < width; x++) {
                result.append(this.get(x, y) ? setString : unsetString);
            }
            result.append(lineSeparator);
        }
        return result.toString();
    };
    /*@Override*/
    BitMatrix.prototype.clone = function () {
        return new BitMatrix(this.width, this.height, this.rowSize, this.bits.slice());
    };
    return BitMatrix;
}());
exports.default = BitMatrix;


/***/ }),

/***/ "./src/core/common/BitSource.ts":
/*!**************************************!*\
  !*** ./src/core/common/BitSource.ts ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
var IllegalArgumentException_1 = __webpack_require__(/*! ../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>This provides an easy abstraction to read bits at a time from a sequence of bytes, where the
 * number of bits read is not often a multiple of 8.</p>
 *
 * <p>This class is thread-safe but not reentrant -- unless the caller modifies the bytes array
 * it passed in, in which case all bets are off.</p>
 *
 * @author Sean Owen
 */
var BitSource = /** @class */ (function () {
    /**
     * @param bytes bytes from which this will read bits. Bits will be read from the first byte first.
     * Bits are read within a byte from most-significant to least-significant bit.
     */
    function BitSource(bytes) {
        this.bytes = bytes;
        this.byteOffset = 0;
        this.bitOffset = 0;
    }
    /**
     * @return index of next bit in current byte which would be read by the next call to {@link #readBits(int)}.
     */
    BitSource.prototype.getBitOffset = function () {
        return this.bitOffset;
    };
    /**
     * @return index of next byte in input byte array which would be read by the next call to {@link #readBits(int)}.
     */
    BitSource.prototype.getByteOffset = function () {
        return this.byteOffset;
    };
    /**
     * @param numBits number of bits to read
     * @return int representing the bits read. The bits will appear as the least-significant
     *         bits of the int
     * @throws IllegalArgumentException if numBits isn't in [1,32] or more than is available
     */
    BitSource.prototype.readBits = function (numBits /*int*/) {
        if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new IllegalArgumentException_1.default('' + numBits);
        }
        var result = 0;
        var bitOffset = this.bitOffset;
        var byteOffset = this.byteOffset;
        var bytes = this.bytes;
        // First, read remainder from current byte
        if (bitOffset > 0) {
            var bitsLeft = 8 - bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
            result = (bytes[byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            bitOffset += toRead;
            if (bitOffset === 8) {
                bitOffset = 0;
                byteOffset++;
            }
        }
        // Next read whole bytes
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (bytes[byteOffset] & 0xFF);
                byteOffset++;
                numBits -= 8;
            }
            // Finally read a partial byte
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((bytes[byteOffset] & mask) >> bitsToNotRead);
                bitOffset += numBits;
            }
        }
        this.bitOffset = bitOffset;
        this.byteOffset = byteOffset;
        return result;
    };
    /**
     * @return number of bits that can be read successfully
     */
    BitSource.prototype.available = function () {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    };
    return BitSource;
}());
exports.default = BitSource;


/***/ }),

/***/ "./src/core/common/CharacterSetECI.ts":
/*!********************************************!*\
  !*** ./src/core/common/CharacterSetECI.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
var FormatException_1 = __webpack_require__(/*! ../FormatException */ "./src/core/FormatException.ts");
/*import java.util.HashMap;*/
/*import java.util.Map;*/
var CharacterSetValueIdentifiers;
(function (CharacterSetValueIdentifiers) {
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp437"] = 0] = "Cp437";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_1"] = 1] = "ISO8859_1";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_2"] = 2] = "ISO8859_2";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_3"] = 3] = "ISO8859_3";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_4"] = 4] = "ISO8859_4";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_5"] = 5] = "ISO8859_5";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_6"] = 6] = "ISO8859_6";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_7"] = 7] = "ISO8859_7";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_8"] = 8] = "ISO8859_8";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_9"] = 9] = "ISO8859_9";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_10"] = 10] = "ISO8859_10";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_11"] = 11] = "ISO8859_11";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_13"] = 12] = "ISO8859_13";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_14"] = 13] = "ISO8859_14";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_15"] = 14] = "ISO8859_15";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_16"] = 15] = "ISO8859_16";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["SJIS"] = 16] = "SJIS";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1250"] = 17] = "Cp1250";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1251"] = 18] = "Cp1251";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1252"] = 19] = "Cp1252";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1256"] = 20] = "Cp1256";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UTF8"] = 22] = "UTF8";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ASCII"] = 23] = "ASCII";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Big5"] = 24] = "Big5";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["GB18030"] = 25] = "GB18030";
    CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["EUC_KR"] = 26] = "EUC_KR";
})(CharacterSetValueIdentifiers = exports.CharacterSetValueIdentifiers || (exports.CharacterSetValueIdentifiers = {}));
/**
 * Encapsulates a Character Set ECI, according to "Extended Channel Interpretations" 5.3.1.1
 * of ISO 18004.
 *
 * @author Sean Owen
 */
var CharacterSetECI = /** @class */ (function () {
    function CharacterSetECI(valueIdentifier, valuesParam, name) {
        var otherEncodingNames = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherEncodingNames[_i - 3] = arguments[_i];
        }
        this.valueIdentifier = valueIdentifier;
        this.name = name;
        if (typeof valuesParam === 'number') {
            this.values = Int32Array.from([valuesParam]);
        }
        else {
            this.values = valuesParam;
        }
        this.otherEncodingNames = otherEncodingNames;
        CharacterSetECI.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
        CharacterSetECI.NAME_TO_ECI.set(name, this);
        var values = this.values;
        for (var i = 0, length_1 = values.length; i !== length_1; i++) {
            var v = values[i];
            CharacterSetECI.VALUES_TO_ECI.set(v, this);
        }
        for (var _a = 0, otherEncodingNames_1 = otherEncodingNames; _a < otherEncodingNames_1.length; _a++) {
            var otherName = otherEncodingNames_1[_a];
            CharacterSetECI.NAME_TO_ECI.set(otherName, this);
        }
    }
    // CharacterSetECI(value: number /*int*/) {
    //   this(new Int32Array {value})
    // }
    // CharacterSetECI(value: number /*int*/, String... otherEncodingNames) {
    //   this.values = new Int32Array {value}
    //   this.otherEncodingNames = otherEncodingNames
    // }
    // CharacterSetECI(values: Int32Array, String... otherEncodingNames) {
    //   this.values = values
    //   this.otherEncodingNames = otherEncodingNames
    // }
    CharacterSetECI.prototype.getValueIdentifier = function () {
        return this.valueIdentifier;
    };
    CharacterSetECI.prototype.getName = function () {
        return this.name;
    };
    CharacterSetECI.prototype.getValue = function () {
        return this.values[0];
    };
    /**
     * @param value character set ECI value
     * @return {@code CharacterSetECI} representing ECI of given value, or null if it is legal but
     *   unsupported
     * @throws FormatException if ECI value is invalid
     */
    CharacterSetECI.getCharacterSetECIByValue = function (value /*int*/) {
        if (value < 0 || value >= 900) {
            throw new FormatException_1.default('incorect value');
        }
        var characterSet = CharacterSetECI.VALUES_TO_ECI.get(value);
        if (undefined === characterSet) {
            throw new FormatException_1.default('incorect value');
        }
        return characterSet;
    };
    /**
     * @param name character set ECI encoding name
     * @return CharacterSetECI representing ECI for character encoding, or null if it is legal
     *   but unsupported
     */
    CharacterSetECI.getCharacterSetECIByName = function (name) {
        var characterSet = CharacterSetECI.NAME_TO_ECI.get(name);
        if (undefined === characterSet) {
            throw new FormatException_1.default('incorect value');
        }
        return characterSet;
    };
    CharacterSetECI.prototype.equals = function (o) {
        if (!(o instanceof CharacterSetECI)) {
            return false;
        }
        var other = o;
        return this.getName() === other.getName();
    };
    CharacterSetECI.VALUE_IDENTIFIER_TO_ECI = new Map();
    CharacterSetECI.VALUES_TO_ECI = new Map();
    CharacterSetECI.NAME_TO_ECI = new Map();
    // Enum name is a Java encoding valid for java.lang and java.io
    // TYPESCRIPTPORT: changed the main label for ISO as the TextEncoder did not recognized them in the form from java
    // (eg ISO8859_1 must be ISO88591 or ISO8859-1 or ISO-8859-1)
    // later on: well, except 16 wich does not work with ISO885916 so used ISO-8859-1 form for default
    CharacterSetECI.Cp437 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), 'Cp437');
    CharacterSetECI.ISO8859_1 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), 'ISO-8859-1', 'ISO88591', 'ISO8859_1');
    CharacterSetECI.ISO8859_2 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_2, 4, 'ISO-8859-2', 'ISO88592', 'ISO8859_2');
    CharacterSetECI.ISO8859_3 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_3, 5, 'ISO-8859-3', 'ISO88593', 'ISO8859_3');
    CharacterSetECI.ISO8859_4 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_4, 6, 'ISO-8859-4', 'ISO88594', 'ISO8859_4');
    CharacterSetECI.ISO8859_5 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_5, 7, 'ISO-8859-5', 'ISO88595', 'ISO8859_5');
    CharacterSetECI.ISO8859_6 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_6, 8, 'ISO-8859-6', 'ISO88596', 'ISO8859_6');
    CharacterSetECI.ISO8859_7 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_7, 9, 'ISO-8859-7', 'ISO88597', 'ISO8859_7');
    CharacterSetECI.ISO8859_8 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_8, 10, 'ISO-8859-8', 'ISO88598', 'ISO8859_8');
    CharacterSetECI.ISO8859_9 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_9, 11, 'ISO-8859-9', 'ISO88599', 'ISO8859_9');
    CharacterSetECI.ISO8859_10 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_10, 12, 'ISO-8859-10', 'ISO885910', 'ISO8859_10');
    CharacterSetECI.ISO8859_11 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_11, 13, 'ISO-8859-11', 'ISO885911', 'ISO8859_11');
    CharacterSetECI.ISO8859_13 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_13, 15, 'ISO-8859-13', 'ISO885913', 'ISO8859_13');
    CharacterSetECI.ISO8859_14 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_14, 16, 'ISO-8859-14', 'ISO885914', 'ISO8859_14');
    CharacterSetECI.ISO8859_15 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_15, 17, 'ISO-8859-15', 'ISO885915', 'ISO8859_15');
    CharacterSetECI.ISO8859_16 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_16, 18, 'ISO-8859-16', 'ISO885916', 'ISO8859_16');
    CharacterSetECI.SJIS = new CharacterSetECI(CharacterSetValueIdentifiers.SJIS, 20, 'SJIS', 'Shift_JIS');
    CharacterSetECI.Cp1250 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1250, 21, 'Cp1250', 'windows-1250');
    CharacterSetECI.Cp1251 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1251, 22, 'Cp1251', 'windows-1251');
    CharacterSetECI.Cp1252 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1252, 23, 'Cp1252', 'windows-1252');
    CharacterSetECI.Cp1256 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1256, 24, 'Cp1256', 'windows-1256');
    CharacterSetECI.UnicodeBigUnmarked = new CharacterSetECI(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, 'UnicodeBigUnmarked', 'UTF-16BE', 'UnicodeBig');
    CharacterSetECI.UTF8 = new CharacterSetECI(CharacterSetValueIdentifiers.UTF8, 26, 'UTF8', 'UTF-8');
    CharacterSetECI.ASCII = new CharacterSetECI(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), 'ASCII', 'US-ASCII');
    CharacterSetECI.Big5 = new CharacterSetECI(CharacterSetValueIdentifiers.Big5, 28, 'Big5');
    CharacterSetECI.GB18030 = new CharacterSetECI(CharacterSetValueIdentifiers.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK');
    CharacterSetECI.EUC_KR = new CharacterSetECI(CharacterSetValueIdentifiers.EUC_KR, 30, 'EUC_KR', 'EUC-KR');
    return CharacterSetECI;
}());
exports.default = CharacterSetECI;


/***/ }),

/***/ "./src/core/common/DecoderResult.ts":
/*!******************************************!*\
  !*** ./src/core/common/DecoderResult.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
/*import java.util.List;*/
/**
 * <p>Encapsulates the result of decoding a matrix of bits. This typically
 * applies to 2D barcode formats. For now it contains the raw bytes obtained,
 * as well as a String interpretation of those bytes, if applicable.</p>
 *
 * @author Sean Owen
 */
var DecoderResult = /** @class */ (function () {
    // public constructor(rawBytes: Uint8Array,
    //                      text: string,
    //                      List<Uint8Array> byteSegments,
    //                      String ecLevel) {
    //   this(rawBytes, text, byteSegments, ecLevel, -1, -1)
    // }
    function DecoderResult(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber, structuredAppendParity) {
        if (structuredAppendSequenceNumber === void 0) { structuredAppendSequenceNumber = -1; }
        if (structuredAppendParity === void 0) { structuredAppendParity = -1; }
        this.rawBytes = rawBytes;
        this.text = text;
        this.byteSegments = byteSegments;
        this.ecLevel = ecLevel;
        this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
        this.structuredAppendParity = structuredAppendParity;
        this.numBits = (rawBytes === undefined || rawBytes === null) ? 0 : 8 * rawBytes.length;
    }
    /**
     * @return raw bytes representing the result, or {@code null} if not applicable
     */
    DecoderResult.prototype.getRawBytes = function () {
        return this.rawBytes;
    };
    /**
     * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
     * @since 3.3.0
     */
    DecoderResult.prototype.getNumBits = function () {
        return this.numBits;
    };
    /**
     * @param numBits overrides the number of bits that are valid in {@link #getRawBytes()}
     * @since 3.3.0
     */
    DecoderResult.prototype.setNumBits = function (numBits /*int*/) {
        this.numBits = numBits;
    };
    /**
     * @return text representation of the result
     */
    DecoderResult.prototype.getText = function () {
        return this.text;
    };
    /**
     * @return list of byte segments in the result, or {@code null} if not applicable
     */
    DecoderResult.prototype.getByteSegments = function () {
        return this.byteSegments;
    };
    /**
     * @return name of error correction level used, or {@code null} if not applicable
     */
    DecoderResult.prototype.getECLevel = function () {
        return this.ecLevel;
    };
    /**
     * @return number of errors corrected, or {@code null} if not applicable
     */
    DecoderResult.prototype.getErrorsCorrected = function () {
        return this.errorsCorrected;
    };
    DecoderResult.prototype.setErrorsCorrected = function (errorsCorrected /*Integer*/) {
        this.errorsCorrected = errorsCorrected;
    };
    /**
     * @return number of erasures corrected, or {@code null} if not applicable
     */
    DecoderResult.prototype.getErasures = function () {
        return this.erasures;
    };
    DecoderResult.prototype.setErasures = function (erasures /*Integer*/) {
        this.erasures = erasures;
    };
    /**
     * @return arbitrary additional metadata
     */
    DecoderResult.prototype.getOther = function () {
        return this.other;
    };
    DecoderResult.prototype.setOther = function (other) {
        this.other = other;
    };
    DecoderResult.prototype.hasStructuredAppend = function () {
        return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    };
    DecoderResult.prototype.getStructuredAppendParity = function () {
        return this.structuredAppendParity;
    };
    DecoderResult.prototype.getStructuredAppendSequenceNumber = function () {
        return this.structuredAppendSequenceNumber;
    };
    return DecoderResult;
}());
exports.default = DecoderResult;


/***/ }),

/***/ "./src/core/common/DefaultGridSampler.ts":
/*!***********************************************!*\
  !*** ./src/core/common/DefaultGridSampler.ts ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
var GridSampler_1 = __webpack_require__(/*! ./GridSampler */ "./src/core/common/GridSampler.ts");
var BitMatrix_1 = __webpack_require__(/*! ./BitMatrix */ "./src/core/common/BitMatrix.ts");
var PerspectiveTransform_1 = __webpack_require__(/*! ./PerspectiveTransform */ "./src/core/common/PerspectiveTransform.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * @author Sean Owen
 */
var DefaultGridSampler = /** @class */ (function (_super) {
    __extends(DefaultGridSampler, _super);
    function DefaultGridSampler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*@Override*/
    DefaultGridSampler.prototype.sampleGrid = function (image, dimensionX /*int*/, dimensionY /*int*/, p1ToX /*float*/, p1ToY /*float*/, p2ToX /*float*/, p2ToY /*float*/, p3ToX /*float*/, p3ToY /*float*/, p4ToX /*float*/, p4ToY /*float*/, p1FromX /*float*/, p1FromY /*float*/, p2FromX /*float*/, p2FromY /*float*/, p3FromX /*float*/, p3FromY /*float*/, p4FromX /*float*/, p4FromY /*float*/) {
        var transform = PerspectiveTransform_1.default.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
        return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
    };
    /*@Override*/
    DefaultGridSampler.prototype.sampleGridWithTransform = function (image, dimensionX /*int*/, dimensionY /*int*/, transform) {
        if (dimensionX <= 0 || dimensionY <= 0) {
            throw new NotFoundException_1.default();
        }
        var bits = new BitMatrix_1.default(dimensionX, dimensionY);
        var points = new Float32Array(2 * dimensionX);
        for (var y = 0; y < dimensionY; y++) {
            var max = points.length;
            var iValue = y + 0.5;
            for (var x = 0; x < max; x += 2) {
                points[x] = /*(float)*/ (x / 2) + 0.5;
                points[x + 1] = iValue;
            }
            transform.transformPoints(points);
            // Quick check to see if points transformed to something inside the image
            // sufficient to check the endpoints
            GridSampler_1.default.checkAndNudgePoints(image, points);
            try {
                for (var x = 0; x < max; x += 2) {
                    if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                        // Black(-ish) pixel
                        bits.set(x / 2, y);
                    }
                }
            }
            catch (aioobe /*: ArrayIndexOutOfBoundsException*/) {
                // This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
                // transform gets "twisted" such that it maps a straight line of points to a set of points
                // whose endpoints are in bounds, but others are not. There is probably some mathematical
                // way to detect this about the transformation that I don't know yet.
                // This results in an ugly runtime exception despite our clever checks above -- can't have
                // that. We could check each point's coordinates but that feels duplicative. We settle for
                // catching and wrapping ArrayIndexOutOfBoundsException.
                throw new NotFoundException_1.default();
            }
        }
        return bits;
    };
    return DefaultGridSampler;
}(GridSampler_1.default));
exports.default = DefaultGridSampler;


/***/ }),

/***/ "./src/core/common/DetectorResult.ts":
/*!*******************************************!*\
  !*** ./src/core/common/DetectorResult.ts ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * <p>Encapsulates the result of detecting a barcode in an image. This includes the raw
 * matrix of black/white pixels corresponding to the barcode, and possibly points of interest
 * in the image, like the location of finder patterns or corners of the barcode in the image.</p>
 *
 * @author Sean Owen
 */
var DetectorResult = /** @class */ (function () {
    function DetectorResult(bits, points) {
        this.bits = bits;
        this.points = points;
    }
    DetectorResult.prototype.getBits = function () {
        return this.bits;
    };
    DetectorResult.prototype.getPoints = function () {
        return this.points;
    };
    return DetectorResult;
}());
exports.default = DetectorResult;


/***/ }),

/***/ "./src/core/common/GlobalHistogramBinarizer.ts":
/*!*****************************************************!*\
  !*** ./src/core/common/GlobalHistogramBinarizer.ts ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
var Binarizer_1 = __webpack_require__(/*! ../Binarizer */ "./src/core/Binarizer.ts");
var BitArray_1 = __webpack_require__(/*! ./BitArray */ "./src/core/common/BitArray.ts");
var BitMatrix_1 = __webpack_require__(/*! ./BitMatrix */ "./src/core/common/BitMatrix.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * This Binarizer implementation uses the old ZXing global histogram approach. It is suitable
 * for low-end mobile devices which don't have enough CPU or memory to use a local thresholding
 * algorithm. However, because it picks a global black point, it cannot handle difficult shadows
 * and gradients.
 *
 * Faster mobile devices and all desktop applications should probably use HybridBinarizer instead.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 * @author Sean Owen
 */
var GlobalHistogramBinarizer = /** @class */ (function (_super) {
    __extends(GlobalHistogramBinarizer, _super);
    function GlobalHistogramBinarizer(source) {
        var _this = _super.call(this, source) || this;
        _this.luminances = GlobalHistogramBinarizer.EMPTY;
        _this.buckets = new Int32Array(GlobalHistogramBinarizer.LUMINANCE_BUCKETS);
        return _this;
    }
    // Applies simple sharpening to the row data to improve performance of the 1D Readers.
    /*@Override*/
    GlobalHistogramBinarizer.prototype.getBlackRow = function (y /*int*/, row) {
        var source = this.getLuminanceSource();
        var width = source.getWidth();
        if (row === undefined || row === null || row.getSize() < width) {
            row = new BitArray_1.default(width);
        }
        else {
            row.clear();
        }
        this.initArrays(width);
        var localLuminances = source.getRow(y, this.luminances);
        var localBuckets = this.buckets;
        for (var x = 0; x < width; x++) {
            localBuckets[(localLuminances[x] & 0xff) >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
        }
        var blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
        if (width < 3) {
            // Special case for very small images
            for (var x = 0; x < width; x++) {
                if ((localLuminances[x] & 0xff) < blackPoint) {
                    row.set(x);
                }
            }
        }
        else {
            var left = localLuminances[0] & 0xff;
            var center = localLuminances[1] & 0xff;
            for (var x = 1; x < width - 1; x++) {
                var right = localLuminances[x + 1] & 0xff;
                // A simple -1 4 -1 box filter with a weight of 2.
                if (((center * 4) - left - right) / 2 < blackPoint) {
                    row.set(x);
                }
                left = center;
                center = right;
            }
        }
        return row;
    };
    // Does not sharpen the data, as this call is intended to only be used by 2D Readers.
    /*@Override*/
    GlobalHistogramBinarizer.prototype.getBlackMatrix = function () {
        var source = this.getLuminanceSource();
        var width = source.getWidth();
        var height = source.getHeight();
        var matrix = new BitMatrix_1.default(width, height);
        // Quickly calculates the histogram by sampling four rows from the image. This proved to be
        // more robust on the blackbox tests than sampling a diagonal as we used to do.
        this.initArrays(width);
        var localBuckets = this.buckets;
        for (var y = 1; y < 5; y++) {
            var row = height * y / 5;
            var localLuminances_1 = source.getRow(row, this.luminances);
            var right = Math.floor((width * 4) / 5);
            for (var x = Math.floor(width / 5); x < right; x++) {
                var pixel = localLuminances_1[x] & 0xff;
                localBuckets[pixel >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
            }
        }
        var blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
        // We delay reading the entire image luminance until the black point estimation succeeds.
        // Although we end up reading four rows twice, it is consistent with our motto of
        // "fail quickly" which is necessary for continuous scanning.
        var localLuminances = source.getMatrix();
        for (var y = 0; y < height; y++) {
            var offset = y * width;
            for (var x = 0; x < width; x++) {
                var pixel = localLuminances[offset + x] & 0xff;
                if (pixel < blackPoint) {
                    matrix.set(x, y);
                }
            }
        }
        return matrix;
    };
    /*@Override*/
    GlobalHistogramBinarizer.prototype.createBinarizer = function (source) {
        return new GlobalHistogramBinarizer(source);
    };
    GlobalHistogramBinarizer.prototype.initArrays = function (luminanceSize /*int*/) {
        if (this.luminances.length < luminanceSize) {
            this.luminances = new Uint8ClampedArray(luminanceSize);
        }
        var buckets = this.buckets;
        for (var x = 0; x < GlobalHistogramBinarizer.LUMINANCE_BUCKETS; x++) {
            buckets[x] = 0;
        }
    };
    GlobalHistogramBinarizer.estimateBlackPoint = function (buckets) {
        // Find the tallest peak in the histogram.
        var numBuckets = buckets.length;
        var maxBucketCount = 0;
        var firstPeak = 0;
        var firstPeakSize = 0;
        for (var x = 0; x < numBuckets; x++) {
            if (buckets[x] > firstPeakSize) {
                firstPeak = x;
                firstPeakSize = buckets[x];
            }
            if (buckets[x] > maxBucketCount) {
                maxBucketCount = buckets[x];
            }
        }
        // Find the second-tallest peak which is somewhat far from the tallest peak.
        var secondPeak = 0;
        var secondPeakScore = 0;
        for (var x = 0; x < numBuckets; x++) {
            var distanceToBiggest = x - firstPeak;
            // Encourage more distant second peaks by multiplying by square of distance.
            var score = buckets[x] * distanceToBiggest * distanceToBiggest;
            if (score > secondPeakScore) {
                secondPeak = x;
                secondPeakScore = score;
            }
        }
        // Make sure firstPeak corresponds to the black peak.
        if (firstPeak > secondPeak) {
            var temp = firstPeak;
            firstPeak = secondPeak;
            secondPeak = temp;
        }
        // If there is too little contrast in the image to pick a meaningful black point, throw rather
        // than waste time trying to decode the image, and risk false positives.
        if (secondPeak - firstPeak <= numBuckets / 16) {
            throw new NotFoundException_1.default();
        }
        // Find a valley between them that is low and closer to the white peak.
        var bestValley = secondPeak - 1;
        var bestValleyScore = -1;
        for (var x = secondPeak - 1; x > firstPeak; x--) {
            var fromFirst = x - firstPeak;
            var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
            if (score > bestValleyScore) {
                bestValley = x;
                bestValleyScore = score;
            }
        }
        return bestValley << GlobalHistogramBinarizer.LUMINANCE_SHIFT;
    };
    GlobalHistogramBinarizer.LUMINANCE_BITS = 5;
    GlobalHistogramBinarizer.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer.LUMINANCE_BITS;
    GlobalHistogramBinarizer.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer.LUMINANCE_BITS;
    GlobalHistogramBinarizer.EMPTY = Uint8ClampedArray.from([0]);
    return GlobalHistogramBinarizer;
}(Binarizer_1.default));
exports.default = GlobalHistogramBinarizer;


/***/ }),

/***/ "./src/core/common/GridSampler.ts":
/*!****************************************!*\
  !*** ./src/core/common/GridSampler.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * Implementations of this class can, given locations of finder patterns for a QR code in an
 * image, sample the right points in the image to reconstruct the QR code, accounting for
 * perspective distortion. It is abstracted since it is relatively expensive and should be allowed
 * to take advantage of platform-specific optimized implementations, like Sun's Java Advanced
 * Imaging library, but which may not be available in other environments such as J2ME, and vice
 * versa.
 *
 * The implementation used can be controlled by calling {@link #setGridSampler(GridSampler)}
 * with an instance of a class which implements this interface.
 *
 * @author Sean Owen
 */
var GridSampler = /** @class */ (function () {
    function GridSampler() {
    }
    /**
     * <p>Checks a set of points that have been transformed to sample points on an image against
     * the image's dimensions to see if the point are even within the image.</p>
     *
     * <p>This method will actually "nudge" the endpoints back onto the image if they are found to be
     * barely (less than 1 pixel) off the image. This accounts for imperfect detection of finder
     * patterns in an image where the QR Code runs all the way to the image border.</p>
     *
     * <p>For efficiency, the method will check points from either end of the line until one is found
     * to be within the image. Because the set of points are assumed to be linear, this is valid.</p>
     *
     * @param image image into which the points should map
     * @param points actual points in x1,y1,...,xn,yn form
     * @throws NotFoundException if an endpoint is lies outside the image boundaries
     */
    GridSampler.checkAndNudgePoints = function (image, points) {
        var width = image.getWidth();
        var height = image.getHeight();
        // Check and nudge points from start until we see some that are OK:
        var nudged = true;
        for (var offset = 0; offset < points.length && nudged; offset += 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > width || y < -1 || y > height) {
                throw new NotFoundException_1.default();
            }
            nudged = false;
            if (x === -1) {
                points[offset] = 0.0;
                nudged = true;
            }
            else if (x === width) {
                points[offset] = width - 1;
                nudged = true;
            }
            if (y === -1) {
                points[offset + 1] = 0.0;
                nudged = true;
            }
            else if (y === height) {
                points[offset + 1] = height - 1;
                nudged = true;
            }
        }
        // Check and nudge points from end:
        nudged = true;
        for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > width || y < -1 || y > height) {
                throw new NotFoundException_1.default();
            }
            nudged = false;
            if (x === -1) {
                points[offset] = 0.0;
                nudged = true;
            }
            else if (x === width) {
                points[offset] = width - 1;
                nudged = true;
            }
            if (y === -1) {
                points[offset + 1] = 0.0;
                nudged = true;
            }
            else if (y === height) {
                points[offset + 1] = height - 1;
                nudged = true;
            }
        }
    };
    return GridSampler;
}());
exports.default = GridSampler;


/***/ }),

/***/ "./src/core/common/GridSamplerInstance.ts":
/*!************************************************!*\
  !*** ./src/core/common/GridSamplerInstance.ts ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGridSampler_1 = __webpack_require__(/*! ./DefaultGridSampler */ "./src/core/common/DefaultGridSampler.ts");
var GridSamplerInstance = /** @class */ (function () {
    function GridSamplerInstance() {
    }
    /**
     * Sets the implementation of GridSampler used by the library. One global
     * instance is stored, which may sound problematic. But, the implementation provided
     * ought to be appropriate for the entire platform, and all uses of this library
     * in the whole lifetime of the JVM. For instance, an Android activity can swap in
     * an implementation that takes advantage of native platform libraries.
     *
     * @param newGridSampler The platform-specific object to install.
     */
    GridSamplerInstance.setGridSampler = function (newGridSampler) {
        GridSamplerInstance.gridSampler = newGridSampler;
    };
    /**
     * @return the current implementation of GridSampler
     */
    GridSamplerInstance.getInstance = function () {
        return GridSamplerInstance.gridSampler;
    };
    GridSamplerInstance.gridSampler = new DefaultGridSampler_1.default();
    return GridSamplerInstance;
}());
exports.default = GridSamplerInstance;


/***/ }),

/***/ "./src/core/common/HybridBinarizer.ts":
/*!********************************************!*\
  !*** ./src/core/common/HybridBinarizer.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2009 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalHistogramBinarizer_1 = __webpack_require__(/*! ./GlobalHistogramBinarizer */ "./src/core/common/GlobalHistogramBinarizer.ts");
var BitMatrix_1 = __webpack_require__(/*! ./BitMatrix */ "./src/core/common/BitMatrix.ts");
/**
 * This class implements a local thresholding algorithm, which while slower than the
 * GlobalHistogramBinarizer, is fairly efficient for what it does. It is designed for
 * high frequency images of barcodes with black data on white backgrounds. For this application,
 * it does a much better job than a global blackpoint with severe shadows and gradients.
 * However it tends to produce artifacts on lower frequency images and is therefore not
 * a good general purpose binarizer for uses outside ZXing.
 *
 * This class extends GlobalHistogramBinarizer, using the older histogram approach for 1D readers,
 * and the newer local approach for 2D readers. 1D decoding using a per-row histogram is already
 * inherently local, and only fails for horizontal gradients. We can revisit that problem later,
 * but for now it was not a win to use local blocks for 1D.
 *
 * This Binarizer is the default for the unit tests and the recommended class for library users.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var HybridBinarizer = /** @class */ (function (_super) {
    __extends(HybridBinarizer, _super);
    function HybridBinarizer(source) {
        var _this = _super.call(this, source) || this;
        _this.matrix = null;
        return _this;
    }
    /**
     * Calculates the final BitMatrix once for all requests. This could be called once from the
     * constructor instead, but there are some advantages to doing it lazily, such as making
     * profiling easier, and not doing heavy lifting when callers don't expect it.
     */
    /*@Override*/
    HybridBinarizer.prototype.getBlackMatrix = function () {
        if (this.matrix !== null) {
            return this.matrix;
        }
        var source = this.getLuminanceSource();
        var width = source.getWidth();
        var height = source.getHeight();
        if (width >= HybridBinarizer.MINIMUM_DIMENSION && height >= HybridBinarizer.MINIMUM_DIMENSION) {
            var luminances = source.getMatrix();
            var subWidth = width >> HybridBinarizer.BLOCK_SIZE_POWER;
            if ((width & HybridBinarizer.BLOCK_SIZE_MASK) !== 0) {
                subWidth++;
            }
            var subHeight = height >> HybridBinarizer.BLOCK_SIZE_POWER;
            if ((height & HybridBinarizer.BLOCK_SIZE_MASK) !== 0) {
                subHeight++;
            }
            var blackPoints = HybridBinarizer.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
            var newMatrix = new BitMatrix_1.default(width, height);
            HybridBinarizer.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
            this.matrix = newMatrix;
        }
        else {
            // If the image is too small, fall back to the global histogram approach.
            this.matrix = _super.prototype.getBlackMatrix.call(this);
        }
        return this.matrix;
    };
    /*@Override*/
    HybridBinarizer.prototype.createBinarizer = function (source) {
        return new HybridBinarizer(source);
    };
    /**
     * For each block in the image, calculate the average black point using a 5x5 grid
     * of the blocks around it. Also handles the corner cases (fractional blocks are computed based
     * on the last pixels in the row/column which are also used in the previous block).
     */
    HybridBinarizer.calculateThresholdForBlock = function (luminances, subWidth /*int*/, subHeight /*int*/, width /*int*/, height /*int*/, blackPoints, matrix) {
        var maxYOffset = height - HybridBinarizer.BLOCK_SIZE;
        var maxXOffset = width - HybridBinarizer.BLOCK_SIZE;
        for (var y = 0; y < subHeight; y++) {
            var yoffset = y << HybridBinarizer.BLOCK_SIZE_POWER;
            if (yoffset > maxYOffset) {
                yoffset = maxYOffset;
            }
            var top_1 = HybridBinarizer.cap(y, 2, subHeight - 3);
            for (var x = 0; x < subWidth; x++) {
                var xoffset = x << HybridBinarizer.BLOCK_SIZE_POWER;
                if (xoffset > maxXOffset) {
                    xoffset = maxXOffset;
                }
                var left = HybridBinarizer.cap(x, 2, subWidth - 3);
                var sum = 0;
                for (var z = -2; z <= 2; z++) {
                    var blackRow = blackPoints[top_1 + z];
                    sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
                }
                var average = sum / 25;
                HybridBinarizer.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
            }
        }
    };
    HybridBinarizer.cap = function (value /*int*/, min /*int*/, max /*int*/) {
        return value < min ? min : value > max ? max : value;
    };
    /**
     * Applies a single threshold to a block of pixels.
     */
    HybridBinarizer.thresholdBlock = function (luminances, xoffset /*int*/, yoffset /*int*/, threshold /*int*/, stride /*int*/, matrix) {
        for (var y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer.BLOCK_SIZE; y++, offset += stride) {
            for (var x = 0; x < HybridBinarizer.BLOCK_SIZE; x++) {
                // Comparison needs to be <= so that black == 0 pixels are black even if the threshold is 0.
                if ((luminances[offset + x] & 0xFF) <= threshold) {
                    matrix.set(xoffset + x, yoffset + y);
                }
            }
        }
    };
    /**
     * Calculates a single black point for each block of pixels and saves it away.
     * See the following thread for a discussion of this algorithm:
     *  http://groups.google.com/group/zxing/browse_thread/thread/d06efa2c35a7ddc0
     */
    HybridBinarizer.calculateBlackPoints = function (luminances, subWidth /*int*/, subHeight /*int*/, width /*int*/, height /*int*/) {
        var maxYOffset = height - HybridBinarizer.BLOCK_SIZE;
        var maxXOffset = width - HybridBinarizer.BLOCK_SIZE;
        // tslint:disable-next-line:whitespace
        var blackPoints = new Array(subHeight); // subWidth
        for (var y = 0; y < subHeight; y++) {
            blackPoints[y] = new Int32Array(subWidth);
            var yoffset = y << HybridBinarizer.BLOCK_SIZE_POWER;
            if (yoffset > maxYOffset) {
                yoffset = maxYOffset;
            }
            for (var x = 0; x < subWidth; x++) {
                var xoffset = x << HybridBinarizer.BLOCK_SIZE_POWER;
                if (xoffset > maxXOffset) {
                    xoffset = maxXOffset;
                }
                var sum = 0;
                var min = 0xFF;
                var max = 0;
                for (var yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer.BLOCK_SIZE; yy++, offset += width) {
                    for (var xx = 0; xx < HybridBinarizer.BLOCK_SIZE; xx++) {
                        var pixel = luminances[offset + xx] & 0xFF;
                        sum += pixel;
                        // still looking for good contrast
                        if (pixel < min) {
                            min = pixel;
                        }
                        if (pixel > max) {
                            max = pixel;
                        }
                    }
                    // short-circuit min/max tests once dynamic range is met
                    if (max - min > HybridBinarizer.MIN_DYNAMIC_RANGE) {
                        // finish the rest of the rows quickly
                        for (yy++, offset += width; yy < HybridBinarizer.BLOCK_SIZE; yy++, offset += width) {
                            for (var xx = 0; xx < HybridBinarizer.BLOCK_SIZE; xx++) {
                                sum += luminances[offset + xx] & 0xFF;
                            }
                        }
                    }
                }
                // The default estimate is the average of the values in the block.
                var average = sum >> (HybridBinarizer.BLOCK_SIZE_POWER * 2);
                if (max - min <= HybridBinarizer.MIN_DYNAMIC_RANGE) {
                    // If variation within the block is low, assume this is a block with only light or only
                    // dark pixels. In that case we do not want to use the average, as it would divide this
                    // low contrast area into black and white pixels, essentially creating data out of noise.
                    //
                    // The default assumption is that the block is light/background. Since no estimate for
                    // the level of dark pixels exists locally, use half the min for the block.
                    average = min / 2;
                    if (y > 0 && x > 0) {
                        // Correct the "white background" assumption for blocks that have neighbors by comparing
                        // the pixels in this block to the previously calculated black points. This is based on
                        // the fact that dark barcode symbology is always surrounded by some amount of light
                        // background for which reasonable black point estimates were made. The bp estimated at
                        // the boundaries is used for the interior.
                        // The (min < bp) is arbitrary but works better than other heuristics that were tried.
                        var averageNeighborBlackPoint = (blackPoints[y - 1][x] + (2 * blackPoints[y][x - 1]) + blackPoints[y - 1][x - 1]) / 4;
                        if (min < averageNeighborBlackPoint) {
                            average = averageNeighborBlackPoint;
                        }
                    }
                }
                blackPoints[y][x] = average;
            }
        }
        return blackPoints;
    };
    // This class uses 5x5 blocks to compute local luminance, where each block is 8x8 pixels.
    // So this is the smallest dimension in each axis we can accept.
    HybridBinarizer.BLOCK_SIZE_POWER = 3;
    HybridBinarizer.BLOCK_SIZE = 1 << HybridBinarizer.BLOCK_SIZE_POWER; // ...0100...00
    HybridBinarizer.BLOCK_SIZE_MASK = HybridBinarizer.BLOCK_SIZE - 1; // ...0011...11
    HybridBinarizer.MINIMUM_DIMENSION = HybridBinarizer.BLOCK_SIZE * 5;
    HybridBinarizer.MIN_DYNAMIC_RANGE = 24;
    return HybridBinarizer;
}(GlobalHistogramBinarizer_1.default));
exports.default = HybridBinarizer;


/***/ }),

/***/ "./src/core/common/PerspectiveTransform.ts":
/*!*************************************************!*\
  !*** ./src/core/common/PerspectiveTransform.ts ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
/**
 * <p>This class implements a perspective transform in two dimensions. Given four source and four
 * destination points, it will compute the transformation implied between them. The code is based
 * directly upon section 3.4.2 of George Wolberg's "Digital Image Warping"; see pages 54-56.</p>
 *
 * @author Sean Owen
 */
var PerspectiveTransform = /** @class */ (function () {
    function PerspectiveTransform(a11 /*float*/, a21 /*float*/, a31 /*float*/, a12 /*float*/, a22 /*float*/, a32 /*float*/, a13 /*float*/, a23 /*float*/, a33 /*float*/) {
        this.a11 = a11;
        this.a21 = a21;
        this.a31 = a31;
        this.a12 = a12;
        this.a22 = a22;
        this.a32 = a32;
        this.a13 = a13;
        this.a23 = a23;
        this.a33 = a33;
    }
    PerspectiveTransform.quadrilateralToQuadrilateral = function (x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/, x0p /*float*/, y0p /*float*/, x1p /*float*/, y1p /*float*/, x2p /*float*/, y2p /*float*/, x3p /*float*/, y3p /*float*/) {
        var qToS = PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
        var sToQ = PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
        return sToQ.times(qToS);
    };
    PerspectiveTransform.prototype.transformPoints = function (points) {
        var max = points.length;
        var a11 = this.a11;
        var a12 = this.a12;
        var a13 = this.a13;
        var a21 = this.a21;
        var a22 = this.a22;
        var a23 = this.a23;
        var a31 = this.a31;
        var a32 = this.a32;
        var a33 = this.a33;
        for (var i = 0; i < max; i += 2) {
            var x = points[i];
            var y = points[i + 1];
            var denominator = a13 * x + a23 * y + a33;
            points[i] = (a11 * x + a21 * y + a31) / denominator;
            points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
        }
    };
    PerspectiveTransform.prototype.transformPointsWithValues = function (xValues, yValues) {
        var a11 = this.a11;
        var a12 = this.a12;
        var a13 = this.a13;
        var a21 = this.a21;
        var a22 = this.a22;
        var a23 = this.a23;
        var a31 = this.a31;
        var a32 = this.a32;
        var a33 = this.a33;
        var n = xValues.length;
        for (var i = 0; i < n; i++) {
            var x = xValues[i];
            var y = yValues[i];
            var denominator = a13 * x + a23 * y + a33;
            xValues[i] = (a11 * x + a21 * y + a31) / denominator;
            yValues[i] = (a12 * x + a22 * y + a32) / denominator;
        }
    };
    PerspectiveTransform.squareToQuadrilateral = function (x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/) {
        var dx3 = x0 - x1 + x2 - x3;
        var dy3 = y0 - y1 + y2 - y3;
        if (dx3 === 0.0 && dy3 === 0.0) {
            // Affine
            return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0.0, 0.0, 1.0);
        }
        else {
            var dx1 = x1 - x2;
            var dx2 = x3 - x2;
            var dy1 = y1 - y2;
            var dy2 = y3 - y2;
            var denominator = dx1 * dy2 - dx2 * dy1;
            var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
            var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
            return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1.0);
        }
    };
    PerspectiveTransform.quadrilateralToSquare = function (x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/) {
        // Here, the adjoint serves as the inverse:
        return PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
    };
    PerspectiveTransform.prototype.buildAdjoint = function () {
        // Adjoint is the transpose of the cofactor matrix:
        return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    };
    PerspectiveTransform.prototype.times = function (other) {
        return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
    };
    return PerspectiveTransform;
}());
exports.default = PerspectiveTransform;


/***/ }),

/***/ "./src/core/common/StringUtils.ts":
/*!****************************************!*\
  !*** ./src/core/common/StringUtils.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2010 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common {*/
/*import java.nio.charset.Charset;*/
/*import java.util.Map;*/
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var CharacterSetECI_1 = __webpack_require__(/*! ./CharacterSetECI */ "./src/core/common/CharacterSetECI.ts");
/**
 * Common string-related functions.
 *
 * @author Sean Owen
 * @author Alex Dupre
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    // SHIFT_JIS.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING) ||
    // EUC_JP.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING);
    StringUtils.prototype.StringUtils = function () { };
    /**
     * @param bytes bytes encoding a string, whose encoding should be guessed
     * @param hints decode hints if applicable
     * @return name of guessed encoding; at the moment will only guess one of:
     *  {@link #SHIFT_JIS}, {@link #UTF8}, {@link #ISO88591}, or the platform
     *  default encoding if none of these can possibly be correct
     */
    StringUtils.guessEncoding = function (bytes, hints) {
        if (hints !== null && hints !== undefined && undefined !== hints.get(DecodeHintType_1.default.CHARACTER_SET)) {
            return hints.get(DecodeHintType_1.default.CHARACTER_SET).toString();
        }
        // For now, merely tries to distinguish ISO-8859-1, UTF-8 and Shift_JIS,
        // which should be by far the most common encodings.
        var length = bytes.length;
        var canBeISO88591 = true;
        var canBeShiftJIS = true;
        var canBeUTF8 = true;
        var utf8BytesLeft = 0;
        // int utf8LowChars = 0
        var utf2BytesChars = 0;
        var utf3BytesChars = 0;
        var utf4BytesChars = 0;
        var sjisBytesLeft = 0;
        // int sjisLowChars = 0
        var sjisKatakanaChars = 0;
        // int sjisDoubleBytesChars = 0
        var sjisCurKatakanaWordLength = 0;
        var sjisCurDoubleBytesWordLength = 0;
        var sjisMaxKatakanaWordLength = 0;
        var sjisMaxDoubleBytesWordLength = 0;
        // int isoLowChars = 0
        // int isoHighChars = 0
        var isoHighOther = 0;
        var utf8bom = bytes.length > 3 &&
            bytes[0] === /*(byte) */ 0xEF &&
            bytes[1] === /*(byte) */ 0xBB &&
            bytes[2] === /*(byte) */ 0xBF;
        for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
            var value = bytes[i] & 0xFF;
            // UTF-8 stuff
            if (canBeUTF8) {
                if (utf8BytesLeft > 0) {
                    if ((value & 0x80) === 0) {
                        canBeUTF8 = false;
                    }
                    else {
                        utf8BytesLeft--;
                    }
                }
                else if ((value & 0x80) !== 0) {
                    if ((value & 0x40) === 0) {
                        canBeUTF8 = false;
                    }
                    else {
                        utf8BytesLeft++;
                        if ((value & 0x20) === 0) {
                            utf2BytesChars++;
                        }
                        else {
                            utf8BytesLeft++;
                            if ((value & 0x10) === 0) {
                                utf3BytesChars++;
                            }
                            else {
                                utf8BytesLeft++;
                                if ((value & 0x08) === 0) {
                                    utf4BytesChars++;
                                }
                                else {
                                    canBeUTF8 = false;
                                }
                            }
                        }
                    }
                } // else {
                // utf8LowChars++
                // }
            }
            // ISO-8859-1 stuff
            if (canBeISO88591) {
                if (value > 0x7F && value < 0xA0) {
                    canBeISO88591 = false;
                }
                else if (value > 0x9F) {
                    if (value < 0xC0 || value === 0xD7 || value === 0xF7) {
                        isoHighOther++;
                    } // else {
                    // isoHighChars++
                    // }
                } // else {
                // isoLowChars++
                // }
            }
            // Shift_JIS stuff
            if (canBeShiftJIS) {
                if (sjisBytesLeft > 0) {
                    if (value < 0x40 || value === 0x7F || value > 0xFC) {
                        canBeShiftJIS = false;
                    }
                    else {
                        sjisBytesLeft--;
                    }
                }
                else if (value === 0x80 || value === 0xA0 || value > 0xEF) {
                    canBeShiftJIS = false;
                }
                else if (value > 0xA0 && value < 0xE0) {
                    sjisKatakanaChars++;
                    sjisCurDoubleBytesWordLength = 0;
                    sjisCurKatakanaWordLength++;
                    if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
                        sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
                    }
                }
                else if (value > 0x7F) {
                    sjisBytesLeft++;
                    // sjisDoubleBytesChars++
                    sjisCurKatakanaWordLength = 0;
                    sjisCurDoubleBytesWordLength++;
                    if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
                        sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
                    }
                }
                else {
                    // sjisLowChars++
                    sjisCurKatakanaWordLength = 0;
                    sjisCurDoubleBytesWordLength = 0;
                }
            }
        }
        if (canBeUTF8 && utf8BytesLeft > 0) {
            canBeUTF8 = false;
        }
        if (canBeShiftJIS && sjisBytesLeft > 0) {
            canBeShiftJIS = false;
        }
        // Easy -- if there is BOM or at least 1 valid not-single byte character (and no evidence it can't be UTF-8), done
        if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
            return StringUtils.UTF8;
        }
        // Easy -- if assuming Shift_JIS or at least 3 valid consecutive not-ascii characters (and no evidence it can't be), done
        if (canBeShiftJIS && (StringUtils.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
            return StringUtils.SHIFT_JIS;
        }
        // Distinguishing Shift_JIS and ISO-8859-1 can be a little tough for short words. The crude heuristic is:
        // - If we saw
        //   - only two consecutive katakana chars in the whole text, or
        //   - at least 10% of bytes that could be "upper" not-alphanumeric Latin1,
        // - then we conclude Shift_JIS, else ISO-8859-1
        if (canBeISO88591 && canBeShiftJIS) {
            return (sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2) || isoHighOther * 10 >= length
                ? StringUtils.SHIFT_JIS : StringUtils.ISO88591;
        }
        // Otherwise, try in order ISO-8859-1, Shift JIS, UTF-8 and fall back to default platform encoding
        if (canBeISO88591) {
            return StringUtils.ISO88591;
        }
        if (canBeShiftJIS) {
            return StringUtils.SHIFT_JIS;
        }
        if (canBeUTF8) {
            return StringUtils.UTF8;
        }
        // Otherwise, we take a wild guess with platform encoding
        return StringUtils.PLATFORM_DEFAULT_ENCODING;
    };
    StringUtils.SHIFT_JIS = CharacterSetECI_1.default.SJIS.getName(); // "SJIS"
    StringUtils.GB2312 = 'GB2312';
    StringUtils.ISO88591 = CharacterSetECI_1.default.ISO8859_1.getName(); // "ISO8859_1"
    StringUtils.EUC_JP = 'EUC_JP';
    StringUtils.UTF8 = CharacterSetECI_1.default.UTF8.getName(); // "UTF8"
    StringUtils.PLATFORM_DEFAULT_ENCODING = StringUtils.UTF8; // "UTF8"//Charset.defaultCharset().name()
    StringUtils.ASSUME_SHIFT_JIS = false;
    return StringUtils;
}());
exports.default = StringUtils;


/***/ }),

/***/ "./src/core/common/detector/MathUtils.ts":
/*!***********************************************!*\
  !*** ./src/core/common/detector/MathUtils.ts ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2012 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common.detector {*/
/**
 * General math-related and numeric utility functions.
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.prototype.MathUtils = function () {
    };
    /**
     * Ends up being a bit faster than {@link Math#round(float)}. This merely rounds its
     * argument to the nearest int, where x.5 rounds up to x+1. Semantics of this shortcut
     * differ slightly from {@link Math#round(float)} in that half rounds down for negative
     * values. -2.5 rounds to -3, not -2. For purposes here it makes no difference.
     *
     * @param d real value to round
     * @return nearest {@code int}
     */
    MathUtils.round = function (d /*float*/) {
        if (NaN === d)
            return 0;
        if (d <= Number.MIN_SAFE_INTEGER)
            return Number.MIN_SAFE_INTEGER;
        if (d >= Number.MAX_SAFE_INTEGER)
            return Number.MAX_SAFE_INTEGER;
        return /*(int) */ (d + (d < 0.0 ? -0.5 : 0.5)) | 0;
    };
    // TYPESCRIPTPORT: maybe remove round method and call directly Math.round, it looks like it doesn't make sense for js
    /**
     * @param aX point A x coordinate
     * @param aY point A y coordinate
     * @param bX point B x coordinate
     * @param bY point B y coordinate
     * @return Euclidean distance between points A and B
     */
    MathUtils.distance = function (aX /*float|int*/, aY /*float|int*/, bX /*float|int*/, bY /*float|int*/) {
        var xDiff = aX - bX;
        var yDiff = aY - bY;
        return /*(float) */ Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    /**
     * @param aX point A x coordinate
     * @param aY point A y coordinate
     * @param bX point B x coordinate
     * @param bY point B y coordinate
     * @return Euclidean distance between points A and B
     */
    // public static distance(aX: number /*int*/, aY: number /*int*/, bX: number /*int*/, bY: number /*int*/): float {
    //   const xDiff = aX - bX
    //   const yDiff = aY - bY
    //   return (float) Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    // }
    /**
     * @param array values to sum
     * @return sum of values in array
     */
    MathUtils.sum = function (array) {
        var count = 0;
        for (var i = 0, length_1 = array.length; i !== length_1; i++) {
            var a = array[i];
            count += a;
        }
        return count;
    };
    return MathUtils;
}());
exports.default = MathUtils;


/***/ }),

/***/ "./src/core/common/detector/WhiteRectangleDetector.ts":
/*!************************************************************!*\
  !*** ./src/core/common/detector/WhiteRectangleDetector.ts ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2010 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common.detector {*/
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var MathUtils_1 = __webpack_require__(/*! ./MathUtils */ "./src/core/common/detector/MathUtils.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * <p>
 * Detects a candidate barcode-like rectangular region within an image. It
 * starts around the center of the image, increases the size of the candidate
 * region until it finds a white rectangular region. By keeping track of the
 * last black points it encountered, it determines the corners of the barcode.
 * </p>
 *
 * @author David Olivier
 */
var WhiteRectangleDetector = /** @class */ (function () {
    // public constructor(private image: BitMatrix) /*throws NotFoundException*/ {
    //   this(image, INIT_SIZE, image.getWidth() / 2, image.getHeight() / 2)
    // }
    /**
     * @param image barcode image to find a rectangle in
     * @param initSize initial size of search area around center
     * @param x x position of search center
     * @param y y position of search center
     * @throws NotFoundException if image is too small to accommodate {@code initSize}
     */
    function WhiteRectangleDetector(image, initSize /*int*/, x /*int*/, y /*int*/) {
        this.image = image;
        this.height = image.getHeight();
        this.width = image.getWidth();
        if (undefined === initSize || null === initSize) {
            initSize = WhiteRectangleDetector.INIT_SIZE;
        }
        if (undefined === x || null === x) {
            x = image.getWidth() / 2 | 0;
        }
        if (undefined === y || null === y) {
            y = image.getHeight() / 2 | 0;
        }
        var halfsize = initSize / 2 | 0;
        this.leftInit = x - halfsize;
        this.rightInit = x + halfsize;
        this.upInit = y - halfsize;
        this.downInit = y + halfsize;
        if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
            throw new NotFoundException_1.default();
        }
    }
    /**
     * <p>
     * Detects a candidate barcode-like rectangular region within an image. It
     * starts around the center of the image, increases the size of the candidate
     * region until it finds a white rectangular region.
     * </p>
     *
     * @return {@link ResultPoint}[] describing the corners of the rectangular
     *         region. The first and last points are opposed on the diagonal, as
     *         are the second and third. The first point will be the topmost
     *         point and the last, the bottommost. The second point will be
     *         leftmost and the third, the rightmost
     * @throws NotFoundException if no Data Matrix Code can be found
     */
    WhiteRectangleDetector.prototype.detect = function () {
        var left = this.leftInit;
        var right = this.rightInit;
        var up = this.upInit;
        var down = this.downInit;
        var sizeExceeded = false;
        var aBlackPointFoundOnBorder = true;
        var atLeastOneBlackPointFoundOnBorder = false;
        var atLeastOneBlackPointFoundOnRight = false;
        var atLeastOneBlackPointFoundOnBottom = false;
        var atLeastOneBlackPointFoundOnLeft = false;
        var atLeastOneBlackPointFoundOnTop = false;
        var width = this.width;
        var height = this.height;
        while (aBlackPointFoundOnBorder) {
            aBlackPointFoundOnBorder = false;
            // .....
            // .   |
            // .....
            var rightBorderNotWhite = true;
            while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
                rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
                if (rightBorderNotWhite) {
                    right++;
                    aBlackPointFoundOnBorder = true;
                    atLeastOneBlackPointFoundOnRight = true;
                }
                else if (!atLeastOneBlackPointFoundOnRight) {
                    right++;
                }
            }
            if (right >= width) {
                sizeExceeded = true;
                break;
            }
            // .....
            // .   .
            // .___.
            var bottomBorderNotWhite = true;
            while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
                bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
                if (bottomBorderNotWhite) {
                    down++;
                    aBlackPointFoundOnBorder = true;
                    atLeastOneBlackPointFoundOnBottom = true;
                }
                else if (!atLeastOneBlackPointFoundOnBottom) {
                    down++;
                }
            }
            if (down >= height) {
                sizeExceeded = true;
                break;
            }
            // .....
            // |   .
            // .....
            var leftBorderNotWhite = true;
            while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
                leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
                if (leftBorderNotWhite) {
                    left--;
                    aBlackPointFoundOnBorder = true;
                    atLeastOneBlackPointFoundOnLeft = true;
                }
                else if (!atLeastOneBlackPointFoundOnLeft) {
                    left--;
                }
            }
            if (left < 0) {
                sizeExceeded = true;
                break;
            }
            // .___.
            // .   .
            // .....
            var topBorderNotWhite = true;
            while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
                topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
                if (topBorderNotWhite) {
                    up--;
                    aBlackPointFoundOnBorder = true;
                    atLeastOneBlackPointFoundOnTop = true;
                }
                else if (!atLeastOneBlackPointFoundOnTop) {
                    up--;
                }
            }
            if (up < 0) {
                sizeExceeded = true;
                break;
            }
            if (aBlackPointFoundOnBorder) {
                atLeastOneBlackPointFoundOnBorder = true;
            }
        }
        if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
            var maxSize = right - left;
            var z = null;
            for (var i = 1; z === null && i < maxSize; i++) {
                z = this.getBlackPointOnSegment(left, down - i, left + i, down);
            }
            if (z == null) {
                throw new NotFoundException_1.default();
            }
            var t = null;
            // go down right
            for (var i = 1; t === null && i < maxSize; i++) {
                t = this.getBlackPointOnSegment(left, up + i, left + i, up);
            }
            if (t == null) {
                throw new NotFoundException_1.default();
            }
            var x = null;
            // go down left
            for (var i = 1; x === null && i < maxSize; i++) {
                x = this.getBlackPointOnSegment(right, up + i, right - i, up);
            }
            if (x == null) {
                throw new NotFoundException_1.default();
            }
            var y = null;
            // go up left
            for (var i = 1; y === null && i < maxSize; i++) {
                y = this.getBlackPointOnSegment(right, down - i, right - i, down);
            }
            if (y == null) {
                throw new NotFoundException_1.default();
            }
            return this.centerEdges(y, z, x, t);
        }
        else {
            throw new NotFoundException_1.default();
        }
    };
    WhiteRectangleDetector.prototype.getBlackPointOnSegment = function (aX /*float*/, aY /*float*/, bX /*float*/, bY /*float*/) {
        var dist = MathUtils_1.default.round(MathUtils_1.default.distance(aX, aY, bX, bY));
        var xStep = (bX - aX) / dist;
        var yStep = (bY - aY) / dist;
        var image = this.image;
        for (var i = 0; i < dist; i++) {
            var x = MathUtils_1.default.round(aX + i * xStep);
            var y = MathUtils_1.default.round(aY + i * yStep);
            if (image.get(x, y)) {
                return new ResultPoint_1.default(x, y);
            }
        }
        return null;
    };
    /**
     * recenters the points of a constant distance towards the center
     *
     * @param y bottom most point
     * @param z left most point
     * @param x right most point
     * @param t top most point
     * @return {@link ResultPoint}[] describing the corners of the rectangular
     *         region. The first and last points are opposed on the diagonal, as
     *         are the second and third. The first point will be the topmost
     *         point and the last, the bottommost. The second point will be
     *         leftmost and the third, the rightmost
     */
    WhiteRectangleDetector.prototype.centerEdges = function (y, z, x, t) {
        //
        //       t            t
        //  z                      x
        //        x    OR    z
        //   y                    y
        //
        var yi = y.getX();
        var yj = y.getY();
        var zi = z.getX();
        var zj = z.getY();
        var xi = x.getX();
        var xj = x.getY();
        var ti = t.getX();
        var tj = t.getY();
        var CORR = WhiteRectangleDetector.CORR;
        if (yi < this.width / 2.0) {
            return [
                new ResultPoint_1.default(ti - CORR, tj + CORR),
                new ResultPoint_1.default(zi + CORR, zj + CORR),
                new ResultPoint_1.default(xi - CORR, xj - CORR),
                new ResultPoint_1.default(yi + CORR, yj - CORR)
            ];
        }
        else {
            return [
                new ResultPoint_1.default(ti + CORR, tj + CORR),
                new ResultPoint_1.default(zi + CORR, zj - CORR),
                new ResultPoint_1.default(xi - CORR, xj + CORR),
                new ResultPoint_1.default(yi - CORR, yj - CORR)
            ];
        }
    };
    /**
     * Determines whether a segment contains a black point
     *
     * @param a          min value of the scanned coordinate
     * @param b          max value of the scanned coordinate
     * @param fixed      value of fixed coordinate
     * @param horizontal set to true if scan must be horizontal, false if vertical
     * @return true if a black point has been found, else false.
     */
    WhiteRectangleDetector.prototype.containsBlackPoint = function (a /*int*/, b /*int*/, fixed /*int*/, horizontal) {
        var image = this.image;
        if (horizontal) {
            for (var x = a; x <= b; x++) {
                if (image.get(x, fixed)) {
                    return true;
                }
            }
        }
        else {
            for (var y = a; y <= b; y++) {
                if (image.get(fixed, y)) {
                    return true;
                }
            }
        }
        return false;
    };
    WhiteRectangleDetector.INIT_SIZE = 10;
    WhiteRectangleDetector.CORR = 1;
    return WhiteRectangleDetector;
}());
exports.default = WhiteRectangleDetector;


/***/ }),

/***/ "./src/core/common/reedsolomon/GenericGF.ts":
/*!**************************************************!*\
  !*** ./src/core/common/reedsolomon/GenericGF.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common.reedsolomon {*/
var GenericGFPoly_1 = __webpack_require__(/*! ./GenericGFPoly */ "./src/core/common/reedsolomon/GenericGFPoly.ts");
var Integer_1 = __webpack_require__(/*! ../../util/Integer */ "./src/core/util/Integer.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var ArithmeticException_1 = __webpack_require__(/*! ../../ArithmeticException */ "./src/core/ArithmeticException.ts");
/**
 * <p>This class contains utility methods for performing mathematical operations over
 * the Galois Fields. Operations use a given primitive polynomial in calculations.</p>
 *
 * <p>Throughout this package, elements of the GF are represented as an {@code int}
 * for convenience and speed (but at the cost of memory).
 * </p>
 *
 * @author Sean Owen
 * @author David Olivier
 */
var GenericGF = /** @class */ (function () {
    /**
     * Create a representation of GF(size) using the given primitive polynomial.
     *
     * @param primitive irreducible polynomial whose coefficients are represented by
     *  the bits of an int, where the least-significant bit represents the constant
     *  coefficient
     * @param size the size of the field
     * @param b the factor b in the generator polynomial can be 0- or 1-based
     *  (g(x) = (x+a^b)(x+a^(b+1))...(x+a^(b+2t-1))).
     *  In most cases it should be 1, but for QR code it is 0.
     */
    function GenericGF(primitive /*int*/, size /*int*/, generatorBase /*int*/) {
        this.primitive = primitive;
        this.size = size;
        this.generatorBase = generatorBase;
        var expTable = new Int32Array(size);
        var x = 1;
        for (var i = 0; i < size; i++) {
            expTable[i] = x;
            x *= 2; // we're assuming the generator alpha is 2
            if (x >= size) {
                x ^= primitive;
                x &= size - 1;
            }
        }
        this.expTable = expTable;
        var logTable = new Int32Array(size);
        for (var i = 0; i < size - 1; i++) {
            logTable[expTable[i]] = i;
        }
        this.logTable = logTable;
        // logTable[0] == 0 but this should never be used
        this.zero = new GenericGFPoly_1.default(this, Int32Array.from([0]));
        this.one = new GenericGFPoly_1.default(this, Int32Array.from([1]));
    }
    GenericGF.prototype.getZero = function () {
        return this.zero;
    };
    GenericGF.prototype.getOne = function () {
        return this.one;
    };
    /**
     * @return the monomial representing coefficient * x^degree
     */
    GenericGF.prototype.buildMonomial = function (degree /*int*/, coefficient /*int*/) {
        if (degree < 0) {
            throw new IllegalArgumentException_1.default();
        }
        if (coefficient === 0) {
            return this.zero;
        }
        var coefficients = new Int32Array(degree + 1);
        coefficients[0] = coefficient;
        return new GenericGFPoly_1.default(this, coefficients);
    };
    /**
     * Implements both addition and subtraction -- they are the same in GF(size).
     *
     * @return sum/difference of a and b
     */
    GenericGF.addOrSubtract = function (a /*int*/, b /*int*/) {
        return a ^ b;
    };
    /**
     * @return 2 to the power of a in GF(size)
     */
    GenericGF.prototype.exp = function (a /*int*/) {
        return this.expTable[a];
    };
    /**
     * @return base 2 log of a in GF(size)
     */
    GenericGF.prototype.log = function (a /*int*/) {
        if (a === 0) {
            throw new IllegalArgumentException_1.default();
        }
        return this.logTable[a];
    };
    /**
     * @return multiplicative inverse of a
     */
    GenericGF.prototype.inverse = function (a /*int*/) {
        if (a === 0) {
            throw new ArithmeticException_1.default();
        }
        return this.expTable[this.size - this.logTable[a] - 1];
    };
    /**
     * @return product of a and b in GF(size)
     */
    GenericGF.prototype.multiply = function (a /*int*/, b /*int*/) {
        if (a === 0 || b === 0) {
            return 0;
        }
        return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    };
    GenericGF.prototype.getSize = function () {
        return this.size;
    };
    GenericGF.prototype.getGeneratorBase = function () {
        return this.generatorBase;
    };
    /*@Override*/
    GenericGF.prototype.toString = function () {
        return 'GF(0x' + Integer_1.default.toHexString(this.primitive) + ',' + this.size + ')';
    };
    GenericGF.prototype.equals = function (o) {
        return o === this;
    };
    GenericGF.AZTEC_DATA_12 = new GenericGF(0x1069, 4096, 1); // x^12 + x^6 + x^5 + x^3 + 1
    GenericGF.AZTEC_DATA_10 = new GenericGF(0x409, 1024, 1); // x^10 + x^3 + 1
    GenericGF.AZTEC_DATA_6 = new GenericGF(0x43, 64, 1); // x^6 + x + 1
    GenericGF.AZTEC_PARAM = new GenericGF(0x13, 16, 1); // x^4 + x + 1
    GenericGF.QR_CODE_FIELD_256 = new GenericGF(0x011D, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
    GenericGF.DATA_MATRIX_FIELD_256 = new GenericGF(0x012D, 256, 1); // x^8 + x^5 + x^3 + x^2 + 1
    GenericGF.AZTEC_DATA_8 = GenericGF.DATA_MATRIX_FIELD_256;
    GenericGF.MAXICODE_FIELD_64 = GenericGF.AZTEC_DATA_6;
    return GenericGF;
}());
exports.default = GenericGF;


/***/ }),

/***/ "./src/core/common/reedsolomon/GenericGFPoly.ts":
/*!******************************************************!*\
  !*** ./src/core/common/reedsolomon/GenericGFPoly.ts ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common.reedsolomon {*/
var GenericGF_1 = __webpack_require__(/*! ./GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
var System_1 = __webpack_require__(/*! ../../util/System */ "./src/core/util/System.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>Represents a polynomial whose coefficients are elements of a GF.
 * Instances of this class are immutable.</p>
 *
 * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
 * port of his C++ Reed-Solomon implementation.</p>
 *
 * @author Sean Owen
 */
var GenericGFPoly = /** @class */ (function () {
    /**
     * @param field the {@link GenericGF} instance representing the field to use
     * to perform computations
     * @param coefficients coefficients as ints representing elements of GF(size), arranged
     * from most significant (highest-power term) coefficient to least significant
     * @throws IllegalArgumentException if argument is null or empty,
     * or if leading coefficient is 0 and this is not a
     * constant polynomial (that is, it is not the monomial "0")
     */
    function GenericGFPoly(field, coefficients) {
        if (coefficients.length === 0) {
            throw new IllegalArgumentException_1.default();
        }
        this.field = field;
        var coefficientsLength = coefficients.length;
        if (coefficientsLength > 1 && coefficients[0] === 0) {
            // Leading term must be non-zero for anything except the constant polynomial "0"
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
            }
            if (firstNonZero === coefficientsLength) {
                this.coefficients = Int32Array.from([0]);
            }
            else {
                this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                System_1.default.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
            }
        }
        else {
            this.coefficients = coefficients;
        }
    }
    GenericGFPoly.prototype.getCoefficients = function () {
        return this.coefficients;
    };
    /**
     * @return degree of this polynomial
     */
    GenericGFPoly.prototype.getDegree = function () {
        return this.coefficients.length - 1;
    };
    /**
     * @return true iff this polynomial is the monomial "0"
     */
    GenericGFPoly.prototype.isZero = function () {
        return this.coefficients[0] === 0;
    };
    /**
     * @return coefficient of x^degree term in this polynomial
     */
    GenericGFPoly.prototype.getCoefficient = function (degree /*int*/) {
        return this.coefficients[this.coefficients.length - 1 - degree];
    };
    /**
     * @return evaluation of this polynomial at a given point
     */
    GenericGFPoly.prototype.evaluateAt = function (a /*int*/) {
        if (a === 0) {
            // Just return the x^0 coefficient
            return this.getCoefficient(0);
        }
        var coefficients = this.coefficients;
        var result;
        if (a === 1) {
            // Just the sum of the coefficients
            result = 0;
            for (var i = 0, length_1 = coefficients.length; i !== length_1; i++) {
                var coefficient = coefficients[i];
                result = GenericGF_1.default.addOrSubtract(result, coefficient);
            }
            return result;
        }
        result = coefficients[0];
        var size = coefficients.length;
        var field = this.field;
        for (var i = 1; i < size; i++) {
            result = GenericGF_1.default.addOrSubtract(field.multiply(a, result), coefficients[i]);
        }
        return result;
    };
    GenericGFPoly.prototype.addOrSubtract = function (other) {
        if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default('GenericGFPolys do not have same GenericGF field');
        }
        if (this.isZero()) {
            return other;
        }
        if (other.isZero()) {
            return this;
        }
        var smallerCoefficients = this.coefficients;
        var largerCoefficients = other.coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            var temp = smallerCoefficients;
            smallerCoefficients = largerCoefficients;
            largerCoefficients = temp;
        }
        var sumDiff = new Int32Array(largerCoefficients.length);
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        // Copy high-order terms only found in higher-degree polynomial's coefficients
        System_1.default.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = GenericGF_1.default.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new GenericGFPoly(this.field, sumDiff);
    };
    GenericGFPoly.prototype.multiply = function (other) {
        if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default('GenericGFPolys do not have same GenericGF field');
        }
        if (this.isZero() || other.isZero()) {
            return this.field.getZero();
        }
        var aCoefficients = this.coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other.coefficients;
        var bLength = bCoefficients.length;
        var product = new Int32Array(aLength + bLength - 1);
        var field = this.field;
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = GenericGF_1.default.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new GenericGFPoly(field, product);
    };
    GenericGFPoly.prototype.multiplyScalar = function (scalar /*int*/) {
        if (scalar === 0) {
            return this.field.getZero();
        }
        if (scalar === 1) {
            return this;
        }
        var size = this.coefficients.length;
        var field = this.field;
        var product = new Int32Array(size);
        var coefficients = this.coefficients;
        for (var i = 0; i < size; i++) {
            product[i] = field.multiply(coefficients[i], scalar);
        }
        return new GenericGFPoly(field, product);
    };
    GenericGFPoly.prototype.multiplyByMonomial = function (degree /*int*/, coefficient /*int*/) {
        if (degree < 0) {
            throw new IllegalArgumentException_1.default();
        }
        if (coefficient === 0) {
            return this.field.getZero();
        }
        var coefficients = this.coefficients;
        var size = coefficients.length;
        var product = new Int32Array(size + degree);
        var field = this.field;
        for (var i = 0; i < size; i++) {
            product[i] = field.multiply(coefficients[i], coefficient);
        }
        return new GenericGFPoly(field, product);
    };
    GenericGFPoly.prototype.divide = function (other) {
        if (!this.field.equals(other.field)) {
            throw new IllegalArgumentException_1.default('GenericGFPolys do not have same GenericGF field');
        }
        if (other.isZero()) {
            throw new IllegalArgumentException_1.default('Divide by 0');
        }
        var field = this.field;
        var quotient = field.getZero();
        var remainder = this;
        var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
        var inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
        while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
            var degreeDifference = remainder.getDegree() - other.getDegree();
            var scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
            var term = other.multiplyByMonomial(degreeDifference, scale);
            var iterationQuotient = field.buildMonomial(degreeDifference, scale);
            quotient = quotient.addOrSubtract(iterationQuotient);
            remainder = remainder.addOrSubtract(term);
        }
        return [quotient, remainder];
    };
    /*@Override*/
    GenericGFPoly.prototype.toString = function () {
        var result = '';
        for (var degree = this.getDegree(); degree >= 0; degree--) {
            var coefficient = this.getCoefficient(degree);
            if (coefficient !== 0) {
                if (coefficient < 0) {
                    result += ' - ';
                    coefficient = -coefficient;
                }
                else {
                    if (result.length > 0) {
                        result += ' + ';
                    }
                }
                if (degree === 0 || coefficient !== 1) {
                    var alphaPower = this.field.log(coefficient);
                    if (alphaPower === 0) {
                        result += '1';
                    }
                    else if (alphaPower === 1) {
                        result += 'a';
                    }
                    else {
                        result += 'a^';
                        result += alphaPower;
                    }
                }
                if (degree !== 0) {
                    if (degree === 1) {
                        result += 'x';
                    }
                    else {
                        result += 'x^';
                        result += degree;
                    }
                }
            }
        }
        return result;
    };
    return GenericGFPoly;
}());
exports.default = GenericGFPoly;


/***/ }),

/***/ "./src/core/common/reedsolomon/ReedSolomonDecoder.ts":
/*!***********************************************************!*\
  !*** ./src/core/common/reedsolomon/ReedSolomonDecoder.ts ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.common.reedsolomon {*/
var GenericGF_1 = __webpack_require__(/*! ./GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
var GenericGFPoly_1 = __webpack_require__(/*! ./GenericGFPoly */ "./src/core/common/reedsolomon/GenericGFPoly.ts");
var ReedSolomonException_1 = __webpack_require__(/*! ../../ReedSolomonException */ "./src/core/ReedSolomonException.ts");
var IllegalStateException_1 = __webpack_require__(/*! ../../IllegalStateException */ "./src/core/IllegalStateException.ts");
/**
 * <p>Implements Reed-Solomon decoding, as the name implies.</p>
 *
 * <p>The algorithm will not be explained here, but the following references were helpful
 * in creating this implementation:</p>
 *
 * <ul>
 * <li>Bruce Maggs.
 * <a href="http://www.cs.cmu.edu/afs/cs.cmu.edu/project/pscico-guyb/realworld/www/rs_decode.ps">
 * "Decoding Reed-Solomon Codes"</a> (see discussion of Forney's Formula)</li>
 * <li>J.I. Hall. <a href="www.mth.msu.edu/~jhall/classes/codenotes/GRS.pdf">
 * "Chapter 5. Generalized Reed-Solomon Codes"</a>
 * (see discussion of Euclidean algorithm)</li>
 * </ul>
 *
 * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
 * port of his C++ Reed-Solomon implementation.</p>
 *
 * @author Sean Owen
 * @author William Rucklidge
 * @author sanfordsquires
 */
var ReedSolomonDecoder = /** @class */ (function () {
    function ReedSolomonDecoder(field) {
        this.field = field;
    }
    /**
     * <p>Decodes given set of received codewords, which include both data and error-correction
     * codewords. Really, this means it uses Reed-Solomon to detect and correct errors, in-place,
     * in the input.</p>
     *
     * @param received data and error-correction codewords
     * @param twoS number of error-correction codewords available
     * @throws ReedSolomonException if decoding fails for any reason
     */
    ReedSolomonDecoder.prototype.decode = function (received, twoS /*int*/) {
        var field = this.field;
        var poly = new GenericGFPoly_1.default(field, received);
        var syndromeCoefficients = new Int32Array(twoS);
        var noError = true;
        for (var i = 0; i < twoS; i++) {
            var evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
            syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
            if (evalResult !== 0) {
                noError = false;
            }
        }
        if (noError) {
            return;
        }
        var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
        var sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
        var sigma = sigmaOmega[0];
        var omega = sigmaOmega[1];
        var errorLocations = this.findErrorLocations(sigma);
        var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
        for (var i = 0; i < errorLocations.length; i++) {
            var position = received.length - 1 - field.log(errorLocations[i]);
            if (position < 0) {
                throw new ReedSolomonException_1.default('Bad error location');
            }
            received[position] = GenericGF_1.default.addOrSubtract(received[position], errorMagnitudes[i]);
        }
    };
    ReedSolomonDecoder.prototype.runEuclideanAlgorithm = function (a, b, R /*int*/) {
        // Assume a's degree is >= b's
        if (a.getDegree() < b.getDegree()) {
            var temp = a;
            a = b;
            b = temp;
        }
        var field = this.field;
        var rLast = a;
        var r = b;
        var tLast = field.getZero();
        var t = field.getOne();
        // Run Euclidean algorithm until r's degree is less than R/2
        while (r.getDegree() >= (R / 2 | 0)) {
            var rLastLast = rLast;
            var tLastLast = tLast;
            rLast = r;
            tLast = t;
            // Divide rLastLast by rLast, with quotient in q and remainder in r
            if (rLast.isZero()) {
                // Oops, Euclidean algorithm already terminated?
                throw new ReedSolomonException_1.default('r_{i-1} was zero');
            }
            r = rLastLast;
            var q = field.getZero();
            var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
            var dltInverse = field.inverse(denominatorLeadingTerm);
            while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                var degreeDiff = r.getDegree() - rLast.getDegree();
                var scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
                r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
            }
            t = q.multiply(tLast).addOrSubtract(tLastLast);
            if (r.getDegree() >= rLast.getDegree()) {
                throw new IllegalStateException_1.default('Division algorithm failed to reduce polynomial?');
            }
        }
        var sigmaTildeAtZero = t.getCoefficient(0);
        if (sigmaTildeAtZero === 0) {
            throw new ReedSolomonException_1.default('sigmaTilde(0) was zero');
        }
        var inverse = field.inverse(sigmaTildeAtZero);
        var sigma = t.multiplyScalar(inverse);
        var omega = r.multiplyScalar(inverse);
        return [sigma, omega];
    };
    ReedSolomonDecoder.prototype.findErrorLocations = function (errorLocator) {
        // This is a direct application of Chien's search
        var numErrors = errorLocator.getDegree();
        if (numErrors === 1) { // shortcut
            return Int32Array.from([errorLocator.getCoefficient(1)]);
        }
        var result = new Int32Array(numErrors);
        var e = 0;
        var field = this.field;
        for (var i = 1; i < field.getSize() && e < numErrors; i++) {
            if (errorLocator.evaluateAt(i) === 0) {
                result[e] = field.inverse(i);
                e++;
            }
        }
        if (e !== numErrors) {
            throw new ReedSolomonException_1.default('Error locator degree does not match number of roots');
        }
        return result;
    };
    ReedSolomonDecoder.prototype.findErrorMagnitudes = function (errorEvaluator, errorLocations) {
        // This is directly applying Forney's Formula
        var s = errorLocations.length;
        var result = new Int32Array(s);
        var field = this.field;
        for (var i = 0; i < s; i++) {
            var xiInverse = field.inverse(errorLocations[i]);
            var denominator = 1;
            for (var j = 0; j < s; j++) {
                if (i !== j) {
                    // denominator = field.multiply(denominator,
                    //    GenericGF.addOrSubtract(1, field.multiply(errorLocations[j], xiInverse)))
                    // Above should work but fails on some Apple and Linux JDKs due to a Hotspot bug.
                    // Below is a funny-looking workaround from Steven Parkes
                    var term = field.multiply(errorLocations[j], xiInverse);
                    var termPlus1 = (term & 0x1) === 0 ? term | 1 : term & ~1;
                    denominator = field.multiply(denominator, termPlus1);
                }
            }
            result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
            if (field.getGeneratorBase() !== 0) {
                result[i] = field.multiply(result[i], xiInverse);
            }
        }
        return result;
    };
    return ReedSolomonDecoder;
}());
exports.default = ReedSolomonDecoder;


/***/ }),

/***/ "./src/core/common/reedsolomon/ReedSolomonEncoder.ts":
/*!***********************************************************!*\
  !*** ./src/core/common/reedsolomon/ReedSolomonEncoder.ts ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GenericGFPoly_1 = __webpack_require__(/*! ./GenericGFPoly */ "./src/core/common/reedsolomon/GenericGFPoly.ts");
var System_1 = __webpack_require__(/*! ../../util/System */ "./src/core/util/System.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>Implements Reed-Solomon encoding, as the name implies.</p>
 *
 * @author Sean Owen
 * @author William Rucklidge
 */
var ReedSolomonEncoder = /** @class */ (function () {
    /**
     * A reed solomon error-correcting encoding constructor is created by
     * passing as Galois Field with of size equal to the number of code
     * words (symbols) in the alphabet (the number of values in each
     * element of arrays that are encoded/decoded).
     * @param field A galois field with a number of elements equal to the size
     * of the alphabet of symbols to encode.
     */
    function ReedSolomonEncoder(field) {
        this.field = field;
        this.cachedGenerators = [];
        this.cachedGenerators.push(new GenericGFPoly_1.default(field, Int32Array.from([1])));
    }
    ReedSolomonEncoder.prototype.buildGenerator = function (degree /*int*/) {
        var cachedGenerators = this.cachedGenerators;
        if (degree >= cachedGenerators.length) {
            var lastGenerator = cachedGenerators[cachedGenerators.length - 1];
            var field = this.field;
            for (var d = cachedGenerators.length; d <= degree; d++) {
                var nextGenerator = lastGenerator.multiply(new GenericGFPoly_1.default(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
                cachedGenerators.push(nextGenerator);
                lastGenerator = nextGenerator;
            }
        }
        return cachedGenerators[degree];
    };
    /**
     * <p>Encode a sequence of code words (symbols) using Reed-Solomon to allow decoders
     * to detect and correct errors that may have been introduced when the resulting
     * data is stored or transmitted.</p>
     *
     * @param toEncode array used for both and output. Caller initializes the array with
     * the code words (symbols) to be encoded followed by empty elements allocated to make
     * space for error-correction code words in the encoded output. The array contains
     * the encdoded output when encode returns. Code words are encoded as numbers from
     * 0 to n-1, where n is the number of possible code words (symbols), as determined
     * by the size of the Galois Field passed in the constructor of this object.
     * @param ecBytes the number of elements reserved in the array (first parameter)
     * to store error-correction code words. Thus, the number of code words (symbols)
     * to encode in the first parameter is thus toEncode.length - ecBytes.
     * Note, the use of "bytes" in the name of this parameter is misleading, as there may
     * be more or fewer than 256 symbols being encoded, as determined by the number of
     * elements in the Galois Field passed as a constructor to this object.
     * @throws IllegalArgumentException thrown in response to validation errros.
     */
    ReedSolomonEncoder.prototype.encode = function (toEncode, ecBytes /*int*/) {
        if (ecBytes === 0) {
            throw new IllegalArgumentException_1.default('No error correction bytes');
        }
        var dataBytes = toEncode.length - ecBytes;
        if (dataBytes <= 0) {
            throw new IllegalArgumentException_1.default('No data bytes provided');
        }
        var generator = this.buildGenerator(ecBytes);
        var infoCoefficients = new Int32Array(dataBytes);
        System_1.default.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
        var info = new GenericGFPoly_1.default(this.field, infoCoefficients);
        info = info.multiplyByMonomial(ecBytes, 1);
        var remainder = info.divide(generator)[1];
        var coefficients = remainder.getCoefficients();
        var numZeroCoefficients = ecBytes - coefficients.length;
        for (var i = 0; i < numZeroCoefficients; i++) {
            toEncode[dataBytes + i] = 0;
        }
        System_1.default.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
    };
    return ReedSolomonEncoder;
}());
exports.default = ReedSolomonEncoder;


/***/ }),

/***/ "./src/core/datamatrix/DataMatrixReader.ts":
/*!*************************************************!*\
  !*** ./src/core/datamatrix/DataMatrixReader.ts ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Decoder_1 = __webpack_require__(/*! ./decoder/Decoder */ "./src/core/datamatrix/decoder/Decoder.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var BitMatrix_1 = __webpack_require__(/*! ../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var Detector_1 = __webpack_require__(/*! ./detector/Detector */ "./src/core/datamatrix/detector/Detector.ts");
var System_1 = __webpack_require__(/*! ../util/System */ "./src/core/util/System.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This implementation can detect and decode Data Matrix codes in an image.
 *
 * @author bbrown@google.com (Brian Brown)
 */
var DataMatrixReader = /** @class */ (function () {
    function DataMatrixReader() {
        this.decoder = new Decoder_1.default();
    }
    /**
     * Locates and decodes a Data Matrix code in an image.
     *
     * @return a String representing the content encoded by the Data Matrix code
     * @throws NotFoundException if a Data Matrix code cannot be found
     * @throws FormatException if a Data Matrix code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    // @Override
    // public Result decode(BinaryBitmap image) throws NotFoundException, ChecksumException, FormatException {
    //   return decode(image, null);
    // }
    // @Override
    DataMatrixReader.prototype.decode = function (image, hints) {
        if (hints === void 0) { hints = null; }
        var decoderResult;
        var points;
        if (hints != null && hints.has(DecodeHintType_1.default.PURE_BARCODE)) {
            var bits = DataMatrixReader.extractPureBits(image.getBlackMatrix());
            decoderResult = this.decoder.decode(bits);
            points = DataMatrixReader.NO_POINTS;
        }
        else {
            var detectorResult = new Detector_1.default(image.getBlackMatrix()).detect();
            decoderResult = this.decoder.decode(detectorResult.getBits());
            points = detectorResult.getPoints();
        }
        var rawBytes = decoderResult.getRawBytes();
        var result = new Result_1.default(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat_1.default.DATA_MATRIX, System_1.default.currentTimeMillis());
        var byteSegments = decoderResult.getByteSegments();
        if (byteSegments != null) {
            result.putMetadata(ResultMetadataType_1.default.BYTE_SEGMENTS, byteSegments);
        }
        var ecLevel = decoderResult.getECLevel();
        if (ecLevel != null) {
            result.putMetadata(ResultMetadataType_1.default.ERROR_CORRECTION_LEVEL, ecLevel);
        }
        return result;
    };
    // @Override
    DataMatrixReader.prototype.reset = function () {
        // do nothing
    };
    /**
     * This method detects a code in a "pure" image -- that is, pure monochrome image
     * which contains only an unrotated, unskewed, image of a code, with some white border
     * around it. This is a specialized method that works exceptionally fast in this special
     * case.
     *
     * @see com.google.zxing.qrcode.QRCodeReader#extractPureBits(BitMatrix)
     */
    DataMatrixReader.extractPureBits = function (image) {
        var leftTopBlack = image.getTopLeftOnBit();
        var rightBottomBlack = image.getBottomRightOnBit();
        if (leftTopBlack == null || rightBottomBlack == null) {
            throw new NotFoundException_1.default();
        }
        var moduleSize = this.moduleSize(leftTopBlack, image);
        var top = leftTopBlack[1];
        var bottom = rightBottomBlack[1];
        var left = leftTopBlack[0];
        var right = rightBottomBlack[0];
        var matrixWidth = (right - left + 1) / moduleSize;
        var matrixHeight = (bottom - top + 1) / moduleSize;
        if (matrixWidth <= 0 || matrixHeight <= 0) {
            throw new NotFoundException_1.default();
        }
        // Push in the "border" by half the module width so that we start
        // sampling in the middle of the module. Just in case the image is a
        // little off, this will help recover.
        var nudge = moduleSize / 2;
        top += nudge;
        left += nudge;
        // Now just read off the bits
        var bits = new BitMatrix_1.default(matrixWidth, matrixHeight);
        for (var y = 0; y < matrixHeight; y++) {
            var iOffset = top + y * moduleSize;
            for (var x = 0; x < matrixWidth; x++) {
                if (image.get(left + x * moduleSize, iOffset)) {
                    bits.set(x, y);
                }
            }
        }
        return bits;
    };
    DataMatrixReader.moduleSize = function (leftTopBlack, image) {
        var width = image.getWidth();
        var x = leftTopBlack[0];
        var y = leftTopBlack[1];
        while (x < width && image.get(x, y)) {
            x++;
        }
        if (x === width) {
            throw new NotFoundException_1.default();
        }
        var moduleSize = x - leftTopBlack[0];
        if (moduleSize === 0) {
            throw new NotFoundException_1.default();
        }
        return moduleSize;
    };
    DataMatrixReader.NO_POINTS = [];
    return DataMatrixReader;
}());
exports.default = DataMatrixReader;


/***/ }),

/***/ "./src/core/datamatrix/decoder/BitMatrixParser.ts":
/*!********************************************************!*\
  !*** ./src/core/datamatrix/decoder/BitMatrixParser.ts ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(/*! ../../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var Version_1 = __webpack_require__(/*! ./Version */ "./src/core/datamatrix/decoder/Version.ts");
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @author bbrown@google.com (Brian Brown)
 */
var BitMatrixParser = /** @class */ (function () {
    /**
     * @param bitMatrix {@link BitMatrix} to parse
     * @throws FormatException if dimension is < 8 or > 144 or not 0 mod 2
     */
    function BitMatrixParser(bitMatrix) {
        var dimension = bitMatrix.getHeight();
        if (dimension < 8 || dimension > 144 || (dimension & 0x01) !== 0) {
            throw new FormatException_1.default();
        }
        this.version = BitMatrixParser.readVersion(bitMatrix);
        this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
        this.readMappingMatrix = new BitMatrix_1.default(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
    }
    BitMatrixParser.prototype.getVersion = function () {
        return this.version;
    };
    /**
     * <p>Creates the version object based on the dimension of the original bit matrix from
     * the datamatrix code.</p>
     *
     * <p>See ISO 16022:2006 Table 7 - ECC 200 symbol attributes</p>
     *
     * @param bitMatrix Original {@link BitMatrix} including alignment patterns
     * @return {@link Version} encapsulating the Data Matrix Code's "version"
     * @throws FormatException if the dimensions of the mapping matrix are not valid
     * Data Matrix dimensions.
     */
    BitMatrixParser.readVersion = function (bitMatrix) {
        var numRows = bitMatrix.getHeight();
        var numColumns = bitMatrix.getWidth();
        return Version_1.default.getVersionForDimensions(numRows, numColumns);
    };
    /**
     * <p>Reads the bits in the {@link BitMatrix} representing the mapping matrix (No alignment patterns)
     * in the correct order in order to reconstitute the codewords bytes contained within the
     * Data Matrix Code.</p>
     *
     * @return bytes encoded within the Data Matrix Code
     * @throws FormatException if the exact number of bytes expected is not read
     */
    BitMatrixParser.prototype.readCodewords = function () {
        var result = new Int8Array(this.version.getTotalCodewords());
        var resultOffset = 0;
        var row = 4;
        var column = 0;
        var numRows = this.mappingBitMatrix.getHeight();
        var numColumns = this.mappingBitMatrix.getWidth();
        var corner1Read = false;
        var corner2Read = false;
        var corner3Read = false;
        var corner4Read = false;
        // Read all of the codewords
        do {
            // Check the four corner cases
            if ((row === numRows) && (column === 0) && !corner1Read) {
                result[resultOffset++] = this.readCorner1(numRows, numColumns) & 0xff;
                row -= 2;
                column += 2;
                corner1Read = true;
            }
            else if ((row === numRows - 2) && (column === 0) && ((numColumns & 0x03) !== 0) && !corner2Read) {
                result[resultOffset++] = this.readCorner2(numRows, numColumns) & 0xff;
                row -= 2;
                column += 2;
                corner2Read = true;
            }
            else if ((row === numRows + 4) && (column === 2) && ((numColumns & 0x07) === 0) && !corner3Read) {
                result[resultOffset++] = this.readCorner3(numRows, numColumns) & 0xff;
                row -= 2;
                column += 2;
                corner3Read = true;
            }
            else if ((row === numRows - 2) && (column === 0) && ((numColumns & 0x07) === 4) && !corner4Read) {
                result[resultOffset++] = this.readCorner4(numRows, numColumns) & 0xff;
                row -= 2;
                column += 2;
                corner4Read = true;
            }
            else {
                // Sweep upward diagonally to the right
                do {
                    if ((row < numRows) && (column >= 0) && !this.readMappingMatrix.get(column, row)) {
                        result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 0xff;
                    }
                    row -= 2;
                    column += 2;
                } while ((row >= 0) && (column < numColumns));
                row += 1;
                column += 3;
                // Sweep downward diagonally to the left
                do {
                    if ((row >= 0) && (column < numColumns) && !this.readMappingMatrix.get(column, row)) {
                        result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 0xff;
                    }
                    row += 2;
                    column -= 2;
                } while ((row < numRows) && (column >= 0));
                row += 3;
                column += 1;
            }
        } while ((row < numRows) || (column < numColumns));
        if (resultOffset !== this.version.getTotalCodewords()) {
            throw new FormatException_1.default();
        }
        return result;
    };
    /**
     * <p>Reads a bit of the mapping matrix accounting for boundary wrapping.</p>
     *
     * @param row Row to read in the mapping matrix
     * @param column Column to read in the mapping matrix
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return value of the given bit in the mapping matrix
     */
    BitMatrixParser.prototype.readModule = function (row, column, numRows, numColumns) {
        // Adjust the row and column indices based on boundary wrapping
        if (row < 0) {
            row += numRows;
            column += 4 - ((numRows + 4) & 0x07);
        }
        if (column < 0) {
            column += numColumns;
            row += 4 - ((numColumns + 4) & 0x07);
        }
        this.readMappingMatrix.set(column, row);
        return this.mappingBitMatrix.get(column, row);
    };
    /**
     * <p>Reads the 8 bits of the standard Utah-shaped pattern.</p>
     *
     * <p>See ISO 16022:2006, 5.8.1 Figure 6</p>
     *
     * @param row Current row in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
     * @param column Current column in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return byte from the utah shape
     */
    BitMatrixParser.prototype.readUtah = function (row, column, numRows, numColumns) {
        var currentByte = 0;
        if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row - 1, column, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row, column - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row, column - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(row, column, numRows, numColumns)) {
            currentByte |= 1;
        }
        return currentByte;
    };
    /**
     * <p>Reads the 8 bits of the special corner condition 1.</p>
     *
     * <p>See ISO 16022:2006, Figure F.3</p>
     *
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return byte from the Corner condition 1
     */
    BitMatrixParser.prototype.readCorner1 = function (numRows, numColumns) {
        var currentByte = 0;
        if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        return currentByte;
    };
    /**
     * <p>Reads the 8 bits of the special corner condition 2.</p>
     *
     * <p>See ISO 16022:2006, Figure F.4</p>
     *
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return byte from the Corner condition 2
     */
    BitMatrixParser.prototype.readCorner2 = function (numRows, numColumns) {
        var currentByte = 0;
        if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        return currentByte;
    };
    /**
     * <p>Reads the 8 bits of the special corner condition 3.</p>
     *
     * <p>See ISO 16022:2006, Figure F.5</p>
     *
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return byte from the Corner condition 3
     */
    BitMatrixParser.prototype.readCorner3 = function (numRows, numColumns) {
        var currentByte = 0;
        if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        return currentByte;
    };
    /**
     * <p>Reads the 8 bits of the special corner condition 4.</p>
     *
     * <p>See ISO 16022:2006, Figure F.6</p>
     *
     * @param numRows Number of rows in the mapping matrix
     * @param numColumns Number of columns in the mapping matrix
     * @return byte from the Corner condition 4
     */
    BitMatrixParser.prototype.readCorner4 = function (numRows, numColumns) {
        var currentByte = 0;
        if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        currentByte <<= 1;
        if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
            currentByte |= 1;
        }
        return currentByte;
    };
    /**
     * <p>Extracts the data region from a {@link BitMatrix} that contains
     * alignment patterns.</p>
     *
     * @param bitMatrix Original {@link BitMatrix} with alignment patterns
     * @return BitMatrix that has the alignment patterns removed
     */
    BitMatrixParser.prototype.extractDataRegion = function (bitMatrix) {
        var symbolSizeRows = this.version.getSymbolSizeRows();
        var symbolSizeColumns = this.version.getSymbolSizeColumns();
        if (bitMatrix.getHeight() !== symbolSizeRows) {
            throw new IllegalArgumentException_1.default('Dimension of bitMatrix must match the version size');
        }
        var dataRegionSizeRows = this.version.getDataRegionSizeRows();
        var dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
        var numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
        var numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
        var sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
        var sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
        var bitMatrixWithoutAlignment = new BitMatrix_1.default(sizeDataRegionColumn, sizeDataRegionRow);
        for (var dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
            var dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
            for (var dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
                var dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
                for (var i = 0; i < dataRegionSizeRows; ++i) {
                    var readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
                    var writeRowOffset = dataRegionRowOffset + i;
                    for (var j = 0; j < dataRegionSizeColumns; ++j) {
                        var readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
                        if (bitMatrix.get(readColumnOffset, readRowOffset)) {
                            var writeColumnOffset = dataRegionColumnOffset + j;
                            bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
                        }
                    }
                }
            }
        }
        return bitMatrixWithoutAlignment;
    };
    return BitMatrixParser;
}());
exports.default = BitMatrixParser;


/***/ }),

/***/ "./src/core/datamatrix/decoder/DataBlock.ts":
/*!**************************************************!*\
  !*** ./src/core/datamatrix/decoder/DataBlock.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * <p>Encapsulates a block of data within a Data Matrix Code. Data Matrix Codes may split their data into
 * multiple blocks, each of which is a unit of data and error-correction codewords. Each
 * is represented by an instance of this class.</p>
 *
 * @author bbrown@google.com (Brian Brown)
 */
var DataBlock = /** @class */ (function () {
    function DataBlock(numDataCodewords, codewords) {
        this.numDataCodewords = numDataCodewords;
        this.codewords = codewords;
    }
    /**
     * <p>When Data Matrix Codes use multiple data blocks, they actually interleave the bytes of each of them.
     * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
     * method will separate the data into original blocks.</p>
     *
     * @param rawCodewords bytes as read directly from the Data Matrix Code
     * @param version version of the Data Matrix Code
     * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
     *         Data Matrix Code
     */
    DataBlock.getDataBlocks = function (rawCodewords, version) {
        // Figure out the number and size of data blocks used by this version
        var ecBlocks = version.getECBlocks();
        // First count the total number of data blocks
        var totalBlocks = 0;
        var ecBlockArray = ecBlocks.getECBlocks();
        for (var _i = 0, ecBlockArray_1 = ecBlockArray; _i < ecBlockArray_1.length; _i++) {
            var ecBlock = ecBlockArray_1[_i];
            totalBlocks += ecBlock.getCount();
        }
        // Now establish DataBlocks of the appropriate size and number of data codewords
        var result = new Array(totalBlocks);
        var numResultBlocks = 0;
        for (var _a = 0, ecBlockArray_2 = ecBlockArray; _a < ecBlockArray_2.length; _a++) {
            var ecBlock = ecBlockArray_2[_a];
            for (var i = 0; i < ecBlock.getCount(); i++) {
                var numDataCodewords = ecBlock.getDataCodewords();
                var numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
                result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
            }
        }
        // All blocks have the same amount of data, except that the last n
        // (where n may be 0) have 1 less byte. Figure out where these start.
        // TODO(bbrown): There is only one case where there is a difference for Data Matrix for size 144
        var longerBlocksTotalCodewords = result[0].codewords.length;
        // int shorterBlocksTotalCodewords = longerBlocksTotalCodewords - 1;
        var longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
        var shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
        // The last elements of result may be 1 element shorter for 144 matrix
        // first fill out as many elements as all of them have minus 1
        var rawCodewordsOffset = 0;
        for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
            }
        }
        // Fill out the last data block in the longer ones
        var specialVersion = version.getVersionNumber() === 24;
        var numLongerBlocks = specialVersion ? 8 : numResultBlocks;
        for (var j = 0; j < numLongerBlocks; j++) {
            result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
        }
        // Now add in error correction blocks
        var max = result[0].codewords.length;
        for (var i = longerBlocksNumDataCodewords; i < max; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                var jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
                var iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
                result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
            }
        }
        if (rawCodewordsOffset !== rawCodewords.length) {
            throw new IllegalArgumentException_1.default();
        }
        return result;
    };
    DataBlock.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
    };
    DataBlock.prototype.getCodewords = function () {
        return this.codewords;
    };
    return DataBlock;
}());
exports.default = DataBlock;


/***/ }),

/***/ "./src/core/datamatrix/decoder/DecodedBitStreamParser.ts":
/*!***************************************************************!*\
  !*** ./src/core/datamatrix/decoder/DecodedBitStreamParser.ts ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DecoderResult_1 = __webpack_require__(/*! ../../common/DecoderResult */ "./src/core/common/DecoderResult.ts");
var BitSource_1 = __webpack_require__(/*! ../../common/BitSource */ "./src/core/common/BitSource.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var StringEncoding_1 = __webpack_require__(/*! ../../util/StringEncoding */ "./src/core/util/StringEncoding.ts");
var __1 = __webpack_require__(/*! ../../.. */ "./src/index.ts");
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
var IllegalStateException_1 = __webpack_require__(/*! ../../IllegalStateException */ "./src/core/IllegalStateException.ts");
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mode;
(function (Mode) {
    Mode[Mode["PAD_ENCODE"] = 0] = "PAD_ENCODE";
    Mode[Mode["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
    Mode[Mode["C40_ENCODE"] = 2] = "C40_ENCODE";
    Mode[Mode["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
    Mode[Mode["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
    Mode[Mode["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
    Mode[Mode["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
})(Mode || (Mode = {}));
/**
 * <p>Data Matrix Codes can encode text as bits in one of several modes, and can use multiple modes
 * in one Data Matrix Code. This class decodes the bits back into text.</p>
 *
 * <p>See ISO 16022:2006, 5.2.1 - 5.2.9.2</p>
 *
 * @author bbrown@google.com (Brian Brown)
 * @author Sean Owen
 */
var DecodedBitStreamParser = /** @class */ (function () {
    function DecodedBitStreamParser() {
    }
    DecodedBitStreamParser.decode = function (bytes) {
        var bits = new BitSource_1.default(bytes);
        var result = new StringBuilder_1.default();
        var resultTrailer = new StringBuilder_1.default();
        var byteSegments = new Array();
        var mode = Mode.ASCII_ENCODE;
        do {
            if (mode === Mode.ASCII_ENCODE) {
                mode = this.decodeAsciiSegment(bits, result, resultTrailer);
            }
            else {
                switch (mode) {
                    case Mode.C40_ENCODE:
                        this.decodeC40Segment(bits, result);
                        break;
                    case Mode.TEXT_ENCODE:
                        this.decodeTextSegment(bits, result);
                        break;
                    case Mode.ANSIX12_ENCODE:
                        this.decodeAnsiX12Segment(bits, result);
                        break;
                    case Mode.EDIFACT_ENCODE:
                        this.decodeEdifactSegment(bits, result);
                        break;
                    case Mode.BASE256_ENCODE:
                        this.decodeBase256Segment(bits, result, byteSegments);
                        break;
                    default:
                        throw new FormatException_1.default();
                }
                mode = Mode.ASCII_ENCODE;
            }
        } while (mode !== Mode.PAD_ENCODE && bits.available() > 0);
        if (resultTrailer.length() > 0) {
            result.append(resultTrailer.toString());
        }
        return new DecoderResult_1.default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
    };
    /**
     * See ISO 16022:2006, 5.2.3 and Annex C, Table C.2
     */
    DecodedBitStreamParser.decodeAsciiSegment = function (bits, result, resultTrailer) {
        var upperShift = false;
        do {
            var oneByte = bits.readBits(8);
            if (oneByte === 0) {
                throw new FormatException_1.default();
            }
            else if (oneByte <= 128) { // ASCII data (ASCII value + 1)
                if (upperShift) {
                    oneByte += 128;
                    // upperShift = false;
                }
                result.append(String.fromCharCode(oneByte - 1));
                return Mode.ASCII_ENCODE;
            }
            else if (oneByte === 129) { // Pad
                return Mode.PAD_ENCODE;
            }
            else if (oneByte <= 229) { // 2-digit data 00-99 (Numeric Value + 130)
                var value = oneByte - 130;
                if (value < 10) { // pad with '0' for single digit values
                    result.append('0');
                }
                result.append('' + value);
            }
            else {
                switch (oneByte) {
                    case 230: // Latch to C40 encodation
                        return Mode.C40_ENCODE;
                    case 231: // Latch to Base 256 encodation
                        return Mode.BASE256_ENCODE;
                    case 232: // FNC1
                        result.append(String.fromCharCode(29)); // translate as ASCII 29
                        break;
                    case 233: // Structured Append
                    case 234: // Reader Programming
                        // Ignore these symbols for now
                        // throw ReaderException.getInstance();
                        break;
                    case 235: // Upper Shift (shift to Extended ASCII)
                        upperShift = true;
                        break;
                    case 236: // 05 Macro
                        result.append('[)>\u001E05\u001D');
                        resultTrailer.insert(0, '\u001E\u0004');
                        break;
                    case 237: // 06 Macro
                        result.append('[)>\u001E06\u001D');
                        resultTrailer.insert(0, '\u001E\u0004');
                        break;
                    case 238: // Latch to ANSI X12 encodation
                        return Mode.ANSIX12_ENCODE;
                    case 239: // Latch to Text encodation
                        return Mode.TEXT_ENCODE;
                    case 240: // Latch to EDIFACT encodation
                        return Mode.EDIFACT_ENCODE;
                    case 241: // ECI Character
                        // TODO(bbrown): I think we need to support ECI
                        // throw ReaderException.getInstance();
                        // Ignore this symbol for now
                        break;
                    default:
                        // Not to be used in ASCII encodation
                        // but work around encoders that end with 254, latch back to ASCII
                        if (oneByte !== 254 || bits.available() !== 0) {
                            throw new FormatException_1.default();
                        }
                        break;
                }
            }
        } while (bits.available() > 0);
        return Mode.ASCII_ENCODE;
    };
    /**
     * See ISO 16022:2006, 5.2.5 and Annex C, Table C.1
     */
    DecodedBitStreamParser.decodeC40Segment = function (bits, result) {
        // Three C40 values are encoded in a 16-bit value as
        // (1600 * C1) + (40 * C2) + C3 + 1
        // TODO(bbrown): The Upper Shift with C40 doesn't work in the 4 value scenario all the time
        var upperShift = false;
        var cValues = [];
        var shift = 0;
        do {
            // If there is only one byte left then it will be encoded as ASCII
            if (bits.available() === 8) {
                return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) { // Unlatch codeword
                return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
                var cValue = cValues[i];
                switch (shift) {
                    case 0:
                        if (cValue < 3) {
                            shift = cValue + 1;
                        }
                        else if (cValue < this.C40_BASIC_SET_CHARS.length) {
                            var c40char = this.C40_BASIC_SET_CHARS[cValue];
                            if (upperShift) {
                                result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                                upperShift = false;
                            }
                            else {
                                result.append(c40char);
                            }
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    case 1:
                        if (upperShift) {
                            result.append(String.fromCharCode(cValue + 128));
                            upperShift = false;
                        }
                        else {
                            result.append(String.fromCharCode(cValue));
                        }
                        shift = 0;
                        break;
                    case 2:
                        if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
                            var c40char = this.C40_SHIFT2_SET_CHARS[cValue];
                            if (upperShift) {
                                result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                                upperShift = false;
                            }
                            else {
                                result.append(c40char);
                            }
                        }
                        else {
                            switch (cValue) {
                                case 27: // FNC1
                                    result.append(String.fromCharCode(29)); // translate as ASCII 29
                                    break;
                                case 30: // Upper Shift
                                    upperShift = true;
                                    break;
                                default:
                                    throw new FormatException_1.default();
                            }
                        }
                        shift = 0;
                        break;
                    case 3:
                        if (upperShift) {
                            result.append(String.fromCharCode(cValue + 224));
                            upperShift = false;
                        }
                        else {
                            result.append(String.fromCharCode(cValue + 96));
                        }
                        shift = 0;
                        break;
                    default:
                        throw new FormatException_1.default();
                }
            }
        } while (bits.available() > 0);
    };
    /**
     * See ISO 16022:2006, 5.2.6 and Annex C, Table C.2
     */
    DecodedBitStreamParser.decodeTextSegment = function (bits, result) {
        // Three Text values are encoded in a 16-bit value as
        // (1600 * C1) + (40 * C2) + C3 + 1
        // TODO(bbrown): The Upper Shift with Text doesn't work in the 4 value scenario all the time
        var upperShift = false;
        var cValues = [];
        var shift = 0;
        do {
            // If there is only one byte left then it will be encoded as ASCII
            if (bits.available() === 8) {
                return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) { // Unlatch codeword
                return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
                var cValue = cValues[i];
                switch (shift) {
                    case 0:
                        if (cValue < 3) {
                            shift = cValue + 1;
                        }
                        else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
                            var textChar = this.TEXT_BASIC_SET_CHARS[cValue];
                            if (upperShift) {
                                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                upperShift = false;
                            }
                            else {
                                result.append(textChar);
                            }
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    case 1:
                        if (upperShift) {
                            result.append(String.fromCharCode(cValue + 128));
                            upperShift = false;
                        }
                        else {
                            result.append(String.fromCharCode(cValue));
                        }
                        shift = 0;
                        break;
                    case 2:
                        // Shift 2 for Text is the same encoding as C40
                        if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
                            var textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
                            if (upperShift) {
                                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                upperShift = false;
                            }
                            else {
                                result.append(textChar);
                            }
                        }
                        else {
                            switch (cValue) {
                                case 27: // FNC1
                                    result.append(String.fromCharCode(29)); // translate as ASCII 29
                                    break;
                                case 30: // Upper Shift
                                    upperShift = true;
                                    break;
                                default:
                                    throw new FormatException_1.default();
                            }
                        }
                        shift = 0;
                        break;
                    case 3:
                        if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
                            var textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
                            if (upperShift) {
                                result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                upperShift = false;
                            }
                            else {
                                result.append(textChar);
                            }
                            shift = 0;
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    default:
                        throw new FormatException_1.default();
                }
            }
        } while (bits.available() > 0);
    };
    /**
     * See ISO 16022:2006, 5.2.7
     */
    DecodedBitStreamParser.decodeAnsiX12Segment = function (bits, result) {
        // Three ANSI X12 values are encoded in a 16-bit value as
        // (1600 * C1) + (40 * C2) + C3 + 1
        var cValues = [];
        do {
            // If there is only one byte left then it will be encoded as ASCII
            if (bits.available() === 8) {
                return;
            }
            var firstByte = bits.readBits(8);
            if (firstByte === 254) { // Unlatch codeword
                return;
            }
            this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
            for (var i = 0; i < 3; i++) {
                var cValue = cValues[i];
                switch (cValue) {
                    case 0: // X12 segment terminator <CR>
                        result.append('\r');
                        break;
                    case 1: // X12 segment separator *
                        result.append('*');
                        break;
                    case 2: // X12 sub-element separator >
                        result.append('>');
                        break;
                    case 3: // space
                        result.append(' ');
                        break;
                    default:
                        if (cValue < 14) { // 0 - 9
                            result.append(String.fromCharCode(cValue + 44));
                        }
                        else if (cValue < 40) { // A - Z
                            result.append(String.fromCharCode(cValue + 51));
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                }
            }
        } while (bits.available() > 0);
    };
    DecodedBitStreamParser.parseTwoBytes = function (firstByte, secondByte, result) {
        var fullBitValue = (firstByte << 8) + secondByte - 1;
        var temp = Math.floor(fullBitValue / 1600);
        result[0] = temp;
        fullBitValue -= temp * 1600;
        temp = Math.floor(fullBitValue / 40);
        result[1] = temp;
        result[2] = fullBitValue - temp * 40;
    };
    /**
     * See ISO 16022:2006, 5.2.8 and Annex C Table C.3
     */
    DecodedBitStreamParser.decodeEdifactSegment = function (bits, result) {
        do {
            // If there is only two or less bytes left then it will be encoded as ASCII
            if (bits.available() <= 16) {
                return;
            }
            for (var i = 0; i < 4; i++) {
                var edifactValue = bits.readBits(6);
                // Check for the unlatch character
                if (edifactValue === 0x1F) { // 011111
                    // Read rest of byte, which should be 0, and stop
                    var bitsLeft = 8 - bits.getBitOffset();
                    if (bitsLeft !== 8) {
                        bits.readBits(bitsLeft);
                    }
                    return;
                }
                if ((edifactValue & 0x20) === 0) { // no 1 in the leading (6th) bit
                    edifactValue |= 0x40; // Add a leading 01 to the 6 bit binary value
                }
                result.append(String.fromCharCode(edifactValue));
            }
        } while (bits.available() > 0);
    };
    /**
     * See ISO 16022:2006, 5.2.9 and Annex B, B.2
     */
    DecodedBitStreamParser.decodeBase256Segment = function (bits, result, byteSegments) {
        // Figure out how long the Base 256 Segment is.
        var codewordPosition = 1 + bits.getByteOffset(); // position is 1-indexed
        var d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
        var count;
        if (d1 === 0) { // Read the remainder of the symbol
            count = bits.available() / 8 | 0;
        }
        else if (d1 < 250) {
            count = d1;
        }
        else {
            count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
        }
        // We're seeing NegativeArraySizeException errors from users.
        if (count < 0) {
            throw new FormatException_1.default();
        }
        var bytes = new Uint8Array(count);
        for (var i = 0; i < count; i++) {
            // Have seen this particular error in the wild, such as at
            // http://www.bcgen.com/demo/IDAutomationStreamingDataMatrix.aspx?MODE=3&D=Fred&PFMT=3&PT=F&X=0.3&O=0&LM=0.2
            if (bits.available() < 8) {
                throw new FormatException_1.default();
            }
            bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
        }
        byteSegments.push(bytes);
        try {
            result.append(StringEncoding_1.default.decode(bytes, __1.StringUtils.ISO88591));
        }
        catch (uee) {
            throw new IllegalStateException_1.default('Platform does not support required encoding: ' + uee.message);
        }
    };
    /**
     * See ISO 16022:2006, Annex B, B.2
     */
    DecodedBitStreamParser.unrandomize255State = function (randomizedBase256Codeword, base256CodewordPosition) {
        var pseudoRandomNumber = ((149 * base256CodewordPosition) % 255) + 1;
        var tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
        return tempVariable >= 0 ? tempVariable : tempVariable + 256;
    };
    /**
     * See ISO 16022:2006, Annex C Table C.1
     * The C40 Basic Character Set (*'s used for placeholders for the shift values)
     */
    DecodedBitStreamParser.C40_BASIC_SET_CHARS = [
        '*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    DecodedBitStreamParser.C40_SHIFT2_SET_CHARS = [
        '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.',
        '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_'
    ];
    /**
     * See ISO 16022:2006, Annex C Table C.2
     * The Text Basic Character Set (*'s used for placeholders for the shift values)
     */
    DecodedBitStreamParser.TEXT_BASIC_SET_CHARS = [
        '*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    // Shift 2 for Text is the same encoding as C40
    DecodedBitStreamParser.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser.C40_SHIFT2_SET_CHARS;
    DecodedBitStreamParser.TEXT_SHIFT3_SET_CHARS = [
        '`', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '|', '}', '~', String.fromCharCode(127)
    ];
    return DecodedBitStreamParser;
}());
exports.default = DecodedBitStreamParser;


/***/ }),

/***/ "./src/core/datamatrix/decoder/Decoder.ts":
/*!************************************************!*\
  !*** ./src/core/datamatrix/decoder/Decoder.ts ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReedSolomonDecoder_1 = __webpack_require__(/*! ../../common/reedsolomon/ReedSolomonDecoder */ "./src/core/common/reedsolomon/ReedSolomonDecoder.ts");
var GenericGF_1 = __webpack_require__(/*! ../../common/reedsolomon/GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
var BitMatrixParser_1 = __webpack_require__(/*! ./BitMatrixParser */ "./src/core/datamatrix/decoder/BitMatrixParser.ts");
var DataBlock_1 = __webpack_require__(/*! ./DataBlock */ "./src/core/datamatrix/decoder/DataBlock.ts");
var DecodedBitStreamParser_1 = __webpack_require__(/*! ./DecodedBitStreamParser */ "./src/core/datamatrix/decoder/DecodedBitStreamParser.ts");
var ChecksumException_1 = __webpack_require__(/*! ../../ChecksumException */ "./src/core/ChecksumException.ts");
/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * <p>The main class which implements Data Matrix Code decoding -- as opposed to locating and extracting
 * the Data Matrix Code from an image.</p>
 *
 * @author bbrown@google.com (Brian Brown)
 */
var Decoder = /** @class */ (function () {
    function Decoder() {
        this.rsDecoder = new ReedSolomonDecoder_1.default(GenericGF_1.default.DATA_MATRIX_FIELD_256);
    }
    /**
     * <p>Decodes a Data Matrix Code represented as a {@link BitMatrix}. A 1 or "true" is taken
     * to mean a black module.</p>
     *
     * @param bits booleans representing white/black Data Matrix Code modules
     * @return text and bytes encoded within the Data Matrix Code
     * @throws FormatException if the Data Matrix Code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    Decoder.prototype.decode = function (bits) {
        // Construct a parser and read version, error-correction level
        var parser = new BitMatrixParser_1.default(bits);
        var version = parser.getVersion();
        // Read codewords
        var codewords = parser.readCodewords();
        // Separate into data blocks
        var dataBlocks = DataBlock_1.default.getDataBlocks(codewords, version);
        // Count total number of data bytes
        var totalBytes = 0;
        for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var db = dataBlocks_1[_i];
            totalBytes += db.getNumDataCodewords();
        }
        var resultBytes = new Uint8Array(totalBytes);
        var dataBlocksCount = dataBlocks.length;
        // Error-correct and copy data blocks together into a stream of bytes
        for (var j = 0; j < dataBlocksCount; j++) {
            var dataBlock = dataBlocks[j];
            var codewordBytes = dataBlock.getCodewords();
            var numDataCodewords = dataBlock.getNumDataCodewords();
            this.correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
                // De-interlace data blocks.
                resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
            }
        }
        // Decode the contents of that stream of bytes
        return DecodedBitStreamParser_1.default.decode(resultBytes);
    };
    /**
     * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
     * correct the errors in-place using Reed-Solomon error correction.</p>
     *
     * @param codewordBytes data and error correction codewords
     * @param numDataCodewords number of codewords that are data bytes
     * @throws ChecksumException if error correction fails
     */
    Decoder.prototype.correctErrors = function (codewordBytes, numDataCodewords) {
        var numCodewords = codewordBytes.length;
        // First read into an array of ints
        var codewordsInts = new Int32Array(codewordBytes);
        // for (let i = 0; i < numCodewords; i++) {
        //   codewordsInts[i] = codewordBytes[i] & 0xFF;
        // }
        try {
            this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
        }
        catch (ignored /* ReedSolomonException */) {
            throw new ChecksumException_1.default();
        }
        // Copy back into array of bytes -- only need to worry about the bytes that were data
        // We don't care about errors in the error-correction codewords
        for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = codewordsInts[i];
        }
    };
    return Decoder;
}());
exports.default = Decoder;


/***/ }),

/***/ "./src/core/datamatrix/decoder/Version.ts":
/*!************************************************!*\
  !*** ./src/core/datamatrix/decoder/Version.ts ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
 * use blocks of differing sizes within one version, so, this encapsulates the parameters for
 * each set of blocks. It also holds the number of error-correction codewords per block since it
 * will be the same across all blocks within one version.</p>
 */
var ECBlocks = /** @class */ (function () {
    function ECBlocks(ecCodewords, ecBlocks1, ecBlocks2) {
        this.ecCodewords = ecCodewords;
        this.ecBlocks = [ecBlocks1];
        ecBlocks2 && this.ecBlocks.push(ecBlocks2);
    }
    ECBlocks.prototype.getECCodewords = function () {
        return this.ecCodewords;
    };
    ECBlocks.prototype.getECBlocks = function () {
        return this.ecBlocks;
    };
    return ECBlocks;
}());
exports.ECBlocks = ECBlocks;
/**
 * <p>Encapsulates the parameters for one error-correction block in one symbol version.
 * This includes the number of data codewords, and the number of times a block with these
 * parameters is used consecutively in the Data Matrix code version's format.</p>
 */
var ECB = /** @class */ (function () {
    function ECB(count, dataCodewords) {
        this.count = count;
        this.dataCodewords = dataCodewords;
    }
    ECB.prototype.getCount = function () {
        return this.count;
    };
    ECB.prototype.getDataCodewords = function () {
        return this.dataCodewords;
    };
    return ECB;
}());
exports.ECB = ECB;
/**
 * The Version object encapsulates attributes about a particular
 * size Data Matrix Code.
 *
 * @author bbrown@google.com (Brian Brown)
 */
var Version = /** @class */ (function () {
    function Version(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
        this.versionNumber = versionNumber;
        this.symbolSizeRows = symbolSizeRows;
        this.symbolSizeColumns = symbolSizeColumns;
        this.dataRegionSizeRows = dataRegionSizeRows;
        this.dataRegionSizeColumns = dataRegionSizeColumns;
        this.ecBlocks = ecBlocks;
        // Calculate the total number of codewords
        var total = 0;
        var ecCodewords = ecBlocks.getECCodewords();
        var ecbArray = ecBlocks.getECBlocks();
        for (var _i = 0, ecbArray_1 = ecbArray; _i < ecbArray_1.length; _i++) {
            var ecBlock = ecbArray_1[_i];
            total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
        }
        this.totalCodewords = total;
    }
    Version.prototype.getVersionNumber = function () {
        return this.versionNumber;
    };
    Version.prototype.getSymbolSizeRows = function () {
        return this.symbolSizeRows;
    };
    Version.prototype.getSymbolSizeColumns = function () {
        return this.symbolSizeColumns;
    };
    Version.prototype.getDataRegionSizeRows = function () {
        return this.dataRegionSizeRows;
    };
    Version.prototype.getDataRegionSizeColumns = function () {
        return this.dataRegionSizeColumns;
    };
    Version.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
    };
    Version.prototype.getECBlocks = function () {
        return this.ecBlocks;
    };
    /**
     * <p>Deduces version information from Data Matrix dimensions.</p>
     *
     * @param numRows Number of rows in modules
     * @param numColumns Number of columns in modules
     * @return Version for a Data Matrix Code of those dimensions
     * @throws FormatException if dimensions do correspond to a valid Data Matrix size
     */
    Version.getVersionForDimensions = function (numRows, numColumns) {
        if ((numRows & 0x01) !== 0 || (numColumns & 0x01) !== 0) {
            throw new FormatException_1.default();
        }
        for (var _i = 0, _a = Version.VERSIONS; _i < _a.length; _i++) {
            var version = _a[_i];
            if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
                return version;
            }
        }
        throw new FormatException_1.default();
    };
    //  @Override
    Version.prototype.toString = function () {
        return '' + this.versionNumber;
    };
    /**
     * See ISO 16022:2006 5.5.1 Table 7
     */
    Version.buildVersions = function () {
        return [
            new Version(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))),
            new Version(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))),
            new Version(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))),
            new Version(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))),
            new Version(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))),
            new Version(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))),
            new Version(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))),
            new Version(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))),
            new Version(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))),
            new Version(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))),
            new Version(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))),
            new Version(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))),
            new Version(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))),
            new Version(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))),
            new Version(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))),
            new Version(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))),
            new Version(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))),
            new Version(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))),
            new Version(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))),
            new Version(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))),
            new Version(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))),
            new Version(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))),
            new Version(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))),
            new Version(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))),
            new Version(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))),
            new Version(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))),
            new Version(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))),
            new Version(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))),
            new Version(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))),
            new Version(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))
        ];
    };
    Version.VERSIONS = Version.buildVersions();
    return Version;
}());
exports.default = Version;


/***/ }),

/***/ "./src/core/datamatrix/detector/Detector.ts":
/*!**************************************************!*\
  !*** ./src/core/datamatrix/detector/Detector.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var DetectorResult_1 = __webpack_require__(/*! ../../common/DetectorResult */ "./src/core/common/DetectorResult.ts");
var GridSamplerInstance_1 = __webpack_require__(/*! ../../common/GridSamplerInstance */ "./src/core/common/GridSamplerInstance.ts");
var MathUtils_1 = __webpack_require__(/*! ../../common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
var WhiteRectangleDetector_1 = __webpack_require__(/*! ../../common/detector/WhiteRectangleDetector */ "./src/core/common/detector/WhiteRectangleDetector.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * <p>Encapsulates logic that can detect a Data Matrix Code in an image, even if the Data Matrix Code
 * is rotated or skewed, or partially obscured.</p>
 *
 * @author Sean Owen
 */
var Detector = /** @class */ (function () {
    function Detector(image) {
        this.image = image;
        this.rectangleDetector = new WhiteRectangleDetector_1.default(image);
    }
    /**
     * <p>Detects a Data Matrix Code in an image.</p>
     *
     * @return {@link DetectorResult} encapsulating results of detecting a Data Matrix Code
     * @throws NotFoundException if no Data Matrix Code can be found
     */
    Detector.prototype.detect = function () {
        var cornerPoints = this.rectangleDetector.detect();
        var pointA = cornerPoints[0];
        var pointB = cornerPoints[1];
        var pointC = cornerPoints[2];
        var pointD = cornerPoints[3];
        // Point A and D are across the diagonal from one another,
        // as are B and C. Figure out which are the solid black lines
        // by counting transitions
        var transitions = [];
        transitions.push(this.transitionsBetween(pointA, pointB));
        transitions.push(this.transitionsBetween(pointA, pointC));
        transitions.push(this.transitionsBetween(pointB, pointD));
        transitions.push(this.transitionsBetween(pointC, pointD));
        transitions.sort(ResultPointsAndTransitions.resultPointsAndTransitionsComparator);
        // Sort by number of transitions. First two will be the two solid sides; last two
        // will be the two alternating black/white sides
        var lSideOne = transitions[0];
        var lSideTwo = transitions[1];
        // Figure out which point is their intersection by tallying up the number of times we see the
        // endpoints in the four endpoints. One will show up twice.
        var pointCount = new Map();
        Detector.increment(pointCount, lSideOne.getFrom());
        Detector.increment(pointCount, lSideOne.getTo());
        Detector.increment(pointCount, lSideTwo.getFrom());
        Detector.increment(pointCount, lSideTwo.getTo());
        var maybeTopLeft = null;
        var bottomLeft = null;
        var maybeBottomRight = null;
        for (var _i = 0, _a = Array.from(pointCount.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], point = _b[0], value = _b[1];
            if (value === 2) {
                bottomLeft = point; // this is definitely the bottom left, then -- end of two L sides
            }
            else {
                // Otherwise it's either top left or bottom right -- just assign the two arbitrarily now
                if (maybeTopLeft == null) {
                    maybeTopLeft = point;
                }
                else {
                    maybeBottomRight = point;
                }
            }
        }
        if (maybeTopLeft == null || bottomLeft == null || maybeBottomRight == null) {
            throw new NotFoundException_1.default();
        }
        // Bottom left is correct but top left and bottom right might be switched
        var corners = [maybeTopLeft, bottomLeft, maybeBottomRight];
        // Use the dot product trick to sort them out
        ResultPoint_1.default.orderBestPatterns(corners);
        // Now we know which is which:
        var bottomRight = corners[0];
        bottomLeft = corners[1];
        var topLeft = corners[2];
        // Which point didn't we find in relation to the "L" sides? that's the top right corner
        var topRight;
        if (!pointCount.has(pointA)) {
            topRight = pointA;
        }
        else if (!pointCount.has(pointB)) {
            topRight = pointB;
        }
        else if (!pointCount.has(pointC)) {
            topRight = pointC;
        }
        else {
            topRight = pointD;
        }
        // Next determine the dimension by tracing along the top or right side and counting black/white
        // transitions. Since we start inside a black module, we should see a number of transitions
        // equal to 1 less than the code dimension. Well, actually 2 less, because we are going to
        // end on a black module:
        // The top right point is actually the corner of a module, which is one of the two black modules
        // adjacent to the white module at the top right. Tracing to that corner from either the top left
        // or bottom right should work here.
        var dimensionTop = this.transitionsBetween(topLeft, topRight).getTransitions();
        var dimensionRight = this.transitionsBetween(bottomRight, topRight).getTransitions();
        if ((dimensionTop & 0x01) === 1) {
            // it can't be odd, so, round... up?
            dimensionTop++;
        }
        dimensionTop += 2;
        if ((dimensionRight & 0x01) === 1) {
            // it can't be odd, so, round... up?
            dimensionRight++;
        }
        dimensionRight += 2;
        var bits;
        var correctedTopRight;
        // Rectangular symbols are 6x16, 6x28, 10x24, 10x32, 14x32, or 14x44. If one dimension is more
        // than twice the other, it's certainly rectangular, but to cut a bit more slack we accept it as
        // rectangular if the bigger side is at least 7/4 times the other:
        if (4 * dimensionTop >= 7 * dimensionRight || 4 * dimensionRight >= 7 * dimensionTop) {
            // The matrix is rectangular
            correctedTopRight =
                this.correctTopRightRectangular(bottomLeft, bottomRight, topLeft, topRight, dimensionTop, dimensionRight);
            if (correctedTopRight == null) {
                correctedTopRight = topRight;
            }
            dimensionTop = this.transitionsBetween(topLeft, correctedTopRight).getTransitions();
            dimensionRight = this.transitionsBetween(bottomRight, correctedTopRight).getTransitions();
            if ((dimensionTop & 0x01) === 1) {
                // it can't be odd, so, round... up?
                dimensionTop++;
            }
            if ((dimensionRight & 0x01) === 1) {
                // it can't be odd, so, round... up?
                dimensionRight++;
            }
            bits = Detector.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, correctedTopRight, dimensionTop, dimensionRight);
        }
        else {
            // The matrix is square
            var dimension = Math.min(dimensionRight, dimensionTop);
            // correct top right point to match the white module
            correctedTopRight = this.correctTopRight(bottomLeft, bottomRight, topLeft, topRight, dimension);
            if (correctedTopRight == null) {
                correctedTopRight = topRight;
            }
            // Redetermine the dimension using the corrected top right point
            var dimensionCorrected = Math.max(this.transitionsBetween(topLeft, correctedTopRight).getTransitions(), this.transitionsBetween(bottomRight, correctedTopRight).getTransitions());
            dimensionCorrected++;
            if ((dimensionCorrected & 0x01) === 1) {
                dimensionCorrected++;
            }
            bits = Detector.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, correctedTopRight, dimensionCorrected, dimensionCorrected);
        }
        return new DetectorResult_1.default(bits, [topLeft, bottomLeft, bottomRight, correctedTopRight]);
    };
    /**
     * Calculates the position of the white top right module using the output of the rectangle detector
     * for a rectangular matrix
     */
    Detector.prototype.correctTopRightRectangular = function (bottomLeft, bottomRight, topLeft, topRight, dimensionTop, dimensionRight) {
        var corr = Detector.distance(bottomLeft, bottomRight) / dimensionTop;
        var norm = Detector.distance(topLeft, topRight);
        var cos = (topRight.getX() - topLeft.getX()) / norm;
        var sin = (topRight.getY() - topLeft.getY()) / norm;
        var c1 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
        corr = Detector.distance(bottomLeft, topLeft) / dimensionRight;
        norm = Detector.distance(bottomRight, topRight);
        cos = (topRight.getX() - bottomRight.getX()) / norm;
        sin = (topRight.getY() - bottomRight.getY()) / norm;
        var c2 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
        if (!this.isValid(c1)) {
            if (this.isValid(c2)) {
                return c2;
            }
            return null;
        }
        if (!this.isValid(c2)) {
            return c1;
        }
        var l1 = Math.abs(dimensionTop - this.transitionsBetween(topLeft, c1).getTransitions()) +
            Math.abs(dimensionRight - this.transitionsBetween(bottomRight, c1).getTransitions());
        var l2 = Math.abs(dimensionTop - this.transitionsBetween(topLeft, c2).getTransitions()) +
            Math.abs(dimensionRight - this.transitionsBetween(bottomRight, c2).getTransitions());
        if (l1 <= l2) {
            return c1;
        }
        return c2;
    };
    /**
     * Calculates the position of the white top right module using the output of the rectangle detector
     * for a square matrix
     */
    Detector.prototype.correctTopRight = function (bottomLeft, bottomRight, topLeft, topRight, dimension) {
        var corr = Detector.distance(bottomLeft, bottomRight) / dimension;
        var norm = Detector.distance(topLeft, topRight);
        var cos = (topRight.getX() - topLeft.getX()) / norm;
        var sin = (topRight.getY() - topLeft.getY()) / norm;
        var c1 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
        corr = Detector.distance(bottomLeft, topLeft) / dimension;
        norm = Detector.distance(bottomRight, topRight);
        cos = (topRight.getX() - bottomRight.getX()) / norm;
        sin = (topRight.getY() - bottomRight.getY()) / norm;
        var c2 = new ResultPoint_1.default(topRight.getX() + corr * cos, topRight.getY() + corr * sin);
        if (!this.isValid(c1)) {
            if (this.isValid(c2)) {
                return c2;
            }
            return null;
        }
        if (!this.isValid(c2)) {
            return c1;
        }
        var l1 = Math.abs(this.transitionsBetween(topLeft, c1).getTransitions() -
            this.transitionsBetween(bottomRight, c1).getTransitions());
        var l2 = Math.abs(this.transitionsBetween(topLeft, c2).getTransitions() -
            this.transitionsBetween(bottomRight, c2).getTransitions());
        return l1 <= l2 ? c1 : c2;
    };
    Detector.prototype.isValid = function (p) {
        return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
    };
    Detector.distance = function (a, b) {
        return MathUtils_1.default.round(ResultPoint_1.default.distance(a, b));
    };
    /**
     * Increments the Integer associated with a key by one.
     */
    Detector.increment = function (table, key) {
        var value = table.get(key);
        table.set(key, value == null ? 1 : value + 1);
    };
    Detector.sampleGrid = function (image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
        var sampler = GridSamplerInstance_1.default.getInstance();
        return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
    };
    /**
     * Counts the number of black/white transitions between two points, using something like Bresenham's algorithm.
     */
    Detector.prototype.transitionsBetween = function (from, to) {
        // See QR Code Detector, sizeOfBlackWhiteBlackRun()
        var fromX = from.getX() | 0;
        var fromY = from.getY() | 0;
        var toX = to.getX() | 0;
        var toY = to.getY() | 0;
        var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
        if (steep) {
            var temp = fromX;
            fromX = fromY;
            fromY = temp;
            temp = toX;
            toX = toY;
            toY = temp;
        }
        var dx = Math.abs(toX - fromX);
        var dy = Math.abs(toY - fromY);
        var error = -dx / 2;
        var ystep = fromY < toY ? 1 : -1;
        var xstep = fromX < toX ? 1 : -1;
        var transitions = 0;
        var inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
        for (var x = fromX, y = fromY; x !== toX; x += xstep) {
            var isBlack = this.image.get(steep ? y : x, steep ? x : y);
            if (isBlack !== inBlack) {
                transitions++;
                inBlack = isBlack;
            }
            error += dy;
            if (error > 0) {
                if (y === toY) {
                    break;
                }
                y += ystep;
                error -= dx;
            }
        }
        return new ResultPointsAndTransitions(from, to, transitions);
    };
    return Detector;
}());
exports.default = Detector;
var ResultPointsAndTransitions = /** @class */ (function () {
    function ResultPointsAndTransitions(from, to, transitions) {
        this.from = from;
        this.to = to;
        this.transitions = transitions;
    }
    ResultPointsAndTransitions.prototype.getFrom = function () {
        return this.from;
    };
    ResultPointsAndTransitions.prototype.getTo = function () {
        return this.to;
    };
    ResultPointsAndTransitions.prototype.getTransitions = function () {
        return this.transitions;
    };
    // @Override
    ResultPointsAndTransitions.prototype.toString = function () {
        return this.from + '/' + this.to + '/' + this.transitions;
    };
    ResultPointsAndTransitions.resultPointsAndTransitionsComparator = function (o1, o2) {
        return o1.getTransitions() - o2.getTransitions();
    };
    return ResultPointsAndTransitions;
}());


/***/ }),

/***/ "./src/core/oned/Code128Reader.ts":
/*!****************************************!*\
  !*** ./src/core/oned/Code128Reader.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.oned {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
var FormatException_1 = __webpack_require__(/*! ../FormatException */ "./src/core/FormatException.ts");
var ChecksumException_1 = __webpack_require__(/*! ../ChecksumException */ "./src/core/ChecksumException.ts");
/**
 * <p>Decodes Code 128 barcodes.</p>
 *
 * @author Sean Owen
 */
var Code128Reader = /** @class */ (function (_super) {
    __extends(Code128Reader, _super);
    function Code128Reader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code128Reader.findStartPattern = function (row) {
        var width = row.getSize();
        var rowOffset = row.getNextSet(0);
        var counterPosition = 0;
        var counters = [0, 0, 0, 0, 0, 0];
        var patternStart = rowOffset;
        var isWhite = false;
        var patternLength = 6;
        for (var i = rowOffset; i < width; i++) {
            if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (counterPosition === (patternLength - 1)) {
                    var bestVariance = Code128Reader.MAX_AVG_VARIANCE;
                    var bestMatch = -1;
                    for (var startCode = Code128Reader.CODE_START_A; startCode <= Code128Reader.CODE_START_C; startCode++) {
                        var variance = OneDReader_1.default.patternMatchVariance(counters, Code128Reader.CODE_PATTERNS[startCode], Code128Reader.MAX_INDIVIDUAL_VARIANCE);
                        if (variance < bestVariance) {
                            bestVariance = variance;
                            bestMatch = startCode;
                        }
                    }
                    // Look for whitespace before start pattern, >= 50% of width of start pattern
                    if (bestMatch >= 0 &&
                        row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
                        return [patternStart, i, bestMatch];
                    }
                    patternStart += counters[0] + counters[1];
                    counters.splice(0, 2);
                    counters[counterPosition - 1] = 0;
                    counters[counterPosition] = 0;
                    counterPosition--;
                }
                else {
                    counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
            }
        }
        throw new NotFoundException_1.default();
    };
    Code128Reader.decodeCode = function (row, counters, rowOffset) {
        OneDReader_1.default.recordPattern(row, rowOffset, counters);
        var bestVariance = Code128Reader.MAX_AVG_VARIANCE; // worst variance we'll accept
        var bestMatch = -1;
        for (var d = 0; d < Code128Reader.CODE_PATTERNS.length; d++) {
            var pattern = Code128Reader.CODE_PATTERNS[d];
            var variance = this.patternMatchVariance(counters, pattern, Code128Reader.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = d;
            }
        }
        // TODO We're overlooking the fact that the STOP pattern has 7 values, not 6.
        if (bestMatch >= 0) {
            return bestMatch;
        }
        else {
            throw new NotFoundException_1.default();
        }
    };
    Code128Reader.prototype.decodeRow = function (rowNumber, row, hints) {
        var convertFNC1 = hints && (hints.get(DecodeHintType_1.default.ASSUME_GS1) === true);
        var startPatternInfo = Code128Reader.findStartPattern(row);
        var startCode = startPatternInfo[2];
        var currentRawCodesIndex = 0;
        var rawCodes = new Uint8Array(20);
        rawCodes[currentRawCodesIndex++] = startCode;
        var codeSet;
        switch (startCode) {
            case Code128Reader.CODE_START_A:
                codeSet = Code128Reader.CODE_CODE_A;
                break;
            case Code128Reader.CODE_START_B:
                codeSet = Code128Reader.CODE_CODE_B;
                break;
            case Code128Reader.CODE_START_C:
                codeSet = Code128Reader.CODE_CODE_C;
                break;
            default:
                throw new FormatException_1.default();
        }
        var done = false;
        var isNextShifted = false;
        var result = '';
        var lastStart = startPatternInfo[0];
        var nextStart = startPatternInfo[1];
        var counters = [0, 0, 0, 0, 0, 0];
        var lastCode = 0;
        var code = 0;
        var checksumTotal = startCode;
        var multiplier = 0;
        var lastCharacterWasPrintable = true;
        var upperMode = false;
        var shiftUpperMode = false;
        while (!done) {
            var unshift = isNextShifted;
            isNextShifted = false;
            // Save off last code
            lastCode = code;
            // Decode another code from image
            code = Code128Reader.decodeCode(row, counters, nextStart);
            rawCodes[currentRawCodesIndex++] = code;
            // Remember whether the last code was printable or not (excluding CODE_STOP)
            if (code !== Code128Reader.CODE_STOP) {
                lastCharacterWasPrintable = true;
            }
            // Add to checksum computation (if not CODE_STOP of course)
            if (code !== Code128Reader.CODE_STOP) {
                multiplier++;
                checksumTotal += multiplier * code;
            }
            // Advance to where the next code will to start
            lastStart = nextStart;
            nextStart += counters.reduce(function (previous, current) { return previous + current; }, 0);
            // Take care of illegal start codes
            switch (code) {
                case Code128Reader.CODE_START_A:
                case Code128Reader.CODE_START_B:
                case Code128Reader.CODE_START_C:
                    throw new FormatException_1.default();
            }
            switch (codeSet) {
                case Code128Reader.CODE_CODE_A:
                    if (code < 64) {
                        if (shiftUpperMode === upperMode) {
                            result += String.fromCharCode((' '.charCodeAt(0) + code));
                        }
                        else {
                            result += String.fromCharCode((' '.charCodeAt(0) + code + 128));
                        }
                        shiftUpperMode = false;
                    }
                    else if (code < 96) {
                        if (shiftUpperMode === upperMode) {
                            result += String.fromCharCode((code - 64));
                        }
                        else {
                            result += String.fromCharCode((code + 64));
                        }
                        shiftUpperMode = false;
                    }
                    else {
                        // Don't let CODE_STOP, which always appears, affect whether whether we think the last
                        // code was printable or not.
                        if (code !== Code128Reader.CODE_STOP) {
                            lastCharacterWasPrintable = false;
                        }
                        switch (code) {
                            case Code128Reader.CODE_FNC_1:
                                if (convertFNC1) {
                                    if (result.length === 0) {
                                        // GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
                                        // is FNC1 then this is GS1-128. We add the symbology identifier.
                                        result += ']C1';
                                    }
                                    else {
                                        // GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
                                        result += String.fromCharCode(29);
                                    }
                                }
                                break;
                            case Code128Reader.CODE_FNC_2:
                            case Code128Reader.CODE_FNC_3:
                                // do nothing?
                                break;
                            case Code128Reader.CODE_FNC_4_A:
                                if (!upperMode && shiftUpperMode) {
                                    upperMode = true;
                                    shiftUpperMode = false;
                                }
                                else if (upperMode && shiftUpperMode) {
                                    upperMode = false;
                                    shiftUpperMode = false;
                                }
                                else {
                                    shiftUpperMode = true;
                                }
                                break;
                            case Code128Reader.CODE_SHIFT:
                                isNextShifted = true;
                                codeSet = Code128Reader.CODE_CODE_B;
                                break;
                            case Code128Reader.CODE_CODE_B:
                                codeSet = Code128Reader.CODE_CODE_B;
                                break;
                            case Code128Reader.CODE_CODE_C:
                                codeSet = Code128Reader.CODE_CODE_C;
                                break;
                            case Code128Reader.CODE_STOP:
                                done = true;
                                break;
                        }
                    }
                    break;
                case Code128Reader.CODE_CODE_B:
                    if (code < 96) {
                        if (shiftUpperMode === upperMode) {
                            result += String.fromCharCode((' '.charCodeAt(0) + code));
                        }
                        else {
                            result += String.fromCharCode((' '.charCodeAt(0) + code + 128));
                        }
                        shiftUpperMode = false;
                    }
                    else {
                        if (code !== Code128Reader.CODE_STOP) {
                            lastCharacterWasPrintable = false;
                        }
                        switch (code) {
                            case Code128Reader.CODE_FNC_1:
                                if (convertFNC1) {
                                    if (result.length === 0) {
                                        // GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
                                        // is FNC1 then this is GS1-128. We add the symbology identifier.
                                        result += ']C1';
                                    }
                                    else {
                                        // GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
                                        result += String.fromCharCode(29);
                                    }
                                }
                                break;
                            case Code128Reader.CODE_FNC_2:
                            case Code128Reader.CODE_FNC_3:
                                // do nothing?
                                break;
                            case Code128Reader.CODE_FNC_4_B:
                                if (!upperMode && shiftUpperMode) {
                                    upperMode = true;
                                    shiftUpperMode = false;
                                }
                                else if (upperMode && shiftUpperMode) {
                                    upperMode = false;
                                    shiftUpperMode = false;
                                }
                                else {
                                    shiftUpperMode = true;
                                }
                                break;
                            case Code128Reader.CODE_SHIFT:
                                isNextShifted = true;
                                codeSet = Code128Reader.CODE_CODE_A;
                                break;
                            case Code128Reader.CODE_CODE_A:
                                codeSet = Code128Reader.CODE_CODE_A;
                                break;
                            case Code128Reader.CODE_CODE_C:
                                codeSet = Code128Reader.CODE_CODE_C;
                                break;
                            case Code128Reader.CODE_STOP:
                                done = true;
                                break;
                        }
                    }
                    break;
                case Code128Reader.CODE_CODE_C:
                    if (code < 100) {
                        if (code < 10) {
                            result += '0';
                        }
                        result += code;
                    }
                    else {
                        if (code !== Code128Reader.CODE_STOP) {
                            lastCharacterWasPrintable = false;
                        }
                        switch (code) {
                            case Code128Reader.CODE_FNC_1:
                                if (convertFNC1) {
                                    if (result.length === 0) {
                                        // GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
                                        // is FNC1 then this is GS1-128. We add the symbology identifier.
                                        result += ']C1';
                                    }
                                    else {
                                        // GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
                                        result += String.fromCharCode(29);
                                    }
                                }
                                break;
                            case Code128Reader.CODE_CODE_A:
                                codeSet = Code128Reader.CODE_CODE_A;
                                break;
                            case Code128Reader.CODE_CODE_B:
                                codeSet = Code128Reader.CODE_CODE_B;
                                break;
                            case Code128Reader.CODE_STOP:
                                done = true;
                                break;
                        }
                    }
                    break;
            }
            // Unshift back to another code set if we were shifted
            if (unshift) {
                codeSet = codeSet === Code128Reader.CODE_CODE_A ? Code128Reader.CODE_CODE_B : Code128Reader.CODE_CODE_A;
            }
        }
        var lastPatternSize = nextStart - lastStart;
        // Check for ample whitespace following pattern, but, to do this we first need to remember that
        // we fudged decoding CODE_STOP since it actually has 7 bars, not 6. There is a black bar left
        // to read off. Would be slightly better to properly read. Here we just skip it:
        nextStart = row.getNextUnset(nextStart);
        if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
            throw new NotFoundException_1.default();
        }
        // Pull out from sum the value of the penultimate check code
        checksumTotal -= multiplier * lastCode;
        // lastCode is the checksum then:
        if (checksumTotal % 103 !== lastCode) {
            throw new ChecksumException_1.default();
        }
        // Need to pull out the check digits from string
        var resultLength = result.length;
        if (resultLength === 0) {
            // false positive
            throw new NotFoundException_1.default();
        }
        // Only bother if the result had at least one character, and if the checksum digit happened to
        // be a printable character. If it was just interpreted as a control code, nothing to remove.
        if (resultLength > 0 && lastCharacterWasPrintable) {
            if (codeSet === Code128Reader.CODE_CODE_C) {
                result = result.substring(0, resultLength - 2);
            }
            else {
                result = result.substring(0, resultLength - 1);
            }
        }
        var left = (startPatternInfo[1] + startPatternInfo[0]) / 2.0;
        var right = lastStart + lastPatternSize / 2.0;
        var rawCodesSize = rawCodes.length;
        var rawBytes = new Uint8Array(rawCodesSize);
        for (var i = 0; i < rawCodesSize; i++) {
            rawBytes[i] = rawCodes[i];
        }
        var points = [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)];
        return new Result_1.default(result, rawBytes, 0, points, BarcodeFormat_1.default.CODE_128, new Date().getTime());
    };
    Code128Reader.CODE_PATTERNS = [
        [2, 1, 2, 2, 2, 2],
        [2, 2, 2, 1, 2, 2],
        [2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 2, 3],
        [1, 2, 1, 3, 2, 2],
        [1, 3, 1, 2, 2, 2],
        [1, 2, 2, 2, 1, 3],
        [1, 2, 2, 3, 1, 2],
        [1, 3, 2, 2, 1, 2],
        [2, 2, 1, 2, 1, 3],
        [2, 2, 1, 3, 1, 2],
        [2, 3, 1, 2, 1, 2],
        [1, 1, 2, 2, 3, 2],
        [1, 2, 2, 1, 3, 2],
        [1, 2, 2, 2, 3, 1],
        [1, 1, 3, 2, 2, 2],
        [1, 2, 3, 1, 2, 2],
        [1, 2, 3, 2, 2, 1],
        [2, 2, 3, 2, 1, 1],
        [2, 2, 1, 1, 3, 2],
        [2, 2, 1, 2, 3, 1],
        [2, 1, 3, 2, 1, 2],
        [2, 2, 3, 1, 1, 2],
        [3, 1, 2, 1, 3, 1],
        [3, 1, 1, 2, 2, 2],
        [3, 2, 1, 1, 2, 2],
        [3, 2, 1, 2, 2, 1],
        [3, 1, 2, 2, 1, 2],
        [3, 2, 2, 1, 1, 2],
        [3, 2, 2, 2, 1, 1],
        [2, 1, 2, 1, 2, 3],
        [2, 1, 2, 3, 2, 1],
        [2, 3, 2, 1, 2, 1],
        [1, 1, 1, 3, 2, 3],
        [1, 3, 1, 1, 2, 3],
        [1, 3, 1, 3, 2, 1],
        [1, 1, 2, 3, 1, 3],
        [1, 3, 2, 1, 1, 3],
        [1, 3, 2, 3, 1, 1],
        [2, 1, 1, 3, 1, 3],
        [2, 3, 1, 1, 1, 3],
        [2, 3, 1, 3, 1, 1],
        [1, 1, 2, 1, 3, 3],
        [1, 1, 2, 3, 3, 1],
        [1, 3, 2, 1, 3, 1],
        [1, 1, 3, 1, 2, 3],
        [1, 1, 3, 3, 2, 1],
        [1, 3, 3, 1, 2, 1],
        [3, 1, 3, 1, 2, 1],
        [2, 1, 1, 3, 3, 1],
        [2, 3, 1, 1, 3, 1],
        [2, 1, 3, 1, 1, 3],
        [2, 1, 3, 3, 1, 1],
        [2, 1, 3, 1, 3, 1],
        [3, 1, 1, 1, 2, 3],
        [3, 1, 1, 3, 2, 1],
        [3, 3, 1, 1, 2, 1],
        [3, 1, 2, 1, 1, 3],
        [3, 1, 2, 3, 1, 1],
        [3, 3, 2, 1, 1, 1],
        [3, 1, 4, 1, 1, 1],
        [2, 2, 1, 4, 1, 1],
        [4, 3, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 4],
        [1, 1, 1, 4, 2, 2],
        [1, 2, 1, 1, 2, 4],
        [1, 2, 1, 4, 2, 1],
        [1, 4, 1, 1, 2, 2],
        [1, 4, 1, 2, 2, 1],
        [1, 1, 2, 2, 1, 4],
        [1, 1, 2, 4, 1, 2],
        [1, 2, 2, 1, 1, 4],
        [1, 2, 2, 4, 1, 1],
        [1, 4, 2, 1, 1, 2],
        [1, 4, 2, 2, 1, 1],
        [2, 4, 1, 2, 1, 1],
        [2, 2, 1, 1, 1, 4],
        [4, 1, 3, 1, 1, 1],
        [2, 4, 1, 1, 1, 2],
        [1, 3, 4, 1, 1, 1],
        [1, 1, 1, 2, 4, 2],
        [1, 2, 1, 1, 4, 2],
        [1, 2, 1, 2, 4, 1],
        [1, 1, 4, 2, 1, 2],
        [1, 2, 4, 1, 1, 2],
        [1, 2, 4, 2, 1, 1],
        [4, 1, 1, 2, 1, 2],
        [4, 2, 1, 1, 1, 2],
        [4, 2, 1, 2, 1, 1],
        [2, 1, 2, 1, 4, 1],
        [2, 1, 4, 1, 2, 1],
        [4, 1, 2, 1, 2, 1],
        [1, 1, 1, 1, 4, 3],
        [1, 1, 1, 3, 4, 1],
        [1, 3, 1, 1, 4, 1],
        [1, 1, 4, 1, 1, 3],
        [1, 1, 4, 3, 1, 1],
        [4, 1, 1, 1, 1, 3],
        [4, 1, 1, 3, 1, 1],
        [1, 1, 3, 1, 4, 1],
        [1, 1, 4, 1, 3, 1],
        [3, 1, 1, 1, 4, 1],
        [4, 1, 1, 1, 3, 1],
        [2, 1, 1, 4, 1, 2],
        [2, 1, 1, 2, 1, 4],
        [2, 1, 1, 2, 3, 2],
        [2, 3, 3, 1, 1, 1, 2]
    ];
    Code128Reader.MAX_AVG_VARIANCE = 0.25;
    Code128Reader.MAX_INDIVIDUAL_VARIANCE = 0.7;
    Code128Reader.CODE_SHIFT = 98;
    Code128Reader.CODE_CODE_C = 99;
    Code128Reader.CODE_CODE_B = 100;
    Code128Reader.CODE_CODE_A = 101;
    Code128Reader.CODE_FNC_1 = 102;
    Code128Reader.CODE_FNC_2 = 97;
    Code128Reader.CODE_FNC_3 = 96;
    Code128Reader.CODE_FNC_4_A = 101;
    Code128Reader.CODE_FNC_4_B = 100;
    Code128Reader.CODE_START_A = 103;
    Code128Reader.CODE_START_B = 104;
    Code128Reader.CODE_START_C = 105;
    Code128Reader.CODE_STOP = 106;
    return Code128Reader;
}(OneDReader_1.default));
exports.default = Code128Reader;


/***/ }),

/***/ "./src/core/oned/Code39Reader.ts":
/*!***************************************!*\
  !*** ./src/core/oned/Code39Reader.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.oned {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var ChecksumException_1 = __webpack_require__(/*! ../ChecksumException */ "./src/core/ChecksumException.ts");
var FormatException_1 = __webpack_require__(/*! ../FormatException */ "./src/core/FormatException.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
/**
 * <p>Decodes Code 39 barcodes. Supports "Full ASCII Code 39" if USE_CODE_39_EXTENDED_MODE is set.</p>
 *
 * @author Sean Owen
 * @see Code93Reader
 */
var Code39Reader = /** @class */ (function (_super) {
    __extends(Code39Reader, _super);
    /**
     * Creates a reader that assumes all encoded data is data, and does not treat the final
     * character as a check digit. It will not decoded "extended Code 39" sequences.
     */
    // public Code39Reader() {
    //   this(false);
    // }
    /**
     * Creates a reader that can be configured to check the last character as a check digit.
     * It will not decoded "extended Code 39" sequences.
     *
     * @param usingCheckDigit if true, treat the last data character as a check digit, not
     * data, and verify that the checksum passes.
     */
    // public Code39Reader(boolean usingCheckDigit) {
    //   this(usingCheckDigit, false);
    // }
    /**
     * Creates a reader that can be configured to check the last character as a check digit,
     * or optionally attempt to decode "extended Code 39" sequences that are used to encode
     * the full ASCII character set.
     *
     * @param usingCheckDigit if true, treat the last data character as a check digit, not
     * data, and verify that the checksum passes.
     * @param extendedMode if true, will attempt to decode extended Code 39 sequences in the
     * text.
     */
    function Code39Reader(usingCheckDigit, extendedMode) {
        if (usingCheckDigit === void 0) { usingCheckDigit = false; }
        if (extendedMode === void 0) { extendedMode = false; }
        var _this = _super.call(this) || this;
        _this.usingCheckDigit = usingCheckDigit;
        _this.extendedMode = extendedMode;
        _this.decodeRowResult = '';
        _this.counters = new Array(9);
        return _this;
    }
    Code39Reader.prototype.decodeRow = function (rowNumber, row, hints) {
        var theCounters = this.counters;
        theCounters.fill(0);
        this.decodeRowResult = '';
        var start = Code39Reader.findAsteriskPattern(row, theCounters);
        // Read off white space
        var nextStart = row.getNextSet(start[1]);
        var end = row.getSize();
        var decodedChar;
        var lastStart;
        do {
            Code39Reader.recordPattern(row, nextStart, theCounters);
            var pattern = Code39Reader.toNarrowWidePattern(theCounters);
            if (pattern < 0) {
                throw new NotFoundException_1.default();
            }
            decodedChar = Code39Reader.patternToChar(pattern);
            this.decodeRowResult += decodedChar;
            lastStart = nextStart;
            for (var _i = 0, theCounters_1 = theCounters; _i < theCounters_1.length; _i++) {
                var counter = theCounters_1[_i];
                nextStart += counter;
            }
            // Read off white space
            nextStart = row.getNextSet(nextStart);
        } while (decodedChar !== '*');
        this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1); // remove asterisk
        // Look for whitespace after pattern:
        var lastPatternSize = 0;
        for (var _a = 0, theCounters_2 = theCounters; _a < theCounters_2.length; _a++) {
            var counter = theCounters_2[_a];
            lastPatternSize += counter;
        }
        var whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
        // If 50% of last pattern size, following last pattern, is not whitespace, fail
        // (but if it's whitespace to the very end of the image, that's OK)
        if (nextStart !== end && (whiteSpaceAfterEnd * 2) < lastPatternSize) {
            throw new NotFoundException_1.default();
        }
        if (this.usingCheckDigit) {
            var max = this.decodeRowResult.length - 1;
            var total = 0;
            for (var i = 0; i < max; i++) {
                total += Code39Reader.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
            }
            if (this.decodeRowResult.charAt(max) !== Code39Reader.ALPHABET_STRING.charAt(total % 43)) {
                throw new ChecksumException_1.default();
            }
            this.decodeRowResult = this.decodeRowResult.substring(0, max);
        }
        if (this.decodeRowResult.length === 0) {
            // false positive
            throw new NotFoundException_1.default();
        }
        var resultString;
        if (this.extendedMode) {
            resultString = Code39Reader.decodeExtended(this.decodeRowResult);
        }
        else {
            resultString = this.decodeRowResult;
        }
        var left = (start[1] + start[0]) / 2.0;
        var right = lastStart + lastPatternSize / 2.0;
        return new Result_1.default(resultString, null, 0, [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)], BarcodeFormat_1.default.CODE_39, new Date().getTime());
    };
    Code39Reader.findAsteriskPattern = function (row, counters) {
        var width = row.getSize();
        var rowOffset = row.getNextSet(0);
        var counterPosition = 0;
        var patternStart = rowOffset;
        var isWhite = false;
        var patternLength = counters.length;
        for (var i = rowOffset; i < width; i++) {
            if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (counterPosition === patternLength - 1) {
                    // Look for whitespace before start pattern, >= 50% of width of start pattern
                    if (this.toNarrowWidePattern(counters) === Code39Reader.ASTERISK_ENCODING &&
                        row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
                        return [patternStart, i];
                    }
                    patternStart += counters[0] + counters[1];
                    counters.copyWithin(0, 2, 2 + counterPosition - 1);
                    counters[counterPosition - 1] = 0;
                    counters[counterPosition] = 0;
                    counterPosition--;
                }
                else {
                    counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
            }
        }
        throw new NotFoundException_1.default();
    };
    // For efficiency, returns -1 on failure. Not throwing here saved as many as 700 exceptions
    // per image when using some of our blackbox images.
    Code39Reader.toNarrowWidePattern = function (counters) {
        var numCounters = counters.length;
        var maxNarrowCounter = 0;
        var wideCounters;
        do {
            var minCounter = 0x7fffffff;
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                if (counter < minCounter && counter > maxNarrowCounter) {
                    minCounter = counter;
                }
            }
            maxNarrowCounter = minCounter;
            wideCounters = 0;
            var totalWideCountersWidth = 0;
            var pattern = 0;
            for (var i = 0; i < numCounters; i++) {
                var counter = counters[i];
                if (counter > maxNarrowCounter) {
                    pattern |= 1 << (numCounters - 1 - i);
                    wideCounters++;
                    totalWideCountersWidth += counter;
                }
            }
            if (wideCounters === 3) {
                // Found 3 wide counters, but are they close enough in width?
                // We can perform a cheap, conservative check to see if any individual
                // counter is more than 1.5 times the average:
                for (var i = 0; i < numCounters && wideCounters > 0; i++) {
                    var counter = counters[i];
                    if (counter > maxNarrowCounter) {
                        wideCounters--;
                        // totalWideCountersWidth = 3 * average, so this checks if counter >= 3/2 * average
                        if ((counter * 2) >= totalWideCountersWidth) {
                            return -1;
                        }
                    }
                }
                return pattern;
            }
        } while (wideCounters > 3);
        return -1;
    };
    Code39Reader.patternToChar = function (pattern) {
        for (var i = 0; i < Code39Reader.CHARACTER_ENCODINGS.length; i++) {
            if (Code39Reader.CHARACTER_ENCODINGS[i] === pattern) {
                return Code39Reader.ALPHABET_STRING.charAt(i);
            }
        }
        if (pattern === Code39Reader.ASTERISK_ENCODING) {
            return '*';
        }
        throw new NotFoundException_1.default();
    };
    Code39Reader.decodeExtended = function (encoded) {
        var length = encoded.length;
        var decoded = '';
        for (var i = 0; i < length; i++) {
            var c = encoded.charAt(i);
            if (c === '+' || c === '$' || c === '%' || c === '/') {
                var next = encoded.charAt(i + 1);
                var decodedChar = '\0';
                switch (c) {
                    case '+':
                        // +A to +Z map to a to z
                        if (next >= 'A' && next <= 'Z') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    case '$':
                        // $A to $Z map to control codes SH to SB
                        if (next >= 'A' && next <= 'Z') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    case '%':
                        // %A to %E map to control codes ESC to US
                        if (next >= 'A' && next <= 'E') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
                        }
                        else if (next >= 'F' && next <= 'J') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
                        }
                        else if (next >= 'K' && next <= 'O') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
                        }
                        else if (next >= 'P' && next <= 'T') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
                        }
                        else if (next === 'U') {
                            decodedChar = '\0';
                        }
                        else if (next === 'V') {
                            decodedChar = '@';
                        }
                        else if (next === 'W') {
                            decodedChar = '`';
                        }
                        else if (next === 'X' || next === 'Y' || next === 'Z') {
                            decodedChar = '\x7f';
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                    case '/':
                        // /A to /O map to ! to , and /Z maps to :
                        if (next >= 'A' && next <= 'O') {
                            decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
                        }
                        else if (next === 'Z') {
                            decodedChar = ':';
                        }
                        else {
                            throw new FormatException_1.default();
                        }
                        break;
                }
                decoded += decodedChar;
                // bump up i again since we read two characters
                i++;
            }
            else {
                decoded += c;
            }
        }
        return decoded;
    };
    Code39Reader.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%';
    /**
     * These represent the encodings of characters, as patterns of wide and narrow bars.
     * The 9 least-significant bits of each int correspond to the pattern of wide and narrow,
     * with 1s representing "wide" and 0s representing narrow.
     */
    Code39Reader.CHARACTER_ENCODINGS = [
        0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064,
        0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C,
        0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016,
        0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x0A8,
        0x0A2, 0x08A, 0x02A // /-%
    ];
    Code39Reader.ASTERISK_ENCODING = 0x094;
    return Code39Reader;
}(OneDReader_1.default));
exports.default = Code39Reader;


/***/ }),

/***/ "./src/core/oned/EAN13Reader.ts":
/*!**************************************!*\
  !*** ./src/core/oned/EAN13Reader.ts ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var UPCEANReader_1 = __webpack_require__(/*! ./UPCEANReader */ "./src/core/oned/UPCEANReader.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * <p>Implements decoding of the EAN-13 format.</p>
 *
 * @author dswitkin@google.com (Daniel Switkin)
 * @author Sean Owen
 * @author alasdair@google.com (Alasdair Mackintosh)
 */
var EAN13Reader = /** @class */ (function (_super) {
    __extends(EAN13Reader, _super);
    function EAN13Reader() {
        var _this = _super.call(this) || this;
        _this.decodeMiddleCounters = [0, 0, 0, 0];
        return _this;
    }
    EAN13Reader.prototype.decodeMiddle = function (row, startRange, resultString) {
        var counters = this.decodeMiddleCounters;
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var end = row.getSize();
        var rowOffset = startRange[1];
        var lgPatternFound = 0;
        for (var x = 0; x < 6 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                rowOffset += counter;
            }
            if (bestMatch >= 10) {
                lgPatternFound |= 1 << (5 - x);
            }
        }
        resultString = EAN13Reader.determineFirstDigit(resultString, lgPatternFound);
        var middleRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, true, UPCEANReader_1.default.MIDDLE_PATTERN, new Array(UPCEANReader_1.default.MIDDLE_PATTERN.length).fill(0));
        rowOffset = middleRange[1];
        for (var x = 0; x < 6 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
            for (var _a = 0, counters_2 = counters; _a < counters_2.length; _a++) {
                var counter = counters_2[_a];
                rowOffset += counter;
            }
        }
        return { rowOffset: rowOffset, resultString: resultString };
    };
    EAN13Reader.prototype.getBarcodeFormat = function () {
        return BarcodeFormat_1.default.EAN_13;
    };
    EAN13Reader.determineFirstDigit = function (resultString, lgPatternFound) {
        for (var d = 0; d < 10; d++) {
            if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
                resultString = String.fromCharCode(('0'.charCodeAt(0) + d)) + resultString;
                return resultString;
            }
        }
        throw new NotFoundException_1.default();
    };
    EAN13Reader.FIRST_DIGIT_ENCODINGS = [0x00, 0x0B, 0x0D, 0xE, 0x13, 0x19, 0x1C, 0x15, 0x16, 0x1A];
    return EAN13Reader;
}(UPCEANReader_1.default));
exports.default = EAN13Reader;


/***/ }),

/***/ "./src/core/oned/EAN8Reader.ts":
/*!*************************************!*\
  !*** ./src/core/oned/EAN8Reader.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var UPCEANReader_1 = __webpack_require__(/*! ./UPCEANReader */ "./src/core/oned/UPCEANReader.ts");
/**
 * <p>Implements decoding of the EAN-8 format.</p>
 *
 * @author Sean Owen
 */
var EAN8Reader = /** @class */ (function (_super) {
    __extends(EAN8Reader, _super);
    function EAN8Reader() {
        var _this = _super.call(this) || this;
        _this.decodeMiddleCounters = [0, 0, 0, 0];
        return _this;
    }
    EAN8Reader.prototype.decodeMiddle = function (row, startRange, resultString) {
        var counters = this.decodeMiddleCounters;
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var end = row.getSize();
        var rowOffset = startRange[1];
        for (var x = 0; x < 4 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                rowOffset += counter;
            }
        }
        var middleRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, true, UPCEANReader_1.default.MIDDLE_PATTERN, new Array(UPCEANReader_1.default.MIDDLE_PATTERN.length).fill(0));
        rowOffset = middleRange[1];
        for (var x = 0; x < 4 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
            for (var _a = 0, counters_2 = counters; _a < counters_2.length; _a++) {
                var counter = counters_2[_a];
                rowOffset += counter;
            }
        }
        return { rowOffset: rowOffset, resultString: resultString };
    };
    EAN8Reader.prototype.getBarcodeFormat = function () {
        return BarcodeFormat_1.default.EAN_8;
    };
    return EAN8Reader;
}(UPCEANReader_1.default));
exports.default = EAN8Reader;


/***/ }),

/***/ "./src/core/oned/ITFReader.ts":
/*!************************************!*\
  !*** ./src/core/oned/ITFReader.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.oned {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
var StringBuilder_1 = __webpack_require__(/*! ../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var System_1 = __webpack_require__(/*! ../util/System */ "./src/core/util/System.ts");
var FormatException_1 = __webpack_require__(/*! ../FormatException */ "./src/core/FormatException.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * <p>Decodes ITF barcodes.</p>
 *
 * @author Tjieco
 */
var ITFReader = /** @class */ (function (_super) {
    __extends(ITFReader, _super);
    function ITFReader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Stores the actual narrow line width of the image being decoded.
        _this.narrowLineWidth = -1;
        return _this;
    }
    // See ITFWriter.PATTERNS
    /*

    /!**
     * Patterns of Wide / Narrow lines to indicate each digit
     *!/
    */
    ITFReader.prototype.decodeRow = function (rowNumber, row, hints) {
        // Find out where the Middle section (payload) starts & ends
        var startRange = this.decodeStart(row);
        var endRange = this.decodeEnd(row);
        var result = new StringBuilder_1.default();
        ITFReader.decodeMiddle(row, startRange[1], endRange[0], result);
        var resultString = result.toString();
        var allowedLengths = null;
        if (hints != null) {
            allowedLengths = hints.get(DecodeHintType_1.default.ALLOWED_LENGTHS);
        }
        if (allowedLengths == null) {
            allowedLengths = ITFReader.DEFAULT_ALLOWED_LENGTHS;
        }
        // To avoid false positives with 2D barcodes (and other patterns), make
        // an assumption that the decoded string must be a 'standard' length if it's short
        var length = resultString.length;
        var lengthOK = false;
        var maxAllowedLength = 0;
        for (var _i = 0, allowedLengths_1 = allowedLengths; _i < allowedLengths_1.length; _i++) {
            var value = allowedLengths_1[_i];
            if (length === value) {
                lengthOK = true;
                break;
            }
            if (value > maxAllowedLength) {
                maxAllowedLength = value;
            }
        }
        if (!lengthOK && length > maxAllowedLength) {
            lengthOK = true;
        }
        if (!lengthOK) {
            throw new FormatException_1.default();
        }
        var points = [new ResultPoint_1.default(startRange[1], rowNumber), new ResultPoint_1.default(endRange[0], rowNumber)];
        var resultReturn = new Result_1.default(resultString, null, // no natural byte representation for these barcodes
        0, points, BarcodeFormat_1.default.ITF, new Date().getTime());
        return resultReturn;
    };
    /*
    /!**
     * @param row          row of black/white values to search
     * @param payloadStart offset of start pattern
     * @param resultString {@link StringBuilder} to append decoded chars to
     * @throws NotFoundException if decoding could not complete successfully
     *!/*/
    ITFReader.decodeMiddle = function (row, payloadStart, payloadEnd, resultString) {
        // Digits are interleaved in pairs - 5 black lines for one digit, and the
        // 5
        // interleaved white lines for the second digit.
        // Therefore, need to scan 10 lines and then
        // split these into two arrays
        var counterDigitPair = new Array(10); // 10
        var counterBlack = new Array(5); // 5
        var counterWhite = new Array(5); // 5
        counterDigitPair.fill(0);
        counterBlack.fill(0);
        counterWhite.fill(0);
        while (payloadStart < payloadEnd) {
            // Get 10 runs of black/white.
            OneDReader_1.default.recordPattern(row, payloadStart, counterDigitPair);
            // Split them into each array
            for (var k = 0; k < 5; k++) {
                var twoK = 2 * k;
                counterBlack[k] = counterDigitPair[twoK];
                counterWhite[k] = counterDigitPair[twoK + 1];
            }
            var bestMatch = ITFReader.decodeDigit(counterBlack);
            resultString.append(bestMatch.toString());
            bestMatch = this.decodeDigit(counterWhite);
            resultString.append(bestMatch.toString());
            counterDigitPair.forEach(function (counterDigit) {
                payloadStart += counterDigit;
            });
        }
    };
    /*/!**
     * Identify where the start of the middle / payload section starts.
     *
     * @param row row of black/white values to search
     * @return Array, containing index of start of 'start block' and end of
     *         'start block'
     *!/*/
    ITFReader.prototype.decodeStart = function (row) {
        var endStart = ITFReader.skipWhiteSpace(row);
        var startPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.START_PATTERN);
        // Determine the width of a narrow line in pixels. We can do this by
        // getting the width of the start pattern and dividing by 4 because its
        // made up of 4 narrow lines.
        this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
        this.validateQuietZone(row, startPattern[0]);
        return startPattern;
    };
    /*/!**
     * The start & end patterns must be pre/post fixed by a quiet zone. This
     * zone must be at least 10 times the width of a narrow line.  Scan back until
     * we either get to the start of the barcode or match the necessary number of
     * quiet zone pixels.
     *
     * Note: Its assumed the row is reversed when using this method to find
     * quiet zone after the end pattern.
     *
     * ref: http://www.barcode-1.net/i25code.html
     *
     * @param row bit array representing the scanned barcode.
     * @param startPattern index into row of the start or end pattern.
     * @throws NotFoundException if the quiet zone cannot be found
     *!/*/
    ITFReader.prototype.validateQuietZone = function (row, startPattern) {
        var quietCount = this.narrowLineWidth * 10; // expect to find this many pixels of quiet zone
        // if there are not so many pixel at all let's try as many as possible
        quietCount = quietCount < startPattern ? quietCount : startPattern;
        for (var i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
            if (row.get(i)) {
                break;
            }
            quietCount--;
        }
        if (quietCount !== 0) {
            // Unable to find the necessary number of quiet zone pixels.
            throw new NotFoundException_1.default();
        }
    };
    /*
    /!**
     * Skip all whitespace until we get to the first black line.
     *
     * @param row row of black/white values to search
     * @return index of the first black line.
     * @throws NotFoundException Throws exception if no black lines are found in the row
     *!/*/
    ITFReader.skipWhiteSpace = function (row) {
        var width = row.getSize();
        var endStart = row.getNextSet(0);
        if (endStart === width) {
            throw new NotFoundException_1.default();
        }
        return endStart;
    };
    /*/!**
     * Identify where the end of the middle / payload section ends.
     *
     * @param row row of black/white values to search
     * @return Array, containing index of start of 'end block' and end of 'end
     *         block'
     *!/*/
    ITFReader.prototype.decodeEnd = function (row) {
        // For convenience, reverse the row and then
        // search from 'the start' for the end block
        row.reverse();
        try {
            var endStart = ITFReader.skipWhiteSpace(row);
            var endPattern = void 0;
            try {
                endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[0]);
            }
            catch (NotFoundException) {
                endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[1]);
            }
            // The start & end patterns must be pre/post fixed by a quiet zone. This
            // zone must be at least 10 times the width of a narrow line.
            // ref: http://www.barcode-1.net/i25code.html
            this.validateQuietZone(row, endPattern[0]);
            // Now recalculate the indices of where the 'endblock' starts & stops to
            // accommodate
            // the reversed nature of the search
            var temp = endPattern[0];
            endPattern[0] = row.getSize() - endPattern[1];
            endPattern[1] = row.getSize() - temp;
            return endPattern;
        }
        finally {
            // Put the row back the right way.
            row.reverse();
        }
    };
    /*
    /!**
     * @param row       row of black/white values to search
     * @param rowOffset position to start search
     * @param pattern   pattern of counts of number of black and white pixels that are
     *                  being searched for as a pattern
     * @return start/end horizontal offset of guard pattern, as an array of two
     *         ints
     * @throws NotFoundException if pattern is not found
     *!/*/
    ITFReader.findGuardPattern = function (row, rowOffset, pattern) {
        var patternLength = pattern.length;
        var counters = new Array(patternLength);
        var width = row.getSize();
        var isWhite = false;
        var counterPosition = 0;
        var patternStart = rowOffset;
        counters.fill(0);
        for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (counterPosition === patternLength - 1) {
                    if (OneDReader_1.default.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE) < ITFReader.MAX_AVG_VARIANCE) {
                        return [patternStart, x];
                    }
                    patternStart += counters[0] + counters[1];
                    System_1.default.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                    counters[counterPosition - 1] = 0;
                    counters[counterPosition] = 0;
                    counterPosition--;
                }
                else {
                    counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
            }
        }
        throw new NotFoundException_1.default();
    };
    /*/!**
     * Attempts to decode a sequence of ITF black/white lines into single
     * digit.
     *
     * @param counters the counts of runs of observed black/white/black/... values
     * @return The decoded digit
     * @throws NotFoundException if digit cannot be decoded
     *!/*/
    ITFReader.decodeDigit = function (counters) {
        var bestVariance = ITFReader.MAX_AVG_VARIANCE; // worst variance we'll accept
        var bestMatch = -1;
        var max = ITFReader.PATTERNS.length;
        for (var i = 0; i < max; i++) {
            var pattern = ITFReader.PATTERNS[i];
            var variance = OneDReader_1.default.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = i;
            }
            else if (variance === bestVariance) {
                // if we find a second 'best match' with the same variance, we can not reliably report to have a suitable match
                bestMatch = -1;
            }
        }
        if (bestMatch >= 0) {
            return bestMatch % 10;
        }
        else {
            throw new NotFoundException_1.default();
        }
    };
    ITFReader.W = 3; // Pixel width of a 3x wide line
    ITFReader.w = 2; // Pixel width of a 2x wide line
    ITFReader.N = 1; // Pixed width of a narrow line
    ITFReader.PATTERNS = [
        [1, 1, 2, 2, 1],
        [2, 1, 1, 1, 2],
        [1, 2, 1, 1, 2],
        [2, 2, 1, 1, 1],
        [1, 1, 2, 1, 2],
        [2, 1, 2, 1, 1],
        [1, 2, 2, 1, 1],
        [1, 1, 1, 2, 2],
        [2, 1, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 3, 3, 1],
        [3, 1, 1, 1, 3],
        [1, 3, 1, 1, 3],
        [3, 3, 1, 1, 1],
        [1, 1, 3, 1, 3],
        [3, 1, 3, 1, 1],
        [1, 3, 3, 1, 1],
        [1, 1, 1, 3, 3],
        [3, 1, 1, 3, 1],
        [1, 3, 1, 3, 1] // 9
    ];
    ITFReader.MAX_AVG_VARIANCE = 0.38;
    ITFReader.MAX_INDIVIDUAL_VARIANCE = 0.5;
    /* /!** Valid ITF lengths. Anything longer than the largest value is also allowed. *!/*/
    ITFReader.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
    /*/!**
     * Start/end guard pattern.
     *
     * Note: The end pattern is reversed because the row is reversed before
     * searching for the END_PATTERN
     *!/*/
    ITFReader.START_PATTERN = [1, 1, 1, 1];
    ITFReader.END_PATTERN_REVERSED = [
        [1, 1, 2],
        [1, 1, 3] // 3x
    ];
    return ITFReader;
}(OneDReader_1.default));
exports.default = ITFReader;


/***/ }),

/***/ "./src/core/oned/MultiFormatOneDReader.ts":
/*!************************************************!*\
  !*** ./src/core/oned/MultiFormatOneDReader.ts ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.oned {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var Code39Reader_1 = __webpack_require__(/*! ./Code39Reader */ "./src/core/oned/Code39Reader.ts");
var Code128Reader_1 = __webpack_require__(/*! ./Code128Reader */ "./src/core/oned/Code128Reader.ts");
var RSS14Reader_1 = __webpack_require__(/*! ./rss/RSS14Reader */ "./src/core/oned/rss/RSS14Reader.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var ITFReader_1 = __webpack_require__(/*! ./ITFReader */ "./src/core/oned/ITFReader.ts");
var MultiFormatUPCEANReader_1 = __webpack_require__(/*! ./MultiFormatUPCEANReader */ "./src/core/oned/MultiFormatUPCEANReader.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
/**
 * @author Daniel Switkin <dswitkin@google.com>
 * @author Sean Owen
 */
var MultiFormatOneDReader = /** @class */ (function (_super) {
    __extends(MultiFormatOneDReader, _super);
    function MultiFormatOneDReader(hints) {
        var _this = _super.call(this) || this;
        _this.readers = [];
        var possibleFormats = !hints ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
        var useCode39CheckDigit = hints && hints.get(DecodeHintType_1.default.ASSUME_CODE_39_CHECK_DIGIT) !== undefined;
        if (possibleFormats) {
            if (possibleFormats.includes(BarcodeFormat_1.default.EAN_13) ||
                possibleFormats.includes(BarcodeFormat_1.default.EAN_8)) {
                _this.readers.push(new MultiFormatUPCEANReader_1.default(hints));
            }
            // if (possibleFormats.includes(BarcodeFormat.EAN_13) ||
            //     possibleFormats.includes(BarcodeFormat.UPC_A) ||
            //     possibleFormats.includes(BarcodeFormat.EAN_8) ||
            //     possibleFormats.includes(BarcodeFormat.UPC_E)) {
            //   readers.push(new MultiFormatUPCEANReader(hints));
            // }
            if (possibleFormats.includes(BarcodeFormat_1.default.CODE_39)) {
                _this.readers.push(new Code39Reader_1.default(useCode39CheckDigit));
            }
            // if (possibleFormats.includes(BarcodeFormat.CODE_93)) {
            //    this.readers.push(new Code93Reader());
            // }
            if (possibleFormats.includes(BarcodeFormat_1.default.CODE_128)) {
                _this.readers.push(new Code128Reader_1.default());
            }
            if (possibleFormats.includes(BarcodeFormat_1.default.ITF)) {
                _this.readers.push(new ITFReader_1.default());
            }
            // if (possibleFormats.includes(BarcodeFormat.CODABAR)) {
            //    this.readers.push(new CodaBarReader());
            // }
            if (possibleFormats.includes(BarcodeFormat_1.default.RSS_14)) {
                _this.readers.push(new RSS14Reader_1.default());
            }
            // if (possibleFormats.includes(BarcodeFormat.RSS_EXPANDED)) {
            //   this.readers.push(new RSSExpandedReader());
            // }
        }
        if (_this.readers.length === 0) {
            // this.readers.push(new MultiFormatUPCEANReader(hints));
            _this.readers.push(new Code39Reader_1.default());
            // this.readers.push(new CodaBarReader());
            // this.readers.push(new Code93Reader());
            _this.readers.push(new MultiFormatUPCEANReader_1.default(hints));
            _this.readers.push(new Code128Reader_1.default());
            _this.readers.push(new ITFReader_1.default());
            _this.readers.push(new RSS14Reader_1.default());
            // this.readers.push(new RSSExpandedReader());
        }
        return _this;
    }
    // @Override
    MultiFormatOneDReader.prototype.decodeRow = function (rowNumber, row, hints) {
        for (var i = 0; i < this.readers.length; i++) {
            try {
                return this.readers[i].decodeRow(rowNumber, row, hints);
            }
            catch (re) {
                // continue
            }
        }
        throw new NotFoundException_1.default();
    };
    // @Override
    MultiFormatOneDReader.prototype.reset = function () {
        this.readers.forEach(function (reader) { return reader.reset(); });
    };
    return MultiFormatOneDReader;
}(OneDReader_1.default));
exports.default = MultiFormatOneDReader;


/***/ }),

/***/ "./src/core/oned/MultiFormatUPCEANReader.ts":
/*!**************************************************!*\
  !*** ./src/core/oned/MultiFormatUPCEANReader.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
var EAN13Reader_1 = __webpack_require__(/*! ./EAN13Reader */ "./src/core/oned/EAN13Reader.ts");
var EAN8Reader_1 = __webpack_require__(/*! ./EAN8Reader */ "./src/core/oned/EAN8Reader.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * <p>A reader that can read all available UPC/EAN formats. If a caller wants to try to
 * read all such formats, it is most efficient to use this implementation rather than invoke
 * individual readers.</p>
 *
 * @author Sean Owen
 */
var MultiFormatUPCEANReader = /** @class */ (function (_super) {
    __extends(MultiFormatUPCEANReader, _super);
    function MultiFormatUPCEANReader(hints) {
        var _this = _super.call(this) || this;
        var possibleFormats = hints == null ? null : hints.get(DecodeHintType_1.default.POSSIBLE_FORMATS);
        var readers = [];
        if (possibleFormats != null) {
            if (possibleFormats.indexOf(BarcodeFormat_1.default.EAN_13) > -1) {
                readers.push(new EAN13Reader_1.default());
            }
            if (possibleFormats.indexOf(BarcodeFormat_1.default.EAN_8) > -1) {
                readers.push(new EAN8Reader_1.default());
            }
            // todo add UPC_A, UPC_E
        }
        if (readers.length === 0) {
            readers.push(new EAN13Reader_1.default());
            readers.push(new EAN8Reader_1.default());
            // todo add UPC_A, UPC_E
        }
        _this.readers = readers;
        return _this;
    }
    MultiFormatUPCEANReader.prototype.decodeRow = function (rowNumber, row, hints) {
        for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            try {
                return reader.decodeRow(rowNumber, row, hints);
                // TODO ean13MayBeUPCA
            }
            catch (err) {
                // continue;
            }
        }
        throw new NotFoundException_1.default();
    };
    MultiFormatUPCEANReader.prototype.reset = function () {
        for (var _i = 0, _a = this.readers; _i < _a.length; _i++) {
            var reader = _a[_i];
            reader.reset();
        }
    };
    return MultiFormatUPCEANReader;
}(OneDReader_1.default));
exports.default = MultiFormatUPCEANReader;


/***/ }),

/***/ "./src/core/oned/OneDReader.ts":
/*!*************************************!*\
  !*** ./src/core/oned/OneDReader.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BitArray_1 = __webpack_require__(/*! ../common/BitArray */ "./src/core/common/BitArray.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * Encapsulates functionality and implementation that is common to all families
 * of one-dimensional barcodes.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 * @author Sean Owen
 */
var OneDReader = /** @class */ (function () {
    function OneDReader() {
    }
    /*
    @Override
    public Result decode(BinaryBitmap image) throws NotFoundException, FormatException {
      return decode(image, null);
    }
    */
    // Note that we don't try rotation without the try harder flag, even if rotation was supported.
    // @Override
    OneDReader.prototype.decode = function (image, hints) {
        try {
            return this.doDecode(image, hints);
        }
        catch (nfe) {
            var tryHarder = hints && (hints.get(DecodeHintType_1.default.TRY_HARDER) === true);
            if (tryHarder && image.isRotateSupported()) {
                var rotatedImage = image.rotateCounterClockwise();
                var result = this.doDecode(rotatedImage, hints);
                // Record that we found it rotated 90 degrees CCW / 270 degrees CW
                var metadata = result.getResultMetadata();
                var orientation_1 = 270;
                if (metadata !== null && (metadata.get(ResultMetadataType_1.default.ORIENTATION) === true)) {
                    // But if we found it reversed in doDecode(), add in that result here:
                    orientation_1 = (orientation_1 + metadata.get(ResultMetadataType_1.default.ORIENTATION) % 360);
                }
                result.putMetadata(ResultMetadataType_1.default.ORIENTATION, orientation_1);
                // Update result points
                var points = result.getResultPoints();
                if (points !== null) {
                    var height = rotatedImage.getHeight();
                    for (var i = 0; i < points.length; i++) {
                        points[i] = new ResultPoint_1.default(height - points[i].getY() - 1, points[i].getX());
                    }
                }
                return result;
            }
            else {
                throw new NotFoundException_1.default();
            }
        }
    };
    // @Override
    OneDReader.prototype.reset = function () {
        // do nothing
    };
    /**
     * We're going to examine rows from the middle outward, searching alternately above and below the
     * middle, and farther out each time. rowStep is the number of rows between each successive
     * attempt above and below the middle. So we'd scan row middle, then middle - rowStep, then
     * middle + rowStep, then middle - (2 * rowStep), etc.
     * rowStep is bigger as the image is taller, but is always at least 1. We've somewhat arbitrarily
     * decided that moving up and down by about 1/16 of the image is pretty good; we try more of the
     * image if "trying harder".
     *
     * @param image The image to decode
     * @param hints Any hints that were requested
     * @return The contents of the decoded barcode
     * @throws NotFoundException Any spontaneous errors which occur
     */
    OneDReader.prototype.doDecode = function (image, hints) {
        var width = image.getWidth();
        var height = image.getHeight();
        var row = new BitArray_1.default(width);
        var tryHarder = hints && (hints.get(DecodeHintType_1.default.TRY_HARDER) === true);
        var rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
        var maxLines;
        if (tryHarder) {
            maxLines = height; // Look at the whole image, not just the center
        }
        else {
            maxLines = 15; // 15 rows spaced 1/32 apart is roughly the middle half of the image
        }
        var middle = Math.trunc(height / 2);
        for (var x = 0; x < maxLines; x++) {
            // Scanning from the middle out. Determine which row we're looking at next:
            var rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
            var isAbove = (x & 0x01) === 0; // i.e. is x even?
            var rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
            if (rowNumber < 0 || rowNumber >= height) {
                // Oops, if we run off the top or bottom, stop
                break;
            }
            // Estimate black point for this row and load it:
            try {
                row = image.getBlackRow(rowNumber, row);
            }
            catch (ignored) {
                continue;
            }
            var _loop_1 = function (attempt) {
                if (attempt === 1) { // trying again?
                    row.reverse(); // reverse the row and continue
                    // This means we will only ever draw result points *once* in the life of this method
                    // since we want to avoid drawing the wrong points after flipping the row, and,
                    // don't want to clutter with noise from every single row scan -- just the scans
                    // that start on the center line.
                    if (hints && (hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK) === true)) {
                        var newHints_1 = new Map();
                        hints.forEach(function (hint, key) { return newHints_1.set(key, hint); });
                        newHints_1.delete(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
                        hints = newHints_1;
                    }
                }
                try {
                    // Look for a barcode
                    var result = this_1.decodeRow(rowNumber, row, hints);
                    // We found our barcode
                    if (attempt === 1) {
                        // But it was upside down, so note that
                        result.putMetadata(ResultMetadataType_1.default.ORIENTATION, 180);
                        // And remember to flip the result points horizontally.
                        var points = result.getResultPoints();
                        if (points !== null) {
                            points[0] = new ResultPoint_1.default(width - points[0].getX() - 1, points[0].getY());
                            points[1] = new ResultPoint_1.default(width - points[1].getX() - 1, points[1].getY());
                        }
                    }
                    return { value: result };
                }
                catch (re) {
                    // continue -- just couldn't decode this row
                }
            };
            var this_1 = this;
            // While we have the image data in a BitArray, it's fairly cheap to reverse it in place to
            // handle decoding upside down barcodes.
            for (var attempt = 0; attempt < 2; attempt++) {
                var state_1 = _loop_1(attempt);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        throw new NotFoundException_1.default();
    };
    /**
     * Records the size of successive runs of white and black pixels in a row, starting at a given point.
     * The values are recorded in the given array, and the number of runs recorded is equal to the size
     * of the array. If the row starts on a white pixel at the given start point, then the first count
     * recorded is the run of white pixels starting from that point; likewise it is the count of a run
     * of black pixels if the row begin on a black pixels at that point.
     *
     * @param row row to count from
     * @param start offset into row to start at
     * @param counters array into which to record counts
     * @throws NotFoundException if counters cannot be filled entirely from row before running out
     *  of pixels
     */
    OneDReader.recordPattern = function (row, start, counters) {
        var numCounters = counters.length;
        for (var index = 0; index < numCounters; index++)
            counters[index] = 0;
        var end = row.getSize();
        if (start >= end) {
            throw new NotFoundException_1.default();
        }
        var isWhite = !row.get(start);
        var counterPosition = 0;
        var i = start;
        while (i < end) {
            if (row.get(i) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (++counterPosition === numCounters) {
                    break;
                }
                else {
                    counters[counterPosition] = 1;
                    isWhite = !isWhite;
                }
            }
            i++;
        }
        // If we read fully the last section of pixels and filled up our counters -- or filled
        // the last counter but ran off the side of the image, OK. Otherwise, a problem.
        if (!(counterPosition === numCounters || (counterPosition === numCounters - 1 && i === end))) {
            throw new NotFoundException_1.default();
        }
    };
    OneDReader.recordPatternInReverse = function (row, start, counters) {
        // This could be more efficient I guess
        var numTransitionsLeft = counters.length;
        var last = row.get(start);
        while (start > 0 && numTransitionsLeft >= 0) {
            if (row.get(--start) !== last) {
                numTransitionsLeft--;
                last = !last;
            }
        }
        if (numTransitionsLeft >= 0) {
            throw new NotFoundException_1.default();
        }
        OneDReader.recordPattern(row, start + 1, counters);
    };
    /**
     * Determines how closely a set of observed counts of runs of black/white values matches a given
     * target pattern. This is reported as the ratio of the total variance from the expected pattern
     * proportions across all pattern elements, to the length of the pattern.
     *
     * @param counters observed counters
     * @param pattern expected pattern
     * @param maxIndividualVariance The most any counter can differ before we give up
     * @return ratio of total variance between counters and pattern compared to total pattern size
     */
    OneDReader.patternMatchVariance = function (counters, pattern, maxIndividualVariance) {
        var numCounters = counters.length;
        var total = 0;
        var patternLength = 0;
        for (var i = 0; i < numCounters; i++) {
            total += counters[i];
            patternLength += pattern[i];
        }
        if (total < patternLength) {
            // If we don't even have one pixel per unit of bar width, assume this is too small
            // to reliably match, so fail:
            return Number.POSITIVE_INFINITY;
        }
        var unitBarWidth = total / patternLength;
        maxIndividualVariance *= unitBarWidth;
        var totalVariance = 0.0;
        for (var x = 0; x < numCounters; x++) {
            var counter = counters[x];
            var scaledPattern = pattern[x] * unitBarWidth;
            var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
            if (variance > maxIndividualVariance) {
                return Number.POSITIVE_INFINITY;
            }
            totalVariance += variance;
        }
        return totalVariance / total;
    };
    return OneDReader;
}());
exports.default = OneDReader;


/***/ }),

/***/ "./src/core/oned/UPCEANExtension2Support.ts":
/*!**************************************************!*\
  !*** ./src/core/oned/UPCEANExtension2Support.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2012 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var UPCEANReader_1 = __webpack_require__(/*! ./UPCEANReader */ "./src/core/oned/UPCEANReader.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * @see UPCEANExtension5Support
 */
var UPCEANExtension2Support = /** @class */ (function () {
    function UPCEANExtension2Support() {
        this.decodeMiddleCounters = [0, 0, 0, 0];
        this.decodeRowStringBuffer = '';
    }
    UPCEANExtension2Support.prototype.decodeRow = function (rowNumber, row, extensionStartRange) {
        var result = this.decodeRowStringBuffer;
        var end = this.decodeMiddle(row, extensionStartRange, result);
        var resultString = result.toString();
        var extensionData = UPCEANExtension2Support.parseExtensionString(resultString);
        var resultPoints = [
            new ResultPoint_1.default((extensionStartRange[0] + extensionStartRange[1]) / 2.0, rowNumber),
            new ResultPoint_1.default(end, rowNumber)
        ];
        var extensionResult = new Result_1.default(resultString, null, 0, resultPoints, BarcodeFormat_1.default.UPC_EAN_EXTENSION, new Date().getTime());
        if (extensionData != null) {
            extensionResult.putAllMetadata(extensionData);
        }
        return extensionResult;
    };
    UPCEANExtension2Support.prototype.decodeMiddle = function (row, startRange, resultString) {
        var counters = this.decodeMiddleCounters;
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var end = row.getSize();
        var rowOffset = startRange[1];
        var checkParity = 0;
        for (var x = 0; x < 2 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                rowOffset += counter;
            }
            if (bestMatch >= 10) {
                checkParity |= 1 << (1 - x);
            }
            if (x !== 1) {
                // Read off separator if not last
                rowOffset = row.getNextSet(rowOffset);
                rowOffset = row.getNextUnset(rowOffset);
            }
        }
        if (resultString.length !== 2) {
            throw new NotFoundException_1.default();
        }
        if (parseInt(resultString.toString()) % 4 !== checkParity) {
            throw new NotFoundException_1.default();
        }
        return rowOffset;
    };
    UPCEANExtension2Support.parseExtensionString = function (raw) {
        if (raw.length !== 2) {
            return null;
        }
        return new Map([[ResultMetadataType_1.default.ISSUE_NUMBER, parseInt(raw)]]);
    };
    return UPCEANExtension2Support;
}());
exports.default = UPCEANExtension2Support;


/***/ }),

/***/ "./src/core/oned/UPCEANExtension5Support.ts":
/*!**************************************************!*\
  !*** ./src/core/oned/UPCEANExtension5Support.ts ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2010 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var UPCEANReader_1 = __webpack_require__(/*! ./UPCEANReader */ "./src/core/oned/UPCEANReader.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/**
 * @see UPCEANExtension2Support
 */
var UPCEANExtension5Support = /** @class */ (function () {
    function UPCEANExtension5Support() {
        this.CHECK_DIGIT_ENCODINGS = [0x18, 0x14, 0x12, 0x11, 0x0C, 0x06, 0x03, 0x0A, 0x09, 0x05];
        this.decodeMiddleCounters = [0, 0, 0, 0];
        this.decodeRowStringBuffer = '';
    }
    UPCEANExtension5Support.prototype.decodeRow = function (rowNumber, row, extensionStartRange) {
        var result = this.decodeRowStringBuffer;
        var end = this.decodeMiddle(row, extensionStartRange, result);
        var resultString = result.toString();
        var extensionData = UPCEANExtension5Support.parseExtensionString(resultString);
        var resultPoints = [
            new ResultPoint_1.default((extensionStartRange[0] + extensionStartRange[1]) / 2.0, rowNumber),
            new ResultPoint_1.default(end, rowNumber)
        ];
        var extensionResult = new Result_1.default(resultString, null, 0, resultPoints, BarcodeFormat_1.default.UPC_EAN_EXTENSION, new Date().getTime());
        if (extensionData != null) {
            extensionResult.putAllMetadata(extensionData);
        }
        return extensionResult;
    };
    UPCEANExtension5Support.prototype.decodeMiddle = function (row, startRange, resultString) {
        var counters = this.decodeMiddleCounters;
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var end = row.getSize();
        var rowOffset = startRange[1];
        var lgPatternFound = 0;
        for (var x = 0; x < 5 && rowOffset < end; x++) {
            var bestMatch = UPCEANReader_1.default.decodeDigit(row, counters, rowOffset, UPCEANReader_1.default.L_AND_G_PATTERNS);
            resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                rowOffset += counter;
            }
            if (bestMatch >= 10) {
                lgPatternFound |= 1 << (4 - x);
            }
            if (x !== 4) {
                // Read off separator if not last
                rowOffset = row.getNextSet(rowOffset);
                rowOffset = row.getNextUnset(rowOffset);
            }
        }
        if (resultString.length !== 5) {
            throw new NotFoundException_1.default();
        }
        var checkDigit = this.determineCheckDigit(lgPatternFound);
        if (UPCEANExtension5Support.extensionChecksum(resultString.toString()) !== checkDigit) {
            throw new NotFoundException_1.default();
        }
        return rowOffset;
    };
    UPCEANExtension5Support.extensionChecksum = function (s) {
        var length = s.length;
        var sum = 0;
        for (var i = length - 2; i >= 0; i -= 2) {
            sum += s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
        }
        sum *= 3;
        for (var i = length - 1; i >= 0; i -= 2) {
            sum += s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
        }
        sum *= 3;
        return sum % 10;
    };
    UPCEANExtension5Support.prototype.determineCheckDigit = function (lgPatternFound) {
        for (var d = 0; d < 10; d++) {
            if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
                return d;
            }
        }
        throw new NotFoundException_1.default();
    };
    UPCEANExtension5Support.parseExtensionString = function (raw) {
        if (raw.length !== 5) {
            return null;
        }
        var value = UPCEANExtension5Support.parseExtension5String(raw);
        if (value == null) {
            return null;
        }
        return new Map([[ResultMetadataType_1.default.SUGGESTED_PRICE, value]]);
    };
    UPCEANExtension5Support.parseExtension5String = function (raw) {
        var currency;
        switch (raw.charAt(0)) {
            case '0':
                currency = '£';
                break;
            case '5':
                currency = '$';
                break;
            case '9':
                // Reference: http://www.jollytech.com
                switch (raw) {
                    case '90000':
                        // No suggested retail price
                        return null;
                    case '99991':
                        // Complementary
                        return '0.00';
                    case '99990':
                        return 'Used';
                }
                // Otherwise... unknown currency?
                currency = '';
                break;
            default:
                currency = '';
                break;
        }
        var rawAmount = parseInt(raw.substring(1));
        var unitsString = (rawAmount / 100).toString();
        var hundredths = rawAmount % 100;
        var hundredthsString = hundredths < 10 ? '0' + hundredths : hundredths.toString(); // fixme
        return currency + unitsString + '.' + hundredthsString;
    };
    return UPCEANExtension5Support;
}());
exports.default = UPCEANExtension5Support;


/***/ }),

/***/ "./src/core/oned/UPCEANExtensionSupport.ts":
/*!*************************************************!*\
  !*** ./src/core/oned/UPCEANExtensionSupport.ts ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2010 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var UPCEANReader_1 = __webpack_require__(/*! ./UPCEANReader */ "./src/core/oned/UPCEANReader.ts");
var UPCEANExtension5Support_1 = __webpack_require__(/*! ./UPCEANExtension5Support */ "./src/core/oned/UPCEANExtension5Support.ts");
var UPCEANExtension2Support_1 = __webpack_require__(/*! ./UPCEANExtension2Support */ "./src/core/oned/UPCEANExtension2Support.ts");
var UPCEANExtensionSupport = /** @class */ (function () {
    function UPCEANExtensionSupport() {
    }
    UPCEANExtensionSupport.decodeRow = function (rowNumber, row, rowOffset) {
        var extensionStartRange = UPCEANReader_1.default.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Array(this.EXTENSION_START_PATTERN.length).fill(0));
        try {
            var fiveSupport = new UPCEANExtension5Support_1.default();
            return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
        }
        catch (err) {
            var twoSupport = new UPCEANExtension2Support_1.default();
            return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
        }
    };
    UPCEANExtensionSupport.EXTENSION_START_PATTERN = [1, 1, 2];
    return UPCEANExtensionSupport;
}());
exports.default = UPCEANExtensionSupport;


/***/ }),

/***/ "./src/core/oned/UPCEANReader.ts":
/*!***************************************!*\
  !*** ./src/core/oned/UPCEANReader.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var ResultPoint_1 = __webpack_require__(/*! ../ResultPoint */ "./src/core/ResultPoint.ts");
var OneDReader_1 = __webpack_require__(/*! ./OneDReader */ "./src/core/oned/OneDReader.ts");
var UPCEANExtensionSupport_1 = __webpack_require__(/*! ./UPCEANExtensionSupport */ "./src/core/oned/UPCEANExtensionSupport.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
var FormatException_1 = __webpack_require__(/*! ../FormatException */ "./src/core/FormatException.ts");
var ChecksumException_1 = __webpack_require__(/*! ../ChecksumException */ "./src/core/ChecksumException.ts");
/**
 * <p>Encapsulates functionality and implementation that is common to UPC and EAN families
 * of one-dimensional barcodes.</p>
 *
 * @author dswitkin@google.com (Daniel Switkin)
 * @author Sean Owen
 * @author alasdair@google.com (Alasdair Mackintosh)
 */
var UPCEANReader = /** @class */ (function (_super) {
    __extends(UPCEANReader, _super);
    // private final UPCEANExtensionSupport extensionReader;
    // private final EANManufacturerOrgSupport eanManSupport;
    function UPCEANReader() {
        var _this = _super.call(this) || this;
        _this.decodeRowStringBuffer = '';
        _this.decodeRowStringBuffer = '';
        UPCEANReader.L_AND_G_PATTERNS = UPCEANReader.L_PATTERNS.map(function (arr) {
            return arr.slice();
        });
        for (var i = 10; i < 20; i++) {
            var widths = UPCEANReader.L_PATTERNS[i - 10];
            var reversedWidths = new Array(widths.length);
            for (var j = 0; j < widths.length; j++) {
                reversedWidths[j] = widths[widths.length - j - 1];
            }
            UPCEANReader.L_AND_G_PATTERNS[i] = reversedWidths;
        }
        return _this;
    }
    /*
    protected UPCEANReader() {
        decodeRowStringBuffer = new StringBuilder(20);
        extensionReader = new UPCEANExtensionSupport();
        eanManSupport = new EANManufacturerOrgSupport();
    }
    */
    UPCEANReader.findStartGuardPattern = function (row) {
        var foundStart = false;
        var startRange = null;
        var nextStart = 0;
        var counters = [0, 0, 0];
        while (!foundStart) {
            counters = [0, 0, 0];
            startRange = UPCEANReader.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
            var start = startRange[0];
            nextStart = startRange[1];
            var quietStart = start - (nextStart - start);
            if (quietStart >= 0) {
                foundStart = row.isRange(quietStart, start, false);
            }
        }
        return startRange;
    };
    UPCEANReader.prototype.decodeRow = function (rowNumber, row, hints) {
        var startGuardRange = UPCEANReader.findStartGuardPattern(row);
        var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
        if (resultPointCallback != null) {
            var resultPoint_1 = new ResultPoint_1.default((startGuardRange[0] + startGuardRange[1]) / 2.0, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_1);
        }
        var budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
        var endStart = budello.rowOffset;
        var result = budello.resultString;
        if (resultPointCallback != null) {
            var resultPoint_2 = new ResultPoint_1.default(endStart, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_2);
        }
        var endRange = UPCEANReader.decodeEnd(row, endStart);
        if (resultPointCallback != null) {
            var resultPoint_3 = new ResultPoint_1.default((endRange[0] + endRange[1]) / 2.0, rowNumber);
            resultPointCallback.foundPossibleResultPoint(resultPoint_3);
        }
        // Make sure there is a quiet zone at least as big as the end pattern after the barcode. The
        // spec might want more whitespace, but in practice this is the maximum we can count on.
        var end = endRange[1];
        var quietEnd = end + (end - endRange[0]);
        if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
            throw new NotFoundException_1.default();
        }
        var resultString = result.toString();
        // UPC/EAN should never be less than 8 chars anyway
        if (resultString.length < 8) {
            throw new FormatException_1.default();
        }
        if (!UPCEANReader.checkChecksum(resultString)) {
            throw new ChecksumException_1.default();
        }
        var left = (startGuardRange[1] + startGuardRange[0]) / 2.0;
        var right = (endRange[1] + endRange[0]) / 2.0;
        var format = this.getBarcodeFormat();
        var resultPoint = [new ResultPoint_1.default(left, rowNumber), new ResultPoint_1.default(right, rowNumber)];
        var decodeResult = new Result_1.default(resultString, null, 0, resultPoint, format, new Date().getTime());
        var extensionLength = 0;
        try {
            var extensionResult = UPCEANExtensionSupport_1.default.decodeRow(rowNumber, row, endRange[1]);
            decodeResult.putMetadata(ResultMetadataType_1.default.UPC_EAN_EXTENSION, extensionResult.getText());
            decodeResult.putAllMetadata(extensionResult.getResultMetadata());
            decodeResult.addResultPoints(extensionResult.getResultPoints());
            extensionLength = extensionResult.getText().length;
        }
        catch (err) {
        }
        var allowedExtensions = hints == null ? null : hints.get(DecodeHintType_1.default.ALLOWED_EAN_EXTENSIONS);
        if (allowedExtensions != null) {
            var valid = false;
            for (var length_1 in allowedExtensions) {
                if (extensionLength.toString() === length_1) { // check me
                    valid = true;
                    break;
                }
            }
            if (!valid) {
                throw new NotFoundException_1.default();
            }
        }
        if (format === BarcodeFormat_1.default.EAN_13 || format === BarcodeFormat_1.default.UPC_A) {
            // let countryID = eanManSupport.lookupContryIdentifier(resultString); todo
            // if (countryID != null) {
            //     decodeResult.putMetadata(ResultMetadataType.POSSIBLE_COUNTRY, countryID);
            // }
        }
        return decodeResult;
    };
    UPCEANReader.checkChecksum = function (s) {
        return UPCEANReader.checkStandardUPCEANChecksum(s);
    };
    UPCEANReader.checkStandardUPCEANChecksum = function (s) {
        var length = s.length;
        if (length === 0)
            return false;
        var check = parseInt(s.charAt(length - 1), 10);
        return UPCEANReader.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
    };
    UPCEANReader.getStandardUPCEANChecksum = function (s) {
        var length = s.length;
        var sum = 0;
        for (var i = length - 1; i >= 0; i -= 2) {
            var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
            if (digit < 0 || digit > 9) {
                throw new FormatException_1.default();
            }
            sum += digit;
        }
        sum *= 3;
        for (var i = length - 2; i >= 0; i -= 2) {
            var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
            if (digit < 0 || digit > 9) {
                throw new FormatException_1.default();
            }
            sum += digit;
        }
        return (1000 - sum) % 10;
    };
    UPCEANReader.decodeEnd = function (row, endStart) {
        return UPCEANReader.findGuardPattern(row, endStart, false, UPCEANReader.START_END_PATTERN, new Array(UPCEANReader.START_END_PATTERN.length).fill(0));
    };
    UPCEANReader.findGuardPattern = function (row, rowOffset, whiteFirst, pattern, counters) {
        var width = row.getSize();
        rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
        var counterPosition = 0;
        var patternStart = rowOffset;
        var patternLength = pattern.length;
        var isWhite = whiteFirst;
        for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (counterPosition === patternLength - 1) {
                    if (OneDReader_1.default.patternMatchVariance(counters, pattern, UPCEANReader.MAX_INDIVIDUAL_VARIANCE) < UPCEANReader.MAX_AVG_VARIANCE) {
                        return [patternStart, x];
                    }
                    patternStart += counters[0] + counters[1];
                    var slice = counters.slice(2, counters.length);
                    for (var i = 0; i < counterPosition - 1; i++) {
                        counters[i] = slice[i];
                    }
                    counters[counterPosition - 1] = 0;
                    counters[counterPosition] = 0;
                    counterPosition--;
                }
                else {
                    counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
            }
        }
        throw new NotFoundException_1.default();
    };
    UPCEANReader.decodeDigit = function (row, counters, rowOffset, patterns) {
        this.recordPattern(row, rowOffset, counters);
        var bestVariance = this.MAX_AVG_VARIANCE;
        var bestMatch = -1;
        var max = patterns.length;
        for (var i = 0; i < max; i++) {
            var pattern = patterns[i];
            var variance = OneDReader_1.default.patternMatchVariance(counters, pattern, UPCEANReader.MAX_INDIVIDUAL_VARIANCE);
            if (variance < bestVariance) {
                bestVariance = variance;
                bestMatch = i;
            }
        }
        if (bestMatch >= 0) {
            return bestMatch;
        }
        else {
            throw new NotFoundException_1.default();
        }
    };
    // These two values are critical for determining how permissive the decoding will be.
    // We've arrived at these values through a lot of trial and error. Setting them any higher
    // lets false positives creep in quickly.
    UPCEANReader.MAX_AVG_VARIANCE = 0.48;
    UPCEANReader.MAX_INDIVIDUAL_VARIANCE = 0.7;
    /**
     * Start/end guard pattern.
     */
    UPCEANReader.START_END_PATTERN = [1, 1, 1];
    /**
     * Pattern marking the middle of a UPC/EAN pattern, separating the two halves.
     */
    UPCEANReader.MIDDLE_PATTERN = [1, 1, 1, 1, 1];
    /**
     * end guard pattern.
     */
    UPCEANReader.END_PATTERN = [1, 1, 1, 1, 1, 1];
    /**
     * "Odd", or "L" patterns used to encode UPC/EAN digits.
     */
    UPCEANReader.L_PATTERNS = [
        [3, 2, 1, 1],
        [2, 2, 2, 1],
        [2, 1, 2, 2],
        [1, 4, 1, 1],
        [1, 1, 3, 2],
        [1, 2, 3, 1],
        [1, 1, 1, 4],
        [1, 3, 1, 2],
        [1, 2, 1, 3],
        [3, 1, 1, 2],
    ];
    return UPCEANReader;
}(OneDReader_1.default));
exports.default = UPCEANReader;


/***/ }),

/***/ "./src/core/oned/rss/AbstractRSSReader.ts":
/*!************************************************!*\
  !*** ./src/core/oned/rss/AbstractRSSReader.ts ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OneDReader_1 = __webpack_require__(/*! ../OneDReader */ "./src/core/oned/OneDReader.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
var MathUtils_1 = __webpack_require__(/*! ../../common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
var AbstractRSSReader = /** @class */ (function (_super) {
    __extends(AbstractRSSReader, _super);
    function AbstractRSSReader() {
        var _this = _super.call(this) || this;
        _this.decodeFinderCounters = new Array(4);
        _this.dataCharacterCounters = new Array(8);
        _this.oddRoundingErrors = new Array(4);
        _this.evenRoundingErrors = new Array(4);
        _this.oddCounts = new Array(_this.dataCharacterCounters.length / 2);
        _this.evenCounts = new Array(_this.dataCharacterCounters.length / 2);
        return _this;
    }
    AbstractRSSReader.prototype.getDecodeFinderCounters = function () {
        return this.decodeFinderCounters;
    };
    AbstractRSSReader.prototype.getDataCharacterCounters = function () {
        return this.dataCharacterCounters;
    };
    AbstractRSSReader.prototype.getOddRoundingErrors = function () {
        return this.oddRoundingErrors;
    };
    AbstractRSSReader.prototype.getEvenRoundingErrors = function () {
        return this.evenRoundingErrors;
    };
    AbstractRSSReader.prototype.getOddCounts = function () {
        return this.oddCounts;
    };
    AbstractRSSReader.prototype.getEvenCounts = function () {
        return this.evenCounts;
    };
    AbstractRSSReader.prototype.parseFinderValue = function (counters, finderPatterns) {
        for (var value = 0; value < finderPatterns.length; value++) {
            if (OneDReader_1.default.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader.MAX_AVG_VARIANCE) {
                return value;
            }
        }
        throw new NotFoundException_1.default();
    };
    /**
     * @param array values to sum
     * @return sum of values
     * @deprecated call {@link MathUtils#sum(int[])}
     */
    AbstractRSSReader.count = function (array) {
        return MathUtils_1.default.sum(new Int32Array(array));
    };
    AbstractRSSReader.increment = function (array, errors) {
        var index = 0;
        var biggestError = errors[0];
        for (var i = 1; i < array.length; i++) {
            if (errors[i] > biggestError) {
                biggestError = errors[i];
                index = i;
            }
        }
        array[index]++;
    };
    AbstractRSSReader.decrement = function (array, errors) {
        var index = 0;
        var biggestError = errors[0];
        for (var i = 1; i < array.length; i++) {
            if (errors[i] < biggestError) {
                biggestError = errors[i];
                index = i;
            }
        }
        array[index]--;
    };
    AbstractRSSReader.isFinderPattern = function (counters) {
        var firstTwoSum = counters[0] + counters[1];
        var sum = firstTwoSum + counters[2] + counters[3];
        var ratio = firstTwoSum / sum;
        if (ratio >= AbstractRSSReader.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader.MAX_FINDER_PATTERN_RATIO) {
            // passes ratio test in spec, but see if the counts are unreasonable
            var minCounter = Number.MAX_SAFE_INTEGER;
            var maxCounter = Number.MIN_SAFE_INTEGER;
            for (var _i = 0, counters_1 = counters; _i < counters_1.length; _i++) {
                var counter = counters_1[_i];
                if (counter > maxCounter) {
                    maxCounter = counter;
                }
                if (counter < minCounter) {
                    minCounter = counter;
                }
            }
            return maxCounter < 10 * minCounter;
        }
        return false;
    };
    AbstractRSSReader.MAX_AVG_VARIANCE = 0.2;
    AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE = 0.45;
    AbstractRSSReader.MIN_FINDER_PATTERN_RATIO = 9.5 / 12.0;
    AbstractRSSReader.MAX_FINDER_PATTERN_RATIO = 12.5 / 14.0;
    return AbstractRSSReader;
}(OneDReader_1.default));
exports.default = AbstractRSSReader;


/***/ }),

/***/ "./src/core/oned/rss/DataCharacter.ts":
/*!********************************************!*\
  !*** ./src/core/oned/rss/DataCharacter.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataCharacter = /** @class */ (function () {
    function DataCharacter(value, checksumPortion) {
        this.value = value;
        this.checksumPortion = checksumPortion;
    }
    DataCharacter.prototype.getValue = function () {
        return this.value;
    };
    DataCharacter.prototype.getChecksumPortion = function () {
        return this.checksumPortion;
    };
    DataCharacter.prototype.toString = function () {
        return this.value + '(' + this.checksumPortion + ')';
    };
    DataCharacter.prototype.equals = function (o) {
        if (!(o instanceof DataCharacter)) {
            return false;
        }
        var that = o;
        return this.value === that.value && this.checksumPortion === that.checksumPortion;
    };
    DataCharacter.prototype.hashCode = function () {
        return this.value ^ this.checksumPortion;
    };
    return DataCharacter;
}());
exports.default = DataCharacter;


/***/ }),

/***/ "./src/core/oned/rss/FinderPattern.ts":
/*!********************************************!*\
  !*** ./src/core/oned/rss/FinderPattern.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var FinderPattern = /** @class */ (function () {
    function FinderPattern(value, startEnd, start, end, rowNumber) {
        this.value = value;
        this.startEnd = startEnd;
        this.value = value;
        this.startEnd = startEnd;
        this.resultPoints = new Array();
        this.resultPoints.push(new ResultPoint_1.default(start, rowNumber));
        this.resultPoints.push(new ResultPoint_1.default(end, rowNumber));
    }
    FinderPattern.prototype.getValue = function () {
        return this.value;
    };
    FinderPattern.prototype.getStartEnd = function () {
        return this.startEnd;
    };
    FinderPattern.prototype.getResultPoints = function () {
        return this.resultPoints;
    };
    FinderPattern.prototype.equals = function (o) {
        if (!(o instanceof FinderPattern)) {
            return false;
        }
        var that = o;
        return this.value === that.value;
    };
    FinderPattern.prototype.hashCode = function () {
        return this.value;
    };
    return FinderPattern;
}());
exports.default = FinderPattern;


/***/ }),

/***/ "./src/core/oned/rss/Pair.ts":
/*!***********************************!*\
  !*** ./src/core/oned/rss/Pair.ts ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DataCharacter_1 = __webpack_require__(/*! ./DataCharacter */ "./src/core/oned/rss/DataCharacter.ts");
var Pair = /** @class */ (function (_super) {
    __extends(Pair, _super);
    function Pair(value, checksumPortion, finderPattern) {
        var _this = _super.call(this, value, checksumPortion) || this;
        _this.count = 0;
        _this.finderPattern = finderPattern;
        return _this;
    }
    Pair.prototype.getFinderPattern = function () {
        return this.finderPattern;
    };
    Pair.prototype.getCount = function () {
        return this.count;
    };
    Pair.prototype.incrementCount = function () {
        this.count++;
    };
    return Pair;
}(DataCharacter_1.default));
exports.default = Pair;


/***/ }),

/***/ "./src/core/oned/rss/RSS14Reader.ts":
/*!******************************************!*\
  !*** ./src/core/oned/rss/RSS14Reader.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRSSReader_1 = __webpack_require__(/*! ./AbstractRSSReader */ "./src/core/oned/rss/AbstractRSSReader.ts");
var Pair_1 = __webpack_require__(/*! ./Pair */ "./src/core/oned/rss/Pair.ts");
var Result_1 = __webpack_require__(/*! ../../Result */ "./src/core/Result.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../../DecodeHintType */ "./src/core/DecodeHintType.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var BarcodeFormat_1 = __webpack_require__(/*! ../../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var FinderPattern_1 = __webpack_require__(/*! ./FinderPattern */ "./src/core/oned/rss/FinderPattern.ts");
var DataCharacter_1 = __webpack_require__(/*! ./DataCharacter */ "./src/core/oned/rss/DataCharacter.ts");
var MathUtils_1 = __webpack_require__(/*! ../../common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
var RSSUtils_1 = __webpack_require__(/*! ./RSSUtils */ "./src/core/oned/rss/RSSUtils.ts");
var System_1 = __webpack_require__(/*! ../../util/System */ "./src/core/util/System.ts");
var OneDReader_1 = __webpack_require__(/*! ../OneDReader */ "./src/core/oned/OneDReader.ts");
var RSS14Reader = /** @class */ (function (_super) {
    __extends(RSS14Reader, _super);
    function RSS14Reader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.possibleLeftPairs = [];
        _this.possibleRightPairs = [];
        return _this;
    }
    RSS14Reader.prototype.decodeRow = function (rowNumber, row, hints) {
        var leftPair = this.decodePair(row, false, rowNumber, hints);
        RSS14Reader.addOrTally(this.possibleLeftPairs, leftPair);
        row.reverse();
        var rightPair = this.decodePair(row, true, rowNumber, hints);
        RSS14Reader.addOrTally(this.possibleRightPairs, rightPair);
        row.reverse();
        for (var _i = 0, _a = this.possibleLeftPairs; _i < _a.length; _i++) {
            var left = _a[_i];
            if (left.getCount() > 1) {
                for (var _b = 0, _c = this.possibleRightPairs; _b < _c.length; _b++) {
                    var right = _c[_b];
                    if (right.getCount() > 1 && RSS14Reader.checkChecksum(left, right)) {
                        return RSS14Reader.constructResult(left, right);
                    }
                }
            }
        }
        throw new NotFoundException_1.default();
    };
    RSS14Reader.addOrTally = function (possiblePairs, pair) {
        if (pair == null) {
            return;
        }
        var found = false;
        for (var _i = 0, possiblePairs_1 = possiblePairs; _i < possiblePairs_1.length; _i++) {
            var other = possiblePairs_1[_i];
            if (other.getValue() === pair.getValue()) {
                other.incrementCount();
                found = true;
                break;
            }
        }
        if (!found) {
            possiblePairs.push(pair);
        }
    };
    RSS14Reader.prototype.reset = function () {
        this.possibleLeftPairs.length = 0;
        this.possibleRightPairs.length = 0;
    };
    RSS14Reader.constructResult = function (leftPair, rightPair) {
        var symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
        var text = new String(symbolValue).toString();
        var buffer = new StringBuilder_1.default();
        for (var i = 13 - text.length; i > 0; i--) {
            buffer.append('0');
        }
        buffer.append(text);
        var checkDigit = 0;
        for (var i = 0; i < 13; i++) {
            var digit = buffer.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
            checkDigit += ((i & 0x01) === 0) ? 3 * digit : digit;
        }
        checkDigit = 10 - (checkDigit % 10);
        if (checkDigit === 10) {
            checkDigit = 0;
        }
        buffer.append(checkDigit.toString());
        var leftPoints = leftPair.getFinderPattern().getResultPoints();
        var rightPoints = rightPair.getFinderPattern().getResultPoints();
        return new Result_1.default(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat_1.default.RSS_14, new Date().getTime());
    };
    RSS14Reader.checkChecksum = function (leftPair, rightPair) {
        var checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
        var targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
        if (targetCheckValue > 72) {
            targetCheckValue--;
        }
        if (targetCheckValue > 8) {
            targetCheckValue--;
        }
        return checkValue === targetCheckValue;
    };
    RSS14Reader.prototype.decodePair = function (row, right, rowNumber, hints) {
        try {
            var startEnd = this.findFinderPattern(row, right);
            var pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
            var resultPointCallback = hints == null ? null : hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
            if (resultPointCallback != null) {
                var center = (startEnd[0] + startEnd[1]) / 2.0;
                if (right) {
                    // row is actually reversed
                    center = row.getSize() - 1 - center;
                }
                resultPointCallback.foundPossibleResultPoint(new ResultPoint_1.default(center, rowNumber));
            }
            var outside = this.decodeDataCharacter(row, pattern, true);
            var inside = this.decodeDataCharacter(row, pattern, false);
            return new Pair_1.default(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
        }
        catch (err) {
            return null;
        }
    };
    RSS14Reader.prototype.decodeDataCharacter = function (row, pattern, outsideChar) {
        var counters = this.getDataCharacterCounters();
        for (var x = 0; x < counters.length; x++) {
            counters[x] = 0;
        }
        if (outsideChar) {
            OneDReader_1.default.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
        }
        else {
            OneDReader_1.default.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
            // reverse it
            for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
                var temp = counters[i];
                counters[i] = counters[j];
                counters[j] = temp;
            }
        }
        var numModules = outsideChar ? 16 : 15;
        var elementWidth = MathUtils_1.default.sum(new Int32Array(counters)) / numModules;
        var oddCounts = this.getOddCounts();
        var evenCounts = this.getEvenCounts();
        var oddRoundingErrors = this.getOddRoundingErrors();
        var evenRoundingErrors = this.getEvenRoundingErrors();
        for (var i = 0; i < counters.length; i++) {
            var value = counters[i] / elementWidth;
            var count = Math.floor(value + 0.5);
            if (count < 1) {
                count = 1;
            }
            else if (count > 8) {
                count = 8;
            }
            var offset = Math.floor(i / 2);
            if ((i & 0x01) === 0) {
                oddCounts[offset] = count;
                oddRoundingErrors[offset] = value - count;
            }
            else {
                evenCounts[offset] = count;
                evenRoundingErrors[offset] = value - count;
            }
        }
        this.adjustOddEvenCounts(outsideChar, numModules);
        var oddSum = 0;
        var oddChecksumPortion = 0;
        for (var i = oddCounts.length - 1; i >= 0; i--) {
            oddChecksumPortion *= 9;
            oddChecksumPortion += oddCounts[i];
            oddSum += oddCounts[i];
        }
        var evenChecksumPortion = 0;
        var evenSum = 0;
        for (var i = evenCounts.length - 1; i >= 0; i--) {
            evenChecksumPortion *= 9;
            evenChecksumPortion += evenCounts[i];
            evenSum += evenCounts[i];
        }
        var checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
        if (outsideChar) {
            if ((oddSum & 0x01) !== 0 || oddSum > 12 || oddSum < 4) {
                throw new NotFoundException_1.default();
            }
            var group = (12 - oddSum) / 2;
            var oddWidest = RSS14Reader.OUTSIDE_ODD_WIDEST[group];
            var evenWidest = 9 - oddWidest;
            var vOdd = RSSUtils_1.default.getRSSvalue(oddCounts, oddWidest, false);
            var vEven = RSSUtils_1.default.getRSSvalue(evenCounts, evenWidest, true);
            var tEven = RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET[group];
            var gSum = RSS14Reader.OUTSIDE_GSUM[group];
            return new DataCharacter_1.default(vOdd * tEven + vEven + gSum, checksumPortion);
        }
        else {
            if ((evenSum & 0x01) !== 0 || evenSum > 10 || evenSum < 4) {
                throw new NotFoundException_1.default();
            }
            var group = (10 - evenSum) / 2;
            var oddWidest = RSS14Reader.INSIDE_ODD_WIDEST[group];
            var evenWidest = 9 - oddWidest;
            var vOdd = RSSUtils_1.default.getRSSvalue(oddCounts, oddWidest, true);
            var vEven = RSSUtils_1.default.getRSSvalue(evenCounts, evenWidest, false);
            var tOdd = RSS14Reader.INSIDE_ODD_TOTAL_SUBSET[group];
            var gSum = RSS14Reader.INSIDE_GSUM[group];
            return new DataCharacter_1.default(vEven * tOdd + vOdd + gSum, checksumPortion);
        }
    };
    RSS14Reader.prototype.findFinderPattern = function (row, rightFinderPattern) {
        var counters = this.getDecodeFinderCounters();
        counters[0] = 0;
        counters[1] = 0;
        counters[2] = 0;
        counters[3] = 0;
        var width = row.getSize();
        var isWhite = false;
        var rowOffset = 0;
        while (rowOffset < width) {
            isWhite = !row.get(rowOffset);
            if (rightFinderPattern === isWhite) {
                // Will encounter white first when searching for right finder pattern
                break;
            }
            rowOffset++;
        }
        var counterPosition = 0;
        var patternStart = rowOffset;
        for (var x = rowOffset; x < width; x++) {
            if (row.get(x) !== isWhite) {
                counters[counterPosition]++;
            }
            else {
                if (counterPosition === 3) {
                    if (AbstractRSSReader_1.default.isFinderPattern(counters)) {
                        return [patternStart, x];
                    }
                    patternStart += counters[0] + counters[1];
                    counters[0] = counters[2];
                    counters[1] = counters[3];
                    counters[2] = 0;
                    counters[3] = 0;
                    counterPosition--;
                }
                else {
                    counterPosition++;
                }
                counters[counterPosition] = 1;
                isWhite = !isWhite;
            }
        }
        throw new NotFoundException_1.default();
    };
    RSS14Reader.prototype.parseFoundFinderPattern = function (row, rowNumber, right, startEnd) {
        // Actually we found elements 2-5
        var firstIsBlack = row.get(startEnd[0]);
        var firstElementStart = startEnd[0] - 1;
        // Locate element 1
        while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
            firstElementStart--;
        }
        firstElementStart++;
        var firstCounter = startEnd[0] - firstElementStart;
        // Make 'counters' hold 1-4
        var counters = this.getDecodeFinderCounters();
        var copy = new Array(counters.length);
        System_1.default.arraycopy(counters, 0, copy, 1, counters.length - 1);
        copy[0] = firstCounter;
        var value = this.parseFinderValue(copy, RSS14Reader.FINDER_PATTERNS);
        var start = firstElementStart;
        var end = startEnd[1];
        if (right) {
            // row is actually reversed
            start = row.getSize() - 1 - start;
            end = row.getSize() - 1 - end;
        }
        return new FinderPattern_1.default(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
    };
    RSS14Reader.prototype.adjustOddEvenCounts = function (outsideChar, numModules) {
        var oddSum = MathUtils_1.default.sum(new Int32Array(this.getOddCounts()));
        var evenSum = MathUtils_1.default.sum(new Int32Array(this.getEvenCounts()));
        var incrementOdd = false;
        var decrementOdd = false;
        var incrementEven = false;
        var decrementEven = false;
        if (outsideChar) {
            if (oddSum > 12) {
                decrementOdd = true;
            }
            else if (oddSum < 4) {
                incrementOdd = true;
            }
            if (evenSum > 12) {
                decrementEven = true;
            }
            else if (evenSum < 4) {
                incrementEven = true;
            }
        }
        else {
            if (oddSum > 11) {
                decrementOdd = true;
            }
            else if (oddSum < 5) {
                incrementOdd = true;
            }
            if (evenSum > 10) {
                decrementEven = true;
            }
            else if (evenSum < 4) {
                incrementEven = true;
            }
        }
        var mismatch = oddSum + evenSum - numModules;
        var oddParityBad = (oddSum & 0x01) === (outsideChar ? 1 : 0);
        var evenParityBad = (evenSum & 0x01) === 1;
        if (mismatch === 1) {
            if (oddParityBad) {
                if (evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                decrementOdd = true;
            }
            else {
                if (!evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                decrementEven = true;
            }
        }
        else if (mismatch === -1) {
            if (oddParityBad) {
                if (evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                incrementOdd = true;
            }
            else {
                if (!evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                incrementEven = true;
            }
        }
        else if (mismatch === 0) {
            if (oddParityBad) {
                if (!evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                // Both bad
                if (oddSum < evenSum) {
                    incrementOdd = true;
                    decrementEven = true;
                }
                else {
                    decrementOdd = true;
                    incrementEven = true;
                }
            }
            else {
                if (evenParityBad) {
                    throw new NotFoundException_1.default();
                }
                // Nothing to do!
            }
        }
        else {
            throw new NotFoundException_1.default();
        }
        if (incrementOdd) {
            if (decrementOdd) {
                throw new NotFoundException_1.default();
            }
            AbstractRSSReader_1.default.increment(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (decrementOdd) {
            AbstractRSSReader_1.default.decrement(this.getOddCounts(), this.getOddRoundingErrors());
        }
        if (incrementEven) {
            if (decrementEven) {
                throw new NotFoundException_1.default();
            }
            AbstractRSSReader_1.default.increment(this.getEvenCounts(), this.getOddRoundingErrors());
        }
        if (decrementEven) {
            AbstractRSSReader_1.default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
        }
    };
    RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
    RSS14Reader.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
    RSS14Reader.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
    RSS14Reader.INSIDE_GSUM = [0, 336, 1036, 1516];
    RSS14Reader.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
    RSS14Reader.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
    RSS14Reader.FINDER_PATTERNS = [
        [3, 8, 2, 1],
        [3, 5, 5, 1],
        [3, 3, 7, 1],
        [3, 1, 9, 1],
        [2, 7, 4, 1],
        [2, 5, 6, 1],
        [2, 3, 8, 1],
        [1, 5, 7, 1],
        [1, 3, 9, 1],
    ];
    return RSS14Reader;
}(AbstractRSSReader_1.default));
exports.default = RSS14Reader;


/***/ }),

/***/ "./src/core/oned/rss/RSSUtils.ts":
/*!***************************************!*\
  !*** ./src/core/oned/rss/RSSUtils.ts ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * RSS util functions.
 */
var RSSUtils = /** @class */ (function () {
    function RSSUtils() {
    }
    RSSUtils.prototype.RSSUtils = function () { };
    RSSUtils.getRSSvalue = function (widths, maxWidth, noNarrow) {
        var n = 0;
        for (var _i = 0, widths_1 = widths; _i < widths_1.length; _i++) {
            var width = widths_1[_i];
            n += width;
        }
        var val = 0;
        var narrowMask = 0;
        var elements = widths.length;
        for (var bar = 0; bar < elements - 1; bar++) {
            var elmWidth = void 0;
            for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
                var subVal = RSSUtils.combins(n - elmWidth - 1, elements - bar - 2);
                if (noNarrow && (narrowMask === 0) && (n - elmWidth - (elements - bar - 1) >= elements - bar - 1)) {
                    subVal -= RSSUtils.combins(n - elmWidth - (elements - bar), elements - bar - 2);
                }
                if (elements - bar - 1 > 1) {
                    var lessVal = 0;
                    for (var mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
                        lessVal += RSSUtils.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
                    }
                    subVal -= lessVal * (elements - 1 - bar);
                }
                else if (n - elmWidth > maxWidth) {
                    subVal--;
                }
                val += subVal;
            }
            n -= elmWidth;
        }
        return val;
    };
    RSSUtils.combins = function (n, r) {
        var maxDenom;
        var minDenom;
        if (n - r > r) {
            minDenom = r;
            maxDenom = n - r;
        }
        else {
            minDenom = n - r;
            maxDenom = r;
        }
        var val = 1;
        var j = 1;
        for (var i = n; i > maxDenom; i--) {
            val *= i;
            if (j <= minDenom) {
                val /= j;
                j++;
            }
        }
        while ((j <= minDenom)) {
            val /= j;
            j++;
        }
        return val;
    };
    return RSSUtils;
}());
exports.default = RSSUtils;


/***/ }),

/***/ "./src/core/qrcode/QRCodeReader.ts":
/*!*****************************************!*\
  !*** ./src/core/qrcode/QRCodeReader.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var DecodeHintType_1 = __webpack_require__(/*! ../DecodeHintType */ "./src/core/DecodeHintType.ts");
var Result_1 = __webpack_require__(/*! ../Result */ "./src/core/Result.ts");
var ResultMetadataType_1 = __webpack_require__(/*! ../ResultMetadataType */ "./src/core/ResultMetadataType.ts");
var BitMatrix_1 = __webpack_require__(/*! ../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var Decoder_1 = __webpack_require__(/*! ./decoder/Decoder */ "./src/core/qrcode/decoder/Decoder.ts");
var QRCodeDecoderMetaData_1 = __webpack_require__(/*! ./decoder/QRCodeDecoderMetaData */ "./src/core/qrcode/decoder/QRCodeDecoderMetaData.ts");
var Detector_1 = __webpack_require__(/*! ./detector/Detector */ "./src/core/qrcode/detector/Detector.ts");
var NotFoundException_1 = __webpack_require__(/*! ../NotFoundException */ "./src/core/NotFoundException.ts");
/*import java.util.List;*/
/*import java.util.Map;*/
/**
 * This implementation can detect and decode QR Codes in an image.
 *
 * @author Sean Owen
 */
var QRCodeReader = /** @class */ (function () {
    function QRCodeReader() {
        this.decoder = new Decoder_1.default();
    }
    QRCodeReader.prototype.getDecoder = function () {
        return this.decoder;
    };
    /**
     * Locates and decodes a QR code in an image.
     *
     * @return a representing: string the content encoded by the QR code
     * @throws NotFoundException if a QR code cannot be found
     * @throws FormatException if a QR code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    /*@Override*/
    // public decode(image: BinaryBitmap): Result /*throws NotFoundException, ChecksumException, FormatException */ {
    //   return this.decode(image, null)
    // }
    /*@Override*/
    QRCodeReader.prototype.decode = function (image, hints) {
        var decoderResult;
        var points;
        if (hints !== undefined && hints !== null && undefined !== hints.get(DecodeHintType_1.default.PURE_BARCODE)) {
            var bits = QRCodeReader.extractPureBits(image.getBlackMatrix());
            decoderResult = this.decoder.decodeBitMatrix(bits, hints);
            points = QRCodeReader.NO_POINTS;
        }
        else {
            var detectorResult = new Detector_1.default(image.getBlackMatrix()).detect(hints);
            decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
            points = detectorResult.getPoints();
        }
        // If the code was mirrored: swap the bottom-left and the top-right points.
        if (decoderResult.getOther() instanceof QRCodeDecoderMetaData_1.default) {
            decoderResult.getOther().applyMirroredCorrection(points);
        }
        var result = new Result_1.default(decoderResult.getText(), decoderResult.getRawBytes(), undefined, points, BarcodeFormat_1.default.QR_CODE, undefined);
        var byteSegments = decoderResult.getByteSegments();
        if (byteSegments !== null) {
            result.putMetadata(ResultMetadataType_1.default.BYTE_SEGMENTS, byteSegments);
        }
        var ecLevel = decoderResult.getECLevel();
        if (ecLevel !== null) {
            result.putMetadata(ResultMetadataType_1.default.ERROR_CORRECTION_LEVEL, ecLevel);
        }
        if (decoderResult.hasStructuredAppend()) {
            result.putMetadata(ResultMetadataType_1.default.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
            result.putMetadata(ResultMetadataType_1.default.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
        }
        return result;
    };
    /*@Override*/
    QRCodeReader.prototype.reset = function () {
        // do nothing
    };
    /**
     * This method detects a code in a "pure" image -- that is, pure monochrome image
     * which contains only an unrotated, unskewed, image of a code, with some white border
     * around it. This is a specialized method that works exceptionally fast in this special
     * case.
     *
     * @see com.google.zxing.datamatrix.DataMatrixReader#extractPureBits(BitMatrix)
     */
    QRCodeReader.extractPureBits = function (image) {
        var leftTopBlack = image.getTopLeftOnBit();
        var rightBottomBlack = image.getBottomRightOnBit();
        if (leftTopBlack === null || rightBottomBlack === null) {
            throw new NotFoundException_1.default();
        }
        var moduleSize = this.moduleSize(leftTopBlack, image);
        var top = leftTopBlack[1];
        var bottom = rightBottomBlack[1];
        var left = leftTopBlack[0];
        var right = rightBottomBlack[0];
        // Sanity check!
        if (left >= right || top >= bottom) {
            throw new NotFoundException_1.default();
        }
        if (bottom - top !== right - left) {
            // Special case, where bottom-right module wasn't black so we found something else in the last row
            // Assume it's a square, so use height as the width
            right = left + (bottom - top);
            if (right >= image.getWidth()) {
                // Abort if that would not make sense -- off image
                throw new NotFoundException_1.default();
            }
        }
        var matrixWidth = Math.round((right - left + 1) / moduleSize);
        var matrixHeight = Math.round((bottom - top + 1) / moduleSize);
        if (matrixWidth <= 0 || matrixHeight <= 0) {
            throw new NotFoundException_1.default();
        }
        if (matrixHeight !== matrixWidth) {
            // Only possibly decode square regions
            throw new NotFoundException_1.default();
        }
        // Push in the "border" by half the module width so that we start
        // sampling in the middle of the module. Just in case the image is a
        // little off, this will help recover.
        var nudge = /*(int) */ Math.floor(moduleSize / 2.0);
        top += nudge;
        left += nudge;
        // But careful that this does not sample off the edge
        // "right" is the farthest-right valid pixel location -- right+1 is not necessarily
        // This is positive by how much the inner x loop below would be too large
        var nudgedTooFarRight = left + /*(int) */ Math.floor((matrixWidth - 1) * moduleSize) - right;
        if (nudgedTooFarRight > 0) {
            if (nudgedTooFarRight > nudge) {
                // Neither way fits; abort
                throw new NotFoundException_1.default();
            }
            left -= nudgedTooFarRight;
        }
        // See logic above
        var nudgedTooFarDown = top + /*(int) */ Math.floor((matrixHeight - 1) * moduleSize) - bottom;
        if (nudgedTooFarDown > 0) {
            if (nudgedTooFarDown > nudge) {
                // Neither way fits; abort
                throw new NotFoundException_1.default();
            }
            top -= nudgedTooFarDown;
        }
        // Now just read off the bits
        var bits = new BitMatrix_1.default(matrixWidth, matrixHeight);
        for (var y = 0; y < matrixHeight; y++) {
            var iOffset = top + /*(int) */ Math.floor(y * moduleSize);
            for (var x = 0; x < matrixWidth; x++) {
                if (image.get(left + /*(int) */ Math.floor(x * moduleSize), iOffset)) {
                    bits.set(x, y);
                }
            }
        }
        return bits;
    };
    QRCodeReader.moduleSize = function (leftTopBlack, image) {
        var height = image.getHeight();
        var width = image.getWidth();
        var x = leftTopBlack[0];
        var y = leftTopBlack[1];
        var inBlack = true;
        var transitions = 0;
        while (x < width && y < height) {
            if (inBlack !== image.get(x, y)) {
                if (++transitions === 5) {
                    break;
                }
                inBlack = !inBlack;
            }
            x++;
            y++;
        }
        if (x === width || y === height) {
            throw new NotFoundException_1.default();
        }
        return (x - leftTopBlack[0]) / 7.0;
    };
    QRCodeReader.NO_POINTS = new Array();
    return QRCodeReader;
}());
exports.default = QRCodeReader;


/***/ }),

/***/ "./src/core/qrcode/QRCodeWriter.ts":
/*!*****************************************!*\
  !*** ./src/core/qrcode/QRCodeWriter.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode {*/
var BarcodeFormat_1 = __webpack_require__(/*! ../BarcodeFormat */ "./src/core/BarcodeFormat.ts");
var EncodeHintType_1 = __webpack_require__(/*! ../EncodeHintType */ "./src/core/EncodeHintType.ts");
var BitMatrix_1 = __webpack_require__(/*! ../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var ErrorCorrectionLevel_1 = __webpack_require__(/*! ./decoder/ErrorCorrectionLevel */ "./src/core/qrcode/decoder/ErrorCorrectionLevel.ts");
var Encoder_1 = __webpack_require__(/*! ./encoder/Encoder */ "./src/core/qrcode/encoder/Encoder.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var IllegalStateException_1 = __webpack_require__(/*! ../IllegalStateException */ "./src/core/IllegalStateException.ts");
/*import java.util.Map;*/
/**
 * This object renders a QR Code as a BitMatrix 2D array of greyscale values.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var QRCodeWriter = /** @class */ (function () {
    function QRCodeWriter() {
    }
    /*@Override*/
    // public encode(contents: string, format: BarcodeFormat, width: number /*int*/, height: number /*int*/): BitMatrix
    //     /*throws WriterException */ {
    //   return encode(contents, format, width, height, null)
    // }
    /*@Override*/
    QRCodeWriter.prototype.encode = function (contents, format, width /*int*/, height /*int*/, hints) {
        if (contents.length === 0) {
            throw new IllegalArgumentException_1.default('Found empty contents');
        }
        if (format !== BarcodeFormat_1.default.QR_CODE) {
            throw new IllegalArgumentException_1.default('Can only encode QR_CODE, but got ' + format);
        }
        if (width < 0 || height < 0) {
            throw new IllegalArgumentException_1.default("Requested dimensions are too small: " + width + "x" + height);
        }
        var errorCorrectionLevel = ErrorCorrectionLevel_1.default.L;
        var quietZone = QRCodeWriter.QUIET_ZONE_SIZE;
        if (hints !== null) {
            if (undefined !== hints.get(EncodeHintType_1.default.ERROR_CORRECTION)) {
                errorCorrectionLevel = ErrorCorrectionLevel_1.default.fromString(hints.get(EncodeHintType_1.default.ERROR_CORRECTION).toString());
            }
            if (undefined !== hints.get(EncodeHintType_1.default.MARGIN)) {
                quietZone = Number.parseInt(hints.get(EncodeHintType_1.default.MARGIN).toString(), 10);
            }
        }
        var code = Encoder_1.default.encode(contents, errorCorrectionLevel, hints);
        return QRCodeWriter.renderResult(code, width, height, quietZone);
    };
    // Note that the input matrix uses 0 == white, 1 == black, while the output matrix uses
    // 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
    QRCodeWriter.renderResult = function (code, width /*int*/, height /*int*/, quietZone /*int*/) {
        var input = code.getMatrix();
        if (input === null) {
            throw new IllegalStateException_1.default();
        }
        var inputWidth = input.getWidth();
        var inputHeight = input.getHeight();
        var qrWidth = inputWidth + (quietZone * 2);
        var qrHeight = inputHeight + (quietZone * 2);
        var outputWidth = Math.max(width, qrWidth);
        var outputHeight = Math.max(height, qrHeight);
        var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight));
        // Padding includes both the quiet zone and the extra white pixels to accommodate the requested
        // dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
        // If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
        // handle all the padding from 100x100 (the actual QR) up to 200x160.
        var leftPadding = Math.floor((outputWidth - (inputWidth * multiple)) / 2);
        var topPadding = Math.floor((outputHeight - (inputHeight * multiple)) / 2);
        var output = new BitMatrix_1.default(outputWidth, outputHeight);
        for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
            // Write the contents of this row of the barcode
            for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
                if (input.get(inputX, inputY) === 1) {
                    output.setRegion(outputX, outputY, multiple, multiple);
                }
            }
        }
        return output;
    };
    QRCodeWriter.QUIET_ZONE_SIZE = 4;
    return QRCodeWriter;
}());
exports.default = QRCodeWriter;


/***/ }),

/***/ "./src/core/qrcode/decoder/BitMatrixParser.ts":
/*!****************************************************!*\
  !*** ./src/core/qrcode/decoder/BitMatrixParser.ts ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Version_1 = __webpack_require__(/*! ./Version */ "./src/core/qrcode/decoder/Version.ts");
var FormatInformation_1 = __webpack_require__(/*! ./FormatInformation */ "./src/core/qrcode/decoder/FormatInformation.ts");
var DataMask_1 = __webpack_require__(/*! ./DataMask */ "./src/core/qrcode/decoder/DataMask.ts");
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
/**
 * @author Sean Owen
 */
var BitMatrixParser = /** @class */ (function () {
    /**
     * @param bitMatrix {@link BitMatrix} to parse
     * @throws FormatException if dimension is not >= 21 and 1 mod 4
     */
    function BitMatrixParser(bitMatrix) {
        var dimension = bitMatrix.getHeight();
        if (dimension < 21 || (dimension & 0x03) !== 1) {
            throw new FormatException_1.default();
        }
        this.bitMatrix = bitMatrix;
    }
    /**
     * <p>Reads format information from one of its two locations within the QR Code.</p>
     *
     * @return {@link FormatInformation} encapsulating the QR Code's format info
     * @throws FormatException if both format information locations cannot be parsed as
     * the valid encoding of format information
     */
    BitMatrixParser.prototype.readFormatInformation = function () {
        if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== undefined) {
            return this.parsedFormatInfo;
        }
        // Read top-left format info bits
        var formatInfoBits1 = 0;
        for (var i = 0; i < 6; i++) {
            formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
        }
        // .. and skip a bit in the timing pattern ...
        formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
        formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
        formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
        // .. and skip a bit in the timing pattern ...
        for (var j = 5; j >= 0; j--) {
            formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
        }
        // Read the top-right/bottom-left pattern too
        var dimension = this.bitMatrix.getHeight();
        var formatInfoBits2 = 0;
        var jMin = dimension - 7;
        for (var j = dimension - 1; j >= jMin; j--) {
            formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
        }
        for (var i = dimension - 8; i < dimension; i++) {
            formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
        }
        this.parsedFormatInfo = FormatInformation_1.default.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
        if (this.parsedFormatInfo !== null) {
            return this.parsedFormatInfo;
        }
        throw new FormatException_1.default();
    };
    /**
     * <p>Reads version information from one of its two locations within the QR Code.</p>
     *
     * @return {@link Version} encapsulating the QR Code's version
     * @throws FormatException if both version information locations cannot be parsed as
     * the valid encoding of version information
     */
    BitMatrixParser.prototype.readVersion = function () {
        if (this.parsedVersion !== null && this.parsedVersion !== undefined) {
            return this.parsedVersion;
        }
        var dimension = this.bitMatrix.getHeight();
        var provisionalVersion = Math.floor((dimension - 17) / 4);
        if (provisionalVersion <= 6) {
            return Version_1.default.getVersionForNumber(provisionalVersion);
        }
        // Read top-right version info: 3 wide by 6 tall
        var versionBits = 0;
        var ijMin = dimension - 11;
        for (var j = 5; j >= 0; j--) {
            for (var i = dimension - 9; i >= ijMin; i--) {
                versionBits = this.copyBit(i, j, versionBits);
            }
        }
        var theParsedVersion = Version_1.default.decodeVersionInformation(versionBits);
        if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
            this.parsedVersion = theParsedVersion;
            return theParsedVersion;
        }
        // Hmm, failed. Try bottom left: 6 wide by 3 tall
        versionBits = 0;
        for (var i = 5; i >= 0; i--) {
            for (var j = dimension - 9; j >= ijMin; j--) {
                versionBits = this.copyBit(i, j, versionBits);
            }
        }
        theParsedVersion = Version_1.default.decodeVersionInformation(versionBits);
        if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
            this.parsedVersion = theParsedVersion;
            return theParsedVersion;
        }
        throw new FormatException_1.default();
    };
    BitMatrixParser.prototype.copyBit = function (i /*int*/, j /*int*/, versionBits /*int*/) {
        var bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
        return bit ? (versionBits << 1) | 0x1 : versionBits << 1;
    };
    /**
     * <p>Reads the bits in the {@link BitMatrix} representing the finder pattern in the
     * correct order in order to reconstruct the codewords bytes contained within the
     * QR Code.</p>
     *
     * @return bytes encoded within the QR Code
     * @throws FormatException if the exact number of bytes expected is not read
     */
    BitMatrixParser.prototype.readCodewords = function () {
        var formatInfo = this.readFormatInformation();
        var version = this.readVersion();
        // Get the data mask for the format used in this QR Code. This will exclude
        // some bits from reading as we wind through the bit matrix.
        var dataMask = DataMask_1.default.values.get(formatInfo.getDataMask());
        var dimension = this.bitMatrix.getHeight();
        dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
        var functionPattern = version.buildFunctionPattern();
        var readingUp = true;
        var result = new Uint8Array(version.getTotalCodewords());
        var resultOffset = 0;
        var currentByte = 0;
        var bitsRead = 0;
        // Read columns in pairs, from right to left
        for (var j = dimension - 1; j > 0; j -= 2) {
            if (j === 6) {
                // Skip whole column with vertical alignment pattern
                // saves time and makes the other code proceed more cleanly
                j--;
            }
            // Read alternatingly from bottom to top then top to bottom
            for (var count = 0; count < dimension; count++) {
                var i = readingUp ? dimension - 1 - count : count;
                for (var col = 0; col < 2; col++) {
                    // Ignore bits covered by the function pattern
                    if (!functionPattern.get(j - col, i)) {
                        // Read a bit
                        bitsRead++;
                        currentByte <<= 1;
                        if (this.bitMatrix.get(j - col, i)) {
                            currentByte |= 1;
                        }
                        // If we've made a whole byte, save it off
                        if (bitsRead === 8) {
                            result[resultOffset++] = /*(byte) */ currentByte;
                            bitsRead = 0;
                            currentByte = 0;
                        }
                    }
                }
            }
            readingUp = !readingUp; // readingUp ^= true; // readingUp = !readingUp; // switch directions
        }
        if (resultOffset !== version.getTotalCodewords()) {
            throw new FormatException_1.default();
        }
        return result;
    };
    /**
     * Revert the mask removal done while reading the code words. The bit matrix should revert to its original state.
     */
    BitMatrixParser.prototype.remask = function () {
        if (this.parsedFormatInfo === null) {
            return; // We have no format information, and have no data mask
        }
        var dataMask = DataMask_1.default.values[this.parsedFormatInfo.getDataMask()];
        var dimension = this.bitMatrix.getHeight();
        dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
    };
    /**
     * Prepare the parser for a mirrored operation.
     * This flag has effect only on the {@link #readFormatInformation()} and the
     * {@link #readVersion()}. Before proceeding with {@link #readCodewords()} the
     * {@link #mirror()} method should be called.
     *
     * @param mirror Whether to read version and format information mirrored.
     */
    BitMatrixParser.prototype.setMirror = function (isMirror) {
        this.parsedVersion = null;
        this.parsedFormatInfo = null;
        this.isMirror = isMirror;
    };
    /** Mirror the bit matrix in order to attempt a second reading. */
    BitMatrixParser.prototype.mirror = function () {
        var bitMatrix = this.bitMatrix;
        for (var x = 0, width = bitMatrix.getWidth(); x < width; x++) {
            for (var y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
                if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
                    bitMatrix.flip(y, x);
                    bitMatrix.flip(x, y);
                }
            }
        }
    };
    return BitMatrixParser;
}());
exports.default = BitMatrixParser;


/***/ }),

/***/ "./src/core/qrcode/decoder/DataBlock.ts":
/*!**********************************************!*\
  !*** ./src/core/qrcode/decoder/DataBlock.ts ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * <p>Encapsulates a block of data within a QR Code. QR Codes may split their data into
 * multiple blocks, each of which is a unit of data and error-correction codewords. Each
 * is represented by an instance of this class.</p>
 *
 * @author Sean Owen
 */
var DataBlock = /** @class */ (function () {
    function DataBlock(numDataCodewords /*int*/, codewords) {
        this.numDataCodewords = numDataCodewords;
        this.codewords = codewords;
    }
    /**
     * <p>When QR Codes use multiple data blocks, they are actually interleaved.
     * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
     * method will separate the data into original blocks.</p>
     *
     * @param rawCodewords bytes as read directly from the QR Code
     * @param version version of the QR Code
     * @param ecLevel error-correction level of the QR Code
     * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
     *         QR Code
     */
    DataBlock.getDataBlocks = function (rawCodewords, version, ecLevel) {
        if (rawCodewords.length !== version.getTotalCodewords()) {
            throw new IllegalArgumentException_1.default();
        }
        // Figure out the number and size of data blocks used by this version and
        // error correction level
        var ecBlocks = version.getECBlocksForLevel(ecLevel);
        // First count the total number of data blocks
        var totalBlocks = 0;
        var ecBlockArray = ecBlocks.getECBlocks();
        for (var _i = 0, ecBlockArray_1 = ecBlockArray; _i < ecBlockArray_1.length; _i++) {
            var ecBlock = ecBlockArray_1[_i];
            totalBlocks += ecBlock.getCount();
        }
        // Now establish DataBlocks of the appropriate size and number of data codewords
        var result = new Array(totalBlocks);
        var numResultBlocks = 0;
        for (var _a = 0, ecBlockArray_2 = ecBlockArray; _a < ecBlockArray_2.length; _a++) {
            var ecBlock = ecBlockArray_2[_a];
            for (var i = 0; i < ecBlock.getCount(); i++) {
                var numDataCodewords = ecBlock.getDataCodewords();
                var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
                result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
            }
        }
        // All blocks have the same amount of data, except that the last n
        // (where n may be 0) have 1 more byte. Figure out where these start.
        var shorterBlocksTotalCodewords = result[0].codewords.length;
        var longerBlocksStartAt = result.length - 1;
        // TYPESCRIPTPORT: check length is correct here
        while (longerBlocksStartAt >= 0) {
            var numCodewords = result[longerBlocksStartAt].codewords.length;
            if (numCodewords === shorterBlocksTotalCodewords) {
                break;
            }
            longerBlocksStartAt--;
        }
        longerBlocksStartAt++;
        var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
        // The last elements of result may be 1 element longer
        // first fill out as many elements as all of them have
        var rawCodewordsOffset = 0;
        for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
            }
        }
        // Fill out the last data block in the longer ones
        for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
            result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
        }
        // Now add in error correction blocks
        var max = result[0].codewords.length;
        for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                var iOffset = j < longerBlocksStartAt ? i : i + 1;
                result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
            }
        }
        return result;
    };
    DataBlock.prototype.getNumDataCodewords = function () {
        return this.numDataCodewords;
    };
    DataBlock.prototype.getCodewords = function () {
        return this.codewords;
    };
    return DataBlock;
}());
exports.default = DataBlock;


/***/ }),

/***/ "./src/core/qrcode/decoder/DataMask.ts":
/*!*********************************************!*\
  !*** ./src/core/qrcode/decoder/DataMask.ts ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DataMaskValues;
(function (DataMaskValues) {
    DataMaskValues[DataMaskValues["DATA_MASK_000"] = 0] = "DATA_MASK_000";
    DataMaskValues[DataMaskValues["DATA_MASK_001"] = 1] = "DATA_MASK_001";
    DataMaskValues[DataMaskValues["DATA_MASK_010"] = 2] = "DATA_MASK_010";
    DataMaskValues[DataMaskValues["DATA_MASK_011"] = 3] = "DATA_MASK_011";
    DataMaskValues[DataMaskValues["DATA_MASK_100"] = 4] = "DATA_MASK_100";
    DataMaskValues[DataMaskValues["DATA_MASK_101"] = 5] = "DATA_MASK_101";
    DataMaskValues[DataMaskValues["DATA_MASK_110"] = 6] = "DATA_MASK_110";
    DataMaskValues[DataMaskValues["DATA_MASK_111"] = 7] = "DATA_MASK_111";
})(DataMaskValues = exports.DataMaskValues || (exports.DataMaskValues = {}));
/**
 * <p>Encapsulates data masks for the data bits in a QR code, per ISO 18004:2006 6.8. Implementations
 * of this class can un-mask a raw BitMatrix. For simplicity, they will unmask the entire BitMatrix,
 * including areas used for finder patterns, timing patterns, etc. These areas should be unused
 * after the point they are unmasked anyway.</p>
 *
 * <p>Note that the diagram in section 6.8.1 is misleading since it indicates that i is column position
 * and j is row position. In fact, as the text says, i is row position and j is column position.</p>
 *
 * @author Sean Owen
 */
var DataMask = /** @class */ (function () {
    // See ISO 18004:2006 6.8.1
    function DataMask(value, isMasked) {
        this.value = value;
        this.isMasked = isMasked;
    }
    // End of enum constants.
    /**
     * <p>Implementations of this method reverse the data masking process applied to a QR Code and
     * make its bits ready to read.</p>
     *
     * @param bits representation of QR Code bits
     * @param dimension dimension of QR Code, represented by bits, being unmasked
     */
    DataMask.prototype.unmaskBitMatrix = function (bits, dimension /*int*/) {
        for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
                if (this.isMasked(i, j)) {
                    bits.flip(j, i);
                }
            }
        }
    };
    DataMask.values = new Map([
        /**
         * 000: mask bits for which (x + y) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_000, new DataMask(DataMaskValues.DATA_MASK_000, function (i /*int*/, j /*int*/) { return ((i + j) & 0x01) === 0; })],
        /**
         * 001: mask bits for which x mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_001, new DataMask(DataMaskValues.DATA_MASK_001, function (i /*int*/, j /*int*/) { return (i & 0x01) === 0; })],
        /**
         * 010: mask bits for which y mod 3 == 0
         */
        [DataMaskValues.DATA_MASK_010, new DataMask(DataMaskValues.DATA_MASK_010, function (i /*int*/, j /*int*/) { return j % 3 === 0; })],
        /**
         * 011: mask bits for which (x + y) mod 3 == 0
         */
        [DataMaskValues.DATA_MASK_011, new DataMask(DataMaskValues.DATA_MASK_011, function (i /*int*/, j /*int*/) { return (i + j) % 3 === 0; })],
        /**
         * 100: mask bits for which (x/2 + y/3) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_100, new DataMask(DataMaskValues.DATA_MASK_100, function (i /*int*/, j /*int*/) { return ((Math.floor(i / 2) + Math.floor(j / 3)) & 0x01) === 0; })],
        /**
         * 101: mask bits for which xy mod 2 + xy mod 3 == 0
         * equivalently, such that xy mod 6 == 0
         */
        [DataMaskValues.DATA_MASK_101, new DataMask(DataMaskValues.DATA_MASK_101, function (i /*int*/, j /*int*/) { return (i * j) % 6 === 0; })],
        /**
         * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that xy mod 6 < 3
         */
        [DataMaskValues.DATA_MASK_110, new DataMask(DataMaskValues.DATA_MASK_110, function (i /*int*/, j /*int*/) { return ((i * j) % 6) < 3; })],
        /**
         * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that (x + y + xy mod 3) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_111, new DataMask(DataMaskValues.DATA_MASK_111, function (i /*int*/, j /*int*/) { return ((i + j + ((i * j) % 3)) & 0x01) === 0; })],
    ]);
    return DataMask;
}());
exports.default = DataMask;


/***/ }),

/***/ "./src/core/qrcode/decoder/DecodedBitStreamParser.ts":
/*!***********************************************************!*\
  !*** ./src/core/qrcode/decoder/DecodedBitStreamParser.ts ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BitSource_1 = __webpack_require__(/*! ../../common/BitSource */ "./src/core/common/BitSource.ts");
var CharacterSetECI_1 = __webpack_require__(/*! ../../common/CharacterSetECI */ "./src/core/common/CharacterSetECI.ts");
var DecoderResult_1 = __webpack_require__(/*! ../../common/DecoderResult */ "./src/core/common/DecoderResult.ts");
var StringUtils_1 = __webpack_require__(/*! ../../common/StringUtils */ "./src/core/common/StringUtils.ts");
var Mode_1 = __webpack_require__(/*! ./Mode */ "./src/core/qrcode/decoder/Mode.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
var StringEncoding_1 = __webpack_require__(/*! ../../util/StringEncoding */ "./src/core/util/StringEncoding.ts");
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
/*import java.io.UnsupportedEncodingException;*/
/*import java.util.ArrayList;*/
/*import java.util.Collection;*/
/*import java.util.List;*/
/*import java.util.Map;*/
/**
 * <p>QR Codes can encode text as bits in one of several modes, and can use multiple modes
 * in one QR Code. This class decodes the bits back into text.</p>
 *
 * <p>See ISO 18004:2006, 6.4.3 - 6.4.7</p>
 *
 * @author Sean Owen
 */
var DecodedBitStreamParser = /** @class */ (function () {
    function DecodedBitStreamParser() {
    }
    DecodedBitStreamParser.decode = function (bytes, version, ecLevel, hints) {
        var bits = new BitSource_1.default(bytes);
        var result = new StringBuilder_1.default();
        var byteSegments = new Array(); // 1
        // TYPESCRIPTPORT: I do not use constructor with size 1 as in original Java means capacity and the array length is checked below
        var symbolSequence = -1;
        var parityData = -1;
        try {
            var currentCharacterSetECI = null;
            var fc1InEffect = false;
            var mode = void 0;
            do {
                // While still another segment to read...
                if (bits.available() < 4) {
                    // OK, assume we're done. Really, a TERMINATOR mode should have been recorded here
                    mode = Mode_1.default.TERMINATOR;
                }
                else {
                    var modeBits = bits.readBits(4);
                    mode = Mode_1.default.forBits(modeBits); // mode is encoded by 4 bits
                }
                switch (mode) {
                    case Mode_1.default.TERMINATOR:
                        break;
                    case Mode_1.default.FNC1_FIRST_POSITION:
                    case Mode_1.default.FNC1_SECOND_POSITION:
                        // We do little with FNC1 except alter the parsed result a bit according to the spec
                        fc1InEffect = true;
                        break;
                    case Mode_1.default.STRUCTURED_APPEND:
                        if (bits.available() < 16) {
                            throw new FormatException_1.default();
                        }
                        // sequence number and parity is added later to the result metadata
                        // Read next 8 bits (symbol sequence #) and 8 bits (data: parity), then continue
                        symbolSequence = bits.readBits(8);
                        parityData = bits.readBits(8);
                        break;
                    case Mode_1.default.ECI:
                        // Count doesn't apply to ECI
                        var value = DecodedBitStreamParser.parseECIValue(bits);
                        currentCharacterSetECI = CharacterSetECI_1.default.getCharacterSetECIByValue(value);
                        if (currentCharacterSetECI === null) {
                            throw new FormatException_1.default();
                        }
                        break;
                    case Mode_1.default.HANZI:
                        // First handle Hanzi mode which does not start with character count
                        // Chinese mode contains a sub set indicator right after mode indicator
                        var subset = bits.readBits(4);
                        var countHanzi = bits.readBits(mode.getCharacterCountBits(version));
                        if (subset === DecodedBitStreamParser.GB2312_SUBSET) {
                            DecodedBitStreamParser.decodeHanziSegment(bits, result, countHanzi);
                        }
                        break;
                    default:
                        // "Normal" QR code modes:
                        // How many characters will follow, encoded in this mode?
                        var count = bits.readBits(mode.getCharacterCountBits(version));
                        switch (mode) {
                            case Mode_1.default.NUMERIC:
                                DecodedBitStreamParser.decodeNumericSegment(bits, result, count);
                                break;
                            case Mode_1.default.ALPHANUMERIC:
                                DecodedBitStreamParser.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                                break;
                            case Mode_1.default.BYTE:
                                DecodedBitStreamParser.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                                break;
                            case Mode_1.default.KANJI:
                                DecodedBitStreamParser.decodeKanjiSegment(bits, result, count);
                                break;
                            default:
                                throw new FormatException_1.default();
                        }
                        break;
                }
            } while (mode !== Mode_1.default.TERMINATOR);
        }
        catch (iae /*: IllegalArgumentException*/) {
            // from readBits() calls
            throw new FormatException_1.default();
        }
        return new DecoderResult_1.default(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
    };
    /**
     * See specification GBT 18284-2000
     */
    DecodedBitStreamParser.decodeHanziSegment = function (bits, result, count /*int*/) {
        // Don't crash trying to read more bits than we have available.
        if (count * 13 > bits.available()) {
            throw new FormatException_1.default();
        }
        // Each character will require 2 bytes. Read the characters as 2-byte pairs
        // and decode as GB2312 afterwards
        var buffer = new Uint8Array(2 * count);
        var offset = 0;
        while (count > 0) {
            // Each 13 bits encodes a 2-byte character
            var twoBytes = bits.readBits(13);
            var assembledTwoBytes = (((twoBytes / 0x060) << 8) & 0xFFFFFFFF) | (twoBytes % 0x060);
            if (assembledTwoBytes < 0x003BF) {
                // In the 0xA1A1 to 0xAAFE range
                assembledTwoBytes += 0x0A1A1;
            }
            else {
                // In the 0xB0A1 to 0xFAFE range
                assembledTwoBytes += 0x0A6A1;
            }
            buffer[offset] = /*(byte) */ ((assembledTwoBytes >> 8) & 0xFF);
            buffer[offset + 1] = /*(byte) */ (assembledTwoBytes & 0xFF);
            offset += 2;
            count--;
        }
        try {
            result.append(StringEncoding_1.default.decode(buffer, StringUtils_1.default.GB2312));
            // TYPESCRIPTPORT: TODO: implement GB2312 decode. StringView from MDN could be a starting point
        }
        catch (ignored /*: UnsupportedEncodingException*/) {
            throw new FormatException_1.default(ignored);
        }
    };
    DecodedBitStreamParser.decodeKanjiSegment = function (bits, result, count /*int*/) {
        // Don't crash trying to read more bits than we have available.
        if (count * 13 > bits.available()) {
            throw new FormatException_1.default();
        }
        // Each character will require 2 bytes. Read the characters as 2-byte pairs
        // and decode as Shift_JIS afterwards
        var buffer = new Uint8Array(2 * count);
        var offset = 0;
        while (count > 0) {
            // Each 13 bits encodes a 2-byte character
            var twoBytes = bits.readBits(13);
            var assembledTwoBytes = (((twoBytes / 0x0C0) << 8) & 0xFFFFFFFF) | (twoBytes % 0x0C0);
            if (assembledTwoBytes < 0x01F00) {
                // In the 0x8140 to 0x9FFC range
                assembledTwoBytes += 0x08140;
            }
            else {
                // In the 0xE040 to 0xEBBF range
                assembledTwoBytes += 0x0C140;
            }
            buffer[offset] = /*(byte) */ (assembledTwoBytes >> 8);
            buffer[offset + 1] = /*(byte) */ assembledTwoBytes;
            offset += 2;
            count--;
        }
        // Shift_JIS may not be supported in some environments:
        try {
            result.append(StringEncoding_1.default.decode(buffer, StringUtils_1.default.SHIFT_JIS));
            // TYPESCRIPTPORT: TODO: implement SHIFT_JIS decode. StringView from MDN could be a starting point
        }
        catch (ignored /*: UnsupportedEncodingException*/) {
            throw new FormatException_1.default(ignored);
        }
    };
    DecodedBitStreamParser.decodeByteSegment = function (bits, result, count /*int*/, currentCharacterSetECI, byteSegments, hints) {
        // Don't crash trying to read more bits than we have available.
        if (8 * count > bits.available()) {
            throw new FormatException_1.default();
        }
        var readBytes = new Uint8Array(count);
        for (var i = 0; i < count; i++) {
            readBytes[i] = /*(byte) */ bits.readBits(8);
        }
        var encoding;
        if (currentCharacterSetECI === null) {
            // The spec isn't clear on this mode; see
            // section 6.4.5: t does not say which encoding to assuming
            // upon decoding. I have seen ISO-8859-1 used as well as
            // Shift_JIS -- without anything like an ECI designator to
            // give a hint.
            encoding = StringUtils_1.default.guessEncoding(readBytes, hints);
        }
        else {
            encoding = currentCharacterSetECI.getName();
        }
        try {
            result.append(StringEncoding_1.default.decode(readBytes, encoding));
        }
        catch (ignored /*: UnsupportedEncodingException*/) {
            throw new FormatException_1.default(ignored);
        }
        byteSegments.push(readBytes);
    };
    DecodedBitStreamParser.toAlphaNumericChar = function (value /*int*/) {
        if (value >= DecodedBitStreamParser.ALPHANUMERIC_CHARS.length) {
            throw new FormatException_1.default();
        }
        return DecodedBitStreamParser.ALPHANUMERIC_CHARS[value];
    };
    DecodedBitStreamParser.decodeAlphanumericSegment = function (bits, result, count /*int*/, fc1InEffect) {
        // Read two characters at a time
        var start = result.length();
        while (count > 1) {
            if (bits.available() < 11) {
                throw new FormatException_1.default();
            }
            var nextTwoCharsBits = bits.readBits(11);
            result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
            result.append(DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits % 45));
            count -= 2;
        }
        if (count === 1) {
            // special case: one character left
            if (bits.available() < 6) {
                throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser.toAlphaNumericChar(bits.readBits(6)));
        }
        // See section 6.4.8.1, 6.4.8.2
        if (fc1InEffect) {
            // We need to massage the result a bit if in an FNC1 mode:
            for (var i = start; i < result.length(); i++) {
                if (result.charAt(i) === '%') {
                    if (i < result.length() - 1 && result.charAt(i + 1) === '%') {
                        // %% is rendered as %
                        result.deleteCharAt(i + 1);
                    }
                    else {
                        // In alpha mode, % should be converted to FNC1 separator 0x1D
                        result.setCharAt(i, String.fromCharCode(0x1D));
                    }
                }
            }
        }
    };
    DecodedBitStreamParser.decodeNumericSegment = function (bits, result, count /*int*/) {
        // Read three digits at a time
        while (count >= 3) {
            // Each 10 bits encodes three digits
            if (bits.available() < 10) {
                throw new FormatException_1.default();
            }
            var threeDigitsBits = bits.readBits(10);
            if (threeDigitsBits >= 1000) {
                throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
            result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
            result.append(DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits % 10));
            count -= 3;
        }
        if (count === 2) {
            // Two digits left over to read, encoded in 7 bits
            if (bits.available() < 7) {
                throw new FormatException_1.default();
            }
            var twoDigitsBits = bits.readBits(7);
            if (twoDigitsBits >= 100) {
                throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
            result.append(DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits % 10));
        }
        else if (count === 1) {
            // One digit left over to read
            if (bits.available() < 4) {
                throw new FormatException_1.default();
            }
            var digitBits = bits.readBits(4);
            if (digitBits >= 10) {
                throw new FormatException_1.default();
            }
            result.append(DecodedBitStreamParser.toAlphaNumericChar(digitBits));
        }
    };
    DecodedBitStreamParser.parseECIValue = function (bits) {
        var firstByte = bits.readBits(8);
        if ((firstByte & 0x80) === 0) {
            // just one byte
            return firstByte & 0x7F;
        }
        if ((firstByte & 0xC0) === 0x80) {
            // two bytes
            var secondByte = bits.readBits(8);
            return (((firstByte & 0x3F) << 8) & 0xFFFFFFFF) | secondByte;
        }
        if ((firstByte & 0xE0) === 0xC0) {
            // three bytes
            var secondThirdBytes = bits.readBits(16);
            return (((firstByte & 0x1F) << 16) & 0xFFFFFFFF) | secondThirdBytes;
        }
        throw new FormatException_1.default();
    };
    /**
     * See ISO 18004:2006, 6.4.4 Table 5
     */
    DecodedBitStreamParser.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
    DecodedBitStreamParser.GB2312_SUBSET = 1;
    return DecodedBitStreamParser;
}());
exports.default = DecodedBitStreamParser;
function Uint8ArrayToString(a) {
    var CHUNK_SZ = 0x8000;
    var c = new StringBuilder_1.default();
    for (var i = 0, length_1 = a.length; i < length_1; i += CHUNK_SZ) {
        c.append(String.fromCharCode.apply(null, a.subarray(i, i + CHUNK_SZ)));
    }
    return c.toString();
}


/***/ }),

/***/ "./src/core/qrcode/decoder/Decoder.ts":
/*!********************************************!*\
  !*** ./src/core/qrcode/decoder/Decoder.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(/*! ../../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var GenericGF_1 = __webpack_require__(/*! ../../common/reedsolomon/GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
var ReedSolomonDecoder_1 = __webpack_require__(/*! ../../common/reedsolomon/ReedSolomonDecoder */ "./src/core/common/reedsolomon/ReedSolomonDecoder.ts");
var BitMatrixParser_1 = __webpack_require__(/*! ./BitMatrixParser */ "./src/core/qrcode/decoder/BitMatrixParser.ts");
var QRCodeDecoderMetaData_1 = __webpack_require__(/*! ./QRCodeDecoderMetaData */ "./src/core/qrcode/decoder/QRCodeDecoderMetaData.ts");
var DataBlock_1 = __webpack_require__(/*! ./DataBlock */ "./src/core/qrcode/decoder/DataBlock.ts");
var DecodedBitStreamParser_1 = __webpack_require__(/*! ./DecodedBitStreamParser */ "./src/core/qrcode/decoder/DecodedBitStreamParser.ts");
var ChecksumException_1 = __webpack_require__(/*! ../../ChecksumException */ "./src/core/ChecksumException.ts");
/*import java.util.Map;*/
/**
 * <p>The main class which implements QR Code decoding -- as opposed to locating and extracting
 * the QR Code from an image.</p>
 *
 * @author Sean Owen
 */
var Decoder = /** @class */ (function () {
    function Decoder() {
        this.rsDecoder = new ReedSolomonDecoder_1.default(GenericGF_1.default.QR_CODE_FIELD_256);
    }
    // public decode(image: boolean[][]): DecoderResult /*throws ChecksumException, FormatException*/ {
    //   return decode(image, null)
    // }
    /**
     * <p>Convenience method that can decode a QR Code represented as a 2D array of booleans.
     * "true" is taken to mean a black module.</p>
     *
     * @param image booleans representing white/black QR Code modules
     * @param hints decoding hints that should be used to influence decoding
     * @return text and bytes encoded within the QR Code
     * @throws FormatException if the QR Code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    Decoder.prototype.decodeBooleanArray = function (image, hints) {
        return this.decodeBitMatrix(BitMatrix_1.default.parseFromBooleanArray(image), hints);
    };
    // public decodeBitMatrix(bits: BitMatrix): DecoderResult /*throws ChecksumException, FormatException*/ {
    //   return decode(bits, null)
    // }
    /**
     * <p>Decodes a QR Code represented as a {@link BitMatrix}. A 1 or "true" is taken to mean a black module.</p>
     *
     * @param bits booleans representing white/black QR Code modules
     * @param hints decoding hints that should be used to influence decoding
     * @return text and bytes encoded within the QR Code
     * @throws FormatException if the QR Code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    Decoder.prototype.decodeBitMatrix = function (bits, hints) {
        // Construct a parser and read version, error-correction level
        var parser = new BitMatrixParser_1.default(bits);
        var ex = null;
        try {
            return this.decodeBitMatrixParser(parser, hints);
        }
        catch (e /*: FormatException, ChecksumException*/) {
            ex = e;
        }
        try {
            // Revert the bit matrix
            parser.remask();
            // Will be attempting a mirrored reading of the version and format info.
            parser.setMirror(true);
            // Preemptively read the version.
            parser.readVersion();
            // Preemptively read the format information.
            parser.readFormatInformation();
            /*
             * Since we're here, this means we have successfully detected some kind
             * of version and format information when mirrored. This is a good sign,
             * that the QR code may be mirrored, and we should try once more with a
             * mirrored content.
             */
            // Prepare for a mirrored reading.
            parser.mirror();
            var result = this.decodeBitMatrixParser(parser, hints);
            // Success! Notify the caller that the code was mirrored.
            result.setOther(new QRCodeDecoderMetaData_1.default(true));
            return result;
        }
        catch (e /*FormatException | ChecksumException*/) {
            // Throw the exception from the original reading
            if (ex !== null) {
                throw ex;
            }
            throw e;
        }
    };
    Decoder.prototype.decodeBitMatrixParser = function (parser, hints) {
        var version = parser.readVersion();
        var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
        // Read codewords
        var codewords = parser.readCodewords();
        // Separate into data blocks
        var dataBlocks = DataBlock_1.default.getDataBlocks(codewords, version, ecLevel);
        // Count total number of data bytes
        var totalBytes = 0;
        for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var dataBlock = dataBlocks_1[_i];
            totalBytes += dataBlock.getNumDataCodewords();
        }
        var resultBytes = new Uint8Array(totalBytes);
        var resultOffset = 0;
        // Error-correct and copy data blocks together into a stream of bytes
        for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
            var dataBlock = dataBlocks_2[_a];
            var codewordBytes = dataBlock.getCodewords();
            var numDataCodewords = dataBlock.getNumDataCodewords();
            this.correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
                resultBytes[resultOffset++] = codewordBytes[i];
            }
        }
        // Decode the contents of that stream of bytes
        return DecodedBitStreamParser_1.default.decode(resultBytes, version, ecLevel, hints);
    };
    /**
     * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
     * correct the errors in-place using Reed-Solomon error correction.</p>
     *
     * @param codewordBytes data and error correction codewords
     * @param numDataCodewords number of codewords that are data bytes
     * @throws ChecksumException if error correction fails
     */
    Decoder.prototype.correctErrors = function (codewordBytes, numDataCodewords /*int*/) {
        var numCodewords = codewordBytes.length;
        // First read into an array of ints
        var codewordsInts = new Int32Array(codewordBytes);
        // TYPESCRIPTPORT: not realy necessary to transform to ints? could redesign everything to work with unsigned bytes?
        // const codewordsInts = new Int32Array(numCodewords)
        // for (let i = 0; i < numCodewords; i++) {
        //   codewordsInts[i] = codewordBytes[i] & 0xFF
        // }
        try {
            this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
        }
        catch (ignored /*: ReedSolomonException*/) {
            throw new ChecksumException_1.default();
        }
        // Copy back into array of bytes -- only need to worry about the bytes that were data
        // We don't care about errors in the error-correction codewords
        for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = /*(byte) */ codewordsInts[i];
        }
    };
    return Decoder;
}());
exports.default = Decoder;


/***/ }),

/***/ "./src/core/qrcode/decoder/ECB.ts":
/*!****************************************!*\
  !*** ./src/core/qrcode/decoder/ECB.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * <p>Encapsulates the parameters for one error-correction block in one symbol version.
 * This includes the number of data codewords, and the number of times a block with these
 * parameters is used consecutively in the QR code version's format.</p>
 */
var ECB = /** @class */ (function () {
    function ECB(count /*int*/, dataCodewords /*int*/) {
        this.count = count;
        this.dataCodewords = dataCodewords;
    }
    ECB.prototype.getCount = function () {
        return this.count;
    };
    ECB.prototype.getDataCodewords = function () {
        return this.dataCodewords;
    };
    return ECB;
}());
exports.default = ECB;


/***/ }),

/***/ "./src/core/qrcode/decoder/ECBlocks.ts":
/*!*********************************************!*\
  !*** ./src/core/qrcode/decoder/ECBlocks.ts ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
 * use blocks of differing sizes within one version, so, this encapsulates the parameters for
 * each set of blocks. It also holds the number of error-correction codewords per block since it
 * will be the same across all blocks within one version.</p>
 */
var ECBlocks = /** @class */ (function () {
    function ECBlocks(ecCodewordsPerBlock /*int*/) {
        var ecBlocks = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ecBlocks[_i - 1] = arguments[_i];
        }
        this.ecCodewordsPerBlock = ecCodewordsPerBlock;
        this.ecBlocks = ecBlocks;
    }
    ECBlocks.prototype.getECCodewordsPerBlock = function () {
        return this.ecCodewordsPerBlock;
    };
    ECBlocks.prototype.getNumBlocks = function () {
        var total = 0;
        var ecBlocks = this.ecBlocks;
        for (var _i = 0, ecBlocks_1 = ecBlocks; _i < ecBlocks_1.length; _i++) {
            var ecBlock = ecBlocks_1[_i];
            total += ecBlock.getCount();
        }
        return total;
    };
    ECBlocks.prototype.getTotalECCodewords = function () {
        return this.ecCodewordsPerBlock * this.getNumBlocks();
    };
    ECBlocks.prototype.getECBlocks = function () {
        return this.ecBlocks;
    };
    return ECBlocks;
}());
exports.default = ECBlocks;


/***/ }),

/***/ "./src/core/qrcode/decoder/ErrorCorrectionLevel.ts":
/*!*********************************************************!*\
  !*** ./src/core/qrcode/decoder/ErrorCorrectionLevel.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.decoder {*/
var ArgumentException_1 = __webpack_require__(/*! ../../ArgumentException */ "./src/core/ArgumentException.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var ErrorCorrectionLevelValues;
(function (ErrorCorrectionLevelValues) {
    ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["L"] = 0] = "L";
    ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["M"] = 1] = "M";
    ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["Q"] = 2] = "Q";
    ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["H"] = 3] = "H";
})(ErrorCorrectionLevelValues = exports.ErrorCorrectionLevelValues || (exports.ErrorCorrectionLevelValues = {}));
/**
 * <p>See ISO 18004:2006, 6.5.1. This enum encapsulates the four error correction levels
 * defined by the QR code standard.</p>
 *
 * @author Sean Owen
 */
var ErrorCorrectionLevel = /** @class */ (function () {
    function ErrorCorrectionLevel(value, stringValue, bits /*int*/) {
        this.value = value;
        this.stringValue = stringValue;
        this.bits = bits;
        ErrorCorrectionLevel.FOR_BITS.set(bits, this);
        ErrorCorrectionLevel.FOR_VALUE.set(value, this);
    }
    ErrorCorrectionLevel.prototype.getValue = function () {
        return this.value;
    };
    ErrorCorrectionLevel.prototype.getBits = function () {
        return this.bits;
    };
    ErrorCorrectionLevel.fromString = function (s) {
        switch (s) {
            case 'L': return ErrorCorrectionLevel.L;
            case 'M': return ErrorCorrectionLevel.M;
            case 'Q': return ErrorCorrectionLevel.Q;
            case 'H': return ErrorCorrectionLevel.H;
            default: throw new ArgumentException_1.default(s + 'not available');
        }
    };
    ErrorCorrectionLevel.prototype.toString = function () {
        return this.stringValue;
    };
    ErrorCorrectionLevel.prototype.equals = function (o) {
        if (!(o instanceof ErrorCorrectionLevel)) {
            return false;
        }
        var other = o;
        return this.value === other.value;
    };
    /**
     * @param bits int containing the two bits encoding a QR Code's error correction level
     * @return ErrorCorrectionLevel representing the encoded error correction level
     */
    ErrorCorrectionLevel.forBits = function (bits /*int*/) {
        if (bits < 0 || bits >= ErrorCorrectionLevel.FOR_BITS.size) {
            throw new IllegalArgumentException_1.default();
        }
        return ErrorCorrectionLevel.FOR_BITS.get(bits);
    };
    ErrorCorrectionLevel.FOR_BITS = new Map();
    ErrorCorrectionLevel.FOR_VALUE = new Map();
    /** L = ~7% correction */
    ErrorCorrectionLevel.L = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.L, 'L', 0x01);
    /** M = ~15% correction */
    ErrorCorrectionLevel.M = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.M, 'M', 0x00);
    /** Q = ~25% correction */
    ErrorCorrectionLevel.Q = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.Q, 'Q', 0x03);
    /** H = ~30% correction */
    ErrorCorrectionLevel.H = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.H, 'H', 0x02);
    return ErrorCorrectionLevel;
}());
exports.default = ErrorCorrectionLevel;


/***/ }),

/***/ "./src/core/qrcode/decoder/FormatInformation.ts":
/*!******************************************************!*\
  !*** ./src/core/qrcode/decoder/FormatInformation.ts ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.decoder {*/
var ErrorCorrectionLevel_1 = __webpack_require__(/*! ./ErrorCorrectionLevel */ "./src/core/qrcode/decoder/ErrorCorrectionLevel.ts");
var Integer_1 = __webpack_require__(/*! ../../util/Integer */ "./src/core/util/Integer.ts");
/**
 * <p>Encapsulates a QR Code's format information, including the data mask used and
 * error correction level.</p>
 *
 * @author Sean Owen
 * @see DataMask
 * @see ErrorCorrectionLevel
 */
var FormatInformation = /** @class */ (function () {
    function FormatInformation(formatInfo /*int*/) {
        // Bits 3,4
        this.errorCorrectionLevel = ErrorCorrectionLevel_1.default.forBits((formatInfo >> 3) & 0x03);
        // Bottom 3 bits
        this.dataMask = /*(byte) */ (formatInfo & 0x07);
    }
    FormatInformation.numBitsDiffering = function (a /*int*/, b /*int*/) {
        return Integer_1.default.bitCount(a ^ b);
    };
    /**
     * @param maskedFormatInfo1 format info indicator, with mask still applied
     * @param maskedFormatInfo2 second copy of same info; both are checked at the same time
     *  to establish best match
     * @return information about the format it specifies, or {@code null}
     *  if doesn't seem to match any known pattern
     */
    FormatInformation.decodeFormatInformation = function (maskedFormatInfo1 /*int*/, maskedFormatInfo2 /*int*/) {
        var formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
        if (formatInfo !== null) {
            return formatInfo;
        }
        // Should return null, but, some QR codes apparently
        // do not mask this info. Try again by actually masking the pattern
        // first
        return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation.FORMAT_INFO_MASK_QR);
    };
    FormatInformation.doDecodeFormatInformation = function (maskedFormatInfo1 /*int*/, maskedFormatInfo2 /*int*/) {
        // Find the int in FORMAT_INFO_DECODE_LOOKUP with fewest bits differing
        var bestDifference = Number.MAX_SAFE_INTEGER;
        var bestFormatInfo = 0;
        for (var _i = 0, _a = FormatInformation.FORMAT_INFO_DECODE_LOOKUP; _i < _a.length; _i++) {
            var decodeInfo = _a[_i];
            var targetInfo = decodeInfo[0];
            if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
                // Found an exact match
                return new FormatInformation(decodeInfo[1]);
            }
            var bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo1, targetInfo);
            if (bitsDifference < bestDifference) {
                bestFormatInfo = decodeInfo[1];
                bestDifference = bitsDifference;
            }
            if (maskedFormatInfo1 !== maskedFormatInfo2) {
                // also try the other option
                bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo2, targetInfo);
                if (bitsDifference < bestDifference) {
                    bestFormatInfo = decodeInfo[1];
                    bestDifference = bitsDifference;
                }
            }
        }
        // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits
        // differing means we found a match
        if (bestDifference <= 3) {
            return new FormatInformation(bestFormatInfo);
        }
        return null;
    };
    FormatInformation.prototype.getErrorCorrectionLevel = function () {
        return this.errorCorrectionLevel;
    };
    FormatInformation.prototype.getDataMask = function () {
        return this.dataMask;
    };
    /*@Override*/
    FormatInformation.prototype.hashCode = function () {
        return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
    };
    /*@Override*/
    FormatInformation.prototype.equals = function (o) {
        if (!(o instanceof FormatInformation)) {
            return false;
        }
        var other = o;
        return this.errorCorrectionLevel === other.errorCorrectionLevel &&
            this.dataMask === other.dataMask;
    };
    FormatInformation.FORMAT_INFO_MASK_QR = 0x5412;
    /**
     * See ISO 18004:2006, Annex C, Table C.1
     */
    FormatInformation.FORMAT_INFO_DECODE_LOOKUP = [
        Int32Array.from([0x5412, 0x00]),
        Int32Array.from([0x5125, 0x01]),
        Int32Array.from([0x5E7C, 0x02]),
        Int32Array.from([0x5B4B, 0x03]),
        Int32Array.from([0x45F9, 0x04]),
        Int32Array.from([0x40CE, 0x05]),
        Int32Array.from([0x4F97, 0x06]),
        Int32Array.from([0x4AA0, 0x07]),
        Int32Array.from([0x77C4, 0x08]),
        Int32Array.from([0x72F3, 0x09]),
        Int32Array.from([0x7DAA, 0x0A]),
        Int32Array.from([0x789D, 0x0B]),
        Int32Array.from([0x662F, 0x0C]),
        Int32Array.from([0x6318, 0x0D]),
        Int32Array.from([0x6C41, 0x0E]),
        Int32Array.from([0x6976, 0x0F]),
        Int32Array.from([0x1689, 0x10]),
        Int32Array.from([0x13BE, 0x11]),
        Int32Array.from([0x1CE7, 0x12]),
        Int32Array.from([0x19D0, 0x13]),
        Int32Array.from([0x0762, 0x14]),
        Int32Array.from([0x0255, 0x15]),
        Int32Array.from([0x0D0C, 0x16]),
        Int32Array.from([0x083B, 0x17]),
        Int32Array.from([0x355F, 0x18]),
        Int32Array.from([0x3068, 0x19]),
        Int32Array.from([0x3F31, 0x1A]),
        Int32Array.from([0x3A06, 0x1B]),
        Int32Array.from([0x24B4, 0x1C]),
        Int32Array.from([0x2183, 0x1D]),
        Int32Array.from([0x2EDA, 0x1E]),
        Int32Array.from([0x2BED, 0x1F]),
    ];
    return FormatInformation;
}());
exports.default = FormatInformation;


/***/ }),

/***/ "./src/core/qrcode/decoder/Mode.ts":
/*!*****************************************!*\
  !*** ./src/core/qrcode/decoder/Mode.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
var ModeValues;
(function (ModeValues) {
    ModeValues[ModeValues["TERMINATOR"] = 0] = "TERMINATOR";
    ModeValues[ModeValues["NUMERIC"] = 1] = "NUMERIC";
    ModeValues[ModeValues["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
    ModeValues[ModeValues["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
    ModeValues[ModeValues["BYTE"] = 4] = "BYTE";
    ModeValues[ModeValues["ECI"] = 5] = "ECI";
    ModeValues[ModeValues["KANJI"] = 6] = "KANJI";
    ModeValues[ModeValues["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
    ModeValues[ModeValues["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
    /** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */
    ModeValues[ModeValues["HANZI"] = 9] = "HANZI";
})(ModeValues = exports.ModeValues || (exports.ModeValues = {}));
/**
 * <p>See ISO 18004:2006, 6.4.1, Tables 2 and 3. This enum encapsulates the various modes in which
 * data can be encoded to bits in the QR code standard.</p>
 *
 * @author Sean Owen
 */
var Mode = /** @class */ (function () {
    function Mode(value, stringValue, characterCountBitsForVersions, bits /*int*/) {
        this.value = value;
        this.stringValue = stringValue;
        this.characterCountBitsForVersions = characterCountBitsForVersions;
        this.bits = bits;
        Mode.FOR_BITS.set(bits, this);
        Mode.FOR_VALUE.set(value, this);
    }
    /**
     * @param bits four bits encoding a QR Code data mode
     * @return Mode encoded by these bits
     * @throws IllegalArgumentException if bits do not correspond to a known mode
     */
    Mode.forBits = function (bits /*int*/) {
        var mode = Mode.FOR_BITS.get(bits);
        if (undefined === mode) {
            throw new IllegalArgumentException_1.default();
        }
        return mode;
    };
    /**
     * @param version version in question
     * @return number of bits used, in this QR Code symbol {@link Version}, to encode the
     *         count of characters that will follow encoded in this Mode
     */
    Mode.prototype.getCharacterCountBits = function (version) {
        var versionNumber = version.getVersionNumber();
        var offset;
        if (versionNumber <= 9) {
            offset = 0;
        }
        else if (versionNumber <= 26) {
            offset = 1;
        }
        else {
            offset = 2;
        }
        return this.characterCountBitsForVersions[offset];
    };
    Mode.prototype.getValue = function () {
        return this.value;
    };
    Mode.prototype.getBits = function () {
        return this.bits;
    };
    Mode.prototype.equals = function (o) {
        if (!(o instanceof Mode)) {
            return false;
        }
        var other = o;
        return this.value === other.value;
    };
    Mode.prototype.toString = function () {
        return this.stringValue;
    };
    Mode.FOR_BITS = new Map();
    Mode.FOR_VALUE = new Map();
    Mode.TERMINATOR = new Mode(ModeValues.TERMINATOR, 'TERMINATOR', Int32Array.from([0, 0, 0]), 0x00); // Not really a mode...
    Mode.NUMERIC = new Mode(ModeValues.NUMERIC, 'NUMERIC', Int32Array.from([10, 12, 14]), 0x01);
    Mode.ALPHANUMERIC = new Mode(ModeValues.ALPHANUMERIC, 'ALPHANUMERIC', Int32Array.from([9, 11, 13]), 0x02);
    Mode.STRUCTURED_APPEND = new Mode(ModeValues.STRUCTURED_APPEND, 'STRUCTURED_APPEND', Int32Array.from([0, 0, 0]), 0x03); // Not supported
    Mode.BYTE = new Mode(ModeValues.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 0x04);
    Mode.ECI = new Mode(ModeValues.ECI, 'ECI', Int32Array.from([0, 0, 0]), 0x07); // character counts don't apply
    Mode.KANJI = new Mode(ModeValues.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 0x08);
    Mode.FNC1_FIRST_POSITION = new Mode(ModeValues.FNC1_FIRST_POSITION, 'FNC1_FIRST_POSITION', Int32Array.from([0, 0, 0]), 0x05);
    Mode.FNC1_SECOND_POSITION = new Mode(ModeValues.FNC1_SECOND_POSITION, 'FNC1_SECOND_POSITION', Int32Array.from([0, 0, 0]), 0x09);
    /** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */
    Mode.HANZI = new Mode(ModeValues.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 0x0D);
    return Mode;
}());
exports.default = Mode;


/***/ }),

/***/ "./src/core/qrcode/decoder/QRCodeDecoderMetaData.ts":
/*!**********************************************************!*\
  !*** ./src/core/qrcode/decoder/QRCodeDecoderMetaData.ts ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2013 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Meta-data container for QR Code decoding. Instances of this class may be used to convey information back to the
 * decoding caller. Callers are expected to process this.
 *
 * @see com.google.zxing.common.DecoderResult#getOther()
 */
var QRCodeDecoderMetaData = /** @class */ (function () {
    function QRCodeDecoderMetaData(mirrored) {
        this.mirrored = mirrored;
    }
    /**
     * @return true if the QR Code was mirrored.
     */
    QRCodeDecoderMetaData.prototype.isMirrored = function () {
        return this.mirrored;
    };
    /**
     * Apply the result points' order correction due to mirroring.
     *
     * @param points Array of points to apply mirror correction to.
     */
    QRCodeDecoderMetaData.prototype.applyMirroredCorrection = function (points) {
        if (!this.mirrored || points === null || points.length < 3) {
            return;
        }
        var bottomLeft = points[0];
        points[0] = points[2];
        points[2] = bottomLeft;
        // No need to 'fix' top-left and alignment pattern.
    };
    return QRCodeDecoderMetaData;
}());
exports.default = QRCodeDecoderMetaData;


/***/ }),

/***/ "./src/core/qrcode/decoder/Version.ts":
/*!********************************************!*\
  !*** ./src/core/qrcode/decoder/Version.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.decoder {*/
var BitMatrix_1 = __webpack_require__(/*! ../../common/BitMatrix */ "./src/core/common/BitMatrix.ts");
var FormatInformation_1 = __webpack_require__(/*! ./FormatInformation */ "./src/core/qrcode/decoder/FormatInformation.ts");
var ECBlocks_1 = __webpack_require__(/*! ./ECBlocks */ "./src/core/qrcode/decoder/ECBlocks.ts");
var ECB_1 = __webpack_require__(/*! ./ECB */ "./src/core/qrcode/decoder/ECB.ts");
var FormatException_1 = __webpack_require__(/*! ../../FormatException */ "./src/core/FormatException.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * See ISO 18004:2006 Annex D
 *
 * @author Sean Owen
 */
var Version = /** @class */ (function () {
    function Version(versionNumber /*int*/, alignmentPatternCenters) {
        var ecBlocks = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            ecBlocks[_i - 2] = arguments[_i];
        }
        this.versionNumber = versionNumber;
        this.alignmentPatternCenters = alignmentPatternCenters;
        this.ecBlocks = ecBlocks;
        var total = 0;
        var ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
        var ecbArray = ecBlocks[0].getECBlocks();
        for (var _a = 0, ecbArray_1 = ecbArray; _a < ecbArray_1.length; _a++) {
            var ecBlock = ecbArray_1[_a];
            total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
        }
        this.totalCodewords = total;
    }
    Version.prototype.getVersionNumber = function () {
        return this.versionNumber;
    };
    Version.prototype.getAlignmentPatternCenters = function () {
        return this.alignmentPatternCenters;
    };
    Version.prototype.getTotalCodewords = function () {
        return this.totalCodewords;
    };
    Version.prototype.getDimensionForVersion = function () {
        return 17 + 4 * this.versionNumber;
    };
    Version.prototype.getECBlocksForLevel = function (ecLevel) {
        return this.ecBlocks[ecLevel.getValue()];
        // TYPESCRIPTPORT: original was using ordinal, and using the order of levels as defined in ErrorCorrectionLevel enum (LMQH)
        // I will use the direct value from ErrorCorrectionLevelValues enum which in typescript goes to a number
    };
    /**
     * <p>Deduces version information purely from QR Code dimensions.</p>
     *
     * @param dimension dimension in modules
     * @return Version for a QR Code of that dimension
     * @throws FormatException if dimension is not 1 mod 4
     */
    Version.getProvisionalVersionForDimension = function (dimension /*int*/) {
        if (dimension % 4 !== 1) {
            throw new FormatException_1.default();
        }
        try {
            return this.getVersionForNumber((dimension - 17) / 4);
        }
        catch (ignored /*: IllegalArgumentException*/) {
            throw new FormatException_1.default();
        }
    };
    Version.getVersionForNumber = function (versionNumber /*int*/) {
        if (versionNumber < 1 || versionNumber > 40) {
            throw new IllegalArgumentException_1.default();
        }
        return Version.VERSIONS[versionNumber - 1];
    };
    Version.decodeVersionInformation = function (versionBits /*int*/) {
        var bestDifference = Number.MAX_SAFE_INTEGER;
        var bestVersion = 0;
        for (var i = 0; i < Version.VERSION_DECODE_INFO.length; i++) {
            var targetVersion = Version.VERSION_DECODE_INFO[i];
            // Do the version info bits match exactly? done.
            if (targetVersion === versionBits) {
                return Version.getVersionForNumber(i + 7);
            }
            // Otherwise see if this is the closest to a real version info bit string
            // we have seen so far
            var bitsDifference = FormatInformation_1.default.numBitsDiffering(versionBits, targetVersion);
            if (bitsDifference < bestDifference) {
                bestVersion = i + 7;
                bestDifference = bitsDifference;
            }
        }
        // We can tolerate up to 3 bits of error since no two version info codewords will
        // differ in less than 8 bits.
        if (bestDifference <= 3) {
            return Version.getVersionForNumber(bestVersion);
        }
        // If we didn't find a close enough match, fail
        return null;
    };
    /**
     * See ISO 18004:2006 Annex E
     */
    Version.prototype.buildFunctionPattern = function () {
        var dimension = this.getDimensionForVersion();
        var bitMatrix = new BitMatrix_1.default(dimension);
        // Top left finder pattern + separator + format
        bitMatrix.setRegion(0, 0, 9, 9);
        // Top right finder pattern + separator + format
        bitMatrix.setRegion(dimension - 8, 0, 8, 9);
        // Bottom left finder pattern + separator + format
        bitMatrix.setRegion(0, dimension - 8, 9, 8);
        // Alignment patterns
        var max = this.alignmentPatternCenters.length;
        for (var x = 0; x < max; x++) {
            var i = this.alignmentPatternCenters[x] - 2;
            for (var y = 0; y < max; y++) {
                if ((x === 0 && (y === 0 || y === max - 1)) || (x === max - 1 && y === 0)) {
                    // No alignment patterns near the three finder patterns
                    continue;
                }
                bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
            }
        }
        // Vertical timing pattern
        bitMatrix.setRegion(6, 9, 1, dimension - 17);
        // Horizontal timing pattern
        bitMatrix.setRegion(9, 6, dimension - 17, 1);
        if (this.versionNumber > 6) {
            // Version info, top right
            bitMatrix.setRegion(dimension - 11, 0, 3, 6);
            // Version info, bottom left
            bitMatrix.setRegion(0, dimension - 11, 6, 3);
        }
        return bitMatrix;
    };
    /*@Override*/
    Version.prototype.toString = function () {
        return '' + this.versionNumber;
    };
    /**
       * See ISO 18004:2006 Annex D.
       * Element i represents the raw version bits that specify version i + 7
       */
    Version.VERSION_DECODE_INFO = Int32Array.from([
        0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6,
        0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78,
        0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683,
        0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB,
        0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250,
        0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B,
        0x2542E, 0x26A64, 0x27541, 0x28C69
    ]);
    /**
       * See ISO 18004:2006 6.5.1 Table 9
       */
    Version.VERSIONS = [
        new Version(1, new Int32Array(0), new ECBlocks_1.default(7, new ECB_1.default(1, 19)), new ECBlocks_1.default(10, new ECB_1.default(1, 16)), new ECBlocks_1.default(13, new ECB_1.default(1, 13)), new ECBlocks_1.default(17, new ECB_1.default(1, 9))),
        new Version(2, Int32Array.from([6, 18]), new ECBlocks_1.default(10, new ECB_1.default(1, 34)), new ECBlocks_1.default(16, new ECB_1.default(1, 28)), new ECBlocks_1.default(22, new ECB_1.default(1, 22)), new ECBlocks_1.default(28, new ECB_1.default(1, 16))),
        new Version(3, Int32Array.from([6, 22]), new ECBlocks_1.default(15, new ECB_1.default(1, 55)), new ECBlocks_1.default(26, new ECB_1.default(1, 44)), new ECBlocks_1.default(18, new ECB_1.default(2, 17)), new ECBlocks_1.default(22, new ECB_1.default(2, 13))),
        new Version(4, Int32Array.from([6, 26]), new ECBlocks_1.default(20, new ECB_1.default(1, 80)), new ECBlocks_1.default(18, new ECB_1.default(2, 32)), new ECBlocks_1.default(26, new ECB_1.default(2, 24)), new ECBlocks_1.default(16, new ECB_1.default(4, 9))),
        new Version(5, Int32Array.from([6, 30]), new ECBlocks_1.default(26, new ECB_1.default(1, 108)), new ECBlocks_1.default(24, new ECB_1.default(2, 43)), new ECBlocks_1.default(18, new ECB_1.default(2, 15), new ECB_1.default(2, 16)), new ECBlocks_1.default(22, new ECB_1.default(2, 11), new ECB_1.default(2, 12))),
        new Version(6, Int32Array.from([6, 34]), new ECBlocks_1.default(18, new ECB_1.default(2, 68)), new ECBlocks_1.default(16, new ECB_1.default(4, 27)), new ECBlocks_1.default(24, new ECB_1.default(4, 19)), new ECBlocks_1.default(28, new ECB_1.default(4, 15))),
        new Version(7, Int32Array.from([6, 22, 38]), new ECBlocks_1.default(20, new ECB_1.default(2, 78)), new ECBlocks_1.default(18, new ECB_1.default(4, 31)), new ECBlocks_1.default(18, new ECB_1.default(2, 14), new ECB_1.default(4, 15)), new ECBlocks_1.default(26, new ECB_1.default(4, 13), new ECB_1.default(1, 14))),
        new Version(8, Int32Array.from([6, 24, 42]), new ECBlocks_1.default(24, new ECB_1.default(2, 97)), new ECBlocks_1.default(22, new ECB_1.default(2, 38), new ECB_1.default(2, 39)), new ECBlocks_1.default(22, new ECB_1.default(4, 18), new ECB_1.default(2, 19)), new ECBlocks_1.default(26, new ECB_1.default(4, 14), new ECB_1.default(2, 15))),
        new Version(9, Int32Array.from([6, 26, 46]), new ECBlocks_1.default(30, new ECB_1.default(2, 116)), new ECBlocks_1.default(22, new ECB_1.default(3, 36), new ECB_1.default(2, 37)), new ECBlocks_1.default(20, new ECB_1.default(4, 16), new ECB_1.default(4, 17)), new ECBlocks_1.default(24, new ECB_1.default(4, 12), new ECB_1.default(4, 13))),
        new Version(10, Int32Array.from([6, 28, 50]), new ECBlocks_1.default(18, new ECB_1.default(2, 68), new ECB_1.default(2, 69)), new ECBlocks_1.default(26, new ECB_1.default(4, 43), new ECB_1.default(1, 44)), new ECBlocks_1.default(24, new ECB_1.default(6, 19), new ECB_1.default(2, 20)), new ECBlocks_1.default(28, new ECB_1.default(6, 15), new ECB_1.default(2, 16))),
        new Version(11, Int32Array.from([6, 30, 54]), new ECBlocks_1.default(20, new ECB_1.default(4, 81)), new ECBlocks_1.default(30, new ECB_1.default(1, 50), new ECB_1.default(4, 51)), new ECBlocks_1.default(28, new ECB_1.default(4, 22), new ECB_1.default(4, 23)), new ECBlocks_1.default(24, new ECB_1.default(3, 12), new ECB_1.default(8, 13))),
        new Version(12, Int32Array.from([6, 32, 58]), new ECBlocks_1.default(24, new ECB_1.default(2, 92), new ECB_1.default(2, 93)), new ECBlocks_1.default(22, new ECB_1.default(6, 36), new ECB_1.default(2, 37)), new ECBlocks_1.default(26, new ECB_1.default(4, 20), new ECB_1.default(6, 21)), new ECBlocks_1.default(28, new ECB_1.default(7, 14), new ECB_1.default(4, 15))),
        new Version(13, Int32Array.from([6, 34, 62]), new ECBlocks_1.default(26, new ECB_1.default(4, 107)), new ECBlocks_1.default(22, new ECB_1.default(8, 37), new ECB_1.default(1, 38)), new ECBlocks_1.default(24, new ECB_1.default(8, 20), new ECB_1.default(4, 21)), new ECBlocks_1.default(22, new ECB_1.default(12, 11), new ECB_1.default(4, 12))),
        new Version(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks_1.default(30, new ECB_1.default(3, 115), new ECB_1.default(1, 116)), new ECBlocks_1.default(24, new ECB_1.default(4, 40), new ECB_1.default(5, 41)), new ECBlocks_1.default(20, new ECB_1.default(11, 16), new ECB_1.default(5, 17)), new ECBlocks_1.default(24, new ECB_1.default(11, 12), new ECB_1.default(5, 13))),
        new Version(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks_1.default(22, new ECB_1.default(5, 87), new ECB_1.default(1, 88)), new ECBlocks_1.default(24, new ECB_1.default(5, 41), new ECB_1.default(5, 42)), new ECBlocks_1.default(30, new ECB_1.default(5, 24), new ECB_1.default(7, 25)), new ECBlocks_1.default(24, new ECB_1.default(11, 12), new ECB_1.default(7, 13))),
        new Version(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks_1.default(24, new ECB_1.default(5, 98), new ECB_1.default(1, 99)), new ECBlocks_1.default(28, new ECB_1.default(7, 45), new ECB_1.default(3, 46)), new ECBlocks_1.default(24, new ECB_1.default(15, 19), new ECB_1.default(2, 20)), new ECBlocks_1.default(30, new ECB_1.default(3, 15), new ECB_1.default(13, 16))),
        new Version(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks_1.default(28, new ECB_1.default(1, 107), new ECB_1.default(5, 108)), new ECBlocks_1.default(28, new ECB_1.default(10, 46), new ECB_1.default(1, 47)), new ECBlocks_1.default(28, new ECB_1.default(1, 22), new ECB_1.default(15, 23)), new ECBlocks_1.default(28, new ECB_1.default(2, 14), new ECB_1.default(17, 15))),
        new Version(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks_1.default(30, new ECB_1.default(5, 120), new ECB_1.default(1, 121)), new ECBlocks_1.default(26, new ECB_1.default(9, 43), new ECB_1.default(4, 44)), new ECBlocks_1.default(28, new ECB_1.default(17, 22), new ECB_1.default(1, 23)), new ECBlocks_1.default(28, new ECB_1.default(2, 14), new ECB_1.default(19, 15))),
        new Version(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks_1.default(28, new ECB_1.default(3, 113), new ECB_1.default(4, 114)), new ECBlocks_1.default(26, new ECB_1.default(3, 44), new ECB_1.default(11, 45)), new ECBlocks_1.default(26, new ECB_1.default(17, 21), new ECB_1.default(4, 22)), new ECBlocks_1.default(26, new ECB_1.default(9, 13), new ECB_1.default(16, 14))),
        new Version(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks_1.default(28, new ECB_1.default(3, 107), new ECB_1.default(5, 108)), new ECBlocks_1.default(26, new ECB_1.default(3, 41), new ECB_1.default(13, 42)), new ECBlocks_1.default(30, new ECB_1.default(15, 24), new ECB_1.default(5, 25)), new ECBlocks_1.default(28, new ECB_1.default(15, 15), new ECB_1.default(10, 16))),
        new Version(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks_1.default(28, new ECB_1.default(4, 116), new ECB_1.default(4, 117)), new ECBlocks_1.default(26, new ECB_1.default(17, 42)), new ECBlocks_1.default(28, new ECB_1.default(17, 22), new ECB_1.default(6, 23)), new ECBlocks_1.default(30, new ECB_1.default(19, 16), new ECB_1.default(6, 17))),
        new Version(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks_1.default(28, new ECB_1.default(2, 111), new ECB_1.default(7, 112)), new ECBlocks_1.default(28, new ECB_1.default(17, 46)), new ECBlocks_1.default(30, new ECB_1.default(7, 24), new ECB_1.default(16, 25)), new ECBlocks_1.default(24, new ECB_1.default(34, 13))),
        new Version(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks_1.default(30, new ECB_1.default(4, 121), new ECB_1.default(5, 122)), new ECBlocks_1.default(28, new ECB_1.default(4, 47), new ECB_1.default(14, 48)), new ECBlocks_1.default(30, new ECB_1.default(11, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(16, 15), new ECB_1.default(14, 16))),
        new Version(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks_1.default(30, new ECB_1.default(6, 117), new ECB_1.default(4, 118)), new ECBlocks_1.default(28, new ECB_1.default(6, 45), new ECB_1.default(14, 46)), new ECBlocks_1.default(30, new ECB_1.default(11, 24), new ECB_1.default(16, 25)), new ECBlocks_1.default(30, new ECB_1.default(30, 16), new ECB_1.default(2, 17))),
        new Version(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks_1.default(26, new ECB_1.default(8, 106), new ECB_1.default(4, 107)), new ECBlocks_1.default(28, new ECB_1.default(8, 47), new ECB_1.default(13, 48)), new ECBlocks_1.default(30, new ECB_1.default(7, 24), new ECB_1.default(22, 25)), new ECBlocks_1.default(30, new ECB_1.default(22, 15), new ECB_1.default(13, 16))),
        new Version(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks_1.default(28, new ECB_1.default(10, 114), new ECB_1.default(2, 115)), new ECBlocks_1.default(28, new ECB_1.default(19, 46), new ECB_1.default(4, 47)), new ECBlocks_1.default(28, new ECB_1.default(28, 22), new ECB_1.default(6, 23)), new ECBlocks_1.default(30, new ECB_1.default(33, 16), new ECB_1.default(4, 17))),
        new Version(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks_1.default(30, new ECB_1.default(8, 122), new ECB_1.default(4, 123)), new ECBlocks_1.default(28, new ECB_1.default(22, 45), new ECB_1.default(3, 46)), new ECBlocks_1.default(30, new ECB_1.default(8, 23), new ECB_1.default(26, 24)), new ECBlocks_1.default(30, new ECB_1.default(12, 15), new ECB_1.default(28, 16))),
        new Version(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks_1.default(30, new ECB_1.default(3, 117), new ECB_1.default(10, 118)), new ECBlocks_1.default(28, new ECB_1.default(3, 45), new ECB_1.default(23, 46)), new ECBlocks_1.default(30, new ECB_1.default(4, 24), new ECB_1.default(31, 25)), new ECBlocks_1.default(30, new ECB_1.default(11, 15), new ECB_1.default(31, 16))),
        new Version(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks_1.default(30, new ECB_1.default(7, 116), new ECB_1.default(7, 117)), new ECBlocks_1.default(28, new ECB_1.default(21, 45), new ECB_1.default(7, 46)), new ECBlocks_1.default(30, new ECB_1.default(1, 23), new ECB_1.default(37, 24)), new ECBlocks_1.default(30, new ECB_1.default(19, 15), new ECB_1.default(26, 16))),
        new Version(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks_1.default(30, new ECB_1.default(5, 115), new ECB_1.default(10, 116)), new ECBlocks_1.default(28, new ECB_1.default(19, 47), new ECB_1.default(10, 48)), new ECBlocks_1.default(30, new ECB_1.default(15, 24), new ECB_1.default(25, 25)), new ECBlocks_1.default(30, new ECB_1.default(23, 15), new ECB_1.default(25, 16))),
        new Version(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks_1.default(30, new ECB_1.default(13, 115), new ECB_1.default(3, 116)), new ECBlocks_1.default(28, new ECB_1.default(2, 46), new ECB_1.default(29, 47)), new ECBlocks_1.default(30, new ECB_1.default(42, 24), new ECB_1.default(1, 25)), new ECBlocks_1.default(30, new ECB_1.default(23, 15), new ECB_1.default(28, 16))),
        new Version(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks_1.default(30, new ECB_1.default(17, 115)), new ECBlocks_1.default(28, new ECB_1.default(10, 46), new ECB_1.default(23, 47)), new ECBlocks_1.default(30, new ECB_1.default(10, 24), new ECB_1.default(35, 25)), new ECBlocks_1.default(30, new ECB_1.default(19, 15), new ECB_1.default(35, 16))),
        new Version(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks_1.default(30, new ECB_1.default(17, 115), new ECB_1.default(1, 116)), new ECBlocks_1.default(28, new ECB_1.default(14, 46), new ECB_1.default(21, 47)), new ECBlocks_1.default(30, new ECB_1.default(29, 24), new ECB_1.default(19, 25)), new ECBlocks_1.default(30, new ECB_1.default(11, 15), new ECB_1.default(46, 16))),
        new Version(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks_1.default(30, new ECB_1.default(13, 115), new ECB_1.default(6, 116)), new ECBlocks_1.default(28, new ECB_1.default(14, 46), new ECB_1.default(23, 47)), new ECBlocks_1.default(30, new ECB_1.default(44, 24), new ECB_1.default(7, 25)), new ECBlocks_1.default(30, new ECB_1.default(59, 16), new ECB_1.default(1, 17))),
        new Version(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks_1.default(30, new ECB_1.default(12, 121), new ECB_1.default(7, 122)), new ECBlocks_1.default(28, new ECB_1.default(12, 47), new ECB_1.default(26, 48)), new ECBlocks_1.default(30, new ECB_1.default(39, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(22, 15), new ECB_1.default(41, 16))),
        new Version(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks_1.default(30, new ECB_1.default(6, 121), new ECB_1.default(14, 122)), new ECBlocks_1.default(28, new ECB_1.default(6, 47), new ECB_1.default(34, 48)), new ECBlocks_1.default(30, new ECB_1.default(46, 24), new ECB_1.default(10, 25)), new ECBlocks_1.default(30, new ECB_1.default(2, 15), new ECB_1.default(64, 16))),
        new Version(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks_1.default(30, new ECB_1.default(17, 122), new ECB_1.default(4, 123)), new ECBlocks_1.default(28, new ECB_1.default(29, 46), new ECB_1.default(14, 47)), new ECBlocks_1.default(30, new ECB_1.default(49, 24), new ECB_1.default(10, 25)), new ECBlocks_1.default(30, new ECB_1.default(24, 15), new ECB_1.default(46, 16))),
        new Version(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks_1.default(30, new ECB_1.default(4, 122), new ECB_1.default(18, 123)), new ECBlocks_1.default(28, new ECB_1.default(13, 46), new ECB_1.default(32, 47)), new ECBlocks_1.default(30, new ECB_1.default(48, 24), new ECB_1.default(14, 25)), new ECBlocks_1.default(30, new ECB_1.default(42, 15), new ECB_1.default(32, 16))),
        new Version(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks_1.default(30, new ECB_1.default(20, 117), new ECB_1.default(4, 118)), new ECBlocks_1.default(28, new ECB_1.default(40, 47), new ECB_1.default(7, 48)), new ECBlocks_1.default(30, new ECB_1.default(43, 24), new ECB_1.default(22, 25)), new ECBlocks_1.default(30, new ECB_1.default(10, 15), new ECB_1.default(67, 16))),
        new Version(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks_1.default(30, new ECB_1.default(19, 118), new ECB_1.default(6, 119)), new ECBlocks_1.default(28, new ECB_1.default(18, 47), new ECB_1.default(31, 48)), new ECBlocks_1.default(30, new ECB_1.default(34, 24), new ECB_1.default(34, 25)), new ECBlocks_1.default(30, new ECB_1.default(20, 15), new ECB_1.default(61, 16)))
    ];
    return Version;
}());
exports.default = Version;


/***/ }),

/***/ "./src/core/qrcode/detector/AlignmentPattern.ts":
/*!******************************************************!*\
  !*** ./src/core/qrcode/detector/AlignmentPattern.ts ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.detector {*/
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
/**
 * <p>Encapsulates an alignment pattern, which are the smaller square patterns found in
 * all but the simplest QR Codes.</p>
 *
 * @author Sean Owen
 */
var AlignmentPattern = /** @class */ (function (_super) {
    __extends(AlignmentPattern, _super);
    function AlignmentPattern(posX /*float*/, posY /*float*/, estimatedModuleSize /*float*/) {
        var _this = _super.call(this, posX, posY) || this;
        _this.estimatedModuleSize = estimatedModuleSize;
        return _this;
    }
    /**
     * <p>Determines if this alignment pattern "about equals" an alignment pattern at the stated
     * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
     */
    AlignmentPattern.prototype.aboutEquals = function (moduleSize /*float*/, i /*float*/, j /*float*/) {
        if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
            return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
        }
        return false;
    };
    /**
     * Combines this object's current estimate of a finder pattern position and module size
     * with a new estimate. It returns a new {@code FinderPattern} containing an average of the two.
     */
    AlignmentPattern.prototype.combineEstimate = function (i /*float*/, j /*float*/, newModuleSize /*float*/) {
        var combinedX = (this.getX() + j) / 2.0;
        var combinedY = (this.getY() + i) / 2.0;
        var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2.0;
        return new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
    };
    return AlignmentPattern;
}(ResultPoint_1.default));
exports.default = AlignmentPattern;


/***/ }),

/***/ "./src/core/qrcode/detector/AlignmentPatternFinder.ts":
/*!************************************************************!*\
  !*** ./src/core/qrcode/detector/AlignmentPatternFinder.ts ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AlignmentPattern_1 = __webpack_require__(/*! ./AlignmentPattern */ "./src/core/qrcode/detector/AlignmentPattern.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
/*import java.util.ArrayList;*/
/*import java.util.List;*/
/**
 * <p>This class attempts to find alignment patterns in a QR Code. Alignment patterns look like finder
 * patterns but are smaller and appear at regular intervals throughout the image.</p>
 *
 * <p>At the moment this only looks for the bottom-right alignment pattern.</p>
 *
 * <p>This is mostly a simplified copy of {@link FinderPatternFinder}. It is copied,
 * pasted and stripped down here for maximum performance but does unfortunately duplicate
 * some code.</p>
 *
 * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.</p>
 *
 * @author Sean Owen
 */
var AlignmentPatternFinder = /** @class */ (function () {
    /**
     * <p>Creates a finder that will look in a portion of the whole image.</p>
     *
     * @param image image to search
     * @param startX left column from which to start searching
     * @param startY top row from which to start searching
     * @param width width of region to search
     * @param height height of region to search
     * @param moduleSize estimated module size so far
     */
    function AlignmentPatternFinder(image, startX /*int*/, startY /*int*/, width /*int*/, height /*int*/, moduleSize /*float*/, resultPointCallback) {
        this.image = image;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.moduleSize = moduleSize;
        this.resultPointCallback = resultPointCallback;
        this.possibleCenters = []; // new Array<any>(5))
        // TYPESCRIPTPORT: array initialization without size as the length is checked below
        this.crossCheckStateCount = new Int32Array(3);
    }
    /**
     * <p>This method attempts to find the bottom-right alignment pattern in the image. It is a bit messy since
     * it's pretty performance-critical and so is written to be fast foremost.</p>
     *
     * @return {@link AlignmentPattern} if found
     * @throws NotFoundException if not found
     */
    AlignmentPatternFinder.prototype.find = function () {
        var startX = this.startX;
        var height = this.height;
        var width = this.width;
        var maxJ = startX + width;
        var middleI = this.startY + (height / 2);
        // We are looking for black/white/black modules in 1:1:1 ratio
        // this tracks the number of black/white/black modules seen so far
        var stateCount = new Int32Array(3);
        var image = this.image;
        for (var iGen = 0; iGen < height; iGen++) {
            // Search from middle outwards
            var i = middleI + ((iGen & 0x01) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            var j = startX;
            // Burn off leading white pixels before anything else; if we start in the middle of
            // a white run, it doesn't make sense to count its length, since we don't know if the
            // white run continued to the left of the start point
            while (j < maxJ && !image.get(j, i)) {
                j++;
            }
            var currentState = 0;
            while (j < maxJ) {
                if (image.get(j, i)) {
                    // Black pixel
                    if (currentState === 1) { // Counting black pixels
                        stateCount[1]++;
                    }
                    else { // Counting white pixels
                        if (currentState === 2) { // A winner?
                            if (this.foundPatternCross(stateCount)) { // Yes
                                var confirmed = this.handlePossibleCenter(stateCount, i, j);
                                if (confirmed !== null) {
                                    return confirmed;
                                }
                            }
                            stateCount[0] = stateCount[2];
                            stateCount[1] = 1;
                            stateCount[2] = 0;
                            currentState = 1;
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                }
                else { // White pixel
                    if (currentState === 1) { // Counting black pixels
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                j++;
            }
            if (this.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                if (confirmed !== null) {
                    return confirmed;
                }
            }
        }
        // Hmm, nothing we saw was observed and confirmed twice. If we had
        // any guess at all, return it.
        if (this.possibleCenters.length !== 0) {
            return this.possibleCenters[0];
        }
        throw new NotFoundException_1.default();
    };
    /**
     * Given a count of black/white/black pixels just seen and an end position,
     * figures the location of the center of this black/white/black run.
     */
    AlignmentPatternFinder.centerFromEnd = function (stateCount, end /*int*/) {
        return (end - stateCount[2]) - stateCount[1] / 2.0;
    };
    /**
     * @param stateCount count of black/white/black pixels just read
     * @return true iff the proportions of the counts is close enough to the 1/1/1 ratios
     *         used by alignment patterns to be considered a match
     */
    AlignmentPatternFinder.prototype.foundPatternCross = function (stateCount) {
        var moduleSize = this.moduleSize;
        var maxVariance = moduleSize / 2.0;
        for (var i = 0; i < 3; i++) {
            if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                return false;
            }
        }
        return true;
    };
    /**
     * <p>After a horizontal scan finds a potential alignment pattern, this method
     * "cross-checks" by scanning down vertically through the center of the possible
     * alignment pattern to see if the same proportion is detected.</p>
     *
     * @param startI row where an alignment pattern was detected
     * @param centerJ center of the section that appears to cross an alignment pattern
     * @param maxCount maximum reasonable number of modules that should be
     * observed in any reading state, based on the results of the horizontal scan
     * @return vertical center of alignment pattern, or {@link Float#NaN} if not found
     */
    AlignmentPatternFinder.prototype.crossCheckVertical = function (startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
        var image = this.image;
        var maxI = image.getHeight();
        var stateCount = this.crossCheckStateCount;
        stateCount[0] = 0;
        stateCount[1] = 0;
        stateCount[2] = 0;
        // Start counting up from center
        var i = startI;
        while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        // If already too many modules in this state or ran off the edge:
        if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        // Now also count down from center
        i = startI + 1;
        while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
        }
        if (i === maxI || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
            stateCount[2]++;
            i++;
        }
        if (stateCount[2] > maxCount) {
            return NaN;
        }
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
        }
        return this.foundPatternCross(stateCount) ? AlignmentPatternFinder.centerFromEnd(stateCount, i) : NaN;
    };
    /**
     * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
     * cross check with a vertical scan, and if successful, will see if this pattern had been
     * found on a previous horizontal scan. If so, we consider it confirmed and conclude we have
     * found the alignment pattern.</p>
     *
     * @param stateCount reading state module counts from horizontal scan
     * @param i row where alignment pattern may be found
     * @param j end of possible alignment pattern in row
     * @return {@link AlignmentPattern} if we have found the same pattern twice, or null if not
     */
    AlignmentPatternFinder.prototype.handlePossibleCenter = function (stateCount, i /*int*/, j /*int*/) {
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        var centerJ = AlignmentPatternFinder.centerFromEnd(stateCount, j);
        var centerI = this.crossCheckVertical(i, /*(int) */ centerJ, 2 * stateCount[1], stateCountTotal);
        if (!isNaN(centerI)) {
            var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
            for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
                var center = _a[_i];
                // Look for about the same center and module size:
                if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                    return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                }
            }
            // Hadn't found this before; save it
            var point = new AlignmentPattern_1.default(centerJ, centerI, estimatedModuleSize);
            this.possibleCenters.push(point);
            if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                this.resultPointCallback.foundPossibleResultPoint(point);
            }
        }
        return null;
    };
    return AlignmentPatternFinder;
}());
exports.default = AlignmentPatternFinder;


/***/ }),

/***/ "./src/core/qrcode/detector/Detector.ts":
/*!**********************************************!*\
  !*** ./src/core/qrcode/detector/Detector.ts ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.detector {*/
var DecodeHintType_1 = __webpack_require__(/*! ../../DecodeHintType */ "./src/core/DecodeHintType.ts");
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var DetectorResult_1 = __webpack_require__(/*! ../../common/DetectorResult */ "./src/core/common/DetectorResult.ts");
var GridSamplerInstance_1 = __webpack_require__(/*! ../../common/GridSamplerInstance */ "./src/core/common/GridSamplerInstance.ts");
var PerspectiveTransform_1 = __webpack_require__(/*! ../../common/PerspectiveTransform */ "./src/core/common/PerspectiveTransform.ts");
var MathUtils_1 = __webpack_require__(/*! ../../common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
var Version_1 = __webpack_require__(/*! ../decoder/Version */ "./src/core/qrcode/decoder/Version.ts");
var FinderPatternFinder_1 = __webpack_require__(/*! ./FinderPatternFinder */ "./src/core/qrcode/detector/FinderPatternFinder.ts");
var AlignmentPatternFinder_1 = __webpack_require__(/*! ./AlignmentPatternFinder */ "./src/core/qrcode/detector/AlignmentPatternFinder.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
/*import java.util.Map;*/
/**
 * <p>Encapsulates logic that can detect a QR Code in an image, even if the QR Code
 * is rotated or skewed, or partially obscured.</p>
 *
 * @author Sean Owen
 */
var Detector = /** @class */ (function () {
    function Detector(image) {
        this.image = image;
    }
    Detector.prototype.getImage = function () {
        return this.image;
    };
    Detector.prototype.getResultPointCallback = function () {
        return this.resultPointCallback;
    };
    /**
     * <p>Detects a QR Code in an image.</p>
     *
     * @return {@link DetectorResult} encapsulating results of detecting a QR Code
     * @throws NotFoundException if QR Code cannot be found
     * @throws FormatException if a QR Code cannot be decoded
     */
    // public detect(): DetectorResult /*throws NotFoundException, FormatException*/ {
    //   return detect(null)
    // }
    /**
     * <p>Detects a QR Code in an image.</p>
     *
     * @param hints optional hints to detector
     * @return {@link DetectorResult} encapsulating results of detecting a QR Code
     * @throws NotFoundException if QR Code cannot be found
     * @throws FormatException if a QR Code cannot be decoded
     */
    Detector.prototype.detect = function (hints) {
        this.resultPointCallback = (hints === null || hints === undefined) ? null :
            /*(ResultPointCallback) */ hints.get(DecodeHintType_1.default.NEED_RESULT_POINT_CALLBACK);
        var finder = new FinderPatternFinder_1.default(this.image, this.resultPointCallback);
        var info = finder.find(hints);
        return this.processFinderPatternInfo(info);
    };
    Detector.prototype.processFinderPatternInfo = function (info) {
        var topLeft = info.getTopLeft();
        var topRight = info.getTopRight();
        var bottomLeft = info.getBottomLeft();
        var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
        if (moduleSize < 1.0) {
            throw new NotFoundException_1.default('No pattern found in proccess finder.');
        }
        var dimension = Detector.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
        var provisionalVersion = Version_1.default.getProvisionalVersionForDimension(dimension);
        var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
        var alignmentPattern = null;
        // Anything above version 1 has an alignment pattern
        if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
            // Guess where a "bottom right" finder pattern would have been
            var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
            var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
            // Estimate that alignment pattern is closer by 3 modules
            // from "bottom right" to known top left location
            var correctionToTopLeft = 1.0 - 3.0 / modulesBetweenFPCenters;
            var estAlignmentX = /*(int) */ Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
            var estAlignmentY = /*(int) */ Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));
            // Kind of arbitrary -- expand search radius before giving up
            for (var i = 4; i <= 16; i <<= 1) {
                try {
                    alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                    break;
                }
                catch (re /*NotFoundException*/) {
                    if (!(re instanceof NotFoundException_1.default)) {
                        throw re;
                    }
                    // try next round
                }
            }
            // If we didn't find alignment pattern... well try anyway without it
        }
        var transform = Detector.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
        var bits = Detector.sampleGrid(this.image, transform, dimension);
        var points;
        if (alignmentPattern === null) {
            points = [bottomLeft, topLeft, topRight];
        }
        else {
            points = [bottomLeft, topLeft, topRight, alignmentPattern];
        }
        return new DetectorResult_1.default(bits, points);
    };
    Detector.createTransform = function (topLeft, topRight, bottomLeft, alignmentPattern, dimension /*int*/) {
        var dimMinusThree = dimension - 3.5;
        var bottomRightX; /*float*/
        var bottomRightY; /*float*/
        var sourceBottomRightX; /*float*/
        var sourceBottomRightY; /*float*/
        if (alignmentPattern !== null) {
            bottomRightX = alignmentPattern.getX();
            bottomRightY = alignmentPattern.getY();
            sourceBottomRightX = dimMinusThree - 3.0;
            sourceBottomRightY = sourceBottomRightX;
        }
        else {
            // Don't have an alignment pattern, just make up the bottom-right point
            bottomRightX = (topRight.getX() - topLeft.getX()) + bottomLeft.getX();
            bottomRightY = (topRight.getY() - topLeft.getY()) + bottomLeft.getY();
            sourceBottomRightX = dimMinusThree;
            sourceBottomRightY = dimMinusThree;
        }
        return PerspectiveTransform_1.default.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
    };
    Detector.sampleGrid = function (image, transform, dimension /*int*/) {
        var sampler = GridSamplerInstance_1.default.getInstance();
        return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
    };
    /**
     * <p>Computes the dimension (number of modules on a size) of the QR Code based on the position
     * of the finder patterns and estimated module size.</p>
     */
    Detector.computeDimension = function (topLeft, topRight, bottomLeft, moduleSize /*float*/) {
        var tltrCentersDimension = MathUtils_1.default.round(ResultPoint_1.default.distance(topLeft, topRight) / moduleSize);
        var tlblCentersDimension = MathUtils_1.default.round(ResultPoint_1.default.distance(topLeft, bottomLeft) / moduleSize);
        var dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
        switch (dimension & 0x03) { // mod 4
            case 0:
                dimension++;
                break;
            // 1? do nothing
            case 2:
                dimension--;
                break;
            case 3:
                throw new NotFoundException_1.default('Dimensions could be not found.');
        }
        return dimension;
    };
    /**
     * <p>Computes an average estimated module size based on estimated derived from the positions
     * of the three finder patterns.</p>
     *
     * @param topLeft detected top-left finder pattern center
     * @param topRight detected top-right finder pattern center
     * @param bottomLeft detected bottom-left finder pattern center
     * @return estimated module size
     */
    Detector.prototype.calculateModuleSize = function (topLeft, topRight, bottomLeft) {
        // Take the average
        return (this.calculateModuleSizeOneWay(topLeft, topRight) +
            this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
    };
    /**
     * <p>Estimates module size based on two finder patterns -- it uses
     * {@link #sizeOfBlackWhiteBlackRunBothWays(int, int, int, int)} to figure the
     * width of each, measuring along the axis between their centers.</p>
     */
    Detector.prototype.calculateModuleSizeOneWay = function (pattern, otherPattern) {
        var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */ Math.floor(pattern.getX()), 
        /*(int) */ Math.floor(pattern.getY()), 
        /*(int) */ Math.floor(otherPattern.getX()), 
        /*(int) */ Math.floor(otherPattern.getY()));
        var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */ Math.floor(otherPattern.getX()), 
        /*(int) */ Math.floor(otherPattern.getY()), 
        /*(int) */ Math.floor(pattern.getX()), 
        /*(int) */ Math.floor(pattern.getY()));
        if (isNaN(moduleSizeEst1)) {
            return moduleSizeEst2 / 7.0;
        }
        if (isNaN(moduleSizeEst2)) {
            return moduleSizeEst1 / 7.0;
        }
        // Average them, and divide by 7 since we've counted the width of 3 black modules,
        // and 1 white and 1 black module on either side. Ergo, divide sum by 14.
        return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
    };
    /**
     * See {@link #sizeOfBlackWhiteBlackRun(int, int, int, int)}; computes the total width of
     * a finder pattern by looking for a black-white-black run from the center in the direction
     * of another point (another finder pattern center), and in the opposite direction too.
     */
    Detector.prototype.sizeOfBlackWhiteBlackRunBothWays = function (fromX /*int*/, fromY /*int*/, toX /*int*/, toY /*int*/) {
        var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
        // Now count other way -- don't run off image though of course
        var scale = 1.0;
        var otherToX = fromX - (toX - fromX);
        if (otherToX < 0) {
            scale = fromX / /*(float) */ (fromX - otherToX);
            otherToX = 0;
        }
        else if (otherToX >= this.image.getWidth()) {
            scale = (this.image.getWidth() - 1 - fromX) / /*(float) */ (otherToX - fromX);
            otherToX = this.image.getWidth() - 1;
        }
        var otherToY = /*(int) */ Math.floor(fromY - (toY - fromY) * scale);
        scale = 1.0;
        if (otherToY < 0) {
            scale = fromY / /*(float) */ (fromY - otherToY);
            otherToY = 0;
        }
        else if (otherToY >= this.image.getHeight()) {
            scale = (this.image.getHeight() - 1 - fromY) / /*(float) */ (otherToY - fromY);
            otherToY = this.image.getHeight() - 1;
        }
        otherToX = /*(int) */ Math.floor(fromX + (otherToX - fromX) * scale);
        result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
        // Middle pixel is double-counted this way; subtract 1
        return result - 1.0;
    };
    /**
     * <p>This method traces a line from a point in the image, in the direction towards another point.
     * It begins in a black region, and keeps going until it finds white, then black, then white again.
     * It reports the distance from the start to this point.</p>
     *
     * <p>This is used when figuring out how wide a finder pattern is, when the finder pattern
     * may be skewed or rotated.</p>
     */
    Detector.prototype.sizeOfBlackWhiteBlackRun = function (fromX /*int*/, fromY /*int*/, toX /*int*/, toY /*int*/) {
        // Mild variant of Bresenham's algorithm
        // see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
        var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
        if (steep) {
            var temp = fromX;
            fromX = fromY;
            fromY = temp;
            temp = toX;
            toX = toY;
            toY = temp;
        }
        var dx = Math.abs(toX - fromX);
        var dy = Math.abs(toY - fromY);
        var error = -dx / 2;
        var xstep = fromX < toX ? 1 : -1;
        var ystep = fromY < toY ? 1 : -1;
        // In black pixels, looking for white, first or second time.
        var state = 0;
        // Loop up until x == toX, but not beyond
        var xLimit = toX + xstep;
        for (var x = fromX, y = fromY; x !== xLimit; x += xstep) {
            var realX = steep ? y : x;
            var realY = steep ? x : y;
            // Does current pixel mean we have moved white to black or vice versa?
            // Scanning black in state 0,2 and white in state 1, so if we find the wrong
            // color, advance to next state or end if we are in state 2 already
            if ((state === 1) === this.image.get(realX, realY)) {
                if (state === 2) {
                    return MathUtils_1.default.distance(x, y, fromX, fromY);
                }
                state++;
            }
            error += dy;
            if (error > 0) {
                if (y === toY) {
                    break;
                }
                y += ystep;
                error -= dx;
            }
        }
        // Found black-white-black; give the benefit of the doubt that the next pixel outside the image
        // is "white" so this last point at (toX+xStep,toY) is the right ending. This is really a
        // small approximation; (toX+xStep,toY+yStep) might be really correct. Ignore this.
        if (state === 2) {
            return MathUtils_1.default.distance(toX + xstep, toY, fromX, fromY);
        }
        // else we didn't find even black-white-black; no estimate is really possible
        return NaN;
    };
    /**
     * <p>Attempts to locate an alignment pattern in a limited region of the image, which is
     * guessed to contain it. This method uses {@link AlignmentPattern}.</p>
     *
     * @param overallEstModuleSize estimated module size so far
     * @param estAlignmentX x coordinate of center of area probably containing alignment pattern
     * @param estAlignmentY y coordinate of above
     * @param allowanceFactor number of pixels in all directions to search from the center
     * @return {@link AlignmentPattern} if found, or null otherwise
     * @throws NotFoundException if an unexpected error occurs during detection
     */
    Detector.prototype.findAlignmentInRegion = function (overallEstModuleSize /*float*/, estAlignmentX /*int*/, estAlignmentY /*int*/, allowanceFactor /*float*/) {
        // Look for an alignment pattern (3 modules in size) around where it
        // should be
        var allowance = /*(int) */ Math.floor(allowanceFactor * overallEstModuleSize);
        var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
        var alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
        if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
            throw new NotFoundException_1.default('Alignment top exceeds estimated module size.');
        }
        var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
        var alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
        if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
            throw new NotFoundException_1.default('Alignment bottom exceeds estimated module size.');
        }
        var alignmentFinder = new AlignmentPatternFinder_1.default(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
        return alignmentFinder.find();
    };
    return Detector;
}());
exports.default = Detector;


/***/ }),

/***/ "./src/core/qrcode/detector/FinderPattern.ts":
/*!***************************************************!*\
  !*** ./src/core/qrcode/detector/FinderPattern.ts ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.detector {*/
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
/**
 * <p>Encapsulates a finder pattern, which are the three square patterns found in
 * the corners of QR Codes. It also encapsulates a count of similar finder patterns,
 * as a convenience to the finder's bookkeeping.</p>
 *
 * @author Sean Owen
 */
var FinderPattern = /** @class */ (function (_super) {
    __extends(FinderPattern, _super);
    // FinderPattern(posX: number/*float*/, posY: number/*float*/, estimatedModuleSize: number/*float*/) {
    //   this(posX, posY, estimatedModuleSize, 1)
    // }
    function FinderPattern(posX /*float*/, posY /*float*/, estimatedModuleSize /*float*/, count /*int*/) {
        var _this = _super.call(this, posX, posY) || this;
        _this.estimatedModuleSize = estimatedModuleSize;
        _this.count = count;
        if (undefined === count) {
            _this.count = 1;
        }
        return _this;
    }
    FinderPattern.prototype.getEstimatedModuleSize = function () {
        return this.estimatedModuleSize;
    };
    FinderPattern.prototype.getCount = function () {
        return this.count;
    };
    /*
    void incrementCount() {
      this.count++
    }
     */
    /**
     * <p>Determines if this finder pattern "about equals" a finder pattern at the stated
     * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
     */
    FinderPattern.prototype.aboutEquals = function (moduleSize /*float*/, i /*float*/, j /*float*/) {
        if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
            return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
        }
        return false;
    };
    /**
     * Combines this object's current estimate of a finder pattern position and module size
     * with a new estimate. It returns a new {@code FinderPattern} containing a weighted average
     * based on count.
     */
    FinderPattern.prototype.combineEstimate = function (i /*float*/, j /*float*/, newModuleSize /*float*/) {
        var combinedCount = this.count + 1;
        var combinedX = (this.count * this.getX() + j) / combinedCount;
        var combinedY = (this.count * this.getY() + i) / combinedCount;
        var combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
        return new FinderPattern(combinedX, combinedY, combinedModuleSize, combinedCount);
    };
    return FinderPattern;
}(ResultPoint_1.default));
exports.default = FinderPattern;


/***/ }),

/***/ "./src/core/qrcode/detector/FinderPatternFinder.ts":
/*!*********************************************************!*\
  !*** ./src/core/qrcode/detector/FinderPatternFinder.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.detector {*/
var DecodeHintType_1 = __webpack_require__(/*! ../../DecodeHintType */ "./src/core/DecodeHintType.ts");
var ResultPoint_1 = __webpack_require__(/*! ../../ResultPoint */ "./src/core/ResultPoint.ts");
var FinderPattern_1 = __webpack_require__(/*! ./FinderPattern */ "./src/core/qrcode/detector/FinderPattern.ts");
var FinderPatternInfo_1 = __webpack_require__(/*! ./FinderPatternInfo */ "./src/core/qrcode/detector/FinderPatternInfo.ts");
var NotFoundException_1 = __webpack_require__(/*! ../../NotFoundException */ "./src/core/NotFoundException.ts");
/*import java.io.Serializable;*/
/*import java.util.ArrayList;*/
/*import java.util.Collections;*/
/*import java.util.Comparator;*/
/*import java.util.List;*/
/*import java.util.Map;*/
/**
 * <p>This class attempts to find finder patterns in a QR Code. Finder patterns are the square
 * markers at three corners of a QR Code.</p>
 *
 * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.
 *
 * @author Sean Owen
 */
var FinderPatternFinder = /** @class */ (function () {
    /**
     * <p>Creates a finder that will search the image for three finder patterns.</p>
     *
     * @param image image to search
     */
    // public constructor(image: BitMatrix) {
    //   this(image, null)
    // }
    function FinderPatternFinder(image, resultPointCallback) {
        this.image = image;
        this.resultPointCallback = resultPointCallback;
        this.possibleCenters = [];
        this.crossCheckStateCount = new Int32Array(5);
        this.resultPointCallback = resultPointCallback;
    }
    FinderPatternFinder.prototype.getImage = function () {
        return this.image;
    };
    FinderPatternFinder.prototype.getPossibleCenters = function () {
        return this.possibleCenters;
    };
    FinderPatternFinder.prototype.find = function (hints) {
        var tryHarder = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType_1.default.TRY_HARDER);
        var pureBarcode = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType_1.default.PURE_BARCODE);
        var image = this.image;
        var maxI = image.getHeight();
        var maxJ = image.getWidth();
        // We are looking for black/white/black/white/black modules in
        // 1:1:3:1:1 ratio; this tracks the number of such modules seen so far
        // Let's assume that the maximum version QR Code we support takes up 1/4 the height of the
        // image, and then account for the center being 3 modules in size. This gives the smallest
        // number of pixels the center could be, so skip this often. When trying harder, look for all
        // QR versions regardless of how dense they are.
        var iSkip = Math.floor((3 * maxI) / (4 * FinderPatternFinder.MAX_MODULES));
        if (iSkip < FinderPatternFinder.MIN_SKIP || tryHarder) {
            iSkip = FinderPatternFinder.MIN_SKIP;
        }
        var done = false;
        var stateCount = new Int32Array(5);
        for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
            // Get a row of black/white values
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            stateCount[3] = 0;
            stateCount[4] = 0;
            var currentState = 0;
            for (var j = 0; j < maxJ; j++) {
                if (image.get(j, i)) {
                    // Black pixel
                    if ((currentState & 1) === 1) { // Counting white pixels
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                else { // White pixel
                    if ((currentState & 1) === 0) { // Counting black pixels
                        if (currentState === 4) { // A winner?
                            if (FinderPatternFinder.foundPatternCross(stateCount)) { // Yes
                                var confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                                if (confirmed === true) {
                                    // Start examining every other line. Checking each line turned out to be too
                                    // expensive and didn't improve performance.
                                    iSkip = 2;
                                    if (this.hasSkipped === true) {
                                        done = this.haveMultiplyConfirmedCenters();
                                    }
                                    else {
                                        var rowSkip = this.findRowSkip();
                                        if (rowSkip > stateCount[2]) {
                                            // Skip rows between row of lower confirmed center
                                            // and top of presumed third confirmed center
                                            // but back up a bit to get a full chance of detecting
                                            // it, entire width of center of finder pattern
                                            // Skip by rowSkip, but back off by stateCount[2] (size of last center
                                            // of pattern we saw) to be conservative, and also back off by iSkip which
                                            // is about to be re-added
                                            i += rowSkip - stateCount[2] - iSkip;
                                            j = maxJ - 1;
                                        }
                                    }
                                }
                                else {
                                    stateCount[0] = stateCount[2];
                                    stateCount[1] = stateCount[3];
                                    stateCount[2] = stateCount[4];
                                    stateCount[3] = 1;
                                    stateCount[4] = 0;
                                    currentState = 3;
                                    continue;
                                }
                                // Clear state to start looking again
                                currentState = 0;
                                stateCount[0] = 0;
                                stateCount[1] = 0;
                                stateCount[2] = 0;
                                stateCount[3] = 0;
                                stateCount[4] = 0;
                            }
                            else { // No, shift counts back by two
                                stateCount[0] = stateCount[2];
                                stateCount[1] = stateCount[3];
                                stateCount[2] = stateCount[4];
                                stateCount[3] = 1;
                                stateCount[4] = 0;
                                currentState = 3;
                            }
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                    else { // Counting white pixels
                        stateCount[currentState]++;
                    }
                }
            }
            if (FinderPatternFinder.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
                if (confirmed === true) {
                    iSkip = stateCount[0];
                    if (this.hasSkipped) {
                        // Found a third one
                        done = this.haveMultiplyConfirmedCenters();
                    }
                }
            }
        }
        var patternInfo = this.selectBestPatterns();
        ResultPoint_1.default.orderBestPatterns(patternInfo);
        return new FinderPatternInfo_1.default(patternInfo);
    };
    /**
     * Given a count of black/white/black/white/black pixels just seen and an end position,
     * figures the location of the center of this run.
     */
    FinderPatternFinder.centerFromEnd = function (stateCount, end /*int*/) {
        return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
    };
    /**
     * @param stateCount count of black/white/black/white/black pixels just read
     * @return true iff the proportions of the counts is close enough to the 1/1/3/1/1 ratios
     *         used by finder patterns to be considered a match
     */
    FinderPatternFinder.foundPatternCross = function (stateCount) {
        var totalModuleSize = 0;
        for (var i = 0; i < 5; i++) {
            var count = stateCount[i];
            if (count === 0) {
                return false;
            }
            totalModuleSize += count;
        }
        if (totalModuleSize < 7) {
            return false;
        }
        var moduleSize = totalModuleSize / 7.0;
        var maxVariance = moduleSize / 2.0;
        // Allow less than 50% variance from 1-1-3-1-1 proportions
        return Math.abs(moduleSize - stateCount[0]) < maxVariance &&
            Math.abs(moduleSize - stateCount[1]) < maxVariance &&
            Math.abs(3.0 * moduleSize - stateCount[2]) < 3 * maxVariance &&
            Math.abs(moduleSize - stateCount[3]) < maxVariance &&
            Math.abs(moduleSize - stateCount[4]) < maxVariance;
    };
    FinderPatternFinder.prototype.getCrossCheckStateCount = function () {
        var crossCheckStateCount = this.crossCheckStateCount;
        crossCheckStateCount[0] = 0;
        crossCheckStateCount[1] = 0;
        crossCheckStateCount[2] = 0;
        crossCheckStateCount[3] = 0;
        crossCheckStateCount[4] = 0;
        return crossCheckStateCount;
    };
    /**
     * After a vertical and horizontal scan finds a potential finder pattern, this method
     * "cross-cross-cross-checks" by scanning down diagonally through the center of the possible
     * finder pattern to see if the same proportion is detected.
     *
     * @param startI row where a finder pattern was detected
     * @param centerJ center of the section that appears to cross a finder pattern
     * @param maxCount maximum reasonable number of modules that should be
     *  observed in any reading state, based on the results of the horizontal scan
     * @param originalStateCountTotal The original state count total.
     * @return true if proportions are withing expected limits
     */
    FinderPatternFinder.prototype.crossCheckDiagonal = function (startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
        var stateCount = this.getCrossCheckStateCount();
        // Start counting up, left from center finding black center mass
        var i = 0;
        var image = this.image;
        while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
            stateCount[2]++;
            i++;
        }
        if (startI < i || centerJ < i) {
            return false;
        }
        // Continue up, left finding white space
        while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) &&
            stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
        }
        // If already too many modules in this state or ran off the edge:
        if (startI < i || centerJ < i || stateCount[1] > maxCount) {
            return false;
        }
        // Continue up, left finding black border
        while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) &&
            stateCount[0] <= maxCount) {
            stateCount[0]++;
            i++;
        }
        if (stateCount[0] > maxCount) {
            return false;
        }
        var maxI = image.getHeight();
        var maxJ = image.getWidth();
        // Now also count down, right from center
        i = 1;
        while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
            stateCount[2]++;
            i++;
        }
        // Ran off the edge?
        if (startI + i >= maxI || centerJ + i >= maxJ) {
            return false;
        }
        while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) &&
            stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
        }
        if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
            return false;
        }
        while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) &&
            stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
        }
        if (stateCount[4] >= maxCount) {
            return false;
        }
        // If we found a finder-pattern-like section, but its size is more than 100% different than
        // the original, assume it's a false positive
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
        return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal &&
            FinderPatternFinder.foundPatternCross(stateCount);
    };
    /**
     * <p>After a horizontal scan finds a potential finder pattern, this method
     * "cross-checks" by scanning down vertically through the center of the possible
     * finder pattern to see if the same proportion is detected.</p>
     *
     * @param startI row where a finder pattern was detected
     * @param centerJ center of the section that appears to cross a finder pattern
     * @param maxCount maximum reasonable number of modules that should be
     * observed in any reading state, based on the results of the horizontal scan
     * @return vertical center of finder pattern, or {@link Float#NaN} if not found
     */
    FinderPatternFinder.prototype.crossCheckVertical = function (startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
        var image = this.image;
        var maxI = image.getHeight();
        var stateCount = this.getCrossCheckStateCount();
        // Start counting up from center
        var i = startI;
        while (i >= 0 && image.get(centerJ, i)) {
            stateCount[2]++;
            i--;
        }
        if (i < 0) {
            return NaN;
        }
        while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        // If already too many modules in this state or ran off the edge:
        if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        // Now also count down from center
        i = startI + 1;
        while (i < maxI && image.get(centerJ, i)) {
            stateCount[2]++;
            i++;
        }
        if (i === maxI) {
            return NaN;
        }
        while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
        }
        if (i === maxI || stateCount[3] >= maxCount) {
            return NaN;
        }
        while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
        }
        if (stateCount[4] >= maxCount) {
            return NaN;
        }
        // If we found a finder-pattern-like section, but its size is more than 40% different than
        // the original, assume it's a false positive
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
            stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
        }
        return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, i) : NaN;
    };
    /**
     * <p>Like {@link #crossCheckVertical(int, int, int, int)}, and in fact is basically identical,
     * except it reads horizontally instead of vertically. This is used to cross-cross
     * check a vertical cross check and locate the real center of the alignment pattern.</p>
     */
    FinderPatternFinder.prototype.crossCheckHorizontal = function (startJ /*int*/, centerI /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
        var image = this.image;
        var maxJ = image.getWidth();
        var stateCount = this.getCrossCheckStateCount();
        var j = startJ;
        while (j >= 0 && image.get(j, centerI)) {
            stateCount[2]++;
            j--;
        }
        if (j < 0) {
            return NaN;
        }
        while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
            stateCount[1]++;
            j--;
        }
        if (j < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
            stateCount[0]++;
            j--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        j = startJ + 1;
        while (j < maxJ && image.get(j, centerI)) {
            stateCount[2]++;
            j++;
        }
        if (j === maxJ) {
            return NaN;
        }
        while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
            stateCount[3]++;
            j++;
        }
        if (j === maxJ || stateCount[3] >= maxCount) {
            return NaN;
        }
        while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
            stateCount[4]++;
            j++;
        }
        if (stateCount[4] >= maxCount) {
            return NaN;
        }
        // If we found a finder-pattern-like section, but its size is significantly different than
        // the original, assume it's a false positive
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
            stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
            return NaN;
        }
        return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, j) : NaN;
    };
    /**
     * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
     * cross check with a vertical scan, and if successful, will, ah, cross-cross-check
     * with another horizontal scan. This is needed primarily to locate the real horizontal
     * center of the pattern in cases of extreme skew.
     * And then we cross-cross-cross check with another diagonal scan.</p>
     *
     * <p>If that succeeds the finder pattern location is added to a list that tracks
     * the number of times each location has been nearly-matched as a finder pattern.
     * Each additional find is more evidence that the location is in fact a finder
     * pattern center
     *
     * @param stateCount reading state module counts from horizontal scan
     * @param i row where finder pattern may be found
     * @param j end of possible finder pattern in row
     * @param pureBarcode true if in "pure barcode" mode
     * @return true if a finder pattern candidate was found this time
     */
    FinderPatternFinder.prototype.handlePossibleCenter = function (stateCount, i /*int*/, j /*int*/, pureBarcode) {
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
            stateCount[4];
        var centerJ = FinderPatternFinder.centerFromEnd(stateCount, j);
        var centerI = this.crossCheckVertical(i, /*(int) */ Math.floor(centerJ), stateCount[2], stateCountTotal);
        if (!isNaN(centerI)) {
            // Re-cross check
            centerJ = this.crossCheckHorizontal(/*(int) */ Math.floor(centerJ), /*(int) */ Math.floor(centerI), stateCount[2], stateCountTotal);
            if (!isNaN(centerJ) &&
                (!pureBarcode || this.crossCheckDiagonal(/*(int) */ Math.floor(centerI), /*(int) */ Math.floor(centerJ), stateCount[2], stateCountTotal))) {
                var estimatedModuleSize = stateCountTotal / 7.0;
                var found = false;
                var possibleCenters = this.possibleCenters;
                for (var index = 0, length_1 = possibleCenters.length; index < length_1; index++) {
                    var center = possibleCenters[index];
                    // Look for about the same center and module size:
                    if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                        possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var point = new FinderPattern_1.default(centerJ, centerI, estimatedModuleSize);
                    possibleCenters.push(point);
                    if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                        this.resultPointCallback.foundPossibleResultPoint(point);
                    }
                }
                return true;
            }
        }
        return false;
    };
    /**
     * @return number of rows we could safely skip during scanning, based on the first
     *         two finder patterns that have been located. In some cases their position will
     *         allow us to infer that the third pattern must lie below a certain point farther
     *         down in the image.
     */
    FinderPatternFinder.prototype.findRowSkip = function () {
        var max = this.possibleCenters.length;
        if (max <= 1) {
            return 0;
        }
        var firstConfirmedCenter = null;
        for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
            var center = _a[_i];
            if (center.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                if (firstConfirmedCenter == null) {
                    firstConfirmedCenter = center;
                }
                else {
                    // We have two confirmed centers
                    // How far down can we skip before resuming looking for the next
                    // pattern? In the worst case, only the difference between the
                    // difference in the x / y coordinates of the two centers.
                    // This is the case where you find top left last.
                    this.hasSkipped = true;
                    return /*(int) */ Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) -
                        Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
                }
            }
        }
        return 0;
    };
    /**
     * @return true iff we have found at least 3 finder patterns that have been detected
     *         at least {@link #CENTER_QUORUM} times each, and, the estimated module size of the
     *         candidates is "pretty similar"
     */
    FinderPatternFinder.prototype.haveMultiplyConfirmedCenters = function () {
        var confirmedCount = 0;
        var totalModuleSize = 0.0;
        var max = this.possibleCenters.length;
        for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
            var pattern = _a[_i];
            if (pattern.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                confirmedCount++;
                totalModuleSize += pattern.getEstimatedModuleSize();
            }
        }
        if (confirmedCount < 3) {
            return false;
        }
        // OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
        // and that we need to keep looking. We detect this by asking if the estimated module sizes
        // vary too much. We arbitrarily say that when the total deviation from average exceeds
        // 5% of the total module size estimates, it's too much.
        var average = totalModuleSize / max;
        var totalDeviation = 0.0;
        for (var _b = 0, _c = this.possibleCenters; _b < _c.length; _b++) {
            var pattern = _c[_b];
            totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
        }
        return totalDeviation <= 0.05 * totalModuleSize;
    };
    /**
     * @return the 3 best {@link FinderPattern}s from our list of candidates. The "best" are
     *         those that have been detected at least {@link #CENTER_QUORUM} times, and whose module
     *         size differs from the average among those patterns the least
     * @throws NotFoundException if 3 such finder patterns do not exist
     */
    FinderPatternFinder.prototype.selectBestPatterns = function () {
        var startSize = this.possibleCenters.length;
        if (startSize < 3) {
            // Couldn't find enough finder patterns
            throw new NotFoundException_1.default();
        }
        var possibleCenters = this.possibleCenters;
        var average; /*float*/
        // Filter outlier possibilities whose module size is too different
        if (startSize > 3) {
            // But we can only afford to do so if we have at least 4 possibilities to choose from
            var totalModuleSize = 0.0;
            var square = 0.0;
            for (var _i = 0, _a = this.possibleCenters; _i < _a.length; _i++) {
                var center = _a[_i];
                var size = center.getEstimatedModuleSize();
                totalModuleSize += size;
                square += size * size;
            }
            average = totalModuleSize / startSize;
            var stdDev = Math.sqrt(square / startSize - average * average);
            possibleCenters.sort(
            /**
             * <p>Orders by furthest from average</p>
             */
            // FurthestFromAverageComparator implements Comparator<FinderPattern>
            function (center1, center2) {
                var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                return dA < dB ? -1 : dA > dB ? 1 : 0;
            });
            var limit = Math.max(0.2 * average, stdDev);
            for (var i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
                var pattern = possibleCenters[i];
                if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
                    possibleCenters.splice(i, 1);
                    i--;
                }
            }
        }
        if (possibleCenters.length > 3) {
            // Throw away all but those first size candidate points we found.
            var totalModuleSize = 0.0;
            for (var _b = 0, possibleCenters_1 = possibleCenters; _b < possibleCenters_1.length; _b++) {
                var possibleCenter = possibleCenters_1[_b];
                totalModuleSize += possibleCenter.getEstimatedModuleSize();
            }
            average = totalModuleSize / possibleCenters.length;
            possibleCenters.sort(
            /**
             * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
             */
            // CenterComparator implements Comparator<FinderPattern>
            function (center1, center2) {
                if (center2.getCount() === center1.getCount()) {
                    var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                    var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                    return dA < dB ? 1 : dA > dB ? -1 : 0;
                }
                else {
                    return center2.getCount() - center1.getCount();
                }
            });
            possibleCenters.splice(3); // this is not realy necessary as we only return first 3 anyway
        }
        return [
            possibleCenters[0],
            possibleCenters[1],
            possibleCenters[2]
        ];
    };
    FinderPatternFinder.CENTER_QUORUM = 2;
    FinderPatternFinder.MIN_SKIP = 3; // 1 pixel/module times 3 modules/center
    FinderPatternFinder.MAX_MODULES = 57; // support up to version 10 for mobile clients
    return FinderPatternFinder;
}());
exports.default = FinderPatternFinder;


/***/ }),

/***/ "./src/core/qrcode/detector/FinderPatternInfo.ts":
/*!*******************************************************!*\
  !*** ./src/core/qrcode/detector/FinderPatternInfo.ts ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2007 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * <p>Encapsulates information about finder patterns in an image, including the location of
 * the three finder patterns, and their estimated module size.</p>
 *
 * @author Sean Owen
 */
var FinderPatternInfo = /** @class */ (function () {
    function FinderPatternInfo(patternCenters) {
        this.bottomLeft = patternCenters[0];
        this.topLeft = patternCenters[1];
        this.topRight = patternCenters[2];
    }
    FinderPatternInfo.prototype.getBottomLeft = function () {
        return this.bottomLeft;
    };
    FinderPatternInfo.prototype.getTopLeft = function () {
        return this.topLeft;
    };
    FinderPatternInfo.prototype.getTopRight = function () {
        return this.topRight;
    };
    return FinderPatternInfo;
}());
exports.default = FinderPatternInfo;


/***/ }),

/***/ "./src/core/qrcode/encoder/BlockPair.ts":
/*!**********************************************!*\
  !*** ./src/core/qrcode/encoder/BlockPair.ts ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.encoder {*/
var BlockPair = /** @class */ (function () {
    function BlockPair(dataBytes, errorCorrectionBytes) {
        this.dataBytes = dataBytes;
        this.errorCorrectionBytes = errorCorrectionBytes;
    }
    BlockPair.prototype.getDataBytes = function () {
        return this.dataBytes;
    };
    BlockPair.prototype.getErrorCorrectionBytes = function () {
        return this.errorCorrectionBytes;
    };
    return BlockPair;
}());
exports.default = BlockPair;


/***/ }),

/***/ "./src/core/qrcode/encoder/ByteMatrix.ts":
/*!***********************************************!*\
  !*** ./src/core/qrcode/encoder/ByteMatrix.ts ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.encoder {*/
/*import java.util.Arrays;*/
var Arrays_1 = __webpack_require__(/*! ../../util/Arrays */ "./src/core/util/Arrays.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
/**
 * JAVAPORT: The original code was a 2D array of ints, but since it only ever gets assigned
 * -1, 0, and 1, I'm going to use less memory and go with bytes.
 *
 * @author dswitkin@google.com (Daniel Switkin)
 */
var ByteMatrix = /** @class */ (function () {
    function ByteMatrix(width /*int*/, height /*int*/) {
        this.width = width;
        this.height = height;
        var bytes = new Array(height); // [height][width]
        for (var i = 0; i !== height; i++) {
            bytes[i] = new Uint8Array(width);
        }
        this.bytes = bytes;
    }
    ByteMatrix.prototype.getHeight = function () {
        return this.height;
    };
    ByteMatrix.prototype.getWidth = function () {
        return this.width;
    };
    ByteMatrix.prototype.get = function (x /*int*/, y /*int*/) {
        return this.bytes[y][x];
    };
    /**
     * @return an internal representation as bytes, in row-major order. array[y][x] represents point (x,y)
     */
    ByteMatrix.prototype.getArray = function () {
        return this.bytes;
    };
    // TYPESCRIPTPORT: preffer to let two methods instead of override to avoid type comparison inside
    ByteMatrix.prototype.setNumber = function (x /*int*/, y /*int*/, value /*byte|int*/) {
        this.bytes[y][x] = value;
    };
    // public set(x: number /*int*/, y: number /*int*/, value: number /*int*/): void {
    //   bytes[y][x] = (byte) value
    // }
    ByteMatrix.prototype.setBoolean = function (x /*int*/, y /*int*/, value) {
        this.bytes[y][x] = /*(byte) */ (value ? 1 : 0);
    };
    ByteMatrix.prototype.clear = function (value /*byte*/) {
        for (var _i = 0, _a = this.bytes; _i < _a.length; _i++) {
            var aByte = _a[_i];
            Arrays_1.default.fillUint8Array(aByte, value);
        }
    };
    ByteMatrix.prototype.equals = function (o) {
        if (!(o instanceof ByteMatrix)) {
            return false;
        }
        var other = o;
        if (this.width !== other.width) {
            return false;
        }
        if (this.height !== other.height) {
            return false;
        }
        for (var y = 0, height = this.height; y < height; ++y) {
            var bytesY = this.bytes[y];
            var otherBytesY = other.bytes[y];
            for (var x = 0, width = this.width; x < width; ++x) {
                if (bytesY[x] !== otherBytesY[x]) {
                    return false;
                }
            }
        }
        return true;
    };
    /*@Override*/
    ByteMatrix.prototype.toString = function () {
        var result = new StringBuilder_1.default(); // (2 * width * height + 2)
        for (var y = 0, height = this.height; y < height; ++y) {
            var bytesY = this.bytes[y];
            for (var x = 0, width = this.width; x < width; ++x) {
                switch (bytesY[x]) {
                    case 0:
                        result.append(' 0');
                        break;
                    case 1:
                        result.append(' 1');
                        break;
                    default:
                        result.append('  ');
                        break;
                }
            }
            result.append('\n');
        }
        return result.toString();
    };
    return ByteMatrix;
}());
exports.default = ByteMatrix;


/***/ }),

/***/ "./src/core/qrcode/encoder/Encoder.ts":
/*!********************************************!*\
  !*** ./src/core/qrcode/encoder/Encoder.ts ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.encoder {*/
var EncodeHintType_1 = __webpack_require__(/*! ../../EncodeHintType */ "./src/core/EncodeHintType.ts");
var BitArray_1 = __webpack_require__(/*! ../../common/BitArray */ "./src/core/common/BitArray.ts");
var CharacterSetECI_1 = __webpack_require__(/*! ../../common/CharacterSetECI */ "./src/core/common/CharacterSetECI.ts");
var GenericGF_1 = __webpack_require__(/*! ../../common/reedsolomon/GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
var ReedSolomonEncoder_1 = __webpack_require__(/*! ../../common/reedsolomon/ReedSolomonEncoder */ "./src/core/common/reedsolomon/ReedSolomonEncoder.ts");
var Mode_1 = __webpack_require__(/*! ../decoder/Mode */ "./src/core/qrcode/decoder/Mode.ts");
var Version_1 = __webpack_require__(/*! ../decoder/Version */ "./src/core/qrcode/decoder/Version.ts");
var MaskUtil_1 = __webpack_require__(/*! ./MaskUtil */ "./src/core/qrcode/encoder/MaskUtil.ts");
var ByteMatrix_1 = __webpack_require__(/*! ./ByteMatrix */ "./src/core/qrcode/encoder/ByteMatrix.ts");
var QRCode_1 = __webpack_require__(/*! ./QRCode */ "./src/core/qrcode/encoder/QRCode.ts");
var MatrixUtil_1 = __webpack_require__(/*! ./MatrixUtil */ "./src/core/qrcode/encoder/MatrixUtil.ts");
var StringEncoding_1 = __webpack_require__(/*! ../../util/StringEncoding */ "./src/core/util/StringEncoding.ts");
var BlockPair_1 = __webpack_require__(/*! ./BlockPair */ "./src/core/qrcode/encoder/BlockPair.ts");
var WriterException_1 = __webpack_require__(/*! ../../WriterException */ "./src/core/WriterException.ts");
/*import java.io.UnsupportedEncodingException;*/
/*import java.util.ArrayList;*/
/*import java.util.Collection;*/
/*import java.util.Map;*/
/**
 * @author satorux@google.com (Satoru Takabayashi) - creator
 * @author dswitkin@google.com (Daniel Switkin) - ported from C++
 */
var Encoder = /** @class */ (function () {
    // TYPESCRIPTPORT: changed to UTF8, the default for js
    function Encoder() {
    }
    // The mask penalty calculation is complicated.  See Table 21 of JISX0510:2004 (p.45) for details.
    // Basically it applies four rules and summate all penalties.
    Encoder.calculateMaskPenalty = function (matrix) {
        return MaskUtil_1.default.applyMaskPenaltyRule1(matrix)
            + MaskUtil_1.default.applyMaskPenaltyRule2(matrix)
            + MaskUtil_1.default.applyMaskPenaltyRule3(matrix)
            + MaskUtil_1.default.applyMaskPenaltyRule4(matrix);
    };
    /**
     * @param content text to encode
     * @param ecLevel error correction level to use
     * @return {@link QRCode} representing the encoded QR code
     * @throws WriterException if encoding can't succeed, because of for example invalid content
     *   or configuration
     */
    // public static encode(content: string, ecLevel: ErrorCorrectionLevel): QRCode /*throws WriterException*/ {
    //   return encode(content, ecLevel, null)
    // }
    Encoder.encode = function (content, ecLevel, hints) {
        if (hints === void 0) { hints = null; }
        // Determine what character encoding has been specified by the caller, if any
        var encoding = Encoder.DEFAULT_BYTE_MODE_ENCODING;
        var hasEncodingHint = hints !== null && undefined !== hints.get(EncodeHintType_1.default.CHARACTER_SET);
        if (hasEncodingHint) {
            encoding = hints.get(EncodeHintType_1.default.CHARACTER_SET).toString();
        }
        // Pick an encoding mode appropriate for the content. Note that this will not attempt to use
        // multiple modes / segments even if that were more efficient. Twould be nice.
        var mode = this.chooseMode(content, encoding);
        // This will store the header information, like mode and
        // length, as well as "header" segments like an ECI segment.
        var headerBits = new BitArray_1.default();
        // Append ECI segment if applicable
        if (mode === Mode_1.default.BYTE && (hasEncodingHint || Encoder.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
            var eci = CharacterSetECI_1.default.getCharacterSetECIByName(encoding);
            if (eci !== undefined) {
                this.appendECI(eci, headerBits);
            }
        }
        // (With ECI in place,) Write the mode marker
        this.appendModeInfo(mode, headerBits);
        // Collect data within the main segment, separately, to count its size if needed. Don't add it to
        // main payload yet.
        var dataBits = new BitArray_1.default();
        this.appendBytes(content, mode, dataBits, encoding);
        var version;
        if (hints !== null && undefined !== hints.get(EncodeHintType_1.default.QR_VERSION)) {
            var versionNumber = Number.parseInt(hints.get(EncodeHintType_1.default.QR_VERSION).toString(), 10);
            version = Version_1.default.getVersionForNumber(versionNumber);
            var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
            if (!this.willFit(bitsNeeded, version, ecLevel)) {
                throw new WriterException_1.default('Data too big for requested version');
            }
        }
        else {
            version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
        }
        var headerAndDataBits = new BitArray_1.default();
        headerAndDataBits.appendBitArray(headerBits);
        // Find "length" of main segment and write it
        var numLetters = mode === Mode_1.default.BYTE ? dataBits.getSizeInBytes() : content.length;
        this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
        // Put data together into the overall payload
        headerAndDataBits.appendBitArray(dataBits);
        var ecBlocks = version.getECBlocksForLevel(ecLevel);
        var numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
        // Terminate the bits properly.
        this.terminateBits(numDataBytes, headerAndDataBits);
        // Interleave data bits with error correction code.
        var finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
        var qrCode = new QRCode_1.default();
        qrCode.setECLevel(ecLevel);
        qrCode.setMode(mode);
        qrCode.setVersion(version);
        //  Choose the mask pattern and set to "qrCode".
        var dimension = version.getDimensionForVersion();
        var matrix = new ByteMatrix_1.default(dimension, dimension);
        var maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
        qrCode.setMaskPattern(maskPattern);
        // Build the matrix and set it to "qrCode".
        MatrixUtil_1.default.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
        qrCode.setMatrix(matrix);
        return qrCode;
    };
    /**
     * Decides the smallest version of QR code that will contain all of the provided data.
     *
     * @throws WriterException if the data cannot fit in any version
     */
    Encoder.recommendVersion = function (ecLevel, mode, headerBits, dataBits) {
        // Hard part: need to know version to know how many bits length takes. But need to know how many
        // bits it takes to know version. First we take a guess at version by assuming version will be
        // the minimum, 1:
        var provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version_1.default.getVersionForNumber(1));
        var provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
        // Use that guess to calculate the right version. I am still not sure this works in 100% of cases.
        var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
        return this.chooseVersion(bitsNeeded, ecLevel);
    };
    Encoder.calculateBitsNeeded = function (mode, headerBits, dataBits, version) {
        return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
    };
    /**
     * @return the code point of the table used in alphanumeric mode or
     *  -1 if there is no corresponding code in the table.
     */
    Encoder.getAlphanumericCode = function (code /*int*/) {
        if (code < Encoder.ALPHANUMERIC_TABLE.length) {
            return Encoder.ALPHANUMERIC_TABLE[code];
        }
        return -1;
    };
    // public static chooseMode(content: string): Mode {
    //   return chooseMode(content, null);
    // }
    /**
     * Choose the best mode by examining the content. Note that 'encoding' is used as a hint;
     * if it is Shift_JIS, and the input is only double-byte Kanji, then we return {@link Mode#KANJI}.
     */
    Encoder.chooseMode = function (content, encoding) {
        if (encoding === void 0) { encoding = null; }
        if (CharacterSetECI_1.default.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
            // Choose Kanji mode if all input are double-byte characters
            return Mode_1.default.KANJI;
        }
        var hasNumeric = false;
        var hasAlphanumeric = false;
        for (var i = 0, length_1 = content.length; i < length_1; ++i) {
            var c = content.charAt(i);
            if (Encoder.isDigit(c)) {
                hasNumeric = true;
            }
            else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
                hasAlphanumeric = true;
            }
            else {
                return Mode_1.default.BYTE;
            }
        }
        if (hasAlphanumeric) {
            return Mode_1.default.ALPHANUMERIC;
        }
        if (hasNumeric) {
            return Mode_1.default.NUMERIC;
        }
        return Mode_1.default.BYTE;
    };
    Encoder.isOnlyDoubleByteKanji = function (content) {
        var bytes;
        try {
            bytes = StringEncoding_1.default.encode(content, CharacterSetECI_1.default.SJIS); // content.getBytes("Shift_JIS"))
        }
        catch (ignored /*: UnsupportedEncodingException*/) {
            return false;
        }
        var length = bytes.length;
        if (length % 2 !== 0) {
            return false;
        }
        for (var i = 0; i < length; i += 2) {
            var byte1 = bytes[i] & 0xFF;
            if ((byte1 < 0x81 || byte1 > 0x9F) && (byte1 < 0xE0 || byte1 > 0xEB)) {
                return false;
            }
        }
        return true;
    };
    Encoder.chooseMaskPattern = function (bits, ecLevel, version, matrix) {
        var minPenalty = Number.MAX_SAFE_INTEGER; // Lower penalty is better.
        var bestMaskPattern = -1;
        // We try all mask patterns to choose the best one.
        for (var maskPattern = 0; maskPattern < QRCode_1.default.NUM_MASK_PATTERNS; maskPattern++) {
            MatrixUtil_1.default.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
            var penalty = this.calculateMaskPenalty(matrix);
            if (penalty < minPenalty) {
                minPenalty = penalty;
                bestMaskPattern = maskPattern;
            }
        }
        return bestMaskPattern;
    };
    Encoder.chooseVersion = function (numInputBits /*int*/, ecLevel) {
        for (var versionNum = 1; versionNum <= 40; versionNum++) {
            var version = Version_1.default.getVersionForNumber(versionNum);
            if (Encoder.willFit(numInputBits, version, ecLevel)) {
                return version;
            }
        }
        throw new WriterException_1.default('Data too big');
    };
    /**
     * @return true if the number of input bits will fit in a code with the specified version and
     * error correction level.
     */
    Encoder.willFit = function (numInputBits /*int*/, version, ecLevel) {
        // In the following comments, we use numbers of Version 7-H.
        // numBytes = 196
        var numBytes = version.getTotalCodewords();
        // getNumECBytes = 130
        var ecBlocks = version.getECBlocksForLevel(ecLevel);
        var numEcBytes = ecBlocks.getTotalECCodewords();
        // getNumDataBytes = 196 - 130 = 66
        var numDataBytes = numBytes - numEcBytes;
        var totalInputBytes = (numInputBits + 7) / 8;
        return numDataBytes >= totalInputBytes;
    };
    /**
     * Terminate bits as described in 8.4.8 and 8.4.9 of JISX0510:2004 (p.24).
     */
    Encoder.terminateBits = function (numDataBytes /*int*/, bits) {
        var capacity = numDataBytes * 8;
        if (bits.getSize() > capacity) {
            throw new WriterException_1.default('data bits cannot fit in the QR Code' + bits.getSize() + ' > ' +
                capacity);
        }
        for (var i = 0; i < 4 && bits.getSize() < capacity; ++i) {
            bits.appendBit(false);
        }
        // Append termination bits. See 8.4.8 of JISX0510:2004 (p.24) for details.
        // If the last byte isn't 8-bit aligned, we'll add padding bits.
        var numBitsInLastByte = bits.getSize() & 0x07;
        if (numBitsInLastByte > 0) {
            for (var i = numBitsInLastByte; i < 8; i++) {
                bits.appendBit(false);
            }
        }
        // If we have more space, we'll fill the space with padding patterns defined in 8.4.9 (p.24).
        var numPaddingBytes = numDataBytes - bits.getSizeInBytes();
        for (var i = 0; i < numPaddingBytes; ++i) {
            bits.appendBits((i & 0x01) === 0 ? 0xEC : 0x11, 8);
        }
        if (bits.getSize() !== capacity) {
            throw new WriterException_1.default('Bits size does not equal capacity');
        }
    };
    /**
     * Get number of data bytes and number of error correction bytes for block id "blockID". Store
     * the result in "numDataBytesInBlock", and "numECBytesInBlock". See table 12 in 8.5.1 of
     * JISX0510:2004 (p.30)
     */
    Encoder.getNumDataBytesAndNumECBytesForBlockID = function (numTotalBytes /*int*/, numDataBytes /*int*/, numRSBlocks /*int*/, blockID /*int*/, numDataBytesInBlock, numECBytesInBlock) {
        if (blockID >= numRSBlocks) {
            throw new WriterException_1.default('Block ID too large');
        }
        // numRsBlocksInGroup2 = 196 % 5 = 1
        var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
        // numRsBlocksInGroup1 = 5 - 1 = 4
        var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
        // numTotalBytesInGroup1 = 196 / 5 = 39
        var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
        // numTotalBytesInGroup2 = 39 + 1 = 40
        var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
        // numDataBytesInGroup1 = 66 / 5 = 13
        var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
        // numDataBytesInGroup2 = 13 + 1 = 14
        var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
        // numEcBytesInGroup1 = 39 - 13 = 26
        var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
        // numEcBytesInGroup2 = 40 - 14 = 26
        var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
        // Sanity checks.
        // 26 = 26
        if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
            throw new WriterException_1.default('EC bytes mismatch');
        }
        // 5 = 4 + 1.
        if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
            throw new WriterException_1.default('RS blocks mismatch');
        }
        // 196 = (13 + 26) * 4 + (14 + 26) * 1
        if (numTotalBytes !==
            ((numDataBytesInGroup1 + numEcBytesInGroup1) *
                numRsBlocksInGroup1) +
                ((numDataBytesInGroup2 + numEcBytesInGroup2) *
                    numRsBlocksInGroup2)) {
            throw new WriterException_1.default('Total bytes mismatch');
        }
        if (blockID < numRsBlocksInGroup1) {
            numDataBytesInBlock[0] = numDataBytesInGroup1;
            numECBytesInBlock[0] = numEcBytesInGroup1;
        }
        else {
            numDataBytesInBlock[0] = numDataBytesInGroup2;
            numECBytesInBlock[0] = numEcBytesInGroup2;
        }
    };
    /**
     * Interleave "bits" with corresponding error correction bytes. On success, store the result in
     * "result". The interleave rule is complicated. See 8.6 of JISX0510:2004 (p.37) for details.
     */
    Encoder.interleaveWithECBytes = function (bits, numTotalBytes /*int*/, numDataBytes /*int*/, numRSBlocks /*int*/) {
        // "bits" must have "getNumDataBytes" bytes of data.
        if (bits.getSizeInBytes() !== numDataBytes) {
            throw new WriterException_1.default('Number of bits and data bytes does not match');
        }
        // Step 1.  Divide data bytes into blocks and generate error correction bytes for them. We'll
        // store the divided data bytes blocks and error correction bytes blocks into "blocks".
        var dataBytesOffset = 0;
        var maxNumDataBytes = 0;
        var maxNumEcBytes = 0;
        // Since, we know the number of reedsolmon blocks, we can initialize the vector with the number.
        var blocks = new Array(); // new Array<BlockPair>(numRSBlocks)
        for (var i = 0; i < numRSBlocks; ++i) {
            var numDataBytesInBlock = new Int32Array(1);
            var numEcBytesInBlock = new Int32Array(1);
            Encoder.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
            var size = numDataBytesInBlock[0];
            var dataBytes = new Uint8Array(size);
            bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
            var ecBytes = Encoder.generateECBytes(dataBytes, numEcBytesInBlock[0]);
            blocks.push(new BlockPair_1.default(dataBytes, ecBytes));
            maxNumDataBytes = Math.max(maxNumDataBytes, size);
            maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
            dataBytesOffset += numDataBytesInBlock[0];
        }
        if (numDataBytes !== dataBytesOffset) {
            throw new WriterException_1.default('Data bytes does not match offset');
        }
        var result = new BitArray_1.default();
        // First, place data blocks.
        for (var i = 0; i < maxNumDataBytes; ++i) {
            for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
                var block = blocks_1[_i];
                var dataBytes = block.getDataBytes();
                if (i < dataBytes.length) {
                    result.appendBits(dataBytes[i], 8);
                }
            }
        }
        // Then, place error correction blocks.
        for (var i = 0; i < maxNumEcBytes; ++i) {
            for (var _a = 0, blocks_2 = blocks; _a < blocks_2.length; _a++) {
                var block = blocks_2[_a];
                var ecBytes = block.getErrorCorrectionBytes();
                if (i < ecBytes.length) {
                    result.appendBits(ecBytes[i], 8);
                }
            }
        }
        if (numTotalBytes !== result.getSizeInBytes()) { // Should be same.
            throw new WriterException_1.default('Interleaving error: ' + numTotalBytes + ' and ' +
                result.getSizeInBytes() + ' differ.');
        }
        return result;
    };
    Encoder.generateECBytes = function (dataBytes, numEcBytesInBlock /*int*/) {
        var numDataBytes = dataBytes.length;
        var toEncode = new Int32Array(numDataBytes + numEcBytesInBlock); // int[numDataBytes + numEcBytesInBlock]
        for (var i = 0; i < numDataBytes; i++) {
            toEncode[i] = dataBytes[i] & 0xFF;
        }
        new ReedSolomonEncoder_1.default(GenericGF_1.default.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
        var ecBytes = new Uint8Array(numEcBytesInBlock);
        for (var i = 0; i < numEcBytesInBlock; i++) {
            ecBytes[i] = /*(byte) */ toEncode[numDataBytes + i];
        }
        return ecBytes;
    };
    /**
     * Append mode info. On success, store the result in "bits".
     */
    Encoder.appendModeInfo = function (mode, bits) {
        bits.appendBits(mode.getBits(), 4);
    };
    /**
     * Append length info. On success, store the result in "bits".
     */
    Encoder.appendLengthInfo = function (numLetters /*int*/, version, mode, bits) {
        var numBits = mode.getCharacterCountBits(version);
        if (numLetters >= (1 << numBits)) {
            throw new WriterException_1.default(numLetters + ' is bigger than ' + ((1 << numBits) - 1));
        }
        bits.appendBits(numLetters, numBits);
    };
    /**
     * Append "bytes" in "mode" mode (encoding) into "bits". On success, store the result in "bits".
     */
    Encoder.appendBytes = function (content, mode, bits, encoding) {
        switch (mode) {
            case Mode_1.default.NUMERIC:
                Encoder.appendNumericBytes(content, bits);
                break;
            case Mode_1.default.ALPHANUMERIC:
                Encoder.appendAlphanumericBytes(content, bits);
                break;
            case Mode_1.default.BYTE:
                Encoder.append8BitBytes(content, bits, encoding);
                break;
            case Mode_1.default.KANJI:
                Encoder.appendKanjiBytes(content, bits);
                break;
            default:
                throw new WriterException_1.default('Invalid mode: ' + mode);
        }
    };
    Encoder.getDigit = function (singleCharacter) {
        return singleCharacter.charCodeAt(0) - 48;
    };
    Encoder.isDigit = function (singleCharacter) {
        var cn = Encoder.getDigit(singleCharacter);
        return cn >= 0 && cn <= 9;
    };
    Encoder.appendNumericBytes = function (content, bits) {
        var length = content.length;
        var i = 0;
        while (i < length) {
            var num1 = Encoder.getDigit(content.charAt(i));
            if (i + 2 < length) {
                // Encode three numeric letters in ten bits.
                var num2 = Encoder.getDigit(content.charAt(i + 1));
                var num3 = Encoder.getDigit(content.charAt(i + 2));
                bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
                i += 3;
            }
            else if (i + 1 < length) {
                // Encode two numeric letters in seven bits.
                var num2 = Encoder.getDigit(content.charAt(i + 1));
                bits.appendBits(num1 * 10 + num2, 7);
                i += 2;
            }
            else {
                // Encode one numeric letter in four bits.
                bits.appendBits(num1, 4);
                i++;
            }
        }
    };
    Encoder.appendAlphanumericBytes = function (content, bits) {
        var length = content.length;
        var i = 0;
        while (i < length) {
            var code1 = Encoder.getAlphanumericCode(content.charCodeAt(i));
            if (code1 === -1) {
                throw new WriterException_1.default();
            }
            if (i + 1 < length) {
                var code2 = Encoder.getAlphanumericCode(content.charCodeAt(i + 1));
                if (code2 === -1) {
                    throw new WriterException_1.default();
                }
                // Encode two alphanumeric letters in 11 bits.
                bits.appendBits(code1 * 45 + code2, 11);
                i += 2;
            }
            else {
                // Encode one alphanumeric letter in six bits.
                bits.appendBits(code1, 6);
                i++;
            }
        }
    };
    Encoder.append8BitBytes = function (content, bits, encoding) {
        var bytes;
        try {
            bytes = StringEncoding_1.default.encode(content, encoding);
        }
        catch (uee /*: UnsupportedEncodingException*/) {
            throw new WriterException_1.default(uee);
        }
        for (var i = 0, length_2 = bytes.length; i !== length_2; i++) {
            var b = bytes[i];
            bits.appendBits(b, 8);
        }
    };
    /**
     * @throws WriterException
     */
    Encoder.appendKanjiBytes = function (content, bits) {
        var bytes;
        try {
            bytes = StringEncoding_1.default.encode(content, CharacterSetECI_1.default.SJIS);
        }
        catch (uee /*: UnsupportedEncodingException*/) {
            throw new WriterException_1.default(uee);
        }
        var length = bytes.length;
        for (var i = 0; i < length; i += 2) {
            var byte1 = bytes[i] & 0xFF;
            var byte2 = bytes[i + 1] & 0xFF;
            var code = ((byte1 << 8) & 0xFFFFFFFF) | byte2;
            var subtracted = -1;
            if (code >= 0x8140 && code <= 0x9ffc) {
                subtracted = code - 0x8140;
            }
            else if (code >= 0xe040 && code <= 0xebbf) {
                subtracted = code - 0xc140;
            }
            if (subtracted === -1) {
                throw new WriterException_1.default('Invalid byte sequence');
            }
            var encoded = ((subtracted >> 8) * 0xc0) + (subtracted & 0xff);
            bits.appendBits(encoded, 13);
        }
    };
    Encoder.appendECI = function (eci, bits) {
        bits.appendBits(Mode_1.default.ECI.getBits(), 4);
        // This is correct for values up to 127, which is all we need now.
        bits.appendBits(eci.getValue(), 8);
    };
    // The original table is defined in the table 5 of JISX0510:2004 (p.19).
    Encoder.ALPHANUMERIC_TABLE = Int32Array.from([
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1,
        -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1,
    ]);
    Encoder.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI_1.default.UTF8.getName(); // "ISO-8859-1"
    return Encoder;
}());
exports.default = Encoder;


/***/ }),

/***/ "./src/core/qrcode/encoder/MaskUtil.ts":
/*!*********************************************!*\
  !*** ./src/core/qrcode/encoder/MaskUtil.ts ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * @author Satoru Takabayashi
 * @author Daniel Switkin
 * @author Sean Owen
 */
var MaskUtil = /** @class */ (function () {
    function MaskUtil() {
        // do nothing
    }
    /**
     * Apply mask penalty rule 1 and return the penalty. Find repetitive cells with the same color and
     * give penalty to them. Example: 00000 or 11111.
     */
    MaskUtil.applyMaskPenaltyRule1 = function (matrix) {
        return MaskUtil.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil.applyMaskPenaltyRule1Internal(matrix, false);
    };
    /**
     * Apply mask penalty rule 2 and return the penalty. Find 2x2 blocks with the same color and give
     * penalty to them. This is actually equivalent to the spec's rule, which is to find MxN blocks and give a
     * penalty proportional to (M-1)x(N-1), because this is the number of 2x2 blocks inside such a block.
     */
    MaskUtil.applyMaskPenaltyRule2 = function (matrix) {
        var penalty = 0;
        var array = matrix.getArray();
        var width = matrix.getWidth();
        var height = matrix.getHeight();
        for (var y = 0; y < height - 1; y++) {
            var arrayY = array[y];
            for (var x = 0; x < width - 1; x++) {
                var value = arrayY[x];
                if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
                    penalty++;
                }
            }
        }
        return MaskUtil.N2 * penalty;
    };
    /**
     * Apply mask penalty rule 3 and return the penalty. Find consecutive runs of 1:1:3:1:1:4
     * starting with black, or 4:1:1:3:1:1 starting with white, and give penalty to them.  If we
     * find patterns like 000010111010000, we give penalty once.
     */
    MaskUtil.applyMaskPenaltyRule3 = function (matrix) {
        var numPenalties = 0;
        var array = matrix.getArray();
        var width = matrix.getWidth();
        var height = matrix.getHeight();
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var arrayY = array[y]; // We can at least optimize this access
                if (x + 6 < width &&
                    arrayY[x] === 1 &&
                    arrayY[x + 1] === 0 &&
                    arrayY[x + 2] === 1 &&
                    arrayY[x + 3] === 1 &&
                    arrayY[x + 4] === 1 &&
                    arrayY[x + 5] === 0 &&
                    arrayY[x + 6] === 1 &&
                    (MaskUtil.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
                    numPenalties++;
                }
                if (y + 6 < height &&
                    array[y][x] === 1 &&
                    array[y + 1][x] === 0 &&
                    array[y + 2][x] === 1 &&
                    array[y + 3][x] === 1 &&
                    array[y + 4][x] === 1 &&
                    array[y + 5][x] === 0 &&
                    array[y + 6][x] === 1 &&
                    (MaskUtil.isWhiteVertical(array, x, y - 4, y) || MaskUtil.isWhiteVertical(array, x, y + 7, y + 11))) {
                    numPenalties++;
                }
            }
        }
        return numPenalties * MaskUtil.N3;
    };
    MaskUtil.isWhiteHorizontal = function (rowArray, from /*int*/, to /*int*/) {
        from = Math.max(from, 0);
        to = Math.min(to, rowArray.length);
        for (var i = from; i < to; i++) {
            if (rowArray[i] === 1) {
                return false;
            }
        }
        return true;
    };
    MaskUtil.isWhiteVertical = function (array, col /*int*/, from /*int*/, to /*int*/) {
        from = Math.max(from, 0);
        to = Math.min(to, array.length);
        for (var i = from; i < to; i++) {
            if (array[i][col] === 1) {
                return false;
            }
        }
        return true;
    };
    /**
     * Apply mask penalty rule 4 and return the penalty. Calculate the ratio of dark cells and give
     * penalty if the ratio is far from 50%. It gives 10 penalty for 5% distance.
     */
    MaskUtil.applyMaskPenaltyRule4 = function (matrix) {
        var numDarkCells = 0;
        var array = matrix.getArray();
        var width = matrix.getWidth();
        var height = matrix.getHeight();
        for (var y = 0; y < height; y++) {
            var arrayY = array[y];
            for (var x = 0; x < width; x++) {
                if (arrayY[x] === 1) {
                    numDarkCells++;
                }
            }
        }
        var numTotalCells = matrix.getHeight() * matrix.getWidth();
        var fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
        return fivePercentVariances * MaskUtil.N4;
    };
    /**
     * Return the mask bit for "getMaskPattern" at "x" and "y". See 8.8 of JISX0510:2004 for mask
     * pattern conditions.
     */
    MaskUtil.getDataMaskBit = function (maskPattern /*int*/, x /*int*/, y /*int*/) {
        var intermediate; /*int*/
        var temp; /*int*/
        switch (maskPattern) {
            case 0:
                intermediate = (y + x) & 0x1;
                break;
            case 1:
                intermediate = y & 0x1;
                break;
            case 2:
                intermediate = x % 3;
                break;
            case 3:
                intermediate = (y + x) % 3;
                break;
            case 4:
                intermediate = (Math.floor(y / 2) + Math.floor(x / 3)) & 0x1;
                break;
            case 5:
                temp = y * x;
                intermediate = (temp & 0x1) + (temp % 3);
                break;
            case 6:
                temp = y * x;
                intermediate = ((temp & 0x1) + (temp % 3)) & 0x1;
                break;
            case 7:
                temp = y * x;
                intermediate = ((temp % 3) + ((y + x) & 0x1)) & 0x1;
                break;
            default:
                throw new IllegalArgumentException_1.default('Invalid mask pattern: ' + maskPattern);
        }
        return intermediate === 0;
    };
    /**
     * Helper function for applyMaskPenaltyRule1. We need this for doing this calculation in both
     * vertical and horizontal orders respectively.
     */
    MaskUtil.applyMaskPenaltyRule1Internal = function (matrix, isHorizontal) {
        var penalty = 0;
        var iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
        var jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
        var array = matrix.getArray();
        for (var i = 0; i < iLimit; i++) {
            var numSameBitCells = 0;
            var prevBit = -1;
            for (var j = 0; j < jLimit; j++) {
                var bit = isHorizontal ? array[i][j] : array[j][i];
                if (bit === prevBit) {
                    numSameBitCells++;
                }
                else {
                    if (numSameBitCells >= 5) {
                        penalty += MaskUtil.N1 + (numSameBitCells - 5);
                    }
                    numSameBitCells = 1; // Include the cell itself.
                    prevBit = bit;
                }
            }
            if (numSameBitCells >= 5) {
                penalty += MaskUtil.N1 + (numSameBitCells - 5);
            }
        }
        return penalty;
    };
    // Penalty weights from section 6.8.2.1
    MaskUtil.N1 = 3;
    MaskUtil.N2 = 3;
    MaskUtil.N3 = 40;
    MaskUtil.N4 = 10;
    return MaskUtil;
}());
exports.default = MaskUtil;


/***/ }),

/***/ "./src/core/qrcode/encoder/MatrixUtil.ts":
/*!***********************************************!*\
  !*** ./src/core/qrcode/encoder/MatrixUtil.ts ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*namespace com.google.zxing.qrcode.encoder {*/
var BitArray_1 = __webpack_require__(/*! ../../common/BitArray */ "./src/core/common/BitArray.ts");
var Integer_1 = __webpack_require__(/*! ../../util/Integer */ "./src/core/util/Integer.ts");
var QRCode_1 = __webpack_require__(/*! ./QRCode */ "./src/core/qrcode/encoder/QRCode.ts");
var MaskUtil_1 = __webpack_require__(/*! ./MaskUtil */ "./src/core/qrcode/encoder/MaskUtil.ts");
var WriterException_1 = __webpack_require__(/*! ../../WriterException */ "./src/core/WriterException.ts");
var IllegalArgumentException_1 = __webpack_require__(/*! ../../IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
/**
 * @author satorux@google.com (Satoru Takabayashi) - creator
 * @author dswitkin@google.com (Daniel Switkin) - ported from C++
 */
var MatrixUtil = /** @class */ (function () {
    function MatrixUtil() {
        // do nothing
    }
    // Set all cells to -1 (TYPESCRIPTPORT: 255).  -1 (TYPESCRIPTPORT: 255) means that the cell is empty (not set yet).
    //
    // JAVAPORT: We shouldn't need to do this at all. The code should be rewritten to begin encoding
    // with the ByteMatrix initialized all to zero.
    MatrixUtil.clearMatrix = function (matrix) {
        // TYPESCRIPTPORT: we use UintArray se changed here from -1 to 255
        matrix.clear(/*(byte) */ /*-1*/ 255);
    };
    // Build 2D matrix of QR Code from "dataBits" with "ecLevel", "version" and "getMaskPattern". On
    // success, store the result in "matrix" and return true.
    MatrixUtil.buildMatrix = function (dataBits, ecLevel, version, maskPattern /*int*/, matrix) {
        MatrixUtil.clearMatrix(matrix);
        MatrixUtil.embedBasicPatterns(version, matrix);
        // Type information appear with any version.
        MatrixUtil.embedTypeInfo(ecLevel, maskPattern, matrix);
        // Version info appear if version >= 7.
        MatrixUtil.maybeEmbedVersionInfo(version, matrix);
        // Data should be embedded at end.
        MatrixUtil.embedDataBits(dataBits, maskPattern, matrix);
    };
    // Embed basic patterns. On success, modify the matrix and return true.
    // The basic patterns are:
    // - Position detection patterns
    // - Timing patterns
    // - Dark dot at the left bottom corner
    // - Position adjustment patterns, if need be
    MatrixUtil.embedBasicPatterns = function (version, matrix) {
        // Let's get started with embedding big squares at corners.
        MatrixUtil.embedPositionDetectionPatternsAndSeparators(matrix);
        // Then, embed the dark dot at the left bottom corner.
        MatrixUtil.embedDarkDotAtLeftBottomCorner(matrix);
        // Position adjustment patterns appear if version >= 2.
        MatrixUtil.maybeEmbedPositionAdjustmentPatterns(version, matrix);
        // Timing patterns should be embedded after position adj. patterns.
        MatrixUtil.embedTimingPatterns(matrix);
    };
    // Embed type information. On success, modify the matrix.
    MatrixUtil.embedTypeInfo = function (ecLevel, maskPattern /*int*/, matrix) {
        var typeInfoBits = new BitArray_1.default();
        MatrixUtil.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
        for (var i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
            // Place bits in LSB to MSB order.  LSB (least significant bit) is the last value in
            // "typeInfoBits".
            var bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
            // Type info bits at the left top corner. See 8.9 of JISX0510:2004 (p.46).
            var coordinates = MatrixUtil.TYPE_INFO_COORDINATES[i];
            var x1 = coordinates[0];
            var y1 = coordinates[1];
            matrix.setBoolean(x1, y1, bit);
            if (i < 8) {
                // Right top corner.
                var x2 = matrix.getWidth() - i - 1;
                var y2 = 8;
                matrix.setBoolean(x2, y2, bit);
            }
            else {
                // Left bottom corner.
                var x2 = 8;
                var y2 = matrix.getHeight() - 7 + (i - 8);
                matrix.setBoolean(x2, y2, bit);
            }
        }
    };
    // Embed version information if need be. On success, modify the matrix and return true.
    // See 8.10 of JISX0510:2004 (p.47) for how to embed version information.
    MatrixUtil.maybeEmbedVersionInfo = function (version, matrix) {
        if (version.getVersionNumber() < 7) { // Version info is necessary if version >= 7.
            return; // Don't need version info.
        }
        var versionInfoBits = new BitArray_1.default();
        MatrixUtil.makeVersionInfoBits(version, versionInfoBits);
        var bitIndex = 6 * 3 - 1; // It will decrease from 17 to 0.
        for (var i = 0; i < 6; ++i) {
            for (var j = 0; j < 3; ++j) {
                // Place bits in LSB (least significant bit) to MSB order.
                var bit = versionInfoBits.get(bitIndex);
                bitIndex--;
                // Left bottom corner.
                matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
                // Right bottom corner.
                matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
            }
        }
    };
    // Embed "dataBits" using "getMaskPattern". On success, modify the matrix and return true.
    // For debugging purposes, it skips masking process if "getMaskPattern" is -1(TYPESCRIPTPORT: 255).
    // See 8.7 of JISX0510:2004 (p.38) for how to embed data bits.
    MatrixUtil.embedDataBits = function (dataBits, maskPattern /*int*/, matrix) {
        var bitIndex = 0;
        var direction = -1;
        // Start from the right bottom cell.
        var x = matrix.getWidth() - 1;
        var y = matrix.getHeight() - 1;
        while (x > 0) {
            // Skip the vertical timing pattern.
            if (x === 6) {
                x -= 1;
            }
            while (y >= 0 && y < matrix.getHeight()) {
                for (var i = 0; i < 2; ++i) {
                    var xx = x - i;
                    // Skip the cell if it's not empty.
                    if (!MatrixUtil.isEmpty(matrix.get(xx, y))) {
                        continue;
                    }
                    var bit = void 0;
                    if (bitIndex < dataBits.getSize()) {
                        bit = dataBits.get(bitIndex);
                        ++bitIndex;
                    }
                    else {
                        // Padding bit. If there is no bit left, we'll fill the left cells with 0, as described
                        // in 8.4.9 of JISX0510:2004 (p. 24).
                        bit = false;
                    }
                    // Skip masking if mask_pattern is -1 (TYPESCRIPTPORT: 255).
                    if (maskPattern !== 255 && MaskUtil_1.default.getDataMaskBit(maskPattern, xx, y)) {
                        bit = !bit;
                    }
                    matrix.setBoolean(xx, y, bit);
                }
                y += direction;
            }
            direction = -direction; // Reverse the direction.
            y += direction;
            x -= 2; // Move to the left.
        }
        // All bits should be consumed.
        if (bitIndex !== dataBits.getSize()) {
            throw new WriterException_1.default('Not all bits consumed: ' + bitIndex + '/' + dataBits.getSize());
        }
    };
    // Return the position of the most significant bit set (one: to) in the "value". The most
    // significant bit is position 32. If there is no bit set, return 0. Examples:
    // - findMSBSet(0) => 0
    // - findMSBSet(1) => 1
    // - findMSBSet(255) => 8
    MatrixUtil.findMSBSet = function (value /*int*/) {
        return 32 - Integer_1.default.numberOfLeadingZeros(value);
    };
    // Calculate BCH (Bose-Chaudhuri-Hocquenghem) code for "value" using polynomial "poly". The BCH
    // code is used for encoding type information and version information.
    // Example: Calculation of version information of 7.
    // f(x) is created from 7.
    //   - 7 = 000111 in 6 bits
    //   - f(x) = x^2 + x^1 + x^0
    // g(x) is given by the standard (p. 67)
    //   - g(x) = x^12 + x^11 + x^10 + x^9 + x^8 + x^5 + x^2 + 1
    // Multiply f(x) by x^(18 - 6)
    //   - f'(x) = f(x) * x^(18 - 6)
    //   - f'(x) = x^14 + x^13 + x^12
    // Calculate the remainder of f'(x) / g(x)
    //         x^2
    //         __________________________________________________
    //   g(x) )x^14 + x^13 + x^12
    //         x^14 + x^13 + x^12 + x^11 + x^10 + x^7 + x^4 + x^2
    //         --------------------------------------------------
    //                              x^11 + x^10 + x^7 + x^4 + x^2
    //
    // The remainder is x^11 + x^10 + x^7 + x^4 + x^2
    // Encode it in binary: 110010010100
    // The return value is 0xc94 (1100 1001 0100)
    //
    // Since all coefficients in the polynomials are 1 or 0, we can do the calculation by bit
    // operations. We don't care if coefficients are positive or negative.
    MatrixUtil.calculateBCHCode = function (value /*int*/, poly /*int*/) {
        if (poly === 0) {
            throw new IllegalArgumentException_1.default('0 polynomial');
        }
        // If poly is "1 1111 0010 0101" (version info poly), msbSetInPoly is 13. We'll subtract 1
        // from 13 to make it 12.
        var msbSetInPoly = MatrixUtil.findMSBSet(poly);
        value <<= msbSetInPoly - 1;
        // Do the division business using exclusive-or operations.
        while (MatrixUtil.findMSBSet(value) >= msbSetInPoly) {
            value ^= poly << (MatrixUtil.findMSBSet(value) - msbSetInPoly);
        }
        // Now the "value" is the remainder (i.e. the BCH code)
        return value;
    };
    // Make bit vector of type information. On success, store the result in "bits" and return true.
    // Encode error correction level and mask pattern. See 8.9 of
    // JISX0510:2004 (p.45) for details.
    MatrixUtil.makeTypeInfoBits = function (ecLevel, maskPattern /*int*/, bits) {
        if (!QRCode_1.default.isValidMaskPattern(maskPattern)) {
            throw new WriterException_1.default('Invalid mask pattern');
        }
        var typeInfo = (ecLevel.getBits() << 3) | maskPattern;
        bits.appendBits(typeInfo, 5);
        var bchCode = MatrixUtil.calculateBCHCode(typeInfo, MatrixUtil.TYPE_INFO_POLY);
        bits.appendBits(bchCode, 10);
        var maskBits = new BitArray_1.default();
        maskBits.appendBits(MatrixUtil.TYPE_INFO_MASK_PATTERN, 15);
        bits.xor(maskBits);
        if (bits.getSize() !== 15) { // Just in case.
            throw new WriterException_1.default('should not happen but we got: ' + bits.getSize());
        }
    };
    // Make bit vector of version information. On success, store the result in "bits" and return true.
    // See 8.10 of JISX0510:2004 (p.45) for details.
    MatrixUtil.makeVersionInfoBits = function (version, bits) {
        bits.appendBits(version.getVersionNumber(), 6);
        var bchCode = MatrixUtil.calculateBCHCode(version.getVersionNumber(), MatrixUtil.VERSION_INFO_POLY);
        bits.appendBits(bchCode, 12);
        if (bits.getSize() !== 18) { // Just in case.
            throw new WriterException_1.default('should not happen but we got: ' + bits.getSize());
        }
    };
    // Check if "value" is empty.
    MatrixUtil.isEmpty = function (value /*int*/) {
        return value === 255; // -1
    };
    MatrixUtil.embedTimingPatterns = function (matrix) {
        // -8 is for skipping position detection patterns (7: size), and two horizontal/vertical
        // separation patterns (1: size). Thus, 8 = 7 + 1.
        for (var i = 8; i < matrix.getWidth() - 8; ++i) {
            var bit = (i + 1) % 2;
            // Horizontal line.
            if (MatrixUtil.isEmpty(matrix.get(i, 6))) {
                matrix.setNumber(i, 6, bit);
            }
            // Vertical line.
            if (MatrixUtil.isEmpty(matrix.get(6, i))) {
                matrix.setNumber(6, i, bit);
            }
        }
    };
    // Embed the lonely dark dot at left bottom corner. JISX0510:2004 (p.46)
    MatrixUtil.embedDarkDotAtLeftBottomCorner = function (matrix) {
        if (matrix.get(8, matrix.getHeight() - 8) === 0) {
            throw new WriterException_1.default();
        }
        matrix.setNumber(8, matrix.getHeight() - 8, 1);
    };
    MatrixUtil.embedHorizontalSeparationPattern = function (xStart /*int*/, yStart /*int*/, matrix) {
        for (var x = 0; x < 8; ++x) {
            if (!MatrixUtil.isEmpty(matrix.get(xStart + x, yStart))) {
                throw new WriterException_1.default();
            }
            matrix.setNumber(xStart + x, yStart, 0);
        }
    };
    MatrixUtil.embedVerticalSeparationPattern = function (xStart /*int*/, yStart /*int*/, matrix) {
        for (var y = 0; y < 7; ++y) {
            if (!MatrixUtil.isEmpty(matrix.get(xStart, yStart + y))) {
                throw new WriterException_1.default();
            }
            matrix.setNumber(xStart, yStart + y, 0);
        }
    };
    MatrixUtil.embedPositionAdjustmentPattern = function (xStart /*int*/, yStart /*int*/, matrix) {
        for (var y = 0; y < 5; ++y) {
            var patternY = MatrixUtil.POSITION_ADJUSTMENT_PATTERN[y];
            for (var x = 0; x < 5; ++x) {
                matrix.setNumber(xStart + x, yStart + y, patternY[x]);
            }
        }
    };
    MatrixUtil.embedPositionDetectionPattern = function (xStart /*int*/, yStart /*int*/, matrix) {
        for (var y = 0; y < 7; ++y) {
            var patternY = MatrixUtil.POSITION_DETECTION_PATTERN[y];
            for (var x = 0; x < 7; ++x) {
                matrix.setNumber(xStart + x, yStart + y, patternY[x]);
            }
        }
    };
    // Embed position detection patterns and surrounding vertical/horizontal separators.
    MatrixUtil.embedPositionDetectionPatternsAndSeparators = function (matrix) {
        // Embed three big squares at corners.
        var pdpWidth = MatrixUtil.POSITION_DETECTION_PATTERN[0].length;
        // Left top corner.
        MatrixUtil.embedPositionDetectionPattern(0, 0, matrix);
        // Right top corner.
        MatrixUtil.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
        // Left bottom corner.
        MatrixUtil.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
        // Embed horizontal separation patterns around the squares.
        var hspWidth = 8;
        // Left top corner.
        MatrixUtil.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
        // Right top corner.
        MatrixUtil.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
        // Left bottom corner.
        MatrixUtil.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
        // Embed vertical separation patterns around the squares.
        var vspSize = 7;
        // Left top corner.
        MatrixUtil.embedVerticalSeparationPattern(vspSize, 0, matrix);
        // Right top corner.
        MatrixUtil.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
        // Left bottom corner.
        MatrixUtil.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
    };
    // Embed position adjustment patterns if need be.
    MatrixUtil.maybeEmbedPositionAdjustmentPatterns = function (version, matrix) {
        if (version.getVersionNumber() < 2) { // The patterns appear if version >= 2
            return;
        }
        var index = version.getVersionNumber() - 1;
        var coordinates = MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
        for (var i = 0, length_1 = coordinates.length; i !== length_1; i++) {
            var y = coordinates[i];
            if (y >= 0) {
                for (var j = 0; j !== length_1; j++) {
                    var x = coordinates[j];
                    if (x >= 0 && MatrixUtil.isEmpty(matrix.get(x, y))) {
                        // If the cell is unset, we embed the position adjustment pattern here.
                        // -2 is necessary since the x/y coordinates point to the center of the pattern, not the
                        // left top corner.
                        MatrixUtil.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
                    }
                }
            }
        }
    };
    MatrixUtil.POSITION_DETECTION_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
    ]);
    MatrixUtil.POSITION_ADJUSTMENT_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1]),
    ]);
    // From Appendix E. Table 1, JIS0510X:2004 (71: p). The table was double-checked by komatsu.
    MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
        Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
        Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
        Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
        Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
        Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
        Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
        Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
        Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
        Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
        Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
        Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
        Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
        Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
        Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
        Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
        Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
        Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
        Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
        Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
        Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
        Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
        Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
        Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
        Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
    ]);
    // Type info cells at the left top corner.
    MatrixUtil.TYPE_INFO_COORDINATES = Array.from([
        Int32Array.from([8, 0]),
        Int32Array.from([8, 1]),
        Int32Array.from([8, 2]),
        Int32Array.from([8, 3]),
        Int32Array.from([8, 4]),
        Int32Array.from([8, 5]),
        Int32Array.from([8, 7]),
        Int32Array.from([8, 8]),
        Int32Array.from([7, 8]),
        Int32Array.from([5, 8]),
        Int32Array.from([4, 8]),
        Int32Array.from([3, 8]),
        Int32Array.from([2, 8]),
        Int32Array.from([1, 8]),
        Int32Array.from([0, 8]),
    ]);
    // From Appendix D in JISX0510:2004 (p. 67)
    MatrixUtil.VERSION_INFO_POLY = 0x1f25; // 1 1111 0010 0101
    // From Appendix C in JISX0510:2004 (p.65).
    MatrixUtil.TYPE_INFO_POLY = 0x537;
    MatrixUtil.TYPE_INFO_MASK_PATTERN = 0x5412;
    return MatrixUtil;
}());
exports.default = MatrixUtil;


/***/ }),

/***/ "./src/core/qrcode/encoder/QRCode.ts":
/*!*******************************************!*\
  !*** ./src/core/qrcode/encoder/QRCode.ts ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringBuilder_1 = __webpack_require__(/*! ../../util/StringBuilder */ "./src/core/util/StringBuilder.ts");
/**
 * @author satorux@google.com (Satoru Takabayashi) - creator
 * @author dswitkin@google.com (Daniel Switkin) - ported from C++
 */
var QRCode = /** @class */ (function () {
    function QRCode() {
        this.maskPattern = -1;
    }
    QRCode.prototype.getMode = function () {
        return this.mode;
    };
    QRCode.prototype.getECLevel = function () {
        return this.ecLevel;
    };
    QRCode.prototype.getVersion = function () {
        return this.version;
    };
    QRCode.prototype.getMaskPattern = function () {
        return this.maskPattern;
    };
    QRCode.prototype.getMatrix = function () {
        return this.matrix;
    };
    /*@Override*/
    QRCode.prototype.toString = function () {
        var result = new StringBuilder_1.default(); // (200)
        result.append('<<\n');
        result.append(' mode: ');
        result.append(this.mode ? this.mode.toString() : 'null');
        result.append('\n ecLevel: ');
        result.append(this.ecLevel ? this.ecLevel.toString() : 'null');
        result.append('\n version: ');
        result.append(this.version ? this.version.toString() : 'null');
        result.append('\n maskPattern: ');
        result.append(this.maskPattern.toString());
        if (this.matrix) {
            result.append('\n matrix:\n');
            result.append(this.matrix.toString());
        }
        else {
            result.append('\n matrix: null\n');
        }
        result.append('>>\n');
        return result.toString();
    };
    QRCode.prototype.setMode = function (value) {
        this.mode = value;
    };
    QRCode.prototype.setECLevel = function (value) {
        this.ecLevel = value;
    };
    QRCode.prototype.setVersion = function (version) {
        this.version = version;
    };
    QRCode.prototype.setMaskPattern = function (value /*int*/) {
        this.maskPattern = value;
    };
    QRCode.prototype.setMatrix = function (value) {
        this.matrix = value;
    };
    // Check if "mask_pattern" is valid.
    QRCode.isValidMaskPattern = function (maskPattern /*int*/) {
        return maskPattern >= 0 && maskPattern < QRCode.NUM_MASK_PATTERNS;
    };
    QRCode.NUM_MASK_PATTERNS = 8;
    return QRCode;
}());
exports.default = QRCode;


/***/ }),

/***/ "./src/core/util/Arrays.ts":
/*!*********************************!*\
  !*** ./src/core/util/Arrays.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var System_1 = __webpack_require__(/*! ./System */ "./src/core/util/System.ts");
var Arrays = /** @class */ (function () {
    function Arrays() {
    }
    Arrays.equals = function (first, second) {
        if (!first) {
            return false;
        }
        if (!second) {
            return false;
        }
        if (!first.length) {
            return false;
        }
        if (!second.length) {
            return false;
        }
        if (first.length !== second.length) {
            return false;
        }
        for (var i = 0, length_1 = first.length; i < length_1; i++) {
            if (first[i] !== second[i]) {
                return false;
            }
        }
        return true;
    };
    Arrays.hashCode = function (a) {
        if (a === null) {
            return 0;
        }
        var result = 1;
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var element = a_1[_i];
            result = 31 * result + element;
        }
        return result;
    };
    Arrays.fillUint8Array = function (a, value) {
        for (var i = 0; i !== a.length; i++) {
            a[i] = value;
        }
    };
    Arrays.copyOf = function (original, newLength) {
        var copy = new Int32Array(newLength);
        System_1.default.arraycopy(original, 0, copy, 0, Math.min(original.length, newLength));
        return copy;
    };
    /*
    * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point
    * for the new element.
    * Parameters:
    *     ar - A sorted array
    *     el - An element to search for
    *     comparator - A comparator function. The function takes two arguments: (a, b) and returns:
    *        a negative number  if a is less than b;
    *        0 if a is equal to b;
    *        a positive number of a is greater than b.
    * The array may contain duplicate elements. If there are more than one equal elements in the array,
    * the returned value can be the index of any one of the equal elements.
    *
    * http://jsfiddle.net/aryzhov/pkfst550/
    */
    Arrays.binarySearch = function (ar, el, comparator) {
        if (undefined === comparator) {
            comparator = Arrays.numberComparator;
        }
        var m = 0;
        var n = ar.length - 1;
        while (m <= n) {
            var k = (n + m) >> 1;
            var cmp = comparator(el, ar[k]);
            if (cmp > 0) {
                m = k + 1;
            }
            else if (cmp < 0) {
                n = k - 1;
            }
            else {
                return k;
            }
        }
        return -m - 1;
    };
    Arrays.numberComparator = function (a, b) {
        return a - b;
    };
    return Arrays;
}());
exports.default = Arrays;


/***/ }),

/***/ "./src/core/util/Float.ts":
/*!********************************!*\
  !*** ./src/core/util/Float.ts ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Float = /** @class */ (function () {
    function Float() {
    }
    Float.floatToIntBits = function (f) {
        return f;
    };
    return Float;
}());
exports.default = Float;


/***/ }),

/***/ "./src/core/util/Integer.ts":
/*!**********************************!*\
  !*** ./src/core/util/Integer.ts ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Integer = /** @class */ (function () {
    function Integer() {
    }
    Integer.numberOfTrailingZeros = function (i) {
        var y;
        if (i === 0)
            return 32;
        var n = 31;
        y = i << 16;
        if (y !== 0) {
            n -= 16;
            i = y;
        }
        y = i << 8;
        if (y !== 0) {
            n -= 8;
            i = y;
        }
        y = i << 4;
        if (y !== 0) {
            n -= 4;
            i = y;
        }
        y = i << 2;
        if (y !== 0) {
            n -= 2;
            i = y;
        }
        return n - ((i << 1) >>> 31);
    };
    Integer.numberOfLeadingZeros = function (i) {
        // HD, Figure 5-6
        if (i === 0) {
            return 32;
        }
        var n = 1;
        if (i >>> 16 === 0) {
            n += 16;
            i <<= 16;
        }
        if (i >>> 24 === 0) {
            n += 8;
            i <<= 8;
        }
        if (i >>> 28 === 0) {
            n += 4;
            i <<= 4;
        }
        if (i >>> 30 === 0) {
            n += 2;
            i <<= 2;
        }
        n -= i >>> 31;
        return n;
    };
    Integer.toHexString = function (i) {
        return i.toString(16);
    };
    // Returns the number of one-bits in the two's complement binary representation of the specified int value. This function is sometimes referred to as the population count.
    // Returns:
    // the number of one-bits in the two's complement binary representation of the specified int value.
    Integer.bitCount = function (i) {
        // HD, Figure 5-2
        i = i - ((i >>> 1) & 0x55555555);
        i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
        i = (i + (i >>> 4)) & 0x0f0f0f0f;
        i = i + (i >>> 8);
        i = i + (i >>> 16);
        return i & 0x3f;
    };
    Integer.MIN_VALUE_32_BITS = -2147483648;
    return Integer;
}());
exports.default = Integer;


/***/ }),

/***/ "./src/core/util/StringBuilder.ts":
/*!****************************************!*\
  !*** ./src/core/util/StringBuilder.ts ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StringBuilder = /** @class */ (function () {
    function StringBuilder(value) {
        if (value === void 0) { value = ''; }
        this.value = value;
    }
    StringBuilder.prototype.append = function (s) {
        if (typeof s === 'string') {
            this.value += s.toString();
        }
        else {
            this.value += String.fromCharCode(s);
        }
        return this;
    };
    StringBuilder.prototype.length = function () {
        return this.value.length;
    };
    StringBuilder.prototype.charAt = function (n) {
        return this.value.charAt(n);
    };
    StringBuilder.prototype.deleteCharAt = function (n) {
        this.value = this.value.substr(0, n) + this.value.substring(n + 1);
    };
    StringBuilder.prototype.setCharAt = function (n, c) {
        this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
    };
    StringBuilder.prototype.toString = function () {
        return this.value;
    };
    StringBuilder.prototype.insert = function (n, c) {
        this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
    };
    return StringBuilder;
}());
exports.default = StringBuilder;


/***/ }),

/***/ "./src/core/util/StringEncoding.ts":
/*!*****************************************!*\
  !*** ./src/core/util/StringEncoding.ts ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsupportedOperationException_1 = __webpack_require__(/*! ../UnsupportedOperationException */ "./src/core/UnsupportedOperationException.ts");
var CharacterSetECI_1 = __webpack_require__(/*! ../common/CharacterSetECI */ "./src/core/common/CharacterSetECI.ts");
/**
 * Responsible for en/decoding strings.
 */
var StringEncoding = /** @class */ (function () {
    function StringEncoding() {
    }
    /**
     * Decodes some Uint8Array to a string format.
     */
    StringEncoding.decode = function (bytes, encoding) {
        var encodingName = this.encodingName(encoding);
        // Increases browser support.
        if (typeof TextDecoder === 'undefined') {
            return this.decodeFallback(bytes, encodingName);
        }
        return new TextDecoder(encodingName).decode(bytes);
    };
    /**
     * Encodes some string into a Uint8Array.
     *
     * @todo natively support other string formats than UTF-8.
     */
    StringEncoding.encode = function (s, encoding) {
        // Uses `text-encoding` package.
        if (!StringEncoding.isBrowser()) {
            // SEE: https://nodejs.org/api/buffer.html#buffer_class_buffer
            // SEE: https://github.com/polygonplanet/encoding.js/
            // SEE: https://stackoverflow.com/questions/17191945/conversion-between-utf-8-arraybuffer-and-string
            var EncoderConstructor = TextEncoder;
            return new EncoderConstructor(this.encodingName(encoding), { NONSTANDARD_allowLegacyEncoding: true }).encode(s);
        }
        // Increases browser support.
        if (typeof TextEncoder === 'undefined') {
            return this.encodeFallback(s);
        }
        // TextEncoder only encodes to UTF8 by default as specified by encoding.spec.whatwg.org
        return new TextEncoder().encode(s);
    };
    StringEncoding.isBrowser = function () {
        return (typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]');
    };
    /**
     * Returns the string value from some encoding character set.
     */
    StringEncoding.encodingName = function (encoding) {
        return typeof encoding === 'string'
            ? encoding
            : encoding.getName();
    };
    /**
     * Returns character set from some encoding character set.
     */
    StringEncoding.encodingCharacterSet = function (encoding) {
        return CharacterSetECI_1.default.getCharacterSetECIByName(this.encodingName(encoding));
    };
    /**
     * Runs a fallback for the native decoding funcion.
     */
    StringEncoding.decodeFallback = function (bytes, encoding) {
        var characterSet = this.encodingCharacterSet(encoding);
        if (characterSet.equals(CharacterSetECI_1.default.UTF8) ||
            characterSet.equals(CharacterSetECI_1.default.ISO8859_1) ||
            characterSet.equals(CharacterSetECI_1.default.ASCII)) {
            var s = '';
            for (var i = 0, length_1 = bytes.length; i < length_1; i++) {
                var h = bytes[i].toString(16);
                if (h.length < 2) {
                    h = '0' + h;
                }
                s += '%' + h;
            }
            return decodeURIComponent(s);
        }
        if (characterSet.equals(CharacterSetECI_1.default.UnicodeBigUnmarked)) {
            return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
        }
        throw new UnsupportedOperationException_1.default("Encoding " + this.encodingName(encoding) + " not supported by fallback.");
    };
    /**
     * Runs a fallback for the native encoding funcion.
     *
     * @see https://stackoverflow.com/a/17192845/4367683
     */
    StringEncoding.encodeFallback = function (s) {
        var encodedURIstring = btoa(unescape(encodeURIComponent(s)));
        var charList = encodedURIstring.split('');
        var uintArray = [];
        for (var i = 0; i < charList.length; i++) {
            uintArray.push(charList[i].charCodeAt(0));
        }
        return new Uint8Array(uintArray);
    };
    return StringEncoding;
}());
exports.default = StringEncoding;


/***/ }),

/***/ "./src/core/util/System.ts":
/*!*********************************!*\
  !*** ./src/core/util/System.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var System = /** @class */ (function () {
    function System() {
    }
    // public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
    /**
     * Makes a copy of a array.
     */
    System.arraycopy = function (src, srcPos, dest, destPos, length) {
        // TODO: better use split or set?
        while (length--) {
            dest[destPos++] = src[srcPos++];
        }
    };
    /**
     * Returns the current time in milliseconds.
     */
    System.currentTimeMillis = function () {
        return Date.now();
    };
    return System;
}());
exports.default = System;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// browser
__export(__webpack_require__(/*! ./browser/BrowserBarcodeReader */ "./src/browser/BrowserBarcodeReader.ts"));
__export(__webpack_require__(/*! ./browser/BrowserCodeReader */ "./src/browser/BrowserCodeReader.ts"));
__export(__webpack_require__(/*! ./browser/BrowserDatamatrixCodeReader */ "./src/browser/BrowserDatamatrixCodeReader.ts"));
__export(__webpack_require__(/*! ./browser/BrowserMultiFormatReader */ "./src/browser/BrowserMultiFormatReader.ts"));
__export(__webpack_require__(/*! ./browser/BrowserQRCodeReader */ "./src/browser/BrowserQRCodeReader.ts"));
__export(__webpack_require__(/*! ./browser/BrowserQRCodeSvgWriter */ "./src/browser/BrowserQRCodeSvgWriter.ts"));
__export(__webpack_require__(/*! ./browser/HTMLCanvasElementLuminanceSource */ "./src/browser/HTMLCanvasElementLuminanceSource.ts"));
__export(__webpack_require__(/*! ./browser/VideoInputDevice */ "./src/browser/VideoInputDevice.ts"));
// Exceptions
var ArgumentException_1 = __webpack_require__(/*! ./core/ArgumentException */ "./src/core/ArgumentException.ts");
exports.ArgumentException = ArgumentException_1.default;
var ArithmeticException_1 = __webpack_require__(/*! ./core/ArithmeticException */ "./src/core/ArithmeticException.ts");
exports.ArithmeticException = ArithmeticException_1.default;
var ChecksumException_1 = __webpack_require__(/*! ./core/ChecksumException */ "./src/core/ChecksumException.ts");
exports.ChecksumException = ChecksumException_1.default;
var Exception_1 = __webpack_require__(/*! ./core/Exception */ "./src/core/Exception.ts");
exports.Exception = Exception_1.default;
var FormatException_1 = __webpack_require__(/*! ./core/FormatException */ "./src/core/FormatException.ts");
exports.FormatException = FormatException_1.default;
var IllegalArgumentException_1 = __webpack_require__(/*! ./core/IllegalArgumentException */ "./src/core/IllegalArgumentException.ts");
exports.IllegalArgumentException = IllegalArgumentException_1.default;
var IllegalStateException_1 = __webpack_require__(/*! ./core/IllegalStateException */ "./src/core/IllegalStateException.ts");
exports.IllegalStateException = IllegalStateException_1.default;
var NotFoundException_1 = __webpack_require__(/*! ./core/NotFoundException */ "./src/core/NotFoundException.ts");
exports.NotFoundException = NotFoundException_1.default;
var ReaderException_1 = __webpack_require__(/*! ./core/ReaderException */ "./src/core/ReaderException.ts");
exports.ReaderException = ReaderException_1.default;
var ReedSolomonException_1 = __webpack_require__(/*! ./core/ReedSolomonException */ "./src/core/ReedSolomonException.ts");
exports.ReedSolomonException = ReedSolomonException_1.default;
var UnsupportedOperationException_1 = __webpack_require__(/*! ./core/UnsupportedOperationException */ "./src/core/UnsupportedOperationException.ts");
exports.UnsupportedOperationException = UnsupportedOperationException_1.default;
var WriterException_1 = __webpack_require__(/*! ./core/WriterException */ "./src/core/WriterException.ts");
exports.WriterException = WriterException_1.default;
// core
var BarcodeFormat_1 = __webpack_require__(/*! ./core/BarcodeFormat */ "./src/core/BarcodeFormat.ts");
exports.BarcodeFormat = BarcodeFormat_1.default;
var Binarizer_1 = __webpack_require__(/*! ./core/Binarizer */ "./src/core/Binarizer.ts");
exports.Binarizer = Binarizer_1.default;
var BinaryBitmap_1 = __webpack_require__(/*! ./core/BinaryBitmap */ "./src/core/BinaryBitmap.ts");
exports.BinaryBitmap = BinaryBitmap_1.default;
var DecodeHintType_1 = __webpack_require__(/*! ./core/DecodeHintType */ "./src/core/DecodeHintType.ts");
exports.DecodeHintType = DecodeHintType_1.default;
var InvertedLuminanceSource_1 = __webpack_require__(/*! ./core/InvertedLuminanceSource */ "./src/core/InvertedLuminanceSource.ts");
exports.InvertedLuminanceSource = InvertedLuminanceSource_1.default;
var LuminanceSource_1 = __webpack_require__(/*! ./core/LuminanceSource */ "./src/core/LuminanceSource.ts");
exports.LuminanceSource = LuminanceSource_1.default;
var MultiFormatReader_1 = __webpack_require__(/*! ./core/MultiFormatReader */ "./src/core/MultiFormatReader.ts");
exports.MultiFormatReader = MultiFormatReader_1.default;
var MultiFormatWriter_1 = __webpack_require__(/*! ./core/MultiFormatWriter */ "./src/core/MultiFormatWriter.ts");
exports.MultiFormatWriter = MultiFormatWriter_1.default;
var PlanarYUVLuminanceSource_1 = __webpack_require__(/*! ./core/PlanarYUVLuminanceSource */ "./src/core/PlanarYUVLuminanceSource.ts");
exports.PlanarYUVLuminanceSource = PlanarYUVLuminanceSource_1.default;
var Result_1 = __webpack_require__(/*! ./core/Result */ "./src/core/Result.ts");
exports.Result = Result_1.default;
var ResultMetadataType_1 = __webpack_require__(/*! ./core/ResultMetadataType */ "./src/core/ResultMetadataType.ts");
exports.ResultMetadataType = ResultMetadataType_1.default;
var RGBLuminanceSource_1 = __webpack_require__(/*! ./core/RGBLuminanceSource */ "./src/core/RGBLuminanceSource.ts");
exports.RGBLuminanceSource = RGBLuminanceSource_1.default;
// core/common
var BitArray_1 = __webpack_require__(/*! ./core/common/BitArray */ "./src/core/common/BitArray.ts");
exports.BitArray = BitArray_1.default;
var BitMatrix_1 = __webpack_require__(/*! ./core/common/BitMatrix */ "./src/core/common/BitMatrix.ts");
exports.BitMatrix = BitMatrix_1.default;
var BitSource_1 = __webpack_require__(/*! ./core/common/BitSource */ "./src/core/common/BitSource.ts");
exports.BitSource = BitSource_1.default;
var CharacterSetECI_1 = __webpack_require__(/*! ./core/common/CharacterSetECI */ "./src/core/common/CharacterSetECI.ts");
exports.CharacterSetECI = CharacterSetECI_1.default;
var DecoderResult_1 = __webpack_require__(/*! ./core/common/DecoderResult */ "./src/core/common/DecoderResult.ts");
exports.DecoderResult = DecoderResult_1.default;
var DefaultGridSampler_1 = __webpack_require__(/*! ./core/common/DefaultGridSampler */ "./src/core/common/DefaultGridSampler.ts");
exports.DefaultGridSampler = DefaultGridSampler_1.default;
var DetectorResult_1 = __webpack_require__(/*! ./core/common/DetectorResult */ "./src/core/common/DetectorResult.ts");
exports.DetectorResult = DetectorResult_1.default;
var EncodeHintType_1 = __webpack_require__(/*! ./core/EncodeHintType */ "./src/core/EncodeHintType.ts");
exports.EncodeHintType = EncodeHintType_1.default;
var GlobalHistogramBinarizer_1 = __webpack_require__(/*! ./core/common/GlobalHistogramBinarizer */ "./src/core/common/GlobalHistogramBinarizer.ts");
exports.GlobalHistogramBinarizer = GlobalHistogramBinarizer_1.default;
var GridSampler_1 = __webpack_require__(/*! ./core/common/GridSampler */ "./src/core/common/GridSampler.ts");
exports.GridSampler = GridSampler_1.default;
var GridSamplerInstance_1 = __webpack_require__(/*! ./core/common/GridSamplerInstance */ "./src/core/common/GridSamplerInstance.ts");
exports.GridSamplerInstance = GridSamplerInstance_1.default;
var HybridBinarizer_1 = __webpack_require__(/*! ./core/common/HybridBinarizer */ "./src/core/common/HybridBinarizer.ts");
exports.HybridBinarizer = HybridBinarizer_1.default;
var PerspectiveTransform_1 = __webpack_require__(/*! ./core/common/PerspectiveTransform */ "./src/core/common/PerspectiveTransform.ts");
exports.PerspectiveTransform = PerspectiveTransform_1.default;
var StringUtils_1 = __webpack_require__(/*! ./core/common/StringUtils */ "./src/core/common/StringUtils.ts");
exports.StringUtils = StringUtils_1.default;
// core/common/detector
var MathUtils_1 = __webpack_require__(/*! ./core/common/detector/MathUtils */ "./src/core/common/detector/MathUtils.ts");
exports.MathUtils = MathUtils_1.default;
// export { default as MonochromeRectangleDetector } from './core/common/detector/MonochromeRectangleDetector';
var WhiteRectangleDetector_1 = __webpack_require__(/*! ./core/common/detector/WhiteRectangleDetector */ "./src/core/common/detector/WhiteRectangleDetector.ts");
exports.WhiteRectangleDetector = WhiteRectangleDetector_1.default;
// core/common/reedsolomon
var GenericGF_1 = __webpack_require__(/*! ./core/common/reedsolomon/GenericGF */ "./src/core/common/reedsolomon/GenericGF.ts");
exports.GenericGF = GenericGF_1.default;
var GenericGFPoly_1 = __webpack_require__(/*! ./core/common/reedsolomon/GenericGFPoly */ "./src/core/common/reedsolomon/GenericGFPoly.ts");
exports.GenericGFPoly = GenericGFPoly_1.default;
var ReedSolomonDecoder_1 = __webpack_require__(/*! ./core/common/reedsolomon/ReedSolomonDecoder */ "./src/core/common/reedsolomon/ReedSolomonDecoder.ts");
exports.ReedSolomonDecoder = ReedSolomonDecoder_1.default;
var ReedSolomonEncoder_1 = __webpack_require__(/*! ./core/common/reedsolomon/ReedSolomonEncoder */ "./src/core/common/reedsolomon/ReedSolomonEncoder.ts");
exports.ReedSolomonEncoder = ReedSolomonEncoder_1.default;
// core/datamatrix
var DataMatrixReader_1 = __webpack_require__(/*! ./core/datamatrix/DataMatrixReader */ "./src/core/datamatrix/DataMatrixReader.ts");
exports.DataMatrixReader = DataMatrixReader_1.default;
// core/twod/qrcode
var QRCodeReader_1 = __webpack_require__(/*! ./core/qrcode/QRCodeReader */ "./src/core/qrcode/QRCodeReader.ts");
exports.QRCodeReader = QRCodeReader_1.default;
var QRCodeWriter_1 = __webpack_require__(/*! ./core/qrcode/QRCodeWriter */ "./src/core/qrcode/QRCodeWriter.ts");
exports.QRCodeWriter = QRCodeWriter_1.default;
var ErrorCorrectionLevel_1 = __webpack_require__(/*! ./core/qrcode/decoder/ErrorCorrectionLevel */ "./src/core/qrcode/decoder/ErrorCorrectionLevel.ts");
exports.QRCodeDecoderErrorCorrectionLevel = ErrorCorrectionLevel_1.default;
var Encoder_1 = __webpack_require__(/*! ./core/qrcode/encoder/Encoder */ "./src/core/qrcode/encoder/Encoder.ts");
exports.QRCodeEncoder = Encoder_1.default;
var QRCode_1 = __webpack_require__(/*! ./core/qrcode/encoder/QRCode */ "./src/core/qrcode/encoder/QRCode.ts");
exports.QRCodeEncoderQRCode = QRCode_1.default;
// core/oned
var OneDReader_1 = __webpack_require__(/*! ./core/oned/OneDReader */ "./src/core/oned/OneDReader.ts");
exports.OneDReader = OneDReader_1.default;
var EAN13Reader_1 = __webpack_require__(/*! ./core/oned/EAN13Reader */ "./src/core/oned/EAN13Reader.ts");
exports.EAN13Reader = EAN13Reader_1.default;
var Code128Reader_1 = __webpack_require__(/*! ./core/oned/Code128Reader */ "./src/core/oned/Code128Reader.ts");
exports.Code128Reader = Code128Reader_1.default;
var ITFReader_1 = __webpack_require__(/*! ./core/oned/ITFReader */ "./src/core/oned/ITFReader.ts");
exports.ITFReader = ITFReader_1.default;
var Code39Reader_1 = __webpack_require__(/*! ./core/oned/Code39Reader */ "./src/core/oned/Code39Reader.ts");
exports.Code39Reader = Code39Reader_1.default;
var RSS14Reader_1 = __webpack_require__(/*! ./core/oned/rss/RSS14Reader */ "./src/core/oned/rss/RSS14Reader.ts");
exports.RSS14Reader = RSS14Reader_1.default;
var MultiFormatOneDReader_1 = __webpack_require__(/*! ./core/oned/MultiFormatOneDReader */ "./src/core/oned/MultiFormatOneDReader.ts");
exports.MultiformatReader = MultiFormatOneDReader_1.default;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
