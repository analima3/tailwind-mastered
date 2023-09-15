'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'h-11 flex w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400 dark:text-zinc-100',
        )}
      >
        <span className="truncate">
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>
        <SelectPrimitive.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500 dark:text-zinc-600" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className={twMerge(
            'z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] h-[--radix-select-content-available-height] overflow-hidden animate-slideUpAndFade',
            'dark:border-zinc-700 dark:bg-zinc-800',
          )}
        >
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-7 bg-white dark:border-zinc-700 dark:bg-zinc-800 cursor-default">
            <ChevronUp className="h-5 w-5 text-violet-500 dark:text-violet-300" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-7 bg-white dark:border-zinc-700 dark:bg-zinc-800 cursor-default">
            <ChevronDown className="h-5 w-5 text-violet-500 dark:text-violet-300" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
