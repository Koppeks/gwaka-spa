'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'
import Badge from './ui/Badge'

export function HowItWorks() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <Badge>How It Works</Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-4xl">
            Up and running in under a minute
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[var(--sea-ink)] opacity-55">
            Three simple steps to start tracking your Apps Script coding time on
            WakaTime.
          </p>
        </div>
        <div className="mb-14 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Install the extension',
              desc: 'Add the extension to your browser from the Chrome Web Store or load it manually.',
            },
            {
              step: '02',
              title: 'Configure your settings',
              desc: 'Open the extension popup, set your machine name, and paste your WakaTime API key.',
            },
            {
              step: '03',
              title: 'Start coding',
              desc: 'Open the Apps Script editor and code as usual. Heartbeats are sent automatically.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span className="mb-3 inline-block font-mono text-3xl font-bold text-[var(--lagoon-deep)]">
                {item.step}
              </span>
              <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--sea-ink)] opacity-55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] backdrop-blur-sm">
          <div className="aspect-video w-full">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="group flex h-full w-full flex-col items-center justify-center gap-4 bg-[var(--hero-a)] transition-all hover:bg-[var(--lagoon)]/20"
                aria-label="Play demo video"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--lagoon)] bg-[var(--hero-a)] text-[var(--lagoon-deep)] transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7" />
                </div>
                <span className="text-sm font-medium text-[var(--sea-ink)] opacity-55">
                  Watch the demo
                </span>
              </button>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[var(--hero-a)]">
                <div className="text-center">
                  <p className="mb-2 font-mono text-sm text-[var(--lagoon-deep)]">
                    {'// Video placeholder'}
                  </p>
                  <video autoPlay src="WGAS_walkthrough.mp4" controls />
                  <button
                    onClick={() => setPlaying(false)}
                    className="mt-4 text-xs text-[var(--lagoon-deep)] underline underline-offset-4 hover:opacity-70"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
