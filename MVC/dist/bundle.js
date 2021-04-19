/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((module) => {

eval("// const Model = require('./model')\n\n// let model = new Model()\n\nclass Control {\n    constructor(model, view) {\n        this.model = model\n        this.view = view\n        this.el = document.getElementById('app')\n    }\n\n    sign () {\n        let iptValue = document.getElementById('ipt')\n        let btn = document.getElementById('btn')\n        let uls = document.getElementById('uls')\n\n        btn.addEventListener('click', () => {\n            let val = iptValue.value\n            if (val.length > 0) {\n                this.model.add(false,val)\n                iptValue.value = ''\n                this.rander()\n            } else {\n                alert('请输入计划内容！')\n            }\n        })\n\n        uls.addEventListener('click', (ev) => {\n            let idx = ev.target.dataset.idx;\n            if (ev.target.className === 'finish') {\n                this.model.complete(idx)\n            } else if (ev.target.className === 'delete') {\n                this.model.delete(idx)\n            }\n            this.rander()\n        })    \n    }\n\n    rander () { \n        console.log(this.model.todoList)\n        this.el.innerHTML = this.view.initView(this.model.todoList)\n        this.sign()\n    }\n}\n\nmodule.exports = Control\n\n//# sourceURL=webpack://MVC/./src/control.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Control = __webpack_require__(/*! ./control */ \"./src/control.js\")\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\")\nconst Model = __webpack_require__(/*! ./model */ \"./src/model.js\")\n\nlet view = new View()\nlet model = new Model()\nlet control = new Control(model, view)\ncontrol.rander()\n\n\n//# sourceURL=webpack://MVC/./src/entry.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((module) => {

eval("class Model {\n    constructor () {\n        this.todoList = []\n    };\n\n    add (status, content) {\n        this.todoList.push({\n            status: status,\n            content: content\n        })\n    };\n\n    delete (index) {\n        console.log(index,this.todoList[index])\n        this.todoList.splice(index, 1)\n    };\n\n    complete (index) {\n        console.log(index,this.todoList[index])\n        this.todoList[index].status = true\n    }\n}\nmodule.exports = Model\n\n//# sourceURL=webpack://MVC/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((module) => {

eval("class View {\n    initView (data) {\n        let lis = data.map((item, idx) => `\n            <li class=\"${item.status ? 'done' : ''}\">\n                <span>${item.content}</span>${item.status ? `<span data-idx=${idx} class=\"delete\">删除</span>` : `<span data-idx=${idx} class=\"delete\">删除</span><span data-idx=${idx} class=\"finish\">完成</span>`}\n            </li>\n        `).join('')\n\n        return `\n            <div class=\"main\">\n                <div class=\"content\">\n                    <div class=\"item\">\n                        <input id=\"ipt\" type=\"text\" value=\"\">\n                        <input id=\"btn\" type=\"button\" value=\"add\">\n                    </div>\n                    <div class=\"item\">\n                        <ul id=\"uls\">${lis}</ul>\n                    </div>   \n                </div>          \n            </div>\n        `\n    }\n}\n\nmodule.exports = View\n\n//# sourceURL=webpack://MVC/./src/view.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry.js");
/******/ 	
/******/ })()
;