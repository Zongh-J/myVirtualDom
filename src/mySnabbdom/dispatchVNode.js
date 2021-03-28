
//新旧节点为同一个的时候的精细化比较
import createElement from './createElement.js'
import compare from './compare.js'

export default function (oldVNode, newVNode) {
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
      //最难的一块(新旧节点都有children属性)
      console.log('新旧节点都有children属性');
      compare (oldVNode.elm, oldVNode.children, newVNode.children)
    } else { //旧节点是text，将新节点的children赋值给旧节点
      //1. 将旧节点的innerText变为空
      oldVNode.elm.innerText = ''
      //2. 遍历新节点的children，将新节点的children的属性插入到旧节点中
      for (let i = 0; i < newVNode.children.length; i++) {
        const dom = createElement(newVNode.children[i])
        oldVNode.elm.appendChild(dom)
      }
    }
  }
}