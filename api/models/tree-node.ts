import { createMockData } from "../data/tree-node-mock-data";
import { TreeNode } from "../types/tree-node";

const nodes = createMockData();

export const createNode = ({ id, parentId }: TreeNode): TreeNode => {
  const node = { id, parentId } as TreeNode;
  nodes.push(node);
  return node;
};

export const getNodes = ({ parentId }: { parentId?: string }): TreeNode[] => {
  return nodes.filter((node) => node.parentId === parentId);
};

export const getNode = ({ id }: { id: string }): TreeNode | null => {
  return nodes.find((node) => node.id === id) ?? null;
};

export const updateNodeParent = ({
  id,
  parentId,
}: {
  id: string;
  parentId: string;
}): boolean => {
  const node = nodes.find((node) => node.id === id);

  if (!node) {
    return false;
  }

  node.parentId = parentId;
  return true;
};
