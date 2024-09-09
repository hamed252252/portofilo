"use server";
import path from "path";
import fs from "fs/promises"; // Using fs/promises for async file operations
import matter from "gray-matter";

export type project = {
  metadata: projectmetaData;
  content: string;
};

export type projectmetaData = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
};

const rootDirectory = path.join(process.cwd(), "src", "content", "projects");

async function readFileContent(filePath: string): Promise<string | null> {
  try {
    return await fs.readFile(filePath, { encoding: "utf-8" });
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return null;
  }
}

export async function getprojectBySlug(slug: string): Promise<project | null> {
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

export async function getprojects(limit?: number): Promise<projectmetaData[]> {
  const files = await getAllFiles();

  const projects = await Promise.all(
    files.map((file) => getprojectMetadata(file)),
  );

  projects.sort(
    (a, b) =>
      new Date(b.publishedAt ?? "").getTime() -
      new Date(a.publishedAt ?? "").getTime(),
  );

  return limit ? projects.slice(0, limit) : projects;
}

export async function getprojectMetadata(
  filepath: string,
): Promise<projectmetaData> {
  const slug = filepath.replace(/\.mdx?$/, "");
  const filePath = path.join(rootDirectory, filepath);

  const fileContent = await readFileContent(filePath);
  if (!fileContent) return { slug };

  const { data } = matter(fileContent);
  return { ...data, slug };
}
