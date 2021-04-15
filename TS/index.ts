let iptValue: HTMLElement  = document.getElementById('ipt') as HTMLElement; //类型断言
let btn: HTMLElement = document.getElementById('btn') as HTMLElement;
let uls: HTMLElement = document.getElementById('uls') as HTMLElement;
let todoList: Todo[] = [];

interface IStatusAndContent { //接口描述类的内容
    status: boolean,
    content: string,
}
interface IRander {
    rander (): void,
    push (val: string): void,
    finish (idx: number): void,
    delete (idx: number): void
}

class Todo implements IStatusAndContent { //Todo类，约束每项的格式
    public status;
    public content;
    
    constructor (status: boolean, content: string) {
        this.status = status;
        this.content = content
    }
}

class RanderClass implements IRander {
    constructor () {
        
    };
    rander () {
        let dom: any = '';
        if (todoList.length > 0) {
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].status) {
                    dom += `<li class="done"><span>${todoList[i].content}</span><span data-idx="${i}" class="delete">删除</span></li>`
                } else {
                    dom += `<li><span>${todoList[i].content}</span><span data-idx="${i}" class="delete">删除</span><span data-idx="${i}" class="finish">完成</span></li>`
                }         
            }
        } else {
            dom += `<li>暂无计划</li>`
        }
        uls.innerHTML = dom
    };
    push (val: string) {
        todoList.unshift(new Todo(false, val))
    };
    finish (idx: number) {
        todoList[idx].status = true
    };
    delete (idx: number) {
        todoList.splice(idx, 1)
    }
}

let doSomthing = new RanderClass()
//渲染
doSomthing.rander()

//添加
btn.addEventListener('click', function() {
    let val: string = iptValue.value
    if (val.length > 0) {
        doSomthing.push(val)
        iptValue.value = ''
        doSomthing.rander()
    } else {
        alert('请输入计划内容！')
    }
})
//操作
uls.addEventListener('click', function(ev:any) {
    let idx: number = ev.target.dataset.idx;
    if (ev.target.className === 'finish') {
        doSomthing.finish(idx)
    } else if (ev.target.className === 'delete') {
        doSomthing.delete(idx)
    }
    doSomthing.rander()
})