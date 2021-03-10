import { VNode } from './vnode.js'
import createElement from './createElement.js'

function dispatch (oldVNode, newVNode) {
  if (oldVNode.sel == '' || oldVNode.sel == undefined) {
    //不是虚拟节点，将其转换为虚拟节点
    //sel, data, children, text, elm
    const sel = oldVNode.tagName.toLowerCase()
    oldVNode = VNode (sel, {}, undefined, undefined, oldVNode)
  } 

  if (oldVNode.key == newVNode.key && oldVNode.sel == newVNode.sel) {
    //是同一个节点，精细化比较
  } else {
    //不是同一个节点，暴力拆除旧的，装上新的
    createElement (newVNode, oldVNode.elm)
  }
}

export default dispatch