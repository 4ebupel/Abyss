import treeContext from "@/lib/context/treeContext";
import { TreeNode, TreeNodeInit } from "@/types"
import { useContext, useEffect, useState } from "react";

import styles from './Node.module.scss';
import NodeButtons from "../NodeButtons/NodeButtons";

type Props = {
  node: TreeNode;
};

export default function Node(props: Props) {
  const { editNode } = useContext(treeContext);
  const [title, setTitle] = useState(props.node.title);
  const [isEdit, setIsEdit] = useState(true);

  const children = () => {
    if (props.node.children?.length) {
      return (
        <ul>
          {props.node.children.map((child) => {
            return <Node node={child} key={child.id} />
          })}
        </ul>
      );
    }
    return null;
  };

  const nodeContent = () => {
    if (isEdit) {
      return (
        <input 
          type="text" 
          className={styles['node__content-input']}
          value={title}
          readOnly={!isEdit}
          onChange={(event) => setTitle(event.target.value)}
        />
      );
    }

    return <span className={styles['node__content-value']}>{title}</span>
  };

  function onSaveHandler() {
    setIsEdit(false);
    editNode(props.node, title);
  }

  function onUnsaveHandler() {
    setTitle(TreeNodeInit.value);
    setIsEdit(false);
  }

  function onEditHandler() {
    setIsEdit(true);
  }

  useEffect(() => {
    if (props.node.isMain) {
      editNode(props.node, title);
    }
  }, [title]);

  return (
    <li
      className={`${styles['node']} ${props.node.isMain && styles['node--main']}`}
    >
      <div
        className={`${styles['node__content']} ${
          isEdit && styles['node__content--edit']
        }`}
      >
        {nodeContent()}
        <NodeButtons 
          isEdit={isEdit}
          node={props.node}
          onSave={onSaveHandler}
          onUnsave={onUnsaveHandler}
          onEdit={onEditHandler}
        />
      </div>
      {children()}
    </li>
  )
}