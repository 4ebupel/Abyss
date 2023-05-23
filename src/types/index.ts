export type TreeNode = {
  title: string;
  id: string;
  isMain: boolean;
  children?: TreeNode[];
};

export type Scale = {
  scale: number;
  label: string;
}

export enum TreeNodeInit {
  value = 'New Category'
}