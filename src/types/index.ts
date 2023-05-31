export type TreeBranch = {
  value: string;
  id: string;
  main: boolean;
  children?: TreeBranch[];
};

export type Scale = {
  scale: number;
  label: string;
}

export enum TreeBranchDefault {
  value = 'New Category'
}