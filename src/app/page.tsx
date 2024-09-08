import Intro from "@/components/ui/intro";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import RecentPosts from "@/components/recent-posts";
export default function Home() {
  const content = `
  # This markdown Heading`;
  return (
    <section className="py-24">
      <div className="max-w-3x container">
        <h1 className="text-3xl font-bold"> Portofilo</h1>
      </div>
      <div className="container">
        <Intro />
      </div>
      <div className="container">
        <RecentPosts />
      </div>
    </section>
  );
}
