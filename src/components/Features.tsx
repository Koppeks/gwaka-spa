import { Activity, Key, Monitor, Zap, BarChart3, Shield } from 'lucide-react'
import Badge from './ui/Badge'

const features = [
  {
    icon: Activity,
    title: 'Automatic Heartbeats',
    description:
      'Every keystroke and file change across Google Workspace editors is automatically tracked and sent as a heartbeat to WakaTime.',
  },
  {
    icon: Key,
    title: 'Simple API Key Setup',
    description:
      'Just paste your WakaTime API key into the extension popup. No complex configuration or additional accounts needed.',
  },
  {
    icon: Monitor,
    title: 'Custom Machine Name',
    description:
      'Set a custom machine name to distinguish your Google Workspace activity from other editors on your WakaTime dashboard.',
  },
  {
    icon: Zap,
    title: 'Full Google Workspace Coverage',
    description:
      'Tracks activity in Docs, Sheets, Slides, Apps Script, Forms, and more — all Google Workspace editors in one extension.',
  },
  {
    icon: BarChart3,
    title: 'WakaTime Dashboard',
    description:
      'All your Google Workspace coding and writing time appears on your existing WakaTime dashboard alongside data from other editors.',
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description:
      'Your API key is stored locally in your browser. No data is sent to any third-party servers besides WakaTime.',
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Badge>Features</Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-4xl">
            Everything you need to track your Google Workspace time
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[var(--sea-ink-soft)] opacity-60">
            A seamless integration that brings WakaTime time-tracking to the
            entire Google Workspace suite.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] backdrop-blur-sm p-6 transition-all hover:border-[var(--lagoon)]/40 hover:bg-[var(--surface-strong)] hover:shadow-[0_4px_20px_var(--hero-a)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--hero-a)] text-[var(--lagoon-deep)] transition-colors group-hover:bg-[var(--lagoon)]/25">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--sea-ink)] opacity-55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
