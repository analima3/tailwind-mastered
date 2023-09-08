'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="cursor-pointer flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <SelectPrimitive.ItemText>{text}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
