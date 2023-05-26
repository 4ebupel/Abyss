import { TNode } from "@/types";
import traverseTree from "./traverseTree";

function getNewTree(tree: TNode, callback: (node: TNode) => void) {
  const res = {...tree};

  traverseTree(res, callback);

  return res;
}

export default getNewTree;