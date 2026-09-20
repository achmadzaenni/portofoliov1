export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen scroll-mt-24 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Pengalaman
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            Perjalanan pendidikan dan pengalaman saya dalam mempelajari serta
            mengembangkan solusi berbasis teknologi.
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
                      Sekolah
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                      SMKS PGRI 3 Malang
                    </h3>

                    <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-300">
                      Rekayasa Perangkat Lunak
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col  items-center justify-between md:justify-center gap-2">
                    <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      Pendidikan
                    </div>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      2023 - 2026
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-500 dark:text-zinc-400">
                  Mempelajari dasar-dasar pengembangan perangkat lunak,
                  pemrograman, basis data, pengembangan aplikasi web, serta
                  proses perancangan dan pengembangan sistem.
                </p>
              </div>
            </div>

            <div className="relative flex gap-6">
              <div className="relative z-10 mt-1 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-500 dark:border-zinc-950 sm:flex" />

              <div className="group w-full rounded-2xl border-2 border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                      magang / PKL
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                      PT. Hyperdata Solusindo Mandiri
                    </h3>

                    <p className="mt-1 font-medium text-zinc-600 dark:text-zinc-300">
                      Web Developer
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col  items-center justify-between md:justify-center gap-2">
                    <div className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      Pengalaman
                    </div>
                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      2024 - 2025
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-zinc-500 dark:text-zinc-400">
                  <li className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>
                      Mengembangkan dan melakukan pemeliharaan aplikasi berbasis
                      web sesuai dengan kebutuhan sistem.
                    </span>
                  </li>

                  <li className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>
                      Membantu membuat dan mengembangkan fitur pada aplikasi web
                      menggunakan teknologi web yang sesuai.
                    </span>
                  </li>

                  <li className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>
                      Melakukan debugging, perbaikan error, serta pengujian
                      terhadap fitur aplikasi yang dikembangkan.
                    </span>
                  </li>

                  <li className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>
                      Berkolaborasi dalam proses pengembangan dan penyelesaian
                      kebutuhan aplikasi berbasis web.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
