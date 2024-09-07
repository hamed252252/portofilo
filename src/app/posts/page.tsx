import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import React from "react";

async function PostPage() {
  const posts = await getPosts();
  return (
    <div className="container pt-48">
      <Posts posts={posts} />
    </div>
  );
}

export default PostPage;
