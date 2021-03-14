import { VNode } from './vnode.js'
import createElement from './createElement.js'

function dispatch (oldVNode, newVNode) {
  if (oldVNode.sel == '' || oldVNode.sel == undefined) {
    //不是虚拟节点，将其转换为虚拟节点
    const sel = oldVNode.tagName.toLowerCase()
    oldVNode = VNode (sel, {}, undefined, undefined, oldVNode)
  } 
  if (oldVNode.key == newVNode.key && oldVNode.sel == newVNode.sel) { //是同一个节点，精细化比较
    // 对比新旧节点是否为同一个对象
    if (oldVNode === newVNode) return;
    //新节点是否有text属性
    if (newVNode.text && (newVNode.children == undefined || newVNode.children.length === 0)) {
      //判断新旧节点的text属性是否相同
      if (newVNode.text !== oldVNode.text) {
        //新节点的text属性赋值给旧节点的innerText
        oldVNode.elm.innerText = newVNode.text
      }
    } else {//新节点没有text，有children属性
      //旧节点是否children属性
      if (Array.isArray(oldVNode.children) && oldVNode.children.length > 0) {
        //最难的一块
        console.log('旧节点有children属性');



      } else { //旧节点是text，将新节点的children赋值给旧节点
        //1. 将旧节点的innerText变为空
        oldVNode.elm.innerText = ''
        //2. 遍历新节点的children，将新节点的children的属性插入到旧节点中
        for (let i = 0; i < newVNode.children.length; i++) {
          const dom = createElement (newVNode.children[i])
          oldVNode.elm.appendChild (dom)
        }
      }
    }
  } else { //不是同一个节点，暴力拆除旧的，装上新的
    const newVNodeDOM = createElement (newVNode)
    if (oldVNode.elm && newVNodeDOM) {
      oldVNode.elm.parentNode.insertBefore(newVNodeDOM, oldVNode.elm)
      oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }
  }
}

export default dispatch