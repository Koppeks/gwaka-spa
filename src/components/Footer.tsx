import { Clock } from 'lucide-react'
import {
  SiBuymeacoffee,
  SiGithub,
  SiGoogleappsscript,
  SiWakatime,
} from '@icons-pack/react-simple-icons'

export function Footer() {
  return (
    <footer className="border-t border-[var(--chip-line)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a
            href="#"
            className="flex flex-row items-center justify-center gap-2 no-underline hover:no-underline"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hero-a)]">
              <Clock className="h-7 w-7 text-[var(--lagoon-deep)]" />
            </div>
            <span className="text-sm font-semibold text-[var(--sea-ink)]">
              WakaTime for Apps Script
            </span>
          </a>
          <p className="max-w-sm text-center text-xs leading-relaxed text-[var(--sea-ink)] opacity-50 md:text-left">
            An open-source browser extension that sends coding heartbeats from
            the Google Apps Script editor to your WakaTime dashboard.
          </p>
        </div>
        <div>
            <a
              href="/"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-75 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              Home
            </a>
            <a
              href="/privacy_policy"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-75 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              Privacy Policy
            </a>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex items-center gap-6">
            <a
              href="https://script.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiGoogleappsscript className="h-3.5 w-3.5" />
              Apps Script
            </a>
            <a
              href="https://wakatime.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiWakatime className="h-3.5 w-3.5" />
              WakaTime
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={`https://www.buymeacoffee.com/koppeks`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--sea-ink)] opacity-50 hover:opacity-100 transition-opacity no-underline hover:no-underline"
            >
              <SiBuymeacoffee className="h-3.5 w-3.5" />
              Buy Me a Coffee
            </a>
          </div>
          <p className="text-xs text-[var(--sea-ink)] opacity-35">
            Made with care. Not affiliated with WakaTime or Google.
          </p>
        </div>
      </div>
    </footer>
  )
}
