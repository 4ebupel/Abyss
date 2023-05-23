import { TreeNode } from "@/types";
import generateId from "./generateId";

type Options = {
  value: string;
  isMain?: boolean;
  children?: TreeNode[];
}

function createNode(options: Options): TreeNode {
  const { isMain, value, children } = options;

  return {
    title: value,
    isMain: !!isMain,
    id: generateId(),
    children: children || [],
  }
}

export default createNode;