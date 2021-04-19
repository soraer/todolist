const Control = require('./control')
const View = require('./view')
const Model = require('./model')

let view = new View()
let model = new Model()
let control = new Control(model, view)
control.rander()
