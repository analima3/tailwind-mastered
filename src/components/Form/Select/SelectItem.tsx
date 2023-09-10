'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="cursor-pointer flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700 dark:data-[highlighted]:text-zinc-100 dark:text-zinc-100"
      {...props}
    >
      <SelectPrimitive.ItemText className="text-zinc-300">
        {text}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
