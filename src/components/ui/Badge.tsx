import Pulse from './Pulse'

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-border border-(--sea-ink-soft) px-4 py-1.5 text-sm text-muted-foreground`}
    >
      <Pulse />
      {children}
    </div>
  )
}
