"use client";

import { FC } from "react";
import { useNode } from "@/hooks/use-node";
import TreeNodeLazy from "./tree-node-lazy";

type TreeProps = {};

const TreeLazy: FC<TreeProps> = ({}) => {
  const { state, nodes } = useNode({ parentNodeId: undefined });

  return (
    <div>
      {state === "loading" && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {state === "error" && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      )}
      {state === "ok" && nodes.length >= 1 && <TreeNodeLazy node={nodes[0]} />}
    </div>
  );
};

export default TreeLazy;
