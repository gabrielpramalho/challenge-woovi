'use client'

import * as Select from '@radix-ui/react-select'
import check from '@/assets/check.svg'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-woovi-green data-[highlighted]:text-white"
      {...props}
    >
      <Select.ItemText className="text-woovi-text">
        {text}
      </Select.ItemText>

      <Select.ItemIndicator>
        <img src={check} alt="Check" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
