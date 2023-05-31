import { TreeBranch } from "@/types";
import generateId from "./generateId";

type Options = {
  value: string;
  main?: boolean;
  children?: TreeBranch[];
}

function createBranch(options: Options): TreeBranch {
  const { main, value, children } = options;

  return {
    value: value,
    main: !!main,
    id: generateId(),
    children: children || [],
  }
}

export default createBranch;