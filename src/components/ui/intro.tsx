import React from "react";
import authorImage from "@/components/ui/autorImage.jpg";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="flex items-center justify-between p-4">
      <div className="flex-1">
        <h1 className="mb-2 text-xl font-semibold text-primary">
          Hey, I&#39;m Hamed.
        </h1>
        <div className="mx-auto max-w-4xl rounded-lg p-6 text-slate-300 shadow-md">
          <h2 className="mb-4 text-3xl font-bold text-primary">Portfolio</h2>
          <p className="text-pr mb-6 text-primary">
            This project is a personal portfolio website built using{" "}
            <span className="font-semibold text-blue-600">Next.js</span>,{" "}
            <span className="font-semibold text-teal-600">Tailwind CSS</span>,
            and{" "}
            <span className="font-semibold text-purple-600">TypeScript</span>.
            It showcases my skills, projects, and experiences in a clean,
            responsive design.
          </p>
          <ul className="mb-6 list-inside list-disc space-y-2">
            <li className="text-primary">
              <span className="font-semibold text-blue-600">Next.js</span>:
              Utilized for its powerful features like server-side rendering
              (SSR) and static site generation (SSG), which enhance performance
              and SEO.
            </li>
            <li className="text-primary">
              <span className="font-semibold text-teal-600">Tailwind CSS</span>:
              Employed to create a modern and responsive UI with a utility-first
              approach, allowing for rapid development and easy customization.
            </li>
            <li className="text-primary">
              <span className="font-semibold text-purple-600">TypeScript</span>:
              Integrated to ensure type safety and maintainability of the
              codebase, reducing errors and improving developer productivity.
            </li>
          </ul>
          <p className="text-pr text-primary">
            This portfolio not only highlights my technical skills but also
            demonstrates my ability to create aesthetically pleasing and highly
            functional web applications.
          </p>
        </div>
      </div>
      <div className="relative h-full w-1/3">
        <Image
          src={authorImage}
          className="rounded-lg"
          width={175}
          alt="Hamed Nazari"
          priority
        />
      </div>
    </section>
  );
};

export default Intro;
