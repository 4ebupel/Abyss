import { TNode } from "@/types"
import { createContext } from "react";

type TreeContext = {
  tree: TNode;
  addNode: (parent: TNode) => void;
  deleteNode: (target: TNode) => void;
  editNode: (target: TNode, newTitle: string) => void;
};

const treeContext = createContext<TreeContext>({} as TreeContext);

export default treeContext;