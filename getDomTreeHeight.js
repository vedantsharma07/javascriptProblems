// Get the Root element, and do simple Level Order Traversal
const root = document.querySelector('div');
console.log(root);

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // your code here 
  if(tree === null) return 0;
  let queue = [];
  queue.push(tree);
  queue.push(null);
  let count=1;
  while(queue.length > 0) {
    let currentNode = queue.shift();
    if(currentNode !== null) {
      if(currentNode.children.length > 0) {
        queue.push(...currentNode.children);
      }
    } else {
      if(queue.length !== 0) {
        count++;
        queue.push(null);
      }
    }
  }
  return count;        
}

const result = getHeight(root);
console.log(result);
