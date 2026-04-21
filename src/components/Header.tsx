import { MenuIcon, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Pulse from './ui/Pulse'
import { useState, useEffect } from 'react'
import { SiGithub, SiWakatime } from '@icons-pack/react-simple-icons'
import { Link } from '@tanstack/react-router'

const NAV_LINKS = [
  { label: 'Home', href: '/#hero', sectionId: 'hero' },
  { label: 'How It Works', href: '/#how-it-works', sectionId: 'how-it-works' },
  { label: 'Features', href: '/#features', sectionId: 'features' },
  { label: 'Support', href: '/#support', sectionId: 'support' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_LINKS.filter((l) => l.sectionId)
      .map((l) => document.getElementById(l.sectionId))
      .filter(Boolean) as HTMLElement[]

    const visibleSections = new Set<string>()

    const pickActive = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      if (nearBottom) {
        const last = sections[sections.length - 1]
        setActiveSection(last.id)
        return
      }
      const topmost = sections.find((s) => visibleSections.has(s.id))
      setActiveSection(topmost?.id ?? null)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id)
          else visibleSections.delete(entry.target.id)
        })
        pickActive()
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    window.addEventListener('scroll', pickActive)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pickActive)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center gap-x-2 shrink-0">
          <img
            src="/WakatimeIcon.svg"
            alt="Gwaka Logo"
            className="h-4 w-auto"
          />
          <span className="font-semibold italic tracking-tight text-cycle">
            Gwaka
          </span>
          <Pulse />
        </div>

        <div className="hidden md:flex items-center gap-x-4 text-sm font-semibold absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.filter((l) => l.sectionId).map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
              className={`nav-link ${activeSection === link.sectionId ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <Link to="/changelog" className="nav-link">
            Changelog
          </Link>
          <a
            href="https://wakatime.com/api"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            WakaTime Docs
          </a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="https://wakatime.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            <SiWakatime size={20} />
          </a>
          <a
            href="https://github.com/Koppeks/wakatime-gas"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            <SiGithub size={20} />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--line)] py-3 flex flex-col gap-1 text-sm font-semibold">
          {NAV_LINKS.filter((l) => l.sectionId).map((link) => (
            <a
              key={link.sectionId}
              href={link.href}
              className={`nav-link px-1 py-2 ${activeSection === link.sectionId ? 'is-active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/changelog"
            className="nav-link px-1 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Changelog
          </Link>
          <a
            href="https://wakatime.com/api"
            className="nav-link px-1 py-2"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            API Docs
          </a>

          <section className="flex flex-row gap-2 mt-2">
            <a
              href="https://wakatime.com/dashboard"
              target="_blank"
              rel="noreferrer"
              className="md:block rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            >
              <SiWakatime size={20} />
            </a>
            <a
              href="https://github.com/Koppeks/wakatime-gas"
              target="_blank"
              rel="noreferrer"
              className="md:block rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            >
              <SiGithub size={20} />
            </a>
          </section>
        </div>
      )}
    </header>
  )
}
