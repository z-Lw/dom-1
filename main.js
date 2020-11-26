const div = dom.create('<div>newDiv</div>');
const div2 = dom.create('<div>newDiv2</div>');
const div3 = dom.create('<span>儿子</span>');
const div4 = dom.create('<div>爸爸</div>');
console.log(div)

dom.after(test,div);
dom.before(test,div2)
dom.append(test,div3)
dom.wrap(test,div4)
const div5=dom.remove(div2)
console.log(div5)
const nodes=dom.empty(window.empty)

console.log('nodes:')
console.log(nodes)
console.log('----')
dom.attr(test,'title','Hi,I am XXX')
const title=dom.attr(test,'title')
console.log(`title：${title}`)

dom.text(test,'这是新内容')
console.log(dom.text(test))

dom.style(test,{border:'1px solid red',color:'yellow'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid black')


dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'red')
console.log(dom.class.has(test,'blue'))

const fn=()=>{
    console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const testDiv =dom.find('#test')[0]
const test2Div =dom.find('#test2')[0]
console.log(testDiv)
console.log(dom.find('.red',test2Div)[0])

console.log(dom.parent(test))
console.log(dom.children(dom.find('#siblings')[0]))

console.log('---')
console.log(dom.find('#s2')[0])
console.log(dom.siblings(dom.find('#s2')[0]))
console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))

const t =dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

console.log(dom.index(s2))


