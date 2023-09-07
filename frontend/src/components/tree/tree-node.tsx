import { FC } from "react";

type TreeNodeProps = {};

const TreeNode: FC<TreeNodeProps> = ({}) => {
  return (
    <div className="card w-44 bg-base-300 shadow-xl">
      <figure>
        <img src="https://i.pravatar.cc/500" alt="avatar" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">NAME HERE</h2>
        <div>EMAIL HERE</div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">CEO</div>
        </div>
      </div>
    </div>
  );
};

export default TreeNode;
