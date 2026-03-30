"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Home, Briefcase, GraduationCap, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/contact": Phone,
};

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed z-[99999] transition-all duration-500 ease-out",
        scrolled
          ? "top-4 left-6 right-6 header-glass py-4 rounded-2xl md:left-6 md:right-6 md:top-5"
          : "top-0 left-0 right-0 bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center min-h-[56px] sm:min-h-0">
        {/* Logo */}
        <div className="flex-1 flex justify-start min-w-0">
          <Link
            href="/"
            className="flex items-center cursor-pointer py-2 -my-2 min-h-[44px] shrink-0"
            aria-label="PIC Training - Beranda"
          >
            <Image
              src="/images/logo/logo-light.svg"
              alt="PIC Training"
              width={140}
              height={52}
              className="h-10 w-auto sm:h-12 min-w-[120px] sm:min-w-[160px] max-w-[200px] object-contain object-left"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 shrink-0">
          {navLinks.map((link) => {
            const Icon = navIcons[link.href];
            const isActive = pathname === link.href;
            const hasSubmenu = link.submenu && link.submenu.length > 0;

            if (hasSubmenu) {
              return (
                <div key={link.label} className="group relative">
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "gap-1.5 font-bold",
                      isActive && "bg-gojek-green text-white hover:bg-gojek-green-hover"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                  <div className="dropdown">
                    {link.submenu!.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        target={sub.external ? "_blank" : undefined}
                        rel={sub.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-slate-600 hover:text-gojek-green transition-colors py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "gap-2 font-bold",
                    isActive && "bg-gojek-green text-white hover:bg-gojek-green-hover"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
          <div className="hidden xl:block">
            <Button size="default" asChild className="shrink-0 bg-gojek-green hover:bg-gojek-green-hover text-white">
              <Link href="/contact">Konsultasi Gratis</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="text-slate-700 min-w-[44px] min-h-[44px]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,320px)] max-w-[320px] p-6 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const Icon = navIcons[link.href];
                  const isActive = pathname === link.href;
                  const hasSubmenu = link.submenu && link.submenu.length > 0;

                  if (hasSubmenu) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === link.label ? null : link.label)
                          }
                          className={cn(
                            "flex items-center justify-between w-full gap-3 font-bold transition-colors py-4 px-3 rounded-xl -mx-3 min-h-[48px]",
                            "text-slate-700 hover:text-gojek-green active:bg-slate-100"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <Briefcase className="h-5 w-5 shrink-0" />
                            {link.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openSubmenu === link.label && "rotate-180"
                            )}
                          />
                        </button>
                        {openSubmenu === link.label && (
                          <div className="ml-8 flex flex-col gap-1 mb-2">
                            {link.submenu!.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                target={sub.external ? "_blank" : undefined}
                                onClick={() => setOpen(false)}
                                className="text-sm text-slate-600 hover:text-gojek-green py-2 px-3 rounded-lg transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 font-bold transition-colors py-4 px-3 rounded-xl -mx-3 min-h-[48px]",
                        isActive
                          ? "text-gojek-green bg-orange-50"
                          : "text-slate-700 hover:text-gojek-green active:bg-slate-100"
                      )}
                    >
                      {Icon && <Icon className="h-5 w-5 shrink-0" />}
                      {link.label}
                    </Link>
                  );
                })}
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    size="default"
                    className="w-full min-h-[48px] bg-gojek-green hover:bg-gojek-green-hover text-white"
                    asChild
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Konsultasi Gratis
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
