//v_node：要插入的节点，

//注意：这是一个简化版的操作dom元素的函数，其中，虚拟dom的text和children属性不可共存(因为都是第三个属性)
export default function createElement (v_node) {
  //1. 根据虚拟节点的选择器为其创建真实dom节点
  const nodeDom = document.createElement (v_node.sel)
  //2.判断虚拟节点的第三个属性是文本还是数组。数组则需要递归调用
  if (v_node.text && (v_node.children == undefined || v_node.children.length === 0)) {//文本节点
    nodeDom.innerText = v_node.text
    
  } else if (Array.isArray (v_node.children) && v_node.children.length > 0) { //是数组
    for (let i = 0; i < v_node.children.length; i++) {
      const aa = createElement(v_node.children[i])
      nodeDom.appendChild (aa)
    }
  }
  v_node.elm = nodeDom
  return v_node.elm
}