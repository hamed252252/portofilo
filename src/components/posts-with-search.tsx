"use client";
import { useState } from "react";
import { PostmetaData } from "@/lib/posts";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import Posts from "./posts";
function PostsWithSearch({ posts }: { posts: PostmetaData[] }) {
  const [query, setQuery] = useState("");
  const filtred = posts.filter((post) =>
    post.title?.toLowerCase().includes(query.toLowerCase()),
  );
  const isFilterd = query.length > 0;
  function resetfilter() {
    setQuery("");
  }
  return (
    <>
      <div>
        <div className="mb-12 flex items-center gap-3">
          <Input
            type="text"
            placeholder="Search Posts ..."
            className="h-9 w-full sm:w-1/2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isFilterd && (
            <Button
              size={"sm"}
              variant={"secondary"}
              onClick={resetfilter}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <Posts posts={filtred} />
    </>
  );
}

export default PostsWithSearch;
