import { TreeBranch } from "@/types";
import generateId from "./generateId";

type Options = {
  value: string;
  main?: boolean;
  children?: TreeBranch[];
}

function createBranch({ main, value, children }: Options): TreeBranch {
  return {
    value: value,
    main: !!main,
    id: generateId(),
    children: children || [],
  }
}

export default createBranch;