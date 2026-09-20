import Image from "next/image";
import { getSertifikat } from "@/lib/sertifikat";

export default function SertifikatSection() {
  const sertifikat = getSertifikat();

  return (
    <section
      id="sertifikat"
      className="min-h-screen scroll-mt-24 bg-zinc-100/70 px-6 py-32 dark:bg-zinc-950/60"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">Sertifikat</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sertifikat.map((item) => (
            <div
              key={item.link}
              className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
            >
              <div className="relative aspect-[4/3] w-full bg-black/5 dark:bg-white/5">
                <Image
                  src={item.link}
                  alt={`Sertifikat ${item.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black dark:text-white">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}