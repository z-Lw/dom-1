window.dom = { 
    create(string){ //用于创建节点
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.children[0];
        // const container = document.createElement('div')
        // container.innerHTML = string;
        // return container.children[0];
        //
       // return document.createElement(tagName)
    },
    after(node,node2){ //用于新增加弟弟
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){ //用于新增哥哥
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node){//用于新增儿子
        parent.appendChild(node)
    },
    wrap(node,parent){ //用于新增爸爸
        dom.before(node,parent)
        dom.append(parent,node)
    },
    remove(node){ //用于删除节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){ //用于删除后代
       // const {childNodes}=node /// 等价于  const childNodes = node.childNodes
       // console.log(childNodes)
       
        const array = []
        let x=node.firstChild
        while(x){
            //console.log(node.firstChild)
            array.push(dom.remove(node.firstChild))
            x=node.firstChild
        }
        return array
    },
    attr(node,name,value){ // 重载// 用于读改写标签属性
        if(arguments.length===3){
            node.setAttribute(name,value)
        }
        else if(arguments.length===2){
            return node.getAttribute(name)
        }
    },
    text(node,string){ //适配  //用于改写文本内容
        if(arguments.length===2){
            if('innerText' in node){
              
                node.innerText =string
            }else{
                node.textContent = string
            }
        } else if(arguments.length===1){
            if('innerText' in node){
              
                return node.innerText
            }else{
                return node.textContent 
            }
        }
        
    },
    html(node,string){ //用于改写标签内容
        if(arguments.length ===2){
            node.innerHTML=string
        }else if(arguments.length===1){
            return node.innerHTML
        }
    },
    style(node,name,value){ //用于改写标签属性
        if(arguments.length===3){
            node.style[name]=value
        }
        else if(arguments.length===2){
            if(typeof name ==='string'){
                return node.style[name]
            }else if(name instanceof Object){
                const object =name
                for(let key in object){
                    node.style[key] = object[key]
                }

            }
        }
    },
    class:{
        add(node,className){ //添加class
            node.classList.add(className)
        },
        remove(node,className){ //删除class
            node.classList.remove(className)
        },
        has(node,className){ //查看是否有class
            return  node.classList.contains(className)
        }
    },
    on(node,eventName,fn){ //添加事件
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){//删除事件
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){ //获取元素标签 //第二个参数
        return (scope||document).querySelectorAll(selector)
    },
    parent(node){ //找父节点
        return node.parentNode
    },
    children(node){ //找子节点
        return node.children
    },
    siblings(node){ //找兄弟节点
       return Array.from(node.parentNode.children).filter(n=>n!==node)
    },
    next(node){ //找下一个节点
        let x= node.nextSibling
        while(x&&x.nodeType ===3){
            x=x.nextSibling
        }
        return x
    },
    previous(node){ //找上一个节点
        let x= node.previousSibling
        while(x&&x.nodeType ===3){
            x=x.previousSibling
        }
        return x
    },
    each(nodeList,fn){ //遍历节点
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){ //获取在家族中排行第几
        const list =dom.children(node.parentNode)
        let i
        for( i =0;i<list.length;i++){
            if(list[i]===node){
                break
            }

        }
        return i
    }


};
