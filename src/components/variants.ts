import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'font-garamond cursor-pointer text-base break-all whitespace-nowrap capitalize no-underline',
    'inline-flex min-w-26.5 items-center justify-center gap-x-[1em]',
    '[&_svg]:relative [&_svg]:top-[0.05em] [&_svg]:size-[1em] [&_svg]:shrink-0',
  ],
  variants: {
    color: {
      primary: 'bg-primary-pale text-current',
      'primary-inverse': 'border-primary border bg-white text-current',
    },
    size: {
      // sm: 'gap-x-1 px-6 py-2',
      md: 'px-[1.46em] py-[0.57em]',
      // lg: 'w-full max-w-[540px] justify-between px-10 py-6 text-xl lg:text-2xl',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
