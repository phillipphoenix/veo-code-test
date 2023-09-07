import { FC } from "react";
import TreeNode from "./tree-node";
import TreeNodeContainer from "./tree-node-container";

type TreeProps = {};

const Tree: FC<TreeProps> = ({}) => {
  return (
    <div>
      <TreeNodeContainer
        node={<TreeNode />}
        childNodes={[
          <TreeNodeContainer
            key={1}
            node={<TreeNode />}
            childNodes={[<TreeNode key={1} />, <TreeNode key={2} />]}
          />,
          <TreeNodeContainer
            key={1}
            node={<TreeNode />}
            childNodes={[
              <TreeNode key={1} />,
              <TreeNode key={2} />,
              <TreeNode key={3} />,
            ]}
          />,
        ]}
      />
    </div>
  );
};

export default Tree;
