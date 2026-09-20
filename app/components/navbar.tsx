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
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";

const menus = [
  { name: "Home", link: "#home" },
  { name: "Skill", link: "#skill" },
  { name: "Pengalaman", link: "#experience" },
  { name: "Project", link: "#project" },
  { name: "Sertifikat", link: "#sertifikat" },
  { name: "Contact", link: "#about" },
];
const subscribe = () => () => {};

export default function Snavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(menus[0].link);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  useEffect(() => {
    const sections = menus
      .map((m) => document.getElementById(m.link.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
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
        <NavbarButton
          as="button"
          variant="secondary"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative z-20 px-2"
        >
          {themeIcon}
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-black dark:text-white"
            >
              {themeIcon}
            </button>
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
