import { TreeNode } from "../types/tree-node";

export const createMockData = () => nodes;

const nodes: TreeNode[] = [
  {
    id: "1",
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john@veo.dk",
      role: "CEO",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "2",
    parentId: "1",
    data: {
      firstName: "Betty",
      lastName: "Driver",
      email: "betty@veo.dk",
      role: "Manager",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "3",
    parentId: "1",
    data: {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@veo.dk",
      role: "Manager",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "4",
    parentId: "2",
    data: {
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie@veo.dk",
      role: "Designer",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "5",
    parentId: "2",
    data: {
      firstName: "David",
      lastName: "Wilson",
      email: "david@veo.dk",
      role: "Developer",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "6",
    parentId: "3",
    data: {
      firstName: "Eva",
      lastName: "Johnson",
      email: "eva@veo.dk",
      role: "Developer",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "7",
    parentId: "3",
    data: {
      firstName: "Frank",
      lastName: "Roberts",
      email: "frank@veo.dk",
      role: "Designer",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  {
    id: "8",
    parentId: "3",
    data: {
      firstName: "Peter",
      lastName: "Bobeina",
      email: "peter@veo.dk",
      role: "Intern",
      avatar: "https://i.pravatar.cc/500",
    },
  },
  // Add more nodes here as needed...
];
