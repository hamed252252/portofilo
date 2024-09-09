import Posts from "@/components/posts";
import PostsWithSearch from "@/components/posts-with-search";
import { getPosts } from "@/lib/posts";
import React from "react";

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <div className="container pt-48">
      <PostsWithSearch posts={posts} />
    </div>
  );
}
