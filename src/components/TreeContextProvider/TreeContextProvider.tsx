import TreeContext from '@/lib/context/treeContext';
import createNode from "@/lib/helpers/createNode";
import getNewTree from "@/lib/helpers/getNewTree";
import { TreeNode, TreeNodeInit } from "@/types";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

function TreeContextProvider(props: Props) {
  const [tree, setTree] = useState(createNode({ value: 'Categories', isMain: true }));

  function addNode(parent: TreeNode) {
    setTree(
      getNewTree(tree, (node) => {
        if (node.id === parent.id) {
          node.children = [...(node.children || [])];
          node.children.push(
            createNode({
              value: TreeNodeInit.value,
            })
          );
        }
      })
    )
  }

  function deleteNode(target: TreeNode) {
    setTree(
      getNewTree(tree, (node) => {
        node.children?.forEach((child, idx) => {
          if(child.id === target.id) {
            node.children?.splice(idx, 1);
          }
        })
      })
    );
  }

  function editNode(target: TreeNode, newValue: string) {
    setTree(
      getNewTree(tree, (node) => {
        if (target.id === node.id) {
          node.title = newValue;
        }
      })
    );
  }

  return (
    <TreeContext.Provider value={{ tree, addNode, deleteNode, editNode }}>
        {props.children}
    </TreeContext.Provider>
  );
}

export default TreeContextProvider;