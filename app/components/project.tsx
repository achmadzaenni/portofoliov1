import {
  IconBrandPython,
  IconBrandLaravel,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandBootstrap,
  IconBrandMysql,
} from "@tabler/icons-react";

import { DiCodeigniter, DiJqueryLogo, DiPostgresql } from "react-icons/di";

const projects = [
  {
    name: "ConvertPDF",
    description:
      "Aplikasi untuk membantu mengolah dan mengonversi dokumen PDF secara lebih praktis dengan proses yang terstruktur.",
    tag: "Document Processing",
    technologies: [
      {
        name: "Python",
        icon: IconBrandPython,
        color: "text-[#3776AB]",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        color: "text-[#F7DF1E]",
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
        color: "text-[#4169E1]",
      },
      {
        name: "Jquery",
        icon: DiJqueryLogo,
        color: "text-[#0769AD]",
      },
    ],
  },
  {
    name: "OCR-App",
    description:
      "Aplikasi OCR untuk mengenali dan mengekstrak teks dari gambar atau dokumen sehingga informasi dapat diproses secara digital.",
    tag: "OCR & AI",
    technologies: [
      {
        name: "Python",
        icon: IconBrandPython,
        color: "text-[#3776AB]",
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
        color: "text-[#4169E1]",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        color: "text-[#4479A1]",
      },
    ],
  },
  {
    name: "Web Kos",
    description:
      "Aplikasi berbasis web untuk membantu pengelolaan informasi kos, data kamar, serta kebutuhan administrasi secara digital.",
    tag: "Web Application",
    technologies: [
      {
        name: "Html",
        icon: IconBrandHtml5,
        color: "text-[#FF2D20]",
      },
      {
        name: "MySQL",
        icon: IconBrandMysql,
        color: "text-[#4479A1]",
      },
      {
        name: "Bootstrap",
        icon: IconBrandBootstrap,
        color: "text-[#4479A1]",
      },
    ],
  },
  {
    name: "KMS-LLM",
    description:
      "Project berbasis AI yang memanfaatkan Large Language Model untuk membantu pengelolaan dan pencarian informasi dalam Knowledge Management System.",
    tag: "AI & LLM",
    technologies: [
      {
        name: "CodeIgniter",
        icon: DiCodeigniter,
        color: "text-[#EF4223]",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        color: "text-[#4479A1]",
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
        color: "text-[#4169E1]",
      },
    ],
  },
  {
    name: "FingerPay",
    description:
      "Project yang menggabungkan teknologi pengenalan sidik jari dengan sistem pembayaran untuk mendukung proses autentikasi dan transaksi.",
    tag: "Biometric System",
    technologies: [
      {
        name: "Laravel",
        icon: IconBrandLaravel,
        color: "text-[#FF2D20]",
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
        color: "text-[#4169E1]",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        color: "text-[#4479A1]",
      },
    ],
  },
  {
    name: "Image-to-Text",
    description:
      "Aplikasi untuk mengubah teks yang terdapat pada gambar menjadi teks digital yang dapat dibaca dan diproses kembali.",
      tag:"OCR & AI",
    technologies: [
      {
        name: "Python",
        icon: IconBrandPython,
        color: "text-[#3776AB]",
      },
      {
        name: "TailwindCSS",
        icon: IconBrandTailwind,
        color: "text-[#4479A1]",
      },
    ],
  },
];

export default function ProjectSection() {
  return (
    <section id="project" className="min-h-screen scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Project
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            Beberapa project yang pernah saya kerjakan sebagai bagian dari
            proses belajar dan pengembangan kemampuan di bidang software
            development, data, dan artificial intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex h-full flex-col rounded-2xl border-2 border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-3">
                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <div
                        key={technology.name}
                        title={technology.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition-all duration-300 group-hover:bg-zinc-50 dark:bg-white/10 dark:group-hover:bg-white/15"
                      >
                        <Icon
                          className={`h-5 w-5 ${technology.color}`}
                          stroke="1.8"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
