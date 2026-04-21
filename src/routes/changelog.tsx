import GridBackground from '#/components/GridBackground'
import Badge from '#/components/ui/Badge'
import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'

type GitHubRelease = {
  tag_name: string
  name: string
  published_at: string
  body: string
  prerelease: boolean
  draft: boolean
}

type ProcessedRelease = {
  tag: string
  title: string
  date: string
  bodyHtml: string
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function processRelease(release: GitHubRelease): ProcessedRelease {
  const normalized = release.body.replace(/\r\n/g, '\n')
  const lines = normalized.split('\n')
  const titleLine = lines.find((l) => l.startsWith('# '))
  const title = titleLine?.replace(/^# /, '').trim() ?? release.name
  const content = lines.filter((l) => !l.startsWith('# ')).join('\n').trimStart()
  return {
    tag: release.tag_name,
    title,
    date: formatDate(release.published_at),
    bodyHtml: marked.parse(content) as string,
  }
}

export const Route = createFileRoute('/changelog')({
  loader: async (): Promise<ProcessedRelease[]> => {
    const res = await fetch(
      'https://api.github.com/repos/Koppeks/wakatime-gas/releases',
      { headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    const releases: GitHubRelease[] = await res.json()
    return releases.filter((r) => !r.draft && !r.prerelease).map(processRelease)
  },
  component: Changelog,
})

function ReleaseCard({ release, latest }: { release: ProcessedRelease; latest: boolean }) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 h-4 w-4 shrink-0 rounded-full border-2 mt-1.5 ${latest ? 'border-[var(--lagoon)] bg-[var(--lagoon)]' : 'border-[var(--chip-line)] bg-[var(--chip-bg)]'}`}
        />
        <div className="mt-2 w-px flex-1 bg-[var(--chip-line)]" />
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-lg border px-2.5 py-1 text-sm font-bold tracking-tight ${latest ? 'border-[var(--lagoon)]/40 bg-[var(--hero-a)] text-[var(--lagoon-deep)]' : 'border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink)]'}`}
          >
            {release.tag}
          </span>
          {latest && (
            <span className="rounded-full bg-[var(--lagoon)] px-2 py-0.5 text-xs font-semibold text-white">
              Latest
            </span>
          )}
          <span className="text-sm text-[var(--sea-ink)] opacity-40">{release.date}</span>
        </div>

        <h2 className="mb-4 text-lg font-semibold text-[var(--sea-ink)]">{release.title}</h2>

        <div
          className="prose prose-sm max-w-none rounded-xl border border-[var(--chip-line)] bg-[var(--chip-bg)] backdrop-blur-sm px-5 py-4 prose-headings:font-semibold prose-headings:text-[var(--sea-ink)] prose-p:text-[var(--sea-ink)] prose-p:opacity-80 prose-li:text-[var(--sea-ink)] prose-li:opacity-80 prose-strong:text-[var(--sea-ink)] prose-ol:text-[var(--sea-ink)] prose-ul:text-[var(--sea-ink)]"
          dangerouslySetInnerHTML={{ __html: release.bodyHtml }}
        />
      </div>
    </div>
  )
}

function Changelog() {
  const releases = Route.useLoaderData()

  return (
    <main className="page-wrap relative py-16 px-6">
      <GridBackground />

      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          <Badge>Changelog</Badge>
          <h1 className="display-title text-balance text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
            What&apos;s new
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-[var(--sea-ink-soft)] opacity-60">
            Release history and improvements for WakaTime for Apps Script.
          </p>
        </div>

        <div>
          {releases.map((release, i) => (
            <ReleaseCard key={release.tag} release={release} latest={i === 0} />
          ))}
        </div>
      </div>
    </main>
  )
}
