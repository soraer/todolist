class Model {
    constructor () {
        this.todoList = []
    };

    add (status, content) {
        this.todoList.push({
            status: status,
            content: content
        })
    };

    delete (index) {
        this.todoList.splice(index, 1)
    };

    complete (index) {
        this.todoList[index].status = true
    }
}
module.exports = Model