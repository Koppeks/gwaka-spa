import { Heart, Star } from 'lucide-react'
import { Button } from './ui/Button'
import { SiGithub } from '@icons-pack/react-simple-icons'
import Badge from './ui/Badge'

export function Support() {
  return (
    <section id="support" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Badge>
          Support{' '}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-(--hero-a)">
            <Heart className="h-3 w-3 text-(--lagoon-deep)" />
          </div>{' '}
        </Badge>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-(--sea-ink) sm:text-3xl">
          Support the project
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-(--sea-ink) opacity-55">
          This extension is free and open source. If you find it useful,
          consider supporting the development by starring the repository or
          sharing it with fellow developers.
          <br />I will appreciate any form of support, it means a lot to me.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="flex flex-row items-center gap-4"
            variant="secondaryglow"
            href="https://github.com/Koppeks/gwaka"
          >
            <Star className="size-4" />
            Star on GitHub
          </Button>
          <Button
            className="flex flex-row items-center gap-4"
            variant="secondaryglow"
            href="https://github.com/Koppeks/gwaka"
          >
            <SiGithub className="size-4" />
            Contribute
          </Button>
        </div>
      </div>
    </section>
  )
}
