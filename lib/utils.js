/*
  this file contains functions that operate on DOM and eliminate elements from specific websites
*/

export function removeElement(selector){
  let e = document.querySelector(selector)
  if(e) e.remove()
}
export function removeElements(...selectors){
  selectors.forEach(selector=>{
		removeElement(selector)
  })
}

export function removeAllElements(selector){
  document.querySelectorAll(selector).forEach(node=>node.remove())
}


