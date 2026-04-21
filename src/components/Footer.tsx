import { Clock } from 'lucide-react'
import {
  SiBuymeacoffee,
  SiGithub,
  SiGoogleappsscript,
  SiWakatime,
} from '@icons-pack/react-simple-icons'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-(--chip-line) px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a
            href="#"
            className="flex flex-row items-center justify-center gap-2 no-underline hover:no-underline"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-(--hero-a)">
              <Clock className="h-7 w-7 text-(--lagoon-deep)" />
            </div>
            <span className="text-sm font-semibold text-(--sea-ink)">
              Gwaka
            </span>
          </a>
          <p className="max-w-sm text-center text-xs leading-relaxed text-(--sea-ink) opacity-50 md:text-left">
            An open-source browser extension that sends coding heartbeats from
            Google Workspace editors to your WakaTime dashboard.
          </p>
        </div>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-75 hover:opacity-100 transition-opacity no-underline hover:no-underline"
          >
            Home
          </a>
          <Link
            to="/changelog"
            className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-75 hover:opacity-100 transition-opacity no-underline hover:no-underline"
          >
            Changelog
          </Link>
          <a
            href="/privacy_policy"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-75 hover:opacity-100 transition-opacity no-underline hover:no-underline"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex items-center gap-6">
            <a
              href="https://workspace.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiGoogleappsscript className="h-3.5 w-3.5" />
              Google Workspace
            </a>
            <a
              href="https://wakatime.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiWakatime className="h-3.5 w-3.5" />
              WakaTime
            </a>
            <a
              href="https://github.com/koppeks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={`https://www.buymeacoffee.com/koppeks`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-(--sea-ink) opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiBuymeacoffee className="h-3.5 w-3.5" />
              Buy Me a Coffee
            </a>
          </div>
          <p className="text-xs text-(--sea-ink) opacity-35">
            Made with care. Not affiliated with WakaTime or Google.
          </p>
        </div>
      </div>
    </footer>
  )
}
