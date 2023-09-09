"use client";

import { TreeNodeData } from "@/types/tree-node-data";
import { useEffect, useState } from "react";

type FetchState = "loading" | "ok" | "error";

type UseNodeType = {
  state: FetchState;
  nodes: TreeNodeData[];
  refetch: () => void;
};

type UseNodeInputType = { parentNodeId?: string };

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useNode = ({ parentNodeId }: UseNodeInputType): UseNodeType => {
  const [nodes, setNodes] = useState<TreeNodeData[]>([]);
  const [state, setState] = useState<FetchState>("loading");

  const fetchNode = async () => {
    setState("loading");
    setNodes([]);
    try {
      const url = parentNodeId
        ? `${apiBaseUrl}/nodes/${parentNodeId}`
        : `${apiBaseUrl}/nodes`;
      const response = await fetch(url);
      const json = await response.json();
      if (!json.ok) {
        throw new Error("Error fetching node.");
      }
      const data = json.nodes;

      setNodes(data);
      setState("ok");
    } catch (error) {
      setState("error");
    }
  };

  useEffect(() => {
    fetchNode();
  }, []);

  return { state, nodes, refetch: fetchNode };
};
