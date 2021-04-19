
class Control {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.el = document.getElementById('app')
    }

    sign () {
        let iptValue = document.getElementById('ipt')
        let btn = document.getElementById('btn')
        let uls = document.getElementById('uls')

        btn.addEventListener('click', () => {
            let val = iptValue.value
            if (val.length > 0) {
                this.model.add(false,val)
                iptValue.value = ''
                this.rander()
            } else {
                alert('请输入计划内容！')
            }
        })

        uls.addEventListener('click', (ev) => {
            let idx = ev.target.dataset.idx;
            if (ev.target.className === 'finish') {
                this.model.complete(idx)
            } else if (ev.target.className === 'delete') {
                this.model.delete(idx)
            }
            this.rander()
        })    
    }

    rander () { 
        this.el.innerHTML = this.view.initView(this.model.todoList)
        this.sign()
    }
}

module.exports = Control