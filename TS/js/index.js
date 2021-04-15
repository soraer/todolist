"use strict";
var iptValue = document.getElementById('ipt'); //类型断言
var btn = document.getElementById('btn');
var uls = document.getElementById('uls');
var todoList = [];
var Todo = /** @class */ (function () {
    function Todo(status, content) {
        this.status = status;
        this.content = content;
    }
    return Todo;
}());
var RanderClass = /** @class */ (function () {
    function RanderClass() {
    }
    ;
    RanderClass.prototype.rander = function () {
        var dom = '';
        if (todoList.length > 0) {
            for (var i = 0; i < todoList.length; i++) {
                if (todoList[i].status) {
                    dom += "<li class=\"done\"><span>" + todoList[i].content + "</span><span data-idx=\"" + i + "\" class=\"delete\">\u5220\u9664</span></li>";
                }
                else {
                    dom += "<li><span>" + todoList[i].content + "</span><span data-idx=\"" + i + "\" class=\"delete\">\u5220\u9664</span><span data-idx=\"" + i + "\" class=\"finish\">\u5B8C\u6210</span></li>";
                }
            }
        }
        else {
            dom += "<li>\u6682\u65E0\u8BA1\u5212</li>";
        }
        uls.innerHTML = dom;
    };
    ;
    RanderClass.prototype.push = function (val) {
        todoList.unshift(new Todo(false, val));
    };
    ;
    RanderClass.prototype.finish = function (idx) {
        todoList[idx].status = true;
    };
    ;
    RanderClass.prototype.delete = function (idx) {
        todoList.splice(idx, 1);
    };
    return RanderClass;
}());
//渲染ul函数
function addUl(str) {
    var strs = str + '111';
    return strs;
}
var doSomthing = new RanderClass();
//渲染
doSomthing.rander();
//添加
btn.addEventListener('click', function () {
    var val = iptValue.value;
    if (val !== 'undefined' && val.length > 0) {
        doSomthing.push(val);
    }
    else {
        alert('请输入计划内容！');
    }
    iptValue.value = '';
    doSomthing.rander();
});
//操作
uls.addEventListener('click', function (e) {
    var ev = e;
    var idx = ev.target.dataset.idx;
    if (ev.target.className === 'finish') {
        doSomthing.finish(idx);
    }
    else if (ev.target.className === 'delete') {
        doSomthing.delete(idx);
    }
    doSomthing.rander();
});
