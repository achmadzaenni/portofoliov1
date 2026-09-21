"use client";
import { useTranslation } from "react-i18next";
export default function ExperienceSection() {
  const { t } = useTranslation();
  return (
    <section id="experience" className="min-h-screen scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            {t("experience.education.title")}
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            {t("experience.education.description")}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-16px)] w-px bg-zinc-200 dark:bg-white/10 sm:block" />

          <div className="space-y-10">
            <div className="relative flex gap-6">
              <div className="relative z-10 mt-1 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-500 dark:border-zinc-950 sm:flex" />

              <div className="group w-full rounded-2xl border-2 border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                      {t("experience.education.school")}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                      {t("experience.education.education")}
                    </h3>

                    <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-300">
                      {t("experience.education.educationmajor")}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col  items-center justify-between md:justify-center gap-2">
                    <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {t("experience.education.educationHeading")}
                    </div>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      {t("experience.education.educationYear")}
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-500 dark:text-zinc-400">
                  {t("experience.education.educationDescription")}
                </p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="relative z-10 mt-1 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-500 dark:border-zinc-950 sm:flex" />

              <div className="group w-full rounded-2xl border-2 border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                      {t("experience.experiences.title")}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                      {t("experience.experiences.company")}
                    </h3>

                    <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-300">
                      {t("experience.experiences.position")}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col  items-center justify-between md:justify-center gap-2">
                    <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {t("experience.experiences.experience")}
                    </div>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      {t("experience.experiences.year")}
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-zinc-500 dark:text-zinc-400">
                  {(
                    t("experience.experiences.points", {
                      returnObjects: true,
                    }) as string[]
                  ).map((point, idx) => (
                    <li key={idx} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
