import { TreeBranch } from "@/types"
import { createContext } from "react";

type TreeContext = {
  tree: TreeBranch;
  addBranch: (parent: TreeBranch) => void;
  deleteBranch: (target: TreeBranch) => void;
  editBranch: (target: TreeBranch, newTitle: string) => void;
};

const treeContext = createContext<TreeContext>({} as TreeContext);

export default treeContext;