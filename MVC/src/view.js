class View {
    initView (data) {
        let lis = data.map((item, idx) => `
            <li class="${item.status ? 'done' : ''}">
                <span>${item.content}</span>${item.status ? `<span data-idx=${idx} class="delete">删除</span>` : `<span data-idx=${idx} class="delete">删除</span><span data-idx=${idx} class="finish">完成</span>`}
            </li>
        `).join('')

        return `
            <div class="main">
                <div class="content">
                    <div class="item">
                        <input id="ipt" type="text" value="">
                        <input id="btn" type="button" value="add">
                    </div>
                    <div class="item">
                        <ul id="uls">${lis}</ul>
                    </div>   
                </div>          
            </div>
        `
    }
}

module.exports = View