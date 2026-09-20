import {
  IconBrandPython,
  IconBrandLaravel,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandGithub,
  IconBrandGit,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandTailwind,
} from "@tabler/icons-react";

import { DiCodeigniter, DiJqueryLogo, DiPostgresql } from "react-icons/di";
import {
  SiPostman,
  SiGoogledocs,
  SiGooglecolab,
  SiLaragon,
  SiXampp,
  SiGooglebigquery,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: IconBrandPython,
    color: "text-[#3776AB]",
    hovercolor: "hover:border-[#3776AB]",
  },
  {
    name: "Laravel",
    icon: IconBrandLaravel,
    color: "text-[#FF2D20]",
    hovercolor: "hover:border-[#FF2D20]",
  },
  {
    name: "JavaScript",
    icon: IconBrandJavascript,
    color: "text-[#F7DF1E]",
    hovercolor: "hover:border-[#F7DF1E]",
  },
  {
    name: "Next.js",
    icon: IconBrandNextjs,
    color: "text-black dark:text-white",
    hovercolor: "hover:border-black",
  },
  {
    name: "React",
    icon: IconBrandReact,
    color: "text-[#61DAFB]",
    hovercolor: "hover:border-[#61DAFB]",
  },
  {
    name: "MySQL",
    icon: IconBrandMysql,
    color: "text-[#4479A1]",
    hovercolor: "hover:border-[#4479A1]",
  },
  {
    name: "PostgreSQL",
    icon: DiPostgresql,
    color: "text-[#4479A1]",
    hovercolor: "hover:border-[#4479A1]",
  },
  {
    name: "Jquery",
    icon: DiJqueryLogo,
    color: "text-[#4479A1]",
    hovercolor: "hover:border-[#4479A1]",
  },
  {
    name: "Node.js",
    icon: IconBrandNodejs,
    color: "text-[#339933]",
    hovercolor: "hover:border-[#339933]",
  },
  {
    name: "CodeIgniter",
    icon: DiCodeigniter,
    color: "text-[#EF4223]",
    hovercolor: "hover:border-[#EF4223]",
  },
  {
    name: "Laragon",
    icon: SiLaragon,
    color: "text-[#4479A1]",
    hovercolor: "hover:border-[#4479A1]",
  },
  {
    name: "Xampp",
    icon: SiXampp,
    color: "text-[#FB7A24]",
    hovercolor: "hover:border-[#FB7A24]",
  },
  {
    name: "Tailwind CSS",
    icon: IconBrandTailwind,
    color: "text-[#4479A1]",
    hovercolor: "hover:border-[#4479A1]",
  },
];

const tools = [
  {
    name: "Git",
    icon: IconBrandGit,
    color: "text-[#F05032]",
    hovercolor: "hover:border-[#F05032]",
  },
  {
    name: "GitHub",
    icon: IconBrandGithub,
    color: "text-black dark:text-white",
    hovercolor: "hover:border-black",
  },
  {
    name: "Docker",
    icon: IconBrandDocker,
    color: "text-[#2496ED]",
    hovercolor: "hover:border-[#2496ED]",
  },
  {
    name: "VS Code",
    icon: IconBrandVscode,
    color: "text-[#007ACC]",
    hovercolor: "hover:border-[#007ACC]",
  },
  {
    name: "Figma",
    icon: IconBrandFigma,
    color: "text-[#F24E1E]",
    hovercolor: "hover:border-[#F24E1E]",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-[#FF6C37]",
    hovercolor: "hover:border-[#FF6C37]",
  },
  {
    name: "Google Docs",
    icon: SiGoogledocs,
    color: "text-[#4285F4]",
    hovercolor: "hover:border-[#4285F4]",
  },
  {
    name: "Google Colab",
    icon: SiGooglecolab,
    color: "text-[#F9AB00]",
    hovercolor: "hover:border-[#F9AB00]",
  },
  {
    name: "Google BigQuery",
    icon: SiGooglebigquery,
    color: "text-[#669DF6]",
    hovercolor: "hover:border-[#669DF6]",
  },
];

export default function SkillSection() {
  return (
    <section id="skill" className="min-h-screen scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Skills & Tools
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            Beberapa teknologi dan tools yang saya gunakan dalam membangun
            aplikasi, mengolah data, dan mengembangkan solusi berbasis
            teknologi.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Skills
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className={`group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] ${skill.hovercolor}`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/10 ${skill.color}`}
                  >
                    <Icon className="h-6 w-6" stroke={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Tools
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.name}
                  className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/10 ${tool.color}`}
                  >
                    <Icon className="h-6 w-6" stroke={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
