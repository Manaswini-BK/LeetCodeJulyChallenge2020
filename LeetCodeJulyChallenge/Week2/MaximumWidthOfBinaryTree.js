/* Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:

Input: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input: 

          1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input: 

          1
         / \
        3   2 
       /        
      5      

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let totalWidth = 0;
    let currentDepth = 0;
    let currentLeftPosition = 0;
    let queue = [];
    queue.push({node: root, pos: 0, depth: 0});
    while(queue.length){
        let thisNode = queue.shift();
        if(thisNode.node){
            queue.push({
                node: thisNode.node.left,
                depth: thisNode.depth + 1,
                pos: thisNode.pos * 2
            });
            queue.push({
                node: thisNode.node.right,
                depth: thisNode.depth + 1,
                pos: thisNode.pos * 2 + 1
            })
            if (currentDepth !== thisNode.depth){
                currentDepth = thisNode.depth;
                currentLeftPosition = thisNode.pos;
            }
            totalWidth = Math.max(thisNode.pos - currentLeftPosition + 1, totalWidth);
            if(thisNode.pos === Infinity){
                // in the edge case of extremely long single child trees, just recognize it, finish the loop and return 1
                queue = [];
                totalWidth = 1;
            }
        }
    }
    return totalWidth
};