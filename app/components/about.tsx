import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconFileText,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/achmadzaenni",
    icon: IconBrandGithub,
    color: "text-[#181717]",
    hoverColor: "hover:text-[#6e5494]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281332906751",
    icon: IconBrandWhatsapp,
    color: "text-[#25D366]",
    hoverColor: "hover:text-[#128C7E]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/achmad-zaenni-adriansyah-440928349/",
    icon: IconBrandLinkedin,
    color: "text-[#0A66C2]",
    hoverColor: "hover:text-[#004182]",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@achmad_adrian",
    icon: IconBrandTiktok,
    color: "text-black",
    hoverColor: "hover:text-[#FE2C55]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adrian_adri4",
    icon: IconBrandInstagram,
    color: "text-[#E4405F]",
    hoverColor: "hover:text-[#833AB4]",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
          Contact
        </h2>

        <div className="mx-auto mt-8 w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-medium text-black dark:text-white">
                Mari Kita Bekerja Sama
              </h3>

              <p className="mt-3 max-w-xl text-zinc-500 dark:text-zinc-400">
                Punya project, ide, atau ingin berkolaborasi? Silakan hubungi
                saya melalui salah satu platform di bawah ini.
              </p>
            </div>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    title={social.name}
                    className={`
                      ${social.color}
                      ${social.hoverColor}
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-110
                    `}
                  >
                    <Icon className="h-7 w-7" stroke={1.8} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=achmadzaenniadriansyah1@gmail.com&su=Work%20Together&body=Hello%20Achmad%2C%0A%0AI%20am%20interested%20in%20working%20with%20you.%20Please%20let%20me%20know%20how%20we%20can%20collaborate.%0A%0AThank%20you.%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-700 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <IconMail className="h-5 w-5" />
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <IconFileText className="h-5 w-5" />
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
