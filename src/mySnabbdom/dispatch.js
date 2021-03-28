import { VNode } from './vnode.js'
import isSame from './isSame.js'
import createElement from './createElement.js'
import dispatchVNode from './dispatchVNode.js'

function dispatch (oldVNode, newVNode) {
  if (oldVNode.sel == '' || oldVNode.sel == undefined) {
    //不是虚拟节点，将其转换为虚拟节点
    const sel = oldVNode.tagName.toLowerCase()
    oldVNode = VNode (sel, {}, undefined, undefined, oldVNode)
  } 
  if (isSame(oldVNode, newVNode)) { //是同一个节点，精细化比较
    dispatchVNode (oldVNode, newVNode)
  } else { //不是同一个节点，暴力拆除旧的，装上新的
    const newVNodeDOM = createElement (newVNode)
    if (oldVNode.elm && newVNodeDOM) {
      oldVNode.elm.parentNode.insertBefore(newVNodeDOM, oldVNode.elm)
      oldVNode.elm.parentNode.removeChild(oldVNode.elm)
    }
  }
}

export default dispatch