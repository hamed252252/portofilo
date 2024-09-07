import MDXContent from "@/components/mdx-content";
import { getPostBySlug } from "@/lib/posts";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Ensure to import the formatDate function
// import { formatDate } from "@/lib/formatDate";

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return notFound(); // Terminate the function after calling notFound()
  }
  const { metadata, content } = post;
  const { title, image, author, publishedAt, summary } = metadata;
  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href={"/posts"}
          className="mb-8 inline-flex items-center gap-2 text-xl font-light"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Posts</span>
        </Link>
        {image && (
          <div className="relative mb-6 h-full w-96 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ""}
              className="object-cover"
              fill
            />
          </div>
        )}
        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">{author}/</p>
        </header>
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}

export default page;
