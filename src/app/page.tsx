import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
export default function Home() {
  return (
    <div className="h-96 bg-white p-10">
      <Editor />
    </div>
  );
}
