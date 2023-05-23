import { TreeNode } from "@/types";
import traverseTree from "./traverseTree";

function getNewTree(tree: TreeNode, callback: (node: TreeNode) => void) {
  const res = {...tree};

  traverseTree(res, callback);

  return res;
}

export default getNewTree;