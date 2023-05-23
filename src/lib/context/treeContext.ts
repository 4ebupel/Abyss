import { TreeNode } from "@/types"
import { createContext } from "vm";

type TreeContext = {
  tree: TreeNode;
  addNode: (parent: TreeNode) => void;
  deleteNode: (target: TreeNode) => void;
  editNode: (target: TreeNode) => void;
};

const treeContext = createContext({} as TreeContext);

export default treeContext;