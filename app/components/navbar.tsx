"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import LanguageButton from "@/app/components/languagebtn";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";

const subscribe = () => () => {};

const menuss = [
  { key: "home", link: "#home" },
  { key: "skills", link: "#skill" },
  { key: "experience", link: "#experience" },
  { key: "projects", link: "#project" },
  { key: "certificate", link: "#sertifikat" },
  { key: "contact", link: "#about" },
];

export default function Snavbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const menus = menuss.map((item) => ({
    name: t(`navbar.${item.key}`),
    link: item.link,
  }));

  useEffect(() => {
    const sections = menuss.map((m) =>
      document.getElementById(m.link.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const themeIcon = !mounted ? (
    <span className="block h-5 w-5" />
  ) : isDark ? (
    <IconSun className="h-5 w-5" />
  ) : (
    <IconMoon className="h-5 w-5" />
  );

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={menus} activeLink={activeLink} />
        <div className="flex items-center gap-4">
          <LanguageButton className="relative z-20" />
          <NavbarButton
            as="button"
            variant="secondary"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative z-20 px-2"
          >
            {themeIcon}
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
            <LanguageButton className="text-black dark:text-white" />
            <NavbarButton
              as="button"
              variant="secondary"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-black dark:text-white"
            >
              {themeIcon}
            </NavbarButton>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {menus.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
