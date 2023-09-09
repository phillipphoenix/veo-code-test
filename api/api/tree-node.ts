import { cors } from "hono/cors";
import { createNode, getNodes, updateNodeParent } from "../models/tree-node";
import { Hono } from "hono";
import { TreeNode } from "../types/tree-node";

const nodesApi = new Hono();
nodesApi.use("/*", cors());

// Get all nodes without parents (root nodes).
nodesApi.get("/", (c) => {
  const nodes = getNodes({});
  return c.json({ ok: true, nodes });
});

// Get all nodes with a specific parent.
nodesApi.get("/:parentId", (c) => {
  const parentId = c.req.param("parentId");
  const nodes = getNodes({ parentId });
  return c.json({ ok: true, nodes });
});

// Create a new node.
nodesApi.post("/", async (c) => {
  const node = await c.req.json<TreeNode>();
  const ok = createNode({ ...node });
  return c.json({ ok });
});

// Update a parent of a node.
nodesApi.patch("/:id/change-parent/:parentId", async (c) => {
  const id = c.req.param("id");
  const parentId = c.req.param("parentId");
  const ok = updateNodeParent({ id, parentId });
  return c.json({ ok });
});

export default nodesApi;
