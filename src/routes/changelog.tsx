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
  prerelease: boolean
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
    prerelease: release.prerelease,
  }
}

export const Route = createFileRoute('/changelog')({
  loader: async (): Promise<ProcessedRelease[]> => {
    const res = await fetch(
      'https://api.github.com/repos/Koppeks/gwaka/releases',
      { headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    const releases: GitHubRelease[] = await res.json()
    return releases.filter((r) => !r.draft).map(processRelease)
  },
  component: Changelog,
})

function ReleaseCard({ release, latest }: { release: ProcessedRelease; latest: boolean }) {
  const isPre = release.prerelease
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 h-4 w-4 shrink-0 rounded-full border-2 mt-1.5 ${isPre ? 'border-(--release) bg-(--release)/30' : latest ? 'border-(--lagoon) bg-(--lagoon)' : 'border-(--chip-line) bg-(--chip-bg)'}`}
        />
        <div className="mt-2 w-px flex-1 bg-(--chip-line)" />
      </div>

      <div className={`min-w-0 flex-1 pb-2 ${isPre ? 'opacity-75' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-lg border px-2.5 py-1 text-sm font-bold tracking-tight ${isPre ? 'border-(--release)/40 bg-(--release)/10 text-(--release)' : latest ? 'border-(--lagoon)/40 bg-(--hero-a) text-(--lagoon-deep)' : 'border-(--chip-line) bg-(--chip-bg) text-(--sea-ink)'}`}
          >
            {release.tag}
          </span>
          {isPre && (
            <span className="rounded-full border border-(--release)/40 bg-(--release)/10 px-2 py-0.5 text-xs font-semibold text-(--release)">
              Pre-release
            </span>
          )}
          {latest && !isPre && (
            <span className="rounded-full bg-(--lagoon) px-2 py-0.5 text-xs font-semibold text-white">
              Latest
            </span>
          )}
          <span className="text-sm text-(--sea-ink) opacity-40">{release.date}</span>
        </div>

        <h2 className="mb-4 text-lg font-semibold text-(--sea-ink)">{release.title}</h2>

        <div
          className="prose prose-sm max-w-none rounded-xl border border-(--chip-line) bg-(--chip-bg) backdrop-blur-sm px-5 py-4
            text-(--sea-ink)
            prose-headings:text-(--sea-ink) prose-headings:font-semibold
            prose-p:text-(--sea-ink) prose-p:opacity-80
            prose-li:text-(--sea-ink) prose-li:opacity-80
            prose-strong:text-(--sea-ink)
            prose-a:text-(--lagoon-deep) prose-a:no-underline hover:prose-a:underline
            prose-code:text-(--sea-ink) prose-code:before:content-none prose-code:after:content-none
            prose-td:text-(--sea-ink) prose-td:border-(--chip-line)
            prose-th:text-(--sea-ink) prose-th:border-(--chip-line)
            prose-tr:border-(--chip-line) prose-thead:border-(--chip-line)"
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
            Release history and improvements for Gwaka.
          </p>
        </div>

        <div>
          {(() => {
            const latestStableIdx = releases.findIndex((r) => !r.prerelease)
            return releases.map((release, i) => (
              <ReleaseCard key={release.tag} release={release} latest={i === latestStableIdx} />
            ))
          })()}
        </div>
      </div>
    </main>
  )
}
