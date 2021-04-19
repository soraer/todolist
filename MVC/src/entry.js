const Control = require('./control')
const View = require('./view')
const Model = require('./model')

let view = new View()
let model = new Model()
let control = new Control(model, view)
control.rander()

// Control主要处理view层的事件注册及相关业务逻辑，并将view挂载到根元素上
// model主要处理页面源数据及相关处理方法
// view主要处理页面模版相关内容