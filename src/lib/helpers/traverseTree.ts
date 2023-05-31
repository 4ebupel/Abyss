import { TreeBranch } from "@/types";

function traverseTree(branch: TreeBranch, callback: (branch: TreeBranch) => void) {
  callback(branch);

  branch.children?.forEach((child) => {
    traverseTree(child, callback);
  });
}

export default traverseTree;