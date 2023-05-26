import { TNode } from "@/types";
import generateId from "./generateId";

type Options = {
  value: string;
  main?: boolean;
  children?: TNode[];
}

function createNode(options: Options): TNode {
  const { main, value, children } = options;

  return {
    value: value,
    main: !!main,
    id: generateId(),
    children: children || [],
  }
}

export default createNode;