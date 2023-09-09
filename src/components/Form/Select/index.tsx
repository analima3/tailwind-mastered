'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="h-11 flex w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
        <SelectPrimitive.Value
          className="text-zinc-900"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] h-[--radix-select-content-available-height] overflow-hidden animate-slideUpAndFade"
        >
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-7 bg-white cursor-default">
            <ChevronUp className="h-5 w-5 text-violet-500" />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-7 bg-white cursor-default">
            <ChevronDown className="h-5 w-5 text-violet-500" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
