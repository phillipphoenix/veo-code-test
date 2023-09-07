import { FC } from "react";

type TreeNodeContainerProps = {
  node: React.ReactNode;
  childNodes?: React.ReactNode[];
};

const TreeNodeContainer: FC<TreeNodeContainerProps> = ({
  node,
  childNodes,
}) => {
  return (
    <div className="flex flex-col gap-10 flex-1 px-6">
      <div className="flex justify-center">{node}</div>
      {childNodes && childNodes.length > 0 && (
        <div className="flex gap-2 justify-around">
          {childNodes.map((childNode, idx) => (
            <TreeNodeContainer key={idx} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeContainer;
