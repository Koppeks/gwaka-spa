import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from 'libs/utils'

const buttonVariants = cva(
  "no-underline cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--lagoon)] focus-visible:ring-[var(--lagoon)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--lagoon-deep)]/20 aria-invalid:border-[var(--lagoon-deep)]",
  {
    variants: {
      variant: {
        default:
          'bg-[var(--lagoon)] text-[var(--sea-ink)] hover:bg-[var(--lagoon-deep)]',
        destructive:
          'bg-[var(--sea-ink)] text-[var(--foam)] hover:bg-[var(--sea-ink-soft)] focus-visible:ring-[var(--sea-ink)]/20',
        outline:
          'border border-[var(--chip-line)] bg-[var(--bg-base)] shadow-xs hover:bg-[var(--sand)] hover:text-[var(--sea-ink)]',
        secondary:
          'bg-[var(--bg-base)] text-[var(--sea-ink)] hover:bg-[var(--sand)]',
        secondaryglow:
          'bg-[var(--bg-base)] text-[var(--sea-ink)] hover:bg-[var(--lagoon)]',
        ghost: 'hover:bg-[var(--sand)] hover:text-[var(--sea-ink)]',
        link: 'text-[var(--lagoon-deep)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  href,
  target,
  style,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    href?: string,
    target?: string,
  }) {
  const Comp = href ? 'a' : 'button'

  return (
    <Comp
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ color: 'inherit', ...style }}
      {...(props as any)}
    />
  )
}

export { Button, buttonVariants }
