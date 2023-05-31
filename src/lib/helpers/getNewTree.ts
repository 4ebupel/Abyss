import { TreeBranch } from "@/types";
import traverseTree from "./traverseTree";

function getNewTree(tree: TreeBranch, callback: (branch: TreeBranch) => void) {
  const res = {...tree};

  traverseTree(res, callback);

  return res;
}

export default getNewTree;