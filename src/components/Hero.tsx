import Badge from './ui/Badge'
import { Button } from './ui/Button'
import { SiGooglechrome } from '@icons-pack/react-simple-icons'
import { ArrowDown } from 'lucide-react'

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
            Get this extension
          </Button>
          <Button href="/#how-it-works" variant="secondaryglow">
            See how it works
            <ArrowDown className="size-4" />
          </Button>
        </div>
      </section>
      <img className="w-100" src={'/gwaka.gif'} alt="Loading..." />
    </div>
  )
}
