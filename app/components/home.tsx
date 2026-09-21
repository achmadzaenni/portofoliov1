"use client"
import { useTranslation } from "react-i18next";
export default function HomeSection() {
  const { t } = useTranslation();
  return (
    <section id="home" className="flex min-h-screen items-center px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            {t("home.badge")}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
            {t("home.greeting")}
            <span className="mt-2 block text-zinc-500 dark:text-zinc-400">
              {t("home.name")}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t("home.description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#project"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-700 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {t("home.viewProjects")}
            </a>

            <a
              href="#about"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              {t("home.contactMe")}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/20 sm:h-96 sm:w-96" />
          <div className="absolute h-72 w-72 rounded-full border border-blue-500/20 sm:h-96 sm:w-96" />
          <div className="absolute h-64 w-64 rounded-full border border-zinc-300/60 dark:border-white/10 sm:h-80 sm:w-80" />
          <div className="group relative z-10">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-blue-400/10 to-transparent opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-zinc-200 bg-zinc-100 p-2 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500 dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:border-blue-500">
              <img
                src="/personal.png"
                alt="Achmad Zaenni Adriansyah"
                className="h-[380px] w-[300px] object-cover rounded-[2rem] grayscale transition-all duration-500 group-hover:grayscale-0 sm:h-[460px] sm:w-[360px]"
              />
            </div>

            <div className="absolute -top-5 -right-5 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/90">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t("home.mottoLabel")}
              </p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {t("home.motto")}
              </p>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/90">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t("home.focusedOn")}
              </p>
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {t("home.focus")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
