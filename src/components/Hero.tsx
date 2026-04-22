import Badge from './ui/Badge'
import { Button } from './ui/Button'
import { SiGithub, SiGooglechrome } from '@icons-pack/react-simple-icons'
import { ArrowDown, Star, Users } from 'lucide-react'

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row items-center lg:justify-between w-full min-h-screen relative px-6 lg:px-20 py-12 lg:py-0 gap-8"
    >
      <section className="relative overflow-hidden flex flex-col items-center px-6 py-10 sm:px-10 sm:py-14">
        <Badge>Open Source WakaTime Browser Extension</Badge>
        <h1 className="display-title text-center mb-5 max-w-2xl text-4xl font-bold leading-[1.02] sm:text-7xl">
          <span className="font-semibold tracking-tight text-cycle">Gwaka</span>
        </h1>
        <p className="max-w-xl text-center sm:text-lg">
          Track your coding activity across the entire Google Workspace — Docs,
          Sheets, Slides, Apps Script, and more. Paste your API key and start
          sending heartbeats to your WakaTime dashboard instantly.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Button
            target="_blank"
            href="https://chromewebstore.google.com/detail/gmpiofbkheibmaofamolbnahecgafkje?utm_source=item-share-cb"
            variant="default"
          >
            <SiGooglechrome className="size-4" />
            Chrome Web Store
          </Button>
          <Button href="/#how-it-works" variant="secondaryglow">
            <ArrowDown className="size-4" />
            See how it works
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-(--sea-ink)">
          <span className="flex items-center gap-2 opacity-60">
            <Users className="size-3.5 shrink-0" />
            14 users
          </span>
          <span className="hidden h-4 w-px bg-(--chip-line) sm:block" />
          <span className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="size-3.5 fill-(--lagoon) text-(--lagoon)" />
            ))}
            <span className="ml-1 opacity-60">5.0</span>
          </span>
          <span className="hidden h-4 w-px bg-(--chip-line) sm:block" />
          <a
            href="https://github.com/Koppeks/gwaka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity no-underline"
          >
            <SiGithub className="size-3.5 shrink-0" />
            4 stars on GitHub
          </a>
        </div>
      </section>
      <img className="w-100" src={'/gwaka.gif'} alt="Loading..." />
    </div>
  )
}
