import { Employee } from "@/types/employee";
import { FC } from "react";

type TreeNodeContentProps = {
  nodeData: Employee;
};

const TreeNodeContent: FC<TreeNodeContentProps> = ({ nodeData }) => {
  return (
    <div className="card w-44 bg-base-300 shadow-xl">
      <figure>
        <img src={nodeData.avatar} alt="avatar" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {nodeData.firstName} {nodeData.lastName}
        </h2>
        <div className="mb-2">
          <div>{nodeData.email}</div>
        </div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">{nodeData.role}</div>
        </div>
      </div>
    </div>
  );
};

export default TreeNodeContent;
