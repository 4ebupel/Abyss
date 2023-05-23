import { TreeNode } from "@/types";

function traverseTree(node: TreeNode, callback: (node: TreeNode) => void) {
  callback(node);

  node.children?.forEach((child) => {
    traverseTree(child, callback);
  });
}

export default traverseTree;