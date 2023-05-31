import TreeContext from '@/lib/context/treeContext';
import createBranch from "@/lib/helpers/createBranch";
import getNewTree from "@/lib/helpers/getNewTree";
import { TreeBranch, TreeBranchDefault } from "@/types";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

function TreeContextProvider({ children }: Props) {
  const [tree, setTree] = useState(createBranch({ value: 'Categories', main: true }));

  function addBranch(parent: TreeBranch) {
    setTree(
      getNewTree(tree, (branch) => {
        if (branch.id === parent.id) {
          branch.children = [...(branch.children || [])];
          branch.children.push(
            createBranch({
              value: TreeBranchDefault.value,
            })
          );
        }
      })
    )
  }

  function deleteBranch(target: TreeBranch) {
    setTree(
      getNewTree(tree, (branch) => {
        branch.children?.forEach((child, idx) => {
          if(child.id === target.id) {
            branch.children?.splice(idx, 1);
          }
        })
      })
    );
  }

  function editBranch(target: TreeBranch, newValue: string) {
    setTree(
      getNewTree(tree, (branch) => {
        if (target.id === branch.id) {
          branch.value = newValue;
        }
      })
    );
  }

  return (
    <TreeContext.Provider value={{ tree, addBranch, deleteBranch, editBranch }}>
        {children}
    </TreeContext.Provider>
  );
}

export default TreeContextProvider;