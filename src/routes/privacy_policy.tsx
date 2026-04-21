import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy_policy')({
  component: RouteComponent,
})

const LAST_UPDATED = 'April 2026'
const CONTACT_EMAIL = 'https://github.com/Koppeks'

const sections = [
  {
    title: 'Overview',
    content: `Gwaka (formerly “WakaTime for Google Apps Script”) is an unofficial browser extension that tracks your coding and writing time across Google Workspace editors — including Docs, Sheets, Slides, Apps Script, and more — and sends activity data to your personal WakaTime account. This policy explains what data we access, how it is used, and what we never do with it`,
  },
  {
    title: 'Data We Collect',
    items: [
      {
        label: 'WakaTime API Key',
        description:
          'Entered by you in the extension popup and stored locally in your browser via chrome.storage.sync. This key is used solely to authenticate heartbeat requests to wakatime.com on your behalf. It is never sent to any server other than wakatime.com.',
      },
      {
        label: 'Machine Name',
        description:
          'An optional label you can set to identify your browser environment in your WakaTime dashboard. Stored locally in chrome.storage.sync and sent as part of the heartbeat request to wakatime.com.',
      },
      {
        label: 'Keyboard Activity',
        description:
          'The extension listens for keydown events inside Google Workspace editors to detect coding and writing activity and decide when to send a heartbeat. Individual keystrokes are never recorded, stored, logged, or transmitted. Only the occurrence of activity is used.',
      },
      {
        label: 'Project and File Name',
        description:
          "The extension reads the current project name from the page title and the active file name from the editor's file tree. This information is included in the heartbeat payload sent to wakatime.com so your time is attributed correctly.",
      },
    ],
  },
  {
    title: 'Data We Do Not Collect',
    bullets: [
      'Personal information such as your name, email address, or location',
      'Browser history or activity outside of Google Workspace editors',
      'The content of your code or scripts',
      'Any data unrelated to WakaTime time tracking',
    ],
  },
  {
    title: 'Third Party Services',
    content: `The only external service this extension communicates with is wakatime.com. All heartbeat data is sent directly from your browser to the WakaTime API using your own API key. We do not operate any backend server, and no data passes through our infrastructure. Please refer to WakaTime's privacy policy at https://wakatime.com/privacy for details on how they handle your data.`,
  },
  {
    title: 'Data Storage',
    content: `Your API key and machine name are stored in chrome.storage.sync, which is managed entirely by your browser and optionally synced across your Chrome profile by Google. We have no access to this data. You can clear it at any time by removing the extension.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the extension after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about this privacy policy, please open an issue on the GitHub repository or reach out at ${CONTACT_EMAIL}.`,
  },
]

function RouteComponent() {
  return (
    <main className="min-h-screen bg-(--bg-base) px-4 py-16 text-(--sea-ink)">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-(--sea-ink-soft)">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-(--sea-ink)">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-(--sea-ink-soft)">
            Last updated: {LAST_UPDATED}
          </p>
          <div className="mt-4 h-px w-full bg-(--line)" />
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-base font-semibold text-(--sea-ink)">
                {section.title}
              </h2>

              {/* Plain paragraph */}
              {section.content && (
                <p className="text-sm leading-relaxed text-(--sea-ink-soft)">
                  {section.content}
                </p>
              )}

              {/* Labeled items */}
              {section.items && (
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-(--line) bg-(--foam) px-4 py-3"
                    >
                      <p className="mb-1 text-xs font-semibold text-(--sea-ink)">
                        {item.label}
                      </p>
                      <p className="text-xs leading-relaxed text-(--sea-ink-soft)">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet list */}
              {section.bullets && (
                <ul className="space-y-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-(--sea-ink-soft)"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--sea-ink-soft)" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 border-t border-(--line) pt-6 text-center">
          <p className="text-xs text-(--sea-ink-soft)">
            Gwaka is not affiliated with WakaTime Inc. or Google.
          </p>
        </div>
      </div>
    </main>
  )
}
