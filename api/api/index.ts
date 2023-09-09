import { Hono } from "hono";
import { handle } from "hono/vercel";
import { prettyJSON } from "hono/pretty-json";
import { Bindings } from "hono/dist/types/types";
import nodesApi from "./tree-node";

export const config = {
  runtime: "edge",
};

const app = new Hono();
app.get("/", (c) => c.text("Pretty Blog API"));
app.use("*", prettyJSON());
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

const api = new Hono<{ Bindings: Bindings }>();

api.route("/nodes", nodesApi);

app.route("/api", api);

export default handle(app);
