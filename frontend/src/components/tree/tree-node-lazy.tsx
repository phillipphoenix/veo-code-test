"use client";

import { TreeNodeData } from "@/types/tree-node-data";
import { FC } from "react";
import TreeNodeContent from "./tree-node-content";
import { useNode } from "@/hooks/use-node";

type TreeNodeLazyProps = {
  node: TreeNodeData;
};

const TreeNodeLazy: FC<TreeNodeLazyProps> = ({ node }) => {
  const { state, nodes } = useNode({ parentNodeId: node.id });

  return (
    <>
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
      {state === "ok" && (
        <div className="flex flex-col gap-10 flex-1 px-6">
          <div className="flex justify-center">
            <TreeNodeContent nodeData={node.data} />
          </div>
          {nodes && nodes.length > 0 && (
            <div className="flex gap-2 justify-around">
              {nodes.map((childNode) => (
                <TreeNodeLazy key={childNode.id} node={childNode} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TreeNodeLazy;
