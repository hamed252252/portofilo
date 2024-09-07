import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type Post = {
  metadata: PostmetaData;
  content: string;
};
export type PostmetaData = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    console.log("Looking for file at:", filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}
export async function getPosts(limit?: number): Promise<PostmetaData[]> {
  const files = fs.readdirSync(rootDirectory);

  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export function getPostMetadata(filepath: string): PostmetaData {
  const slug = filepath.replace(/\.mdx?$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);

  return { ...data, slug };
}
