import Link from "next/link";
import { GitBranchIcon, ExternalLinkIcon } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur transition">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#hero" className="text-xl font-bold tracking-tight text-sky-700">
          Ho Viet Thang
        </Link>
        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-sky-100 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/HoVietThang190704"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-slate-600 transition hover:bg-sky-100 hover:text-sky-700"
          >
            <GitBranchIcon size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-slate-600 transition hover:bg-sky-100 hover:text-sky-700"
          >
            <ExternalLinkIcon size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
