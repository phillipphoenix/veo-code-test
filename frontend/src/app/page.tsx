import TreeLazy from "@/components/tree/tree-lazy";

export default function Home() {
  return (
    <main className="m-4">
      <h1 className="text-5xl font-bold mb-2">Veo Company Structure</h1>
      <h2 className="text-4xl font-bold mb-2">The Hierarchy of Employees</h2>
      <p>
        lorem ipsum dolor sit amet and some more text that I need to test if
        this works.
      </p>
      <div className="my-10">
        <TreeLazy />
      </div>
    </main>
  );
}
