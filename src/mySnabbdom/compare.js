import dispatch from './dispatch.js'
import isSame from './isSame.js'

//处理新旧节点都有children并且都为数组的情况

/* 
  parentNode: 要插入的节点
  oldCh：要处理的旧节点
  newCh：要处理的新节点
*/
function compare (parentNode, oldCh, newCh) { 
  //四个指针
  let oldStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let newStartIdx = 0
  let newEndIdx = newCh.length - 1 
  
  //四个指针对应的节点
  let oldStartNode = oldCh[oldStartIdx]
  let oldEndNode = oldCh[oldEndIdx]
  let newStartNode = newCh[newStartIdx]
  let newEndNode = newCh[newEndIdx]
  console.log(oldEndNode);
  console.log(newEndNode);

  //开始循环遍历
  while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {
    console.log('☆');
    //开始判断
    if (isSame(newStartNode, oldStartNode)) {  //新前旧前对比
      // 对比成功, 开始比对内部属性，两个前指针下移
      dispatch (oldStartNode, newStartNode)
      newStartIdx ++ 
      oldStartIdx ++
      newStartNode = newCh[newStartIdx]
      oldStartNode = oldCh[oldStartIdx]
    } else if (isSame (newEndNode, oldEndNode)) { //新后旧后对比
      // 比对成功，开始比对内部属性，两个指针上移
      dispatch (oldEndNode, newEndNode)
      oldEndIdx --
      newEndIdx --
      oldEndNode = oldCh[oldEndIdx]
      newEndNode = newCh[newEndIdx]
    } else if (isSame (newEndIdx, oldStartIdx)) { 
      //新后旧前对比，满足此条件，说明是移动节点，需要将新后节点移动至旧后节点的后边，同时将该虚拟节点改为undefined
      //新后指针上移，旧前指针下移
    } else if (isSame (newStartIdx, oldEndIdx)) {  
      //新前旧后对比，满足此条件，说明是移动节点。需要将新前节点移动至旧前节点的前边。同时将该虚拟节点改为undefined
      //新前指针下移，旧后指针上移

    } else {  //四项都没比对成功需要用循环来寻找

    }
  }

  // if (oldEndIdx > oldStartIdx) { //旧后大于旧前说明是旧节点先循环完毕，做新增的操作
  //   console.log('新增');
  // } else if (newEndIdx > newEndIdx) { //新后大于新前说明是新节点先循环完毕，做删除的操作
  //   console.log('删除');
  // }
}

export default compare