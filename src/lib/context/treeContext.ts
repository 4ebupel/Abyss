import { TreeNode } from "@/types"
import { createContext } from "react";

type TreeContext = {
  tree: TreeNode;
  addNode: (parent: TreeNode) => void;
  deleteNode: (target: TreeNode) => void;
  editNode: (target: TreeNode, newTitle: string) => void;
};

const treeContext = createContext<TreeContext>({} as TreeContext);

export default treeContext;