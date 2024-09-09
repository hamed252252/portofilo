"use server";
import path from "path";
import fs from "fs/promises"; // Using fs/promises for async file operations
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

async function readFileContent(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, { encoding: "utf-8" });
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return null;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  console.log("Looking for file at:", filePath);

  const fileContent = await readFileContent(filePath);
  if (!fileContent) return null;

  const { data, content } = matter(fileContent);
  return { metadata: { ...data, slug }, content };
}

async function getAllFiles(): Promise<string[]> {
  try {
    return await fs.readdir(rootDirectory);
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

export async function getPosts(limit?: number): Promise<PostmetaData[]> {
  const files = await getAllFiles();

  const posts = await Promise.all(files.map((file) => getPostMetadata(file)));

  posts.sort(
    (a, b) =>
      new Date(b.publishedAt ?? "").getTime() -
      new Date(a.publishedAt ?? "").getTime(),
  );

  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostMetadata(filepath: string): Promise<PostmetaData> {
  const slug = filepath.replace(/\.mdx?$/, "");
  const filePath = path.join(rootDirectory, filepath);

  const fileContent = await readFileContent(filePath);
  if (!fileContent) return { slug };

  const { data } = matter(fileContent);
  return { ...data, slug };
}
